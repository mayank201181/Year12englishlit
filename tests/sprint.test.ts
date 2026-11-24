import test from "node:test";
import assert from "node:assert/strict";
import {
  SPRINT_MODES,
  SPRINT_MODE_INFO,
  SPRINT_MODE_STRAND,
  isSprintMode,
  sprintAwardKey,
  sprintBestKey,
  sprintItem,
  sprintPool,
  sprintPoolSizes,
  sprintStars,
} from "../lib/sprint.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { checkAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";
import type { Drill } from "../lib/drills/types.ts";

function bankDrill(topicId: string, level: 1 | 2 | 3, slug = "terms", ibLevel?: "SL" | "HL"): Drill {
  const bank = [
    ["Poetic pause inside a line of verse?", "caesura"],
    ["Structural turn in a sonnet?", "volta"],
    ["Flashback in narrative structure?", "analepsis"],
    ["Physical spatial distance between actors on stage?", "proxemics"],
  ] as const;
  return {
    id: `${topicId}.${slug}`,
    topicId,
    title: "Fake Literature drill",
    level,
    ibLevel,
    generate(rng, tier) {
      assert.equal(tier, 1, "sprints always generate at tier 1");
      const [prompt, term] = rng.pick(bank);
      return { prompt: `${prompt} (${topicId})`, answer: { type: "text", accept: [term] }, solution: [term] };
    },
  };
}

function numberDrill(topicId: string): Drill {
  return {
    id: `${topicId}.limits`,
    topicId,
    title: "Fake exam-limit drill",
    level: 1,
    generate(rng) {
      const m = rng.int(1, 3);
      return {
        prompt: `How many lines across ${m} maximum-length IO extract(s) (40 lines each)?`,
        answer: { type: "number", value: m * 40, tolerance: 0 },
        solution: [`${m} × 40 = ${m * 40}`],
      };
    },
  };
}

const firstTopic = (strand: string) => TOPIC_META.find((t) => t.strand === strand)!.id;

test("modes are IB Literature strands plus mixed, with info and storage keys", () => {
  assert.deepEqual([...SPRINT_MODES], ["aoe", "forms", "concepts", "exam", "mixed"]);
  for (const m of SPRINT_MODES) {
    assert.ok(isSprintMode(m));
    assert.ok(SPRINT_MODE_INFO[m].label && SPRINT_MODE_INFO[m].icon);
    assert.equal(sprintBestKey(m), `sprint:${m}`);
    assert.equal(sprintAwardKey(m, "2026-01-02"), `sprint:2026-01-02:${m}`);
  }
  for (const strand of Object.values(SPRINT_MODE_STRAND)) assert.ok(TOPIC_META.some((t) => t.strand === strand), strand);
  assert.ok(!isSprintMode("paper3"));
  assert.ok(!isSprintMode(undefined));
});

test("stars: 1 per 5 correct, capped at 5", () => {
  assert.deepEqual([0, 4, 5, 12, 25, 99].map(sprintStars), [0, 0, 1, 2, 5, 5]);
});

test("no drills: every pool is empty and sprintItem returns null", () => {
  const sizes = sprintPoolSizes([]);
  for (const m of SPRINT_MODES) assert.equal(sizes[m], 0);
  assert.equal(sprintItem([], makeRng(1)), null);
});

test("pools: strand modes take their strand's level 1–2 drills; SL hides HL drills", () => {
  const tA = firstTopic("Areas of Exploration");
  const tF = firstTopic("Literary Forms");
  const drills = [
    bankDrill(tA, 1, "sl", "SL"),
    bankDrill(tA, 2, "hl", "HL"),
    bankDrill(tA, 3, "hard", "SL"),
    bankDrill(tF, 2, "f", "SL"),
    bankDrill("not-a-topic", 1),
  ];
  assert.deepEqual(sprintPool("aoe", drills, "HL").map((d) => d.id), [`${tA}.sl`, `${tA}.hl`]);
  assert.deepEqual(sprintPool("aoe", drills, "SL").map((d) => d.id), [`${tA}.sl`]);
  assert.deepEqual(sprintPool("forms", drills, "HL").map((d) => d.id), [`${tF}.f`]);
  assert.deepEqual(sprintPool("mixed", drills, "SL").map((d) => d.id).sort(), [`${tA}.sl`, `${tF}.f`].sort());
});

test("items carry a checkable answer, preserve tolerance, and display the correct answer", () => {
  const tA = firstTopic("Areas of Exploration");
  const pool = sprintPool("aoe", [numberDrill(tA)], "HL");
  const rng = makeRng(42);
  for (let i = 0; i < 30; i++) {
    const it = sprintItem(pool, rng)!;
    assert.ok(it && it.prompt && it.answerText);
    assert.equal(checkAnswer(it.answer, it.answerText).status, "correct", it.answerText);
  }
});

test("a drill that throws is skipped, not fatal", () => {
  const tA = firstTopic("Areas of Exploration");
  const broken: Drill = {
    id: `${tA}.broken`,
    topicId: tA,
    title: "Broken",
    level: 1,
    generate() {
      throw new Error("boom");
    },
  };
  assert.equal(sprintItem([broken], makeRng(1)), null);
  const ok = sprintItem([broken, bankDrill(tA, 1)], makeRng(2));
  assert.ok(ok && ok.answerText);
});
