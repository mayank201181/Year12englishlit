// ---------------------------------------------------------------------------
// IB English A: Literature (FA2021) Paper 2 Mock Exam Paper.
// Four authentic unseen comparative essay prompts applicable to ANY 2 studied
// works. Strict Non-Prescriptive Text Policy: ZERO set texts assumed; every
// illustrative published work in model answers carries
// `[Example text — not a set text]`.
// ---------------------------------------------------------------------------
import type { ExamPaper, MarkBand } from "../types.ts";

const P2_PROMPTS_BLOCK = `**Official-Style Unseen IB Paper 2 Comparative Prompts (Apply to ANY Two Studied Works)**

> **Prompt 1 (Confinement & Freedom):** *In what ways, and to what effect, do two of the works you have studied portray physical or psychological confinement as a catalyst for self-discovery or resistance?*
>
> **Prompt 2 (Memory & Truth):** *“Memory is never a neutral archive; it is an instrument of survival or power.” Discuss this claim in relation to two of the works you have studied.*
>
> **Prompt 3 (Generational Conflict & Inheritance):** *Compare and contrast how two of the works you have studied use domestic spaces or family obligations to expose tensions between inherited tradition and individual agency.*
>
> **Prompt 4 (Narrative Form & Ambiguity):** *How, and with what effect, do two of the works you have studied resist tidy moral resolution through their structural or formal choices?*

*(Non-prescriptive reminder: apply these prompts to ANY two studied works from your own IB Learner Portfolio, honouring the IB non-overlap rule with your Individual Oral and, at HL, your HL Essay.)*`;

const P2_MARKBANDS_30: MarkBand[] = [
  {
    band: "Band 5 (25–30)",
    marks: [25, 30],
    descriptor:
      "**Crit A (9–10/10):** Perceptive knowledge and insightful interpretation of both works with sustained, nuanced comparison of subtle similarities and differences directly addressing the prompt. **Crit B (9–10/10):** Consistently evaluative comparative analysis of *how* form-specific authorial choices construct meaning and divergent reader/audience effects. **Crit C (4–5/5):** Cohesive, integrated point-by-point conceptual architecture maintained effortlessly throughout. **Crit D (4–5/5):** Precise, fluent, persuasive academic register with varied syntax and accurate literary terminology.",
  },
  {
    band: "Band 4 (19–24)",
    marks: [19, 24],
    descriptor:
      "**Crit A (7–8/10):** Good understanding and persuasive interpretation of both works with clear, balanced comparative links to the prompt. **Crit B (7–8/10):** Thoughtful, well-supported comparative analysis of stylistic and structural features across both texts, with occasional dips in evaluation. **Crit C (3–4/5):** Well-organised conceptual progression with effective comparative transitions. **Crit D (3–4/5):** Clear, effective academic register with accurate literary vocabulary.",
  },
  {
    band: "Band 3 (13–18)",
    marks: [13, 18],
    descriptor:
      "**Crit A (5–6/10):** Satisfactory knowledge of both works with relevant but sometimes descriptive or uneven comparison. **Crit B (5–6/10):** Identifies relevant literary features in both works, though analysis may tilt toward thematic summary or feature-spotting. **Crit C (3/5):** Adequate structure, though integration between the two works may feel bolted-on in places. **Crit D (2–3/5):** Generally clear prose with occasional imprecision or repetition.",
  },
  {
    band: "Band 2 (7–12)",
    marks: [7, 12],
    descriptor:
      "**Crit A (3–4/10):** Superficial or plot-heavy knowledge with minimal meaningful comparison. **Crit B (3–4/10):** Limited identification of authorial choices with scant evaluation of effect. **Crit C (1–2/5):** Disconnected or unbalanced treatment of the two works. **Crit D (1–2/5):** Basic academic register with frequent lapses in clarity.",
  },
  {
    band: "Band 1 (1–6)",
    marks: [1, 6],
    descriptor:
      "**Crit A (1–2/10), Crit B (1–2/10), Crit C (1/5), Crit D (1/5):** Minimal textual understanding, virtually no craft comparison, fragmented focus, and severely constrained expression.",
  },
];

export const paper: ExamPaper = {
  id: "exam-p2",
  title: "Paper 2 · Comparative Essay (2 Studied Works, 30m)",
  level: "SL",
  calculator: false,
  minutes: 105,
  paperType: "Paper 2 · Comparative Essay (2 Studied Works, 30m)",
  questions: [
    // ======================== ARCHITECTURE & RULES CHECKS (Q01–Q05) ========
    {
      id: "exam-p2-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      topicId: "1-readers-writers-texts",
      guideRef: "learner-portfolio-craft",
      question:
        "Under the official IB English A: Literature (First Assessment 2021) **non-overlap rule**, state the **maximum number of works** you may reuse from your Individual Oral (or, at HL, your HL Essay) inside your Paper 2 comparative essay.",
      answer: {
        type: "number",
        value: 0,
        display: "0",
      },
      traps: [
        {
          spec: { type: "number", value: 1 },
          feedback: "Not even one work may be double-counted across assessments—every text used in your Individual Oral or HL Essay is strictly excluded from Paper 2.",
        },
        {
          spec: { type: "number", value: 2 },
          feedback: "You write on 2 works in Paper 2, but *none* of them may overlap with the works already assessed in your Individual Oral or HL Essay.",
        },
      ],
      hints: [
        "The IB Diploma prohibits double-dipping across assessed components.",
        "Plan your Learner Portfolio strategically so your strongest Paper 2 pairings stay completely untouched by your IO and HL Essay.",
      ],
      solution: [
        "No studied work used in the Individual Oral or the HL Essay may be reused in Paper 2.",
        "Therefore, the maximum number of overlapping works permitted is **0**.",
      ],
      commonError: "Accidentally building a favourite Paper 2 pairing around a work already locked into the Individual Oral.",
      strategy: "Map your 9 (SL) or 13 (HL) works into non-overlapping assessment buckets early in DP2",
    },
    {
      id: "exam-p2-q02",
      kind: "short",
      difficulty: "warmup",
      level: "HL",
      commandTerm: "State",
      topicId: "7-paper1-paper2-mastery",
      guideRef: "paper2-comparative-prompts",
      question:
        "While Paper 2 accounts for 35% of the final grade at Standard Level, state the **percentage weighting** of **Paper 2** in the final IB English A: Literature **Higher Level (HL)** grade (First Assessment 2021).",
      answer: {
        type: "number",
        value: 25,
        display: "25%",
      },
      traps: [
        {
          spec: { type: "number", value: 35 },
          feedback: "35% is the *SL* weighting for Paper 2 (and the weighting of Paper 1 at both SL and HL); at HL, Paper 2 drops to 25% to make room for the 20% HL Essay.",
        },
        {
          spec: { type: "number", value: 20 },
          feedback: "20% is the HL weighting for the Individual Oral and for the HL Essay; Paper 2 carries 25% at HL.",
        },
      ],
      hints: [
        "Recall the four HL assessment weights that sum to 100%: Paper 1 (35%), HL Essay (20%), Individual Oral (20%), and Paper 2.",
        "Subtract 35 + 20 + 20 from 100.",
      ],
      solution: [
        "HL assessment breakdown (FA2021): Paper 1 = 35%, **Paper 2 = 25%**, HL Essay = 20%, Individual Oral = 20%.",
        "Thus Paper 2 carries **25%** of the final HL grade (versus 35% at SL).",
      ],
      commonError: "Assuming SL and HL share identical Paper 2 weightings when HL reallocates 10% toward the HL Essay.",
      strategy: "SL = 35 / 35 / 30 · HL = 35 / 25 / 20 / 20",
    },
    {
      id: "exam-p2-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      topicId: "7-paper1-paper2-mastery",
      guideRef: "paper2-comparative-prompts",
      question:
        "IB English A: Literature Paper 2 carries a total of 30 marks across Criteria A, B, C, and D. State the **maximum mark** awarded for **Criterion A (Knowledge, understanding and interpretation)** alone.",
      answer: {
        type: "number",
        value: 10,
        display: "10 marks",
      },
      traps: [
        {
          spec: { type: "number", value: 5 },
          feedback: "5 is the maximum mark for Criteria C and D on Paper 2 (and for each criterion on Paper 1); Criteria A and B are *doubled* on Paper 2.",
        },
        {
          spec: { type: "number", value: 15 },
          feedback: "Paper 2 splits 30 marks as 10 + 10 + 5 + 5 across Criteria A, B, C, and D.",
        },
      ],
      hints: [
        "On Paper 2, Criteria A and B carry double the marks of Criteria C and D because you are interpreting and analysing TWO whole works comparatively.",
        "Solve A + B + 5 + 5 = 30 with A = B.",
      ],
      solution: [
        "Official IB Paper 2 rubric breakdown: **Criterion A = 10**, Criterion B = 10, Criterion C = 5, Criterion D = 5 (total = 30 marks).",
        "Two-thirds of Paper 2 marks (20/30) therefore depend directly on comparative interpretation (A) and comparative craft evaluation (B).",
      ],
      commonError: "Assuming Paper 2 uses the same 5/5/5/5 weighting as Paper 1 instead of recognising that Criteria A and B are worth 10 marks each.",
      strategy: "Never skimp on comparative craft evaluation—Criteria A (10) and B (10) supply two-thirds of your Paper 2 score",
    },
    {
      id: "exam-p2-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      topicId: "3-intertextuality",
      guideRef: "comparative-synthesis-architecture",
      question:
        "Identify the standard critical label for the low-scoring Paper 2 organisational trap where a candidate writes the entire first half of the essay solely on Work A and the entire second half solely on Work B instead of comparing both texts in every body section.",
      answer: {
        type: "text",
        accept: [
          "block-by-block",
          "block by block",
          "block structure",
          "block method",
          "text-by-text",
          "text by text",
        ],
        display: "block-by-block",
      },
      traps: [
        {
          spec: { type: "text", accept: ["point-by-point", "point by point", "integrated"] },
          feedback: "Point-by-point (integrated) organisation is the *high-scoring* Band 5 architecture—here we want the label for the separated ‘all of Text A, then all of Text B’ trap.",
        },
        {
          spec: { type: "text", accept: ["chronological"] },
          feedback: "Chronological narration is the classic Paper 1 trap; on Paper 2, separating Work A and Work B into disconnected halves is called ‘block-by-block’ (or ‘text-by-text’) structure.",
        },
      ],
      hints: [
        "Think of stacking two separate solid chunks—one giant chunk on Work A followed by one giant chunk on Work B.",
        "Contrasts directly with the Band 5 ‘point-by-point’ integrated structure.",
      ],
      solution: [
        "Dividing a Paper 2 essay into two separate halves (Work A then Work B) is called **block-by-block** (or **text-by-text**) structure.",
        "It severely limits sustained comparative evaluation under Criteria A, B, and C compared with an integrated point-by-point conceptual architecture.",
      ],
      commonError: "Attempting to rescue a separated two-half essay by tacking a single sentence ‘Similarly to Work A…’ onto paragraph 4.",
      strategy: "Build every body section around a shared conceptual tension that puts Work A and Work B in continuous dialogue",
    },
    {
      id: "exam-p2-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      topicId: "3-intertextuality",
      guideRef: "allusion-motif-dialogue",
      question:
        "Identify the **one-word literary term** for a recurring object, image, sound, or verbal pattern whose evolving symbolic significance links scenes across an entire work—making it particularly powerful as closed-book evidence on Paper 2.",
      answer: {
        type: "text",
        accept: ["motif", "leitmotif"],
        display: "motif",
      },
      traps: [
        {
          spec: { type: "text", accept: ["allusion"] },
          feedback: "An allusion points *outward* to another external text, myth, or historical event; here we want the term for an element recurring *within* a work to accumulate symbolic meaning.",
        },
        {
          spec: { type: "text", accept: ["allegory"] },
          feedback: "An allegory maps an entire narrative systematically onto an abstract moral/political scheme; here we want the term for a specific recurring image, object, or sound pattern.",
        },
      ],
      hints: [
        "Think of a recurring door, mirror, tune, or weather pattern whose meaning shifts from Act I to Act III or Chapter 1 to the finale.",
        "A five-letter French-derived literary term (its musical/Wagnerian cousin is *leitmotif*).",
      ],
      solution: [
        "A recurring symbolic object, sensory cue, or verbal pattern that develops thematic meaning across a whole work is a **motif**.",
        "Tracking how a motif transforms from opening to climax gives closed-book Paper 2 essays sharp structural precision without relying on long memorised quotations.",
      ],
      commonError: "Naming a motif once without tracing *how* its significance evolves across key turning points of the work.",
      strategy: "Memorise 3 evolving motifs per Paper 2 work—they double as structural and stylistic evidence in closed-book exams",
    },

    // ======================== SCAFFOLDED COMPARATIVE CRAFT (Q06–Q13) =======
    {
      id: "exam-p2-q06",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Examine",
      marks: 4,
      topicId: "7-paper1-paper2-mastery",
      guideRef: "paper2-comparative-prompts",
      question: `**Prompt 1 (Confinement & Freedom):** *In what ways, and to what effect, do two of the works you have studied portray physical or psychological confinement as a catalyst for self-discovery or resistance?*\n\n**Examine** the key terms and implicit assumptions inside Prompt 1, then draft a nuanced, transferable **comparative thesis** showing how two studied works might BOTH confirm and complicate the prompt’s premise. *(4 marks)*`,
      hints: [
        "Interrogate the key terms: ‘physical or psychological confinement’, ‘catalyst’, ‘self-discovery or resistance’, and the crucial dual command ‘In what ways [form/craft], and to what effect [meaning/audience impact]’.",
        "Challenge the prompt’s hidden assumption: does confinement *always* spark liberating resistance, or can it also breed alienation, irony, or tragic collapse?",
      ],
      modelAnswer:
        "Deconstructing Prompt 1 begins by unpacking both its conceptual nouns and its dual craft mandate. First, ‘physical or psychological confinement’ invites comparison across concrete enclosures (domestic parlours, locked rooms, colonial borders) and internalised cages (patriarchal duty, ideological shame). Second, the phrase ‘In what ways, and to what effect’ explicitly triggers Criterion B: candidates must analyse *how* medium-specific choices construct claustrophobia and *what* emotional or critical impact that produces on readers or audiences. Third, top-band interrogation challenges the prompt’s optimistic assumption embedded in ‘catalyst for self-discovery or resistance’—asking whether enclosure always yields liberating agency, or whether one work instead exposes how prolonged captivity fractures identity or turns defiance tragic. A nuanced transferable comparative thesis might therefore argue: *While both works deploy claustrophobic domestic settings to expose the suffocating mechanics of social conformity, Work A channels spatial enclosure through theatrical stagecraft into a decisive moment of defiant self-emancipation, whereas Work B uses restricted interior focalization to complicate the premise—revealing how psychological confinement can erode solidarity and render self-discovery painfully alienated rather than redemptive.*",
      markScheme: [
        {
          point: "Distinguishes and defines physical enclosure versus internalised/psychological confinement in the prompt.",
          keywords: ["internalised", "enclosures", "cages", "concrete", "distinguish", "patriarchal"],
        },
        {
          point: "Unpacks the dual Criterion B command (‘In what ways’ = authorial/formal methods; ‘to what effect’ = reader/audience impact).",
          keywords: ["criterion b", "medium-specific", "methods", "impact", "dual", "audience"],
        },
        {
          point: "Challenges or complicates the prompt’s implicit assumption (that confinement automatically produces liberating resistance or self-discovery).",
          keywords: ["assumption", "complicate", "optimistic", "erode", "tragic", "alienated"],
        },
        {
          point: "Formulates an arguable, integrated comparative thesis specifying both shared conceptual ground and nuanced divergence in form/outcome.",
          keywords: ["whereas", "defiant", "emancipation", "conformity", "focalization", "stagecraft"],
        },
      ],
      markbands: [
        { band: "Band 3 (4)", marks: [4, 4], descriptor: "Interrogates every key term, challenges hidden assumptions, and crafts a razor-sharp comparative thesis linking form to divergence." },
        { band: "Band 2 (2–3)", marks: [2, 3], descriptor: "Defines confinement and drafts a clear thesis comparing two works, with limited interrogation of the prompt’s assumptions." },
        { band: "Band 1 (1)", marks: [1, 1], descriptor: "Restates the prompt passively (‘Both works show confinement…’) without analytical tension." },
      ],
      commonError: "Accepting a Paper 2 prompt passively at face value instead of interrogating its assumptions (‘Does confinement truly liberate, or does it destroy?’).",
      strategy: "Spend 5 minutes interrogating every word of your chosen prompt—challenging one hidden assumption immediately elevates Criterion A",
    },
    {
      id: "exam-p2-q07",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Compare and contrast",
      marks: 4,
      topicId: "3-intertextuality",
      guideRef: "comparative-synthesis-architecture",
      question: `**Prompt 2 (Memory & Truth):** *“Memory is never a neutral archive; it is an instrument of survival or power.” Discuss this claim in relation to two of the works you have studied.*\n\nDraft **three cohesive, integrated comparative topic sentences** (for Body Sections 1, 2, and 3) that could anchor a Band 5 Paper 2 essay on ANY two studied works, ensuring every sentence compares BOTH works through a conceptual angle and precision comparative connectives. *(4 marks)*`,
      hints: [
        "Each topic sentence should name a conceptual angle (e.g. (1) selective omission as self-protection, (2) institutional/familial control over historical narratives, (3) formal distortion exposing the fragility of recollection) rather than plot events.",
        "Use razor-sharp comparative connectives (*While… whereas…*, *Whereas… by contrast…*, *Although both… conversely…*) that capture divergence within similarity.",
      ],
      modelAnswer:
        "**Body Section 1 (Memory as psychological self-defence):** *While both works demonstrate that characters edit painful memories to preserve emotional equilibrium, Work A employs euphemistic first-person retrospection to expose self-deception as quiet institutional complicity, whereas Work B uses lyrical nostalgia to render selective recollection a fragile refuge from economic entrapment.*\n\n**Body Section 2 (Memory as contested authority and power):** *Although each author portrays memory as a battleground over who dictates family or social truth, Work A reveals how an elite class weaponises nostalgic tradition to justify present silence, while Work B conversely exposes how an individual narrator reshapes domestic history in order to absolve personal guilt.*\n\n**Body Section 3 (Formal craft exposing memory’s instability):** *Crucially, both writers enlist medium-specific structure to warn audiences against trusting remembered testimony, yet whereas Work A destabilises chronology through subtle narrative contradictions that accumulate irony gradually, Work B uses overtly anti-realist framing devices to announce memory’s theatrical distortion from the opening scene.*",
      markScheme: [
        {
          point: "Provides three distinct, progressively layered conceptual angles (e.g. survival/self-defence → power/authority → formal instability) rather than plot summaries.",
          keywords: ["self-defence", "equilibrium", "battleground", "instability", "complicity", "entrapment"],
        },
        {
          point: "Integrates BOTH works inside every single topic sentence (zero separated Work-A-only or Work-B-only openers).",
          keywords: ["both works", "each author", "both writers", "work a", "work b"],
        },
        {
          point: "Deploys precision comparative connectives articulating subtle divergence within similarity (*whereas*, *while*, *conversely*, *although*).",
          keywords: ["whereas", "conversely", "although", "while", "yet"],
        },
        {
          point: "Embeds authorial craft and formal awareness directly into the comparative claims (e.g. retrospection, chronology, framing devices, irony).",
          keywords: ["euphemistic", "chronology", "anti-realist", "framing", "irony", "medium-specific"],
        },
      ],
      markbands: [
        { band: "Band 3 (4)", marks: [4, 4], descriptor: "All three topic sentences are conceptual, fully integrated, form-conscious, and balanced across similarity and divergence." },
        { band: "Band 2 (2–3)", marks: [2, 3], descriptor: "Topic sentences connect both works logically, though one or more may lean thematic rather than craft-oriented." },
        { band: "Band 1 (1)", marks: [1, 1], descriptor: "Topic sentences focus on one text at a time or announce plot points." },
      ],
      commonError: "Writing vague topic sentences such as ‘Both authors use memory in different ways’ that announce a theme without specifying the conceptual claim or formal divergence.",
      strategy: "Test every Paper 2 topic sentence: does it name BOTH works, ONE conceptual angle, and ONE subtle divergence?",
    },
    {
      id: "exam-p2-q08",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Contrast",
      marks: 5,
      topicId: "3-intertextuality",
      guideRef: "cross-form-connections",
      question: `**Prompt 3 (Generational Conflict & Inheritance):** *Compare and contrast how two of the works you have studied use domestic spaces or family obligations to expose tensions between inherited tradition and individual agency.*\n\n**Explain** how comparing two studied works from **different literary forms** (for example, a play and a novel, or poetry and prose) elevates Criterion B evaluation on Prompt 3, detailing concrete medium-specific contrasts you would analyse. *(5 marks)*`,
      hints: [
        "Ask how *medium* alters the way domestic claustrophobia is experienced: how does a live theatre audience encounter a drawing room versus how a novel’s reader inhabits a character’s private mind?",
        "Compare concrete medium-specific tools—e.g. stagecraft/proxemics/props/blocking in Drama vs focalization/free indirect discourse/temporal pacing in Prose Fiction vs lineation/caesura/volta in Poetry.",
      ],
      modelAnswer:
        "Comparing two works across distinct literary forms dramatically elevates Criterion B because it forces the essay beyond thematic coincidence into evaluative analysis of *how medium constructs meaning*. On Prompt 3, a dramatist and a novelist may both expose domestic spaces as instruments of generational conformity, yet their formal toolkits generate sharply different aesthetic effects. In a **play**, domestic obligation becomes publicly visible and spatial: the playwright encloses actors inside a fixed set—relying on proxemics, suffocating lighting, symbolic household props, interrupted dialogue, and audible exits—so a live audience witnesses inherited authority enforced externally on characters’ bodies in real time. By contrast, a **novel** (or short prose work) can turn domestic confinement inward through shifting narrative focalization, free indirect discourse, and temporal analepsis; rather than showing only visible compliance, prose immerses the reader inside a protagonist’s unspoken resentment and rationalisations, revealing how family duty colonises consciousness itself. Similarly, a **lyric poem** compresses generational inheritance into prosodic discipline—such as strict metre, caesura, and structural volta—making rhythmic constraint enact ancestral weight. Explicitly contrasting *why* visual stagecraft yields visceral public confrontation whereas interior focalization fosters intimate psychological irony demonstrates genuine Band 5 Criterion B mastery.",
      markScheme: [
        {
          point: "Explains the overarching Criterion B payoff: cross-form comparison pushes analysis beyond surface thematic similarity into medium-specific evaluation.",
          keywords: ["thematic coincidence", "medium", "criterion b", "evaluative", "aesthetic"],
        },
        {
          point: "Specifies authentic theatrical conventions for Drama (fixed set, proxemics, lighting, symbolic props, live audience witnessing external pressure).",
          keywords: ["proxemics", "props", "live audience", "stagecraft", "real time", "spatial"],
        },
        {
          point: "Contrasts these explicitly with Prose Fiction craft (focalization, free indirect discourse, temporal shifts exposing internalised psychological conflict).",
          keywords: ["focalization", "free indirect", "analepsis", "colonises consciousness", "inward", "interior"],
        },
        {
          point: "Optionally notes poetic or non-fiction formal mechanisms (metre, caesura, volta, or dual persona) reinforcing medium awareness.",
          keywords: ["prosodic", "metre", "caesura", "volta", "ancestral", "constraint"],
        },
        {
          point: "Evaluates the *divergent reader/audience effects* produced by contrasting forms (e.g. visceral external confrontation vs intimate psychological irony).",
          keywords: ["divergent", "visceral", "confrontation", "psychological irony", "effects"],
        },
      ],
      markbands: [
        { band: "Band 3 (4–5)", marks: [4, 5], descriptor: "Contrasts medium-specific toolkits incisively and evaluates how each form generates distinct audience/reader effects on Prompt 3." },
        { band: "Band 2 (2–3)", marks: [2, 3], descriptor: "Names valid features of two forms (e.g. stage directions vs narration) with partial link to contrasting effects." },
        { band: "Band 1 (1)", marks: [1, 1], descriptor: "States simply that plays have dialogue and novels have descriptions." },
      ],
      commonError: "Describing dramatic scenes as if they were prose chapters (or vice versa) instead of evaluating *why* staging versus focalization produces contrasting audience responses.",
      strategy: "Ask: ‘What can a playwright make an audience *see* on stage that a novelist must instead let a reader *overhear* inside a character’s mind?’",
    },
    {
      id: "exam-p2-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Discuss",
      marks: 5,
      topicId: "2-time-and-space",
      guideRef: "context-without-fallacy",
      question: `**Prompt 3 (Generational Conflict & Inheritance):** *Compare and contrast how two of the works you have studied use domestic spaces or family obligations to expose tensions between inherited tradition and individual agency.*\n\n**Discuss** how a Paper 2 candidate can integrate each work’s **context of production and context of reception** into an essay on Prompt 3 *without* slipping into a detached history-essay dump or biographical fallacy. *(5 marks)*`,
      hints: [
        "Contrast weak ‘bolted-on’ historical background paragraphs with embedded contextual clauses subordinated to close textual analysis.",
        "Explain how avoiding the biographical/intentional fallacy keeps the focus on *how the text engages social norms* rather than speculating about the author’s private feelings.",
        "Show how comparing reception across eras (e.g. shock for original audiences vs contemporary feminist or postcolonial critique) deepens Criterion A nuance.",
      ],
      modelAnswer:
        "In IB English A: Literature, contextual awareness earns high Criterion A credit only when it operates as a lens embedded *inside* textual analysis rather than an isolated historical preamble. Candidates lose focus—and Criterion C cohesion—when they open with textbook chronology about an era or commit biographical fallacy by asserting that a rebel character merely voices the author’s private life. Instead, context of **production** should enter in tight subordinate clauses explaining *why* a specific authorial choice carried ideological charge in its original moment: for instance, showing how a nineteenth-century bourgeois parlour’s locked doors dramatise legal and financial dependency, or how a post-colonial household’s mixed linguistic register exposes cultural displacement. Equally illuminating is integrating context of **reception** comparatively: weighing how a defiant exit or broken filial vow might have provoked moral scandal among contemporary audiences yet invites sharper structural scrutiny—or ironic questioning of privilege—from twenty-first-century readers. By filtering historical and cultural tensions strictly through concrete textual features (diction, domestic staging, narrative irony), candidates demonstrate sophisticated AoE 2 awareness while keeping literature—not history—at the analytical core.",
      markScheme: [
        {
          point: "Rejects isolated historical preambles (‘history-essay dumps’) and explains that context must be subordinated inside textual analysis.",
          keywords: ["embedded", "preamble", "subordinate", "isolated", "detached", "lens"],
        },
        {
          point: "Warns explicitly against biographical/intentional fallacy (reducing characters or themes to assumptions about the author’s private life).",
          keywords: ["biographical fallacy", "intentional", "private life", "voices", "speculat"],
        },
        {
          point: "Demonstrates how context of production illuminates specific literary choices (e.g. domestic legal norms, class/cultural register, ideological charge).",
          keywords: ["production", "ideological", "dependency", "register", "bourgeois", "charge"],
        },
        {
          point: "Demonstrates how context of reception deepens comparative evaluation across shifting eras or cultural readerships.",
          keywords: ["reception", "scandal", "twenty-first-century", "audiences", "readerships", "scrutiny"],
        },
        {
          point: "Connects disciplined contextual integration directly back to textual craft and Criterion A/C cohesion.",
          keywords: ["textual features", "criterion a", "criterion c", "cohesion", "analytical core"],
        },
      ],
      markbands: [
        { band: "Band 3 (4–5)", marks: [4, 5], descriptor: "Distinguishes production/reception insightfully, guards against biographical fallacy, and models how context serves textual craft." },
        { band: "Band 2 (2–3)", marks: [2, 3], descriptor: "Explains why history summaries should be avoided and links context broadly to time period or audience." },
        { band: "Band 1 (1)", marks: [1, 1], descriptor: "Offers general reminders to mention historical background briefly." },
      ],
      commonError: "Writing an opening ‘historical background’ paragraph about the 19th or 20th century before analysing a single formal choice in either work.",
      strategy: "Rule of thumb: never let a historical sentence stand alone—graft it directly onto a literary device or structural moment",
    },
    {
      id: "exam-p2-q10",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      marks: 6,
      topicId: "3-intertextuality",
      guideRef: "conventions-traditions-subversion",
      question: `**Prompt 4 (Narrative Form & Ambiguity):** *How, and with what effect, do two of the works you have studied resist tidy moral resolution through their structural or formal choices?*\n\nWrite **ONE complete, Band 5 integrated comparative body paragraph** responding to Prompt 4 using ANY two studied works from your Learner Portfolio. Your paragraph should demonstrate: (a) a conceptual comparative topic sentence, (b) closed-book structural/formal evidence from both works, (c) explicit comparative connectives analysing divergence within similarity, and (d) evaluation of reader/audience effect. *(6 marks)*`,
      hints: [
        "Choose ONE sharp formal angle—for example, how both works subvert genre conventions at their closing threshold (leaving an auditory shock, unresolved narrative frame, or ironic circularity).",
        "Move seamlessly back and forth between Work A and Work B inside the same paragraph using connectives such as *whereas*, *conversely*, or *yet unlike*.",
        "Always evaluate *effect*: why does refusing moral neatness make the ending more unsettling or politically provocative for audiences?",
      ],
      modelAnswer:
        "*(Note: The model paragraph below illustrates transferable Paper 2 craft using Henrik Ibsen’s A Doll’s House [Example text — not a set text] and Mary Shelley’s Frankenstein [Example text — not a set text]; full credit is earned by applying these exact comparative moves to ANY two works you have studied.)*\n\nBoth works dismantle nineteenth-century genre expectations at their closing thresholds, replacing reassuring moral closure with unsettling structural ambiguity—yet whereas theatrical soundcraft projects defiance outward into an uncertain public future, nested epistolary framing traps guilt inside an endless interpretive loop. In *A Doll’s House* `[Example text — not a set text]`, Ibsen deliberately invokes the tightly plotted ‘well-made play’ convention only to fracture its promised marital reconciliation in the final scene: rather than offering a didactic speech announcing Nora’s future triumph, he substitutes the stark offstage stage direction of a ‘heavy door slamming shut’. That abrupt acoustic severance denies the audience reassuring certainty about Nora’s material survival while reverberating beyond the domestic parlour as an unanswered challenge to patriarchal law. Conversely, in *Frankenstein* `[Example text — not a set text]`, Shelley resists tidy moral judgement not through sudden rupture but through concentric Chinese-box framing narratives that pass the final verdict from Victor to the Creature and finally to Walton’s unfinished letters. When the Creature leaps onto an ice raft and is ‘borne away by the waves, and lost in darkness and distance’, the visual dissolution mirrors the novel’s ethical indeterminacy: because every narrator’s testimony is filtered and self-justifying, readers are prevented from cleanly assigning sole villainy to creator or creation. Thus, while Ibsen’s acoustic break externalises ambiguity as radical social provocation, Shelley’s dissolving frame turns ambiguity inward—compelling readers to confront their own complicity in judging monstrosity.",
      markScheme: [
        {
          point: "Opens with a cohesive, conceptual comparative topic sentence uniting BOTH works around a formal strategy and highlighting divergence.",
          keywords: ["whereas", "expectations", "ambigu", "closure", "threshold", "framing"],
        },
        {
          point: "Analyses specific structural or formal choices in Work A using accurate closed-book evidence (not vague plot summary).",
          keywords: ["convention", "fracture", "stage direction", "offstage", "structural", "formal"],
        },
        {
          point: "Evaluates the specific reader or audience effect produced by Work A’s resistance to tidy resolution.",
          keywords: ["denies", "certainty", "audience", "challenge", "provocation", "unanswered"],
        },
        {
          point: "Transitions cleanly into Work B using an explicit comparative connective highlighting nuanced contrast.",
          keywords: ["conversely", "by contrast", "unlike", "however", "whereas"],
        },
        {
          point: "Analyses medium-specific formal/structural choices in Work B with concrete closed-book textual precision.",
          keywords: ["framing", "filtered", "narrator", "dissolution", "epistolary", "indeterminacy"],
        },
        {
          point: "Closes with a synthesising comparative judgement weighing the divergent aesthetic or ethical effects of both endings.",
          keywords: ["thus", "while", "externalises", "inward", "complicity", "compelling"],
        },
      ],
      markbands: [
        { band: "Band 3 (5–6)", marks: [5, 6], descriptor: "Seamlessly integrates both works inside one conceptual paragraph, evaluating medium-specific formal choices and divergent reader effects." },
        { band: "Band 2 (3–4)", marks: [3, 4], descriptor: "Compares endings of two works clearly with some attention to structure, though comparison or evaluation of effect is uneven." },
        { band: "Band 1 (1–2)", marks: [1, 2], descriptor: "Retells the endings of two works sequentially with minimal formal craft analysis." },
      ],
      commonError: "Describing *what happens* at each ending without analysing *how structural/formal conventions* create ambiguity and *why* that destabilises reader judgement.",
      strategy: "Follow the 5-step Band 5 comparative paragraph arc: Conceptual claim → Work A craft + effect → Precision pivot → Work B craft + effect → Comparative synthesis",
    },
    {
      id: "exam-p2-q11",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Evaluate",
      marks: 5,
      topicId: "7-paper1-paper2-mastery",
      guideRef: "rubric-mastery-crit-a-d",
      question:
        "Because IB Paper 2 is strictly **closed book** (no copies of your studied works are allowed in the examination room), **evaluate** what distinguishes high-scoring Band 5 textual evidence from weak plot generalisations, recommending a practical revision protocol for building closed-book evidence across two works. *(5 marks)*",
      hints: [
        "Explain why memorising long 30-word speeches is inefficient compared with agile 2–5 word micro-quotations, key structural turning points, and recurring formal patterns.",
        "Show how precise paraphrase of *authorial craft* (e.g. a lighting change, shift in tense, or recurring symbolic object) still earns top Criterion B credit when paired with crisp micro-phrases.",
      ],
      modelAnswer:
        "In a closed-book Paper 2 examination, examiners do not reward encyclopaedic memorisation of lengthy block quotations; instead, Band 5 textual evidence is defined by **precision, portability, and craft-readiness**. Weak generalisations—such as claiming ‘the author uses sad descriptions throughout the novel’—fail Criteria A and B because they lack concrete anchor points for stylistic evaluation. By contrast, high-band candidates combine three tightly integrated forms of closed-book reference: first, **2–5 word micro-quotations** rich in connotation or irony that embed effortlessly into analytical syntax; second, **structural and formal landmarks** (such as an opening tableau, mid-work reversal, temporal shift, or formal break) that prove whole-work mastery; and third, **recurring symbolic patterns** (props, spatial contrasts, sensory echoes) whose evolution can be traced across scenes without verbatim recitation. As a practical revision protocol, students should curate a compact ‘Evidence Grid’ of 12–15 versatile micro-quotations and 4–5 structural turning points per studied work, tagging each across multiple thematic lenses (power, memory, confinement, identity, form) so the same razor-sharp textual anchors adapt swiftly to any unseen prompt.",
      markScheme: [
        {
          point: "Distinguishes high-band closed-book evidence from both vague plot generalisations and inefficient memorised block quotations.",
          keywords: ["generalisations", "block quotations", "precision", "portability", "anchor"],
        },
        {
          point: "Advocates short, connotation-rich micro-quotations (2–5 words) that weave grammatically into analytical sentences.",
          keywords: ["micro-quotations", "connotation", "embed", "syntax", "verbatim"],
        },
        {
          point: "Highlights whole-work structural and formal landmarks (openings, reversals, temporal shifts, stage/formal cues) as high-value closed-book evidence.",
          keywords: ["structural", "landmarks", "turning points", "whole-work", "reversal"],
        },
        {
          point: "Emphasises tracking recurring symbolic patterns/objects across scenes to substantiate Criterion B craft evaluation.",
          keywords: ["recurring", "symbolic", "evolution", "props", "criterion b"],
        },
        {
          point: "Proposes a versatile multi-theme revision protocol (mapping compact evidence across diverse unseen prompts).",
          keywords: ["protocol", "grid", "versatile", "adapt", "unseen"],
        },
      ],
      markbands: [
        { band: "Band 3 (4–5)", marks: [4, 5], descriptor: "Evaluates all three types of closed-book evidence incisively and outlines a versatile, exam-ready revision strategy." },
        { band: "Band 2 (2–3)", marks: [2, 3], descriptor: "Recommends short quotations and key moments over plot summary, with partial link to Criterion B craft." },
        { band: "Band 1 (1)", marks: [1, 1], descriptor: "Gives general advice to memorise quotes from both books before the exam." },
      ],
      commonError: "Trying to cram 40 long quotes per text the night before Paper 2—and then forcing irrelevant memorised lines onto an unseen prompt.",
      strategy: "12–15 sharp micro-quotations + 5 structural landmarks per work, cross-tagged to 4 themes, beat 50 unwieldy speeches every time",
    },
    {
      id: "exam-p2-q12",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Explore",
      marks: 6,
      topicId: "6-concepts-global-issues",
      guideRef: "seven-central-concepts",
      question: `**Prompt 4 (Narrative Form & Ambiguity):** *How, and with what effect, do two of the works you have studied resist tidy moral resolution through their structural or formal choices?*\n\n**Explore** how anchoring a Paper 2 comparison on Prompt 4 to ONE of the **7 Central IB Literature Concepts** (such as *Representation*, *Perspective*, or *Transformation*) elevates Criterion A interpretation from descriptive thematic spotting into a sustained critical inquiry. *(6 marks)*`,
      hints: [
        "Explain the difference between using a concept as a passive buzzword (‘Both texts show Perspective’) versus framing it as an active analytical question.",
        "Select ONE specific concept (e.g. *Representation* or *Perspective*) and demonstrate how it reframes Prompt 4’s focus on unresolved endings across two works.",
        "Show how a conceptual spine also strengthens Criterion C cohesion by unifying disparate formal choices under one overarching intellectual inquiry.",
      ],
      modelAnswer:
        "Using one of the 7 Central IB Literature Concepts as an active interpretive lens transforms a Paper 2 essay from a list of disconnected formal tricks into a coherent critical argument. Weak essays drop concept words decoratively—writing ‘Both authors explore Perspective’ without interrogating what perspective *does*. By contrast, converting a concept such as **Representation** (or **Perspective**) into a probing inquiry question—*How do deliberate fractures in narrative representation expose the ethical danger of imposing tidy moral certainty onto human complexity?*—gives Criterion A genuine intellectual altitude. Applied to Prompt 4, the lens of **Representation** immediately unifies seemingly unrelated formal choices across two works: whether Work A destabilises truth through an unreliable first-person memoirist or Work B fractures theatrical realism with non-linear stagecraft, both choices are now analysed as conscious critiques of how art and society manufacture comforting illusions. Furthermore, this conceptual spine upgrades Criterion C cohesion and Criterion B evaluation simultaneously: instead of merely observing that both endings stay ambiguous, every body paragraph investigates a distinct facet of *why* complete representation fails—from biased focalization to generic subversion—culminating in a synthesis that weighs each writer’s broader philosophical vision.",
      markScheme: [
        {
          point: "Contrasts decorative buzzword dropping against turning one central concept into an active analytical inquiry question.",
          keywords: ["buzzword", "decoratively", "inquiry question", "active", "interrogating"],
        },
        {
          point: "Applies a specific named IB Literature Concept (e.g. Representation, Perspective, or Transformation) purposefully to Prompt 4.",
          keywords: ["representation", "perspective", "transformation", "lens"],
        },
        {
          point: "Explains how the conceptual lens elevates Criterion A beyond plot or thematic spotting into philosophical/critical depth.",
          keywords: ["criterion a", "altitude", "philosophical", "critical argument", "illusions"],
        },
        {
          point: "Shows how the concept unifies disparate medium-specific formal choices (e.g. unreliable narration, stagecraft, genre subversion) across two works.",
          keywords: ["unifies", "disparate", "unreliable", "stagecraft", "subversion"],
        },
        {
          point: "Explains the knock-on benefit for Criterion B evaluation (analysing *why* formal fracture resists comforting certainty).",
          keywords: ["criterion b", "certainty", "fractures", "biased", "focalization"],
        },
        {
          point: "Connects the conceptual spine to Criterion C cohesion across progressive body paragraphs and synthesis conclusion.",
          keywords: ["criterion c", "spine", "cohesion", "facet", "synthesis"],
        },
      ],
      markbands: [
        { band: "Band 3 (5–6)", marks: [5, 6], descriptor: "Demonstrates clearly how one concept reframes Prompt 4 into a rigorous cross-work inquiry uniting Criteria A, B, and C." },
        { band: "Band 2 (3–4)", marks: [3, 4], descriptor: "Names a relevant concept and explains how it deepens discussion of ambiguity, with partial link to form or rubric criteria." },
        { band: "Band 1 (1–2)", marks: [1, 2], descriptor: "Lists several of the 7 concepts generally without showing how one transforms a Paper 2 argument." },
      ],
      commonError: "Cramming three or four of the 7 Concepts into an introduction instead of letting ONE sharply phrased conceptual tension drive the entire comparison.",
      strategy: "Pick ONE concept → turn it into a ‘How/Why’ inquiry question → let it unify both works’ formal choices",
    },
    {
      id: "exam-p2-q13",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      marks: 6,
      topicId: "7-paper1-paper2-mastery",
      guideRef: "rubric-mastery-crit-a-d",
      question: `Read this **flawed Band 3 student sample excerpt** written on Prompt 3 (Generational Conflict & Inheritance) comparing two unnamed works (*Work A*, a play, and *Work B*, a novel):\n\n> *In Work A, the father wants his daughter to obey family traditions and stay inside the house. She argues with him a lot and eventually leaves. The writer uses dialogue and stage directions to show their conflict effectively and keep the audience interested. Similarly, in Work B, the young narrator also clashes with his grandfather about running the family shop. The author uses imagery and metaphors about old walls to show tradition. Both texts show that young people want freedom from old family rules.*\n\n**Evaluate** three distinct weaknesses capping this paragraph in Band 3 (across Criteria A, B, and C), and **rewrite** the excerpt as a concise Band 5 comparative analytical core. *(6 marks)*`,
      hints: [
        "Diagnose each criterion specifically: Criterion A (plot summary & reductive truism ‘young people want freedom’), Criterion B (generic technique-spotting: ‘uses dialogue and stage directions… keep the audience interested’), Criterion C (bolt-on ‘Similarly’ stitching two separate summaries without analysing divergence).",
        "In your Band 5 rewrite, integrate both works around ONE sharp conceptual claim, link specific formal mechanisms (e.g. spatial staging vs figurative focalization) to contrasting effects, and preserve nuanced tension.",
      ],
      modelAnswer:
        "### Diagnostic Evaluation (Why This Sits in Band 3)\n1. **Criterion A weakness (plot retelling & reductive generalisation):** The sample summarises surface plot (‘argues with him a lot and eventually leaves’) and collapses nuanced generational struggle into a flat truism (‘young people want freedom’), ignoring ambiguity or the emotional cost of defiance.\n2. **Criterion B weakness (empty technique-spotting):** Vague labels such as ‘uses dialogue and stage directions… to keep the audience interested’ or ‘uses imagery and metaphors’ name broad categories without specifying *how* a concrete formal choice constructs meaning or contrasting reader/audience effects.\n3. **Criterion C weakness (bolted-on comparison):** Relying on a single mechanical transition (‘Similarly’) pastes two isolated mini-summaries side by side without establishing a shared conceptual angle or interrogating *differences* in form and outcome.\n\n### Band 5 Comparative Upgrade\n*While both works figure ancestral property as a suffocating instrument of filial obedience, they deploy contrasting formal means to evaluate the psychological price of rebellion. In Work A, claustrophobic domestic staging and tense, interrupted dialogue render paternal authority an external spectacle witnessed in real time, turning the daughter’s eventual exit across the threshold into a visceral rupture that nonetheless leaves her social survival precariously unresolved. Conversely, Work B internalises inherited obligation through figurative focalization: recurring imagery of decaying shop walls mirrors the narrator’s ambivalent entrapment, revealing how loyalty and resentment coexist inside his own consciousness rather than staging a clean break. Whereas Work A’s theatrical confrontation exposes tradition as public containment demanding physical departure, Work B’s interiorised metaphors complicate agency—suggesting that ancestral walls can persist within the mind long after outward defiance begins.*",
      markScheme: [
        {
          point: "Diagnoses the Criterion A flaw accurately: plot summary and a reductive thematic truism lacking interpretive complexity.",
          keywords: ["criterion a", "plot", "truism", "reductive", "ambigu", "surface"],
        },
        {
          point: "Diagnoses the Criterion B flaw accurately: empty/generic technique-spotting (‘uses dialogue/imagery… keep interested’) devoid of craft → effect evaluation.",
          keywords: ["criterion b", "technique-spotting", "generic", "vague", "effect", "categories"],
        },
        {
          point: "Diagnoses the Criterion C flaw accurately: mechanical ‘bolted-on’ comparison (‘Similarly’) lacking conceptual synthesis or divergence.",
          keywords: ["criterion c", "bolted-on", "isolated", "divergence", "mechanical", "synthesis"],
        },
        {
          point: "Rewrite opens with a conceptual comparative claim uniting both works around an arguable tension (e.g. psychological cost of rebellion).",
          keywords: ["filial", "rebellion", "price", "suffocating", "contrasting"],
        },
        {
          point: "Rewrite upgrades Criterion B by contrasting specific medium-based craft choices (spatial staging/interrupted dialogue vs interiorised figurative focalization).",
          keywords: ["staging", "interrupted", "visceral", "focalization", "internalises", "metaphors"],
        },
        {
          point: "Rewrite sustains integrated comparative evaluation throughout, culminating in nuanced divergence between external rupture and internalised ambivalence.",
          keywords: ["conversely", "whereas", "ambivalent", "unresolved", "coexist", "agency"],
        },
      ],
      markbands: [
        { band: "Band 3 (5–6)", marks: [5, 6], descriptor: "Pinpoints all three rubric flaws crisply and delivers a genuinely Band 5 integrated, craft-focused comparative rewrite." },
        { band: "Band 2 (3–4)", marks: [3, 4], descriptor: "Identifies plot summary and weak quotes clearly, and produces a stronger comparative paragraph with partial formal depth." },
        { band: "Band 1 (1–2)", marks: [1, 2], descriptor: "Offers general remarks (‘needs more analysis’) with minimal improvement in the rewritten version." },
      ],
      commonError: "Spotting only the lack of quotations in the Band 3 sample while missing the deeper structural failure of bolted-on comparison and reductive thematic claims.",
      strategy: "Edit your own practice paragraphs with this exact 3-point audit: Cut plot → Replace ‘uses imagery’ with device→effect → Contrast divergence within similarity",
    },

    // ======================== FULL 30-MARK PAPER 2 ESSAYS (Q14–Q15) ========
    {
      id: "exam-p2-q14",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Compare and contrast",
      marks: 30,
      topicId: "7-paper1-paper2-mastery",
      guideRef: "paper2-comparative-prompts",
      question: `${P2_PROMPTS_BLOCK}\n\n### Full IB Paper 2 Comparative Essay — Prompt 1 (Confinement & Freedom)\n\n**Selected Prompt:** *In what ways, and to what effect, do two of the works you have studied portray physical or psychological confinement as a catalyst for self-discovery or resistance?*\n\nWrite a complete, integrated point-by-point **IB Paper 2 Comparative Essay** applying Prompt 1 to **ANY two studied works** from your own Learner Portfolio (honouring the IB non-overlap rule). *(30 marks across Criteria A, B, C, and D)*`,
      hints: [
        "Interrogate the prompt’s key assumption (‘catalyst for self-discovery or resistance’) in your introduction: show where confinement sparks active defiance and where it instead exposes tragic alienation or limits to agency.",
        "Organise into 3–4 integrated point-by-point conceptual sections comparing BOTH works in every section—e.g. (1) Spatial enclosure & domestic architecture, (2) Linguistic/economic containment & internalised duty, (3) Divergent formal climaxes (emancipation vs tragic erasure).",
        "Contrast medium-specific craft explicitly (e.g. theatrical stagecraft/props/proxemics vs prose focalization/grotesque symbolism/temporal pacing) and anchor every claim in closed-book micro-evidence and structural turning points.",
      ],
      modelAnswer: `*(Non-prescriptive notice: This Band 5 model essay demonstrates transferable Paper 2 comparative architecture using Henrik Ibsen’s A Doll’s House \`[Example text — not a set text]\` and Franz Kafka’s The Metamorphosis \`[Example text — not a set text]\`. Substitute ANY two studied works from your own Learner Portfolio—all 30 mark-scheme points reward transferable analytical and comparative skills!)*

### Essay: The Architecture of the Locked Room — Confinement, Agency, and Rupture

Confinement in literature rarely operates merely as a dramatic backdrop; rather, physical and psychological enclosures frequently serve as diagnostic laboratories that expose the unspoken mechanics of social power. Yet the proposition that confinement reliably acts as a catalyst for liberating self-discovery or resistance demands critical scrutiny. Comparing Henrik Ibsen’s realist domestic drama *A Doll’s House* \`[Example text — not a set text]\` (1879) with Franz Kafka’s modernist novella *The Metamorphosis* \`[Example text — not a set text]\` (1915) reveals a striking divergence within shared claustrophobia. While both writers deploy suffocating bourgeois interiors and economic dependency to indict patriarchal and capitalist conformity, Ibsen channels spatial confinement through realist stagecraft and escalating subtext into a painful moment of self-emancipation, whereas Kafka employs grotesque surrealism and restricted interior focalization to invert the prompt’s premise—demonstrating how prolonged domestic entrapment can strip away resistance and render self-discovery tragically alienating rather than liberating.

Both texts initially construct physical domestic space as an externalised cage governed by middle-class propriety, yet their contrasting literary forms position the audience and reader at markedly different distances from that enclosure. In *A Doll’s House* \`[Example text — not a set text]\`, Ibsen locks the entire three-act action inside a single tastefully furnished bourgeois parlour whose doors, locked letterbox, and central Christmas tree are perpetually visible to a live theatre audience. Within nineteenth-century Norwegian contexts of production—where married women possessed severely restricted legal and financial autonomy—the unchanging single set transforms decorative comfort into a gilded birdcage. Through theatrical proxemics, Torvald patrols the study threshold while Nora darts nervously between hearth and door, visually dramatising her subordinated space before dialogue even articulates it. Conversely, in *The Metamorphosis* \`[Example text — not a set text]\`, Kafka strips domesticity of any decorative charm by confining Gregor Samsa inside a narrow, locked bedroom after his abrupt transformation into a ‘monstrous vermin’. Rather than relying on external three-dimensional staging, Kafka’s terse third-person limited focalization traps the reader immediately inside Gregor’s suffocating sensory field—clinging to damp walls, peering through dusty glass, and listening anxiously to footsteps outside three bolted doors. Whereas Ibsen’s single parlour lures audiences initially into mistaking middle-class respectability for domestic warmth, Kafka’s claustrophobic prose makes alienation viscerally physical from the opening sentence, aligning enclosure with industrial-era dehumanisation.

Beyond architectural walls, both authors expose how psychological confinement is sustained through linguistic infantilisation and coercive financial obligation—though their protagonists internalise these cages in profoundly different ways. In Ibsen’s dialogue, Torvald’s patronising diminutive epithets (‘little skylark’, ‘squirrel’, ‘spendthrift’) function as verbal bars disguised as affection; paired with Nora’s furtive hiding of macaroons and frantic forging of a loan signature, sharp subtext reveals a woman forced to perform childlike compliance to survive economically. Crucially, however, Nora’s secret repayment labour quietly nurtures an embryonic sense of proud agency beneath her mask, creating latent fuel for later awakening. By contrast, in Kafka’s novella, free indirect discourse exposes how thoroughly capitalist familial obligation has colonised Gregor’s consciousness even after metamorphosis. Instead of railing against his grotesque condition, Gregor obsesses over missing the five-o’clock train and paying off his father’s debts—comic-horrific understatement that exposes psychological servitude far deadlier than locked doors. Where Ibsen’s dramatic irony allows the audience to spot the growing crack between Nora’s rehearsed chatter and her hidden competence, Kafka’s deadpan narrative tone denies Gregor even the conceptual vocabulary of rebellion, exposing how internalised duty converts victim into compliant prisoner.

It is in their formal turning points and symbolic climaxes that the two works most sharply diverge on whether confinement truly catalyses resistance. In *A Doll’s House* \`[Example text — not a set text]\`, Ibsen harnesses theatrical body language and acoustic spectacle during the wild Tarantella rehearsal: Nora’s frenzied dance—initially demanded by Torvald as ornamental display—mutates into a desperate physical rebellion against suffocation, fracturing her compliant persona on stage. Once Torvald’s selfish reaction to Krogstad’s letter shatters Nora’s illusion of a ‘wonderful thing’, Ibsen deliberately subverts the nineteenth-century ‘well-made play’ structure by replacing tearful reconciliation with a calm, forensic dismantling of marriage across the parlour table. Stripping off her fancy-dress costume—a potent visual prop shedding performed identity—Nora claims her ‘most sacred’ duty to herself. In stark contrast, Kafka charts an anti-climactic trajectory of progressive diminishment rather than triumphant awakening. Symbolic domestic intrusions mark Gregor’s erasure: when his mother and sister clear away his furniture, Grete’s shifting care turns utilitarian, and the father’s hurled apple lodges permanently in Gregor’s back to rot—an ironic inversion of biblical knowledge that brings festering immobility rather than liberation. Even Gregor’s single moment of aesthetic yearning, drawn outward by Grete’s violin music toward an imagined spiritual ‘nourishment’, ends in terrified, self-effacing retreat into darkness. Thus, whereas Ibsen’s dramatic pacing accelerates toward lucid confrontation, Kafka’s cyclical three-part structure narrows inexorably from isolation to quiet disposal.

Ultimately, the closing thresholds of both works generate starkly contrasting emotional and political effects, leaving modern readers to weigh the precarious price of self-discovery. Ibsen culminates with the unforgettable offstage acoustic cue of the ‘heavy door slamming shut’: a sound that shocked original 1879 audiences and still resonates in contemporary reception not as facile triumph, but as radical, ambiguous refusal—since Nora exits into an unforgiving society with no guaranteed security. Kafka, conversely, follows Gregor’s quiet death with an unnervingly sunny spring tram excursion in which the liberated Samsa family stretches out into fresh air while the charwoman casually sweeps away Gregor’s dried husk. That jarring tonal shift from claustrophobic interiority to brisk bourgeois renewal delivers a devastating satiric indictment: Gregor’s only ‘self-discovery’ is recognising that his family’s freedom requires his disappearance. Placed in comparative dialogue, *A Doll’s House* \`[Example text — not a set text]\` and *The Metamorphosis* \`[Example text — not a set text]\` prove that while confinement invariably strips away domestic illusions, whether it catalyses defiant emancipation or bleak erasure depends decisively on whether a subject can reclaim the language—and physical threshold—that defines their captivity.`,
      markScheme: [
        // Criterion A (10 marks): Transferable knowledge, interpretation, comparison, context, nuance
        { point: "[Crit A 1/10] Establishes a nuanced, arguable comparative thesis interrogating the prompt’s premise (whether confinement truly catalyses liberation).", keywords: ["scrutiny", "divergence", "invert", "emancipation", "alienating", "complicate"] },
        { point: "[Crit A 2/10] Demonstrates secure whole-work understanding of Work A’s dramatic/narrative arc and central conflicts.", keywords: ["autonomy", "reconciliation", "marriage", "three-act", "protagonist", "conflict"] },
        { point: "[Crit A 3/10] Demonstrates secure whole-work understanding of Work B’s structural progression and central conflicts.", keywords: ["modernist", "novella", "transformation", "debts", "isolation", "entrapment"] },
        { point: "[Crit A 4/10] Compares physical/spatial enclosure perceptively across both works as diagnostic mechanisms of social power.", keywords: ["claustrophobia", "externalised", "bourgeois", "propriety", "enclosure", "domestic space"] },
        { point: "[Crit A 5/10] Explores psychological/internalised confinement (economic dependency, linguistic control, or coercive duty) across both texts.", keywords: ["internalise", "servitude", "infantilisation", "dependency", "colonised", "coercive"] },
        { point: "[Crit A 6/10] Integrates relevant contexts of production/reception organically without detached historical summaries.", keywords: ["contexts of production", "contemporary reception", "patriarchal", "capitalist", "industrial-era", "historical"] },
        { point: "[Crit A 7/10] Illuminates nuanced divergence within similarity: active awakening/defiance versus progressive diminishment/erasure.", keywords: ["diminishment", "erasure", "awakening", "compliance", "rebellion", "defiant"] },
        { point: "[Crit A 8/10] Explores unresolved ambiguity and ethical cost in the endings rather than forcing simplistic morals.", keywords: ["ambiguous", "precarious", "indictment", "disappearance", "refusal", "unresolved"] },
        { point: "[Crit A 9/10] Substantiates comparative claims with accurate, versatile closed-book micro-evidence and turning points.", keywords: ["turning points", "sacred", "nourishment", "husk", "illusion", "signature"] },
        { point: "[Crit A 10/10] Sustains perceptive, convincing critical synthesis across the entire comparative arc.", keywords: ["diagnostic", "illusions", "captivity", "reclaim", "agency", "power"] },
        // Criterion B (10 marks): Transferable comparative evaluation of authorial choices & form
        { point: "[Crit B 1/10] Evaluates how distinct literary forms (e.g. stagecraft vs prose narrative, or poetry vs drama) shape contrasting audience/reader experiences.", keywords: ["contrasting literary forms", "stagecraft", "three-dimensional", "audience", "viscerally", "medium"] },
        { point: "[Crit B 2/10] Analyses spatial/visual craft in Work A (set, proxemics, thresholds, or visual framing).", keywords: ["proxemics", "single set", "threshold", "visual", "staging", "spatial"] },
        { point: "[Crit B 3/10] Analyses narrative perspective/focalization or interior craft in Work B (limited interiority, sensory restriction, free indirect discourse).", keywords: ["limited focalization", "sensory field", "free indirect discourse", "deadpan", "focalization", "perspective"] },
        { point: "[Crit B 4/10] Evaluates dialogue or verbal craft (diminutive diction, subtext, dramatic irony, or understatement).", keywords: ["epithets", "subtext", "dramatic irony", "understatement", "diction", "dialogue"] },
        { point: "[Crit B 5/10] Analyses physical/symbolic props, bodily performance, or grotesque/figurative imagery.", keywords: ["prop", "costume", "grotesque", "bodily", "imagery", "symbolic"] },
        { point: "[Crit B 6/10] Evaluates genre conventions and structural subversion (e.g. dismantling expected closure vs cyclical narrowing).", keywords: ["subverts", "well-made play", "cyclical", "trajectory", "anti-climactic", "convention"] },
        { point: "[Crit B 7/10] Analyses recurring motifs, ironic inversions, or intertextual echoes across scenes.", keywords: ["inversion", "biblical", "aesthetic", "bolted", "motif", "ironic"] },
        { point: "[Crit B 8/10] Evaluates structural pacing and climatic contrast (accelerating confrontation vs progressive diminishment).", keywords: ["pacing", "confrontation", "inexorably", "forensic", "climaxes", "escalating"] },
        { point: "[Crit B 9/10] Analyses closing formal/tonal craft (acoustic cue, final visual image, or jarring tonal shift).", keywords: ["acoustic", "offstage", "tonal shift", "satiric", "jarring", "closing"] },
        { point: "[Crit B 10/10] Continuously evaluates *why* authorial choices produce divergent emotional and political effects.", keywords: ["effects", "devastating", "resonant", "indict", "political", "emotional"] },
        // Criterion C (5 marks): Focus, organisation, integrated comparative structure
        { point: "[Crit C 1/5] Employs a cohesive integrated point-by-point conceptual architecture (never separated two-half blocks).", keywords: ["both texts initially", "beyond architectural", "it is in their formal", "ultimately", "both authors"] },
        { point: "[Crit C 2/5] Sustains unbroken alignment with Prompt 1 across introduction, body sections, and conclusion.", keywords: ["confinement", "catalyst", "self-discovery", "resistance", "captivity"] },
        { point: "[Crit C 3/5] Opens every body paragraph with a focused, arguable comparative topic sentence uniting both works.", keywords: ["while both", "both authors", "most sharply diverge", "closing thresholds", "both texts"] },
        { point: "[Crit C 4/5] Weaves fluid comparative connectives throughout body paragraphs to sustain dialogue between texts.", keywords: ["conversely", "whereas", "by contrast", "in stark contrast", "however"] },
        { point: "[Crit C 5/5] Concludes with an elevated comparative synthesis rather than mechanical point repetition.", keywords: ["placed in comparative dialogue", "decisively", "invariably", "synthesis", "depends"] },
        // Criterion D (5 marks): Language, register, precision
        { point: "[Crit D 1/5] Maintains a formal, concise, and authoritative academic literary register throughout.", keywords: ["dehumanisation", "conformity", "subordinated", "dismantling", "perpetually"] },
        { point: "[Crit D 2/5] Deploys accurate, medium-specific literary terminology naturally in service of argument.", keywords: ["surrealism", "realist", "interiority", "satiric", "persona"] },
        { point: "[Crit D 3/5] Demonstrates sophisticated syntactic variety and rhythmic control across extended analysis.", keywords: ["rather than", "crucially", "thus", "instead of", "within"] },
        { point: "[Crit D 4/5] Exhibits exact lexical nuance when evaluating tone, psychology, and aesthetic impact.", keywords: ["embryonic", "ornamental", "festering", "facile", "lucid"] },
        { point: "[Crit D 5/5] Integrates short closed-book textual references smoothly into grammatical academic prose.", keywords: ["shedding performed", "frenzied", "sweeps away", "visually dramatising", "transforms"] },
      ],
      markbands: P2_MARKBANDS_30,
      commonError: "Writing half the essay on Work A and half on Work B, or accepting ‘catalyst for self-discovery’ uncritically without weighing how confinement can also crush agency.",
      strategy: "Interrogate the prompt → Integrate BOTH works in every body section → Contrast form (stage vs page) → Keep micro-evidence crisp",
    },
    {
      id: "exam-p2-q15",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Discuss",
      marks: 30,
      topicId: "3-intertextuality",
      guideRef: "comparative-synthesis-architecture",
      question: `${P2_PROMPTS_BLOCK}\n\n### Full IB Paper 2 Comparative Essay — Prompt 2 (Memory & Truth)\n\n**Selected Prompt:** *“Memory is never a neutral archive; it is an instrument of survival or power.” Discuss this claim in relation to two of the works you have studied.*\n\nWrite a complete, integrated point-by-point **IB Paper 2 Comparative Essay** applying Prompt 2 to **ANY two studied works** from your own Learner Portfolio (honouring the IB non-overlap rule). *(30 marks across Criteria A, B, C, and D)*`,
      hints: [
        "Interrogate the tension inside the prompt’s binary: can memory act as *survival* and *power* simultaneously—and what happens when an instrument of survival becomes a cage of self-deception?",
        "Structure around 3–4 integrated conceptual angles across BOTH works—e.g. (1) Unreliable framing personas curating the past, (2) Competing class or family hierarchies wielding nostalgia as power, (3) Medium-specific stylistic fissures (euphemistic prose vs anti-realist theatricality) exposing what memory cannot silence.",
        "Evaluate how each author’s distinct literary form controls the audience’s or reader’s scepticism toward remembered truth.",
      ],
      modelAnswer: `*(Non-prescriptive notice: This Band 5 model essay demonstrates transferable Paper 2 comparative architecture using Kazuo Ishiguro’s The Remains of the Day \`[Example text — not a set text]\` and Tennessee Williams’s The Glass Menagerie \`[Example text — not a set text]\`. Apply this exact comparative framework to ANY two studied works from your own Learner Portfolio—all 30 mark-scheme points reward transferable literary skills!)*

### Essay: Curated Ruins — Memory as Self-Defence, Power, and Unreliable Performance

To describe memory as ‘never a neutral archive’ is to recognise recollection as an active act of editing rather than passive retrieval. Yet the aphorism’s pairing of ‘survival or power’ invites deeper interrogation: in literature, the very fictions that insulate vulnerable characters from psychic collapse frequently double as coercive instruments that silence others or uphold oppressive hierarchies. Comparing Kazuo Ishiguro’s elegiac novel *The Remains of the Day* \`[Example text — not a set text]\` (1989) with Tennessee Williams’s expressionist ‘memory play’ *The Glass Menagerie* \`[Example text — not a set text]\` (1944) illuminates this unsettling paradox across two contrasting forms. While both works expose retrospective recollection as a curated defence against guilt and historical decline, Ishiguro deploys repressed first-person prose and subtle temporal irony to show how memory serves both personal survival and aristocratic power, whereas Williams uses overtly anti-realist theatrical framing to expose how competing family nostalgias weaponise the past inside a suffocating domestic trap—proving ultimately that edited memory offers fragile refuge only at the cost of emotional paralysis.

Both authors establish memory’s unreliability immediately through self-conscious narrating personas, yet their formal mechanisms calibrate audience scepticism in strikingly divergent ways. In *The Remains of the Day* \`[Example text — not a set text]\`, Ishiguro structures the novel as a six-day West Country motoring journal through which the ageing butler Stevens recalls interwar service at Darlington Hall. On the surface, Stevens’s pedantic, formal register—cluttered with hedging disclaimers such as ‘if I recall correctly’ and pompous reflections on professional ‘dignity’—performs scholarly objectivity. Gradually, however, subtle structural contradictions betray him: revising earlier claims about Miss Kenton’s letter or repeatedly minimising his employer’s fascist appeasement forces the reader to read *against* Stevens’s smooth prose, uncovering a defensive narrator editing shame out of existence in order to survive his wasted life. Conversely, in *The Glass Menagerie* \`[Example text — not a set text]\`, Williams abandons realist illusion from the opening monologue. Stepping directly downstage outside the fourth wall, the narrator-protagonist Tom announces candidly that he is giving the audience ‘truth in the pleasant disguise of illusion’, explicitly declaring that the stage action is ‘memory’ and therefore ‘dimly lighted’, ‘sentimental’, and ‘not realistic’. Whereas Ishiguro traps readers inside disguised unreliability so that recognition dawns with quiet devastating irony, Williams’s Brechtian candour invites theatregoers immediately to scrutinise every soft amber glow and swelling violin motif as Tom’s guilt-ridden theatrical editing.

Within these curated frames, both texts dramatise how nostalgia functions simultaneously as psychological survival and as an instrument of ideological or familial power. In Ishiguro’s post-Suez 1956 context of production—looking back at British imperial twilight—the mythology of the ‘great butler’ enables aristocratic patrons like Lord Darlington to command unquestioning deference while insulating servants from moral agency. By equating emotional numbness with elite ‘dignity’—even continuing to pour wine upstairs while his own father lies dying—Stevens weaponises institutional memory against his own humanity, mistaking subordination to class hierarchy for noble service. By contrast, *The Glass Menagerie* \`[Example text — not a set text]\` relocates memory’s coercive power into a Depression-era St Louis tenement where Amanda Wingfield turns romanticised Southern belle recollection—her mythic seventeen ‘gentlemen callers’ at Blue Mountain—into both an anaesthetic against abandonment and an authoritarian script imposed upon her children. While Amanda clings to mythic past grandeur to survive poverty, her relentless recitation suffocates Laura’s fragile autonomy and drives Tom toward resentful escape. Thus, whereas Ishiguro exposes how institutional memory sustains macro-level class deference and political complicity, Williams reveals how domestic nostalgia operates as intimate maternal control—showing that survival narratives easily mutate into prisons for anyone trapped inside another’s version of the past.

Crucially, both writers enlist medium-specific stylistic fissures to demonstrate that suppressed truth inevitably leaks through memory’s polished surface. In *The Remains of the Day* \`[Example text — not a set text]\`, Ishiguro embeds emotional rupture inside restrained syntactic slippage and recurring structural motifs: the silver polish Stevens obsessively inspects masks ethical tarnish, while the abrupt shift from polite understatement to the raw confession on Weymouth Pier—‘Indeed—why should I not admit it?—at that moment, my heart was breaking’—shatters decades of linguistic armour in a single unadorned clause. Through controlled pacing and devastating understatement, prose interiority makes the belated collapse of Stevens’s archive almost unbearably poignant. In *The Glass Menagerie* \`[Example text — not a set text]\`, conversely, Williams externalises the fragility of remembered refuge through ‘plastic theatre’—combining translucent scrim walls, flickering candlelight, projected screen legends, and the central symbolic prop of Laura’s glass unicorn. When Jim’s clumsy dance snaps the unicorn’s horn—rendering it ‘just like all the other horses’—the physical breakage enacts the violent intrusion of modern reality into a curated sanctuary of delicate illusions. Yet even here Williams resists tidy optimism: the broken ornament yields fleeting warmth before Jim’s sudden revelation of his engagement plunges Laura back into silent retreat. While Ishiguro’s linguistic cracks force readers to reconstruct suppressed grief mentally across chapters, Williams’s sensory stagecraft makes the collision between delicate memory and harsh reality viscerally audible and visible in real time.

Ultimately, neither work leaves its characters liberated by looking back; instead, their closing thresholds evaluate memory as a bittersweet, inescapable haunting. On Weymouth Pier at dusk, Stevens watches glowing pier lights flicker on and resolves pathetically to master ‘bantering’ for his new American employer—an ironic circular return showing that even after confronting truth, survival still demands clinging to a reduced servile script. Similarly, Tom’s final direct address acknowledges that physical flight across continents cannot outrun guilt: whenever he passes brightly lit shop windows filled with ‘bits of colored glass’, he commands his sister across time to ‘blow your candles out’, visually extinguishing the stage light yet proving Laura remains permanently illuminated within his conscience. In comparative dialogue, *The Remains of the Day* \`[Example text — not a set text]\` and *The Glass Menagerie* \`[Example text — not a set text]\` affirm and deepen the prompt’s premise: memory is never a neutral vault, yet as an instrument of survival and power it cuts both ways—shielding the vulnerable for a season while quietly sentencing those who worship curated illusions to perpetual regret.`,
      markScheme: [
        // Criterion A (10 marks): Transferable knowledge, interpretation, comparison, context, nuance
        { point: "[Crit A 1/10] Formulates a perceptive comparative thesis interrogating how memory operates simultaneously as survival and coercive power.", keywords: ["active act of editing", "paradox", "coercive", "paralysis", "fragile refuge", "curated"] },
        { point: "[Crit A 2/10] Demonstrates thorough whole-work comprehension of Work A’s retrospective arc, narrator/persona, and conflicts.", keywords: ["retrospective", "dignity", "appeasement", "interwar", "service", "wasted"] },
        { point: "[Crit A 3/10] Demonstrates thorough whole-work comprehension of Work B’s dramatic/narrative structure, tensions, and resolution.", keywords: ["domestic", "abandonment", "autonomy", "escape", "illusion", "retreat"] },
        { point: "[Crit A 4/10] Compares how unreliable narrating personas curate the past to shield themselves from guilt, shame, or loss.", keywords: ["unreliability", "curated", "guilt", "shame", "self-conscious", "defensive"] },
        { point: "[Crit A 5/10] Explores memory as an instrument of power—contrasting wider institutional/social hierarchy with intimate familial control.", keywords: ["deference", "complicity", "maternal control", "authoritarian", "hierarchy", "institutional"] },
        { point: "[Crit A 6/10] Integrates relevant cultural/historical contexts organically into textual analysis without detached history dumps.", keywords: ["imperial", "depression-era", "context of production", "poverty", "class", "historical decline"] },
        { point: "[Crit A 7/10] Probes the nuanced psychological irony that survival fictions simultaneously comfort and imprison.", keywords: ["anaesthetic", "prisons", "numbness", "subordination", "insulate", "trapped"] },
        { point: "[Crit A 8/10] Evaluates the bittersweet, unresolved nature of both endings rather than imposing simplistic redemptive morals.", keywords: ["haunting", "regret", "circular", "conscience", "bittersweet", "inescapable"] },
        { point: "[Crit A 9/10] Embeds accurate closed-book micro-evidence and structural turning points seamlessly throughout.", keywords: ["pleasant disguise", "heart was breaking", "colored glass", "turning", "confession", "breakage"] },
        { point: "[Crit A 10/10] Sustains insightful comparative interpretation across the full essay without drifting into plot summary.", keywords: ["vault", "worship", "sentencing", "perpetual", "affirm", "edited"] },
        // Criterion B (10 marks): Transferable comparative analysis of authorial craft & form
        { point: "[Crit B 1/10] Evaluates how distinct literary forms calibrate reader/audience scepticism toward remembered truth differently.", keywords: ["contrasting forms", "calibrate", "scepticism", "realist illusion", "theatregoers", "medium"] },
        { point: "[Crit B 2/10] Analyses narrative voice and register in Work A (formal hedging, euphemism, or restrained diction disguising bias).", keywords: ["pedantic", "disclaimers", "register", "restraint", "objectivity", "prose"] },
        { point: "[Crit B 3/10] Analyses framing devices or theatrical/formal conventions in Work B (fourth-wall breach, monologue, anti-realist structure).", keywords: ["fourth wall", "anti-realist", "brechtian", "downstage", "monologue", "framing"] },
        { point: "[Crit B 4/10] Evaluates structural irony and contradictions exposing gaps between curated self-image and suppressed truth.", keywords: ["contradictions", "devastating irony", "armour", "slippage", "fissures", "irony"] },
        { point: "[Crit B 5/10] Analyses motifs, pacing, and understated climax in Work A revealing emotional rupture.", keywords: ["tarnish", "understatement", "unadorned", "pacing", "interiority", "motifs"] },
        { point: "[Crit B 6/10] Analyses sensory craft, lighting/imagery, or symbolic props in Work B externalising fragile illusion.", keywords: ["plastic theatre", "scrim", "candlelight", "screen legends", "symbolic prop", "sensory"] },
        { point: "[Crit B 7/10] Contrasts how Work A makes readers reconstruct truth cognitively versus Work B staging rupture visually/audibly.", keywords: ["reconstruct", "viscerally", "audible", "collision", "real time", "stagecraft"] },
        { point: "[Crit B 8/10] Evaluates how dialogue, verbal repetition, or personal scripts constrain agency and enforce competing memories.", keywords: ["recitation", "script", "mutates", "silenc", "weaponise", "nostalgia"] },
        { point: "[Crit B 9/10] Analyses closing formal choices (ironic tonal return, direct address, or symbolic extinguishing of light).", keywords: ["extinguishing", "stage light", "dusk", "direct address", "flicker", "thresholds"] },
        { point: "[Crit B 10/10] Consistently connects authorial craft to nuanced reader and audience impact across both texts.", keywords: ["poignant", "scrutinise", "unbearably", "illuminated", "effect", "audience"] },
        // Criterion C (5 marks): Focus, organisation, integrated comparative structure
        { point: "[Crit C 1/5] Organises the essay cleanly into integrated point-by-point conceptual movements rather than separated text blocks.", keywords: ["both authors establish", "within these curated", "crucially", "ultimately", "both works"] },
        { point: "[Crit C 2/5] Sustains razor-sharp focus on Prompt 2’s concepts (archive, survival, power) throughout every section.", keywords: ["neutral archive", "survival", "power", "recollection", "memory"] },
        { point: "[Crit C 3/5] Uses forceful comparative topic sentences that establish conceptual unity and formal divergence upfront.", keywords: ["strikingly divergent", "simultaneously", "medium-specific", "neither work", "while both"] },
        { point: "[Crit C 4/5] Integrates cohesive comparative connectives weaving both works into continuous analytical dialogue.", keywords: ["whereas", "conversely", "by contrast", "similarly", "however"] },
        { point: "[Crit C 5/5] Concludes with a compelling comparative synthesis transcending mere restatement.", keywords: ["in comparative dialogue", "cuts both ways", "shielding", "deepen", "premise"] },
        // Criterion D (5 marks): Language, register, precision
        { point: "[Crit D 1/5] Sustains an eloquent, precise, and suitably formal academic literary register throughout.", keywords: ["elegiac", "expressionist", "mythology", "sanctuary", "retrospective"] },
        { point: "[Crit D 2/5] Uses accurate, form-specific critical terminology effortlessly in service of evaluation.", keywords: ["aphorism", "persona", "syntactic", "temporal", "unreliable"] },
        { point: "[Crit D 3/5] Varies sentence structure purposefully to heighten analytical contrast and clarity.", keywords: ["on the surface", "gradually", "while", "yet even here", "through"] },
        { point: "[Crit D 4/5] Demonstrates nuanced lexical precision when evaluating tone, motive, and aesthetic tension.", keywords: ["servile", "belated", "translucent", "fleeting", "candidly"] },
        { point: "[Crit D 5/5] Embeds closed-book quotations and textual specifics fluently without awkward phrasing.", keywords: ["enacts the violent", "plunge", "commands", "shatters decades", "exposes"] },
      ],
      markbands: P2_MARKBANDS_30,
      commonError: "Treating ‘survival’ and ‘power’ as two completely separate paragraphs (one per work) instead of examining how survival myths often double as instruments of power across BOTH works.",
      strategy: "Unite both halves of the prompt (‘survival’ AND ‘power’) into one dialectical tension and compare how distinct literary forms expose curated memory",
    },
  ],
};
