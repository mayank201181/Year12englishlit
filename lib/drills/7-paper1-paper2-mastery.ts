import type { Drill } from "./types.ts";

// =============================================================================
// Helper data pools (Strict Non-Prescriptive Policy — zero set texts assumed)
// =============================================================================

const FORMS = ["Poetry", "Drama", "Prose Fiction", "Literary Non-Fiction"] as const;

type CriterionKey = "A" | "B" | "C" | "D";

interface FeedbackItem {
  crit: CriterionKey;
  comment: string;
  reason: string;
}

const CRIT_FEEDBACK_T1: FeedbackItem[] = [
  { crit: "A", comment: "You summarise the literal events accurately, yet miss the subtle irony beneath the speaker's calm tone.", reason: "Understanding literal meaning vs interpreting subtle implications belongs to Criterion A." },
  { crit: "A", comment: "Your references to the passage are relevant, but your conclusions remain on the surface without exploring wider implications.", reason: "Drawing reasoned conclusions from implications with well-chosen references is Criterion A." },
  { crit: "A", comment: "You show sound knowledge of both works, yet treat their similarities as identical without interpreting subtle divergences.", reason: "Interpreting similarities, differences, and implications across works is Paper 2 Criterion A." },
  { crit: "A", comment: "Several quotations are misread literally when the narrator is clearly speaking with bitter understatement.", reason: "Perceptive comprehension and interpretation of textual nuance sit in Criterion A." },
  { crit: "A", comment: "Your essay captures the plot arc cleanly, though deeper psychological ambiguities remain unexplored.", reason: "Moving from literal plot grasp to subtle ambiguity defines Band 5 Criterion A." },
  { crit: "A", comment: "Strong familiarity with key scenes, yet textual references only illustrate obvious surface themes.", reason: "Using judicious textual knowledge to reach insightful interpretations is Criterion A." },
  { crit: "A", comment: "You grasp the speaker's stated grief, but overlook the unspoken guilt implied by the closing image.", reason: "Uncovering unspoken implications in textual evidence is assessed under Criterion A." },
  { crit: "A", comment: "Good literal grasp of both protagonists, though your reading forces a reductive moral instead of embracing tension.", reason: "Persuasive interpretation of complexity and tension belongs to Criterion A." },

  { crit: "B", comment: "You identify metaphor, sibilance, and enjambment accurately, but stop short of evaluating how effectively they construct unease.", reason: "Moving from technique-spotting to evaluating how craft shapes meaning is Criterion B." },
  { crit: "B", comment: "Multiple devices are labelled in every paragraph, yet you rely on vague effects like 'emphasises the mood'.", reason: "Analysing and evaluating authorial choices beyond generic labels is Criterion B." },
  { crit: "B", comment: "You compare themes clearly across both works, but rarely compare how contrasting literary forms shape audience response.", reason: "Comparing and evaluating authorial and formal choices across works is Paper 2 Criterion B." },
  { crit: "B", comment: "Stage directions and lighting cues are quoted, yet left unanalysed as theatrical choices.", reason: "Evaluating how medium-specific authorial choices generate meaning is Criterion B." },
  { crit: "B", comment: "Free indirect discourse is named once without explaining how shifting psychic distance alters reader sympathy.", reason: "Tracing Choice → Mechanism → Effect sits squarely in Criterion B." },
  { crit: "B", comment: "Your paragraph lists rhetorical questions and tricolon as a checklist without appraising their persuasive impact.", reason: "Appraising the effectiveness of stylistic features rather than listing them is Criterion B." },
  { crit: "B", comment: "Excellent awareness of motifs, yet you describe what symbols appear rather than evaluating how syntax and imagery interact.", reason: "Evaluating interlocking textual features and craft mechanisms is Criterion B." },
  { crit: "B", comment: "You mention the sonnet's volta accurately, but do not analyse how rhythmic disruption enacts the speaker's hesitation.", reason: "Linking formal craft mechanics directly to psychological or thematic effect is Criterion B." },

  { crit: "C", comment: "Walking chronologically from stanza 1 to stanza 4 prevents you from cross-linking opening and closing echoes.", reason: "Conceptual organisation and cohesive focus (avoiding chronological walkthroughs) belong to Criterion C." },
  { crit: "C", comment: "Writing three pages on Work 1 followed by three pages on Work 2 delays comparison and weakens essay cohesion.", reason: "Integrated comparative structure and balance are assessed under Criterion C." },
  { crit: "C", comment: "Your paragraphs contain sharp sentences, yet drift away from the guiding question halfway through the essay.", reason: "Sustaining explicit focus on the guiding question or prompt is Criterion C." },
  { crit: "C", comment: "Work 1 occupies nearly 75% of the script while Work 2 receives only one hurried paragraph before the conclusion.", reason: "Balanced treatment of both studied works is explicitly required by Paper 2 Criterion C." },
  { crit: "C", comment: "Topic sentences announce plot sequence ('Next, in paragraph three...') rather than advancing a progressive argument.", reason: "Cohesive conceptual architecture and logical progression define Criterion C." },
  { crit: "C", comment: "Transitions between movements feel abrupt, leaving insightful observations scattered rather than unified.", reason: "Cohesive flow and structured presentation of ideas sit in Criterion C." },
  { crit: "C", comment: "A standalone paragraph of textbook history breaks the essay's focus and interrupts the comparative line of argument.", reason: "Maintaining sustained analytical focus without off-task digressions is Criterion C." },
  { crit: "C", comment: "Your conclusion ends abruptly mid-thought without synthesising the conceptual threads built earlier.", reason: "Effective structural cohesion and unified focus across the whole essay belong to Criterion C." },

  { crit: "D", comment: "Colloquial phrases such as 'kind of shows' and 'a lot of tension' undercut the authority of your critical voice.", reason: "Appropriate academic register and lexical precision are assessed under Criterion D." },
  { crit: "D", comment: "Your ideas are clear overall, yet overusing vague verbs like 'shows', 'uses', and 'makes' blunts analytical precision.", reason: "Carefully chosen, precise vocabulary and stylistic effectiveness belong to Criterion D." },
  { crit: "D", comment: "Recurring comma splices, tense slips, and dropped quotation integration disrupt the fluency of your prose.", reason: "Grammatical accuracy, sentence construction, and fluent embedding belong to Criterion D." },
  { crit: "D", comment: "Wordy filler clauses ('it can clearly be seen by the reader that') dilute otherwise perceptive observations.", reason: "Concise, effective, and carefully crafted academic prose defines Band 5 Criterion D." },
  { crit: "D", comment: "Quotations are pasted as standalone sentences rather than woven grammatically into your analytical clauses.", reason: "Syntactic control, fluency, and stylistic polish are assessed under Criterion D." },
  { crit: "D", comment: "Sentence structures repeat the exact same subject-verb rhythm throughout, reducing stylistic variety.", reason: "Varied sentence construction and expressive academic style belong to Criterion D." },
  { crit: "D", comment: "Informal reader appeals ('this really grabs our attention') break formal literary register.", reason: "Maintaining an appropriate, precise formal register is Criterion D." },
  { crit: "D", comment: "Imprecise diction confuses distinct literary concepts, though your overarching structural plan remains clear.", reason: "Accuracy and precision of vocabulary and expression sit in Criterion D." },
];

const CRIT_CONTEXTS_T1 = [
  "Paper 1 (Poetry)",
  "Paper 1 (Drama)",
  "Paper 1 (Prose Fiction)",
  "Paper 1 (Literary Non-Fiction)",
  "Paper 2 (Comparative Essay)",
] as const;

const CRIT_BAND5_PRAISE: FeedbackItem[] = [
  { crit: "A", comment: "Perceptive grasp of subtle ironies and unresolved ambiguity backed by judicious micro-references.", reason: "Perceptive understanding, subtle implications, and well-chosen textual support define Band 5 Criterion A." },
  { crit: "A", comment: "Persuasive interpretation of nuanced similarities and sharp divergences in relation to the unseen prompt.", reason: "Insightful comparative interpretation of implications defines Band 5 Paper 2 Criterion A." },
  { crit: "A", comment: "Interrogates the prompt's hidden assumptions convincingly instead of offering a simplistic literal agreement.", reason: "Nuanced critical interpretation of implications and complexity belongs to Criterion A." },
  { crit: "A", comment: "Sustains compelling conclusions about unspoken psychological motives across both studied works.", reason: "Drawing reasoned, insightful conclusions from textual implications is Criterion A." },
  { crit: "B", comment: "Consistently insightful evaluation of how interlocking syntax, imagery, and structural shifts shape meaning.", reason: "Consistently insightful analysis and evaluation of authorial choices define Band 5 Criterion B." },
  { crit: "B", comment: "Evaluates convincingly how dramatic staging versus unreliable prose focalisation generates divergent audience sympathy.", reason: "Comparing and evaluating contrasting formal choices across works defines Band 5 Paper 2 Criterion B." },
  { crit: "B", comment: "Appraises the aesthetic effectiveness of caesura and ironic understatement rather than listing isolated devices.", reason: "Evaluating how effectively textual features construct meaning is Criterion B." },
  { crit: "B", comment: "Connects micro-level diction seamlessly to macro-level structural pivots to appraise reader impact.", reason: "Evaluative craft synthesis across micro and macro choices is Criterion B." },
  { crit: "C", comment: "Effectively organised around three progressive conceptual movements that keep the guiding question central.", reason: "Cohesive conceptual architecture and razor-sharp focus define Band 5 Criterion C." },
  { crit: "C", comment: "Maintains seamless ~50/50 point-by-point comparative balance across every body section.", reason: "Balanced, structured, and focused comparative presentation defines Band 5 Paper 2 Criterion C." },
  { crit: "C", comment: "Cross-links opening motifs with closing structural echoes through organic, cumulative transitions.", reason: "Cohesive conceptual progression across the entire essay belongs to Criterion C." },
  { crit: "C", comment: "Delivers a disciplined synthesis conclusion that deepens the opening thesis without mechanical repetition.", reason: "Unified structural focus and organisation from thesis to conclusion are assessed under Criterion C." },
  { crit: "D", comment: "Very clear, concise, and surgical academic register deploying precise analytical verbs throughout.", reason: "Precise, varied, effective language and academic register define Band 5 Criterion D." },
  { crit: "D", comment: "Embeds crisp 2–5 word micro-quotations effortlessly inside varied, grammatically exact complex clauses.", reason: "High grammatical accuracy, fluency, and stylistic control belong to Criterion D." },
  { crit: "D", comment: "Maintains an assured scholarly voice free from colloquial hedging or generic reader-response filler.", reason: "Effective, appropriate register and lexical precision define Band 5 Criterion D." },
  { crit: "D", comment: "Demonstrates effortless syntactic variety and exact critical vocabulary across the entire script.", reason: "Clarity, variety, accuracy, and register are assessed under Criterion D." },
];

const CONCEPTUAL_OPENERS = [
  { text: "By pitting clinical administrative diction against fragile organic imagery, the writer exposes how bureaucracy sterilises memory.", form: "Poetry" },
  { text: "Although the speaker projects stoic composure on the surface, abrupt caesuras fracture their certainty and betray latent dread.", form: "Poetry" },
  { text: "Through stark proxemics and harsh overhead lighting, the playwright externalises emotional estrangement before either character speaks.", form: "Drama" },
  { text: "While polite domestic dialogue preserves outward harmony, obsessive stage business with a locked box signals escalating panic.", form: "Drama" },
  { text: "Shifting subtly into free indirect discourse narrows psychic distance, implicating the reader in the protagonist's quiet self-deception.", form: "Prose Fiction" },
  { text: "By cross-linking the opening harbour storm with the closing silence, the narrative frames stillness not as peace but as emotional paralysis.", form: "Prose Fiction" },
  { text: "Juxtaposing the naive experiencing child against the sceptical retrospective persona reveals how memory edits discomfort into myth.", form: "Literary Non-Fiction" },
  { text: "Through crisp antithesis and compressed parataxis, the essayist dismantles official rhetoric of progress to foreground erased labour.", form: "Literary Non-Fiction" },
  { text: "Beneath the facade of ceremonial hospitality, recurring metallic soundscapes turn the dining room into an arena of class surveillance.", form: "Prose Fiction" },
  { text: "Rather than resolving grief cleanly, the final volta reconfigures the opening image of winter frost into unsentimental endurance.", form: "Poetry" },
  { text: "By pairing offstage silence with a half-lowered shutter, the playwright converts ordinary architecture into an emblem of carceral indifference.", form: "Drama" },
  { text: "Balancing intimate personal anecdote with dry statistical irony allows the memoirist to indict institutional neglect without melodrama.", form: "Literary Non-Fiction" },
  { text: "Initially presenting routine as protective armour, the writer gradually reveals how compulsive order conceals unprocessed mourning.", form: "Prose Fiction" },
  { text: "Across the extract, kinetic verbs tied to tidewater persistently destabilise the speaker's rigid geometric metaphors of containment.", form: "Poetry" },
  { text: "Through oblique conversational evasions and prolonged pauses, the dialogue exposes a rupture neither speaker dares to name aloud.", form: "Drama" },
  { text: "Contrasting commercial promises of weightlessness with tactile traces of fatigue reframes modern transit as disguised exhaustion.", form: "Literary Non-Fiction" },
  { text: "Rather than endorsing nostalgia, ironic framing exposes how idyllic recollection conceals complicity in past exclusion.", form: "Literary Non-Fiction" },
  { text: "By compressing domestic ritual into stark monosyllabic clauses, the poet strips inherited duty of grandeur and lays bare quiet claustrophobia.", form: "Poetry" },
];

const CHRONOLOGICAL_OPENERS = [
  { text: "In the first stanza, the poet introduces the harbour setting and uses visual imagery to describe the fog.", form: "Poetry" },
  { text: "Moving on to the second stanza, the speaker next remembers his grandfather's wooden workshop.", form: "Poetry" },
  { text: "In the final lines of the poem, the writer ends by mentioning the autumn wind once more.", form: "Poetry" },
  { text: "At the beginning of the scene, the stage directions tell us that Nora is sitting alone by the lamp.", form: "Drama" },
  { text: "Next, halfway through the dialogue, Arjun walks in from stage left carrying a cardboard box.", form: "Drama" },
  { text: "Finally, at the end of the extract, the lights dim and neither character says another word.", form: "Drama" },
  { text: "In the opening paragraph, the narrator describes the rain falling against the tin awning outside.", form: "Prose Fiction" },
  { text: "Then, in paragraph two, Uncle Mateo speaks to his apprentice about winding the wall clocks.", form: "Prose Fiction" },
  { text: "Towards the conclusion of the passage, the narrator observes the stopped seventh clock above the cellar.", form: "Prose Fiction" },
  { text: "First, the essayist starts by telling a short anecdote about waiting in an airport lounge.", form: "Literary Non-Fiction" },
  { text: "Subsequently, in the middle paragraph, the author shifts to talking about the old railway bridge.", form: "Literary Non-Fiction" },
  { text: "In the concluding paragraph of the memoir, the writer looks back years later in an archive.", form: "Literary Non-Fiction" },
  { text: "Lines 1 to 6 set up the winter landscape with several adjectives and a simile about snow.", form: "Poetry" },
  { text: "After the stage pause on line 14, Elena picks up her shears and replies to David's question.", form: "Drama" },
  { text: "As the passage progresses into the third paragraph, the piano tuner closes the mahogany lid.", form: "Prose Fiction" },
  { text: "Following the opening statistic in paragraph 1, the speaker next lists three rhetorical questions.", form: "Literary Non-Fiction" },
  { text: "From lines 9 to 16, the poem continues describing the brass telescope and the lighthouse steps.", form: "Poetry" },
  { text: "At the close of the extract, the writer wraps up the scene by describing the ferry wake disappearing.", form: "Prose Fiction" },
];

const OUTLINE_TEMPLATES_CONCEPTUAL = [
  "M1: Bureaucratic order as containment (Lines 1–2 & 11) → M2: Sensory intrusion destabilising control (Lines 5–7) → M3: Clandestine ritual & unresolved irony (Lines 9–12).",
  "M1: Spatial alienation & stark lighting → M2: Symbolic props externalising suppressed panic → M3: Subtextual silence & acoustic cutoff.",
  "M1: Ritualised discipline as emotional armour → M2: Tactile fissures betraying latent grief → M3: Spatial boundary-making & stoic distance.",
  "M1: Commercial illusion of effortless progress → M2: Shifting vertical vantage points (aerial vs water level) → M3: Ethical indictment through compressed antithesis.",
  "M1: Nostalgic idealism of the experiencing child → M2: Retrospective scepticism of the adult persona → M3: Reframing dry ledger records as embodied survival.",
  "M1: Pastoral sanctuary vs plosive industrial intrusion → M2: Futility of legal arithmetic across enjambment → M3: Funerary libation & haunting olfactory paradox.",
  "M1: Polite domestic hospitality concealing hierarchy → M2: Internalised shame via conditional similes → M3: Acoustic absence & shared human constraint.",
  "M1: Rigid metrical composure enforcing restraint → M2: Caesural fractures revealing unspoken longing → M3: Structural echo inverting the opening motif.",
];

const OUTLINE_TEMPLATES_CHRONOLOGICAL = [
  "Para 1: Lines 1–4 (opening setting) → Para 2: Lines 5–8 (middle conflict) → Para 3: Lines 9–12 (closing action).",
  "Para 1: Beginning stage directions → Para 2: Middle exchange between speakers → Para 3: Final pause and exit.",
  "Para 1: Opening paragraph description → Para 2: Second paragraph conversation → Para 3: Ending paragraph departure.",
  "Para 1: First stanza imagery → Para 2: Second stanza metaphor → Para 3: Third stanza rhyme and conclusion.",
  "Para 1: Introduction of the airport lounge → Para 2: Middle anecdote about ferries → Para 3: Closing sentence of the speech.",
  "Para 1: Early lines establishing the orchard → Para 2: Noon encounter with the surveyor → Para 3: Dusk description at the end.",
  "Para 1: Opening walk into the parlour → Para 2: Middle scene tuning the piano → Para 3: Final exit down the porch steps.",
  "Para 1: Youthful memory in paragraph 1 → Para 2: Middle detail about timber columns → Para 3: Adult reflection in paragraph 3.",
];

const P2_THEMES = [
  "silence and unspoken power",
  "physical confinement and inner agency",
  "memory, guilt, and self-deception",
  "outsiders exposing social hypocrisy",
  "endings that resist tidy closure",
  "public performance versus private selfhood",
  "competing loyalties under political pressure",
  "nostalgia as comfort or illusion",
  "ambition colliding with material reality",
  "home as sanctuary versus surveillance",
];

const FORM_SWITCH_CUES: Array<{ form: (typeof FORMS)[number]; cues: string[]; accept: string[] }> = [
  {
    form: "Poetry",
    accept: ["Poetry", "poem"],
    cues: [
      "octave-sestet division, a sharp volta on line 9, and recurring sibilance",
      "fractured iambic pentameter, bold enjambment, and internal half-rhyme",
      "three symmetrical quatrains, mid-line caesuras, and an extended conceit",
      "free-verse lineation, breath-like stanza breaks, and harsh plosive soundscapes",
      "a dramatic monologue persona, irregular rhyme, and refrained closing cadence",
    ],
  },
  {
    form: "Drama",
    accept: ["Drama", "play"],
    cues: [
      "italicised stage directions, tight proxemics at a doorway, and dimming amber lighting",
      "rapid stichomythia, prolonged bracketed pauses, and a symbolic locked prop",
      "offstage acoustic sound cues, visual blocking across a parlour table, and dramatic irony",
      "a flickering fluorescent strip, characters refusing eye contact, and subtextual evasion",
      "overlapping interruptions, a sudden entrance from stage left, and fourth-wall tension",
    ],
  },
  {
    form: "Prose Fiction",
    accept: ["Prose Fiction", "Prose", "Fiction", "Prose: Fiction"],
    cues: [
      "tight third-person limited focalisation, free indirect discourse, and sudden analepsis",
      "an unreliable first-person narrator, narrowing psychic distance, and shifting chapter pace",
      "in medias res opening, recurring spatial motifs, and omniscient ironic commentary",
      "extended narrative ellipsis, contrasting foil characterisation, and atmospheric setting",
      "a nested frame narrative, temporal prolepsis, and subtle interior monologue",
    ],
  },
  {
    form: "Literary Non-Fiction",
    accept: ["Literary Non-Fiction", "Non-Fiction", "Nonfiction", "Prose: Non-Fiction", "Literary Nonfiction"],
    cues: [
      "an experiencing versus retrospective memoir persona, ethos/pathos appeals, and anecdotal framing",
      "periodic hypotaxis contrasting with blunt parataxis in a public political speech",
      "travelogue reflection negotiating cultural authority, subjective memory, and truth-claims",
      "personal essayist voice weaving empirical detail with biting rhetorical antithesis and tricolon",
      "an epistolary essay persona interrogating historical archives through ironic self-scrutiny",
    ],
  },
];

// =============================================================================
// EXPORTED DRILLS (5 seeded drills covering all 4 sections of Topic 7)
// =============================================================================

export const drills: Drill[] = [
  // ---------------------------------------------------------------------------
  // DRILL 1 (Level 1 · SL): Official Paper 1 & Paper 2 Exam Blueprint & Numbers
  // ---------------------------------------------------------------------------
  {
    id: "7-paper1-paper2-mastery.exam-specs-blueprint",
    topicId: "7-paper1-paper2-mastery",
    title: "Paper 1 & Paper 2 Blueprints, Timings & Mark Splits",
    level: 1,
    ibLevel: "SL",
    guideRef: "paper1-guiding-question-planning",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.int(0, 3);
        if (mode === 0) {
          // SL Paper 1 writing time given plan + check minutes
          const plan = rng.int(10, 18);
          const check = rng.int(3, 8);
          const write = 75 - plan - check;
          return {
            prompt: `**SL Paper 1** lasts 1 hour 15 minutes (75 min). If you allocate **${plan} minutes** to active reading and conceptual planning and **${check} minutes** to final proofreading, how many minutes remain strictly for writing?`,
            answer: { type: "number", value: write, display: `${write} minutes` },
            hint: "Subtract both planning and proofreading minutes from the official 75-minute SL Paper 1 duration.",
            solution: [
              "Official SL Paper 1 duration = 1h 15m = 75 minutes.",
              `75 − ${plan} − ${check} = ${write} minutes for writing.`,
            ],
            traps: [
              { spec: { type: "number", value: 75 - plan }, feedback: `Remember to subtract the ${check}-minute proofreading buffer as well.` },
              { spec: { type: "number", value: 105 - plan - check }, feedback: "105 minutes is Paper 2 — SL Paper 1 lasts 75 minutes." },
            ],
          };
        }
        if (mode === 1) {
          // Single Paper 1 essay total /20
          const a = rng.int(2, 5);
          const b = rng.int(2, 5);
          const c = rng.int(2, 5);
          const d = rng.int(2, 5);
          const total = a + b + c + d;
          const form = rng.pick(FORMS);
          return {
            prompt: `On a **Paper 1** guided literary analysis (${form}), a candidate earns **Crit A: ${a}/5**, **Crit B: ${b}/5**, **Crit C: ${c}/5**, and **Crit D: ${d}/5**. Calculate their total essay score out of 20.`,
            answer: { type: "number", value: total, display: `${total}` },
            hint: "Every Paper 1 essay is marked out of 20 (A5 + B5 + C5 + D5). Add all four criterion marks.",
            solution: [
              "Paper 1 criterion maxima: A(5) + B(5) + C(5) + D(5) = 20.",
              `${a} + ${b} + ${c} + ${d} = ${total} out of 20.`,
            ],
          };
        }
        if (mode === 2) {
          // Paper 2 writing time given plan + check minutes out of 105
          const plan = rng.int(12, 20);
          const check = rng.int(5, 12);
          const write = 105 - plan - check;
          return {
            prompt: `**Paper 2** lasts 1 hour 45 minutes (105 min) at both SL and HL. If you spend **${plan} minutes** unpacking the prompt and drafting a comparative T-matrix, and reserve **${check} minutes** for final auditing, how many minutes remain for drafting?`,
            answer: { type: "number", value: write, display: `${write} minutes` },
            hint: "Official Paper 2 duration is 105 minutes. Subtract both planning and auditing minutes.",
            solution: [
              "Official Paper 2 duration = 1h 45m = 105 minutes.",
              `105 − ${plan} − ${check} = ${write} minutes for drafting.`,
            ],
            traps: [
              { spec: { type: "number", value: 105 - plan }, feedback: `Don't forget to subtract the ${check}-minute final audit.` },
              { spec: { type: "number", value: 75 - plan - check }, feedback: "75 minutes is SL Paper 1; Paper 2 lasts 105 minutes." },
            ],
          };
        }
        // Core official fact with varied realistic phrasing
        const fact = rng.pick([
          { q: `In IB English A: Literature (FA2021), **SL Paper 1** counts for what percentage (%) of the final SL grade?`, v: 35, disp: "35%", exp: "SL weightings are Paper 1: 35%, Paper 2: 35%, Individual Oral: 30%." },
          { q: `In IB English A: Literature (FA2021), **HL Paper 2** counts for what percentage (%) of the final HL grade?`, v: 25, disp: "25%", exp: "HL weightings are Paper 1: 35%, Paper 2: 25%, HL Essay: 20%, Individual Oral: 20%." },
          { q: `In IB English A: Literature (FA2021), how many total marks is **Paper 2** marked out of (A10 + B10 + C5 + D5)?`, v: 30, disp: "30 marks", exp: "Paper 2 totals 10 + 10 + 5 + 5 = 30 marks at both SL and HL." },
          { q: `In IB English A: Literature (FA2021), how many total marks is **HL Paper 1** marked out of across BOTH unseen passages?`, v: 40, disp: "40 marks", exp: "HL candidates write 2 separate 20-mark essays (2 × 20 = 40 marks)." },
          { q: `Across **Paper 1 + Paper 2** combined, what total percentage (%) of the final **SL** grade comes from external exams?`, v: 70, disp: "70%", exp: "SL Paper 1 (35%) + SL Paper 2 (35%) = 70% external exams (30% IO)." },
          { q: `Across **Paper 1 + Paper 2** combined, what total percentage (%) of the final **HL** grade comes from timed exam papers (excluding the 20% HL Essay)?`, v: 60, disp: "60%", exp: "HL Paper 1 (35%) + HL Paper 2 (25%) = 60% timed external exams." },
        ]);
        const contextTag = rng.pick(["Mock Planning Check:", "Exam Hall Briefing:", "Syllabus Audit:", "DP2 Revision Check:"]);
        return {
          prompt: `${contextTag} ${fact.q}`,
          answer: { type: "number", value: fact.v, display: fact.disp },
          hint: "Recall FA2021 weights — SL: P1 35%, P2 35%, IO 30%; HL: P1 35%, P2 25%, HL Essay 20%, IO 20%.",
          solution: [fact.exp],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          // Paper 2 score /30 and gap to target
          const a = rng.int(4, 9);
          const b = rng.int(4, 9);
          const c = rng.int(2, 5);
          const d = rng.int(3, 5);
          const total = a + b + c + d;
          return {
            prompt: `A **Paper 2** comparative essay receives **Crit A: ${a}/10**, **Crit B: ${b}/10**, **Crit C: ${c}/5**, and **Crit D: ${d}/5**. Calculate the candidate's total Paper 2 mark out of 30.`,
            answer: { type: "number", value: total, display: `${total}` },
            hint: "Paper 2 uses A(10) + B(10) + C(5) + D(5) = 30.",
            solution: [
              `Sum all four Paper 2 criteria: ${a} + ${b} + ${c} + ${d} = ${total}/30.`,
              `Note that Criteria A + B (${a + b}/20) carry two-thirds of Paper 2.`,
            ],
          };
        }
        // HL Paper 1 combined score /40 across two different forms
        const formsShuffled = rng.shuffle([...FORMS]);
        const e1 = rng.int(11, 19);
        const e2 = rng.int(10, 19);
        const total = e1 + e2;
        return {
          prompt: `**[HL]** On Paper 1 (40 marks total), a candidate scores **${e1}/20** on Passage 1 (${formsShuffled[0]}) and **${e2}/20** on Passage 2 (${formsShuffled[1]}). What is their combined HL Paper 1 score out of 40?`,
          answer: { type: "number", value: total, display: `${total}` },
          hint: "Both HL Paper 1 essays are marked independently out of 20 and summed out of 40.",
          solution: [
            `Passage 1 (${formsShuffled[0]}): ${e1}/20; Passage 2 (${formsShuffled[1]}): ${e2}/20.`,
            `Combined HL Paper 1 score = ${e1} + ${e2} = ${total}/40.`,
          ],
        };
      }

      // Tier 3: Clean exact weighted SL or HL external exam percentage contribution
      const isHL = rng.bool(0.5);
      if (!isHL) {
        // SL: P1 (/20, 35%) and P2 (/30, 35%) -> choose multiples so exact integer %!
        // P1 pct = p1 * 5 (from 12..20 -> 60..100 step 5), P2 pct = p2_m * 10 (p2 in 18,21,24,27,30 -> 60,70,80,90,100)
        // Wait: 0.35*(p1*5) + 0.35*(p2*10/3) = 0.35 * (p1Pct + p2Pct). Make (p1Pct + p2Pct) a multiple of 20 -> exact integer!
        const pairs: Array<[number, number]> = [];
        for (const p1 of [12, 14, 16, 18, 20]) {
          for (const p2 of [18, 21, 24, 27, 30]) {
            const sumPct = p1 * 5 + (p2 * 10) / 3;
            if (sumPct % 20 === 0) pairs.push([p1, p2]);
          }
        }
        const [p1, p2] = rng.pick(pairs);
        const io = rng.pick([24, 28, 32, 36, 40]); // io/40 -> 60,70,80,90,100 -> * 0.30 is integer!
        const p1Pct = p1 * 5;
        const p2Pct = (p2 * 10) / 3;
        const ioPct = (io * 100) / 40;
        const overall = (35 * p1Pct + 35 * p2Pct + 30 * ioPct) / 100;
        return {
          prompt: `An **SL** Literature student scores **${p1}/20** on Paper 1 (35%), **${p2}/30** on Paper 2 (35%), and **${io}/40** on the Individual Oral (30%). Calculate their exact weighted overall percentage (%).`,
          answer: { type: "number", value: overall, display: `${overall}%` },
          hint: "Convert each score to a percentage first, then compute 0.35 × P1% + 0.35 × P2% + 0.30 × IO%.",
          solution: [
            `Paper 1: ${p1}/20 = ${p1Pct}%; Paper 2: ${p2}/30 = ${p2Pct}%; IO: ${io}/40 = ${ioPct}%.`,
            `Weighted overall = 0.35(${p1Pct}) + 0.35(${p2Pct}) + 0.30(${ioPct}) = ${overall}%.`,
          ],
        };
      }
      // HL: P1 (/40, 35%), P2 (/30, 25%), HLE (/20, 20%), IO (/40, 20%)
      // Keep p1 in {24, 32, 40} (60,80,100% -> *0.35 = 21, 28, 35 exact!), p2 in {18, 24, 30} (60,80,100% -> *0.25 = 15,20,25 exact!), hle in {13..20} (65..100% -> *0.20 = hle exact!), io in {26,28,30,32,34,36,38,40} (*0.20 = io/2 exact!)
      const p1 = rng.pick([24, 32, 40]);
      const p2 = rng.pick([18, 24, 30]);
      const hle = rng.int(13, 20);
      const io = rng.pick([26, 28, 30, 32, 34, 36, 38, 40]);
      const p1Pct = (p1 * 100) / 40;
      const p2Pct = (p2 * 100) / 30;
      const hlePct = hle * 5;
      const ioPct = (io * 100) / 40;
      const overall = (35 * p1Pct + 25 * p2Pct + 20 * hlePct + 20 * ioPct) / 100;
      return {
        prompt: `**[HL]** A candidate earns **${p1}/40** on Paper 1 (35%), **${p2}/30** on Paper 2 (25%), **${hle}/20** on the HL Essay (20%), and **${io}/40** on the Individual Oral (20%). Calculate their exact weighted overall percentage (%).`,
        answer: { type: "number", value: overall, display: `${overall}%` },
        hint: "Convert each component to a percentage, then apply HL weights: 35% P1, 25% P2, 20% HL Essay, 20% IO.",
        solution: [
          `P1: ${p1Pct}% (×0.35 = ${(35 * p1Pct) / 100}) · P2: ${p2Pct}% (×0.25 = ${(25 * p2Pct) / 100}).`,
          `HL Essay: ${hlePct}% (×0.20 = ${hle}) · IO: ${ioPct}% (×0.20 = ${io / 2}).`,
          `Weighted total = ${overall}%.`,
        ],
      };
    },
  },

  // ---------------------------------------------------------------------------
  // DRILL 2 (Level 1 · SL): Diagnosing IB Criterion A / B / C / D from Feedback
  // ---------------------------------------------------------------------------
  {
    id: "7-paper1-paper2-mastery.criterion-diagnosis",
    topicId: "7-paper1-paper2-mastery",
    title: "Diagnose the IB Criterion (A, B, C, or D)",
    level: 1,
    ibLevel: "SL",
    guideRef: "rubric-mastery-crit-a-d",
    generate(rng, tier) {
      const makeTraps = (correct: CriterionKey) =>
        (["A", "B", "C", "D"] as const)
          .filter((k) => k !== correct)
          .map((k) => ({
            spec: { type: "text" as const, accept: [k, `Criterion ${k}`, `Crit ${k}`] },
            feedback:
              k === "A"
                ? "Criterion A targets knowledge, understanding, and interpretation of subtle implications."
                : k === "B"
                  ? "Criterion B targets analysis and evaluation of authorial/formal choices."
                  : k === "C"
                    ? "Criterion C targets conceptual organisation, balance, and sustained focus."
                    : "Criterion D targets language clarity, accuracy, precision, and academic register.",
          }));

      if (tier === 1) {
        const item = rng.pick(CRIT_FEEDBACK_T1);
        const ctx = rng.pick(CRIT_CONTEXTS_T1);
        return {
          prompt: `**${ctx} Examiner Feedback:**\n*"${item.comment}"*\n\nWhich single IB Criterion letter (**A**, **B**, **C**, or **D**) does this feedback directly target?`,
          answer: {
            type: "text",
            accept: [item.crit, `Criterion ${item.crit}`, `Crit ${item.crit}`],
            display: `Criterion ${item.crit}`,
          },
          hint: "A = Understanding & Interpretation · B = Analysis & Evaluation of Craft · C = Focus & Organisation · D = Language & Register.",
          solution: [
            `Answer: **Criterion ${item.crit}**.`,
            item.reason,
          ],
          traps: makeTraps(item.crit),
        };
      }

      if (tier === 2) {
        // Mix of Band 5 praise and Band 3 ceiling diagnoses across specific contexts
        const usePraise = rng.bool(0.5);
        const item = rng.pick(usePraise ? CRIT_BAND5_PRAISE : CRIT_FEEDBACK_T1);
        const ctx = rng.pick(CRIT_CONTEXTS_T1);
        const label = usePraise ? "Band 5 Moderator Praise" : "Band 3 Ceiling Note";
        return {
          prompt: `**${ctx} — ${label}:**\n*"${item.comment}"*\n\nIdentify the exact IB Criterion letter (**A**, **B**, **C**, or **D**) described here.`,
          answer: {
            type: "text",
            accept: [item.crit, `Criterion ${item.crit}`, `Crit ${item.crit}`],
            display: `Criterion ${item.crit}`,
          },
          hint: "Match the key examiner verb: interpret implications (A), evaluate craft (B), organise/focus/balance (C), or register/accuracy (D).",
          solution: [
            `Answer: **Criterion ${item.crit}**.`,
            item.reason,
          ],
          traps: makeTraps(item.crit),
        };
      }

      // Tier 3: Contrasting pair (Band 3 failure vs Band 5 upgrade) — diagnose the exact criterion upgraded!
      const band3 = rng.pick(CRIT_FEEDBACK_T1);
      const matchingPraise = CRIT_BAND5_PRAISE.filter((x) => x.crit === band3.crit);
      const band5 = rng.pick(matchingPraise);
      const paper = rng.pick(["Paper 1 (20m)", "HL Paper 1 Passage 2 (20m)", "Paper 2 (30m)"]);
      return {
        prompt: `**${paper} Moderation Upgrade:**\n- *Draft 1 (Band 3):* "${band3.comment}"\n- *Draft 2 (Band 5):* "${band5.comment}"\n\nWhich single IB Criterion (**A**, **B**, **C**, or **D**) was upgraded from Band 3 to Band 5?`,
        answer: {
          type: "text",
          accept: [band3.crit, `Criterion ${band3.crit}`, `Crit ${band3.crit}`],
          display: `Criterion ${band3.crit}`,
        },
        hint: "Read both examiner remarks together and identify the single rubric pillar transforming from Band 3 to Band 5.",
        solution: [
          `Both comments evaluate **Criterion ${band3.crit}**.`,
          band5.reason,
        ],
        traps: makeTraps(band3.crit),
      };
    },
  },

  // ---------------------------------------------------------------------------
  // DRILL 3 (Level 2 · SL): Conceptual vs Chronological Paper 1 Architecture
  // ---------------------------------------------------------------------------
  {
    id: "7-paper1-paper2-mastery.conceptual-vs-chronological",
    topicId: "7-paper1-paper2-mastery",
    title: "Paper 1 Architecture: Conceptual vs Chronological Check",
    level: 2,
    ibLevel: "SL",
    guideRef: "paper1-guiding-question-planning",
    generate(rng, tier) {
      const isConceptual = rng.bool(0.5);
      const label = isConceptual ? "conceptual" : "chronological";
      const opposite = isConceptual ? "chronological" : "conceptual";

      if (tier === 1) {
        const sample = rng.pick(isConceptual ? CONCEPTUAL_OPENERS : CHRONOLOGICAL_OPENERS);
        const tag = rng.pick(["Body Paragraph 1", "Body Paragraph 2", "Body Paragraph 3"]);
        return {
          prompt: `Read this **Paper 1 (${sample.form})** topic sentence for **${tag}**:\n\n*"${sample.text}"*\n\nClassify this topic sentence as **conceptual** or **chronological**.`,
          answer: { type: "text", accept: [label], display: label },
          hint: "Does the sentence argue an idea/tension anchored to authorial craft (conceptual), or simply walk sequentially through stanza/paragraph order (chronological)?",
          solution: isConceptual
            ? [
                "Classification: **conceptual**.",
                "It opens with an arguable thematic/psychological claim linked directly to authorial craft rather than text sequence.",
              ]
            : [
                "Classification: **chronological**.",
                "It anchors the paragraph to linear passage position ('In the first stanza', 'Next', 'Finally') instead of a conceptual claim.",
              ],
          traps: [
            {
              spec: { type: "text", accept: [opposite] },
              feedback: isConceptual
                ? "Notice this sentence leads with a conceptual tension and craft mechanism — not text order."
                : "Watch for linear sequencing cues ('first stanza', 'next', 'finally', 'lines 1–6') — these signal a chronological walkthrough.",
            },
          ],
        };
      }

      if (tier === 2) {
        // Combine varied form + guiding focus + topic sentence
        const sample = rng.pick(isConceptual ? CONCEPTUAL_OPENERS : CHRONOLOGICAL_OPENERS);
        const focus = rng.pick([
          "tonal restraint and hidden conflict",
          "spatial contrast and memory",
          "voice, pacing, and quiet resistance",
          "structural irony and power",
        ]);
        return {
          prompt: `A candidate plans a **Paper 1 (${sample.form})** essay on *${focus}* and drafts this topic sentence:\n\n*"${sample.text}"*\n\nDoes this represent a **conceptual** or **chronological** structural move?`,
          answer: { type: "text", accept: [label], display: label },
          hint: "Band 5 Criterion C requires conceptual movements uniting authorial choices across the whole extract, never linear walkthroughs.",
          solution: isConceptual
            ? [
                "Answer: **conceptual**.",
                "This topic sentence synthesises authorial craft and conceptual tension, enabling cross-references anywhere in the extract.",
              ]
            : [
                "Answer: **chronological**.",
                "Tracking linear sequence ('In the opening paragraph', 'Next', 'Towards the conclusion') caps Criterion C and pulls analysis into plot summary.",
              ],
          traps: [
            {
              spec: { type: "text", accept: [opposite] },
              feedback: isConceptual
                ? "It argues a conceptual tension tied to literary craft — that is a conceptual move."
                : "It marches through the passage's sequence rather than grouping by ideas — that is chronological.",
            },
          ],
        };
      }

      // Tier 3: Full 3-Movement Paper 1 outline audit
      const outline = rng.pick(isConceptual ? OUTLINE_TEMPLATES_CONCEPTUAL : OUTLINE_TEMPLATES_CHRONOLOGICAL);
      const form = rng.pick(FORMS);
      const levelTag = rng.pick(["SL Paper 1 (75m)", "HL Paper 1 Passage 1 (65m)", "HL Paper 1 Passage 2 (65m)"]);
      return {
        prompt: `Inspect this 15-minute **${levelTag}** outline for an unseen **${form}** extract:\n\n*${outline}*\n\nDiagnose the essay's architecture as **conceptual** or **chronological**.`,
        answer: { type: "text", accept: [label], display: label },
        hint: "Check whether the three movements group escalating ideas/tensions (conceptual) or slice the text sequentially from start to middle to end (chronological).",
        solution: isConceptual
          ? [
              "Diagnosis: **conceptual**.",
              "The three movements build a progressive thematic and craft arc that cross-links opening and closing details (Band 5 Criterion C).",
            ]
          : [
              "Diagnosis: **chronological**.",
              "Slicing the passage linearly (beginning → middle → end) blocks structural cross-referencing and caps Criterion C in mid-band.",
            ],
        traps: [
          {
            spec: { type: "text", accept: [opposite] },
            feedback: isConceptual
              ? "Look at how each movement tracks a conceptual tension and authorial mechanism rather than beginning/middle/end."
              : "Notice the rigid beginning → middle → end slicing — a classic chronological walkthrough trap.",
          },
        ],
      };
    },
  },

  // ---------------------------------------------------------------------------
  // DRILL 4 (Level 2 · SL): Paper 2 Non-Overlap Rule & Comparative Architecture
  // ---------------------------------------------------------------------------
  {
    id: "7-paper1-paper2-mastery.paper2-prompt-nonoverlap",
    topicId: "7-paper1-paper2-mastery",
    title: "Paper 2 Non-Overlap Rule & Comparative Structure Audit",
    level: 2,
    ibLevel: "SL",
    guideRef: "paper2-comparative-prompts",
    generate(rng, tier) {
      if (tier === 1) {
        // Exact count of remaining eligible Paper 2 works (SL or HL)
        const isHL = rng.bool(0.5);
        const total = isHL ? rng.int(13, 18) : rng.int(9, 14);
        const locked = isHL ? 3 : 2;
        const eligible = total - locked;
        const extraNote = isHL
          ? `uses **2 works** for their Individual Oral and **1 different work** for their HL Essay`
          : `uses **2 works** for their Individual Oral`;
        const context = rng.pick([
          "Learner Portfolio check:",
          "DP2 Exam Registration:",
          "Paper 2 Preparation Audit:",
          "Coursework Firewall Check:",
        ]);
        return {
          prompt: `${context} An **${isHL ? "HL" : "SL"}** Literature candidate studies **${total} works** across DP1–DP2 and ${extraNote}. Under the strict IB non-overlap rule, how many studied works remain eligible for **Paper 2**?`,
          answer: { type: "number", value: eligible, display: `${eligible} works` },
          hint: isHL
            ? "Subtract BOTH the 2 Individual Oral works AND the 1 HL Essay work from total studied works."
            : "SL has no HL Essay — subtract only the 2 Individual Oral works from total studied works.",
          solution: [
            `Total studied works = ${total}.`,
            isHL
              ? `Locked works = 2 (IO) + 1 (HL Essay) = 3. Remaining eligible = ${total} − 3 = ${eligible} works.`
              : `Locked works = 2 (IO). Remaining eligible = ${total} − 2 = ${eligible} works.`,
          ],
          traps: isHL
            ? [
                { spec: { type: "number", value: total - 2 }, feedback: "At HL you must exclude the 1 HL Essay work as well as the 2 IO works!" },
                { spec: { type: "number", value: total }, feedback: "The IB non-overlap rule forbids reusing IO or HL Essay works in Paper 2." },
              ]
            : [
                { spec: { type: "number", value: total - 3 }, feedback: "SL students do not write an HL Essay — only the 2 IO works are locked." },
                { spec: { type: "number", value: total }, feedback: "The IB non-overlap rule forbids reusing your 2 IO works in Paper 2." },
              ],
        };
      }

      if (tier === 2) {
        // Valid vs Invalid non-overlap pairing audit
        const isHL = rng.bool(0.5);
        const maxW = isHL ? 13 : 9;
        const nums = rng.shuffle(Array.from({ length: maxW }, (_, i) => i + 1));
        const io1 = nums[0];
        const io2 = nums[1];
        const hle = nums[2];
        const fresh1 = nums[3];
        const fresh2 = nums[4];
        const isValid = rng.bool(0.5);
        let p1: number;
        let p2: number;
        let culprit = "";
        if (isValid) {
          p1 = fresh1;
          p2 = fresh2;
        } else {
          const badChoices = isHL ? [io1, io2, hle] : [io1, io2];
          const bad = rng.pick(badChoices);
          culprit = bad === hle && isHL ? `Work ${bad} (used in the HL Essay)` : `Work ${bad} (used in the Individual Oral)`;
          if (rng.bool(0.5)) {
            p1 = bad;
            p2 = fresh1;
          } else {
            p1 = fresh1;
            p2 = bad;
          }
        }
        const lockedText = isHL
          ? `IO: **Work ${io1}** & **Work ${io2}** · HL Essay: **Work ${hle}**`
          : `IO: **Work ${io1}** & **Work ${io2}**`;
        const ans = isValid ? "valid" : "invalid";
        const opp = isValid ? "invalid" : "valid";
        return {
          prompt: `**${isHL ? "HL" : "SL"} Non-Overlap Audit** (${lockedText}).\nA candidate plans to write their **Paper 2** comparative essay on **Work ${p1}** and **Work ${p2}**. Is this Paper 2 pairing **valid** or **invalid**?`,
          answer: { type: "text", accept: [ans], display: ans },
          hint: "Verify that neither Paper 2 work appears in the Individual Oral (or HL Essay at HL).",
          solution: isValid
            ? [
                `Verdict: **valid**.`,
                `Neither Work ${p1} nor Work ${p2} overlaps with the locked coursework texts.`,
              ]
            : [
                `Verdict: **invalid**.`,
                `This pairing violates the IB non-overlap rule by reusing ${culprit}.`,
              ],
          traps: [
            {
              spec: { type: "text", accept: [opp] },
              feedback: isValid
                ? `Check carefully: neither Work ${p1} nor Work ${p2} was used in the IO${isHL ? " or HL Essay" : ""}, so the pairing is valid.`
                : `Violates the non-overlap rule — ${culprit} cannot be reused in Paper 2!`,
            },
          ],
        };
      }

      // Tier 3: Integrated vs Block-by-Block Paper 2 comparative plan audit
      const theme = rng.pick(P2_THEMES);
      const formA = rng.pick(FORMS);
      const formB = rng.pick(FORMS);
      const isIntegrated = rng.bool(0.5);
      const ans = isIntegrated ? "integrated" : "block";
      const opp = isIntegrated ? "block" : "integrated";
      const planDesc = isIntegrated
        ? rng.pick([
            `M1: Opening illusion (${formA} Work 1 ↔ ${formB} Work 2) → M2: Craft & crisis contrast (Work 1 ↔ Work 2) → M3: Divergent endings (Work 1 ↔ Work 2).`,
            `Section 1 compares both works' spatial motifs side by side; Section 2 contrasts how ${formA} craft diverges from ${formB} craft; Section 3 evaluates contrasting closures.`,
            `Every body paragraph opens with a shared conceptual tension on ${theme}, analysing Work 1 (${formA}) and pivoting via 'conversely' into Work 2 (${formB}).`,
          ])
        : rng.pick([
            `Pages 1–3 analyse Work 1 (${formA}) exclusively across three paragraphs; Pages 4–6 analyse Work 2 (${formB}) separately, with links saved for the conclusion.`,
            `Para 1–2 cover Work 1's plot and themes on ${theme}; Para 3–4 cover Work 2 separately; Para 5 notes briefly that both works share similarities.`,
            `First half of the essay explores ${formA} Work 1 completely before transitioning ('Now turning to Work 2...') to discuss ${formB} Work 2 in the second half.`,
          ]);
      return {
        prompt: `**Paper 2 Comparative Plan** (Prompt focus: *${theme}*):\n*${planDesc}*\n\nClassify this Paper 2 architecture as **integrated** or **block**.`,
        answer: { type: "text", accept: [ans], display: ans },
        hint: "Integrated essays compare both works inside every conceptual section; block essays treat Work 1 first and Work 2 second.",
        solution: isIntegrated
          ? [
              "Architecture: **integrated** (point-by-point).",
              "Comparing both works inside every body movement sustains Band 5 Criterion A, B, and C balance.",
            ]
          : [
              "Architecture: **block** (Work 1 then Work 2).",
              "Delaying comparison until the second half or conclusion caps comparative depth across Criteria A, B, and C.",
            ],
        traps: [
          {
            spec: { type: "text", accept: [opp] },
            feedback: isIntegrated
              ? "Both works are woven together inside every section — that is integrated point-by-point comparison."
              : "Writing all of Work 1 followed by all of Work 2 is a block structure, not integrated comparison.",
          },
        ],
      };
    },
  },

  // ---------------------------------------------------------------------------
  // DRILL 5 (Level 3 · HL ONLY): Two-Passage Pacing & Rapid Form-Toolkit Switch
  // ---------------------------------------------------------------------------
  {
    id: "7-paper1-paper2-mastery.hl-two-passage-pacing",
    topicId: "7-paper1-paper2-mastery",
    title: "[HL] Two-Passage 65+65+5 Pacing & Rapid Form Switching",
    level: 3,
    ibLevel: "HL",
    guideRef: "paper1-hl-two-passages",
    generate(rng, tier) {
      if (tier === 1) {
        // HL 65+65+5 checkpoint arithmetic
        const plan1 = rng.int(12, 18);
        const plan2 = rng.int(12, 18);
        const askEssay = rng.pick([1, 2] as const);
        const writeMin = 65 - (askEssay === 1 ? plan1 : plan2);
        const formPair = rng.shuffle([...FORMS]).slice(0, 2);
        return {
          prompt: `**[HL Paper 1 · 65 + 65 + 5 Protocol]** Passage 1 is **${formPair[0]}** and Passage 2 is **${formPair[1]}**. You honour the 65-minute budget for each essay and spend **${askEssay === 1 ? plan1 : plan2} minutes** reading, annotating, and mapping your conceptual outline for **Essay ${askEssay}**. How many minutes remain strictly for **writing Essay ${askEssay}** inside its 65-minute block?`,
          answer: { type: "number", value: writeMin, display: `${writeMin} minutes` },
          hint: "Each HL Paper 1 essay has a strict 65-minute block (65 + 65 + 5 = 135 min). Subtract the planning minutes from 65.",
          solution: [
            `Under the HL 65 + 65 + 5 model, Essay ${askEssay} receives exactly 65 minutes.`,
            `65 − ${askEssay === 1 ? plan1 : plan2} = ${writeMin} minutes for writing Essay ${askEssay}.`,
          ],
          traps: [
            { spec: { type: "number", value: 75 - (askEssay === 1 ? plan1 : plan2) }, feedback: "75 minutes is SL Paper 1! Each HL Paper 1 essay runs on a 65-minute hard-stop block." },
          ],
        };
      }

      if (tier === 2) {
        // HL Overrun recovery calculator: Essay 1 took 65 + overrun minutes
        const overrun = rng.int(4, 24);
        const e1Total = 65 + overrun;
        const e2Plan = rng.int(12, 16);
        const buffer = rng.int(3, 6);
        const e2Write = 135 - e1Total - e2Plan - buffer;
        const formPair = rng.shuffle([...FORMS]).slice(0, 2);
        return {
          prompt: `**[HL Paper 1 Overrun Recovery · 135 min total]** You spend **${e1Total} minutes** on Essay 1 (${formPair[0]}), overrunning the minute-65 hard stop by ${overrun} min. If you still protect **${e2Plan} minutes** to plan Essay 2 (${formPair[1]}) and **${buffer} minutes** for a final proofread buffer, how many minutes remain strictly for **writing Essay 2**?`,
          answer: { type: "number", value: e2Write, display: `${e2Write} minutes` },
          hint: "Start from the 135-minute HL total, subtract Essay 1's time, then subtract Essay 2's planning time and the final buffer.",
          solution: [
            `Remaining time after Essay 1: 135 − ${e1Total} = ${135 - e1Total} minutes.`,
            `Subtract ${e2Plan} min (plan) and ${buffer} min (buffer): ${135 - e1Total} − ${e2Plan} − ${buffer} = ${e2Write} minutes to write Essay 2.`,
          ],
          traps: [
            { spec: { type: "number", value: 135 - e1Total }, feedback: `That's total time left before subtracting Essay 2's ${e2Plan}m plan and ${buffer}m buffer!` },
            { spec: { type: "number", value: 135 - e1Total - e2Plan }, feedback: `Remember to subtract the ${buffer}-minute final proofread buffer too.` },
          ],
        };
      }

      // Tier 3: Rapid Minute-65 Form-Toolkit Switch (guaranteed two different literary forms!)
      const target = rng.pick(FORM_SWITCH_CUES);
      const otherForms = FORMS.filter((f) => f !== target.form);
      const prevForm = rng.pick(otherForms);
      const cue = rng.pick(target.cues);
      const minuteMark = rng.pick([64, 65, 66]);
      return {
        prompt: `**[HL Minute-${minuteMark} Form Switch]** You just wrapped up Passage 1 (**${prevForm}**) and turn immediately to Passage 2. On your cold read you spot: *${cue}*. Which exact IB literary form toolkit must you activate now (**Poetry**, **Drama**, **Prose Fiction**, or **Literary Non-Fiction**)?`,
        answer: { type: "text", accept: target.accept, display: target.form },
        hint: `HL Passage 2 is guaranteed to be a DIFFERENT literary form from ${prevForm}. Match the medium-specific craft cues!`,
        solution: [
          `Activate the **${target.form}** toolkit immediately (shedding ${prevForm} habits).`,
          `Cues spotted (${cue}) are signature conventions of **${target.form}**.`,
        ],
        traps: FORM_SWITCH_CUES.filter((x) => x.form !== target.form).map((x) => ({
          spec: { type: "text" as const, accept: x.accept },
          feedback:
            x.form === prevForm
              ? `HL Paper 1 guarantees Passage 2 is a DIFFERENT literary form from Passage 1 (${prevForm})!`
              : `Re-read the textual cues (${cue}) — those belong specifically to ${target.form}, not ${x.form}.`,
        })),
      };
    },
  },
];
