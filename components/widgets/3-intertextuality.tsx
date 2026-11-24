"use client";

import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

// ============================================================================
// WIDGET 1: Comparative Synthesis Architecture Builder
// ============================================================================
type ArchMode = "block" | "integrated";
type FormPairKey = "drama-novel" | "poetry-memoir" | "translated-play";

interface OutlineStep {
  id: string;
  label: string;
  focusTag: string;
  topicSentence: string;
  craftDetail: string;
  connective: string;
  verdict: string;
}

interface FormPairData {
  label: string;
  prompt: string;
  workA: { title: string; form: string };
  workB: { title: string; form: string };
  block: OutlineStep[];
  integrated: OutlineStep[];
}

const FORM_PAIRS: Record<FormPairKey, FormPairData> = {
  "drama-novel": {
    label: "Drama × Novel",
    prompt: "Compare how two works use domestic interiors to reveal concealed power.",
    workA: { title: "The Brass Threshold", form: "Stage Play" },
    workB: { title: "Salt and Ash", form: "Prose Novel" },
    block: [
      {
        id: "b1",
        label: "Body 1: Work A Only",
        focusTag: "Single-Text Silo",
        topicSentence: "In The Brass Threshold, the parlour table shows that the father controls his family.",
        craftDetail: "Describes seating positions and dialogue in Act 1, drifting into plot recap without mentioning Salt and Ash.",
        connective: "None (isolated text)",
        verdict: "Delays comparison entirely; examiner waits across two full pages before seeing any interplay.",
      },
      {
        id: "b2",
        label: "Body 2: Work A Only",
        focusTag: "Single-Text Silo",
        topicSentence: "Later in Act 3, the locked parlour door shows the daughter is trapped.",
        craftDetail: "Notes the locked door and dimmed lighting in isolation, repeating themes from Body 1 chronologically.",
        connective: "Also / Later (chronological)",
        verdict: "Chronological narration traps Criterion A and B in descriptive Band 2–3 territory.",
      },
      {
        id: "b3",
        label: "Body 3: Work B Only",
        focusTag: "Delayed Switch",
        topicSentence: "Meanwhile, in Salt and Ash, the family kitchen also shows domestic control.",
        craftDetail: "Summarises three chapters of kitchen tension; adds one retrospective link ('just like the play').",
        connective: "Meanwhile / Also (mechanical)",
        verdict: "Token back-reference forces the examiner to hunt backwards for a comparative link.",
      },
      {
        id: "b4",
        label: "Conclusion: Tacked-on Link",
        focusTag: "Flat Similarity",
        topicSentence: "In conclusion, both works use rooms inside houses to show that power harms families.",
        craftDetail: "Lumps a play and a novel into one flat slogan without evaluating medium-specific differences.",
        connective: "Both... similarly",
        verdict: "Caps Criterion A (6/10), Criterion B (5/10), and Criterion C (2/5) due to weak synthesis.",
      },
    ],
    integrated: [
      {
        id: "i1",
        label: "Body 1: Spatial Architecture",
        focusTag: "C-A-P-B-S Braided",
        topicSentence:
          "While both works turn domestic thresholds into instruments of surveillance, The Brass Threshold externalises authority via elevated parlour proxemics, whereas Salt and Ash internalises control through suffocating limited focalisation.",
        craftDetail:
          "Pairs Drama's live spatial hierarchy and locked downstage exit directly against Prose's claustrophobic kitchen focalisation (50/50 weighting).",
        connective: "While... whereas (divergence within similarity)",
        verdict: "Unlocks immediate Criterion A insight and Criterion B cross-form evaluation from paragraph one.",
      },
      {
        id: "i2",
        label: "Body 2: Unspoken Tension",
        focusTag: "C-A-P-B-S Braided",
        topicSentence:
          "Just as the playwright weaponises a five-second stage silence over polite tea-pouring to expose suppressed fury, the novelist analogously deploys free indirect discourse to reveal unspoken resentment behind tidy household chores.",
        craftDetail:
          "Matches functional equivalents across mediums: audible silence/subtext in Drama beside free indirect discourse in Prose.",
        connective: "Just as... analogously (cross-form equivalence)",
        verdict: "Signals top-band Criterion B mastery by turning formal difference into an analytical microscope.",
      },
      {
        id: "i3",
        label: "Body 3: Climactic Rupture",
        focusTag: "C-A-P-B-S Braided",
        topicSentence:
          "At each work's climax, however, their visions of domestic resistance diverge sharply: the play stages a slammed ledger and physical departure, conversely the novel withholds escape through a circular temporal ellipsis.",
        craftDetail:
          "Contrasts kinetic theatrical confrontation against quiet prose stasis, evaluating opposing attitudes toward autonomy.",
        connective: "Conversely / pushing further (inversion)",
        verdict: "Sustains Criterion C cohesion and nuanced Criterion A ambiguity right through the climax.",
      },
      {
        id: "i4",
        label: "Synthesis Conclusion",
        focusTag: "Conceptual Elevation",
        topicSentence:
          "Ultimately, juxtaposing embodied stage boundaries against interiorised narrative rooms proves that domestic power survives both as visible theatre and as privately rehearsed habit.",
        craftDetail:
          "Elevates the prompt without mechanical repetition, synthesising why cross-form craft deepens meaning.",
        connective: "Ultimately / juxtaposing",
        verdict: "Consistently aligns with Band 5 descriptors: Crit A (9–10/10), Crit B (9–10/10), Crit C (5/5).",
      },
    ],
  },
  "poetry-memoir": {
    label: "Poetry × Memoir",
    prompt: "Compare how two works depict memory as a fragile border against loss.",
    workA: { title: "Tide-Line Elegies", form: "Lyric Poetry" },
    workB: { title: "Returning to the Estuary", form: "Literary Memoir" },
    block: [
      {
        id: "b1",
        label: "Body 1: Poetry Only",
        focusTag: "Single-Text Silo",
        topicSentence: "In Tide-Line Elegies, the speaker writes sad poems about forgetting her childhood coast.",
        craftDetail: "Quotes two lines of sea imagery descriptively with no connection to Returning to the Estuary.",
        connective: "None (isolated text)",
        verdict: "Reads like a Paper 1 commentary rather than a comparative Paper 2 argument.",
      },
      {
        id: "b2",
        label: "Body 2: Poetry Only",
        focusTag: "Single-Text Silo",
        topicSentence: "Another poem in the collection also uses winter imagery to show loss.",
        craftDetail: "Lists poetic devices ('metaphor', 'rhyme') without evaluating reader effect or comparing forms.",
        connective: "Another / Also",
        verdict: "Additive structure weakens Criterion C progression.",
      },
      {
        id: "b3",
        label: "Body 3: Memoir Only",
        focusTag: "Delayed Switch",
        topicSentence: "In Returning to the Estuary, the author drives back to her hometown and remembers old photos.",
        craftDetail: "Retells personal anecdotes as literal facts, ignoring memoiristic craft (persona, rhetoric).",
        connective: "In the other book...",
        verdict: "Treats Literary Non-Fiction as biography instead of crafted literature (hurting Criterion B).",
      },
      {
        id: "b4",
        label: "Conclusion: Tacked-on Link",
        focusTag: "Flat Similarity",
        topicSentence: "Both the poet and the memoirist prove that memories fade over time.",
        craftDetail: "Generic cliché misses the crucial formal difference between lyric compression and essayistic reflection.",
        connective: "Both prove...",
        verdict: "Stalls in Band 2–3 across Criteria A, B, and C.",
      },
    ],
    integrated: [
      {
        id: "i1",
        label: "Body 1: Mediated Recall",
        focusTag: "C-A-P-B-S Braided",
        topicSentence:
          "While both works distrust memory as an intact archive, Tide-Line Elegies enacts erosion visually through jagged enjambment, whereas Returning to the Estuary interrogates recall overtly through a self-correcting retrospective persona.",
        craftDetail:
          "Contrasts Poetry's spatial compression on the page against Literary Non-Fiction's candid essayistic scrutiny of photographs.",
        connective: "While... whereas",
        verdict: "Honours medium specificity for both Poetry and Literary Non-Fiction immediately.",
      },
      {
        id: "i2",
        label: "Body 2: Keepsakes & Motifs",
        focusTag: "C-A-P-B-S Braided",
        topicSentence:
          "Just as the lyric sequence condenses home into stark sensory synecdoche ('rusted key', 'cracked tile'), the memoir analogously anchors belonging inside a folded ferry timetable tucked into a coat pocket.",
        craftDetail:
          "Pairs concrete sensory motifs across genres while weighing lyric starkness against narrative tenderness.",
        connective: "Just as... analogously",
        verdict: "Balanced 50/50 analysis with nuanced tonal evaluation.",
      },
      {
        id: "i3",
        label: "Body 3: Acoustic vs Rhetorical Closure",
        focusTag: "C-A-P-B-S Braided",
        topicSentence:
          "Refusing tidy consolation, Tide-Line Elegies breaks its final stanza on an unresolved half-rhyme; conversely, Returning to the Estuary uses cyclical seasonal anaphora ('Each August') to accept hybrid belonging without erasing ache.",
        craftDetail:
          "Evaluates acoustic rupture in verse directly beside rhetorical cadence in memoir.",
        connective: "Conversely",
        verdict: "Demonstrates Band 5 divergence within similarity across both form and tone.",
      },
      {
        id: "i4",
        label: "Synthesis Conclusion",
        focusTag: "Conceptual Elevation",
        topicSentence:
          "Together, poem and memoir show that memory resists loss differently by medium: verse crystallises absence inside sudden gaps, while non-fiction braids reflection around the shifting distance between past and present selves.",
        craftDetail:
          "Concludes with crisp conceptual clarity and strong academic register (Criterion D).",
        connective: "Together / while",
        verdict: "Hits top band across Crit A (9–10/10), Crit B (9–10/10), and Crit C (5/5).",
      },
    ],
  },
  "translated-play": {
    label: "Translated Novel × Play",
    prompt: "Compare how two works dramatise silence under institutional pressure.",
    workA: { title: "The Clockmaker's Orchard", form: "Translated Novel" },
    workB: { title: "The Dockyard Trial", form: "Modern Play" },
    block: [
      {
        id: "b1",
        label: "Body 1: Translated Novel Only",
        focusTag: "Single-Text Silo",
        topicSentence: "In The Clockmaker's Orchard, citizens stay quiet because they fear the authorities.",
        craftDetail: "Summarises political context without closely analysing imagery, pacing, or focalisation.",
        connective: "None (isolated text)",
        verdict: "Drifts toward historical summary rather than literary analysis.",
      },
      {
        id: "b2",
        label: "Body 2: Translated Novel Only",
        focusTag: "Fragile Claim",
        topicSentence: "The author uses English alliteration on page 40 to show fear.",
        craftDetail: "Over-relies on English-only sound effects in a translated text while still ignoring The Dockyard Trial.",
        connective: "Furthermore",
        verdict: "Weak awareness of translation craft paired with siloed structure.",
      },
      {
        id: "b3",
        label: "Body 3: Modern Play Only",
        focusTag: "Delayed Switch",
        topicSentence: "In The Dockyard Trial, the workers are also silenced during the inquiry.",
        craftDetail: "Quotes spoken speeches as plain prose while ignoring lighting, stamps, and spatial staging.",
        connective: "Also / Similarly",
        verdict: "Misses theatrical medium specificity and keeps comparison superficial.",
      },
      {
        id: "b4",
        label: "Conclusion: Tacked-on Link",
        focusTag: "Flat Similarity",
        topicSentence: "Both works show that silence is used by powerful institutions.",
        craftDetail: "Fails to distinguish coerced silencing from strategic defiant silence.",
        connective: "Both show...",
        verdict: "Unpacking the prompt's complexity was missed; stays in Band 2–3.",
      },
    ],
    integrated: [
      {
        id: "i1",
        label: "Body 1: Coerced Silencing",
        focusTag: "C-A-P-B-S Braided",
        topicSentence:
          "While both works expose institutional silencing as a deliberate weapon, The Clockmaker's Orchard registers censorship through stark narrative ellipses and muted domestic register, whereas The Dockyard Trial makes coercion audible through rhythmic clerk stamps drowning out testimony.",
        craftDetail:
          "Focuses on translation-resilient craft (ellipsis, register, imagery) alongside Drama's live soundscape and elevated glass partition.",
        connective: "While... whereas",
        verdict: "Model AoE 2 + AoE 3 hygiene: resilient craft in translation paired cleanly with stage craft.",
      },
      {
        id: "i2",
        label: "Body 2: Strategic Defiance",
        focusTag: "C-A-P-B-S Braided",
        topicSentence:
          "Interrogating silence as potential agency, the translated novel uses a recurring motif of stopped clocks to signal quiet collective refusal; analogously, the play turns a prolonged collective stage stillness into unsettling solidarity before the tribunal.",
        craftDetail:
          "Nuances the prompt by showing how silence shifts from oppression into covert resistance across both works.",
        connective: "Analogously",
        verdict: "Demonstrates high Criterion A sophistication by testing the boundary between coercion and power.",
      },
      {
        id: "i3",
        label: "Body 3: Unresolved Cost",
        focusTag: "C-A-P-B-S Braided",
        topicSentence:
          "Pushing this ambiguity further, the novel ends with an unsent letter locked inside a cellar, whereas the play cuts abruptly to blackout mid-sentence, denying spectators any comforting verbal catharsis.",
        craftDetail:
          "Evaluates contrasting endings to show divergent emotional tolls of resisting state authority.",
        connective: "Pushing this ambiguity further... whereas",
        verdict: "Seamless integrative escalation across both Criterion B and Criterion C.",
      },
      {
        id: "i4",
        label: "Synthesis Conclusion",
        focusTag: "Conceptual Elevation",
        topicSentence:
          "Ultimately, pairing a translated prose work with contemporary theatre reveals silence as double-edged: the same quietness institutions impose to erase dissent can be reappropriated — at grave personal cost — as testimony.",
        craftDetail:
          "Resolves the thesis thoughtfully without flattening complexity into a simplistic slogan.",
        connective: "Ultimately",
        verdict: "Delivers Band 5 comparative excellence: Crit A (9–10/10), Crit B (9–10/10), Crit C (5/5).",
      },
    ],
  },
};

function ComparativeSynthesisBuilder() {
  const [mode, setMode] = useState<ArchMode>("integrated");
  const [pairKey, setPairKey] = useState<FormPairKey>("drama-novel");
  const [stepIdx, setStepIdx] = useState<number>(0);

  const pair = FORM_PAIRS[pairKey];
  const steps = mode === "integrated" ? pair.integrated : pair.block;
  const activeStep = steps[Math.min(stepIdx, steps.length - 1)];

  const isIntegrated = mode === "integrated";
  const critA = isIntegrated ? "9–10 / 10" : "5–6 / 10";
  const critB = isIntegrated ? "9–10 / 10" : "4–5 / 10";
  const critC = isIntegrated ? "5 / 5" : "2 / 5";

  return (
    <WidgetFrame
      title="Comparative Synthesis Architecture Builder"
      tryThis={[
        "Toggle between **Block Silos** and **Integrated Point-by-Point** to watch how Criteria A, B, and C react.",
        "Switch form pairings (e.g. **Poetry × Memoir** or **Translated Novel × Play**) and tap each paragraph below to inspect the exact craft pivot.",
      ]}
      caption={
        isIntegrated ? (
          <span>
            <strong>Integrated Point-by-Point (Band 5):</strong> Every paragraph is governed by a{" "}
            <strong>conceptual tension</strong> braiding <em>{pair.workA.title}</em> ({pair.workA.form}) and{" "}
            <em>{pair.workB.title}</em> ({pair.workB.form}) in ~50/50 equilibrium via precision connectives.
          </span>
        ) : (
          <span>
            <strong>Block-by-Block Silos (Band 2–3):</strong> Sealing <em>{pair.workA.title}</em> into the first half
            and <em>{pair.workB.title}</em> into the second half invites plot narration, delays comparative evaluation,
            and reduces links to mechanical afterthoughts.
          </span>
        )
      }
    >
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Segmented<ArchMode>
            label="Essay architecture mode"
            value={mode}
            onChange={(v) => setMode(v)}
            options={[
              { value: "block", label: "Block ('A then B')" },
              { value: "integrated", label: "Integrated Point-by-Point" },
            ]}
          />
          <Segmented<FormPairKey>
            label="Cross-form work pairing"
            value={pairKey}
            onChange={(v) => setPairKey(v)}
            options={[
              { value: "drama-novel", label: "Drama × Novel" },
              { value: "poetry-memoir", label: "Poetry × Memoir" },
              { value: "translated-play", label: "Translated × Play" },
            ]}
          />
        </div>

        {/* Prompt banner */}
        <div className="rounded-xl border border-line bg-surface-2 px-3.5 py-2.5 text-sm">
          <span className="font-extrabold uppercase tracking-wide text-brand">Paper 2 Prompt: </span>
          <span className="font-semibold text-ink italic">{pair.prompt}</span>
          <div className="mt-1 flex flex-wrap gap-2 text-xs text-ink-2">
            <span className="chip">
              Work A: {pair.workA.title} ({pair.workA.form})
            </span>
            <span className="chip">
              Work B: {pair.workB.title} ({pair.workB.form})
            </span>
          </div>
        </div>

        {/* Live SVG structural map */}
        <div className="rounded-xl border border-line bg-white p-2.5">
          {isIntegrated ? (
            <svg
              viewBox="0 0 600 164"
              className="mx-auto block h-auto w-full max-w-[600px]"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Integrated point-by-point diagram braiding Work A and Work B across three conceptual rows"
            >
              <text x="300" y="18" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="800" fill="#14532d">
                INTEGRATED C-A-P-B-S BRAID — CONTINUOUS 50/50 SYNTHESIS
              </text>
              {[0, 1, 2].map((row) => {
                const y = 30 + row * 42;
                const active = stepIdx === row;
                return (
                  <g key={`int-${row}`}>
                    <rect
                      x="12"
                      y={y}
                      width="110"
                      height="32"
                      rx="7"
                      fill={active ? "#be123c" : "#ffe4e6"}
                      stroke="#be123c"
                      strokeWidth="1.5"
                    />
                    <text
                      x="67"
                      y={y + 20}
                      textAnchor="middle"
                      fontFamily="system-ui, sans-serif"
                      fontSize="10.5"
                      fontWeight="800"
                      fill={active ? "#ffffff" : "#881337"}
                    >
                      Body {row + 1}: Concept
                    </text>

                    <line x1="122" y1={y + 16} x2="144" y2={y + 16} stroke="#6b4c56" strokeWidth="1.5" />

                    <rect x="144" y={y} width="128" height="32" rx="7" fill="#e0f2fe" stroke="#0369a1" strokeWidth="1.5" />
                    <text x="208" y={y + 20} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#0c4a6e">
                      Work A ({pair.workA.form})
                    </text>

                    <rect x="282" y={y + 4} width="90" height="24" rx="12" fill="#fef3c7" stroke="#b45309" strokeWidth="1.4" />
                    <text x="327" y={y + 19} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="800" fill="#92400e">
                      {row === 0 ? "whereas" : row === 1 ? "analogously" : "conversely"}
                    </text>

                    <rect x="382" y={y} width="128" height="32" rx="7" fill="#f3e8ff" stroke="#7c3aed" strokeWidth="1.5" />
                    <text x="446" y={y + 20} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#5b21b6">
                      Work B ({pair.workB.form})
                    </text>

                    <line x1="510" y1={y + 16} x2="528" y2={y + 16} stroke="#15803d" strokeWidth="1.5" />

                    <rect x="528" y={y} width="60" height="32" rx="7" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
                    <text x="558" y={y + 20} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="800" fill="#14532d">
                      Synth
                    </text>
                  </g>
                );
              })}
            </svg>
          ) : (
            <svg
              viewBox="0 0 600 164"
              className="mx-auto block h-auto w-full max-w-[600px]"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Block-by-block diagram showing isolated Work A half and Work B half with weak delayed link"
            >
              <text x="300" y="18" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="800" fill="#9a3412">
                BLOCK-BY-BLOCK SILOS — DELAYED COMPARISON
              </text>
              <rect x="20" y="34" width="230" height="82" rx="10" fill="#ffedd5" stroke="#c2410c" strokeWidth="1.8" />
              <text x="135" y="64" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="11.5" fontWeight="800" fill="#9a3412">
                Paragraphs 1–2: Work A Only
              </text>
              <text x="135" y="84" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fill="#241016">
                {pair.workA.title} ({pair.workA.form})
              </text>
              <text x="135" y="101" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9.5" fill="#6b4c56">
                No comparative tension yet
              </text>

              <line x1="252" y1="75" x2="344" y2="75" stroke="#c2410c" strokeWidth="2" strokeDasharray="5 4" />
              <text x="298" y="65" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="700" fill="#c2410c">
                &quot;Also in...&quot;
              </text>

              <rect x="348" y="34" width="232" height="82" rx="10" fill="#ffedd5" stroke="#c2410c" strokeWidth="1.8" />
              <text x="464" y="64" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="11.5" fontWeight="800" fill="#9a3412">
                Paragraph 3: Work B Only
              </text>
              <text x="464" y="84" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fill="#241016">
                {pair.workB.title} ({pair.workB.form})
              </text>
              <text x="464" y="101" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9.5" fill="#6b4c56">
                Forced look-back links
              </text>

              <rect x="140" y="128" width="320" height="26" rx="7" fill="#fff7ed" stroke="#c2410c" strokeDasharray="4 3" />
              <text x="300" y="145" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#9a3412">
                Conclusion: Hasty &quot;Both works show...&quot; summary
              </text>
            </svg>
          )}
        </div>

        {/* Interactive Paragraph Selector */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {steps.map((s, idx) => {
            const selected = idx === stepIdx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setStepIdx(idx)}
                className={`rounded-xl border px-3 py-2 text-left text-xs transition ${
                  selected
                    ? isIntegrated
                      ? "border-good bg-good-soft text-ink shadow-sm"
                      : "border-bad bg-bad-soft text-ink shadow-sm"
                    : "border-line bg-surface text-ink-2 hover:bg-surface-2"
                }`}
              >
                <div className="font-extrabold">{s.label}</div>
                <div className="mt-0.5 text-[11px] opacity-85">{s.focusTag}</div>
              </button>
            );
          })}
        </div>

        {/* Active Paragraph Inspector */}
        <div className="rounded-xl border border-line bg-surface p-3.5 text-sm space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-extrabold text-ink">{activeStep.label}</span>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-extrabold ${
                isIntegrated ? "bg-good-soft text-good" : "bg-bad-soft text-bad"
              }`}
            >
              Connective: {activeStep.connective}
            </span>
          </div>
          <p className="rounded-lg bg-surface-2 p-2.5 italic text-ink">&ldquo;{activeStep.topicSentence}&rdquo;</p>
          <p className="text-ink-2">
            <strong className="text-ink">Craft &amp; Evidence:</strong> {activeStep.craftDetail}
          </p>
          <p className={isIntegrated ? "font-semibold text-good" : "font-semibold text-bad"}>
            Examiner Verdict: {activeStep.verdict}
          </p>
        </div>

        {/* Live Criterion Impact Meters */}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          <Readout label="Criterion A (Comparative Insight)" value={critA} tone={isIntegrated ? "good" : "bad"} />
          <Readout label="Criterion B (Craft Evaluation)" value={critB} tone={isIntegrated ? "good" : "bad"} />
          <Readout label="Criterion C (Focus & Cohesion)" value={critC} tone={isIntegrated ? "good" : "bad"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// WIDGET 2: Genre Convention & Subversion Lab
// ============================================================================
type GenreKey = "tragedy" | "gothic" | "bildungsroman" | "pastoral";
type StanceMode = "adherence" | "subversion";

interface ConventionItem {
  rule: string;
  adherenceNote: string;
  subversionNote: string;
}

interface GenreLabData {
  name: string;
  horizonSummary: string;
  adherenceExtract: string;
  subversionExtract: string;
  adherenceEffect: string;
  subversionEffect: string;
  adherenceModel: string;
  subversionModel: string;
  conventions: ConventionItem[];
}

const GENRE_LAB: Record<GenreKey, GenreLabData> = {
  tragedy: {
    name: "Tragedy",
    horizonSummary: "Noble stature, fatal error (hamartia), reversal (peripeteia), recognition (anagnorisis), and catharsis.",
    adherenceExtract:
      "\"I built this harbour on my own proud decree,\" the governor cries, tearing the silver seal from his collar as the council kneels in solemn dread. \"Now let the sea take what my blindness broke.\"",
    subversionExtract:
      "[The automated crane shuts down. MARTIN, a night-shift loader, folds his laminated badge into an empty locker. He starts to speak, stops, and exits beneath buzzing strip-lights. No one turns round.]",
    adherenceEffect:
      "Honours classical scale and ritual catharsis: explicit self-recognition elevates individual hubris into universal moral solemnity.",
    subversionEffect:
      "Dismantles aristocratic heroism and withholds verbal catharsis: silent dispossession indicts impersonal economic systems rather than personal flaw.",
    adherenceModel:
      "By fulfilling Aristotelian anagnorisis ('what my blindness broke') through elevated public rhetoric, the dramatist channels classical tragic dignity into communal catharsis.",
    subversionModel:
      "By replacing noble hamartia and eloquence with an automated layoff and an unheeded exit, the playwright subverts classical tragedy to expose systemic economic erasure.",
    conventions: [
      {
        rule: "Protagonist Stature",
        adherenceNote: "Elevated civic ruler wielding public authority",
        subversionNote: "Ordinary night-shift worker invisible to power",
      },
      {
        rule: "Cause of Downfall",
        adherenceNote: "Personal hubris / fatal error of judgement",
        subversionNote: "Impersonal industrial automation beyond individual fault",
      },
      {
        rule: "Recognition & Catharsis",
        adherenceNote: "Eloquent self-knowledge purging audience fear",
        subversionNote: "Truncated silence withholding comforting release",
      },
    ],
  },
  gothic: {
    name: "Gothic",
    horizonSummary: "Shadowed ancestral ruins, atmospheric storm, uncanny doubles, entrapment, and visceral psychological dread.",
    adherenceExtract:
      "Wind tore at the ivy-choked battlements while rainwater leaked down the portrait gallery; lifting her candle, Clara saw the ancestral face in the frame seemed to track her trembling hand across the stone floor.",
    subversionExtract:
      "There was no ruined tower on Acacia Close, only twenty-four identical white driveways washed clean every Sunday. Yet inside her sunlit marble kitchen, silence pressed against Mira's throat like a sealed crypt.",
    adherenceEffect:
      "Activates rich atmospheric terror: crumbling architecture and candlelight externalise inherited guilt and vulnerability.",
    subversionEffect:
      "Defamiliarises sterile suburban conformity: relocating claustrophobic terror into bright modern order makes everyday respectability uncanny.",
    adherenceModel:
      "Through traditional Gothic iconography ('ivy-choked battlements', animated ancestral portraiture), the writer externalises dynastic dread inside decaying physical space.",
    subversionModel:
      "Invoking and negating Gothic ruins ('no ruined tower') before importing crypt imagery into a 'sunlit marble kitchen', the writer reveals suburban uniformity as its own quiet trap.",
    conventions: [
      {
        rule: "Spatial Setting",
        adherenceNote: "Crumbling storm-lashed ancestral castle",
        subversionNote: "Spotless, hyper-lit contemporary suburban kitchen",
      },
      {
        rule: "Source of Terror",
        adherenceNote: "Spectral lineage & shadowy architectural menace",
        subversionNote: "Enforced social sameness & domestic suffocation",
      },
      {
        rule: "Atmosphere & Lighting",
        adherenceNote: "Flickering candlelight and dark stone corridors",
        subversionNote: "Clinical daylight sharpening psychological confinement",
      },
    ],
  },
  bildungsroman: {
    name: "Bildungsroman",
    horizonSummary: "Youthful naivety tested by moral trials, culminating in authentic self-knowledge and mature social integration.",
    adherenceExtract:
      "Leaving the apprenticeship hall with ink still staining her cuffs, Lina realised she no longer needed her master's nod; her own blueprint lay open on the table, uniting her craft with the city's rebuilding.",
    subversionExtract:
      "Having topped every imperial examination, Arjun locked his notebooks inside a basement trunk, buttoned the identical grey coat worn by every clerk, and whispered with relief, \"At last nobody asks who I am.\"",
    adherenceEffect:
      "Rewards the reader's hope for ethical growth: personal voice and civic belonging achieve hard-won harmony.",
    subversionEffect:
      "Produces an anti-Bildungsroman: outward academic success masks internal self-erasure, indicting institutions that demand conformity.",
    adherenceModel:
      "Honouring the classical Bildungsroman trajectory, the author aligns Lina's technical independence ('own blueprint') with purposeful adult integration.",
    subversionModel:
      "Subverting coming-of-age triumph into an anti-Bildungsroman, Arjun's locked notebooks and welcomed anonymity expose elite social integration as cultural erasure.",
    conventions: [
      {
        rule: "Arc of Maturation",
        adherenceNote: "Progressive growth toward authentic selfhood",
        subversionNote: "Stalled authenticity disguised as institutional success",
      },
      {
        rule: "Relationship to Society",
        adherenceNote: "Creative contribution harmonised with community",
        subversionNote: "Uniform assimilation erasing personal voice",
      },
      {
        rule: "Symbolic Ending",
        adherenceNote: "Open blueprint signalling autonomous future",
        subversionNote: "Locked trunk signalling voluntary silencing",
      },
    ],
  },
  pastoral: {
    name: "Pastoral",
    horizonSummary: "Serene rural sanctuary, seasonal harmony, sensory balm, and restorative retreat from urban corruption.",
    adherenceExtract:
      "At dusk the orchard gate swung smoothly on oiled hinges; crushed thyme rose beneath his boots, and as the valley bell rang cleanly across the meadow, twenty restless years melted into evening dew.",
    subversionExtract:
      "At dusk the orchard gate hung by one rusted bolt over concrete drainage; diesel drifted across dry stubble, and when a siren wailed down the ring road, he kept his pack buckled tightly to his shoulders.",
    adherenceEffect:
      "Delivers restorative lyrical calm: nature operates as a timeless moral healer dissolving urban fatigue.",
    subversionEffect:
      "Punctures sentimental rural nostalgia: industrial acoustic and sensory intrusions prove the pastoral refuge has been permanently dismantled.",
    adherenceModel:
      "By uniting aromatic nature ('crushed thyme') with harmonious valley acoustics, the writer fulfils the pastoral horizon of redemptive rural return.",
    subversionModel:
      "Point-by-point inversions ('rusted bolt', 'diesel', 'siren') shatter pastoral sanctuary, revealing nostalgic homecoming as impossible under industrial modernity.",
    conventions: [
      {
        rule: "Sensory Landscape",
        adherenceNote: "Fragrant thyme, meadow, restorative evening dew",
        subversionNote: "Concrete drainage, dry stubble, drifting diesel",
      },
      {
        rule: "Soundscape",
        adherenceNote: "Clean communal valley church bell",
        subversionNote: "Urgent siren wailing down an urban ring road",
      },
      {
        rule: "Protagonist Stance",
        adherenceNote: "Sets pack down in peaceful surrender",
        subversionNote: "Keeps pack buckled tightly in defensive alienation",
      },
    ],
  },
};

function GenreSubversionLab() {
  const [genre, setGenre] = useState<GenreKey>("gothic");
  const [stance, setStance] = useState<StanceMode>("subversion");

  const data = GENRE_LAB[genre];
  const isSubversion = stance === "subversion";

  return (
    <WidgetFrame
      title="Genre Convention & Subversion Lab"
      tryThis={[
        "Pick any genre (**Tragedy**, **Gothic**, **Bildungsroman**, or **Pastoral**) and flip between **Classical Adherence** and **Modern Subversion**.",
        "Notice how **Subversion** does not ignore the genre — it invokes recognisable cues first, then snaps sharply away from the reader's horizon of expectations.",
      ]}
      caption={
        <span>
          <strong>Band 5 Examiner Phrasing ({data.name} — {isSubversion ? "Subversion" : "Adherence"}):</strong>{" "}
          {isSubversion ? data.subversionModel : data.adherenceModel}
        </span>
      }
    >
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Segmented<GenreKey>
            label="Choose literary genre"
            value={genre}
            onChange={(v) => setGenre(v)}
            options={[
              { value: "tragedy", label: "Tragedy" },
              { value: "gothic", label: "Gothic" },
              { value: "bildungsroman", label: "Bildungsroman" },
              { value: "pastoral", label: "Pastoral" },
            ]}
          />
          <Segmented<StanceMode>
            label="Choose authorial stance"
            value={stance}
            onChange={(v) => setStance(v)}
            options={[
              { value: "adherence", label: "Classical Adherence" },
              { value: "subversion", label: "Modern Subversion" },
            ]}
          />
        </div>

        {/* Live Horizon Curve SVG */}
        <div className="rounded-xl border border-line bg-white p-2.5">
          <svg
            viewBox="0 0 600 132"
            className="mx-auto block h-auto w-full max-w-[600px]"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Horizon of expectations trajectory for ${data.name} under ${stance}`}
          >
            <text x="300" y="18" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="11.5" fontWeight="800" fill="#241016">
              {data.name.toUpperCase()} — HORIZON OF EXPECTATIONS VS TEXTUAL EXECUTION
            </text>

            {/* Dashed expected horizon curve */}
            <path d="M 40 84 Q 200 44, 340 50 T 555 46" fill="none" stroke="#9ca3af" strokeWidth="2" strokeDasharray="6 4" />
            <text x="550" y="36" textAnchor="end" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="700" fill="#6b7280">
              Expected {data.name} Horizon
            </text>

            {/* Execution curve */}
            {isSubversion ? (
              <g>
                <path d="M 40 84 Q 180 48, 285 50 L 340 52 Q 415 58, 555 112" fill="none" stroke="#be123c" strokeWidth="3.2" />
                <circle cx="285" cy="50" r="5" fill="#b45309" />
                <text x="285" y="38" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="800" fill="#92400e">
                  Rupture Point
                </text>
                <circle cx="555" cy="112" r="5.5" fill="#be123c" />
                <text x="545" y="126" textAnchor="end" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="800" fill="#be123c">
                  Subversive Critique &amp; Shock
                </text>
              </g>
            ) : (
              <g>
                <path d="M 40 84 Q 200 44, 340 50 T 555 46" fill="none" stroke="#15803d" strokeWidth="3.2" />
                <circle cx="555" cy="46" r="5.5" fill="#15803d" />
                <text x="545" y="68" textAnchor="end" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="800" fill="#15803d">
                  Fulfilled Ritual Resonance
                </text>
              </g>
            )}

            <circle cx="40" cy="84" r="4.5" fill="#241016" />
            <text x="40" y="102" textAnchor="start" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="700" fill="#241016">
              Opening Signals
            </text>
          </svg>
        </div>

        {/* Unseen Micro-Extract Card */}
        <div className="rounded-xl border border-line bg-surface-2 p-3.5 text-sm">
          <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-brand">
              Unseen Micro-Extract ({isSubversion ? "Subversive Inversion" : "Classical Adherence"})
            </span>
            <span className="chip">{data.name}</span>
          </div>
          <p className="italic leading-relaxed text-ink">
            {isSubversion ? data.subversionExtract : data.adherenceExtract}
          </p>
        </div>

        {/* Convention Matrix */}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {data.conventions.map((c) => (
            <div
              key={c.rule}
              className={`rounded-xl border p-3 text-xs ${
                isSubversion ? "border-brand/40 bg-brand-soft/40" : "border-good/40 bg-good-soft/40"
              }`}
            >
              <div className="flex items-center justify-between gap-1 font-extrabold text-ink">
                <span>{c.rule}</span>
                <span aria-hidden>{isSubversion ? "⚡" : "✓"}</span>
              </div>
              <p className="mt-1 leading-relaxed text-ink-2">
                {isSubversion ? c.subversionNote : c.adherenceNote}
              </p>
            </div>
          ))}
        </div>

        {/* Readouts + Reader Effect */}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <Readout
            label="Horizon Alignment"
            value={isSubversion ? "Deliberate Rupture" : "Faithful Fulfilment"}
            tone={isSubversion ? "brand" : "good"}
          />
          <Readout
            label="Dominant Reader Effect"
            value={isSubversion ? "Critical Defamiliarisation" : "Ritual & Emotional Weight"}
            tone="ink"
          />
        </div>

        <div className="rounded-xl border border-line bg-surface p-3 text-sm text-ink-2">
          <strong className="text-ink">Analytical Takeaway: </strong>
          {isSubversion ? data.subversionEffect : data.adherenceEffect}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "comparative-synthesis-builder",
    title: "Comparative Synthesis Architecture Builder",
    blurb:
      "Compare Block-by-Block silos against Integrated Point-by-Point Paper 2 architecture across two different literary forms and track live Criteria A, B, and C impact.",
    Component: ComparativeSynthesisBuilder,
  },
  {
    id: "genre-subversion-lab",
    title: "Genre Convention & Subversion Lab",
    blurb:
      "Explore how Tragedy, Gothic, Bildungsroman, and Pastoral conventions create Jauss's horizon of expectations — and flip between adherence and subversion to inspect reader effect.",
    Component: GenreSubversionLab,
  },
];

export default widgets;
