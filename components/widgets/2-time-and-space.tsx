"use client";

import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Widget 1: Context-Shift Reception Matrix
// ---------------------------------------------------------------------------
interface ReceptionDilemma {
  id: string;
  label: string;
  eraPlace: string;
  spatialTag: string;
  extract: string;
  anchors: string[];
  production: {
    horizonTitle: string;
    alignment: number; // 0..100
    friction: number; // 0..100
    dominantNorm: string;
    reading: string;
    latentTension: string;
  };
  reception: {
    horizonTitle: string;
    alignment: number;
    friction: number;
    dominantNorm: string;
    reading: string;
    latentTension: string;
  };
  band5Anchor: string;
}

const RECEPTION_DILEMMAS: readonly ReceptionDilemma[] = [
  {
    id: "ledger",
    label: "1848 Betrothal Letter",
    eraPlace: "1848 · Commercial Port City",
    spatialTag: "Domestic Space",
    extract:
      "“A wise daughter knows that her hand secures not merely her own hearth, but the credit of her father's ledger; yield quietly to Mr. Halstead's offer, and every respectable parlour will praise your prudence.”",
    anchors: ["“hearth” vs “credit of her father's ledger”", "“yield quietly”", "“respectable parlour”"],
    production: {
      horizonTitle: "1848 Bourgeois Production Horizon",
      alignment: 82,
      friction: 28,
      dominantNorm: "Filial obedience, family solvency, and genteel respectability viewed as prudent duty.",
      reading:
        "Original commercial-class readers could hear earnest paternal foresight protecting a household's fragile economic standing.",
      latentTension:
        "Even in 1848, yoking intimate 'hearth' directly to financial 'ledger' quietly reveals marriage functioning as commercial collateral.",
    },
    reception: {
      horizonTitle: "Contemporary Global Reception Horizon",
      alignment: 18,
      friction: 90,
      dominantNorm: "Personal autonomy, gendered agency, and resistance to patriarchal commodification.",
      reading:
        "Modern readers immediately hear quiet coercion in the imperative 'yield quietly' and surveillance in 'every respectable parlour'.",
      latentTension:
        "Reception does not invent coercion externally—it amplifies the transactional clash between affection and accounting already wired into the wording.",
    },
    band5Anchor:
      "While an 1848 horizon could read the father's appeal to 'prudence' as familial duty, contemporary reception exposes how pairing 'hearth' with 'credit of her father's ledger' embeds economic coercion inside polite domesticity.",
  },
  {
    id: "railway",
    label: "1906 Imperial Travelogue",
    eraPlace: "1906 · Colonial Frontier Valley",
    spatialTag: "Colonial Space",
    extract:
      "“By dusk our railway had stitched the unruly valley to the capital; the stationmaster saluted beneath the new clock-tower, and even the river seemed to learn punctuality.”",
    anchors: ["“stitched the unruly valley”", "“new clock-tower”", "“seemed to learn punctuality”"],
    production: {
      horizonTitle: "1906 Imperial Progress Horizon",
      alignment: 86,
      friction: 22,
      dominantNorm: "Rail engineering and standardised clock-time celebrated as triumphant 'civilising order'.",
      reading:
        "Metropolitan readers in 1906 encountered the crisp cadence and domestic verb 'stitched' as reassuring evidence of administrative progress.",
      latentTension:
        "Calling the natural landscape 'unruly' betrays underlying imperial anxiety about territories that resist imposed timetables.",
    },
    reception: {
      horizonTitle: "Postcolonial & Ecocritical Reception",
      alignment: 14,
      friction: 92,
      dominantNorm: "Scepticism toward imperial cartography, ecological domination, and cultural erasure.",
      reading:
        "Modern readers hear striking hubris in forcing a living river to 'learn punctuality', with the hedging verb 'seemed' exposing the narrator's illusion of control.",
      latentTension:
        "Shifting reception turns celebratory travel prose into an unintentional self-indictment of colonial arrogance anchored in personification.",
    },
    band5Anchor:
      "Through the triumphant personification of a river that 'seemed to learn punctuality', the prose registers 1906 faith in imperial clock-time while unwittingly inviting postcolonial readers to interrogate colonial hubris.",
  },
  {
    id: "auction",
    label: "1859 Auction Monologue",
    eraPlace: "1859 · Metropolitan Museum Sale",
    spatialTag: "Colonial / Institutional Space",
    extract:
      "“Do not call it plunder, gentlemen—call it rescue. Look how calmly this bronze Bodhisattva rests beneath our gas-lamps, spared the damp of a temple no map of ours ever marked. Bid briskly.”",
    anchors: ["“not plunder… call it rescue”", "“no map of ours ever marked”", "“Bid briskly”"],
    production: {
      horizonTitle: "1859 Imperial Exhibition Horizon",
      alignment: 68,
      friction: 45,
      dominantNorm: "Metropolitan museums framed as benevolent universal custodians rescuing 'neglected' antiquities.",
      reading:
        "Victorian exhibition culture supplied familiar rhetoric of 'rescue', though banning the word 'plunder' already stirs uneasy defensive irony.",
      latentTension:
        "Dropping abruptly from moral 'rescue' to 'Bid briskly' exposes raw commercial appetite beneath gentlemanly curation.",
    },
    reception: {
      horizonTitle: "Contemporary Repatriation Reception",
      alignment: 10,
      friction: 95,
      dominantNorm: "Cultural restitution, heritage sovereignty, and critique of imperial appropriation.",
      reading:
        "Global audiences today hear scalding dramatic irony in 'no map of ours ever marked'—equating imperial ignorance with lack of rightful ownership.",
      latentTension:
        "Modern outrage requires zero presentist preaching because euphemism and auctioneer bathos already indict the speaker from within.",
    },
    band5Anchor:
      "By collapsing the pious euphemism 'rescue' into the abrupt commercial imperative 'Bid briskly', the dramatic monologue exposes imperial acquisition from inside the speaker's own voice—an irony sharpened by contemporary repatriation debates.",
  },
  {
    id: "border",
    label: "1951 Customs Exchange",
    eraPlace: "1951 · Post-Partition Checkpoint",
    spatialTag: "Borderland / Liminal Space",
    extract:
      "“Your surname changed twice on the registry, Madam. Which side of the line owns your stamp?” — “(quietly) The mango tree in our yard did not move its roots when you drew your ink.”",
    anchors: ["“Which side… owns your stamp?”", "“(quietly)” stage cue", "“mango tree… roots” vs “drew your ink”"],
    production: {
      horizonTitle: "1951 Post-Partition Bureaucratic Horizon",
      alignment: 54,
      friction: 64,
      dominantNorm: "Newly independent states asserting sovereignty urgently through passports, registries, and cartographic lines.",
      reading:
        "Original audiences navigating fresh national borders immediately recognised the officer's procedural insistence alongside raw pain of divided families.",
      latentTension:
        "The stage cue '(quietly)' turns quiet rooted memory into dignified counter-authority against administrative paperwork.",
    },
    reception: {
      horizonTitle: "Contemporary Transnational Reception",
      alignment: 22,
      friction: 88,
      dominantNorm: "Awareness of global displacement, statelessness, and hybrid diasporic belonging.",
      reading:
        "Today's international audiences resonate broadly with the contrast between arbitrary 'ink' and rooted ecological continuity across every modern border crisis.",
      latentTension:
        "Moving across decades expands a specific 1951 partition moment into a transnational meditation on how state boundaries clash with lived memory.",
    },
    band5Anchor:
      "Contrasting the officer's clerical interrogative ('owns your stamp') with the quiet organic metaphor of 'roots' ignoring drawn 'ink', the dialogue turns a 1951 checkpoint into an enduring critique of arbitrary borders.",
  },
];

type LensMode = "production" | "reception" | "compare";

function ContextShiftReceptionMatrix() {
  const [dilemmaId, setDilemmaId] = useState<string>(RECEPTION_DILEMMAS[0].id);
  const [mode, setMode] = useState<LensMode>("compare");

  const current = RECEPTION_DILEMMAS.find((d) => d.id === dilemmaId) ?? RECEPTION_DILEMMAS[0];
  const activeLens = mode === "production" ? current.production : current.reception;

  const prodFrictionX = 36 + (current.production.friction / 100) * 288;
  const recFrictionX = 36 + (current.reception.friction / 100) * 288;

  return (
    <WidgetFrame
      title="Context-Shift Reception Matrix"
      tryThis={[
        "Pick an unseen extract and toggle between **Original Production** and **Contemporary Reception**.",
        "Notice that the **highlighted craft anchors never change**—only the moral horizon brought to them shifts!",
      ]}
      caption={
        <div>
          <span className="font-bold text-brand">Band 5 Anchor-in-Craft Model: </span>
          {current.band5Anchor}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Choose unseen extract">
          {RECEPTION_DILEMMAS.map((d) => {
            const selected = d.id === current.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setDilemmaId(d.id)}
                aria-pressed={selected}
                className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                  selected
                    ? "border-brand bg-brand text-brand-ink shadow-sm"
                    : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wide text-ink-2">
            <span>{current.eraPlace}</span>
            <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-brand">{current.spatialTag}</span>
          </div>
          <blockquote className="mt-2 text-sm italic leading-relaxed text-ink">{current.extract}</blockquote>
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-ink-2">Fixed textual anchors:</span>
            {current.anchors.map((a) => (
              <span key={a} className="rounded-md border border-line bg-surface px-2 py-0.5 text-xs font-semibold text-ink">
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<LensMode>
            label="Interpretive reception lens"
            value={mode}
            onChange={setMode}
            options={[
              { value: "production", label: "Original Production" },
              { value: "reception", label: "Contemporary Reception" },
              { value: "compare", label: "Side-by-Side Shift" },
            ]}
          />
        </div>

        {/* Live Horizon Friction Gauge SVG */}
        <div className="rounded-xl border border-line bg-surface p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 88"
            className="h-auto w-full"
            role="img"
            aria-label={`Horizon tension gauge comparing original production friction (${current.production.friction}%) with contemporary reception friction (${current.reception.friction}%)`}
          >
            <text x="180" y="15" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--ink-2)">
              HORIZON FRICTION GAUGE (FIXED WORDS · SHIFTING READER TENSION)
            </text>
            <line x1="36" y1="46" x2="324" y2="46" stroke="var(--line)" strokeWidth="6" strokeLinecap="round" />
            <text x="36" y="74" textAnchor="start" fontSize="9.5" fontWeight="700" fill="var(--good)">
              Norm Alignment
            </text>
            <text x="324" y="74" textAnchor="end" fontSize="9.5" fontWeight="700" fill="var(--brand)">
              Sharp Critical Friction
            </text>
            {mode === "compare" ? (
              <line
                x1={prodFrictionX}
                y1="46"
                x2={recFrictionX}
                y2="46"
                stroke="var(--accent)"
                strokeWidth="3"
                strokeDasharray="4 3"
              />
            ) : null}
            {mode === "production" || mode === "compare" ? (
              <g>
                <circle cx={prodFrictionX} cy="46" r="8" fill="var(--info)" stroke="var(--surface)" strokeWidth="2" />
                <text x={prodFrictionX} y="32" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="var(--info)">
                  Prod {current.production.friction}%
                </text>
              </g>
            ) : null}
            {mode === "reception" || mode === "compare" ? (
              <g>
                <circle cx={recFrictionX} cy="46" r="8" fill="var(--brand)" stroke="var(--surface)" strokeWidth="2" />
                <text x={recFrictionX} y="32" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="var(--brand)">
                  Rec {current.reception.friction}%
                </text>
              </g>
            ) : null}
          </svg>
        </div>

        {mode === "compare" ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-info-soft/40 p-3.5">
              <div className="text-xs font-extrabold uppercase tracking-wide text-info">
                {current.production.horizonTitle}
              </div>
              <p className="mt-1.5 text-xs text-ink-2">
                <strong className="text-ink">Cultural norm:</strong> {current.production.dominantNorm}
              </p>
              <p className="mt-1.5 text-xs text-ink-2">
                <strong className="text-ink">Reading:</strong> {current.production.reading}
              </p>
              <p className="mt-1.5 text-xs text-ink-2">
                <strong className="text-ink">Latent crack:</strong> {current.production.latentTension}
              </p>
            </div>
            <div className="rounded-xl border border-line bg-brand-soft/40 p-3.5">
              <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
                {current.reception.horizonTitle}
              </div>
              <p className="mt-1.5 text-xs text-ink-2">
                <strong className="text-ink">Cultural norm:</strong> {current.reception.dominantNorm}
              </p>
              <p className="mt-1.5 text-xs text-ink-2">
                <strong className="text-ink">Reading:</strong> {current.reception.reading}
              </p>
              <p className="mt-1.5 text-xs text-ink-2">
                <strong className="text-ink">Why it stays text-anchored:</strong> {current.reception.latentTension}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              <Readout label="Norm Alignment" value={`${activeLens.alignment}%`} tone={activeLens.alignment >= 60 ? "good" : "ink"} />
              <Readout label="Critical Friction" value={`${activeLens.friction}%`} tone={activeLens.friction >= 60 ? "brand" : "ink"} />
              <Readout
                label="Horizon Shift"
                value={`+${current.reception.friction - current.production.friction}%`}
                tone="brand"
              />
            </div>
            <div className="rounded-xl border border-line bg-surface p-3.5 text-sm leading-relaxed space-y-2">
              <div className="text-xs font-extrabold uppercase tracking-wide text-brand">{activeLens.horizonTitle}</div>
              <p className="text-ink-2">
                <strong className="text-ink">Prevailing horizon:</strong> {activeLens.dominantNorm}
              </p>
              <p className="text-ink-2">
                <strong className="text-ink">How the fixed text reads:</strong> {activeLens.reading}
              </p>
              <p className="text-ink-2">
                <strong className="text-ink">Textual anchor:</strong> {activeLens.latentTension}
              </p>
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Translator's Desk Comparator
// ---------------------------------------------------------------------------
type TransMode = "literal" | "domesticated" | "foreignised" | "all";

interface TransVariant {
  line: string;
  venutiPos: number; // 0 = extreme foreignisation, 100 = extreme domestication
  specificity: string;
  fluency: string;
  registerFidelity: string;
  gain: string;
  loss: string;
}

interface TranslationSample {
  id: string;
  label: string;
  sourceContext: string;
  paratextNote: string;
  literal: TransVariant;
  domesticated: TransVariant;
  foreignised: TransVariant;
  examTip: string;
}

const TRANSLATION_SAMPLES: readonly TranslationSample[] = [
  {
    id: "veranda",
    label: "Coastal Elegy",
    sourceContext: "Imagined East Asian lyric line on ancestral longing",
    paratextNote: "Glossary notes *engawa* as a liminal wooden veranda linking domestic interior and garden.",
    literal: {
      line: "“Salt-wind carries old-home-ache across wooden-edge-floor.”",
      venutiPos: 12,
      specificity: "High (raw)",
      fluency: "Low (stiff)",
      registerFidelity: "Fragmented",
      gain: "Exposes the exact compound imagery ('salt-wind', 'old-home-ache') visibly for close lexical study.",
      loss: "Stiff hyphenated syntax breaks lyrical cadence and sounds like an unpolished crib sheet.",
    },
    domesticated: {
      line: "“The sea breeze brings homesickness onto the porch.”",
      venutiPos: 90,
      specificity: "Low (smoothed)",
      fluency: "Very High",
      registerFidelity: "Flattened",
      gain: "Reads effortlessly in familiar Anglophone English with calm, accessible rhythm.",
      loss: "Swapping *engawa* for 'porch' and 'salt-wind' for 'sea breeze' erases architectural liminality and pungent tactile grief.",
    },
    foreignised: {
      line: "“Salt-wind bears longing for the ancestral hearth across the engawa.”",
      venutiPos: 26,
      specificity: "Very High",
      fluency: "Balanced",
      registerFidelity: "High",
      gain: "Retains crisp compound diction ('Salt-wind'), cultural weight ('ancestral hearth'), and the liminal threshold (*engawa*) with rhythmic poise.",
      loss: "Requires the reader to pause briefly or consult the edition's paratext to picture *engawa* precisely.",
    },
    examTip:
      "In an IO, cite the edition's glossary note on *engawa* to analyse how liminal domestic architecture sharpens longing—without guessing about untranslated source grammar.",
  },
  {
    id: "courtyard",
    label: "Courtyard Drama",
    sourceContext: "Imagined nineteenth-century sibling confrontation using kinship honorifics",
    paratextNote: "Preface notes the younger sister uses an elevated honorific for 'Elder Brother' despite bitter subtext.",
    literal: {
      line: "“Elder-brother, your roof holds much rain, yet no tea warms my palms.”",
      venutiPos: 18,
      specificity: "High (raw)",
      fluency: "Moderate",
      registerFidelity: "Literal",
      gain: "Preserves the concrete proverb structure linking generous shelter to withheld hospitality.",
      loss: "Feels slightly abrupt for live stage delivery without rhythmic shaping.",
    },
    domesticated: {
      line: "“Brother, you're a wealthy man, yet you never show me any kindness.”",
      venutiPos: 92,
      specificity: "Low (erased)",
      fluency: "Very High",
      registerFidelity: "Low (blunt)",
      gain: "Instant modern theatrical clarity—an audience grasps the resentment in half a second.",
      loss: "Destroys indirect politeness subtext, kinship hierarchy ('Elder Brother'), and tangible hospitality imagery ('tea', 'roof').",
    },
    foreignised: {
      line: "“Elder Brother, your wide eaves shelter the rain, yet no bowl warms my palms.”",
      venutiPos: 28,
      specificity: "Very High",
      fluency: "High (poetic)",
      registerFidelity: "Very High",
      gain: "Preserves hierarchical deference ('Elder Brother') and tactile hospitality metaphor ('wide eaves' vs cold 'palms'), sharpening dramatic irony.",
      loss: "Slightly elevated cadence demands attentive vocal timing from actors on a contemporary English stage.",
    },
    examTip:
      "Evaluate how retaining 'Elder Brother' keeps polite hierarchy intact on the surface, making the cold-palms rebuke far more cutting than blunt English accusation.",
  },
  {
    id: "pronoun",
    label: "Tenant Defiance",
    sourceContext: "Imagined 1930s play climax where formal pronoun drops to defiant intimate speech",
    paratextNote: "Footnote marks an abrupt switch from honorific plural address to familiar singular on the final clause.",
    literal: {
      line: "“Exalted Master, you [formal] cast us into snow; listen, you [familiar]: river freezes your door-stone.”",
      venutiPos: 10,
      specificity: "Analytical",
      fluency: "Very Low",
      registerFidelity: "Explicit",
      gain: "Makes the invisible English 'you' pronoun shift unmistakably visible through bracketed glosses.",
      loss: "Unspeakable on stage—brackets shatter dramatic momentum completely.",
    },
    domesticated: {
      line: "“Sir, you're throwing us into the snow? Listen to me, pal: the river freezes your doorstep too.”",
      venutiPos: 86,
      specificity: "Low (Anglophone)",
      fluency: "Very High",
      registerFidelity: "Compensated",
      gain: "Cleverly compensates for English pronoun loss using sarcastic slang ('pal') and rapid contractions ideal for live theatre.",
      loss: "Contemporary street slang domesticates a 1930s source culture and drops the symbolic 'threshold stone'.",
    },
    foreignised: {
      line: "“Exalted Master, you cast our hearth into frost? Hear me, brother-of-dust: the river freezes your threshold stone too.”",
      venutiPos: 24,
      specificity: "Very High",
      fluency: "High (dramatic)",
      registerFidelity: "Very High",
      gain: "Widens the initial status gulf ('Exalted Master') and elevates rebellion into shared mortality ('brother-of-dust') anchored on 'threshold stone'.",
      loss: "Slower ritual cadence trades punchy modern colloquialism for poetic gravity.",
    },
    examTip:
      "Show examiners balance: credit the domesticated script for stage speakability and 'pal' compensation while noting how the foreignised edition deepens spatial and philosophical motifs.",
  },
  {
    id: "bamboo",
    label: "Monsoon Proverb",
    sourceContext: "Imagined coastal narrative proverb on enduring collective memory",
    paratextNote: "Translator's note flags 'monsoon's bend' as an idiom for silent resilience under political pressure.",
    literal: {
      line: "“Even quiet bamboo keeps inside its joints the bend of monsoon.”",
      venutiPos: 15,
      specificity: "High (raw)",
      fluency: "Moderate",
      registerFidelity: "Dense",
      gain: "Reveals anatomical bamboo imagery ('inside its joints') that conveys physical endurance.",
      loss: "Clunky prepositional rhythm ('keeps inside its joints the bend of') weakens epigrammatic snap.",
    },
    domesticated: {
      line: "“Quiet people never forget the hardships they survived.”",
      venutiPos: 95,
      specificity: "Very Low",
      fluency: "Very High",
      registerFidelity: "Abstracted",
      gain: "Communicates the core moral theme transparently in plain contemporary English.",
      loss: "Explains the proverb instead of translating its metaphor—erasing ecological imagery, regional monsoon climate, and poetic compression.",
    },
    foreignised: {
      line: "“Even the quiet bamboo remembers the monsoon's bend.”",
      venutiPos: 32,
      specificity: "High",
      fluency: "Very High",
      registerFidelity: "Very High",
      gain: "Synthesises crisp English rhythm with intact regional nature imagery and subtle personification ('remembers').",
      loss: "Leaves implicit political nuance unspoken—relying on close readers to unpack the metaphor's symbolic weight.",
    },
    examTip:
      "Demonstrate Criterion B precision by comparing concrete metaphorical translation ('bamboo remembers the monsoon's bend') against flat abstract paraphrase.",
  },
];

function TranslatorsDeskComparator() {
  const [sampleId, setSampleId] = useState<string>(TRANSLATION_SAMPLES[0].id);
  const [mode, setMode] = useState<TransMode>("foreignised");

  const sample = TRANSLATION_SAMPLES.find((s) => s.id === sampleId) ?? TRANSLATION_SAMPLES[0];

  const toX = (pos: number) => 36 + (pos / 100) * 288;
  const activeVariant: TransVariant =
    mode === "literal" ? sample.literal : mode === "domesticated" ? sample.domesticated : sample.foreignised;

  const allCards: Array<{ key: string; title: string; badgeClass: string; data: TransVariant }> = [
    { key: "literal", title: "Literal Gloss", badgeClass: "bg-accent-soft text-accent", data: sample.literal },
    { key: "foreignised", title: "Foreignised", badgeClass: "bg-info-soft text-info", data: sample.foreignised },
    { key: "domesticated", title: "Domesticated", badgeClass: "bg-brand-soft text-brand", data: sample.domesticated },
  ];

  return (
    <WidgetFrame
      title="Translator's Desk Comparator"
      tryThis={[
        "Switch between **Literal Gloss**, **Domesticated**, and **Foreignised** renderings of the exact same source line.",
        "Watch the **Venuti Spectrum Gauge** and compare what each translator gains versus what gets smoothed away.",
      ]}
      caption={
        <div>
          <span className="font-bold text-brand">IB Exam Analytical Move: </span>
          {sample.examTip}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Choose poetic line">
          {TRANSLATION_SAMPLES.map((s) => {
            const selected = s.id === sample.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSampleId(s.id)}
                aria-pressed={selected}
                className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                  selected
                    ? "border-brand bg-brand text-brand-ink shadow-sm"
                    : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3 text-xs leading-relaxed text-ink-2">
          <div>
            <strong className="text-ink">Source context:</strong> {sample.sourceContext}
          </div>
          <div className="mt-1">
            <strong className="text-ink">Edition paratext note:</strong> {sample.paratextNote}
          </div>
        </div>

        <Segmented<TransMode>
          label="Translation strategy"
          value={mode}
          onChange={setMode}
          options={[
            { value: "literal", label: "Literal Gloss" },
            { value: "foreignised", label: "Foreignised" },
            { value: "domesticated", label: "Domesticated" },
            { value: "all", label: "Compare All Three" },
          ]}
        />

        {/* Venuti Spectrum SVG */}
        <div className="rounded-xl border border-line bg-surface p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 76"
            className="h-auto w-full"
            role="img"
            aria-label="Venuti translation spectrum gauge plotting foreignisation on the left and domestication on the right"
          >
            <text x="180" y="14" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="var(--ink-2)">
              VENUTI TRANSLATION SPECTRUM
            </text>
            <line x1="36" y1="40" x2="324" y2="40" stroke="var(--line)" strokeWidth="6" strokeLinecap="round" />
            <text x="36" y="64" textAnchor="start" fontSize="9.5" fontWeight="700" fill="var(--info)">
              Foreignisation (Source Pole)
            </text>
            <text x="324" y="64" textAnchor="end" fontSize="9.5" fontWeight="700" fill="var(--brand)">
              Domestication (Target Pole)
            </text>
            {mode === "all" ? (
              <g>
                <circle cx={toX(sample.literal.venutiPos)} cy="40" r="6.5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="1.5" />
                <text x={toX(sample.literal.venutiPos)} y="28" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="var(--accent)">
                  Lit
                </text>
                <circle cx={toX(sample.foreignised.venutiPos)} cy="40" r="6.5" fill="var(--info)" stroke="var(--surface)" strokeWidth="1.5" />
                <text x={toX(sample.foreignised.venutiPos)} y="28" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="var(--info)">
                  For
                </text>
                <circle cx={toX(sample.domesticated.venutiPos)} cy="40" r="6.5" fill="var(--brand)" stroke="var(--surface)" strokeWidth="1.5" />
                <text x={toX(sample.domesticated.venutiPos)} y="28" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="var(--brand)">
                  Dom
                </text>
              </g>
            ) : (
              <g>
                <circle
                  cx={toX(activeVariant.venutiPos)}
                  cy="40"
                  r="8.5"
                  fill={mode === "literal" ? "var(--accent)" : mode === "domesticated" ? "var(--brand)" : "var(--info)"}
                  stroke="var(--surface)"
                  strokeWidth="2"
                />
                <text
                  x={toX(activeVariant.venutiPos)}
                  y="27"
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="800"
                  fill={mode === "literal" ? "var(--accent)" : mode === "domesticated" ? "var(--brand)" : "var(--info)"}
                >
                  {mode === "literal" ? "Literal" : mode === "domesticated" ? "Domesticated" : "Foreignised"}
                </text>
              </g>
            )}
          </svg>
        </div>

        {mode === "all" ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {allCards.map((c) => (
              <div key={c.key} className="rounded-xl border border-line bg-surface p-3 space-y-2">
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-extrabold ${c.badgeClass}`}>
                  {c.title}
                </span>
                <p className="text-sm font-semibold italic leading-snug text-ink">{c.data.line}</p>
                <p className="text-xs text-ink-2">
                  <strong className="text-good">Gain:</strong> {c.data.gain}
                </p>
                <p className="text-xs text-ink-2">
                  <strong className="text-bad">Trade-off:</strong> {c.data.loss}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            <div className="rounded-xl border border-line bg-surface p-4">
              <p className="text-base font-bold italic leading-relaxed text-ink">{activeVariant.line}</p>
            </div>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              <Readout label="Cultural Specificity" value={activeVariant.specificity} tone="ink" />
              <Readout label="Target Fluency" value={activeVariant.fluency} tone="brand" />
              <Readout label="Register / Rhythm" value={activeVariant.registerFidelity} tone="good" />
            </div>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-good-soft/45 p-3 text-xs leading-relaxed text-ink">
                <div className="font-extrabold uppercase tracking-wide text-good">What Is Gained</div>
                <p className="mt-1">{activeVariant.gain}</p>
              </div>
              <div className="rounded-xl border border-line bg-bad-soft/45 p-3 text-xs leading-relaxed text-ink">
                <div className="font-extrabold uppercase tracking-wide text-bad">What Is Lost / Risked</div>
                <p className="mt-1">{activeVariant.loss}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "context-shift-reception-matrix",
    title: "Context-Shift Reception Matrix",
    blurb: "Inspect how fixed textual craft shifts meaning between original contexts of production and contemporary global reception.",
    Component: ContextShiftReceptionMatrix,
  },
  {
    id: "translators-desk-comparator",
    title: "Translator's Desk Comparator",
    blurb: "Compare literal, domesticated, and foreignised renderings of the same poetic line along Lawrence Venuti's spectrum.",
    Component: TranslatorsDeskComparator,
  },
];

export default widgets;
