import type { MarkBand, TopicPractice } from "../../types.ts";

function bands6(): MarkBand[] {
  return [
    {
      band: "Band 1 (Limited)",
      marks: [0, 2],
      descriptor:
        "Largely descriptive paraphrase or unsupported technique-spotting; minimal attention to how specific poetic or dramatic choices shape meaning.",
      indicators: ["Retells surface events or summarises lines", "Names features without analysing psychological or thematic effect"],
    },
    {
      band: "Band 2 (Adequate–Good)",
      marks: [3, 4],
      descriptor:
        "Clear, accurate interpretation supported by relevant textual references; explains how key formal or theatrical choices produce specific effects.",
      indicators: ["Embeds concise micro-quotations", "Links authorial craft directly to tone, power, or thematic tension"],
    },
    {
      band: "Band 3 (Perceptive & Evaluative)",
      marks: [5, 6],
      descriptor:
        "Insightful, nuanced analysis evaluating how interacting structural, linguistic, or theatrical choices generate ambiguity, irony, or emotional evolution.",
      indicators: ["Traces structural shifts/turns cleanly", "Weighs subtle subtext, contrast, or subversion with precise academic register"],
    },
  ];
}

function bands8(): MarkBand[] {
  return [
    {
      band: "Band 1 (Limited)",
      marks: [0, 2],
      descriptor:
        "Descriptive summary with little conceptual focus; isolated or inaccurate references to literary/dramatic craft.",
      indicators: ["Chronological retelling", "Conflates poet with speaker or ignores stagecraft"],
    },
    {
      band: "Band 2 (Adequate)",
      marks: [3, 4],
      descriptor:
        "Sound literal understanding with some accurate discussion of imagery, structure, or stage directions, though commentary remains uneven.",
      indicators: ["Identifies valid devices with partial explanation", "Organised clearly but lacks sustained evaluation"],
    },
    {
      band: "Band 3 (Good)",
      marks: [5, 6],
      descriptor:
        "Focused, well-evidenced analysis integrating form/staging with linguistic nuance across a coherent line of argument.",
      indicators: ["Uses integrated micro-quotations", "Connects prosody, soundscapes, or proxemics directly to thematic conflict"],
    },
    {
      band: "Band 4 (Very Good / Perceptive)",
      marks: [7, 8],
      descriptor:
        "Perceptive, cohesive evaluation of subtle authorial craft, irony, structural turns, and performance/reader effects in fluent IB academic register.",
      indicators: ["Synthesises interacting features seamlessly", "Explores productive ambiguity, subtext, or formal subversion"],
    },
  ];
}

function bands10(): MarkBand[] {
  return [
    {
      band: "Band 1 (Limited)",
      marks: [0, 3],
      descriptor:
        "Surface-level summary or disconnected observations; weak comparative or conceptual thread and little evaluative craft analysis.",
      indicators: ["Block paraphrase", "Technique-spotting without meaningful effect"],
    },
    {
      band: "Band 2 (Adequate)",
      marks: [4, 5],
      descriptor:
        "Clear grasp of both formal mechanics and thematic concerns; valid textual evidence with occasional analytical depth.",
      indicators: ["Identifies key contrasts accurately", "Basic conceptual organisation"],
    },
    {
      band: "Band 3 (Good)",
      marks: [6, 8],
      descriptor:
        "Sustained, conceptually organised analysis evaluating how medium-specific craft (poetic or dramatic) constructs tension, voice, and thematic nuance.",
      indicators: ["Integrated point-by-point synthesis", "Precise evaluative verbs and woven micro-quotations"],
    },
    {
      band: "Band 4 (Insightful / Band 5 Standard)",
      marks: [9, 10],
      descriptor:
        "Sophisticated, persuasive literary argument balancing micro close-reading with macro structural evaluation and nuanced attention to audience/reader impact.",
      indicators: ["Evaluates tension, irony, and formal subversion", "Razor-sharp academic clarity and cohesive progression"],
    },
  ];
}

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK QUIZ (10 questions: 4 MCQs with spread [1,1,1,1], 4 short, 2 written)
  // =========================================================================
  quiz: [
    {
      id: "4-poetry-and-drama-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "poetic-form-metre-structure",
      question:
        "In a classical **Petrarchan sonnet**, on which exact line does the **volta** (structural and tonal turn) conventionally arrive?",
      options: [
        "Line 9, pivoting from the eight-line octave into the six-line sestet.",
        "Line 5, dividing the first quatrain from the second descriptive stanza.",
        "Line 13, introducing an epigrammatic rhyming couplet after three quatrains.",
        "Line 14, concluding the poem with a single isolated refrain sentence.",
      ],
      answerIndex: 0,
      explanation:
        "A Petrarchan sonnet partitions its 14 lines into an 8-line **octave** (`ABBAABBA`) and a 6-line **sestet**, with the **volta** turning the argument at **Line 9**.",
      hints: [
        "Count how many lines belong to the opening octave of an Italian sonnet.",
        "The volta marks the very first line of the sestet.",
      ],
    },
    {
      id: "4-poetry-and-drama-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "poetic-form-metre-structure",
      question:
        "How many lines in total make up a traditional **villanelle** (composed of five tercets followed by one closing quatrain)? Give an integer.",
      answer: { type: "number", value: 19, display: "19" },
      traps: [
        {
          spec: { type: "number", value: 14 },
          feedback: "14 lines is a sonnet; a villanelle has five 3-line stanzas plus one 4-line stanza.",
        },
        {
          spec: { type: "number", value: 18 },
          feedback: "Check the closing stanza: five tercets give 15 lines, plus a 4-line quatrain.",
        },
      ],
      solution: [
        "Five tercets contribute 5 × 3 = 15 lines.",
        "One final quatrain contributes 4 lines.",
        "Total lines = 15 + 4 = **19**.",
      ],
      hints: [
        "A tercet has 3 lines and a quatrain has 4 lines.",
        "Calculate (5 × 3) + 4.",
      ],
    },
    {
      id: "4-poetry-and-drama-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "poetic-imagery-sound-voice",
      question:
        "In the poetic line *\"The courthouse silenced every protest along the avenue\"*, replacing human judges with the building *\"the courthouse\"* exemplifies which figurative device?",
      options: [
        "Synecdoche, because a courthouse is a physical anatomical part of every citizen.",
        "Metonymy, because an associated institutional building substitutes for legal authority.",
        "Synesthesia, because visual architecture fuses directly with a sour taste sensation.",
        "Onomatopoeia, because the syllables imitate the literal acoustic sound of a gavel.",
      ],
      answerIndex: 1,
      explanation:
        "**Metonymy** substitutes an associated emblem or site (*the courthouse*) for the institutional power operating within it, highlighting impersonal bureaucratic authority.",
      hints: [
        "Is a building physically part of the judges, or is it an associated seat of their authority?",
        "Distinguish 'associated emblem' (metonymy) from 'physical part of a whole' (synecdoche).",
      ],
    },
    {
      id: "4-poetry-and-drama-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "poetic-imagery-sound-voice",
      question:
        "Name the acoustic technique used when a poet deliberately pairs end-words whose consonants match while their vowels diverge (e.g. *blade / blood* or *warm / worm*) to evoke tonal unease.",
      answer: {
        type: "text",
        accept: ["half-rhyme", "half rhyme", "slant rhyme", "pararhyme", "near rhyme", "imperfect rhyme"],
        display: "half-rhyme",
      },
      traps: [
        {
          spec: { type: "text", accept: ["assonance"] },
          feedback: "Assonance repeats matching vowel sounds; here the vowels diverge while consonants match.",
        },
        {
          spec: { type: "text", accept: ["alliteration"] },
          feedback: "Alliteration repeats initial sounds; look for the rhyme term naming imperfect consonantal chime.",
        },
      ],
      solution: [
        "Matching consonants paired with mismatched vowels (*blade / blood*) deny full harmonic chime.",
        "This technique is called **half-rhyme** (also accepted: *slant rhyme* or *pararhyme*).",
      ],
      hints: [
        "Listen to 'blade' and 'blood': it almost rhymes, yet the vowel tilts out of tune.",
        "Common IB terms include 'half-rhyme', 'slant rhyme', or 'pararhyme'.",
      ],
    },
    {
      id: "4-poetry-and-drama-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "dramatic-conventions-staging",
      question:
        "In a play script, a playwright places two estranged brothers at opposite corners of a bare stage with a stark overhead spotlight falling only on a shattered violin between them. Which set of theatrical devices is primarily working together?",
      options: [
        "Heroic couplets, third-person omniscient narration, and epistolary framing.",
        "Comic relief, rapid stichomythia, and unrhymed trochaic inversion.",
        "Proxemics, chiaroscuro spotlighting, and a symbolic prop.",
        "Villanelle refrains, pastoral allusion, and free indirect discourse.",
      ],
      answerIndex: 2,
      explanation:
        "Opposite-corner positioning uses **proxemics**, isolating the object under an overhead beam deploys **spotlighting**, and the shattered violin functions as a **symbolic prop** embodying broken harmony.",
      hints: [
        "Eliminate options containing prose narration or poetic rhyme terminology.",
        "Match physical distance (proxemics), focused lighting, and a meaningful stage object.",
      ],
    },
    {
      id: "4-poetry-and-drama-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "dramatic-conventions-staging",
      question:
        "What German term—coined by Bertolt Brecht—names the Epic Theatre alienation/estrangement effect that breaks theatrical illusion to encourage critical reflection? (English 'alienation effect' or 'estrangement effect' is also accepted.)",
      answer: {
        type: "text",
        accept: ["Verfremdungseffekt", "verfremdungseffekt", "alienation effect", "estrangement effect", "V-effect", "v-effect"],
        display: "Verfremdungseffekt",
      },
      traps: [
        {
          spec: { type: "text", accept: ["catharsis"] },
          feedback: "Catharsis is Aristotelian emotional purgation—precisely what Brecht sought to interrupt!",
        },
      ],
      solution: [
        "Brecht disrupted fourth-wall immersion via placards, visible lights, and direct address.",
        "This technique is the **Verfremdungseffekt** (alienation / estrangement effect).",
      ],
      hints: [
        "It begins with 'V' in German (meaning 'making-strange effect').",
        "In English it is translated as the alienation effect or estrangement effect.",
      ],
    },
    {
      id: "4-poetry-and-drama-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "subtext-dialogue-tragedy-comedy",
      question:
        "During a tense dinner scene, all four guests sit onstage while one character turns briefly toward the auditorium and murmurs, *\"Wait till they check the basement ledger.\"* The other guests continue eating unaffected. Which convention is being used?",
      options: [
        "A soliloquy, because the speaker voices innermost grief while completely alone onstage.",
        "Stichomythia, because all four guests exchange rapid single-line accusations.",
        "Absurdist bathos, because the guests forget how to speak coherent English sentences.",
        "An aside, because the remark reaches the audience while onstage characters remain conventionally oblivious.",
      ],
      answerIndex: 3,
      explanation:
        "Because other characters remain physically onstage yet do not hear the brief audience-directed remark, this is an **aside**—instantly enlisting spectators in dramatic irony.",
      hints: [
        "Check whether the speaker is alone onstage or surrounded by other characters.",
        "When others stay onstage unheard during a quick whisper to spectators, name that convention.",
      ],
    },
    {
      id: "4-poetry-and-drama-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "subtext-dialogue-tragedy-comedy",
      question:
        "In Aristotelian tragedy, what Greek term names the protagonist's devastating flash of **recognition**—the sudden shift from ignorance to painful truth?",
      answer: {
        type: "text",
        accept: ["anagnorisis"],
        display: "anagnorisis",
      },
      traps: [
        {
          spec: { type: "text", accept: ["peripeteia"] },
          feedback: "Peripeteia is the reversal of fortune; anagnorisis is the shock of recognition.",
        },
        {
          spec: { type: "text", accept: ["hamartia"] },
          feedback: "Hamartia is the tragic error of judgement that starts the fall, not the recognition.",
        },
        {
          spec: { type: "text", accept: ["catharsis"] },
          feedback: "Catharsis is the audience's emotional release, whereas recognition belongs to the protagonist.",
        },
      ],
      solution: [
        "Aristotle separates reversal of circumstances (*peripeteia*) from inner discovery.",
        "The moment of devastating recognition is **anagnorisis**.",
      ],
      hints: [
        "It comes from the Greek for 'knowing again' or 'recognition'.",
        "It follows hubris, hamartia, and peripeteia in the tragic arc.",
      ],
    },
    {
      id: "4-poetry-and-drama-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "poetic-form-metre-structure",
      marks: 3,
      question:
        "Analyse how **enjambment**, **caesura**, and **diction** work together in these two unseen lines to convey sudden loss:\n\n*She reached across the breakfast table—empty*\n*as an unlit stove—and folded up his chair.*",
      modelAnswer:
        "The sharp em-dash caesura mid-line abruptly halts her domestic reach, dramatising the jarring emotional shock of absence. Leaving the stark adjective 'empty' suspended at the cliff-edge through enjambment forces the reader to linger on raw void before the simile 'unlit stove' links bereavement to lost warmth and sustenance. Finally, the clipped gesture of folding the chair signals quiet, painful resignation.",
      markScheme: [
        {
          point: "Analyses the em-dash caesura interrupting the line to mirror sudden shock or hesitation.",
          keywords: ["caesura", "dash", "halts", "interrupt", "shock"],
        },
        {
          point: "Analyses the enjambment suspending 'empty' across the line break to heighten the sense of void.",
          keywords: ["enjambment", "suspended", "line break", "void", "absence"],
        },
        {
          point: "Evaluates domestic imagery/diction ('unlit stove' / 'folded') conveying coldness, loss of warmth, or quiet resignation.",
          keywords: ["warmth", "cold", "domestic", "resignation", "bereavement", "sustenance"],
        },
      ],
      hints: [
        "Look at the two em-dashes cutting straight through the sentence—what pause do they create?",
        "Notice which single word hangs exposed at the very end of Line 1 before the comparison completes on Line 2.",
        "Ask what an 'unlit stove' connotes inside a breakfast scene.",
      ],
    },
    {
      id: "4-poetry-and-drama-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "subtext-dialogue-tragedy-comedy",
      marks: 3,
      question:
        "Explain how **subtext** and the **stage direction** create psychological tension in this brief exchange:\n\n**SONIA:** *I heard you won the scholarship.*\n**LEO:** *(Pause. Carefully zips his backpack shut without smiling.)* *Someone had to take second place, didn't they?*",
      modelAnswer:
        "Although Sonia offers a superficially neutral acknowledgement, Leo's loaded Pinteresque pause signals immediate defensiveness and underlying resentment rather than celebration. His physical action of zipping the backpack closed without smiling visually reinforces emotional withdrawal and readiness to flee the confrontation. Beneath his rhetorical question lies bitter subtext accusing Sonia of rivalry or undermining his achievement.",
      markScheme: [
        {
          point: "Identifies the Pinteresque pause signalling unspoken hostility, tension, or defensiveness.",
          keywords: ["pause", "defensive", "hesitation", "tension", "resentment"],
        },
        {
          point: "Analyses the physical stage direction (zipping bag / withholding smile) as visible emotional closure or withdrawal.",
          keywords: ["withdrawal", "closure", "flee", "guarded", "body language", "visual"],
        },
        {
          point: "Decodes the bitter subtext beneath his rhetorical question exposing rivalry or concealed accusation.",
          keywords: ["subtext", "rivalry", "accusation", "unspoken", "undermin"],
        },
      ],
      hints: [
        "Contrast what a normal celebratory reaction to winning a scholarship looks like with Leo's pause and face.",
        "What does zipping a bag shut communicate physically about wanting to stay in this conversation?",
        "Decode the barb hidden inside his final rhetorical question.",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (EXACTLY 2 papers × 15 questions = 30 questions)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PRACTICE PAPER 1: Unseen Poetry Close Reading & Prosody (15 Qs)
    // -----------------------------------------------------------------------
    {
      id: "4-poetry-and-drama-p1",
      title: "Practice Paper 1: Unseen Poetry Close Reading & Prosody",
      level: "SL",
      questions: [
        {
          id: "4-poetry-and-drama-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "poetic-form-metre-structure",
          question:
            "How many syllables are contained in a strictly regular line of **iambic pentameter**? Give an integer.",
          answer: { type: "number", value: 10, display: "10" },
          traps: [
            {
              spec: { type: "number", value: 5 },
              feedback: "5 is the number of iambic feet (pentameter); each iamb has 2 syllables, so multiply by 2.",
            },
            {
              spec: { type: "number", value: 14 },
              feedback: "14 is the number of lines in a sonnet, not the syllables in one iambic pentameter line.",
            },
          ],
          solution: [
            "An iamb contains 2 syllables (`˘ /`).",
            "Pentameter means 5 feet per line: 5 × 2 = **10** syllables.",
          ],
          hints: [
            "Each iamb has 2 syllables (unstressed + stressed).",
            "'Penta-' means five feet per line.",
          ],
        },
        {
          id: "4-poetry-and-drama-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "poetic-form-metre-structure",
          question:
            "What metrical foot consists of two consecutive **stressed** syllables (`/ /`), such as *\"COLD STONE\"* or *\"STOP NOW\"*, used to slow tempo and add heavy emphasis?",
          answer: {
            type: "text",
            accept: ["spondee", "spondaic", "spondaic foot", "a spondee"],
            display: "spondee",
          },
          traps: [
            {
              spec: { type: "text", accept: ["trochee", "trochaic"] },
              feedback: "A trochee is stressed–unstressed (`/ ˘`), whereas two heavy stresses (`/ /`) form a spondee.",
            },
            {
              spec: { type: "text", accept: ["iamb", "iambic"] },
              feedback: "An iamb is unstressed–stressed (`˘ /`), not two consecutive stressed beats.",
            },
          ],
          solution: [
            "Two consecutive heavy stresses (`/ /`) create a **spondee** (spondaic foot).",
          ],
          hints: [
            "Think of the three main disyllabic feet: iamb (`˘ /`), trochee (`/ ˘`), and the double-stress foot (`/ /`).",
          ],
        },
        {
          id: "4-poetry-and-drama-p1-q03",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "poetic-imagery-sound-voice",
          question:
            "Name the acoustic device produced by repeating **internal vowel sounds** across nearby words, as in *\"cold stone holds the lonely coast\"*.",
          answer: {
            type: "text",
            accept: ["assonance"],
            display: "assonance",
          },
          traps: [
            {
              spec: { type: "text", accept: ["consonance"] },
              feedback: "Consonance repeats consonant sounds; repeating internal vowel sounds is assonance.",
            },
            {
              spec: { type: "text", accept: ["sibilance"] },
              feedback: "Sibilance specifically repeats /s/, /ʃ/, or /z/ hiss sounds, not vowels.",
            },
          ],
          solution: [
            "The echoed long `/əʊ/` vowel sound across *cold, stone, holds, lonely, coast* is **assonance**.",
          ],
          hints: [
            "Check whether the repeated sound is a vowel or a consonant.",
            "Remember: vowel echo = assonance; consonant echo = consonance.",
          ],
        },
        {
          id: "4-poetry-and-drama-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "poetic-imagery-sound-voice",
          question:
            "In the line *\"A brass fan slices bitter amber through the humid hall\"*, which single figurative term names the cross-sensory fusion in *\"bitter amber\"* (taste + colour)?",
          answer: {
            type: "text",
            accept: ["synesthesia", "synaesthesia"],
            display: "synesthesia",
          },
          traps: [
            {
              spec: { type: "text", accept: ["metonymy"] },
              feedback: "Metonymy substitutes an associated emblem; blending two physical senses is synesthesia.",
            },
            {
              spec: { type: "text", accept: ["oxymoron"] },
              feedback: "Bitter and amber are not strict opposites—they belong to different sensory channels.",
            },
          ],
          solution: [
            "Merging taste (*bitter*) with visual colour (*amber*) is **synesthesia** (also spelt *synaesthesia*).",
          ],
          hints: [
            "Notice that 'bitter' belongs to taste while 'amber' belongs to sight.",
            "Name the literary term for blending two distinct physical senses.",
          ],
        },
        {
          id: "4-poetry-and-drama-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "poetic-form-metre-structure",
          question:
            "State the full 14-letter rhyme scheme (without spaces, e.g. `ABAB...`) of a traditional **Shakespearean sonnet**.",
          answer: {
            type: "text",
            accept: ["ABABCDCDEFEFGG", "ababcdcdefefgg", "ABAB CDCD EFEF GG"],
            display: "ABABCDCDEFEFGG",
          },
          traps: [
            {
              spec: { type: "text", accept: ["ABBAABBACDECDE", "ABBAABBACDCDCD"] },
              feedback: "ABBAABBA begins a Petrarchan (Italian) sonnet; a Shakespearean sonnet uses three alternating quatrains plus a couplet.",
            },
          ],
          solution: [
            "Three alternating quatrains give `ABAB CDCD EFEF`.",
            "The closing rhyming couplet adds `GG`, yielding **ABABCDCDEFEFGG**.",
          ],
          hints: [
            "Structure: Quatrain 1 + Quatrain 2 + Quatrain 3 + Rhyming Couplet.",
            "Each quatrain uses alternating rhymes (`ABAB`, `CDCD`, `EFEF`), ending in `GG`.",
          ],
        },
        {
          id: "4-poetry-and-drama-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "poetic-form-metre-structure",
          question:
            "Read this original unseen sonnet (*\"The Clockmaker's Apprentice\"*):\n\n*He bends above a brass wheel all the night, (1)*\n*While oil-lamps gutter low along the shelf; (2)*\n*Each tiny ratchet clicks into the light, (3)*\n*A silver pulse more patient than himself. (4)*\n*The master sleeps behind the bolted stair, (5)*\n*Where gilded pendulums keep measured sway; (6)*\n*The boy counts debt in gears—beyond repair, (7)*\n*His youth ticks quietly in filings grey. (8)*\n*Yet when the harbour chimes announce the four, (9)*\n*He slips one spare escapement in his sleeve, (10)*\n*Unlocks the iron latch beside the door, (11)*\n*And steps into the fog without a leave: (12)*\n*No master owns the hours a servant steals, (13)*\n*Nor winds the heart once free of borrowed wheels. (14)*\n\nIdentify the **specific sonnet form** of this poem (two words).",
          answer: {
            type: "text",
            accept: ["Shakespearean sonnet", "English sonnet", "Elizabethan sonnet"],
            display: "Shakespearean sonnet",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Petrarchan sonnet", "Italian sonnet"] },
              feedback: "Check the rhyme scheme: night/shelf/light/himself is ABAB, ending with steals/wheels (GG)—that is Shakespearean, not Petrarchan.",
            },
          ],
          solution: [
            "End-rhymes follow `ABAB` (*night/shelf/light/himself*), `CDCD` (*stair/sway/repair/grey*), `EFEF` (*four/sleeve/door/leave*), `GG` (*steals/wheels*).",
            "Three quatrains plus a closing rhyming couplet identify a **Shakespearean sonnet** (English sonnet).",
          ],
          hints: [
            "Label the end-words of Lines 1–4 (*night, shelf, light, himself*) and Lines 13–14 (*steals, wheels*).",
            "Which sonnet tradition uses three alternating quatrains and a closing GG couplet?",
          ],
        },
        {
          id: "4-poetry-and-drama-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "poetic-form-metre-structure",
          question:
            "Referring to *\"The Clockmaker's Apprentice\"* above, on which **line number** does the primary **volta** (signalled by a concessive pivot word) initiate the boy's quiet act of liberation? Give an integer.",
          answer: { type: "number", value: 9, display: "9" },
          traps: [
            {
              spec: { type: "number", value: 13 },
              feedback: "Line 13 seals the epigrammatic moral, whereas the actual action and tonal pivot ('Yet when the harbour chimes...') begins earlier at Line 9.",
            },
          ],
          solution: [
            "Lines 1–8 depict nocturnal confinement and indentured toil under the sleeping master.",
            "Line **9** opens with the pivot word *'Yet'* as the apprentice pockets an escapement and prepares to escape.",
          ],
          hints: [
            "Scan for classic volta signposts such as 'Yet', 'But', or 'Still'.",
            "Notice that even a Shakespearean sonnet can place its primary narrative turn at Line 9.",
          ],
        },
        {
          id: "4-poetry-and-drama-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "poetic-form-metre-structure",
          marks: 3,
          question:
            "In Lines 7–8 of *\"The Clockmaker's Apprentice\"* (*\"The boy counts debt in gears—beyond repair, / His youth ticks quietly in filings grey.\"*), analyse how the **caesura**, **enjambment**, and **extended metaphor** convey the cost of apprenticeship.",
          modelAnswer:
            "The abrupt em-dash caesura slices Line 7 right before 'beyond repair', enacting a sudden painful realisation of irreversible damage. Because that phrase spills across the line break via enjambment directly onto 'His youth', the syntax momentarily applies mechanical breakage to the boy's own life. Sustaining the clockwork conceit—with youth ticking away into metallic dust—reveals how indentured labour steadily grinds human vitality down into waste.",
          markScheme: [
            {
              point: "Analyses the em-dash caesura halting Line 7 to emphasise stark emotional realisation or rupture.",
              keywords: ["caesura", "dash", "halts", "break", "rupture", "pause"],
            },
            {
              point: "Explains how enjambment connects 'beyond repair' across the line break directly to 'His youth'.",
              keywords: ["enjambment", "line break", "spills", "connects", "links"],
            },
            {
              point: "Evaluates the clockwork/mechanical extended metaphor portraying indentured youth eroding into discarded dust.",
              keywords: ["clockwork", "conceit", "metaphor", "labour", "vitality", "erod", "grinds"],
            },
          ],
          hints: [
            "Examine the em-dash inside Line 7 and what immediately follows it.",
            "Look at how 'beyond repair' hangs at the end of Line 7 and modifies 'His youth' on Line 8.",
            "Connect 'ticks' and 'filings' back to the poem's central horological metaphor.",
          ],
        },
        {
          id: "4-poetry-and-drama-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "poetic-imagery-sound-voice",
          marks: 3,
          question:
            "Analyse how the closing couplet of *\"The Clockmaker's Apprentice\"* (*\"No master owns the hours a servant steals, / Nor winds the heart once free of borrowed wheels.\"*) uses **parallel negation**, **rhyming finality**, and **figurative inversion** to reframe power.",
          modelAnswer:
            "Opening both closing lines with balanced negative syntax ('No master...' / 'Nor winds...') establishes a ringing, defiant manifesto that overturns the workshop's hierarchy. The crisp full chime of the GG couplet ('steals / wheels') locks the resolution with epigrammatic finality, turning illicit theft into moral reclamation. By inverting the clockwork imagery so the heart refuses mechanical winding, the poet celebrates reclaimed interior autonomy.",
          markScheme: [
            {
              point: "Analyses the parallel negative syntax ('No... / Nor...') creating authoritative defiance or reversal of hierarchy.",
              keywords: ["negation", "negative", "parallel", "defiant", "hierarchy", "authority"],
            },
            {
              point: "Evaluates the crisp full rhyme of the closing couplet imparting epigrammatic finality or moral reclamation.",
              keywords: ["couplet", "epigram", "finality", "closure", "reclamation", "rhyme"],
            },
            {
              point: "Explains how inverting the mechanical winding image asserts personal freedom and autonomy.",
              keywords: ["autonomy", "freedom", "mechanical", "invert", "reclaimed"],
            },
          ],
          hints: [
            "Look at the opening words of Lines 13 and 14 ('No...' / 'Nor...').",
            "How does a full GG rhyming couplet sound compared to earlier lines, and why pair 'steals' with 'wheels'?",
            "Notice how the earlier clockwork image of servitude is now reclaimed to declare inner freedom.",
          ],
        },
        {
          id: "4-poetry-and-drama-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "poetic-imagery-sound-voice",
          question:
            "Read this unseen extract (*\"Salt Marsh at Low Tide\"*):\n\n*Low mudflats hush beneath the silver mist;*\n*Shells slit the silt where slipping currents hiss,*\n*While iron pilings clack against the pier*\n*And rusted chains knock blunt across the quay.*\n\nWhich acoustic device dominates the **first two lines** (*hush, silver, mist, shells, slit, silt, slipping, hiss*)?",
          answer: {
            type: "text",
            accept: ["sibilance", "sibilant"],
            display: "sibilance",
          },
          traps: [
            {
              spec: { type: "text", accept: ["plosives", "plosive"] },
              feedback: "Plosives dominate Lines 3–4 ('pilings clack... pier... knock blunt'), whereas Lines 1–2 weave /s/ and /ʃ/ sibilance.",
            },
            {
              spec: { type: "text", accept: ["assonance"] },
              feedback: "Look at the repeated /s/ and /ʃ/ consonant hiss across Lines 1–2 rather than repeated vowels.",
            },
          ],
          solution: [
            "Repeated `/s/` and `/ʃ/` sounds (*hush, silver, mist, shells, slit, silt, slipping, hiss*) constitute **sibilance**.",
          ],
          hints: [
            "Whisper Lines 1–2 aloud and feel the breath sliding past your teeth.",
            "Name the specific acoustic term for repeated /s/ and /ʃ/ consonant sounds.",
          ],
        },
        {
          id: "4-poetry-and-drama-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Contrast",
          guideRef: "poetic-imagery-sound-voice",
          marks: 4,
          question:
            "In *\"Salt Marsh at Low Tide\"* (quoted in Q10), **contrast** how the poet deploys acoustic texture in Lines 1–2 versus Lines 3–4 to dramatise the collision between natural marshland and industrial infrastructure.",
          modelAnswer:
            "In Lines 1–2, fluid sibilance ('hush', 'silver', 'slipping') weaves an eerie, hushed maritime atmosphere, though the sharp verb 'slit' subtly hints that the marsh retains quiet menace beneath its mist. Abruptly in Lines 3–4, the soundscape hardens into percussive plosives ('pilings', 'clack', 'pier', 'knock', 'blunt') and stark /k/ consonance, jolting the ear out of liquid calm. This stark phonetic shift aurally enacts the intrusion of corroded industrial hardware colliding clumsily against the yielding tidal landscape.",
          markScheme: [
            {
              point: "Analyses Lines 1–2 sibilance in context (hushed/fluid atmosphere complicated by sharp edge in 'slit').",
              keywords: ["sibilance", "hush", "fluid", "eerie", "maritime"],
            },
            {
              point: "Identifies the abrupt shift to harsh plosives (/p, k, t, b/) or consonance in Lines 3–4.",
              keywords: ["plosive", "percussive", "consonance", "harsh"],
            },
            {
              point: "Links the phonetic transition directly to the clash between natural landscape and rusted industrial hardware.",
              keywords: ["industrial", "natural", "intrusion", "collision", "corroded", "hardware"],
            },
            {
              point: "Avoids context-blind sound clichés by pairing acoustic choices with lexical diction ('slit', 'rusted', 'blunt').",
              keywords: ["diction", "blunt", "rusted", "lexical", "soundscape"],
            },
          ],
          hints: [
            "Avoid simplistic clichés about sibilance—check how 'hush' and 'silver' interact with 'slit'.",
            "Say Lines 3–4 aloud: feel the explosive /p/, /k/, /b/, /t/ consonants.",
            "Connect the sound shift directly to nature vs industrial infrastructure.",
          ],
        },
        {
          id: "4-poetry-and-drama-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "poetic-imagery-sound-voice",
          marks: 4,
          question:
            "Read this unseen opening of a dramatic monologue (*\"The Curator's Speech\"*):\n\n*Please step behind the velvet cord, my friend;*\n*That cracked clay bowl belonged to coastal tribes*\n*Whose names we neatly shortened to a shelf.*\n*You seem uneasy—surely glass protects*\n*What careless weather would have washed away.*\n\nExplain how the **poet** constructs **ironic distance** from the **speaker (persona)** here.",
          modelAnswer:
            "The poet carefully separates their own critical vantage from the complacent curator persona by planting damning lexical slips inside his polite welcome. While the speaker adopts courteous hospitality ('velvet cord', 'my friend'), the chillingly casual phrase 'neatly shortened to a shelf' exposes colonial erasure disguised as scholarly tidiness. By inserting the silent auditor's visible discomfort ('You seem uneasy'), the poet prompts readers to distrust the curator's self-justifying claim of protection and recognise institutional appropriation instead.",
          markScheme: [
            {
              point: "Explicitly distinguishes the poet's critical craftsmanship from the self-justifying speaker/persona.",
              keywords: ["persona", "speaker", "poet", "ironic distance", "complacent"],
            },
            {
              point: "Analyses the clash between polished courtesy ('velvet cord') and chilling reductive phrasing ('shortened to a shelf').",
              keywords: ["erasure", "courteous", "polite", "reductive", "tidiness", "colonial"],
            },
            {
              point: "Evaluates the dramatic monologue's silent auditor ('You seem uneasy') guiding the reader's moral scepticism.",
              keywords: ["auditor", "listener", "discomfort", "scepticism", "distrust"],
            },
            {
              point: "Unpacks the ironic hollowness of 'glass protects' masking institutional possession or appropriation.",
              keywords: ["appropriation", "possession", "self-justifying", "institutional", "ironic"],
            },
          ],
          hints: [
            "Never treat the curator's opinions as the poet's personal views—track where the speaker condemns himself.",
            "Look closely at the dark irony in 'neatly shortened to a shelf'.",
            "How does the silent listener's reaction ('You seem uneasy') act as a mirror for the reader?",
          ],
        },
        {
          id: "4-poetry-and-drama-p1-q13",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "poetic-form-metre-structure",
          marks: 4,
          question:
            "Read this unseen free-verse poem (*\"Inventory After the Flood\"*):\n\n*Three porcelain saucers—intact.*\n*One wedding photograph curled*\n*into a grey parenthesis.*\n*The floorboards still remember*\n*how to hold*\n*river.*\n\nAnalyse how **free-verse lineation, visual brevity, and personification** communicate the aftermath of catastrophe.",
          modelAnswer:
            "Rather than lacking structure, the poem's free-verse architecture mirrors the spare cadence of an insurance list fractured by trauma. The crisp dash caesura isolating 'intact' underlines fragile survival before enjambment mimics the literal curling distortion of memory in 'grey parenthesis', rendering marriage a bracketed aside. By attributing enduring memory to the floorboards through personification and isolating the bare, article-less noun 'river.' on its own final line, the poet lets floodwater linger visually amidst surrounding white space as an inescapable domestic resident.",
          markScheme: [
            {
              point: "Refutes the 'formless' myth by showing how sparse inventory-like free verse mirrors catalogued shock.",
              keywords: ["free verse", "inventory", "list", "catalogue", "spare", "structure"],
            },
            {
              point: "Analyses the 'grey parenthesis' image / enjambment suggesting distorted or sidelined personal memory.",
              keywords: ["parenthesis", "memory", "curled", "distortion", "enjambment", "sidelined"],
            },
            {
              point: "Analyses personification of the floorboards ('remember') showing physical space absorbing trauma.",
              keywords: ["personification", "trauma", "absorbs", "floorboards", "haunted"],
            },
            {
              point: "Evaluates the stepped single-word final line ('river.') surrounded by white space making floodwater an enduring presence.",
              keywords: ["white space", "isolated", "single-word", "lingers", "presence", "final line"],
            },
          ],
          hints: [
            "Notice how the first three lines resemble a stark damage-assessment checklist.",
            "Why is calling a curled wedding photo a 'parenthesis' so resonant?",
            "Look at the final three lines stepping shorter until the single word 'river.' stands naked without 'a' or 'the'.",
          ],
        },
        {
          id: "4-poetry-and-drama-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "poetic-imagery-sound-voice",
          marks: 6,
          question:
            "Read this unseen lyric extract (*\"Clinic Waiting Room, November\"*):\n\n*Fluorescent tubes buzz cold aluminium light*\n*Over rows of knees angled away from speech;*\n*A wall-clock swallows seconds bite by bite,*\n*While coats stay buttoned past the radiator's reach.*\n*Only the fish-tank breathes an emerald hum,*\n*Small lantern circling through our muted dread,*\n*Until a clipped voice calls the next to come—*\n*And twenty shoulders stiffen toward the tread.*\n\nDiscuss how the poet uses **sensory imagery, synecdoche, soundscapes, and structural contrast** to evoke collective anxiety inside institutional space.",
          modelAnswer:
            "The poet constructs a suffocating atmosphere of medicalised alienation by pitting sterile sensory harshness against a single fragile pocket of organic life. Opening with synesthesia ('buzz cold aluminium light'), visual glare fuses with mechanical noise and metallic chill to strip the waiting room of comfort. Repeated synecdoche—reducing anxious patients to 'rows of knees' and 'twenty shoulders'—visually fragments human identity under institutional scrutiny, reinforced by defensive body posture ('coats stay buttoned'). Meanwhile, the personified clock 'swallows seconds' with clipped dental plosives ('bite by bite'), distorting subjective waiting time into predatory consumption. Structurally, Line 5 introduces a delicate micro-volta ('Only...'), shifting semantic fields from metallic cold to living colour ('emerald hum', 'small lantern') where soft nasals offer fleeting sanctuary. Yet the final two lines shatter that respite with a brusque dash caesura and harsh 'clipped voice', locking the alternating ABAB quatrains into taut shared dread as anonymous footsteps approach.",
          markScheme: [
            {
              point: "Analyses synesthesia ('buzz cold aluminium light') fusing sight, sound, and metallic sterility.",
              keywords: ["synesthesia", "metallic", "sterile", "glare", "sensory"],
            },
            {
              point: "Analyses synecdoche ('rows of knees', 'twenty shoulders') conveying fragmentation and loss of individuality.",
              keywords: ["synecdoche", "fragment", "individuality", "anonymous", "body parts"],
            },
            {
              point: "Analyses personification and plosive/clipped cadence of the clock ('swallows seconds bite by bite') distorting waiting time.",
              keywords: ["personification", "plosive", "predatory", "time", "swallows"],
            },
            {
              point: "Identifies the Line-5 structural shift/volta ('Only...') introducing organic contrast via the fish-tank sanctuary.",
              keywords: ["volta", "shift", "organic", "sanctuary", "contrast", "emerald"],
            },
            {
              point: "Evaluates acoustic contrast between the soothing hum of the tank and the harsh 'clipped voice' / dash caesura.",
              keywords: ["acoustic", "caesura", "clipped", "shatter", "nasal", "soundscape"],
            },
            {
              point: "Synthesises choices around the conceptual theme of collective anxiety inside impersonal institutional space.",
              keywords: ["institutional", "collective", "alienation", "dread", "anxiety"],
            },
          ],
          markbands: bands6(),
          hints: [
            "Spot the synesthesia in Line 1 and the two instances of synecdoche in Lines 2 and 8.",
            "Look at how the mood shifts briefly at Line 5 ('Only the fish-tank...') before snapping back in Lines 7–8.",
            "Organise conceptually (Sterile Alienation → Fleeting Organic Respite → Institutional Rupture) rather than line-by-line.",
          ],
        },
        {
          id: "4-poetry-and-drama-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "poetic-form-metre-structure",
          marks: 8,
          question:
            "**IB Paper 1 Extended Close Reading.** Read this complete original unseen poem (*\"Letter Never Posted to a Childhood House\"*) and analyse how the poet uses **form, metrical/lineation shifts, competing semantic fields, and lyrical tone** to explore the tension between nostalgia and self-deception:\n\n*You kept my height in pencil on the jamb, (1)*\n*Each dated notch a ladder climbing thin; (2)*\n*We called the damp hallway a quiet harbour, calm (3)*\n*Enough to lock the winter sirens in. (4)*\n\n*I used to paint your brick facade in brass, (5)*\n*Remembering the kettle's silver steam— (6)*\n*Forgetting how the frost crept up the glass (7)*\n*And cracked the plaster of our careful dream. (8)*\n\n*Stop now. No mortar holds a myth for long. (9)*\n*The locks were bolted from the outer side; (10)*\n*A cramped room does not turn into a song (11)*\n*Because a child once learned to shrink inside. (12)*\n\n*Still, when rain strikes an iron sill at dusk, (13)*\n*My hand still reaches for your rusted latch. (14)*",
          modelAnswer:
            "Through a deliberately hybrid fourteen-line sonnet architecture, the poet interrogates how memory embellishes confinement into comforting nostalgia—only to expose the stubborn persistence of attachment even after illusion is dismantled. Across the opening two quatrains, regular alternating rhymes (ABAB CDCD) and reflective apostrophe ('You kept...') construct a warm domestic elegy. Competing semantic fields immediately sow unease beneath the tenderness: although the persona once gilded the building as a 'quiet harbour' painted in 'brass' and 'silver steam', claustrophobic diction ('damp', 'lock... in', 'cracked plaster') reveals that sentimental nostalgia required selective amnesia ('Forgetting how...'). Furthermore, the subtle enjambment across Lines 3–4 ('calm / Enough to lock') momentarily dangles serenity before redefining calm as imprisonment, while the dash caesura in Line 6 punctures idyllic recollection to admit suppressed decay. At Line 9, a fierce volta detonates the romantic haze: opening with an emphatic spondee and abrupt full-stop caesura ('Stop now.'), the speaker violently halts self-deception. Stark architectural realism replaces metallic idealisation as 'bolted from the outer side' and 'shrink inside' strip the childhood home of mythic song, reframing nostalgia as a survival mechanism. Crucially, however, the poem resists neat, triumphant detachment in its Shakespearean-positioned closing couplet. Pivoting a second time on 'Still,' at Line 13, the poet replaces the expected crisp GG full rhyme with stark dissonance ('dusk / latch'). That jarring unrhymed closure denies tidy emotional resolution, enacting the painful ambiguity at the poem's core: intellectual honesty can demolish a false myth without ever fully erasing the body's instinctive longing for home.",
          markScheme: [
            {
              point: "Identifies the 14-line hybrid sonnet form (three quatrains + disrupted final couplet) and links formal architecture to memory's illusions.",
              keywords: ["sonnet", "quatrain", "hybrid", "architecture", "form"],
            },
            {
              point: "Traces competing semantic fields—luminous nostalgia ('brass', 'silver', 'harbour') colliding with confinement and decay ('damp', 'lock', 'cracked').",
              keywords: ["semantic field", "nostalgia", "confinement", "decay", "idealisation"],
            },
            {
              point: "Analyses enjambment ('calm / Enough') or dash caesura in Lines 3–8 exposing selective amnesia beneath gentle memory.",
              keywords: ["enjambment", "caesura", "amnesia", "imprisonment", "forgetting"],
            },
            {
              point: "Evaluates the Line-9 volta marked by the emphatic spondee and full-stop caesura ('Stop now.') shattering romantic myth.",
              keywords: ["volta", "spondee", "shatter", "self-deception", "myth"],
            },
            {
              point: "Analyses Lines 10–12 reframing childhood compliance ('shrink inside', 'bolted') as survival rather than genuine safety.",
              keywords: ["survival", "bolted", "compliance", "claustrophobic", "realism"],
            },
            {
              point: "Identifies the secondary tonal turn at Line 13 ('Still,') showing involuntary embodied longing persisting despite clarity.",
              keywords: ["second", "turn", "involuntary", "longing", "instinctive", "attachment"],
            },
            {
              point: "Evaluates the deliberately broken/dissonant couplet ending ('dusk / latch') refusing neat closure or emotional resolution.",
              keywords: ["dissonance", "unrhymed", "closure", "resolution", "couplet"],
            },
            {
              point: "Sustains an evaluative, conceptually organised line of argument addressing productive ambiguity rather than chronological paraphrase.",
              keywords: ["ambiguity", "tension", "intellectual", "paradox", "conceptual"],
            },
          ],
          markbands: bands8(),
          hints: [
            "Count the lines (14) and inspect the rhyme scheme—especially what shocking thing happens to the rhyme on Lines 13–14 ('dusk / latch')!",
            "Spot TWO structural turns: the forceful spondaic volta at Line 9 ('Stop now.') and the softer counter-turn at Line 13 ('Still,').",
            "Track how the speaker's own metaphors shift from warm idealisation ('harbour', 'brass', 'silver') to stark confinement ('bolted', 'shrink inside').",
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2: Unseen Drama Script, Staging & Subtext (15 Qs)
    // -----------------------------------------------------------------------
    {
      id: "4-poetry-and-drama-p2",
      title: "Practice Paper 2: Unseen Drama Script, Staging & Subtext",
      level: "SL",
      questions: [
        {
          id: "4-poetry-and-drama-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "dramatic-conventions-staging",
          question:
            "What two-word theatrical term names the imaginary invisible barrier separating the fictional world on stage from the watching audience in naturalistic drama?",
          answer: {
            type: "text",
            accept: ["fourth wall", "the fourth wall", "4th wall"],
            display: "fourth wall",
          },
          traps: [
            {
              spec: { type: "text", accept: ["proscenium", "proscenium arch"] },
              feedback: "The proscenium arch is the physical frame around the stage; the imaginary transparent barrier is the fourth wall.",
            },
          ],
          solution: [
            "Realist box-sets have three solid walls plus one imaginary transparent boundary facing the seats: the **fourth wall**.",
          ],
          hints: [
            "A stage room has three physical walls—what do we call the imaginary plane facing the auditorium?",
          ],
        },
        {
          id: "4-poetry-and-drama-p2-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "subtext-dialogue-tragedy-comedy",
          question:
            "Name the dramatic convention in which a character speaks their private inner thoughts aloud while **alone on stage** (unheard by other characters).",
          answer: {
            type: "text",
            accept: ["soliloquy", "a soliloquy"],
            display: "soliloquy",
          },
          traps: [
            {
              spec: { type: "text", accept: ["aside"] },
              feedback: "An aside occurs while other characters remain onstage; speaking thoughts aloud alone is a soliloquy.",
            },
            {
              spec: { type: "text", accept: ["monologue", "dramatic monologue"] },
              feedback: "A dramatic monologue addresses a silent listener; speaking alone onstage is specifically a soliloquy.",
            },
          ],
          solution: [
            "From Latin *solus* (alone) + *loqui* (to speak), an alone-onstage inner speech is a **soliloquy**.",
          ],
          hints: [
            "Think of the Latin roots for 'alone' (*solus*) and 'speak' (*loqui*).",
          ],
        },
        {
          id: "4-poetry-and-drama-p2-q03",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "subtext-dialogue-tragedy-comedy",
          question:
            "In Aristotelian tragedy, what Greek term names the **sudden reversal of fortune**—when a protagonist's chosen action triggers the opposite outcome of what they intended?",
          answer: {
            type: "text",
            accept: ["peripeteia"],
            display: "peripeteia",
          },
          traps: [
            {
              spec: { type: "text", accept: ["anagnorisis"] },
              feedback: "Anagnorisis is the shock of recognition; the external reversal of fortune is peripeteia.",
            },
            {
              spec: { type: "text", accept: ["hamartia"] },
              feedback: "Hamartia is the initial tragic error of judgement; the sudden reversal it precipitates is peripeteia.",
            },
          ],
          solution: [
            "The sudden reversal of fortune in Aristotle's *Poetics* [Example text — not a set text] is **peripeteia**.",
          ],
          hints: [
            "It sits right between *hamartia* (error) and *anagnorisis* (recognition).",
            "Starts with 'peri-' (turning around).",
          ],
        },
        {
          id: "4-poetry-and-drama-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "subtext-dialogue-tragedy-comedy",
          question:
            "What single term names the unspoken emotional motive, hidden resentment, or status bid pulsing underneath literal spoken dialogue?",
          answer: {
            type: "text",
            accept: ["subtext"],
            display: "subtext",
          },
          traps: [
            {
              spec: { type: "text", accept: ["context"] },
              feedback: "Context refers to historical or cultural background; concealed meaning beneath dialogue is subtext.",
            },
          ],
          solution: [
            "The concealed psychological meaning underneath surface dialogue is **subtext**.",
          ],
          hints: [
            "Literally means 'underneath the text' (prefix *sub-*).",
            "Think of the iceberg metaphor: polite words sit on the surface while this concealed layer lies below.",
          ],
        },
        {
          id: "4-poetry-and-drama-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "subtext-dialogue-tragedy-comedy",
          question:
            "What rhetorical/dramatic term names an abrupt plunge from lofty tragic seriousness into trivial everyday absurdity—frequently deployed in dark satire and Theatre of the Absurd?",
          answer: {
            type: "text",
            accept: ["bathos"],
            display: "bathos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pathos"] },
              feedback: "Pathos evokes deep pity and sorrow; the sudden comic drop from the sublime to the ridiculous is bathos.",
            },
            {
              spec: { type: "text", accept: ["catharsis"] },
              feedback: "Catharsis is tragic emotional release, whereas bathos undercuts grandeur with sudden absurdity.",
            },
          ],
          solution: [
            "An abrupt anticlimactic descent from elevated solemnity to trivial absurdity is **bathos**.",
          ],
          hints: [
            "Rhymes with 'pathos', yet reverses it by plunging abruptly from the sublime to the trivial.",
            "Starts with 'b'—coined from the Greek word for 'depth' or sudden drop.",
          ],
        },
        {
          id: "4-poetry-and-drama-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "dramatic-conventions-staging",
          question:
            "Read this original unseen stage scene (*\"The Ferry Terminal\"*):\n\n*[A sparse municipal waiting hall at dusk. Fluorescent ceiling strips flicker over two bolted rows of plastic seats. Upstage-right, a frosted glass ticket window sits dark behind a lowered steel shutter. Centre-stage on the floor rests a single battered leather suitcase bound with rope. NADIA (40s) stands downstage-left peering through an imaginary rain-streaked glass toward the audience. SAMIR (40s) remains seated upstage-left, overcoat draped across his knees, staring at the suitcase.]*\n\n**SAMIR:** The six-fifteen isn't running.\n**NADIA:** *(not turning)* The board still says *Delayed*.\n**SAMIR:** The board hasn't changed since four.\n**NADIA:** Then we wait until it changes.\n**SAMIR:** *(Pause. He stands, takes two paces toward the suitcase, then stops short of touching it.)* You packed Mother's ledger.\n**NADIA:** *(turning sharply)* You opened it?\n**SAMIR:** The strap wasn't buckled.\n**NADIA:** *(Silence. Distant foghorn sounds low offstage.)* It's my flat they're clearing, Samir—not yours.\n\nIn the opening stage directions, which **lighting quality** immediately strips the setting of domestic warmth?",
          answer: {
            type: "text",
            accept: ["fluorescent", "flickering fluorescent", "fluorescent ceiling strips", "fluorescent light", "fluorescent lighting"],
            display: "flickering fluorescent lighting",
          },
          solution: [
            "The opening stage directions specify **flickering fluorescent** ceiling strips, evoking institutional coldness, instability, and stark exposure.",
          ],
          hints: [
            "Check the second sentence of the italicised opening stage directions.",
            "Look for the exact type of artificial ceiling lighting described.",
          ],
        },
        {
          id: "4-poetry-and-drama-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "dramatic-conventions-staging",
          marks: 3,
          question:
            "Referring to *\"The Ferry Terminal\"* (Q06), analyse how the **symbolic prop** (the rope-bound suitcase) and **blocking/proxemics** establish the siblings' relationship before Samir mentions the ledger.",
          modelAnswer:
            "Placing the single battered suitcase dead centre-stage makes unresolved family inheritance visually inescapable for both actors and spectators; its crude rope binding suggests hasty departure and precarious preservation. Meanwhile, wide proxemic separation—Nadia facing outward downstage-left with her back turned while Samir stays seated upstage—stages emotional estrangement and opposing orientations toward future escape versus buried past. Samir's hesitant advance that stops short of touching the case physically embodies his guilt over crossing a private boundary.",
          markScheme: [
            {
              point: "Analyses the centre-stage rope-bound suitcase as a symbolic prop embodying fragile family burden or hasty departure.",
              keywords: ["symbolic prop", "suitcase", "inheritance", "burden", "precarious", "departure"],
            },
            {
              point: "Analyses the wide proxemic distance and averted posture staging mutual estrangement or opposing focus.",
              keywords: ["proxemic", "distance", "estrangement", "back turned", "opposing", "separation"],
            },
            {
              point: "Evaluates Samir's aborted physical movement ('stops short') signalling guilt or awareness of violating Nadia's boundary.",
              keywords: ["guilt", "boundary", "hesitant", "stops short", "violat"],
            },
          ],
          hints: [
            "Where is the suitcase positioned, and what does being tied with rope connote visually?",
            "Map where Nadia stands versus where Samir sits, and which way each body faces.",
            "Notice Samir walking two steps toward the suitcase and freezing before touching it.",
          ],
        },
        {
          id: "4-poetry-and-drama-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "subtext-dialogue-tragedy-comedy",
          marks: 3,
          question:
            "In *\"The Ferry Terminal\"* (Q06), analyse how the opening **stichomythia** (Lines 1–4) and the subsequent **silence + offstage foghorn** heighten domestic conflict.",
          modelAnswer:
            "The brisk four-line stichomythic exchange ('isn't running' / 'Delayed' / 'since four' / 'we wait') turns mundane timetable talk into stubborn ideological sparring, exposing Samir's fatalistic realism clashing against Nadia's desperate denial. When his casual excuse about the unbuckled strap reveals intrusive snooping, dialogue collapses into a heavy silence that lets betrayed trust hang over the auditorium. The low offstage foghorn punctuates that void with mournful isolation, expanding their private stalemate into inescapable limbo.",
          markScheme: [
            {
              point: "Analyses the rapid four-line stichomythia turning timetable trivia into stubborn conflict between realism and denial.",
              keywords: ["stichomythia", "sparring", "denial", "realism", "stubborn"],
            },
            {
              point: "Analyses the heavy silence following Samir's weak excuse as a breakdown of speech amplifying betrayed trust.",
              keywords: ["silence", "betray", "trust", "breakdown", "subtext"],
            },
            {
              point: "Evaluates the offstage foghorn soundscape reinforcing isolation, warning, or existential limbo.",
              keywords: ["foghorn", "soundscape", "offstage", "isolation", "limbo", "mournful"],
            },
          ],
          hints: [
            "Notice how Lines 1–4 trade terse one-line assertions back and forth.",
            "Why does Nadia respond to 'The strap wasn't buckled' with full silence before attacking?",
            "Think about what a low foghorn echoing from offstage adds emotionally in the theatre.",
          ],
        },
        {
          id: "4-poetry-and-drama-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "subtext-dialogue-tragedy-comedy",
          question:
            "Read this unseen dramatic exchange:\n\n**ALDERMAN:** *Our new harbour bridge honours the humble dockworkers who built this city!*\n**CLERK:** *(flatly, consulting clipboard)* *And the pedestrian toll is four shillings each way, sir—so they won't be crossing it.*\n\nWhich literary genre/mode is exemplified by exposing civic hypocrisy through deadpan comic inversion?",
          answer: {
            type: "text",
            accept: ["satire", "satirical comedy", "social satire", "comedy of manners"],
            display: "satirical comedy",
          },
          traps: [
            {
              spec: { type: "text", accept: ["tragedy", "classical tragedy"] },
              feedback: "There is no tragic catastrophe here—the passage punctures political hypocrisy through dry comic wit.",
            },
          ],
          solution: [
            "Puncturing pompous civic rhetoric with deadpan economic reality exemplifies **satirical comedy** (*satire*).",
          ],
          hints: [
            "What comedic mode uses irony and sharp wit to critique institutional hypocrisy?",
            "Think of the dramatic mode associated with social critique, epigrammatic wit, and exposing double standards.",
          ],
        },
        {
          id: "4-poetry-and-drama-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "dramatic-conventions-staging",
          marks: 4,
          question:
            "Read this unseen Brechtian stage moment (*\"The Coal Ledger\"*):\n\n*[Suddenly the warm cottage light snaps out; harsh white work-lamps flood both stage and audience. An actor drops her shawl, steps to the apron edge, and flips a chalkboard placard reading: 'SCENE 4 — THE WINTER PROFIT DOUBLES.']*\n\n**ACTOR:** *(calmly to Row 3)* *Before you wipe your eyes for her frozen fingers, ask who sets the price of anthracite.*\n\nExplain how this passage employs **Brechtian *Verfremdungseffekt*** and evaluate its intended impact on the audience.",
          modelAnswer:
            "The playwright systematically dismantles naturalistic immersion through multiple Brechtian alienation techniques. Snapping off warm lighting to flood both stage and auditorium with stark work-lamps exposes theatrical machinery while removing the comfortable anonymity of darkened seating. By visibly stepping out of character (dropping the shawl), displaying an economic placard, and breaking the fourth wall to address spectators directly, the actor halts passive emotional catharsis. Instead of merely weeping sympathetically, the audience is jolted into detached critical scrutiny of systemic economic exploitation.",
          markScheme: [
            {
              point: "Analyses the abrupt lighting switch (work-lamps flooding stage and auditorium) exposing theatrical artifice.",
              keywords: ["lighting", "artifice", "work-lamps", "naturalistic", "immersion"],
            },
            {
              point: "Analyses dropping costume/character and flipping the economic placard as explicit Epic Theatre estrangement.",
              keywords: ["placard", "shawl", "estrangement", "alienation", "verfremdungseffekt"],
            },
            {
              point: "Explains how direct address shatters the fourth wall to confront spectators personally.",
              keywords: ["fourth wall", "direct address", "spectators", "confront"],
            },
            {
              point: "Evaluates the ideological goal: interrupting passive sentimental catharsis to provoke critical social inquiry.",
              keywords: ["catharsis", "critical", "exploitation", "economic", "passive"],
            },
          ],
          hints: [
            "Spot four concrete Brechtian devices: lighting shift, stepping out of costume, placard, and direct address.",
            "Remember the core aim of *Verfremdungseffekt*: replacing passive pity with active critical thought.",
          ],
        },
        {
          id: "4-poetry-and-drama-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "subtext-dialogue-tragedy-comedy",
          marks: 4,
          question:
            "Read this unseen absurdist snippet (*\"Platform Nine\"*):\n\n**GIDEON:** *The express should have arrived by Tuesday.*\n**MIRA:** *Today is Thursday.*\n**GIDEON:** *(consulting an empty wrist)* *Then it's making splendid time—in the wrong direction.*\n**MIRA:** *Shall we leave the platform?*\n**GIDEON:** *We might miss Tuesday if we move.*\n*[Neither stands. Both straighten their hats identically.]*\n\nAnalyse how **linguistic breakdown, cyclical stasis, and comic bathos** embody **Theatre of the Absurd**.",
          modelAnswer:
            "The dialogue detaches language from logical utility: Gideon's nonsensical reassurance ('making splendid time—in the wrong direction') and absurd fear of 'missing Tuesday' on a Thursday expose rational speech misfiring in an incoherent universe. Consulting a bare wrist performs visual bathos, undercutting purposeful punctuality with vaudevillian emptiness. Finally, the synchronised stage direction ('Neither stands. Both straighten their hats identically') locks both figures into cyclical paralysis and mechanical conformity, dramatising human persistence inside existential uncertainty.",
          markScheme: [
            {
              point: "Analyses illogical circular dialogue exposing linguistic breakdown or fractured causality.",
              keywords: ["linguistic", "illogical", "nonsensical", "breakdown", "incoherent"],
            },
            {
              point: "Analyses the empty-wrist gesture as visual bathos mocking purposeful human routine.",
              keywords: ["bathos", "empty wrist", "vaudevill", "punctuality", "mock"],
            },
            {
              point: "Analyses the final stage direction (not moving / identical hat gesture) enacting cyclical paralysis.",
              keywords: ["cyclical", "paralysis", "stasis", "identical", "mechanical"],
            },
            {
              point: "Links comic absurdity to serious existential unease regarding meaning and waiting.",
              keywords: ["existential", "absurd", "waiting", "uncertainty", "meaning"],
            },
          ],
          hints: [
            "Look at how time words ('Tuesday', 'Thursday') stop obeying normal logic.",
            "What is comic—and subtly bleak—about checking a watch on an empty wrist?",
            "Compare Mira's question ('Shall we leave?') with the final stage direction ('Neither stands').",
          ],
        },
        {
          id: "4-poetry-and-drama-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "subtext-dialogue-tragedy-comedy",
          marks: 4,
          question:
            "Explain how **hubris, hamartia, peripeteia, and anagnorisis** operate as a causal chain in tragedy—and briefly state one way a modern playwright might deliberately **subvert** that classical chain.",
          modelAnswer:
            "In Aristotle's tragic sequence, overweening pride (hubris) often blinds a protagonist into committing a fateful error of judgement or miscalculation (hamartia). That error triggers peripeteia, an ironic reversal of fortune where the character's intended triumph precipitates ruin, culminating in anagnorisis—the devastating moment of self-recognition arriving too late to prevent catastrophe. A modern playwright might deliberately subvert this arc by denying anagnorisis altogether so the protagonist dies clinging to ideological illusions, sharpening social critique and leaving the audience without comforting catharsis.",
          markScheme: [
            {
              point: "Defines hubris (excessive pride) and hamartia accurately as a fateful error of judgement (not merely a bad trait).",
              keywords: ["hubris", "hamartia", "error", "judgement", "miscalculation"],
            },
            {
              point: "Explains peripeteia as the sudden ironic reversal of fortune precipitated by the error.",
              keywords: ["peripeteia", "reversal", "fortune", "precipitat"],
            },
            {
              point: "Explains anagnorisis as devastating recognition arriving too late to avert catastrophe.",
              keywords: ["anagnorisis", "recognition", "self-knowledge", "too late"],
            },
            {
              point: "Identifies a valid modern subversion (e.g. withholding anagnorisis or denying neat catharsis to sharpen social critique).",
              keywords: ["subvert", "withhold", "denying", "catharsis", "illusion", "modern"],
            },
          ],
          hints: [
            "Present the four Greek terms in exact causal order: Hubris → Hamartia → Peripeteia → Anagnorisis.",
            "Remember the precise meaning of *hamartia* ('missing the mark' / error of judgement).",
            "For the subversion point, think about what happens when recognition or emotional catharsis is deliberately withheld.",
          ],
        },
        {
          id: "4-poetry-and-drama-p2-q13",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "dramatic-conventions-staging",
          marks: 4,
          question:
            "Read this unseen expressionist beat (*\"The Glass Corridor\"*):\n\n*[ELIAS stands centre-stage holding an unsealed dismissal letter. Slowly the beige office walls rise two feet off the stage floor on hidden cables, revealing oversized black-and-white silhouettes of filing cabinets looming behind scrim. The muffled hum of fluorescent tubes swells into a rhythmic heartbeat. ELIAS speaks quietly into thin air: 'Thirty-one years without a sick day.']*\n\nAnalyse how **expressionist stagecraft** transforms a routine dismissal into psychological terror.",
          modelAnswer:
            "Rather than depicting a realistic workplace, expressionist set mechanics visually fracture Elias's grounded world as the lifting walls strip away domestic stability and expose giant looming silhouettes of filing cabinets. Scaling bureaucratic furniture to monstrous proportions externalises Elias's subjective feeling of being dwarfed and consumed by impersonal administrative power. Simultaneously, mutating ordinary fluorescent buzz into an amplified heartbeat merges institutional atmosphere with bodily panic. Placing his quiet, understated utterance ('Thirty-one years') inside this towering surreal distortion heightens tragic pathos by contrasting loyal human humility against dehumanising scale.",
          markScheme: [
            {
              point: "Analyses lifting walls removing realistic security to externalise psychological dislocation.",
              keywords: ["expressionis", "walls", "externalis", "dislocation", "fracture"],
            },
            {
              point: "Analyses giant filing-cabinet silhouettes portraying overwhelming bureaucratic domination.",
              keywords: ["silhouettes", "bureaucratic", "dwarfed", "monstrous", "scale", "dehumanis"],
            },
            {
              point: "Analyses the swelling soundscape (fluorescent buzz morphing into heartbeat) fusing environment with panic.",
              keywords: ["soundscape", "heartbeat", "panic", "amplified", "fluorescent"],
            },
            {
              point: "Evaluates the stark tonal contrast between towering stage distortion and Elias's understated spoken loyalty.",
              keywords: ["understated", "contrast", "pathos", "quiet", "loyalty"],
            },
          ],
          hints: [
            "Treat every physical distortion (walls rising, oversized cabinets, sound swelling) as an outward projection of Elias's inner mind.",
            "Contrast the giant, noisy visual spectacle with his quiet 7-word spoken line.",
          ],
        },
        {
          id: "4-poetry-and-drama-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Examine",
          guideRef: "subtext-dialogue-tragedy-comedy",
          marks: 6,
          question:
            "Read this unseen dramatic scene (*\"The Portrait Sitting\"*). The audience already knows from Scene 1 that HELENA secretly sold the family orchard this morning to pay off VICTOR's hidden gambling debts—a fact Victor does not yet know:\n\n*[A sunlit conservatory. VICTOR lounges downstage-right swirling a brandy glass. HELENA sits upright beside an easel upstage-left, holding an untouched paintbrush.]*\n\n**VICTOR:** *You'll catch the west ridge best before four—the apple trees are heavy this season.*\n**HELENA:** *(not looking up)* *Trees change hands faster than light changes, Victor.*\n**VICTOR:** *(laughing easily)* *Nonsense. That ridge has carried our surname for four generations—nothing touches solid soil.*\n**HELENA:** *(Pause. She sets the clean dry brush slowly across the palette.)* *Nothing except signature ink.*\n**VICTOR:** *(still smiling, completely missing her glance)* *Pour yourself a glass, Helena. Celebrate a steady autumn.*\n**HELENA:** *(murmured aside to the auditorium as he turns toward the window)* *Drink quickly, then—before the surveyor reaches the gate.*\n\nExamine how the playwright deploys **dramatic irony, proxemics, symbolic props, and an aside** to generate silent tension.",
          modelAnswer:
            "Because the audience already knows Helena has sold the orchard to rescue Victor, every word of his complacent boasting vibrates with razor-sharp dramatic irony. His confident invocations of 'four generations' and 'solid soil' expose nostalgic arrogance completely severed from economic reality, intensifying audience anticipation of imminent collapse. Staging reinforces this ideological divide through crisp proxemics and posture: Victor lounges carelessly downstage-right swirling brandy—a visual emblem of privileged consumption—while Helena remains upright and distanced upstage-left, holding an untouched paintbrush. When she deliberately lays the clean dry brush down during a loaded pause, the prop crystallises her refusal to paint an illusion that no longer exists, echoing her biting double-meaning about 'signature ink'. Finally, as Victor literally turns his back toward the sunlit window—visually enacting his blindness—Helena's murmured aside draws spectators into wry, weary complicity, sharpening tragic tension as the unseen surveyor approaches offstage.",
          markScheme: [
            {
              point: "Analyses dramatic irony turning Victor's confident boasting ('four generations', 'solid soil') into painful exposure of blind arrogance.",
              keywords: ["dramatic irony", "complacent", "arrogance", "blindness", "boasting"],
            },
            {
              point: "Analyses contrasting proxemics and posture (Victor lounging downstage vs Helena upright upstage) embodying unequal burden.",
              keywords: ["proxemics", "lounges", "upright", "distance", "posture", "divide"],
            },
            {
              point: "Evaluates contrasting symbolic props (brandy glass of privilege vs untouched dry paintbrush rejecting illusion).",
              keywords: ["prop", "brandy", "paintbrush", "illusion", "consumption"],
            },
            {
              point: "Decodes Helena's double-layered subtext ('signature ink', 'change hands') paired with her loaded pause.",
              keywords: ["subtext", "double", "pause", "signature", "evasion"],
            },
            {
              point: "Analyses Victor turning toward the window as physical blocking mirroring obliviousness.",
              keywords: ["blocking", "window", "oblivious", "turns", "back"],
            },
            {
              point: "Evaluates Helena's closing aside building audience complicity and offstage dread ('surveyor').",
              keywords: ["aside", "complicity", "auditorium", "offstage", "dread", "surveyor"],
            },
          ],
          markbands: bands6(),
          hints: [
            "Start from the knowledge gap: what do WE and Helena know that Victor does not?",
            "Contrast their two props (brandy glass vs dry paintbrush) and two postures (lounging vs upright).",
            "Examine how Helena's final aside shifts audience alignment right as Victor looks away.",
          ],
        },
        {
          id: "4-poetry-and-drama-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "dramatic-conventions-staging",
          marks: 8,
          question:
            "**IB Paper 1 Extended Drama Close Reading.** Read this unseen scene (*\"After the Recital\"*) and analyse how the playwright integrates **stage directions, dialogue rhythm (interruption, pauses, asymmetry), lighting, and subtext** to chart a shifting balance of power between parent and child:\n\n*[Backstage dressing room. One harsh ring of vanity bulbs illuminates a tall mirror downstage-right; the rest of the room falls into dim shadow. TOMAS (17, tuxedo collar unfastened) sits hunched on a stool facing away from the mirror, cello case clamped upright between his knees. ELENA (50s, immaculate evening coat) enters abruptly upstage-left without knocking, holding a folded concert programme.]*\n\n**ELENA:** *(briskly, stepping toward centre)* *The third movement slipped half a beat before the coda.*\n**TOMAS:** *(quietly)* *The hall liked the encore.*\n**ELENA:** *A provincial hall applauds anything loud. You rushed the bow on—*\n**TOMAS:** *—I played it the way it breathes, Mother.*\n**ELENA:** *(Stops dead two paces away. Beat. Smooths the folded programme precisely against her palm.)* *'Breathes.' We did not spend eleven winters driving through sleet so you could improvise breath.*\n**TOMAS:** *(Silence. Slowly he releases the cello case, stands, and clicks the brass latches shut—one, two, three—loud in the quiet room. He walks past her into the light near the mirror, pulls off his bow-tie, and sets it beside the bulbs.)* *Then stop driving.*\n**ELENA:** *(Voice suddenly smaller, clutching the programme to her chest)* *Tomas—*\n**TOMAS:** *(at the doorway, turning back once)* *You can keep the programme.* *[Exits upstage-left. The door does not slam; it clicks shut cleanly. ELENA remains alone in the dim centre, staring at the abandoned bow-tie glowing under the mirror lights.]*",
          modelAnswer:
            "The playwright orchestrates a decisive, visually choreographed reversal of parental dominance by tracking how speech control, spatial territory, and physical props change hands across the scene. Initially, Elena seizes authority through an unannounced entrance and brisk technical fault-finding ('slipped half a beat'), occupying centre-stage while Tomas sits hunched defensively in shadow with his cello clamped like a shield. His first timid evasion ('liked the encore') fails against her condescending dismissal until he disrupts her rhythm with an audacious mid-sentence interruption ('—I played it the way it breathes'). That syntactic breach freezes Elena's advance, triggering a loaded Pinteresque beat in which her obsessive smoothing of the programme betrays rattled control; repeating his verb scornfully ('Breathes.') while weaponising parental sacrifice ('eleven winters') reveals toxic subtext equating love with ownership. Rather than arguing further, Tomas seizes power through deliberate silence and acoustic staging: clicking the three brass latches shut transforms an ordinary prop action into a rhythmic verdict closing his former chapter. Stepping physically past her into the bright vanity-bulb pool to discard his bow-tie reverses the scene's lighting and proxemic hierarchy—shifting illumination from polished perfection onto liberated rejection. Finally, dialogue asymmetry completes the inversion: Elena's trailing, diminished interruption ('Tomas—') collapses her former eloquence, while Tomas claims the exit's finality without theatrical rage—closing the door softly so his composure, rather than fury, strands her alone beside the glowing emblem of the persona he has shed.",
          markScheme: [
            {
              point: "Analyses opening blocking, lighting contrast (vanity glare vs dim shadow), and Tomas's defensive posture/unannounced entrance establishing Elena's initial power.",
              keywords: ["entrance", "shadow", "hunched", "shield", "initial", "dominance"],
            },
            {
              point: "Analyses Tomas's mid-clause em-dash interruption as the crucial verbal power bid breaking Elena's technical critique.",
              keywords: ["interruption", "syntactic", "power bid", "breach", "breaks"],
            },
            {
              point: "Decodes the Pinteresque beat, mocking echo ('Breathes.'), and manipulative guilt-subtext behind 'eleven winters'.",
              keywords: ["subtext", "beat", "guilt", "sacrifice", "ownership", "manipul"],
            },
            {
              point: "Evaluates Tomas's silence and the audible three-latch closing of the cello case as physical, acoustic closure.",
              keywords: ["silence", "latches", "acoustic", "cello", "closure"],
            },
            {
              point: "Analyses spatial and lighting reversal as Tomas walks past Elena into the bright mirror pool.",
              keywords: ["proxemic", "reversal", "light", "territory", "mirror"],
            },
            {
              point: "Evaluates the symbolic props (abandoned bow-tie vs clutched concert programme) embodying shed performance versus clinging expectation.",
              keywords: ["bow-tie", "programme", "symbolic", "prop", "persona", "expectation"],
            },
            {
              point: "Analyses dialogue asymmetry and vocal shift (Elena's shrinking voice / trailing dash vs Tomas's clipped imperatives).",
              keywords: ["asymmetry", "vocal", "smaller", "trailing", "clipped"],
            },
            {
              point: "Evaluates the quiet, non-slammed exit leaving Elena stranded onstage in the closing visual tableau.",
              keywords: ["exit", "softly", "composure", "stranded", "tableau", "alone"],
            },
          ],
          markbands: bands8(),
          hints: [
            "Trace the arc in 3 conceptual phases: Initial Spatial & Verbal Dominance → Syntactic Breach & Guilt Subtext → Physical, Acoustic & Spatial Power Reversal.",
            "Do not overlook sound cues inside stage directions: clicking the three brass latches shut and the door clicking shut cleanly (not slamming!).",
            "Contrast the two key props at the ending: the programme clutched to Elena's chest versus the bow-tie glowing under the vanity bulbs.",
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 questions — ALL difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "4-poetry-and-drama-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Determine",
      guideRef: "poetic-form-metre-structure",
      question:
        "Scan this 10-syllable poetic line carefully:\n\n*Stop now—the harbour lights have gone to sea.*\n(`STOP NOW | —the HAR- | bour LIGHTS | have GONE | to SEA`)\n\nAlthough Foot 1 opens with a heavy spondaic disruption, name the **two-word metrical term** (foot + line length, e.g. 'trochaic tetrameter') describing the **baseline metre** that governs Feet 2–5 of this line.",
      answer: {
        type: "text",
        accept: ["iambic pentameter"],
        display: "iambic pentameter",
      },
      traps: [
        {
          spec: { type: "text", accept: ["spondaic pentameter"] },
          feedback: "Only the opening foot ('STOP NOW') is a spondee; Feet 2–5 establish a baseline of rising iambs across 5 feet.",
        },
        {
          spec: { type: "text", accept: ["iambic tetrameter"] },
          feedback: "Count all five feet (10 syllables total): pentameter has 5 feet, whereas tetrameter has 4.",
        },
      ],
      solution: [
        "Total syllables = 10 grouped into 5 feet (`pentameter`).",
        "Foot 1 (*STOP NOW*) is an opening spondaic disruption, while Feet 2–5 (`the HAR- | bour LIGHTS | have GONE | to SEA`) follow rising unstressed-stressed beats (`˘ /`).",
        "Therefore the underlying baseline metre is **iambic pentameter**.",
      ],
      hints: [
        "Count the total number of metrical feet across the 10-syllable line.",
        "Examine Feet 2 to 5 (`the HAR- | bour LIGHTS | have GONE | to SEA`): rising (`˘ /`) or falling (`/ ˘`)?",
      ],
    },
    {
      id: "4-poetry-and-drama-ch-q02",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Compare and contrast",
      guideRef: "poetic-form-metre-structure",
      marks: 6,
      question:
        "Compare and contrast how **fixed poetic form** (such as a sonnet or villanelle) and **open free verse** each construct emotional tension—illustrating your argument with specific structural mechanisms rather than generalisations.",
      modelAnswer:
        "Although fixed forms and free verse appear structurally opposed, both engineer emotional tension by manipulating reader expectation and rhythmic control. Fixed forms such as the Petrarchan sonnet or nineteen-line villanelle establish a tight external container of metre, rhyme, and compulsory refrains; tension erupts when volatile grief or obsession strains against that architectural discipline, especially through spondaic disruptions, jagged enjambment, or a sharp Line-9 volta. By contrast, free verse discards inherited rhyme patterns yet generates equally deliberate friction through visual lineation, irregular stanza proportions, and stark surrounding white space—isolating loaded words at line cliffs or fracturing syntax with dashes to enact psychological instability. Whereas fixed form creates ironic contrast between formal poise and inner turmoil, free verse mirrors turbulent consciousness organically on the page; in both traditions, meaning arises from the calculated friction between linguistic momentum and structural restraint.",
      markScheme: [
        {
          point: "Establishes a conceptual similarity: both forms manipulate reader expectation and formal restraint to produce emotional tension.",
          keywords: ["expectation", "tension", "restraint", "both", "control"],
        },
        {
          point: "Analyses fixed-form mechanisms (metre, rhyme, refrains, volta) creating friction between container and turbulent emotion.",
          keywords: ["sonnet", "villanelle", "volta", "container", "metrical", "refrain"],
        },
        {
          point: "Refutes the myth that free verse is formless by specifying active free-verse tools (visual lineation, white space, stanza proportion).",
          keywords: ["free verse", "white space", "lineation", "irregular", "visual"],
        },
        {
          point: "Uses explicit comparative contrast showing fixed form's ironic poise vs free verse's organic enactment of consciousness.",
          keywords: ["whereas", "by contrast", "poise", "organic", "turmoil"],
        },
        {
          point: "Integrates specific shared lineation tactics (enjambment, caesura, syntactic fracture) flexibly across both traditions.",
          keywords: ["enjambment", "caesura", "syntax", "fracture", "dashes"],
        },
        {
          point: "Maintains evaluative, thesis-driven synthesis rather than writing two disconnected mini-paragraphs.",
          keywords: ["friction", "meaning", "ironic", "discipline", "instability"],
        },
      ],
      markbands: bands6(),
      hints: [
        "Avoid writing 'Paragraph 1 = fixed form, Paragraph 2 = free verse'—weave explicit comparison (*whereas, by contrast, analogously*) throughout.",
        "Show that fixed form relies on friction *against* a preset grid while free verse creates friction *through* visual lineation and white space.",
      ],
    },
    {
      id: "4-poetry-and-drama-ch-q03",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "poetic-imagery-sound-voice",
      marks: 6,
      question:
        "Read these two unseen poetic depictions of the ocean:\n\n**Extract A:** *Soft surf sifts silver sand beneath the sleeping pier, / Where sea-salt settles sweet along the sunlit shore.*\n**Extract B:** *Slick surf spits splintered shells against the scarred seawall, / As surging swells slash sharp across the sunken stones.*\n\nEvaluate what comparing Extracts A and B proves about **acoustic analysis** in IB English A: Literature, and analyse how interacting craft choices invert the identical phonetic device.",
      modelAnswer:
        "Juxtaposing Extracts A and B decisively disproves the mechanical fallacy that acoustic devices possess fixed inherent meanings. Both couplets saturate the ear with dense sibilance (/s/ and /ʃ/), yet produce diametrically opposed emotional soundscapes because phonetic resonance is always governed by lexical diction, vowel duration, and accompanying consonants. In Extract A, gentle lexical fields of rest and luminosity ('soft', 'silver', 'sleeping', 'sunlit') combine with open long vowels and smooth liquids so the sibilant whisper lulls the reader into serene pastoral hush. Conversely, Extract B pairs the exact same /s/ hiss with violent kinetic verbs ('spits', 'slash'), imagery of injury ('splintered', 'scarred'), and jagged plosive clusters (/p, t, k/) that obstruct airflow explosively—converting hushed breath into aggressive maritime assault. For IB Paper 1 analysis, this proves that Band 5 commentary must never spot sound techniques in isolation, but evaluate how phonetic texture collaborates with imagery and syntax.",
      markScheme: [
        {
          point: "States the core critical principle: acoustic devices possess no fixed universal meaning outside context.",
          keywords: ["context", "no fixed", "fallacy", "inherent", "sibilance"],
        },
        {
          point: "Analyses Extract A's gentle lexical field and open vowels/liquids turning sibilance into tranquil hush.",
          keywords: ["pastoral", "hush", "serene", "luminosity", "lulls", "vowel"],
        },
        {
          point: "Analyses Extract B's violent diction ('spits', 'slash', 'scarred') inverting the same sound into menace or assault.",
          keywords: ["violent", "assault", "injury", "kinetic", "aggressive", "menace"],
        },
        {
          point: "Identifies interacting consonant texture (jagged plosives /p, t, k/ in Extract B) reinforcing physical force.",
          keywords: ["plosive", "consonant", "airflow", "jagged", "explosive"],
        },
        {
          point: "Sustains integrated point-by-point comparison using crisp comparative connectives.",
          keywords: ["conversely", "diametrically", "both", "opposed", "juxtapos"],
        },
        {
          point: "Draws an evaluative IB Criterion B takeaway opposing isolated technique-spotting.",
          keywords: ["technique-spotting", "isolation", "collaborat", "evaluat", "soundscape"],
        },
      ],
      markbands: bands6(),
      hints: [
        "Notice that BOTH extracts are drenched in sibilance—yet one is peaceful and one is violent.",
        "Look beyond /s/ alone: compare the verbs, adjectives, and plosive consonant clusters in Extract B versus liquids/long vowels in Extract A.",
      ],
    },
    {
      id: "4-poetry-and-drama-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "To what extent",
      guideRef: "dramatic-conventions-staging",
      marks: 8,
      question:
        "**To what extent** is a play's silence, spatial blocking, and visual stagecraft just as decisive in constructing meaning as its spoken dialogue? Support your evaluation with concrete theatrical mechanisms (including naturalism, expressionism, and Brechtian Epic Theatre).",
      modelAnswer:
        "In live theatre, silent visual and spatial craft is not merely ornamental accompaniment to dialogue, but an equal—and at climactic beats superior—generator of dramatic meaning. Because audiences process stage pictures instantaneously in three dimensions, proxemics, posture, and symbolic props can silently confirm or flatly contradict spoken claims: a character professing affection while widening stage distance across a barrier exposes defensive subtext far more viscerally than verbal exposition ever could. Equally, Pinteresque pauses and full silences convert the absence of language into oppressive dramatic pressure where spectators actively decode concealed hostility or guilt. Across contrasting staging traditions, non-verbal craft continually governs audience stance: naturalistic lighting and domestic sets draw spectators behind an intact fourth wall into empathetic immersion, whereas expressionist distortions—such as skewed shadows, translucent walls, or amplified soundscapes—externalise fractured interior psychology directly across the stage. Conversely, Brechtian Epic Theatre weaponises stark work-lighting, placards, and broken fourth-wall blocking to interrupt passive pathos and force critical political scrutiny. Admittedly, spoken language remains indispensable for articulating ideological nuance, wit, and layered metaphor—particularly in stichomythia or soliloquies—meaning theatre achieves its deepest power in the dynamic friction where embodied stagecraft and spoken text interlock.",
      markScheme: [
        {
          point: "Articulates a nuanced 'to what extent' thesis balancing decisive stagecraft with the interlocking power of spoken dialogue.",
          keywords: ["interlock", "friction", "equal", "nuance", "three dimensions"],
        },
        {
          point: "Analyses proxemics and contradictory body language/props exposing subtext beyond literal speech.",
          keywords: ["proxemics", "contradict", "subtext", "symbolic prop", "barrier"],
        },
        {
          point: "Evaluates Pinteresque pauses and silences turning absence of words into charged theatrical pressure.",
          keywords: ["pause", "silence", "pinteresque", "absence", "decode"],
        },
        {
          point: "Analyses naturalistic staging and the intact fourth wall fostering empathetic immersion.",
          keywords: ["naturalistic", "fourth wall", "empathetic", "immersion", "domestic"],
        },
        {
          point: "Analyses expressionist lighting, sets, or soundscapes externalising interior mental states.",
          keywords: ["expressionist", "externalise", "psychology", "distortion", "soundscape"],
        },
        {
          point: "Evaluates Brechtian Epic Theatre (placards, lighting visibility, broken fourth wall) provoking critical detachment.",
          keywords: ["brechtian", "placards", "critical", "detachment", "pathos"],
        },
        {
          point: "Provides balanced counter-evaluation acknowledging dialogue's indispensable role in wit, metaphor, stichomythia, or soliloquy.",
          keywords: ["admittedly", "stichomythia", "soliloquy", "indispensable", "ideological"],
        },
        {
          point: "Sustains fluent academic register with clear evaluative signposting throughout.",
          keywords: ["spectators", "theatrical", "embodied", "audience", "consequently"],
        },
      ],
      markbands: bands8(),
      hints: [
        "A 'To what extent' prompt demands a nuanced judgement—avoid saying 'stagecraft is 100% everything and words don't matter'.",
        "Anchor your argument across three concrete theatrical modes: Naturalism, Expressionism, and Brechtian Epic Theatre.",
        "Show the exact moment where stagecraft *contradicts* dialogue to prove why theatre cannot be read like flat prose.",
      ],
    },
    {
      id: "4-poetry-and-drama-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "subtext-dialogue-tragedy-comedy",
      marks: 6,
      question:
        "Read this unseen soliloquy delivered alone at midnight by a newly appointed judge (*\"The Scales\"*):\n\n**JUDGE:** *(removing the horsehair wig slowly, holding it at arm's length under a single desk lamp)* *Strange how heavy a pound of dead hair feels once the gallery empties. All afternoon I spoke of impartial law—and my voice echoed nicely off the oak panelling, didn't it? Almost convinced the man inside the robes. Yet the clerk knew; I saw his pen hesitate when I read the sentence on the dockworker's boy. A small hesitation—barely a breath—and suddenly the whole courtroom smelled of dust. Tomorrow I sign the warrant. Or I walk down the stone steps with bare head and empty pockets. Easy to preach courage from a velvet bench; harder when the lamp burns low.*\n\nAnalyse how the playwright uses **soliloquy conventions, a symbolic prop, lighting, and shifting syntax** to dramatise moral crisis.",
      modelAnswer:
        "Because the judge is completely alone onstage, the soliloquy strips away public theatricality to expose fractured conscience directly to the auditorium. Removing the horsehair wig and holding it at arm's length turns an institutional emblem into an alienated symbolic prop—depicted starkly as 'dead hair'—visually severing the private human self ('man inside the robes') from judicial authority. Isolating him beneath a single desk lamp creates intimate chiaroscuro that mirrors moral scrutiny once the grand 'oak panelling' empties. Syntactically, ironic self-mockery ('echoed nicely... didn't it?') gives way to jagged em-dash fragmentation ('barely a breath') as the remembered hesitation of a subordinate shatters his composure, reinforced by synesthetic decay ('smelled of dust'). Finally, brisk balanced antithesis pitting the comfortable 'velvet bench' against 'bare head and empty pockets' frames an impending tragic crossroads without granting easy moral redemption.",
      markScheme: [
        {
          point: "Explains how the soliloquy's solitary staging strips away public performance to reveal private conscience.",
          keywords: ["soliloquy", "alone", "conscience", "public", "private"],
        },
        {
          point: "Analyses removing and holding out the wig ('dead hair') as a symbolic prop separating personal identity from institutional role.",
          keywords: ["wig", "symbolic prop", "institutional", "identity", "alienat", "severing"],
        },
        {
          point: "Analyses single desk-lamp lighting (chiaroscuro) creating focused moral exposure.",
          keywords: ["lamp", "chiaroscuro", "lighting", "scrutiny", "isolat"],
        },
        {
          point: "Analyses ironic self-address ('didn't it?') and em-dash syntactic fracture recording sudden guilt over the clerk's hesitation.",
          keywords: ["self-mockery", "ironic", "dash", "syntax", "guilt", "hesitation"],
        },
        {
          point: "Unpacks the sensory imagery of corruption/decay ('smelled of dust') eroding courtroom grandeur.",
          keywords: ["decay", "dust", "sensory", "synesthetic", "grandeur"],
        },
        {
          point: "Evaluates the closing antithesis ('velvet bench' vs 'empty pockets') framing unresolved moral dilemma.",
          keywords: ["antithesis", "dilemma", "crossroads", "unresolved", "redemption"],
        },
      ],
      markbands: bands6(),
      hints: [
        "Focus on the physical action with the wig: holding an emblem of office at arm's length is pure theatrical symbolism.",
        "Track the tonal progression from wry self-irony → haunted memory of the clerk → stark moral ultimatum.",
      ],
    },
    {
      id: "4-poetry-and-drama-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "subtext-dialogue-tragedy-comedy",
      marks: 8,
      question:
        "Evaluate how **satirical comedy** and **tragedy**—despite their opposite emotional trajectories—often employ **dramatic irony** and **structural reversal** toward a shared critical purpose: exposing human blindness and institutional pretension.",
      modelAnswer:
        "Although tragedy drives audiences toward pity, fear, and sobering catharsis whereas satirical comedy provokes sharp laughter, both genres harness dramatic irony and structural reversal as surgical instruments against human self-deception. In classical and modern tragedy, dramatic irony traps spectators as helpless witnesses watching hubristic protagonists march toward catastrophe; when peripeteia reverses a ruler's or parent's proud safeguard into ruin, the structural shock forces painful moral clarity (anagnorisis) regarding the limits of human certainty. Satirical comedy and comedies of manners deploy the very same structural architecture in an inverted key: by handing audiences clear visibility into a pompous official's or aristocrat's concealed vanity, dramatic irony turns every pious platitude into involuntary self-mockery. Equally, comic reversals strip away inflated status through epigrammatic inversion or sudden bathos, deflating hypocrisy without requiring literal death. The vital distinction lies in audience distance: tragic irony draws spectators close in empathetic dread, whereas satirical irony maintains cool intellectual detachment so spectators laugh at social absurdities they might otherwise defend. Ultimately, both modes refuse comfortable complacency, proving that laughter and grief can serve parallel ethical interrogations of power and blindness.",
      markScheme: [
        {
          point: "Articulates a clear comparative thesis linking opposite emotional arcs to shared critique of blindness and pretension.",
          keywords: ["self-deception", "blindness", "pretension", "surgical", "shared"],
        },
        {
          point: "Analyses tragic dramatic irony creating helpless dread as hubristic protagonists misread reality.",
          keywords: ["tragic", "hubris", "dread", "witness", "catastrophe"],
        },
        {
          point: "Connects tragic reversal (peripeteia) and recognition (anagnorisis) to sobering moral clarity.",
          keywords: ["peripeteia", "anagnorisis", "catharsis", "clarity", "reversal"],
        },
        {
          point: "Analyses satirical dramatic irony turning pompous rhetoric into involuntary self-exposure.",
          keywords: ["satirical", "hypocrisy", "vanity", "self-mockery", "platitude"],
        },
        {
          point: "Explains comic reversal via epigrammatic inversion or bathos deflating social status.",
          keywords: ["epigram", "inversion", "bathos", "status", "deflat"],
        },
        {
          point: "Draws a sharp evaluative distinction regarding audience distance (tragic empathy vs satirical detachment).",
          keywords: ["distance", "empathy", "detachment", "intellectual", "distinction"],
        },
        {
          point: "Maintains integrated comparative flow throughout rather than isolated block summaries.",
          keywords: ["whereas", "equally", "inverted", "parallel", "ultimately"],
        },
        {
          point: "Concludes with a resonant thematic synthesis connecting both genres to ethical scrutiny of power.",
          keywords: ["ethical", "complacency", "power", "interrogation", "grief"],
        },
      ],
      markbands: bands8(),
      hints: [
        "Ask: how does an audience feel when they know more than a tragic hero vs when they know more than a pompous satirical snob?",
        "Pair *peripeteia* in tragedy with epigrammatic inversion / comic deflation in satire.",
        "Highlight the key divergence: emotional empathy vs cool critical detachment.",
      ],
    },
    {
      id: "4-poetry-and-drama-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Compare and contrast",
      guideRef: "poetic-imagery-sound-voice",
      marks: 10,
      question:
        "**IB Cross-Form Synthesis (Paper 2 Craft Preparation).** Compare and contrast how these two unseen texts—a short **poem** and a short **dramatic scene**—use **medium-specific craft** to represent **unspoken family grief**:\n\n**Text A (Poem — *\"Winter Coat\"*):**\n*His wool coat hangs beside the porch,*\n*Too wide across the wooden peg;*\n*We brush past sleeves that smell of birch*\n*And never name the empty leg*\n*Of staircase leading to his room—*\n*Our silence stitched in quiet wool,*\n*A heavy bolt upon the gloom*\n*That keeps the hallway neat—and full.*\n\n**Text B (Drama — *\"The Hallway\"*):**\n*[A narrow hallway. Warm morning sunlight strikes a heavy grey overcoat hanging alone on a hook centre-upstage. MARA (20s) enters downstage-left carrying groceries; she freezes halfway, stares at the coat, then deliberately shifts her bag to avoid brushing its sleeve. JONAS (50s) enters from the kitchen wiping a dry plate over and over.]*\n**JONAS:** *Milk on sale again?*\n**MARA:** *(still looking at the coat)* *We could donate the winter things on Saturday.*\n**JONAS:** *(Silence. The dishcloth stops moving. Slowly he walks upstage, adjusts the coat's collar straight on the hook, and returns to the kitchen without answering.)*\n**MARA:** *(quietly to the empty hall)* *It's July, Dad.*",
      modelAnswer:
        "Both Text A and Text B centre unspoken bereavement on an abandoned winter overcoat hanging inside a domestic threshold, yet their distinct mediums—lyric poetry versus live three-dimensional theatre—generate sharply different pathways for reader and audience response. In Text A, the poet internalises collective evasion through tight prosodic discipline: steady alternating rhymes (ABAB CDCD) and regular iambic tetrameter create a deceptive surface tidiness mimicking the family's refusal to disrupt routine. Figurative compression and syntax carry the grief: enjambment across 'empty leg / Of staircase' momentarily invokes an absent body before redirecting toward architecture, while the extended textile conceit ('silence stitched in quiet wool', 'heavy bolt') fuses fabric with emotional repression. Crucially, the abrupt dash caesura in the final line ('neat—and full') generates haunting verbal paradox, revealing that domestic order actually traps absence inside the house. By contrast, Text B externalises that exact avoidance through embodied proxemics, lighting, and physical props that spectators witness directly in real time. Spotlighting the lone grey coat in morning sunshine transforms it into an immovable visual magnet upstage-centre; Mara's physical swerve to avoid touching the sleeve enacts aversion silently before a word is uttered, while Jonas's compulsive wiping of an already dry plate signals mechanical displacement. Where the poem relies on lyrical persona ('We') to voice shared concealment introspectively, the playwright splits grief across antagonistic dialogue and Pinteresque silence: Jonas deflects Mara's pragmatic proposal not with argument, but by crossing the stage to straighten the collar—an agonisingly tender gesture of denial—before exiting without reply. Finally, Mara's solitary closing whisper ('It's July, Dad.') exploits stage emptiness and seasonal irony much as Text A's closing dash exploits syntactic pause, demonstrating that while poetry compresses grief into cadence and figurative paradox, drama renders it tangibly inescapable through bodies moving around silence.",
      markScheme: [
        {
          point: "Frames an integrated comparative thesis linking shared symbolic motif (the coat) to medium-specific differences (lyric prosody vs 3D performance).",
          keywords: ["medium", "overcoat", "threshold", "prosodic", "three-dimensional"],
        },
        {
          point: "Analyses Text A's regular rhyme/metre enacting deceptive domestic tidiness and emotional containment.",
          keywords: ["iambic", "rhyme", "tidiness", "discipline", "containment"],
        },
        {
          point: "Analyses Text A's enjambment ('empty leg / Of staircase') and textile conceit/metaphor ('stitched', 'heavy bolt').",
          keywords: ["enjambment", "conceit", "textile", "repression", "absent body"],
        },
        {
          point: "Analyses Text A's closing dash caesura and paradox ('neat—and full') revealing trapped absence.",
          keywords: ["caesura", "paradox", "full", "absence", "trapped"],
        },
        {
          point: "Analyses Text B's lighting and centre-upstage coat prop operating as an inescapable visual focal point.",
          keywords: ["sunlight", "prop", "visual", "upstage", "focal", "magnet"],
        },
        {
          point: "Analyses Text B's proxemics and kinesic cues (Mara swerving past the sleeve; Jonas wiping an already dry plate).",
          keywords: ["proxemics", "swerve", "compulsive", "dry plate", "displacement"],
        },
        {
          point: "Analyses Text B's Pinteresque silence, tender prop gesture (straightening collar), and non-verbal exit enacting stubborn denial.",
          keywords: ["silence", "collar", "denial", "exit", "gesture"],
        },
        {
          point: "Compares Text A's unified collective persona ('We') directly against Text B's fractured interpersonal dialogue and generational rift.",
          keywords: ["persona", "collective", "interpersonal", "splits", "by contrast"],
        },
        {
          point: "Draws a sharp parallel between both endings (Text A's closing dash paradox vs Text B's lonely seasonal irony 'It's July, Dad.').",
          keywords: ["july", "seasonal", "irony", "solitary", "ending"],
        },
        {
          point: "Sustains integrated point-by-point comparative synthesis in precise IB academic register.",
          keywords: ["whereas", "externalises", "internalises", "embodied", "cadence"],
        },
      ],
      markbands: bands10(),
      hints: [
        "Organise point-by-point around 3 shared lenses: (1) The Coat as Figurative Conceit vs Visual Prop, (2) Rhythmic Containment vs Embodied Avoidance & Silence, (3) Closing Paradox vs Closing Solitary Irony.",
        "Compare the unified 'We' in the poem against the generational clash between Mara and Jonas in the play.",
        "Highlight medium-specific craft explicitly: enjambment/metre/caesura on the page versus lighting/proxemics/exits on the stage.",
      ],
    },
    {
      id: "4-poetry-and-drama-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Discuss",
      guideRef: "poetic-form-metre-structure",
      marks: 8,
      question:
        "**HL/SL Conceptual Extension.** *\"Form is never merely a container for emotion; it is the arena where control and chaos fight for dominance.\"* Discuss this statement with close reference to **both** poetic architecture (e.g. sonnet volta, villanelle refrain, metrical disruption) **and** dramatic structure (e.g. tragic arc, stage boundaries, dialogue breakdown).",
      modelAnswer:
        "Far from acting as neutral packaging, literary and dramatic form actively stages the contest between human desire for order and the unruly force of experience. In poetry, inherited architectures such as the Petrarchan sonnet or nineteen-line villanelle erect strict grids of metre, rhyme, and returning refrains; when intense grief or resistance collides with those walls, expressive power sparks precisely at moments of strain—an opening trochaic inversion, a heavy spondee halting smooth iambs, or a jarring Line-9 volta overturning the octave's assumptions. Even free verse participates in this struggle by setting fragile syntactic poise against jagged caesurae and encroaching white space. Drama transposes the same contest onto physical space and real time: classical Aristotelian tragedy builds a tight causal blueprint (hubris and hamartia escalating through peripeteia to anagnorisis) where protagonists desperately assert rational control only for structure itself to overwhelm them. Meanwhile, naturalistic stage walls and polite conversational conventions attempt to seal domestic order—until Pinteresque silences, mid-clause interruptions, expressionist lighting distortions, or Brechtian fourth-wall ruptures shatter theatrical containment from within. Across both forms, therefore, artistic resonance stems neither from effortless symmetry nor pure anarchy, but from the electrifying tension whenever human vulnerability tests, bends, or breaks its structural frame.",
      markScheme: [
        {
          point: "Establishes a strong conceptual thesis defining form as an active arena of friction between order and chaos rather than neutral packaging.",
          keywords: ["packaging", "friction", "arena", "order", "unruly", "contest"],
        },
        {
          point: "Analyses fixed poetic containers (sonnet/villanelle) creating visible strain when emotion tests refrains or rhyme.",
          keywords: ["sonnet", "villanelle", "refrains", "strain", "grid"],
        },
        {
          point: "Analyses prosodic rupture (trochaic inversion, spondee, Line-9 volta) enacting turbulence inside metrical discipline.",
          keywords: ["spondee", "trochaic", "volta", "metrical", "inversion"],
        },
        {
          point: "Extends poetic argument smoothly to free verse balancing syntax against caesura and white space.",
          keywords: ["free verse", "caesura", "white space", "syntactic"],
        },
        {
          point: "Analyses tragic dramatic architecture (hamartia, peripeteia, anagnorisis) overwhelming human illusions of rational control.",
          keywords: ["hamartia", "peripeteia", "anagnorisis", "causal", "rational"],
        },
        {
          point: "Analyses dialogue breakdown (Pinteresque silences, interruptions) cracking polite social order onstage.",
          keywords: ["silence", "interruption", "pinteresque", "polite", "breakdown"],
        },
        {
          point: "Integrates theatrical boundary ruptures (expressionist lighting or Brechtian fourth-wall breaks) shattering spatial containment.",
          keywords: ["expressionist", "brechtian", "fourth-wall", "containment", "shatter"],
        },
        {
          point: "Concludes with cohesive cross-form synthesis locating artistic power in the tension between symmetry and rupture.",
          keywords: ["symmetry", "anarchy", "tension", "vulnerability", "frame"],
        },
      ],
      markbands: bands8(),
      hints: [
        "Treat both halves of the prompt evenly: devote strong conceptual analysis to BOTH poetic architecture and dramatic structure.",
        "Use concrete technical mechanisms (spondee, volta, villanelle refrain, hamartia, peripeteia, Pinteresque silence, fourth wall) rather than abstract vagueness.",
        "Show that neither rigid order nor pure chaos alone creates meaning—the spark lives in the *collision* between them.",
      ],
    },
  ],
};
