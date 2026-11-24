// ---------------------------------------------------------------------------
// IB English A: Literature (FA2021) Paper 1 (SL) Mock Exam Paper.
// Two original unseen literary passages (Poetry + Prose Fiction), scaffolded
// close-reading checks, focused craft analyses, and two full 20-mark Guided
// Literary Analysis essays with official Criterion A5/B5/C5/D5 markbands.
// Strict Non-Prescriptive Text Policy: 100% original unseen passages.
// ---------------------------------------------------------------------------
import type { ExamPaper, MarkBand } from "../types.ts";

const POEM_PASSAGE = `**Passage 1 — Original Unseen Lyric Poem: *Inventory of the Brass Key***

> 1  We weighed my grandmother’s house in cardboard boxes,
> 2  sorting porcelain swans from chipped enamel bowls
> 3  while rain ticked patiently against the louvred glass
> 4  as if auditing every small silence we had kept.
> 5  In the cedar chest lay ledger-books of salt and monsoon dates,
> 6  their margins crowded with her neat, slant-shouldered script—
> 7  prices of kerosene, a cousin’s borrowed fare,
> 8  the exact hour the tide first breached the lower step.
> 9  My sister folded linen into neat, obedient squares;
> 10 I pocketed the heavy key to the courtyard lock,
> 11 its brass tooth greened with verdigris, cold as a coin
> 12 pressed into a palm before a crossing. Still,
> 13 the floorboards held the map of her narrow heels,
> 14 a creak by the pantry where she paused to count the jars.
>
> 15 Yet when the removals van reversed into the lane,
> 16 no crate could take the smell of clove-smoke from the eaves,
> 17 nor lift the pale rectangle where her mirror hung
> 18 for forty summers—brighter plaster proving
> 19 that even absence keeps a sharper silhouette
> 20 than brass or ledgers. I laid the key upon the sill.
> 21 Outside, the wet hibiscus bowed beneath its weight,
> 22 and the empty room grew larger than the house.`;

const PROSE_PASSAGE = `**Passage 2 — Original Unseen Prose Fiction Extract: *The Salt Clock***

> **[Paragraph 1]** The workshop smelled, as it always had, of damp cedar shavings and the sea’s slow rust. Arjun lingered on the threshold with his folded umbrella dripping a neat grey ring onto the concrete, unwilling to disturb the dust that had settled across his father’s drafting table like powdered chalk. On the wall above the brass calipers, the glass barometer still hung crooked by two degrees—the exact tilt he had noticed on the evening he packed his suitcase for university and swore he would never measure another roof truss again.
>
> **[Paragraph 2]** Really, what had he expected to find after six years of postcards and polite birthday calls? A repentant patriarch waiting with tea and an apology? The old man had never once admitted a miscalculation, not even when the monsoon swell lifted the jetty planks off their bolts; he had merely blamed the timber merchant and sharpened another pencil. Arjun stepped further inside, irritated by how quickly his own shoulders dropped into their boyhood posture of cautious obedience. Everywhere he looked, half-finished blueprints curled at the corners like dry leaves, weighted down by smooth beach stones.
>
> **[Paragraph 3]** Fourteen years earlier, during the October cyclone, his father had made him hold a kerosene lantern steady above this very table while wind rattled the louvres and salt spray crept beneath the door. “A straight line,” his father had muttered without glancing up, “is the only promise a building can keep.” Back then, Arjun had stared at the trembling yellow halo on the tracing paper and wished the lantern would go out.
>
> **[Paragraph 4]** Now, lifting the heaviest beach stone from the corner of a rolled sheet, he uncovered a clean elevation drawing dated only three weeks ago. It was not a jetty or a warehouse. Drawn in painstaking ink, with every window angled to catch the morning light, was a narrow courtyard house—and neatly lettered beside the margin scale, in his father’s unyielding hand, were Arjun’s own initials.`;

const P1_MARKBANDS_20: MarkBand[] = [
  {
    band: "Band 5 (17–20)",
    marks: [17, 20],
    descriptor:
      "**Crit A (5/5):** Perceptive, persuasive interpretation exploring subtle implications and unresolved tensions, seamlessly supported by short embedded references. **Crit B (5/5):** Consistently insightful evaluation of *how* authorial, formal, and stylistic choices construct meaning and reader effect. **Crit C (5/5):** Cohesive conceptual architecture (never chronological paraphrase) sustained throughout. **Crit D (5/5):** Precise, concise, eloquent academic register with accurate literary terminology.",
  },
  {
    band: "Band 4 (13–16)",
    marks: [13, 16],
    descriptor:
      "**Crit A (4/5):** Good, well-sustained interpretation grounded in relevant textual evidence with some attention to nuance. **Crit B (4/5):** Clear, thoughtful analysis of stylistic and structural choices linked convincingly to meaning, though evaluation may occasionally dip. **Crit C (4/5):** Focused, logical conceptual organisation with clear transitions. **Crit D (4/5):** Clear, varied academic prose with largely accurate critical vocabulary.",
  },
  {
    band: "Band 3 (9–12)",
    marks: [9, 12],
    descriptor:
      "**Crit A (3/5):** Satisfactory literal understanding with some valid interpretation, though prone to periodic paraphrase. **Crit B (3/5):** Identifies relevant features and explains basic effects, sometimes slipping into feature-spotting. **Crit C (3/5):** Adequate structure, though may lean towards chronological paragraphing. **Crit D (3/5):** Generally clear language with occasional imprecision or repetition.",
  },
  {
    band: "Band 2 (5–8)",
    marks: [5, 8],
    descriptor:
      "**Crit A (2/5):** Superficial reading dominated by summary rather than interpretation. **Crit B (2/5):** Mostly descriptive naming of devices with minimal explanation of effect. **Crit C (2/5):** Loose focus or line-by-line narration with weak coherence. **Crit D (2/5):** Basic register with frequent lapses in clarity or literary terminology.",
  },
  {
    band: "Band 1 (1–4)",
    marks: [1, 4],
    descriptor:
      "**Crit A–D (1/5 each):** Minimal textual comprehension, little or no analysis of authorial craft, fragmented organisation, and severely limited clarity of expression.",
  },
];

export const paper: ExamPaper = {
  id: "exam-p1-sl",
  title: "Paper 1 (SL) · Guided Literary Analysis (Unseen Poetry & Prose)",
  level: "SL",
  calculator: false,
  minutes: 75,
  paperType: "Paper 1 (SL) · Guided Literary Analysis (1 Passage, 20m)",
  questions: [
    // ======================== PASSAGE 1: POETRY (Q01–Q07) ==================
    {
      id: "exam-p1-sl-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      topicId: "4-poetry-and-drama",
      guideRef: "poetic-form-metre-structure",
      question: `${POEM_PASSAGE}\n\nName the **one-word Italian literary term** for the decisive structural and tonal turn signalled by the stanza break and the conjunction *“Yet”* at line 15.`,
      answer: {
        type: "text",
        accept: ["volta"],
        display: "volta",
      },
      traps: [
        {
          spec: { type: "text", accept: ["caesura"] },
          feedback: "A caesura is a pause *inside* a single line; here we want the Italian term for a poem’s structural turn in argument or perspective.",
        },
        {
          spec: { type: "text", accept: ["enjambment"] },
          feedback: "Enjambment is syntax running unbroken over a line ending—think of the sonnet term for a pivotal conceptual turn (‘Yet…’).",
        },
      ],
      hints: [
        "This term originates in sonnet criticism and literally means ‘turn’ in Italian.",
        "It is commonly triggered by a stanza break and an adversative conjunction such as ‘Yet’ or ‘But’.",
      ],
      solution: [
        "At line 15, the stanza break and adversative conjunction ‘Yet’ pivot the poem away from material inventory towards intangible absence.",
        "In poetic analysis, this decisive structural and emotional turn is called a **volta**.",
      ],
      commonError: "Confusing the poem-wide structural turn (volta) with a line-internal pause (caesura).",
      strategy: "Track conjunctions (‘Yet’, ‘But’, ‘Still’) and stanza breaks to locate the poem’s conceptual pivot",
    },
    {
      id: "exam-p1-sl-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      topicId: "4-poetry-and-drama",
      guideRef: "poetic-form-metre-structure",
      question: `${POEM_PASSAGE}\n\nIdentify the **one-word prosodic term** for the abrupt full-stop pause inside line 20 (*“than brass or ledgers. I laid the key upon the sill.”*) that arrests the rhythm immediately before the speaker relinquishes the key.`,
      answer: {
        type: "text",
        accept: ["caesura", "medial caesura", "strong caesura", "full-stop caesura"],
        display: "caesura",
      },
      traps: [
        {
          spec: { type: "text", accept: ["enjambment"] },
          feedback: "Enjambment carries momentum across line endings; this device is a deliberate pause *within* a poetic line.",
        },
        {
          spec: { type: "text", accept: ["end-stopping", "end stopping", "end-stopped"] },
          feedback: "End-stopping occurs at the *end* of a line—look at the full stop sitting squarely inside line 20 after ‘ledgers’.",
        },
      ],
      hints: [
        "It derives from the Latin for ‘cutting’ and marks a rhythmic break inside a poetic line.",
        "Compare the unbroken rush across lines 17–20 with the sudden full stop right after ‘ledgers.’.",
      ],
      solution: [
        "A grammatical pause occurring inside a line of verse—here created by the period after ‘ledgers’ in line 20—is a **caesura**.",
        "It isolates the quiet, decisive gesture ‘I laid the key upon the sill’ from the preceding clause.",
      ],
      commonError: "Describing an internal break as ‘end-stopping’ instead of a medial caesura.",
      strategy: "Read the line aloud to hear where punctuation abruptly halts breath and isolates an action",
    },
    {
      id: "exam-p1-sl-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      topicId: "4-poetry-and-drama",
      guideRef: "poetic-form-metre-structure",
      question: `${POEM_PASSAGE}\n\nIdentify the **prosodic technique** operating across lines 17–20 (*“nor lift the pale rectangle where her mirror hung / for forty summers—brighter plaster proving / that even absence keeps a sharper silhouette / than brass or ledgers.”*), where grammatical syntax continues unbroken past consecutive line endings without terminal punctuation.`,
      answer: {
        type: "text",
        accept: ["enjambment", "run-on lines", "run-on line", "enjambement"],
        display: "enjambment",
      },
      traps: [
        {
          spec: { type: "text", accept: ["caesura"] },
          feedback: "Caesura is an internal pause *within* a line, whereas here syntax spills across the ends of lines 17, 18, and 19.",
        },
        {
          spec: { type: "text", accept: ["anaphora"] },
          feedback: "Anaphora repeats an opening word or phrase across clauses; here we are naming the lineation technique where clauses run over line breaks.",
        },
      ],
      hints: [
        "Notice how ‘hung / for forty summers’ and ‘proving / that even absence… / than brass or ledgers’ refuse to pause at the line breaks.",
        "This French-derived term literally evokes ‘striding over’ a poetic line ending.",
      ],
      solution: [
        "When a grammatical phrase runs across line breaks without terminal punctuation, the technique is **enjambment** (run-on lines).",
        "Here the sustained syntactic spill mimics the irresistible persistence of memory overflowing the physical boundaries of crates and rooms.",
      ],
      commonError: "Labelling enjambment without connecting its visual and rhythmic spillover to the speaker’s unfolding realisation.",
      strategy: "Always ask what the syntactic momentum across a line break physically or emotionally enacts",
    },
    {
      id: "exam-p1-sl-q04",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Analyse",
      marks: 4,
      topicId: "4-poetry-and-drama",
      guideRef: "poetic-imagery-sound-voice",
      question: `${POEM_PASSAGE}\n\n**Analyse** how the poet deploys a sustained semantic field of accounting and measurement in the opening stanza to characterise how the family confronts grief. *(4 marks)*`,
      hints: [
        "Gather short micro-quotations from the opening stanza linked to finance, ledgers, or measurement (‘weighed’, ‘auditing’, ‘ledger-books’, ‘prices’, ‘coin’, ‘count’).",
        "Ask *why* grieving relatives reach for bureaucratic order—and where that numerical control quietly fails (e.g. ‘small silence’, ‘cold as a coin’).",
      ],
      modelAnswer:
        "Across the opening stanza, the poet constructs a pervasive lexical field of bookkeeping and quantification—opening with the blunt verb ‘weighed’, extending through the personified rain ‘auditing’ family reticence, and culminating in ‘ledger-books’, ‘prices’, ‘coin’, and ‘count’. By casting bereavement as an administrative inventory, the speaker exposes how domestic precision functions as an emotional defence mechanism: reducing a life to ‘cardboard boxes’ and ‘obedient squares’ keeps overwhelming sorrow manageable. Yet this clinical register repeatedly fractures under its own restraint. Describing the verdigris-stained key as ‘cold as a coin / pressed into a palm before a crossing’ converts monetary currency into a mythic funerary obol, suggesting that material valuation cannot insulate the living from mortality. Ultimately, the ironic contrast between meticulous fiscal records and unquantifiable ‘small silence’ reveals that emotional inheritance refuses to balance like an account book.",
      markScheme: [
        {
          point: "Identifies multiple short embedded textual cues from the accounting/measurement semantic field (e.g. ‘weighed’, ‘auditing’, ‘ledger-books’, ‘prices’, ‘coin’, ‘count’).",
          keywords: ["weighed", "auditing", "ledger", "bookkeeping", "quantification"],
        },
        {
          point: "Interprets this bureaucratic/numerical register as an emotional coping or defence mechanism imposing order over grief.",
          keywords: ["defence", "defense", "coping", "control", "order", "manageable", "restraint"],
        },
        {
          point: "Analyses a specific figurative tension—such as the rain’s personified audit of ‘silence’ or the key’s funerary simile (‘coin’ / ‘crossing’).",
          keywords: ["funerary", "obol", "mortality", "personified", "simile", "reticence"],
        },
        {
          point: "Concludes with a conceptual insight showing the inadequacy of material inventory to measure human loss or emotional inheritance.",
          keywords: ["inadequa", "unquantifiable", "account", "balance", "inheritance", "refuses"],
        },
      ],
      markbands: [
        { band: "Band 3 (4)", marks: [4, 4], descriptor: "Precise micro-quotations woven into a perceptive evaluation of how financial diction both shields against and betrays grief." },
        { band: "Band 2 (2–3)", marks: [2, 3], descriptor: "Identifies accounting words clearly and links them to order or practicality, with limited analysis of figurative tension." },
        { band: "Band 1 (1)", marks: [1, 1], descriptor: "Lists a word or two with basic plot paraphrase and minimal analytical comment." },
      ],
      commonError: "Simply listing accounting nouns (‘ledger-books’, ‘prices’, ‘coin’) without explaining *why* grief is framed through bookkeeping or where that register breaks down.",
      strategy: "Group micro-quotations into a semantic field, then probe the psychological tension beneath it",
    },
    {
      id: "exam-p1-sl-q05",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explore",
      marks: 5,
      topicId: "1-readers-writers-texts",
      guideRef: "voice-tone-ambiguity",
      question: `${POEM_PASSAGE}\n\n**Explore** how the speaker’s tone and attitude towards material inheritance evolve between the first stanza and the second stanza. *(5 marks)*`,
      hints: [
        "Contrast the speaker’s possessive impulse in the first stanza (‘I pocketed the heavy key’) with the deliberate act of release in the second stanza (‘I laid the key upon the sill’).",
        "Examine how the speaker’s initial guarded attachment shifts toward quiet acceptance once intangible traces (‘clove-smoke’, ‘pale rectangle’) outlast physical objects.",
        "Track how sound and pacing soften or open outward in the second stanza.",
      ],
      modelAnswer:
        "Between the two stanzas, the lyrical persona undergoes a quiet transformation from guarded possessiveness to reflective relinquishment. In the opening stanza, the tone is clipped, taut, and defensive: while the sister imposes tidy compliance through ‘obedient squares’, the speaker’s furtive verb ‘pocketed’ reveals an anxious urge to cling to tangible authority through the ‘heavy key’. Even here, subtle wistfulness surfaces as memory bleeds through domestic wood in the ‘map of her narrow heels’, foreshadowing the collapse of purely material retention. At the stanza break, the adversative pivot ‘Yet’ opens an elegiac, expansive register. As the removals van strips the house physically, sensory persistence—lingering ‘clove-smoke’ and the ‘pale rectangle’ of unfaded plaster—convinces the speaker that intangible imprint possesses greater clarity than hoarded metal. Consequently, setting the key gently ‘upon the sill’ signals neither defeat nor erasure, but a mature peace with an absence that enlarges rather than diminishes the grandmother’s legacy.",
      markScheme: [
        {
          point: "Characterises the first stanza’s tone accurately (guarded, restrained, anxious, or furtively possessive) with textual backing such as ‘pocketed’ or ‘obedient’.",
          keywords: ["possessive", "guarded", "defensive", "furtive", "anxious", "taut"],
        },
        {
          point: "Identifies the subtle emotional undercurrent even before the break (e.g. floorboards retaining physical memory of ‘narrow heels’).",
          keywords: ["foreshadow", "wistful", "undercurrent", "retained", "imprint", "bleeds"],
        },
        {
          point: "Analyses the structural pivot into an elegiac, expansive, or contemplative tone in the second stanza.",
          keywords: ["elegiac", "expansive", "contemplative", "pivot", "reflective", "relinquish"],
        },
        {
          point: "Contrasts the initial grasping of the key with the decisive, calm gesture of setting it ‘upon the sill’.",
          keywords: ["relinquish", "release", "calm", "gentle", "setting", "maturity", "mature"],
        },
        {
          point: "Explains the conceptual shift: recognising that intangible sensory traces and absence outlast material possessions.",
          keywords: ["intangible", "outlast", "legacy", "sensory", "enlarges", "enduring"],
        },
      ],
      markbands: [
        { band: "Band 3 (4–5)", marks: [4, 5], descriptor: "Traces a nuanced tonal evolution across both stanzas, linking specific verbs and sensory shifts to an insightful change in perspective." },
        { band: "Band 2 (2–3)", marks: [2, 3], descriptor: "Notes that the speaker becomes calmer or lets go of the key, with partial textual support." },
        { band: "Band 1 (1)", marks: [1, 1], descriptor: "Describes events in both stanzas with little attention to tonal nuance or speaker perspective." },
      ],
      commonError: "Treating the tone as uniformly ‘sad’ throughout instead of tracing the exact transition from defensive grasping to serene relinquishment.",
      strategy: "Use precise tonal adjectives (guarded → wistful → elegiac → serene) anchored in contrasting verbs",
    },
    {
      id: "exam-p1-sl-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      marks: 6,
      topicId: "4-poetry-and-drama",
      guideRef: "poetic-imagery-sound-voice",
      question: `${POEM_PASSAGE}\n\n**Evaluate** how the closing three lines (*“I laid the key upon the sill. / Outside, the wet hibiscus bowed beneath its weight, / and the empty room grew larger than the house.”*) combine symbolic gesture, natural imagery, and paradox to create a resonant ending. *(6 marks)*`,
      hints: [
        "Consider the threshold symbolism of the ‘sill’—neither fully inside the past house nor entirely outside it.",
        "Examine the personification of the ‘wet hibiscus’ bowing: what double meaning sits inside ‘its weight’ (rainwater vs grief/reverence)?",
        "Unpack the spatial paradox of the final line: how can an empty room grow ‘larger’ than the entire building?",
      ],
      modelAnswer:
        "The closing three lines achieve poignant closure by fusing minimalist gesture, empathetic natural imagery, and a striking spatial paradox. First, isolating the stark monosyllabic sentence ‘I laid the key upon the sill’ gives the speaker’s surrender quiet ceremonial dignity: placing the brass key on a liminal windowsill—a boundary mediating interior memory and exterior future—transforms dispossession into deliberate stewardship. Immediately turning ‘Outside’, the poet employs pathetic fallacy as the rain-soaked hibiscus ‘bowed beneath its weight’. The ambiguous possessive pronoun ‘its’ operates simultaneously on literal and elegiac planes, evoking both tropical rain saturating petals and a reverential genuflection under the emotional gravity of mourning. Finally, the closing line overturns Euclidean logic: stripped of clutter and boxes, the ‘empty room’ expands conceptually ‘larger than the house’. This resonant paradox asserts that once material inventory disappears, grief and remembrance dilate beyond architectural walls into an unbounded inner space, leaving the reader suspended between physical vacancy and emotional fullness.",
      markScheme: [
        {
          point: "Analyses the stark, monosyllabic pacing or restrained ceremonial tone of setting the key down.",
          keywords: ["monosyllabic", "ceremonial", "dignity", "stark", "minimalist", "surrender"],
        },
        {
          point: "Interprets the symbolic liminality of the ‘sill’ as a threshold between inside/outside or past/future.",
          keywords: ["liminal", "threshold", "boundary", "mediating", "windowsill", "between"],
        },
        {
          point: "Evaluates the personification / pathetic fallacy of the ‘wet hibiscus’ bowing in reverence or mourning.",
          keywords: ["pathetic fallacy", "personification", "reveren", "genuflection", "mourning", "empathetic"],
        },
        {
          point: "Unpacks the productive ambiguity in ‘beneath its weight’ (physical rain versus emotional gravity of loss).",
          keywords: ["ambigu", "literal", "gravity", "double", "rain", "petals"],
        },
        {
          point: "Analyses the closing spatial paradox (‘empty room grew larger than the house’) overturning physical scale.",
          keywords: ["paradox", "spatial", "euclidean", "scale", "expands", "dilate"],
        },
        {
          point: "Evaluates the overall reader effect: balancing physical vacancy with emotional fullness or enduring presence.",
          keywords: ["vacancy", "fullness", "unbounded", "poignant", "closure", "suspended"],
        },
      ],
      markbands: [
        { band: "Band 3 (5–6)", marks: [5, 6], descriptor: "Evaluates all three features—gesture, natural imagery, and paradox—explaining subtle ambiguities and emotional reader impact." },
        { band: "Band 2 (3–4)", marks: [3, 4], descriptor: "Explains the symbolism of the key and the paradox clearly, though evaluation of nuance or natural imagery is uneven." },
        { band: "Band 1 (1–2)", marks: [1, 2], descriptor: "Paraphrases the ending with basic comment on sadness or emptiness." },
      ],
      commonError: "Calling the final line ‘hyperbole’ instead of analysing how the spatial paradox redefines emptiness as expansive presence.",
      strategy: "Unpack small words (‘sill’, ‘its’, ‘larger’)—micro-precision yields top Criterion B evaluation",
    },
    {
      id: "exam-p1-sl-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      marks: 20,
      topicId: "7-paper1-paper2-mastery",
      guideRef: "paper1-guiding-question-planning",
      question: `${POEM_PASSAGE}\n\n### Full IB Paper 1 (SL) Guided Literary Analysis — Passage 1 (Poetry)\n\n**Guiding Question:** *How does the poet use imagery, structural progression, and sound to explore the tension between material possessions and enduring memory?*\n\nWrite a complete, conceptually organised IB Paper 1 Guided Literary Analysis essay (do NOT organise line-by-line or stanza-by-stanza). *(20 marks: Criterion A 5 · Criterion B 5 · Criterion C 5 · Criterion D 5)*`,
      hints: [
        "Plan 3 conceptual movements rather than walking sequentially through lines 1–22: e.g. (1) Bureaucratic inventory as fragile defence against grief, (2) Architectural and sensory traces resisting erasure, (3) Rhythmic fracture and spatial paradox enacting quiet relinquishment.",
        "Integrate short 1–4 word embedded quotations and evaluate *how* soundscapes (sibilance vs plosives), syntax/lineation, and imagery work together.",
        "Keep the guiding question’s central tension—material possessions versus enduring memory—driving every topic sentence and your synthesis conclusion.",
      ],
      modelAnswer: `### Essay: The Architecture of Absence in *Inventory of the Brass Key*

In *Inventory of the Brass Key*, the poet interrogates a central paradox of bereavement: the objects we catalogue to preserve the dead are ultimately less durable than the intangible imprints left behind by their disappearance. Rather than presenting mourning as dramatic outburst, the lyrical speaker stages a quiet domestic reckoning during the clearing of a grandmother’s coastal home. Through an extended lexical field of bookkeeping, tactile and acoustic contrasts, and a decisive structural shift from containment to expansion, the poet demonstrates that true remembrance begins only when the living relinquish material ownership and accept absence as a shaping presence.

Initially, the poem exposes how physical inventory operates as an inadequate psychological shield against grief. Opening with the stark claim that the family ‘weighed’ an entire household inside ‘cardboard boxes’, the speaker aligns familial love with commercial logistics. This administrative register proliferates across the first movement through ‘sorting’, ‘ledger-books’, ‘prices’, and the sister’s ‘neat, obedient squares’, portraying domestic order as compulsive emotional restraint. Even the external climate participates in this scrutiny: personified rain ticks against ‘louvred glass’, relentlessly ‘auditing’ unspoken family ‘silence’. Here, hushed sibilance (‘swans’, ‘small silence’, ‘salt’, ‘slant-shouldered script’) weaves a subdued, archival whisper that contrasts sharply with percussive plosives in ‘cardboard boxes’, ‘chipped’, and ‘pocketed’. That sonic friction mirrors an internal struggle between tidy compliance and stubborn grief. Most revealingly, the speaker’s furtive pocketing of the ‘heavy key’—its verdigris-stained brass rendered ‘cold as a coin / pressed into a palm before a crossing’—conflates property with a mythic funerary obol. By binding economic coinage to death’s passage, the simile exposes the futility of hoarding metal to halt mortality.

Beneath this ledger-bound surface, however, the poet constructs a counter-archive of bodily and sensory traces that defy packing. Even before the poem’s structural turn, the house behaves as an organic witness: ‘floorboards held the map of her narrow heels’, translating habitual movement into cartography, while a singular ‘creak by the pantry’ preserves her unhurried domestic rhythm. Once the removals van enters the lane, the stanzaic break and adversative conjunction ‘Yet’ dismantle the opening illusion of containment. Negating the van’s utilitarian authority through parallel negatives (‘no crate’, ‘nor lift’), the speaker elevates ephemeral impressions—lingering ‘clove-smoke’ under the eaves and the ‘pale rectangle’ of unfaded plaster behind a removed mirror—above tangible heirlooms. The extended visual conceit of the mirror’s negative imprint is especially incisive: forty summers of sunlight have faded every surrounding wall, turning literal emptiness into a ‘sharper silhouette’ than ‘brass or ledgers’. Through this ironic inversion, memory is shown to be etched by light and time rather than locked inside chests.

Crucially, the poet aligns prosody and syntactic architecture with the speaker’s psychological release. Across lines 17–20, fluid enjambment pulls a single unfolding clause across three consecutive line breaks, mimicking how realisations about enduring absence overflow neat domestic borders. Immediately afterwards, a stark medial caesura after ‘ledgers.’ halts that momentum abruptly, clearing acoustic space for the unadorned monosyllabic declaration: ‘I laid the key upon the sill.’ Placing the key on a liminal threshold—poised between interior past and exterior street—marks an ethical maturation from clutching to stewardship. Outside, pathetic fallacy deepens this serene surrender as the ‘wet hibiscus bowed beneath its weight’, where the ambiguous pronoun ‘its’ fuses monsoon rain with the reverential gravity of mourning. Finally, the closing line delivers a resonant spatial paradox: stripped of furniture, ‘the empty room grew larger than the house’. Overturning physical geometry, the poet suggests that vacating the property liberates memory from cramped containers, allowing absence itself to expand into an unbounded emotional legacy.

Ultimately, *Inventory of the Brass Key* moves beyond elegiac nostalgia to critique our faith in tangible possession. By pitting bookkeeping diction against sensory permanence, and constraining rhythm against sudden syntactic release, the poet guides both speaker and reader toward a counterintuitive solace: what endures longest is neither the brass key nor the ledger-book, but the luminous silhouette carved by a life lived.`,
      markScheme: [
        // Criterion A (5 marks): Understanding, interpretation, implications, quotations
        { point: "[Crit A 1/5] Articulates a perceptive, arguable central thesis directly addressing the tension between material possessions and enduring memory.", keywords: ["paradox", "bereavement", "intangible", "material ownership"] },
        { point: "[Crit A 2/5] Explores how domestic inventory and bookkeeping function psychologically as emotional restraint or defence against grief.", keywords: ["psychological shield", "emotional restraint", "compulsive", "defence"] },
        { point: "[Crit A 3/5] Interprets the counter-archive of bodily and sensory traces (‘clove-smoke’, floorboards, mirror shadow) resisting erasure.", keywords: ["counter-archive", "defy packing", "negative imprint", "sensory"] },
        { point: "[Crit A 4/5] Explores subtle ambiguities and implications (e.g. funerary obol undertone of ‘coin’, double weight of the bowing hibiscus).", keywords: ["funerary obol", "ambiguous", "reverential", "mortality"] },
        { point: "[Crit A 5/5] Embeds short, well-chosen textual references smoothly throughout to substantiate every interpretive claim.", keywords: ["louvred glass", "narrow heels", "clove-smoke", "pale rectangle"] },
        // Criterion B (5 marks): Analysis & evaluation of authorial choices
        { point: "[Crit B 1/5] Evaluates the extended semantic field of accounting/bookkeeping and its ironic breakdown.", keywords: ["lexical field", "bookkeeping", "commercial logistics", "futility"] },
        { point: "[Crit B 2/5] Analyses acoustic texture purposefully (e.g. contrasting hushed sibilance with percussive plosives) rather than empty sound-spotting.", keywords: ["sibilance", "plosives", "sonic friction", "acoustic"] },
        { point: "[Crit B 3/5] Analyses figurative imagery in depth (personification of rain/house, extended mirror conceit, or pathetic fallacy).", keywords: ["personified", "conceit", "pathetic fallacy", "cartography"] },
        { point: "[Crit B 4/5] Evaluates how structural progression and the adversative turn (‘Yet’) shift the poem from containment to expansive release.", keywords: ["stanzaic break", "adversative", "containment", "dismantle"] },
        { point: "[Crit B 5/5] Evaluates prosodic/syntactic choices (run-on momentum arrested by an abrupt mid-line pause) enacting psychological surrender.", keywords: ["enjambment", "caesura", "monosyllabic", "prosody"] },
        // Criterion C (5 marks): Focus & conceptual organisation
        { point: "[Crit C 1/5] Organises the essay into cohesive conceptual movements rather than chronological line-by-line paraphrase.", keywords: ["initially", "beneath this", "crucially", "ultimately"] },
        { point: "[Crit C 2/5] Sustains strict relevance to the guiding question across introduction, body sections, and conclusion.", keywords: ["guiding", "tangible possession", "remembrance", "legacy"] },
        { point: "[Crit C 3/5] Uses arguable conceptual topic sentences that frame analytical ideas before evidence.", keywords: ["inadequate", "counter-archive", "aligns prosody", "maturation"] },
        { point: "[Crit C 4/5] Integrates cohesive analytical transitions connecting sound, imagery, and form into one cumulative argument.", keywords: ["consequently", "however", "most revealingly", "immediately afterwards"] },
        { point: "[Crit C 5/5] Concludes with a reflective synthesis evaluating the closing spatial paradox rather than mechanically repeating earlier points.", keywords: ["counterintuitive solace", "luminous silhouette", "unbounded", "geometry"] },
        // Criterion D (5 marks): Language, precision, register
        { point: "[Crit D 1/5] Maintains a formal, concise, and authoritative academic literary register throughout.", keywords: ["interrogates", "proliferates", "conflates", "dismantle"] },
        { point: "[Crit D 2/5] Deploys accurate, subject-specific poetic terminology naturally in service of meaning.", keywords: ["lyrical speaker", "liminal", "simile", "elegiac"] },
        { point: "[Crit D 3/5] Varies sentence architecture effectively to build analytical momentum and clarity.", keywords: ["rather than", "through this ironic", "overturning physical", "what endures"] },
        { point: "[Crit D 4/5] Demonstrates exact lexical precision when distinguishing speaker attitude, gesture, and aesthetic effect.", keywords: ["stewardship", "furtive", "ephemeral", "utilitarian"] },
        { point: "[Crit D 5/5] Weaves quotations grammatically into fluent sentences free from mechanical ‘this quote shows’ phrasing.", keywords: ["etched by light", "elevates ephemeral", "stages a quiet", "delivers a resonant"] },
      ],
      markbands: P1_MARKBANDS_20,
      commonError: "Writing a chronological walkthrough (‘In lines 1–4… Next in lines 5–8…’) or spotting sibilance and enjambment without linking them to the speaker’s emotional transition.",
      strategy: "Structure around 3 conceptual ideas (Inventory → Traces → Release) while tracking how form evolves across the whole poem",
    },

    // ======================== PASSAGE 2: PROSE FICTION (Q08–Q15) ===========
    {
      id: "exam-p1-sl-q08",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      topicId: "5-prose-fiction-nonfiction",
      guideRef: "narrative-perspective-focalization",
      question: `${PROSE_PASSAGE}\n\nIdentify the **narrative technique** used in the opening two sentences of Paragraph 2 (*“Really, what had he expected to find after six years of postcards and polite birthday calls? A repentant patriarch waiting with tea and an apology?”*), where third-person past-tense narration merges seamlessly with Arjun’s unspoken idiom without quotation marks.`,
      answer: {
        type: "text",
        accept: [
          "free indirect discourse",
          "free indirect speech",
          "free indirect style",
          "free indirect thought",
          "fid",
        ],
        display: "free indirect discourse",
      },
      traps: [
        {
          spec: { type: "text", accept: ["direct speech", "direct thought"] },
          feedback: "Direct speech uses quotation marks and first-person present tense; here third-person grammar (‘he’, ‘had’) absorbs Arjun’s private sardonic voice.",
        },
        {
          spec: { type: "text", accept: ["stream of consciousness"] },
          feedback: "Stream of consciousness breaks syntax into associative fragments, whereas these sentences preserve orderly third-person narrator grammar infused with character voice.",
        },
      ],
      hints: [
        "Notice the blend: third-person pronoun (‘he’) and past perfect (‘had he expected’), combined with Arjun’s colloquial opener ‘Really’ and rhetorical sarcasm.",
        "This three-word narratological term describes speech or thought presented *freely* (without ‘he thought that’) and *indirectly* (keeping third-person tense).",
      ],
      solution: [
        "The opening questions of Paragraph 2 retain third-person past-tense grammar while adopting Arjun’s defensive, sardonic cadence (‘Really… A repentant patriarch…?’) without dialogue tags or quotation marks.",
        "This technique is **free indirect discourse** (also termed free indirect speech/style/thought).",
      ],
      commonError: "Calling free indirect discourse ‘first-person narration’ or ‘direct speech’ simply because it sounds intimate and colloquial.",
      strategy: "Check grammar (3rd person + past tense) vs voice (character’s private sarcasm) to spot free indirect discourse",
    },
    {
      id: "exam-p1-sl-q09",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      topicId: "5-prose-fiction-nonfiction",
      guideRef: "prose-time-setting-symbolism",
      question: `${PROSE_PASSAGE}\n\nIdentify the **structural time-shift device** used in Paragraph 3 (*“Fourteen years earlier, during the October cyclone…”*) that interrupts the narrative present to retrieve an earlier memory.`,
      answer: {
        type: "text",
        accept: ["analepsis", "flashback"],
        display: "analepsis (flashback)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["prolepsis", "flashforward", "foreshadowing"] },
          feedback: "Prolepsis leaps *forward* in narrative time; Paragraph 3 reaches fourteen years *backward* into Arjun’s childhood.",
        },
        {
          spec: { type: "text", accept: ["ellipsis"] },
          feedback: "Ellipsis omits a span of time completely, whereas Paragraph 3 inserts a vivid recalled scene from the past.",
        },
      ],
      hints: [
        "Either the precise narratological Greek term or its standard English equivalent is accepted.",
        "Contrast reaching backward into the past with leaping forward (prolepsis).",
      ],
      solution: [
        "Paragraph 3 breaks the chronological present to insert a memory from fourteen years earlier during the October cyclone.",
        "This temporal device is **analepsis** (or **flashback**).",
      ],
      commonError: "Confusing analepsis (backward time-shift) with prolepsis (forward time-shift).",
      strategy: "Pair the Greek roots: *ana-* = back/up (analepsis), *pro-* = forward (prolepsis)",
    },
    {
      id: "exam-p1-sl-q10",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      topicId: "5-prose-fiction-nonfiction",
      guideRef: "narrative-perspective-focalization",
      question: `${PROSE_PASSAGE}\n\nState the **narrative point of view** (grammatical person and scope of psychological access) used throughout *The Salt Clock*, where events are narrated externally yet filtered exclusively through Arjun’s perceptions and private judgements.`,
      answer: {
        type: "text",
        accept: [
          "third-person limited",
          "third person limited",
          "3rd-person limited",
          "3rd person limited",
          "limited third-person",
          "limited third person",
          "internal focalization",
          "internal focalisation",
        ],
        display: "third-person limited",
      },
      traps: [
        {
          spec: { type: "text", accept: ["third-person omniscient", "third person omniscient", "omniscient"] },
          feedback: "An omniscient narrator would reveal the father’s private thoughts directly; here the reader is locked inside Arjun’s assumptions until the final drawing shocks him.",
        },
        {
          spec: { type: "text", accept: ["first-person", "first person"] },
          feedback: "The passage uses ‘Arjun’ and ‘he/his’, never ‘I’ outside spoken dialogue.",
        },
      ],
      hints: [
        "Notice two things: the narrator uses ‘he’/‘Arjun’ (not ‘I’), and we NEVER gain direct access to his father’s private mind.",
        "Combine the grammatical person with the scope word describing restricted internal focalization.",
      ],
      solution: [
        "The extract uses third-person pronouns (‘Arjun’, ‘he’) while restricting psychological access exclusively to Arjun’s sensory impressions, resentments, and memories.",
        "This narrative mode is **third-person limited** (internal focalization).",
      ],
      commonError: "Calling any third-person narrator ‘omniscient’ even when the text deliberately withholds other characters’ interiority to sustain surprise.",
      strategy: "Test omniscience: if the narrator withholds another character’s motives until a final clue reveals them, focalization is limited",
    },
    {
      id: "exam-p1-sl-q11",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      topicId: "7-paper1-paper2-mastery",
      guideRef: "paper1-guiding-question-planning",
      question:
        "Under the official IB Diploma English A: Literature syllabus (First Assessment 2021), state the **percentage weighting** of **Paper 1** in the final subject grade (identical for both SL and HL).",
      answer: {
        type: "number",
        value: 35,
        display: "35%",
      },
      traps: [
        {
          spec: { type: "number", value: 25 },
          feedback: "25% is the HL weighting for Paper 2, whereas Paper 1 carries 35% at both SL and HL.",
        },
        {
          spec: { type: "number", value: 30 },
          feedback: "30% is the SL weighting for the Individual Oral (IA); Paper 1 is worth 35%.",
        },
      ],
      hints: [
        "Recall the SL split (35% / 35% / 30%) and HL split (35% / 25% / 20% / 20%).",
        "Paper 1 holds the exact same percentage share at both Standard Level and Higher Level.",
      ],
      solution: [
        "SL weightings (FA2021): Paper 1 = **35%**, Paper 2 = 35%, Individual Oral = 30%.",
        "HL weightings (FA2021): Paper 1 = **35%**, Paper 2 = 25%, HL Essay = 20%, Individual Oral = 20%.",
      ],
      commonError: "Confusing Paper 1’s 35% weighting with HL Paper 2’s 25% or the SL Individual Oral’s 30%.",
      strategy: "Know the FA2021 assessment grid cold so your revision hours match exam impact",
    },
    {
      id: "exam-p1-sl-q12",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Analyse",
      marks: 4,
      topicId: "5-prose-fiction-nonfiction",
      guideRef: "prose-time-setting-symbolism",
      question: `${PROSE_PASSAGE}\n\n**Analyse** how the physical setting and spatial details in Paragraph 1 (the threshold, damp cedar and rust, settled dust, and the crooked barometer) establish Arjun’s emotional distance before any memory is narrated. *(4 marks)*`,
      hints: [
        "Look at where Arjun physically stands (‘lingered on the threshold’) and what his ‘folded umbrella’ signals about hesitation and reluctance to belong.",
        "Examine the irony of a craftsman’s precision instrument (‘brass calipers’, ‘glass barometer’) hanging ‘crooked by two degrees’—and why Arjun remembers that exact angle six years later.",
      ],
      modelAnswer:
        "Paragraph 1 transforms architectural setting into an immediate psychological map of estrangement. Opening with olfactory decay—‘damp cedar shavings’ paired with ‘the sea’s slow rust’—the writer evokes both ingrained paternal craft and gradual corrosion across silent years. Arjun’s hesitation on the physical ‘threshold’, holding a ‘folded umbrella’ that marks a sterile ‘neat grey ring’ onto concrete, casts him as a reluctant visitor afraid of contaminating an ossified shrine whose dust resembles ‘powdered chalk’. Most tellingly, the barometer hanging ‘crooked by two degrees’ operates as an ironic visual motif: despite swearing to reject his father’s trade, Arjun still notices a two-degree tilt automatically, exposing how deeply his father’s habits of measurement remain etched into his own perception. Thus, physical stasis and reluctant entry convey both alienation and inescapable filial conditioning.",
      markScheme: [
        {
          point: "Analyses sensory imagery (‘damp cedar’, ‘slow rust’, ‘powdered chalk’) as evoking both preserved craft and long temporal stagnation/decay.",
          keywords: ["olfactory", "corrosion", "stagnation", "decay", "ossified", "shrine"],
        },
        {
          point: "Interprets Arjun’s physical position on the ‘threshold’ and ‘folded umbrella’ as visual markers of hesitation and outsider status.",
          keywords: ["visitor", "outsider", "hesitation", "reluctant", "liminal", "boundary"],
        },
        {
          point: "Analyses the ironic significance of noticing the barometer’s exact ‘two degrees’ tilt—revealing involuntary resemblance to his father’s exactitude.",
          keywords: ["ironic", "involuntary", "conditioning", "exactitude", "resemblance", "etched"],
        },
        {
          point: "Connects spatial atmosphere to the core psychological tension between deliberate alienation and inherited identity.",
          keywords: ["estrangement", "alienation", "filial", "inherited", "psychological map"],
        },
      ],
      markbands: [
        { band: "Band 3 (4)", marks: [4, 4], descriptor: "Links concrete spatial and sensory motifs insightfully to both emotional hesitation and unconscious filial resemblance." },
        { band: "Band 2 (2–3)", marks: [2, 3], descriptor: "Explains how dust, rust, or standing at the doorway suggests discomfort or estrangement." },
        { band: "Band 1 (1)", marks: [1, 1], descriptor: "Describes the workshop appearance without connecting details to Arjun’s psychology." },
      ],
      commonError: "Treating the crooked barometer merely as untidiness instead of spotting the psychological irony that Arjun still instinctively measures angles to two degrees.",
      strategy: "Read interior spaces as extensions of character psychology and unspoken tension",
    },
    {
      id: "exam-p1-sl-q13",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Examine",
      marks: 5,
      topicId: "2-time-and-space",
      guideRef: "historical-cultural-lenses",
      question: `${PROSE_PASSAGE}\n\n**Examine** how the workshop space, Arjun’s bodily reaction in Paragraph 2, and his father’s remembered maxim in Paragraph 3 (*“A straight line… is the only promise a building can keep.”*) dramatise an intergenerational conflict over authority and unspoken care. *(5 marks)*`,
      hints: [
        "Look closely at Arjun’s somatic reaction (‘shoulders dropped into their boyhood posture of cautious obedience’)—how does domestic space trigger inherited power dynamics?",
        "Unpack the double resonance of the father’s maxim: to young Arjun it felt cold and authoritarian, yet what austere ethics of shelter and reliability does it articulate during a cyclone?",
      ],
      modelAnswer:
        "The workshop operates as a culturally coded arena of patriarchal authority in which craft discipline doubles as emotional control. Even after six years of adult independence, crossing the room physically triggers Arjun’s somatic compliance as his ‘shoulders dropped into their boyhood posture of cautious obedience’, illustrating how familial hierarchies imprint themselves onto the body long after departure. This dynamic crystallises in the cyclone memory, where the father issues his austere aphorism ‘without glancing up’, privileging structural geometry over parental reassurance while his son holds the ‘trembling’ lantern in fear. Yet the maxim—‘A straight line… is the only promise a building can keep’—carries profound ambiguity rather than simple cruelty. Forged amid a violent coastal storm, the father’s creed frames architectural integrity as the sole trustworthy form of protection in an unpredictable world, revealing an older generation’s tacit ethos of care expressed through stoic labour rather than spoken affection—precisely the language young Arjun misread as cold indifference.",
      markScheme: [
        {
          point: "Analyses the workshop as a site of patriarchal/generational authority that overrides adult independence.",
          keywords: ["patriarchal", "hierarchy", "hierarchies", "authority", "generational", "coded"],
        },
        {
          point: "Examines Arjun’s involuntary bodily posture (‘shoulders dropped’) as embodied filial conditioning.",
          keywords: ["somatic", "embodied", "compliance", "imprint", "conditioning", "involuntary"],
        },
        {
          point: "Analyses how the father’s refusal to look up and the ‘trembling’ lantern dramatise emotional austerity and childhood resentment.",
          keywords: ["austerity", "austere", "resentment", "reassurance", "indifference", "fear"],
        },
        {
          point: "Interrogates the maxim’s deeper ethical resonance: precision and structural durability as stoic protection against coastal storm.",
          keywords: ["stoic", "creed", "ethos", "protection", "integrity", "aphorism"],
        },
        {
          point: "Synthesises the intergenerational miscommunication: care encoded in material craft versus longed-for verbal affection.",
          keywords: ["miscommunication", "misread", "tacit", "verbal", "affection", "language"],
        },
      ],
      markbands: [
        { band: "Band 3 (4–5)", marks: [4, 5], descriptor: "Examines both embodied authority and the nuanced ethical ambiguity of the father’s craft-based code of care." },
        { band: "Band 2 (2–3)", marks: [2, 3], descriptor: "Identifies the father as strict and explains why Arjun resented holding the lantern during the storm." },
        { band: "Band 1 (1)", marks: [1, 1], descriptor: "Summarises the cyclone scene with minimal discussion of generational values or space." },
      ],
      commonError: "Casting the father one-dimensionally as a cruel villain instead of probing how his coastal craft ethos functions as an unspoken, imperfect form of care.",
      strategy: "Look for competing value systems beneath family arguments—top IB analysis probes both sides’ logic",
    },
    {
      id: "exam-p1-sl-q14",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      marks: 6,
      topicId: "1-readers-writers-texts",
      guideRef: "voice-tone-ambiguity",
      question: `${PROSE_PASSAGE}\n\n**Evaluate** how Paragraph 4’s visual discovery reshapes the reader’s earlier impression of Arjun’s father while deliberately preserving emotional ambiguity instead of offering a tidy reconciliation. *(6 marks)*`,
      hints: [
        "Contrast the utilitarian structures associated with the father earlier (‘jetty’, ‘warehouse’) with the ‘narrow courtyard house’ angled ‘to catch the morning light’.",
        "Look closely at the adjective ‘unyielding’ describing the father’s handwriting in the final sentence—why keep that harsh word right next to a tender gesture?",
        "Notice what the ending withholds: Arjun’s spoken reaction, whether his father is even still alive or present, and whether reconciliation ever occurs.",
      ],
      modelAnswer:
        "Paragraph 4 executes a quiet, devastating narrative reversal by filtering tenderness strictly through the father’s architectural idiom. Earlier paragraphs relied on Arjun’s bitter focalization to construct the father as a stubbornly utilitarian patriarch who never admitted error; lifting the ‘heaviest beach stone’ literally and metaphorically uncovers what defensive resentment had weighted down. Instead of another commercial ‘jetty’ or ‘warehouse’, the recent elevation depicts a domestic ‘narrow courtyard house’ whose windows are painstakingly ‘angled to catch the morning light’—recasting precision from rigid control into quiet devotion oriented towards warmth and renewal. Yet the writer scrupulously refuses sentimental closure. Naming the father’s calligraphy an ‘unyielding hand’ preserves his formidable temperament right beside Arjun’s initials, reminding readers that devotion does not erase decades of emotional severity. Moreover, by terminating the extract at the instant of visual recognition—withholding Arjun’s spoken response and leaving the father physically absent—the writer opens a powerful textual gap, compelling readers to inhabit Arjun’s stunned reassessment rather than consuming an unearned reconciliation.",
      markScheme: [
        {
          point: "Analyses how the final discovery overturns or complicates the father’s characterisation established earlier through Arjun’s biased lens.",
          keywords: ["reversal", "recast", "overturns", "biased", "bitter", "reassessment"],
        },
        {
          point: "Evaluates the symbolic contrast between commercial ‘jetty’/‘warehouse’ blueprints and the light-catching ‘courtyard house’.",
          keywords: ["utilitarian", "commercial", "devotion", "warmth", "renewal", "domestic"],
        },
        {
          point: "Interprets the physical unveiling (‘heaviest beach stone’) as uncovering suppressed affection beneath emotional weight.",
          keywords: ["unveiling", "uncovers", "metaphorically", "weighted", "suppressed"],
        },
        {
          point: "Analyses the crucial lexical friction of ‘unyielding hand’ preserving the father’s severity alongside his care.",
          keywords: ["unyielding", "severity", "formidable", "calligraphy", "friction", "temperament"],
        },
        {
          point: "Evaluates structural restraint: ending on a silent visual detail that withholds Arjun’s reaction and the father’s fate.",
          keywords: ["withholding", "withholds", "sentimental", "terminating", "absent", "silent"],
        },
        {
          point: "Connects this open ending to reader effect (productive ambiguity / textual gap resisting unearned reconciliation).",
          keywords: ["textual gap", "unearned", "ambigu", "stunned", "closure", "reconciliation"],
        },
      ],
      markbands: [
        { band: "Band 3 (5–6)", marks: [5, 6], descriptor: "Evaluates both the tender reversal and the deliberate lexical/structural restraint that keeps the ending productively ambiguous." },
        { band: "Band 2 (3–4)", marks: [3, 4], descriptor: "Explains how the house drawing shows the father cared, with partial comment on the open ending." },
        { band: "Band 1 (1–2)", marks: [1, 2], descriptor: "States simply that the father secretly loved Arjun and they will likely forgive each other." },
      ],
      commonError: "Assuming the drawing guarantees a happy reunion instead of evaluating how ‘unyielding’ and the abrupt silence deliberately withhold neat closure.",
      strategy: "Interrogate a single dissonant adjective (‘unyielding’) at a tender climax—it often holds the text’s richest ambiguity",
    },
    {
      id: "exam-p1-sl-q15",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      marks: 20,
      topicId: "7-paper1-paper2-mastery",
      guideRef: "rubric-mastery-crit-a-d",
      question: `${PROSE_PASSAGE}\n\n### Full IB Paper 1 (SL) Guided Literary Analysis — Passage 2 (Prose Fiction)\n\n**Guiding Question:** *How does the writer use narrative perspective, spatial detail, and shifts in time to portray an unresolved family estrangement?*\n\nWrite a complete, conceptually organised IB Paper 1 Guided Literary Analysis essay (avoid chronological paragraph-by-paragraph summary). *(20 marks: Criterion A 5 · Criterion B 5 · Criterion C 5 · Criterion D 5)*`,
      hints: [
        "Group your essay into 3 conceptual lines of argument: (1) Restricted focalization and defensive interiority shaping bias, (2) Spatial motifs of craft and decay externalising filial conditioning, (3) Temporal interruption and visual reversal complicating estrangement without resolving it.",
        "Evaluate *how* free indirect discourse, setting motifs (barometer, beach stones, blueprints), and the fourteen-year flashback control reader sympathy.",
        "Keep your conclusion evaluative: explain why leaving the estrangement unresolved is central to the passage’s psychological truth.",
      ],
      modelAnswer: `### Essay: Measured Distances in *The Salt Clock*

In *The Salt Clock*, the writer portrays family estrangement not as theatrical hostility, but as an ingrained architecture of silence, pride, and misread devotion. Through tightly constrained focalization, charged spatial motifs, and a piercing temporal flashback, the narrative traps the reader inside Arjun’s defensive resentment before quietly dismantling the certainty of his judgement. Rather than delivering sentimental reconciliation, the extract reveals how intergenerational love encoded solely in technical craft can remain invisible until absence forces a second look.

At the heart of the passage’s psychological tension lies its tightly controlled third-person limited focalization, which simultaneously fosters intimacy with Arjun and alerts the reader to his interpretive bias. Entering his estranged father’s workshop after six years of superficial ‘postcards and polite birthday calls’, Arjun rehearses old grievances through cutting free indirect discourse: ‘Really, what had he expected…? A repentant patriarch waiting with tea and an apology?’ Retaining third-person past tense while absorbing Arjun’s sardonic colloquialism shrinks psychic distance, pulling the reader into his defensive scepticism while subtly exposing its rehearsed brittleness. Because the narrator rigorously withholds direct access to the father’s interiority, readers initially inherit Arjun’s caricature of an obdurate draftsman who blames timber merchants and sharpens pencils to evade accountability. Yet subtle fractures already undermine Arjun’s pose of detached adulthood: noticing the barometer’s exact ‘two degrees’ tilt and feeling his shoulders drop involuntarily into ‘boyhood posture’ reveal that rebellion has never genuinely freed him from paternal conditioning.

This ambivalent bond is externalised through dense spatial and material motifs linking coastal decay with rigid exactitude. From the opening threshold—where Arjun’s folded umbrella draws a sterile ‘neat grey ring’ onto concrete—the writer maps emotional distance onto physical space, contrasting the outsider’s reluctance with ‘damp cedar’, ‘slow rust’, and chalk-like dust that petrify the workshop in time. Across the drafting table, unfinished blueprints curl ‘like dry leaves’ pinned beneath ‘smooth beach stones’, an organic simile merging natural entropy with stubborn containment. The father’s environment thus embodies an austere worldview where coastal fragility must be disciplined by calipers, bolts, and weight. Paradoxically, every visual instrument that Arjun perceives as cold rigidity also signifies endurance against a hostile sea, quietly preparing the ground for a more nuanced reappraisal of the older man’s character.

Structural manipulation of narrative time deepens this reappraisal by juxtaposing childhood trauma against an unexpected contemporary discovery. Inserting an abrupt analepsis to the October cyclone ‘fourteen years earlier’, the writer slows narrative pace to dramatise the origin of Arjun’s bitterness: forced to steady a ‘trembling’ lantern while salt spray infiltrates the room, the boy receives only a severe aphorism delivered ‘without glancing up’—‘A straight line… is the only promise a building can keep.’ Placed alongside the frightened child wishing the light extinguished, the father’s creed initially reads as chilling emotional neglect. Yet snapping back to the present (‘Now’) transforms that remembered vow. Beneath the ‘heaviest beach stone’, Arjun uncovers not another commercial ‘jetty or a warehouse’, but a domestic ‘courtyard house’ drawn three weeks earlier, its windows angled deliberately ‘to catch the morning light’ and marked beside the scale with Arjun’s initials. Here, architectural exactitude is retroactively redeemed as a tacit language of care—the father keeping his ‘promise’ through ink and light because spoken tenderness lies beyond his reach. Crucially, however, the closing description of his ‘unyielding hand’ refuses neat sentimentality: the adjective insists that stubbornness and devotion coexist inseparably, while halting the scene at silent recognition opens a resonant textual gap that leaves forgiveness poignantly uncertain.

Ultimately, *The Salt Clock* derives its emotional authority from structural restraint. By aligning restricted perspective with measured domestic space and sharp temporal contrast, the writer exposes how resentment simplifies the people who shaped us—yet wisely withholds easy closure, leaving reader and protagonist alike poised on a newly unsettled threshold.`,
      markScheme: [
        // Criterion A (5 marks)
        { point: "[Crit A 1/5] Establishes a nuanced thesis defining estrangement as misread craft-based devotion rather than simple hostility.", keywords: ["architecture of silence", "misread devotion", "dismantling", "sentimental"] },
        { point: "[Crit A 2/5] Explores how Arjun’s defensive resentment shapes—and subtly distorts—the reader’s initial view of his father.", keywords: ["interpretive bias", "rehearsed", "caricature", "scepticism"] },
        { point: "[Crit A 3/5] Recognises the psychological irony of Arjun’s unconscious resemblance to his father’s precision and bodily conditioning.", keywords: ["conditioning", "involuntarily", "detached adulthood", "ambivalent"] },
        { point: "[Crit A 4/5] Interprets the ending’s double valence: redeeming paternal care while refusing tidy reconciliation.", keywords: ["retroactively redeemed", "coexist inseparably", "uncertain", "tacit language"] },
        { point: "[Crit A 5/5] Integrates crisp, apposite textual quotations fluently throughout the entire essay.", keywords: ["polite birthday calls", "slow rust", "dry leaves", "morning light"] },
        // Criterion B (5 marks)
        { point: "[Crit B 1/5] Evaluates third-person limited focalization and free indirect discourse in modulating psychic distance and irony.", keywords: ["limited focalization", "free indirect discourse", "psychic distance", "withholds"] },
        { point: "[Crit B 2/5] Analyses spatial and sensory motifs (threshold, umbrella ring, crooked barometer, rust/dust) as externalised psychology.", keywords: ["externalised", "petrify", "outsider", "sterile"] },
        { point: "[Crit B 3/5] Evaluates figurative imagery (organic simile ‘dry leaves’, symbolic beach stones, light-angled courtyard house).", keywords: ["organic simile", "entropy", "containment", "exactitude"] },
        { point: "[Crit B 4/5] Analyses temporal structuring—specifically how analepsis and pacing reframe the father’s storm-night maxim.", keywords: ["analepsis", "narrative pace", "aphorism", "juxtaposing"] },
        { point: "[Crit B 5/5] Evaluates the closing lexical friction (‘unyielding hand’) and abrupt structural halt as a deliberate textual gap.", keywords: ["unyielding hand", "textual gap", "stubbornness", "silent recognition"] },
        // Criterion C (5 marks)
        { point: "[Crit C 1/5] Organises the response into distinct conceptual movements (perspective → spatial motifs → temporal reversal) rather than paragraph-by-paragraph summary.", keywords: ["at the heart", "this ambivalent bond", "structural manipulation", "ultimately"] },
        { point: "[Crit C 2/5] Sustains razor-sharp alignment with all three pillars of the guiding question (perspective, space, time).", keywords: ["guiding", "temporal contrast", "restricted perspective", "domestic space"] },
        { point: "[Crit C 3/5] Leads each body paragraph with an arguable conceptual claim rather than plot narration.", keywords: ["tightly controlled", "charged spatial", "deepens this reappraisal", "derives its emotional"] },
        { point: "[Crit C 4/5] Builds cumulative cohesion across sections via purposeful analytical transitions.", keywords: ["paradoxically", "crucially", "yet subtle fractures", "snapping back"] },
        { point: "[Crit C 5/5] Delivers a reflective synthesis conclusion that echoes the spatial threshold metaphor without repeating points mechanically.", keywords: ["unsettled threshold", "structural restraint", "simplifies", "poised"] },
        // Criterion D (5 marks)
        { point: "[Crit D 1/5] Maintains a lucid, disciplined, and sophisticated academic literary register throughout.", keywords: ["obdurate", "austere", "worldview", "reappraisal"] },
        { point: "[Crit D 2/5] Uses narratological and literary terminology accurately and organically.", keywords: ["sardonic", "colloquialism", "interiority", "motifs"] },
        { point: "[Crit D 3/5] Demonstrates syntactic variety and rhetorical control to sharpen critical contrast.", keywords: ["rather than", "because the narrator", "placed alongside", "by aligning"] },
        { point: "[Crit D 4/5] Exhibits exact diction distinguishing nuance of tone, mood, and reader response.", keywords: ["brittleness", "poignantly", "fragility", "accountability"] },
        { point: "[Crit D 5/5] Embeds micro-evidence grammatically without awkward quotation drops or filler phrases.", keywords: ["infiltrates", "extinguished", "redeemed", "encoded"] },
      ],
      markbands: P1_MARKBANDS_20,
      commonError: "Walking through Paragraphs 1, 2, 3, and 4 in chronological order or concluding that the house drawing ‘proves they will forgive each other’.",
      strategy: "Unify perspective, space, and time into one conceptual thesis—and honour the passage’s deliberate ambiguity",
    },
  ],
};
