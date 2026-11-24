"use client";

import { useState } from "react";
import { renderInline } from "../Rich";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: Paper 1 SL/HL Timer & Conceptual Outline Architect
// =============================================================================

type P1Mode = "SL" | "HL";
type FormKey = "poetry" | "drama" | "prose" | "nonfiction";
type OutlineMode = "conceptual" | "chronological";

interface OutlineBlueprint {
  label: string;
  guidingQuestion: string;
  toolkit: string;
  band5Thesis: string;
  band3Thesis: string;
  conceptualMoves: Array<{ title: string; topicSentence: string; craftTag: string }>;
  chronologicalMoves: Array<{ title: string; topicSentence: string; flawTag: string }>;
}

const OUTLINE_BLUEPRINTS: Record<FormKey, OutlineBlueprint> = {
  poetry: {
    label: "Poetry",
    guidingQuestion:
      "How do structural restraint and sensory imagery convey quiet defiance against erasure?",
    toolkit: "Form/metre · Enjambment & caesura · Volta · Soundscapes (plosives/sibilance) · Lyrical persona",
    band5Thesis:
      "While municipal order flattens living land into sterile geometry, the poet deploys stark semantic contrasts, suspended enjambment, and a silent ceremonial gesture to show memory persisting beneath dispossession.",
    band3Thesis:
      "In this poem, the poet uses imagery, metaphors, and structure to show that the uncle feels sad when the apple orchard is knocked down.",
    conceptualMoves: [
      {
        title: "Movement 1 · Bureaucratic Quantification vs Organic Stubbornness",
        topicSentence:
          "Cross-linking opening chalk numbers with closing 'obedient gravel rectangles' exposes how institutional diction converts living roots into compliant units.",
        craftTag: "Cross-links Stanza 1 ↔ Stanza 3 · Diction & Personification",
      },
      {
        title: "Movement 2 · Acoustic Intrusion & Futile Arithmetic",
        topicSentence:
          "Harsh plosive soundscapes ('diesel coughed') and enjambment across 'arithmetic / could hold' dramatise the poignant inadequacy of private ritual against legal transfer.",
        craftTag: "Soundscapes · Enjambment · Conditional Simile",
      },
      {
        title: "Movement 3 · Ceremonial Subversion & Unsentimental Paradox",
        topicSentence:
          "Framed by poised em-dashes, pouring coffee beside the oldest trunk becomes a quiet libation, while the closing volta ('yet') pairs bruised sweetness with exhaust.",
        craftTag: "Em-Dash Rhythm · Symbolism · Final Volta",
      },
    ],
    chronologicalMoves: [
      {
        title: "Paragraph 1 · Stanza 1 (Lines 1–4)",
        topicSentence:
          "In the first stanza, the speaker describes men numbering apple trees in chalk and mentions his uncle's greased pruning saw.",
        flawTag: "Plot-led opener · Misses link to Stanza 3 geometry",
      },
      {
        title: "Paragraph 2 · Stanza 2 (Lines 5–8)",
        topicSentence:
          "Next, in stanza 2, diesel machines arrive in the morning and a surveyor hands the uncle a lukewarm coffee at noon.",
        flawTag: "Chronological paraphrase · Technique-spotting trap",
      },
      {
        title: "Paragraph 3 · Stanza 3 (Lines 9–12)",
        topicSentence:
          "Finally, in the last stanza, the uncle pours out the coffee and the orchard turns into gravel with fallen apples nearby.",
        flawTag: "Capped at Band 3 Crit C · No conceptual synthesis",
      },
    ],
  },
  drama: {
    label: "Drama",
    guidingQuestion:
      "How do theatrical space, lighting, and dialogue restraint dramatise bureaucratic indifference?",
    toolkit: "Stage directions · Proxemics & blocking · Lighting & sound cues · Symbolic props · Subtext & pauses",
    band5Thesis:
      "By uniting opaque stage barriers, muffled disembodied commands, and carceral shutter lighting, the playwright exposes administrative indifference while grounding quiet endurance in unyielding bodily stillness.",
    band3Thesis:
      "The playwright uses stage directions, lighting, and short dialogue to show that Sana is frustrated by waiting at a municipal office.",
    conceptualMoves: [
      {
        title: "Movement 1 · Architectural Alienation & Blocked Sightlines",
        topicSentence:
          "Harsh strip-lighting, bolted chairs, and frosted glass strip institutional power of an accountable face before a single line is uttered.",
        craftTag: "Set Design · Proxemics · Visual Anonymity",
      },
      {
        title: "Movement 2 · Acoustic Brutality & Asymmetrical Dialogue",
        topicSentence:
          "The metallic clock clack and clipped imperatives ('Re-apply online') deny conversational reciprocity, while empty chairs expose arbitrary rigidity.",
        craftTag: "Sound Cue · Disembodied Voice · Dramatic Irony",
      },
      {
        title: "Movement 3 · Carceral Lighting & Embodied Stillness",
        topicSentence:
          "Dropping a half-shutter slices pale light across Sana's wrists like bars, yet clutching her vibrant red folder refuses tidy dismissal.",
        craftTag: "Lighting Symbolism · Prop Colour · Stage Stillness",
      },
    ],
    chronologicalMoves: [
      {
        title: "Paragraph 1 · Opening Stage Directions",
        topicSentence:
          "At the start of the scene, the stage directions describe strip-lighting, plastic chairs, and Sana holding a red folder.",
        flawTag: "Descriptive list · Treats drama as flat prose",
      },
      {
        title: "Paragraph 2 · Middle Dialogue Exchange",
        topicSentence:
          "Next, a muffled voice calls the next ticket and tells Sana that the counter closes at five o'clock.",
        flawTag: "Summarises lines · Misses subtext & sound design",
      },
      {
        title: "Paragraph 3 · Closing Stage Action",
        topicSentence:
          "At the end of the extract, the shutter slides halfway down and Sana stays standing there without moving.",
        flawTag: "Chronological walkthrough · Band 3 Criterion C cap",
      },
    ],
  },
  prose: {
    label: "Prose Fiction",
    guidingQuestion:
      "How do auditory contrast, domestic gesture, and spatial detail convey unspoken class tension?",
    toolkit: "Focalisation · Free indirect discourse · Psychic distance · Temporal pacing · Symbolic motif",
    band5Thesis:
      "Through tightly focalised sensory restraint, the writer frames a routine domestic service as a quiet collision of class hierarchy and shared vulnerability, complicating simple judgements of power.",
    band3Thesis:
      "In this prose passage, the writer uses descriptive details and similes to show that the piano tuner's visit makes the narrator's mother nervous.",
    conceptualMoves: [
      {
        title: "Movement 1 · Mechanical Calibration as Domestic Intrusion",
        topicSentence:
          "Relentlessly striking middle C until wallpaper 'shivers' turns professional precision into territorial dominance, reinforced by a 'buttoned' private ledger.",
        craftTag: "Auditory Motif · Tactile Detail · Spatial Power",
      },
      {
        title: "Movement 2 · Domestic Ritual & Internalised Shame",
        topicSentence:
          "Compulsively smoothing lace and apologising 'as though the sea had broken in' reveal how scarcity transforms environmental decay into self-blame.",
        craftTag: "Gesture · Conditional Simile · Psychological Insight",
      },
      {
        title: "Movement 3 · Acoustic Absence & Shared Constraint",
        topicSentence:
          "Silence 'heavier than the missing chord' paired with the tuner's uncounted fare and backwards retreat exposes mutual deference rather than simple villainy.",
        craftTag: "Acoustic Inversion · Nuanced Ambiguity · Ending Echo",
      },
    ],
    chronologicalMoves: [
      {
        title: "Paragraph 1 · Beginning of the Visit",
        topicSentence:
          "First, the piano tuner plays middle C for forty minutes and writes notes inside his pocket diary.",
        flawTag: "Linear plot recount · Zero craft evaluation",
      },
      {
        title: "Paragraph 2 · Middle Conversation",
        topicSentence:
          "Then, the mother stands by the sideboard smoothing the lace runner and apologising for dampness in the hall.",
        flawTag: "Paraphrase · Misses internalised class shame",
      },
      {
        title: "Paragraph 3 · End of the Extract",
        topicSentence:
          "Finally, the tuner shuts the lid, takes his money without counting, and walks backwards down the porch.",
        flawTag: "Chronological narration · Weak Criterion A & C",
      },
    ],
  },
  nonfiction: {
    label: "Literary Non-Fiction",
    guidingQuestion:
      "How do rhetorical shifts and contrasting vantage points dismantle official narratives of progress?",
    toolkit: "Experiencing vs retrospective persona · Ethos/pathos/logos · Antithesis & parataxis · Truth-claims",
    band5Thesis:
      "By ventriloquising celebratory civic slogans only to puncture them from a water-level vantage point, the speaker exposes modernisation as selective spectacle built upon erased working lives.",
    band3Thesis:
      "The author uses rhetorical techniques, dashes, and personification to argue that building the new bridge harmed the local ferrymen.",
    conceptualMoves: [
      {
        title: "Movement 1 · Ventriloquising & Puncturing Official Boosterism",
        topicSentence:
          "Framing breathless civic praise inside em-dashes before pivoting bluntly on 'yet' exposes how promotional enthusiasm masks violent displacement.",
        craftTag: "Punctuation · Irony · Concessive Pivot",
      },
      {
        title: "Movement 2 · Vertical Perspective as an Axis of Power",
        topicSentence:
          "Personifying 'Progress' as enamoured of 'aerial' photographs contrasts detached bureaucratic geometry against tactile, water-level human witness.",
        craftTag: "Personification · Spatial Antithesis · Ethos",
      },
      {
        title: "Movement 3 · Syntactic Compression & Ethical Implication",
        topicSentence:
          "Pairing harsh passive demolition ('bulldozed') with ceremonial spectacle ('ribbon was cut') implicates listeners in questioning whose losses vanish from public archives.",
        craftTag: "Passive Voice · Juxtaposition · Audience Positioning",
      },
    ],
    chronologicalMoves: [
      {
        title: "Paragraph 1 · First Clause of the Speech",
        topicSentence:
          "At the start of the speech, the writer mentions that officials want people to feel grateful for the steel bridge.",
        flawTag: "Summarises opening line · Misses ironic tone",
      },
      {
        title: "Paragraph 2 · Middle of the Speech",
        topicSentence:
          "Next, the speaker talks about the river-ferrymen whose wooden jetties were knocked down before the opening.",
        flawTag: "Literal recount · Ignores rhetorical framing",
      },
      {
        title: "Paragraph 3 · Closing Sentence",
        topicSentence:
          "Lastly, the extract concludes with a short sentence about aerial photographs and standing at water level.",
        flawTag: "Chronological wrap-up · Capped in Band 3",
      },
    ],
  },
};

function Paper1TimerOutlineArchitect() {
  const [mode, setMode] = useState<P1Mode>("SL");

  // SL sliders (75m total)
  const [slAnnotate, setSlAnnotate] = useState(8);
  const [slOutline, setSlOutline] = useState(7);
  const [slWrite, setSlWrite] = useState(55);
  const [slCheck, setSlCheck] = useState(5);

  // HL sliders (135m total: 65 + 65 + 5 ideal)
  const [hlE1Plan, setHlE1Plan] = useState(15);
  const [hlE1Write, setHlE1Write] = useState(50);
  const [hlE2Plan, setHlE2Plan] = useState(15);
  const [hlE2Write, setHlE2Write] = useState(50);
  const [hlCheck, setHlCheck] = useState(5);

  // Outline architect state
  const [form, setForm] = useState<FormKey>("poetry");
  const [outlineMode, setOutlineMode] = useState<OutlineMode>("conceptual");

  const budget = mode === "SL" ? 75 : 135;
  const allocated =
    mode === "SL"
      ? slAnnotate + slOutline + slWrite + slCheck
      : hlE1Plan + hlE1Write + hlE2Plan + hlE2Write + hlCheck;
  const delta = budget - allocated;
  const hlE1Total = hlE1Plan + hlE1Write;
  const hlE2Total = hlE2Plan + hlE2Write;

  // Build pure timeline segments without mutating outer variables inside .map()
  const rawSegments =
    mode === "SL"
      ? [
          { id: "ann", label: `Annotate ${slAnnotate}m`, mins: slAnnotate, fill: "#2563eb" },
          { id: "out", label: `Outline ${slOutline}m`, mins: slOutline, fill: "#7c3aed" },
          { id: "wrt", label: `Write ${slWrite}m`, mins: slWrite, fill: "#be123c" },
          { id: "chk", label: `Check ${slCheck}m`, mins: slCheck, fill: "#059669" },
        ]
      : [
          { id: "e1p", label: `E1 Plan ${hlE1Plan}m`, mins: hlE1Plan, fill: "#2563eb" },
          { id: "e1w", label: `E1 Write ${hlE1Write}m`, mins: hlE1Write, fill: "#be123c" },
          { id: "e2p", label: `E2 Plan ${hlE2Plan}m`, mins: hlE2Plan, fill: "#7c3aed" },
          { id: "e2w", label: `E2 Write ${hlE2Write}m`, mins: hlE2Write, fill: "#9f1239" },
          { id: "chk", label: `Check ${hlCheck}m`, mins: hlCheck, fill: "#059669" },
        ];

  const barScaleMax = Math.max(budget, allocated, 1);
  const barWidth = 568;
  const segments = rawSegments.map((seg, idx) => {
    const startMins = rawSegments.slice(0, idx).reduce((sum, s) => sum + s.mins, 0);
    const x = 16 + (startMins / barScaleMax) * barWidth;
    const w = Math.max(0, (seg.mins / barScaleMax) * barWidth);
    return { ...seg, x, w };
  });

  // Live pacing diagnostic
  const alerts: Array<{ tone: "good" | "bad"; text: string }> = [];
  if (delta < 0) {
    alerts.push({ tone: "bad", text: `Over the ${budget}-minute official exam bell by ${Math.abs(delta)} min — trim writing or planning blocks.` });
  } else if (delta > 0) {
    alerts.push({ tone: "bad", text: `${delta} min left unallocated — assign every minute deliberately so exam pacing stays intentional.` });
  }
  if (mode === "SL") {
    const totalPlan = slAnnotate + slOutline;
    if (totalPlan < 11) {
      alerts.push({ tone: "bad", text: `Total planning is only ${totalPlan}m — below 12m risks sliding into chronological stanza-by-stanza summary!` });
    } else if (totalPlan > 20) {
      alerts.push({ tone: "bad", text: `Planning (${totalPlan}m) is eating too deeply into drafting time — target ~15m.` });
    }
    if (slCheck < 4) {
      alerts.push({ tone: "bad", text: `Reserve at least 5m at the end to upgrade weak verbs and sharpen your synthesis conclusion.` });
    }
    if (alerts.length === 0) {
      alerts.push({ tone: "good", text: "Balanced SL Paper 1 pacing: full conceptual planning, calm drafting, and a protected proofread buffer." });
    }
  } else {
    if (hlE1Total > 68) {
      alerts.push({ tone: "bad", text: `Essay 1 (${hlE1Total}m) breaches the minute-65 hard stop by ${hlE1Total - 65}m — high risk of Essay-2 collapse!` });
    }
    if (hlE1Plan < 12 || hlE2Plan < 12) {
      alerts.push({ tone: "bad", text: `Both HL passages need ~14–15m conceptual planning; skipping Essay 2's outline is the #1 HL Criterion C killer.` });
    }
    if (Math.abs(hlE1Total - hlE2Total) > 10) {
      alerts.push({ tone: "bad", text: `Uneven split (${hlE1Total}m vs ${hlE2Total}m) — remember BOTH HL passages carry an identical 20 marks!` });
    }
    if (hlCheck < 4) {
      alerts.push({ tone: "bad", text: `Keep at least 5m at the end to tighten quotations and conclusions across both HL essays.` });
    }
    if (alerts.length === 0) {
      alerts.push({ tone: "good", text: "Gold-standard HL 65 + 65 + 5 discipline locked: both literary forms receive equal Band 5 engineering." });
    }
  }

  const bp = OUTLINE_BLUEPRINTS[form];
  const hardStopX = 16 + (65 / barScaleMax) * barWidth;
  const budgetLineX = 16 + (budget / barScaleMax) * barWidth;

  return (
    <WidgetFrame
      title="Paper 1 SL/HL Timer & Conceptual Outline Architect"
      tryThis={[
        "Switch to **HL (135m)** and drag **E1 Write** up to 65m — watch how breaching the minute-65 hard stop immediately triggers an Essay-2 collapse warning.",
        "Toggle **Conceptual (Band 5)** vs **Chronological (Band 3 Cap)** across Poetry, Drama, Prose, and Literary Non-Fiction to compare topic sentences.",
      ]}
      caption={
        mode === "SL"
          ? "SL Paper 1 (75m · 1 of 2 passages · 20 marks · 35%): invest 15 minutes upfront in C-A-M-T planning so every paragraph advances an arguable conceptual tension."
          : "HL Paper 1 (135m · BOTH passages from 2 different forms · 40 marks · 35%): enforce a ruthless minute-65 hard stop and switch form toolkits cleanly for Passage 2."
      }
    >
      <div className="space-y-5">
        {/* Mode Switch */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Paper 1 Level"
            value={mode}
            onChange={setMode}
            options={[
              { value: "SL", label: "SL · 75m (1 Passage · 20m)" },
              { value: "HL", label: "HL · 135m (2 Passages · 40m)" },
            ]}
          />
          <button
            type="button"
            onClick={() => {
              if (mode === "SL") {
                setSlAnnotate(8);
                setSlOutline(7);
                setSlWrite(55);
                setSlCheck(5);
              } else {
                setHlE1Plan(15);
                setHlE1Write(50);
                setHlE2Plan(15);
                setHlE2Write(50);
                setHlCheck(5);
              }
            }}
            className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-xs font-bold text-ink hover:border-brand"
          >
            Reset Optimal Split
          </button>
        </div>

        {/* Live Readouts */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Exam Budget" value={`${budget}m`} tone="ink" />
          <Readout
            label="Allocated"
            value={`${allocated}m`}
            tone={delta === 0 ? "good" : "bad"}
          />
          <Readout
            label={mode === "SL" ? "Total Plan" : "E1 / E2 Split"}
            value={mode === "SL" ? `${slAnnotate + slOutline}m` : `${hlE1Total}m / ${hlE2Total}m`}
            tone={
              mode === "SL"
                ? slAnnotate + slOutline >= 12 && slAnnotate + slOutline <= 18
                  ? "good"
                  : "bad"
                : hlE1Total <= 67 && Math.abs(hlE1Total - hlE2Total) <= 8
                  ? "good"
                  : "bad"
            }
          />
          <Readout
            label="Status"
            value={delta === 0 ? "Exact" : delta > 0 ? `+${delta}m free` : `${Math.abs(delta)}m over`}
            tone={delta === 0 ? "good" : "bad"}
          />
        </div>

        {/* Responsive SVG Timeline Bar */}
        <div className="rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 600 84"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Live ${mode} Paper 1 timeline allocation bar`}
            className="h-auto w-full"
          >
            <rect x="0" y="0" width="600" height="84" rx="10" fill="#fffaf9" />
            <rect x="16" y="18" width="568" height="34" rx="6" fill="#f1f5f9" stroke="#cbd5e1" />
            {segments.map((seg) =>
              seg.w > 0 ? (
                <g key={seg.id}>
                  <rect x={seg.x} y={18} width={Math.max(2, seg.w - 1)} height={34} rx="5" fill={seg.fill} />
                  {seg.w >= 58 ? (
                    <text
                      x={seg.x + seg.w / 2}
                      y={39}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="700"
                      fill="#ffffff"
                    >
                      {seg.label}
                    </text>
                  ) : null}
                </g>
              ) : null,
            )}
            {mode === "HL" ? (
              <g>
                <line x1={hardStopX} y1={10} x2={hardStopX} y2={62} stroke="#b91c1c" strokeWidth="2" strokeDasharray="4 3" />
                <text x={hardStopX} y={76} textAnchor="middle" fontSize="10" fontWeight="700" fill="#b91c1c">
                  Hard Stop: 65m
                </text>
              </g>
            ) : null}
            <line x1={budgetLineX} y1={10} x2={budgetLineX} y2={62} stroke="#0f172a" strokeWidth="2" />
            <text x={Math.min(560, budgetLineX)} y={76} textAnchor="end" fontSize="10" fontWeight="700" fill="#0f172a">
              Bell: {budget}m
            </text>
          </svg>
        </div>

        {/* Sliders */}
        {mode === "SL" ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Slider label="Cold Read & GQ Annotate" value={slAnnotate} min={0} max={15} onChange={setSlAnnotate} format={(v) => `${v} min`} />
            <Slider label="3-Movement Outline & Thesis" value={slOutline} min={0} max={15} onChange={setSlOutline} format={(v) => `${v} min`} />
            <Slider label="Write Guided Analysis" value={slWrite} min={25} max={70} onChange={setSlWrite} format={(v) => `${v} min`} />
            <Slider label="Final Proofread & Verbs" value={slCheck} min={0} max={15} onChange={setSlCheck} format={(v) => `${v} min`} />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Slider label="Essay 1: Read & Plan" value={hlE1Plan} min={5} max={25} onChange={setHlE1Plan} format={(v) => `${v} min`} />
            <Slider label="Essay 1: Write" value={hlE1Write} min={25} max={75} onChange={setHlE1Write} format={(v) => `${v} min`} />
            <Slider label="Essay 2: Reset & Plan" value={hlE2Plan} min={0} max={25} onChange={setHlE2Plan} format={(v) => `${v} min`} />
            <Slider label="Essay 2: Write" value={hlE2Write} min={20} max={70} onChange={setHlE2Write} format={(v) => `${v} min`} />
            <div className="sm:col-span-2">
              <Slider label="Final Buffer Across BOTH Essays" value={hlCheck} min={0} max={15} onChange={setHlCheck} format={(v) => `${v} min`} />
            </div>
          </div>
        )}

        {/* Live Alerts */}
        <div className="space-y-1.5">
          {alerts.map((a) => (
            <div
              key={a.text}
              className={`rounded-xl border px-3 py-2 text-xs font-semibold ${
                a.tone === "good"
                  ? "border-good/40 bg-good/10 text-ink"
                  : "border-bad/40 bg-bad/10 text-ink"
              }`}
            >
              {a.tone === "good" ? "✅ " : "⚠️ "}
              {a.text}
            </div>
          ))}
        </div>

        {/* 3-Movement Conceptual Outline Architect */}
        <div className="space-y-3 rounded-xl border border-line bg-surface-2/60 p-3 sm:p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-sm font-extrabold text-ink">3-Movement Conceptual Outline Architect</h4>
            <Segmented
              label="Outline Architecture"
              value={outlineMode}
              onChange={setOutlineMode}
              options={[
                { value: "conceptual", label: "Conceptual (Band 5)" },
                { value: "chronological", label: "Chronological (Band 3 Cap)" },
              ]}
            />
          </div>

          <Segmented
            label="Unseen Literary Form"
            value={form}
            onChange={setForm}
            options={[
              { value: "poetry", label: "Poetry" },
              { value: "drama", label: "Drama" },
              { value: "prose", label: "Prose Fiction" },
              { value: "nonfiction", label: "Non-Fiction" },
            ]}
          />

          <div className="rounded-xl border border-line bg-surface p-3 text-xs leading-relaxed">
            <div className="font-extrabold text-brand">Unseen {bp.label} Guiding Question</div>
            <p className="mt-1 italic text-ink">{bp.guidingQuestion}</p>
            <div className="mt-2 font-bold text-ink-2">
              Active {bp.label} Toolkit: <span className="font-normal text-ink">{bp.toolkit}</span>
            </div>
          </div>

          <div
            className={`rounded-xl border p-3 text-xs leading-relaxed ${
              outlineMode === "conceptual"
                ? "border-good/40 bg-good/10"
                : "border-bad/40 bg-bad/10"
            }`}
          >
            <div className="font-extrabold uppercase tracking-wide text-ink">
              {outlineMode === "conceptual" ? "Band 5 Tension-Driven Thesis" : "Band 3 Surface Summary Thesis"}
            </div>
            <p className="mt-1 text-ink">
              {outlineMode === "conceptual" ? bp.band5Thesis : bp.band3Thesis}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {outlineMode === "conceptual"
              ? bp.conceptualMoves.map((m) => (
                  <div key={m.title} className="rounded-xl border border-good/30 bg-surface p-3 text-xs">
                    <div className="font-extrabold text-ink">{m.title}</div>
                    <p className="mt-1.5 leading-relaxed text-ink-2">{m.topicSentence}</p>
                    <div className="mt-2 rounded-md bg-good/10 px-2 py-1 text-[11px] font-bold text-good">
                      {m.craftTag}
                    </div>
                  </div>
                ))
              : bp.chronologicalMoves.map((m) => (
                  <div key={m.title} className="rounded-xl border border-bad/30 bg-surface p-3 text-xs">
                    <div className="font-extrabold text-ink">{m.title}</div>
                    <p className="mt-1.5 leading-relaxed text-ink-2">{m.topicSentence}</p>
                    <div className="mt-2 rounded-md bg-bad/10 px-2 py-1 text-[11px] font-bold text-bad">
                      {m.flawTag}
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: Paper 2 Prompt Deconstructor & Criterion A–D Calibrator
// =============================================================================

type PromptId = "silence" | "spaces" | "endings" | "truth";
type LensKey = "command" | "tension" | "assumption" | "form";
type CritKey = "A" | "B" | "C" | "D";
type RubricPaper = "p2" | "p1";

interface P2PromptData {
  shortTitle: string;
  promptText: string;
  lenses: Record<LensKey, { phrase: string; band5Move: string; band3Trap: string }>;
}

const P2_PROMPTS: Record<PromptId, P2PromptData> = {
  silence: {
    shortTitle: "Silence & Power",
    promptText:
      "To what extent do two works you have studied suggest that silence communicates more powerfully than speech?",
    lenses: {
      command: {
        phrase: "To what extent",
        band5Move:
          "Reject a binary yes/no verdict: weigh moments where deliberate silence exerts defiant authority against moments where enforced muteness signals traumatic suppression.",
        band3Trap:
          "Agreeing simplistically ('Yes, in both works silence is very powerful') without testing limits or counter-examples.",
      },
      tension: {
        phrase: "silence communicates more powerfully than speech",
        band5Move:
          "Differentiate *voluntary* poise (refusal to comply) from *coerced* erasure (social censorship), comparing how speech itself can either conceal or rupture power.",
        band3Trap:
          "Listing scenes where characters happen to stay quiet without analysing *whose* silence carries agency.",
      },
      assumption: {
        phrase: "more powerfully",
        band5Move:
          "Interrogate the assumption that silence is inherently noble or potent — ask whether silence sometimes shields oppressors until a character finally speaks out.",
        band3Trap:
          "Treating 'powerfully' as a vague synonym for 'sadly' or 'emotionally' across both works.",
      },
      form: {
        phrase: "two works you have studied",
        band5Move:
          "Contrast medium-specific silence: dramatic stage pauses and lighting cuts confronting spectators directly vs prose ellipsis or poetic caesura and white space.",
        band3Trap:
          "Comparing only plot moments while forgetting Criterion B's 10-mark demand for comparative craft evaluation.",
      },
    },
  },
  spaces: {
    shortTitle: "Physical Spaces",
    promptText:
      "Compare and contrast how and to what effect physical spaces confine, shape, or liberate characters in two works you have studied.",
    lenses: {
      command: {
        phrase: "Compare and contrast how and to what effect",
        band5Move:
          "Link every spatial comparison to *how* craft operates (Criterion B) AND *to what effect* on audience sympathy or cultural critique — woven point-by-point in every section.",
        band3Trap:
          "Writing three pages on Work 1's setting followed by three pages on Work 2's setting (block-by-block trap).",
      },
      tension: {
        phrase: "confine, shape, or liberate",
        band5Move:
          "Trace how a single domestic space advertised as sanctuary operates simultaneously as surveillance, and evaluate whether crossing a threshold yields lucid freedom or tragic fracture.",
        band3Trap:
          "Describing houses or landscapes literally without interpreting how architecture encodes power or gender hierarchy.",
      },
      assumption: {
        phrase: "liberate",
        band5Move:
          "Challenge clean liberation: in illustrative works such as *A Doll's House* [Example text — not a set text] vs *The Yellow Wallpaper* [Example text — not a set text], leaving a room can mean austere autonomy or mental unravelling.",
        band3Trap:
          "Assuming every character who leaves a room achieves a neat, triumphant happy ending.",
      },
      form: {
        phrase: "physical spaces",
        band5Move:
          "Compare theatrical box-set staging, doors, and proxemics in Drama against claustrophobic unreliable focalisation and shifting spatial motifs in Prose or Poetry.",
        band3Trap:
          "Treating setting as mere background scenery instead of an active authorial device.",
      },
    },
  },
  endings: {
    shortTitle: "Endings & Closure",
    promptText:
      "Discuss how effectively the endings of two works you have studied resolve — or deliberately unsettle — earlier tensions.",
    lenses: {
      command: {
        phrase: "Discuss how effectively",
        band5Move:
          "Perform rigorous Criterion B evaluation: judge *how effectively* each ending's formal choices (an acoustic slam, an ironic image, an abrupt volta) shape final reader resonance.",
        band3Trap:
          "Giving personal star ratings ('I enjoyed the ending') or summarising the final chapter chronologically.",
      },
      tension: {
        phrase: "resolve — or deliberately unsettle",
        band5Move:
          "Evaluate why withholding tidy moral closure often produces deeper ethical engagement than conventional neat resolution across both works.",
        band3Trap:
          "Arguing only that both endings are 'cliffhangers that make the reader want to read on'.",
      },
      assumption: {
        phrase: "earlier tensions",
        band5Move:
          "Cross-reference each work's closing pivot directly back to its opening image or structural promise to prove holistic macro-text command.",
        band3Trap:
          "Analysing only the last page in isolation without connecting it to the work's wider structural arc.",
      },
      form: {
        phrase: "endings of two works",
        band5Move:
          "Contrast final theatrical blackout/sound effects in Drama against elegiac retrospective cadences in Prose Fiction or formal rhyming closure in Poetry.",
        band3Trap:
          "Describing what happens to characters at the end without discussing structural or stylistic craft.",
      },
    },
  },
  truth: {
    shortTitle: "Truth & Illusion",
    promptText:
      "Examine the ways in which two works you have studied reveal that discovering truth rarely brings effortless liberation.",
    lenses: {
      command: {
        phrase: "Examine the ways in which",
        band5Move:
          "Probe underlying ironies and structural mechanisms ('ways') — showing how revelation strips comforting illusions while testing moral courage.",
        band3Trap:
          "Listing moments where secrets come out without analysing narrative perspective or dramatic irony.",
      },
      tension: {
        phrase: "discovering truth rarely brings effortless liberation",
        band5Move:
          "Contrast bitter tragic self-knowledge (anagnorisis causing exile or ruin) against painful modern disillusionment that demands costly self-reinvention.",
        band3Trap:
          "Stating simply that 'lying is bad and truth hurts' as a flat moral lesson.",
      },
      assumption: {
        phrase: "effortless liberation",
        band5Move:
          "Interrogate whether the obstacle to liberation is the truth itself or the rigid social structures waiting outside once illusions collapse.",
        band3Trap:
          "Treating truth as purely personal psychology while ignoring cultural context of production and reception.",
      },
      form: {
        phrase: "reveal",
        band5Move:
          "Compare how dramatic irony lets spectators see illusions earlier than tragic heroes vs how unreliable first-person prose keeps readers complicit until the late turn.",
        band3Trap:
          "Forgetting to analyse how the *form* controls *when* and *how* the reader discovers truth.",
      },
    },
  },
};

const CRIT_SAMPLES: Record<
  CritKey,
  {
    name: string;
    separator: string;
    band3: string;
    band5: string;
  }
> = {
  A: {
    name: "Criterion A · Understanding & Interpretation",
    separator: "Literal surface paraphrase → Subtle implications, irony & productive ambiguity",
    band3:
      "In this passage, the father keeps drawing thicker lines on his map when the ferry horn blows, which shows he is anxious about the rising tide.",
    band5:
      "Cartographic precision operates not as mastery but as an anxious ritual of containment, exposing the pathos of attempting to arrest fluid temporal loss through flat geometric borders.",
  },
  B: {
    name: "Criterion B · Analysis & Evaluation of Craft",
    separator: "Technique-spotting + generic effects → Evaluative synthesis of interlocking choices",
    band3:
      "The poet uses enjambment, plosives, and a metaphor of combed gravel to create a tense atmosphere and emphasise how harsh the demolition is.",
    band5:
      "Breaking the line on 'arithmetic / could hold' suspends fragile human hope before the participle 'surrendered' collapses it, while 'combed into obedient gravel' evaluates redevelopment as coerced submission.",
  },
  C: {
    name: "Criterion C · Focus & Organisation",
    separator: "Chronological / block-by-block walkthrough → Cohesive conceptual & balanced synthesis",
    band3:
      "Moving on to Work 2 after discussing Work 1, this novel also explores confinement in several important scenes across chapters four and five.",
    band5:
      "Whereas Work 1's unchanging box-set parlour exposes domestic surveillance externally to spectators, Work 2's epistolary journal traps readers inside escalating sensory obsession.",
  },
  D: {
    name: "Criterion D · Language & Academic Register",
    separator: "Vague verbs ('shows/uses') & wordy filler → Surgical analytical verbs & embedded quotes",
    band3:
      "This quote really shows that the character kind of feels trapped, and this makes the reader want to read on to find out what happens.",
    band5:
      "By compressing domestic duty into stark monosyllables, the writer destabilises outward courtesy and implicates the reader in quiet claustrophobia.",
  },
};

function Paper2PromptRubricCalibrator() {
  const [promptId, setPromptId] = useState<PromptId>("spaces");
  const [lens, setLens] = useState<LensKey>("assumption");

  const [rubricPaper, setRubricPaper] = useState<RubricPaper>("p2");
  const [bandA, setBandA] = useState(4);
  const [bandB, setBandB] = useState(4);
  const [bandC, setBandC] = useState(4);
  const [bandD, setBandD] = useState(4);
  const [activeCrit, setActiveCrit] = useState<CritKey>("B");

  const pData = P2_PROMPTS[promptId];
  const lensInfo = pData.lenses[lens];

  // Paper 2: A & B are out of 10 (band * 2); C & D are out of 5 (band) -> max 30
  // Paper 1: A, B, C, D are out of 5 (band) -> max 20
  const scoreA = rubricPaper === "p2" ? bandA * 2 : bandA;
  const scoreB = rubricPaper === "p2" ? bandB * 2 : bandB;
  const scoreC = bandC;
  const scoreD = bandD;
  const maxA = rubricPaper === "p2" ? 10 : 5;
  const maxB = rubricPaper === "p2" ? 10 : 5;
  const maxTotal = rubricPaper === "p2" ? 30 : 20;
  const total = scoreA + scoreB + scoreC + scoreD;
  const pct = Math.round((total / maxTotal) * 100);
  const estBand =
    pct >= 85 ? "Band 5 (Top)" : pct >= 68 ? "Band 4 (Good)" : pct >= 50 ? "Band 3 (Mid)" : "Band 1–2";

  const critBars = [
    { key: "A" as const, label: "Crit A", score: scoreA, max: maxA, band: bandA, fill: "#be123c", y: 24 },
    { key: "B" as const, label: "Crit B", score: scoreB, max: maxB, band: bandB, fill: "#9f1239", y: 58 },
    { key: "C" as const, label: "Crit C", score: scoreC, max: 5, band: bandC, fill: "#2563eb", y: 92 },
    { key: "D" as const, label: "Crit D", score: scoreD, max: 5, band: bandD, fill: "#7c3aed", y: 126 },
  ];

  const sample = CRIT_SAMPLES[activeCrit];

  return (
    <WidgetFrame
      title="Paper 2 Prompt Deconstructor & Criterion A–D Calibrator"
      tryThis={[
        "Select any unseen Paper 2 prompt and click **Hidden Assumption** to see how Band 5 candidates complicate rather than simplistically agree with the wording.",
        "Switch between **Paper 2 (30m)** and **Paper 1 (20m)** and move **Crit A** and **Crit B** from Band 3 to Band 5 — watch why Criteria A + B dominate two-thirds of Paper 2!",
      ]}
      caption={
        rubricPaper === "p2"
          ? `Paper 2 (30 marks: A10 / B10 / C5 / D5): Criteria A and B supply ${Math.round(((scoreA + scoreB) / Math.max(total, 1)) * 100)}% of your current score — lifting A & B from Band 3 to Band 5 adds +8 marks instantly.`
          : "Paper 1 (20 marks per essay: A5 / B5 / C5 / D5): all four criteria carry equal 25% weight — conceptual cohesion (C) and surgical register (D) protect top-band totals."
      }
    >
      <div className="space-y-5">
        {/* PART A: Prompt Deconstructor */}
        <div className="space-y-3 rounded-xl border border-line bg-surface-2/60 p-3 sm:p-4">
          <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
            Step 1 · Unpack an Unseen Paper 2 Comparative Prompt
          </div>
          <Segmented
            label="Unseen Paper 2 Prompt"
            value={promptId}
            onChange={setPromptId}
            options={[
              { value: "silence", label: "1. Silence" },
              { value: "spaces", label: "2. Spaces" },
              { value: "endings", label: "3. Endings" },
              { value: "truth", label: "4. Truth" },
            ]}
          />

          <div className="rounded-xl border border-line bg-surface p-3 text-sm font-semibold leading-relaxed text-ink">
            “{pData.promptText}”
          </div>

          <Segmented
            label="Deconstruction Lens"
            value={lens}
            onChange={setLens}
            options={[
              { value: "command", label: "Command Term" },
              { value: "tension", label: "Core Tension" },
              { value: "assumption", label: "Hidden Assumption" },
              { value: "form", label: "Form Divergence" },
            ]}
          />

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div className="rounded-xl border border-good/40 bg-good/10 p-3 text-xs leading-relaxed">
              <div className="font-extrabold text-good">
                Band 5 Interrogation · “{lensInfo.phrase}”
              </div>
              <p className="mt-1 text-ink">{renderInline(lensInfo.band5Move)}</p>
            </div>
            <div className="rounded-xl border border-bad/40 bg-bad/10 p-3 text-xs leading-relaxed">
              <div className="font-extrabold text-bad">Band 3 Pitfall to Avoid</div>
              <p className="mt-1 text-ink">{renderInline(lensInfo.band3Trap)}</p>
            </div>
          </div>
        </div>

        {/* PART B: Criterion A-D Calibrator */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              Step 2 · Calibrate Criteria A–D (Band 1–5)
            </div>
            <Segmented
              label="Rubric Scale"
              value={rubricPaper}
              onChange={setRubricPaper}
              options={[
                { value: "p2", label: "Paper 2 (30m)" },
                { value: "p1", label: "Paper 1 (20m)" },
              ]}
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Readout label="Projected Score" value={`${total}/${maxTotal}`} tone={pct >= 80 ? "good" : pct < 55 ? "bad" : "brand"} />
            <Readout label="Percentage" value={`${pct}%`} tone={pct >= 80 ? "good" : "ink"} />
            <Readout label="Band Profile" value={estBand} tone={pct >= 80 ? "good" : "brand"} />
          </div>

          {/* Live SVG Bar Chart */}
          <div className="rounded-xl border border-line bg-surface p-2">
            <svg
              viewBox="0 0 600 166"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Live IB Criteria A to D score calibration bars"
              className="h-auto w-full"
            >
              <rect x="0" y="0" width="600" height="166" rx="10" fill="#fffaf9" />
              <line x1={82 + 0.6 * 420} y1="12" x2={82 + 0.6 * 420} y2="154" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
              <text x={82 + 0.6 * 420} y="162" textAnchor="middle" fontSize="9" fontWeight="700" fill="#b45309">
                Band 3 Ceiling (60%)
              </text>
              {critBars.map((b) => {
                const frac = b.score / b.max;
                const w = Math.max(8, frac * 420);
                return (
                  <g key={b.key}>
                    <text x="16" y={b.y + 17} fontSize="12" fontWeight="700" fill="#0f172a">
                      {b.label}
                    </text>
                    <rect x="82" y={b.y} width="420" height="24" rx="6" fill="#f1f5f9" stroke="#e2e8f0" />
                    <rect x="82" y={b.y} width={w} height="24" rx="6" fill={b.fill} />
                    <text x="514" y={b.y + 16} fontSize="12" fontWeight="700" fill="#1e293b">
                      {b.score}/{b.max} (B{b.band})
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Steppers for Bands 1-5 */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-surface px-3 py-2">
              <Stepper label={`Crit A (/${maxA})`} value={bandA} min={1} max={5} onChange={setBandA} format={(v) => `Band ${v}`} />
            </div>
            <div className="rounded-xl border border-line bg-surface px-3 py-2">
              <Stepper label={`Crit B (/${maxB})`} value={bandB} min={1} max={5} onChange={setBandB} format={(v) => `Band ${v}`} />
            </div>
            <div className="rounded-xl border border-line bg-surface px-3 py-2">
              <Stepper label="Crit C (/5)" value={bandC} min={1} max={5} onChange={setBandC} format={(v) => `Band ${v}`} />
            </div>
            <div className="rounded-xl border border-line bg-surface px-3 py-2">
              <Stepper label="Crit D (/5)" value={bandD} min={1} max={5} onChange={setBandD} format={(v) => `Band ${v}`} />
            </div>
          </div>

          {/* Side-by-side Band 3 vs Band 5 Inspector */}
          <div className="space-y-2.5 rounded-xl border border-line bg-surface-2/60 p-3 sm:p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
                Inspect Band 3 → Band 5 Analytical Upgrade
              </span>
              <Segmented
                label="Criterion Example"
                value={activeCrit}
                onChange={setActiveCrit}
                options={[
                  { value: "A", label: "Crit A" },
                  { value: "B", label: "Crit B" },
                  { value: "C", label: "Crit C" },
                  { value: "D", label: "Crit D" },
                ]}
              />
            </div>
            <div className="text-xs font-bold text-brand">
              {sample.name}: <span className="font-normal text-ink">{sample.separator}</span>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div className="rounded-xl border border-bad/30 bg-surface p-3 text-xs leading-relaxed">
                <div className="font-extrabold text-bad">Band 3 Draft</div>
                <p className="mt-1 italic text-ink-2">“{sample.band3}”</p>
              </div>
              <div className="rounded-xl border border-good/40 bg-surface p-3 text-xs leading-relaxed">
                <div className="font-extrabold text-good">Band 5 Upgrade</div>
                <p className="mt-1 text-ink">“{sample.band5}”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "paper1-timer-outline-architect",
    title: "Paper 1 SL/HL Timer & Conceptual Outline Architect",
    blurb:
      "Simulate SL (75m, 1 passage) vs HL (135m, 2 passages: 65+65+5) timing splits with live overrun alerts, and contrast Band 5 conceptual outlines against chronological traps.",
    Component: Paper1TimerOutlineArchitect,
  },
  {
    id: "paper2-prompt-rubric-calibrator",
    title: "Paper 2 Prompt Deconstructor & Criterion A–D Calibrator",
    blurb:
      "Unpack hidden assumptions in unseen IB Paper 2 prompts and calibrate Criteria A–D from Band 3 to Band 5 with live rubric scoring.",
    Component: Paper2PromptRubricCalibrator,
  },
];

export default widgets;
