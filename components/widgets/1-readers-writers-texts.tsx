"use client";

import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

// ============================================================================
// WIDGET 1: Close-Reading Annotation Workbench
// ============================================================================
type LayerKey = "diction" | "syntax" | "imagery" | "tone";

interface LayerMeta {
  key: LayerKey;
  label: string;
  chipOn: string;
  highlight: string;
  badge: string;
}

const LAYER_META: readonly LayerMeta[] = [
  {
    key: "diction",
    label: "Diction",
    chipOn: "bg-brand text-brand-ink border-brand",
    highlight: "bg-brand-soft text-ink border-b-2 border-brand",
    badge: "bg-brand-soft text-brand",
  },
  {
    key: "syntax",
    label: "Syntax",
    chipOn: "bg-info text-white border-info",
    highlight: "bg-info-soft text-ink border-b-2 border-info",
    badge: "bg-info-soft text-info",
  },
  {
    key: "imagery",
    label: "Imagery",
    chipOn: "bg-accent text-white border-accent",
    highlight: "bg-accent-soft text-ink border-b-2 border-accent",
    badge: "bg-accent-soft text-accent",
  },
  {
    key: "tone",
    label: "Tone & Irony",
    chipOn: "bg-good text-white border-good",
    highlight: "bg-good-soft text-ink border-b-2 border-good",
    badge: "bg-good-soft text-good",
  },
];

const LAYER_BY_KEY: Record<LayerKey, LayerMeta> = {
  diction: LAYER_META[0],
  syntax: LAYER_META[1],
  imagery: LAYER_META[2],
  tone: LAYER_META[3],
};

interface PassageSegment {
  id: string;
  text: string;
  layer?: LayerKey;
  technique?: string;
  band2?: string;
  band5?: string;
}

interface WorkbenchPassage {
  id: "prose" | "poetry";
  label: string;
  title: string;
  formNote: string;
  segments: readonly PassageSegment[];
}

const WORKBENCH_PASSAGES: readonly WorkbenchPassage[] = [
  {
    id: "prose",
    label: "Prose Fiction",
    title: "Unseen Prose Extract — “The Salt Conservatory”",
    formNote: "Original unseen passage (non-prescriptive craft model)",
    segments: [
      { id: "p-1", text: "Every autumn the council called the estuary wall " },
      {
        id: "p-2",
        text: "“a triumph of civic permanence”,",
        layer: "tone",
        technique: "Verbal irony via scare-quoted civic rhetoric",
        band2: "The council says the wall is a great achievement, which shows they are proud of their town.",
        band5: "Placing “a triumph of civic permanence” inside quotation marks signals dry verbal irony, letting the implied author distance herself from complacent municipal propaganda before nature undercuts it.",
      },
      { id: "p-3", text: " yet by November the conservatory panes had " },
      {
        id: "p-4",
        text: "clouded with salt until the lemon trees inside shrank into pale ghosts.",
        layer: "imagery",
        technique: "Spectral visual imagery & encroaching decay",
        band2: "The writer uses imagery to show that salt makes the glass foggy and the trees look ghostly.",
        band5: "Reducing once-living citrus trees to “pale ghosts” behind salt-frosted panes transforms glass shelter into a haunted vitrine, exposing how gradual environmental entropy erodes domestic permanence.",
      },
      { id: "p-5", text: " My grandmother entered at seven sharp. " },
      {
        id: "p-6",
        text: "Brass secateurs. Three neat snips. An empty wicker basket.",
        layer: "syntax",
        technique: "Elliptical parataxis & clipped noun fragments",
        band2: "She uses short sentences to describe what her grandmother brings into the greenhouse in the morning.",
        band5: "Stripping away finite verbs into three stark noun fragments compresses rhythm into mechanical ritual, enacting stoic self-discipline while quietly registering the emptiness of her harvest.",
      },
      { id: "p-7", text: " She pruned dead stems with the calm detachment of a " },
      {
        id: "p-8",
        text: "surgeon declining to sign a final audit.",
        layer: "diction",
        technique: "Clinical & bureaucratic semantic field",
        band2: "The writer compares her to a surgeon so the reader can picture how carefully she cuts the plants.",
        band5: "Importing clinical and accounting diction (“surgeon”, “final audit”) recasts tender gardening as stubborn refusal of mortality, suspending her routine between quiet dignity and poignant denial.",
      },
    ],
  },
  {
    id: "poetry",
    label: "Lyric Poetry",
    title: "Unseen Lyric Extract — “Platform Four at Dusk”",
    formNote: "Original unseen verse (non-prescriptive craft model)",
    segments: [
      { id: "v-1", text: "We left your winter coat behind the stair —\n" },
      {
        id: "v-2",
        text: "not out of grief, of course; the wool is sound,",
        layer: "tone",
        technique: "Defensive self-irony & parenthetical denial",
        band2: "The speaker explains that they kept the coat only because the wool is still in good condition.",
        band5: "The unsolicited hedge “not out of grief, of course” triggers sharp psychological irony: protesting too quickly betrays the exact longing the speaker attempts to disguise beneath sensible thrift.",
      },
      { id: "v-3", text: "\nand at the station, " },
      {
        id: "v-4",
        text: "timetables click like iron rosary beads",
        layer: "imagery",
        technique: "Auditory simile colliding transit with ritual devotion",
        band2: "This simile compares the clicking timetable board to rosary beads to create a vivid sound image.",
        band5: "Fusing industrial departure boards with “iron rosary beads” turns mundane commuter waiting into austere, mechanical vigil — suggesting grief has colonised even impersonal public time.",
      },
      { id: "v-5", text: "\nacross the concourse. " },
      {
        id: "v-6",
        text: "Two whistles. One receding lamp. Cold rails.",
        layer: "syntax",
        technique: "Caesural parataxis & shrinking phrase length",
        band2: "The poet uses short sentences with full stops to show the train leaving the platform quickly.",
        band5: "Halving each fragment across heavy full-stop caesurae mirrors the dwindling visual field as departure completes itself, replacing consolation with stark, unyielding finality.",
      },
      { id: "v-7", text: "\nBack home, the " },
      {
        id: "v-8",
        text: "inventory of untouched cups",
        layer: "diction",
        technique: "Bureaucratic diction juxtaposed with intimate domesticity",
        band2: "The speaker notices that there are several unused cups left behind in the kitchen at home.",
        band5: "Calling household crockery an “inventory” applies cold accounting register to intimate absence, exposing how emotional shock shields itself by cataloguing loss as inanimate stock.",
      },
      { id: "v-9", text: " holds steady on the shelf." },
    ],
  },
];

function CloseReadingWorkbench() {
  const [passageId, setPassageId] = useState<"prose" | "poetry">("prose");
  const [activeLayers, setActiveLayers] = useState<Record<LayerKey, boolean>>({
    diction: true,
    syntax: false,
    imagery: true,
    tone: false,
  });
  const [selectedSegId, setSelectedSegId] = useState<string>("p-4");

  const passage = WORKBENCH_PASSAGES.find((p) => p.id === passageId) ?? WORKBENCH_PASSAGES[0];
  const annotatedSegs = passage.segments.filter((s) => s.layer !== undefined);
  const activeCount = LAYER_META.filter((m) => activeLayers[m.key]).length;

  const activeAnnotatedSegs = annotatedSegs.filter((s) => s.layer && activeLayers[s.layer]);
  const selectedSeg =
    activeAnnotatedSegs.find((s) => s.id === selectedSegId) ??
    activeAnnotatedSegs[0] ??
    null;

  const toggleLayer = (key: LayerKey) => {
    setActiveLayers((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      if (next[key]) {
        const match = passage.segments.find((s) => s.layer === key);
        if (match) setSelectedSegId(match.id);
      }
      return next;
    });
  };

  const handlePassageChange = (nextId: "prose" | "poetry") => {
    setPassageId(nextId);
    const nextPassage = WORKBENCH_PASSAGES.find((p) => p.id === nextId) ?? WORKBENCH_PASSAGES[0];
    const firstActive = nextPassage.segments.find((s) => s.layer && activeLayers[s.layer]);
    if (firstActive) setSelectedSegId(firstActive.id);
  };

  const setAllLayers = (on: boolean) => {
    setActiveLayers({ diction: on, syntax: on, imagery: on, tone: on });
    if (on) {
      const first = passage.segments.find((s) => s.layer !== undefined);
      if (first) setSelectedSegId(first.id);
    }
  };

  const bandLabel =
    activeCount === 0
      ? "Band 1–2"
      : activeCount === 1
        ? "Band 3"
        : activeCount <= 3
          ? "Band 4"
          : "Band 5";
  const bandTone: "bad" | "ink" | "brand" | "good" =
    activeCount === 0 ? "bad" : activeCount === 1 ? "ink" : activeCount <= 3 ? "brand" : "good";

  return (
    <WidgetFrame
      title="Close-Reading Annotation Workbench"
      tryThis={[
        "Toggle **Diction**, **Syntax**, **Imagery**, and **Tone & Irony** layers to illuminate authorial choices inside an unseen extract.",
        "Tap any highlighted phrase to compare **Band 2 Plot Summary** against **Band 5 Evaluative Close Reading**.",
        "Switch between **Prose Fiction** and **Lyric Poetry** to see how the same 4 craft lenses transfer across forms.",
      ]}
      caption={
        activeCount === 0
          ? "With zero analytical layers switched on, a passage reads like flat storyline — turn on at least one craft layer above to unlock Choice → Mechanism → Effect commentary."
          : activeCount < 4
            ? `You have ${activeCount} of 4 craft layers active. Layering all four reveals how diction, syntax, imagery, and tonal irony reinforce one unified conceptual argument.`
            : "All 4 craft layers active! Notice how top-band IB commentary weaves diction, syntax, imagery, and tone together rather than spotting isolated devices."
      }
    >
      <div className="space-y-4">
        {/* Top controls */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Select unseen literary form"
            value={passageId}
            onChange={handlePassageChange}
            options={WORKBENCH_PASSAGES.map((p) => ({ value: p.id, label: p.label }))}
          />
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setAllLayers(true)}
              className="btn btn-secondary btn-sm"
            >
              All 4 Layers
            </button>
            <button
              type="button"
              onClick={() => setAllLayers(false)}
              className="btn btn-ghost btn-sm"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Layer Toggle Chips */}
        <div role="group" aria-label="Analytical annotation layers" className="flex flex-wrap gap-2">
          {LAYER_META.map((m) => {
            const on = activeLayers[m.key];
            return (
              <button
                key={m.key}
                type="button"
                aria-pressed={on}
                onClick={() => toggleLayer(m.key)}
                className={`rounded-full border px-3 py-1.5 text-xs font-extrabold transition ${
                  on ? m.chipOn : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                }`}
              >
                {on ? "✓ " : "+ "}
                {m.label}
              </button>
            );
          })}
        </div>

        {/* Unseen Literary Passage Card */}
        <div className="rounded-xl border border-line bg-surface-2 p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-brand">
              {passage.title}
            </span>
            <span className="text-xs text-ink-2">{passage.formNote}</span>
          </div>
          <p className="mt-3 whitespace-pre-line font-serif text-base leading-relaxed text-ink">
            {passage.segments.map((seg) => {
              if (!seg.layer || !activeLayers[seg.layer]) {
                return <span key={seg.id}>{seg.text}</span>;
              }
              const meta = LAYER_BY_KEY[seg.layer];
              const isSelected = selectedSeg?.id === seg.id;
              return (
                <button
                  key={seg.id}
                  type="button"
                  onClick={() => setSelectedSegId(seg.id)}
                  aria-pressed={isSelected}
                  className={`inline cursor-pointer rounded px-1 py-0.5 text-left font-serif transition ${meta.highlight} ${
                    isSelected ? "ring-2 ring-ink" : "hover:opacity-90"
                  }`}
                >
                  {seg.text}
                </button>
              );
            })}
          </p>
        </div>

        {/* Selected Phrase Comparison: Band 2 vs Band 5 */}
        {selectedSeg && selectedSeg.layer ? (
          <div className="space-y-2.5 rounded-xl border border-line bg-surface p-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-extrabold ${
                  LAYER_BY_KEY[selectedSeg.layer].badge
                }`}
              >
                {LAYER_BY_KEY[selectedSeg.layer].label}
              </span>
              <span className="text-xs font-bold text-ink-2">{selectedSeg.technique}</span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-bad/30 bg-bad-soft p-3">
                <div className="text-xs font-extrabold uppercase tracking-wide text-bad">
                  Band 2 · Plot Summary / Feature-Spotting
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink">{selectedSeg.band2}</p>
              </div>
              <div className="rounded-xl border border-good/30 bg-good-soft p-3">
                <div className="text-xs font-extrabold uppercase tracking-wide text-good">
                  Band 5 · Choice → Mechanism → Effect
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink">{selectedSeg.band5}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-line bg-surface p-4 text-center text-sm text-ink-2">
            Activate one or more craft layers above to inspect Band 2 vs Band 5 commentary.
          </div>
        )}

        {/* Live Metrics */}
        <div className="grid grid-cols-3 gap-2">
          <Readout label="Active Layers" value={`${activeCount} / 4`} tone="brand" />
          <Readout label="Craft Moves" value={activeAnnotatedSegs.length} tone="ink" />
          <Readout label="Criterion B Est." value={bandLabel} tone={bandTone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// WIDGET 2: Conceptual Thesis Upgrade Lab
// ============================================================================
type GenreId = "prose" | "poetry" | "drama" | "nonfiction";

interface ThesisCase {
  id: GenreId;
  label: string;
  context: string;
  /** Indexed by 3-bit key: `${agency?1:0}${mech?1:0}${tension?1:0}` */
  variants: Record<string, string>;
}

const THESIS_CASES: readonly ThesisCase[] = [
  {
    id: "prose",
    label: "Prose",
    context: "Unseen short story: a widow tends an overgrown glass conservatory facing coastal salt decay.",
    variants: {
      "000": "In this extract, an older grandmother goes into her misty conservatory every morning and cuts dead branches from her lemon trees.",
      "100": "In this extract, the writer uses spectral imagery and clinical diction while describing the grandmother cutting dead lemon branches.",
      "010": "The extract focuses carefully on how pruning dead stems every morning turns the grandmother's garden routine into quiet emotional discipline.",
      "001": "In this extract, the grandmother's morning pruning reflects both steadfast dignity and quiet denial in the face of ageing and loss.",
      "110": "Through spectral imagery and clinical surgical diction, the writer transforms morning pruning into an obsessive ritual of control.",
      "101": "Using spectral imagery and clinical diction, the writer explores a tension between steadfast dignity and quiet denial of mortality.",
      "011": "By elevating daily pruning into disciplined ritual, the extract holds steadfast dignity and poignant denial of loss in unresolved tension.",
      "111": "Through spectral imagery and clinical surgical diction, the writer recasts morning pruning as a ritual that hovers ambiguously between dignified resilience and poignant denial of mortality.",
    },
  },
  {
    id: "poetry",
    label: "Poetry",
    context: "Unseen lyric poem: a family sweeps an empty sold house and spots childhood pencil notches on a doorframe.",
    variants: {
      "000": "This poem is about a family sweeping out their old empty house and noticing pencil marks on the wooden doorframe before new buyers move in.",
      "100": "The poet uses domestic imagery, a tonal shift, and closing symbolism about white paint throughout this poem on moving house.",
      "010": "The poem focuses closely on how sweeping bare walls and touching doorframe notches reveal the emotional difficulty of leaving home.",
      "001": "This poem deals with memory and change, showing how selling a house creates both fresh starts for strangers and loss for the old family.",
      "110": "By contrasting bare wall silhouettes with intimate doorframe notches, the poet compresses years of childhood growth into quiet physical traces.",
      "101": "Using bare wall imagery and the closing symbol of white paint, the poet explores the conflict between family remembrance and commercial erasure.",
      "011": "Turning vanished wall frames and doorframe notches into silent archives, the poem balances incoming commercial renewal against irreversible familial erasure.",
      "111": "By pairing stark visual absences with a sudden mid-laugh tonal fracture, the poet frames domestic sale as a quiet collision between commercial renewal and fragile, erasable family history.",
    },
  },
  {
    id: "drama",
    label: "Drama",
    context: "Unseen stage scene: two siblings argue over their late father's memory while an offstage kettle boils.",
    variants: {
      "000": "In this scene, Nora and Sam sit at a bright kitchen table arguing about their late father while a kettle starts boiling offstage.",
      "100": "The playwright uses stage directions, props like a spoon and letters, and offstage sound effects in this dramatic scene.",
      "010": "The scene builds sharp psychological friction as Nora challenges public praise of her father while Sam keeps polishing a spoon in silence.",
      "001": "This dramatic argument explores the clash between telling comforting myths about the dead and insisting on messy, painful honesty.",
      "110": "Through repetitive stage business and the shrieking offstage kettle, the playwright externalises suppressed family tension beneath polite dialogue.",
      "101": "Using unopened sympathy cards and shifting dialogue registers, the playwright explores a conflict between protective mercy and honest remembrance.",
      "011": "As polite condolence collides with transactional defence, the scene leaves protective comfort for survivors locked in unresolved tension with truthful memory.",
      "111": "By contrasting controlled physical busywork against a shrieking offstage kettle and echoing transactional diction, the playwright stages an unresolved ethical clash between protective myth and fidelity to a flawed life.",
    },
  },
  {
    id: "nonfiction",
    label: "Non-Fiction",
    context: "Unseen memoir essay: a migrant narrator leaves family photos behind due to luggage limits, later buying strangers' postcards.",
    variants: {
      "000": "In this memoir, the narrator leaves family photographs behind when moving away and later buys old postcards of strangers in bookshops.",
      "100": "The essayist uses anecdotal structure, economic diction, and a closing metaphor about weight limits to make the essay engaging.",
      "010": "The memoir gradually peels away practical excuses about monsoon humidity and luggage weight to expose lingering grief over displacement.",
      "001": "This memoir reflects both practical survival during migration and an aching need to preserve small everyday moments from erasure.",
      "110": "Through defensive economic diction and a pivotal temporal turn, the essayist exposes how brisk pragmatism masks the trauma of exile.",
      "101": "Using selective omission and a recurring weight-limit motif, the essayist examines the tension between material survival and inherited memory.",
      "011": "Pivoting from brisk luggage calculations to rescuing strangers' faded postcards, the essay weighs unavoidable material limits against quiet defiance of forgetting.",
      "111": "By pairing brisk economic rationalisation with a poignant structural echo of the “weight limit”, the memoirist casts buying strangers' postcards as both grief for a lost archive and quiet defiance of displacement's cold arithmetic.",
    },
  },
];

function ThesisUpgradeLab() {
  const [genre, setGenre] = useState<GenreId>("prose");
  const [agency, setAgency] = useState(false);
  const [mechanism, setMechanism] = useState(false);
  const [tension, setTension] = useState(false);

  const current = THESIS_CASES.find((c) => c.id === genre) ?? THESIS_CASES[0];
  const key = `${agency ? 1 : 0}${mechanism ? 1 : 0}${tension ? 1 : 0}`;
  const thesisText = current.variants[key];
  const score = (agency ? 1 : 0) + (mechanism ? 1 : 0) + (tension ? 1 : 0);

  const modeTitle =
    key === "000"
      ? "Plot Summary"
      : key === "100"
        ? "Technique-Spotting"
        : key === "010"
          ? "Implicit Commentary"
          : key === "001"
            ? "Thematic Generalisation"
            : key === "110"
              ? "Craft Analysis (No Tension)"
              : key === "101"
                ? "Claim Without Mechanism"
                : key === "011"
                  ? "Conceptual (Missing Craft)"
                  : "Band 5 IB Thesis";

  const projectedBand = score === 0 ? "Band 1–2" : score === 1 ? "Band 2–3" : score === 2 ? "Band 4" : "Band 5";
  const bandTone: "bad" | "ink" | "brand" | "good" =
    score === 0 ? "bad" : score === 1 ? "ink" : score === 2 ? "brand" : "good";

  const examinerFeedback =
    score === 3 ? (
      <>
        <strong>Band 5 ready!</strong> This thesis unites named authorial craft, an active analytical mechanism, and productive conceptual tension — launching Criteria A, B, and C cleanly.
      </>
    ) : (
      <>
        {!agency ? (
          <>
            Switch on <strong>1. Authorial Craft</strong> so the writer&rsquo;s formal choices — not characters — drive the sentence.{" "}
          </>
        ) : null}
        {!mechanism ? (
          <>
            Switch on <strong>2. Mechanism</strong> to replace generic verbs with <em>how</em> craft reshapes meaning.{" "}
          </>
        ) : null}
        {!tension ? (
          <>
            Switch on <strong>3. Conceptual Tension</strong> to replace flat topic labels with nuanced, arguable ambiguity.
          </>
        ) : null}
      </>
    );

  return (
    <WidgetFrame
      title="Conceptual Thesis Upgrade Lab"
      tryThis={[
        "Start from a **Band 2 plot-summary draft** and switch on the **3 IB Craft Levers** one by one.",
        "Test what happens when you turn on **Authorial Craft** *alone* (classic **Technique-Spotting**!) vs combining all three levers.",
        "Switch across **Prose**, **Poetry**, **Drama**, and **Non-Fiction** to see the exact same thesis architecture work in all 4 IB forms.",
      ]}
      caption={examinerFeedback}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Select literary form"
            value={genre}
            onChange={setGenre}
            options={THESIS_CASES.map((c) => ({ value: c.id, label: c.label }))}
          />
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => {
                setAgency(true);
                setMechanism(true);
                setTension(true);
              }}
              className="btn btn-primary btn-sm"
            >
              Band 5 All On
            </button>
            <button
              type="button"
              onClick={() => {
                setAgency(false);
                setMechanism(false);
                setTension(false);
              }}
              className="btn btn-ghost btn-sm"
            >
              Reset
            </button>
          </div>
        </div>

        <p className="text-xs font-semibold text-ink-2">
          <span className="font-extrabold text-ink">Context:</span> {current.context}
        </p>

        {/* 3 Independent Craft Upgrade Levers */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <button
            type="button"
            aria-pressed={agency}
            onClick={() => setAgency((v) => !v)}
            className={`rounded-xl border p-3 text-left transition ${
              agency
                ? "border-brand bg-brand-soft text-ink"
                : "border-line bg-surface-2 text-ink-2 hover:text-ink"
            }`}
          >
            <div className="flex items-center justify-between gap-1 text-xs font-extrabold uppercase">
              <span>1. Authorial Craft</span>
              <span>{agency ? "ON" : "OFF"}</span>
            </div>
            <p className="mt-1 text-xs leading-snug">
              Name exact formal choices &amp; attribute agency to the writer.
            </p>
          </button>

          <button
            type="button"
            aria-pressed={mechanism}
            onClick={() => setMechanism((v) => !v)}
            className={`rounded-xl border p-3 text-left transition ${
              mechanism
                ? "border-info bg-info-soft text-ink"
                : "border-line bg-surface-2 text-ink-2 hover:text-ink"
            }`}
          >
            <div className="flex items-center justify-between gap-1 text-xs font-extrabold uppercase">
              <span>2. Mechanism</span>
              <span>{mechanism ? "ON" : "OFF"}</span>
            </div>
            <p className="mt-1 text-xs leading-snug">
              Explain <em>how</em> language recasts, fractures, or externalises meaning.
            </p>
          </button>

          <button
            type="button"
            aria-pressed={tension}
            onClick={() => setTension((v) => !v)}
            className={`rounded-xl border p-3 text-left transition ${
              tension
                ? "border-good bg-good-soft text-ink"
                : "border-line bg-surface-2 text-ink-2 hover:text-ink"
            }`}
          >
            <div className="flex items-center justify-between gap-1 text-xs font-extrabold uppercase">
              <span>3. Conceptual Tension</span>
              <span>{tension ? "ON" : "OFF"}</span>
            </div>
            <p className="mt-1 text-xs leading-snug">
              Hold productive ambiguity or competing ideas rather than a flat moral.
            </p>
          </button>
        </div>

        {/* Live Composed Thesis Card */}
        <div
          className={`rounded-xl border-2 p-4 transition ${
            score === 3
              ? "border-good bg-good-soft/60"
              : score === 0
                ? "border-bad/50 bg-bad-soft/60"
                : "border-brand/40 bg-surface-2"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              Live Thesis Sentence
            </span>
            <span className="chip">{modeTitle}</span>
          </div>
          <p className="mt-2 font-serif text-base font-medium leading-relaxed text-ink">
            “{thesisText}”
          </p>
        </div>

        {/* Live Metrics */}
        <div className="grid grid-cols-3 gap-2">
          <Readout label="Levers Active" value={`${score} / 3`} tone="brand" />
          <Readout label="Diagnosis" value={score === 3 ? "Evaluative" : score === 0 ? "Retelling" : "Partial"} tone="ink" />
          <Readout label="IB Band Est." value={projectedBand} tone={bandTone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "close-reading-workbench",
    title: "Close-Reading Annotation Workbench",
    blurb: "Toggle Diction, Syntax, Imagery, and Tone/Irony layers on unseen prose & poetry to contrast Band 2 summary with Band 5 analysis.",
    Component: CloseReadingWorkbench,
  },
  {
    id: "thesis-upgrade-lab",
    title: "Conceptual Thesis Upgrade Lab",
    blurb: "Activate Authorial Craft, Analytical Mechanism, and Conceptual Tension levers to transform vague plot summary into a Band 5 IB thesis.",
    Component: ThesisUpgradeLab,
  },
];

export default widgets;
