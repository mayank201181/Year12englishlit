import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER M1: Poetic Form, Metre, Imagery & Soundscapes (15 MCQs)
  // answerIndex plan: [0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 3, 0, 2, 1] -> [4, 4, 4, 3]
  // =========================================================================
  {
    id: "4-poetry-and-drama-m1",
    title: "Paper M1: Poetic Form, Metre, Imagery & Soundscapes",
    level: "SL",
    questions: [
      {
        id: "4-poetry-and-drama-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "poetic-form-metre-structure",
        question:
          "Read these two lines from an unseen lyric:\n\n*She pressed the letter flat against the pane*\n*of rain-streaked glass before she turned away.*\n\nWhich prosodic technique operates across the boundary between *pane* and *of rain-streaked glass*, and what is its most defensible analytical effect?",
        options: [
          "Enjambment, propelling syntax across the line break to mirror unstoppable emotional overflow.",
          "End-stopping, sealing the first clause with terminal certainty to emphasise calm composure.",
          "Anaphora, repeating identical opening words to establish ceremonial rhythm across both lines.",
          "Volta, inverting the speaker's entire ideological stance between the octave and final sestet.",
        ],
        answerIndex: 0,
        explanation:
          "Because the prepositional phrase *'of rain-streaked glass'* completes the noun *'pane'* without punctuation at the line end, the syntax overflows through **enjambment**, creating continuous forward momentum and linking the letter seamlessly to the rain-obscured glass.",
        hints: [
          "Look closely at the end of the first line: is there any punctuation stopping the grammatical sentence after 'pane'?",
          "When grammatical sense spills straight across a line break into the next line, what lineation term applies?",
        ],
      },
      {
        id: "4-poetry-and-drama-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "poetic-form-metre-structure",
        question:
          "How does the structural architecture of a **Petrarchan (Italian) sonnet** classically differ from that of a **Shakespearean (English) sonnet**?",
        options: [
          "A Petrarchan sonnet contains nineteen lines with two alternating refrains, whereas a Shakespearean sonnet uses fourteen unrhymed lines.",
          "A Petrarchan sonnet forbids any tonal turn until Line 14, whereas a Shakespearean sonnet mandates a pivot at Line 5.",
          "A Petrarchan sonnet divides into an eight-line octave and six-line sestet pivoting at Line 9, whereas a Shakespearean sonnet uses three quatrains and a closing couplet.",
          "A Petrarchan sonnet relies exclusively on trochaic tetrameter, whereas a Shakespearean sonnet abandons regular metrical feet altogether.",
        ],
        answerIndex: 2,
        explanation:
          "A **Petrarchan sonnet** is structured as an octave (`ABBAABBA`) followed by a Line-9 volta and a sestet (`CDECDE` or `CDCDCD`), whereas a **Shakespearean sonnet** progresses through three quatrains (`ABAB CDCD EFEF`) closed by a rhyming couplet (`GG`).",
        hints: [
          "Both sonnet traditions have exactly fourteen lines—the difference lies in how those fourteen lines are partitioned.",
          "Recall the 8 + 6 division versus the 4 + 4 + 4 + 2 division.",
        ],
      },
      {
        id: "4-poetry-and-drama-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "poetic-form-metre-structure",
        question:
          "Scan the opening foot of this otherwise regular iambic pentameter line:\n\n*Shattered by gales, the coastal beacon stands.*\n(`SHAT-tered | by GALES, | the COAS- | tal BEA- | con STANDS`)\n\nWhat metrical disruption occurs in the first foot, and how does it reinforce meaning?",
        options: [
          "An anapestic substitution accelerates the line playfully to downplay the severity of the coastal storm.",
          "A trochaic inversion opens with an immediate heavy stress, enacting the sudden violent impact of the gale.",
          "A pyrrhic foot drains all acoustic force from the opening verb, mimicking silent stillness after the storm.",
          "A regular rising iamb maintains tranquil equilibrium, reassuring readers that the beacon remains untouched.",
        ],
        answerIndex: 1,
        explanation:
          "Replacing an expected rising iamb (`˘ /`) with a falling trochee (`SHAT-tered`, `/ ˘`) creates a **trochaic inversion**, slamming down on the first syllable to make the reader physically feel the impact before steady iambs reassert the beacon's endurance.",
        hints: [
          "Say the word 'shattered' naturally aloud: does the stress fall on the first syllable or the second?",
          "In an iambic line (`˘ /`), starting with `/ ˘` reverses the first foot. What is that reversal called?",
        ],
      },
      {
        id: "4-poetry-and-drama-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "poetic-form-metre-structure",
        question:
          "Read this line from an unseen elegy:\n\n*We packed his coats; the hall stayed cold.*\n\nHow does the medial **caesura** (semicolon) function structurally and emotionally here?",
        options: [
          "It links two unrelated stanzas through enjambment to sustain continuous celebratory optimism.",
          "It creates an ironic comedic punchline by mocking the speaker's practical domestic chores.",
          "It accelerates the pace rapidly across the midpoint so the reader skips past the setting.",
          "It bifurcates the line into abrupt halves, juxtaposing busy practical labour against lingering emotional emptiness.",
        ],
        answerIndex: 3,
        explanation:
          "The sharp internal semicolon **caesura** splits the line cleanly down the middle, forcing a heavy pause between outward physical tidying (*'We packed his coats'*) and the persistent chill of bereavement (*'the hall stayed cold'*).",
        hints: [
          "Notice what separates the two clauses right in the middle of the single line.",
          "Contrast the action on the left of the semicolon with the atmosphere on the right.",
        ],
      },
      {
        id: "4-poetry-and-drama-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "poetic-form-metre-structure",
        question:
          "Why is the **villanelle** (19 lines built on two alternating refrains and only two rhyme sounds, as in Dylan Thomas's *\"Do not go gentle into that good night\"* [Example text — not a set text]) particularly effective for portraying grief, obsession, or defiance?",
        options: [
          "Its compulsory returning refrains enact a mind circling an inescapable thought while subtle context shifts alter each line's emotional resonance.",
          "Its absence of rhyme and irregular stanza lengths free the speaker from all formal constraint to imitate spontaneous spoken diary entries.",
          "Its strict pairing of two rhyming lines per stanza guarantees neat epigrammatic closure after every single sentence.",
          "Its dramatic alternation between two rival speakers stages rapid courtroom interrogation without needing any stage directions.",
        ],
        answerIndex: 0,
        explanation:
          "Because the villanelle's Lines 1 and 3 must recur repeatedly across five tercets and unite in the final quatrain, the form structurally embodies **obsessive return**—while shifting syntax around the refrains deepens or destabilises their meaning.",
        hints: [
          "Think about what returning to the exact same two lines four times apiece feels like psychologically.",
          "Ask how a fixed refrain changes meaning when surrounded by fresh imagery in later stanzas.",
        ],
      },
      {
        id: "4-poetry-and-drama-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "poetic-imagery-sound-voice",
        question:
          "Compare these two poetic phrases:\n\n1. *\"The Crown demanded tribute from the port.\"*\n2. *\"Forty tired hands hauled the wet nets aboard.\"*\n\nWhich classification accurately pairs the figurative device in Phrase 1 and Phrase 2?",
        options: [
          "Phrase 1 uses synecdoche (part for whole) and Phrase 2 uses synesthesia (sensory blending).",
          "Phrase 1 uses personification (human attribute) and Phrase 2 uses hyperbole (deliberate exaggeration).",
          "Phrase 1 uses metonymy (associated emblem) and Phrase 2 uses synecdoche (physical part for whole).",
          "Phrase 1 uses oxymoron (contradictory pair) and Phrase 2 uses metonymy (external institution).",
        ],
        answerIndex: 2,
        explanation:
          "*'The Crown'* is an external emblem associated with royal authority (**metonymy**), whereas *'tired hands'* names a physical anatomical part standing for whole fishermen (**synecdoche**), emphasising manual exhaustion.",
        hints: [
          "Is a crown a physical body part of a monarch, or an associated symbol of royal power?",
          "Are hands physically part of the workers? Match 'associated emblem' vs 'physical part for whole'.",
        ],
      },
      {
        id: "4-poetry-and-drama-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "poetic-imagery-sound-voice",
        question:
          "An IB student writes in a Paper 1 commentary on a quiet lullaby: *\"The poet uses sibilance in 'softly sleeping silver streams', creating a sinister snake-like menace.\"* Why would an IB examiner penalise this comment under Criterion B?",
        options: [
          "Because sibilance only occurs when words end in plosive consonants rather than beginning with the letter s.",
          "Because it applies a rigid cliché about sound symbolism while ignoring how gentle surrounding diction makes the sibilance soothing.",
          "Because IB examiners discourage students from mentioning any acoustic features in lyric poetry analyses.",
          "Because 'softly sleeping silver streams' is strictly an example of half-rhyme rather than sibilance.",
        ],
        answerIndex: 1,
        explanation:
          "Acoustic features possess **no fixed universal meaning**. Here, the soft diction (*softly, sleeping, silver*) combines with `/s/` sibilance to create whispered calm and hush—making 'sinister menace' a classic context-blind technique-spotting error.",
        hints: [
          "Does the `/s/` sound always mean snakes and evil, or does it depend on the words carrying it?",
          "Re-read the lexical field: 'softly', 'sleeping', 'silver streams'—what mood do those words establish?",
        ],
      },
      {
        id: "4-poetry-and-drama-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "poetic-imagery-sound-voice",
        question:
          "Examine this unseen stanza:\n\n*The ledger tallies winter's debt in frost;*\n*Each orchard branch defaults on bloom and leaf,*\n*Foreclosed by wind before the thaw can cost*\n*The orchardist another year of grief.*\n\nHow does the dominant **semantic field** shape the speaker's presentation of seasonal loss?",
        options: [
          "Financial and legal diction frames seasonal barrenness as a merciless debt collection, imbuing grief with transactional coldness.",
          "Pastoral and liturgical diction celebrates winter frost as a sacred blessing that guarantees abundant spring renewal.",
          "Military and naval diction depicts the orchard branches as heroic soldiers triumphing over an invading storm.",
          "Medical and anatomical diction diagnoses winter frost as a temporary fever easily cured by human patience.",
        ],
        answerIndex: 0,
        explanation:
          "Words drawn from finance and repossession (*ledger, tallies, debt, defaults, foreclosed, cost*) sustain an extended **semantic field** that strips nature of romantic consolation, turning bereavement into an unforgiving audit.",
        hints: [
          "Group the key nouns and verbs together: 'ledger', 'debt', 'defaults', 'foreclosed', 'cost'.",
          "What conceptual domain do those words share, and what attitude toward winter grief does that domain project?",
        ],
      },
      {
        id: "4-poetry-and-drama-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "poetic-imagery-sound-voice",
        question:
          "Read this line from an unseen urban poem:\n\n*Neon hums a sour violet down the wet arcade.*\n\nWhich figurative technique drives the phrase *\"hums a sour violet\"*?",
        options: [
          "Pathetic fallacy, because the arcade's weather directly imitates the speaker's political ideology.",
          "Epistrophe, because identical closing phrases repeat across consecutive stanzas of the poem.",
          "Oxymoron, because 'sour' and 'violet' are strict dictionary antonyms placed side by side.",
          "Synesthesia, because auditory ('hums'), gustatory ('sour'), and visual ('violet') senses fuse into one perception.",
        ],
        answerIndex: 3,
        explanation:
          "**Synesthesia** blends distinct sensory modalities—here merging sound (*hums*), taste (*sour*), and colour (*violet*) to evoke an intense, mildly nauseating urban sensory overload.",
        hints: [
          "Count how many different physical senses are activated inside three consecutive words.",
          "Sound + taste + sight blended together has a specific literary term rooted in Greek for 'together-perception'.",
        ],
      },
      {
        id: "4-poetry-and-drama-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "poetic-imagery-sound-voice",
        question:
          "Consider the end-rhymes in this unseen war quatrain:\n\n*He folded maps beside the mud,*\n*And marked the ridge where flares had blown;*\n*No bugle woke the silent wood,*\n*No trumpet stirred the splintered bone.*\n\nNotice the first and third line-endings (*mud / wood*) paired against full rhyme (*blown / bone*). Why do poets deliberately weave **half-rhyme (slant rhyme)** into elegiac or conflict verse?",
        options: [
          "To compensate for limited vocabulary when an exact rhyme word is unavailable in English.",
          "To manufacture brisk nursery-rhyme cheerfulness that lightens grim scenes of battlefield exhaustion.",
          "To frustrate the ear's expectation of full chime, generating acoustic dissonance and withheld emotional closure.",
          "To prove that the poem belongs strictly to unrhymed free verse rather than stanzaic form.",
        ],
        answerIndex: 2,
        explanation:
          "Pairing imperfect consonantal chime (*mud / wood*) alongside full rhyme creates subtle **acoustic friction**: the ear anticipates smooth resolution and hears slight dislocation instead, reinforcing unsettled grief.",
        hints: [
          "Say 'mud' and 'wood' aloud: the ending consonant matches, while the vowel subtly mismatches.",
          "How does withholding exact musical harmony reinforce a poem about war and silent loss?",
        ],
      },
      {
        id: "4-poetry-and-drama-m1-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "poetic-imagery-sound-voice",
        question:
          "In a **dramatic monologue**—such as Robert Browning's *\"My Last Duchess\"* [Example text — not a set text] or an unseen poem in which a boastful governor explains why he silenced town bells to a quiet envoy—why is maintaining the distinction between **poet** and **speaker (persona)** decisive?",
        options: [
          "Because dramatic monologues forbid any use of first-person pronouns, forcing critics to study the poet's biography instead.",
          "Because the poet deliberately engineers ironic cracks in the speaker's self-justification so readers judge the persona critically.",
          "Because the speaker in a dramatic monologue always expresses the poet's personal political manifesto without irony.",
          "Because separating poet from speaker allows examiners to ignore diction and focus purely on historical dates.",
        ],
        answerIndex: 1,
        explanation:
          "The artistic engine of a dramatic monologue is **ironic distance**: the **poet** crafts subtle slips, arrogance, or moral evasions in the **speaker's** words so the reader sees past the persona's self-flattering facade.",
        hints: [
          "When a boastful character defends an authoritarian act in a poem, does the poet necessarily agree with them?",
          "Think about how irony works when the creator of a poem lets a persona unwittingly condemn themselves.",
        ],
      },
      {
        id: "4-poetry-and-drama-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "poetic-imagery-sound-voice",
        question:
          "Read this line aloud:\n\n*Black bolts cracked across the buckled deck.*\n\nWhich combination of acoustic features dominates the line, and what physical sensation does it evoke?",
        options: [
          "Long open assonance and smooth liquid consonants, generating languid nocturnal calm.",
          "Repeated soft nasal hums and sibilant whispers, suggesting distant ocean lullaby.",
          "Alternating feminine rhymes and gentle dactyls, evoking graceful ballroom waltzing.",
          "Clustered plosives (/b, k, t, d/) and hard consonance, mimicking percussive fracture and impact.",
        ],
        answerIndex: 3,
        explanation:
          "Dense bilabial and velar **plosives** (*Black, bolts, cracked, buckled, deck*) paired with sharp `/k/` **consonance** obstruct and release breath explosively, acoustically enacting mechanical snapping under pressure.",
        hints: [
          "Notice the consonants repeated heavily across 'Black bolts cracked... buckled deck'.",
          "Sounds like /b/, /k/, /t/, /d/ stop airflow completely before releasing it—what phonetic category is that?",
        ],
      },
      {
        id: "4-poetry-and-drama-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "poetic-form-metre-structure",
        question:
          "Read the opening foot of this line from an unseen protest poem:\n\n*Stand fast, you clerks who sign away the tide.*\n(`STAND FAST, | you CLERKS | who SIGN | a-WAY | the TIDE`)\n\nHow does the opening **spondee** (*Stand fast*) alter the prosodic effect of the line?",
        options: [
          "Two consecutive heavy stresses anchor the line with immovable rhythmic weight before iambic momentum surges forward.",
          "Two unstressed syllables weaken the imperative verb so the speaker sounds hesitant and apologetic.",
          "A falling triple metre turns the civic warning into a light-hearted satirical ballad.",
          "An enjambed stanza break cuts the first word off from the rest of the grammatical clause.",
        ],
        answerIndex: 0,
        explanation:
          "A **spondee** (`/ /`) places two equal heavy beats side by side (*STAND FAST*), slowing tempo immediately and physically enacting steadfast defiance before the line settles into regular iambs.",
        hints: [
          "Speak 'Stand fast' firmly aloud: are both syllables stressed heavily, or is one unstressed?",
          "A metrical foot made of two consecutive stressed syllables (`/ /`) slows the line down to hammer emphasis.",
        ],
      },
      {
        id: "4-poetry-and-drama-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "poetic-form-metre-structure",
        question:
          "Why does a **modern anti-elegy** often refuse the third traditional stage of classical elegy (consolation)?",
        options: [
          "Because contemporary copyright rules prevent poets from referencing earlier classical traditions.",
          "Because elegies must always conclude with humorous bathos rather than serious meditation on loss.",
          "Because neat spiritual or pastoral comfort can feel dishonest in the face of raw, unresolved grief or historical trauma.",
          "Because free verse poems are structurally incapable of expressing memory, praise, or mourning.",
        ],
        answerIndex: 2,
        explanation:
          "Classical elegy traditionally moves from lament through praise to consolation; modern **anti-elegies** resist premature healing, allowing structural rupture or open endings to honour grief that refuses tidy resolution.",
        hints: [
          "Recall the three traditional phases of an elegy: lament, praise, and consolation.",
          "Why might a modern speaker feel uneasy offering a reassuring moral at the end of a poem about bereavement?",
        ],
      },
      {
        id: "4-poetry-and-drama-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "poetic-imagery-sound-voice",
        question:
          "Read this couplet from an unseen free-verse poem:\n\n*Low moons roll slow over cold stone quays*\n*where salt-bleached hulls groan softly in the dark.*\n\nWhich acoustic feature primarily governs the slow, mournful cadence of these lines?",
        options: [
          "Clipped dental plosives accelerating the rhythm into panicked urgency.",
          "Sustained long-vowel assonance (/əʊ/ in low, roll, slow, over, cold, stone, groan) lengthening vocal resonance.",
          "Strict alternating heroic couplets locking each clause into crisp satirical wit.",
          "Comic onomatopoeia mimicking bustling midday commerce along a crowded harbour.",
        ],
        answerIndex: 1,
        explanation:
          "Repeating the long open vowel `/əʊ/` across *low, roll, slow, over, cold, stone, groan* (**assonance**) physically stretches the mouth and slows breath, deepening the poem's heavy nocturnal resonance.",
        hints: [
          "Listen to the internal vowel sounds echoed in 'low', 'roll', 'slow', 'cold', 'stone', and 'groan'.",
          "Long open vowels repeated internally across nearby words have a specific name distinct from consonant repetition.",
        ],
      },
    ],
  },

  // =========================================================================
  // PAPER M2: Dramatic Staging, Dialogue, Subtext & Genre (15 MCQs)
  // answerIndex plan: [1, 3, 0, 2, 3, 0, 1, 2, 3, 1, 0, 2, 3, 0, 1] -> [4, 4, 3, 4]
  // =========================================================================
  {
    id: "4-poetry-and-drama-m2",
    title: "Paper M2: Dramatic Staging, Dialogue, Subtext & Genre",
    level: "SL",
    questions: [
      {
        id: "4-poetry-and-drama-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "dramatic-conventions-staging",
        question:
          "In a dramatic script, an italicised stage direction specifies: *[HANNAH retreats three paces upstage-left, placing the dining table squarely between herself and OWEN, eyes fixed on the floorboards.]* Which performance concept best captures this authorial choice?",
        options: [
          "Stichomythia, since rapid single-line utterances alternate evenly between the two speakers.",
          "Proxemics and blocking, since physical distance and a furniture barrier visually externalise defensive estrangement.",
          "Dramatic irony, since the audience possesses plot knowledge concealed from Hannah throughout the act.",
          "Bathos, since elevated tragic dialogue suddenly collapses into slapstick physical comedy.",
        ],
        answerIndex: 1,
        explanation:
          "Increasing physical separation and interposing a solid table uses **proxemics** and **blocking** to make emotional defensiveness and relational division immediately visible to the auditorium.",
        hints: [
          "Notice that no words are spoken here—the playwright is arranging bodies and furniture in space.",
          "Which theatrical term describes meaningful physical distance and spatial barriers between actors?",
        ],
      },
      {
        id: "4-poetry-and-drama-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "subtext-dialogue-tragedy-comedy",
        question:
          "How does an **aside** differ fundamentally from a **soliloquy** in stage drama?",
        options: [
          "An aside is always delivered in sung verse, whereas a soliloquy must be written in naturalistic prose.",
          "An aside occurs only during the final act of a tragedy, whereas a soliloquy appears exclusively in comedies.",
          "An aside is written inside italicised stage directions, whereas a soliloquy is spoken aloud by a chorus.",
          "An aside is directed to the audience while other characters remain onstage unheard, whereas a soliloquy occurs when a character is alone.",
        ],
        answerIndex: 3,
        explanation:
          "In a **soliloquy**, the speaker is alone onstage voicing private thoughts; in an **aside**, other characters remain present onstage yet by theatrical convention cannot hear the brief remark aimed straight at the audience.",
        hints: [
          "Ask one simple spatial question: who else is physically standing on stage during the speech?",
          "Compare 'alone onstage' versus 'others onstage, yet unheard by them'.",
        ],
      },
      {
        id: "4-poetry-and-drama-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "dramatic-conventions-staging",
        question:
          "What is the primary artistic purpose of Bertolt Brecht's ***Verfremdungseffekt*** (alienation or estrangement effect), exemplified in Epic Theatre works such as *Mother Courage and Her Children* [Example text — not a set text]?",
        options: [
          "To disrupt seamless illusion so spectators remain critically alert and interrogate social and political structures rather than passively immersing in pathos.",
          "To perfect photographic domestic realism behind an unbroken fourth wall so audiences forget they are sitting inside a theatre.",
          "To confuse spectators with meaningless dialogue so that no coherent political or moral reading can ever emerge.",
          "To restrict all stage action to dimly lit interior rooms so characters' private grief feels inescapable and natural.",
        ],
        answerIndex: 0,
        explanation:
          "Brecht's ***Verfremdungseffekt*** employs visible lighting rigs, scene placards, direct address, and interrupting songs to make the familiar feel strange—preventing passive emotional catharsis so audiences evaluate social injustice critically.",
        hints: [
          "Brecht deliberately opposed purely empathetic 'escapist' theatre.",
          "Why would a playwright deliberately remind spectators that they are watching a constructed play?",
        ],
      },
      {
        id: "4-poetry-and-drama-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "subtext-dialogue-tragedy-comedy",
        question:
          "Read this rapid unseen dialogue between a magistrate and an accused printer:\n\n**MAGISTRATE:** *You printed the pamphlet at midnight.*\n**PRINTER:** *I printed what the council feared by noon.*\n**MAGISTRATE:** *You broke the harbour curfew.*\n**PRINTER:** *Your curfew broke the law.*\n\nWhich dialogue convention intensifies this confrontation, and what is its dramatic effect?",
        options: [
          "Pinteresque silence, elongating pauses until both characters abandon verbal confrontation.",
          "Comic bathos, puncturing the magistrate's authority with absurd domestic trivialities.",
          "Stichomythia, locking opposing characters into rapid single-line verbal fencing that signals equal intellectual steel.",
          "Dramatic monologue, giving the printer uninterrupted space to address a passive silent listener.",
        ],
        answerIndex: 2,
        explanation:
          "Crisp alternating single lines that invert each other's vocabulary (*printed / printed*, *broke / broke*) exemplify **stichomythia**, accelerating pace and staging an evenly matched ideological duel.",
        hints: [
          "Look at the length of every turn and how each reply mirrors and reverses the line before it.",
          "What Greek-derived term names rapid alternating single-line verbal sparring?",
        ],
      },
      {
        id: "4-poetry-and-drama-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "subtext-dialogue-tragedy-comedy",
        question:
          "Read this unseen domestic beat:\n\n**CLAIRE:** *You've polished the silver again.*\n**MARTIN:** *(Pause. Continues buffing a fork without looking up.)* *Guests notice tarnished edges.*\n**CLAIRE:** *We haven't invited anyone since March.*\n**MARTIN:** *(Silence. He sets the fork down in exact alignment with the knife.)*\n\nWhat is the most insightful Paper 1 reading of the **subtext** and **silence** here?",
        options: [
          "The scene is pure exposition informing the audience that Claire and Martin run a successful catering business.",
          "The silence confirms that Martin is relaxed and grateful for Claire's thoughtful reminder about household chores.",
          "The exchange relies entirely on slapstick farce, inviting laughter at Martin's clumsy handling of cutlery.",
          "Beneath polite remarks about cutlery lies an unspoken indictment of social isolation and compulsive control, amplified by loaded silence.",
        ],
        answerIndex: 3,
        explanation:
          "Claire's observation about uninvited guests exposes the hollowness of Martin's ritual; his refusal to answer—channelled into a heavy **silence** and obsessive alignment of the fork—lets concealed shame and alienation reverberate through subtext.",
        hints: [
          "Look past the surface topic (polishing silver): why does Martin keep preparing for guests who never come?",
          "Notice how Martin answers Claire's sharpest truth not with words, but with silence and rigid physical precision.",
        ],
      },
      {
        id: "4-poetry-and-drama-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "subtext-dialogue-tragedy-comedy",
        question:
          "In classical Aristotelian tragedy (such as Sophocles's *Oedipus Rex* [Example text — not a set text]), which statement defines **hamartia** with the greatest scholarly precision?",
        options: [
          "A tragic error of judgement or fateful miscalculation ('missing the mark') that sets irreversible downfall in motion.",
          "The concluding moment of emotional purgation experienced by spectators once the tragic catastrophe ends.",
          "A villainous scheme deliberately hatched by an external antagonist to destroy an entirely passive protagonist.",
          "A brief humorous interlude inserted immediately before the climax to relieve mounting audience suspense.",
        ],
        answerIndex: 0,
        explanation:
          "In Aristotle's *Poetics* [Example text — not a set text], **hamartia** literally derives from archery ('missing the mark') and denotes a **fateful error of judgement or miscalculation**, broader and more nuanced than a simplistic cartoon 'bad trait'.",
        hints: [
          "Avoid confusing hamartia with catharsis (audience release) or comic relief.",
          "Recall the Greek root meaning 'to miss the mark'—an error in judgement or action.",
        ],
      },
      {
        id: "4-poetry-and-drama-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "subtext-dialogue-tragedy-comedy",
        question:
          "During the climax of a tragedy, a ruler's carefully engineered decree to arrest a rebel accidentally exposes the ruler's own forgotten crime—and in the very next beat the ruler whispers, *\"Then the traitor I hunted was myself.\"* Which pair of Aristotelian concepts corresponds in order to these two beats?",
        options: [
          "Catharsis followed immediately by hubris.",
          "Peripeteia (reversal of fortune) followed immediately by anagnorisis (moment of recognition).",
          "Hamartia (tragic error) followed immediately by exposition.",
          "Stichomythia (rapid sparring) followed immediately by fourth-wall rupture.",
        ],
        answerIndex: 1,
        explanation:
          "When an action intended to secure victory produces the exact opposite catastrophe, that turn is **peripeteia**; the ensuing flash of devastating self-knowledge (*'the traitor I hunted was myself'*) is **anagnorisis**.",
        hints: [
          "Beat 1 is a sudden reversal of fortune where an effort backfires completely.",
          "Beat 2 is the protagonist's painful discovery of hidden truth about themselves.",
        ],
      },
      {
        id: "4-poetry-and-drama-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "dramatic-conventions-staging",
        question:
          "In an unseen memory play, the stage directions state: *[As TOMAS recalls the bankruptcy, the warm amber lamp snaps out; the back scrim turns translucent, revealing giant skewed silhouettes of factory chimneys while a distorted metronome ticks louder.]* Which staging aesthetic is being deployed?",
        options: [
          "Strict kitchen-sink naturalism, replicating ordinary domestic acoustics without stylised distortion.",
          "Classical Greek amphitheatre staging, restricting all psychological shifts to offstage messenger reports.",
          "Expressionist staging, distorting light, set transparency, and soundscape to externalise subjective mental torment.",
          "Restoration comedy of manners, foregrounding witty salon conversation under bright unchanging chandeliers.",
        ],
        answerIndex: 2,
        explanation:
          "**Expressionist staging** (comparable to Tennessee Williams's 'plastic theatre' in *The Glass Menagerie* [Example text — not a set text]) bends light, translucent walls, skewed shadows, and amplified sound to project inner anxiety visibly across the stage.",
        hints: [
          "Are giant skewed silhouettes and a distorted metronome meant to look like objective everyday reality?",
          "Which theatrical style externalises a character's interior psychological state onto lighting, set, and sound?",
        ],
      },
      {
        id: "4-poetry-and-drama-m2-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "subtext-dialogue-tragedy-comedy",
        question:
          "In Act II of an unseen play, the audience watches a clerk secretly slip a forged receipt into the director's coat pocket. In Act III, the director cheerfully praises the clerk's *\"unblemished honesty\"* while reaching toward that very pocket. Which technique generates mounting suspense here?",
        options: [
          "Verbal irony, because the director consciously intends to mock the clerk with bitter sarcasm.",
          "Catharsis, because the audience experiences peaceful moral release before any conflict begins.",
          "Metonymy, because the coat pocket substitutes symbolically for the entire legal system.",
          "Dramatic irony, because the audience holds crucial knowledge that the praising director completely lacks.",
        ],
        answerIndex: 3,
        explanation:
          "**Dramatic irony** arises whenever the audience possesses vital information withheld from a character on stage, turning innocent praise (*'unblemished honesty'*) into excruciating suspense.",
        hints: [
          "Does the director know the forged receipt is inside the pocket, or does only the audience know?",
          "Match the exact type of irony where spectator knowledge exceeds character knowledge.",
        ],
      },
      {
        id: "4-poetry-and-drama-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "dramatic-conventions-staging",
        question:
          "Why is an **unopened sealed envelope** left resting on a centre-stage table across two whole acts often far more potent dramatically than having a character briefly mention receiving bad news?",
        options: [
          "Because theatre audiences struggle to hear spoken exposition unless every plot event is written on paper.",
          "Because as a visible symbolic prop, its silent physical persistence builds sustained visual tension and embodies deferred truth.",
          "Because stage props automatically eliminate the need for lighting design, blocking, or subtext in a scene.",
          "Because physical props always guarantee a naturalistic happy resolution before the curtain falls.",
        ],
        answerIndex: 1,
        explanation:
          "A **symbolic prop** remaining constantly inside audience sightlines acts as a ticking visual magnet: every time characters walk around the table or avoid glancing at the envelope, their evasion becomes tangibly physical.",
        hints: [
          "Think of what spectators' eyes keep drifting back to even while characters talk about trivial matters.",
          "How does a persistent physical object turn an abstract fear (facing the truth) into visible stage tension?",
        ],
      },
      {
        id: "4-poetry-and-drama-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "subtext-dialogue-tragedy-comedy",
        question:
          "Which dramatic feature most clearly signals the **Theatre of the Absurd** (as associated with plays such as Samuel Beckett's *Waiting for Godot* [Example text — not a set text])?",
        options: [
          "Cyclical non-linear structure, repetitive stalled dialogue, and bathos dramatising existential uncertainty and linguistic breakdown.",
          "Tightly causally plotted three-act courtroom triumphs rewarding rational human logic and clear moral justice.",
          "Lavish historical spectacle celebrating aristocratic lineage through heroic rhyming couplets.",
          "Documentary footnotes projected onstage solely to teach factual economic statistics without irony.",
        ],
        answerIndex: 0,
        explanation:
          "**Absurdist drama** strips away neat causal plots and purposeful rhetoric—using circular repetition, comic **bathos**, and misfiring dialogue to confront the precariousness of human meaning.",
        hints: [
          "Recall how Theatre of the Absurd treats plot progress, language, and existential purpose.",
          "Which option pairs cyclical structure, stalled language, and existential bathos?",
        ],
      },
      {
        id: "4-poetry-and-drama-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "dramatic-conventions-staging",
        question:
          "In an unseen scene, a daughter begins to deliver a long-repressed accusation, but mid-sentence her father turns calmly to the coat stand, lifts his hat, and exits upstage-right—closing the door softly behind him. What is the strongest analytical interpretation of this **exit**?",
        options: [
          "The soft door click proves that both characters have reached affectionate mutual understanding.",
          "The exit serves merely as a practical cue so stagehands can rearrange chairs between acts.",
          "By walking offstage mid-sentence without slamming the door, he weaponises polite withdrawal to deny her confrontation and closure.",
          "The exit shatters the fourth wall in Brechtian fashion by inviting the audience onto the stage.",
        ],
        answerIndex: 2,
        explanation:
          "Leaving mid-accusation—especially with ostentatious calm (*'closing the door softly'*)—uses an **exit** as an instrument of power, depriving the remaining character of an interlocutor and stranding her alone in the stage space.",
        hints: [
          "Contrast slamming a door in rage with closing it softly while walking away mid-sentence.",
          "Who controls the boundary of the conversation when one character simply removes themselves from the room?",
        ],
      },
      {
        id: "4-poetry-and-drama-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "subtext-dialogue-tragedy-comedy",
        question:
          "Read this unseen excerpt from a satirical drawing-room play:\n\n**LADY VANE:** *Charity, my dear nephew, is the noblest duty of the wealthy—provided the recipients live at least three parishes downwind.*\n\nHow does **satirical comedy** operate in this single epigrammatic sentence?",
        options: [
          "It generates Aristotelian catharsis by inviting spectators to weep over Lady Vane's financial hardship.",
          "It employs expressionist distortion to trap the audience inside Lady Vane's terrifying nightmares.",
          "It stages physical slapstick to distract the audience from any critique of class hierarchy.",
          "It pairs lofty moral rhetoric with a sudden self-serving caveat, using comic inversion to expose aristocratic hypocrisy.",
        ],
        answerIndex: 3,
        explanation:
          "Like Oscar Wilde's comedies of manners [Example text — not a set text], the line builds a pious maxim (*'noblest duty'*) only to puncture it with a selfish geographical clause (*'three parishes downwind'*), exposing performative philanthropy.",
        hints: [
          "Look at the turn introduced by the dash and the word 'provided'.",
          "What social flaw is mocked when noble moral language collapses into snobbish self-protection?",
        ],
      },
      {
        id: "4-poetry-and-drama-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "dramatic-conventions-staging",
        question:
          "Why might a playwright cue a persistent **offstage soundscape**—such as rhythmic pile-drivers hammering beyond a quiet parlour window throughout Act III?",
        options: [
          "To make encroaching external social or economic forces aurally inescapable inside a supposedly sheltered domestic refuge.",
          "To drown out the actors' voices completely so the audience reads the printed script instead of listening.",
          "To prove that the play conforms to ancient classical unities prohibiting all exterior references.",
          "To offer cheerful background music that neutralises any subtextual tension between speakers.",
        ],
        answerIndex: 0,
        explanation:
          "An **offstage soundscape** expands dramatic space beyond the visible set: insistent external noise penetrating a private parlour audibly threatens domestic sanctuary with outside change, demolition, or history.",
        hints: [
          "Think about the contrast between what sits inside the room (quiet parlour) and what hammers outside.",
          "How does sound entering from offstage connect private domestic space to wider external pressure?",
        ],
      },
      {
        id: "4-poetry-and-drama-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "subtext-dialogue-tragedy-comedy",
        question:
          "In a modern domestic tragedy (comparable in genre trajectory to Arthur Miller's *Death of a Salesman* [Example text — not a set text]), why might a playwright deny the protagonist full **anagnorisis** before death?",
        options: [
          "Because modern audiences lack the patience to listen to recognition speeches longer than three lines.",
          "Because withholding self-knowledge intensifies tragic pathos, showing how deeply ideological or familial illusions trap ordinary people.",
          "Because Aristotle forbade any playwright after antiquity from writing scenes of personal recognition.",
          "Because removing recognition automatically converts every tragedy into celebratory romantic comedy.",
        ],
        answerIndex: 1,
        explanation:
          "Deliberately **subverting classical anagnorisis** sharpens social critique: when the audience recognises the protagonist's self-deception while the protagonist dies still clinging to the illusion, dramatic irony and tragic grief deepen.",
        hints: [
          "What happens emotionally for the audience when WE see the truth clearly, yet the dying protagonist never wakes up from their illusion?",
          "Consider how subverting a classical convention can sharpen modern social tragedy.",
        ],
      },
    ],
  },

  // =========================================================================
  // PAPER M3: Integrated Unseen Poetry & Drama Mastery (15 MCQs)
  // answerIndex plan: [2, 0, 3, 1, 2, 3, 1, 0, 2, 3, 1, 2, 0, 3, 1] -> [3, 4, 4, 4]
  // Combined 45 MCQs spread: 0->11, 1->12, 2->11, 3->11!
  // =========================================================================
  {
    id: "4-poetry-and-drama-m3",
    title: "Paper M3: Integrated Unseen Poetry & Drama Mastery",
    level: "SL",
    questions: [
      {
        id: "4-poetry-and-drama-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "poetic-form-metre-structure",
        question:
          "Read this unseen closing couplet of a Shakespearean sonnet about an ageing violinist:\n\n*Though rosin dust now dims the varnished pine,*\n*The bow still wakes a pulse that outlives time.*\n\nHow does the final **rhyming couplet** (notice the slight near-rhyme *pine / time*) shape the sonnet's closing claim?",
        options: [
          "It abandons the violin conceit entirely to introduce an unrelated political critique of artisans.",
          "It mimics fractured free verse to emphasise that music can never withstand physical ageing.",
          "It pivots at Line 13 ('Though...') to assert artistic endurance, while the slight slant rhyme subtly tempers triumph with mortality.",
          "It repeats Lines 1 and 3 verbatim as villanelle refrains to trap the violinist inside circular panic.",
        ],
        answerIndex: 2,
        explanation:
          "Opening Line 13 with the concessive pivot *'Though'* delivers a classic Shakespearean couplet **volta**, affirming art's persistence—yet the imperfect acoustic chime (*pine / time*) introduces a poignant hint of fragility beneath the assertion.",
        hints: [
          "Look at two features simultaneously: the concessive turn 'Though...' AND whether 'pine' and 'time' are a 100% exact rhyme.",
          "What happens when a confident concluding couplet uses a subtle half-rhyme instead of a flawless full chime?",
        ],
      },
      {
        id: "4-poetry-and-drama-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "poetic-imagery-sound-voice",
        question:
          "Compare two analytical sentences written for an IB Paper 1 poetry essay:\n\n**Sentence 1:** *By reducing the night watchmen to 'hollow coats along the pier', the poet deploys metonymy to strip individual identity into anonymous institutional uniform.*\n**Sentence 2:** *The poet uses imagery in 'hollow coats along the pier' to create a vivid picture in the reader's mind and make the poem more engaging.*\n\nWhy does Sentence 1 achieve Band 5 Criterion B while Sentence 2 remains Band 2–3?",
        options: [
          "Sentence 1 identifies a precise figurative mechanism and evaluates its conceptual implication, whereas Sentence 2 relies on generic, interchangeable praise.",
          "Sentence 1 avoids embedding any textual quotation, whereas Sentence 2 improperly quotes four consecutive words.",
          "Sentence 1 ignores tone completely in favour of biographical speculation, whereas Sentence 2 discusses acoustic metre.",
          "Sentence 1 summarises the narrative plot chronologically, whereas Sentence 2 concentrates solely on rhyme scheme.",
        ],
        answerIndex: 0,
        explanation:
          "Band 5 Criterion B rewards **precision + evaluation**: naming exact craft (*metonymy* / empty garment replacing the person) and tying it directly to meaning (*erasure of individuality inside institutional duty*), rather than vague filler (*'vivid picture'*, *'more engaging'*).",
        hints: [
          "Test Sentence 2: could you paste 'creates a vivid picture and makes the poem more engaging' into literally any essay?",
          "Look at what Sentence 1 adds after naming the device: an analytical link to identity and institution.",
        ],
      },
      {
        id: "4-poetry-and-drama-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "dramatic-conventions-staging",
        question:
          "Read this unseen dramatic ending:\n\n*[A single white bulb remains lit directly over the empty wooden chair downstage-centre. From upstage darkness, footsteps recede down a gravel path. The house lights rise halfway—never quite fading to black.]*\n\nWhat combined effect do the **empty chair spotlight** and **half-lit house lights** produce?",
        options: [
          "They provide reassuring naturalistic closure, guaranteeing that the departed character will return happily.",
          "They establish rapid comic farce by turning the auditorium into a bright banquet hall.",
          "They hide the stage completely so spectators concentrate solely on printed programme notes.",
          "The isolated empty chair crystallises physical absence, while rising house lights softly fracture the fourth wall to implicate the audience.",
        ],
        answerIndex: 3,
        explanation:
          "Spotlighting an **empty chair** gives absence tangible stage presence; bringing up **house lights halfway** blurs the boundary between stage and auditorium in a subtle Brechtian gesture, leaving spectators visibly confronted with the lingering question.",
        hints: [
          "Consider both visual signals: what does an illuminated empty chair centre-stage represent?",
          "When house lights brighten on the audience instead of a comfortable blackout, what happens to the fourth wall?",
        ],
      },
      {
        id: "4-poetry-and-drama-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "subtext-dialogue-tragedy-comedy",
        question:
          "Read this unseen dialogue where an employee asks for unpaid overtime:\n\n**DIRECTOR:** *We're a family here, Tariq. Families don't tally minutes on—*\n**TARIQ:** *—families don't lock the payroll office at five either.*\n**DIRECTOR:** *(Beat. Smile stays fixed; voice drops half an octave.)* *What an observant young man.*\n\nHow do **interruption** and the subsequent **vocal shift** expose the power struggle?",
        options: [
          "Tariq's interruption proves he shares the director's affectionate family metaphor without reservation.",
          "Tariq breaks the director's manipulative euphemism mid-clause, and the director's controlled vocal drop converts polished warmth into quiet menace.",
          "The director's fixed smile and softer tone signal sincere admiration and immediate approval of the overtime claim.",
          "The exchange relies purely on dramatic irony because neither character understands the literal meaning of 'payroll'.",
        ],
        answerIndex: 1,
        explanation:
          "Cutting across the director's corporate euphemism (*'We're a family'*) is an audacious power bid; the director's **beat**, frozen smile, and sudden **vocal drop** reveal chilling authoritarian subtext beneath superficial compliment (*'observant'*).",
        hints: [
          "Notice the em-dash (`—`) where Tariq slices across the director's sentence.",
          "When someone keeps smiling while their voice drops lower after a beat, is 'What an observant young man' genuine praise or a veiled warning?",
        ],
      },
      {
        id: "4-poetry-and-drama-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "poetic-form-metre-structure",
        question:
          "Read this unseen free-verse stanza:\n\n*They promised the dam would hold*\n*the valley*\n*quiet.*\n\nWhy might the poet isolate *\"the valley\"* and *\"quiet.\"* on strikingly short stepped lines?",
        options: [
          "To satisfy the compulsory ten-syllable count required by strict iambic pentameter.",
          "To create comic rhyming chimes across three identical line-end sounds.",
          "To mimic vertical flooding and forced silencing, isolating 'quiet.' visually inside surrounding white space.",
          "To conceal the poem's grammatical subject so readers cannot tell who made the promise.",
        ],
        answerIndex: 2,
        explanation:
          "In **free verse**, visual lineation and white space carry structural weight: shrinking lines downward isolates *'the valley'* and drops *'quiet.'* into stark silence, making 'quiet' feel ominously submerged rather than peaceful.",
        hints: [
          "Look at the visual shape of the three lines getting shorter and dropping downward.",
          "How does isolating the single word 'quiet.' surrounded by blank page change its emotional tone?",
        ],
      },
      {
        id: "4-poetry-and-drama-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "poetic-imagery-sound-voice",
        question:
          "Both a **lyric poem** and a **stage soliloquy** grant access to interior consciousness. What crucial medium-specific difference should an IB Paper 2 comparative essay highlight when comparing a poem with a play?",
        options: [
          "Poems can never employ imagery or metaphor, whereas stage soliloquies rely solely on visual props without language.",
          "Stage soliloquies forbid rhythmic metre, whereas lyric poems forbid any shift in tone or speaker attitude.",
          "Lyric poems always require multiple competing speakers, whereas stage soliloquies are narrated by an omniscient prose voice.",
          "A lyric poem mediates interiority purely through textual voice, lineation, and cadence, whereas a soliloquy embodies thought live through gesture, proxemics, and audience sightlines.",
        ],
        answerIndex: 3,
        explanation:
          "Strong cross-form IB comparisons attend to **medium specificity**: poetry shapes interiority via line breaks, white space, and vocal music on the page/ear, whereas a soliloquy places a breathing actor physically inside stage light and shared auditorium space.",
        hints: [
          "Ask what an actor in a theatre brings to a soliloquy that a printed lyric poem does not physically have.",
          "Compare page/lineation craft with embodied live performance craft.",
        ],
      },
      {
        id: "4-poetry-and-drama-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "poetic-imagery-sound-voice",
        question:
          "Read these four lines from an unseen poem about an estranged marriage:\n\n*Our clocks still chime across the carpeted hall,*\n*Two pendulum hearts locked inside separate glass,*\n*Measuring the identical minutes on the wall*\n*Yet never letting a single gear-tooth pass.*\n\nWhich term best describes the sustained clockwork comparison running across the entire quatrain?",
        options: [
          "Synecdoche, because the hallway carpet stands physically for the entire architectural estate and marital home.",
          "Extended metaphor (conceit), because one governing clockwork analogy is elaborated to explore marital estrangement.",
          "Stichomythia, because two estranged spouses trade rapid alternating single-line accusations across the hallway.",
          "Bathos, because elevated romantic diction collapses abruptly into trivial domestic slapstick across the stanza.",
        ],
        answerIndex: 1,
        explanation:
          "Developing one governing analogy (*clocks, pendulum hearts, separate glass, measuring minutes, gear-tooth*) across multiple lines constructs an **extended metaphor / conceit** illustrating proximity without genuine connection.",
        hints: [
          "Trace how one single domain (clockwork) expands across every single line of the quatrain.",
          "What term names a sustained, ingeniously developed central comparison?",
        ],
      },
      {
        id: "4-poetry-and-drama-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "dramatic-conventions-staging",
        question:
          "Read this stage cue:\n\n*[Throughout the mayor's optimistic speech about clean air, a faint grey haze drifts steadily across the upstage cyclorama; nobody onstage acknowledges it.]*\n\nHow does this staging device generate dramatic meaning?",
        options: [
          "Visual irony undercuts spoken rhetoric in real time, positioning the audience to recognise institutional denial before characters admit it.",
          "Acoustic onomatopoeia reinforces the mayor's sincerity by matching gentle tone with pleasant scenery.",
          "Strict Aristotelian catharsis purges the audience's anxiety by showing immediate environmental recovery.",
          "Comic relief distracts spectators from the mayor's speech so political tension dissolves harmlessly.",
        ],
        answerIndex: 0,
        explanation:
          "Pitting serene verbal promises against encroaching visual pollution creates sharp **theatrical/dramatic irony**: because characters ignore the haze directly visible to the auditorium, the staging silently indicts civic blindness.",
        hints: [
          "Compare what the mayor's words claim with what the audience's eyes simultaneously witness behind him.",
          "What effect occurs when stagecraft directly contradicts spoken dialogue?",
        ],
      },
      {
        id: "4-poetry-and-drama-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "poetic-form-metre-structure",
        question:
          "In an unseen poem, Stanzas 1–3 follow spotless regular **iambic tetrameter** with exact `ABAB` rhymes describing childhood school rules. In Stanza 4—when the speaker recalls a sudden expulsion—the rhyme vanishes, syllable counts spike erratically, and three em-dashes shatter a single line. What is the strongest analytical claim?",
        options: [
          "The poet grew hurried toward the ending and accidentally failed to maintain consistent poetic craftsmanship.",
          "The poem switches genres into dramatic prose because verse forms cannot express personal shock.",
          "The abrupt collapse of inherited prosodic order structurally enacts the psychological rupture of being cast outside institutional certainty.",
          "The irregular final stanza establishes joyful liberation by proving school rules never affected the speaker.",
        ],
        answerIndex: 2,
        explanation:
          "Form earns maximum expressive power through **contrast**: establishing tight metrical and rhyming discipline across three stanzas makes the sudden prosodic collapse in Stanza 4 viscerally enact shock and dislocation.",
        hints: [
          "Assume the formal breakdown in Stanza 4 is 100% deliberate, never an 'accident'.",
          "Link the orderly rhythm of Stanzas 1–3 (school rules) to the shattered rhythm of Stanza 4 (expulsion).",
        ],
      },
      {
        id: "4-poetry-and-drama-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "subtext-dialogue-tragedy-comedy",
        question:
          "Why should an IB examiner's eyebrow rise if a student writes about a drama extract: *\"The narrator tells us in italics that Jonah trembles while hiding the telegram\"*?",
        options: [
          "Because italics in printed scripts only ever indicate dialogue shouted loudly across the stage.",
          "Because hiding a telegram is strictly a poetic motif that never appears in theatrical scripts.",
          "Because trembling is an acoustic device rather than a visible physical gesture.",
          "Because plays generally lack a prose narrator; italicised cues are **stage directions** written by the playwright for live performance.",
        ],
        answerIndex: 3,
        explanation:
          "Unless a play explicitly casts a Narrator character on stage, italicised cues are **stage directions** crafted by the **playwright** to guide performance, not narration from a novelistic voice.",
        hints: [
          "Check the genre vocabulary error: which literary form typically has a 'narrator'?",
          "In drama, who authors italicised physical cues, and what are those cues properly called?",
        ],
      },
      {
        id: "4-poetry-and-drama-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "poetic-imagery-sound-voice",
        question:
          "Read this unseen poetic sentence:\n\n*He kept his sorrow folded in a tin / Marked 'Invoices — Paid', and shelved it high.*\n\nHow does the unexpected **juxtaposition** of emotional noun (*sorrow*) with clerical imagery (*tin, Marked 'Invoices — Paid', shelved*) construct characterisation?",
        options: [
          "It portrays the speaker as openly theatrical and eager to display grief before neighbours.",
          "It conveys emotional repression and stoic self-containment, showing grief archived as a settled transaction rather than mourned.",
          "It celebrates bureaucratic efficiency as the healthiest psychological cure for family bereavement.",
          "It employs classical pastoral allusion to compare human grief to seasonal harvest cycles.",
        ],
        answerIndex: 1,
        explanation:
          "Filing *'sorrow'* inside a labelled tin marked *'Invoices — Paid'* uses sharp **juxtaposition** and domestic metaphor to reveal a persona who treats emotional vulnerability as a closed account to be stored out of reach.",
        hints: [
          "Think about what someone does when they mark an invoice 'Paid' and put it on a high shelf.",
          "What psychological habit does applying clerical filing habits to raw grief reveal?",
        ],
      },
      {
        id: "4-poetry-and-drama-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "subtext-dialogue-tragedy-comedy",
        question:
          "In an unseen two-hander play, Character A delivers twenty-two consecutive lines justifying a betrayal while Character B sits motionless saying nothing until a single final word: *\"Done?\"* How does this **dialogue asymmetry** shape audience sympathy and power?",
        options: [
          "Character A's sheer word count automatically establishes complete moral authority and effortless dominance.",
          "Character B's silence indicates apathy and confirms they were not paying attention to Character A's speech.",
          "Character A's frantic verbal flood exposes defensive guilt, whereas Character B's withheld monosyllable seizes quiet moral control.",
          "The unequal speech distribution is classic stichomythia designed to speed up comic banter.",
        ],
        answerIndex: 2,
        explanation:
          "In drama, **talking most rarely equals holding power**: verbose over-explanation often signals anxiety and guilt, whereas a calm, withheld single-word reply (*'Done?'*) punctures the monologue and flips status instantly.",
        hints: [
          "When someone delivers twenty-two defensive lines without interruption, do they sound secure or desperate?",
          "Contrast frantic over-explanation with the razor-sharp composure of a single monosyllable.",
        ],
      },
      {
        id: "4-poetry-and-drama-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "dramatic-conventions-staging",
        question:
          "During a pivotal argument, an actor steps forward onto the apron, looks directly into the auditorium, holds up a painted sign reading *'THE PRICE OF FLOUR RISES AGAIN'*, and remarks: *\"Notice how he forgets the baker's wage.\"* Which pair of staging choices is operating here?",
        options: [
          "Breaking the fourth wall and deploying a Brechtian placard to provoke critical detachment.",
          "Preserving naturalistic domestic illusion and reinforcing Aristotle's unities of time and place.",
          "Staging an expressionist dream sequence driven purely by unconscious interior symbolism.",
          "Using an unheard naturalistic aside that keeps the surrounding scene's photographic realism intact.",
        ],
        answerIndex: 0,
        explanation:
          "Stepping onto the apron to address spectators directly **breaks the fourth wall**, while holding up an explicit socio-economic **placard** is a textbook Brechtian ***Verfremdungseffekt*** cue steering spectators toward economic critique.",
        hints: [
          "Two unmistakable signals appear: direct eye contact/address to the audience AND a painted placard.",
          "Which theatrical movement famously combines broken fourth walls with socio-economic signs?",
        ],
      },
      {
        id: "4-poetry-and-drama-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "poetic-form-metre-structure",
        question:
          "Read these two enjambed lines from an unseen poem about border crossings:\n\n*At dusk the guards inspect our papers, free*\n*of mercy as the frosted wire behind them.*\n\nHow does the line break immediately after the word ***free*** create productive poetic ambiguity?",
        options: [
          "It establishes strict end-stopped clarity so the adjective 'free' can only hold a single comforting sense.",
          "It creates a cheerful internal rhyme with 'papers' that eases the political tension of the border checkpoint.",
          "It signals the final Line-14 couplet resolution of a classical Italian sonnet.",
          "It suspends 'free' at the line's cliff-edge to dangle illusory liberty before the next line's syntax cruelly narrows it to 'free of mercy'.",
        ],
        answerIndex: 3,
        explanation:
          "Strategic **enjambment** turns the line-end word *'free'* into a fleeting mirage of liberation—only for the following line (*'of mercy'*) to snap the meaning shut into cold negation, enacting entrapment through syntax itself.",
        hints: [
          "Read Line 1 alone and stop for half a second on the final word 'free': what hopeful sense flashes briefly?",
          "Now let your eye drop to Line 2 ('of mercy'): how does the grammar violently invert that momentary hope?",
        ],
      },
      {
        id: "4-poetry-and-drama-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "subtext-dialogue-tragedy-comedy",
        question:
          "In a Paper 1 commentary on a dramatic extract, what is the strongest architectural way to organise your body paragraphs to hit Band 5 in **Criterion C (Focus and Organisation)**?",
        options: [
          "Walk line-by-line from the first speech to the final exit so no stage direction is ever mentioned out of order.",
          "Organise around 3 progressive conceptual claims (e.g. spatial control → subtextual evasion → ironic power reversal), integrating dialogue and staging across the extract.",
          "Write Paragraph 1 strictly about dialogue, Paragraph 2 strictly about lighting, and Paragraph 3 listing every punctuation mark without a thesis.",
          "Devote the first half of the essay to summarising the plot in chronological prose before listing five literary terms at the end.",
        ],
        answerIndex: 1,
        explanation:
          "Band 5 Criterion C rewards a **conceptual, thesis-driven progression**: building 3 cohesive analytical claims that synthesise staging, proxemics, subtext, and dialogue across the extract rather than narrating line-by-line or siloing techniques into disconnected lists.",
        hints: [
          "Recall what IB examiners penalise most in Criterion C: chronological line-by-line retelling and disconnected technique lists.",
          "Look for the option that links progressive conceptual arguments with integrated dialogue + staging evidence.",
        ],
      },
    ],
  },
];
