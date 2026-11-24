"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ===========================================================================
// Widget 1: Focalisation & Psychic-Distance Slider (John Gardner + Genette)
// ===========================================================================

interface ProseSegment {
  text: string;
  cue?: string;
}

interface DistanceLevel {
  level: 1 | 2 | 3 | 4 | 5;
  label: string;
  shortLabel: string;
  focalisation: string;
  voice: string;
  posture: string;
  segments: ProseSegment[];
  syntaxNote: string;
  criterionB: string;
}

interface SceneData {
  id: "ferry" | "letter";
  label: string;
  context: string;
  levels: readonly DistanceLevel[];
}

const SCENES: readonly SceneData[] = [
  {
    id: "ferry",
    label: "The Ferry Terminal",
    context: "A young architect arrives late at an empty coastal pier after an argument with her father.",
    levels: [
      {
        level: 1,
        label: "Level 1 — Distant Omniscient",
        shortLabel: "L1 Panoramic",
        focalisation: "Zero Focalisation",
        voice: "3rd-Person Omniscient",
        posture: "Panoramic Irony",
        segments: [
          { text: "In the wet November of 1994, ", cue: "Historical sweep" },
          { text: "the eastern harbour lost its last evening ferry service, and across the province " },
          { text: "hundreds of hurried travellers discovered too late ", cue: "Omniscient range" },
          { text: "how swiftly domestic quarrels could reshape a winter." },
        ],
        syntaxNote: "Wide chronological frame, abstract collective nouns ('hundreds of hurried travellers'), and sweeping past summary.",
        criterionB:
          "At Level 1 (zero focalisation), the narrator hovers far above any individual mind. In Paper 1 commentary, note how this panoramic distance frames personal crisis as part of a larger historical tide — and watch closely if the passage suddenly zooms inward from here.",
      },
      {
        level: 2,
        label: "Level 2 — Social / External Lens",
        shortLabel: "L2 External",
        focalisation: "External Focalisation",
        voice: "3rd-Person Camera-Eye",
        posture: "Clinical Observation",
        segments: [
          { text: "At nine minutes past eight, Clara stepped onto the rain-slick timber jetty, " },
          { text: "set her canvas satchel beside a rusted bollard, ", cue: "Observable gesture" },
          { text: "and stared across the dark channel where the ferry's stern lantern was already shrinking into fog.", cue: "Zero inner access" },
        ],
        syntaxNote: "Concrete physical verbs ('stepped', 'set', 'stared') with zero reporting verbs of thought or feeling.",
        criterionB:
          "External focalisation withholds Clara's private grief completely. Instead of telling us she feels regret, the camera-eye prose forces the reader to infer emotional isolation from the physical tableau of a shrinking lantern and dark channel.",
      },
      {
        level: 3,
        label: "Level 3 — Close Third (Internal)",
        shortLabel: "L3 Close 3rd",
        focalisation: "Fixed Internal",
        voice: "3rd-Person Limited",
        posture: "Guided Empathy",
        segments: [
          { text: "Clara watched the ferry's stern lantern dwindle into the mist and " },
          { text: "felt a sharp hollowness settle behind her ribs. ", cue: "Reporting tag ('felt')" },
          { text: "She wondered bitterly ", cue: "Mental verb ('wondered')" },
          { text: "whether her father was still standing beside the kitchen table waiting for an apology." },
        ],
        syntaxNote: "Explicit cognitive reporting tags ('felt', 'wondered bitterly') act as a visible narrator bridge into Clara's thoughts.",
        criterionB:
          "Close third-person internal focalisation grants direct access to Clara's consciousness while keeping a clear boundary between narrator and character through mental tags ('felt', 'wondered'). Notice how the narrator still organises her emotion neatly.",
      },
      {
        level: 4,
        label: "Level 4 — Free Indirect Discourse",
        shortLabel: "L4 FID",
        focalisation: "Internal (Double-Voiced)",
        voice: "3rd-Person + Character Idiom",
        posture: "Empathy + Ironic Distance",
        segments: [
          { text: "The stern lantern was already half-swallowed by fog. " },
          { text: "Honestly, ", cue: "Character exclamation" },
          { text: "how could the harbourmaster pull the gangplank four minutes early ", cue: "Unquoted question" },
          { text: "on a night like this? ", cue: "Proximal deictic ('this')" },
          { text: "Surely ", cue: "Subjective modal" },
          { text: "her father would realise by tomorrow that she had never meant half of what she shouted." },
        ],
        syntaxNote: "Reporting verbs vanish! Third-person past tense fuses with spoken idiom ('Honestly'), unquoted question, modal ('Surely'), and proximal deixis ('this', 'tomorrow').",
        criterionB:
          "This is textbook **free indirect discourse**: two voices occupy one grammatical frame. We feel Clara's defensive rush from inside while still hearing a faint ironic gap — she blames the ferryman and consoles herself with 'Surely', evading full accountability.",
      },
      {
        level: 5,
        label: "Level 5 — First-Person Stream",
        shortLabel: "L5 Stream",
        focalisation: "Unfiltered Interiority",
        voice: "1st-Person Interior Flux",
        posture: "Raw Immersion",
        segments: [
          { text: "Gone — red tail-light smudged in salt — ", cue: "Sensory fragment" },
          { text: "my coat soaked straight through the cuffs, ", cue: "1st-person immediacy" },
          { text: "why didn't I just put the keys back on the hall shelf, ", cue: "Associative jump" },
          { text: "three chimes from the breakwater — no, four — breathe, count the wet planks, walk back up the hill now.", cue: "Self-command flux" },
        ],
        syntaxNote: "Fractured parataxis, dashes, sensory leaps, self-correction ('three... no, four'), and unmediated first-person panic.",
        criterionB:
          "At Level 5, narratorial framing evaporates entirely into **stream of consciousness**. Jagged syntax mimics psychological overwhelm: instead of describing regret neatly, broken dashes and compulsive counting *enact* a mind struggling for control.",
      },
    ],
  },
  {
    id: "letter",
    label: "The Conservatory Letter",
    context: "A young pianist opens a scholarship rejection letter alone in an apartment kitchen.",
    levels: [
      {
        level: 1,
        label: "Level 1 — Distant Omniscient",
        shortLabel: "L1 Panoramic",
        focalisation: "Zero Focalisation",
        voice: "3rd-Person Omniscient",
        posture: "Cool Irony",
        segments: [
          { text: "Every spring, ", cue: "Generalising sweep" },
          { text: "European conservatories posted three hundred polite refusals across the continent, and " },
          { text: "scarcely one recipient recognised ", cue: "Omniscient verdict" },
          { text: "how closely disappointment resembled liberation ten years afterward." },
        ],
        syntaxNote: "Sweeping temporal generality ('Every spring') and proleptic omniscient wisdom spanning ten years.",
        criterionB:
          "Zero focalisation dissolves individual pain into statistical pattern. The narrator's detached foresight ('ten years afterward') introduces philosophical distance that buffers the reader from immediate shock.",
      },
      {
        level: 2,
        label: "Level 2 — Social / External Lens",
        shortLabel: "L2 External",
        focalisation: "External Focalisation",
        voice: "3rd-Person Camera-Eye",
        posture: "Restrained Enigma",
        segments: [
          { text: "Dev slit the cream envelope with a butter knife, " },
          { text: "read four typed lines without moving his mouth, ", cue: "External surface" },
          { text: "and folded the sheet into exact quarters beside the cold teapot.", cue: "Silent gesture" },
        ],
        syntaxNote: "Zero adjectives of emotion; meaning emerges purely from controlled physical precision ('exact quarters', 'cold teapot').",
        criterionB:
          "Camera-eye external focalisation builds piercing understatement: folding the letter into 'exact quarters' beside a 'cold teapot' communicates shock and fragile self-control far more powerfully than stating 'Dev felt devastated'.",
      },
      {
        level: 3,
        label: "Level 3 — Close Third (Internal)",
        shortLabel: "L3 Close 3rd",
        focalisation: "Fixed Internal",
        voice: "3rd-Person Limited",
        posture: "Sympathetic Intimacy",
        segments: [
          { text: "Dev read the polite Vienna letterhead and " },
          { text: "realised his wrists had gone numb. ", cue: "Mental tag ('realised')" },
          { text: "He dreaded telling his mother, ", cue: "Emotion tag ('dreaded')" },
          { text: "who had worked double shifts all winter to pay for the audition recording." },
        ],
        syntaxNote: "Clear internal tags ('realised', 'dreaded') anchor perception strictly inside Dev's guilt and bodily shock.",
        criterionB:
          "Fixed internal focalisation narrows the lens onto private filial guilt. While the narrator's grammar stays composed, access to Dev's memory of his mother's double shifts deepens emotional stakes.",
      },
      {
        level: 4,
        label: "Level 4 — Free Indirect Discourse",
        shortLabel: "L4 FID",
        focalisation: "Internal (Double-Voiced)",
        voice: "3rd-Person + Character Idiom",
        posture: "Intimate Irony",
        segments: [
          { text: "Dev folded the stiff cream page twice. " },
          { text: "Really, ", cue: "Spoken marker" },
          { text: "who on earth expected a scholarship to Vienna on a damp Tuesday in November? ", cue: "Self-protective question" },
          { text: "Obviously ", cue: "Defensive modal" },
          { text: "the panel preferred conservatory prodigies with French surnames; besides, ", cue: "Character rationalisation" },
          { text: "now he would never have to pack up his upright piano." },
        ],
        syntaxNote: "Unquoted defensive question + modals ('Really', 'Obviously', 'besides') + proximal deictic 'now' inside past tense ('would').",
        criterionB:
          "Free indirect discourse lets us hear Dev constructing a fragile defensive armour in real time. The sarcastic swipe at 'French surnames' and 'Obviously' invites simultaneous compassion for his hurt and critical awareness of his rationalisation.",
      },
      {
        level: 5,
        label: "Level 5 — First-Person Stream",
        shortLabel: "L5 Stream",
        focalisation: "Unfiltered Interiority",
        voice: "1st-Person Interior Flux",
        posture: "Immediate Overwhelm",
        segments: [
          { text: "Regret to inform — stiff paper cutting my thumb — ", cue: "Fragmented perception" },
          { text: "kettle clicking off, loud in here, too loud — ", cue: "Sensory overload" },
          { text: "bar forty-two in the Chopin, I rushed the left hand, I knew it — ", cue: "Intrusive memory" },
          { text: "fold it flat, put it under the fruit bowl before she gets home.", cue: "Urgent self-address" },
        ],
        syntaxNote: "Compressed noun phrases, sensory intrusion (the kettle), abrupt recall of an audition slip, and raw first-person urgency.",
        criterionB:
          "Level 5 stream of consciousness collapses external narration into associative cognitive rush. Splicing the letter's cold formula ('Regret to inform') with a sudden flashback to bar forty-two enacts obsessive self-blame without commentary.",
      },
    ],
  },
];

function PsychicDistanceWidget() {
  const [sceneId, setSceneId] = useState<"ferry" | "letter">("ferry");
  const [levelNum, setLevelNum] = useState<number>(4);
  const [showCues, setShowCues] = useState<boolean>(true);

  const scene = SCENES.find((s) => s.id === sceneId) ?? SCENES[0];
  const current = scene.levels[Math.max(0, Math.min(4, levelNum - 1))];

  const railX = [56, 158, 260, 362, 464];
  const activeX = railX[current.level - 1];

  return (
    <WidgetFrame
      title="Focalisation & Psychic-Distance Slider"
      tryThis={[
        "Slide from **Level 3** to **Level 4** and watch the reporting verbs (*felt, wondered, realised*) vanish while character idiom hijacks the third-person sentence.",
        "Jump straight from **Level 4** to **Level 1** to experience how an abrupt zoom-out creates chilling ironic detachment.",
      ]}
      caption={
        <div className="space-y-1.5">
          <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
            IB Criterion B Examiner Commentary ({current.label})
          </div>
          <p>{current.criterionB}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Choose prose scene"
            value={sceneId}
            onChange={setSceneId}
            options={SCENES.map((s) => ({ value: s.id, label: s.label }))}
          />
          <button
            type="button"
            onClick={() => setShowCues((v) => !v)}
            className={`btn btn-sm ${showCues ? "btn-primary" : "btn-secondary"}`}
          >
            {showCues ? "Syntactic Cues: ON" : "Syntactic Cues: OFF"}
          </button>
        </div>

        <p className="text-xs text-ink-2">
          <strong className="text-ink">Same scene:</strong> {scene.context}
        </p>

        <Slider
          label="Psychic Distance (John Gardner Scale)"
          value={levelNum}
          min={1}
          max={5}
          step={1}
          onChange={setLevelNum}
          format={(v) => `Level ${v} — ${scene.levels[v - 1].shortLabel.replace(/^L\d\s*/, "")}`}
        />

        {/* Interactive SVG Narrative Camera Rail */}
        <div className="rounded-xl border border-line bg-surface-2 p-2.5">
          <svg
            viewBox="0 0 520 96"
            className="h-auto w-full"
            role="img"
            aria-label={`Narrative camera positioned at ${current.label}, showing movement from panoramic overview toward interior consciousness`}
          >
            <text x="56" y="16" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-ink-2">
              WIDE ORBIT
            </text>
            <text x="464" y="16" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-brand">
              INSIDE THE MIND
            </text>

            <line x1="56" y1="46" x2="464" y2="46" className="stroke-line" strokeWidth="5" strokeLinecap="round" />
            <line
              x1="56"
              y1="46"
              x2={activeX}
              y2="46"
              className="stroke-brand"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {railX.map((x, idx) => {
              const lvl = idx + 1;
              const isCurrent = lvl === current.level;
              const isPassed = lvl <= current.level;
              return (
                <g
                  key={lvl}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select ${scene.levels[idx].label}`}
                  onClick={() => setLevelNum(lvl)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLevelNum(lvl);
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    cx={x}
                    cy={46}
                    r={isCurrent ? 14 : 9}
                    className={isCurrent ? "fill-brand" : isPassed ? "fill-surface stroke-brand" : "fill-surface stroke-line"}
                    strokeWidth={isCurrent ? 0 : 2}
                  />
                  <text
                    x={x}
                    y={50}
                    textAnchor="middle"
                    fontSize={isCurrent ? "12" : "10"}
                    fontWeight="800"
                    className={isCurrent ? "fill-surface" : "fill-ink"}
                  >
                    {lvl}
                  </text>
                  <text
                    x={x}
                    y={78}
                    textAnchor="middle"
                    fontSize="9.5"
                    fontWeight={isCurrent ? "800" : "600"}
                    className={isCurrent ? "fill-brand" : "fill-ink-2"}
                  >
                    {scene.levels[idx].shortLabel}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Live Rewritten Prose Box */}
        <div className="rounded-xl border-2 border-brand/30 bg-surface p-4">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <span className="chip">{current.label}</span>
            <span className="text-xs font-bold text-ink-2">
              {showCues ? "Highlighted phrases show key syntactic markers" : "Plain unseen prose view"}
            </span>
          </div>
          <p className="font-serif text-base leading-relaxed text-ink sm:text-lg">
            {current.segments.map((seg, i) =>
              seg.cue && showCues ? (
                <span
                  key={i}
                  className="mx-0.5 inline rounded-md bg-brand-soft px-1.5 py-0.5 font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4"
                  title={seg.cue}
                >
                  {seg.text}
                  <span className="ml-1 inline-block rounded bg-brand px-1 py-0.5 align-middle font-sans text-[10px] font-extrabold uppercase tracking-wide text-brand-ink">
                    {seg.cue}
                  </span>
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              ),
            )}
          </p>
          <p className="mt-3 border-t border-line pt-2 text-xs text-ink-2">
            <strong className="text-ink">Syntactic fingerprint:</strong> {current.syntaxNote}
          </p>
        </div>

        {/* Live Analytical Readouts */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Genette Focalisation" value={current.focalisation} tone="brand" />
          <Readout label="Grammatical Voice" value={current.voice} tone="ink" />
          <Readout label="Reader Posture" value={current.posture} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// Widget 2: Literary Non-Fiction Rhetorical & Structural Arc Mapper
// ===========================================================================

type LensKey = "ethos" | "pathos" | "logos" | "self" | "syntax";

interface LensMeta {
  key: LensKey;
  label: string;
  chipClass: string;
  markClass: string;
  summary: string;
}

const LENSES: readonly LensMeta[] = [
  {
    key: "ethos",
    label: "Ethos",
    chipClass: "border-good text-good bg-good-soft",
    markClass: "bg-good-soft border-b-2 border-good text-ink",
    summary: "Credibility built through lived witness, fair concession, and candid self-scrutiny rather than boasting.",
  },
  {
    key: "pathos",
    label: "Pathos",
    chipClass: "border-brand text-brand bg-brand-soft",
    markClass: "bg-brand-soft border-b-2 border-brand text-ink",
    summary: "Emotional resonance generated through concrete sensory detail, restraint, and human scale.",
  },
  {
    key: "logos",
    label: "Logos",
    chipClass: "border-info text-info bg-info-soft",
    markClass: "bg-info-soft border-b-2 border-info text-ink",
    summary: "Reasoned progression, comparative evidence, and logical interrogation of official claims.",
  },
  {
    key: "self",
    label: "Retrospective vs Experiencing Self",
    chipClass: "border-accent text-accent bg-accent-soft",
    markClass: "bg-accent-soft border-b-2 border-accent text-ink",
    summary: "Dynamic memoir/essay friction between the younger immersed 'I' and the older reflective persona.",
  },
  {
    key: "syntax",
    label: "Hypotaxis vs Parataxis",
    chipClass: "border-ink text-ink bg-surface-2",
    markClass: "bg-warn-soft border-b-2 border-warn text-ink",
    summary: "Alternating layered subordinate clauses (nuance/hesitation) with stark side-by-side clauses (shock/finality).",
  },
];

interface AnnotatedSpan {
  id: string;
  text: string;
  lens?: LensKey;
  tag?: string;
  analysis?: string;
}

interface EssayStage {
  stage: number;
  title: string;
  arcX: number;
  arcY: number;
  role: string;
  spans: readonly AnnotatedSpan[];
}

const ESSAY_STAGES: readonly EssayStage[] = [
  {
    stage: 1,
    title: "1. Concrete Anecdote",
    arcX: 74,
    arcY: 96,
    role: "Grounds abstract urban redevelopment in sensory lived specifics and childhood immediacy.",
    spans: [
      {
        id: "s1-1",
        text: "At eleven, I believed the chipped terrazzo corridor of Jubilee Arcade was indestructible, ",
        lens: "self",
        tag: "Experiencing Self",
        analysis:
          "The younger experiencing self ('At eleven, I believed') inhabits childhood certainty, setting up inevitable retrospective irony when permanence is later shattered.",
      },
      {
        id: "s1-2",
        text: "its ceiling fans rattling above Mr Tan's watch-repair stall while rain hissed along the zinc awning.",
        lens: "pathos",
        tag: "Tactile Pathos",
        analysis:
          "Concrete acoustic and tactile particulars ('chipped terrazzo', 'rattling', 'hissed along the zinc awning') build affectionate intimacy without sentimental lecturing.",
      },
    ],
  },
  {
    stage: 2,
    title: "2. Lyrical & Logical Expansion",
    arcX: 198,
    arcY: 72,
    role: "Tests official redevelopment claims against lived evidence through layered hypotaxis.",
    spans: [
      {
        id: "s2-1",
        text: "Although the redevelopment dossier cited 'low footfall efficiency' across six tidy charts, and although I confess I once admired the architects' sleek glass maquettes myself, ",
        lens: "syntax",
        tag: "Hypotaxis + Ethos",
        analysis:
          "Nested hypotactic clauses ('Although... and although...') perform careful intellectual weighing; admitting past admiration ('I confess I once admired') deepens fair-minded ethos.",
      },
      {
        id: "s2-2",
        text: "those metrics counted only retail receipts — never the thirty retired tailors who shared flasks of oolong on the bench every afternoon, nor the schoolchildren sheltering there until buses cleared the flooded junction.",
        lens: "logos",
        tag: "Comparative Logos",
        analysis:
          "Sharp logical critique exposes a flaw in institutional evidence: measuring civic value strictly by commercial receipts systematically erases non-monetary community care.",
      },
    ],
  },
  {
    stage: 3,
    title: "3. Structural Turn (Prose Volta)",
    arcX: 332,
    arcY: 42,
    role: "Pivots abruptly from reasoned argument into stark sensory rupture via parataxis.",
    spans: [
      {
        id: "s3-1",
        text: "Then came the November hoardings. ",
        lens: "syntax",
        tag: "Paratactic Pivot",
        analysis:
          "Snapping out of long hypotaxis into four clipped words creates a jolt — the exact structural turn (*prose volta*) where bureaucratic plans become irreversible demolition.",
      },
      {
        id: "s3-2",
        text: "Shutters rolled down. Neon tubes blinked out. Mr Tan packed forty years of brass gears into two biscuit tins.",
        lens: "pathos",
        tag: "Restrained Parataxis",
        analysis:
          "Three stark, unsubordinated paratactic clauses strip away causal explanation, letting the stark compression of 'forty years... into two biscuit tins' deliver understated grief.",
      },
    ],
  },
  {
    stage: 4,
    title: "4. Retrospective Reflection",
    arcX: 454,
    arcY: 24,
    role: "Widens into open-ended ethical reckoning, acknowledging memory's own subjectivity.",
    spans: [
      {
        id: "s4-1",
        text: "Perhaps I romanticise that narrow corridor; perhaps its stairwells really were damp and dim. ",
        lens: "ethos",
        tag: "Epistemic Hedging (Ethos)",
        analysis:
          "Anaphoric epistemic hedging ('Perhaps... perhaps') interrogates the essayist's own nostalgia, earning heightened credibility through refusal to mythologise.",
      },
      {
        id: "s4-2",
        text: "Yet walking past the mirrored lobby today, at thirty-four, I understand what my eleven-year-old self could not name: ",
        lens: "self",
        tag: "Retrospective Self",
        analysis:
          "The retrospective adult ('today, at thirty-four') explicitly bridges back to the opening eleven-year-old, completing the double-self arc with earned conceptual clarity.",
      },
      {
        id: "s4-3",
        text: "a city can replace marble overnight, yet it cannot manufacture a threshold where nobody asks what you plan to buy.",
        lens: "logos",
        tag: "Antithetical Synthesis",
        analysis:
          "Balanced antithesis ('replace marble overnight' vs 'cannot manufacture a threshold') closes on an open, resonant civic definition rather than a simplistic slogan.",
      },
    ],
  },
];

function NonfictionRhetoricMapperWidget() {
  const [activeLenses, setActiveLenses] = useState<readonly LensKey[]>(["ethos", "self", "syntax"]);
  const [selectedStage, setSelectedStage] = useState<number>(3);
  const [inspectedSpanId, setInspectedSpanId] = useState<string>("s3-1");

  const toggleLens = (k: LensKey) => {
    setActiveLenses((prev) =>
      prev.includes(k) ? prev.filter((item) => item !== k) : [...prev, k],
    );
  };

  const allSpans = ESSAY_STAGES.flatMap((st) => st.spans);
  const inspectedSpan = allSpans.find((sp) => sp.id === inspectedSpanId) ?? ESSAY_STAGES[2].spans[0];
  const inspectedLens = LENSES.find((l) => l.key === inspectedSpan.lens);
  const stageObj = ESSAY_STAGES.find((st) => st.stage === selectedStage) ?? ESSAY_STAGES[0];

  return (
    <WidgetFrame
      title="Literary Non-Fiction Rhetorical & Structural Arc Mapper"
      tryThis={[
        "Toggle **Hypotaxis vs Parataxis** on and compare Paragraph 2's nested *Although...* architecture against Paragraph 3's abrupt full-stop shocks.",
        "Click any highlighted phrase in the excerpt — or any point on the **Structural Arc** — to inspect Band 5 Criterion A & B commentary.",
      ]}
      caption={
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-brand">
            <span>Selected Feature: {inspectedSpan.tag ?? "Excerpt Detail"}</span>
            {inspectedLens ? <span className="chip">{inspectedLens.label}</span> : null}
          </div>
          <p>{inspectedSpan.analysis}</p>
        </div>
      }
    >
      <div className="space-y-4">
        {/* Interactive Structural Arc SVG */}
        <div className="rounded-xl border border-line bg-surface-2 p-2.5">
          <div className="mb-1 flex flex-wrap items-center justify-between gap-2 px-1 text-xs">
            <span className="font-extrabold text-ink">Essay Structural Arc (Click a stage)</span>
            <span className="font-semibold text-brand">{stageObj.title}: {stageObj.role}</span>
          </div>
          <svg
            viewBox="0 0 520 124"
            className="h-auto w-full"
            role="img"
            aria-label="Interactive four-stage personal essay arc rising from concrete anecdote to retrospective reflection"
          >
            <line x1="36" y1="108" x2="496" y2="108" className="stroke-line" strokeWidth="1.5" />
            <path
              d="M 74 96 C 128 90, 152 78, 198 72 C 254 64, 286 48, 332 42 C 384 35, 412 28, 454 24"
              fill="none"
              className="stroke-brand"
              strokeWidth="2.8"
            />
            {ESSAY_STAGES.map((st) => {
              const active = st.stage === selectedStage;
              return (
                <g
                  key={st.stage}
                  role="button"
                  tabIndex={0}
                  aria-label={`Focus ${st.title}`}
                  onClick={() => {
                    setSelectedStage(st.stage);
                    const firstAnnotated = st.spans.find((s) => s.lens);
                    if (firstAnnotated) setInspectedSpanId(firstAnnotated.id);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedStage(st.stage);
                      const firstAnnotated = st.spans.find((s) => s.lens);
                      if (firstAnnotated) setInspectedSpanId(firstAnnotated.id);
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    cx={st.arcX}
                    cy={st.arcY}
                    r={active ? 11 : 7}
                    className={active ? "fill-brand" : "fill-surface stroke-brand"}
                    strokeWidth={active ? 0 : 2}
                  />
                  <text
                    x={st.arcX}
                    y={st.arcY + 4}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="800"
                    className={active ? "fill-surface" : "fill-ink"}
                  >
                    {st.stage}
                  </text>
                  <text
                    x={st.arcX}
                    y={120}
                    textAnchor="middle"
                    fontSize="9.5"
                    fontWeight={active ? "800" : "600"}
                    className={active ? "fill-brand" : "fill-ink-2"}
                  >
                    {st.title.replace(/^\d+\.\s*/, "")}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Lens Filter Toggles */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              Toggle Analytical Lenses
            </span>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => setActiveLenses(LENSES.map((l) => l.key))}
                className="btn btn-sm btn-secondary"
              >
                Show All
              </button>
              <button
                type="button"
                onClick={() => setActiveLenses([])}
                className="btn btn-sm btn-ghost"
              >
                Clear
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {LENSES.map((lens) => {
              const on = activeLenses.includes(lens.key);
              return (
                <button
                  key={lens.key}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleLens(lens.key)}
                  className={`rounded-full border px-3 py-1 text-xs font-bold transition ${
                    on
                      ? lens.chipClass
                      : "border-line bg-surface text-ink-2 hover:text-ink"
                  }`}
                >
                  {on ? "✓ " : "+ "}
                  {lens.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Annotated Excerpt */}
        <div className="space-y-3 rounded-xl border border-line bg-surface p-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-2">
            <span className="text-sm font-extrabold text-ink">
              Unseen Personal Essay: <em>“Inventory of a Demolished Arcade”</em>
            </span>
            <span className="chip">{activeLenses.length} / {LENSES.length} lenses active</span>
          </div>

          {ESSAY_STAGES.map((st) => {
            const focused = st.stage === selectedStage;
            return (
              <div
                key={st.stage}
                className={`rounded-lg border p-2.5 transition ${
                  focused ? "border-brand/50 bg-surface-2/60" : "border-transparent"
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    setSelectedStage(st.stage);
                    const firstAnnotated = st.spans.find((s) => s.lens);
                    if (firstAnnotated) setInspectedSpanId(firstAnnotated.id);
                  }}
                  className="mb-1 block text-left text-[11px] font-extrabold uppercase tracking-wide text-ink-2 hover:text-brand"
                >
                  {st.title}
                </button>
                <p className="font-serif text-sm leading-relaxed text-ink sm:text-base">
                  {st.spans.map((sp) => {
                    const lensObj = LENSES.find((l) => l.key === sp.lens);
                    const highlighted = Boolean(sp.lens && activeLenses.includes(sp.lens));
                    const isSelected = sp.id === inspectedSpan.id;

                    if (!highlighted || !lensObj) {
                      return <span key={sp.id}>{sp.text}</span>;
                    }

                    return (
                      <button
                        key={sp.id}
                        type="button"
                        onClick={() => {
                          setSelectedStage(st.stage);
                          setInspectedSpanId(sp.id);
                        }}
                        className={`inline cursor-pointer rounded px-1 py-0.5 text-left transition ${lensObj.markClass} ${
                          isSelected ? "ring-2 ring-brand ring-offset-1" : "hover:brightness-95"
                        }`}
                      >
                        {sp.text}
                        {sp.tag ? (
                          <span className="ml-1 inline-block rounded bg-surface px-1 py-0.5 font-sans text-[10px] font-extrabold text-ink shadow-xs">
                            {sp.tag}
                          </span>
                        ) : null}
                      </button>
                    );
                  })}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Readout label="Focused Structural Stage" value={stageObj.title} tone="brand" />
          <Readout label="Inspected Device" value={inspectedSpan.tag ?? "Select a phrase"} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "psychic-distance-slider",
    title: "Focalisation & Psychic-Distance Slider",
    blurb:
      "Slide across John Gardner's 1–5 psychic distance scale on the exact same scene to see zero focalisation, external camera-eye, close third, free indirect discourse, and stream of consciousness rewrite live.",
    Component: PsychicDistanceWidget,
  },
  {
    id: "nonfiction-rhetoric-mapper",
    title: "Literary Non-Fiction Rhetorical & Structural Arc Mapper",
    blurb:
      "Toggle ethos, pathos, logos, split memoir persona, and hypotaxis/parataxis across an unseen personal essay while mapping its four-stage structural arc.",
    Component: NonfictionRhetoricMapperWidget,
  },
];

export default widgets;
