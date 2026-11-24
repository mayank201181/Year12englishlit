// ---------------------------------------------------------------------------
// Internal Assessment (Individual Oral) & HL Essay Coursework Guidance —
// IB Diploma English A: Literature (SL & HL, First Assessment 2021).
//
// Individual Oral (IA): SL 30% / HL 20% · 15 min (10m talk + 5m Q&A) · 40 marks
//   (A10, B10, C10, D10) · 1 original English + 1 translated work · ≤40-line extracts.
// HL Essay (HL External Coursework): HL 20% · 1,200–1,500 words · 20 marks
//   (A5, B5, C5, D5) · 1 studied work · Strict NON-OVERLAP rule with IO & Paper 2!
// ---------------------------------------------------------------------------

export interface IaCriterionBand {
  marks: string;
  descriptor: string;
}

export interface IaCriterion {
  code: string;
  name: string;
  maxMarks: number;
  summary: string;
  topBandMustHave: string[];
  bands: IaCriterionBand[];
}

export interface IaMilestone {
  phase: string;
  timing: string;
  tasks: string[];
}

export interface IaSectionGuide {
  heading: string;
  targetWords: string;
  whatToInclude: string;
}

export const IA_GUIDE = {
  title: "IB Individual Oral (IA) & HL Essay Coursework Guide",
  subtitle: "First Assessment 2021 · IO: SL 30% / HL 20% (40 marks, 15 min) · HL Essay [HL]: 20% (20 marks, 1,200–1,500 words)",
  hoursNote: "The Individual Oral (IA) is taken by BOTH SL & HL students (10 min prepared oral + 5 min teacher Q&A) examining ONE Global Issue across ONE work originally written in English and ONE work in translation. HL students additionally submit the external HL Essay (1,200–1,500 words) on a SEPARATE single studied work.",
  wordLimit: 1500,
  totalMarks: 40,
  weightSL: "30% (IO)",
  weightHL: "20% IO + 20% HL Essay",
  keyChanges2025: [
    "**Strict Non-Overlap Work Rule (SL & HL):** Any literary work chosen for your **Individual Oral** (2 works) OR your **HL Essay [HL]** (1 work) **CANNOT** be reused in **Paper 2**! Map your 9 (SL) or 13 (HL) works inside your Learner Portfolio early so you never trap yourself.",
    "**Individual Oral (40 marks = A10 + B10 + C10 + D10):** Choose **1 work originally written in English** + **1 work in translation** + **1 focused Global Issue** (wide-scale significance, transnational, felt in everyday local contexts). Select two clean extracts of **≤ 40 lines each** and bring ONLY the unmarked extracts plus a **maximum 10-bullet-point outline** into the recording.",
    "**Equal Balance Is Non-Negotiable in the IO:** Divide your 10-minute prepared talk evenly (~4.5 min English work + ~4.5 min translated work + ~1 min intro/synthesis), and inside EACH work balance **close-reading of your ≤40-line extract** (~2.5 min) with **macro-analysis of the whole work** (~2 min).",
    "**HL Essay [HL Only] (20 marks = A5 + B5 + C5 + D5, 20% of HL grade):** A formal **1,200–1,500 word** literary inquiry on **ONE** studied work (may be English or translated, provided it is NOT used in your IO or Paper 2), exploring an original, narrow line of inquiry often anchored to one of the **7 IB Concepts**. Exceeding 1,500 words loses Criterion C/D credit!",
  ],
  criteria: [
    {
      code: "A",
      name: "Knowledge, Understanding & Interpretation (IO: 10m · HL Essay: 5m)",
      maxMarks: 10,
      summary: "Demonstrates persuasive, perceptive understanding of both the extracts and the works as a whole in relation to the Global Issue (or line of inquiry in the HL Essay).",
      topBandMustHave: [
        "Frames a **narrow, arguable Global Issue** with all 3 IB properties (wide-scale significance, transnational, local everyday impact) — never a vague one-word theme like 'power' or 'family'.",
        "Balances micro insight into the ≤40-line extract with accurate macro references to other pivotal moments across the **whole work**.",
        "Draws subtle, persuasive conclusions about implications rather than summarising plot events.",
      ],
      bands: [
        { marks: "9–10", descriptor: "Perceptive, persuasive knowledge and understanding of extracts and whole works, offering insightful conclusions on how both present the Global Issue." },
        { marks: "7–8", descriptor: "Good, accurate knowledge and interpretation of extracts and whole works with clear, relevant links to the Global Issue." },
        { marks: "5–6", descriptor: "Satisfactory understanding of literal meaning, though interpretation occasionally lapses into summary or uneven extract/whole-work balance." },
        { marks: "1–4", descriptor: "Descriptive, plot-heavy, or tenuous connection to the Global Issue; limited grasp of the whole works." },
      ],
    },
    {
      code: "B",
      name: "Analysis and Evaluation (IO: 10m · HL Essay: 5m)",
      maxMarks: 10,
      summary: "Evaluates how specific authorial choices (diction, imagery, form, structure, staging, focalization) construct and complicate the presentation of the Global Issue (or HL Essay inquiry).",
      topBandMustHave: [
        "Every claim pairs **authorial choice → mechanism → effect on the Global Issue** (NEVER mere technique spotting!).",
        "Analyses **form-specific** choices (e.g. lineation/volta in poetry, stage directions/subtext in drama, focalization in fiction, persona/rhetoric in non-fiction).",
        "Explicitly evaluates *why* a choice is effective or creates tension, ambiguity, or ironic critique.",
      ],
      bands: [
        { marks: "9–10", descriptor: "Consistently insightful and convincing analysis and evaluation of how a rich range of authorial choices present the Global Issue across both extracts and whole works." },
        { marks: "7–8", descriptor: "Relevant, generally effective analysis of authorial choices with clear links to the Global Issue, though evaluation may be uneven." },
        { marks: "5–6", descriptor: "Identifies literary features accurately but analysis stays partly descriptive or focuses heavily on extracts while neglecting choices in the wider works." },
        { marks: "1–4", descriptor: "Minimal analysis of craft; mostly content/theme description or isolated feature-spotting." },
      ],
    },
    {
      code: "C",
      name: "Focus and Organisation (IO: 10m · HL Essay: 5m)",
      maxMarks: 10,
      summary: "Delivers a well-structured, balanced, cohesive oral presentation (or tightly argued 1,200–1,500w HL Essay) with purposeful transitions and disciplined pacing.",
      topBandMustHave: [
        "**IO Pacing:** Roughly 50/50 time split between Work 1 (English) and Work 2 (Translated), finishing cleanly between **9:30 and 10:00** without rushing the second work!",
        "**Conceptual Signposting:** Brief, purposeful conceptual framing in the intro and crisp synthesis linking how the two works illuminate different facets of the Global Issue.",
        "**HL Essay [HL]:** Progressive line of inquiry across 3–4 analytical body movements within **1,200–1,500 words** (never a random list of unrelated paragraphs).",
      ],
      bands: [
        { marks: "9–10", descriptor: "Balanced, tightly focused, and effectively developed presentation/essay; ideas progress coherently and purposefully throughout." },
        { marks: "7–8", descriptor: "Clear focus and logical organisation with mostly balanced treatment of both works (or coherent HL Essay argument)." },
        { marks: "5–6", descriptor: "Generally organised, though noticeable time imbalance (e.g. 7 min on Work 1, 3 min on Work 2) or abrupt transitions weaken cohesion." },
        { marks: "1–4", descriptor: "Unfocused, imbalanced, or rambling structure; runs significantly short or gets cut off mid-argument." },
      ],
    },
    {
      code: "D",
      name: "Language (IO: 10m · HL Essay: 5m)",
      maxMarks: 10,
      summary: "Uses clear, accurate, varied, and precise literary language suited to formal academic discussion (spoken fluency in the IO; polished formal prose in the HL Essay).",
      topBandMustHave: [
        "Precise literary terminology used naturally (`caesura`, `focalization`, `proxemics`, `free indirect discourse`, `subtext`, `ironic detachment`) — never inflated thesaurus jargon.",
        "In the IO: engaging, natural, well-paced spoken delivery (using your 10-bullet outline as a prompt, NOT reading a memorised robot script!).",
        "In the HL Essay [HL]: concise, varied academic syntax, seamlessly embedded short quotations, and impeccable MLA/consistent citation hygiene.",
      ],
      bands: [
        { marks: "9–10", descriptor: "Clear, accurate, effective, and varied language; precise literary terminology and nuanced register enhance persuasive force." },
        { marks: "7–8", descriptor: "Clear and accurate language with appropriate academic register and sound use of literary terminology." },
        { marks: "5–6", descriptor: "Comprehensible and mostly accurate, though repetitive phrasing, informal register, or imprecise terms limit sophistication." },
        { marks: "1–4", descriptor: "Frequent language errors, informal speech, or vague wording impede clarity." },
      ],
    },
  ] as IaCriterion[],
  exemplarStructure: [
    {
      heading: "IO Phase 1: Opening & Global Issue Definition",
      targetWords: "0:00 – 0:45 (IO)",
      whatToInclude: "State your precise Global Issue (showing its wide-scale, transnational, local-everyday dimensions), name both works (1 English, 1 translated), and preview the contrasting angle each work offers.",
    },
    {
      heading: "IO Phase 2: Work 1 (English) — Extract Close-Reading → Whole Work",
      targetWords: "0:45 – 5:00 (IO)",
      whatToInclude: "Anchor tightly in your ≤40-line extract (2.5 min: 3–4 sharp authorial choices with brief embedded phrases), then zoom out to 2–3 structural/thematic touchpoints across the wider work (1.75 min).",
    },
    {
      heading: "IO Phase 3: Work 2 (Translated) — Extract Close-Reading → Whole Work",
      targetWords: "5:00 – 9:15 (IO)",
      whatToInclude: "Mirror the exact same depth on your translated work (noting cultural/translation nuances where relevant): 2.5 min close-reading of the ≤40-line extract + 1.75 min whole-work expansion.",
    },
    {
      heading: "IO Phase 4: Concise Synthesis & 5-Minute Teacher Q&A",
      targetWords: "9:15 – 15:00 (IO)",
      whatToInclude: "Wrap up in 45 seconds by highlighting the richest conceptual dialogue between both works, then treat the 5-minute Q&A as a live chance to deepen Criterion A & B points with fresh textual detail!",
    },
    {
      heading: "HL Essay [HL Only]: Title, Conceptual Intro, 3–4 Body Movements & Conclusion",
      targetWords: "1,200 – 1,500 words",
      whatToInclude: "Sharp title stating your focused line of inquiry (~15w) · Intro establishing conceptual stakes & thesis (~150w) · 3–4 progressive body movements balancing micro close-reading + whole-work arc (~1,100w) · Reflective synthesis conclusion (~150w) + Works Cited (excluded from word count).",
    },
  ] as IaSectionGuide[],
  milestones: [
    {
      phase: "1. Learner Portfolio Harvest & Non-Overlap Map",
      timing: "DP1 Term 3 – DP2 Term 1",
      tasks: [
        "Map ALL 9 (SL) or 13 (HL) studied works into three strictly non-overlapping buckets: IO (1 English + 1 Translated), HL Essay [HL] (1 distinct work), and Paper 2 Reserve (≥3 distinct works across varied themes).",
        "Tag candidate ≤40-line extracts rich in authorial choices (tension, turning points, stylistic density) inside your Learner Portfolio.",
      ],
    },
    {
      phase: "2. Global Issue Narrowing & HL Essay Line of Inquiry [HL]",
      timing: "DP2 Term 1",
      tasks: [
        "Stress-test your IO Global Issue against the 3 IB properties (wide-scale, transnational, local everyday impact) — ensure it is NOT tied to a single country or era.",
        "[HL] Draft and refine your HL Essay line of inquiry linked to one of the 7 Concepts; gather micro-quotations and structural touchpoints across the entire work.",
      ],
    },
    {
      phase: "3. 10-Bullet Outline, Timed IO Rehearsals & HL Essay Polish",
      timing: "DP2 Term 2",
      tasks: [
        "Condense your IO notes into a crisp **10-bullet outline** (≤300 words total; no full scripted paragraphs) and run 3 timed rehearsals hitting 4:30 / 4:30 balance.",
        "Practise 5-minute Q&A probing questions (counter-readings, structural endings, translator choices, alternative authorial techniques).",
        "[HL] Edit the HL Essay ruthlessly to land squarely in **1,350–1,480 words** (safely under the 1,500-word ceiling!) with zero plot-summary bloat.",
      ],
    },
  ] as IaMilestone[],
  moderatorTraps: [
    "Choosing a vague, one-word Global Issue ('love', 'war', 'inequality') or a hyper-local historical topic ('1920s American prohibition') that fails the transnational + everyday-impact test.",
    "Spending 7 minutes on Work 1 and rushing Work 2 in 2.5 minutes — severe imbalance immediately caps Criterion C (Focus & Organisation)!",
    "Only analysing the ≤40-line extract and forgetting to zoom out to the **whole work** (or conversely, talking vaguely about the whole book while ignoring the extract's specific language!).",
    "Selecting a flat dialogue/plot extract with minimal stylistic craft instead of a dense 30–40 line passage packed with imagery, rhythm, subtext, or narrative tension.",
    "[HL Essay] Writing a thematic 'report' ('Three ways solitude appears in X') instead of an arguable literary **line of inquiry** examining authorial choices — or breaking the 1,500-word limit / non-overlap rule!",
  ],
  checklist: [
    "Non-overlap check verified: NO work used in my IO or HL Essay [HL] is planned for Paper 2.",
    "IO pairs 1 work originally written in English + 1 work in translation, with clean unmarked extracts of ≤ 40 lines each.",
    "Global Issue satisfies all 3 IB properties: wide-scale significance, transnational reach, and everyday local impact.",
    "IO 10-bullet outline contains concise conceptual/evidence cues (not dense prose paragraphs) and timed rehearsal hits ~4.5m / ~4.5m balance.",
    "Every IO & HL Essay analytical point connects Authorial Choice → Mechanism → Conceptual Effect (zero plot summary!).",
    "[HL Essay] Word count sits cleanly between 1,200 and 1,500 words (excluding title, citations, and Works Cited), anchored to a sharp line of inquiry.",
  ],
};
