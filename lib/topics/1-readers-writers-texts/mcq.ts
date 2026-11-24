import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1: Close Reading, Craft & Embedded Evidence
  // Spread: 0×4, 1×4, 2×4, 3×3
  // ===========================================================================
  {
    id: "1-readers-writers-texts-m1",
    title: "MCQ Paper 1: Close Reading, Craft & Embedded Evidence",
    level: "SL",
    questions: [
      {
        id: "1-readers-writers-texts-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "close-reading-meaning",
        question:
          "Read this original unseen sentence:\n\n> *She locked the shutters, stacked the porcelain cups face down, and left the key beside the salt tin.*\n\nWhich analytical commentary best exemplifies Band 5 IB close reading rather than plot summary or empty feature-spotting?",
        options: [
          "The paratactic sequence of domestic closures recasts departure as deliberate ritual rather than impulsive flight.",
          "The writer uses clear visual imagery and action verbs so the reader can vividly picture what she does in the kitchen.",
          "She shuts the house up carefully, puts away her porcelain cups, and leaves the front key next to the salt tin.",
          "The detailed inventory of household objects demonstrates that the writer has strong descriptive skills throughout the passage.",
        ],
        answerIndex: 0,
        explanation:
          "Band 5 close reading connects a concrete authorial choice (paratactic sequence of domestic actions) through its mechanism to a conceptual effect (framing departure as measured ritual rather than panic). Retelling actions is plot summary, while claiming imagery lets readers 'vividly picture' the scene or praising 'strong descriptive skills' is generic feature-spotting.",
        hints: [
          "Check which response moves across Choice → Mechanism → Conceptual Effect.",
          "Eliminate any choice that merely retells the actions or uses vague praise like 'vividly picture' or 'strong descriptive skills'.",
        ],
      },
      {
        id: "1-readers-writers-texts-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "close-reading-meaning",
        question:
          "Read this original unseen extract:\n\n> *The committee approved the demolition on Tuesday; by Friday, the chapel's bell-frame lay numbered in chalk beside two skips of rubble.*\n\nWhich specific stylistic technique generates the sharpest tension between bureaucratic efficiency and cultural loss?",
        options: [
          "Sustained pathetic fallacy mirroring the narrator's personal grief in stormy weather.",
          "Extended hyperbole exaggerating the architectural grandeur of the demolished chapel.",
          "Structural juxtaposition pairing brisk administrative timing with the dismembered sacred artefact.",
          "Comic understatement mocking the incompetence of the local demolition crew.",
        ],
        answerIndex: 2,
        explanation:
          "Placing the brisk municipal timeline ('approved … on Tuesday; by Friday') directly beside the sacred bell-frame reduced to chalk-numbered fragments next to rubble skips is structural juxtaposition: the collision between administrative routine and cultural erasure sharpens the critique.",
        hints: [
          "Look at the two halves separated by the semicolon: what collides across that boundary?",
          "Notice there is no weather imagery, exaggeration, or comedy in the sentence.",
        ],
      },
      {
        id: "1-readers-writers-texts-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "close-reading-meaning",
        question:
          "In close reading, what is the primary analytical distinction between a word's **denotation** and its **connotation**?",
        options: [
          "Denotation refers to figurative metaphor in poetry, whereas connotation refers strictly to literal prose.",
          "Denotation is a word's literal dictionary sense, whereas connotation comprises its emotional and cultural associations.",
          "Denotation tracks grammatical sentence length, whereas connotation measures acoustic rhythm and rhyme.",
          "Denotation expresses the real author's biography, whereas connotation expresses a character's dialogue.",
        ],
        answerIndex: 1,
        explanation:
          "Denotation designates a word's explicit dictionary meaning (for instance, 'home' as a place of residence), whereas connotation encompasses the associative, emotional, and cultural resonance surrounding it (such as warmth, security, or confinement depending on context).",
        hints: [
          "Think of how 'house', 'dwelling', and 'sanctuary' share a basic literal meaning yet carry very different emotional charges.",
          "Match 'dictionary definition' with 'associative resonance'.",
        ],
      },
      {
        id: "1-readers-writers-texts-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "close-reading-meaning",
        question:
          "Read this original unseen sentence:\n\n> *He spoke of his brother's bankruptcy as a 'temporary liquidity adjustment', folding his cufflinks into velvet as he said it.*\n\nHow does the writer's semantic field of corporate finance function analytically here?",
        options: [
          "It confirms that the narrator works as a qualified chartered accountant advising his family.",
          "It creates realistic historical background showing how twentieth-century banks operated.",
          "It invites warm sympathy for the speaker's polite effort to spare his guests from awkwardness.",
          "It sanitises family ruin into clinical jargon, exposing the speaker's emotional insulation and class detachment.",
        ],
        answerIndex: 3,
        explanation:
          "Replacing human catastrophe ('bankruptcy') with bloodless corporate euphemism ('temporary liquidity adjustment') — paired with the luxury gesture of folding cufflinks into velvet — exposes how technical register sanitises distress and shields the speaker from empathy.",
        hints: [
          "Compare the human reality of 'bankruptcy' with the cold euphemism 'temporary liquidity adjustment'.",
          "What does pairing that phrase with velvet-lined cufflinks reveal about the speaker's emotional distance?",
        ],
      },
      {
        id: "1-readers-writers-texts-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "close-reading-meaning",
        question:
          "Read this original unseen line:\n\n> *The corridor smelled of boiled cabbage and damp wool, and the portraits seemed to lean inward as we passed.*\n\nWhich sentence demonstrates the cleanest **seamless micro-quotation embedding** for an IB Literature essay?",
        options: [
          "By claiming the portraits “seemed to lean inward”, the writer transforms an ordinary hallway into an oppressive corridor of surveillance.",
          "The narrator feels watched in the boarding house. “The portraits seemed to lean inward as we passed.” This quote shows she feels uncomfortable.",
          "The author uses a long quotation, “The corridor smelled of boiled cabbage and damp wool, and the portraits seemed to lean inward”, to create setting.",
          "In this extract, the portraits appear to lean inward towards the children while they walk down the corridor smelling cabbage and wool.",
        ],
        answerIndex: 0,
        explanation:
          "Weaving a concise four-word phrase ('seemed to lean inward') grammatically inside an analytical clause — and immediately evaluating how it turns domestic space into surveillance — exemplifies seamless IB quotation embedding without dropped sentences or 'This quote shows' filler.",
        hints: [
          "Look for a short 1–6 word quotation integrated smoothly into the grammar of an analytical sentence.",
          "Avoid dropped standalone quotes, overly long quotes, or pure paraphrase with no quotation.",
        ],
      },
      {
        id: "1-readers-writers-texts-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "close-reading-meaning",
        question:
          "Read these two original unseen extracts:\n\n> *Extract 1:* *The siren stopped. Ash drifted onto the steps. Nobody checked the mailbox.*\n> *Extract 2:* *Although the siren had finally ceased, and though fine grey ash was already drifting across the steps where neighbours usually paused, nobody dared cross the yard to check the mailbox.*\n\nWhat primary syntactic contrast distinguishes Extract 1 from Extract 2?",
        options: [
          "Extract 1 relies on rhetorical questions, whereas Extract 2 relies on imperative commands.",
          "Extract 1 uses stripped-back parataxis for stunned restraint, whereas Extract 2 uses layered hypotaxis to sustain anxious hesitation.",
          "Extract 1 employs ornate figurative conceits, whereas Extract 2 eliminates all visual detail.",
          "Extract 1 uses passive voice throughout, whereas Extract 2 shifts into dramatic dialogue.",
        ],
        answerIndex: 1,
        explanation:
          "Extract 1 sets three brief, unsubordinated clauses side by side (parataxis), enacting shock and numbed stillness; Extract 2 nests subordinate clauses ('Although … and though … where …') (hypotaxis), suspending the main clause to build lingering dread and hesitation.",
        hints: [
          "Notice the clauses in Extract 1 have no subordinating conjunctions ('although', 'where'), whereas Extract 2 stacks them.",
          "Recall the contrast between parataxis (side-by-side clauses) and hypotaxis (nested subordination).",
        ],
      },
      {
        id: "1-readers-writers-texts-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "close-reading-meaning",
        question:
          "Read this original unseen dialogue fragment:\n\n> *“Did you keep the photograph from the harbour?”*\n> *He straightened the napkin beside his knife. “The rain will ruin the apricots if it holds till dusk.”*\n\nWhat authorial choice carries the heaviest emotional weight in his reply?",
        options: [
          "Elaborate sensory synaesthesia blending sound and taste across the garden imagery.",
          "Direct didactic statement explicitly explaining his lifelong fear of coastal storms.",
          "Deliberate omission and abrupt topic deflection that reveal unresolved avoidance beneath mundane speech.",
          "Comic hyperbole exaggerating the financial loss of a single orchard harvest.",
        ],
        answerIndex: 2,
        explanation:
          "Refusing to reply to a direct emotional question — filling the silence instead with a fussy gesture ('straightened the napkin') and weather small talk — uses omission and deflection to let the reader infer concealed grief or guilt.",
        hints: [
          "Did he actually answer the question about the photograph?",
          "In close reading, what a character refuses to name often speaks louder than their literal words.",
        ],
      },
      {
        id: "1-readers-writers-texts-m1-q08",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "close-reading-meaning",
        question:
          "Read this original unseen poetic couplet:\n\n> *My ledger keeps each winter debt in ink,*\n> *yet frost erases borderlines by dawn.*\n\nWhich analysis most perceptively evaluates how the shifting imagery constructs conceptual tension?",
        options: [
          "The poet uses rhyme and nature imagery to remind readers that winter mornings are bitterly cold and financially difficult for families.",
          "The extended metaphor of an accounting ledger proves that the speaker dislikes mathematics and prefers walking outdoors at sunrise.",
          "The physical contrast between ink and frost highlights that paper notebooks are easily damaged whenever left outside overnight.",
          "Pitting the permanent “ink” ledger against frost erasing “borderlines” contrasts human grudge-keeping with nature's indifferent effacement.",
        ],
        answerIndex: 3,
        explanation:
          "Top-band evaluation treats the concrete images conceptually: 'ledger', 'debt', and 'ink' evoke rigid human accounting and grievance, whereas 'frost erases borderlines' figures natural time as dissolving human divisions — creating tension between curated resentment and impermanence.",
        hints: [
          "Move past literal weather or damaged notebooks: what human attitude does keeping 'winter debt in ink' symbolise?",
          "Look for the response that links specific micro-quotations to an abstract conceptual clash.",
        ],
      },
      {
        id: "1-readers-writers-texts-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "close-reading-meaning",
        question:
          "A student notices that five sentences in their Paper 1 draft begin with *“The narrator sees…”*, *“Next, the narrator walks…”*, and *“Then the narrator realises…”*. Which revision strategy most directly addresses this Criterion B weakness?",
        options: [
          "Recast sentence subjects around authorial craft moves (e.g. “By narrowing the sensory focus…”) rather than chronological character actions.",
          "Insert additional adjectives before each verb so the plot summary sounds more vivid and academic.",
          "Replace all references to “the narrator” with the real author's surname to sound more authoritative.",
          "Add longer block quotations after every sentence so the paragraph contains more textual evidence.",
        ],
        answerIndex: 0,
        explanation:
          "Sequential character-led subjects ('Next, the narrator walks…') trap an essay in chronological plot retelling. Making the writer's craft move or formal feature the grammatical subject forces every sentence into analytical evaluation of *how* meaning is constructed.",
        hints: [
          "Recall the Subject-Verb Audit from the Close Reading section.",
          "Never conflate the narrator with the real author, and avoid bloating essays with long block quotes.",
        ],
      },
      {
        id: "1-readers-writers-texts-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "voice-tone-ambiguity",
        question:
          "Why do IB Literature examiners penalise essays that casually equate a poem's first-person speaker with the real historical poet?",
        options: [
          "Because lyric poems are legally prohibited from containing autobiographical memories or personal emotions.",
          "Because examiners only award marks when students cite biographical diaries alongside the unseen poem.",
          "Because poets frequently construct ironic, fictional, or morally flawed personae whose claims the poem's craft subtly undercuts.",
          "Because first-person pronouns in verse always signify a collective chorus rather than an individual voice.",
        ],
        answerIndex: 2,
        explanation:
          "Collapsing speaker into poet blinds a reader to dramatic irony and self-deception — as in classic dramatic monologues `[Example text — not a set text]` where a speaker boasts of refinement while unwittingly exposing cruelty.",
        hints: [
          "Think of an unreliable or self-justifying speaker in a dramatic monologue.",
          "What analytical layer disappears if you assume the author agrees with everything the speaker asserts?",
        ],
      },
      {
        id: "1-readers-writers-texts-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "voice-tone-ambiguity",
        question:
          "Read this original unseen prose snippet:\n\n> *Our landlord generously supplied each tenant with a bucket whenever the ceiling wept — proof, he assured us, of his tireless devotion to modern plumbing.*\n\nWhich tonal label and irony mode are most accurately paired here?",
        options: [
          "Reverent tone paired with dramatic irony.",
          "Sardonic tone paired with verbal irony.",
          "Elegiac tone paired with situational irony.",
          "Melancholic tone paired with tragic pathos.",
        ],
        answerIndex: 1,
        explanation:
          "Praising a neglectful landlord's leaking roof as 'generously supplied' and 'tireless devotion to modern plumbing' says the opposite of what the narrator means (verbal irony) in a biting, mocking register (sardonic tone).",
        hints: [
          "Does the narrator genuinely admire the landlord's 'generosity' and 'modern plumbing'?",
          "Match said-versus-meant irony with a sharp, dryly mocking tonal adjective.",
        ],
      },
      {
        id: "1-readers-writers-texts-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "voice-tone-ambiguity",
        question:
          "In a stage play, a merchant joyfully signs a shipping contract claiming *“Nothing on earth can touch my cargo now”*, unaware that the audience witnessed his clerk secretly selling the vessel's safe-conduct papers two scenes earlier. Which literary device is operating?",
        options: [
          "Verbal irony arising from the merchant's intentional sarcasm.",
          "Pathetic fallacy aligning the sea weather with the clerk's anxiety.",
          "Situational understatement diminishing the value of the cargo.",
          "Dramatic irony created by the gap between audience knowledge and character blindness.",
        ],
        answerIndex: 3,
        explanation:
          "Dramatic irony occurs precisely when the audience holds vital information that a character lacks, charging the merchant's confident boast with impending dread.",
        hints: [
          "Who knows about the clerk's betrayal — the merchant, or the audience?",
          "Identify the irony mode rooted in asymmetric audience knowledge.",
        ],
      },
      {
        id: "1-readers-writers-texts-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "voice-tone-ambiguity",
        question:
          "Read this original unseen passage:\n\n> *We buried the dog beneath the plum tree without speeches; my father washed the spade under the tap until the iron shone, then asked whether anyone wanted soup.*\n\nWhich adjective best describes the passage's tonal register?",
        options: [
          "Stoically restrained, channelling grief into quiet domestic routine.",
          "Melodramatically sentimental, insisting loudly on shared family sorrow.",
          "Caustically satirical, ridiculing the father's obsession with gardening tools.",
          "Exuberantly celebratory, transforming loss into comic relief.",
        ],
        answerIndex: 0,
        explanation:
          "The absence of speeches, the focused scrubbing of the spade, and the ordinary offer of soup exemplify stoic restraint — grief is felt intensely precisely because it is understated and displaced into routine.",
        hints: [
          "Notice the bare facts: 'without speeches', washing the spade, offering soup.",
          "Does this voice exaggerate grief or hold it tightly beneath quiet understatement?",
        ],
      },
      {
        id: "1-readers-writers-texts-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "voice-tone-ambiguity",
        question:
          "Read this original unseen closing line of a short story:\n\n> *When the ferry pulled clear of the jetty, Elena opened her palm and watched the brass house-key slip beneath the oil-slicked wake.*\n\nWhich concluding IB evaluation best demonstrates **productive ambiguity**?",
        options: [
          "This definitive action proves the author's clear moral message that people must forget the past to find true happiness.",
          "Dropping the key into an “oil-slicked wake” hovers between liberating self-emancipation and an irrevocable, tainted severing from home.",
          "Elena loses her key by accident because the boat moves quickly, which leaves a confusing cliffhanger for a possible sequel.",
          "The brass key is a simple symbol of wealth, demonstrating that Elena rejects materialism in favour of travel.",
        ],
        answerIndex: 1,
        explanation:
          "Productive ambiguity holds competing implications simultaneously: deliberately releasing the key gestures toward freedom, yet the polluted, receding 'oil-slicked wake' complicates any tidy triumph with loss and irreversibility.",
        hints: [
          "Notice both the deliberate opening of her palm AND the troubling texture of 'oil-slicked wake'.",
          "Top-band IB essays resist reductive morals and sustain unresolved tension.",
        ],
      },
      {
        id: "1-readers-writers-texts-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Examine",
        guideRef: "voice-tone-ambiguity",
        question:
          "Read this original unseen memoir fragment:\n\n> *At sixteen I swore I would never inherit my mother's cramped ledger of worries; yet here I sit at forty, checking the stove knobs twice before locking the gate.*\n\nWhat structural and tonal movement drives the sentence?",
        options: [
          "A shift from comic boastfulness to triumphant self-congratulation over youthful wisdom.",
          "A steady clinical tone devoid of temporal contrast or emotional self-awareness.",
          "A self-ironic pivot from youthful defiance to wry, rueful recognition of inherited habit.",
          "An abrupt collapse from reverent nostalgia into bitter accusation against the mother.",
        ],
        answerIndex: 2,
        explanation:
          "The temporal hinge ('At sixteen … yet here I sit at forty') pairs youthful certainty ('swore I would never') against the quiet, self-deprecating confession of checking the stove knobs twice — producing wry self-irony and rueful self-awareness.",
        hints: [
          "Track the pivot word 'yet' and the shift in age from sixteen to forty.",
          "Is the speaker attacking her mother, or wryly recognising her mother's anxious habits inside herself?",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2: Voice, Irony, Ambiguity & Reader Response
  // Spread: 0×4, 1×3, 2×4, 3×4
  // ===========================================================================
  {
    id: "1-readers-writers-texts-m2",
    title: "MCQ Paper 2: Voice, Irony, Ambiguity & Reader Response",
    level: "SL",
    questions: [
      {
        id: "1-readers-writers-texts-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "voice-tone-ambiguity",
        question:
          "A notoriously paranoid archivist spends decades installing fireproof steel vaults to protect a single fragile manuscript, only for a short-circuit in the vault's own alarm wiring to incinerate the manuscript overnight. Which mode of irony is illustrated?",
        options: [
          "Verbal irony driven by playful euphemism and dry understatement.",
          "Situational irony in which the protective vault triggers the feared ruin.",
          "Dramatic irony relying on a whispered aside shared with the audience.",
          "Comic satire ridiculing historical archives as clumsy and outdated.",
        ],
        answerIndex: 1,
        explanation:
          "Situational irony occurs when an outcome sharply inverts expectation — here, the exact apparatus engineered to prevent fire causes the fire itself.",
        hints: [
          "Compare the archivist's intended purpose for the steel vault with its actual outcome.",
          "Is this a mismatch between said/meant, audience/character knowledge, or expected/actual outcome?",
        ],
      },
      {
        id: "1-readers-writers-texts-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "voice-tone-ambiguity",
        question:
          "Read this original unseen poetic stanza:\n\n> *They named the bridge for generals who stayed*\n> *three counties safely east of rising smoke;*\n> *the stonemasons whose knuckles split in frost*\n> *left only thumbprints hardened in the arch.*\n\nHow does the speaker's tone operate across these four lines?",
        options: [
          "Through glowing patriotic celebration of civic monuments and military leadership.",
          "Through neutral historical reporting that avoids any implied moral judgement.",
          "Through lighthearted playful humour poking fun at architectural fashion.",
          "Through quiet, indignant contrast juxtaposing unearned official glory with erased physical labour.",
        ],
        answerIndex: 3,
        explanation:
          "The incisive qualifier 'three counties safely east' quietly punctures official heroism, while shifting focus to the masons' 'split' knuckles and anonymous 'thumbprints' creates an indignant, incisive critique of how monuments erase labour.",
        hints: [
          "Look at the ironic placement of 'safely east of rising smoke' right after 'generals'.",
          "Whose enduring physical trace actually holds the arch together?",
        ],
      },
      {
        id: "1-readers-writers-texts-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "voice-tone-ambiguity",
        question:
          "What distinguishes the **implied author** from the **first-person narrator** in a literary work?",
        options: [
          "The implied author represents the text's overarching artistic design and value patterns, whereas the narrator is the constructed voice telling the story.",
          "The implied author is a secondary character inside the plot, whereas the narrator always stands outside the fictional world.",
          "The implied author refers exclusively to published interviews by the writer, whereas the narrator refers only to dialogue.",
          "The implied author exists solely in poetry collections, whereas narrators appear strictly in nineteenth-century novels.",
        ],
        answerIndex: 0,
        explanation:
          "The implied author is inferred from the entire work's structural ironies, juxtapositions, and patterns of critique, which can sharply diverge from the self-serving perspective of a constructed first-person narrator.",
        hints: [
          "Think of a biased narrator whose own unintentional slips make the reader see a deeper critique.",
          "Who orchestrates those structural clues behind the narrator's back?",
        ],
      },
      {
        id: "1-readers-writers-texts-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "voice-tone-ambiguity",
        question:
          "Read this original unseen passage:\n\n> *At the ribbon-cutting, the mayor praised our 'resilient waterfront community' with booming warmth. Behind the bunting, salt-stains climbed the schoolhouse wall like a slow tide nobody had budgeted to repaint.*\n\nHow does the tonal shift between the two sentences shape reader response?",
        options: [
          "It reinforces civic optimism by showing how coastal weather gives the schoolhouse authentic charm.",
          "It shifts from technical environmental reporting to warm nostalgia for seaside childhoods.",
          "It pivots from inflated political rhetoric to dry, disillusioned observation, exposing civic neglect beneath public ceremony.",
          "It signals that the narrator admires the mayor's energy despite minor decorative flaws.",
        ],
        answerIndex: 2,
        explanation:
          "Placing the mayor's rehearsed buzzword ('resilient waterfront community') in quotation marks and immediately moving 'Behind the bunting' to creeping 'salt-stains' and unbudgeted decay shifts the register from hollow ceremony to sharp, understated critique.",
        hints: [
          "Notice the spatial pivot 'Behind the bunting' and the quotation marks around 'resilient waterfront community'.",
          "What does 'nobody had budgeted to repaint' imply about the mayor's praise?",
        ],
      },
      {
        id: "1-readers-writers-texts-m2-q05",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "voice-tone-ambiguity",
        question:
          "Read this original unseen dramatic speech:\n\n> *Of course I burned his shipyard plans — purely to spare him the humiliation of bankruptcy, you understand. A brother must sometimes be ruthless to be kind.*\n\nHow does the playwright engineer an ironic gap between the speaker's framing and the audience's judgement?",
        options: [
          "By using plain factual reporting so the audience immediately accepts the speaker's selfless devotion.",
          "By employing lyrical nature metaphors that soften the destruction of the plans into poetic necessity.",
          "By breaking the fourth wall to instruct the audience directly not to trust any character on stage.",
          "By embedding conversational softeners (“Of course”, “you understand”) and an aphoristic cliché to expose anxious self-justification masking sabotage.",
        ],
        answerIndex: 3,
        explanation:
          "Defensive hedges ('Of course', 'purely', 'you understand') paired with a hollow maxim ('ruthless to be kind') alert the audience that the speaker is rehearsing a moral alibi to disguise sibling rivalry or sabotage.",
        hints: [
          "Notice how insistently the speaker seeks approval with 'Of course' and 'you understand'.",
          "Why does reaching for a tidy proverb ('ruthless to be kind') sound suspicious rather than genuinely compassionate?",
        ],
      },
      {
        id: "1-readers-writers-texts-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "voice-tone-ambiguity",
        question:
          "Which analytical phrasing best preserves **productive ambiguity** in a Band 5 IB commentary?",
        options: [
          "“The final image hovers between tender reconciliation and uneasy surrender, resisting easy ethical closure.”",
          "“The final image clearly proves beyond any doubt that the protagonist has forgiven her family completely.”",
          "“Because the ending is unclear, the writer failed to communicate a coherent thematic message to readers.”",
          "“Readers can invent any ending they personally prefer, since textual details no longer matter on the final page.”",
        ],
        answerIndex: 0,
        explanation:
          "Articulating two evidence-backed tensions ('hovers between … and …, resisting easy ethical closure') showcases Band 5 interpretive subtlety without collapsing into dogmatic certainty, blaming the writer for complexity, or abandoning textual evidence.",
        hints: [
          "Look for language that holds two contrasting possibilities in dynamic balance.",
          "Reject statements that force a single certainty, treat ambiguity as a flaw, or discard textual proof.",
        ],
      },
      {
        id: "1-readers-writers-texts-m2-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "voice-tone-ambiguity",
        question:
          "Read this original unseen stanza:\n\n> *Here lies the orchard where my cousins raced,*\n> *now paved in orderly, metered bays;*\n> *I pay two coins to park above the roots*\n> *and check my watch beneath a sodium lamp.*\n\nWhich tonal combination most precisely captures the speaker's voice?",
        options: [
          "Furious and polemical, demanding immediate political revolt against urban planners.",
          "Quietly elegiac yet unsentimental, mourning lost childhood through mundane modern detail.",
          "Cheerfully pragmatic, celebrating the convenience of well-organised city parking.",
          "Playfully surreal, mocking the speaker's own exaggerated nostalgia for orchards.",
        ],
        answerIndex: 1,
        explanation:
          "The epitaph echo ('Here lies') lends quiet elegiac grief, yet plain details ('pay two coins', 'check my watch', 'sodium lamp') keep the tone restrained and unsentimental — capturing alienation through ordinary routine.",
        hints: [
          "Notice the gravestone echo in 'Here lies' contrasted with mundane details like 'pay two coins' and 'check my watch'.",
          "Is the speaker shouting polemically, or grieving quietly beneath everyday modern compliance?",
        ],
      },
      {
        id: "1-readers-writers-texts-m2-q08",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Define",
        guideRef: "reader-response-choices",
        question:
          "In Wolfgang Iser's reader-response theory, what function do **textual gaps** (*Leerstellen*) perform in a literary work?",
        options: [
          "They represent accidental editing errors that obscure the author's intended storyline.",
          "They act as decorative page breaks separating chapters in printed novels.",
          "They operate as deliberate silences and indeterminacies that invite readers to co-construct meaning actively.",
          "They provide explicit footnotes telling readers exactly which moral judgement to adopt.",
        ],
        answerIndex: 2,
        explanation:
          "For Wolfgang Iser, textual gaps are purposeful omissions, ellipses, and unspoken motives embedded in a text's design; by leaving space between explicit cues, they compel the reader's imagination to bridge connections and co-create meaning.",
        hints: [
          "Think of how Hemingway's omitted subtext `[Example text — not a set text]` makes the reader work actively.",
          "Are Iser's gaps accidents, or structural invitations for active reader participation?",
        ],
      },
      {
        id: "1-readers-writers-texts-m2-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "reader-response-choices",
        question:
          "How does an **implied reader** differ from a **resisting reader**?",
        options: [
          "An implied reader ignores literary devices, whereas a resisting reader counts metaphors and similes.",
          "An implied reader reads translated works only, whereas a resisting reader reads original English works.",
          "An implied reader dislikes the main character, whereas a resisting reader always admires the narrator.",
          "An implied reader aligns with the text's invited sympathies and assumptions, whereas a resisting reader interrogates its silences and framing.",
        ],
        answerIndex: 3,
        explanation:
          "The implied reader is the audience posture inscribed within the text's own assumptions and sympathies; a resisting reader reads against the grain, questioning whose voices, labour, or realities the text marginalises.",
        hints: [
          "Recall 'reading with the grain' versus 'reading against the grain'.",
          "Which stance questions the text's unspoken ideological assumptions?",
        ],
      },
      {
        id: "1-readers-writers-texts-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "reader-response-choices",
        question:
          "Read this original unseen diary entry:\n\n> *At last the estate runs smoothly: my wife oversees the linen inventory without troubling me, and the kitchen staff keep their voices below the stairwell so my correspondence proceeds undisturbed.*\n\nWhat would a **resisting reader** most sharply foreground in analysing this passage?",
        options: [
          "How the narrator's calm celebration of “undisturbed” order depends on silencing domestic and working-class labour.",
          "How efficiently the household linen inventory has been organised to save time for letter-writing.",
          "How warmly the narrator expresses gratitude for his wife's equal intellectual partnership.",
          "How accurately the diary preserves architectural details about nineteenth-century stairwells.",
        ],
        answerIndex: 0,
        explanation:
          "Reading against the narrator's complacent framing, a resisting reader interrogates phrases like 'without troubling me' and 'keep their voices below the stairwell', exposing how patriarchal and class privilege presents enforced invisibility as domestic harmony.",
        hints: [
          "Notice whose comfort defines 'smoothly' — and whose voices must remain 'below the stairwell'.",
          "A resisting reading interrogates the power hierarchy normalised by the narrator.",
        ],
      },
      {
        id: "1-readers-writers-texts-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "reader-response-choices",
        question:
          "A student argues: *“Reader-response theory means every interpretation is equally right, so my claim that the lonely lighthouse-keeper is secretly an alien needs no quotation.”* Why does this violate IB Criterion A?",
        options: [
          "Because IB Literature permits only one official interpretation published in each textbook.",
          "Because reader-response theory applies exclusively to dramatic scripts rather than prose fiction.",
          "Because valid interpretive plurality remains strictly bounded by concrete textual cues and whole-passage evidence.",
          "Because Criterion A awards marks only for historical biography rather than interpretive claims.",
        ],
        answerIndex: 2,
        explanation:
          "While reader-response theory recognises that readers bring varied horizons to textual gaps, IB Criterion A demands *textually substantiated* interpretations: claims must account for concrete wording and patterns rather than inventing off-page fantasies.",
        hints: [
          "Recall the difference between 'plurality of plausible readings' and 'anything-goes relativism'.",
          "What anchors every valid IB reading at the bottom of the Reader-Response diagram?",
        ],
      },
      {
        id: "1-readers-writers-texts-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "reader-response-choices",
        question:
          "Which phrasing best avoids treating all readers as an identical monolith in an IB analytical paragraph?",
        options: [
          "“Every reader immediately cries at this line because grief affects all humans identically.”",
          "“The stark juxtaposition positions an attentive reader to question the speaker's claim of innocence.”",
          "“This metaphor obviously makes the audience angry and forces everyone to hate the father.”",
          "“All people reading this stanza will feel proud of the protagonist's heroic sacrifice.”",
        ],
        answerIndex: 1,
        explanation:
          "Using framing verbs like 'positions', 'invites', or 'unsettles' — qualified by 'an attentive reader' — acknowledges reader agency and the text's rhetorical pull without claiming every human reacts identically.",
        hints: [
          "Watch out for universalising claims like 'Every reader', 'All people', or 'forces everyone'.",
          "Look for nuanced craft phrasing showing how the text *positions* or *invites* interpretation.",
        ],
      },
      {
        id: "1-readers-writers-texts-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "reader-response-choices",
        question:
          "Read this original unseen scene:\n\n> *She placed two train tickets on the dresser, brushed the lint from his coat sleeve, and paused beside the door until the kettle began to whistle. Neither of them reached to turn it off.*\n\nWhich textual gap most powerfully invites active reader co-construction?",
        options: [
          "The exact monetary fare and booking receipt for the two train tickets left on the dresser.",
          "The colour, weave, and tailoring details of the winter coat hanging quietly beside the door.",
          "The mechanical design and metal handle of the whistling kettle steaming on the kitchen stove.",
          "The unspoken tension between tender intimacy and paralysed silence over whether either will leave.",
        ],
        answerIndex: 3,
        explanation:
          "Iser's most generative textual gaps lie in unspoken psychological stakes: pairing 'two train tickets' and the intimate gesture of brushing lint with neither person acting as the kettle whistles invites readers to sense unresolved grief, departure, or impasse.",
        hints: [
          "Distinguish irrelevant off-page trivia (ticket price, kettle brand) from psychologically loaded silence.",
          "Why does letting the kettle whistle unanswered intensify the pause at the door?",
        ],
      },
      {
        id: "1-readers-writers-texts-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "reader-response-choices",
        question:
          "How can an essay incorporate a **counter-reading** so that it strengthens rather than weakens its own thesis?",
        options: [
          "By acknowledging how surface details invite an initial reading before demonstrating how deeper textual patterns complicate or subvert it.",
          "By stating two contradictory conclusions in the final paragraph and declaring that neither claim can be proven.",
          "By devoting half the essay to criticising hypothetical readers who disagree without quoting any textual evidence.",
          "By abandoning the essay's opening argument mid-way through to adopt an unrelated topic.",
        ],
        answerIndex: 0,
        explanation:
          "Concessive synthesis ('While surface cues initially invite…, closer attention to syntax and omission complicates…') demonstrates Band 5 critical maturity by testing alternative readings against the whole text.",
        hints: [
          "Think of how a strong hinge like 'While an implied reading might view… closer inspection reveals…' works.",
          "A counter-reading should sharpen your argument, not collapse into self-contradiction.",
        ],
      },
      {
        id: "1-readers-writers-texts-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Examine",
        guideRef: "reader-response-choices",
        question:
          "Read this original unseen closing couplet:\n\n> *We kept our grandfathers' maps under glass,*\n> *tracing borders no river agreed to obey.*\n\nHow do two plausible interpretive lenses — **postcolonial/political** and **ecocritical** — productively intersect on these lines?",
        options: [
          "Both lenses agree that antique maps should be stored in museum frames to prevent water damage.",
          "The two lenses contradict each other completely, so an IB candidate must discard one entirely.",
          "Together they reveal how inherited cartographic lines impose artificial geopolitical authority that living ecological landscapes persistently subvert.",
          "Neither lens applies because the couplet focuses purely on private family nostalgia without spatial imagery.",
        ],
        answerIndex: 2,
        explanation:
          "A political/postcolonial lens illuminates 'grandfathers' maps' and 'borders' as inherited imperial/territorial imposition, while an ecocritical lens illuminates the personified 'river' refusing to 'obey' — together revealing nature's quiet subversion of artificial human boundaries.",
        hints: [
          "Connect 'grandfathers' maps' and 'borders' to human political authority, and 'no river agreed to obey' to natural agency.",
          "Notice how both lenses reinforce one sharp, evidence-anchored insight rather than cancelling each other out.",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3: Learner Portfolio Craft & Integrated AoE 1 Synthesis
  // Spread: 0×3, 1×4, 2×4, 3×4
  // ===========================================================================
  {
    id: "1-readers-writers-texts-m3",
    title: "MCQ Paper 3: Learner Portfolio Craft & Integrated AoE 1 Synthesis",
    level: "SL",
    questions: [
      {
        id: "1-readers-writers-texts-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "State",
        guideRef: "learner-portfolio-craft",
        question:
          "Under the IB Diploma English A: Literature syllabus (First Assessment 2021), what is the official status and core purpose of the **Learner Portfolio**?",
        options: [
          "An optional revision booklet submitted directly to IB examiners for 10% of the final diploma grade.",
          "A locked exam dossier brought into the closed-book Paper 2 examination room for quotation reference.",
          "A mandatory, ungraded ongoing workspace used across DP1–DP2 to track extracts, concepts, Global Issues, and cross-text links.",
          "A published anthology of creative poems required only from Higher Level candidates.",
        ],
        answerIndex: 2,
        explanation:
          "The Learner Portfolio is mandatory for both SL and HL candidates (though not externally graded by the IBO); it underpins extract selection for the IO, line-of-inquiry formation for the HL Essay, and comparative preparation for closed-book Paper 2.",
        hints: [
          "Check two facts: is it mandatory, and is it externally graded?",
          "Remember that Paper 2 is strictly closed book — no portfolio may enter the exam hall.",
        ],
      },
      {
        id: "1-readers-writers-texts-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "learner-portfolio-craft",
        question:
          "When curating candidate extracts inside your Learner Portfolio for the **Individual Oral (IA)**, what is the strict maximum length allowed per extract and the mandatory language pairing?",
        options: [
          "Maximum 40 lines per extract; 1 work originally written in English paired with 1 work in translation.",
          "Maximum 80 lines per extract; any 2 works originally written in English from different centuries.",
          "Maximum 20 lines per extract; 2 works in translation drawn from the same literary genre.",
          "Maximum 60 lines per extract; 1 studied literary work paired with 1 unseen non-literary advertisement.",
        ],
        answerIndex: 0,
        explanation:
          "In IB English A: Literature (unlike Language & Literature, which pairs a literary work with a non-literary text), the Individual Oral pairs 1 original English literary work + 1 literary work in translation, with clean unmarked extracts of no more than 40 lines each.",
        hints: [
          "Be careful not to confuse English A: Literature with English A: Language & Literature (non-literary texts belong to Lang & Lit!).",
          "Recall the exact line cap: ≤40 lines per extract.",
        ],
      },
      {
        id: "1-readers-writers-texts-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "learner-portfolio-craft",
        question:
          "An SL Literature student has studied 9 works (W1–W9). They choose W1 (English play) and W4 (translated novel) for their Individual Oral. Which Paper 2 preparation plan strictly obeys the **IB Non-Overlap Work Rule**?",
        options: [
          "Preparing W1, W4, and W6 so they can reuse their strongest IO analysis on Paper 2.",
          "Preparing W1 and W7 because only translated works are barred from repeating across assessments.",
          "Preparing W4 and W8 because Paper 2 allows one work to overlap with the Individual Oral.",
          "Preparing W2, W5, and W8, ensuring zero works overlap with W1 or W4 from the Individual Oral.",
        ],
        answerIndex: 3,
        explanation:
          "The IB Non-Overlap Work Rule strictly forbids reusing ANY work from the Individual Oral (whether English or translated) in Paper 2. Reserving W2, W5, and W8 leaves zero overlap and provides prompt flexibility.",
        hints: [
          "Neither W1 nor W4 may appear in Paper 2.",
          "Check which option excludes both W1 and W4 completely.",
        ],
      },
      {
        id: "1-readers-writers-texts-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "learner-portfolio-craft",
        question:
          "An HL English A: Literature student studies the minimum **13 works**. After locking 2 works for their Individual Oral and 1 distinct work for their HL Essay, how many studied works remain legally eligible for Paper 2 — and how many minimum distinct works are committed across all three components?",
        options: [
          "11 works remain eligible; at least 4 distinct works are committed across IO, HL Essay, and Paper 2.",
          "10 works remain eligible; at least 5 distinct works are committed across IO, HL Essay, and Paper 2.",
          "9 works remain eligible; at least 6 distinct works are committed across IO, HL Essay, and Paper 2.",
          "13 works remain eligible; works may be freely recycled across Paper 2 and the HL Essay.",
        ],
        answerIndex: 1,
        explanation:
          "At HL, 2 IO works + 1 HL Essay work = 3 locked works, leaving 13 − 3 = 10 eligible works for Paper 2. Adding the 2 works written on in Paper 2 commits at least 2 + 1 + 2 = 5 completely distinct works.",
        hints: [
          "Subtract the locked works (2 for IO + 1 for HL Essay) from 13.",
          "Then sum the works used in IO (2), HL Essay (1), and Paper 2 (2) with zero overlap.",
        ],
      },
      {
        id: "1-readers-writers-texts-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "learner-portfolio-craft",
        question:
          "When selecting a ≤40-line extract from a studied novel for your Learner Portfolio IO Vault, which criterion matters **most** for earning Band 5 in Criterion B?",
        options: [
          "Picking a chapter opening that summarises the whole plot so you need not refer to other chapters.",
          "Picking the single most violent or melodramatic plot twist regardless of how sparsely it is written.",
          "Picking a stylistically dense moment rich in imagery, syntax, tonal shift, or subtext that illuminates the Global Issue.",
          "Picking a 39-line passage composed entirely of rapid one-word greetings to fill the maximum line count.",
        ],
        answerIndex: 2,
        explanation:
          "Criterion B evaluates authorial craft. A dense 30–40 line passage packed with imagery, syntactic tension, voice shifts, or structural contrast gives you far richer analytical leverage than pure plot exposition.",
        hints: [
          "Ask yourself: will this extract give me 4+ sharp craft moves to evaluate, or force me to retell events?",
          "Criterion B rewards analysis of authorial choices, not plot drama alone.",
        ],
      },
      {
        id: "1-readers-writers-texts-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "learner-portfolio-craft",
        question:
          "Besides the two unmarked ≤40-line extracts, what is the maximum written aid an IB Literature candidate may bring into the **Individual Oral** recording?",
        options: [
          "A fully scripted 1,500-word speech read aloud to maintain formal Criterion D register.",
          "The complete annotated editions of both studied books with colour-coded sticky tabs.",
          "A three-page thematic essay outline accompanied by full bibliographic footnotes.",
          "A concise outline containing a maximum of 10 bullet points without dense scripted paragraphs.",
        ],
        answerIndex: 3,
        explanation:
          "IB regulations permit ONLY clean, unmarked copies of the two ≤40-line extracts plus a maximum 10-bullet-point outline (concise cues rather than memorised full prose paragraphs).",
        hints: [
          "Recall the exact bullet-point cap for the Individual Oral outline.",
          "Annotated books and full scripted speeches are strictly forbidden in the IO recording.",
        ],
      },
      {
        id: "1-readers-writers-texts-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "learner-portfolio-craft",
        question:
          "Which statement accurately describes the **HL Essay** requirements in IB English A: Literature (First Assessment 2021)?",
        options: [
          "A 2,000–2,500 word comparative essay analysing two studied works from different literary forms.",
          "A 1,200–1,500 word formal literary inquiry examining one studied work not used in the IO or Paper 2.",
          "An unseen 90-minute timed commentary on one prose passage worth 35% of the HL diploma grade.",
          "A 1,200–1,500 word reflection comparing one translated novel with one non-literary film poster.",
        ],
        answerIndex: 1,
        explanation:
          "The HL Essay (20% of the HL grade, 20 marks) is a formal 1,200–1,500 word literary inquiry on ONE studied work (original English or translated) that strictly does not overlap with the IO or Paper 2.",
        hints: [
          "Check three facts: word count (1,200–1,500), number of works (ONE), and non-overlap rule.",
          "Remember that non-literary texts like film posters belong to Language & Literature, not Literature.",
        ],
      },
      {
        id: "1-readers-writers-texts-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "learner-portfolio-craft",
        question:
          "An HL student uses their Learner Portfolio to draft an HL Essay proposal. Which entry shows the sharpest transformation from a raw portfolio note into a Band 5 **line of inquiry**?",
        options: [
          "“How does fragmented domestic syntax represent the fragility of cultural memory across the narrator's shifting accounts?”",
          "“What are three main plot events that show memory is an important theme in the novel?”",
          "“Write a biographical summary explaining how the author's childhood influenced every chapter of the book.”",
          "“Compare how two novels from different centuries portray family arguments about inheritance.”",
        ],
        answerIndex: 0,
        explanation:
          "A Band 5 HL Essay line of inquiry examines ONE studied work through an arguable literary question linking concrete authorial craft ('fragmented domestic syntax') to a central IB concept ('Representation' / 'Culture'). Comparing two works violates the one-work rule, while listing plot events or author biography misses literary analysis.",
        hints: [
          "Check the HL Essay rules: ONE work only, focused on authorial choices and conceptual inquiry (never plot summary or biography).",
          "Look for an open-ended 'How does [craft choice] shape [conceptual stake]?' question.",
        ],
      },
      {
        id: "1-readers-writers-texts-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "learner-portfolio-craft",
        question:
          "Why is logging **8–10 ultra-short micro-quotations (3–8 words)** plus structural turning points for each work in your Learner Portfolio superior to memorising long passages for Paper 2?",
        options: [
          "Because Paper 2 examiners deduct marks whenever a candidate quotes more than three words from memory.",
          "Because Paper 2 allows candidates to consult short flashcards during the first fifteen minutes of planning.",
          "Because structural turning points eliminate the need to refer to language or style in comparative essays.",
          "Because Paper 2 is closed book, and crisp micro-quotations embed naturally into comparative craft analysis without risking misquoted long blocks.",
        ],
        answerIndex: 3,
        explanation:
          "Paper 2 is strictly closed book. Compact 3–8 word micro-quotations are far easier to recall accurately under exam pressure and weave seamlessly into integrated analytical sentences alongside structural and formal comparisons.",
        hints: [
          "Think about exam conditions for Paper 2: are texts or flashcards allowed in the room?",
          "Consider both memory accuracy and seamless quotation embedding.",
        ],
      },
      {
        id: "1-readers-writers-texts-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "close-reading-meaning",
        question:
          "Read this original unseen mini-extract:\n\n> *After the treaty, the border posts were painted white overnight. By noon, children were already using the wet railings to chalk hopscotch squares across the customs line.*\n\nWhich integrated AoE 1 reading best synthesises authorial choice and conceptual implication?",
        options: [
          "The writer describes a colourful sunny afternoon to demonstrate that newly divided border towns are peaceful playgrounds for local families.",
          "Contrasting freshly painted “white” border posts with chalked “hopscotch squares” pits solemn state division against irreverent everyday life.",
          "The symbol of drying white paint warns readers that newly signed diplomatic treaties inevitably crumble before the end of the very next afternoon.",
          "The passage generates tragic dramatic irony because the children mistakenly believe the customs line belongs to their neighbourhood schoolyard.",
        ],
        answerIndex: 1,
        explanation:
          "The swift juxtaposition between official overnight boundary-marking ('painted white') and children casually repurposing the still-wet line for 'hopscotch squares' sets rigid geopolitical division against spontaneous everyday life.",
        hints: [
          "Look at the stark contrast between the freshly painted state border posts and the chalked hopscotch squares.",
          "Check which choice links concrete micro-quotations to an insightful conceptual contrast without over-claiming.",
        ],
      },
      {
        id: "1-readers-writers-texts-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "voice-tone-ambiguity",
        question:
          "Read this original unseen poem excerpt:\n\n> *I keep your winter coat behind the stair —*\n> *not out of grief, of course; the wool is sound,*\n> *and good grey cloth is hard enough to find*\n> *since the old mill shut down beside the weir.*\n\nHow do voice, syntax, and omission work together to expose emotional subtext?",
        options: [
          "The speaker's candid economic argument proves that sentimentality plays zero role in keeping the coat.",
          "The celebratory lyric tone praises local textile craftsmanship and industrial progress beside the river.",
          "The defensive parenthetical denial (“not out of grief, of course”) and brisk pivot to thrift betray the very longing the speaker tries to disavow.",
          "The dramatic irony arises because the coat was secretly destroyed before the speaker returned home.",
        ],
        answerIndex: 2,
        explanation:
          "Interrupting the confession with an unsolicited dash-bracketed protest ('not out of grief, of course') and immediately pivoting to practical thrift ('the wool is sound') dramatises psychological repression: the speaker protests too much, making the unspoken grief palpable.",
        hints: [
          "Why does the speaker feel compelled to say 'not out of grief, of course' when nobody asked?",
          "Look at how the dashes interrupt the line and pivot toward practical excuses.",
        ],
      },
      {
        id: "1-readers-writers-texts-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "reader-response-choices",
        question:
          "Read this original unseen prose snippet:\n\n> *In the family portrait, Uncle Tomas occupies the velvet armchair while his sister stands half-cropped at the mahogany frame's edge, smiling faithfully into the lens.*\n\nHow does combining **close reading** with a **resisting-reader lens** unlock the richest interpretation?",
        options: [
          "Close reading tracks the spatial hierarchy (“velvet armchair” vs “half-cropped”), while a resisting lens interrogates the quietly normalised domestic deference behind “smiling faithfully”.",
          "Close reading counts the furniture materials, while a resisting lens invents a secret criminal rivalry between Tomas and the photographer.",
          "Close reading accepts the sister's smile as proof of uncomplicated joy, while a resisting lens rejects all visual imagery as unreliable.",
          "Both approaches conclude that nineteenth-century camera lenses were too narrow to photograph two seated relatives properly.",
        ],
        answerIndex: 0,
        explanation:
          "Synergising textual craft (spatial framing: central velvet seat vs marginalised half-cropped edge) with a resisting-reader lens (questioning the gendered expectation encoded in 'smiling faithfully') yields sharp, evidence-grounded Band 5 insight.",
        hints: [
          "Look closely at the spatial framing ('velvet armchair' vs 'half-cropped') AND the adverb 'faithfully'.",
          "Remember that resisting readings stay strictly anchored in textual details, never off-page inventions.",
        ],
      },
      {
        id: "1-readers-writers-texts-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "learner-portfolio-craft",
        question:
          "Under IB English A: Literature FA2021 syllabus rules, what are the exact minimum **works in translation** required at SL versus HL?",
        options: [
          "SL requires at least 1 work in translation; HL requires at least 2 works in translation.",
          "SL requires at least 2 works in translation; HL requires at least 3 works in translation.",
          "SL requires at least 4 works in translation; HL requires at least 6 works in translation.",
          "SL requires at least 3 works in translation; HL requires at least 4 works in translation.",
        ],
        answerIndex: 3,
        explanation:
          "FA2021 Literature syllabus minimums mandate at least 3 works in translation at SL (out of 9+ total works) and at least 4 works in translation at HL (out of 13+ total works).",
        hints: [
          "Recall the syllabus work table: SL total ≥ 9 (≥4 English, ≥? translated); HL total ≥ 13 (≥5 English, ≥? translated).",
          "Both SL and HL mandate substantial global representation through works in translation.",
        ],
      },
      {
        id: "1-readers-writers-texts-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "close-reading-meaning",
        question:
          "Which draft thesis statement on an unseen passage about an ageing watchmaker most effectively unites **authorial choice**, **mechanism**, and **conceptual tension** for Band 5 Criteria A–C?",
        options: [
          "This passage describes an old watchmaker who repairs clocks in a quiet shop and feels nostalgic about his youth.",
          "Through clinical horological diction and fractured pauses, the writer casts the watchmaker's precision as both a refuge from grief and a subtle cage against time's passage.",
          "The author uses metaphor, alliteration, syntax, and tone throughout the text to create strong imagery and engage the reader emotionally.",
          "Ultimately, the writer teaches readers a valuable lesson that older craftspeople deserve far greater respect from modern society.",
        ],
        answerIndex: 1,
        explanation:
          "A Band 5 conceptual thesis specifies concrete authorial craft ('clinical horological diction and fractured pauses'), attributes analytical agency ('casts'), and articulates a nuanced conceptual tension ('both a refuge from grief and a subtle cage') rather than plot summary, device-listing, or moralising.",
        hints: [
          "Check for all three Band 5 ingredients: specific craft choices, active analytical verb, and productive tension.",
          "Eliminate pure plot summary, raw technique lists, and reductive moral lessons.",
        ],
      },
      {
        id: "1-readers-writers-texts-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "reader-response-choices",
        question:
          "Why does AoE 1 (*Readers, Writers & Texts*) explicitly position meaning as a **triangular interaction** rather than a one-way transmission from author to reader?",
        options: [
          "Because authors rarely revise their drafts carefully, forcing readers to repair grammatical mistakes themselves.",
          "Because literary texts contain no stable linguistic features until a critic chooses an ideological theory.",
          "Because authorial craft encodes cues, masks, and gaps inside the text that diverse readers actively interpret within concrete evidence boundaries.",
          "Because IB Literature assesses creative autobiographical reflections rather than close analysis of literary form.",
        ],
        answerIndex: 2,
        explanation:
          "AoE 1 frames meaning dynamically: writers craft determinate language, tonal masks, and textual gaps; texts hold those structured patterns; and readers actively co-construct nuanced, evidence-bounded interpretations across shifting horizons.",
        hints: [
          "Balance all three vertices of the triangle: Writer (craft), Text (cues & gaps), and Reader (active, evidence-bounded interpretation).",
          "Avoid extremes that dismiss either authorial craft or reader agency.",
        ],
      },
    ],
  },
];
