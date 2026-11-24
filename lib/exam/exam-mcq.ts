// ---------------------------------------------------------------------------
// Cross-topic IB English A: Literature (FA2021) Diagnostic MCQ Bank.
// Covers all 8 topics across SL & HL; zero set texts assumed.
// ---------------------------------------------------------------------------
import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-mcq",
  title: "Diagnostic MCQ Bank · Forms, Craft & Concepts",
  level: "SL",
  calculator: false,
  minutes: 40,
  paperType: "Diagnostic MCQ Bank · Forms, Craft & Concepts",
  questions: [
    {
      id: "exam-mcq-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      topicId: "1-readers-writers-texts",
      guideRef: "close-reading-meaning",
      question:
        "Read this short original prose extract:\n\n> *She polished the silver spoons until her knuckles reddened, arranging each handle to face the same austere compass point before the guests arrived.*\n\nWhich response best exemplifies **Band 5 close reading** rather than plot summary or empty technique-spotting?",
      options: [
        "The character polishes silver spoons so hard that her hands turn red while she gets the table ready before her guests visit the house.",
        "The writer uses imagery, adjectives, and verbs such as ‘polished’ and ‘reddened’ to make the scene descriptive and keep the reader engaged.",
        "The pairing of physical abrasion (‘knuckles reddened’) with geometric control (‘austere compass point’) portrays hospitality as anxious self-discipline rather than warmth.",
        "This sentence shows that the protagonist owns expensive cutlery and probably feels worried about whether dinner will start on schedule.",
      ],
      answerIndex: 2,
      hints: [
        "High-band IB close reading moves from specific authorial phrasing → psychological or thematic implication.",
        "Beware responses that merely retell the event or list grammatical labels without explaining how meaning is shaped.",
      ],
      explanation:
        "Linking concrete diction (‘knuckles reddened’, ‘austere compass point’) to the interpretive tension between hospitality and anxious self-policing demonstrates evaluative analysis of authorial choice. Merely restating the action paraphrases plot, while naming generic parts of speech (‘imagery, adjectives, and verbs’) is empty technique-spotting.",
      strategy: "Device/diction → mechanism → conceptual implication",
    },
    {
      id: "exam-mcq-q02",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Analyse",
      topicId: "1-readers-writers-texts",
      guideRef: "voice-tone-ambiguity",
      question:
        "Read these original lines of verse:\n\n> *I packed your winter coat in camphor and neat twine,*\n> *labelled the box in calm, librarian ink—*\n> *yet left the hallway peg unhooked beside the door,*\n> *still holding the damp crescent of your sleeve.*\n\nHow should an IB Literature candidate analyse the relationship between **voice and tone** here?",
      options: [
        "The speaker’s controlled, archival phrasing masks an unresolved grief betrayed by the lingering physical trace on the hallway peg.",
        "The poet directly confesses personal bereavement after moving house, proving the poem is a straightforward autobiographical diary entry.",
        "The tone shifts abruptly into comic sarcasm because packing a winter coat with neat twine exaggerates everyday domestic chores.",
        "Because the speaker sounds calm in the opening lines, the final image contradicts the poem’s coherence and weakens its emotional message.",
      ],
      answerIndex: 0,
      hints: [
        "Always distinguish the constructed lyrical speaker from the biographical poet.",
        "Look at the tension between the controlled verb ‘labelled’ and the final unhooked peg after the pivot ‘yet’.",
      ],
      explanation:
        "Top-band IB commentary distinguishes speaker from poet and embraces productive tonal tension: the ‘calm, librarian ink’ performs bureaucratic restraint that is quietly undercut by leaving the peg intact, exposing grief through understatement rather than overt confession.",
      strategy: "Track surface restraint against understated emotional fracture",
    },
    {
      id: "exam-mcq-q03",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      topicId: "1-readers-writers-texts",
      guideRef: "reader-response-choices",
      question:
        "A short story concludes abruptly as a witness reaches for an unopened letter, withholding whether she burns or reads it. Drawing on reader-response theory (such as Wolfgang Iser’s concept of **textual gaps**), how does this omission shape literary meaning?",
      options: [
        "It signals careless plotting by the author, forcing examiners to deduct credit for an incomplete narrative resolution.",
        "It proves that any reader’s personal opinion is equally valid even when unsupported by details earlier in the narrative.",
        "It guarantees that all readers across every culture will arrive at one fixed moral verdict once they reread the opening scene.",
        "It invites readers to co-construct meaning actively, weighing competing textual clues while accepting deliberate interpretive ambiguity.",
      ],
      answerIndex: 3,
      hints: [
        "Consider how Iser’s ‘gaps’ or ‘blanks’ involve the reader without making interpretation a free-for-all.",
        "Ask how an IB Band 5 essay handles unresolved endings compared with reductive moralising.",
      ],
      explanation:
        "Textual gaps require readers to participate actively in assembling significance from prior motifs, tone, and characterisation. Rather than permitting unsupported guesswork or forcing a single moral, intentional indeterminacy generates layered, evidence-based readings.",
      strategy: "Embrace ambiguity while anchoring every reading in textual evidence",
    },
    {
      id: "exam-mcq-q04",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Distinguish",
      topicId: "2-time-and-space",
      guideRef: "production-reception-contexts",
      question:
        "A nineteenth-century European travelogue celebrates ‘civilising railways’ cutting through tropical forests; contemporary readers instead critique its colonial erasure of indigenous land stewardship. Which AoE 2 distinction best accounts for this shift?",
      options: [
        "The difference between an author’s first-person grammatical tense and a translator’s choice of regional vocabulary.",
        "The shift between the work’s historical context of production and its later cultural context of reception.",
        "The contrast between fixed poetic metre and open-form prose narratives written in the same historical decade.",
        "The opposition between a text’s literal dictionary denotation and its acoustic soundscape when read aloud.",
      ],
      answerIndex: 1,
      hints: [
        "Think about the two temporal moments in AoE 2: when a work is created versus when later audiences read it.",
        "How do changing ideological horizons alter how the same passage is received?",
      ],
      explanation:
        "Context of production encompasses the historical, political, and ideological norms shaping a text’s creation, whereas context of reception refers to how audiences in different eras or cultures reinterpret that work through shifted ethical and aesthetic lenses.",
      strategy: "Separate original conditions of writing from evolving readerships",
    },
    {
      id: "exam-mcq-q05",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Evaluate",
      topicId: "2-time-and-space",
      guideRef: "works-in-translation",
      question:
        "When studying a **work in translation** (a mandatory strand of IB English A: Literature), which analytical approach demonstrates the most sophisticated literary awareness?",
      options: [
        "Ignoring the translation process completely and treating every English pun as though the original author had written it verbatim.",
        "Recognising translation as an interpretive act that mediates register, rhythm, and cultural idioms while analysing the translated text closely.",
        "Dismissing stylistic analysis of diction and imagery because translated literature can only be assessed through plot and historical summary.",
        "Rewriting the translator’s sentences into informal slang so that all culturally specific honourifics disappear from the discussion.",
      ],
      answerIndex: 1,
      hints: [
        "Should you ignore translation altogether, or abandon close reading? Neither extreme hits Band 5.",
        "Think about what a translator negotiates: social register, cadence, idioms, and cultural resonance.",
      ],
      explanation:
        "Treating translation as an interpretive mediation allows candidates to perform rigorous close reading of the English version while staying alert to culturally embedded honourifics, idioms, rhythm, and footnotes rather than pretending English is a transparent mirror.",
      strategy: "Close-read the English text with cultural sensitivity to translation choices",
    },
    {
      id: "exam-mcq-q06",
      kind: "mcq",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      topicId: "2-time-and-space",
      guideRef: "context-without-fallacy",
      question:
        "Which strategy best integrates historical and cultural context into an IB Literature essay **without** committing biographical fallacy or drifting into a history-essay dump?",
      options: [
        "Opening with two full paragraphs of textbook chronology about the author’s century before mentioning the literary text’s style or structure.",
        "Inferring the author’s private childhood trauma from every anxious character’s dialogue to prove what the writer personally felt.",
        "Omitting every mention of time, place, and social values so that the text floats inside an ahistorical formalist vacuum.",
        "Showing how specific literary choices—such as claustrophobic domestic staging or ironic register—engage with or subvert prevailing social norms.",
      ],
      answerIndex: 3,
      hints: [
        "Context in Literature must serve textual analysis, not replace it.",
        "Avoid assuming a character’s voice is a direct confession of the writer’s biography (biographical/intentional fallacy).",
      ],
      explanation:
        "In IB English A: Literature, contextual awareness earns top credit when it illuminates authorial craft—demonstrating how staging, focalization, or diction negotiates cultural anxieties—rather than reciting biographical trivia or detached historical background.",
      strategy: "Make context work inside textual analysis, never beside it",
    },
    {
      id: "exam-mcq-q07",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Analyse",
      topicId: "3-intertextuality",
      guideRef: "conventions-traditions-subversion",
      question:
        "A contemporary fourteen-line poem follows an iambic pentameter sonnet framework for twelve lines, then fractures into an unrhymed, jagged final two lines that refuse consolation. How does this **genre subversion** generate meaning?",
      options: [
        "By evoking the sonnet’s traditional expectation of harmonious closure and deliberately breaking it to enact emotional or ideological rupture.",
        "By proving the poet failed to maintain technical competence in metre and accidentally abandoned rhyme near the poem’s conclusion.",
        "By transforming the poem into literary non-fiction because fixed rhyme schemes are the only trait separating verse from prose.",
        "By preventing readers from identifying any literary tradition so that each line is interpreted in total isolation from earlier poetry.",
      ],
      answerIndex: 0,
      hints: [
        "Think about a genre’s ‘horizon of expectations’: why set up a recognisable form before breaking it?",
        "What does breaking the final rhyming couplet enact thematically?",
      ],
      explanation:
        "Genres establish a horizon of expectations—in a Shakespearean sonnet, the closing couplet classically promises epigrammatic synthesis. Invoking that architecture only to fracture it turns structural dissonance itself into a vehicle for unresolved rupture.",
      strategy: "Identify the convention invoked, then analyse the effect of breaking it",
    },
    {
      id: "exam-mcq-q08",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Analyse",
      topicId: "3-intertextuality",
      guideRef: "allusion-motif-dialogue",
      question:
        "When a modern play retells a classical heroic myth exclusively through the sceptical dialogue of the palace servants sweeping up after the battle, what is the primary effect of this **intertextual dialogue**?",
      options: [
        "It demonstrates that modern audiences no longer understand ancient plots and require simplified domestic summaries instead.",
        "It confirms the canonical myth’s original aristocratic values by showing that servants admire heroic violence from afar.",
        "It destabilises the heroic source text’s authority, exposing the human cost and class hierarchies erased by traditional epic perspective.",
        "It removes all thematic ambiguity by proving that classical literature has no relevance to contemporary ethical debates.",
      ],
      answerIndex: 2,
      hints: [
        "Ask whose voices were marginalised in the original myth and how shifting perspective changes what counts as ‘heroism’.",
        "Intertextual ‘talking back’ often ironises or complicates the prestige of a canonical predecessor.",
      ],
      explanation:
        "Re-centring a canonical myth on peripheral, sceptical witnesses creates ironic intertextual dialogue: the familiar heroic narrative becomes a foil that exposes class erasure and the unglamorous material aftermath of violence.",
      strategy: "Ask how the later text re-frames, challenges, or ironises its precursor",
    },
    {
      id: "exam-mcq-q09",
      kind: "mcq",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      topicId: "3-intertextuality",
      guideRef: "comparative-synthesis-architecture",
      question:
        "Why does an **integrated point-by-point** structure consistently outperform a **block-by-block** (‘all of Work A, then all of Work B’) structure on IB Paper 2?",
      options: [
        "Because IB examiners award automatic extra marks whenever two titles appear inside the exact same grammatical clause.",
        "Because block-by-block essays are officially disqualified under IB regulations and receive zero marks across all four criteria.",
        "Because integrated essays eliminate the need to analyse literary form, letting students summarise both plots more rapidly.",
        "Because weaving both works through shared conceptual angles sustains evaluative comparison of how divergent forms shape nuanced meanings.",
      ],
      answerIndex: 3,
      hints: [
        "Consider Criterion A (sustained comparison) and Criterion C (cohesive organisation) on Paper 2.",
        "What happens when Work A is discussed alone for two pages before Work B even appears?",
      ],
      explanation:
        "Point-by-point conceptual architecture keeps both works in continuous dialogue, enabling nuanced analysis of divergence within similarity—especially how distinct forms (e.g. drama vs novel) achieve contrasting reader effects—rather than producing two bolted-together mini-essays.",
      strategy: "Organise every Paper 2 body section around a shared conceptual tension",
    },
    {
      id: "exam-mcq-q10",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Analyse",
      topicId: "4-poetry-and-drama",
      guideRef: "poetic-form-metre-structure",
      question:
        "Examine these original lines of poetry:\n\n> *He swore the storm had spared the cedar roof,*\n> *then stopped. Above the kitchen lintel crept*\n> *a silver thread of rain that slipped across*\n> *the plaster like an uninvited guest.*\n\nHow do the **caesura** in line 2 and the **enjambment** across lines 2–4 work together?",
      options: [
        "The medial pause accelerates the stanza’s joyful pace, while the run-on lines mimic the loud crashing of thunder outside.",
        "Both devices function identically to force an abrupt stop after every noun so that the speaker sounds detached and legalistic.",
        "The abrupt full stop enacts the speaker’s sudden shock of recognition, before the flowing run-on lines mirror the unstoppable seepage of water.",
        "The punctuation break creates a traditional Petrarchan rhyme scheme, while the enjambment conceals the poem’s narrative subject.",
      ],
      answerIndex: 2,
      hints: [
        "Read line 2 aloud: notice how ‘then stopped.’ forces your voice to freeze mid-line.",
        "Now track how the sentence spills unbroken across the endings of lines 2, 3, and 4.",
      ],
      explanation:
        "The blunt caesura (‘then stopped.’) arrests the rhythm at the exact moment self-deception collapses; immediately afterwards, the fluid enjambment pulls the reader downward across three lines, syntactically enacting the silent, creeping infiltration of the rain.",
      strategy: "Link rhythmic/syntactic movement directly to what the image enacts",
    },
    {
      id: "exam-mcq-q11",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Analyse",
      topicId: "4-poetry-and-drama",
      guideRef: "poetic-imagery-sound-voice",
      question:
        "Read this original couplet:\n\n> *Salt-stiffened sails snap sharply on the spar;*\n> *the harbour hisses softly round the pier.*\n\nWhich analysis of **acoustic texture** avoids empty technique-spotting and demonstrates Band 5 Criterion B craft?",
      options: [
        "The poet puts lots of S and P sounds into both lines so that the poem flows nicely and sounds memorable when read aloud.",
        "Harsh plosives in the first line enact violent maritime strain, contrasting with hushed sibilance in the second that evokes eerie, insidious calm.",
        "Alliteration proves the speaker enjoys sailing because repeated consonants always create a cheerful and rhythmic atmosphere in lyric verse.",
        "The couplet uses sibilance strictly to imitate a snake, showing that the harbour represents biblical temptation rather than coastal weather.",
      ],
      answerIndex: 1,
      hints: [
        "Compare the sharp consonant burst of ‘snap sharply on the spar’ with the drawn-out hush of ‘hisses softly’.",
        "Never claim a sound device ‘flows nicely’—explain the specific auditory contrast and mood it constructs.",
      ],
      explanation:
        "Effective acoustic analysis distinguishes contrasting sound qualities: percussive plosives (‘snap’, ‘spar’) mimic taut, violent tension, whereas prolonged sibilance (‘hisses softly’) shifts the soundscape into stealthy, hushed unease.",
      strategy: "Contrast distinct sound textures and connect them to mood or tension",
    },
    {
      id: "exam-mcq-q12",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Analyse",
      topicId: "4-poetry-and-drama",
      guideRef: "dramatic-conventions-staging",
      question:
        "Read this original stage direction:\n\n> *[NORA stands upstage by the unlit fireplace, turning her wedding ring slowly. ARTHUR remains seated downstage centre beneath the bright chandelier, unfolding the morning newspaper without glancing up.]*\n\nIn an IB Literature drama analysis, how should these **theatrical conventions** be interpreted?",
      options: [
        "As active visual meaning: proxemic separation, contrasting light, and an absorbing prop dramatise emotional alienation and asymmetric authority.",
        "As optional practical advice for stagehands that should be excluded from literary analysis because only spoken dialogue carries meaning.",
        "As straightforward realism proving that the chandelier is brighter than the fireplace because of nineteenth-century lighting technology.",
        "As an example of narrative omniscience where the playwright directly tells the audience which character holds the moral high ground.",
      ],
      answerIndex: 0,
      hints: [
        "Drama is written to be seen and heard in three-dimensional space, not read like flat prose.",
        "Look at who occupies downstage light versus upstage shadow, and what each character’s hands are doing.",
      ],
      explanation:
        "Playwrights construct meaning visually before a word is spoken: downstage centrality and the newspaper shield establish Arthur’s complacent dominance, while upstage shadow and the nervously turned ring externalise Nora’s marginalised restlessness.",
      strategy: "Read stage directions as primary visual language (light, space, props)",
    },
    {
      id: "exam-mcq-q13",
      kind: "mcq",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      topicId: "4-poetry-and-drama",
      guideRef: "subtext-dialogue-tragedy-comedy",
      question:
        "Read this original dramatic exchange:\n\n> **ELENA:** *You forgot the milk.*\n> **MARCUS:** *The shop was shut.*\n> **ELENA:** *It shuts at nine.*\n> **MARCUS:** *My train was late.*\n> **ELENA:** *Your coat is dry.* *(Silence. Rain hammers the skylight.)*\n\nHow do **stichomythia** and **subtext** operate in this moment?",
      options: [
        "Clipped, alternating lines escalate prosecutorial tension while mundane remarks about milk and weather conceal an unspoken accusation of betrayal.",
        "Rapid dialogue creates comic banter that reassures the audience both characters enjoy playful domestic teasing despite the storm.",
        "The exchange functions as a classical soliloquy because each speaker delivers a private interior confession directly to the audience.",
        "Because neither character mentions dishonesty explicitly, the scene contains dramatic irony rather than interpersonal conflict.",
      ],
      answerIndex: 0,
      hints: [
        "Notice how short, balanced single-line retorts mimic fencing thrusts.",
        "Look at the final line (‘Your coat is dry.’) juxtaposed with the rain hammering the skylight.",
      ],
      explanation:
        "Stichomythic brevity turns routine domestic dialogue into verbal combat; Elena’s closing observation (‘Your coat is dry’) shatters Marcus’s alibi purely through subtext and stage sound, exposing deception without naming it aloud.",
      strategy: "Probe what characters refuse to say aloud beneath literal words",
    },
    {
      id: "exam-mcq-q14",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      topicId: "5-prose-fiction-nonfiction",
      guideRef: "narrative-perspective-focalization",
      question:
        "Read this original prose extract:\n\n> *Clara smoothed her apron and glanced across the parlour. Really, could a cousin arrive three hours late and still expect fresh scones? One simply had to draw a line somewhere, even for family.*\n\nWhich narrative technique is operating in the second and third sentences?",
      options: [
        "Direct speech, because the character’s spoken irritation is reproduced verbatim inside third-person dialogue tags.",
        "Omniscient editorial intrusion, because the external narrator scolds the cousin directly from an objective moral distance.",
        "Second-person apostrophe, because the impersonal pronoun ‘One’ addresses the reader directly as a character inside the parlour.",
        "Free indirect discourse, because third-person past-tense narration blends seamlessly with Clara’s private idiom and indignant cadence.",
      ],
      answerIndex: 3,
      hints: [
        "Check the grammar: past tense (‘could’, ‘had’) and no quotation marks—yet whose irritated voice says ‘Really’ and ‘One simply had to’?",
        "This hallmark prose device shrinks psychic distance between narrator and focalised character.",
      ],
      explanation:
        "Free indirect discourse retains third-person grammatical framing and past tense while absorbing the character’s colloquial exclamations (‘Really’), rhetorical question, and self-justifying bias—simultaneously granting intimacy and enabling subtle irony.",
      strategy: "Check who speaks (narrator grammar) versus who thinks/feels (focaliser)",
    },
    {
      id: "exam-mcq-q15",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      topicId: "5-prose-fiction-nonfiction",
      guideRef: "prose-time-setting-symbolism",
      question:
        "A novel opens in the middle of a tense courtroom verdict, inserts an extended **analepsis** detailing the defendant’s impoverished childhood, and then skips five prison years in a single sentence (**ellipsis**). What is the primary structural effect of manipulating narrative time this way?",
      options: [
        "It confuses the chronological order unnecessarily so that readers struggle to verify the historical year of the trial.",
        "It replaces characterisation with plot speed by compressing the childhood backstory into the shortest section of the chapter.",
        "It directs reader sympathy and thematic emphasis, slowing pace to humanise motive while using compression to evoke institutional erasure.",
        "It guarantees objective journalistic neutrality because moving backward and forward in time removes all narrative focalization.",
      ],
      answerIndex: 2,
      hints: [
        "Ask why a writer lingers on one period of time (scene/analepsis) while skimming over five years in one sentence (ellipsis).",
        "Narrative pacing controls what feels emotionally weightiest to the reader.",
      ],
      explanation:
        "Temporal structuring shapes ethics and empathy: starting *in medias res* hooks suspense, analepsis reframes culpability by restoring social context, and an abrupt five-year ellipsis can enact how carceral time erases individual life into blank duration.",
      strategy: "Ask why the narrator stretches one moment and compresses another",
    },
    {
      id: "exam-mcq-q16",
      kind: "mcq",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      topicId: "5-prose-fiction-nonfiction",
      guideRef: "rhetoric-persona-truth-claims",
      question:
        "Read this original memoir extract:\n\n> *At nine I thought the iron gate was tall enough to hold back the sea. Now I know it was only rusted tin—yet whenever I hear hinges groan, I am nine again, small enough to believe a fence is a fortress.*\n\nHow does the writer craft **persona and truth-claims** in this literary non-fiction passage?",
      options: [
        "By abandoning factual honesty altogether, proving that literary memoirs belong inside the genre of fictional fantasy rather than non-fiction.",
        "By staging a dialogue between the naive experiencing self and the reflective retrospective self to show how emotional truth outlives factual correction.",
        "By relying on formal logos and statistical proof to correct the child’s architectural misconception about coastal barriers.",
        "By employing heavy hypotactic jargon to distance the adult narrator completely from any sensory attachment to childhood.",
      ],
      answerIndex: 1,
      hints: [
        "Notice the temporal pivot from ‘At nine I thought’ to ‘Now I know’ and back to ‘I am nine again’.",
        "Literary non-fiction often explores the gap between literal fact and lived psychological memory.",
      ],
      explanation:
        "Memoirists construct a dual persona: the retrospective self corrects the experiencing child’s literal error (‘only rusted tin’), yet the final sensory trigger acknowledges that subjective emotional memory retains its own enduring psychological truth.",
      strategy: "Track the interplay between experiencing self and retrospective self",
    },
    {
      id: "exam-mcq-q17",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Apply",
      topicId: "6-concepts-global-issues",
      guideRef: "seven-central-concepts",
      question:
        "Which thesis statement uses one of the **7 Central IB Literature Concepts** (*Representation*, *Transformation*, *Perspective*, *Identity*, *Culture*, *Creativity*, *Communication*) most effectively as an active analytical lens?",
      options: [
        "Transformation is a very important IB concept in this novel because the main character grows older and moves to a new city.",
        "This essay discusses Identity, Culture, Communication, and Perspective to prove that all seven concepts appear somewhere in the text.",
        "Through fragmented epistolary form, the writer interrogates how trauma resists coherent representation, turning silence into an unstable witness.",
        "Representation means showing things in a book, and the author represents nature effectively by describing trees and storms clearly.",
      ],
      answerIndex: 2,
      hints: [
        "A central concept works best as an arguable critical inquiry tied to authorial craft, not as a vague buzzword.",
        "Focus deeply on one precise conceptual tension rather than name-dropping several concepts superficially.",
      ],
      explanation:
        "High-band conceptual writing turns an abstract concept into a sharp inquiry linked to form: interrogating how fragmented epistolary structure exposes the limits of *representation* gives the argument genuine critical traction.",
      strategy: "Turn one concept into a sharp ‘how/why’ question anchored in craft",
    },
    {
      id: "exam-mcq-q18",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Evaluate",
      topicId: "6-concepts-global-issues",
      guideRef: "narrowing-global-issues",
      question:
        "An Individual Oral (IO) Global Issue must satisfy **three mandatory IB properties**: wide-scale significance, transnational reach, and impact felt in everyday local contexts. Which formulation passes all three tests with Band 5 precision?",
      options: [
        "Power and gender inequality throughout human history across societies around the world.",
        "How one minor character in Chapter Four quarrels with his brother about inheriting a brass pocket watch.",
        "The specific 1919 parliamentary zoning legislation passed by one regional town council in northern England.",
        "How inherited domestic rituals obscure intergenerational grief and silence dissent within displaced migrant families.",
      ],
      answerIndex: 3,
      hints: [
        "Eliminate options that are too broad/vague, too plot-specific to one character, or too narrowly tied to a single local statute.",
        "Look for a specific human mechanism that operates transnationally yet manifests in intimate daily life.",
      ],
      explanation:
        "‘How inherited domestic rituals obscure intergenerational grief and silence dissent within displaced migrant families’ narrows a broad field of inquiry into a precise mechanism with wide-scale, transnational significance that is concretely lived inside everyday households.",
      strategy: "Broad Field → specific mechanism/tension → everyday local impact",
    },
    {
      id: "exam-mcq-q19",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      topicId: "6-concepts-global-issues",
      guideRef: "pairing-english-translated-works",
      question:
        "Under the official IB English A: Literature (First Assessment 2021) rules, which pairing and structure satisfies the **Individual Oral (IA)** assessment requirements?",
      options: [
        "One work originally written in English and one work in translation, using extracts of up to 40 lines each balanced with whole-work analysis across a 10-minute presentation plus 5-minute discussion.",
        "Two works originally written in English from the same century, using 80-line extracts discussed exclusively at sentence level for 15 unbroken minutes.",
        "One literary work and one non-literary media advertisement, analysed for 10 minutes with a 1,500-word written script read aloud verbatim.",
        "Two works in translation from the same author, paired with your Paper 2 texts so you can recycle identical quotations across both assessments.",
      ],
      answerIndex: 0,
      hints: [
        "Remember: English A: Literature uses TWO literary works (one originally in English, one in translation)—non-literary media belongs to Language & Literature.",
        "Check the extract ceiling (≤40 lines), timing (10 min talk + 5 min Q&A), and strict non-overlap rule.",
      ],
      explanation:
        "IB English A: Literature requires one original English literary work and one literary work in translation (each extract ≤40 lines), evenly balancing micro extract analysis with macro whole-work links across a 10-minute presentation followed by 5 minutes of teacher questioning.",
      strategy: "1 English + 1 Translated · ≤40 lines each · 5m/5m balance · No Paper 2 overlap",
    },
    {
      id: "exam-mcq-q20",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Evaluate",
      topicId: "7-paper1-paper2-mastery",
      guideRef: "paper1-guiding-question-planning",
      question:
        "During the 15-minute planning stage of **Paper 1 (Guided Literary Analysis)**, why do senior IB examiners warn against organising your essay chronologically (‘In stanza 1… Next in stanza 2… Finally in stanza 3…’)?",
      options: [
        "Because chronological paragraphs are forbidden to quote from the middle of a poem and therefore lose Criterion D accuracy marks.",
        "Because stanza-by-stanza narration invites plot paraphrase and fragments craft patterns, capping Criterion C organisation in the middle bands.",
        "Because examiners only read the first and last paragraphs of Paper 1 essays and skip sequential summaries of middle stanzas.",
        "Because grouping ideas conceptually means you never need to discuss structural shifts or progression from opening to ending.",
      ],
      answerIndex: 1,
      hints: [
        "Think about what happens to a recurring motif or tonal shift when you chop your analysis mechanically by stanza.",
        "Conceptual organisation STILL tracks structural development—it simply groups evidence under arguable ideas.",
      ],
      explanation:
        "Chronological walkthroughs trap candidates in line-by-line paraphrase and scatter recurring motifs across disconnected paragraphs. Organising into 3–4 conceptual movements lets you synthesise patterns across the whole extract while tracing structural evolution purposefully.",
      strategy: "Organise Paper 1 by 3–4 conceptual arguments, not line order",
    },
    {
      id: "exam-mcq-q21",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      topicId: "7-paper1-paper2-mastery",
      guideRef: "paper1-hl-two-passages",
      question:
        "Which statement accurately describes the official **HL Paper 1** examination structure (First Assessment 2021) and its most disciplined time-management strategy?",
      options: [
        "HL candidates choose ONE of two unseen passages in 1 hour 15 minutes for 20 marks, worth 25% of the final HL Literature grade.",
        "HL candidates write a single comparative essay combining both unseen passages in 2 hours for 30 marks, worth 35% of the final grade.",
        "HL candidates spend 95 minutes perfecting their strongest unseen essay and write a brief bullet-point outline for the second passage.",
        "HL candidates write TWO separate guided analyses on BOTH unseen passages from different forms in 2 hours 15 minutes (40 marks, 35%), enforcing a hard ~65-minute stop per essay.",
      ],
      answerIndex: 3,
      hints: [
        "Check the key HL vs SL difference on Paper 1: SL writes on 1 passage (75m, 20 marks), whereas HL writes on BOTH passages separately.",
        "Divide 135 minutes cleanly across two equally weighted 20-mark essays.",
      ],
      explanation:
        "HL Paper 1 lasts 2 hours 15 minutes (135 minutes), carries 40 marks (2 × 20 marks, 35% of the HL grade), and requires two separate essays—one on each unseen passage from two distinct literary forms. Enforcing a strict ~65-minute ceiling on Essay 1 protects Essay 2 from Band-dropping fatigue.",
      strategy: "HL Paper 1: 65m Essay 1 + 65m Essay 2 + 5m proofread = 135m",
    },
    {
      id: "exam-mcq-q22",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      topicId: "7-paper1-paper2-mastery",
      guideRef: "rubric-mastery-crit-a-d",
      question:
        "How do the IB assessment descriptors precisely distinguish **Criterion A** from **Criterion B** on Paper 1 and Paper 2?",
      options: [
        "Criterion A assesses spelling, punctuation, and sentence elegance, whereas Criterion B measures paragraph transitions and thesis placement.",
        "Criterion A evaluates knowledge, understanding, and insightful interpretation of textual implications, whereas Criterion B evaluates how authorial choices shape meaning.",
        "Criterion A rewards memorised biographical facts about the author, whereas Criterion B counts the total number of technical terms labelled.",
        "Criterion A applies solely to the essay’s introduction and conclusion, whereas Criterion B grades only the quoted evidence in body paragraphs.",
      ],
      answerIndex: 1,
      hints: [
        "Think of the four criteria cleanly: A = What/Why (understanding & interpretation), B = How (craft & authorial choices), C = Architecture, D = Language.",
        "Both Criterion A and Criterion B require insightful argument rather than mechanical listing.",
      ],
      explanation:
        "Criterion A rewards perceptive understanding and persuasive interpretation of subtle implications (and, on Paper 2, comparison across works); Criterion B specifically evaluates *how* textual, stylistic, and structural choices construct meaning and effect.",
      strategy: "Crit A = perceptive interpretation · Crit B = authorial craft → effect",
    },
    {
      id: "exam-mcq-q23",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      topicId: "8-hl-essay-criticism",
      guideRef: "hl-essay-line-of-inquiry",
      question:
        "Which requirement accurately governs the **IB English A: Literature HL Essay** (First Assessment 2021)?",
      options: [
        "A 1,200–1,500 word formal literary inquiry on ONE studied work (20 marks, 20% of HL grade) that must NOT be reused in the Individual Oral or Paper 2.",
        "A 2,500–3,000 word comparative research thesis on TWO studied works (30 marks, 25% of HL grade) that may freely overlap with Paper 2 texts.",
        "A 1,200–1,500 word creative pastiche imitating a studied author’s style, accompanied by a 300-word personal rationale on the same work used in the IO.",
        "A 1,000-word timed unseen commentary completed in exam conditions on a single passage chosen from the HL learner’s translated coursework.",
      ],
      answerIndex: 0,
      hints: [
        "Recall the official HL Essay word count, number of works analysed, percentage weight, and non-overlap rule.",
        "The HL Essay is an externally assessed formal literary essay—not a comparative paper or creative pastiche.",
      ],
      explanation:
        "The HL Essay is an externally assessed 1,200–1,500 word formal literary inquiry into ONE studied work (or cohesive collection of shorter works by one author), worth 20 marks (20% of the HL grade), and strictly protected by the non-overlap rule with the IO and Paper 2.",
      strategy: "1 work · 1,200–1,500 words · 20 marks (20%) · Strict non-overlap",
    },
    {
      id: "exam-mcq-q24",
      kind: "mcq",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      topicId: "8-hl-essay-criticism",
      guideRef: "critical-theoretical-lenses",
      question:
        "An HL student wants to draw on a **postcolonial or feminist critical perspective** in their HL Essay. Which practice best elevates Criteria A and B without undermining Criterion D?",
      options: [
        "Cramming dense theoretical terminology into every topic sentence so that the essay reads like a philosophy textbook rather than literary criticism.",
        "Treating the chosen critical theory as an inflexible moral checklist to judge whether the author’s characters behave virtuously.",
        "Using the perspective selectively as an illuminating set of analytical questions to probe how specific narrative or formal choices construct power.",
        "Replacing close analysis of the primary literary work with extended summaries of three secondary academic theorists’ biographies.",
      ],
      answerIndex: 2,
      hints: [
        "In IB English A: Literature, secondary theory is optional and always subordinate to primary textual analysis.",
        "Ask how a lens sharpens your gaze on authorial craft rather than drowning the text in jargon.",
      ],
      explanation:
        "Critical lenses work best in the HL Essay when deployed with restraint as probing analytical questions—illuminating how focalization, space, or silence constructs power—while keeping the primary literary text and clear Criterion D prose firmly at the centre.",
      strategy: "Keep the literary text primary; use theory as a lens, never a crutch",
    },
    {
      id: "exam-mcq-q25",
      kind: "mcq",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      topicId: "8-hl-essay-criticism",
      guideRef: "hl-essay-drafting-rubric",
      question:
        "During final redrafting of an HL Essay, a candidate discovers their draft stands at **1,680 words** and reads smoothly. Why must they edit ruthlessly down into the **1,200–1,500 word** range before submission?",
      options: [
        "Because essays longer than 1,500 words automatically lose marks only on Criterion D spelling while retaining full Criterion A credit for the conclusion.",
        "Because IB examiners average the word count with the Individual Oral transcript, making an extra 180 words harmless if the thesis is clear.",
        "Because trimming 180 words requires deleting all embedded quotations, which examiners prefer to see replaced by general thematic claims.",
        "Because IB examiners stop reading beyond 1,500 words—severing the conclusion and damaging Criteria A and C—and tight pruning sharpens Criterion D concision.",
      ],
      answerIndex: 3,
      hints: [
        "What is the official IBO examiner policy once an HL Essay crosses the 1,500-word ceiling?",
        "Think about what happens to your closing synthesis and Criterion C organisation if the last 180 words are unread.",
      ],
      explanation:
        "IB examiners are instructed not to read beyond 1,500 words on the HL Essay, meaning an over-length draft forfeits its conclusion and weakens Criteria A and C; disciplined pruning simultaneously restores structural closure and elevates Criterion D concision.",
      strategy: "Target ~1,420–1,480 words: 150w intro · 1,150w body · 150w synthesis",
    },
  ],
};
