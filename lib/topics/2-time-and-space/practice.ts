import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "2-time-and-space-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "production-reception-contexts",
      question:
        "A critic analyses how nineteenth-century theatre licensing laws restricted what playwrights could stage openly in London in 1885. Which contextual lens is being examined?",
      options: [
        "Context of production, focusing on legal and institutional constraints active during creation.",
        "Context of reception, focusing on twenty-first-century stage directors revising older scripts.",
        "Intentional fallacy, assuming playwrights secretly resented theatre licensing committees.",
        "Domestication, adapting foreign stage directions into colloquial British English.",
      ],
      answerIndex: 0,
      explanation:
        "Examining censorship and theatre licensing laws in 1885 investigates the **context of production**—the material, legal, and cultural conditions shaping how a work was constructed in its era.",
      hints: [
        "Ask whether the licensing laws influenced the text's original creation or a later audience's reading.",
        "Conditions shaping a work when it was written belong to production.",
      ],
    },
    {
      id: "2-time-and-space-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "works-in-translation",
      question:
        "State the **minimum** number of works in translation that an IB English A: Literature **Standard Level (SL)** candidate must study across the course.",
      answer: {
        type: "number",
        value: 3,
        display: "3",
      },
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "4 is the minimum number of works in translation at HL (or the minimum original English works at SL). At SL, the translated-work minimum is 3.",
        },
        {
          spec: { type: "number", value: 1 },
          feedback: "1 translated work is used in the Individual Oral, but the full SL course requires at least 3 works in translation.",
        },
      ],
      solution: [
        "Under IB Diploma English A: Literature (FA2021), an SL course requires a minimum of 9 works in total.",
        "Those 9 works comprise at least 4 originally written in English (PRL), at least **3 works in translation (PRL)**, and 2 free-choice works.",
      ],
      hints: [
        "Remember the SL 9-work split: 4 original English + ? translated + 2 free choice.",
      ],
    },
    {
      id: "2-time-and-space-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "works-in-translation",
      question:
        "When translating a Brazilian short story into English, a translator replaces a regional festival dish and local idiom with 'fish and chips' and 'raining cats and dogs' so the story reads like native British prose. Which translation strategy is this?",
      options: [
        "Foreignisation, because retaining British slang introduces unfamiliar cultural markers.",
        "Domestication, because source-culture references are replaced with fluent, familiar target-culture equivalents.",
        "Paratextual framing, because idioms are explained through scholarly footnotes at the page bottom.",
        "Literal glossing, because every Brazilian word is translated word for word without adjusting grammar.",
      ],
      answerIndex: 1,
      explanation:
        "Swapping culturally specific Brazilian food and idioms for familiar British equivalents exemplifies Lawrence Venuti's **domestication**: prioritising effortless target-culture fluency at the cost of cultural specificity.",
      hints: [
        "Notice how every Brazilian cultural marker has been smoothed into a familiar British equivalent.",
        "Recall Venuti's two poles: one keeps foreign texture visible, the other makes the text feel completely native.",
      ],
    },
    {
      id: "2-time-and-space-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "context-without-fallacy",
      question:
        "Identify the critical fallacy named by W. K. Wimsatt and Monroe Beardsley (1946) when a student claims: *“The poet clearly wanted readers to reject industrial progress.”*",
      answer: {
        type: "text",
        accept: ["intentional fallacy", "the intentional fallacy"],
        display: "intentional fallacy",
      },
      traps: [
        {
          spec: { type: "text", accept: ["biographical fallacy", "the biographical fallacy"] },
          feedback: "Biographical fallacy maps life events onto a speaker/character; claiming to know what the writer privately 'wanted' or 'meant' is specifically the intentional fallacy.",
        },
        {
          spec: { type: "text", accept: ["pathetic fallacy", "the pathetic fallacy"] },
          feedback: "Pathetic fallacy attributes human emotions to weather or nature, whereas Wimsatt and Beardsley critiqued appealing to authorial intention.",
        },
      ],
      solution: [
        "Phrases such as 'clearly wanted readers to' treat the author's private mental design as the determinant of meaning.",
        "Wimsatt and Beardsley named this error the **intentional fallacy**.",
      ],
      hints: [
        "Focus on the verb 'wanted'—it tries to read the author's private purpose.",
      ],
    },
    {
      id: "2-time-and-space-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "historical-cultural-lenses",
      question:
        "Read this unseen line:\n\n> *“On the narrow footbridge between the border gates, she held a brass house-key from a city whose street names had been repainted twice.”*\n\nWhich spatial archetype best describes this setting?",
      options: [
        "Closed domestic interior, emphasising comfortable bourgeois privacy inside a family parlour.",
        "Pastoral sanctuary, idealising timeless rural harvests undisturbed by political history.",
        "Borderland or liminal space, suspending displaced identity across shifting political thresholds.",
        "Metropolitan office space, dramatising corporate routine inside an industrial skyscraper.",
      ],
      answerIndex: 2,
      explanation:
        "A **footbridge between border gates**, paired with a house-key to repainted streets, constructs a classic **borderland / liminal space** where citizenship, memory, and place remain suspended in transit.",
      hints: [
        "Note the architectural position: 'between the border gates'.",
        "Which spatial lens examines thresholds, frontiers, and cultural displacement?",
      ],
    },
    {
      id: "2-time-and-space-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "works-in-translation",
      question:
        "An **HL** student studies the exact IB minimum of **13 works**, including **4 works in translation**. They choose **1 translated work** for the Individual Oral and **1 different translated work** for the HL Essay. Under the non-overlap rule, how many translated works remain eligible for **Paper 2**?",
      answer: {
        type: "number",
        value: 2,
        display: "2",
      },
      traps: [
        {
          spec: { type: "number", value: 3 },
          feedback: "Check BOTH non-overlap deductions: 1 translated work is locked into the IO AND 1 separate translated work is locked into the HL Essay (4 − 2 = 2).",
        },
        {
          spec: { type: "number", value: 4 },
          feedback: "Under the IB non-overlap rule, works used in the IO or HL Essay cannot be reused in Paper 2.",
        },
      ],
      solution: [
        "Total translated works studied = 4.",
        "Subtract 1 translated work reserved for the Individual Oral and 1 distinct translated work reserved for the HL Essay: 4 − 1 − 1 = **2**.",
        "Therefore, 2 translated works remain eligible for Paper 2.",
      ],
      hints: [
        "Remember the strict IB non-overlap rule across IO, HL Essay, and Paper 2.",
        "Start with 4 translated works and subtract every translated work already committed to coursework.",
      ],
    },
    {
      id: "2-time-and-space-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "context-without-fallacy",
      question:
        "Read this unseen line from a 1920s city lyric: *“Our hours are punched in brass / before the ink dries on our names.”* Which sentence best exemplifies the **Anchor-in-Craft Chain**?",
      options: [
        "Factory workers in the 1920s suffered strict clocking-in systems and low pay across urban centres.",
        "The poet clearly despised timecards because he worked long shifts as a young clerk before publishing.",
        "The phrase 'punched in brass' uses hard metal imagery to show that clocks were commonly made of brass.",
        "Having human 'hours' mechanically 'punched in brass' dramatises industrial time-discipline reducing personal identity to stamped labour.",
      ],
      answerIndex: 3,
      explanation:
        "Leading with the exact image (**“punched in brass”**), explaining its dehumanising mechanical effect, and connecting it to **industrial time-discipline** avoids history dumps and biographical guessing while analysing craft.",
      hints: [
        "Trace the three-step chain: Micro Textual Choice → Literary Effect → Cultural Tension.",
        "Eliminate detached history summaries, literal paraphrasing, and biographical speculation.",
      ],
    },
    {
      id: "2-time-and-space-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "production-reception-contexts",
      question:
        "What term describes comparing how **two different cultural communities** interpret the same newly published novel during the **exact same year** (as opposed to tracking changes across centuries)?",
      answer: {
        type: "text",
        accept: ["synchronic", "synchronic reception", "synchronic reading"],
        display: "synchronic reception",
      },
      traps: [
        {
          spec: { type: "text", accept: ["diachronic", "diachronic reception", "diachronic reading"] },
          feedback: "Diachronic reception tracks changes *across time/centuries*; comparing audiences at the *same historical moment* is synchronic reception.",
        },
      ],
      solution: [
        "Diachronic reception traces shifts across different historical eras.",
        "Comparing distinct cultural responses at the same point in time is **synchronic reception**.",
      ],
      hints: [
        "Use the Greek prefix meaning 'same time' (as in *synchronise*).",
        "Pair that adjective with 'reception'.",
      ],
    },
    {
      id: "2-time-and-space-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      marks: 3,
      commandTerm: "Explain",
      guideRef: "works-in-translation",
      question:
        "Read two English translations of an imagined farewell line originally using a formal kinship honorific:\n\n- **Version 1:** *“Goodbye, Uncle, keep well.”*\n- **Version 2:** *“Farewell, Respected Elder Uncle; may the autumn wind spare your courtyard.”*\n\nExplain how the shift from Version 1 to Version 2 illustrates Lawrence Venuti's translation spectrum and alters cultural nuance.",
      modelAnswer:
        "Version 1 exemplifies domestication by compressing the greeting into brief, colloquial modern English, sacrificing cultural ceremony for everyday fluency. By contrast, Version 2 moves toward foreignisation, preserving hierarchical deference through the elevated title 'Respected Elder Uncle' alongside a blessing rooted in seasonal household imagery ('autumn wind', 'courtyard'). Consequently, Version 2 signals formal generational respect and poetic ritual that Version 1 flattens into casual speech.",
      markScheme: [
        {
          point: "Identifies Version 1 as domestication (prioritising colloquial fluency/brevity) and Version 2 as foreignisation.",
          keywords: ["domestication", "foreignisation", "foreignization", "domesticate", "foreignise"],
        },
        {
          point: "Analyses how Version 2 preserves social hierarchy / formal deference via the elevated honorific register.",
          keywords: ["hierarchy", "hierarchical", "deference", "respect", "register", "elevated"],
        },
        {
          point: "Evaluates the figurative or ritual nuance gained via the seasonal/courtyard blessing (or lost/flattened in Version 1).",
          keywords: ["courtyard", "seasonal", "ritual", "ceremony", "flattens", "flattened"],
        },
      ],
      hints: [
        "Name both poles of Lawrence Venuti's translation spectrum explicitly.",
        "Comment on both the formal register of address AND the cultural/poetic imagery in Version 2.",
      ],
    },
    {
      id: "2-time-and-space-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      marks: 4,
      commandTerm: "Analyse",
      guideRef: "context-without-fallacy",
      question:
        "Read this unseen sentence from an 1890s colonial club sketch:\n\n> *“Beneath the whirring punkah fan, the commissioner signed the land decree without lifting his gaze from the imported cricket scores.”*\n\nRewrite a weak biographical claim (*“The author hated colonial commissioners and wanted readers to feel outraged”*) into a 4-mark, fallacy-free analytical response anchored in textual choices.",
      modelAnswer:
        "Rather than speculating about authorial hatred, close reading shows how spatial and behavioural juxtaposition dramatises imperial detachment. The mechanical rhythm of the 'whirring punkah fan' situates privilege inside local labour and tropical climate, yet the commissioner signs a consequential 'land decree' while absorbed in 'imported cricket scores'. By contrasting bureaucratic authority over indigenous territory against leisurely distraction imported from the metropole, the prose ironises administrative indifference and exposes the casual arrogance of colonial power without relying on mind-reading.",
      markScheme: [
        {
          point: "Eliminates intentional/biographical speculation and frames meaning through what the prose itself enacts.",
          keywords: ["dramatises", "dramatizes", "exposes", "ironises", "ironizes", "enacts"],
        },
        {
          point: "Analyses the juxtaposition between signing the consequential 'land decree' and reading 'imported cricket scores'.",
          keywords: ["juxtaposition", "contrasting", "contrast", "distraction", "indifference"],
        },
        {
          point: "Evaluates the cultural/spatial significance of 'imported' leisure or the 'punkah fan' marking imperial privilege/detachment.",
          keywords: ["metropole", "detachment", "privilege", "arrogance", "labour"],
        },
        {
          point: "Connects specific embedded textual choices smoothly to wider imperial/colonial power dynamics.",
          keywords: ["bureaucratic", "territor", "authority", "imperial", "colonial power"],
        },
      ],
      hints: [
        "Avoid verbs like 'hated' or 'wanted'—make the prose and its juxtapositions your subject.",
        "Contrast the weight of the 'land decree' against the triviality of 'imported cricket scores' beneath the 'punkah fan'.",
      ],
    },
  ],
  papers: [
    {
      id: "2-time-and-space-p1",
      title: "Practice Paper 1: Production, Reception, Symbolic Space & Translation",
      level: "SL",
      questions: [
        {
          id: "2-time-and-space-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "production-reception-contexts",
          question:
            "Identify the three-word phrase coined by theorist Hans Robert Jauss for the shared genre norms and cultural assumptions an audience brings to a literary work.",
          answer: {
            type: "text",
            accept: ["horizon of expectations", "horizons of expectations", "the horizon of expectations"],
            display: "horizon of expectations",
          },
          traps: [
            {
              spec: { type: "text", accept: ["context of reception", "context of production"] },
              feedback: "Those are broad contextual categories; Jauss's specific three-word phrase starts with 'horizon…'.",
            },
          ],
          solution: [
            "Hans Robert Jauss introduced **horizon of expectations** (*Erwartungshorizont*) to describe how readers evaluate texts against inherited literary and moral frameworks.",
          ],
          hints: [
            "Think of a visual metaphor for the outer edge of what an audience anticipates.",
          ],
        },
        {
          id: "2-time-and-space-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "production-reception-contexts",
          question:
            "A scholar compares how Elizabethan theatregoers reacted to a play in 1605 with how twenty-first-century directors stage the same play today. Is this **diachronic** or **synchronic** reception?",
          answer: {
            type: "text",
            accept: ["diachronic", "diachronic reception"],
            display: "diachronic",
          },
          traps: [
            {
              spec: { type: "text", accept: ["synchronic", "synchronic reception"] },
              feedback: "Synchronic compares audiences at the same historical time; tracking changes across four centuries is diachronic.",
            },
          ],
          solution: [
            "Comparing audience reception across distinct historical centuries (1605 vs the twenty-first century) is **diachronic** reception.",
          ],
          hints: [
            "The Greek prefix *dia-* means 'across/through' (here, across time).",
          ],
        },
        {
          id: "2-time-and-space-p1-q03",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "works-in-translation",
          question:
            "In the IB English A: Literature Individual Oral (both SL and HL), what is the maximum number of lines permitted in each of your two selected extracts (one English, one translated)?",
          answer: {
            type: "number",
            value: 40,
            display: "40 lines",
          },
          traps: [
            {
              spec: { type: "number", value: 10 },
              feedback: "10 is the maximum number of bullet points on your IO outline (and the prepared talk duration in minutes), whereas each extract may be up to 40 lines.",
            },
            {
              spec: { type: "number", value: 30 },
              feedback: "Each IO extract may be up to 40 lines long (not 30).",
            },
          ],
          solution: [
            "Each unmarked extract brought into the Individual Oral (one from the original English work and one from the translated work) must not exceed **40 lines**.",
          ],
          hints: [
            "Recall the Learner Portfolio logging rule for Individual Oral extract selection.",
          ],
        },
        {
          id: "2-time-and-space-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "works-in-translation",
          question:
            "What term denotes the framing material around a translated literary text—such as the translator's preface, introduction, footnotes, and glossary?",
          answer: {
            type: "text",
            accept: ["paratext", "paratextual material", "paratexts"],
            display: "paratext",
          },
          traps: [
            {
              spec: { type: "text", accept: ["subtext"] },
              feedback: "Subtext is unspoken meaning beneath spoken dialogue; framing apparatus around a printed edition is paratext.",
            },
          ],
          solution: [
            "Prefaces, footnotes, and glossaries surrounding the main text are called **paratext** (from Greek *para-*, meaning 'beside').",
          ],
          hints: [
            "It combines the Greek prefix *para-* ('beside') with 'text'.",
            "Think of notes sitting beside or around the main literary work.",
          ],
        },
        {
          id: "2-time-and-space-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "historical-cultural-lenses",
          question:
            "Read this unseen sentence:\n\n> *“Behind the drawn velvet curtains, Aunt Clara counted every carriage that passed, rehearsing which callers were fit to cross her parlour rug.”*\n\nState the primary symbolic spatial archetype (**domestic**, **urban**, **colonial**, or **borderland**) dramatised here.",
          answer: {
            type: "text",
            accept: ["domestic", "domestic space"],
            display: "domestic",
          },
          traps: [
            {
              spec: { type: "text", accept: ["urban", "urban space"] },
              feedback: "Although carriages pass outside, the focalisation sits behind drawn velvet curtains policing entry to a private parlour—classic domestic space.",
            },
          ],
          solution: [
            "Drawn curtains, a guarded parlour rug, and policing social callers exemplify **domestic** space functioning as a stage for class propriety and surveillance.",
          ],
          hints: [
            "Look at the indoor boundaries: drawn velvet curtains and a guarded parlour rug.",
            "Choose one of the four archetypes: domestic, urban, colonial, or borderland.",
          ],
        },
        {
          id: "2-time-and-space-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "works-in-translation",
          question:
            "A school designs an **HL** syllabus with **14 works** in total: **6** originally in English (PRL), **5** in translation (PRL), and **3** free-choice works (all in English). After an HL student commits **1 English + 1 translated work** to the IO and **1 English work** to the HL Essay, how many **total works** remain eligible for Paper 2?",
          answer: {
            type: "number",
            value: 11,
            display: "11",
          },
          traps: [
            {
              spec: { type: "number", value: 12 },
              feedback: "Remember to subtract BOTH the 2 IO works AND the 1 HL Essay work (14 − 3 = 11).",
            },
            {
              spec: { type: "number", value: 10 },
              feedback: "Count carefully: 14 total − 2 (IO) − 1 (HL Essay) = 11 remaining works.",
            },
          ],
          solution: [
            "Total studied works = 14.",
            "Works locked by non-overlap rule: 2 (Individual Oral) + 1 (HL Essay) = 3 works.",
            "Remaining eligible works for Paper 2: 14 − 3 = **11**.",
          ],
          hints: [
            "Start with the total syllabus size (14) and apply the strict non-overlap rule.",
            "Subtract 2 for the Individual Oral and 1 for the HL Essay.",
          ],
        },
        {
          id: "2-time-and-space-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "works-in-translation",
          question:
            "Using Lawrence Venuti's terminology, identify the translation strategy in which a translator retains culturally specific seasonal metaphors, untranslated kinship nouns, and source-language cadence rather than substituting familiar English idioms.",
          answer: {
            type: "text",
            accept: ["foreignisation", "foreignization", "foreignising", "foreignizing"],
            display: "foreignisation",
          },
          traps: [
            {
              spec: { type: "text", accept: ["domestication", "domesticating"] },
              feedback: "Domestication replaces foreign elements with familiar target-language idioms; retaining source-culture markers is foreignisation.",
            },
          ],
          solution: [
            "Preserving source-culture nouns, idioms, and cadence so the reader senses cultural distance is **foreignisation** (also spelled *foreignization*).",
          ],
          hints: [
            "Recall the opposite pole from domestication on Venuti's spectrum.",
            "It keeps 'foreign' cultural texture visibly intact.",
          ],
        },
        {
          id: "2-time-and-space-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 3,
          commandTerm: "Distinguish",
          guideRef: "production-reception-contexts",
          question:
            "Distinguish between **context of production** and **context of reception**, illustrating your answer with one specific way a literary work's meaning can shift across time.",
          modelAnswer:
            "Context of production encompasses the historical, political, publishing, and cultural conditions shaping a work when it was written and initially circulated. Context of reception refers to how later or culturally different audiences reinterpret the same text through altered moral and aesthetic horizons. For instance, in Henrik Ibsen's *A Doll's House* [Example text — not a set text], Nora's exit shocked 1879 audiences bound by rigid patriarchal duty—even provoking a forced alternative ending in Germany—whereas contemporary audiences frequently read her slamming door as a decisive assertion of autonomy.",
          markScheme: [
            {
              point: "Accurately defines context of production (historical, cultural, or publishing conditions shaping creation).",
              keywords: ["historical", "cultural", "publishing", "written", "created", "creation", "circulated"],
            },
            {
              point: "Accurately defines context of reception (later or cross-cultural audiences reinterpreting through shifted horizons).",
              keywords: ["later", "reinterpret", "audiences", "horizons", "contemporary", "cross-cultural"],
            },
            {
              point: "Provides a concrete, accurate illustration showing how altered moral/cultural expectations reshape reception.",
              keywords: ["autonomy", "patriarchal", "shocked", "colonial", "postcolonial", "alternative ending", "slamming"],
            },
          ],
          hints: [
            "Define both terms clearly in separate contrasting clauses.",
            "Include one concrete example (remembering to tag any named real work `[Example text — not a set text]`) showing how reception shifts.",
          ],
        },
        {
          id: "2-time-and-space-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Explain",
          guideRef: "works-in-translation",
          question:
            "Explain two specific literary features that commonly undergo **loss or transformation** when a play or poem is translated into English, and explain how an IB reader should respond analytically.",
          modelAnswer:
            "First, formal and intimate address systems—such as pronoun distinctions like French *vous/tu* or hierarchical kinship titles—often flatten into a single English 'you', obscuring sudden moments of intimacy or defiance unless translators compensate through diction or footnotes. Second, acoustic craft such as rhyme, syllabic metre, and wordplay rarely maps identically across languages, forcing trade-offs between rhythmic fidelity and literal sense. An IB reader should avoid guessing about an unread source language; instead, consult the edition's paratext (preface and glossary) and evaluate how the visible register, retained terms, and cadence in the English edition construct tone.",
          markScheme: [
            {
              point: "Explains register/pronoun/honorific loss or flattening when translated into English.",
              keywords: ["pronoun", "honorific", "kinship", "flatten", "register", "vous", "intimate"],
            },
            {
              point: "Explains acoustic, rhythmic, metrical, or pun/idiom trade-offs across languages.",
              keywords: ["rhyme", "metre", "meter", "wordplay", "cadence", "idiom", "rhythmic"],
            },
            {
              point: "Advises consulting paratext (translator's preface, notes, glossary) or analysing visible textual choices.",
              keywords: ["paratext", "preface", "footnote", "glossary", "visible"],
            },
            {
              point: "Warns against speculative guessing about a source language the student cannot read.",
              keywords: ["speculat", "guess", "unread", "cannot read", "visible"],
            },
          ],
          hints: [
            "Choose two distinct linguistic layers: e.g., pronouns/register AND metre/idioms.",
            "Finish with practical IB methodology: what should you consult, and what must you never guess?",
          ],
        },
        {
          id: "2-time-and-space-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Analyse",
          guideRef: "historical-cultural-lenses",
          question:
            "Read this unseen prose miniature:\n\n> *“The veranda wrapped the house in whitewashed railings where guests sipped iced lime; down by the charcoal shed, the compound wall ran out of paint and met the thorn-hedge directly.”*\n\nAnalyse how spatial contrast in this sentence constructs class and cultural hierarchy.",
          modelAnswer:
            "Spatial juxtaposition turns architecture into a visible map of privilege and exclusion. The elevated, manicured 'veranda' enclosed by 'whitewashed railings' stages effortless leisure ('sipped iced lime'), signalling polished hospitality reserved for social insiders. By contrast, moving downward to the utilitarian 'charcoal shed', maintenance abruptly stops—the wall 'ran out of paint' before colliding with an untamed 'thorn-hedge'. That sharp transition from curated aesthetic order to neglected raw labour exposes how domestic respectability depends upon hiding working spaces out of polite sight.",
          markScheme: [
            {
              point: "Identifies spatial juxtaposition / vertical or boundary contrast between the veranda and the charcoal shed.",
              keywords: ["juxtaposition", "elevated", "transition", "downward", "boundary", "visible map"],
            },
            {
              point: "Analyses diction/imagery of privilege and curated display ('whitewashed railings', 'iced lime', leisure).",
              keywords: ["privilege", "leisure", "curated", "hospitality", "manicured", "insiders"],
            },
            {
              point: "Analyses contrasting imagery of neglect and raw utility ('ran out of paint', 'thorn-hedge', labour).",
              keywords: ["neglect", "utilitarian", "labour", "labor", "untamed", "hiding"],
            },
            {
              point: "Draws an interpretive conclusion linking architectural finish to concealed class/social hierarchy.",
              keywords: ["exclusion", "respectability", "depend", "social", "concealed"],
            },
          ],
          hints: [
            "Track the visual camera movement from the whitewashed veranda down to the unpainted wall.",
            "Ask what the abrupt end of whitewash signifies about whose comfort matters.",
          ],
        },
        {
          id: "2-time-and-space-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 6,
          commandTerm: "Analyse",
          guideRef: "production-reception-contexts",
          question:
            "Read this unseen 1874 domestic-advice excerpt:\n\n> *“A wife's finest ornament is an even brow; let her disputes dissolve before the dinner bell, lest servants catch a crack in the porcelain of household peace.”*\n\nAnalyse how both an 1874 context of production and a contemporary context of reception illuminate the figurative choices and cultural tensions in this passage.",
          modelAnswer:
            "Through tightly compressed domestic metaphors, the passage reveals an anxious performance of bourgeois order that shifts strikingly across historical horizons. Within an 1874 context of production shaped by rigid middle-class decorum, describing composure as an 'ornament' and invoking the disciplined chime of the 'dinner bell' aligned with prevailing ideals of genteel self-restraint and maternal harmony. Yet even inside that original phrasing, the fragility of 'porcelain' betrays latent vulnerability: harmony is pictured not as organic affection, but as brittle, decorative ceramic constantly threatened by a visible 'crack'. Under a contemporary context of reception attentive to gender and class power, the imperative 'let her disputes dissolve' exposes asymmetric emotional labour—demanding female silence specifically so observing 'servants' witness an unbroken facade of upper-class authority. Thus, shifting moral horizons do not impose foreign meanings onto the passage; they amplify the tension between polished appearance and suppressed conflict already coded into its brittle imagery.",
          markScheme: [
            {
              point: "Situates the extract in its 1874 production horizon (bourgeois decorum, genteel harmony, social order).",
              keywords: ["bourgeois", "decorum", "genteel", "restraint", "middle-class", "ideal"],
            },
            {
              point: "Analyses the metaphor 'ornament' (reductive decorative idealisation of female composure).",
              keywords: ["decorative", "reductive", "composure", "objectif", "facade"],
            },
            {
              point: "Analyses the extended metaphor of 'crack in the porcelain' exposing brittle fragility beneath polish.",
              keywords: ["brittle", "fragil", "ceramic", "vulnerable", "vulnerability", "polished"],
            },
            {
              point: "Examines contemporary reception regarding gendered emotional labour or silenced disagreement ('let her disputes dissolve').",
              keywords: ["emotional labour", "asymmetric", "silenc", "suppressed", "gender"],
            },
            {
              point: "Evaluates the class surveillance angle—maintaining an unbroken facade specifically before observing servants.",
              keywords: ["surveillance", "upper-class", "authority", "class", "observing", "performance"],
            },
            {
              point: "Synthesises both horizons by showing reception activates tensions already embedded in textual imagery.",
              keywords: ["latent", "coded", "amplify", "embedded", "horizons", "tension"],
            },
          ],
          markbands: [
            {
              band: "Band 1 (Limited)",
              marks: [1, 2],
              descriptor: "Paraphrases the extract or offers generalised remarks about Victorian gender roles without close analysis of imagery.",
              indicators: ["Mentions gender inequality vaguely", "Minimal quotation or figurative evaluation"],
            },
            {
              band: "Band 2 (Adequate)",
              marks: [3, 4],
              descriptor: "Distinguishes past and modern responses clearly and comments on one or two metaphors ('ornament', 'porcelain'), though links remain partly descriptive.",
              indicators: ["Addresses both 1874 and modern lenses", "Identifies basic figurative contrast"],
            },
            {
              band: "Band 3 (Good–Perceptive)",
              marks: [5, 6],
              descriptor: "Perceptively integrates production and reception horizons directly through close evaluation of fragile imagery, class performance before servants, and latent textual tension.",
              indicators: ["Unpacks brittle 'porcelain' + 'ornament' + class surveillance", "Shows modern reception activates existing textual cracks"],
            },
          ],
          hints: [
            "Examine three textual anchors: 'ornament', 'let her disputes dissolve', and 'crack in the porcelain' before 'servants'.",
            "Ask what an 1874 reader sees as admirable propriety versus what a modern reader spots about brittle class and gender performance.",
          ],
        },
        {
          id: "2-time-and-space-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 6,
          commandTerm: "Compare and contrast",
          guideRef: "works-in-translation",
          question:
            "Compare and contrast two English translations of an imagined four-line exile poem (literal gloss: *“Rain beats drum-skin on tin eaves / elder-sister folds salt-stained scarf / river forgets our village surname / yet lantern-smoke remembers”*):\n\n- **Translation 1:** *“Rain hammers on our metal roof / My sister folds a faded scarf / The river has erased our hometown / Yet a spark of memory survives.”*\n- **Translation 2:** *“Rain beats taut drum-skin on tin eaves / Elder Sister folds the salt-stained scarf / The river forgets our village surname / Yet hearth-smoke still remembers.”*\n\nCompare and contrast how each translator's strategies shape imagery, cultural register, and emotional resonance.",
          modelAnswer:
            "Both translations convey the core arc of displacement and enduring recollection, yet they occupy opposing ends of Venuti's spectrum and construct sharply different poetic voices. Translation 1 leans decisively toward domestication: swapping 'drum-skin' for the conventional verb 'hammers', generalising 'salt-stained' into 'faded', and converting concrete 'lantern-smoke' into the abstract cliché 'a spark of memory'. While this guarantees immediate Anglophone accessibility, it erodes both sensory specificity and cultural texture. By contrast, Translation 2 pursues disciplined foreignisation. Retaining the formal kinship title 'Elder Sister' preserves generational hierarchy absent from plain 'My sister', while 'salt-stained' evokes coastal labour or dried tears rather than passive wear. Equally striking is the shift from 'erased our hometown' to 'forgets our village surname': personifying the river and linking place to patrilineal 'surname' frames exile as genealogical rupture, balanced in the closing volta by tactile 'hearth-smoke' rather than abstract consolation. Ultimately, Translation 1 prioritises smooth transparency whereas Translation 2 safeguards the acoustic tension, kinship codes, and sensory grief of the lyric.",
          markScheme: [
            {
              point: "Positions Translation 1 as domestication and Translation 2 as foreignisation along Venuti's spectrum.",
              keywords: ["domestication", "foreignisation", "foreignization", "venuti", "spectrum"],
            },
            {
              point: "Analyses register and kinship shift ('My sister' vs formal generational hierarchy in 'Elder Sister').",
              keywords: ["kinship", "hierarchy", "generational", "elder", "register"],
            },
            {
              point: "Contrasts tactile/sensory diction ('salt-stained', 'drum-skin') against flattened generalisations ('faded', 'hammers').",
              keywords: ["sensory", "tactile", "cliché", "flattened", "erodes", "coastal"],
            },
            {
              point: "Analyses the cultural depth of 'village surname' (genealogy/lineage/personification) vs generic 'hometown'.",
              keywords: ["genealog", "lineage", "patrilineal", "personif", "rupture"],
            },
            {
              point: "Evaluates the closing image shift: concrete domestic 'hearth-smoke' vs abstract 'spark of memory'.",
              keywords: ["abstract", "concrete", "volta", "consolation", "hearth"],
            },
            {
              point: "Offers a balanced evaluative synthesis weighing fluency/accessibility against cultural and poetic fidelity.",
              keywords: ["accessibility", "transparency", "fidelity", "trade-off", "safeguards", "prioritises"],
            },
          ],
          markbands: [
            {
              band: "Band 1 (Limited)",
              marks: [1, 2],
              descriptor: "Lists surface word differences between the two versions with minimal analysis of cultural or poetic effect.",
              indicators: ["Spot-the-difference listing", "Little or no translation terminology"],
            },
            {
              band: "Band 2 (Adequate)",
              marks: [3, 4],
              descriptor: "Applies domestication/foreignisation accurately and analyses several lexical changes, with mostly clear comparison.",
              indicators: ["Mentions Venuti's terms", "Comments on imagery and sister/Elder Sister shift"],
            },
            {
              band: "Band 3 (Good–Perceptive)",
              marks: [5, 6],
              descriptor: "Delivers integrated point-by-point evaluation of kinship register, genealogical place-memory, acoustic/sensory compression, and fluency trade-offs.",
              indicators: ["Weaves both translations throughout", "Evaluates concrete image vs abstract cliché sharply"],
            },
          ],
          hints: [
            "Avoid writing all about Translation 1 then all about Translation 2—compare line-by-line craft shifts directly.",
            "Focus on four key hinges: 'drum-skin/hammers', 'Elder Sister/My sister', 'village surname/hometown', and 'hearth-smoke/spark of memory'.",
          ],
        },
        {
          id: "2-time-and-space-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 6,
          commandTerm: "Examine",
          guideRef: "historical-cultural-lenses",
          question:
            "Read this unseen urban prose extract:\n\n> *“At 06:15 the commuter overpass vibrated with identical leather briefcases; below its concrete piers, an unlicensed flower-seller stacked jasmine garlands on a milk crate, measuring the morning not by train chimes but by the heat rising off the tarmac.”*\n\nExamine how spatial layering and contrasting measures of time dramatise economic and cultural tension in modern city life.",
          modelAnswer:
            "Through vertical spatial architecture and competing temporal rhythms, the passage dramatises a fractured metropolis where formal global commerce hovers directly above informal survival. Vertically, the 'commuter overpass' elevates white-collar salaried labour into mechanical uniformity: synecdoche reduces individual citizens to 'identical leather briefcases', while the verb 'vibrated' blends human movement into industrial infrastructure. Beneath the cold 'concrete piers', however, the flower-seller occupies a precarious shadow economy signalled by improvised furniture ('a milk crate') and the bureaucratic tag 'unlicensed'. Equally revealing is the clash of timekeeping: overhead commuters obey standardised 'train chimes' (punctuated by the crisp military timestamp '06:15'), whereas the vendor reads lived bodily reality—'the heat rising off the tarmac'—to protect fragile, fragrant 'jasmine garlands'. Rather than romanticising poverty or demonising commuters, this layered tableau negotiates urban modernity's paradox: sensory cultural heritage persists intimately beside, yet structurally subordinated beneath, anonymising corporate velocity.",
          markScheme: [
            {
              point: "Analyses vertical spatial hierarchy (elevated overpass vs marginalised space beneath concrete piers).",
              keywords: ["vertical", "elevat", "beneath", "marginal", "subordinat", "hierarchy"],
            },
            {
              point: "Evaluates synecdoche/dehumanisation in 'identical leather briefcases' and mechanical 'vibrated'.",
              keywords: ["synecdoche", "uniformity", "mechanical", "anonymis", "infrastructure"],
            },
            {
              point: "Analyses economic precarity coded in 'unlicensed' and improvised 'milk crate'.",
              keywords: ["precari", "informal", "improvised", "bureaucratic", "shadow economy"],
            },
            {
              point: "Contrasts institutional clock-time ('06:15', 'train chimes') against embodied ecological time ('heat rising').",
              keywords: ["clock", "standardised", "standardized", "embodied", "timestamp", "temporal"],
            },
            {
              point: "Analyses sensory/cultural contrast of fragile fragrant 'jasmine garlands' against sterile concrete and tarmac.",
              keywords: ["sensory", "fragile", "heritage", "fragrant", "sterile"],
            },
            {
              point: "Reaches a nuanced synthesis about modern urban paradox without reductive preaching.",
              keywords: ["paradox", "metropolis", "velocity", "coexist", "negotiates", "fractured"],
            },
          ],
          markbands: [
            {
              band: "Band 1 (Limited)",
              marks: [1, 2],
              descriptor: "Summarises that rich commuters are above a poor flower-seller with minimal attention to literary devices.",
              indicators: ["Literal plot/scene summary", "No analysis of timekeeping or synecdoche"],
            },
            {
              band: "Band 2 (Adequate)",
              marks: [3, 4],
              descriptor: "Explains the vertical class contrast and notes contrasting references to clocks and heat with relevant quotations.",
              indicators: ["Identifies overpass vs piers contrast", "Links '06:15' and 'train chimes' to routine"],
            },
            {
              band: "Band 3 (Good–Perceptive)",
              marks: [5, 6],
              descriptor: "Perceptively evaluates vertical architecture, synecdoche, informal-economy diction, and competing temporal systems to unpack urban modernity.",
              indicators: ["Unpacks synecdoche + 'unlicensed' + embodied time", "Maintains nuanced non-binary evaluation"],
            },
          ],
          hints: [
            "Look at BOTH vertical space (above vs below the overpass) AND competing clocks (06:15/train chimes vs rising heat).",
            "Examine the synecdoche in 'identical leather briefcases' and the sensory contrast of 'jasmine garlands' on a 'milk crate'.",
          ],
        },
        {
          id: "2-time-and-space-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          marks: 8,
          commandTerm: "Analyse",
          guideRef: "historical-cultural-lenses",
          question:
            "Read this unseen dramatic opening:\n\n> *[A dimly lit colonial customs hall, 1951. Downstage left: a tall brass turnstile bolted to tiled floor, beside a chalk notice reading ‘DEPARTURES — INSPECTED BAGGAGE ONLY’. Upstage right: a single rattan suitcase tied with twine sits unopened beneath a ceiling fan turning slowly. Enter AUNTIE RUKMINI, pausing with one hand resting on the brass bar.]*\n> **OFFICER:** *Your surname changed twice on the registry, Madam. Which side of the line owns your stamp?*\n> **AUNTIE RUKMINI:** *(quietly)* *The mango tree in our yard did not move its roots when you drew your ink.*\n\nAnalyse how the playwright uses theatrical staging, symbolic space, and subtextual dialogue to dramatise postcolonial borderland identity.",
          modelAnswer:
            "Before a word is spoken, the playwright transforms the stage into a stark visual argument about institutional control versus displaced belonging. Spatially, the 'bolted' brass turnstile downstage left literalises bureaucratic gating, turning movement itself into a licensed privilege policed by the stark imperative of the chalk notice ('INSPECTED BAGGAGE ONLY'). Diagonally opposite, the solitary 'rattan suitcase tied with twine'—humble, hand-bound, and 'unopened'—embodies vulnerable migrant memory suspended in a classic borderland limbo, while the slowly turning ceiling fan evokes stagnant waiting rather than crisp administrative efficiency. Proxemically, Auntie Rukmini's pause with 'one hand resting on the brass bar' places her body directly on the threshold: neither wholly barred nor freely admitted, she physically incarnates liminality. The dialogue sharpens this spatial divide into an epistemological clash. Although the Officer's courteous title 'Madam' maintains procedural politeness, his clipped interrogative reduces human ancestry to clerical ownership ('Which side of the line owns your stamp?'), treating cartographic borders as absolute arbiters of identity. Auntie Rukmini's stage direction '(quietly)' refuses loud melodrama; instead, her organic metaphor of the 'mango tree' whose 'roots' ignore drawn 'ink' subtly subverts state authority by contrasting rooted ecological continuity against arbitrary colonial paper-making. Together, theatrical proxemics, contrasting props, and restrained metaphorical defiance expose how newly drawn national borders fracture lived spaces without erasing cultural attachment.",
          markScheme: [
            {
              point: "Analyses the bolted brass turnstile / chalk notice as theatrical physicalisation of bureaucratic gating and spatial control.",
              keywords: ["gating", "bureaucratic", "physicalis", "literalis", "licensed", "policed"],
            },
            {
              point: "Analyses the contrasting symbolic prop ('rattan suitcase tied with twine', unopened) representing vulnerable migrant memory.",
              keywords: ["migrant", "vulnerable", "humble", "hand-bound", "prop", "memory"],
            },
            {
              point: "Evaluates atmospheric staging (dim lighting, slowly turning ceiling fan) creating stagnant liminal suspension.",
              keywords: ["stagnant", "limbo", "suspension", "atmosphere", "waiting"],
            },
            {
              point: "Analyses proxemics and gesture—Rukmini pausing with one hand on the bar physically embodying threshold/liminality.",
              keywords: ["proxemic", "threshold", "liminal", "incarnat", "gesture", "physically"],
            },
            {
              point: "Examines subtext in the Officer's surface politeness ('Madam') paired with reductive clerical interrogation ('owns your stamp').",
              keywords: ["politeness", "clerical", "reductive", "interrogat", "procedural", "arbiters"],
            },
            {
              point: "Analyses the performance cue '(quietly)' signaling dignified restraint rather than melodrama.",
              keywords: ["restraint", "restrained", "melodrama", "dignified", "quiet"],
            },
            {
              point: "Evaluates Rukmini's organic metaphor ('mango tree', 'roots') subverting arbitrary cartographic 'ink'.",
              keywords: ["organic", "ecological", "arbitrary", "cartographic", "subvert", "continuity"],
            },
            {
              point: "Synthesises staging and dialogue cohesively around postcolonial borderland identity and spatial power.",
              keywords: ["epistemological", "fracture", "attachment", "defiance", "cohesive", "borderland"],
            },
          ],
          markbands: [
            {
              band: "Band 1 (Limited)",
              marks: [1, 2],
              descriptor: "Treats the extract as flat prose summary, mentioning border conflict broadly without analysing theatrical staging or metaphor.",
              indicators: ["Retells who enters and what they say", "Ignores stage directions and proxemics"],
            },
            {
              band: "Band 2 (Adequate)",
              marks: [3, 4],
              descriptor: "Identifies key props (turnstile, suitcase) and explains the mango-tree metaphor clearly, though evaluation of theatrical craft stays uneven.",
              indicators: ["Links turnstile to borders", "Notes Rukmini's calm tone and metaphor"],
            },
            {
              band: "Band 3 (Good)",
              marks: [5, 6],
              descriptor: "Analyses form-specific dramatic choices (proxemics, contrasting props, dialogue subtext) convincingly in relation to borderland power.",
              indicators: ["Integrates staging cues with spoken lines", "Explains bureaucratic vs organic imagery"],
            },
            {
              band: "Band 4 (Perceptive)",
              marks: [7, 8],
              descriptor: "Perceptively evaluates the full theatrical triad—spatial architecture, proxemic liminality, acoustic/tonal restraint, and epistemological subversion of imperial cartography.",
              indicators: ["Reads stage layout as visual argument", "Unpacks subtle politeness/power subtext seamlessly"],
            },
          ],
          hints: [
            "Read drama three-dimensionally: analyse lighting, set division (downstage left vs upstage right), props, ceiling fan, and proxemics BEFORE dialogue.",
            "Contrast the Officer's administrative diction ('registry', 'line', 'stamp') against Rukmini's organic metaphor ('mango tree', 'roots') and '(quietly)' cue.",
            "Organise conceptually (Spatial Control → Liminal Body/Props → Subtextual Resistance) rather than line by line.",
          ],
        },
        {
          id: "2-time-and-space-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          marks: 8,
          commandTerm: "Discuss",
          guideRef: "works-in-translation",
          question:
            "“Every literary translation is simultaneously a bridge across cultures and an act of creative betrayal.”\n\nDiscuss this statement with reference to Venuti's spectrum (domestication vs foreignisation), register/idiom shifts, paratext, and disciplined IB analytical practice. (You may cite illustrative works tagged `[Example text — not a set text]` or imagined linguistic examples.)",
          modelAnswer:
            "The claim captures the central paradox of reading works in translation: without translators, global literature remains locked behind linguistic frontiers, yet crossing those frontiers inevitably transforms texture, register, and cultural resonance. On the side of 'bridge', translation enables genuine cross-cultural dialogue—the exact principle underpinning the IB requirement of at least three translated works at SL, four at HL, and a translated partner inside every Individual Oral. Yet the accusation of 'betrayal' arises because languages carve up social worlds differently. Formal and intimate pronoun systems (such as French *vous/tu*) or status-coded kinship titles rarely map onto modern English 'you', flattening social nuance; similarly, verse translators cannot reproduce rhyme, syllabic metre, and lexical density simultaneously. Lawrence Venuti's spectrum clarifies how translators negotiate this unavoidable friction. Domestication prioritises smooth, idiomatic English—bridging immediate comprehension and dramatic speakability, yet risking cultural erasure when local proverbs vanish into familiar Anglophone clichés. Conversely, foreignisation retains culturally anchored terms and distinctive cadence—as when modern translators of Albert Camus's *L'Étranger* [Example text — not a set text] keep intimate 'Maman' rather than formal 'Mother' to prevent misreading emotional detachment—though extreme opacity can alienate readers. Calling every adaptation 'betrayal', however, assumes an impossible ideal of transparent equivalence; translation is more accurately understood as interpretive mediation. For IB candidates, disciplined practice means consulting paratext (prefaces, footnotes, glossaries) to understand edition choices, refusing to speculate blindly about an unread source language, and evaluating how the visible English craft shapes meaning.",
          markScheme: [
            {
              point: "Engages both halves of the proposition (cross-cultural bridge AND inevitable transformation/trade-off).",
              keywords: ["paradox", "frontiers", "inevitably", "bridge", "betrayal", "mediation"],
            },
            {
              point: "Explains concrete linguistic friction: register/pronoun/honorific flattening or untranslatable cultural idioms.",
              keywords: ["pronoun", "honorific", "kinship", "flatten", "register", "untranslatable"],
            },
            {
              point: "Explains formal poetic/dramatic trade-offs (rhyme, metre, cadence, speakability vs literal sense).",
              keywords: ["metre", "meter", "rhyme", "cadence", "speakability", "literal"],
            },
            {
              point: "Evaluates domestication's balanced gains (fluency/accessibility) and risks (cultural erasure/cliché).",
              keywords: ["domestication", "erasure", "fluency", "cliché", "comprehension"],
            },
            {
              point: "Evaluates foreignisation's balanced gains (cultural specificity/nuance) and potential risk (opacity/alienation).",
              keywords: ["foreignisation", "foreignization", "specificity", "opacity", "alienate"],
            },
            {
              point: "Supports argument with a concrete illustrative case (e.g. 'Maman' vs 'Mother' tagged appropriately, or specific linguistic case).",
              keywords: ["maman", "mother", "detachment", "example text", "proverb"],
            },
            {
              point: "Interrogates the word 'betrayal'—reframing translation as active interpretive mediation rather than failure.",
              keywords: ["interpretive", "equivalence", "transparent", "refram", "mediation"],
            },
            {
              point: "Articulates disciplined IB methodology (consulting paratext/footnotes; avoiding unread source-language speculation).",
              keywords: ["paratext", "preface", "glossary", "speculat", "unread", "visible"],
            },
          ],
          markbands: [
            {
              band: "Band 1 (Limited)",
              marks: [1, 2],
              descriptor: "Offers general assertions about things 'getting lost in translation' without theoretical concepts or concrete craft examples.",
              indicators: ["Relies on clichés", "No mention of Venuti or register"],
            },
            {
              band: "Band 2 (Adequate)",
              marks: [3, 4],
              descriptor: "Defines domestication and foreignisation and gives a basic example of idiom or rhyme loss, though evaluation leans binary.",
              indicators: ["Treats one strategy as simply better", "Basic coverage of loss/gain"],
            },
            {
              band: "Band 3 (Good)",
              marks: [5, 6],
              descriptor: "Weighs both bridge and betrayal thoughtfully across register, metre, Venuti's spectrum, and paratext with well-chosen evidence.",
              indicators: ["Balanced assessment of both poles", "Links to IB reading practice"],
            },
            {
              band: "Band 4 (Perceptive)",
              marks: [7, 8],
              descriptor: "Challenges the premise of 'betrayal' with conceptual nuance, synthesising linguistic friction, Venuti's trade-offs, concrete illustration, and rigorous IB analytical discipline.",
              indicators: ["Reframes betrayal as interpretive mediation", "Crisp academic register throughout"],
            },
          ],
          hints: [
            "Interrogate the prompt's loaded word 'betrayal'—does it wrongly assume a single transparent 1:1 equivalent exists?",
            "Balance BOTH gains and risks for domestication AND foreignisation (avoid saying one is always 'good').",
            "Ground your conceptual argument with a specific lexical/poetic example and finish with disciplined IB paratext methodology.",
          ],
        },
      ],
    },
    {
      id: "2-time-and-space-p2",
      title: "Practice Paper 2: Context Without Fallacy, Comparative Horizons & Exam Craft",
      level: "SL",
      questions: [
        {
          id: "2-time-and-space-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "context-without-fallacy",
          question:
            "A student writes: *“Because the novelist experienced exile as a child, the narrator's fear of locked railway stations is a direct confession of the author's own childhood trauma.”* Identify the fallacy committed.",
          answer: {
            type: "text",
            accept: ["biographical fallacy", "the biographical fallacy"],
            display: "biographical fallacy",
          },
          traps: [
            {
              spec: { type: "text", accept: ["intentional fallacy", "the intentional fallacy"] },
              feedback: "Intentional fallacy guesses what the author 'wanted' to prove; collapsing narrator/character directly into the author's personal life events is the biographical fallacy.",
            },
          ],
          solution: [
            "Equating a fictional narrator's emotion directly with the historical author's private childhood commits the **biographical fallacy**.",
          ],
          hints: [
            "Notice how the student collapses fictional narrator and real-life author into one person.",
          ],
        },
        {
          id: "2-time-and-space-p2-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "context-without-fallacy",
          question:
            "Identify the critical pitfall of scolding an eighteenth-century literary work purely for failing to reflect twenty-first-century ethical norms, while ignoring its own narrative irony and historical horizon.",
          answer: {
            type: "text",
            accept: ["presentism", "anachronism", "anachronistic moralising", "anachronistic moralizing"],
            display: "presentism",
          },
          traps: [
            {
              spec: { type: "text", accept: ["biographical fallacy", "intentional fallacy"] },
              feedback: "This error is specifically about imposing present-day moral standards reductively onto the past—known as presentism.",
            },
          ],
          solution: [
            "Judging past works simplistically by contemporary ethical standards without examining their internal craft or historical horizon is **presentism**.",
          ],
          hints: [
            "Think of an '-ism' derived from the word 'present'.",
          ],
        },
        {
          id: "2-time-and-space-p2-q03",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "works-in-translation",
          question:
            "State the **minimum** number of **total** studied works required in an IB English A: Literature **SL** course (comprising original English, translated, and free-choice works).",
          answer: {
            type: "number",
            value: 9,
            display: "9 works",
          },
          traps: [
            {
              spec: { type: "number", value: 13 },
              feedback: "13 is the minimum total works at Higher Level (HL); Standard Level (SL) requires a minimum of 9 works.",
            },
          ],
          solution: [
            "IB English A: Literature **SL** requires a minimum of **9 works** (≥4 English PRL + ≥3 translated PRL + 2 free choice).",
          ],
          hints: [
            "Add the SL minima: 4 English + 3 translated + 2 free choice.",
          ],
        },
        {
          id: "2-time-and-space-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "State",
          guideRef: "works-in-translation",
          question:
            "At **Higher Level (HL)**, across how many distinct **literary forms** (out of Poetry, Drama, Prose Fiction, Prose Non-Fiction) must the 13+ studied works be distributed?",
          answer: {
            type: "number",
            value: 4,
            display: "4 forms",
          },
          traps: [
            {
              spec: { type: "number", value: 3 },
              feedback: "3 literary forms is the minimum at SL; HL students must study works across ALL 4 literary forms.",
            },
          ],
          solution: [
            "While SL requires at least 3 literary forms, **HL** requires breadth across **all 4 literary forms** (poetry, drama, prose fiction, and prose non-fiction).",
          ],
          hints: [
            "Compare SL (at least 3 forms) with HL's fuller breadth requirement across the course.",
            "Count the four official IB Literature forms: poetry, drama, prose fiction, and prose non-fiction.",
          ],
        },
        {
          id: "2-time-and-space-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "historical-cultural-lenses",
          question:
            "Read this unseen excerpt:\n\n> *“The surveyor hammered copper pegs across the sacred cedar ridge and entered ‘Lot 14’ in neat crimson ledger ink.”*\n\nIdentify the primary spatial archetype (**domestic**, **urban**, **colonial**, or **borderland**) dramatised here.",
          answer: {
            type: "text",
            accept: ["colonial", "colonial space", "postcolonial", "colonial/postcolonial"],
            display: "colonial",
          },
          traps: [
            {
              spec: { type: "text", accept: ["borderland", "borderland space"] },
              feedback: "Surveying, pegging, and renaming sacred indigenous land into 'Lot 14' specifically dramatises imperial/colonial spatial imposition.",
            },
          ],
          solution: [
            "Partitioning and renaming a sacred local landscape into numbered property ('Lot 14') exemplifies **colonial** spatial power.",
          ],
          hints: [
            "Notice the act of surveying, pegging, and overwriting a sacred local site with bureaucratic property numbers.",
            "Choose from domestic, urban, colonial, or borderland.",
          ],
        },
        {
          id: "2-time-and-space-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "context-without-fallacy",
          question:
            "In a Paper 2 essay, a student inserts a 120-word textbook paragraph summarising the history of nineteenth-century industrialisation without quoting or analysing either studied work. What informal IB examiner phrase describes this error?",
          answer: {
            type: "text",
            accept: ["history dump", "history-essay dump", "history essay dump", "historical dump", "context dump", "context-drop", "context drop"],
            display: "history-essay dump",
          },
          traps: [
            {
              spec: { type: "text", accept: ["biographical fallacy", "intentional fallacy"] },
              feedback: "Those concern author biography or mind-reading; bolting a detached block of textbook history onto a literary essay is a history-essay dump (or context dump).",
            },
          ],
          solution: [
            "Dropping an unanchored block of historical summary into a literary essay without tying it to textual craft is a **history-essay dump** (or **context dump**).",
          ],
          hints: [
            "Think of the blunt examiner phrase for 'dumping' textbook history into a literature essay.",
            "It pairs 'history' (or 'history-essay') with a four-letter word describing dropping detached information.",
          ],
        },
        {
          id: "2-time-and-space-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "works-in-translation",
          question:
            "An **SL** syllabus comprises **10 works**: **5** originally in English and **5** in translation. The student selects **1 English + 1 translated work** for the Individual Oral. How many **translated works** remain available for Paper 2 under the non-overlap rule?",
          answer: {
            type: "number",
            value: 4,
            display: "4",
          },
          traps: [
            {
              spec: { type: "number", value: 3 },
              feedback: "Only 1 translated work is committed to the Individual Oral (SL has no HL Essay), so 5 − 1 = 4 translated works remain.",
            },
            {
              spec: { type: "number", value: 8 },
              feedback: "8 is the *total* remaining works (10 − 2); the question specifically asks how many *translated* works remain (5 − 1 = 4).",
            },
          ],
          solution: [
            "Total translated works studied = 5.",
            "Committed to Individual Oral = 1 translated work (SL students do not write an HL Essay).",
            "Remaining translated works eligible for Paper 2 = 5 − 1 = **4**.",
          ],
          hints: [
            "Read carefully: does the question ask for *total* remaining works or *translated* remaining works?",
            "Remember SL candidates do NOT complete an HL Essay.",
          ],
        },
        {
          id: "2-time-and-space-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 3,
          commandTerm: "Explain",
          guideRef: "context-without-fallacy",
          question:
            "Explain how the **Anchor-in-Craft Chain** enables an IB candidate to incorporate historical context smoothly while boosting both Criterion A and Criterion B.",
          modelAnswer:
            "The Anchor-in-Craft Chain begins with a specific micro textual choice—such as an embedded phrase, structural juxtaposition, or staging cue—rather than an abstract historical lecture. Next, it evaluates the immediate literary mechanism and reader effect, such as irony, dissonance, or tonal restraint, which directly satisfies Criterion B. Finally, it opens outward using analytical verbs ('dramatises', 'interrogates', 'registers') to show how that device engages a broader cultural or historical tension, elevating Criterion A interpretation without breaking essay focus.",
          markScheme: [
            {
              point: "Starts with concrete micro textual choice (quotation, imagery, syntax, staging, or form).",
              keywords: ["micro", "embedded", "textual choice", "juxtaposition", "staging", "quotation"],
            },
            {
              point: "Connects that choice to literary mechanism/reader effect (serving Criterion B).",
              keywords: ["criterion b", "irony", "effect", "mechanism", "dissonance", "restraint"],
            },
            {
              point: "Links outward via analytical verbs to historical/cultural tension (serving Criterion A without detached history).",
              keywords: ["criterion a", "dramatises", "interrogates", "registers", "tension", "outward"],
            },
          ],
          hints: [
            "Walk explicitly through all three links of the chain in order.",
            "Name how the chain serves Criterion B (craft) AND Criterion A (insightful interpretation).",
          ],
        },
        {
          id: "2-time-and-space-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Evaluate",
          guideRef: "context-without-fallacy",
          question:
            "Read this weak Paper 2 paragraph draft:\n\n> *“In the 1950s, postwar suburbs expanded rapidly and women were expected to stay home as housewives. The author felt trapped by suburban conformity, so she wanted her protagonist's spotless kitchen to make readers hate consumerism.”*\n\nIdentify **two distinct fallacies** in this draft and demonstrate how to rewrite its core idea into disciplined, craft-anchored literary analysis (using the motif of a 'spotless kitchen').",
          modelAnswer:
            "The draft first opens with a detached history-essay dump ('In the 1950s, postwar suburbs expanded…') unlinked to any textual technique, and then commits both biographical fallacy ('felt trapped') and intentional fallacy ('wanted… to make readers hate'). A disciplined revision keeps the motif itself as grammatical subject: 'Through the recurring motif of the “spotless kitchen”, whose hyper-polished surfaces register stifling perfectionism rather than domestic warmth, the narrative dramatises how postwar suburban ideals of material comfort quietly tighten into psychological enclosure.' This anchors 1950s cultural tension inside concrete literary imagery and avoids mind-reading.",
          markScheme: [
            {
              point: "Identifies detached history-essay dump (or biographical fallacy) accurately with reference to the draft.",
              keywords: ["history", "dump", "biographical", "felt trapped", "detached"],
            },
            {
              point: "Identifies intentional fallacy accurately ('wanted… to make readers hate').",
              keywords: ["intentional", "mind-reading", "wanted"],
            },
            {
              point: "Rewrites the claim with textual craft ('spotless kitchen' / motif / imagery) as active analytical subject.",
              keywords: ["motif", "surfaces", "imagery", "dramatises", "dramatizes", "registers"],
            },
            {
              point: "Integrates postwar suburban/domestic cultural tension smoothly into literary effect (enclosure, perfectionism, irony).",
              keywords: ["enclosure", "perfectionism", "psychological", "irony", "tension", "warmth"],
            },
          ],
          hints: [
            "Spot all three flaws in the draft (history dump, biographical claim 'felt trapped', intentional claim 'wanted').",
            "In your rewrite, make 'the recurring motif of the spotless kitchen' or 'the narrative' the subject paired with verbs like 'dramatises' or 'registers'.",
          ],
        },
        {
          id: "2-time-and-space-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Analyse",
          guideRef: "production-reception-contexts",
          question:
            "Read this unseen 1938 radio-memoir excerpt:\n\n> *“Every evening the wireless hummed with crisp London bulletins announcing calm across the empire, while outside our shutters the monsoon tore tin sheets off the godown roof.”*\n\nAnalyse how juxtaposition constructs ironic tension between imperial centre and local periphery.",
          modelAnswer:
            "A sharp acoustic and spatial juxtaposition splits the scene between distant imperial authority and immediate material vulnerability. Inside, the 'wireless' transmits 'crisp London bulletins' whose controlled, polished register projects illusionary 'calm across the empire', attempting to impose metropolitan composure onto distant territories. Outside the fragile barrier of 'our shutters', however, the violent verb 'tore' and rattling 'tin sheets' off the local 'godown roof' shatter that broadcast serenity. By contrasting official disembodied voices from London against visceral tropical weather hammering a regional storehouse, the memoir ironises the gap between imperial rhetoric and lived colonial periphery.",
          markScheme: [
            {
              point: "Identifies the spatial/acoustic juxtaposition between interior broadcast and exterior monsoon storm.",
              keywords: ["juxtaposition", "acoustic", "inside", "interior", "exterior", "contrasting"],
            },
            {
              point: "Analyses the controlled metropolitan register of 'crisp London bulletins' projecting illusionary authority/calm.",
              keywords: ["metropolitan", "illusion", "controlled", "register", "disembodied", "authority"],
            },
            {
              point: "Analyses visceral, violent local imagery ('tore', 'tin sheets', regional term 'godown') puncturing official composure.",
              keywords: ["violent", "visceral", "shatter", "punctur", "godown", "vulnerability"],
            },
            {
              point: "Evaluates the overarching situational/dramatic irony exposing the gap between imperial rhetoric and colonial reality.",
              keywords: ["ironis", "irony", "rhetoric", "gap", "periphery", "colonial"],
            },
          ],
          hints: [
            "Note the regional word 'godown' (South/Southeast Asian warehouse) paired against 'crisp London bulletins'.",
            "Contrast the auditory smoothness of 'hummed / crisp' with the physical violence of 'tore tin sheets'.",
          ],
        },
        {
          id: "2-time-and-space-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 6,
          commandTerm: "Examine",
          guideRef: "context-without-fallacy",
          question:
            "Read this unseen excerpt from a contemporary migrant memoir:\n\n> *“At twelve I swore I hated the smell of salted fish in our stairwell, afraid my classmates would read my family's pantry on my collar; now, thirty years later in a quiet northern suburb, I cross three transit zones just to buy a single jar.”*\n\nExamine how the writer constructs narrative persona and shifting space-time perspective—and explain why reducing this passage to plain biography misses its literary craft.",
          modelAnswer:
            "Although rooted in real-world migration, the passage achieves its emotional power through deliberate literary architecture rather than unmediated diary confession. Structurally, the balanced semicolon pivots across thirty years to construct a split narrative persona: the anxious, assimilation-pressured 'experiencing self' at twelve versus the reflective 'retrospective self' looking back across geographical and temporal distance. In the first half, synecdoche and sensory shame ('read my family's pantry on my collar') transform a domestic stairwell odour into a marker of visible social vulnerability before peers—dramatising cultural self-consciousness within a diaspora childhood. After the temporal hinge ('now, thirty years later'), spatial contrast takes over: the sterile stillness of a 'quiet northern suburb' is counterpointed by the purposeful pilgrimage across 'three transit zones' for a 'single jar'. That ironic reversal converts an object once feared as stigma into a cherished anchor of heritage. Treating the extract merely as factual biography misses how carefully crafted juxtaposition, retrospective irony, and sensory metonymy turn everyday geography into an arc of cultural reclamation.",
          markScheme: [
            {
              point: "Distinguishes crafted narrative persona (experiencing self at twelve vs retrospective self thirty years later) from raw diary biography.",
              keywords: ["experiencing self", "retrospective", "persona", "unmediated", "split"],
            },
            {
              point: "Analyses the structural pivot (semicolon / temporal hinge) balancing youthful shame against adult longing.",
              keywords: ["semicolon", "pivot", "hinge", "structural", "reversal"],
            },
            {
              point: "Evaluates sensory imagery / metonymy ('read my family's pantry on my collar') encoding assimilation anxiety.",
              keywords: ["assimilation", "stigma", "metonymy", "synecdoche", "shame", "vulnerability"],
            },
            {
              point: "Analyses spatial contrast between the dense immigrant 'stairwell' and the 'quiet northern suburb'.",
              keywords: ["sterile", "suburb", "stairwell", "spatial", "geography"],
            },
            {
              point: "Interprets the effort of crossing 'three transit zones' for a 'single jar' as ironic reclamation of heritage.",
              keywords: ["pilgrimage", "reclamation", "heritage", "anchor", "ironic"],
            },
            {
              point: "Articulates why biographical reduction overlooks formal craft (selection, pacing, irony, sensory motifs).",
              keywords: ["selection", "craft", "architecture", "reduction", "overlooks", "juxtaposition"],
            },
          ],
          markbands: [
            {
              band: "Band 1 (Limited)",
              marks: [1, 2],
              descriptor: "Summarises that the narrator disliked salted fish as a child and misses it as an adult, with minimal craft commentary.",
              indicators: ["Plot paraphrase only", "Treats text as literal autobiography"],
            },
            {
              band: "Band 2 (Adequate)",
              marks: [3, 4],
              descriptor: "Notes the shift across thirty years and identifies sensory shame and nostalgia, with some reference to persona.",
              indicators: ["Tracks past vs present contrast", "Quotes key images accurately"],
            },
            {
              band: "Band 3 (Good–Perceptive)",
              marks: [5, 6],
              descriptor: "Perceptively analyses split memoir persona (experiencing vs retrospective self), structural pivot, sensory metonymy, and spatial reclamation while dismantling biographical reduction.",
              indicators: ["Balances craft evaluation with diaspora context", "Explains why memoir is constructed literature"],
            },
          ],
          hints: [
            "Look at the semicolon right in the middle: how does it split the 'experiencing self' from the 'retrospective self'?",
            "Analyse the figurative weight of 'read my family's pantry on my collar' and the spatial irony of crossing 'three transit zones'.",
          ],
        },
        {
          id: "2-time-and-space-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 6,
          commandTerm: "Compare and contrast",
          guideRef: "production-reception-contexts",
          question:
            "Compare and contrast how two unseen texts from different centuries represent the exact same riverfront:\n\n- **Text A (1852 Trade Chronicle):** *“Timber barges crowd our industrious quay, turning sluggish marshland into disciplined wealth beneath the customs flag.”*\n- **Text B (2018 Eco-Elegy):** *“Beneath rusted mooring rings, silt remembers the heron's reed-bed / where ledgers once priced every tide.”*\n\nCompare and contrast how historical horizon, genre, and figurative diction reshape spatial meaning across time.",
          modelAnswer:
            "Separated by more than a century and distinct literary forms, Text A and Text B turn the identical riverfront into competing ideological monuments. Writing within a mid-nineteenth-century commercial horizon, Text A's prose chronicle deploys brisk evaluative adjectives—'industrious', 'disciplined wealth'—to endorse mercantile expansion, dismissing pre-industrial ecology as 'sluggish marshland' needing correction beneath the authoritative 'customs flag'. By contrast, Text B's contemporary poetic elegy writes from a postcolonial and ecological reception horizon, inverting triumph into quiet mourning. Whereas Text A celebrates bustling 'timber barges', Text B's 'rusted mooring rings' expose commercial impermanence through physical decay. Even more sharply, Text B personifies 'silt' as an archive that 'remembers the heron's reed-bed', reclaiming the very wetland Text A branded 'sluggish'. While Text A treats commerce as natural progress, Text B's closing line ('where ledgers once priced every tide') uses compressed lyric irony to expose the hubris of monetising nature. Thus, shifting temporal horizons and contrasting genres—official trade prose versus reflective free verse—invert mastery into elegiac reckoning.",
          markScheme: [
            {
              point: "Contrasts the two historical horizons (1852 commercial progress vs 2018 ecological/post-industrial reckoning).",
              keywords: ["commercial", "mercantile", "ecological", "elegiac", "reckoning", "post-industrial"],
            },
            {
              point: "Analyses Text A's evaluative diction ('industrious', 'disciplined wealth') endorsing imperial/economic extraction.",
              keywords: ["endorse", "endorsing", "expansion", "extraction", "evaluative", "authoritative"],
            },
            {
              point: "Analyses how Text A degrades wetland nature ('sluggish marshland') versus Text B reclaiming it ('heron's reed-bed').",
              keywords: ["wetland", "reclaim", "dismissing", "ecology", "degrad"],
            },
            {
              point: "Contrasts active commercial vitality ('timber barges') with physical decay ('rusted mooring rings') signalling impermanence.",
              keywords: ["decay", "impermanence", "rusted", "transient", "bustling"],
            },
            {
              point: "Analyses Text B's personification ('silt remembers') and ironic critique of monetising nature ('priced every tide').",
              keywords: ["personif", "archive", "monetis", "hubris", "irony"],
            },
            {
              point: "Integrates genre/form differences (declarative trade prose vs compressed elegiac verse) seamlessly throughout.",
              keywords: ["chronicle", "verse", "compressed", "genre", "form", "ideological"],
            },
          ],
          markbands: [
            {
              band: "Band 1 (Limited)",
              marks: [1, 2],
              descriptor: "Describes Text A as positive about trade and Text B as sad about nature, organised block-by-block with little craft analysis.",
              indicators: ["Surface theme summary", "Block-by-block structure"],
            },
            {
              band: "Band 2 (Adequate)",
              marks: [3, 4],
              descriptor: "Compares key contrasting images ('sluggish marshland' vs 'heron's reed-bed') and links them to changing historical attitudes.",
              indicators: ["Clear comparative links", "Notes imagery contrast"],
            },
            {
              band: "Band 3 (Good–Perceptive)",
              marks: [5, 6],
              descriptor: "Delivering integrated point-by-point comparison, perceptively evaluates how genre, historical horizon, personification, and lexical decay invert spatial ideology.",
              indicators: ["Integrated comparison in every point", "Links form and era to spatial meaning"],
            },
          ],
          hints: [
            "Compare point by point rather than writing Text A then Text B: pair 'sluggish marshland' with 'heron's reed-bed', and 'disciplined wealth' with 'priced every tide'.",
            "Note how literary form itself—clipped mercantile prose vs reflective lyric lineation—shapes each stance.",
          ],
        },
        {
          id: "2-time-and-space-p2-q13",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          marks: 8,
          commandTerm: "To what extent",
          guideRef: "production-reception-contexts",
          question:
            "“A reader can fully appreciate a literary work without knowing anything about the time and place in which it was written.”\n\nTo what extent do you agree with this statement in the context of IB Diploma English A: Literature? Support your argument with conceptual reasoning across contexts of production, reception, symbolic space, and translation.",
          modelAnswer:
            "The claim holds partial truth insofar as compelling literary craft—metaphor, rhythm, dramatic irony, and human conflict—speaks powerfully even to an unbriefed reader, which is why Paper 1 evaluates unseen analysis without author biography. Treating close reading as the foundation of meaning also guards against the biographical fallacy, the intentional fallacy (Wimsatt and Beardsley), and detached history-essay dumps that smother textual craft. Yet asserting that a reader can *fully* appreciate a work with zero awareness of time and space substantially underestimates how deeply cultural codes live inside language itself. First, lexical and moral connotations shift across historical horizons of expectations (Jauss): without recognising nineteenth-century marriage economics or gender decorum, a reader might flatten sharp social irony—such as the explosive 1879 reception of Henrik Ibsen's *A Doll's House* [Example text — not a set text]—into merely personal eccentricity. Second, spatial signifiers (colonial maps, segregated verandas, partition checkpoints) draw resonant weight from historical geography, exposing whether a text endorses, negotiates, or subverts prevailing power. Third, works in translation reveal the limits of pure 'universalism': missing a culture's honorific register, untranslatable ethos, or mourning symbolism noted in paratext can invert tone completely—as demonstrated by competing translations of Albert Camus's *L'Étranger* [Example text — not a set text] ('Mother' versus intimate 'Maman'). Ultimately, while close reading alone yields a valid entry point, *full* literary appreciation requires a disciplined synthesis: contextual awareness of time, space, and translation anchored firmly inside specific textual choices.",
          markScheme: [
            {
              point: "Acknowledges valid scope of the statement (close reading of craft speaks directly; Paper 1 unseen principle).",
              keywords: ["partial", "unseen", "paper 1", "foundation", "entry point", "craft"],
            },
            {
              point: "Recognises the positive guardrail: prioritising the text avoids biographical/intentional fallacy and history dumps.",
              keywords: ["biographical", "intentional", "wimsatt", "history", "dump", "guard"],
            },
            {
              point: "Challenges the absolutist adverb 'fully' by arguing cultural codes are embedded inside language.",
              keywords: ["underestimates", "embedded", "cultural codes", "absolutist", "substantially"],
            },
            {
              point: "Explains how production/reception horizons (Jauss) prevent misreading historical irony or moral norms.",
              keywords: ["jauss", "horizon", "irony", "decorum", "eccentricity", "ibsen"],
            },
            {
              point: "Explains how spatial/geographical contexts unlock power dynamics (colonial, domestic, borderland spaces).",
              keywords: ["geography", "veranda", "checkpoint", "negotiates", "subverts", "spatial"],
            },
            {
              point: "Demonstrates how translated works (register, honorifics, paratext, cultural codes) refute ahistorical universalism.",
              keywords: ["universalism", "paratext", "honorific", "maman", "camus", "register"],
            },
            {
              point: "Uses illustrative examples responsibly (tagged `[Example text — not a set text]` if real works are named).",
              keywords: ["example text", "illustrative", "competing translations", "1879"],
            },
            {
              point: "Reaches a nuanced 'to what extent' judgement synthesising close reading with craft-anchored context.",
              keywords: ["synthesis", "disciplined", "anchored", "ultimately", "valid"],
            },
          ],
          markbands: [
            {
              band: "Band 1 (Limited)",
              marks: [1, 2],
              descriptor: "Offers a simple yes/no opinion ('context is important because history matters') without literary concepts or nuance.",
              indicators: ["Binary agree/disagree stance", "No IB frameworks or examples"],
            },
            {
              band: "Band 2 (Adequate)",
              marks: [3, 4],
              descriptor: "Balances basic arguments for close reading and contextual awareness, naming a few AoE 2 terms accurately.",
              indicators: ["Acknowledges both sides", "Mentions translation or historical background"],
            },
            {
              band: "Band 3 (Good)",
              marks: [5, 6],
              descriptor: "Develops a reasoned 'to what extent' judgement linking production/reception, spatial codes, translation, and fallacy guardrails convincingly.",
              indicators: ["Sustains analytical focus", "Uses accurate literary theory and examples"],
            },
            {
              band: "Band 4 (Perceptive)",
              marks: [7, 8],
              descriptor: "Interrogates the word 'fully' with sophisticated balance, weaving Paper 1 close-reading discipline, Jauss, Wimsatt & Beardsley, spatial power, and translational mediation into a compelling synthesis.",
              indicators: ["Sophisticated conceptual qualification", "Cohesive Band 5 academic argument"],
            },
          ],
          hints: [
            "For 'To what extent' prompts, NEVER give a flat yes or no—interrogate the qualifier *'fully'*.",
            "Concede why text-first close reading works (Paper 1, avoiding biographical/intentional fallacy), then show three concrete ways zero context impoverishes interpretation.",
          ],
        },
        {
          id: "2-time-and-space-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          marks: 8,
          commandTerm: "Analyse",
          guideRef: "context-without-fallacy",
          question:
            "Read this unseen 1962 prose extract from a fictional post-independence novel:\n\n> *“They lowered the bronze governor before noon, leaving a pale rectangle on the plinth where pigeons immediately resumed their parliament. In the square below, Uncle Harish adjusted his spectacles and remarked that stone statues vanish quickly, whereas school textbooks take forty years to forget.”*\n\nAnalyse how the writer uses spatial symbolism, irony, and narrative restraint to explore historical transition and cultural memory—anchoring every contextual point directly in textual craft.",
          modelAnswer:
            "Rather than staging independence through triumphalist crowds, the extract employs understated spatial irony to question how swiftly colonial authority genuinely disappears. Opening with the brisk, unsentimental clause 'They lowered the bronze governor before noon', the narrative strips imperial monumentality of grandeur—a deflation immediately sharpened by the mundane visual residue of a 'pale rectangle on the plinth'. Placing pigeons that 'immediately resumed their parliament' atop the vacated pedestal generates crisp satirical bathos: the mock-institutional noun 'parliament' juxtaposes political ceremony against indifferent natural routine, implying that empty symbols change far faster than underlying habits of governance. Moving the focalisation downward 'in the square below', the calm, scholarly gesture of Uncle Harish adjusting 'his spectacles' establishes quiet intellectual authority rather than partisan shouting. His aphoristic contrast—'stone statues vanish quickly, whereas school textbooks take forty years to forget'—pivots the passage from physical space to ideological time. While public architecture can be dismantled in a single morning, inherited curricula and linguistic frameworks persist across generations, shaping postcolonial consciousness long after flags shift. Through quiet bathos, contrasting temporal scales ('before noon' versus 'forty years'), and controlled indirect discourse, the prose dramatises decolonisation as a protracted psychological negotiation rather than an instant rupture.",
          markScheme: [
            {
              point: "Analyses understated opening cadence ('lowered the bronze governor before noon') deflating imperial monumentality.",
              keywords: ["understated", "deflat", "unsentimental", "monumental", "grandeur", "brisk"],
            },
            {
              point: "Interprets the visual residue ('pale rectangle on the plinth') as a lingering spatial trace of departed power.",
              keywords: ["residue", "trace", "lingering", "vacated", "pedestal", "imprint"],
            },
            {
              point: "Analyses satirical bathos / ironic diction in pigeons resuming 'their parliament'.",
              keywords: ["bathos", "satir", "mock", "indifferent", "ceremony", "ironic"],
            },
            {
              point: "Examines spatial shift downward to 'the square below' and restrained characterisation ('adjusted his spectacles').",
              keywords: ["downward", "scholarly", "gesture", "restrained", "restraint", "focalisation"],
            },
            {
              point: "Analyses the aphoristic contrast between material monuments ('stone statues') and ideological education ('school textbooks').",
              keywords: ["aphorist", "ideological", "curricula", "education", "consciousness", "inherited"],
            },
            {
              point: "Evaluates contrasting temporal scales ('before noon' vs 'forty years') dramatising protracted cultural transition.",
              keywords: ["temporal", "generations", "protracted", "scale", "instant", "rupture"],
            },
            {
              point: "Anchors postcolonial cultural memory strictly in literary craft without biographical fallacy or history dumps.",
              keywords: ["dramatises", "dramatizes", "negotiation", "decolonisation", "decolonization", "indirect"],
            },
            {
              point: "Synthesises spatial symbolism and ironic restraint into a perceptive conceptual conclusion.",
              keywords: ["psychological", "surface", "habits", "persist", "triumphalist"],
            },
          ],
          markbands: [
            {
              band: "Band 1 (Limited)",
              marks: [1, 2],
              descriptor: "Summarises that a statue was taken down and textbooks change slowly, or drifts into general decolonisation history.",
              indicators: ["Plot paraphrase or detached history", "No analysis of irony or spatial motifs"],
            },
            {
              band: "Band 2 (Adequate)",
              marks: [3, 4],
              descriptor: "Explains the statue vs textbook contrast clearly and notes irony in the pigeons, with some textual embedding.",
              indicators: ["Quotes key phrases", "Links statue removal to lingering colonial influence"],
            },
            {
              band: "Band 3 (Good)",
              marks: [5, 6],
              descriptor: "Analyses spatial residue, satirical bathos ('parliament'), temporal contrast, and narrative restraint cleanly without contextual fallacy.",
              indicators: ["Evaluates diction and contrast effectively", "Keeps context tied to craft"],
            },
            {
              band: "Band 4 (Perceptive)",
              marks: [7, 8],
              descriptor: "Delivers incisive Band 5 analysis uniting physical trace ('pale rectangle'), mock-political bathos, temporal scaling, and ideological decolonisation in polished academic prose.",
              indicators: ["Nuanced evaluation of tone and irony", "Seamless Anchor-in-Craft execution"],
            },
          ],
          hints: [
            "Notice the brilliant satirical noun 'parliament' applied to pigeons—what does that bathos imply about political theatre?",
            "Contrast TWO scales: physical space (the 'pale rectangle' left behind) and historical time ('before noon' vs 'forty years').",
            "Keep every postcolonial insight anchored in embedded micro-quotations—avoid writing a detached history paragraph.",
          ],
        },
        {
          id: "2-time-and-space-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          marks: 10,
          commandTerm: "Explore",
          guideRef: "historical-cultural-lenses",
          question:
            "Read these two unseen paired extracts exploring domestic space and shifting cultural norms across eras:\n\n- **Extract 1 (1888 Prose Fiction):** *“Her mother kept the cedar dowry chest locked beneath the parlour window; every Sunday she aired its folded silks in silence, counting each crease as though measuring her daughter's future safety.”*\n- **Extract 2 (2015 Lyric Verse, translated from another language; translator's footnote notes ‘red-lacquer box’ traditionally holds bridal jewellery):**\n> *“My grandmother's red-lacquer box now holds bus-passes, a brass key, / and three unmailed postcards from a coast I cannot pronounce— / still I shut the lid softly, as though waking a strict ancestor.”*\n\nExplore how both extracts use a treasured domestic container to negotiate tradition, time, and identity across different literary forms and cultural contexts.",
          modelAnswer:
            "Across vastly different eras, genres, and linguistic traditions, both extracts transform a small household container into a dense temporal archive where inherited custom collides with evolving autonomy. Yet whereas Extract 1's third-person prose frames tradition as guarded preservation within a nineteenth-century horizon of economic security, Extract 2's first-person translated lyric repurposes ancestral ritual into hybrid, modern self-definition tinged with lingering deference. In Extract 1, spatial placement and routine establish domestic enclosure: the 'cedar dowry chest' sits 'locked beneath the parlour window'—positioned precisely at the boundary between private interior and watching public street—while the solemn weekly ritual of airing 'folded silks in silence' treats marriageability as a fragile asset requiring disciplined curation. The narrator's simile, 'counting each crease as though measuring her daughter's future safety', prevents simplistic presentist condemnation: within an 1888 horizon of production where financial autonomy for women was severely narrowed, maternal control is sympathetically entangled with anxious protection. By contrast, Extract 2 inhabits a twenty-first-century diasporic borderland. Informed by the translator's paratextual footnote identifying the 'red-lacquer box' as a traditional bridal vessel, the speaker's catalogue of replacement objects creates crisp situational irony: ceremonial bridal jewellery gives way to everyday urban transit ('bus-passes'), nomadic mobility ('a brass key'), and fractured linguistic heritage ('three unmailed postcards from a coast I cannot pronounce'). Here, enjambment and the em-dash execute a subtle poetic volta: despite transforming the box's contents completely, the speaker confesses 'still I shut the lid softly, as though waking a strict ancestor'. Echoing Extract 1's quiet hush ('in silence'), that tactile tenderness reveals that neither work treats tradition in crude binary terms. Ultimately, while Extract 1's measured prose syntax dramatises tradition holding the future tightly locked inside domestic ritual, Extract 2's translated free verse uses paratextual contrast and rhythmic hesitation to show how diasporic identity simultaneously repurposes and reveres inherited cultural space.",
          markScheme: [
            {
              point: "Frames an integrated comparative conceptual thesis contrasting guarded nineteenth-century preservation against modern diasporic repurposing.",
              keywords: ["preservation", "repurpos", "archive", "autonomy", "hybrid", "whereas"],
            },
            {
              point: "Analyses Extract 1's spatial/domestic positioning ('locked beneath the parlour window', boundary between interior and public).",
              keywords: ["enclosure", "boundary", "parlour", "locked", "guarded", "curation"],
            },
            {
              point: "Analyses Extract 1's simile ('measuring her daughter's future safety') with production-horizon nuance (avoiding simplistic presentism).",
              keywords: ["simile", "presentis", "protection", "anxious", "maternal", "economic"],
            },
            {
              point: "Integrates Extract 2's translator footnote (paratext on bridal vessel) to unlock situational irony of its new contents.",
              keywords: ["paratext", "bridal", "situational irony", "irony", "vessel", "ceremonial"],
            },
            {
              point: "Analyses Extract 2's juxtaposed urban/diasporic items ('bus-passes', 'brass key', 'coast I cannot pronounce') signalling displacement and linguistic distance.",
              keywords: ["diaspor", "mobility", "linguistic", "displacement", "borderland", "transit"],
            },
            {
              point: "Evaluates form-specific craft in Extract 2 (enjambment, em-dash volta, first-person intimacy) versus Extract 1's third-person measured prose.",
              keywords: ["enjambment", "em-dash", "volta", "third-person", "first-person", "syntax"],
            },
            {
              point: "Compares shared acoustic restraint ('in silence' vs 'shut the lid softly') revealing emotional ambivalence/negotiation rather than binary rejection.",
              keywords: ["ambivalen", "negotiation", "tenderness", "revere", "binary", "deference"],
            },
            {
              point: "Sustains integrated point-by-point comparison throughout rather than writing two separate essays.",
              keywords: ["contrast", "echoing", "similarly", "conversely", "simultaneously"],
            },
            {
              point: "Maintains strict fallacy-free discipline—anchoring every cultural/historical insight directly in embedded quotations.",
              keywords: ["dramatises", "dramatizes", "transforms", "signalling", "reveals"],
            },
            {
              point: "Concludes with a perceptive synthesis uniting symbolic space, form, time, and cultural memory across both extracts.",
              keywords: ["ultimately", "repurposes", "inherited", "custom", "memory"],
            },
          ],
          markbands: [
            {
              band: "Band 1 (Limited)",
              marks: [1, 2],
              descriptor: "Summarises what is inside each box separately with minimal attention to cultural context, form, or comparison.",
              indicators: ["Block summary of Extract 1 then Extract 2", "Ignores footnote and poetic structure"],
            },
            {
              band: "Band 2 (Adequate)",
              marks: [3, 5],
              descriptor: "Identifies the shift from old marital tradition to modern life and quotes several phrases, though comparison and form analysis remain uneven.",
              indicators: ["Notes bridal symbolism from footnote", "Basic contrast between past and present"],
            },
            {
              band: "Band 3 (Good)",
              marks: [6, 8],
              descriptor: "Compares both extracts systematically across context of production, diasporic irony, paratext, and literary form with consistent craft grounding.",
              indicators: ["Avoids presentism on Extract 1", "Integrates paratext and poetic turn in Extract 2"],
            },
            {
              band: "Band 4 (Perceptive)",
              marks: [9, 10],
              descriptor: "Delivers Band 5 Paper-2-calibre integrated synthesis: evaluates prose syntax vs lyric volta, paratextual irony, shared silent deference, and nuanced cultural negotiation throughout.",
              indicators: ["Seamless point-by-point comparison", "Sophisticated AoE 2 mastery without fallacy"],
            },
          ],
          hints: [
            "Use an integrated Paper 2 architecture: compare (1) Spatial/Cultural Symbolism of the Boxes, (2) Economic/Diasporic Tensions & Paratext, and (3) Shared Ambivalent Restraint ('in silence' vs 'shut the lid softly').",
            "Avoid presentism on Extract 1: notice how 'measuring her daughter's future safety' entangles maternal anxiety with nineteenth-century economic vulnerability.",
            "Remember to analyse FORM differences: third-person measured prose vs first-person translated free verse with an em-dash volta.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "2-time-and-space-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "works-in-translation",
      question:
        "An **HL** student studies **13 works**: **6** originally in English and **7** in translation. They commit **1 English + 1 translated work** to the Individual Oral and **1 translated work** to the HL Essay. If they plan to write **Paper 2** using **two translated works**, how many *uncommitted* translated works will remain unused in reserve after Paper 2?",
      answer: {
        type: "number",
        value: 3,
        display: "3",
      },
      traps: [
        {
          spec: { type: "number", value: 5 },
          feedback: "5 translated works are eligible *before* Paper 2 (7 − 1 IO − 1 HL Essay); once 2 are used in Paper 2, 5 − 2 = 3 remain in reserve.",
        },
        {
          spec: { type: "number", value: 4 },
          feedback: "Check every commitment: 1 (IO) + 1 (HL Essay) + 2 (Paper 2) = 4 committed; 7 − 4 = 3 remain unused.",
        },
      ],
      solution: [
        "Total translated works studied = 7.",
        "Committed across non-overlapping assessments: 1 (IO) + 1 (HL Essay) + 2 (Paper 2) = 4 translated works.",
        "Uncommitted translated works left in reserve: 7 − 4 = **3**.",
      ],
      hints: [
        "List every assessment consuming a distinct translated work: IO (1), HL Essay (1), Paper 2 (2).",
        "Subtract the total committed translated works from 7.",
      ],
    },
    {
      id: "2-time-and-space-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "works-in-translation",
      question:
        "In a translated tragedy, an edition's footnote notes that a courtier shifts abruptly from an honorific plural address to an abrupt familiar pronoun right before drawing a dagger—a pivot invisible in modern English 'you'. What two-word translation phenomenon is illustrated?",
      answer: {
        type: "text",
        accept: ["register loss", "register flattening", "register shift", "pronoun flattening", "pronoun loss"],
        display: "register loss",
      },
      traps: [
        {
          spec: { type: "text", accept: ["foreignisation", "foreignization"] },
          feedback: "Foreignisation would have tried to keep a visible marker of the source address; losing formal/informal distinctions in English 'you' is register loss (or register flattening).",
        },
      ],
      solution: [
        "When English 'you' erases formal vs intimate social distinctions encoded in the source language, the resulting phenomenon is **register loss** (or **register flattening**).",
      ],
      hints: [
        "What linguistic feature distinguishes formal honorific speech from abrupt familiar speech?",
        "Combine 'register' with 'loss' or 'flattening'.",
      ],
    },
    {
      id: "2-time-and-space-ch-q03",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      marks: 6,
      commandTerm: "Design",
      guideRef: "context-without-fallacy",
      question:
        "**[HL Essay Craft]** An HL student wants to write their 1,200–1,500 word HL Essay on a studied translated novel set during rapid postcolonial urbanisation. Their first draft question is: *“How does the novel show the history of urban migration in the 1970s?”*\n\nDiagnose why this draft inquiry will cap Criteria A, B, and C, and **design** a refined Band 5 HL Essay line of inquiry anchored to one of the **7 IB Literature Concepts**, a specific formal/literary focus, and disciplined AoE 2 scope.",
      modelAnswer:
        "The draft inquiry invites a sociological history-essay dump: the vague verb 'show' steers the writer toward plot summary and 1970s migration statistics rather than Criterion B analysis of authorial craft, while lacking any narrow conceptual lens or formal mechanism to sustain a cohesive 1,200–1,500 word line of argument (weakening Criterion C). A Band 5 HL Essay line of inquiry anchors cultural urbanisation inside a specific literary technique and one of the 7 Central Concepts—such as **Transformation** or **Representation**: *“To what extent does shifting focalisation across domestic thresholds and transient urban spaces represent the psychological fragmentation of cultural identity in [Studied Work]?”* This refined inquiry keeps close textual analysis (focalisation, spatial symbolism) as the engine of every body movement, frames a debatable analytical scale ('To what extent'), allows disciplined attention to visible translated register/motifs without biographical speculation, and honours the non-overlap rule by keeping the work distinct from the IO and Paper 2.",
      markScheme: [
        {
          point: "Diagnoses that the draft invites a history/sociology dump and plot summary via the weak verb 'show'.",
          keywords: ["sociolog", "history", "summary", "weak", "vague", "statistics"],
        },
        {
          point: "Identifies missing Criterion B formal/literary mechanism and Criterion C conceptual argument.",
          keywords: ["criterion b", "criterion c", "mechanism", "technique", "cohesive"],
        },
        {
          point: "Anchors the refined inquiry explicitly to one of the 7 IB Concepts (e.g. Transformation, Representation, Identity, Culture, Perspective).",
          keywords: ["representation", "transformation", "perspective", "identity", "culture", "central concept"],
        },
        {
          point: "Incorporates a specific, evaluable formal/literary craft focus (e.g. focalisation, spatial motifs, structure, narrative voice).",
          keywords: ["focalisation", "focalization", "threshold", "spatial", "structure", "motif"],
        },
        {
          point: "Frames an arguable, narrow inquiry question ('To what extent…' / 'How effectively…') viable within 1,200–1,500 words.",
          keywords: ["to what extent", "arguable", "debatable", "narrow", "1,200", "1,500"],
        },
        {
          point: "Notes disciplined AoE 2 / HL coursework hygiene (craft-led context or strict non-overlap with IO and Paper 2).",
          keywords: ["non-overlap", "speculation", "register", "distinct", "paper 2"],
        },
      ],
      markbands: [
        {
          band: "Band 1 (Limited)",
          marks: [1, 2],
          descriptor: "Says the original question is 'too broad' and proposes another vague thematic question without literary craft or an IB concept.",
          indicators: ["No literary technique named", "Remains historical/thematic"],
        },
        {
          band: "Band 2 (Adequate)",
          marks: [3, 4],
          descriptor: "Critiques the historical bias accurately and drafts a tighter question mentioning a literary feature and a concept.",
          indicators: ["Names a technique and concept", "Links to Criteria A/B"],
        },
        {
          band: "Band 3 (Good–Perceptive)",
          marks: [5, 6],
          descriptor: "Diagnoses exact Criterion A/B/C failure modes and constructs an exemplary, arguable HL Essay line of inquiry combining formal craft, a 7-Concept anchor, AoE 2 spatial insight, and coursework rules.",
          indicators: ["Precision rubric diagnosis", "Publishable Band 5 HL Essay question"],
        },
      ],
      hints: [
        "Diagnose *why* 'show the history of…' fails Criteria A, B, and C specifically.",
        "Build your refined question with 3 ingredients: an arguable stem ('How' / 'To what extent') + a concrete literary technique (e.g. focalisation, spatial motif) + one of the 7 IB Concepts.",
      ],
    },
    {
      id: "2-time-and-space-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 6,
      commandTerm: "Evaluate",
      guideRef: "works-in-translation",
      question:
        "A translator adapting a classical rhymed Persian ghazal into English faces three mutually competing goals: (1) preserving the recurring end-rhyme refrain (*radif*), (2) retaining culturally specific botanical metaphors unfamiliar to Anglophone readers, and (3) producing natural, haunting spoken rhythm in English. Evaluate the artistic trade-offs of prioritising each goal along Lawrence Venuti's spectrum.",
      modelAnswer:
        "Translating a tightly structured poetic form like the ghazal exposes why every verse translation demands strategic prioritisation rather than mechanical equivalence. Prioritising the recurring *radif* refrain honours acoustic architecture and hypnotic formal repetition—moving toward structural foreignisation—yet forcing English syntax to land repeatedly on identical phrases risks stilted inversions that drain lyrical spontaneity. Retaining culturally dense botanical metaphors (such as cypress, musk, or nightingale codes carrying centuries of erotic and spiritual connotation) preserves semantic richness and resists cultural erasure, yet without concise paratextual guidance an Anglophone audience may read symbolic conventions as merely decorative nature imagery. Conversely, prioritising haunting natural English rhythm leans toward domestication: freeing the line from strict refrain or replacing esoteric tropes with familiar English resonances can recreate immediate emotional urgency for a contemporary listener, though at the expense of erasing the ghazal's distinctive formal discipline and Persian cultural horizon. Ultimately, strong literary translators rarely operate at absolute extremes; they choose which formal signature is indispensable to the poem's voice and use paratext transparently to illuminate what English cannot seamlessly carry.",
      markScheme: [
        {
          point: "Evaluates BOTH gain (hypnotic formal/acoustic repetition) and risk (stilted English syntax) of preserving the refrain.",
          keywords: ["refrain", "repetition", "hypnotic", "stilted", "inversion", "syntax"],
        },
        {
          point: "Evaluates BOTH gain (cultural/symbolic richness, resisting erasure) and risk (opacity without paratext) of retaining botanical metaphors.",
          keywords: ["botanical", "erasure", "symbolic", "paratext", "decorative", "connotation"],
        },
        {
          point: "Evaluates BOTH gain (immediate emotional urgency/speakability) and risk (flattening formal discipline/cultural horizon) of natural English rhythm.",
          keywords: ["urgency", "spontaneity", "discipline", "horizon", "flattening", "listener"],
        },
        {
          point: "Maps these competing priorities explicitly onto Venuti's domestication vs foreignisation spectrum.",
          keywords: ["domestication", "foreignisation", "foreignization", "venuti", "spectrum"],
        },
        {
          point: "Recognises that mechanical 1:1 equivalence is impossible in verse translation—every choice is an interpretive trade-off.",
          keywords: ["equivalence", "trade-off", "prioritis", "interpretive", "competing"],
        },
        {
          point: "Synthesises a mature judgement acknowledging balanced mediation and transparent paratext.",
          keywords: ["extremes", "indispensable", "transparent", "mediation", "signature"],
        },
      ],
      markbands: [
        {
          band: "Band 1 (Limited)",
          marks: [1, 2],
          descriptor: "Lists the three options superficially or declares one choice 'best' without analysing poetic trade-offs.",
          indicators: ["Simplistic preference", "Ignores Venuti's spectrum"],
        },
        {
          band: "Band 2 (Adequate)",
          marks: [3, 4],
          descriptor: "Weighs pros and cons for each goal clearly and connects them to domestication and foreignisation.",
          indicators: ["Covers all three goals", "Sound translation terminology"],
        },
        {
          band: "Band 3 (Good–Perceptive)",
          marks: [5, 6],
          descriptor: "Evaluates formal acoustics, cultural-symbolic density, lyrical immediacy, and paratextual compensation with nuanced Venutian sophistication.",
          indicators: ["Sharp trade-off analysis for all three", "Avoids crude binary verdict"],
        },
      ],
      hints: [
        "Evaluate BOTH the artistic gain AND the artistic cost for EACH of the three goals—never treat any option as cost-free.",
        "Connect form/metaphor retention to foreignisation and fluent rhythm to domestication, then discuss how paratext mediates the gap.",
      ],
    },
    {
      id: "2-time-and-space-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 8,
      commandTerm: "Analyse",
      guideRef: "production-reception-contexts",
      question:
        "Read this unseen dramatic monologue fragment set in an 1859 colonial auction room:\n\n> *“Do not call it plunder, gentlemen—call it rescue. Look how calmly this bronze Bodhisattva rests beneath our museum gas-lamps, spared the monsoon damp of a temple no map of ours ever marked. Bid briskly; civilisation appreciates punctuality.”*\n\nAnalyse how dramatic irony, spatial diction, and commercial register expose imperial ideology—and examine how production and contemporary reception horizons diverge in hearing this speaker.",
      modelAnswer:
        "Through chillingly polished dramatic monologue, the speaker inadvertently indicts imperial acquisition even while striving to sanctify it. Opening with rhetorical rebranding—'Do not call it plunder, gentlemen—call it rescue'—the speaker's urgent euphemism immediately triggers dramatic irony: having to ban the accurate noun 'plunder' betrays guilty awareness of the violence beneath gentlemanly decorum. Spatial and sensory contrasts then stage an asymmetric hierarchy between metropole and colony. Placing the 'bronze Bodhisattva' beneath 'our museum gas-lamps' reframes sacred devotion as secular, domesticated display—'calmly' projecting passive consent onto a seized relic—while dismissing its living spiritual context as mere 'monsoon damp'. The boast that the temple was one 'no map of ours ever marked' reveals acute colonial solipsism: imperial cartography equates being unmapped by Europeans with lacking legitimate existence or custody. Finally, the abrupt tonal descent into auctioneering—'Bid briskly; civilisation appreciates punctuality'—collapses lofty moral pretext ('civilisation') directly into transactional commerce and industrial clock-time. Across historical horizons, an 1859 audience immersed in imperial exhibition culture might partly recognise familiar rhetoric of curatorial 'preservation', even as the sharp juxtaposition of 'rescue' and bidding already sows discomfort; a contemporary global reception horizon shaped by museum repatriation debates hears scalding satirical exposure in every syllable. Crucially, that modern indictment requires zero presentist invention: the monologue's own euphemisms and commercial bathos construct its self-condemnation from within.",
      markScheme: [
        {
          point: "Analyses opening rhetorical rebranding/euphemism ('plunder' vs 'rescue') generating dramatic irony and latent guilt.",
          keywords: ["euphemism", "dramatic irony", "rebranding", "guilty", "decorum", "inadvertently"],
        },
        {
          point: "Analyses spatial transformation of sacred artefact into domesticated display beneath 'museum gas-lamps'.",
          keywords: ["sacred", "secular", "display", "domesticated", "relic", "consent"],
        },
        {
          point: "Evaluates dismissal of living ecological/spiritual home as 'monsoon damp'.",
          keywords: ["dismiss", "spiritual", "living", "metropole", "colony"],
        },
        {
          point: "Analyses cartographic arrogance in 'no map of ours ever marked' (imperial mapping equating to legitimate existence).",
          keywords: ["cartograph", "solipsism", "arrogance", "custody", "existence", "legitimate"],
        },
        {
          point: "Evaluates sharp commercial bathos/juxtaposition uniting 'civilisation' with 'Bid briskly' and 'punctuality'.",
          keywords: ["bathos", "transactional", "commerce", "clock-time", "pretext", "auction"],
        },
        {
          point: "Contrasts an 1859 production horizon (imperial exhibition/preservation rhetoric) with contemporary repatriation reception.",
          keywords: ["curatorial", "preservation", "repatriation", "exhibition", "diverge"],
        },
        {
          point: "Explains why the modern critical reading avoids presentism—irony is already structurally built into the monologue.",
          keywords: ["presentis", "self-condemnation", "within", "structurally", "built"],
        },
        {
          point: "Sustains disciplined, craft-led tone and cohesive analytical structure throughout.",
          keywords: ["indicts", "satirical", "hierarchy", "ideology", "monologue"],
        },
      ],
      markbands: [
        {
          band: "Band 1 (Limited)",
          marks: [1, 2],
          descriptor: "States that stealing artefacts is wrong and paraphrases the speaker with minimal analysis of dramatic irony or diction.",
          indicators: ["Moralising summary", "Misses craft of dramatic monologue"],
        },
        {
          band: "Band 2 (Adequate)",
          marks: [3, 4],
          descriptor: "Identifies irony in 'rescue' vs 'plunder' and links 'museum' and 'map' to colonial attitudes clearly.",
          indicators: ["Quotes key words", "Basic 1859 vs modern contrast"],
        },
        {
          band: "Band 3 (Good)",
          marks: [5, 6],
          descriptor: "Evaluates euphemism, spatial relocation, cartographic power, and auctioneer bathos thoughtfully across production and reception horizons.",
          indicators: ["Strong Criterion B analysis", "Clear reception divergence"],
        },
        {
          band: "Band 4 (Perceptive)",
          marks: [7, 8],
          descriptor: "Delivers incisive Band 5 close reading uniting rhetorical euphemism, secularised sacred space, cartographic solipsism, commercial bathos, and anti-presentist horizon analysis.",
          indicators: ["Demonstrates irony works from *inside* the voice", "Crisp, authoritative prose"],
        },
      ],
      hints: [
        "Treat this as a dramatic monologue: notice how the speaker condemns *himself* through euphemism ('rescue') and bathos ('Bid briskly; civilisation appreciates punctuality').",
        "Unpack the extraordinary cartographic arrogance hidden in 'no map of ours ever marked'.",
        "Contrast 1859 curatorial rhetoric with contemporary repatriation debates while keeping the text's own irony central.",
      ],
    },
    {
      id: "2-time-and-space-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 8,
      commandTerm: "Evaluate",
      guideRef: "context-without-fallacy",
      question:
        "Read this flawed 110-word student essay excerpt written about an unseen wartime poem (*“We folded our brothers' coats into cedar trunks / and praised the harvest on the evening news”*):\n\n> *“During the bitter civil war of 1947, thousands of young men died while state broadcasters censored casualty figures. Because the poet lost two cousins during the fighting, he felt furious at politicians and clearly intended to expose government propaganda. Therefore, folding coats into trunks represents the author's own private mourning, while praising the harvest proves that state television lied to citizens. This historical tragedy makes the poem very sad and proves how bad war propaganda always is.”*\n\nEvaluate **four distinct contextual/analytical errors** in this student excerpt, and write a concise **Band 5 reconstruction** applying the Anchor-in-Craft Chain.",
      modelAnswer:
        "The excerpt stalls in low-to-mid bands despite accurate historical awareness because four interlocking errors displace literary analysis. First, it opens with a detached history-essay dump ('During the bitter civil war of 1947…') reciting textbook background unanchored to any stylistic feature. Second, it commits the biographical fallacy by mapping the speaker's 'brothers' coats' onto the poet's personal loss of 'two cousins', collapsing crafted voice into private diary. Third, it commits Wimsatt and Beardsley's intentional fallacy—claiming mind-reading access to what the poet 'felt furious' about and 'clearly intended'. Fourth, its conclusion collapses into vague evaluative cliché ('very sad', 'how bad war propaganda always is'), starving Criterion B of diction, structure, or irony analysis. A Band 5 Anchor-in-Craft reconstruction shifts immediately to textual mechanism: 'Through stark juxtaposition across a single coordinated sentence, the poem dramatises the chilling split between intimate bereavement and sanitised public ritual. The tactile domestic gesture of folding “brothers' coats into cedar trunks”—preserving garments meant to outlast absent bodies—encodes unspoken grief through metonymy and careful containment. Immediately linking that private burial-in-miniature via the unemphatic conjunction “and” to “praised the harvest on the evening news” generates biting situational irony: mass-media pastoral optimism does not merely ignore wartime loss, but smooths directly over it. Thus, structural understatement and sensory metonymy register the psychological violence of wartime censorship without ever declaring an explicit protest.'",
      markScheme: [
        {
          point: "Diagnoses Error 1: detached history-essay dump in the opening sentence.",
          keywords: ["history", "dump", "detached", "textbook", "unanchored"],
        },
        {
          point: "Diagnoses Error 2: biographical fallacy collapsing poetic speaker into the poet's personal cousins/private mourning.",
          keywords: ["biographical", "cousins", "collapsing", "diary", "speaker"],
        },
        {
          point: "Diagnoses Error 3: intentional fallacy claiming what the poet 'felt' and 'clearly intended' (Wimsatt & Beardsley).",
          keywords: ["intentional", "wimsatt", "mind-reading", "intended", "furious"],
        },
        {
          point: "Diagnoses Error 4: reductive evaluative cliché / zero Criterion B craft analysis ('very sad', 'how bad').",
          keywords: ["cliché", "criterion b", "vague", "reductive", "starving"],
        },
        {
          point: "Reconstruction analyses the metonymy/tactile containment of 'folded… coats into cedar trunks'.",
          keywords: ["metonymy", "tactile", "containment", "bereavement", "absent", "garments"],
        },
        {
          point: "Reconstruction evaluates structural juxtaposition (especially the flat conjunction 'and') creating biting irony.",
          keywords: ["juxtaposition", "conjunction", "understatement", "irony", "coordinated"],
        },
        {
          point: "Reconstruction links 'praised the harvest on the evening news' to sanitised public media / wartime censorship cleanly.",
          keywords: ["sanitised", "sanitized", "pastoral", "optimism", "censorship", "media"],
        },
        {
          point: "Reconstruction uses disciplined analytical verbs ('dramatises', 'encodes', 'register') with zero mind-reading.",
          keywords: ["dramatises", "dramatizes", "encodes", "register", "psychological"],
        },
      ],
      markbands: [
        {
          band: "Band 1 (Limited)",
          marks: [1, 2],
          descriptor: "Spots one obvious problem (such as biography) and rewrites only slightly without genuine craft analysis.",
          indicators: ["Misses intentional fallacy or cliché", "Rewrite remains thematic summary"],
        },
        {
          band: "Band 2 (Adequate)",
          marks: [3, 4],
          descriptor: "Identifies two or three fallacies accurately and offers a cleaner rewrite referencing the coats and evening news.",
          indicators: ["Names core fallacies", "Embeds basic quotations in rewrite"],
        },
        {
          band: "Band 3 (Good)",
          marks: [5, 6],
          descriptor: "Diagnoses all four flaws accurately and delivers a focused craft-anchored rewrite analysing juxtaposition and irony.",
          indicators: ["Covers all four errors", "Solid Criterion B reconstruction"],
        },
        {
          band: "Band 4 (Perceptive)",
          marks: [7, 8],
          descriptor: "Delivers surgical diagnostic evaluation of all four errors paired with a Band 5 reconstruction unpacking metonymy, syntactic conjunction ('and'), pastoral irony, and understated censorship.",
          indicators: ["Pinpoint diagnostic precision", "Exemplary Anchor-in-Craft rewrite"],
        },
      ],
      hints: [
        "Check every single sentence of the student draft for a distinct flaw: sentence 1 (history dump), sentence 2 (biographical + intentional fallacy), sentence 4 (evaluative cliché / zero craft).",
        "In your rewrite, notice the devastating power of the flat conjunction 'and' joining 'folded coats' directly to 'praised the harvest on the evening news'.",
      ],
    },
    {
      id: "2-time-and-space-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 8,
      commandTerm: "Analyse",
      guideRef: "historical-cultural-lenses",
      question:
        "Read this unseen prose passage set in a rapidly globalising port city:\n\n> *“The heritage ordinance preserved the shophouse facades in pastel limewash while gutting everything behind the shuttered brick for climate-controlled boutiques. On evenings when the power grid hummed too loudly, old Mr. Tan stood across the tarmac counting upstairs windows that no longer opened onto laundry poles or supper smoke.”*\n\nAnalyse how architectural imagery, sensory negation, and focalisation explore cultural memory and the commercialisation of urban space.",
      modelAnswer:
        "By contrasting curated exterior spectacle against hollowed-out lived community, the extract anatomises how heritage preservation can paradoxically accelerate cultural erasure. Opening with bureaucratic irony, the 'heritage ordinance' claims to protect history, yet the brutal participial verb 'gutting' exposes violent commercial extraction hidden behind charming 'pastel limewash'. Visually, the preserved 'shophouse facades' become theatrical stage-flats: aesthetic nostalgia packaged for affluent 'climate-controlled boutiques', severing sealed, artificial air from tropical vernacular life. Acoustic intrusion deepens this displacement: the 'power grid hummed too loudly', replacing neighbourhood chatter with mechanical resonance that underscores hyper-modern consumption. Shifting focalisation to 'old Mr. Tan' standing 'across the tarmac' positions the elder spatially as an exile inside his own city—physically separated by modern roadway from a streetscape he once inhabited. Crucially, the closing sentence operates through poignant sensory negation: windows that 'no longer opened onto laundry poles or supper smoke' summon domestic routine precisely through its absence. Everyday visual ('laundry poles') and olfactory ('supper smoke') emblems of working-class intimacy have been evicted so pristine storefronts can market an empty silhouette of the past. Through stark lexical violence ('gutting'), spatial exile ('across the tarmac'), and elegiac absence, the prose subverts official heritage rhetoric and exposes gentrification as commodified memory.",
      markScheme: [
        {
          point: "Analyses bureaucratic irony contrasting 'heritage ordinance' / 'preserved' against the violent verb 'gutting'.",
          keywords: ["irony", "violent", "violence", "gutting", "extraction", "paradox"],
        },
        {
          point: "Evaluates superficiality of 'pastel limewash' and 'facades' functioning as hollow spectacle/stage-flats for 'boutiques'.",
          keywords: ["superficial", "spectacle", "stage-flat", "hollow", "nostalgia", "aesthetic"],
        },
        {
          point: "Analyses sensory/ecological sealing in 'climate-controlled' (severing artificial commerce from vernacular life).",
          keywords: ["artificial", "sealed", "vernacular", "sealed", "tropical", "insulated"],
        },
        {
          point: "Evaluates acoustic disruption ('power grid hummed too loudly') replacing communal life with mechanical consumption.",
          keywords: ["acoustic", "mechanical", "consumption", "intrusion", "chatter"],
        },
        {
          point: "Analyses focalisation and spatial alienation—Mr. Tan standing 'across the tarmac' as an internal exile.",
          keywords: ["focalisation", "focalization", "exile", "alienation", "separated", "roadway"],
        },
        {
          point: "Evaluates sensory negation ('no longer opened onto laundry poles or supper smoke') evoking intimacy through absence.",
          keywords: ["negation", "absence", "olfactory", "intimacy", "evicted", "poignant"],
        },
        {
          point: "Synthesises how urban redevelopment/gentrification commodifies historical memory into an empty silhouette.",
          keywords: ["gentrification", "commodif", "silhouette", "erasure", "evicted"],
        },
        {
          point: "Demonstrates how the passage subverts official preservation rhetoric via disciplined textual evidence.",
          keywords: ["subvert", "rhetoric", "anatomis", "commercial", "working-class"],
        },
      ],
      markbands: [
        {
          band: "Band 1 (Limited)",
          marks: [1, 2],
          descriptor: "Summarises that old buildings became modern shops and an old man feels nostalgic, with little analysis of language.",
          indicators: ["Plot/theme paraphrase", "Ignores diction and focalisation"],
        },
        {
          band: "Band 2 (Adequate)",
          marks: [3, 4],
          descriptor: "Explains the contrast between preserved fronts and modern interiors clearly, quoting 'gutting' and 'supper smoke'.",
          indicators: ["Identifies facade vs interior contrast", "Notes sensory loss"],
        },
        {
          band: "Band 3 (Good)",
          marks: [5, 6],
          descriptor: "Analyses lexical irony ('gutting'), spatial separation ('across the tarmac'), and sensory negation effectively in relation to urban gentrification.",
          indicators: ["Links craft cleanly to cultural erasure", "Covers multiple stylistic layers"],
        },
        {
          band: "Band 4 (Perceptive)",
          marks: [7, 8],
          descriptor: "Perceptively unpacks preservation-as-erasure paradox, acoustic intrusion, internal exile via focalisation, and elegiac sensory absence in crisp Band 5 prose.",
          indicators: ["Sophisticated evaluation of commodified memory", "Tightly integrated conceptual movement"],
        },
      ],
      hints: [
        "Focus on the shocking lexical clash between polite 'preserved… pastel limewash' and visceral 'gutting'.",
        "Notice how the final sentence uses *negation* ('no longer opened onto laundry poles or supper smoke') to make absent community vividly present.",
        "Examine Mr. Tan's exact spatial position ('across the tarmac') as an emblem of urban displacement.",
      ],
    },
    {
      id: "2-time-and-space-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 10,
      commandTerm: "Compare and contrast",
      guideRef: "works-in-translation",
      question:
        "Read two English translations of the same imagined 1930s dramatic confrontation between a tenant and a landlord (in the source language, the tenant switches suddenly from an honorific title to an intimate pronoun at the final line):\n\n- **Translation A (Domesticated Stage Adaptation):**\n  **TENANT:** *“Sir, I've paid my rent every winter for twenty years—now you're kicking my family into the snow? Listen to me, pal: the river freezes your doorstep too.”*\n- **Translation B (Foreignised Literary Edition, with footnote explaining the abrupt pronoun drop on the final sentence):**\n  **TENANT:** *“Exalted Master, twenty winters I have laid silver at your threshold—and now you cast our hearth into white frost? Hear me well, brother-of-dust: the river freezes your threshold stone as surely as mine.”*\n\nCompare and contrast how these two translations negotiate register, dramatic speakability, cultural spatial motifs, and class defiance—and evaluate how each edition would alter an IB candidate's Individual Oral or Paper 2 analysis.",
      modelAnswer:
        "While both versions dramatise the identical climax of class defiance, their contrasting positions on Lawrence Venuti's spectrum yield fundamentally distinct theatrical experiences and analytical trajectories. Translation A embraces bold domestication tailored to live stage immediacy. Its contracted syntax ('I've paid', 'you're kicking') and blunt colloquial register preserve rapid dramatic speakability, ensuring an English theatre audience feels the sudden surge of working-class fury without consulting a glossary. Notably, Translation A compensates for the English loss of the source language's abrupt pronoun shift through the sarcastic slang epithet 'pal'—signalling provocative boundary-crossing instantaneously in performance, even though that Americanised idiom risks flattening the 1930s source culture into contemporary street parlance. By contrast, Translation B adopts disciplined foreignisation that foregrounds ritual hierarchy and poetic density. Opening with the elevated honorific 'Exalted Master' and ceremonial phrasing ('laid silver at your threshold'), Translation B widens the initial vertical gulf between tenant and landlord so that the sharp rupture documented in the paratextual footnote hits with heightened structural gravity. Furthermore, whereas Translation A renders space plainly ('my family', 'your doorstep'), Translation B anchors conflict inside potent cultural motifs: contrasting 'our hearth' (intimate domestic survival) against repeated 'threshold' and 'threshold stone' (the contested architectural boundary of power). Even its leveling epithet 'brother-of-dust' transforms personal anger into philosophical memento mori, challenging class hierarchy through shared mortality rather than snappy modern confrontation. For an IB candidate preparing an Individual Oral or Paper 2 essay, this divergence proves that edition choice actively shapes Criterion B craft analysis: studying Translation A invites evaluation of idiomatic pacing, colloquial irony, and performative punch, whereas Translation B rewards close analysis of elevated honorific register, recurring spatial motifs ('threshold', 'hearth'), and paratextual awareness—confirming that translation is never transparent glass, but an active co-constructor of literary meaning.",
      markScheme: [
        {
          point: "Positions Translation A as domesticated (stage-oriented) and Translation B as foreignised (culturally textured) along Venuti's spectrum.",
          keywords: ["domestication", "foreignisation", "foreignization", "venuti", "spectrum"],
        },
        {
          point: "Evaluates Translation A's genuine theatrical strengths (contracted syntax, speakability, immediate emotional pace).",
          keywords: ["speakability", "contracted", "immediacy", "colloquial", "performance", "punch"],
        },
        {
          point: "Analyses how Translation A compensates for English pronoun flattening via sarcastic slang ('pal')—and notes its cultural-flattening risk.",
          keywords: ["compensat", "sarcastic", "slang", "flattening", "parlance", "boundary-crossing"],
        },
        {
          point: "Evaluates how Translation B widens initial social hierarchy via elevated honorifics ('Exalted Master', 'laid silver').",
          keywords: ["hierarchy", "elevated", "honorific", "ceremonial", "gulf", "gravity"],
        },
        {
          point: "Integrates Translation B's paratextual footnote explaining the pronoun drop as a structural turning point.",
          keywords: ["paratext", "footnote", "pronoun", "rupture", "turning"],
        },
        {
          point: "Contrasts plain spatial terms ('doorstep') against recurring symbolic domestic/liminal motifs ('hearth', 'threshold stone').",
          keywords: ["motif", "threshold", "hearth", "architectural", "contested", "survival"],
        },
        {
          point: "Evaluates the tonal/conceptual shift from sarcastic 'pal' to philosophical 'brother-of-dust' (shared mortality leveling class).",
          keywords: ["mortality", "philosophical", "memento mori", "leveling", "levelling", "dust"],
        },
        {
          point: "Maintains integrated point-by-point comparison throughout rather than separate isolated summaries.",
          keywords: ["whereas", "contrast", "conversely", "while both", "divergence"],
        },
        {
          point: "Evaluates explicitly how each edition redirects an IB candidate's Criterion B analysis in the IO or Paper 2.",
          keywords: ["criterion b", "individual oral", "paper 2", "edition", "trajectories"],
        },
        {
          point: "Concludes with a resonant synthesis demonstrating translation as active interpretive co-construction.",
          keywords: ["transparent", "co-constructor", "interpretive", "active", "glass"],
        },
      ],
      markbands: [
        {
          band: "Band 1 (Limited)",
          marks: [1, 2],
          descriptor: "Notes casually that Version A sounds modern and Version B sounds formal/old-fashioned without analysing register, space, or IB implications.",
          indicators: ["Surface impressionism", "No Venuti or dramatic-craft analysis"],
        },
        {
          band: "Band 2 (Adequate)",
          marks: [3, 5],
          descriptor: "Applies domestication and foreignisation accurately and contrasts 'pal' with 'brother-of-dust', though misses deeper spatial motifs or IO/Paper 2 evaluation.",
          indicators: ["Clear identification of register gap", "Partial comparison"],
        },
        {
          band: "Band 3 (Good)",
          marks: [6, 8],
          descriptor: "Compares speakability, pronoun compensation, elevated honorifics, spatial symbolism, and paratext thoughtfully with clear links to IB essay craft.",
          indicators: ["Balanced evaluation of both editions' strengths", "Integrated comparative structure"],
        },
        {
          band: "Band 4 (Perceptive)",
          marks: [9, 10],
          descriptor: "Delivers Band 5 comparative mastery: evaluates dramatic speakability vs ritual density, sarcastic compensation vs philosophical mortality, spatial motif architecture, and exact Criterion B implications for IO/Paper 2.",
          indicators: ["Refuses simplistic good/bad verdict", "Perceptive exam-level meta-awareness"],
        },
      ],
      hints: [
        "Evaluate *both* editions generously and critically: Translation A cleverly compensates for the lost pronoun shift with sarcastic 'pal' for live theatre, while Translation B builds vertical distance ('Exalted Master') and spatial motifs ('hearth' / 'threshold').",
        "Compare 'pal' vs 'brother-of-dust'—how does each insult reframe the basis of class defiance?",
        "Be sure to answer the final part of the prompt: how would studying Edition A vs Edition B reshape your Criterion B evidence in an IO or Paper 2?",
      ],
    },
  ],
};
