// ---------------------------------------------------------------------------
// Topic registry for Year 12–13 IB Diploma English A: Literature (SL & HL, FA 2021).
// Pure data — safe to import from Node scripts.
//
// Strict Non-Prescriptive Text Policy: ZERO set texts assumed. Every topic
// teaches transferable literary analysis, comparative synthesis, and conceptual
// craft. Illustrative named works carry `[Example text — not a set text]`.
// ---------------------------------------------------------------------------
import type { IBLevel, Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  covers: string;
  level?: IBLevel;
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  level: IBLevel;
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Areas of Exploration",
  "Literary Forms",
  "Concepts & Global Issues",
  "Exam & HL Essay Craft",
];

export const TOPIC_META: TopicMeta[] = [
  // ===================== AREAS OF EXPLORATION ==============================
  {
    id: "1-readers-writers-texts",
    title: "AoE 1: Readers, Writers & Texts",
    strand: "Areas of Exploration",
    icon: "📖",
    level: "SL",
    curriculum: "IB English A: Literature FA2021 — Area of Exploration 1: Close reading, authorial craft, ambiguity & Learner Portfolio",
    sections: [
      {
        id: "close-reading-meaning",
        heading: "How Literary Meaning Is Constructed: Authorial Choices Over Plot Summary",
        level: "SL",
        covers: "Distinguishing active close reading from paraphrase/plot retelling; tracing how diction, syntax, figurative imagery, structural juxtaposition, and omission construct meaning; embedding short analytical quotations seamlessly into conceptual claims.",
      },
      {
        id: "voice-tone-ambiguity",
        heading: "Narrative Voice, Tone, Irony & Productive Ambiguity",
        level: "SL",
        covers: "Separating author from speaker/narrator; tracking tonal shifts (elegiac, sardonic, restrained, reverent); verbal, situational & dramatic irony; why top-band IB essays embrace complexity, tension, and unresolved ambiguity rather than forcing reductive morals.",
      },
      {
        id: "reader-response-choices",
        heading: "Reader Response, Implied Readership & Interpretive Lenses",
        level: "SL",
        covers: "How different readers actively co-construct meaning; implied vs resisting readers; textual gaps (Wolfgang Iser); evaluating multiple plausible interpretations while anchoring every claim in concrete textual evidence.",
      },
      {
        id: "learner-portfolio-craft",
        heading: "Building a High-Impact IB Learner Portfolio Across DP1–DP2",
        level: "SL",
        covers: "Using the mandatory Learner Portfolio to log rich passages (≤40 lines for IO prep), map Global Issues, trace cross-text links across original English and translated works, and protect the non-overlap rule across IO, HL Essay, and Paper 2.",
      },
    ],
  },
  {
    id: "2-time-and-space",
    title: "AoE 2: Time & Space",
    strand: "Areas of Exploration",
    icon: "🧭",
    level: "SL",
    curriculum: "IB English A: Literature FA2021 — Area of Exploration 2: Contexts of production/reception & works in translation",
    sections: [
      {
        id: "production-reception-contexts",
        heading: "Contexts of Production vs Contexts of Reception",
        level: "SL",
        covers: "How historical, social, political, and geographical conditions shape a work's creation (production) versus how later or cross-cultural audiences reinterpret the same text (reception); shifting moral and aesthetic horizons over time.",
      },
      {
        id: "historical-cultural-lenses",
        heading: "Cultural Values, Space, Place & Power Dynamics",
        level: "SL",
        covers: "How physical, domestic, urban, colonial, and borderland spaces function symbolically; how texts endorse, negotiate, or subvert prevailing norms of class, gender, empire, and memory.",
      },
      {
        id: "works-in-translation",
        heading: "Reading Works in Translation: Cultural Nuance & Translator Choices",
        level: "SL",
        covers: "Mandatory IB Literature strand (min 3 translated works SL / 4 HL): recognising translation as an interpretive act, attending to register, untranslatable cultural idioms, rhythm, and footnotes without treating translated prose/poetry as transparent English.",
      },
      {
        id: "context-without-fallacy",
        heading: "Integrating Context Analytically Without Biographical or Historical Fallacy",
        level: "SL",
        covers: "Avoiding 'history-essay dumps' and reductive author-biography assumptions (intentional fallacy); making context serve textual analysis by showing how specific literary choices engage with cultural tensions.",
      },
    ],
  },
  {
    id: "3-intertextuality",
    title: "AoE 3: Intertextuality — Connecting Texts",
    strand: "Areas of Exploration",
    icon: "🔗",
    level: "SL",
    curriculum: "IB English A: Literature FA2021 — Area of Exploration 3: Literary conventions, traditions, allusion & comparative synthesis",
    sections: [
      {
        id: "conventions-traditions-subversion",
        heading: "Literary Conventions, Movements & Genre Subversion",
        level: "SL",
        covers: "How genres (tragedy, sonnet, Bildungsroman, Gothic, magical realism, modernist lyric) set horizon of expectations — and how writers generate meaning by adhering to, stretching, parodying, or inverting established conventions.",
      },
      {
        id: "allusion-motif-dialogue",
        heading: "Allusion, Motif, Archetype & Intertextual Dialogue",
        level: "SL",
        covers: "Explicit vs structural allusion (mythic, biblical, literary); recurring motifs and archetypes across eras and cultures; how later works talk back to, rewrite, or ironise earlier canonical texts.",
      },
      {
        id: "cross-form-connections",
        heading: "Comparing Across Eras, Cultures & Different Literary Forms",
        level: "SL",
        covers: "Comparing works across distinct periods, languages, and forms (e.g. a play vs a novel, or poetry vs memoir) by focusing on how medium-specific choices (staging vs focalization vs lineation) shape shared human concerns.",
      },
      {
        id: "comparative-synthesis-architecture",
        heading: "Integrated Point-by-Point Comparative Architecture (Paper 2 Foundation)",
        level: "SL",
        covers: "Why integrated thematic/conceptual comparison outscores block-by-block ('Text A then Text B') essays on Paper 2; precision comparative connectives (*whereas, while, by contrast, conversely, analogously*) and nuanced divergence within similarity.",
      },
    ],
  },

  // ===================== LITERARY FORMS ====================================
  {
    id: "4-poetry-and-drama",
    title: "Literary Forms I: Poetry & Drama Craft",
    strand: "Literary Forms",
    icon: "🎭",
    level: "SL",
    curriculum: "IB English A: Literature FA2021 — Unseen & studied craft in Poetry (form, metre, sound) and Drama (staging, subtext, dialogue)",
    sections: [
      {
        id: "poetic-form-metre-structure",
        heading: "Poetic Architecture: Form, Metre, Stanza, Lineation & Volta",
        level: "SL",
        covers: "Fixed vs open forms (Petrarchan & Shakespearean sonnets, villanelle, elegy, dramatic monologue, free verse); iambic/trochaic/spondaic rhythm & metrical disruption; enjambment, caesura, end-stopping, stanza breaks, and the structural volta (turn).",
      },
      {
        id: "poetic-imagery-sound-voice",
        heading: "Poetic Imagery, Soundscapes & Lyrical Persona",
        level: "SL",
        covers: "Extended metaphor/conceit, metonymy, synecdoche, synesthesia, sensory & semantic fields; acoustic craft (sibilance, plosives, assonance, consonance, half-rhyme) analysed for psychological/thematic effect — NEVER empty 'technique spotting'; distinguishing speaker from poet.",
      },
      {
        id: "dramatic-conventions-staging",
        heading: "Drama as Performance: Stage Directions, Space, Lighting & Props",
        level: "SL",
        covers: "Reading drama as a three-dimensional theatrical script rather than flat prose: stage directions, proxemics (physical distance on stage), entrances/exits, symbolic props, soundscapes, lighting shifts, fourth wall, and Brechtian/expressionist staging.",
      },
      {
        id: "subtext-dialogue-tragedy-comedy",
        heading: "Subtext, Dialogue Dynamics, Dramatic Irony & Tragic/Comic Arcs",
        level: "SL",
        covers: "Subtext (what characters conceal beneath spoken lines), stichomythia, interruption, pauses/silences, soliloquy & aside; dramatic irony; classical & modern tragedy (hamartia, peripeteia, anagnorisis, catharsis) and satirical/absurdist comedy.",
      },
    ],
  },
  {
    id: "5-prose-fiction-nonfiction",
    title: "Literary Forms II: Prose Fiction & Literary Non-Fiction",
    strand: "Literary Forms",
    icon: "✒️",
    level: "SL",
    curriculum: "IB English A: Literature FA2021 — Prose Fiction (focalization, narrative distance, structure) & Literary Non-Fiction (essay, memoir, rhetoric)",
    sections: [
      {
        id: "narrative-perspective-focalization",
        heading: "Narrative Perspective, Focalization & Free Indirect Discourse",
        level: "SL",
        covers: "First-person, second-person, third-person omniscient vs limited; Genette's focalization (who sees vs who speaks); **free indirect discourse** blending narrator grammar with character consciousness; psychic distance and unreliable narration.",
      },
      {
        id: "prose-time-setting-symbolism",
        heading: "Temporal Structure, Pace, Setting, Characterisation & Symbolism",
        level: "SL",
        covers: "Analepsis (flashback), prolepsis (foreshadowing/flashforward), *in medias res*, frame narratives, pacing (scene vs summary vs ellipsis), pathetic fallacy, spatial atmosphere, foil characters, and evolving motifs/symbols.",
      },
      {
        id: "literary-nonfiction-genres",
        heading: "Literary Non-Fiction: Essay, Memoir, Travel Writing & Speech",
        level: "SL",
        covers: "The 4th IB Literature form: how literary non-fiction uses narrative craft, metaphor, anecdote, structural pacing, and lyrical reflection to explore lived experience across essays, autobiographies, memoirs, letters, travelogues, and oratory.",
      },
      {
        id: "rhetoric-persona-truth-claims",
        heading: "Persona, Rhetorical Craft, Syntax & Negotiating Truth-Claims",
        level: "SL",
        covers: "Constructing the writing persona (retrospective vs experiencing self in memoir); Aristotelian appeals (ethos, pathos, logos), anaphora, antithesis, tricolon, hypotaxis vs parataxis, and interrogating memory, subjectivity, and authority.",
      },
    ],
  },

  // ===================== CONCEPTS & GLOBAL ISSUES ==========================
  {
    id: "6-concepts-global-issues",
    title: "The 7 Central Concepts & Global Issues",
    strand: "Concepts & Global Issues",
    icon: "🌐",
    level: "SL",
    curriculum: "IB English A: Literature FA2021 — 7 Course Concepts, 5 Fields of Inquiry & Individual Oral Global Issue craft",
    sections: [
      {
        id: "seven-central-concepts",
        heading: "Applying the 7 IB Literature Concepts as Analytical Lenses",
        level: "SL",
        covers: "Mastering **Identity, Culture, Creativity, Communication, Perspective, Transformation, and Representation** — turning abstract labels into razor-sharp conceptual questions across essays, discussions, and the HL Essay.",
      },
      {
        id: "five-fields-of-inquiry",
        heading: "The 5 IB Fields of Inquiry for Framing Global Issues",
        level: "SL",
        covers: "Navigating the 5 official starting fields: (1) Culture, identity & community; (2) Beliefs, values & education; (3) Politics, power & justice; (4) Art, creativity & imagination; (5) Science, technology & the environment.",
      },
      {
        id: "narrowing-global-issues",
        heading: "The Global Issue Narrowing Funnel: 3 Mandatory IB Properties",
        level: "SL",
        covers: "Designing an IO Global Issue that satisfies all 3 IBO criteria: **wide-scale significance**, **transnational** reach, and **impact felt in everyday local contexts** — transforming vague themes ('power', 'gender') into precise, arguable formulations.",
      },
      {
        id: "pairing-english-translated-works",
        heading: "Pairing 1 Original English Work + 1 Translated Work for the Individual Oral",
        level: "SL",
        covers: "Choosing ≤40-line extracts that offer dense authorial choices (not mere plot summaries), balancing micro close-reading of the extract with macro movement across each whole work, and allocating 5 min / 5 min evenly in the 10-minute talk.",
      },
    ],
  },

  // ===================== EXAM & HL ESSAY CRAFT =============================
  {
    id: "7-paper1-paper2-mastery",
    title: "External Exam Craft: Paper 1 & Paper 2",
    strand: "Exam & HL Essay Craft",
    icon: "📝",
    level: "SL",
    curriculum: "IB English A: Literature FA2021 — Paper 1 Guided Literary Analysis (SL 1 / HL 2 passages), Paper 2 Comparative Essay & Crit A–D",
    sections: [
      {
        id: "paper1-guiding-question-planning",
        heading: "Paper 1 (SL & HL): Unpacking Guiding Questions & 15-Minute Planning",
        level: "SL",
        covers: "SL (1h 15m, 1 of 2 unseen passages, 20m, 35%) core workflow: reading actively for central tension, using the guiding question as a conceptual lens (or framing an equally sharp focus), organising by conceptual ideas (NEVER chronological stanza-by-stanza!), and writing a tight line of argument.",
      },
      {
        id: "paper1-hl-two-passages",
        heading: "HL Paper 1 Strategy: Sustaining Quality Across BOTH Unseen Passages",
        level: "HL",
        covers: "HL (2h 15m, BOTH unseen passages from two different literary forms, 2 × 20 = 40 marks, 35%): strict 65 min + 65 min + 5 min buffer pacing, pivoting rapidly between distinct form toolkits (e.g. Poetry → Drama or Prose → Non-Fiction), and preventing second-essay fatigue.",
      },
      {
        id: "paper2-comparative-prompts",
        heading: "Paper 2: Unpacking Unseen Prompts Across 2 Studied Works (Closed Book)",
        level: "SL",
        covers: "SL (35%) & HL (25%): 1h 45m, 30 marks (A10, B10, C5, D5), choosing 1 of 4 unseen prompts on 2 studied works (no texts in exam!). Defining key prompt terms, challenging implicit assumptions, integrating memorized micro-quotations & structural moments, and maintaining balanced comparison throughout.",
      },
      {
        id: "rubric-mastery-crit-a-d",
        heading: "Mastering IB Criteria A, B, C & D: Moving from Band 3 to Band 5",
        level: "SL",
        covers: "Decoding exact IB criterion separators: **Crit A** (insightful interpretation & implications vs descriptive paraphrase), **Crit B** (evaluative analysis of authorial choices vs technique-spotting), **Crit C** (cohesive conceptual architecture), and **Crit D** (precise, concise academic register).",
      },
    ],
  },
  {
    id: "8-hl-essay-criticism",
    title: "The HL Essay & Critical Inquiry (HL Only)",
    strand: "Exam & HL Essay Craft",
    icon: "🎓",
    level: "HL",
    curriculum: "IB English A: Literature FA2021 HL Essay (External Coursework, 20%, 1,200–1,500 words, 20 marks: A5/B5/C5/D5)",
    sections: [
      {
        id: "hl-essay-line-of-inquiry",
        heading: "Designing an Original HL Essay Line of Inquiry (1,200–1,500 Words)",
        level: "HL",
        covers: "Selecting ONE studied work (checking the strict **non-overlap rule**: must NOT be used in your IO or Paper 2!), anchoring to one of the 7 Concepts (or another formal literary focus), and narrowing from a broad topic to a sharp, arguable literary inquiry question.",
      },
      {
        id: "critical-theoretical-lenses",
        heading: "Using Critical & Theoretical Perspectives Without Jargon Overload",
        level: "HL",
        covers: "Deploying optional critical lenses (feminist, postcolonial, Marxist, psychoanalytic, ecocritical, narratological) as illuminating analytical questions rather than mechanical checklists or name-dropping.",
      },
      {
        id: "evidence-argument-integration",
        heading: "Sustaining a Formal Line of Argument Across a Whole Work",
        level: "HL",
        covers: "Balancing micro close-reading of key stylistic moments with macro structural awareness of the whole work (or cohesive collection of poems/essays/stories); handling counter-interpretations, scholarly citation hygiene, and academic integrity.",
      },
      {
        id: "hl-essay-drafting-rubric",
        heading: "Word-Budgeting, Redrafting & Hitting Band 5 on Criteria A–D (20 Marks)",
        level: "HL",
        covers: "Enforcing the strict **1,200–1,500 word** range (examiners penalise/stop reading beyond 1,500w!), allocating ~150w intro / ~1,100w across 3–4 progressive body movements / ~150w synthesis conclusion, and eliminating Criterion B/C/D mark-losers.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
