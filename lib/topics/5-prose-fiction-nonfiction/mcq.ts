import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "5-prose-fiction-nonfiction-m1",
    title: "MCQ Paper 1 — Prose Fiction: Perspective, Focalisation & Temporal Craft",
    level: "SL",
    questions: [
      {
        id: "5-prose-fiction-nonfiction-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        guideRef: "narrative-perspective-focalization",
        question:
          "Read this unseen prose extract:\n\n> *Nadia set the telegram beside the salt cellar. Really, could her brother not have waited until after Sunday lunch to announce he was selling the orchard? She smoothed the tablecloth twice.*\n\nWhich narrative technique operates in the second sentence?",
        options: [
          "External camera-eye focalisation",
          "Direct quoted interior monologue",
          "Free indirect discourse",
          "Omniscient zero focalisation",
        ],
        answerIndex: 2,
        hints: [
          "Check the pronouns and tense in the second sentence: 'her brother', 'could... not have waited'.",
          "Notice that there are no quotation marks and no reporting tag like 'she thought', yet Nadia's exasperated voice ('Really, could...') dominates.",
        ],
        explanation:
          "Free indirect discourse blends third-person past-tense grammar ('her brother', 'could') with a character's unquoted conversational idiom ('Really') and rhetorical question, fusing narrator syntax with character consciousness.",
      },
      {
        id: "5-prose-fiction-nonfiction-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        guideRef: "narrative-perspective-focalization",
        question:
          "In Gérard Genette's narratology, what is the precise distinction between narrative **voice** and **focalisation**?",
        options: [
          "Voice identifies who speaks grammatically, whereas focalisation identifies whose perception filters the events",
          "Voice refers exclusively to spoken character dialogue, whereas focalisation refers to descriptive paragraphs",
          "Voice describes the historical author's biography, whereas focalisation describes the reader's interpretation",
          "Voice determines whether events are chronological, whereas focalisation determines the speed of pacing",
        ],
        answerIndex: 0,
        hints: [
          "Think of the two core questions Genette separates: 'Who speaks?' versus 'Who sees?'",
          "A third-person grammatical narrator can still perceive events strictly through one character's mind.",
        ],
        explanation:
          "Genette distinguishes voice (the grammatical speaking instance: first-, second-, or third-person narration) from focalisation (the perceptual angle controlling how much information enters the narrative).",
      },
      {
        id: "5-prose-fiction-nonfiction-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "narrative-perspective-focalization",
        question:
          "Read this unseen extract:\n\n> *Two men entered the station café at six. The taller one ordered black coffee and laid a grey folder flat beside his saucer. Neither spoke while the 6:15 express rattled the windowpanes. When the bill arrived, the shorter man folded a banknote into thirds and left without touching his cup.*\n\nWhich type of focalisation governs this passage?",
        options: [
          "Fixed internal focalisation through the taller traveller",
          "Zero focalisation with sweeping omniscient commentary",
          "Multiple internal focalisation alternating between both men",
          "External focalisation limited strictly to observable surfaces",
        ],
        answerIndex: 3,
        hints: [
          "Does the narrator reveal any unspoken emotion, memory, or motive inside either man's mind?",
          "Notice how the narration behaves like a silent film camera recording only physical gestures and silence.",
        ],
        explanation:
          "External focalisation withholds all interior thoughts and motives, reporting only externally observable actions, objects, and silences to generate enigma and cool restraint.",
      },
      {
        id: "5-prose-fiction-nonfiction-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "narrative-perspective-focalization",
        question:
          "Why does a subtle shift from Level 4 (free indirect discourse) back to Level 1 (panoramic third-person) on John Gardner's psychic distance scale often create powerful pathos?",
        options: [
          "It proves the protagonist has become completely objective and emotionally healed",
          "It abruptly pulls the reader out of intimate consciousness, leaving the character visibly small and isolated",
          "It signals that the story has permanently switched from prose fiction into historical non-fiction",
          "It eliminates all figurative imagery so the narrator can summarise the remaining plot efficiently",
        ],
        answerIndex: 1,
        hints: [
          "Visualise a cinema camera pulling swiftly backward from an extreme close-up to a wide aerial shot.",
          "Ask how that sudden distance changes our emotional posture toward a vulnerable character.",
        ],
        explanation:
          "Zooming out rapidly from intimate interiority to distant panoramic observation creates a chilling sense of detachment or insignificance, framing the character's private pain against a vast, indifferent world.",
      },
      {
        id: "5-prose-fiction-nonfiction-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "narrative-perspective-focalization",
        question:
          "Read this unseen first-person extract:\n\n> *I assure you I took the bronze astrolabe purely to prevent clumsy museum interns from scratching its lacquer. That Dr Lin locked the archive wing the next morning merely demonstrates how prone academics are to melodrama.*\n\nWhich combination of textual cues most clearly signals narrative unreliability here?",
        options: [
          "Defensive over-insistence, euphemistic self-justification, and dismissive reframing of another's alarm",
          "Frequent shifts into second-person plural pronouns combined with archaic nautical vocabulary",
          "Explicit admission of theft paired with humble remorse for disrupting the university archive",
          "External camera-eye description of the archive wing without any first-person commentary",
        ],
        answerIndex: 0,
        hints: [
          "Compare what the narrator physically did (removed an artefact) with how they spin Dr Lin's response.",
          "Notice phrases like 'I assure you', 'purely to prevent', and 'prone... to melodrama'.",
        ],
        explanation:
          "Unreliability emerges through the fissure between event and spin: the narrator opens defensively ('I assure you'), rationalises theft as conscientious care, and belittles Dr Lin's security response as mere 'melodrama'.",
      },
      {
        id: "5-prose-fiction-nonfiction-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        guideRef: "prose-time-setting-symbolism",
        question:
          "A novel opens in the middle of a heated courtroom cross-examination without introducing the defendant's childhood or the crime's background until Chapter Three. Which structural opening technique is used?",
        options: [
          "A concentric frame narrative",
          "A proleptic epilogue",
          "An opening in medias res",
          "A descriptive pause",
        ],
        answerIndex: 2,
        hints: [
          "The Latin phrase literally means 'into the middle of things'.",
          "Notice that exposition is withheld so the reader enters directly mid-crisis.",
        ],
        explanation:
          "Opening in medias res drops the reader straight into active conflict, generating immediacy and compelling active reconstruction of preceding events when later analepses arrive.",
      },
      {
        id: "5-prose-fiction-nonfiction-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "prose-time-setting-symbolism",
        question:
          "In a short story, Paragraph 4 closes with a character lifting a suitcase onto a ferry ramp; Paragraph 5 begins, *'Eleven winters later, the pier pilings were green with barnacles.'* What pacing device occurs across the paragraph break, and what effect does it commonly create?",
        options: [
          "Descriptive pause — freezing clock time to dwell on sensory textures of winter",
          "Temporal ellipsis — erasing eleven years of unspoken estrangement or unvoiced grief",
          "Dramatic scene — matching discourse time directly to real-time ferry boarding",
          "Proleptic dialogue — interrupting the ferry departure with spoken courtroom testimony",
        ],
        answerIndex: 1,
        hints: [
          "How much story time elapses versus how many lines of text are spent narrating those eleven years?",
          "Zero lines for eleven years signals a deliberate silence or leap in discourse time.",
        ],
        explanation:
          "A temporal ellipsis omits a span of story time entirely (zero discourse space for eleven story years), forcing the reader to infer years of silent absence, rupture, or endurance through the weathered pier image.",
      },
      {
        id: "5-prose-fiction-nonfiction-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "prose-time-setting-symbolism",
        question:
          "Read this unseen extract:\n\n> *As Tariq signed the foreclosure deed, he could not yet know that the very clerk handing him the fountain pen would buy his vineyard at auction two summers hence.*\n\nWhich temporal device is deployed here, and how does it affect suspense?",
        options: [
          "Analepsis — immersing the reader in Tariq's nostalgic childhood harvests",
          "Ellipsis — skipping directly over the auction to avoid emotional melodrama",
          "Frame narration — distancing the transaction through an unnamed archivist's diary",
          "Prolepsis — foregrounding dramatic irony so tension shifts from what happens to how betrayal unfolds",
        ],
        answerIndex: 3,
        hints: [
          "Look at the time direction of 'could not yet know... two summers hence'.",
          "When the narrator grants the reader future knowledge withheld from the character, what kind of irony arises?",
        ],
        explanation:
          "Prolepsis reaches forward into the future ('two summers hence'), creating dramatic irony that shifts suspense away from plot surprise toward the painful mechanics of deception and vulnerability.",
      },
      {
        id: "5-prose-fiction-nonfiction-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "prose-time-setting-symbolism",
        question:
          "In a Gothic or modernist novel structured as a **frame narrative** (such as Mary Shelley's *Frankenstein* `[Example text — not a set text]`), what is the primary analytical value of the outer framing layer?",
        options: [
          "It guarantees that the inner narrative is historically verified and free of bias",
          "It simplifies the chronology so readers never encounter flashbacks or gaps",
          "It foregrounds mediation, reliability, and how testimony mutates across listeners",
          "It removes the need for characterisation inside the embedded central story",
        ],
        answerIndex: 2,
        hints: [
          "Think about what happens when Story B reaches you only because Listener A heard it and wrote it down.",
          "Does adding layers of retelling increase certainty or complicate truth-claims?",
        ],
        explanation:
          "A frame narrative draws attention to the act of storytelling itself — filtering events through multiple narrators and inviting readers to interrogate memory, hearsay, audience bias, and narrative authority.",
      },
      {
        id: "5-prose-fiction-nonfiction-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "prose-time-setting-symbolism",
        question:
          "Read this unseen extract:\n\n> *Outside the maternity ward, lemon trees blazed in spotless morning light and sparrows bickered cheerfully over crumbs, while inside Room 4B Mara folded the unworn knit booties back into tissue paper.*\n\nHow does the setting operate in relation to Mara's grief?",
        options: [
          "Through ironic environmental contrast, where bright indifferent nature sharpens private bereavement",
          "Through classic pathetic fallacy, where gloomy weather directly mirrors Mara's mourning",
          "Through utopian pastoral symbolism, promising that Mara will soon recover completely",
          "Through externalised Gothic horror, personifying the sparrows as omens of malice",
        ],
        answerIndex: 0,
        hints: [
          "Compare the mood outside the window ('spotless morning light', 'cheerfully') with the quiet tragedy inside Room 4B.",
          "Does the landscape sympathise with Mara's sorrow, or clash painfully against it?",
        ],
        explanation:
          "Rather than pathetic fallacy (weather mirroring mood), the passage uses ironic environmental contrast: the vibrant, indifferent morning amplifies Mara's isolation and quiet devastation.",
      },
      {
        id: "5-prose-fiction-nonfiction-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "prose-time-setting-symbolism",
        question:
          "What distinguishes Band 5 IB analysis of a prose **symbol** from a lower-band reading?",
        options: [
          "Listing every single occurrence of the object in the chapter without quoting context",
          "Tracing how the symbol's connotations shift, accumulate tension, or invert ironically across the text",
          "Assigning one universal dictionary equation such as 'water always represents spiritual rebirth'",
          "Treating the object purely as a realistic prop with zero conceptual significance",
        ],
        answerIndex: 1,
        hints: [
          "Think about how a domestic object (like a wedding ring or brass compass) can mean security on page 1 and entrapment on page 100.",
          "IB Criterion B rewards dynamic, context-sensitive interpretation rather than rigid decoding.",
        ],
        explanation:
          "Top-band symbol analysis avoids static one-word equations and instead examines how an image evolves under narrative pressure, accruing layered or ironic meanings.",
      },
      {
        id: "5-prose-fiction-nonfiction-m1-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "narrative-perspective-focalization",
        question:
          "Read this unseen extract:\n\n> *You tell yourself the cramped studio smells of cedar rather than damp plaster. You arrange the three chipped mugs handle-to-handle so any unexpected caller will admire your discipline.*\n\nWhat is the most precise analytical effect of sustained **second-person narration** (*You*) here?",
        options: [
          "It gives practical interior-design instructions directly to readers renovating small flats",
          "It creates panoramic omniscient authority across an entire apartment block",
          "It stages painful self-estrangement while implicating the reader inside quiet self-deception",
          "It eliminates internal focalisation by restricting prose solely to external camera observation",
        ],
        answerIndex: 2,
        hints: [
          "Notice the reflexive self-address 'You tell yourself...'. Who is really speaking to whom?",
          "Consider both the speaker's distance from their own pride and how 'you' pulls the reader uncomfortably close.",
        ],
        explanation:
          "Second-person narration ('You tell yourself') simultaneously dramatises a protagonist splitting away from their own vulnerability and implicates the reader inside the fragile performance of pride.",
      },
      {
        id: "5-prose-fiction-nonfiction-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "prose-time-setting-symbolism",
        question:
          "A short story spends two crisp lines summarising five years of quiet marriage, then devotes three full pages to a ten-minute argument over a cracked porcelain bowl. What narratological principle explains this structural choice?",
        options: [
          "The author lost control of chronology and accidentally inserted a frame narrative",
          "Discourse time must always mirror clock duration proportionally to maintain realism",
          "Compression in the opening proves the marriage had no psychological relevance",
          "Contrasting rapid summary against a dilated scene concentrates thematic rupture inside one domestic catalyst",
        ],
        answerIndex: 3,
        hints: [
          "Compare Genette's duration modes: summary (5 years in 2 lines) vs scene/stretch (10 minutes in 3 pages).",
          "Why would a writer pour almost the entire word budget into a single trivial object breaking?",
        ],
        explanation:
          "Juxtaposing compressed summary with an expansive real-time scene signals that years of unspoken strain have crystallised inside one seemingly minor domestic fracture — turning the bowl into a symbolic flashpoint.",
      },
      {
        id: "5-prose-fiction-nonfiction-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "prose-time-setting-symbolism",
        question:
          "Two sisters in a novel inherit an empty tailoring shop: Mei meticulously repairs every moth-eaten seam while Suki strips the floorboards to paint a mural across the raw pine. Analytically, how do the sisters function structurally?",
        options: [
          "As character foils whose contrasting acts of preservation and reinvention dramatise competing relationships to heritage",
          "As interchangeable stock figures demonstrating that siblings always share identical class values",
          "As unreliable frame narrators competing to prove who remembers their parents accurately",
          "As allegorical personifications of pathetic fallacy reflecting seasonal weather changes",
        ],
        answerIndex: 0,
        hints: [
          "Look at the structured contrast between repairing old seams and painting raw wood.",
          "What term describes two contrasted figures whose opposing choices illuminate a central conceptual tension?",
        ],
        explanation:
          "Mei and Suki operate as foils: their sharply contrasted tactile actions embody a conceptual tension between dutiful conservation of the past and disruptive creative renewal.",
      },
      {
        id: "5-prose-fiction-nonfiction-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "narrative-perspective-focalization",
        question:
          "Read this unseen sentence:\n\n> *Tomorrow was the hearing, and if the magistrates possessed an ounce of sense — which of course they did not — they would throw the petition straight into the grate.*\n\nWhich textual marker is the sharpest linguistic proof of **free indirect discourse** in this sentence?",
        options: [
          "The formal courtroom noun 'magistrates' paired with the collective pronoun 'they'",
          "The proximal future deictic 'Tomorrow' fused with past-tense 'was' alongside the character's parenthetical scoff",
          "The absence of any emotional attitude or evaluative idiom toward the legal system",
          "The use of first-person present-tense verbs establishing live interior monologue",
        ],
        answerIndex: 1,
        hints: [
          "Look closely at the very first two words: 'Tomorrow was'. Normally in standard past-tense reporting, we would write 'The following day was'.",
          "Pair that deictic clash with the sarcastic parenthetical aside 'which of course they did not'.",
        ],
        explanation:
          "Pairing a character-anchored temporal deictic ('Tomorrow') with narrative past tense ('was'), alongside the caustic evaluative aside ('which of course they did not'), is a textbook hallmark of free indirect discourse.",
      },
    ],
  },

  {
    id: "5-prose-fiction-nonfiction-m2",
    title: "MCQ Paper 2 — Literary Non-Fiction: Sub-Genres, Persona & Rhetoric",
    level: "SL",
    questions: [
      {
        id: "5-prose-fiction-nonfiction-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        guideRef: "literary-nonfiction-genres",
        question:
          "How does a **memoir** typically differ from a traditional **autobiography** in IB Literary Non-Fiction?",
        options: [
          "A memoir invents entirely fictional protagonists, whereas an autobiography uses real names",
          "A memoir focuses selectively on a specific theme, period, or relationship, whereas autobiography traces a comprehensive chronological life arc",
          "A memoir forbids figurative language and imagery, whereas an autobiography relies on verse metre",
          "A memoir must be written in third-person omniscient voice, whereas an autobiography uses second-person address",
        ],
        answerIndex: 1,
        hints: [
          "Think about scope: whole life from birth to retirement versus one defining summer, grief, or family bond.",
          "Memoir also tends to foreground the fragile, selective act of remembering itself.",
        ],
        explanation:
          "While autobiography aims for broad chronological coverage of a life, memoir selects a tight thematic thread, period, or relationship and often meditates openly on how memory reshapes experience.",
      },
      {
        id: "5-prose-fiction-nonfiction-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        guideRef: "rhetoric-persona-truth-claims",
        question:
          "Read this unseen sentence from a public address:\n\n> *We measured the coastline in hectares; we forgot to measure it in funerals.*\n\nWhich rhetorical device defines the balanced structure of this sentence?",
        options: [
          "Hyperbolic pathetic fallacy",
          "Nesting hypotactic subordination",
          "Chronological temporal ellipsis",
          "Parallel syntactic antithesis",
        ],
        answerIndex: 3,
        hints: [
          "Notice the mirrored structure across the semicolon: 'measured... in hectares' vs 'forgot to measure... in funerals'.",
          "Which scheme places opposing concepts inside balanced parallel grammar?",
        ],
        explanation:
          "Antithesis juxtaposes opposing terms ('hectares' of bureaucratic land measurement versus human 'funerals') inside balanced parallel clauses, sharpening ethical condemnation.",
      },
      {
        id: "5-prose-fiction-nonfiction-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        guideRef: "rhetoric-persona-truth-claims",
        question:
          "Read this unseen memoir excerpt:\n\n> *The ferry horn sounded. My father tightened his scarf. He did not turn back. The quay shrank to a grey matchstick.*\n\nWhich syntactic choice shapes the emotional tone here?",
        options: [
          "Parataxis — placing stark independent clauses side by side to enact stoic restraint and shock",
          "Hypotaxis — layering causal subordinate clauses to explain every motive behind the departure",
          "Anaphora — repeating an identical opening phrase across four consecutive rhetorical questions",
          "Epistrophe — closing every sentence with the same refrained noun to build comic rhythm",
        ],
        answerIndex: 0,
        hints: [
          "Count the subordinating conjunctions ('because', 'although', 'while') — there are none.",
          "Notice how four stripped-down independent sentences force the reader to feel the unspoken ache inside the pauses.",
        ],
        explanation:
          "Parataxis sets short, unsubordinated clauses side by side without explanatory conjunctions, conveying muted emotional shock and stoic restraint far more powerfully than melodramatic explanation.",
      },
      {
        id: "5-prose-fiction-nonfiction-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "rhetoric-persona-truth-claims",
        question:
          "Read this unseen speech excerpt:\n\n> *They promised us bridges that would hold; they promised us archives that would stay open; they promised us hearings that would listen.*\n\nWhich pair of rhetorical schemes drives the momentum of this sentence?",
        options: [
          "Oxymoron and epistolary digression",
          "Pathetic fallacy and temporal prolepsis",
          "Anaphora and rhythmic tricolon",
          "Hypotaxis and unreliable focalisation",
        ],
        answerIndex: 2,
        hints: [
          "Count how many parallel clauses appear and look at the repeated opening words of each clause.",
          "Repeated clause openings + a three-part escalating rhythm have two exact classical names.",
        ],
        explanation:
          "Repeating 'they promised us' at the head of three parallel clauses combines anaphora with tricolon, building rhythmic indictment as each broken pledge escalates from physical infrastructure to democratic voice.",
      },
      {
        id: "5-prose-fiction-nonfiction-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "rhetoric-persona-truth-claims",
        question:
          "Read this unseen sentence from a personal essay:\n\n> *At twelve I thought my aunt's battered tin trunk held smuggled treasure; at thirty-five, lifting its rusted lid in a damp cellar, I understood it held the only letters she had ever been permitted to keep.*\n\nWhich analytical concept best explains the emotional pivot inside this sentence?",
        options: [
          "Zero omniscient focalisation exposing a fictional neighbour's secret",
          "External camera-eye observation withholding all personal evaluation",
          "Circular frame narration distancing the writer from family history",
          "The dynamic gap between the naive experiencing self and the reflective retrospective self",
        ],
        answerIndex: 3,
        hints: [
          "Compare the twelve-year-old's imagination ('smuggled treasure') with the thirty-five-year-old's recognition.",
          "In memoir, two versions of the first-person 'I' often occupy the very same sentence.",
        ],
        explanation:
          "The sentence derives its poignancy from the split memoir persona: contrasting the experiencing child's romantic fantasy with the retrospective adult's recognition of quiet domestic restriction.",
      },
      {
        id: "5-prose-fiction-nonfiction-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "literary-nonfiction-genres",
        question:
          "Why does a skilled literary essayist frequently open with a small, sensory **anecdote** (such as repairing a cracked teapot or misreading a street sign) before introducing wider philosophical claims?",
        options: [
          "To anchor abstract cultural questions in concrete lived particulars before scaling outward",
          "To prove that personal essays avoid conceptual argument and focus only on domestic hobbies",
          "To disguise fictional inventions so examiners cannot distinguish essays from short stories",
          "To fulfil a strict rule that non-fiction must summarise events strictly in alphabetical order",
        ],
        answerIndex: 0,
        hints: [
          "Recall the classic personal essay trajectory: concrete particular → associative expansion → structural turn → wider resonance.",
          "How does a textured real-world detail earn reader investment before big ideas arrive?",
        ],
        explanation:
          "An anchoring anecdote grounds abstract reflection in tactile human specificity, allowing recurring images from that opening scene to resonate symbolically when the essay widens its conceptual scope.",
      },
      {
        id: "5-prose-fiction-nonfiction-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "rhetoric-persona-truth-claims",
        question:
          "In a personal essay on climate migration, the writer pauses mid-paragraph to write: *'I confess I once dismissed coastal relocation figures as bureaucratic alarmism — until salt water pooled beneath my own porch steps.'* How does this confession primarily function rhetorically?",
        options: [
          "It ruins the writer's logos by demonstrating permanent ignorance of environmental science",
          "It builds candid ethos through self-scrutiny while grounding urgency in embodied witness",
          "It replaces non-fiction truth-claims with ironic third-person free indirect discourse",
          "It weakens pathos by mocking ordinary homeowners who live near eroding shorelines",
        ],
        answerIndex: 1,
        hints: [
          "Does admitting a past mistake make an essayist seem less trustworthy, or more honest and self-aware?",
          "Look at how self-correction turns abstract statistics into lived testimony.",
        ],
        explanation:
          "Conceding former scepticism strengthens ethos through intellectual honesty and vulnerability, disarming hesitant readers while anchoring abstract statistics in tangible personal consequence.",
      },
      {
        id: "5-prose-fiction-nonfiction-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "literary-nonfiction-genres",
        question:
          "When analysing a Paper 1 **travel writing** extract, why is interrogating the **observer's gaze** essential for high Criterion A and B marks?",
        options: [
          "Because travelogues are graded primarily on whether their geographical maps are accurate",
          "Because travel writers are prohibited from using metaphors or sensory imagery",
          "Because how an outsider frames landscapes and local people reveals cultural power, bias, or humility",
          "Because travel writing always adopts external camera focalisation without an 'I' persona",
        ],
        answerIndex: 2,
        hints: [
          "Ask: who holds the pen, who gets to speak in direct quotation, and is the place romanticised as 'exotic' or 'timeless'?",
          "Travelogues always negotiate the boundary between outer journey and cultural framing.",
        ],
        explanation:
          "Analysing the observer's gaze exposes how diction, framing, and whose voices are quoted either reproduce exoticising stereotypes or enact critical self-awareness about privilege and cultural encounter.",
      },
      {
        id: "5-prose-fiction-nonfiction-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "rhetoric-persona-truth-claims",
        question:
          "Read this unseen sentence from a literary essay:\n\n> *Although I have checked the municipal archive twice, and though my cousin insists the market burnt in April rather than March, I still remember orange peel smouldering against wet cobblestones beneath a winter drizzle.*\n\nHow does the **hypotactic** syntax serve the writer's conceptual focus here?",
        options: [
          "Nested concessive clauses enact the uneasy negotiation between archival fact and stubborn sensory memory",
          "Short unjoined clauses mimic sudden physical panic during the original marketplace fire",
          "Balanced antithesis proves conclusively that archival dates are superior to lived experience",
          "Acoustic anaphora rallies listeners to rebuild the historic market square immediately",
        ],
        answerIndex: 0,
        hints: [
          "Notice the two subordinating conjunctions 'Although...' and 'though...' leading into the main clause 'I still remember...'.",
          "How does delaying the main clause mirror a mind weighing competing truth-claims?",
        ],
        explanation:
          "Hypotaxis ('Although... and though...') grammatically subordinates counter-evidence before landing on the main clause ('I still remember'), enacting the careful, self-aware tension between documented record and lived recall.",
      },
      {
        id: "5-prose-fiction-nonfiction-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "literary-nonfiction-genres",
        question:
          "What makes a **structural turn** (or *prose volta*) in a personal essay particularly valuable to analyse in a Paper 1 commentary?",
        options: [
          "It marks the exact line where a non-fiction writer switches permanently into rhyming couplets",
          "It proves the writer changed their thesis accidentally mid-draft without revising",
          "It indicates the conclusion has ended and footnotes are about to begin",
          "It reveals where the text pivots from surface anecdote or certainty into deeper complication or critique",
        ],
        answerIndex: 3,
        hints: [
          "Compare the role of a volta in a sonnet to a hinge paragraph beginning 'Yet years later...' or 'What I failed to notice then...'.",
          "Top-band essays track how meaning *develops and complicates* across a passage.",
        ],
        explanation:
          "Locating and analysing the structural turn shows how the essayist moves past initial nostalgia or assumption into ethical tension, demonstrating sophisticated structural awareness under Criteria B and C.",
      },
      {
        id: "5-prose-fiction-nonfiction-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "literary-nonfiction-genres",
        question:
          "Which stylistic feature is most characteristic of **literary oratory (speeches)** compared with private diary entries?",
        options: [
          "Fragmented private shorthand intelligible only to the writer years later",
          "Acoustic cadence, inclusive collective address, and responsiveness to a public historical occasion (kairos)",
          "Strict avoidance of repetition so listeners never notice rhythmic patterns",
          "Complete concealment of the speaker's moral stance through camera-eye external focalisation",
        ],
        answerIndex: 1,
        hints: [
          "Remember that a speech is written for the human ear in a shared civic moment.",
          "Think about how sound, collective pronouns ('we'), and timeliness shape spoken prose.",
        ],
        explanation:
          "Literary speeches are engineered for live vocal performance and civic urgency (kairos), harnessing acoustic cadence, rhythmic repetition, and collective address to move a gathered audience.",
      },
      {
        id: "5-prose-fiction-nonfiction-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "rhetoric-persona-truth-claims",
        question:
          "A memoirist writes: *'Perhaps the veranda was narrower than I recall; perhaps my father never actually raised his voice, and I have borrowed the thunder from another summer altogether.'* What is the analytical effect of this **epistemic hedging**?",
        options: [
          "It openly interrogates memory's fallibility, paradoxically deepening ethical candour while destabilising literal certainty",
          "It proves the memoir is actually a fictional ghost story that violates every convention of non-fiction",
          "It undermines the passage's literary merit because strong non-fiction never admits interpretive doubt",
          "It shifts the passage from first-person memoir into zero-focalised omniscient biography",
        ],
        answerIndex: 0,
        hints: [
          "Look at the anaphoric repetition of 'Perhaps...' and the admission 'borrowed the thunder from another summer'.",
          "Ask what happens to reader trust when a memoirist refuses to pretend memory is a flawless video camera.",
        ],
        explanation:
          "Epistemic hedging ('Perhaps...') foregrounds memory as an active, fallible reconstruction — earning candid ethos through honesty while inviting readers to ponder how emotional truth diverges from literal archive.",
      },
      {
        id: "5-prose-fiction-nonfiction-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "rhetoric-persona-truth-claims",
        question:
          "In a civic essay arguing against demolishing a public library, the author uses inclusive first-person plural pronouns (*'We all grew up in its aisles; none of us can bear sterile glass towers'*). How might a **critical IB reader** interrogate this rhetorical choice?",
        options: [
          "By praising 'we' as automatically convincing without testing whose voices it represents",
          "By claiming that plural pronouns violate grammatical rules of academic literary non-fiction",
          "By assuming the essayist literally visited the library with every resident in the city",
          "By examining how 'we' manufactures emotional consensus while potentially erasing residents with differing needs or histories",
        ],
        answerIndex: 3,
        hints: [
          "Think about inclusive pronouns as both bridge-builders and subtle acts of persuasion.",
          "Who might feel silently spoken for — or left out — by 'We all grew up in its aisles'?",
        ],
        explanation:
          "While inclusive 'we' builds communal solidarity and pathos, a nuanced Band 5 analysis also notes how universalising pronouns manufacture consensus and can smooth over dissenting class or generational perspectives.",
      },
      {
        id: "5-prose-fiction-nonfiction-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "literary-nonfiction-genres",
        question:
          "Read this unseen excerpt from an epistolary non-fiction letter:\n\n> *You will laugh when you see the ink blot beside Tuesday's postmark, and I know you will tell me I still press too hard on fountain nibs — yet keep the envelope anyway, because the harbour fog lifted just after I sealed it.*\n\nWhich genre-specific feature gives this passage its layered intimacy?",
        options: [
          "Zero-focalised omniscient commentary evaluating dozens of unnamed harbour commuters",
          "Direct address ('You') invoking unspoken shared history and anticipating a known recipient's exact reaction",
          "Clinical statistical logos proving the correlation between humidity and ink viscosity",
          "Strict paratactic staccato stripping out every trace of interpersonal warmth",
        ],
        answerIndex: 1,
        hints: [
          "Look at how the writer predicts the recipient's laugh and teasing remark ('I know you will tell me...').",
          "In literary letters, the absent recipient acts as an active ghostly presence shaping every sentence.",
        ],
        explanation:
          "Epistolary non-fiction harnesses direct second-person address and shared private shorthand ('you will laugh... I still press too hard'), making the reader an eavesdropper on an intimate ongoing relationship.",
      },
      {
        id: "5-prose-fiction-nonfiction-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "rhetoric-persona-truth-claims",
        question:
          "Why does an essayist who pairs three restrained sentences of dry statistical evidence (**logos**) with a single understated sensory image of an abandoned child's shoe often generate stronger **pathos** than pages of outraged exclamation marks?",
        options: [
          "Because IB rubrics ban all emotional diction from literary non-fiction texts",
          "Because statistical figures automatically erase human emotion from any persuasive essay",
          "Because tonal restraint invites the reader to supply the emotional judgement themselves, avoiding coercive melodrama",
          "Because switching from numbers to objects breaks the essay into two unrelated texts",
        ],
        answerIndex: 2,
        hints: [
          "Think about how readers resist heavy-handed lecturing, yet lean in when an image speaks quietly for itself.",
          "Contrast melodrama (telling the reader what to feel) with restraint (giving a concrete detail that triggers empathy).",
        ],
        explanation:
          "Understatement and tonal restraint trust the reader's ethical imagination: placing one stark concrete detail beside cool evidence creates piercing pathos without triggering resistance to sentimental manipulation.",
      },
    ],
  },

  {
    id: "5-prose-fiction-nonfiction-m3",
    title: "MCQ Paper 3 — Integrated IB Paper 1 Synthesis: Prose Fiction & Non-Fiction",
    level: "SL",
    questions: [
      {
        id: "5-prose-fiction-nonfiction-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "narrative-perspective-focalization",
        question:
          "Read this unseen prose extract:\n\n> *Dr Mehta checked his watch under the desk. Four minutes left. Why did patients always save the real symptom for the moment his hand touched the brass doorknob? He smiled warmly and uncapped his pen.*\n\nHow does the sequence of psychic distance across these four sentences construct character?",
        options: [
          "It stays permanently at distant omniscient overview to conceal Mehta's exhaustion",
          "It shifts into second-person direct address to scold late-arriving clinic patients",
          "It uses strict external focalisation throughout so his irritation remains invisible",
          "It dips from external gesture into irritated free indirect discourse before snapping back to polite performance",
        ],
        answerIndex: 3,
        hints: [
          "Track the camera sentence by sentence: watch-checking → 'Why did patients always...' → 'He smiled warmly'.",
          "Notice the friction between his private exasperation and his outward professional smile.",
        ],
        explanation:
          "Dipping momentarily into free indirect discourse ('Four minutes left. Why did patients always...') before returning to his warm outward smile exposes the quiet divide between private burnout and professional courtesy.",
      },
      {
        id: "5-prose-fiction-nonfiction-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "prose-time-setting-symbolism",
        question:
          "Which statement best reflects how **analepsis** should be analysed in a high-scoring IB Paper 1 commentary?",
        options: [
          "Note simply that a flashback provides helpful background information for confused readers",
          "Examine what sensory cue triggers the memory now and how the past reframes the present dilemma",
          "Rewrite the passage's events in chronological order so the marker sees you understood the plot",
          "Focus exclusively on verb tenses without connecting the recalled memory to thematic tension",
        ],
        answerIndex: 1,
        hints: [
          "Ask 'why HERE?' rather than just 'what happened earlier?'.",
          "Criterion B rewards linking structural placement to psychological or thematic impact.",
        ],
        explanation:
          "Examiners reward causal and thematic analysis of analepsis: showing what triggers the backward leap at that exact narrative hinge and how the recalled past complicates the present scene.",
      },
      {
        id: "5-prose-fiction-nonfiction-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "literary-nonfiction-genres",
        question:
          "Read this unseen opening:\n\n> *I keep a jar of grey pumice from the island we left in 1998. Friends assume it is nostalgia, a neat geological souvenir. Yet every time I shake the glass, fine grit coats the lid — proof that exile never quite settles into sediment.*\n\nWhich non-fiction sub-genre and central device define this opening?",
        options: [
          "Objective journalistic reportage using strict statistical logos",
          "Dramatic courtroom oratory relying on tricolon and collective address",
          "Personal essay / memoir using an everyday tactile object as an evolving conceptual metaphor",
          "Travelogue brochure using hyperbolic praise to attract island tourists",
        ],
        answerIndex: 2,
        hints: [
          "Look at how a small physical jar of volcanic pumice transforms into an image of unsettled exile.",
          "Notice the self-correcting pivot 'Friends assume... Yet every time...'.",
        ],
        explanation:
          "This classic personal-essay/memoir opening anchors an abstract theme (exile) inside a physical object (pumice grit), pivoting against simplistic nostalgia ('souvenir') into an active kinetic metaphor.",
      },
      {
        id: "5-prose-fiction-nonfiction-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "rhetoric-persona-truth-claims",
        question:
          "Compare two sentences describing the same childhood memory:\n\n> **Sentence X:** *Because my uncle feared debt more than loneliness, and although the orchard still bore pears each autumn, he sold the eastern strip before winter.*\n> **Sentence Y:** *He feared debt. He sold the orchard. The pears rotted on someone else's grass.*\n\nHow does shifting from Sentence X to Sentence Y alter the literary effect?",
        options: [
          "Moving from hypotaxis to parataxis replaces reasoned causal explanation with stark, elegiac finality",
          "Moving from parataxis to hypotaxis adds logical subordination that softens the uncle's grief",
          "Moving from anaphora to antithesis eliminates all sensory detail from the orchard",
          "Moving from external focalisation to unreliable first-person confession exposes a hidden lie",
        ],
        answerIndex: 0,
        hints: [
          "Identify the syntax of Sentence X ('Because... and although...') versus Sentence Y (three short independent clauses).",
          "Notice how stripping away 'because' leaves the loss raw and unsoftened.",
        ],
        explanation:
          "Sentence X uses hypotaxis to map motive and concession analytically; Sentence Y strips away subordination into blunt parataxis, replacing explanation with stark, irrevocable grief.",
      },
      {
        id: "5-prose-fiction-nonfiction-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "narrative-perspective-focalization",
        question:
          "In a novel that alternates chapters between two siblings experiencing the same family bankruptcy — each chapter strictly internally focalised through one sibling — what is Genette's term for this focalisation pattern?",
        options: [
          "Static zero focalisation",
          "Sustained external focalisation",
          "Variable (or multiple) internal focalisation",
          "Unmediated epistolary focalisation",
        ],
        answerIndex: 2,
        hints: [
          "The narration stays inside character consciousness (internal), rather than hovering omnisciently above or staying outside like a camera.",
          "Because the focalising mind shifts from chapter to chapter, it is not fixed to a single character.",
        ],
        explanation:
          "When narration moves between distinct characters' interior viewpoints (especially over shared events), Genette terms it variable or multiple internal focalisation — highlighting how truth fractures across competing perspectives.",
      },
      {
        id: "5-prose-fiction-nonfiction-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "prose-time-setting-symbolism",
        question:
          "Read this unseen prose extract:\n\n> *In Act One of his career, Mr Vance kept the brass ledger open on his desk so every clerk could admire his neat red columns. Ten years after the crash, his daughter found the same ledger wedged beneath a wobbling kitchen leg, its spine split neatly down the centre.*\n\nWhich analytical reading best captures the craft of this motif?",
        options: [
          "The ledger functions solely as realistic period furniture showing Victorian carpentry",
          "The ledger serves as pathetic fallacy mirroring stormy autumn weather outside the house",
          "The ledger demonstrates prolepsis by predicting the daughter's future employment as a clerk",
          "The ledger evolves from an emblem of public fiscal authority into an ironic relic of fractured pride",
        ],
        answerIndex: 3,
        hints: [
          "Contrast the ledger's position and condition in Sentence 1 ('open on his desk', 'neat red columns') with Sentence 2 ('wedged beneath a wobbling kitchen leg', 'spine split').",
          "Track how one recurring object reverses its symbolic status across time.",
        ],
        explanation:
          "The brass ledger is an evolving symbol: once displayed to project tidy institutional mastery, its degraded afterlife propping up a broken table ironises the fragility of Vance's former status.",
      },
      {
        id: "5-prose-fiction-nonfiction-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "rhetoric-persona-truth-claims",
        question:
          "Which statement represents a **common IB misconception** about persona in literary non-fiction?",
        options: [
          "A memoirist deliberately shapes tone, pacing, and selection to construct a textual self",
          "Because non-fiction refers to real life, the narrator's 'I' requires no persona analysis and equals the raw author",
          "A personal essayist can deploy ironic self-deprecation to build nuanced credibility with readers",
          "An orator's ethos depends on rhetorical choices as well as historical standing outside the text",
        ],
        answerIndex: 1,
        hints: [
          "Three of these statements reflect Band 5 IB Literature understanding; spot the one reductive fallacy.",
          "Remember that every written 'I' — even in autobiography — is curated through language.",
        ],
        explanation:
          "Treating non-fiction's 'I' as unmediated reality ignores authorial craft: even when grounded in lived events, the writer curates a deliberate persona shaped by hindsight, tone, and rhetorical purpose.",
      },
      {
        id: "5-prose-fiction-nonfiction-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "literary-nonfiction-genres",
        question:
          "Read this unseen travelogue sentence:\n\n> *Every glossy brochure calls the old tin-mining valley 'a sleepy relic untouched by progress' — a phrase easiest to print from an air-conditioned editorial desk five hundred kilometres south.*\n\nHow does the travel writer establish critical distance here?",
        options: [
          "By scare-quoting romantic cliché and contrasting it with geographic irony to critique extractive outsider framing",
          "By endorsing the brochure's picturesque diction to celebrate timeless rural serenity",
          "By removing the first-person perspective so the valley speaks purely through external camera focalisation",
          "By deploying nostalgic pathetic fallacy to suggest the landscape enjoys being forgotten",
        ],
        answerIndex: 0,
        hints: [
          "Notice the quotation marks around 'a sleepy relic untouched by progress' and the sharp spatial jab 'five hundred kilometres south'.",
          "Who is being satirised — the valley's residents, or the urban writers who mythologise them?",
        ],
        explanation:
          "Scare-quoting the tourist cliché and puncturing it with spatial and material irony ('air-conditioned editorial desk five hundred kilometres south') dismantles complacent outsider framing.",
      },
      {
        id: "5-prose-fiction-nonfiction-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "narrative-perspective-focalization",
        question:
          "In a first-person story told by a child narrator who observes adults whispering about 'a sudden business relocation' while quietly hiding silver candlesticks inside coat linings, what produces the passage's dramatic irony?",
        options: [
          "The child deliberately lies to deceive the reader about the family's wealth",
          "The narrator possesses zero omniscient knowledge of every adult's political motive",
          "The story relies exclusively on formal hypotactic legal jargon",
          "The gap between the child's literal, naive reporting and the adult reader's recognition of political flight",
        ],
        answerIndex: 3,
        hints: [
          "Unreliability does not require malice: a naive focaliser can report exact visual facts without grasping their sinister meaning.",
          "Ask what the reader deduces from hiding silver inside coats that the child calls 'business relocation'.",
        ],
        explanation:
          "Naive unreliability generates piercing dramatic irony: the child accurately relays euphemisms and secretive gestures whose true urgency (forced flight or persecution) only the reader decodes.",
      },
      {
        id: "5-prose-fiction-nonfiction-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "rhetoric-persona-truth-claims",
        question:
          "Read this unseen speech conclusion:\n\n> *We can build walls high enough to mute the tide, or we can build bridges wide enough to share the shore — but we cannot pretend the water has stopped rising.*\n\nHow do rhetorical devices work together to close the argument?",
        options: [
          "Circular analepsis returns the audience to an unrelated childhood memory",
          "Stream-of-consciousness fragments dissolve the speaker's authority into private panic",
          "Parallel antithesis frames an ethical choice before a stark closing clause rejects collective denial",
          "External focalisation withdraws moral urgency so the audience feels detached from the coast",
        ],
        answerIndex: 2,
        hints: [
          "Look at the balanced contrast ('walls high enough to mute...' vs 'bridges wide enough to share...'), followed by the 'but...' turn.",
          "Notice how the closing clause undercuts evasion with physical inevitability ('the water has stopped rising').",
        ],
        explanation:
          "Balanced antithesis ('walls... mute the tide' vs 'bridges... share the shore') clarifies competing political ethics before the emphatic coordinating turn ('but we cannot pretend') forecloses complacency.",
      },
      {
        id: "5-prose-fiction-nonfiction-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "prose-time-setting-symbolism",
        question:
          "When comparing a prose novel and a memoir on Paper 2 (closed-book comparative essay), which comparative thesis demonstrates Band 5 **form-sensitive** synthesis?",
        options: [
          "Both writers rely on descriptive language and visual metaphors to make their chosen plots accessible and engaging for modern readers",
          "Whereas the novelist uses variable focalisation to fracture certainty, the memoirist splits one persona across time to probe complicity",
          "The novel invents imaginary incidents while the memoir records real events, proving the memoir offers far superior historical authority",
          "Both texts feature coastal journeys and recurring weather imagery, showing that physical travel inevitably produces moral transformation",
        ],
        answerIndex: 1,
        hints: [
          "Look for precise form-specific craft terms linked directly to conceptual meaning — and explicit comparative contrast ('Whereas...').",
          "Avoid vague claims ('interesting language') or reductive binaries ('fiction vs truth').",
        ],
        explanation:
          "Strong Paper 2 synthesis pairs distinct medium-specific techniques (variable focalisation in fiction vs retrospective/experiencing split in memoir) around a sharp shared conceptual inquiry (moral uncertainty/complicity).",
      },
      {
        id: "5-prose-fiction-nonfiction-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "literary-nonfiction-genres",
        question:
          "An unseen IB Paper 1 personal essay ends not with a neat thesis summary, but with the writer watching rainwater erase chalk hopscotch squares outside a closed primary school. How should a Band 5 candidate interpret this ending?",
        options: [
          "Criticise the essayist for failing to write a clear concluding call to action",
          "Treat the rainwater purely as literal weather confirming the essay took place in autumn",
          "Dismiss the closing sentence as decorative filler unrelated to the essay's main claims",
          "Analyse the open-ended visual image as resonant lyric closure that leaves memory's impermanence deliberately unresolved",
        ],
        answerIndex: 3,
        hints: [
          "Remember that literary personal essays differ from five-paragraph persuasive essays.",
          "Why might an image of disappearing chalk hopscotch linger more powerfully than a neat moral slogan?",
        ],
        explanation:
          "Literary personal essays routinely close on a symbolic concrete image rather than a tidy thesis restatement, inviting the reader to sit with unresolved elegiac resonance about childhood and erasure.",
      },
      {
        id: "5-prose-fiction-nonfiction-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "prose-time-setting-symbolism",
        question:
          "Read this unseen prose extract:\n\n> *At the threshold of the courthouse he paused — one leather shoe still on the rain-slick granite pavement, the other already inside the warm brass-hinged revolving door.*\n\nHow does the spatial imagery function analytically here?",
        options: [
          "The liminal threshold physically embodies psychological hesitation between private exposure and institutional judgement",
          "The brass door provides comic relief by exaggerating the character's clumsy footwork",
          "The granite pavement introduces a proleptic flashforward into his eventual prison sentence",
          "The setting functions purely as external camera background with zero thematic resonance",
        ],
        answerIndex: 0,
        hints: [
          "Notice his exact physical posture: split across 'threshold', 'rain-slick pavement' outside vs 'warm brass-hinged' institutional interior.",
          "Liminal spaces (doorways, bridges, borders) externalise moments of moral or identity transition.",
        ],
        explanation:
          "Pausing literally astride the courthouse threshold turns architecture into a spatial correlative for moral hesitation — suspending the character between exposed outer world and formal legal apparatus.",
      },
      {
        id: "5-prose-fiction-nonfiction-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "narrative-perspective-focalization",
        question:
          "Read this unseen extract:\n\n> *Salt — cold rail — why had she brought the blue wool coat, too heavy now, harbour bell three beats, no four — his hand never lifted from the gatepost — keep walking, count the cobblestones.*\n\nWhich point on Gardner's psychic distance scale best classifies this extract, and what psychological effect does it produce?",
        options: [
          "Level 1 panoramic omniscient narration, establishing calm historical distance",
          "Level 2 external social observation, hiding the character's grief behind formal poise",
          "Level 5 stream of consciousness, using fractured associative syntax to enact acute emotional overwhelm",
          "Level 3 neat indirect thought, relying on orderly reporting verbs to signal logical composure",
        ],
        answerIndex: 2,
        hints: [
          "Look at the dashes, sensory jumps ('Salt — cold rail —'), self-corrections ('three beats, no four'), and self-commands ('keep walking').",
          "Notice that narrator mediation has virtually vanished, plunging us directly into raw cognitive flux.",
        ],
        explanation:
          "Level 5 stream of consciousness strips away orderly narrative framing in favour of jagged associative leaps and self-directed imperatives, immersing the reader directly inside grief-stricken sensory overload.",
      },
      {
        id: "5-prose-fiction-nonfiction-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "rhetoric-persona-truth-claims",
        question:
          "An unseen essayist writes: *'History textbooks call it urban modernisation; my grandmother called it Tuesday the bulldozers ate the bakery.'* Which analytical claim hits Band 5 on Criterion B?",
        options: [
          "The writer uses good contrast to make the essay sound personal and easy to read",
          "Antithesis juxtaposes sanitised institutional jargon against vivid domestic personification, exposing how official language erases lived loss",
          "The sentence proves that history textbooks are completely fictional while oral grandmothers are always infallible",
          "Hypotactic subordination delays the verb so the reader waits anxiously to learn which day the bakery closed",
        ],
        answerIndex: 1,
        hints: [
          "Look at the two sharply contrasting registers: 'urban modernisation' (abstract euphemism) vs 'bulldozers ate the bakery' (visceral personification).",
          "Choose the claim that names exact craft choices AND articulates their ideological implication.",
        ],
        explanation:
          "This Band 5 claim moves well beyond vague praise or reductive binaries: it identifies both the syntactic antithesis and the register clash (bureaucratic abstraction vs predatory personification 'ate') to show how language masks human displacement.",
      },
    ],
  },
];
