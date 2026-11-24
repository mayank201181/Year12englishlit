"use client";
// ---------------------------------------------------------------------------
// Interactive explorables for Topic 6: The 7 Central Concepts & Global Issues
// IB Diploma English A: Literature (SL & HL, First Assessment 2021)
// ---------------------------------------------------------------------------
import { useMemo, useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type FieldKey = "f1" | "f2" | "f3" | "f4" | "f5";

interface FieldBlueprint {
  key: FieldKey;
  shortLabel: string;
  fullTitle: string;
  vagueTheme: string;
  conceptAnchor: string;
  craftHook: string;
  // Indexed by `${mech ? 1 : 0}${trans ? 1 : 0}${local ? 1 : 0}`
  statements: Record<string, string>;
}

const FIELD_BLUEPRINTS: Record<FieldKey, FieldBlueprint> = {
  f1: {
    key: "f1",
    shortLabel: "F1 Culture",
    fullTitle: "Field 1: Culture, identity & community",
    vagueTheme: "Migration and identity",
    conceptAnchor: "Identity & Culture",
    craftHook: "untranslated idioms, code-switching, fractured domestic dialogue",
    statements: {
      "000": "Migration policies in 1950s Britain affecting national demographics.",
      "100": "How post-1948 British municipal housing bylaws reshaped migrant integration policy.",
      "010": "Migration, cultural identity, and demographic change across the modern world.",
      "001": "How a 1950s London family argues over moving houses.",
      "110": "How linguistic assimilation policies alter macro-level diaspora demographics worldwide.",
      "101": "How post-1950s London English-only norms create silence between immigrant parents and children.",
      "011": "How migration affects everyday family conversations across different cultures.",
      "111": "How generational language loss within migrant families erodes emotional intimacy and cultural belonging in everyday domestic life.",
    },
  },
  f2: {
    key: "f2",
    shortLabel: "F2 Beliefs",
    fullTitle: "Field 2: Beliefs, values & education",
    vagueTheme: "Education and morality",
    conceptAnchor: "Perspective & Communication",
    craftHook: "didactic imperatives, ironic pious diction, suppressed interior monologue",
    statements: {
      "000": "Victorian British boarding-school statutes in 1870s England.",
      "100": "How 1870s English Education Acts enforced uniform religious curricula across dioceses.",
      "010": "Beliefs, values, morality, and education across human history.",
      "001": "How one strict headmaster in 1870s Yorkshire scolds pupils during morning assembly.",
      "110": "How institutionalised schooling philosophies standardise ideological frameworks globally.",
      "101": "How Victorian English moral schooling pressures young women into silencing personal doubt at home.",
      "011": "How schooling and beliefs shape young people's daily lives around the world.",
      "111": "How rigid moral and educational conformity pressures young individuals into concealing honest doubt within everyday classrooms and homes.",
    },
  },
  f3: {
    key: "f3",
    shortLabel: "F3 Politics",
    fullTitle: "Field 3: Politics, power & justice",
    vagueTheme: "Power and censorship",
    conceptAnchor: "Communication & Representation",
    craftHook: "bureaucratic euphemisms, stage silences, overheard whispers, dramatic irony",
    statements: {
      "000": "1936 municipal censorship decrees in Granada, Spain.",
      "100": "How 1930s Soviet publishing-house statutes regulated national press output.",
      "010": "Politics, state power, authoritarianism, and justice worldwide.",
      "001": "How neighbours in 1937 Moscow whisper carefully in one apartment corridor.",
      "110": "How authoritarian surveillance legislation alters sovereign judicial governance globally.",
      "101": "How 1930s European state informants erode candid speech around family dinner tables.",
      "011": "How government power affects ordinary citizens in everyday life across nations.",
      "111": "How institutional surveillance and state censorship coerce ordinary citizens into coded self-silencing inside everyday homes and neighbourhoods.",
    },
  },
  f4: {
    key: "f4",
    shortLabel: "F4 Art",
    fullTitle: "Field 4: Art, creativity & imagination",
    vagueTheme: "Art and storytelling",
    conceptAnchor: "Creativity & Representation",
    craftHook: "metafictional framing, poetic refrains, motifs of memory and voice",
    statements: {
      "000": "1920s Parisian salon patronage disputes in post-war France.",
      "100": "How nineteenth-century French academy exhibitions controlled commercial art markets.",
      "010": "Art, beauty, creativity, and human imagination across literature.",
      "001": "How a 1920s Paris painter struggles to pay studio rent each winter.",
      "110": "How global publishing conglomerates commodify aesthetic innovation across international markets.",
      "101": "How 1920s Parisian commercial patronage forces painters to compromise personal vision in daily studio work.",
      "011": "How storytelling and art matter in everyday human life across cultures.",
      "111": "How marginalised artists deploy subversive storytelling to preserve suppressed collective memory within everyday spaces of exile or censorship.",
    },
  },
  f5: {
    key: "f5",
    shortLabel: "F5 Science",
    fullTitle: "Field 5: Science, technology & the environment",
    vagueTheme: "Industry and nature",
    conceptAnchor: "Transformation & Representation",
    craftHook: "colliding mechanical vs pastoral semantic fields, spatial claustrophobia",
    statements: {
      "000": "Coal-mine pit closures in 1984 Yorkshire, England.",
      "100": "How nineteenth-century Manchester textile-mill effluent regulations affected British rivers.",
      "010": "Science, industrialisation, technology, and environmental change globally.",
      "001": "How one 1890s Lancashire villager dislikes soot settling on kitchen windowsills.",
      "110": "How transnational carbon-derivative markets alter multilateral climate treaty targets.",
      "101": "How 1980s Yorkshire industrial decline strips local townspeople of ancestral attachment to land.",
      "011": "How environmental damage affects ordinary communities around the world.",
      "111": "How extractive industrial development erodes rural communities' ancestral attachment to land and dignity in everyday working life.",
    },
  },
};

function GlobalIssueFunnelWidget() {
  const [field, setField] = useState<FieldKey>("f3");
  const [hasMechanism, setHasMechanism] = useState(false);
  const [isTransnational, setIsTransnational] = useState(false);
  const [hasLocalImpact, setHasLocalImpact] = useState(false);

  const bp = FIELD_BLUEPRINTS[field];
  const key = `${hasMechanism ? 1 : 0}${isTransnational ? 1 : 0}${hasLocalImpact ? 1 : 0}`;
  const currentStatement = bp.statements[key];
  const passedCount = (hasMechanism ? 1 : 0) + (isTransnational ? 1 : 0) + (hasLocalImpact ? 1 : 0);

  const readiness = useMemo(() => {
    if (passedCount === 3) {
      return {
        band: "Band 5 (9–10)",
        tone: "good" as const,
        pct: 100,
        diagnosis:
          "All 3 IB Global Issue properties pass! This formulation is wide-scale, transnational, rooted in everyday local spaces, and immediately points Criterion B toward concrete authorial craft.",
      };
    }
    if (passedCount === 2) {
      const missing = !hasMechanism
        ? "a sharp causal mechanism (currently too broad/generic)"
        : !isTransnational
          ? "transnational reach (remove the single country, city, or era lock-in!)"
          : "everyday local impact (pass the Kitchen-Table Test — ground abstract policy in daily life!)";
      return {
        band: "Band 3–4 (6–7)",
        tone: "brand" as const,
        pct: 68,
        diagnosis: `Almost ready, but still missing ${missing}. Switch on the final gate to unlock Band 5 readiness.`,
      };
    }
    if (passedCount === 1) {
      return {
        band: "Band 2 (3–4)",
        tone: "bad" as const,
        pct: 36,
        diagnosis:
          "Two IB gates still fail — an examiner will flag this as too vague, locked inside one nation/era, or detached from daily human experience.",
      };
    }
    return {
      band: "Band 1 (1–2)",
      tone: "bad" as const,
      pct: 14,
      diagnosis:
        "Zero gates passed: trapped in a single dated historical event with neither transnational transferability nor everyday literary intimacy.",
    };
  }, [hasMechanism, isTransnational, passedCount]);

  return (
    <WidgetFrame
      title="Global Issue Narrowing Funnel (3 Mandatory IB Gates)"
      tryThis={[
        "Start on **Field 3 (Politics)** with all 3 gates OFF, then flip one gate at a time and watch how the phrasing transforms.",
        "Test what happens when you have **Mechanism + Local** ON but **Transnational** OFF — spot the single-country trap!",
        "Switch across all 5 Fields of Inquiry to compare the exact **Criterion B craft hooks** unlocked at Band 5.",
      ]}
      caption={
        <div className="space-y-1.5">
          <div>
            <strong>Examiner Diagnostic ({readiness.band}):</strong> {readiness.diagnosis}
          </div>
          {passedCount === 3 ? (
            <div className="text-ink-2">
              <strong>Recommended Concept Anchor:</strong> {bp.conceptAnchor} ·{" "}
              <strong>Target ≤40-Line Craft Hooks:</strong> {bp.craftHook}.
            </div>
          ) : null}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<FieldKey>
            label="Select IB Field of Inquiry"
            value={field}
            onChange={setField}
            options={[
              { value: "f1", label: "F1 Culture" },
              { value: "f2", label: "F2 Beliefs" },
              { value: "f3", label: "F3 Politics" },
              { value: "f4", label: "F4 Art" },
              { value: "f5", label: "F5 Science" },
            ]}
          />
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => {
                setHasMechanism(false);
                setIsTransnational(false);
                setHasLocalImpact(false);
              }}
              className="rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-bold text-ink-2 hover:text-ink"
            >
              Reset All Off
            </button>
            <button
              type="button"
              onClick={() => {
                setHasMechanism(true);
                setIsTransnational(true);
                setHasLocalImpact(true);
              }}
              className="rounded-lg bg-brand px-2.5 py-1 text-xs font-bold text-brand-ink"
            >
              Pass All 3 Gates
            </button>
          </div>
        </div>

        {/* Interactive Gate Toggles */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <button
            type="button"
            aria-pressed={hasMechanism}
            onClick={() => setHasMechanism((v) => !v)}
            className={`rounded-xl border p-3 text-left transition ${
              hasMechanism
                ? "border-good bg-good-soft text-ink"
                : "border-line bg-surface-2 text-ink-2 hover:border-brand"
            }`}
          >
            <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wide">
              <span>Gate 1 · Wide-Scale</span>
              <span className={hasMechanism ? "text-good" : "text-bad"}>{hasMechanism ? "PASS ✓" : "FAIL ✕"}</span>
            </div>
            <div className="mt-1 text-xs leading-snug">
              Isolate a specific social mechanism (not a vague buzzword).
            </div>
          </button>

          <button
            type="button"
            aria-pressed={isTransnational}
            onClick={() => setIsTransnational((v) => !v)}
            className={`rounded-xl border p-3 text-left transition ${
              isTransnational
                ? "border-good bg-good-soft text-ink"
                : "border-line bg-surface-2 text-ink-2 hover:border-brand"
            }`}
          >
            <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wide">
              <span>Gate 2 · Transnational</span>
              <span className={isTransnational ? "text-good" : "text-bad"}>{isTransnational ? "PASS ✓" : "FAIL ✕"}</span>
            </div>
            <div className="mt-1 text-xs leading-snug">
              Remove single-country, city, or dated historical lock-in.
            </div>
          </button>

          <button
            type="button"
            aria-pressed={hasLocalImpact}
            onClick={() => setHasLocalImpact((v) => !v)}
            className={`rounded-xl border p-3 text-left transition ${
              hasLocalImpact
                ? "border-good bg-good-soft text-ink"
                : "border-line bg-surface-2 text-ink-2 hover:border-brand"
            }`}
          >
            <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wide">
              <span>Gate 3 · Everyday Local</span>
              <span className={hasLocalImpact ? "text-good" : "text-bad"}>{hasLocalImpact ? "PASS ✓" : "FAIL ✕"}</span>
            </div>
            <div className="mt-1 text-xs leading-snug">
              Ground impact in homes, speech, classrooms, or daily life.
            </div>
          </button>
        </div>

        {/* Live Funnel SVG + Readiness Readouts */}
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <svg
              viewBox="0 0 420 220"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={`Interactive Global Issue narrowing funnel with ${passedCount} of 3 IB gates passed`}
              className="h-auto w-full rounded-xl bg-surface-2"
            >
              <polygon
                points="24,18 396,18 372,56 48,56"
                fill="var(--surface)"
                stroke="var(--line)"
                strokeWidth={2}
              />
              <text x="210" y="34" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--ink-2)">
                STARTING SPRINGBOARD
              </text>
              <text x="210" y="49" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink)">
                {bp.fullTitle}
              </text>

              <polygon
                points="52,64 368,64 344,102 76,102"
                fill={hasMechanism ? "var(--good-soft)" : "var(--surface)"}
                stroke={hasMechanism ? "var(--good)" : "var(--bad)"}
                strokeWidth={2}
              />
              <text x="210" y="81" textAnchor="middle" fontSize="10" fontWeight="800" fill={hasMechanism ? "var(--good)" : "var(--bad)"}>
                GATE 1: WIDE-SCALE MECHANISM {hasMechanism ? "✓" : "✕"}
              </text>
              <text x="210" y="95" textAnchor="middle" fontSize="10" fill="var(--ink-2)">
                {hasMechanism ? "Active tension replaces vague theme" : `Stuck near vague/locked "${bp.vagueTheme}"`}
              </text>

              <polygon
                points="80,110 340,110 316,148 104,148"
                fill={isTransnational ? "var(--good-soft)" : "var(--surface)"}
                stroke={isTransnational ? "var(--good)" : "var(--bad)"}
                strokeWidth={2}
              />
              <text x="210" y="127" textAnchor="middle" fontSize="10" fontWeight="800" fill={isTransnational ? "var(--good)" : "var(--bad)"}>
                GATE 2: TRANSNATIONAL REACH {isTransnational ? "✓" : "✕"}
              </text>
              <text x="210" y="141" textAnchor="middle" fontSize="10" fill="var(--ink-2)">
                {isTransnational ? "Crosses continents, languages & eras" : "Fenced to one country, city, or year"}
              </text>

              <polygon
                points="108,156 312,156 292,202 128,202"
                fill={passedCount === 3 ? "var(--brand)" : hasLocalImpact ? "var(--good-soft)" : "var(--surface)"}
                stroke={passedCount === 3 ? "var(--brand)" : hasLocalImpact ? "var(--good)" : "var(--bad)"}
                strokeWidth={2}
              />
              <text
                x="210"
                y="176"
                textAnchor="middle"
                fontSize="10.5"
                fontWeight="800"
                fill={passedCount === 3 ? "var(--brand-ink)" : hasLocalImpact ? "var(--good)" : "var(--bad)"}
              >
                {passedCount === 3 ? "BAND-5 IO GLOBAL ISSUE ✓" : `GATE 3: EVERYDAY LOCAL ${hasLocalImpact ? "✓" : "✕"}`}
              </text>
              <text
                x="210"
                y="192"
                textAnchor="middle"
                fontSize="9.5"
                fill={passedCount === 3 ? "var(--brand-ink)" : "var(--ink-2)"}
              >
                {passedCount === 3
                  ? "Ready for 1 English + 1 Translated work"
                  : hasLocalImpact
                    ? "Daily texture present — finish other gates!"
                    : "Detached from intimate daily human life"}
              </text>
            </svg>
          </div>

          <div className="space-y-2.5 md:col-span-5">
            <Readout label="IB Gates Passed" value={`${passedCount} / 3`} tone={readiness.tone} />
            <Readout label="Criterion A / C Readiness" value={readiness.band} tone={readiness.tone} />
            <div className="rounded-xl border border-line bg-surface p-3">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wide text-ink-2">
                <span>Sharpness Meter</span>
                <span className="tabular-nums text-ink">{readiness.pct}%</span>
              </div>
              <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
                <div
                  className={`h-full rounded-full transition-all ${
                    passedCount === 3 ? "bg-good" : passedCount === 2 ? "bg-brand" : "bg-bad"
                  }`}
                  style={{ width: `${readiness.pct}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Live Statement Preview */}
        <div
          className={`rounded-xl border-2 p-3.5 ${
            passedCount === 3 ? "border-good bg-good-soft/50" : "border-line bg-surface"
          }`}
        >
          <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
            Live Candidate Global Issue Statement
          </div>
          <p className="mt-1 text-base font-bold leading-snug text-ink">“{currentStatement}”</p>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// WIDGET 2: Individual Oral 10-Minute Pacing & Balance Planner
// ===========================================================================
function fmtMinSec(mins: number): string {
  const totalSec = Math.round(mins * 60);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

interface TimelineSegment {
  id: string;
  label: string;
  mins: number;
  start: number;
  end: number;
  fill: string;
}

function IoPacingPlannerWidget() {
  const [intro, setIntro] = useState(0.75);
  const [w1Ext, setW1Ext] = useState(2.5);
  const [w1Whole, setW1Whole] = useState(1.75);
  const [w2Ext, setW2Ext] = useState(2.5);
  const [w2Whole, setW2Whole] = useState(1.75);
  const [synth, setSynth] = useState(0.75);

  // Compliance & Non-Overlap state
  const [level, setLevel] = useState<"SL" | "HL">("SL");
  const [lines1, setLines1] = useState(36);
  const [lines2, setLines2] = useState(38);
  const [bullets, setBullets] = useState(10);
  const [overlapP2, setOverlapP2] = useState(false);
  const [overlapHle, setOverlapHle] = useState(false);

  const metrics = useMemo(() => {
    const w1Total = +(w1Ext + w1Whole).toFixed(2);
    const w2Total = +(w2Ext + w2Whole).toFixed(2);
    const bodyTotal = +(w1Total + w2Total).toFixed(2);
    const total = +(intro + bodyTotal + synth).toFixed(2);
    const w1Pct = bodyTotal > 0 ? Math.round((w1Total / bodyTotal) * 100) : 50;
    const w2Pct = 100 - w1Pct;
    const extTotal = +(w1Ext + w2Ext).toFixed(2);
    const extShare = bodyTotal > 0 ? Math.round((extTotal / bodyTotal) * 100) : 50;

    const rawSegments: Array<{ id: string; label: string; mins: number; fill: string }> = [
      { id: "intro", label: "Intro", mins: intro, fill: "var(--s-algebra)" },
      { id: "w1e", label: "W1 Ext", mins: w1Ext, fill: "var(--brand)" },
      { id: "w1w", label: "W1 Whole", mins: w1Whole, fill: "var(--brand-2)" },
      { id: "w2e", label: "W2 Ext", mins: w2Ext, fill: "var(--s-ratio)" },
      { id: "w2w", label: "W2 Whole", mins: w2Whole, fill: "var(--info)" },
      { id: "synth", label: "End", mins: synth, fill: "var(--s-algebra)" },
    ];

    const segments = rawSegments.reduce<TimelineSegment[]>((acc, seg) => {
      const start = acc.length > 0 ? acc[acc.length - 1].end : 0;
      const end = +(start + seg.mins).toFixed(4);
      return [...acc, { ...seg, start, end }];
    }, []);

    const warnings: string[] = [];
    if (total > 10.0) warnings.push(`Over 10:00 ceiling by ${fmtMinSec(total - 10)} — examiner stops prepared talk at 10:00!`);
    if (total < 9.0) warnings.push(`Under 9:00 (${fmtMinSec(total)}) — leaving substantial analytical depth unused.`);
    if (Math.abs(w1Pct - 50) > 8) {
      warnings.push(`Work imbalance (${w1Pct}% Work 1 vs ${w2Pct}% Work 2) — aim for 45/55 to 55/45 for Band 5 Criterion C.`);
    }
    if (w1Whole < 1.0 || w2Whole < 1.0) {
      warnings.push("Extract-heavy trap: at least one whole-work zoom-out is under 1:00, capping Criteria A & B.");
    }
    if (w1Ext < 1.5 || w2Ext < 1.5) {
      warnings.push("Whole-work drift: at least one ≤40-line extract gets under 1:30 of micro close-reading.");
    }
    if (intro > 1.25) warnings.push("Bloated opening (>1:15): cut author biography and launch straight into the narrowed Global Issue.");
    if (synth < 0.5) warnings.push("Rushed closing (<0:30): reserve ~0:45 for a crisp conceptual synthesis linking both forms.");

    const complianceErrors: string[] = [];
    if (lines1 > 40) complianceErrors.push(`Work 1 extract (${lines1} lines) breaches the 40-line IB maximum by ${lines1 - 40} lines!`);
    if (lines2 > 40) complianceErrors.push(`Work 2 extract (${lines2} lines) breaches the 40-line IB maximum by ${lines2 - 40} lines!`);
    if (bullets > 10) complianceErrors.push(`Outline has ${bullets} bullet points — cut ${bullets - 10} to obey the 10-bullet IB ceiling!`);
    if (overlapP2) complianceErrors.push("NON-OVERLAP BREACH: Neither IO work may ever be reused in Paper 2!");
    if (level === "HL" && overlapHle) {
      complianceErrors.push("NON-OVERLAP BREACH [HL]: Neither IO work may ever be reused for the HL Essay!");
    }

    const totalIssues = warnings.length + complianceErrors.length;
    const band =
      complianceErrors.length > 0
        ? "Compliance Breach!"
        : warnings.length === 0
          ? "Band 5 (9–10)"
          : warnings.length === 1
            ? "Band 4 (7–8)"
            : "Band 2–3 (4–6)";
    const bandTone: "good" | "brand" | "bad" =
      complianceErrors.length > 0 || warnings.length >= 2 ? "bad" : warnings.length === 0 ? "good" : "brand";

    return {
      w1Total,
      w2Total,
      total,
      w1Pct,
      w2Pct,
      extShare,
      segments,
      warnings,
      complianceErrors,
      totalIssues,
      band,
      bandTone,
    };
  }, [bullets, intro, level, lines1, lines2, overlapHle, overlapP2, synth, w1Ext, w1Whole, w2Ext, w2Whole]);

  const applyPreset = (preset: "balanced" | "overrun" | "extractOnly" | "wholeDrift") => {
    if (preset === "balanced") {
      setIntro(0.75);
      setW1Ext(2.5);
      setW1Whole(1.75);
      setW2Ext(2.5);
      setW2Whole(1.75);
      setSynth(0.75);
    } else if (preset === "overrun") {
      setIntro(1.0);
      setW1Ext(3.75);
      setW1Whole(2.25);
      setW2Ext(1.5);
      setW2Whole(1.0);
      setSynth(0.5);
    } else if (preset === "extractOnly") {
      setIntro(0.75);
      setW1Ext(3.75);
      setW1Whole(0.5);
      setW2Ext(3.75);
      setW2Whole(0.5);
      setSynth(0.75);
    } else {
      setIntro(0.75);
      setW1Ext(1.0);
      setW1Whole(3.25);
      setW2Ext(1.0);
      setW2Whole(3.25);
      setSynth(0.75);
    }
  };

  // Scale SVG bar across max(10, total) minutes inside x = [16..480] (464px wide), plus Q&A box [492..624]
  const barLeft = 16;
  const barWidth = 464;
  const scaleMax = Math.max(10, metrics.total);
  const toX = (m: number) => barLeft + (m / scaleMax) * barWidth;

  return (
    <WidgetFrame
      title="Individual Oral 10-Minute Pacing, Balance & Non-Overlap Planner"
      tryThis={[
        "Click **Work 1 Overrun** or **Extract-Only Trap** to see how a 10:00 total time can still lose Criterion A, B, and C marks!",
        "Drag the sliders back into the **Band 5 (9–10)** zone: ~45/55 to 55/45 work parity AND ≥1:30 extract + ≥1:15 whole work per text.",
        "Test the **Compliance & Non-Overlap Checker** below at SL vs HL — push an extract past 40 lines or toggle Paper 2 reuse!",
      ]}
      caption={
        metrics.totalIssues === 0 ? (
          <div>
            <strong className="text-good">Band-5 Ready ({level}):</strong> Clean {fmtMinSec(metrics.total)} talk + 5:00 Q&A,{" "}
            {metrics.w1Pct}/{metrics.w2Pct} work parity, {metrics.extShare}/{100 - metrics.extShare} extract-to-whole-work split, and 100% IB rule compliance (IO weight:{" "}
            {level === "SL" ? "30% of SL grade" : "20% of HL grade"}).
          </div>
        ) : (
          <ul className="space-y-1">
            {metrics.complianceErrors.map((err) => (
              <li key={err} className="font-bold text-bad">
                ⛔ {err}
              </li>
            ))}
            {metrics.warnings.map((w) => (
              <li key={w} className="text-ink">
                ⚠️ {w}
              </li>
            ))}
          </ul>
        )
      }
    >
      <div className="space-y-4">
        {/* Preset buttons */}
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => applyPreset("balanced")}
            className="rounded-lg bg-brand px-3 py-1.5 text-xs font-bold text-brand-ink"
          >
            Balanced Band 5
          </button>
          <button
            type="button"
            onClick={() => applyPreset("overrun")}
            className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-bold text-ink-2 hover:text-ink"
          >
            Work 1 Overrun
          </button>
          <button
            type="button"
            onClick={() => applyPreset("extractOnly")}
            className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-bold text-ink-2 hover:text-ink"
          >
            Extract-Only Trap
          </button>
          <button
            type="button"
            onClick={() => applyPreset("wholeDrift")}
            className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-bold text-ink-2 hover:text-ink"
          >
            Whole-Work Drift
          </button>
        </div>

        {/* Live Proportional SVG Timeline */}
        <svg
          viewBox="0 0 640 122"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`Individual Oral timeline totalling ${fmtMinSec(metrics.total)} prepared talk plus 5 minutes Q and A`}
          className="h-auto w-full rounded-xl bg-surface-2"
        >
          <text x={barLeft} y={20} fontSize="10" fontWeight="700" fill="var(--ink-2)">
            0:00
          </text>
          <line x1={toX(5)} y1={24} x2={toX(5)} y2={92} stroke="var(--ink-2)" strokeWidth={1.2} strokeDasharray="3 3" />
          <text x={toX(5)} y={20} textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink-2)">
            5:00 Halfway
          </text>
          <line
            x1={toX(10)}
            y1={24}
            x2={toX(10)}
            y2={96}
            stroke={metrics.total > 10 ? "var(--bad)" : "var(--brand)"}
            strokeWidth={2}
          />
          <text
            x={toX(10)}
            y={20}
            textAnchor="middle"
            fontSize="10"
            fontWeight="800"
            fill={metrics.total > 10 ? "var(--bad)" : "var(--brand)"}
          >
            10:00 Cap
          </text>

          {metrics.segments.map((seg) => {
            const x = toX(seg.start);
            const w = Math.max(2, toX(seg.end) - x - 2);
            return (
              <g key={seg.id}>
                <rect x={x} y={32} width={w} height={46} rx={5} fill={seg.fill} />
                {w >= 34 ? (
                  <>
                    <text x={x + w / 2} y={52} textAnchor="middle" fontSize="9.5" fontWeight="800" fill="var(--brand-ink)">
                      {seg.label}
                    </text>
                    <text x={x + w / 2} y={66} textAnchor="middle" fontSize="8.5" fill="var(--brand-ink)">
                      {fmtMinSec(seg.mins)}
                    </text>
                  </>
                ) : null}
              </g>
            );
          })}

          <rect
            x={492}
            y={32}
            width={132}
            height={46}
            rx={6}
            fill="var(--surface)"
            stroke="var(--s-geometry)"
            strokeWidth={2}
            strokeDasharray="4 3"
          />
          <text x={558} y={52} textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--s-geometry)">
            Teacher Q&amp;A
          </text>
          <text x={558} y={66} textAnchor="middle" fontSize="9" fill="var(--ink-2)">
            5:00 (live Crit A/B)
          </text>

          <text x={barLeft} y={108} fontSize="10" fontWeight="700" fill="var(--brand)">
            Work 1 (English): {fmtMinSec(metrics.w1Total)} ({metrics.w1Pct}%)
          </text>
          <text x={barLeft + 235} y={108} fontSize="10" fontWeight="700" fill="var(--s-ratio)">
            Work 2 (Translated): {fmtMinSec(metrics.w2Total)} ({metrics.w2Pct}%)
          </text>
          <text x={624} y={108} textAnchor="end" fontSize="10" fontWeight="800" fill={metrics.total > 10 ? "var(--bad)" : "var(--ink)"}>
            Talk: {fmtMinSec(metrics.total)}
          </text>
        </svg>

        {/* Readout Strip */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout
            label="Prepared Talk"
            value={fmtMinSec(metrics.total)}
            tone={metrics.total > 10 || metrics.total < 9 ? "bad" : "good"}
          />
          <Readout
            label="Work 1 / Work 2"
            value={`${metrics.w1Pct}/${metrics.w2Pct}`}
            tone={Math.abs(metrics.w1Pct - 50) <= 8 ? "good" : "bad"}
          />
          <Readout
            label="Extract / Whole"
            value={`${metrics.extShare}/${100 - metrics.extShare}`}
            tone={metrics.extShare >= 48 && metrics.extShare <= 70 ? "good" : "bad"}
          />
          <Readout label="Criterion C Forecast" value={metrics.band} tone={metrics.bandTone} />
        </div>

        {/* Interactive Sliders */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-3 rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
              Opening &amp; Work 1 (Original English)
            </div>
            <Slider
              label="Intro & Global Issue Framing"
              value={intro}
              min={0.25}
              max={2.25}
              step={0.25}
              onChange={setIntro}
              format={fmtMinSec}
            />
            <Slider
              label="Work 1 — ≤40-Line Extract"
              value={w1Ext}
              min={0.5}
              max={4.5}
              step={0.25}
              onChange={setW1Ext}
              format={fmtMinSec}
            />
            <Slider
              label="Work 1 — Whole Work Zoom-Out"
              value={w1Whole}
              min={0.25}
              max={3.75}
              step={0.25}
              onChange={setW1Whole}
              format={fmtMinSec}
            />
          </div>

          <div className="space-y-3 rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-s-ratio">
              Work 2 (Translated) &amp; Closing
            </div>
            <Slider
              label="Work 2 — ≤40-Line Extract"
              value={w2Ext}
              min={0.5}
              max={4.5}
              step={0.25}
              onChange={setW2Ext}
              format={fmtMinSec}
            />
            <Slider
              label="Work 2 — Whole Work Zoom-Out"
              value={w2Whole}
              min={0.25}
              max={3.75}
              step={0.25}
              onChange={setW2Whole}
              format={fmtMinSec}
            />
            <Slider
              label="Closing Conceptual Synthesis"
              value={synth}
              min={0.25}
              max={1.75}
              step={0.25}
              onChange={setSynth}
              format={fmtMinSec}
            />
          </div>
        </div>

        {/* Compliance & Non-Overlap Checker */}
        <div className="rounded-xl border border-line bg-surface-2 p-3.5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-ink">
              IB Compliance &amp; Non-Overlap Checker
            </span>
            <Segmented<"SL" | "HL">
              label="IB Diploma Level"
              value={level}
              onChange={setLevel}
              options={[
                { value: "SL", label: "SL (30% · 9 works)" },
                { value: "HL", label: "HL (20% · 13 works)" },
              ]}
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Stepper
              label="Work 1 Lines (≤40)"
              value={lines1}
              min={20}
              max={50}
              onChange={setLines1}
              format={(v) => <span className={v > 40 ? "text-bad" : "text-good"}>{v}</span>}
            />
            <Stepper
              label="Work 2 Lines (≤40)"
              value={lines2}
              min={20}
              max={50}
              onChange={setLines2}
              format={(v) => <span className={v > 40 ? "text-bad" : "text-good"}>{v}</span>}
            />
            <Stepper
              label="Outline Bullets (≤10)"
              value={bullets}
              min={5}
              max={15}
              onChange={setBullets}
              format={(v) => <span className={v > 10 ? "text-bad" : "text-good"}>{v}</span>}
            />
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            <button
              type="button"
              aria-pressed={overlapP2}
              onClick={() => setOverlapP2((v) => !v)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
                overlapP2 ? "border-bad bg-bad-soft text-bad" : "border-good bg-good-soft text-good"
              }`}
            >
              {overlapP2 ? "⛔ Reused in Paper 2 (BANNED)" : "✓ Distinct from Paper 2"}
            </button>
            {level === "HL" ? (
              <button
                type="button"
                aria-pressed={overlapHle}
                onClick={() => setOverlapHle((v) => !v)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
                  overlapHle ? "border-bad bg-bad-soft text-bad" : "border-good bg-good-soft text-good"
                }`}
              >
                {overlapHle ? "⛔ Reused in HL Essay (BANNED)" : "✓ Distinct from HL Essay"}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "global-issue-narrowing-funnel",
    title: "Global Issue Narrowing Funnel",
    blurb: "Switch on the 3 mandatory IB Global Issue properties across all 5 Fields of Inquiry and watch a vague topic sharpen into Band-5 readiness.",
    Component: GlobalIssueFunnelWidget,
  },
  {
    id: "io-pacing-balance-planner",
    title: "Individual Oral 10-Minute Pacing & Balance Planner",
    blurb: "Simulate your 10-minute talk split across Intro, Work 1 (English), Work 2 (Translated), Synthesis, extract line counts, and the IB non-overlap rule.",
    Component: IoPacingPlannerWidget,
  },
];

export default widgets;
