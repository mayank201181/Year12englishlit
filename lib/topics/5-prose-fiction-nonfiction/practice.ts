import type { MarkBand, TopicPractice } from "../../types.ts";

function bands6(focus: string): MarkBand[] {
  return [
    {
      band: "Band 1 (1–2 marks): Emerging / Descriptive",
      marks: [1, 2],
      descriptor: `Summarises surface content with little sustained attention to ${focus}. Terminology is absent or inaccurate.`,
      indicators: [
        "Paraphrases the extract rather than analysing authorial choices",
        "Names at most one feature without linking it to meaning",
      ],
    },
    {
      band: "Band 2 (3–4 marks): Developing / Analytical",
      marks: [3, 4],
      descriptor: `Identifies relevant craft choices related to ${focus} and begins to link embedded textual evidence to effect.`,
      indicators: [
        "Accurately names core narrative or rhetorical features",
        "Explains effects clearly, though nuances or shifts remain partially explored",
      ],
    },
    {
      band: "Band 3 (5–6 marks): Insightful / Band 5 IB Standard",
      marks: [5, 6],
      descriptor: `Sustains sharp, evaluative close reading of ${focus}, tracing stylistic shifts and conceptual implications with concise academic register.`,
      indicators: [
        "Weaves short micro-quotations seamlessly into conceptual claims",
        "Evaluates ambiguity, irony, or structural progression rather than listing devices",
      ],
    },
  ];
}

function bands8(focus: string): MarkBand[] {
  return [
    {
      band: "Band 1 (1–2 marks): Surface Retelling",
      marks: [1, 2],
      descriptor: `Offers descriptive paraphrase with minimal commentary on ${focus}.`,
      indicators: [
        "Retells events or assertions without analysing form or language",
        "Lacks clear line of argument or precise literary terminology",
      ],
    },
    {
      band: "Band 2 (3–4 marks): Literal Identification",
      marks: [3, 4],
      descriptor: `Spots several devices linked to ${focus} with basic explanation of effect, though structure tends to be chronological or list-like.`,
      indicators: [
        "Identifies features accurately but relies on general effect claims",
        "Partial integration of quotations with uneven conceptual cohesion",
      ],
    },
    {
      band: "Band 3 (5–6 marks): Focused Analytical Argument",
      marks: [5, 6],
      descriptor: `Develops a coherent interpretation of ${focus}, analysing specific textual choices and their contribution to tone and tension.`,
      indicators: [
        "Organises response conceptually rather than line-by-line",
        "Supports claims with well-chosen micro-quotations and accurate craft terminology",
      ],
    },
    {
      band: "Band 4 (7–8 marks): Perceptive & Evaluative (IB Band 5)",
      marks: [7, 8],
      descriptor: `Delivers nuanced, evaluative analysis of ${focus}, capturing subtle shifts, ironies, and medium-specific implications in precise, economical prose.`,
      indicators: [
        "Demonstrates perceptive insight into tension, ambiguity, or counter-readings",
        "Synthesises micro-level diction/syntax with macro-level structural architecture",
      ],
    },
  ];
}

function bands10(focus: string): MarkBand[] {
  return [
    {
      band: "Band 1 (1–3 marks): Descriptive / Fragmented",
      marks: [1, 3],
      descriptor: `Summarises surface meaning with isolated or unconvincing references to ${focus}.`,
      indicators: [
        "Treats prose or non-fiction transparently without examining persona or craft",
        "Minimal comparative or structural cohesion",
      ],
    },
    {
      band: "Band 2 (4–6 marks): Competent Literary Analysis",
      marks: [4, 6],
      descriptor: `Presents a relevant interpretation of ${focus}, explaining clear effects of perspective, structure, or rhetoric with supporting evidence.`,
      indicators: [
        "Accurate terminology applied to embedded textual references",
        "Clear organisation, though evaluative depth or synthesis can sharpen further",
      ],
    },
    {
      band: "Band 3 (7–8 marks): Assured & Cohesive",
      marks: [7, 8],
      descriptor: `Sustains a focused conceptual argument examining ${focus}, integrating structural shifts and nuanced stylistic interplay.`,
      indicators: [
        "Balances micro close reading with whole-passage or cross-form architecture",
        "Maintains crisp, formal analytical register throughout",
      ],
    },
    {
      band: "Band 4 (9–10 marks): Exceptional IB Band 5 Mastery",
      marks: [9, 10],
      descriptor: `Offers illuminating, independent critical insight into ${focus}, evaluating complex ironies, truth-claims, and form-specific craft with eloquence and precision.`,
      indicators: [
        "Interrogates tensions, silences, and competing interpretive lenses effortlessly",
        "Seamless integration of concise evidence into a progressive conceptual thesis",
      ],
    },
  ];
}

export const practice: TopicPractice = {
  quiz: [
    {
      id: "5-prose-fiction-nonfiction-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "narrative-perspective-focalization",
      question:
        "Read this unseen sentence:\n\n> *Clara slid the brass key into her coat pocket; honestly, why had she promised to stay until Friday when nobody in this house even noticed her leaving?*\n\nWhich narrative technique appears after the semicolon?",
      options: [
        "Free indirect discourse",
        "External camera focalisation",
        "Chronological summary",
        "Omniscient prologue",
      ],
      answerIndex: 0,
      hints: [
        "Notice the third-person past tense ('she promised') paired with her spoken-style exclamation ('honestly') and question.",
        "No quotation marks or reporting tags ('she wondered') separate narrator from character.",
      ],
      explanation:
        "Free indirect discourse merges third-person past-tense grammar with Clara's unquoted interior idiom ('honestly') and exasperated question.",
    },
    {
      id: "5-prose-fiction-nonfiction-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "narrative-perspective-focalization",
      question:
        "In Genette's narratology, name the type of focalisation in which an omniscient narrator knows more than any individual character in the story.",
      answer: {
        type: "text",
        accept: ["zero focalisation", "zero focalization", "zero"],
        display: "zero focalisation",
      },
      traps: [
        {
          spec: { type: "text", accept: ["internal focalisation", "internal focalization"] },
          feedback: "Internal focalisation restricts knowledge strictly to what a character perceives — here the narrator knows MORE than any character.",
        },
        {
          spec: { type: "text", accept: ["external focalisation", "external focalization"] },
          feedback: "External focalisation knows LESS than the characters (camera-eye surfaces only).",
        },
      ],
      hints: [
        "Genette uses three labels: zero, internal, and external focalisation.",
        "When there is no perceptual restriction on the narrator's omniscience, focalisation is said to be at 'zero'.",
      ],
      solution: [
        "Genette classifies unrestricted omniscient knowledge as **zero focalisation**.",
        "Because the narrator sees across minds, eras, and ironies unavailable to any single figure, perception is unfiltered.",
      ],
    },
    {
      id: "5-prose-fiction-nonfiction-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "prose-time-setting-symbolism",
      question:
        "A chapter ends as a young violinist steps onto an audition stage; the next chapter begins, *'Fourteen years later, the rosin tin still sat unopened on her bookshelf.'* Which temporal pacing device operates across the chapter break?",
      options: [
        "Descriptive pause",
        "Temporal ellipsis",
        "Real-time scene",
        "Frame narrative",
      ],
      answerIndex: 1,
      hints: [
        "Fourteen story years vanish inside zero lines of discourse text.",
        "Recall the four pacing speeds: ellipsis, summary, scene, and pause.",
      ],
      explanation:
        "A temporal ellipsis skips an entire span of story time without narrating it, leaving the reader to infer years of silent abandonment or grief from the unopened rosin tin.",
    },
    {
      id: "5-prose-fiction-nonfiction-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "prose-time-setting-symbolism",
      question:
        "State the narratological term for a jump forward in story time that reveals or anticipates a future event before the main storyline reaches it.",
      answer: {
        type: "text",
        accept: ["prolepsis", "flashforward", "flash-forward"],
        display: "prolepsis",
      },
      traps: [
        {
          spec: { type: "text", accept: ["analepsis", "flashback"] },
          feedback: "Analepsis reaches backward into the past; jumping ahead into the future is prolepsis.",
        },
      ],
      hints: [
        "It pairs with analepsis (flashback) in Genette's taxonomy of narrative order.",
        "Think of the prefix 'pro-' meaning forward.",
      ],
      solution: [
        "Jumping forward in discourse time is **prolepsis** (flashforward).",
        "Prolepsis often shifts narrative tension from *what* will occur to *how* and *why* it becomes inevitable.",
      ],
    },
    {
      id: "5-prose-fiction-nonfiction-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "literary-nonfiction-genres",
      question:
        "Which feature most reliably distinguishes a literary **personal essay** from a standard factual news report?",
      options: [
        "Complete exclusion of verifiable dates, places, or real public figures",
        "Strict adherence to neutral third-person reporting without personal voice",
        "An associative, self-questioning persona moving from concrete detail through lyrical reflection and structural turns",
        "Requirement that every paragraph end with a rhyming couplet or rhythmic chorus",
      ],
      answerIndex: 2,
      hints: [
        "Think of Montaigne's coinage *essais* `[Example text — not a set text]` ('attempts'): a mind testing ideas on the page.",
        "How does a literary essay treat anecdotes, metaphor, and shifts in thought?",
      ],
      explanation:
        "Personal essays dramatise a reflective, associative mind at work — scaling from concrete lived details through figurative imagery and structural pivots toward open-ended cultural or philosophical insight.",
    },
    {
      id: "5-prose-fiction-nonfiction-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "rhetoric-persona-truth-claims",
      question:
        "Name the syntactic device shown in this unseen memoir extract: *'The shutter banged. Glass rained onto the linoleum. My brother stayed still.'*",
      answer: {
        type: "text",
        accept: ["parataxis", "paratactic syntax"],
        display: "parataxis",
      },
      traps: [
        {
          spec: { type: "text", accept: ["hypotaxis", "hypotactic syntax"] },
          feedback: "Hypotaxis layers subordinate clauses ('because', 'although'); placing equal independent clauses side by side is parataxis.",
        },
      ],
      hints: [
        "Notice there are zero subordinating conjunctions ('when', 'because', 'although') linking the three short clauses.",
        "Recall the pair: 'para-' (side by side) vs 'hypo-' (nested beneath).",
      ],
      solution: [
        "Placing unsubordinated clauses side by side is **parataxis**.",
        "Here, paratactic austerity enacts sudden shock and emotional freeze.",
      ],
    },
    {
      id: "5-prose-fiction-nonfiction-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "rhetoric-persona-truth-claims",
      question:
        "In a memoir, the narrator writes: *'At ten I envied my cousin's immaculate uniform; today I recognise how tightly its starched collar policed his boyhood.'* What literary effect does this split perspective create?",
      options: [
        "It demonstrates that the younger self understood institutional authority more deeply than the adult",
        "It collapses narrative voice into external camera-eye focalisation without hindsight",
        "It proves the memoir is actually a fictional fable with zero personal investment",
        "It generates poignant retrospective irony by contrasting childhood envy with adult recognition of constraint",
      ],
      answerIndex: 3,
      hints: [
        "Identify the two versions of 'I': 'At ten I envied' versus 'today I recognise'.",
        "Notice how the uniform's meaning flips from prestige to surveillance ('policed').",
      ],
      explanation:
        "The friction between the experiencing self (ten-year-old envy) and retrospective self (adult critical clarity) generates retrospective irony, transforming a tidy uniform into an emblem of social policing.",
    },
    {
      id: "5-prose-fiction-nonfiction-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "rhetoric-persona-truth-claims",
      question:
        "Read this unseen speech line: *'We remember the drought; we remember the empty wells; we remember who stayed when the roads washed out.'* Name the rhetorical device created by repeating 'We remember' at the start of each clause.",
      answer: {
        type: "text",
        accept: ["anaphora"],
        display: "anaphora",
      },
      traps: [
        {
          spec: { type: "text", accept: ["epistrophe", "epiphora"] },
          feedback: "Epistrophe (epiphora) repeats words at the END of clauses; repeating words at the BEGINNING is anaphora.",
        },
        {
          spec: { type: "text", accept: ["antithesis"] },
          feedback: "Antithesis contrasts opposing ideas in balanced grammar; here the repeated opening phrase creates anaphora.",
        },
      ],
      hints: [
        "Focus strictly on the repeated opening words of the three clauses.",
        "Greek rhetorical term for repeating the beginning of successive clauses.",
      ],
      solution: [
        "Repeating 'We remember' at the start of successive clauses is **anaphora** (here combined with a three-part tricolon).",
        "It builds collective incantatory cadence and moral solidarity.",
      ],
    },
    {
      id: "5-prose-fiction-nonfiction-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "narrative-perspective-focalization",
      marks: 3,
      question:
        "Read this unseen extract:\n\n> *I merely borrowed the silver inkwell from my late uncle's desk so the estate valuers would not misplace it. Naturally, my cousin's shrill accusation at the reading of the will only confirmed how little composure she possesses.*\n\nExplain **three** distinct ways the text exposes the narrator as unreliable. [3 marks]",
      hints: [
        "Examine the softening adverb 'merely' and verb 'borrowed' applied to taking estate property.",
        "Contrast the narrator's claim of helpfulness with the cousin's reaction at the reading of the will.",
        "Look at how the dismissive adjective 'shrill' attempts to discredit a witness.",
      ],
      modelAnswer:
        "First, the narrator uses euphemistic minimisation ('merely borrowed') to disguise what appears to be unauthorised removal of an inheritance item. Second, a sharp contradiction opens between the narrator's self-serving pretext of safekeeping and the cousin's public outrage, implying others view the act as theft. Third, condescending dismissal ('shrill', mocking her lack of composure) deploys ad hominem deflection to protect the speaker's fragile self-image rather than addressing the ethical charge.",
      markScheme: [
        {
          point: "Identifies euphemistic minimisation disguising potential theft",
          keywords: ["euphem", "minimis", "disguise", "unauthorised", "theft", "steal"],
        },
        {
          point: "Identifies the gap or contradiction between the narrator's pretext and the cousin's reaction",
          keywords: ["contradict", "gap", "pretext", "outrage", "self-serving", "fissure"],
        },
        {
          point: "Analyses condescending dismissal or deflection targeting the cousin's credibility",
          keywords: ["condescend", "dismiss", "deflect", "discredit", "ad hominem", "self-image"],
        },
      ],
    },
    {
      id: "5-prose-fiction-nonfiction-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "prose-time-setting-symbolism",
      marks: 3,
      question:
        "Read this unseen extract:\n\n> *Three summers slid past in quiet letters and polite postcards. Then, in the ten minutes before the night train pulled clear of Platform 4, every unspoken grievance surfaced between the hiss of steam and the whistle's metallic shriek.*\n\nAnalyse how temporal pacing and auditory setting heighten tension here. [3 marks]",
      hints: [
        "Contrast how three summers are narrated versus how ten minutes on Platform 4 are narrated.",
        "Link the steam hiss and metallic shriek to the emotional tone of the confrontation.",
      ],
      modelAnswer:
        "The abrupt pacing transition from compressed summary (three years reduced to one brisk opening sentence) into an impending real-time crisis concentrates years of accumulated silence inside a narrow ten-minute deadline. Meanwhile, harsh auditory imagery — abrasive hissing and a piercing mechanical shriek — functions as heightened acoustic atmosphere bordering on pathetic fallacy, externalising bitter hostility as the threshold space of the railway platform intensifies irrevocable separation.",
      markScheme: [
        {
          point: "Identifies the pacing contrast between compressed summary and urgent narrowed scene/deadline",
          keywords: ["summary", "compress", "abrupt", "pacing", "deadline", "real-time"],
        },
        {
          point: "Analyses harsh auditory/sonic imagery externalising bitter conflict or pathetic fallacy",
          keywords: ["auditory", "acoustic", "pathetic fallacy", "hostil", "externalis", "abrasive"],
        },
        {
          point: "Links the railway platform as a liminal threshold space amplifying separation or urgency",
          keywords: ["threshold", "liminal", "separat", "irrevocable", "accumulated"],
        },
      ],
    },
  ],

  papers: [
    {
      id: "5-prose-fiction-nonfiction-p1",
      title: "Practice Paper 1 — Prose Fiction Craft: Focalisation, Time & Symbolism",
      level: "SL",
      questions: [
        {
          id: "5-prose-fiction-nonfiction-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "narrative-perspective-focalization",
          question:
            "In narratology, what term refers to the chronological sequence of events as they occur in the story world (as opposed to *syuzhet*, the order in which the text presents them)?",
          answer: {
            type: "text",
            accept: ["fabula", "story time", "story"],
            display: "fabula",
          },
          traps: [
            {
              spec: { type: "text", accept: ["syuzhet", "discourse time", "plot"] },
              feedback: "Syuzhet (discourse time) is the rearranged order in which the text narrates events; the underlying chronology is fabula.",
            },
          ],
          hints: [
            "Russian formalist pair: _____ (chronological story) vs syuzhet (artful narrative discourse).",
          ],
          solution: [
            "**Fabula** (story time) denotes the raw chronological sequence of fictional events.",
            "Comparing fabula against syuzhet exposes why an author inserts flashbacks, flashforwards, or gaps.",
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "narrative-perspective-focalization",
          question:
            "Name the novelist and theorist whose five-point **psychic distance** scale moves from Level 1 (panoramic third-person detachment) down to Level 5 (unfiltered interior consciousness).",
          answer: {
            type: "text",
            accept: ["John Gardner", "Gardner"],
            display: "John Gardner",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Gérard Genette", "Gerard Genette", "Genette"] },
              feedback: "Genette developed focalisation (zero/internal/external) and duration; John Gardner formulated the 1–5 psychic distance scale.",
            },
            {
              spec: { type: "text", accept: ["Wayne Booth", "Booth"] },
              feedback: "Wayne Booth coined 'unreliable narrator'; John Gardner proposed the five-level psychic distance scale.",
            },
          ],
          hints: [
            "Author of *The Art of Fiction*, distinct from Gérard Genette and Wayne Booth.",
          ],
          solution: [
            "**John Gardner** articulated the five-level psychic distance scale.",
            "Tracking upward or downward shifts along this scale reveals how prose modulates reader sympathy.",
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p1-q03",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "prose-time-setting-symbolism",
          question:
            "State the Latin literary term for opening a narrative directly in the middle of ongoing action rather than with introductory exposition.",
          answer: {
            type: "text",
            accept: ["in medias res"],
            display: "in medias res",
          },
          hints: [
            "Three Latin words meaning literally 'into the middle of things'.",
          ],
          solution: [
            "***In medias res*** drops readers straight into crisis or dialogue, generating immediate propulsion and strategic disorientation.",
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "prose-time-setting-symbolism",
          question:
            "Read this unseen line: *'The harbour wind nagged at her coat lapels with sullen persistence, resenting every step she took toward the ferry.'* Name the figurative technique attributing human mood to weather here.",
          answer: {
            type: "text",
            accept: ["pathetic fallacy"],
            display: "pathetic fallacy",
          },
          traps: [
            {
              spec: { type: "text", accept: ["foil", "prolepsis", "analepsis"] },
              feedback: "Look specifically at the weather ('wind') given human emotional states ('sullen', 'resenting').",
            },
          ],
          hints: [
            "Coined by John Ruskin for attributing human feelings or temperament specifically to nature and weather.",
            "Look at 'sullen persistence' and 'resenting' applied to the harbour wind.",
          ],
          solution: [
            "Attributing human emotional disposition ('sullen', 'resenting') to the wind is **pathetic fallacy**.",
            "It projects the focaliser's reluctance and unease outward onto the surrounding coast.",
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "prose-time-setting-symbolism",
          question:
            "What structural term describes an outer story (such as a sea captain's letters or an archivist's interview) that encloses an inner narrative and mediates how we judge its truth?",
          answer: {
            type: "text",
            accept: ["frame narrative", "frame story", "framing narrative", "embedded narrative"],
            display: "frame narrative",
          },
          hints: [
            "Think of a picture border placed around an inner painting — used in Mary Shelley's *Frankenstein* [Example text — not a set text].",
            "Two words: _____ narrative.",
          ],
          solution: [
            "A **frame narrative** (or frame story) wraps an outer narrative layer around one or more inner tales, spotlighting mediation, testimony, and historical distance.",
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "narrative-perspective-focalization",
          question:
            "Read this unseen sentence: *'Today was the inspection, and if the junior clerks thought he would overlook a single smudged ledger, they were sorely mistaken.'* Name the narrative technique signalled by pairing 'Today' with past-tense 'was' without quotation marks.",
          answer: {
            type: "text",
            accept: ["free indirect discourse", "free indirect speech", "free indirect style", "FID"],
            display: "free indirect discourse",
          },
          traps: [
            {
              spec: { type: "text", accept: ["direct speech", "interior monologue", "external focalisation", "external focalization"] },
              feedback: "Notice the third-person pronoun 'he' + past tense 'was' fused with the character's proximal time marker 'Today' — that blend is free indirect discourse.",
            },
          ],
          hints: [
            "Third-person past tense fused with a proximal deictic ('Today') and the character's indignant idiom ('sorely mistaken').",
            "No quotation marks and no 'he thought' reporting tag appear.",
          ],
          solution: [
            "**Free indirect discourse** (FID) fuses third-person past tense with the character's immediate time marker ('Today') and irritated inner register.",
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "prose-time-setting-symbolism",
          question:
            "In Genette's four narrative pacing modes (ellipsis, summary, scene, pause/stretch), which mode occurs when two seconds of a glass shattering on stone tiles are narrated across an entire slow-motion paragraph?",
          answer: {
            type: "text",
            accept: ["stretch", "pause", "descriptive pause", "dilation", "narrative pause", "stretch / pause"],
            display: "stretch",
          },
          traps: [
            {
              spec: { type: "text", accept: ["summary"] },
              feedback: "Summary compresses long spans into brief lines — here discourse time is much LONGER than story time.",
            },
            {
              spec: { type: "text", accept: ["ellipsis"] },
              feedback: "Ellipsis skips time completely with zero text; expanding two seconds into a full paragraph is stretch (or pause).",
            },
          ],
          hints: [
            "Discourse time greatly exceeds story clock time.",
            "It sits at the slowest end of E–S–S–P (Ellipsis → Summary → Scene → ___).",
          ],
          solution: [
            "**Stretch** (or descriptive pause) dilates a tiny slice of story time across extended prose, intensifying shock, sensory hyper-awareness, or psychological revelation.",
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "narrative-perspective-focalization",
          marks: 2,
          question:
            "Distinguish clearly between **fixed internal focalisation** and **external focalisation**, noting one distinct effect of each on reader interpretation. [2 marks]",
          hints: [
            "Define how much inner psychological access each mode grants.",
            "Link each level of access to a specific interpretive effect (e.g. intimacy/bias vs detachment/enigma).",
          ],
          modelAnswer:
            "Fixed internal focalisation restricts narration exclusively to one character's mind and sensory filter, fostering psychological intimacy while trapping the reader inside that single subject's blind spots. By contrast, external focalisation acts like an outside camera withholding all private consciousness, generating cool detachment, mystery, and interpretive ambiguity that forces readers to infer motives from observable gestures alone.",
          markScheme: [
            {
              point: "Accurately defines fixed internal focalisation (restricted to one character's mind) and links it to intimacy, subjectivity, or bias",
              keywords: ["intimacy", "blind spot", "subjective", "single", "consciousness", "interior"],
            },
            {
              point: "Accurately defines external focalisation (surface/camera view withholding thoughts) and links it to detachment, mystery, or inference",
              keywords: ["camera", "detachment", "withhold", "enigma", "ambiguity", "infer"],
            },
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "prose-time-setting-symbolism",
          marks: 3,
          question:
            "Read this unseen extract:\n\n> *Daniel kept his dead mother's silver thimble in his breast pocket like a talisman; his brother Marco tossed his share of the sewing box into the canal the evening after the funeral. Yet when the town flooded in March, it was Marco who waded chest-deep to haul their grandmother's cedar chest upstairs while Daniel froze on the top landing clutching his coat.*\n\nExplain how **foil characterisation** and an **evolving motif** interact to complicate judgements of both brothers. [3 marks]",
          hints: [
            "Contrast how each brother treats physical heirlooms initially (preservation vs rejection).",
            "Track how the flood reverses our assumption about who honours family duty in practice.",
            "Examine how the thimble shifts from protective talisman to a sign of paralysis.",
          ],
          modelAnswer:
            "Structurally, the brothers act as opposing foils whose initial attitudes to mourning appear binary — reverent preservation versus unsentimental dismissal. However, the crisis inverts moral expectations: Marco's unsentimental pragmatism translates into courageous physical rescue, whereas Daniel's attachment to the pocketed talisman curdles into anxious paralysis on the high landing. Consequently, the heirloom motif evolves from gentle devotion into an ironic emblem of sterile nostalgia incapable of sustaining active care.",
          markScheme: [
            {
              point: "Identifies structural foil contrast between reverent preservation and unsentimental rejection",
              keywords: ["opposing", "reverent", "preserv", "unsentimental", "binary"],
            },
            {
              point: "Explains the ironic reversal during the crisis (pragmatic action vs emotional paralysis)",
              keywords: ["invert", "reversal", "paralysis", "courageous", "pragmatism"],
            },
            {
              point: "Traces how the heirloom motif shifts from tender devotion into sterile nostalgia or ironic helplessness",
              keywords: ["nostalgia", "sterile", "devotion", "ironic", "emblem"],
            },
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "narrative-perspective-focalization",
          marks: 4,
          question:
            "Read this unseen extract:\n\n> *Mrs Hale surveyed the civic banquet hall from the dais. Naturally, the young committee members had placed the floral arrangements two inches too close to the candelabra — amateurs always mistook clutter for elegance. Still, one could hardly blame them; breeding took generations, after all. Below her, three scholarship students exchanged a swift, silent glance and gently slid the dry eucalyptus branches clear of the flame.*\n\nAnalyse how shifts in focalisation and free indirect discourse construct social satire here. [4 marks]",
          hints: [
            "Identify the markers of free indirect discourse in Sentences 2–3 ('Naturally', 'after all', elitist aphorism).",
            "Notice how the narration adopts Mrs Hale's snobbish register without explicit authorial lecturing.",
            "Examine the shift in Sentence 4 to external observation of the students' quiet practical competence.",
            "Articulate the ironic verdict on class pretension ('breeding') vs actual practical foresight.",
          ],
          modelAnswer:
            "The extract satirises elitist complacency by gliding effortlessly from external staging into Mrs Hale's patronising consciousness via free indirect discourse. Conversational markers ('Naturally', 'after all') and smug class aphorisms about aristocratic lineage bleed unquoted into third-person narration, allowing her arrogance to expose itself from within rather than through heavy-handed narratorial scolding. When the perspective abruptly pulls outward in the closing sentence, the silent, synchronised action of the scholarship entrants creates sharp situational irony: while she congratulates herself on superior taste from an elevated platform, those she dismisses as clumsy quietly avert a fire hazard.",
          markScheme: [
            {
              point: "Identifies free indirect discourse via unquoted conversational modals/markers and elitist idiom",
              keywords: ["patronising", "conversational", "unquoted", "arrogance", "elitist"],
            },
            {
              point: "Explains double-voiced self-exposure without explicit narratorial lecturing",
              keywords: ["self", "expose", "within", "lecturing", "scolding", "double"],
            },
            {
              point: "Tracks the outward shift in focalisation to the scholarship students' silent, competent gesture",
              keywords: ["outward", "synchronised", "silent", "competent", "pull"],
            },
            {
              point: "Evaluates the resulting situational satire inverting snobbish hierarchy and practical foresight",
              keywords: ["satir", "situational irony", "hazard", "invert", "foresight", "hierarchy"],
            },
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Examine",
          guideRef: "prose-time-setting-symbolism",
          marks: 4,
          question:
            "Read this unseen extract:\n\n> *The notary's waiting room smelled of boiled cabbage and damp coats, its single barred window facing a brick courtyard wall. Twenty minutes passed while the brass wall clock ticked like a gavel. When the door finally clicked open, the courtyard beyond still lay in stagnant grey shadow, as though afternoon itself had refused to advance.*\n\nExamine how spatial imagery, acoustic simile, and temporal distortion work together to create institutional oppression. [4 marks]",
          hints: [
            "Look at sensory claustrophobia ('barred window', 'brick courtyard wall', stale smells).",
            "Unpack the legal connotations of 'ticked like a gavel'.",
            "Connect the subjective stretch of waiting ('refused to advance') to powerlessness.",
          ],
          modelAnswer:
            "Sensory claustrophobia immediately frames the civic office as carceral: stale domestic odours combine with visual enclosure (iron bars facing sheer masonry) to strip visitors of autonomy. The simile equating mechanical timekeeping with a judicial mallet converts mere waiting into an experience of silent sentencing, signalling asymmetrical bureaucratic authority. Finally, subjective time dilation and mild pathetic fallacy — imagining daylight stubbornly stalled in stagnant shadow — enact psychological entrapment, showing how institutional delay itself functions as an instrument of control.",
          markScheme: [
            {
              point: "Analyses sensory and architectural claustrophobia suggesting confinement or loss of autonomy",
              keywords: ["claustrophob", "carceral", "confinement", "enclosure", "autonomy"],
            },
            {
              point: "Interprets the gavel simile as converting passive waiting into judicial sentencing or power asymmetry",
              keywords: ["judicial", "sentencing", "mallet", "bureaucratic", "asymmetr"],
            },
            {
              point: "Identifies temporal distortion/dilation and pathetic fallacy in the stalled afternoon",
              keywords: ["dilation", "pathetic fallacy", "stalled", "entrapment", "subjective"],
            },
            {
              point: "Synthesises how delay and environment act as instruments of institutional control",
              keywords: ["control", "instrument", "powerless", "delay"],
            },
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "narrative-perspective-focalization",
          marks: 6,
          question:
            "Read this unseen prose extract:\n\n> *My employer's correspondence was never strictly confidential, merely delicate, and any diligent secretary learns to inspect envelopes held briefly against a shaded lamp. I kept a neat shorthand digest solely to protect Mr Osei should rival merchants ever dispute a shipping manifest. When he unexpectedly dismissed me on Friday without severance, his hands trembled so noticeably while signing my cheque that I felt genuine pity for a man clearly crumbling under commercial strain.*\n\nAnalyse how narrative voice, diction, and structural irony expose the speaker's unreliability. [6 marks]",
          hints: [
            "Track how euphemistic adjectives ('delicate', 'diligent', 'neat') normalise espionage.",
            "Examine the rationalisation offered for keeping a covert shorthand copy.",
            "Compare Mr Osei's trembling hands and abrupt dismissal with the narrator's smug diagnosis of 'commercial strain'.",
            "Evaluate what the gap between self-flattering narration and implied reality reveals about ego and self-deception.",
          ],
          modelAnswer:
            "Throughout the extract, first-person narration stages a textbook unreliable persona built upon euphemism and moral self-flattery. Opening with a subtle semantic downgrade — reframing private correspondence as merely sensitive rather than strictly confidential — the speaker deploys professional vocabulary ('diligent', 'neat shorthand') to recast covert surveillance as conscientious stewardship. This defensive rationalisation deepens through altruistic pretext: spying is presented as protective loyalty against rival merchants rather than blackmail or disloyalty. Crucially, dramatic irony peaks in the closing sentence, where a stark fissure opens between observed physical detail and narcissistic interpretation. While the abrupt firing without severance and Mr Osei's shaking hands strongly imply horrified discovery of betrayal, the narrator condescends to express 'genuine pity', misattributing the employer's distress to external business pressure. By letting the speaker's polished bureaucratic register clash against unmistakable signs of ruptured trust, the passage critiques how self-deception recruits polite institutional language to launder unethical conduct.",
          markScheme: [
            {
              point: "Identifies euphemistic reframing disguising intrusion/espionage as routine office diligence",
              keywords: ["euphemis", "surveillance", "espionage", "recast", "downgrade"],
            },
            {
              point: "Analyses professional/bureaucratic diction conferring false moral respectability",
              keywords: ["bureaucratic", "conscientious", "stewardship", "respectab", "register"],
            },
            {
              point: "Explains the defensive altruistic pretext masking disloyalty or potential leverage",
              keywords: ["pretext", "altruistic", "rationalisation", "disloyalty", "blackmail"],
            },
            {
              point: "Pinpoints the sharp fissure between observed signs (sudden firing without pay, shaking hands) and narrator spin",
              keywords: ["fissure", "betrayal", "discovery", "misattribut", "gap"],
            },
            {
              point: "Evaluates ironic condescension in the speaker's 'pity' highlighting vanity and blindness",
              keywords: ["condescen", "narcissist", "vanity", "blind", "dramatic irony"],
            },
            {
              point: "Articulates a conceptual conclusion about how polite language launders self-deception",
              keywords: ["self-deception", "launder", "unethical", "critique"],
            },
          ],
          markbands: bands6("narrative unreliability, diction, and irony"),
        },
        {
          id: "5-prose-fiction-nonfiction-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Examine",
          guideRef: "prose-time-setting-symbolism",
          marks: 6,
          question:
            "Read this unseen prose extract:\n\n> *At the auction, nobody bid on the rusted iron bell from the demolished railway footbridge except old Mr Sato. Forty years earlier, that same clapper had rung out twice each dusk while commuters poured across the steel span, his wife always waiting beside the cedar kiosk with two paper cones of roasted chestnuts. Today the iron tongue hung stiff with orange scale. When the auctioneer hammered the table, Sato lifted the silent bell into his bicycle basket and rode home through streets too wide for ghosts.*\n\nExamine how temporal shifts and an evolving central symbol convey loss and urban erasure. [6 marks]",
          hints: [
            "Trace the three temporal planes: present auction → 40-year analepsis → return to 'Today'.",
            "Contrast the sensory warmth of the past (sound, crowds, roasted chestnuts) against present silence and rust.",
            "Analyse how the iron bell mutates from a communal acoustic pulse to a mute private relic.",
            "Unpack the poignant closing metaphor 'streets too wide for ghosts'.",
          ],
          modelAnswer:
            "The passage orchestrates loss through a carefully hinged analepsis framed by austere present-tense-anchored stillness. Opening amidst an indifferent commercial sale where nobody else bids, the narrative leaps backward forty years into a vibrant acoustic and sensory past: double evening chimes, flowing crowds, and tactile domestic warmth evoke collective civic intimacy. Snapping back to the present marker 'Today' creates an abrupt emotional drop, replacing communal sound with oxidation and silence. Across this temporal bridge, the iron bell operates as an evolving symbol rather than a static ornament: once the rhythmic heartbeat synchronising work and love, its frozen, corroded clapper now embodies mute obsolescence and private grief. Finally, the auctioneer's gavel — ironically echoing a diminished metallic strike — seals the commodification of memory, while the closing spatial metaphor of avenues 'too wide for ghosts' indicts sterile urban redevelopment for leaving no intimate scale where remembrance can survive.",
          markScheme: [
            {
              point: "Identifies the structural analepsis framed by present-day commercial indifference",
              keywords: ["analepsis", "indifferent", "commercial", "hinged", "framed"],
            },
            {
              point: "Contrasts vivid communal warmth and acoustic vitality in memory against present silence/decay",
              keywords: ["communal", "vitality", "intimacy", "oxidation", "silence"],
            },
            {
              point: "Analyses the abrupt temporal snap back ('Today') as an emotional drop",
              keywords: ["abrupt", "snap", "drop", "temporal"],
            },
            {
              point: "Traces the iron bell as an evolving symbol shifting from civic pulse to mute relic",
              keywords: ["evolving", "heartbeat", "obsolescence", "relic", "corroded"],
            },
            {
              point: "Notices ironic echo or commodification in the auctioneer's hammer",
              keywords: ["gavel", "commodif", "echo", "ironic"],
            },
            {
              point: "Interprets the final spatial metaphor as a critique of sterile urban redevelopment erasing memory",
              keywords: ["redevelopment", "sterile", "erasure", "indict", "remembrance"],
            },
          ],
          markbands: bands6("temporal structure and evolving symbolism"),
        },
        {
          id: "5-prose-fiction-nonfiction-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "narrative-perspective-focalization",
          marks: 8,
          question:
            "Read this unseen prose extract:\n\n> *In the drought summer of 1983, three villages along the valley floor signed away their irrigation deeds within a single fortnight. From the surveyor's hilltop pavilion, the dry terraces looked as orderly as ruled parchment.\n> Down by the culvert, however, Lena knelt to pry a cracked clay pipe from the baked silt. Surely the elders had read the bottom clause — hadn't her father copied the map himself by paraffin lamp? Stupid to kneel here scraping mud under her nails when the vans were already loading at the crossroads. Silt — white glare — water used to talk beneath these stones — dry throat, cold tin cup — walk back now before the dust hides the track.\n> Above the ridge, a lone kite turned two lazy circles in the colourless heat.*\n\nAnalyse how the writer modulates **psychic distance** and **focalisation** across the extract to dramatise powerlessness and displacement. [8 marks]",
          hints: [
            "Map the full vertical arc of psychic distance: Level 1–2 hilltop overview → Level 3–4 close third & FID → Level 5 stream of consciousness → abrupt zoom back out to Level 1–2 sky.",
            "Contrast the surveyor's aestheticising aerial view ('orderly as ruled parchment') with Lena's bodily contact with 'baked silt' and 'mud under her nails'.",
            "Identify the exact FID markers ('Surely', 'hadn't her father...', 'Stupid to kneel here') and the jagged dashes enacting cognitive overload.",
            "Evaluate the chilling indifference of the closing aerial image ('lone kite', 'colourless heat').",
          ],
          modelAnswer:
            "The passage weaponises rapid vertical shifts along John Gardner's psychic distance scale to expose the gulf between bureaucratic dispossession and embodied human loss. Opening at Level 1 panoramic zero focalisation, the narrator announces mass surrender of land in cool historical summary before anchoring briefly in the surveyor's elevated vantage point. The simile equating parched agricultural terraces to 'ruled parchment' reveals an imperial, bureaucratic gaze that flattens living communities into tidy legal geometry. Paragraph two executes a dramatic downward plunge into the valley floor and into Lena's consciousness: external bodily detail ('knelt', 'baked silt') gives way immediately to free indirect discourse. Modal pleading ('Surely'), an anxious rhetorical question, and terse self-reproach ('Stupid to kneel here') convey frantic betrayal without a single reporting tag. Mid-paragraph, syntactic cohesion fractures completely into Level 5 stream of consciousness: jagged dashes, tactile fragments, and personified sensory memory of talking water enact acute cognitive overwhelm as departure becomes irreversible. Crucially, the single-sentence coda snaps the narrative lens back out to cosmic external detachment: the unbothered bird circling in bleached glare provides stark ironic environmental contrast, leaving Lena's grief swallowed by indifferent landscape and asymmetrical power.",
          markScheme: [
            {
              point: "Maps the overarching structural arc of psychic distance (panoramic → interior immersion → abrupt zoom-out)",
              keywords: ["vertical", "arc", "panoramic", "zoom", "plunge", "scale"],
            },
            {
              point: "Analyses opening zero focalisation / historical summary framing mass dispossession clinically",
              keywords: ["zero focalis", "dispossession", "clinical", "summary", "historical"],
            },
            {
              point: "Evaluates the surveyor's 'ruled parchment' simile as a bureaucratic gaze erasing lived life",
              keywords: ["bureaucratic", "gaze", "geometry", "flattens", "erasing", "legal"],
            },
            {
              point: "Contrasts elevated abstraction with Lena's tactile, bodily groundedness on the valley floor",
              keywords: ["embodied", "tactile", "gulf", "contrast", "bodily"],
            },
            {
              point: "Pinpoints free indirect discourse cues (modals, rhetorical question, unquoted self-reproach)",
              keywords: ["free indirect", "modal", "self-reproach", "reporting tag", "rhetorical question"],
            },
            {
              point: "Analyses descent into Level 5 stream of consciousness via fractured syntax and sensory memory",
              keywords: ["stream of consciousness", "fracture", "dashes", "overwhelm", "cognitive"],
            },
            {
              point: "Examines the abrupt closing zoom-out to external detachment",
              keywords: ["coda", "detachment", "snaps", "cosmic", "external"],
            },
            {
              point: "Evaluates ironic environmental indifference of the circling bird amplifying powerlessness",
              keywords: ["indifferent", "environmental contrast", "unbothered", "asymmetrical", "bleached"],
            },
          ],
          markbands: bands8("psychic distance, focalisation shifts, and displacement"),
        },
        {
          id: "5-prose-fiction-nonfiction-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "prose-time-setting-symbolism",
          marks: 8,
          question:
            "Read this unseen frame-narrative opening:\n\n> *I copy out my grandfather's harbour notebook exactly as I found it inside the tin biscuit box, though several pages between 1941 and 1945 have been sliced neatly along the binding with a razor. My aunt insists he never regretted leaving the shipping guild; yet the margin beside every calm tide-table entry bears a frantic pencilled tally of missing hulls, erased hard enough to bruise the paper.*\n\nDiscuss how the writer uses **frame narration**, **physical/temporal ellipsis**, and **material symbolism** to make narrative silence itself the passage's primary subject. [8 marks]",
          hints: [
            "Explain how the outer narrator (grandchild copying a notebook) immediately foregrounds mediation and competing family testimony.",
            "Link the razor-sliced 1941–1945 pages to literalised temporal ellipsis hiding wartime trauma.",
            "Contrast the aunt's tidy oral narrative with the physical forensic trace of erased pencil tallies.",
            "Unpack the bodily metaphor 'bruise the paper' and what it argues about suppressed history.",
          ],
          modelAnswer:
            "Through an archival frame narrative, this opening shifts inquiry away from simple historical plot toward the contested mechanics of remembrance and suppression. By foregrounding a grandchild transcribing an inherited manuscript, the text announces immediately that truth reaches the present only through layers of mediation and rival testimony. Crucially, the missing 1941–1945 leaves literalise temporal ellipsis as a physical wound: the precision of the razor cut implies deliberate self-censorship rather than accidental decay, inviting readers to infer unutterable wartime trauma precisely where discourse turns blank. Tension sharpens through the clash between official domestic myth and material forensic evidence: while the aunt's verbal insistence asserts untroubled closure, the notebook's margins quietly contradict her. Calm administrative tide charts act as a polite exterior facade undermined by compulsive private counting of lost vessels. Finally, the startling bodily verb 'bruise' anthropomorphises the damaged paper, transforming the erased margin into a somatic scar: even when silence tries to expunge grief, the violent pressure of erasure leaves a permanent counter-record.",
          markScheme: [
            {
              point: "Explains how the archival frame narrative foregrounds mediation and contested testimony",
              keywords: ["archival", "mediation", "contested", "transcrib", "rival"],
            },
            {
              point: "Interprets the sliced 1941–1945 pages as literalised temporal ellipsis signalling trauma",
              keywords: ["literalis", "ellipsis", "trauma", "blank", "wound"],
            },
            {
              point: "Analyses the surgical precision of the razor cut as deliberate self-censorship",
              keywords: ["censorship", "deliberate", "precision", "suppression"],
            },
            {
              point: "Contrasts the aunt's reassuring oral myth against physical forensic evidence in the margins",
              keywords: ["oral", "myth", "forensic", "contradict", "counter"],
            },
            {
              point: "Examines juxtaposition of calm official tide charts with compulsive hidden tallies",
              keywords: ["facade", "administrative", "compulsive", "juxtapos", "under"],
            },
            {
              point: "Analyses the bodily metaphor 'bruise' turning damaged paper into somatic scar/pain",
              keywords: ["somatic", "bodily", "anthropomorph", "scar", "damaged"],
            },
            {
              point: "Evaluates the paradox that violent erasure inadvertently preserves an enduring trace of grief",
              keywords: ["paradox", "expunge", "trace", "enduring", "permanent"],
            },
            {
              point: "Sustains a cohesive conceptual focus showing how silence communicates louder than speech",
              keywords: ["mechanics", "remembrance", "unutterable", "counter-record"],
            },
          ],
          markbands: bands8("frame narration, temporal ellipsis, and material symbolism"),
        },
      ],
    },

    {
      id: "5-prose-fiction-nonfiction-p2",
      title: "Practice Paper 2 — Literary Non-Fiction: Sub-Genres, Persona & Rhetoric",
      level: "SL",
      questions: [
        {
          id: "5-prose-fiction-nonfiction-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "literary-nonfiction-genres",
          question:
            "Which literary non-fiction sub-genre blends physical itinerary across unfamiliar landscapes with cultural observation and internal self-scrutiny?",
          answer: {
            type: "text",
            accept: ["travel writing", "travelogue", "travel narrative", "travel literature"],
            display: "travel writing",
          },
          hints: [
            "Watch for the 'observer's gaze' navigating between 'home' and 'elsewhere'.",
          ],
          solution: [
            "**Travel writing** (or travelogue) braids external geographical movement with cultural framing and inner reckoning.",
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p2-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "rhetoric-persona-truth-claims",
          question:
            "In Aristotelian rhetoric, which appeal establishes a writer's credibility, intellectual fairness, or moral authority — often strengthened through candid self-critique?",
          answer: {
            type: "text",
            accept: ["ethos"],
            display: "ethos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pathos"] },
              feedback: "Pathos appeals to emotion and empathy; credibility and moral character belong to ethos.",
            },
            {
              spec: { type: "text", accept: ["logos"] },
              feedback: "Logos appeals to logical structure and evidence; credibility and candour construct ethos.",
            },
          ],
          hints: [
            "One of the classical triad: ethos, pathos, logos.",
          ],
          solution: [
            "**Ethos** constructs the persona's trustworthiness, moral poise, and candour.",
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p2-q03",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "rhetoric-persona-truth-claims",
          question:
            "Name the three-part parallel rhythmic structure seen in this unseen speech line: *'They dismantled the workshops, silenced the apprentices, and sold the street itself.'*",
          answer: {
            type: "text",
            accept: ["tricolon", "rule of three"],
            display: "tricolon",
          },
          hints: [
            "Greek rhetorical term meaning literally 'three clauses/members'.",
          ],
          solution: [
            "**Tricolon** arranges three parallel members to create escalating rhythmic momentum and emphatic closure.",
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "rhetoric-persona-truth-claims",
          question:
            "Name the syntactic architecture characterised by nested subordinate clauses linked with conjunctions such as *although*, *because*, and *whereas* to express qualification and hierarchy.",
          answer: {
            type: "text",
            accept: ["hypotaxis", "hypotactic syntax"],
            display: "hypotaxis",
          },
          traps: [
            {
              spec: { type: "text", accept: ["parataxis", "paratactic syntax"] },
              feedback: "Parataxis sets equal clauses side by side without subordination; nested subordinating architecture is hypotaxis.",
            },
          ],
          hints: [
            "Opposite of parataxis; its Greek prefix 'hypo-' means 'under' or 'beneath'.",
            "Look for how subordinating conjunctions ('although', 'because', 'whereas') nest ideas in grammatical hierarchy.",
          ],
          solution: [
            "**Hypotaxis** layers subordinate clauses beneath a main clause, enacting analytical nuance, hesitation, or complex retrospection.",
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "rhetoric-persona-truth-claims",
          question:
            "In memoir analysis, what term designates the younger, immersed version of 'I' living inside the past event (in contrast with the retrospective self narrating from the present)?",
          answer: {
            type: "text",
            accept: ["experiencing self", "the experiencing self", "experiencing I", "experiencing persona"],
            display: "experiencing self",
          },
          traps: [
            {
              spec: { type: "text", accept: ["retrospective self", "narrating self"] },
              feedback: "The retrospective (or narrating) self writes with hindsight from the present; the younger past participant is the experiencing self.",
            },
          ],
          hints: [
            "Two words contrasting directly with 'retrospective self'.",
            "Think of the participle describing someone actively living through a past moment in real time.",
          ],
          solution: [
            "The **experiencing self** inhabits the past moment with immediate sensory immersion and partial foresight, creating productive tension with the older retrospective self.",
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "literary-nonfiction-genres",
          question:
            "What classical rhetorical term refers to the specific, urgent historical moment or civic occasion to which a speech responds?",
          answer: {
            type: "text",
            accept: ["kairos"],
            display: "kairos",
          },
          hints: [
            "Six-letter Greek term meaning 'the opportune or decisive moment'.",
            "Often analysed alongside ethos, pathos, and logos when evaluating speeches tied to a historical crisis.",
          ],
          solution: [
            "***Kairos*** denotes timeliness and historical urgency — explaining why a speech's metaphors and tone carry heightened weight at that exact civic juncture.",
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "rhetoric-persona-truth-claims",
          question:
            "Name the rhetorical device pairing opposing ideas inside mirrored parallel syntax: *'We inherited their stone walls, yet abandoned their common wells.'*",
          answer: {
            type: "text",
            accept: ["antithesis"],
            display: "antithesis",
          },
          traps: [
            {
              spec: { type: "text", accept: ["anaphora"] },
              feedback: "Anaphora repeats opening words across clauses; balancing contrasting concepts ('inherited... walls' vs 'abandoned... wells') is antithesis.",
            },
          ],
          hints: [
            "Contrast between 'inherited... stone walls' and 'abandoned... common wells' in balanced grammatical symmetry.",
            "Greek rhetorical term literally meaning 'setting opposite' (anti + thesis).",
          ],
          solution: [
            "**Antithesis** sets sharply contrasting concepts inside balanced parallel clauses to crystallise ethical contradiction.",
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "literary-nonfiction-genres",
          marks: 2,
          question:
            "Distinguish between a **memoir** and a conventional **autobiography** in terms of structural scope and relationship to memory. [2 marks]",
          hints: [
            "Compare chronological whole-life sweep with selective thematic focus.",
            "Note how memoir treats the fallible act of remembering itself.",
          ],
          modelAnswer:
            "A conventional autobiography aims for a broad, chronological account of a public or representative lifespan from origins to maturity. By contrast, a memoir selects a tighter thematic thread, period, or intimate bond and frequently foregrounds memory's own fragility and subjective reconstruction rather than presenting an authoritative linear chronicle.",
          markScheme: [
            {
              point: "Characterises autobiography as broad, chronological life-span coverage",
              keywords: ["chronological", "lifespan", "broad", "linear", "comprehensive"],
            },
            {
              point: "Characterises memoir as selective/thematic and self-conscious about memory's fragility",
              keywords: ["selective", "thematic", "fragility", "reconstruction", "subjective"],
            },
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "literary-nonfiction-genres",
          marks: 3,
          question:
            "Read this unseen personal essay excerpt:\n\n> *In my childhood clinic, the waiting bench was varnished so thickly with decades of amber shellac that winter coats stuck gently to the wood. Years later, reading municipal reports that describe our old neighbourhood as 'blighted stock', I still think first of that stubborn bench — how ordinary patience leaves its own polish long before planners arrive with demolition maps.*\n\nAnalyse how the anchoring anecdote and lexical contrast challenge institutional authority. [3 marks]",
          hints: [
            "Notice how the sticky varnished bench grounds community dignity in tactile human wear.",
            "Contrast 'amber shellac' / 'polish' against sterile bureaucratic jargon ('blighted stock', 'demolition maps').",
            "Identify the structural turn at 'Years later' shifting from childhood memory to civic critique.",
          ],
          modelAnswer:
            "Opening with a tactile domestic anecdote, the essayist turns the worn clinic bench into a warm symbol of cumulative human endurance, where 'polish' reframes physical wear as dignity rather than decay. A crisp temporal turn ('Years later') pivots directly from private recollection into public critique, juxtaposing living warmth against sanitised municipal jargon ('blighted stock') placed inside distancing scare quotes. This lexical collision exposes how abstract planning rhetoric dehumanises lived communities to justify erasure.",
          markScheme: [
            {
              point: "Explains how the tactile bench anecdote transforms wear into enduring human dignity",
              keywords: ["tactile", "endurance", "dignity", "cumulative", "warmth"],
            },
            {
              point: "Identifies the temporal structural pivot linking private memory to public critique",
              keywords: ["pivot", "turn", "recollection", "public", "critique"],
            },
            {
              point: "Analyses lexical clash exposing how bureaucratic jargon dehumanises communities",
              keywords: ["jargon", "sanitised", "scare quote", "dehumanis", "erasure", "collision"],
            },
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Examine",
          guideRef: "rhetoric-persona-truth-claims",
          marks: 4,
          question:
            "Read this unseen speech excerpt:\n\n> *I do not stand here as an expert in maritime engineering; I stand here as the daughter of a boat-builder whose slipway vanished beneath last August's surge. We asked for seawalls; we received brochures. We asked for drainage; we received speeches. Today, let us finally build with stone what we have too long promised in ink.*\n\nExamine how ethos, antithesis, and anaphora collaborate to drive persuasive urgency. [4 marks]",
          hints: [
            "Examine the opening humble concession ('not... an expert... daughter of a boat-builder') constructing authentic lived ethos.",
            "Unpack the paired anaphora ('We asked for... we received...') and sharp antithesis contrasting material survival with hollow PR.",
            "Analyse the concluding metaphor contrasting 'stone' against 'ink'.",
          ],
          modelAnswer:
            "The orator establishes compelling ethos through strategic humility: disclaiming formal technical credentials only to claim deeper moral authority rooted in lived family loss. Immediately, driving anaphora ('We asked for... we received...') binds the speaker to a collective civic constituency while chiselled antithesis exposes bureaucratic cynicism, pitting vital physical protection against paper publicity. Closing on a stark material contrast between permanent masonry and ephemeral ink, the final imperative harnesses kairos ('Today') to shame hollow rhetoric and demand tangible action.",
          markScheme: [
            {
              point: "Analyses humble disclaimer pivoting into lived, personal witness as persuasive ethos",
              keywords: ["humility", "disclaim", "lived", "witness", "moral authority"],
            },
            {
              point: "Links anaphora and collective pronoun 'We' to rhythmic momentum and communal solidarity",
              keywords: ["collective", "solidarity", "constituency", "momentum", "driving"],
            },
            {
              point: "Analyses paired antithesis exposing hollow publicity versus urgent material need",
              keywords: ["cynicism", "hollow", "protection", "publicity", "material"],
            },
            {
              point: "Interprets the final stone-versus-ink contrast and kairos demanding immediate action",
              keywords: ["masonry", "ephemeral", "kairos", "tangible", "imperative"],
            },
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "rhetoric-persona-truth-claims",
          marks: 4,
          question:
            "Read this unseen memoir excerpt:\n\n> *Because I wanted desperately to resemble the poised boarding-school girls who never mispronounced French cheeses, and although my grandmother had spent two mornings folding dumplings in waxed paper for my train journey, I hid her parcel at the bottom of my canvas rucksack. Nobody teased me. Nobody saw. I ate cold dry biscuits instead.*\n\nAnalyse how the writer's shift from **hypotaxis** to **parataxis** enacts guilt and self-alienation. [4 marks]",
          hints: [
            "Look at Sentence 1: nested 'Because...' and 'although...' clauses delaying the shameful verb 'I hid'.",
            "Look at Sentences 2–4: abrupt, stripped-down independent clauses with stark anaphoric 'Nobody... Nobody...'.",
            "Connect the food contrast (hand-folded dumplings vs cold dry biscuits) to cultural shame.",
          ],
          modelAnswer:
            "Sentence one deploys tangled hypotactic subordination ('Because...', 'although...') to delay the main verb, grammatically enacting both the young persona's anxious social self-consciousness and the older writer's painful awareness of the grandmother's spurned labour. Immediately after the act of concealment, the syntax shears abruptly into blunt parataxis reinforced by bleak anaphora ('Nobody... Nobody...'). Stripping away all causal explanation mimics hollow triumph curdling instantly into isolation: choosing flavourless biscuits over handmade family food renders class assimilation as sterile self-starvation.",
          markScheme: [
            {
              point: "Analyses opening hypotaxis as enacting anxious self-justification and delayed confession",
              keywords: ["delay", "subordinat", "self-consciousness", "spurned", "tangled"],
            },
            {
              point: "Identifies the abrupt shift into blunt parataxis reinforced by bleak repetition",
              keywords: ["shears", "blunt", "anaphora", "bleak", "stripping"],
            },
            {
              point: "Explains how paratactic sparseness enacts hollow victory turning into quiet isolation/guilt",
              keywords: ["hollow", "isolation", "curdl", "sparseness", "guilt"],
            },
            {
              point: "Connects the culinary contrast to cultural shame or sterile assimilation",
              keywords: ["assimilation", "shame", "sterile", "handmade", "self-starvation"],
            },
          ],
        },
        {
          id: "5-prose-fiction-nonfiction-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "literary-nonfiction-genres",
          marks: 6,
          question:
            "Read this unseen travelogue excerpt:\n\n> *Before boarding the coastal mail steamer, I filled four notebook pages with lyrical adjectives harvested from nineteenth-century explorers — 'untamed', 'languid', 'primordial'. Yet on our first evening ashore, a retired harbour-master invited me beneath a flickering fluorescent tube to inspect his waterproof solar batteries and politely corrected my mispronunciation of the island's indigenous name. Watching moths tap against the humming strip-light, I quietly crossed out three pages of prose.*\n\nAnalyse how the travel writer dismantles the romanticising **observer's gaze** through structural pivot, lexical irony, and symbolic detail. [6 marks]",
          hints: [
            "Examine the self-mocking admission of borrowing imperial/colonial vocabulary ('harvested from nineteenth-century explorers').",
            "Pinpoint the structural pivot ('Yet on our first evening ashore') replacing exotic cliché with modern domestic reality.",
            "Contrast 'flickering fluorescent tube' and 'solar batteries' against 'primordial' and 'untamed'.",
            "Interpret the closing gesture of crossing out three pages as ethical revision of travel-writing authority.",
          ],
          modelAnswer:
            "The travelogue stages an ironic self-education that exposes how inherited literary clichés distort living places. In the opening sentence, the writer candidly mocks their own pre-arrival arrogance: describing archaic colonial adjectives as 'harvested' treats language itself as extractive plunder, while scare quotes isolate words ('untamed', 'primordial') that freeze modern communities in myth. A decisive structural pivot ('Yet') shatters that fantasy through concrete sensory anti-climax: the buzzing fluorescent lamp and solar equipment refute romantic primitivism with crisp contemporary practicality. Crucially, the retired harbour-master claims quiet intellectual agency, correcting the visitor's linguistic error with gracious poise that inverts the expected hierarchy between foreign chronicler and local subject. Finally, deleting three drafted pages becomes a symbolic act of humility: real travel writing begins only when the outsider unlearns preconceived scripts and listens.",
          markScheme: [
            {
              point: "Identifies self-ironising opening persona mocking inherited colonial/explorer clichés",
              keywords: ["self-education", "cliché", "colonial", "arrogance", "mock"],
            },
            {
              point: "Analyses the verb 'harvested' and scare quotes as exposing extractive linguistic framing",
              keywords: ["extractive", "plunder", "scare quote", "freeze", "myth"],
            },
            {
              point: "Identifies the structural turn ('Yet') pivoting from fantasy to grounded encounter",
              keywords: ["pivot", "shatter", "anti-climax", "grounded"],
            },
            {
              point: "Contrasts mundane modern details (fluorescent lamp, solar kit) against 'primordial' stereotypes",
              keywords: ["contemporary", "practical", "primitivism", "refute", "buzzing"],
            },
            {
              point: "Examines how the harbour-master's polite linguistic correction inverts outsider authority",
              keywords: ["agency", "invert", "hierarchy", "chronicler", "gracious"],
            },
            {
              point: "Interprets crossing out three pages as a symbolic gesture of ethical humility and revision",
              keywords: ["humility", "unlearn", "revision", "script", "symbolic"],
            },
          ],
          markbands: bands6("travel writing, observer's gaze, and structural pivot"),
        },
        {
          id: "5-prose-fiction-nonfiction-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Examine",
          guideRef: "rhetoric-persona-truth-claims",
          marks: 6,
          question:
            "Read this unseen memoir passage:\n\n> *My elder brother swears our mother sang while shelling peas during the blackout of 1979. Perhaps she did; perhaps I have stitched two different winters together, because in my memory the kitchen holds only the dry snap of pods and the hiss of a dying wick. Still, neither version feels false: his remembers the courage she performed for us, while mine remembers the silence she carried alone.*\n\nExamine how the memoirist negotiates **epistemic uncertainty**, **competing memories**, and **truth-claims** here. [6 marks]",
          hints: [
            "Notice how introducing the elder brother immediately decentralises single-voice autobiographical authority.",
            "Analyse the anaphoric epistemic hedging ('Perhaps... perhaps') and the textile metaphor 'stitched two different winters together'.",
            "Compare the auditory contrast (singing vs dry snap/hiss of a dying wick).",
            "Evaluate the concluding balanced antithesis reconciling factual discrepancy with layered emotional truth.",
          ],
          modelAnswer:
            "Rather than asserting infallible autobiographical recall, the memoirist openly interrogates the instability of personal testimony. Opening with a fraternal counter-memory immediately signals that domestic history is plural rather than monolithic. Anaphoric hedging ('Perhaps... perhaps') combined with the domestic crafting metaphor of stitching disparate winters together frames memory as an active, fallible patchwork rather than a pristine archive — paradoxically deepening candid ethos through transparency. Sensory juxtaposition clarifies why both recollections diverge: melodic singing contrasts sharply with brittle percussion and waning light, suggesting a dark undertone of exhaustion. In the closing sentence, symmetrical antithesis ('courage she performed' versus 'silence she carried') refuses a crude true-or-false binary, arguing that divergent memories capture complementary facets of maternal resilience and private burden.",
          markScheme: [
            {
              point: "Notes how introducing the brother's divergent version decentralises singular memory",
              keywords: ["plural", "counter-memory", "monolithic", "divergent", "infallible"],
            },
            {
              point: "Analyses anaphoric epistemic hedging ('Perhaps...') foregrounding memory's fallibility",
              keywords: ["hedging", "anaphoric", "fallib", "instability", "transparency"],
            },
            {
              point: "Unpacks the textile metaphor ('stitched') depicting memory as constructed patchwork",
              keywords: ["patchwork", "textile", "craft", "constructed", "active"],
            },
            {
              point: "Explains the paradox that admitting uncertainty strengthens candid ethos",
              keywords: ["paradox", "ethos", "candid", "trust"],
            },
            {
              point: "Contrasts acoustic imagery (song vs dry snap/waning wick) capturing public bravery vs private strain",
              keywords: ["acoustic", "brittle", "waning", "juxtaposition", "exhaustion"],
            },
            {
              point: "Evaluates closing antithesis transcending literal fact toward dual emotional truth",
              keywords: ["antithesis", "binary", "complementary", "resilience", "burden"],
            },
          ],
          markbands: bands6("epistemic uncertainty and negotiating truth-claims in memoir"),
        },
        {
          id: "5-prose-fiction-nonfiction-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "literary-nonfiction-genres",
          marks: 8,
          question:
            "Read this unseen personal essay excerpt:\n\n> *Every Saturday morning, the neighbourhood locksmith sat behind a wire grille hung with hundreds of orphaned brass keys whose doors had long since been demolished. As a boy, I assumed he kept them out of eccentric thrift — a magpie hoarding scraps of metal. Only after my own family packed three generations of photographs into two cardboard cartons did I grasp the quiet theology of his shop wall. Cities insist we call demolition renewal; locksmiths know better. They keep the teeth even after the locks are ground to dust. Sometimes, passing a glass office tower where an old alleyway used to bend, I slip my fingers into my coat pocket and feel the ridge of a house key I still cannot bring myself to throw away.*\n\nAnalyse how the writer builds a cohesive **literary non-fiction arc** from concrete anecdote through persona shift and rhetorical contrast to open-ended lyric closure. [8 marks]",
          hints: [
            "Trace all four movements of the essay arc: sensory anecdote → experiencing-vs-retrospective shift → ideological critique of urban language → resonant bodily closing image.",
            "Unpack metaphors like 'orphaned brass keys', 'magpie hoarding', 'quiet theology', and 'keep the teeth'.",
            "Notice the crisp paratactic antithesis mid-passage ('Cities insist... locksmiths know better').",
            "Evaluate why ending on an unresolved physical gesture rather than a thesis slogan fits the personal essay genre.",
          ],
          modelAnswer:
            "Structured along a classic personal-essay trajectory, this passage elevates a mundane neighbourhood artisan into a quiet meditation on urban displacement and attachment. It opens grounded in vivid concrete specificity: personifying unclaimed keys as 'orphaned' subtly introduces homelessness and severing even before the essay's theme surfaces explicitly. Next, the split memoir persona creates an intellectual pivot: the naive experiencing boy reduces the craftsman to an animalistic 'magpie', whereas the retrospective adult — humbled by personal uprooting compressed into two cardboard boxes — reinterprets the cluttered wall through reverent diction ('quiet theology'), consecrating memory as sacred duty. At this structural turn, the essay widens from private nostalgia into civic critique via brisk paratactic antithesis ('Cities insist... locksmiths know better'), puncturing euphemistic corporate language ('renewal') with tactile persistence ('keep the teeth'). Rather than closing on a dogmatic slogan, the writer returns to an intimate embodied gesture — feeling a redundant key inside a coat pocket beside a glass tower — achieving resonant open-ended lyric closure that leaves grief and belonging palpably unresolved.",
          markScheme: [
            {
              point: "Maps the overarching four-stage essay arc from concrete detail to conceptual resonance",
              keywords: ["trajectory", "arc", "mundane", "elevat", "displacement"],
            },
            {
              point: "Analyses opening personification ('orphaned') planting motifs of loss and severing",
              keywords: ["personif", "homelessness", "severing", "unclaimed", "specificity"],
            },
            {
              point: "Contrasts naive experiencing self ('magpie') with retrospective adult enlightenment",
              keywords: ["experiencing", "retrospective", "naive", "uprooting", "humbled"],
            },
            {
              point: "Evaluates lexical elevation from animalistic hoarding to sacred reverence ('theology')",
              keywords: ["sacred", "reverent", "consecrat", "animalistic", "reinterprets"],
            },
            {
              point: "Pinpoints the structural turn scaling private packing into wider civic critique",
              keywords: ["structural turn", "civic", "widens", "critique"],
            },
            {
              point: "Analyses crisp antithesis/parataxis puncturing bureaucratic euphemism ('renewal')",
              keywords: ["antithesis", "paratactic", "euphemis", "corporate", "punctur"],
            },
            {
              point: "Unpacks the persistent material imagery ('teeth', 'glass office tower', obsolete key)",
              keywords: ["obsolete", "redundant", "persistence", "embodied", "tactile"],
            },
            {
              point: "Evaluates the open-ended, image-based lyric closure characteristic of literary essays",
              keywords: ["open-ended", "lyric closure", "dogmatic", "unresolved", "slogan"],
            },
          ],
          markbands: bands8("personal essay architecture, split persona, and lyric closure"),
        },
        {
          id: "5-prose-fiction-nonfiction-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "rhetoric-persona-truth-claims",
          marks: 8,
          question:
            "Read this unseen civic speech excerpt:\n\n> *Some commentators whisper that preserving an old vernacular theatre is a sentimental luxury when budgets tighten — as though a city were merely a ledger of asphalt and transit fares. We know better. We know what happens when the last local stage darkens: first the playwrights leave, then the elders stop gathering after dusk, and soon our children inherit a skyline fluent in every currency except their own voice. Save the roof, yes — but far more urgently, save the room where strangers still learn to breathe together.*\n\nEvaluate how the speaker orchestrates **logos, ethos, and pathos** alongside **rhetorical syntax** — and identify one assumption a **critical or resisting reader** might interrogate. [8 marks]",
          hints: [
            "Analyse how dismissive verbs ('whisper') and reductive imagery ('ledger of asphalt') frame opponents as cold technocrats.",
            "Trace the escalating tricolon of civic decay ('first... then... soon...') culminating in the striking metaphor 'fluent in every currency except their own voice'.",
            "Examine the collective intimacy of 'We know' and the bodily closing antithesis ('Save the roof... save the room where strangers... breathe together').",
            "For critical evaluation: interrogate who the universalising 'We' excludes or whether budget trade-offs (e.g. clinics or housing) are unfairly caricatured as mere 'asphalt'.",
          ],
          modelAnswer:
            "The orator orchestrates classical appeals through crisp syntactic escalation to elevate a municipal budget dispute into a defence of cultural soul. Initially, the speaker undercuts fiscal critics through subtle lexical framing: attributing their caution to furtive whispering and mocking technocratic reductionism ('ledger of asphalt') builds moral ethos while positioning artistic preservation as rational communal stewardship rather than whim. Short emphatic repetition ('We know better. We know...') pivots into a tightly structured causal tricolon ('first... then... soon...') that pairs logical progression with rising pathos, culminating in the piercing linguistic metaphor of a skyline literate only in money rather than local identity. The closing concessive antithesis ('yes — but far more urgently') subordinates physical masonry to visceral collective empathy, turning audience silence into shared breath. Yet a critically resisting reader might interrogate two rhetorical sleights of hand: first, the universalising pronoun 'we' manufactures effortless consensus across an implicitly diverse city; second, caricaturing fiscal constraints purely as soulless roads sidesteps competing civic priorities such as healthcare or affordable housing.",
          markScheme: [
            {
              point: "Analyses strategic framing of opponents ('whisper', technocratic 'ledger') building moral ethos",
              keywords: ["furtive", "technocratic", "reductionism", "ethos", "undercut"],
            },
            {
              point: "Examines emphatic anaphora ('We know') creating authoritative communal solidarity",
              keywords: ["anaphora", "communal", "emphatic", "solidarity", "pivots"],
            },
            {
              point: "Traces the escalating causal tricolon combining reasoned progression (logos) with rising pathos",
              keywords: ["tricolon", "escalat", "causal", "pathos", "logical"],
            },
            {
              point: "Analyses the linguistic metaphor critiquing economic fluency displacing local cultural identity",
              keywords: ["linguistic", "economic", "literate", "displac", "identity"],
            },
            {
              point: "Evaluates the closing concessive antithesis and bodily metaphor of shared breath",
              keywords: ["concessive", "antithesis", "visceral", "masonry", "empathy"],
            },
            {
              point: "Interrogates how universalising collective pronouns manufacture assumed consensus",
              keywords: ["universalising", "consensus", "manufactur", "diverse"],
            },
            {
              point: "Critiques the straw-man simplification of real municipal budget trade-offs",
              keywords: ["caricatur", "trade-off", "sidestep", "priorities", "housing"],
            },
            {
              point: "Balances appreciative craft analysis with critical reader-response evaluation",
              keywords: ["resisting", "sleight", "evaluat", "stewardship"],
            },
          ],
          markbands: bands8("Aristotelian appeals, rhetorical syntax, and critical interrogation"),
        },
      ],
    },
  ],

  challenge: [
    {
      id: "5-prose-fiction-nonfiction-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "narrative-perspective-focalization",
      question:
        "Read this unseen sentence: *'Now was certainly not the hour to admit he had lost the deeds — what would his uncle say if the notary telephoned before supper?'* State BOTH the exact narrative technique operating here AND the single temporal word (deictic) anchored to the character's present rather than the narrator's past.",
      answer: {
        type: "text",
        accept: [
          "free indirect discourse; now",
          "free indirect discourse, now",
          "free indirect discourse and now",
          "FID; now",
          "FID, now",
        ],
        display: "free indirect discourse; now",
      },
      hints: [
        "First name the double-voiced technique merging third-person past tense with character consciousness.",
        "Then pinpoint the very first word of the sentence, which clashes temporally with past-tense 'was'.",
      ],
      solution: [
        "Technique: **free indirect discourse** (unquoted interior anxiety inside third-person past tense).",
        "Proximal deictic: **now** (anchored to the character's immediate crisis while paired with past-tense *was*).",
      ],
    },
    {
      id: "5-prose-fiction-nonfiction-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "rhetoric-persona-truth-claims",
      question:
        "Name the French literary theorist who coined the term **'autobiographical pact'** (*le pacte autobiographique*) to describe the implicit contract of historical identity between author, narrator, and protagonist in non-fiction.",
      answer: {
        type: "text",
        accept: ["Philippe Lejeune", "Lejeune"],
        display: "Philippe Lejeune",
      },
      hints: [
        "Mentioned in Section 4 on negotiating truth-claims in memoir and autobiography.",
        "French surname starting with L.",
      ],
      solution: [
        "**Philippe Lejeune** formulated the autobiographical pact, clarifying why readers hold memoirs to different ethical expectations than novels.",
      ],
    },
    {
      id: "5-prose-fiction-nonfiction-ch-q03",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Compare and contrast",
      guideRef: "narrative-perspective-focalization",
      marks: 8,
      question:
        "Compare and contrast how these two unseen openings — **Extract A (Prose Fiction)** and **Extract B (Memoir)** — construct narrative distance and self-scrutiny around a ruined heirloom:\n\n> **Extract A (Prose Fiction):** *Miriam set the cracked porcelain bowl beside the sink. Honestly, what had Aunt Beatrice expected, gifting an heirloom to a rented flat with crooked shelves? Still, her fingers lingered on the cobalt rim long after the kettle boiled dry.*\n\n> **Extract B (Memoir):** *At nineteen I told myself the shattered teacup was merely brittle china, easily replaced from any market stall. Today, twenty winters later, I recognise how eagerly my younger self hid behind brisk practicality whenever inheritance felt like obligation.*\n\nCompare and contrast the craft choices in both extracts. [8 marks]",
      hints: [
        "Organise point-by-point around shared concepts (e.g. defensive rationalisation, narrative mechanism exposing self-deception, tone), NEVER block-by-block.",
        "Extract A uses third-person free indirect discourse + external physical gesture ('fingers lingered') to imply contradiction silently.",
        "Extract B uses first-person double-self retrospection ('At nineteen... Today') to diagnose self-deception explicitly.",
        "Evaluate how each medium invites a different role for the reader (active inference of subtext vs witnessing candid self-indictment).",
      ],
      modelAnswer:
        "Although both extracts examine characters deflecting guilt over broken domestic heirlooms through brisk rationalisation, they rely on distinctly medium-specific narrative architectures to expose self-deception. In Extract A, third-person prose glides unannounced into free indirect discourse: colloquial exasperation ('Honestly') and a defensive rhetorical question stage Miriam's inward excuse-making in real time without narratorial verdict. Conversely, Extract B deploys first-person memoir's classic temporal split, explicitly separating a dismissive experiencing adolescent ('At nineteen') from an incisive retrospective adult ('Today'). Consequently, contradiction surfaces differently in each text. Whereas Extract A leaves emotional truth unspoken — relying on an abrupt shift outward to external focalisation where lingering fingers and an ignored kettle silently betray lingering attachment — Extract B converts private evasion into overt conceptual insight, deploying lucid retrospective metaphor ('hid behind brisk practicality') to diagnose fear of inherited obligation. Thus, fiction asks the reader to infer ironic subtext across the gap between interior excuse and bodily gesture, while literary non-fiction models candid ethos by dramatising moral growth across twenty intervening years.",
      markScheme: [
        {
          point: "Establishes integrated comparative thesis linking shared thematic deflection to distinct form-specific architectures",
          keywords: ["integrated", "medium-specific", "deflect", "rationalisation", "architectures"],
        },
        {
          point: "Analyses Extract A's free indirect discourse (colloquial marker, unquoted rhetorical question) enacting live excuse-making",
          keywords: ["free indirect", "colloquial", "excuse", "real time", "verdict"],
        },
        {
          point: "Contrasts Extract B's explicit memoir split between experiencing self and retrospective self",
          keywords: ["experiencing", "retrospective", "temporal split", "adolescent", "explicitly"],
        },
        {
          point: "Examines how Extract A relies on external bodily gesture and neglected kettle to betray unspoken attachment",
          keywords: ["external focalis", "lingering", "betray", "attachment", "unspoken"],
        },
        {
          point: "Analyses Extract B's overt self-diagnosis and figurative framing of obligation/evasion",
          keywords: ["diagnose", "overt", "evasion", "obligation", "lucid"],
        },
        {
          point: "Maintains integrated point-by-point comparative connectives throughout (whereas, conversely, while)",
          keywords: ["conversely", "whereas", "distinctly", "differently"],
        },
        {
          point: "Evaluates the differing roles invited from the reader (inferring ironic subtext vs witnessing candid ethos)",
          keywords: ["infer", "subtext", "candid ethos", "growth"],
        },
        {
          point: "Demonstrates Band 5 conceptual cohesion and precise academic register",
          keywords: ["dramatis", "intervening", "contradiction", "moral"],
        },
      ],
      markbands: bands8("comparative analysis of prose fiction FID versus memoir double-self"),
    },
    {
      id: "5-prose-fiction-nonfiction-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "prose-time-setting-symbolism",
      marks: 8,
      question:
        "Read this unseen prose extract:\n\n> *They buried the shipyard foreman on a glaring Tuesday when not a single cloud softened the harbour crane. For twenty-two years he had measured tides by the rust ring on Pier Three; now the new concrete quay rose smooth and pale, erasing every waterline. At the edge of the tarmac, his apprentice — too young to have known wooden hulls, yet already stooped at the shoulders — dropped a single iron bolt into the wet cement before the foreman's widow turned away.*\n\nAnalyse how **ironic environmental contrast**, **compressed temporal juxtaposition**, and **symbolic gesture** articulate generational erasure and quiet resistance. [8 marks]",
      hints: [
        "Unpack the harsh 'glaring Tuesday' with zero clouds as anti-pathetic fallacy amplifying exposure.",
        "Contrast organic, weathered tidal knowledge ('rust ring', 'wooden hulls') with sterile modern uniformity ('smooth and pale', 'erasing every waterline').",
        "Examine the apprentice's paradoxical characterisation ('too young... yet already stooped') bridging past and present.",
        "Interpret dropping the iron bolt into wet cement as a covert, enduring counter-monument.",
      ],
      modelAnswer:
        "Rather than indulging mournful pathetic fallacy, this extract confronts industrial obsolescence through pitiless light and stark material friction. Opening on an unsparingly bright afternoon where clear sky refuses comforting shade, the setting operates via ironic environmental contrast: indifferent glare exposes private bereavement beneath looming machinery. Swift temporal juxtaposition then compresses twenty-two years of embodied maritime skill into a single clause before confronting the sterile present ('now'). Whereas weathered oxidation once served as an organic communal calendar, smooth pale concrete performs systematic historical amnesia, scrubbing away visible tidal memory. Against this blank modernity, indirect characterisation of the apprentice crystallises structural continuity of labour: though separated chronologically from older timber craft, his prematurely bent posture registers inherited bodily exhaustion. Crucially, the silent closing gesture — embedding one heavy iron bolt inside hardening cement — transforms an ordinary hardware scrap into a subversive counter-monument, asserting stubborn human trace beneath an architecture designed for erasure.",
      markScheme: [
        {
          point: "Identifies ironic environmental contrast (pitiless bright glare refusing sympathetic pathetic fallacy)",
          keywords: ["ironic environmental", "pitiless", "pathetic fallacy", "unsparing", "indifferent"],
        },
        {
          point: "Analyses compressed temporal juxtaposition contrasting 22-year summary against abrupt modern 'now'",
          keywords: ["compress", "juxtaposition", "obsolescence", "clause", "abrupt"],
        },
        {
          point: "Contrasts organic weathered knowledge ('rust ring') with sterile homogenising concrete",
          keywords: ["oxidation", "organic", "amnesia", "sterile", "scrubbing"],
        },
        {
          point: "Examines indirect characterisation of the apprentice's paradoxically aged posture",
          keywords: ["indirect characteris", "posture", "prematurely", "exhaustion", "continuity"],
        },
        {
          point: "Interprets the buried iron bolt as an act of covert resistance or counter-monument",
          keywords: ["counter-monument", "subversive", "covert", "trace", "stubborn"],
        },
        {
          point: "Notes the irony of embedding old metal inside the very modern material meant to erase it",
          keywords: ["hardening", "embedding", "irony", "erasure"],
        },
        {
          point: "Notices quiet understated tone ('before the foreman's widow turned away') avoiding melodrama",
          keywords: ["silent", "quiet", "bereavement", "restraint", "mournful"],
        },
        {
          point: "Synthesises generational continuity versus institutional modernization coherently",
          keywords: ["modernity", "embodied", "communal", "architecture"],
        },
      ],
      markbands: bands8("ironic environmental contrast, temporal compression, and symbolic gesture"),
    },
    {
      id: "5-prose-fiction-nonfiction-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "literary-nonfiction-genres",
      marks: 8,
      question:
        "Read this unseen epistolary non-fiction extract (a public letter addressed to a former school headmistress thirty years after graduation):\n\n> *Dear Miss Hargreaves — You taught us to diagram subordinate clauses with the discipline of watchmakers, yet never once asked why our local river appeared in zero chapters of the set geography reader. I write neither to accuse nor to flatter, for your red pencil gave me the very grammar I now use to question your syllabus. Still, whenever I return to the estuary, I hear both voices at once: your brisk metronome tapping the lectern, and the mudflats whispering names you never learned to spell.*\n\nEvaluate how epistolary direct address, concession, and auditory metaphor dramatise cultural ambivalence rather than simple hostility. [8 marks]",
      hints: [
        "Explain how addressing 'Dear Miss Hargreaves' turns a public cultural critique into an intimate, ethically complex reckoning.",
        "Analyse the balanced antithesis and concession ('neither to accuse nor to flatter... gave me the very grammar I now use to question').",
        "Contrast mechanical imperial/academic order ('watchmakers', 'red pencil', 'brisk metronome') with organic local voice ('mudflats whispering names').",
        "Evaluate the refusal of binary condemnation: 'both voices at once' embraces unresolved complexity (IB Band 5 Criterion A!).",
      ],
      modelAnswer:
        "Using the intimate form of a public epistle, the writer resists reductive polemic in favour of nuanced postcolonial and educational ambivalence. Direct second-person address personalises systemic curriculum erasure, placing the retired teacher directly across the page as an accountable human interlocutor rather than an abstract villain. Crucially, the letter's ethical credibility rests on generous concession framed in crisp antithesis ('neither to accuse nor to flatter'): acknowledging that colonial schooling furnished the very syntactic precision now wielded to interrogate it creates subtle irony and fair-minded ethos. Throughout, mechanical imagery — horological precision, red ink, and a rigid lectern rhythm — depicts formal pedagogy as disciplined yet deaf to local ecology, sharply offset by the lyrical personification of coastal mudflats guarding unrecorded vernacular names. Rather than silencing either inheritance, the closing acoustic duality ('both voices at once') sustains productive ambiguity, dramatising hybrid identity as an ongoing tension between acquired mastery and reclaimed belonging.",
      markScheme: [
        {
          point: "Analyses epistolary direct address personalising systemic critique into human reckoning",
          keywords: ["epistle", "interlocutor", "personal", "accountable", "polemic"],
        },
        {
          point: "Examines balanced antithesis and concession ('neither... nor...') building fair-minded ethos",
          keywords: ["antithesis", "concession", "ethos", "fair-minded", "generous"],
        },
        {
          point: "Recognises the ironic paradox of using inherited grammatical mastery to critique its own syllabus",
          keywords: ["paradox", "wielded", "interrogate", "syntactic", "furnished"],
        },
        {
          point: "Analyses mechanical/academic semantic field (watchmakers, red pencil, metronome) denoting rigid pedagogy",
          keywords: ["mechanical", "horological", "pedagogy", "rigid", "disciplined"],
        },
        {
          point: "Contrasts rigid instruction with lyrical personification of local mudflats and vernacular memory",
          keywords: ["personification", "vernacular", "ecology", "unrecorded", "lyrical"],
        },
        {
          point: "Evaluates the closing acoustic duality embracing hybridity and unresolved ambivalence",
          keywords: ["duality", "hybrid", "ambivalence", "ambiguity", "belonging"],
        },
        {
          point: "Connects lexical omission (river missing from reader) to broader institutional erasure",
          keywords: ["erasure", "systemic", "omission", "colonial"],
        },
        {
          point: "Sustains perceptive evaluative register avoiding simplistic binary judgement",
          keywords: ["reductive", "nuanced", "productive", "tension"],
        },
      ],
      markbands: bands8("epistolary persona, concession, and cultural ambivalence"),
    },
    {
      id: "5-prose-fiction-nonfiction-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "rhetoric-persona-truth-claims",
      marks: 10,
      question:
        "**Mini Paper 1 Guided Analysis (Unseen Literary Non-Fiction)**\n\nRead this unseen personal essay extract:\n\n> *Every household maintains an unofficial archive of silence. In ours, it occupied the top drawer of the teak sideboard, locked since the monsoon of 1991 with a bent hairpin where the brass key used to hang. When my cousins visited, we were told the drawer held fragile tax receipts; naturally, children recognise immediately when adults pronounce the word 'fragile' like a warning rather than a description.\n> Last October, clearing the flat before my father moved into assisted care, I finally pried the sticking timber open. Inside lay no financial ledgers — only seven unmailed aerogrammes addressed in my mother's cramped cursive to her sister in Penang, stamped and dated across three silent years, each envelope slit neatly and left empty. Perhaps she burned the letters themselves; perhaps she could never endure sending them across a border that felt wider than the strait.\n> We talk endlessly about history as what gets recorded in museums and monuments. Yet standing beside an open teak drawer in an echoey hallway, I wondered whether the truer chronicle of ordinary families lives inside the sentences they drafted, folded, and kept unposted.*\n\n**Guiding Question:** How does the writer use **domestic symbolism**, **persona shifts**, and **rhetorical structure** to explore silence and familial memory? [10 marks]",
      hints: [
        "Structure conceptually around 3 progressive arguments (NOT paragraph-by-paragraph summary!): (1) domestic object as subversive archive; (2) split persona & epistemic humility; (3) essayistic structural turn scaling private silence to historiography.",
        "Unpack 'unofficial archive', the bent hairpin replacing a brass key, and the tonal irony of 'fragile' as warning.",
        "Examine the anti-climax of empty slit envelopes paired with anaphoric hedging ('Perhaps... perhaps') and geographic metaphor ('wider than the strait').",
        "Evaluate the closing rhetorical pivot ('We talk endlessly... Yet...') and open-ended contemplative ending ('I wondered...').",
      ],
      modelAnswer:
        "Through a taut three-movement personal essay, the writer transforms a mundane piece of family furniture into an elegiac meditation on how domestic silence rivals formal history. Opening with an oxymoronic conceptual frame ('unofficial archive of silence'), the essay immediately repurposes institutional vocabulary to confer historical gravity upon private restraint. The teak sideboard and improvised hairpin latch operate as an evolving domestic symbol: childhood obedience encounters adult euphemism, as the narrator's dry irony exposes how tone converts an innocuous adjective ('fragile') into an unspoken prohibition.\n\nCrucially, the essay relies on the dynamic split between experiencing child and retrospective adult to navigate ethical boundaries around memory. While the younger persona intuited adult evasiveness, it is only under the poignant pressure of parental ageing and dismantling the home that the retrospective self unlocks the drawer — only to confront absence rather than melodramatic confession. The discovery of seven dated yet emptied aerogrammes replaces expected revelation with stark material ellipsis: love and estrangement register through stamped paper skins whose inner text has vanished. Rather than inventing certainty to tidy that void, the essayist deploys rhythmic anaphoric hedging ('Perhaps... perhaps') and psychological geography (a border wider than water), strengthening candid ethos by honouring the mother's unknowable interiority.\n\nFinally, a decisive structural turn in the closing paragraph scales intimate bereavement outward into historiographical critique. Challenging collective complacency ('We talk endlessly') through crisp contrast ('Yet'), the writer sets monumental civic preservation against an echoing domestic corridor. Ending not on an authoritative declaration but on tentative introspection ('I wondered'), the essay embodies the genre's quintessential open-ended humility — leaving unmailed grief resonant precisely because it resists neat closure.",
      markScheme: [
        {
          point: "Frames a cohesive conceptual thesis linking domestic craft, split persona, and historiographical critique",
          keywords: ["elegiac", "historiograph", "restraint", "trajectory", "meditation"],
        },
        {
          point: "Analyses opening paradox/institutional diction ('unofficial archive of silence') elevating private secrecy",
          keywords: ["oxymoron", "institutional", "gravity", "repurposes", "secrecy"],
        },
        {
          point: "Examines the sideboard/hairpin as domestic symbolism and the ironic exposure of euphemistic 'fragile'",
          keywords: ["euphemis", "prohibition", "innocuous", "improvised", "latch"],
        },
        {
          point: "Traces the split between intuitive experiencing child and retrospective adult confronting parental ageing",
          keywords: ["experiencing", "retrospective", "intuited", "ageing", "dismantling"],
        },
        {
          point: "Interprets the emptied slit aerogrammes as material ellipsis / anti-climax embodying vanished communication",
          keywords: ["ellipsis", "anti-climax", "absence", "vanished", "estrangement"],
        },
        {
          point: "Analyses anaphoric epistemic hedging ('Perhaps... perhaps') as ethical humility strengthening ethos",
          keywords: ["hedging", "anaphoric", "ethos", "unknowable", "interiority"],
        },
        {
          point: "Unpacks the spatial/emotional metaphor of a border wider than the physical strait",
          keywords: ["geography", "psychological", "border", "water"],
        },
        {
          point: "Identifies the closing structural turn ('Yet') contrasting public monuments against private hallways",
          keywords: ["structural turn", "monumental", "civic", "corridor", "complacency"],
        },
        {
          point: "Evaluates the tentative, open-ended lyric closure ('I wondered') resisting reductive finality",
          keywords: ["tentative", "open-ended", "introspection", "closure", "humility"],
        },
        {
          point: "Organises conceptually with smooth micro-quotation integration and Band 5 academic register",
          keywords: ["quintessential", "resonant", "evasiveness", "melodramatic"],
        },
      ],
      markbands: bands10("Paper 1 unseen literary non-fiction analysis"),
    },
    {
      id: "5-prose-fiction-nonfiction-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "To what extent",
      guideRef: "narrative-perspective-focalization",
      marks: 10,
      question:
        "**Paper 2–Style Conceptual Synthesis Prompt (Non-Prescriptive)**\n\n*\"Prose writers rarely trust a single uncomplicated viewpoint: whether through unreliable fictional narrators or divided non-fiction personas, meaning is born in the friction between what is claimed and what is quietly revealed.\"*\n\n**To what extent** do you agree with this view? Support your argument by comparing specific narrative and rhetorical techniques across **prose fiction** and **literary non-fiction** (you may reference illustrative general conventions or clearly tagged illustrative works rather than assumed set texts). [10 marks]",
      hints: [
        "Engage directly with 'To what extent': endorse the power of narrative friction while also qualifying cases where clarity, direct witness, or external restraint generates meaning without outright deception.",
        "Compare concrete craft mechanisms side by side: FID & unreliable narration in fiction vs experiencing/retrospective split & epistemic hedging in memoir/essays.",
        "Keep every named real work tagged `[Example text — not a set text]` if you mention one, OR illustrate with razor-sharp generic craft models.",
        "Close with a nuanced synthesis distinguishing fictional irony (authorial control behind an invented character) from non-fiction's ethical autobiographical pact.",
      ],
      modelAnswer:
        "The proposition identifies a central engine of literary prose: across both fiction and literary non-fiction, interpretive richness frequently flourishes in the friction between explicit surface assertion and implicit textual counter-evidence. Yet evaluating 'to what extent' requires distinguishing how each form constructs that tension — and recognising moments where austere lucidity or unadorned testimony achieves power without overt unreliability.\n\nIn prose fiction, double-voiced irony depends heavily on manipulating focalisation and psychic distance. Through free indirect discourse — exemplified in Jane Austen's *Emma* [Example text — not a set text] — third-person past tense absorbs a character's self-flattering rationalisations without explicit authorial rebuke, inviting readers to hear hubris behind polite phrasing. Similarly, first-person unreliable narrators, such as the dutiful butler in Kazuo Ishiguro's *The Remains of the Day* [Example text — not a set text], expose emotional repression through micro-contradictions, euphemism, and jarring gaps between others' observed distress and the speaker's smug gloss. In both techniques, the author stands cleanly behind an invented consciousness, engineering dramatic irony as an aesthetic design.\n\nLiterary non-fiction operates under Philippe Lejeune's autobiographical pact, where persona cannot simply be discarded as fictional invention — yet productive friction remains equally vital. Memoirists split a single historical 'I' across time, allowing the retrospective self to ironise or correct the naive experiencing self, while essayists use structural turns and epistemic hedging ('perhaps', 'as I recall') to expose the gap between archival record and subjective memory. Likewise, skilled travel writers destabilise their own observer's gaze through self-irony and counter-voices.\n\nNevertheless, one must qualify the claim that prose always depends on mistrust or concealed contradiction. External camera-eye focalisation in fiction, or stark paratactic witness in speeches and elegiac essays, can generate shattering pathos precisely through stripped-down directness rather than ironic unmasking. Ultimately, while deliberate friction between claim and revelation drives much of prose's sharpest psychological critique, its deepest power lies in calibrating the exact balance between reader trust and critical scrutiny according to each form's ethical contract.",
      markScheme: [
        {
          point: "Engages explicitly with 'To what extent', framing a balanced evaluative stance rather than binary agreement",
          keywords: ["qualify", "distinguish", "evaluate", "balance", "proposition"],
        },
        {
          point: "Analyses free indirect discourse in prose fiction as double-voiced irony exposing self-deception",
          keywords: ["free indirect", "double-voiced", "hubris", "rebuke", "rationalisations"],
        },
        {
          point: "Analyses unreliable first-person fiction via euphemism, contradiction, and gap between claim and observation",
          keywords: ["unreliable", "euphemism", "contradictions", "repression", "dramatic irony"],
        },
        {
          point: "Contrasts fiction's invented narrator with non-fiction's ethical autobiographical pact (Lejeune)",
          keywords: ["autobiographical pact", "lejeune", "ethical", "contract", "invented"],
        },
        {
          point: "Explains memoir's split self (experiencing vs retrospective) as a non-fiction analogue of narrative friction",
          keywords: ["retrospective", "experiencing", "split", "correct", "naive"],
        },
        {
          point: "Analyses non-fiction epistemic hedging, structural turns, or travelogue observer's gaze",
          keywords: ["hedging", "structural turn", "observer's gaze", "archival", "self-irony"],
        },
        {
          point: "Qualifies the thesis with counter-cases where stark directness, external focalisation, or parataxis succeeds without deception",
          keywords: ["paratactic", "directness", "external", "unadorned", "lucidity"],
        },
        {
          point: "Maintains integrated cross-form comparison throughout rather than siloed summaries",
          keywords: ["similarly", "likewise", "nevertheless", "conversely"],
        },
        {
          point: "Adheres strictly to non-prescriptive policy (tagging any illustrative works appropriately)",
          keywords: ["example text", "mechanism", "techniques", "form"],
        },
        {
          point: "Reaches a perceptive synthesis calibrating trust versus scrutiny across literary forms",
          keywords: ["calibrating", "scrutiny", "unmasking", "shattering"],
        },
      ],
      markbands: bands10("evaluative cross-form synthesis on perspective and narrative friction"),
    },
    {
      id: "5-prose-fiction-nonfiction-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "prose-time-setting-symbolism",
      marks: 10,
      question:
        "**Mini Paper 1 Guided Analysis (Unseen Prose Fiction)**\n\nRead this unseen prose extract:\n\n> *They had agreed not to wake the children until the lorry reached the highway, yet every gravel stone beneath the tyres seemed to shout their departure across the orchard. In the passenger seat, Hana held the wrapped brass samovar against her ribs like a bruised infant. Three summers ago, steam had curled out of its spout while cousins argued loudly over chess on the veranda; now its copper belly stayed cold against her wool cardigan, smelling faintly of damp newspaper.\n> Could they really rent two rooms near the northern depot before winter set in? Surely the factory clerk had stamped the transfer slip properly — he had barely glanced up from his ledger, tapping his ash into a chipped saucer while muttering about queues. Beside her, Tomas stared straight down the headlight beam. He did not glance back at the lit upstairs window. He shifted into third gear. The orchard fence ended.*\n\n**Guiding Question:** How do **narrative perspective**, **temporal structure**, and **syntactic pacing** convey the psychological weight of forced departure? [10 marks]",
      hints: [
        "Organise around 3 conceptual threads: (1) symbolic domestic intimacy vs covert flight (hyper-audible gravel, cold samovar, analepsis); (2) unquoted interior panic via free indirect discourse & institutional indifference; (3) closing foil posture and brutal parataxis enacting irreversible severing.",
        "Notice the personification of gravel 'shouting' (guilt/secrecy) and the bodily simile 'like a bruised infant' applied to the heirloom samovar.",
        "Spot the shift into FID ('Could they really...', 'Surely the factory clerk...') followed by Tomas's external stoicism.",
        "Examine the final four stripped-down paratactic sentences enacting emotional numbness and finality.",
      ],
      modelAnswer:
        "This extract dramatises forced displacement not through melodramatic speeches, but through a finely calibrated interplay of sensory symbolism, temporal rupture, and collapsing syntax. Opening *in medias res* during a covert predawn exit, the prose immediately links secrecy to hyper-vigilant guilt: personifying driveway gravel as 'shouting' externalises Hana's dread of disturbing fragile domestic sleep. Against this hush, the wrapped brass samovar operates as an evolving focal symbol whose visceral simile ('like a bruised infant') fuses cultural heirloom with wounded maternal tenderness. A crisp, sentence-long analepsis momentarily restores sunlit communal abundance — curling steam, boisterous games, open veranda air — before the abrupt temporal pivot ('now') drops the reader back into cold metal and muffled newsprint, turning past warmth into a physical ache pressed against Hana's ribs.\n\nParagraph two tightens psychic distance sharply, slipping without reporting tags into Hana's frantic free indirect discourse. Anxious speculation ('Could they really...') and fragile modal reassurance ('Surely') register precarious survival, immediately undermined by the recalled bureaucratic encounter: the clerk's careless ash-tapping and averted eyes convey chilling institutional indifference toward uprooted lives. Structurally, Tomas then acts as a muted behavioural foil to Hana's racing interiority: external focalisation strips away his inner thoughts completely, recording only rigid forward gaze and refusal to look toward the glowing upstairs bedroom.\n\nFinally, syntactic architecture seals the emotional devastation. Moving swiftly out of Hana's winding anxious clauses, the last four sentences fracture into stark, unsubordinated parataxis culminating in a brutal three-word cadence ('The orchard fence ended'). Stripping away all conjunctions and commentary mirrors numbness settling over grief, rendering the physical boundary of the property an irreversible threshold into exile.",
      markScheme: [
        {
          point: "Establishes a conceptual thesis uniting symbolism, temporal rupture, and syntactic pacing around forced departure",
          keywords: ["displacement", "calibrated", "rupture", "collapsing", "exile"],
        },
        {
          point: "Notes *in medias res* covert opening and personification of gravel expressing guilty hyper-vigilance",
          keywords: ["in medias res", "covert", "hyper-vigilant", "personif", "guilt"],
        },
        {
          point: "Analyses the samovar as an evolving symbol paired with the wounded maternal simile",
          keywords: ["evolving", "maternal", "tenderness", "visceral", "wounded"],
        },
        {
          point: "Examines the brief analepsis contrasting communal warmth against the sudden 'now' of cold metal",
          keywords: ["analepsis", "abundance", "boisterous", "muffled", "ache"],
        },
        {
          point: "Identifies tightening psychic distance into free indirect discourse via unquoted questions and modal 'Surely'",
          keywords: ["free indirect", "psychic distance", "modal", "precarious", "reassurance"],
        },
        {
          point: "Interprets the clerk's careless gestures as chilling institutional indifference",
          keywords: ["bureaucratic", "indifference", "careless", "averted", "institutional"],
        },
        {
          point: "Analyses Tomas as an externally focalised foil whose stoic refusal to look back contrasts with Hana's panic",
          keywords: ["foil", "external focalis", "stoic", "rigid", "interiority"],
        },
        {
          point: "Analyses the closing plunge into stark parataxis enacting emotional numbness",
          keywords: ["parataxis", "unsubordinated", "numbness", "fracture", "conjunctions"],
        },
        {
          point: "Evaluates the blunt final three-word clause turning the fence into an irreversible threshold",
          keywords: ["three-word", "threshold", "irreversible", "boundary", "cadence"],
        },
        {
          point: "Demonstrates sustained Band 5 conceptual organisation and seamless micro-quotation",
          keywords: ["melodramatic", "understated", "devastation", "severing"],
        },
      ],
      markbands: bands10("Paper 1 unseen prose fiction analysis"),
    },
  ],
};
