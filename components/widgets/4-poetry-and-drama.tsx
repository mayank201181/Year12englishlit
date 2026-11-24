"use client";

import { useMemo, useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// ============================================================================
// WIDGET 1: Interactive Scansion, Caesura & Volta Inspector
// ============================================================================
interface SyllableBeat {
  text: string;
  stressed: boolean;
  footEnd?: boolean;
  caesuraAfter?: boolean;
}

interface SonnetLine {
  num: number;
  rhyme: "A" | "B" | "C" | "D";
  section: "Octave" | "Volta" | "Sestet";
  lineation: "End-stopped" | "Enjambed";
  metreTag: string;
  hasDisruption?: boolean;
  hasCaesura?: boolean;
  syllables: SyllableBeat[];
  analysis: string;
}

const SONNET_LINES: readonly SonnetLine[] = [
  {
    num: 1,
    rhyme: "A",
    section: "Octave",
    lineation: "End-stopped",
    metreTag: "Regular iambic pentameter",
    syllables: [
      { text: "She", stressed: false }, { text: "tra-", stressed: true, footEnd: true },
      { text: "ces", stressed: false }, { text: "coast-", stressed: true, footEnd: true },
      { text: "lines", stressed: false }, { text: "fa-", stressed: true, footEnd: true },
      { text: "ding", stressed: false }, { text: "on", stressed: true, footEnd: true },
      { text: "the", stressed: false }, { text: "wall,", stressed: true },
    ],
    analysis:
      "Regular rising iambs establish a measured, ritualistic rhythm as the persona traces disappearing geography—introducing the governing cartographic conceit inside domestic confinement.",
  },
  {
    num: 2,
    rhyme: "B",
    section: "Octave",
    lineation: "Enjambed",
    metreTag: "Regular iambic pentameter",
    syllables: [
      { text: "Where", stressed: false }, { text: "in-", stressed: true, footEnd: true },
      { text: "di-", stressed: false }, { text: "go", stressed: true, footEnd: true },
      { text: "me-", stressed: false }, { text: "ri-", stressed: true, footEnd: true },
      { text: "di-", stressed: false }, { text: "ans", stressed: true, footEnd: true },
      { text: "un-", stressed: false }, { text: "thread", stressed: true },
    ],
    analysis:
      "Enjambment leaves the verb 'unthread' spilling across the line break onto Line 3, syntactically enacting the steady unravelling of memory across the room.",
  },
  {
    num: 3,
    rhyme: "B",
    section: "Octave",
    lineation: "Enjambed",
    metreTag: "Iambic pentameter + medial caesura",
    hasCaesura: true,
    syllables: [
      { text: "A-", stressed: false }, { text: "cross", stressed: true, footEnd: true },
      { text: "the", stressed: false }, { text: "plas-", stressed: true, footEnd: true },
      { text: "ter,", stressed: false, caesuraAfter: true }, { text: "si-", stressed: true, footEnd: true },
      { text: "lent", stressed: false }, { text: "as", stressed: true, footEnd: true },
      { text: "the", stressed: false }, { text: "dead", stressed: true },
    ],
    analysis:
      "A medial comma caesura after 'plaster,' momentarily suspends motion before introducing quiet sibilance ('silent') and enjambing 'the dead' directly into Line 4's unanswered voice.",
  },
  {
    num: 4,
    rhyme: "A",
    section: "Octave",
    lineation: "End-stopped",
    metreTag: "Regular iambic pentameter",
    syllables: [
      { text: "Who", stressed: false }, { text: "ne-", stressed: true, footEnd: true },
      { text: "ver", stressed: false }, { text: "an-", stressed: true, footEnd: true },
      { text: "swered", stressed: false }, { text: "when", stressed: true, footEnd: true },
      { text: "she", stressed: false }, { text: "used", stressed: true, footEnd: true },
      { text: "to", stressed: false }, { text: "call.", stressed: true },
    ],
    analysis:
      "The enclosed ABBA rhyme closes with terminal full-stop end-stopping ('wall / call'), sealing the first quatrain like a shut room where grief echoes without reply.",
  },
  {
    num: 5,
    rhyme: "A",
    section: "Octave",
    lineation: "End-stopped",
    metreTag: "Regular iambic pentameter",
    syllables: [
      { text: "Each", stressed: false }, { text: "com-", stressed: true, footEnd: true },
      { text: "pass", stressed: false }, { text: "rose", stressed: true, footEnd: true },
      { text: "sits", stressed: false }, { text: "rus-", stressed: true, footEnd: true },
      { text: "ted", stressed: false }, { text: "in", stressed: true, footEnd: true },
      { text: "the", stressed: false }, { text: "hall,", stressed: true },
    ],
    analysis:
      "Repeating the A-rhyme sound ('hall') tightens claustrophobic enclosure; sibilant 'sits rusted' anchors navigational instruments in domestic corrosion and stasis.",
  },
  {
    num: 6,
    rhyme: "B",
    section: "Octave",
    lineation: "Enjambed",
    metreTag: "Regular iambic pentameter",
    syllables: [
      { text: "A", stressed: false }, { text: "brass", stressed: true, footEnd: true },
      { text: "ho-", stressed: false }, { text: "ri-", stressed: true, footEnd: true },
      { text: "zon", stressed: false }, { text: "ga-", stressed: true, footEnd: true },
      { text: "ther-", stressed: false }, { text: "ing", stressed: true, footEnd: true },
      { text: "the", stressed: false }, { text: "red", stressed: true },
    ],
    analysis:
      "Enjambment isolates 'red' at the line margin—briefly hinting at sunset warmth before Line 7 narrows it abruptly into 'autumn dust', undercutting romantic escape.",
  },
  {
    num: 7,
    rhyme: "B",
    section: "Octave",
    lineation: "Enjambed",
    metreTag: "Iambic pentameter + semicolon caesura",
    hasCaesura: true,
    syllables: [
      { text: "Of", stressed: false }, { text: "au-", stressed: true, footEnd: true },
      { text: "tumn", stressed: false }, { text: "dust;", stressed: true, footEnd: true, caesuraAfter: true },
      { text: "she", stressed: false }, { text: "counts", stressed: true, footEnd: true },
      { text: "the", stressed: false }, { text: "years", stressed: true, footEnd: true },
      { text: "in-", stressed: false }, { text: "stead", stressed: true },
    ],
    analysis:
      "The heavy semicolon caesura after 'dust;' splits decay from stagnant habit, while enjambment across 'instead / Of counting' drags her routine grimly downward.",
  },
  {
    num: 8,
    rhyme: "A",
    section: "Octave",
    lineation: "End-stopped",
    metreTag: "Regular iambic pentameter",
    syllables: [
      { text: "Of", stressed: false }, { text: "coun-", stressed: true, footEnd: true },
      { text: "ting", stressed: false }, { text: "foot-", stressed: true, footEnd: true },
      { text: "steps", stressed: false }, { text: "ne-", stressed: true, footEnd: true },
      { text: "ver", stressed: false }, { text: "meant", stressed: true, footEnd: true },
      { text: "to", stressed: false }, { text: "fall.", stressed: true },
    ],
    analysis:
      "Terminal end-stopping closes the Petrarchan octave (ABBAABBA) on a stark downward verb ('fall.'), bringing indoor paralysis to its lowest emotional ebb.",
  },
  {
    num: 9,
    rhyme: "C",
    section: "Volta",
    lineation: "End-stopped",
    metreTag: "Spondaic opening (/ /) + dash caesura",
    hasDisruption: true,
    hasCaesura: true,
    syllables: [
      { text: "Still—", stressed: true, caesuraAfter: true }, { text: "salt", stressed: true, footEnd: true },
      { text: "en-", stressed: false }, { text: "dures", stressed: true, footEnd: true },
      { text: "be-", stressed: false }, { text: "neath", stressed: true, footEnd: true },
      { text: "her", stressed: false }, { text: "wed-", stressed: true, footEnd: true },
      { text: "ding", stressed: false }, { text: "ring,", stressed: true },
    ],
    analysis:
      "CLASSIC LINE-9 VOLTA: Opening with a heavy spondee ('STILL—SALT') split by an em-dash caesura jolts the octave's steady iambs awake. 'Still' pivots double meaning ('motionless' → 'nevertheless'), launching resilient reframing.",
  },
  {
    num: 10,
    rhyme: "D",
    section: "Sestet",
    lineation: "End-stopped",
    metreTag: "Regular iambic pentameter",
    syllables: [
      { text: "A", stressed: false }, { text: "stub-", stressed: true, footEnd: true },
      { text: "born", stressed: false }, { text: "tide", stressed: true, footEnd: true },
      { text: "no", stressed: false }, { text: "parch-", stressed: true, footEnd: true },
      { text: "ment", stressed: false }, { text: "map", stressed: true, footEnd: true },
      { text: "can", stressed: false }, { text: "keep;", stressed: true },
    ],
    analysis:
      "Plosive emphasis ('stubborn tide... parchment map... keep') asserts living ocean force against fragile paper maps, transitioning to fresh alternating sestet rhymes (CDCDCD).",
  },
  {
    num: 11,
    rhyme: "C",
    section: "Sestet",
    lineation: "End-stopped",
    metreTag: "Trochaic inversion (/ ˘) in Foot 1",
    hasDisruption: true,
    syllables: [
      { text: "O-", stressed: true }, { text: "pen", stressed: false, footEnd: true },
      { text: "she", stressed: false }, { text: "flings", stressed: true, footEnd: true },
      { text: "the", stressed: false }, { text: "case-", stressed: true, footEnd: true },
      { text: "ment", stressed: false }, { text: "to", stressed: true, footEnd: true },
      { text: "the", stressed: false }, { text: "spring,", stressed: true },
    ],
    analysis:
      "An energetic trochaic inversion ('O-pen', / ˘) breaks the rising baseline on the very first syllable, physically enacting the sudden thrust of throwing open the window.",
  },
  {
    num: 12,
    rhyme: "D",
    section: "Sestet",
    lineation: "End-stopped",
    metreTag: "Regular iambic pentameter",
    syllables: [
      { text: "Un-", stressed: false }, { text: "lock-", stressed: true, footEnd: true },
      { text: "ing", stressed: false }, { text: "har-", stressed: true, footEnd: true },
      { text: "bours", stressed: false }, { text: "from", stressed: true, footEnd: true },
      { text: "their", stressed: false }, { text: "win-", stressed: true, footEnd: true },
      { text: "ter", stressed: false }, { text: "sleep,", stressed: true },
    ],
    analysis:
      "Steady iambs return with outward spatial expansion—shifting from enclosed indoor hall to wide harbour waters as alternating D-rhyme ('keep / sleep') unlocks forward cadence.",
  },
  {
    num: 13,
    rhyme: "C",
    section: "Sestet",
    lineation: "End-stopped",
    metreTag: "Regular iambic pentameter",
    syllables: [
      { text: "And", stressed: false }, { text: "learns", stressed: true, footEnd: true },
      { text: "that", stressed: false }, { text: "grief", stressed: true, footEnd: true },
      { text: "is", stressed: false }, { text: "not", stressed: true, footEnd: true },
      { text: "a", stressed: false }, { text: "fra-", stressed: true, footEnd: true },
      { text: "gile", stressed: false }, { text: "thing,", stressed: true },
    ],
    analysis:
      "Plain monosyllabic diction ('learns that grief is not') rejects sentimental cliché, using composed iambic regularity to sound earned wisdom rather than denial.",
  },
  {
    num: 14,
    rhyme: "D",
    section: "Sestet",
    lineation: "End-stopped",
    metreTag: "Regular iambic pentameter",
    syllables: [
      { text: "But", stressed: false }, { text: "charts", stressed: true, footEnd: true },
      { text: "the", stressed: false }, { text: "wa-", stressed: true, footEnd: true },
      { text: "ters", stressed: false }, { text: "where", stressed: true, footEnd: true },
      { text: "the", stressed: false }, { text: "cur-", stressed: true, footEnd: true },
      { text: "rents", stressed: false }, { text: "sweep.", stressed: true },
    ],
    analysis:
      "The closing line reclaims the opening cartography conceit ('charts'): grief is no longer a fading map on plaster, but active navigation across open water.",
  },
];

const RHYME_BADGE_STYLE: Record<"A" | "B" | "C" | "D", string> = {
  A: "bg-brand-soft text-brand border-brand/30",
  B: "bg-info-soft text-info border-info/30",
  C: "bg-accent-soft text-accent border-accent/30",
  D: "bg-good-soft text-good border-good/30",
};

function SonnetScansionInspector() {
  const [selectedNum, setSelectedNum] = useState<number>(9);
  const [showScansion, setShowScansion] = useState<boolean>(true);
  const [showLineation, setShowLineation] = useState<boolean>(true);
  const [showRhyme, setShowRhyme] = useState<boolean>(true);
  const [showVolta, setShowVolta] = useState<boolean>(true);

  const active = useMemo(
    () => SONNET_LINES.find((l) => l.num === selectedNum) ?? SONNET_LINES[8],
    [selectedNum],
  );

  const stressCount = useMemo(
    () => active.syllables.filter((s) => s.stressed).length,
    [active],
  );

  return (
    <WidgetFrame
      title="Interactive Scansion, Caesura & Volta Inspector"
      tryThis={[
        "Click **Line 9** (*Still—salt...*) and **Line 11** (*Open she flings...*) with **Scansion** enabled to see how a spondee and trochaic inversion shatter steady iambs.",
        "Toggle **Caesura & Lineation** to compare the Octave's enjambed spill (Lines 2–3, 6–7) against the Sestet's outward control.",
        "Toggle **Line-9 Volta Split** and **Rhyme Scheme** to watch enclosed `ABBAABBA` open into alternating `CDCDCD`.",
      ]}
      caption={
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip text-brand">Line {active.num} · {active.section}</span>
            <span className="chip">{active.metreTag}</span>
          </div>
          <p className="text-sm leading-relaxed text-ink">
            <strong>IB Analytical Effect:</strong> {active.analysis}
          </p>
        </div>
      }
    >
      {/* Toggle Lenses */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Prosody annotation layers">
          <button
            type="button"
            aria-pressed={showScansion}
            onClick={() => setShowScansion((v) => !v)}
            className={`btn btn-sm ${showScansion ? "btn-primary" : "btn-secondary"}`}
          >
            Scansion (˘ /)
          </button>
          <button
            type="button"
            aria-pressed={showLineation}
            onClick={() => setShowLineation((v) => !v)}
            className={`btn btn-sm ${showLineation ? "btn-primary" : "btn-secondary"}`}
          >
            Caesura &amp; Lineation
          </button>
          <button
            type="button"
            aria-pressed={showRhyme}
            onClick={() => setShowRhyme((v) => !v)}
            className={`btn btn-sm ${showRhyme ? "btn-primary" : "btn-secondary"}`}
          >
            Rhyme Scheme
          </button>
          <button
            type="button"
            aria-pressed={showVolta}
            onClick={() => setShowVolta((v) => !v)}
            className={`btn btn-sm ${showVolta ? "btn-primary" : "btn-secondary"}`}
          >
            Line-9 Volta
          </button>
        </div>
        <Stepper
          label="Inspect Line"
          value={selectedNum}
          min={1}
          max={14}
          onChange={setSelectedNum}
          format={(n) => `L${n}`}
        />
      </div>

      {/* Live Readouts */}
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Readout label="Phase" value={active.section} tone={active.section === "Volta" ? "bad" : "brand"} />
        <Readout label="Syllables / Stresses" value={`${active.syllables.length} / ${stressCount}`} tone="ink" />
        <Readout label="Lineation" value={active.lineation} tone={active.lineation === "Enjambed" ? "brand" : "good"} />
        <Readout label="Rhyme" value={`${active.rhyme} (${active.num <= 8 ? "Enclosed" : "Alternating"})`} tone="ink" />
      </div>

      {/* Interactive 14-Line Sonnet Stage */}
      <div className="mt-4 rounded-xl border border-line bg-surface-2/60 p-3 sm:p-4">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 border-b border-line pb-2">
          <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
            Original Unseen Petrarchan Sonnet: “The Cartographer’s Widow”
          </span>
          <span className="text-xs text-ink-2">Tap any line to inspect its prosodic craft</span>
        </div>

        <div className="space-y-1">
          {SONNET_LINES.map((line) => {
            const isSelected = line.num === selectedNum;
            const isVoltaRow = showVolta && line.num === 9;
            return (
              <div key={line.num}>
                {isVoltaRow ? (
                  <div className="my-2 flex items-center gap-2 rounded-lg bg-accent-soft px-2.5 py-1 text-xs font-extrabold text-accent">
                    <span>⚡ LINE 9 VOLTA — Structural &amp; Tonal Turn (Octave → Sestet)</span>
                  </div>
                ) : null}
                <button
                  type="button"
                  onClick={() => setSelectedNum(line.num)}
                  aria-current={isSelected ? "true" : undefined}
                  className={`flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-left transition ${
                    isSelected
                      ? "bg-surface ring-2 ring-brand shadow-sm"
                      : "hover:bg-surface/80"
                  }`}
                >
                  <div className="flex min-w-0 flex-1 items-baseline gap-2">
                    <span className="w-5 shrink-0 text-right text-xs font-bold tabular-nums text-ink-2">
                      {line.num}
                    </span>
                    <div className="flex flex-wrap items-end gap-x-1 gap-y-0.5 leading-tight">
                      {line.syllables.map((syl, idx) => (
                        <span key={`${line.num}-${idx}`} className="inline-flex items-end">
                          <span className="inline-flex flex-col items-center">
                            {showScansion ? (
                              <span
                                className={`text-[10px] font-extrabold leading-none ${
                                  syl.stressed ? "text-brand" : "text-ink-2/70"
                                }`}
                              >
                                {syl.stressed ? "/" : "˘"}
                              </span>
                            ) : null}
                            <span
                              className={`text-sm sm:text-[15px] ${
                                showScansion && syl.stressed
                                  ? "font-extrabold text-ink"
                                  : "font-medium text-ink/90"
                              } ${
                                line.hasDisruption && idx <= 1 && showScansion
                                  ? "rounded bg-accent-soft px-0.5 text-accent"
                                  : ""
                              }`}
                            >
                              {syl.text}
                            </span>
                          </span>
                          {showLineation && syl.caesuraAfter ? (
                            <span
                              className="mx-1 rounded bg-bad-soft px-1 text-[11px] font-extrabold text-bad"
                              title="Medial Caesura"
                            >
                              ||
                            </span>
                          ) : null}
                          {showScansion && syl.footEnd && !syl.caesuraAfter ? (
                            <span className="mx-0.5 text-xs text-line" aria-hidden>
                              |
                            </span>
                          ) : null}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right badges: Lineation + Rhyme */}
                  <div className="flex shrink-0 items-center gap-1.5">
                    {showLineation ? (
                      <span
                        className={`rounded px-1.5 py-0.5 text-[11px] font-bold ${
                          line.lineation === "Enjambed"
                            ? "bg-info-soft text-info"
                            : "bg-surface text-ink-2 border border-line"
                        }`}
                        title={line.lineation}
                      >
                        {line.lineation === "Enjambed" ? "→" : "▮"}
                      </span>
                    ) : null}
                    {showRhyme ? (
                      <span
                        className={`inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-extrabold ${RHYME_BADGE_STYLE[line.rhyme]}`}
                      >
                        {line.rhyme}
                      </span>
                    ) : null}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// WIDGET 2: Staging & Subtext Director's Console
// ============================================================================
type LightingMode = "amber" | "fluorescent" | "spot" | "brecht";

interface LightingProfile {
  label: string;
  modeName: string;
  audienceStance: string;
  bgFill: string;
  washFill: string;
  washOpacity: number;
  houseLit: boolean;
  cueText: string;
  analysisText: string;
}

const LIGHTING_PROFILES: Record<LightingMode, LightingProfile> = {
  amber: {
    label: "Warm Amber",
    modeName: "Domestic Naturalism",
    audienceStance: "Empathetic Immersion",
    bgFill: "#fffbeb",
    washFill: "#f59e0b",
    washOpacity: 0.22,
    houseLit: false,
    cueText: "Warm amber lamp-glow pools softly across the oak dining table; fourth wall intact.",
    analysisText:
      "Warm naturalistic lighting invites intimate empathy, making any verbal frostiness or spatial distance feel painfully ironic inside a cosy home.",
  },
  fluorescent: {
    label: "Harsh Fluorescent",
    modeName: "Stark Realism",
    audienceStance: "Clinical Scrutiny",
    bgFill: "#f0f9ff",
    washFill: "#38bdf8",
    washOpacity: 0.2,
    houseLit: false,
    cueText: "Cold overhead fluorescent strip-light flattens every shadow across the room.",
    analysisText:
      "Clinical overhead glare strips away domestic nostalgia, turning an ordinary household exchange into an interrogation where neither character can hide.",
  },
  spot: {
    label: "Chiaroscuro Spot",
    modeName: "Expressionist Tension",
    audienceStance: "Psychological Unease",
    bgFill: "#1e1b24",
    washFill: "#fef08a",
    washOpacity: 0.34,
    houseLit: false,
    cueText: "Deep gloom swallows the edges; one tight chiaroscuro beam isolates the unopened letter at centre.",
    analysisText:
      "Expressionist chiaroscuro shrinks the visible universe around the unopened letter, externalising obsessive dread and making silence feel claustrophobic.",
  },
  brecht: {
    label: "Brechtian Full House",
    modeName: "Epic Theatre (V-Effect)",
    audienceStance: "Critical Detachment",
    bgFill: "#f8fafc",
    washFill: "#e2e8f0",
    washOpacity: 0.35,
    houseLit: true,
    cueText: "Exposed white work-lamps flood BOTH stage and auditorium; a hanging placard reads 'WHO OWNS THE HOUSE DEED?'",
    analysisText:
      "Illuminating the auditorium shatters the fourth wall via Brechtian Verfremdungseffekt—preventing passive pathos so spectators judge the economic power struggle critically.",
  },
};

function StagingDirectorConsole() {
  const [lighting, setLighting] = useState<LightingMode>("amber");
  const [distance, setDistance] = useState<number>(3.0);
  const [pauseSec, setPauseSec] = useState<number>(3);

  const profile = LIGHTING_PROFILES[lighting];

  const proxemicZone = useMemo(() => {
    if (distance <= 1.0) return { name: "Intimate / Invasive", tone: "bad" as const, note: "Zero buffer: stepping inside 1 m converts polite talk into intense intimacy or physical intimidation." };
    if (distance <= 2.5) return { name: "Guarded Personal", tone: "brand" as const, note: "Negotiated boundary across the table: polite proximity conceals simmering mutual suspicion." };
    return { name: "Wide Estrangement", tone: "ink" as const, note: "A wide stage gulf isolates MARA and HENRIK on opposite flanks, visually enacting ideological rupture before a word lands." };
  }, [distance]);

  const pauseProfile = useMemo(() => {
    if (pauseSec === 0) return { cue: "(without hesitation)", label: "Rapid Deflection", note: "Zero pause accelerates brisk verbal fencing, masking emotion beneath clipped defensive speed." };
    if (pauseSec <= 2) return { cue: "(Beat.)", label: "Tactical Beat", note: "A short 1–2 s beat registers micro-hesitation—audiences catch Henrik weighing his next verbal move." };
    if (pauseSec <= 4) return { cue: "(Long Pinteresque pause.)", label: "Pinteresque Pause", note: "A charged 3–4 s pause lets unspoken accusation reverberate across the auditorium; silence carries heavier threat than the spoken sentence." };
    return { cue: "(Heavy oppressive silence — neither moves.)", label: "Full Silence", note: "A 5–6 s breakdown of dialogue collapses polite pretence entirely—forcing spectators to stare at the unopened letter and body posture." };
  }, [pauseSec]);

  // Compute SVG actor coordinates purely from distance (0.5 m to 5.0 m -> pixel half-span 28 to 158)
  const halfSpan = 28 + ((distance - 0.5) / 4.5) * 130;
  const maraX = +(220 - halfSpan).toFixed(1);
  const henrikX = +(220 + halfSpan).toFixed(1);
  const actorY = 104;
  const isDarkStage = lighting === "spot";
  const stageStroke = isDarkStage ? "#94a3b8" : "#881337";
  const labelInk = isDarkStage ? "#f8fafc" : "#241016";
  const mutedInk = isDarkStage ? "#cbd5e1" : "#6b4c56";

  return (
    <WidgetFrame
      title="Staging & Subtext Director's Console"
      tryThis={[
        "Keep the exact same four lines of dialogue—now switch Lighting from **Warm Amber** to **Chiaroscuro Spot** and **Brechtian Full House**.",
        "Drag **Proxemic Distance** from `0.5 m` (invasive closeness) out to `5.0 m` (estrangement) while watching the symbolic unopened letter stay locked at centre.",
        "Increase **Pinteresque Pause** from `0 s` to `5 s` to test how timed silence transforms *'Then perhaps we should sit down'* from casual hospitality into quiet menace.",
      ]}
      caption={
        <div className="space-y-1.5">
          <p className="text-sm font-bold text-ink">Live IB Performance Evaluation:</p>
          <p className="text-sm leading-relaxed text-ink">
            {profile.analysisText} {proxemicZone.note} {pauseProfile.note}
          </p>
        </div>
      }
    >
      {/* Controls */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Lighting &amp; Theatrical Mode</div>
          <Segmented<LightingMode>
            label="Lighting and theatrical staging mode"
            value={lighting}
            onChange={setLighting}
            options={[
              { value: "amber", label: "Warm Amber" },
              { value: "fluorescent", label: "Fluorescent" },
              { value: "spot", label: "Chiaroscuro" },
              { value: "brecht", label: "Brechtian" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Slider
            label="Proxemic Distance (MARA ↔ HENRIK)"
            value={distance}
            min={0.5}
            max={5.0}
            step={0.5}
            onChange={setDistance}
            format={(v) => `${v.toFixed(1)} m`}
          />
          <Slider
            label="Pause Before Final Line"
            value={pauseSec}
            min={0}
            max={6}
            step={1}
            onChange={setPauseSec}
            format={(v) => (v === 0 ? "0 s (no pause)" : `${v} s`)}
          />
        </div>
      </div>

      {/* Live Readouts */}
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <Readout label="Staging Mode" value={profile.modeName} tone="brand" />
        <Readout label="Proxemic Zone" value={proxemicZone.name} tone={proxemicZone.tone} />
        <Readout label="Silence Cue" value={pauseProfile.label} tone={pauseSec >= 3 ? "bad" : "ink"} />
      </div>

      {/* Interactive Stage Floorplan SVG */}
      <div className="mt-4 overflow-hidden rounded-xl border border-line bg-white p-2">
        <svg
          viewBox="0 0 440 225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`Live stage diagram showing ${profile.modeName}, Mara and Henrik separated by ${distance.toFixed(1)} metres across an unopened letter, with a ${pauseSec} second pause`}
          className="mx-auto block h-auto w-full max-w-[520px]"
        >
          {/* Stage Area */}
          <rect x="20" y="14" width="400" height="146" rx="10" fill={profile.bgFill} stroke={stageStroke} strokeWidth="2" />

          {/* Lighting Pool / Wash */}
          {lighting === "spot" ? (
            <ellipse cx="220" cy="102" rx="74" ry="44" fill={profile.washFill} opacity={profile.washOpacity} />
          ) : (
            <rect x="22" y="16" width="396" height="142" rx="8" fill={profile.washFill} opacity={profile.washOpacity} />
          )}

          {/* Brechtian Placard when active */}
          {lighting === "brecht" ? (
            <g>
              <rect x="108" y="22" width="224" height="22" rx="4" fill="#1e293b" />
              <text x="220" y="37" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#f8fafc">
                PLACARD: WHO OWNS THE HOUSE DEED?
              </text>
            </g>
          ) : (
            <text x="220" y="32" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={mutedInk}>
              UPSTAGE — {profile.label.toUpperCase()}
            </text>
          )}

          {/* Centre Table & Symbolic Prop (Unopened Letter) */}
          <rect x="190" y="88" width="60" height="32" rx="5" fill={isDarkStage ? "#334155" : "#f5ebe0"} stroke={stageStroke} strokeWidth="1.3" />
          <rect x="207" y="97" width="26" height="14" rx="2" fill="#ffffff" stroke="#b45309" strokeWidth="1.4" />
          <polyline points="207,97 220,105 233,97" fill="none" stroke="#b45309" strokeWidth="1.2" />
          <text x="220" y="134" textAnchor="middle" fontSize="8.5" fontWeight="800" fill={isDarkStage ? "#fde047" : "#92400e"}>
            UNOPENED LETTER
          </text>

          {/* Proxemic Tension Line */}
          <line
            x1={maraX + 16}
            y1={actorY}
            x2={henrikX - 16}
            y2={actorY}
            stroke={isDarkStage ? "#fb7185" : "#be123c"}
            strokeWidth="2"
            strokeDasharray="5 3"
          />
          <rect x="195" y="61" width="50" height="18" rx="9" fill="#be123c" />
          <text x="220" y="73" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#ffffff">
            {distance.toFixed(1)} m
          </text>

          {/* Actor MARA */}
          <circle cx={maraX} cy={actorY} r="16" fill="#be123c" stroke="#ffffff" strokeWidth="2" />
          <text x={maraX} y={actorY + 3.5} textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#ffffff">
            M
          </text>
          <text x={maraX} y={actorY + 29} textAnchor="middle" fontSize="9.5" fontWeight="800" fill={labelInk}>
            MARA
          </text>

          {/* Actor HENRIK */}
          <circle cx={henrikX} cy={actorY} r="16" fill="#0369a1" stroke="#ffffff" strokeWidth="2" />
          <text x={henrikX} y={actorY + 3.5} textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#ffffff">
            H
          </text>
          <text x={henrikX} y={actorY + 29} textAnchor="middle" fontSize="9.5" fontWeight="800" fill={labelInk}>
            HENRIK
          </text>

          {/* Pause Pulse Badge */}
          {pauseSec >= 1 ? (
            <g>
              <rect x="318" y="47" width="90" height="20" rx="10" fill={pauseSec >= 3 ? "#fef3c7" : "#f1f5f9"} stroke={pauseSec >= 3 ? "#b45309" : "#94a3b8"} />
              <text x="363" y="60" textAnchor="middle" fontSize="9" fontWeight="800" fill={pauseSec >= 3 ? "#92400e" : "#475569"}>
                ⏸ {pauseSec}s SILENCE
              </text>
            </g>
          ) : null}

          {/* Fourth Wall Line */}
          <line
            x1="20"
            y1="168"
            x2="420"
            y2="168"
            stroke={profile.houseLit ? "#15803d" : "#b45309"}
            strokeWidth="2.4"
            strokeDasharray={profile.houseLit ? "3 6" : "10 4"}
          />
          <rect x="132" y="159" width="176" height="18" rx="9" fill={profile.houseLit ? "#15803d" : "#b45309"} />
          <text x="220" y="171" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ffffff">
            {profile.houseLit ? "FOURTH WALL BROKEN (V-EFFECT)" : "FOURTH WALL INTACT"}
          </text>

          {/* Audience Row */}
          <rect
            x="48"
            y="186"
            width="344"
            height="28"
            rx="10"
            fill={profile.houseLit ? "#fef9c3" : "#f1f5f9"}
            stroke={profile.houseLit ? "#ca8a04" : "#cbd5e1"}
            strokeWidth="1.4"
          />
          <text x="220" y="204" textAnchor="middle" fontSize="10" fontWeight="800" fill="#241016">
            AUDIENCE — {profile.audienceStance} {profile.houseLit ? "(House Lights UP)" : "(House Darkened)"}
          </text>
        </svg>
      </div>

      {/* Dynamically Generated Live Script Block */}
      <div className="mt-4 rounded-xl border border-line bg-surface-2 p-3 text-sm leading-relaxed text-ink">
        <p className="italic text-ink-2">
          [{profile.cueText} MARA and HENRIK stand {distance.toFixed(1)} m apart with the unopened letter between them.]
        </p>
        <div className="mt-2 space-y-1">
          <p>
            <strong>MARA:</strong> You left the porch light on again.
          </p>
          <p>
            <strong>HENRIK:</strong> I thought you&apos;d forgotten your keys.
          </p>
          <p>
            <strong>MARA:</strong> I always remember my keys.
          </p>
          <p>
            <strong>HENRIK:</strong>{" "}
            <span className="font-semibold italic text-brand">{pauseProfile.cue}</span> Then perhaps we should sit down.
          </p>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "sonnet-scansion-volta-inspector",
    title: "Interactive Scansion, Caesura & Volta Inspector",
    blurb:
      "Explore an original 14-line Petrarchan sonnet—toggling stressed beats, caesurae, enjambment, rhyme scheme, and the Line-9 volta turn with live IB analytical notes.",
    Component: SonnetScansionInspector,
  },
  {
    id: "staging-subtext-director-console",
    title: "Staging & Subtext Director's Console",
    blurb:
      "Direct lighting, proxemic distance, and Pinteresque pause length on an unseen dramatic dialogue to see how stagecraft transforms subtext and audience stance.",
    Component: StagingDirectorConsole,
  },
];

export default widgets;
