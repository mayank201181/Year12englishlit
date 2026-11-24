// ---------------------------------------------------------------------------
// Central subject configuration for Year 12–13 IB Diploma English A: Literature.
// Aligned strictly to the IBO Language A: Literature Guide (First Assessment 2021).
// Strict Non-Prescriptive Text Policy: ZERO set texts assumed; every named
// illustrative work/excerpt carries `[Example text — not a set text]`.
// ---------------------------------------------------------------------------
import type { IBCommandTerm, IBLevel, Strand } from "./types.ts";

export interface VaultQuickCard {
  title: string;
  badge: string;
  level?: IBLevel;
  lines: string[];
}

export interface ExamTip {
  icon: string;
  title: string;
  text: string;
}

export interface CommandTermDef {
  term: IBCommandTerm;
  ao: "AO1" | "AO2" | "AO3";
  meaning: string;
  examTip: string;
}

export interface ExamPaperMeta {
  id: string;
  expectedCount: number;
  level: IBLevel;
  paperType: string;
}

export const SUBJECT = {
  storageKey: "y12englishlit",
  cookieName: "y12englishlit_session",
  shortName: "IB English A: Lit",
  fullName: "Year 12–13 IB Diploma English A: Literature (SL/HL)",
  shortTitle: "IB DP English Lit",
  badge: "IB DP English A: Literature · First Assessment 2021",
  groupLabel: "Group 1 · Studies in Language & Literature",
  icon: "✒️",
  themeColorLight: "#be123c",
  themeColorDark: "#1f080e",
  provisionalBanner: null as string | null,
  tutorName: "Professor Woolf",
  tutorEmoji: "✒️",
  tutorScope: "IB Diploma English A: Literature (SL & HL, First Assessment 2021)",
  tutorSystemPrompt: `You are Professor Woolf, a warm, razor-sharp IB Diploma English A: Literature (SL & HL, First Assessment 2021) tutor inside Vanishree's Year 12–13 revision hub at Tanglin Trust School, Singapore.

How you teach (Art of Problem Solving discovery style, aligned strictly to IBO FA2021 Language A: Literature):
- If the learner asks about a passage, essay prompt, or practice question they are working on, do NOT hand them a full thesis immediately. Ask one probing close-reading question or offer a small conceptual nudge (e.g. "Notice the abrupt caesura in line 6 — how does that rhythmic fracture complicate the speaker's surface confidence?", "In your Paper 2 comparison, how does the *form* of each work shape that shared theme differently?"), then stop and let them reason.
- Only give a complete model paragraph or rubric breakdown if they explicitly ask for it, or the context shows they have already answered.
- Enforce the **Strict Non-Prescriptive Text Policy**: NEVER assume specific set texts are on Vanishree's Tanglin syllabus. Whenever you illustrate a transferable concept with a published work, label it \`[Example text — not a set text]\`, and encourage her to apply the framework to her own studied works.
- Follow official FA2021 structure & weightings strictly: **SL** (9 works min): Paper 1 35% (1h 15m, 1 of 2 unseen passages, 20m), Paper 2 35% (1h 45m, 2 works, 30m), Individual Oral IA 30% (15m, 40m). **HL** (13 works min): Paper 1 35% (2h 15m, BOTH unseen passages from different forms, 40m), Paper 2 25% (1h 45m, 30m), HL Essay 20% (1,200–1,500w, 20m), Individual Oral IA 20% (15m, 40m). Remember the **non-overlap work rule**: no work used in the IO or HL Essay may be reused in Paper 2!

Style:
- Concise: usually 2–6 sentences. British spelling. Precise, insightful, never pretentious.
- You may use **bold**, inline \`code\`, and simple "- " bullet lists.

Safety and scope:
- Only help with IB Diploma English A: Literature, literary craft, unseen commentary, comparative essays, Individual Oral, and HL Essay craft. For anything else, kindly steer back to Literature.
- Never ask for or repeat personal information.`,
  vaultTitle: "IB Literature Terms, 7 Concepts & Rubric Vault",
  vaultShort: "Lit Toolkit",
  vaultIcon: "✒️",
  vaultBlurb: "Transferable literary craft terms across all 4 forms, the 7 Concepts, 5 Fields of Inquiry, comparative connectives, and Criterion A–D markband separators.",
  vaultSearchPlaceholder: "Filter e.g. focalization, volta, free indirect, subtext, Criterion B…",
  examTitle: "IB English A: Lit Mock Papers (Paper 1 SL/HL & Paper 2)",
  examShort: "Mock Papers",
  examBlurb: "Unseen Paper 1 passages (SL 1-passage & HL 2-passage formats), Paper 2 Comparative Essay prompts (applicable to ANY 2 studied works), plus Diagnostic MCQs.",
  iaNavLabel: "IO & HL Essay",
  iaTitle: "IB Individual Oral (IA) & HL Essay Coursework Guide",
  cramBanner: "Stop losing easy IB Literature marks: NEVER summarise plot (analyse authorial choices → effect!), organise Paper 1 by conceptual ideas (not line-by-line!), keep Paper 2 comparative in EVERY paragraph, and protect the non-overlap work rule across IO, HL Essay & Paper 2!",
  searchPlaceholder: "Search, e.g. “volta”, “free indirect”, “global issue”, “Paper 2” or “HL Essay”",
  sitcomSeriesName: "IB Literature Studio (Phase C)",
  sitcomBlurb: "Narrated IB English A: Literature episodes and vertical Craft Shorts will arrive in Phase C once the Year 9 video batch finishes rendering.",
} as const;

export const EXAM_PAPERS_META: readonly ExamPaperMeta[] = [
  { id: "exam-mcq", expectedCount: 25, level: "SL", paperType: "Diagnostic MCQ Bank · Forms, Craft & Concepts" },
  { id: "exam-p1-sl", expectedCount: 15, level: "SL", paperType: "Paper 1 (SL) · Guided Literary Analysis (1 Passage, 20m)" },
  { id: "exam-p1-hl", expectedCount: 15, level: "HL", paperType: "Paper 1 (HL) · Guided Literary Analysis (2 Passages, 40m)" },
  { id: "exam-p2", expectedCount: 15, level: "SL", paperType: "Paper 2 · Comparative Essay (2 Studied Works, 30m)" },
] as const;

export const STRAND_STYLES_MAP: Record<Strand, { slug: string; text: string; bg: string; soft: string; border: string }> = {
  "Areas of Exploration": { slug: "aoe", text: "text-s-number", bg: "bg-s-number", soft: "bg-s-number/15", border: "border-s-number" },
  "Literary Forms": { slug: "forms", text: "text-s-ratio", bg: "bg-s-ratio", soft: "bg-s-ratio/15", border: "border-s-ratio" },
  "Concepts & Global Issues": { slug: "concepts", text: "text-s-algebra", bg: "bg-s-algebra", soft: "bg-s-algebra/15", border: "border-s-algebra" },
  "Exam & HL Essay Craft": { slug: "exam-craft", text: "text-s-geometry", bg: "bg-s-geometry", soft: "bg-s-geometry/15", border: "border-s-geometry" },
};

export const VAULT_QUICK_CARDS: readonly VaultQuickCard[] = [
  {
    title: "1. The 7 Central IB Literature Concepts",
    badge: "All Papers & HL Essay",
    level: "SL",
    lines: [
      "**Identity · Culture · Creativity · Communication · Perspective · Transformation · Representation**.",
      "Use a concept as an active **question**, not a buzzword (e.g. *How does fractured syntax represent psychological transformation?* rather than *This poem is about transformation*).",
      "For the **HL Essay [HL]**, anchoring your 1,200–1,500 word line of inquiry to one of the 7 Concepts ensures sustained literary focus.",
    ],
  },
  {
    title: "2. The 5 Fields of Inquiry & Global Issue Test",
    badge: "Individual Oral (IA)",
    level: "SL",
    lines: [
      "**5 Fields:** (1) Culture, identity & community · (2) Beliefs, values & education · (3) Politics, power & justice · (4) Art, creativity & imagination · (5) Science, technology & the environment.",
      "**3 Mandatory IO Tests:** Your Global Issue MUST have (a) **wide-scale significance**, (b) **transnational** reach, and (c) **impact felt in everyday local contexts**.",
      "**Formula:** Narrow broad topic → specific tension/mechanism → human impact (e.g. *How nostalgic domestic rituals disguise intergenerational trauma in displaced families*).",
    ],
  },
  {
    title: "3. Four Forms Craft Checklist (Never Just Technique-Spot!)",
    badge: "Paper 1 & Paper 2",
    level: "SL",
    lines: [
      "**Poetry:** form/metre, caesura, enjambment, volta (turn), semantic fields, extended conceit, acoustic texture (sibilance/plosives), speaker vs poet.",
      "**Drama:** stage directions, proxemics, lighting/sound, props, subtext, stichomythia, silences, soliloquy/aside, dramatic irony, tragic/comic arc.",
      "**Prose Fiction:** focalization, free indirect discourse, psychic distance, unreliable narrator, analepsis/prolepsis, pacing, setting & motif.",
      "**Literary Non-Fiction:** persona (experiencing vs retrospective self), ethos/pathos/logos, anecdote, hypotaxis vs parataxis, negotiating memory & truth.",
    ],
  },
  {
    title: "4. Criterion A–D Band 5 Separators & Non-Overlap Rule",
    badge: "SL & HL Assessment",
    level: "HL",
    lines: [
      "**Crit A (Knowledge/Understanding/Interpretation):** Explores subtle implications, ambiguity & persuasive conclusions — zero plot retelling.",
      "**Crit B (Analysis & Evaluation):** Evaluates *how* authorial choices shape meaning & reader effect (always link **device → effect → conceptual argument**).",
      "**Crit C (Focus & Organisation):** Conceptual topic sentences (NOT chronological paragraphing!) and seamless comparative transitions on Paper 2.",
      "**Non-Overlap Rule [HL & SL]:** Works used in your **Individual Oral** or **HL Essay [HL]** CANNOT be reused in **Paper 2**!",
    ],
  },
];

export const EXAM_TIPS: readonly ExamTip[] = [
  {
    icon: "🎯",
    title: "Transferable Craft — Zero Set Texts Assumed",
    text: "Every illustrative work in this guide is stamped `[Example text — not a set text]`. Practise transferring every analytical move directly onto the 9 (SL) or 13 (HL) works in your own Learner Portfolio.",
  },
  {
    icon: "🏗️",
    title: "Never Write a Chronological 'Stanza 1, Stanza 2' Paper 1",
    text: "Chronological walkthroughs cap Criterion C in mid-band! Group your Paper 1 analysis into 3–4 **conceptual movements** that answer the guiding question and show how form evolves across the whole extract.",
  },
  {
    icon: "⚖️",
    title: "Paper 2 Demands Integrated Comparison in Every Section",
    text: "Avoid the 'half-essay on Work A, half-essay on Work B' trap! Compare BOTH works side-by-side around shared conceptual angles, contrasting how their distinct forms (e.g. staging vs focalization) produce divergent effects.",
  },
  {
    icon: "⏱️",
    title: "HL Paper 1 (2h 15m): Protect Your Second Essay",
    text: "At HL you analyse **BOTH** unseen passages (2 × 20 marks = 40 marks). Enforce a hard 65-minute stop on Essay 1 (15m annotate/plan + 50m write) so Essay 2 earns the exact same Band 5 polish.",
  },
];

export const IB_COMMAND_TERMS: readonly CommandTermDef[] = [
  { term: "Analyse", ao: "AO2", meaning: "Break down a text or literary feature to uncover how authorial choices construct meaning and effect.", examTip: "Always move from micro-evidence (word, rhythm, stage cue) → mechanism → conceptual implication." },
  { term: "Compare", ao: "AO3", meaning: "Give an account of similarities between two works, referring to both throughout.", examTip: "Look beneath surface similarity to subtle differences in form, tone, or cultural context." },
  { term: "Compare and contrast", ao: "AO3", meaning: "Give an account of similarities AND differences between two literary works throughout the essay.", examTip: "Weave both texts into every body section using precision comparative connectives." },
  { term: "Contrast", ao: "AO3", meaning: "Give an account of the differences between two works, perspectives, or stylistic choices.", examTip: "Explain *why* each writer's distinct formal choices yield contrasting reader effects." },
  { term: "Discuss", ao: "AO3", meaning: "Offer a considered and balanced literary review weighing multiple interpretations and nuances.", examTip: "Acknowledge ambiguity or counter-readings before advancing your most persuasive synthesis." },
  { term: "Evaluate", ao: "AO3", meaning: "Make a reasoned critical appraisal of the effectiveness or implications of a writer's craft.", examTip: "Judge *how effectively* a technique achieves its psychological, aesthetic, or political impact." },
  { term: "Examine", ao: "AO3", meaning: "Consider a literary argument or concept in a way that uncovers underlying assumptions and tensions.", examTip: "Interrogate key terms in the Paper 2 prompt rather than accepting them at face value." },
  { term: "Explain", ao: "AO2", meaning: "Give a detailed account of how a literary device, structure, or context operates.", examTip: "Tie every explanation directly back to concrete textual phrasing." },
  { term: "Explore", ao: "AO3", meaning: "Undertake a systematic, open-ended literary inquiry into a nuanced line of questioning.", examTip: "Ideal for HL Essay & Paper 1: trace how meaning deepens or shifts across the text." },
  { term: "Identify", ao: "AO1", meaning: "Pinpoint a specific literary feature, narrative mode, poetic device, or conceptual focus.", examTip: "Name the exact term precisely (e.g. 'free indirect discourse' rather than 'descriptive language')." },
  { term: "Justify", ao: "AO3", meaning: "Give valid textual reasons and evidence to support an interpretive claim or extract choice.", examTip: "Anchor every justification in short embedded quotations and structural evidence." },
  { term: "To what extent", ao: "AO3", meaning: "Consider the merits and limits of a critical proposition, arriving at a nuanced judgement.", examTip: "Avoid binary yes/no answers — show *where* and *how* the claim holds and where the works resist it." },
];
