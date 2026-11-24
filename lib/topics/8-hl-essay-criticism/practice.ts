import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "8-hl-essay-criticism-quiz-q01",
      kind: "mcq",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Identify",
      guideRef: "hl-essay-line-of-inquiry",
      question:
        "How many studied literary works does an IB English A: Literature HL Essay examine, and what is the assessment's maximum mark?",
      options: [
        "One distinct studied work, externally assessed out of 20 marks (Criteria A–D, 5 marks each)",
        "Two contrasting studied works, externally assessed out of 30 marks (Criteria A–D)",
        "One original English and one translated work, internally assessed out of 40 marks",
        "Three thematic works from different periods, externally assessed out of 20 marks",
      ],
      answerIndex: 0,
      hints: [
        "Separate the HL Essay from Paper 2 (2 works, 30 marks) and the Individual Oral (2 works, 40 marks).",
        "The HL Essay examines a single studied work worth 20% of the HL grade.",
      ],
      explanation:
        "The HL Essay focuses on ONE distinct studied work (English or translated, non-overlapping with IO and Paper 2) and is externally marked out of 20 marks across four equal 5-mark criteria (A5/B5/C5/D5).",
    },
    {
      id: "8-hl-essay-criticism-quiz-q02",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "State",
      guideRef: "hl-essay-drafting-rubric",
      question:
        "State the strict maximum counted word limit for the IB HL Essay beyond which examiners stop reading. (Enter a whole number.)",
      answer: { type: "number", value: 1500, display: "1,500 words" },
      traps: [
        {
          spec: { type: "number", value: 1200 },
          feedback: "1,200 words is the minimum floor — the question asks for the maximum upper ceiling.",
        },
        {
          spec: { type: "number", value: 4000 },
          feedback: "4,000 words is the Extended Essay limit, not the HL Essay ceiling!",
        },
      ],
      hints: [
        "The official IB HL Essay window spans 300 words from its floor to its hard ceiling.",
        "Think 1,200 to ___ words.",
      ],
      solution: [
        "The HL Essay must stay strictly between **1,200 and 1,500 counted words**.",
        "Examiners are instructed to stop reading beyond **1,500 words**.",
      ],
      commonError: "Confusing the 1,500-word HL Essay ceiling with the 4,000-word Extended Essay limit.",
    },
    {
      id: "8-hl-essay-criticism-quiz-q03",
      kind: "mcq",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Identify",
      guideRef: "critical-theoretical-lenses",
      question:
        "Which critical lens primarily investigates how economic structures, class hierarchies, labour, and commodification shape character agency and figurative language?",
      options: [
        "Ecocritical perspective focusing on anthropocentric attitudes to landscape",
        "Marxist perspective focusing on material conditions, class ideology, and commodification",
        "Psychoanalytic perspective focusing on unconscious repression, dreams, and the uncanny",
        "Narratological perspective focusing on focalisation, temporal order, and narrative frames",
      ],
      answerIndex: 1,
      hints: [
        "Look for the critical school concerned with material wealth, labour, and class power.",
        "Match the keywords 'commodification' and 'class hierarchies' to the exact perspective.",
      ],
      explanation:
        "A Marxist (materialist) critical perspective asks how class structures, labour, property, and economic ideology shape literary form, spatial metaphors, and character autonomy.",
    },
    {
      id: "8-hl-essay-criticism-quiz-q04",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "hl-essay-drafting-rubric",
      question:
        "A student's HL Essay document shows 1,548 total words. This includes a 16-word title, 24 words of parenthetical citations, and an 88-word Works Cited list. Calculate the official IB counted word total. (Enter a whole number.)",
      answer: { type: "number", value: 1420, display: "1,420 words" },
      traps: [
        {
          spec: { type: "number", value: 1548 },
          feedback: "Remember to subtract the excluded items: essay title, parenthetical citations, and Works Cited!",
        },
        {
          spec: { type: "number", value: 1460 },
          feedback: "You subtracted Works Cited (88), but forgot to also exclude the title (16) and parenthetical citations (24).",
        },
      ],
      hints: [
        "Add the three excluded components first: title + parenthetical citations + Works Cited.",
        "Subtract 16 + 24 + 88 = 128 from the document total of 1,548.",
      ],
      solution: [
        "Excluded words = 16 (title) + 24 (parenthetical citations) + 88 (Works Cited) = 128 words.",
        "Counted words = 1,548 − 128 = **1,420 words** (squarely in the 1,350–1,480w Band 5 sweet spot).",
      ],
      commonError: "Forgetting to exclude parenthetical citations or mistakenly excluding embedded primary quotations.",
    },
    {
      id: "8-hl-essay-criticism-quiz-q05",
      kind: "mcq",
      level: "HL",
      difficulty: "core",
      commandTerm: "Identify",
      guideRef: "evidence-argument-integration",
      question:
        "In an HL Essay on a studied play, a candidate weaves short 3–6 word dialogue phrases from Act I and Act III while tracking how a lighting motif transforms from warm illusion to stark exposure. Which core craft principle does this model?",
      options: [
        "Jargon-led theoretical framing prioritising named secondary critics over primary text",
        "Chronological scene-by-scene paraphrase outlining every plot event in sequential order",
        "Micro–macro integration braiding embedded close-reading with whole-work structural trajectory",
        "Biographical historical contextualisation proving the playwright's personal political beliefs",
      ],
      answerIndex: 2,
      hints: [
        "Notice the two scales working together: tiny embedded phrases (micro) + a lighting motif evolving from Act I to Act III (macro).",
        "Recall the 'Double Helix' principle from Section 3.",
      ],
      explanation:
        "Weaving concise embedded micro-quotations with whole-work structural transformation (from Act I to Act III) models the Micro–Macro Double Helix that lifts Criteria A, B, and C into Band 5.",
    },
    {
      id: "8-hl-essay-criticism-quiz-q06",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Identify",
      guideRef: "hl-essay-line-of-inquiry",
      question:
        "An HL Literature student studies 13 works. They select 2 works for their Individual Oral and 1 separate work for their HL Essay. Under the IB non-overlap rule, how many studied works remain eligible for Paper 2? (Enter a whole number.)",
      answer: { type: "number", value: 10, display: "10 works" },
      traps: [
        {
          spec: { type: "number", value: 11 },
          feedback: "You must exclude BOTH the 2 IO works AND the 1 HL Essay work (3 works locked in total).",
        },
        {
          spec: { type: "number", value: 12 },
          feedback: "Neither the 2 IO works nor the 1 HL Essay work may be reused in Paper 2.",
        },
      ],
      hints: [
        "Count how many works are locked away by the IO (2) and HL Essay (1) combined.",
        "Subtract 3 from 13.",
      ],
      solution: [
        "Locked works = 2 (Individual Oral) + 1 (HL Essay) = 3 works.",
        "Remaining Paper 2 eligible pool = 13 − 3 = **10 works**.",
      ],
    },
    {
      id: "8-hl-essay-criticism-quiz-q07",
      kind: "mcq",
      level: "HL",
      difficulty: "core",
      commandTerm: "Evaluate",
      guideRef: "hl-essay-drafting-rubric",
      question:
        "An HL Essay displays accurate comprehension and sharp craft terminology, yet scores 3/5 on Criterion C because each body paragraph begins with 'Next in Chapter 4...' and repeats the same claim. What targeted edit fixes this ceiling fastest?",
      options: [
        "Append a 200-word bibliography of extra published critics to signal deeper independent research",
        "Replace every short embedded quotation with full 4-line block quotes from key chapters",
        "Swap British spelling for American spelling consistently throughout the final redraft",
        "Reorganise body paragraphs into 3–4 progressive conceptual movements with evolving topic sentences",
      ],
      answerIndex: 3,
      hints: [
        "Diagnose why Criterion C stalled: chronological chapter-walking ('Next in Chapter 4...') and repetitive claims.",
        "How do Band 5 essays structure body sections instead of following plot sequence?",
      ],
      explanation:
        "Criterion C rewards conceptual focus, organisation, and progressive development. Re-architecting chronological plot paragraphs into 3–4 progressive conceptual movements (where each section deepens or complicates the inquiry) directly lifts Criterion C to Band 5.",
    },
    {
      id: "8-hl-essay-criticism-quiz-q08",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "State",
      guideRef: "evidence-argument-integration",
      question:
        "In MLA style, when writing an HL Essay on a studied work in translation, what essential contributor — alongside the original author — must be explicitly named in the Works Cited entry? (Type one word.)",
      answer: {
        type: "text",
        accept: ["translator", "the translator"],
        display: "Translator",
      },
      hints: [
        "Think about who shaped the specific English diction and cadence you are close-reading.",
        "In MLA Works Cited for translated editions, you write 'Translated by ___'.",
      ],
      solution: [
        "You must credit the **translator** explicitly in the Works Cited entry because different translations make distinct lexical and rhythmic choices.",
      ],
    },
    {
      id: "8-hl-essay-criticism-quiz-q09",
      kind: "written",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      guideRef: "hl-essay-line-of-inquiry",
      marks: 3,
      question:
        "Explain three reasons why the draft HL Essay title *'Loneliness in the Novel'* would cap a candidate's marks across Criteria A, B, and C.",
      hints: [
        "Check what is missing from a static one-noun topic: craft focus, conceptual tension, and structural progression.",
        "Connect each specific weakness cleanly to Criterion A, Criterion B, and Criterion C.",
      ],
      modelAnswer:
        "First, naming a static theme invites descriptive plot retelling rather than a nuanced, arguable interpretation, capping Criterion A. Second, omitting any authorial or formal mechanism encourages vague content commentary instead of evaluative close analysis of stylistic craft under Criterion B. Third, without an evolving tension to trace across the work, body paragraphs degenerate into an interchangeable catalogue of sad episodes rather than a progressive conceptual line of inquiry, restricting Criterion C.",
      markScheme: [
        {
          point: "Static theme invites plot retelling / lacks arguable tension (capping Criterion A)",
          keywords: ["plot retelling", "plot summary", "descriptive", "arguable", "static"],
        },
        {
          point: "Omits authorial/formal craft mechanism needed for evaluative analysis (capping Criterion B)",
          keywords: ["authorial", "formal", "stylistic", "craft", "technique"],
        },
        {
          point: "Produces a repetitive list rather than a progressive developing structure (capping Criterion C)",
          keywords: ["catalogue", "repetitive", "progressive", "developing", "interchangeable"],
        },
      ],
    },
    {
      id: "8-hl-essay-criticism-quiz-q10",
      kind: "written",
      level: "HL",
      difficulty: "core",
      commandTerm: "Distinguish",
      guideRef: "critical-theoretical-lenses",
      marks: 4,
      question:
        "Distinguish between unproductive 'jargon-dumping' and Band 5 deployment of a critical perspective (such as feminist or postcolonial criticism) in an HL Essay.",
      hints: [
        "Contrast what happens to the primary text in each approach: is the text buried under abstract theorist names, or illuminated by a sharp question?",
        "Mention how secondary critics are optional and how Criterion B and Criterion D respond to plain, text-anchored precision.",
      ],
      modelAnswer:
        "Unproductive jargon-dumping recites abstract theoretical labels or summarises named theorists instead of examining the literary work, forcing the text into a rigid cookie-cutter slogan and obscuring prose clarity under Criterion D. By contrast, Band 5 deployment converts a critical perspective into a probing analytical question that directs forensic attention to concrete authorial choices — such as focalisation, silencing, or code-switching — boosting Criterion B. Furthermore, top-band writers treat secondary critics as optional dialogue partners rather than substitutes for independent close reading, staying alert to moments where the primary text complicates or resists a single ideological verdict.",
      markScheme: [
        {
          point: "Jargon-dumping substitutes abstract theory labels / theorist summaries for primary close reading",
          keywords: ["abstract", "theorists", "labels", "substitutes", "recites"],
        },
        {
          point: "Jargon-dumping reduces text to cookie-cutter verdict or muddies register (Criterion D)",
          keywords: ["cookie-cutter", "slogan", "clarity", "obscuring", "register"],
        },
        {
          point: "Band 5 reframes perspective as a probing analytical question anchored in concrete authorial craft (Criterion B)",
          keywords: ["probing", "analytical question", "authorial choices", "focalisation", "craft"],
        },
        {
          point: "Band 5 keeps secondary critics optional and stays alert to textual friction / complexity",
          keywords: ["optional", "complicates", "resists", "friction", "independent"],
        },
      ],
    },
  ],
  papers: [
    {
      id: "8-hl-essay-criticism-p1",
      title: "Practice Paper 1 — Inquiry Architecture, Critical Lenses & Evidence Integration",
      level: "HL",
      questions: [
        {
          id: "8-hl-essay-criticism-p1-q01",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "State",
          guideRef: "hl-essay-line-of-inquiry",
          question:
            "State the exact percentage of the final IB HL English A: Literature grade carried by the HL Essay. (Enter a whole number.)",
          answer: { type: "number", value: 20, display: "20%" },
          traps: [
            {
              spec: { type: "number", value: 25 },
              feedback: "25% is Paper 2 at HL; the HL Essay carries 20%.",
            },
            {
              spec: { type: "number", value: 35 },
              feedback: "35% is Paper 1 at HL; the HL Essay carries 20%.",
            },
          ],
          hints: [
            "Recall the four HL weightings: Paper 1 (35%), Paper 2 (25%), Individual Oral (20%), and HL Essay.",
          ],
          solution: ["At HL, the HL Essay carries **20%** of the final IB English A: Literature grade."],
        },
        {
          id: "8-hl-essay-criticism-p1-q02",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Identify",
          guideRef: "critical-theoretical-lenses",
          question:
            "Which critical perspective asks how narrative framing, focalisation, psychic distance, and temporal manipulation (analepsis/prolepsis) govern reader alignment and truth-claims? (Type one word.)",
          answer: {
            type: "text",
            accept: ["narratological", "narratology", "formalist"],
            display: "Narratological",
          },
          hints: [
            "Think of the branch of literary criticism derived from 'narrative' architecture (associated with Gérard Genette).",
          ],
          solution: [
            "The **narratological** (or narratology) perspective investigates how structural storytelling mechanics — focalisation, order, frame, and distance — shape meaning.",
          ],
        },
        {
          id: "8-hl-essay-criticism-p1-q03",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Identify",
          guideRef: "critical-theoretical-lenses",
          question:
            "Which critical perspective examines how code-switching, untranslated idioms, spatial naming, and counter-narratives expose or resist imperial authority? (Type one word.)",
          answer: {
            type: "text",
            accept: ["postcolonial", "post-colonial", "postcolonialism"],
            display: "Postcolonial",
          },
          hints: [
            "Look at the key clues: 'imperial authority', 'code-switching', and 'untranslated idioms'.",
          ],
          solution: [
            "The **postcolonial** lens interrogates how language, hybridity, and narrative authority contest colonial hierarchies.",
          ],
        },
        {
          id: "8-hl-essay-criticism-p1-q04",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "hl-essay-line-of-inquiry",
          question:
            "A student budgets 1,080 body words in an HL Essay on a poetry collection. If they unwisely attempt to cover 9 poems evenly, how many body words remain per poem? (Enter a whole number.)",
          answer: { type: "number", value: 120, display: "120 words" },
          traps: [
            {
              spec: { type: "number", value: 360 },
              feedback: "360 words per poem is what you get with a cohesive 3-poem cluster (1,080 ÷ 3) — here the student tried 9 poems!",
            },
          ],
          hints: [
            "Divide the total body word budget (1,080) by the number of poems (9).",
            "Notice how tiny that per-poem allowance is — barely 4–5 sentences!",
          ],
          solution: [
            "1,080 ÷ 9 = **120 words per poem** — far too thin for Band 5 micro close-reading, which is why narrowing to 2–4 cohesive poems (~270–360w each) is essential.",
          ],
        },
        {
          id: "8-hl-essay-criticism-p1-q05",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "evidence-argument-integration",
          question:
            "What term describes the academic integrity violation of taking another critic's analytical paragraph, swapping several words for synonyms while keeping the underlying sentence structure and ideas, and omitting citation? (Type one word.)",
          answer: {
            type: "text",
            accept: ["patchwriting", "plagiarism", "mosaic plagiarism"],
            display: "Patchwriting",
          },
          hints: [
            "It combines 'patch' (stitching swapped synonyms together) with 'writing', and is classified as a form of plagiarism.",
            "Remember: borrowing another writer's sentence skeleton and analytical ideas without attribution breaches IB Academic Integrity even without verbatim copying.",
          ],
          solution: [
            "**Patchwriting** (a form of plagiarism) occurs when a writer borrows another source's ideas and syntactic skeleton with superficial word swaps and no attribution.",
          ],
        },
        {
          id: "8-hl-essay-criticism-p1-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "hl-essay-line-of-inquiry",
          question:
            "Name the single official IB Literature Concept (out of the seven) that best anchors an inquiry into how shifting unreliable narrators distort truth across a novel. (Type one word.)",
          answer: {
            type: "text",
            accept: ["perspective"],
            display: "Perspective",
          },
          hints: [
            "Recall the seven concepts: Identity, Culture, Creativity, Communication, Perspective, Transformation, Representation.",
            "Which concept directly governs vantage point, focalisation, and unreliable viewing?",
          ],
          solution: [
            "**Perspective** is the central IB Concept governing how vantage point, focalisation, and narrative framing shape and distort meaning.",
          ],
        },
        {
          id: "8-hl-essay-criticism-p1-q07",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "hl-essay-line-of-inquiry",
          marks: 3,
          question:
            "Explain how a candidate should apply the strict IB non-overlap rule when planning their HL Essay alongside the Individual Oral and Paper 2 across 13 studied works.",
          hints: [
            "State how many works each assessment requires (IO: 2, HL Essay: 1, Paper 2: 2).",
            "Clarify that no work may appear in more than one component and explain how early Learner Portfolio mapping prevents traps.",
          ],
          modelAnswer:
            "A candidate must partition their 13 studied works into three mutually exclusive allocations: two works (one originally English and one in translation) reserved solely for the Individual Oral, one separate studied work (English or translated) dedicated exclusively to the HL Essay, and the remaining ten works kept as the eligible Paper 2 reserve from which two distinct works are compared in the exam. Reusing any work across components breaches assessment regulations, so mapping these buckets early inside the Learner Portfolio guarantees full compliance.",
          markScheme: [
            {
              point: "Allocates 2 works (1 English + 1 translated) to IO and 1 distinct work (English or translated) to HL Essay",
              keywords: ["mutually exclusive", "two works", "separate", "distinct", "translation"],
            },
            {
              point: "States that remaining works form the eligible pool for Paper 2 with zero reuse across components",
              keywords: ["remaining", "eligible", "reusing", "regulations", "breaches"],
            },
            {
              point: "Recommends mapping work buckets early inside the Learner Portfolio to avoid traps",
              keywords: ["learner portfolio", "mapping", "buckets", "early", "compliance"],
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p1-q08",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Analyse",
          guideRef: "evidence-argument-integration",
          marks: 4,
          question:
            "Analyse the weaknesses in this draft excerpt and rewrite it so the quotation is seamlessly embedded and evaluated for authorial craft:\n*\"The protagonist is upset about her home. 'Every teacup stood lined along the mahogany shelf like tiny pale soldiers awaiting inspection.' This quote proves the house is strict.\"*",
          hints: [
            "Identify three distinct craft flaws: dropped standalone quote, vague verb ('proves'), and zero analysis of the simile/diction ('mahogany', 'tiny pale soldiers', 'inspection').",
            "Weave 2–6 word phrases directly into your own analytical sentence and evaluate the domestic militarisation effect.",
          ],
          modelAnswer:
            "The draft drops a 15-word quotation as an unintegrated sentence, wastes words on meta-signposting ('This quote proves'), and paraphrases flatly without unpacking the figurative craft. **Band 5 Rewrite:** *By likening domestic teacups to \"tiny pale soldiers\" arranged for \"inspection\" along rigid \"mahogany,\" the narrator recasts genteel hospitality as quiet military surveillance, compressing maternal anxiety into fragile porcelain obedience.*",
          markScheme: [
            {
              point: "Identifies the dropped / unintegrated quotation flaw",
              keywords: ["dropped", "unintegrated", "standalone", "meta-signposting"],
            },
            {
              point: "Identifies lack of figurative/stylistic evaluation or weak verb ('proves')",
              keywords: ["paraphrases", "unpacking", "figurative", "vague", "evaluative"],
            },
            {
              point: "Rewrite embeds short quoted phrases grammatically into an analytical clause",
              keywords: ["tiny pale soldiers", "inspection", "mahogany"],
            },
            {
              point: "Rewrite evaluates how militarised domestic imagery recasts home as surveillance/control",
              keywords: ["surveillance", "military", "recasts", "obedience", "hospitality"],
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p1-q09",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "evidence-argument-integration",
          marks: 4,
          question:
            "Explain four specific citation and academic integrity rules an HL candidate must uphold when writing an HL Essay on a work in translation alongside one optional secondary critical article.",
          hints: [
            "Cover: (1) consistent referencing style (e.g. MLA), (2) naming the translator in Works Cited, (3) citing paraphrased ideas as well as direct quotes from the secondary article, and (4) authentic independent prose (no AI rewriting / patchwriting).",
            "Remember to tie each rule directly to academic integrity and Learner Portfolio authenticity verification.",
          ],
          modelAnswer:
            "First, the candidate must apply one consistent bibliographic system (such as MLA 9th edition) for every in-text parenthetical reference and Works Cited entry. Second, because the primary work is translated, the Works Cited entry must explicitly credit the translator and exact edition analysed. Third, both direct quotations and paraphrased arguments drawn from the optional secondary critic must receive in-text and bibliographic attribution to prevent patchwriting or plagiarism. Fourth, every analytical sentence must reflect the candidate's authentic voice without uncredited copying or generative AI rewriting, corroborated by Learner Portfolio drafting records.",
          markScheme: [
            {
              point: "Apply one consistent citation style (e.g. MLA) across in-text references and Works Cited",
              keywords: ["consistent", "mla", "parenthetical", "works cited"],
            },
            {
              point: "Explicitly name the translator and exact edition of the translated primary work",
              keywords: ["translator", "edition", "translated"],
            },
            {
              point: "Attribute BOTH direct quotes and paraphrased ideas from the secondary critic (no patchwriting)",
              keywords: ["paraphrased", "attribution", "patchwriting", "plagiarism"],
            },
            {
              point: "Maintain authentic independent prose (no AI rewriting) evidenced by Learner Portfolio",
              keywords: ["authentic", "ai", "learner portfolio", "independent"],
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p1-q10",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Justify",
          guideRef: "critical-theoretical-lenses",
          marks: 4,
          question:
            "Justify why an HL candidate writing on a Gothic novel such as Mary Shelley's *Frankenstein* [Example text — not a set text] might choose to combine a **psychoanalytic** question with a **narratological** question rather than relying on biographical author commentary.",
          hints: [
            "Compare biographical intentional fallacy against text-centred formal and psychological inquiry.",
            "Show what each lens specifically unlocks in the novel: doubling/repression (psychoanalytic) + concentric epistolary frames (narratological).",
          ],
          modelAnswer:
            "Relying on author biography risks the intentional fallacy, diverting word budget from Criterion B literary craft into historical speculation. By contrast, pairing a psychoanalytic inquiry into doubling, repressed guilt, and uncanny monstrosity with a narratological focus on nested epistolary frames and unreliable testimony keeps analysis anchored strictly in textual architecture. Together, the two perspectives reveal how outer narrative containment mirrors psychological repression, generating perceptive whole-work interpretation under Criterion A without reducing the novel to a biographical diary.",
          markScheme: [
            {
              point: "Explains why biographical commentary risks intentional fallacy / starves Criterion B craft analysis",
              keywords: ["intentional fallacy", "speculation", "diverting", "craft"],
            },
            {
              point: "Shows what the psychoanalytic inquiry unlocks (doubling, repression, uncanny monstrosity)",
              keywords: ["doubling", "repressed", "repression", "uncanny"],
            },
            {
              point: "Shows what the narratological inquiry unlocks (nested frames, epistolary structure, unreliable testimony)",
              keywords: ["nested", "epistolary", "frames", "unreliable", "testimony"],
            },
            {
              point: "Demonstrates synergy between the two lenses (narrative containment mirrors psychic repression)",
              keywords: ["mirrors", "containment", "synergy", "architecture", "whole-work"],
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p1-q11",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Design",
          guideRef: "hl-essay-line-of-inquiry",
          marks: 6,
          question:
            "A student submits this weak working HL Essay title for a literary non-fiction memoir: *'Childhood Memories and Cultural Identity in the Memoir.'* Using the 4-stage Line-of-Inquiry Narrowing Funnel, diagnose its flaws and design a complete Band 5 line of inquiry plus a 3-movement progressive outline.",
          hints: [
            "Diagnose why the original fails C-F-T-E (static nouns, no authorial non-fiction craft, no tension).",
            "Name non-fiction authorial choices (e.g. retrospective vs experiencing persona, fragmented anecdote, bilingual syntax).",
            "Ensure Movements 1, 2, and 3 *evolve* progressively (premise → complication → counter-reading/shift) rather than repeating one point.",
          ],
          modelAnswer:
            "**Diagnosis:** The working title merely pairs two broad static nouns without specifying literary non-fiction craft (persona, rhetoric, structural pacing) or an arguable tension, inviting chronological summary rather than evaluation.\n\n**Band 5 Line of Inquiry:** *How does the shifting gap between retrospective and experiencing persona represent nostalgic memory as both cultural anchor and unreliable self-invention across the memoir?*\n\n**Progressive 3-Movement Architecture:**\n- **Movement 1 (Foundational Pattern):** Examine how sensory childhood anecdotes and lyrical diction initially construct memory as a warm, seamless refuge of cultural belonging.\n- **Movement 2 (Structural Complication):** Trace how abrupt retrospective interjections, self-correcting parentheses, and temporal ellipses fracture that certainty, exposing gaps in family recollection.\n- **Movement 3 (Counter-Reading & Synthesis):** Address the view that memory's instability undermines memoir's truth-claim, then argue via the closing metafictional coda that the writer deliberately foregrounds imaginative reconstruction as the only honest medium of diasporic identity.",
          markScheme: [
            {
              point: "Diagnoses static broad nouns lacking arguable tension and risking plot summary",
              keywords: ["static", "broad", "summary", "chronological", "tension"],
            },
            {
              point: "Identifies absence of non-fiction authorial craft (persona, rhetoric, anecdote, pacing)",
              keywords: ["persona", "rhetoric", "anecdote", "pacing", "non-fiction"],
            },
            {
              point: "Designs a narrow, arguable inquiry fusing an IB Concept + formal craft + dual tension",
              keywords: ["retrospective", "experiencing", "unreliable", "self-invention", "anchor"],
            },
            {
              point: "Movement 1 establishes an opening stylistic pattern through micro craft",
              keywords: ["sensory", "lyrical", "foundational", "refuge", "belonging"],
            },
            {
              point: "Movement 2 progresses by showing structural fracture / complication across the work",
              keywords: ["interjections", "ellipses", "fracture", "complication", "parentheses"],
            },
            {
              point: "Movement 3 integrates a counter-reading and whole-work resolution on truth/identity",
              keywords: ["counter-reading", "truth-claim", "metafictional", "reconstruction", "diasporic"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (5–6 marks)",
              marks: [5, 6],
              descriptor: "Sharp diagnosis of C-F-T-E deficits, Band 5 non-fiction inquiry anchored in craft and tension, and genuinely progressive 3-movement arc with counter-reading.",
              indicators: ["Non-fiction form craft explicit", "True conceptual evolution across movements"],
            },
            {
              band: "Band 3–4 (3–4 marks)",
              marks: [3, 4],
              descriptor: "Sound diagnosis and improved inquiry question, though body movements remain partly parallel or lightly linked to formal non-fiction features.",
            },
            {
              band: "Band 1–2 (0–2 marks)",
              marks: [0, 2],
              descriptor: "General advice only; redrafted title remains broad or thematic with minimal structural architecture.",
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p1-q12",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Evaluate",
          guideRef: "critical-theoretical-lenses",
          marks: 6,
          question:
            "Evaluate how two contrasting critical perspectives (choose any two from feminist, postcolonial, Marxist, psychoanalytic, ecocritical, or narratological) would generate *different* HL Essay lines of inquiry on the same single studied work (e.g. Henrik Ibsen's *A Doll's House* [Example text — not a set text] or Jean Rhys's *Wide Sargasso Sea* [Example text — not a set text]).",
          hints: [
            "State the illustrative work clearly with `[Example text — not a set text]` (or frame transferably across a named example).",
            "For Lens 1 and Lens 2, show the exact distinct analytical question, specific authorial choices tracked, and how juxtaposing both lenses uncovers richer complexity without jargon-dumping.",
          ],
          modelAnswer:
            "Using Henrik Ibsen's *A Doll's House* [Example text — not a set text] as an illustrative example, a **feminist** perspective and a **Marxist** perspective generate distinct yet complementary literary inquiries without lapsing into abstract jargon.\n\nThrough a **feminist lens**, the central question asks how theatrical space, pet-name diction, and physical choreography (such as the frantic tarantella) expose the performative containment of female identity. Here, close analysis tracks how Torvald's diminutive epithets and Nora's controlled stage movements construct infantilisation until the Act III dialogue strips away theatrical performance.\n\nThrough a **Marxist lens**, by contrast, the inquiry asks how recurring financial metaphors, debt ledgers, and bourgeois domestic ornaments reveal that marital affection operates as an economic contract governed by credit and class reputation. Close reading focuses on Krogstad's promissory note, bank-managerial register, and the commodification of Christmas gifts.\n\nEvaluating both lenses reveals why perspective choice shapes whole-work structure: the feminist lens privileges bodily autonomy and voice, whereas the Marxist lens exposes how even Nora's final exit remains shadowed by material precarity — demonstrating how critical friction prevents one-dimensional slogans.",
          markScheme: [
            {
              point: "Frames a clear, jargon-free analytical question for Critical Lens 1",
              keywords: ["feminist", "performative", "infantilisation", "containment", "autonomy"],
            },
            {
              point: "Links Lens 1 to concrete form-specific authorial choices (diction, staging, choreography, dialogue)",
              keywords: ["pet-name", "tarantella", "choreography", "diminutive", "stage"],
            },
            {
              point: "Frames a distinct, non-overlapping analytical question for Critical Lens 2",
              keywords: ["marxist", "economic contract", "bourgeois", "commodification", "credit"],
            },
            {
              point: "Links Lens 2 to distinct textual mechanisms (financial metaphors, ledgers, register, props)",
              keywords: ["promissory", "ledgers", "ornaments", "managerial", "gifts"],
            },
            {
              point: "Explicitly evaluates the divergence in what each lens illuminates across the work",
              keywords: ["complementary", "divergence", "privileges", "precarity", "distinct"],
            },
            {
              point: "Demonstrates how critical nuance avoids cookie-cutter ideological reduction",
              keywords: ["friction", "one-dimensional", "slogans", "jargon", "shadowed"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (5–6 marks)",
              marks: [5, 6],
              descriptor: "Incisive comparison of two lenses framed as crisp craft-led questions with distinct formal evidence and mature meta-evaluation of interpretive friction.",
            },
            {
              band: "Band 3–4 (3–4 marks)",
              marks: [3, 4],
              descriptor: "Clear account of two different lenses tied to textual moments, though evaluation of their divergence or craft specificity stays modest.",
            },
            {
              band: "Band 1–2 (0–2 marks)",
              marks: [0, 2],
              descriptor: "Descriptive textbook definitions of theory detached from concrete literary craft or structural inquiry.",
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p1-q13",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Analyse",
          guideRef: "evidence-argument-integration",
          marks: 8,
          question:
            "A student's HL Essay body movement on Franz Kafka's *The Metamorphosis* [Example text — not a set text] claims that Gregor's family shows zero sympathy from page one to the end. Analyse why this over-simplified claim hurts Criterion A and construct an upgraded 2-paragraph model demonstration showing micro close-reading, macro structural arc, and a fair counter-interpretation.",
          hints: [
            "Explain why an absolute 'zero sympathy from page one' claim ignores Grete's early care and flattens the novella's tragic trajectory (Criterion A & C).",
            "In Paragraph 1, acknowledge the fair counter-reading (Grete's initial milk/food offerings and protective routine) with crisp micro-craft.",
            "In Paragraph 2, pivot through the macro turning point (shifting from tender agency to bureaucratic fatigue, renaming Gregor 'it') to refine the thesis about conditional bourgeois empathy.",
          ],
          modelAnswer:
            "**Rubric Diagnosis:** Claiming the family exhibits 'zero sympathy from page one' flattens the novella's disturbing emotional evolution into a caricature, ignoring Grete's early solicitude and erasing the structural arc that makes her final betrayal devastating. Under Criterion A, this forfeits nuanced interpretation; under Criterion C, it leaves the argument static.\n\n**Model Movement — Counter-Reading & Micro-Macro Shift:**\nOn an initial reading, Grete's early ministrations appear to refute any claim that domestic affection is purely transactional: tiptoeing into Gregor's room, she curates a quiet buffet of scraps on newspaper and withdraws delicately so her gaze will not shame him. Kafka's measured, tactile syntax here lingers over small gestures of accommodation, inviting the reader to view sibling tenderness as a fragile counterweight to the father's harsh authority.\n\nYet tracing Grete's trajectory across the novella's macro arc exposes how quickly empathy corrodes once Gregor's wage-earning utility vanishes. By Part III, careful selection gives way to kicking food indiscriminately across the floorboards, and her linguistic pivot from the personal name 'Gregor' to the neuter pronoun 'it' completes his ontological erasure. Rather than proving the family was cartoonishly cruel from the outset, Kafka's gradual narrowing of Grete's gestures and diction demonstrates something far bleaker: bourgeois tenderness survives only while labour sustains domestic comfort.",
          markScheme: [
            {
              point: "Diagnoses how absolute claim flattens emotional evolution / ignores Grete's early care (Criterion A)",
              keywords: ["flattens", "caricature", "solicitude", "nuanced", "evolution"],
            },
            {
              point: "Notes how static thesis prevents progressive structural arc (Criterion C)",
              keywords: ["static", "arc", "betrayal", "trajectory"],
            },
            {
              point: "Acknowledges a fair counter-reading grounded in early textual detail",
              keywords: ["initial reading", "ministrations", "counterweight", "refute", "tenderness"],
            },
            {
              point: "Embeds micro stylistic craft in Paragraph 1 (syntax, tactile detail, gaze)",
              keywords: ["tactile", "syntax", "newspaper", "gaze", "gestures"],
            },
            {
              point: "Pivots clearly to macro structural shift in the later stage of the work",
              keywords: ["macro", "part iii", "corrodes", "floorboards", "indiscriminately"],
            },
            {
              point: "Analyses specific linguistic micro-evidence at the turning point (pronoun shift to 'it')",
              keywords: ["pronoun", "neuter", "ontological", "erasure", "linguistic"],
            },
            {
              point: "Refines rather than contradicts the central thesis (conditional bourgeois empathy)",
              keywords: ["conditional", "bourgeois", "utility", "wage-earning", "bleaker"],
            },
            {
              point: "Maintains concise, Band 5 academic register and cohesive transitions throughout",
              keywords: ["transactional", "sustains", "gradual", "narrowing"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (7–8 marks)",
              marks: [7, 8],
              descriptor: "Sharp rubric diagnosis paired with seamless Band 5 model paragraphs that weave micro craft, macro trajectory, and a refined counter-reading effortlessly.",
            },
            {
              band: "Band 3–4 (4–6 marks)",
              marks: [4, 6],
              descriptor: "Accurate diagnosis and relevant contrast between early and late scenes, though micro stylistic evaluation or seamless refinement stays uneven.",
            },
            {
              band: "Band 1–2 (0–3 marks)",
              marks: [0, 3],
              descriptor: "Plot-heavy summary of early and late events with minimal craft evaluation or rubric reasoning.",
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p1-q14",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Examine",
          guideRef: "hl-essay-line-of-inquiry",
          marks: 6,
          question:
            "Examine the unique opportunities and pitfalls of selecting a **translated poetry collection** as your single HL Essay work, outlining three concrete guardrails that protect Criteria A, B, and C.",
          hints: [
            "Address two distinct dimensions: (1) poetry collection scoping (2–4 poems vs 12 poems), and (2) translation awareness (word choice/register/crediting translator without claiming false fluency in the source language).",
            "Tie each guardrail cleanly to Criteria A, B, and C.",
          ],
          modelAnswer:
            "Choosing a translated poetry collection opens rich cross-cultural inquiry into *Culture*, *Perspective*, and acoustic form, yet poses three sharp hazards: skimming too many poems superficially, ignoring the mediator's role in translation, and fracturing the essay into disconnected mini-commentaries.\n\n**Guardrail 1 (Cohesive Cluster Scoping — Protects Crit A & B):** Anchor the 1,100-word body in **2–4 tightly linked poems** (~275–365 words per movement) rather than skimming a dozen titles, while gesturing briefly to the volume's overarching sequence so whole-work understanding stays persuasive.\n\n**Guardrail 2 (Humble, Text-Anchored Translation Awareness — Protects Crit B & D):** Credit the translator explicitly in Works Cited and analyse the translated English edition's concrete imagery, lineation, caesura, and register — acknowledging translated nuance (such as cultural idioms or footnotes) honestly without fabricating fluency in the source language.\n\n**Guardrail 3 (Single Conceptual Thread — Protects Crit C):** Unite all selected poems under one progressive formal inquiry (e.g. tracing how ironic understatement shifts from playful estrangement to elegiac starkness) rather than writing three isolated poem summaries.",
          markScheme: [
            {
              point: "Identifies key opportunity (cross-cultural conceptual richness / form) and core pitfalls",
              keywords: ["cross-cultural", "superficially", "disconnected", "hazards"],
            },
            {
              point: "Guardrail 1: focuses deeply on a cohesive cluster of 2–4 poems within ~1,100 body words",
              keywords: ["cluster", "2–4", "2-4", "cohesive", "sequence"],
            },
            {
              point: "Guardrail 1 links scoping to whole-work awareness (Criterion A) and micro depth (Criterion B)",
              keywords: ["whole-work", "overarching", "depth", "persuasive"],
            },
            {
              point: "Guardrail 2: names translator in Works Cited and analyses English edition's concrete poetic craft",
              keywords: ["translator", "works cited", "lineation", "caesura", "register"],
            },
            {
              point: "Guardrail 2 warns against fabricating fluency in the original language while noting cultural idioms",
              keywords: ["fabricating", "fluency", "idioms", "footnotes", "honestly"],
            },
            {
              point: "Guardrail 3: binds poems under one progressive conceptual arc rather than isolated mini-essays (Criterion C)",
              keywords: ["progressive", "conceptual", "isolated", "understatement", "elegiac"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (5–6 marks)",
              marks: [5, 6],
              descriptor: "Balanced, examiner-level examination of both poetry-collection scoping and translation ethics with concrete, rubric-mapped guardrails.",
            },
            {
              band: "Band 3–4 (3–4 marks)",
              marks: [3, 4],
              descriptor: "Sound practical advice on choosing fewer poems and crediting the translator, though links to Criteria A–C stay general.",
            },
            {
              band: "Band 1–2 (0–2 marks)",
              marks: [0, 2],
              descriptor: "Superficial remarks about poetry or translation lacking concrete HL Essay constraints.",
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p1-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Construct",
          guideRef: "evidence-argument-integration",
          marks: 10,
          question:
            "Construct a complete Band 5 architectural blueprint for a 1,420-word HL Essay on ONE illustrative literary work of your choice (explicitly labelled `[Example text — not a set text]`), specifying: (a) a sharpened conceptual Line of Inquiry, (b) one optional critical lens framed purely as a question, (c) a 4-movement micro–macro plan with word targets, (d) one explicit counter-interpretation node, and (e) MLA citation mechanics.",
          hints: [
            "Pick an illustrative work (e.g. Virginia Woolf's *Mrs Dalloway* [Example text — not a set text] or Chinua Achebe's *Things Fall Apart* [Example text — not a set text]) and check non-overlap status.",
            "Verify that your word targets (Intro + 4 Movements + Conclusion) sum to ~1,420 words cleanly inside 1,350–1,480w.",
            "Include concrete form-specific craft in every movement and show exact MLA in-text & Works Cited rules.",
          ],
          modelAnswer:
            "**Illustrative Work:** Chinua Achebe's *Things Fall Apart* [Example text — not a set text] (confirmed non-overlapping with IO and Paper 2).\n\n**(a) Line of Inquiry (Anchored to *Communication* & *Representation*):** *How does Achebe's interplay between oral Igbo proverbs, shifting narrative irony, and the closing bureaucratic diction represent colonial language as an instrument of both cultural erasure and tragic misunderstanding?*\n\n**(b) Optional Critical Lens (Postcolonial Question — Zero Jargon Overload):** *How do embedded indigenous speech rhythms and contrasting colonial registers contest who holds narrative authority to define history?*\n\n**(c) Word-Budgeted 4-Movement Micro–Macro Plan (Total = 1,420 Counted Words):**\n- **Conceptual Intro (150w):** Establish the tension between communal oral eloquence and imperial record-keeping, landing on a clear thesis.\n- **Movement 1 — Oral Aesthetics & Communal Rhythm (280w):** Micro-analyse proverb cadence and palm-oil metaphor in Part I to establish language as ethical glue across Umuofia.\n- **Movement 2 — Linguistic Fracture & Masculine Rigidity (280w):** Zoom to Okonkwo's clipped imperatives and domestic silences, showing internal communicative strain *before* colonial arrival.\n- **Movement 3 — Counter-Interpretation Node: Hybridity vs Translation Loss (280w):** Acknowledge the reading that missionaries' hymns genuinely resonate with marginalised outcasts (*osu*), then complicate this by analysing how mistranslation and ridicule hollow out Igbo cosmology.\n- **Movement 4 — Macro Inversion & Bureaucratic Closure (280w):** Dissect the devastating tonal wrench in the final paragraph where the District Commissioner reduces Okonkwo's tragedy to a single 'reasonable paragraph' inside a colonial handbook.\n- **Reflective Synthesis Conclusion (150w):** Synthesise how Achebe's own English novel turns the coloniser's medium back against imperial erasure (150 + 280×4 + 150 = 1,420 words).\n\n**(e) MLA Citation Hygiene:** Embed 2–8 word primary quotations grammatically with parenthetical page citations such as `(Achebe 7)` or `(209)` placed before the full stop, list the exact novel edition in an uncounted Works Cited page, and exclude title, parentheticals, and Works Cited from the 1,420-word count.",
          markScheme: [
            {
              point: "Explicitly labels illustrative work `[Example text — not a set text]` and notes non-overlap compliance",
              keywords: ["example text", "non-overlapping", "io", "paper 2"],
            },
            {
              point: "Crafts a Band 5 Line of Inquiry combining IB Concept + authorial craft + arguable tension",
              keywords: ["proverbs", "bureaucratic", "erasure", "communication", "representation"],
            },
            {
              point: "Frames optional critical lens as a sharp analytical question without jargon-dumping",
              keywords: ["postcolonial", "authority", "registers", "rhythms", "contest"],
            },
            {
              point: "Budgets Intro (~150w) and Conclusion (~150w) cleanly totalling ~1,420 counted words",
              keywords: ["150w", "1,420", "1420", "synthesis"],
            },
            {
              point: "Movement 1 pairs micro stylistic analysis with foundational macro premise",
              keywords: ["cadence", "palm-oil", "movement 1", "oral", "communal"],
            },
            {
              point: "Movement 2 advances the argument structurally via internal complication/shift",
              keywords: ["movement 2", "imperatives", "silences", "strain", "fracture"],
            },
            {
              point: "Movement 3 integrates a fair counter-interpretation and refines via craft evidence",
              keywords: ["counter-interpretation", "missionaries", "mistranslation", "complicate", "marginalised"],
            },
            {
              point: "Movement 4 traces macro resolution / ending inversion with concrete diction",
              keywords: ["movement 4", "district commissioner", "reasonable paragraph", "tonal", "closure"],
            },
            {
              point: "Specifies accurate MLA in-text citation rules (embedded micro-quotes, parenthetical placement)",
              keywords: ["mla", "parenthetical", "full stop", "page"],
            },
            {
              point: "Confirms word-count exclusions (title, parentheticals, Works Cited) vs counted body prose",
              keywords: ["uncounted", "exclude", "works cited", "edition"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (9–10 marks)",
              marks: [9, 10],
              descriptor: "Publication-grade HL Essay architecture: razor-sharp inquiry, jargon-free lens, cohesive 1,420w progressive micro–macro plan, genuine counter-reading, and spotless MLA discipline.",
            },
            {
              band: "Band 4 (7–8 marks)",
              marks: [7, 8],
              descriptor: "Strong, well-budgeted blueprint with sound craft focus and counter-reading, though one element (progression, lens framing, or MLA mechanics) lacks full precision.",
            },
            {
              band: "Band 3 (5–6 marks)",
              marks: [5, 6],
              descriptor: "Workable outline covering the required components, yet movements stay somewhat thematic/chronological or micro craft details are sparse.",
            },
            {
              band: "Band 1–2 (0–4 marks)",
              marks: [0, 4],
              descriptor: "Incomplete blueprint with vague topic framing, poor word budgeting, or missing counter-interpretation and citation rules.",
            },
          ],
        },
      ],
    },
    {
      id: "8-hl-essay-criticism-p2",
      title: "Practice Paper 2 — Word-Budgeting, Redrafting & Full 20-Mark Criteria A–D Evaluation",
      level: "HL",
      questions: [
        {
          id: "8-hl-essay-criticism-p2-q01",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "State",
          guideRef: "hl-essay-drafting-rubric",
          question:
            "State the minimum recommended counted word floor for the IB HL Essay. (Enter a whole number.)",
          answer: { type: "number", value: 1200, display: "1,200 words" },
          traps: [
            {
              spec: { type: "number", value: 1500 },
              feedback: "1,500 words is the maximum ceiling — the question asks for the minimum floor.",
            },
          ],
          hints: ["The official range is ___ to 1,500 words."],
          solution: ["The official IB HL Essay word range is **1,200** to 1,500 counted words."],
        },
        {
          id: "8-hl-essay-criticism-p2-q02",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Calculate",
          guideRef: "hl-essay-drafting-rubric",
          question:
            "An HL Essay has four body movements of 275, 290, 285, and 260 words, plus a 155-word introduction and a 145-word conclusion (all quotations included, citations excluded). Calculate the exact counted word total. (Enter a whole number.)",
          answer: { type: "number", value: 1410, display: "1,410 words" },
          traps: [
            {
              spec: { type: "number", value: 1110 },
              feedback: "1,110 is only the four body movements — remember to add the intro (155) and conclusion (145)!",
            },
          ],
          hints: [
            "First sum the 4 body movements: 275 + 290 + 285 + 260.",
            "Then add Intro (155) + Conclusion (145) = 300.",
          ],
          solution: [
            "Body total = 275 + 290 + 285 + 260 = 1,110 words.",
            "Intro + Conclusion = 155 + 145 = 300 words.",
            "Counted total = 1,110 + 300 = **1,410 words** (Band 5 sweet spot!).",
          ],
        },
        {
          id: "8-hl-essay-criticism-p2-q03",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "hl-essay-drafting-rubric",
          question:
            "A student's draft currently stands at 1,635 counted words. What is the MINIMUM number of counted words they must cut to sit safely at 1,460 words (inside the 1,350–1,480w sweet spot)? (Enter a whole number.)",
          answer: { type: "number", value: 175, display: "175 words" },
          traps: [
            {
              spec: { type: "number", value: 135 },
              feedback: "Cutting 135 words puts you right on the dangerous 1,500-word wall — the question asks to reach 1,460 words safely!",
            },
          ],
          hints: [
            "Subtract the target (1,460) from the current draft length (1,635).",
            "Notice that cutting down to 1,460 gives you a 40-word safety cushion beneath the 1,500-word stop-reading wall.",
          ],
          solution: ["1,635 − 1,460 = **175 words** to trim."],
        },
        {
          id: "8-hl-essay-criticism-p2-q04",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "hl-essay-drafting-rubric",
          question:
            "Which single IB HL Essay Criterion (A, B, C, or D) specifically evaluates 'Analysis and Evaluation' of how authorial choices shape meaning? (Type the criterion letter, e.g. A, B, C, or D.)",
          answer: {
            type: "text",
            accept: ["b", "criterion b", "crit b"],
            display: "Criterion B",
          },
          hints: [
            "Recall the four HL Essay criteria: A = Knowledge/Understanding/Interpretation, B = Analysis & Evaluation, C = Focus/Organisation/Development, D = Language.",
            "Match 'Analysis and Evaluation' of authorial choices to its exact letter.",
          ],
          solution: ["**Criterion B** (5 marks) assesses Analysis and Evaluation of authorial choices."],
        },
        {
          id: "8-hl-essay-criticism-p2-q05",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "hl-essay-drafting-rubric",
          question:
            "How many complete drafts of the HL Essay is an IB teacher legally permitted to review with general, holistic feedback? (Enter a whole number.)",
          answer: { type: "number", value: 1, display: "1 draft" },
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback: "IB authenticity rules strictly cap holistic teacher review at ONE complete draft.",
            },
            {
              spec: { type: "number", value: 3 },
              feedback: "Only ONE complete draft may receive general holistic feedback from the teacher.",
            },
          ],
          hints: [
            "Think about the official IB coursework authenticity limit on complete-draft feedback.",
            "Teachers provide general holistic comments on only ONE complete draft — never multiple line-edited rounds.",
          ],
          solution: [
            "Teachers may provide general, holistic guidance on **1** complete draft only (never line-editing or rewriting prose).",
          ],
        },
        {
          id: "8-hl-essay-criticism-p2-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "hl-essay-drafting-rubric",
          question:
            "An HL Essay earns A: 5/5, B: 4/5, C: 4/5, D: 5/5. Express this total score as a percentage of the 20 available marks. (Enter a whole number.)",
          answer: { type: "number", value: 90, display: "90%" },
          traps: [
            {
              spec: { type: "number", value: 18 },
              feedback: "18 is the raw mark out of 20 — convert 18/20 into a percentage!",
            },
          ],
          hints: [
            "Add the four criterion scores: 5 + 4 + 4 + 5 = 18 out of 20.",
            "Multiply (18 ÷ 20) by 100.",
          ],
          solution: [
            "Raw score = 5 + 4 + 4 + 5 = 18 / 20.",
            "Percentage = (18 ÷ 20) × 100 = **90%**.",
          ],
        },
        {
          id: "8-hl-essay-criticism-p2-q07",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "hl-essay-drafting-rubric",
          marks: 4,
          question:
            "Explain how each pass of the **3-Pass Redrafting Protocol (Architecture · Verbs · Word Wall)** improves specific IB HL Essay criteria before final submission.",
          hints: [
            "Cover Pass 1 (thesis + topic sentences → Criterion C), Pass 2 (upgrading weak verbs + cutting plot summary → Criteria B & D), and Pass 3 (manual counted-word check under 1,480w + citations → Criteria C & D).",
            "Name concrete examples of weak vs upgraded analytical verbs and the Band 5 sweet-spot range (1,350–1,480w).",
          ],
          modelAnswer:
            "During **Pass 1 (Architecture Audit)**, extracting only the thesis and opening topic sentences reveals whether body movements progress logically or repeat a static claim, strengthening **Criterion C**. During **Pass 2 (Craft & Verb Upgrade)**, deleting plot-retelling sentences and replacing generic verbs ('shows', 'uses') with precise analytical verbs ('destabilises', 'ironises', 'encodes') elevates evaluative depth under **Criterion B** and lexical precision under **Criterion D**. Finally, **Pass 3 (Word Wall & Citation Audit)** strips empty filler phrases so the manually verified count lands inside 1,350–1,480 words safely clear of the 1,500-word cut-off while confirming spotless referencing and non-overlap compliance.",
          markScheme: [
            {
              point: "Pass 1 checks thesis + topic sentences for progressive structure (lifts Criterion C)",
              keywords: ["topic sentences", "progress", "architecture", "criterion c"],
            },
            {
              point: "Pass 2 deletes plot summary and upgrades generic verbs into precise analytical verbs",
              keywords: ["plot-retelling", "generic verbs", "destabilises", "ironises", "encodes"],
            },
            {
              point: "Pass 2 explicitly linked to Criterion B (evaluative craft) and Criterion D (precision)",
              keywords: ["criterion b", "criterion d", "evaluative", "lexical"],
            },
            {
              point: "Pass 3 trims filler to hit 1,350–1,480w sweet spot and verifies citations / non-overlap",
              keywords: ["filler", "1,350", "1,480", "cut-off", "referencing"],
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p2-q08",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Distinguish",
          guideRef: "hl-essay-drafting-rubric",
          marks: 4,
          question:
            "Distinguish clearly between **Band 3** and **Band 5** performance on **Criterion A** and **Criterion B** of the HL Essay rubric.",
          hints: [
            "For Criterion A: contrast literal understanding / occasional summary (Band 3) with perceptive whole-work interpretation of subtle implications & ambiguity (Band 5).",
            "For Criterion B: contrast descriptive technique-spotting (Band 3) with sustained evaluation of how a range of authorial choices construct complex meaning (Band 5).",
          ],
          modelAnswer:
            "On **Criterion A (Knowledge, Understanding & Interpretation)**, a Band 3 script displays sound literal comprehension and relevant references, yet lapses into descriptive summary or predictable, surface-level conclusions. A Band 5 script demonstrates perceptive, persuasive grasp of the entire work, probing subtle implications, ironies, and unresolved ambiguity.\n\nOn **Criterion B (Analysis & Evaluation)**, a Band 3 script accurately spots literary devices ('uses metaphor', 'uses sibilance') while offering thin or generic explanations of effect. By contrast, a Band 5 script consistently evaluates *how* a rich range of authorial choices — across diction, form, and macro structure — collaborate to shape complex reader response.",
          markScheme: [
            {
              point: "Band 3 Criterion A: literal comprehension with lapses into summary / surface conclusions",
              keywords: ["literal", "summary", "predictable", "surface-level"],
            },
            {
              point: "Band 5 Criterion A: perceptive, persuasive whole-work interpretation of implications & ambiguity",
              keywords: ["perceptive", "persuasive", "implications", "ambiguity", "ironies"],
            },
            {
              point: "Band 3 Criterion B: accurate feature/technique-spotting with descriptive or generic effect",
              keywords: ["spots", "technique-spotting", "generic", "thin"],
            },
            {
              point: "Band 5 Criterion B: consistent evaluation of how diverse authorial choices shape complex reader effect",
              keywords: ["evaluates", "authorial choices", "reader response", "collaborate"],
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p2-q09",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Analyse",
          guideRef: "hl-essay-drafting-rubric",
          marks: 4,
          question:
            "Trim and upgrade this bloated 68-word draft excerpt into a lean (~35–42 word) Band 5 analytical sentence without losing its core literary insight:\n*\"In order to effectively emphasize the fact that the speaker feels deeply alienated from her homeland, the poet uses a lot of broken enjambment and cold metallic imagery throughout the stanza. It can clearly be seen that this very harsh choice makes the reader understand her painful sense of displacement in a strong way.\"*",
          hints: [
            "Hunt down empty fillers ('In order to effectively emphasize the fact that', 'It can clearly be seen that', 'in a strong way') and weak verbs ('uses', 'makes... understand').",
            "Fuse the formal devices ('fractured enjambment', 'metallic imagery') directly into active analytical verbs.",
          ],
          modelAnswer:
            "**Critique of Bloat:** The draft wastes over 25 words on redundant throat-clearing ('in order to effectively emphasize the fact that', 'it can clearly be seen that', 'in a strong way') and generic verbs ('uses', 'makes').\n\n**Band 5 Lean Upgrade (34 words):** *Fractured enjambment and cold metallic imagery sever the speaker's lyrical rhythm, enacting her cultural estrangement directly in the stanza's jagged acoustics rather than merely reporting displacement to a detached reader.*",
          markScheme: [
            {
              point: "Pinpoints redundant filler phrases and weak generic verbs in the original",
              keywords: ["throat-clearing", "redundant", "filler", "generic verbs"],
            },
            {
              point: "Eliminates word bloat while retaining both formal choices (enjambment + metallic imagery)",
              keywords: ["enjambment", "metallic", "jagged", "acoustics"],
            },
            {
              point: "Upgrades to active, evaluative analytical verbs ('sever', 'enacting')",
              keywords: ["sever", "enacting", "estrangement", "lyrical"],
            },
            {
              point: "Connects poetic form directly to reader experience / conceptual effect concisely",
              keywords: ["rhythm", "displacement", "detached", "reporting"],
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p2-q10",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Evaluate",
          guideRef: "hl-essay-drafting-rubric",
          marks: 6,
          question:
            "A student's complete draft stands at **1,715 counted words** broken down as: Introduction (260w), Biographical Context Paragraph (195w), Movement 1 (310w), Movement 2 (320w), Movement 3 (390w — containing two 65-word block quotes), and Conclusion (240w). Evaluate the rubric risks of submitting as-is and design a quantitative trim plan bringing the essay cleanly to ~1,420 words.",
          hints: [
            "Explain the exact examiner stop-reading penalty at 1,500w (the entire 240w conclusion + final 215w disappear!).",
            "Target the three largest zero-value word hogs: the 195w biographical paragraph, the two 65w block quotes (130w → ~30w embedded phrases), and bloated intro/conclusion (~150w each).",
            "Show exact subtraction maths hitting ~1,420 words.",
          ],
          modelAnswer:
            "**Rubric Risk Assessment:** Submitting at 1,715 counted words triggers the strict 1,500-word examiner stop-reading wall: the final **215 words** — nearly the entire 240-word conclusion — will go unread, stripping away synthesis and severely penalising Criteria C, A, and B. Furthermore, the standalone 195w biographical paragraph invites historical fallacy, and two 65w block quotes (130w) drain word budget from close craft analysis.\n\n**Surgical Trim Plan (Target ≈ 1,420 words):**\n1. **Cut the standalone Biographical Context Paragraph (−195w):** Keep at most one 20-word contextual phrase folded into the intro if relevant to the inquiry. Running total: **1,520w**.\n2. **Convert the two 65w block quotes in Movement 3 into crisp embedded 2–8 word phrases (−95w net savings, raising Criterion B & D):** Movement 3 drops from 390w to 295w. Running total: **1,425w**.\n3. **Tighten Introduction (260w → 160w, −100w) and Conclusion (240w → 150w, −90w):** Running total drops to **1,235w**.\n4. **Reinvest +185 high-value analytical words** into a dedicated counter-interpretation node across Movements 2–3, finishing at **1,420 counted words** — squarely inside the 1,350–1,480w sweet spot with dramatically higher analytical density!",
          markScheme: [
            {
              point: "Explains the 1,500w examiner stop-reading wall leaves 215 words (almost entire conclusion) unread",
              keywords: ["stop-reading", "215", "unread", "conclusion"],
            },
            {
              point: "Identifies rubric damage across Criteria C, A, and B from missing synthesis & biographical detour",
              keywords: ["historical fallacy", "synthesis", "penalising", "criteria"],
            },
            {
              point: "Eliminates the standalone 195w biographical paragraph",
              keywords: ["biographical", "195", "standalone", "folded"],
            },
            {
              point: "Replaces the two 65w block quotes with concise embedded micro-quotations",
              keywords: ["block quotes", "embedded", "micro", "295w", "95w"],
            },
            {
              point: "Tightens bloated intro (~150–160w) and conclusion (~150w)",
              keywords: ["160w", "150w", "tighten", "intro"],
            },
            {
              point: "Reinvests saved space into deeper analysis / counter-reading to land squarely at ~1,420w sweet spot",
              keywords: ["reinvest", "counter-interpretation", "1,420", "sweet spot", "density"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (5–6 marks)",
              marks: [5, 6],
              descriptor: "Exact diagnosis of the 1,500w cut-off impact and mathematically verified surgical edit plan that cuts low-value bloat while raising analytical depth into the sweet spot.",
            },
            {
              band: "Band 3–4 (3–4 marks)",
              marks: [3, 4],
              descriptor: "Identifies main cuts (biography, block quotes, intro/conclusion) with approximate arithmetic, though reinvestment for analytical depth is limited.",
            },
            {
              band: "Band 1–2 (0–2 marks)",
              marks: [0, 2],
              descriptor: "Vague advice to 'shorten paragraphs' without quantifying cuts or explaining the examiner stop-reading rule.",
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p2-q11",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Justify",
          guideRef: "hl-essay-drafting-rubric",
          marks: 4,
          question:
            "Justify why an IB HL Essay introduction (~150 words) should avoid sweeping universal openings (e.g. *'Since the dawn of human civilisation, authors have explored love and betrayal'*) and instead open directly inside the work's conceptual tension.",
          hints: [
            "Link wasted generic sentences directly to the tight 1,200–1,500 word budget.",
            "Show how an immediate conceptual hook sets up Band 5 Criteria A, C, and D from sentence one.",
          ],
          modelAnswer:
            "First, within a strict 1,200–1,500 word ceiling, sweeping cliché openings squander 30–50 irreplaceable words on truisms that earn zero credit. Second, generic throat-clearing dilutes **Criterion C (Focus)** by delaying the specific literary line of inquiry and signalling a predictable formulaic essay. Third, opening directly inside the studied work's central conceptual tension immediately establishes scholarly authority and academic register (**Criterion D**). Fourth, framing the textual paradox in the opening lines clears space for a sharp, arguable thesis that previews progressive whole-work interpretation (**Criterion A**).",
          markScheme: [
            {
              point: "Highlights wasted word budget inside the tight 1,200–1,500w limit",
              keywords: ["squander", "truisms", "irreplaceable", "cliché"],
            },
            {
              point: "Shows generic openings weaken immediate focus on the inquiry (Criterion C)",
              keywords: ["criterion c", "formulaic", "delaying", "dilutes"],
            },
            {
              point: "Demonstrates that opening inside conceptual tension establishes academic authority (Criterion D)",
              keywords: ["criterion d", "authority", "register", "scholarly"],
            },
            {
              point: "Clears space for a precise, arguable thesis launching whole-work interpretation (Criterion A)",
              keywords: ["criterion a", "paradox", "thesis", "progressive"],
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p2-q12",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Contrast",
          guideRef: "hl-essay-drafting-rubric",
          marks: 4,
          question:
            "Contrast a Band 3 HL Essay conclusion with a Band 5 reflective synthesis conclusion (~150 words), naming two specific errors to avoid in the final paragraph.",
          hints: [
            "Contrast verbatim repetition of earlier topic sentences (Band 3) with synthetic elevation of the evolved argument (Band 5).",
            "Name two pitfalls: introducing unanalysed new scenes/critics, and ending with a moralising real-world sermon.",
          ],
          modelAnswer:
            "A Band 3 conclusion mechanically repeats the introductory thesis and summarises each body paragraph verbatim, leaving the essay circular rather than progressive. By contrast, a Band 5 reflective synthesis (~150 words) distils how the essay's progressive movements deepened or complicated the opening premise and steps back briefly to illuminate the wider aesthetic or conceptual significance of the author's craft. Two critical final-paragraph traps to avoid are: (1) introducing brand-new, unanalysed quotations or secondary critics at the last minute (which breaks Criterion C closure), and (2) drifting into a preachy moralising lesson aimed at modern society rather than staying rooted in literary art.",
          markScheme: [
            {
              point: "Characterises Band 3 conclusion as mechanical / verbatim repetition of intro and body",
              keywords: ["verbatim", "mechanically", "circular", "repeats"],
            },
            {
              point: "Characterises Band 5 conclusion as distilling argument evolution & widening aesthetic stakes",
              keywords: ["distils", "deepened", "aesthetic", "significance", "synthesis"],
            },
            {
              point: "Pitfall 1: introducing brand-new unanalysed evidence or critics at the end",
              keywords: ["brand-new", "unanalysed", "closure", "critics"],
            },
            {
              point: "Pitfall 2: drifting into a preachy / moralising real-world sermon",
              keywords: ["preachy", "moralising", "sermon", "society"],
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p2-q13",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Evaluate",
          guideRef: "hl-essay-drafting-rubric",
          marks: 8,
          question:
            "Read this 115-word sample HL Essay paragraph on Wisława Szymborska's translated poem collection *View with a Grain of Sand* [Example text — not a set text]:\n*\"In the poem 'View with a Grain of Sand', Szymborska uses personification and imagery to show that humans are very arrogant about nature. She writes: 'We call it a grain of sand, / but it calls itself neither grain nor sand.' This quote highlights that the sand does not care about human names. Also in another poem she talks about cats and empty apartments which similarly proves that animals do not understand human sadness. Therefore, Szymborska effectively emphasizes the theme of perspective across her book by showing nature is separate from people.\"*\n\nEvaluate this paragraph against Criteria A, B, C, and D, then compose a Band 5 redraft (~105–120 words).",
          hints: [
            "Diagnose each criterion cleanly: A (surface paraphrase 'sand does not care'), B (technique-spotting 'uses personification' + unanalysed quote), C (abrupt tacked-on 'Also in another poem' jump), D (repetitive weak verbs 'shows', 'highlights', 'proves', 'effectively emphasizes').",
            "In your redraft, dissect the exact syntax ('We call it... / neither grain nor sand'), unpack epistemic humility (naming as anthropocentric imposition), and link cleanly to the collection's wider arc.",
          ],
          modelAnswer:
            "**Criteria A–D Evaluation:**\n- **Crit A (Band 3):** Grasps the literal idea of non-human indifference yet reduces philosophical irony to flat paraphrase ('the sand does not care').\n- **Crit B (Band 2–3):** Spots 'personification and imagery' generically without unpacking the antithetical syntax, negation ('neither... nor'), or acoustic restraint.\n- **Crit C (Band 2–3):** Abruptly bolts on a second poem ('Also in another poem') with weak conceptual transition.\n- **Crit D (Band 3):** Cluttered with dropped quotes and weak verbs ('uses', 'shows', 'highlights', 'proves', 'effectively emphasizes').\n\n**Band 5 Redraft:**\n*Through deceptively spare antithesis, Szymborska dismantles anthropocentric mastery at the level of naming itself: while human speech asserts possessive taxonomy — \"We call it a grain of sand\" — the immediate caesura and balanced negation (\"neither grain nor sand\") quietly strip language of authority over matter (lines 1–2). Rather than endowing the pebble with sentimental consciousness, this austere refusal of metaphor enacts an ecocritical humility that recurs across the volume's domestic elegies, where non-human observers expose human grief as provincial rather than cosmic. Perspective thus emerges not as an empathetic bridge to the world, but as a linguistic boundary humans repeatedly mistake for reality.*",
          markScheme: [
            {
              point: "Crit A diagnosis: literal grasp flattened into surface paraphrase",
              keywords: ["literal", "paraphrase", "indifference", "philosophical"],
            },
            {
              point: "Crit B diagnosis: generic technique-spotting without evaluating syntax/negation",
              keywords: ["technique-spotting", "antithetical", "negation", "generically"],
            },
            {
              point: "Crit C diagnosis: abrupt tacked-on shift to second poem ('Also in another poem')",
              keywords: ["abruptly", "bolts on", "transition", "second poem"],
            },
            {
              point: "Crit D diagnosis: dropped quote and repetitive weak verbs ('shows', 'highlights', 'proves')",
              keywords: ["dropped", "weak verbs", "cluttered", "effectively"],
            },
            {
              point: "Redraft embeds micro-phrases seamlessly with MLA line citation",
              keywords: ["lines 1–2", "lines 1-2", "grain of sand", "neither grain nor sand"],
            },
            {
              point: "Redraft unpacks exact linguistic craft (antithesis, taxonomy, negation, refusal of metaphor)",
              keywords: ["antithesis", "taxonomy", "caesura", "austere", "metaphor"],
            },
            {
              point: "Redraft bridges micro reading cleanly to macro volume pattern (ecocritical humility / domestic elegies)",
              keywords: ["ecocritical", "humility", "elegies", "provincial", "cosmic"],
            },
            {
              point: "Redraft lands on a perceptive conceptual synthesis on Perspective with Band 5 register",
              keywords: ["anthropocentric", "linguistic boundary", "dismantles", "enacts"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (7–8 marks)",
              marks: [7, 8],
              descriptor: "Pinpoint A–D rubric diagnosis paired with a concise, publication-grade Band 5 rewrite displaying forensic micro analysis, macro cohesion, and luminous prose.",
            },
            {
              band: "Band 3–4 (4–6 marks)",
              marks: [4, 6],
              descriptor: "Identifies key A–D flaws accurately and produces a clearer redraft, though syntactic analysis or macro integration remains modest.",
            },
            {
              band: "Band 1–2 (0–3 marks)",
              marks: [0, 3],
              descriptor: "General criticism of the draft and minimal improvement over technique-spotting or weak prose.",
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p2-q14",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Discuss",
          guideRef: "hl-essay-drafting-rubric",
          marks: 6,
          question:
            "Discuss why the IB teacher-supervision boundary (holistic feedback on **one complete draft only**, zero line-editing) actually benefits an HL candidate's long-term mastery for Paper 1 and Paper 2 as well as university writing.",
          hints: [
            "Connect independent self-editing skills (Architecture Audit, Verb Upgrade, Word-Wall trimming) to authentic authorship.",
            "Show how diagnosing your own Criteria A–D blind spots transfers directly into closed-book Paper 1 & Paper 2 planning and revision.",
          ],
          modelAnswer:
            "Although candidates sometimes wish a teacher could polish sentences across multiple rounds, the IB's one-draft holistic boundary protects both academic integrity and transferable literary independence.\n\nFirst, receiving conceptual rather than line-by-line feedback forces the candidate to internalise the exact rubric separators — learning to spot plot summary (Criterion A), technique-spotting (Criterion B), and chronological drift (Criterion C) with their own eyes. Second, self-executing the 3-Pass Redrafting Protocol builds real-time editorial judgement under pressure: the exact instinct required to tighten a Paper 1 commentary or prune plot bloat during closed-book Paper 2 exams where no teacher is present. Third, maintaining genuine intellectual ownership from Learner Portfolio inception to final submission prepares candidates directly for university seminars, where independent thesis refinement and self-editing define distinction-level criticism.",
          markScheme: [
            {
              point: "Explains the integrity rationale of holistic one-draft guidance over sentence-level polishing",
              keywords: ["integrity", "polishing", "conceptual", "ownership"],
            },
            {
              point: "Shows how independent revision internalises Criterion A, B, and C rubric separators",
              keywords: ["internalise", "separators", "plot summary", "technique-spotting", "chronological"],
            },
            {
              point: "Connects self-editing skills directly to Paper 1 unseen commentary craft",
              keywords: ["paper 1", "editorial", "pressure", "commentary"],
            },
            {
              point: "Connects pruning/focus discipline directly to closed-book Paper 2 performance",
              keywords: ["paper 2", "closed-book", "prune", "bloat"],
            },
            {
              point: "References the 3-Pass Redrafting Protocol / Learner Portfolio intellectual trail",
              keywords: ["redrafting", "learner portfolio", "inception", "judgement"],
            },
            {
              point: "Highlights transfer to university-level independent critical writing",
              keywords: ["university", "seminars", "refinement", "distinction-level"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (5–6 marks)",
              marks: [5, 6],
              descriptor: "Thoughtful, well-structured discussion connecting IB authenticity rules directly to rubric mastery, Paper 1/Paper 2 transfer, and university scholarship.",
            },
            {
              band: "Band 3–4 (3–4 marks)",
              marks: [3, 4],
              descriptor: "Clear explanation of why independent drafting builds writing skill, though links to specific exam papers or rubric criteria stay broad.",
            },
            {
              band: "Band 1–2 (0–2 marks)",
              marks: [0, 2],
              descriptor: "Brief, generic remarks about learning independently without engaging IB assessment mechanics.",
            },
          ],
        },
        {
          id: "8-hl-essay-criticism-p2-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Evaluate",
          guideRef: "hl-essay-drafting-rubric",
          marks: 20,
          question:
            "**FULL 20-MARK HL ESSAY MODERATION & REDRAFT EVALUATION (Criteria A5 / B5 / C5 / D5):**\n\nRead this examiner's profile of an anonymous draft HL Essay on a studied play (confirmed non-overlapping with IO & Paper 2):\n- **Title:** *Power and Betrayal in the Play*\n- **Word Count:** 1,620 counted words (Intro 250w with 140w playwright biography · Act I summary + analysis 360w · Act II summary + analysis 380w · Act III analysis 390w including a 90w block quote · Conclusion 240w)\n- **Evidence & Criticism:** Summarises three named theorists in the intro without applying them to dialogue; accurately identifies dramatic irony, lighting cues, and pauses, but mostly states they 'add tension' or 'show betrayal'; ignores Act III's ambiguous silent ending; repeats 'uses', 'shows', and drops standalone quotes without MLA act/scene/line citations.\n\nAct as a Senior IB Examiner: (1) assign realistic marks out of 5 for EACH Criterion (A, B, C, D) with exact rubric justification, (2) calculate the total out of 20, and (3) provide a complete, actionable Criterion-by-Criterion Band 5 Redraft Blueprint (new sharpened Line of Inquiry, revised 1,400w word budget, craft/counter-reading upgrade, and citation/language overhaul).",
          hints: [
            "Grade strictly using real IB HL Essay markbands (A5 / B5 / C5 / D5): this script lands roughly around 10–12/20 (e.g. A: 3, B: 2–3, C: 2, D: 3 = 10–11/20).",
            "For Criterion C, highlight BOTH the chronological Act I → II → III walkthrough AND the catastrophic 1,500-word examiner stop-reading wall (losing the last 120w of the conclusion!).",
            "Build a full concrete Band 5 overhaul covering: sharpened inquiry (Concept + dramatic craft + tension), exact 1,400w budget (~150 / 280 / 280 / 280 / 260 / 150), removing theorist name-dropping & biography, evaluating the silent Act III counter-reading, and MLA `(act.scene.line)` + active analytical verbs.",
          ],
          modelAnswer:
            "**PART 1 — SENIOR EXAMINER MODERATION (Total: 10 / 20 — Low-Mid Band 3 Profile):**\n\n- **Criterion A — Knowledge, Understanding & Interpretation: 3 / 5.** The draft demonstrates basic factual comprehension of the play's plot across all three acts, yet remains trapped in chronological retelling, wastes 140 words on biographical detour, and ignores the ambiguous silent ending in Act III — forfeiting the nuanced, persuasive whole-work insight required for Band 4–5.\n- **Criterion B — Analysis & Evaluation: 2 / 5.** Although theatrical features (dramatic irony, lighting cues, pauses) are spotted accurately, commentary stops at reductive labels ('add tension', 'show betrayal') without dissecting how staging mechanics manipulate audience complicity. Furthermore, dropping a 90-word unanalysed block quote and name-dropping three theorists unanchored to dialogue starve formal evaluation.\n- **Criterion C — Focus, Organisation & Development: 2 / 5.** Two severe structural penalties cap Criterion C: (1) the vague thematic title spawns a mechanical chronological walk through Acts I, II, and III rather than progressive conceptual movements, and (2) at **1,620 counted words**, the examiner stops reading strictly at 1,500 words, amputating the final 120 words of the conclusion and destroying closure.\n- **Criterion D — Language: 3 / 5.** Prose is comprehensible and uses basic dramatic vocabulary, yet repetitive weak verbs ('uses', 'shows'), dropped standalone quotations, missing MLA act/scene/line citations, and unintegrated theory jargon prevent precise, fluent academic register.\n\n**PART 2 — ACTIONABLE BAND 5 REDRAFT BLUEPRINT (Targeting 19–20 / 20):**\n\n1. **Overhaul Line of Inquiry (Lifts Crit A & C):** Replace *'Power and Betrayal'* with an arguable conceptual inquiry anchored to **Communication** and theatrical form: *How do strategic stage silences, shifting lighting boundaries, and conversational subtext represent domestic authority as fragile theatrical performance across the play?*\n2. **Eliminate Jargon & Biography Bloat (Lifts Crit B & D):** Delete the 140-word playwright biography and remove the three name-dropped theorists; if retaining a feminist or Marxist lens, translate it into one plain probing question about spatial control without abstract checklist labels.\n3. **Re-Architect into a 1,400-Word Progressive Blueprint (Lifts Crit C to 5/5):**\n   - **Conceptual Intro (150w):** Hook directly into the paradox of authority-as-performance and state an arguable thesis.\n   - **Movement 1 (280w — Establishing Control):** Micro-analyse polite drawing-room subtext and warm lighting in early scenes to show how power disguises itself as consensus.\n   - **Movement 2 (280w — Fracture & Dramatic Irony):** Trace how interrupted stichomythia and stark lighting shifts expose deceit beneath formal etiquette.\n   - **Movement 3 (280w — Counter-Reading & Ambiguity):** Address the surface reading that the Act III confrontation restores moral order, then dissect the ambiguous silent ending and frozen proxemics to show unresolved ethical complicity.\n   - **Movement 4 (260w — Macro Theatrical Arc):** Synthesise how recurring stage thresholds invert earlier hierarchies across the whole play.\n   - **Reflective Synthesis Conclusion (150w):** Distil the evolved insight safely at **1,400 counted words** — 100 words clear of the 1,500-word stop-reading cliff!\n4. **Micro-Craft, Language & MLA Citation Polish (Lifts Crit B & D to 5/5):** Break the 90-word block quote into crisp 3–7 word embedded phrases analysed with exact analytical verbs (*destabilises, exposes, indicts, enacts*), add consistent MLA drama citations such as `(3.2.44–47)` plus an uncounted Works Cited entry citing the exact edition, and verify final word count manually after Pass 3.",
          markScheme: [
            {
              point: "Assigns justified Band 2–3 score for Criterion A (noting plot retelling & biographical detour)",
              keywords: ["criterion a", "retelling", "biographical", "3 / 5"],
            },
            {
              point: "Criterion A notes missed interpretive opportunity in Act III's ambiguous silent ending",
              keywords: ["ambiguous", "silent ending", "whole-work", "nuanced"],
            },
            {
              point: "Assigns justified Band 2–3 score for Criterion B (diagnosing technique-spotting: 'add tension')",
              keywords: ["criterion b", "spotted", "reductive", "2 / 5"],
            },
            {
              point: "Criterion B flags unanalysed 90w block quote and unapplied theorist name-dropping",
              keywords: ["block quote", "theorists", "name-dropping", "unanalysed"],
            },
            {
              point: "Assigns justified low score for Criterion C (diagnosing chronological Act I→II→III structure)",
              keywords: ["criterion c", "chronological", "mechanical", "2 / 5"],
            },
            {
              point: "Criterion C flags the exact 1,500-word stop-reading wall cutting off final 120 words",
              keywords: ["1,500", "amputating", "120", "closure"],
            },
            {
              point: "Assigns justified score for Criterion D (diagnosing weak verbs & dropped quotes)",
              keywords: ["criterion d", "weak verbs", "dropped", "3 / 5"],
            },
            {
              point: "Criterion D flags missing consistent MLA drama citations & theory jargon clutter",
              keywords: ["citations", "jargon", "register", "fluent"],
            },
            {
              point: "Computes coherent total mark out of 20 matching the four assigned criterion marks",
              keywords: ["10 / 20", "10/20", "moderation", "total"],
            },
            {
              point: "Redrafts title into a sharp conceptual Line of Inquiry anchored to one of the 7 Concepts",
              keywords: ["communication", "authority", "performance", "fragile"],
            },
            {
              point: "Redrafted Line of Inquiry explicitly embeds medium-specific dramatic craft",
              keywords: ["silences", "lighting", "subtext", "theatrical"],
            },
            {
              point: "Removes 140w biography and converts optional theory into a jargon-free analytical question",
              keywords: ["140-word", "checklist", "probing", "spatial"],
            },
            {
              point: "Sets balanced ~150w Conceptual Introduction targeting thesis directly",
              keywords: ["150w", "paradox", "conceptual intro", "thesis"],
            },
            {
              point: "Designs Movement 1 establishing foundational craft pattern via micro analysis",
              keywords: ["movement 1", "280w", "consensus", "drawing-room"],
            },
            {
              point: "Designs Movement 2 advancing tension via dramatic craft (stichomythia / lighting shift)",
              keywords: ["movement 2", "stichomythia", "etiquette", "deceit"],
            },
            {
              point: "Designs Movement 3 confronting Act III counter-reading & ambiguous silent ending",
              keywords: ["movement 3", "counter-reading", "proxemics", "complicity"],
            },
            {
              point: "Designs Movement 4 tracing macro whole-play inversion (~260w)",
              keywords: ["movement 4", "260w", "thresholds", "hierarchies"],
            },
            {
              point: "Sets reflective synthesis conclusion (~150w) landing cleanly inside 1,350–1,480w sweet spot",
              keywords: ["1,400", "cliff", "distil", "synthesis conclusion"],
            },
            {
              point: "Replaces 90w block quote with 3–7 word embedded phrases and upgraded analytical verbs",
              keywords: ["destabilises", "indicts", "enacts", "embedded"],
            },
            {
              point: "Specifies consistent MLA act/scene/line citations, uncounted Works Cited, and Pass 3 audit",
              keywords: ["3.2.44", "uncounted", "works cited", "pass 3"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (17–20 marks)",
              marks: [17, 20],
              descriptor: "Authoritative Senior-Examiner moderation across A5/B5/C5/D5 (pinpointing exact 1,500w cut-off, chronological drift, technique-spotting, and citation deficits) paired with a complete, mathematically balanced Band 5 redraft blueprint.",
              indicators: [
                "All 4 criteria scored & justified rigorously",
                "1,400w progressive 4-movement blueprint + Act III counter-reading",
                "Spotless MLA drama citation & Pass 3 protocol",
              ],
            },
            {
              band: "Band 4 (13–16 marks)",
              marks: [13, 16],
              descriptor: "Accurate criterion-by-criterion grading and solid redraft architecture, though minor gaps remain in movement progression, micro-craft specificity, or exact word-budget maths.",
            },
            {
              band: "Band 3 (9–12 marks)",
              marks: [9, 12],
              descriptor: "Identifies major flaws (over word count, plot summary, weak quotes) and offers helpful revision advice, yet blueprint stays partly general or lacks a concrete counter-reading/MLA overhaul.",
            },
            {
              band: "Band 1–2 (0–8 marks)",
              marks: [0, 8],
              descriptor: "Incomplete moderation or generic writing tips detached from the IB HL Essay 20-mark criteria and 1,200–1,500w constraints.",
            },
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "8-hl-essay-criticism-ch-q01",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "hl-essay-drafting-rubric",
      question:
        "A candidate's HL Essay manuscript file reports 1,662 total words. This includes a 19-word title, 31 words inside parenthetical citations, a 104-word Works Cited page, AND 118 words of embedded primary quotations inside body paragraphs. Calculate the exact **official IB counted word total** (remembering which items are included vs excluded!). (Enter a whole number.)",
      answer: { type: "number", value: 1508, display: "1,508 words" },
      traps: [
        {
          spec: { type: "number", value: 1390 },
          feedback: "Trap! Embedded primary quotations (118 words) ARE INCLUDED in the IB word count — never subtract them! At 1,508 counted words, this essay accidentally crosses the 1,500-word wall!",
        },
        {
          spec: { type: "number", value: 1558 },
          feedback: "You excluded Works Cited (104) only — remember title (19) and parenthetical citations (31) are also excluded.",
        },
      ],
      hints: [
        "Carefully sort the four listed numbers into EXCLUDED (title, parenthetical citations, Works Cited) vs INCLUDED (embedded primary quotations).",
        "Subtract ONLY 19 + 31 + 104 = 154 from 1,662 — do NOT subtract the 118 words of primary quotations!",
      ],
      solution: [
        "Excluded = 19 (title) + 31 (parenthetical citations) + 104 (Works Cited) = 154 words.",
        "Embedded primary quotations (118 words) remain **INCLUDED** in the official word count!",
        "Official counted total = 1,662 − 154 = **1,508 words** — meaning the candidate is 8 words OVER the 1,500w wall and must trim at least ~30–50 words before submitting!",
      ],
      commonError: "Mistakenly subtracting embedded quotations from the word count and accidentally exceeding the 1,500-word stop-reading wall.",
    },
    {
      id: "8-hl-essay-criticism-ch-q02",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "hl-essay-line-of-inquiry",
      question:
        "An HL student has studied 13 works (9 originally in English and 4 in translation). They use 1 English + 1 translated work for their Individual Oral, and 1 translated work for their HL Essay. Under the strict non-overlap rule, how many **translated works** remain eligible for Paper 2? (Enter a whole number.)",
      answer: { type: "number", value: 2, display: "2 works" },
      traps: [
        {
          spec: { type: "number", value: 3 },
          feedback: "Remember TWO translated works are already locked: 1 in the Individual Oral and 1 in the HL Essay!",
        },
        {
          spec: { type: "number", value: 10 },
          feedback: "10 is the total remaining works (English + translated); the question asks specifically for remaining TRANSLATED works.",
        },
      ],
      hints: [
        "Start with the 4 translated works in the HL course.",
        "Subtract the translated work locked in the IO (1) and the translated work locked in the HL Essay (1).",
      ],
      solution: [
        "Translated works studied = 4.",
        "Locked translated works = 1 (IO) + 1 (HL Essay) = 2.",
        "Remaining eligible translated works for Paper 2 = 4 − 2 = **2**.",
      ],
    },
    {
      id: "8-hl-essay-criticism-ch-q03",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      guideRef: "critical-theoretical-lenses",
      marks: 6,
      question:
        "Evaluate the danger of **'confirmation bias'** when applying a named theoretical lens (e.g. Marxist, feminist, or psychoanalytic) to an HL Essay, and propose three concrete textual techniques for keeping your critical inquiry open to genuine textual friction.",
      hints: [
        "Define confirmation bias in literary criticism: cherry-picking quotes that confirm a pre-cooked ideological slogan while ignoring contradictory formal evidence.",
        "Propose three concrete craft safeguards: (1) reading against your own hypothesis during Learner Portfolio annotation, (2) pairing a thematic lens with a formal/narratological lens, and (3) embedding a mandatory counter-interpretation movement.",
      ],
      modelAnswer:
        "**Danger of Confirmation Bias:** When a candidate treats a critical theory as a pre-decided verdict ('prove the novel is purely patriarchal/capitalist'), confirmation bias leads them to cherry-pick convenient quotations while suppressing ironies, tonal shifts, or sympathetic nuances that complicate the claim. This flattens literature into propaganda, capping Criterion A (perceptive interpretation of complexity) and Criterion B (responsive craft evaluation).\n\n**Three Concrete Safeguards:**\n1. **Adversarial Annotation in the Learner Portfolio:** Actively log 3–4 awkward passages that seem to *resist* your working thesis before drafting, forcing your argument to account for textual friction.\n2. **Dual-Lens Grounding:** Pair every ideological lens (e.g. feminist or Marxist) with a formal/narratological question so every claim must pass through concrete syntax, focalisation, or staging rather than abstract theory.\n3. **Dedicated Counter-Interpretation Refinement:** Build a deliberate movement where you state the strongest opposing reading fairly, then refine — rather than repeat — your thesis through closer stylistic analysis.",
      markScheme: [
        {
          point: "Explains confirmation bias as cherry-picking quotes to fit a pre-decided ideological slogan",
          keywords: ["cherry-pick", "pre-decided", "propaganda", "suppressing"],
        },
        {
          point: "Links confirmation bias directly to Criterion A (flattening ambiguity) and Criterion B",
          keywords: ["criterion a", "criterion b", "ironies", "nuances"],
        },
        {
          point: "Safeguard 1: adversarial Learner Portfolio logging of resistant passages before drafting",
          keywords: ["adversarial", "resist", "learner portfolio", "friction"],
        },
        {
          point: "Safeguard 2: pairing ideological lens with formal/narratological craft verification",
          keywords: ["dual-lens", "narratological", "syntax", "focalisation"],
        },
        {
          point: "Safeguard 3: dedicated counter-interpretation movement refining the central thesis",
          keywords: ["counter-interpretation", "opposing", "refine", "refinement"],
        },
        {
          point: "Maintains sharp, jargon-free critical clarity throughout",
          keywords: ["staging", "tonal", "concrete", "account"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (5–6 marks)",
          marks: [5, 6],
          descriptor: "Sharp diagnosis of theoretical confirmation bias tied to Criteria A–B, paired with three highly practical, text-anchored safeguards.",
        },
        {
          band: "Band 3–4 (3–4 marks)",
          marks: [3, 4],
          descriptor: "Clear grasp of why forcing theory hurts interpretation, with two or three solid though partly general safeguards.",
        },
        {
          band: "Band 1–2 (0–2 marks)",
          marks: [0, 2],
          descriptor: "Brief advice to 'stay balanced' without concrete literary drafting strategies.",
        },
      ],
    },
    {
      id: "8-hl-essay-criticism-ch-q04",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Examine",
      guideRef: "evidence-argument-integration",
      marks: 6,
      question:
        "Examine how an HL Essay on a **work of Literary Non-Fiction** (such as a memoir, travelogue, or essay collection) differs analytically from an HL Essay on a prose fiction novel — especially regarding **persona, truth-claims, and structural craft**.",
      hints: [
        "Remember: Literary Non-Fiction is the 4th IB Literature form — never treat it like a dry factual report!",
        "Contrast 'narrator vs author' in fiction with 'constructed writing persona (retrospective vs experiencing self)' in non-fiction; unpack rhetorical craft (ethos, pathos, logos, anecdote, hypotaxis/parataxis) and negotiating subjectivity/memory.",
      ],
      modelAnswer:
        "While both fiction and literary non-fiction demand forensic attention to language and structure under Criterion B, analysing literary non-fiction requires calibrated precision around persona, truth-claims, and rhetorical design.\n\nFirst, whereas fiction separates an invented narrator from the novelist, literary non-fiction constructs a deliberate **writing persona** — often splitting the retrospective remembering self from the vulnerable experiencing self. Treating that persona as raw, unmediated confession misses the authorial artistry. Second, rather than testing fictional plot verisimilitude, a non-fiction HL Essay interrogates how the writer **negotiates truth-claims, memory, and authority**, using self-doubt, irony, or selective omission to build ethos. Third, structural and rhetorical choices — such as juxtaposing intimate personal anecdote with sweeping historical reflection, or shifting between clipped parataxis and layered hypotaxis — perform the same conceptual work that focalisation and symbolism execute in fiction.",
      markScheme: [
        {
          point: "Distinguishes fictional narrator from constructed non-fiction writing persona (retrospective vs experiencing self)",
          keywords: ["writing persona", "retrospective", "experiencing", "unmediated"],
        },
        {
          point: "Warns against reading memoir/essays as raw factual confession rather than crafted art",
          keywords: ["confession", "artistry", "constructed", "crafted"],
        },
        {
          point: "Examines how literary non-fiction negotiates truth-claims, memory, subjectivity, and ethos",
          keywords: ["truth-claims", "ethos", "omission", "authority", "memory"],
        },
        {
          point: "Identifies non-fiction structural choices (juxtaposing personal anecdote with broader reflection)",
          keywords: ["anecdote", "juxtaposing", "reflection", "structural"],
        },
        {
          point: "Identifies rhetorical/syntactic craft (parataxis, hypotaxis, irony)",
          keywords: ["parataxis", "hypotaxis", "rhetorical", "irony"],
        },
        {
          point: "Draws an explicit comparative parallel with prose fiction craft (focalisation/symbolism) under Criterion B",
          keywords: ["focalisation", "symbolism", "criterion b", "verisimilitude"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (5–6 marks)",
          marks: [5, 6],
          descriptor: "Nuanced, form-literate comparison capturing persona splitting, truth-claim negotiation, and rhetorical/syntactic craft with Band 5 precision.",
        },
        {
          band: "Band 3–4 (3–4 marks)",
          marks: [3, 4],
          descriptor: "Sound recognition that non-fiction uses literary techniques and persona, though rhetorical or truth-claim subtleties stay lightly explored.",
        },
        {
          band: "Band 1–2 (0–2 marks)",
          marks: [0, 2],
          descriptor: "Reductive distinction ('fiction is made up, non-fiction is true') ignoring literary non-fiction craft.",
        },
      ],
    },
    {
      id: "8-hl-essay-criticism-ch-q05",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Analyse",
      guideRef: "evidence-argument-integration",
      marks: 8,
      question:
        "A student is writing an HL Essay on a studied play and discovers an influential academic article arguing that the play's ending offers pure optimistic redemption. The student believes the final stage directions quietly subvert that optimism. Write a **model 180–220 word analytical segment** demonstrating how to integrate the optional secondary critic concisely, cite cleanly in MLA style, and out-argue the critic through primary theatrical close reading.",
      hints: [
        "Keep the secondary critic brief (<25 words quoted or cleanly paraphrased with MLA citation like `(Mercer 42)` — invent a realistic placeholder critic name explicitly marked illustrative).",
        "Pivot decisively back to primary dramatic craft: lighting, stage silence, proxemics, props, and clipped dialogue.",
        "Ensure the segment refines the central line of inquiry without sounding dismissive or losing scholarly register.",
      ],
      modelAnswer:
        "Critical commentary frequently celebrates the final scene's quiet reconciliation as unequivocal moral renewal; Elena Mercer [Illustrative critic — not a prescribed source], for example, argues that the characters' closing exchange achieves \"redemptive domestic equilibrium\" (42). While the spoken dialogue momentarily appears to validate Mercer's claim — trading earlier stichomythic interruption for measured, polite cadences — attending strictly to verbal surfaces overlooks how the playwright's theatrical architecture steadily undermines verbal harmony.\n\nEven as the characters utter phrases of forgiveness, the stage directions dictate that they remain divided across opposite sides of the table, with the dimming overhead lamp casting the threshold in shadow (3.4.118–124). This deliberate proxemic gulf transforms polite diction into guarded choreography: rather than restoring intimacy, language functions here as a fragile truce masking unhealed power asymmetries. Crucially, the final sound cue — an unhurried key turning offstage — echoes the opening act's motif of domestic enclosure, inverting linear redemption into circular containment. Extending Mercer's reading through performance cues therefore reveals a far more unsettling synthesis: the play's conclusion dramatises not liberated renewal, but the quiet exhaustion of compromise.",
      markScheme: [
        {
          point: "Introduces secondary critic concisely in respectful scholarly register (not dismissive)",
          keywords: ["mercer", "equilibrium", "commentary", "celebrates"],
        },
        {
          point: "Applies accurate MLA parenthetical citation for the secondary critic",
          keywords: ["(42)", "42", "argues"],
        },
        {
          point: "Acknowledges fairly why verbal dialogue might initially support the critic's reading",
          keywords: ["stichomythic", "cadences", "validate", "verbal"],
        },
        {
          point: "Pivots decisively to medium-specific dramatic craft (stage directions, lighting, proxemics)",
          keywords: ["stage directions", "proxemic", "lighting", "lamp", "shadow"],
        },
        {
          point: "Uses accurate MLA drama citation format (act.scene.line)",
          keywords: ["3.4.118", "124", "threshold"],
        },
        {
          point: "Connects micro theatrical cue to macro whole-play structure (echoing Act I enclosure motif)",
          keywords: ["offstage", "enclosure", "circular", "inverting", "opening act"],
        },
        {
          point: "Refines and extends the critic's claim into a richer conceptual synthesis",
          keywords: ["truce", "asymmetries", "exhaustion", "compromise", "extending"],
        },
        {
          point: "Maintains concise, Band 5 academic prose with secondary quote kept under 5–10% of segment",
          keywords: ["choreography", "containment", "dramatises", "unsettling"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (7–8 marks)",
          marks: [7, 8],
          descriptor: "Model scholarly integration: concise MLA-cited secondary engagement overturned through forensic theatrical close reading and macro structural inversion.",
        },
        {
          band: "Band 3–4 (4–6 marks)",
          marks: [4, 6],
          descriptor: "Clearly contrasts critic's view with stage directions, though macro links, MLA precision, or diplomatic critical register stay uneven.",
        },
        {
          band: "Band 1–2 (0–3 marks)",
          marks: [0, 3],
          descriptor: "Over-quotes critic or dismisses opposing view without theatrical close analysis.",
        },
      ],
    },
    {
      id: "8-hl-essay-criticism-ch-q06",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "To what extent",
      guideRef: "hl-essay-line-of-inquiry",
      marks: 8,
      question:
        "To what extent does a razor-sharp **Line of Inquiry** determine a candidate's final score across ALL FOUR HL Essay criteria (A, B, C, and D)?",
      hints: [
        "Avoid a simplistic '100%' or 'barely' answer — weigh both its decisive upstream leverage (governing A, B, and C) AND its limits (execution in micro close-reading and Criterion D language still has to deliver!).",
        "Analyse each of the four criteria explicitly.",
      ],
      modelAnswer:
        "A razor-sharp Line of Inquiry exerts enormous upstream leverage across Criteria A, B, and C, yet it acts as a necessary architectural catalyst rather than a guaranteed passport to 20/20 — because micro execution and Criterion D craft still decide the final band.\n\nOn the decisive side, a narrow inquiry fusing an IB Concept, specific authorial choices, and an arguable tension virtually immunises the essay against the three deadliest mid-band traps. It steers **Criterion A** beyond plot summary by demanding exploration of ambiguity across the whole work; it compels **Criterion B** to dissect formal mechanisms rather than vague themes; and it gives **Criterion C** a clear conceptual compass so 3–4 progressive movements cohere cleanly inside 1,200–1,500 words.\n\nNevertheless, even a publication-worthy question cannot rescue weak execution. If the candidate drops long unanalysed block quotes, neglects the ending, slips past the 1,500-word cut-off, or writes in clunky, repetitive prose (**Criterion D**), marks still tumble to Band 2–3. Therefore, a sharp inquiry establishes the *ceiling* a candidate can reach, while disciplined micro–macro analysis, counter-reading rigour, and 3-pass redrafting determine whether the essay actually climbs to that ceiling.",
      markScheme: [
        {
          point: "Takes a nuanced 'to what extent' judgement (decisive upstream catalyst, not sole guarantee)",
          keywords: ["upstream", "catalyst", "necessary", "ceiling"],
        },
        {
          point: "Shows how sharp inquiry protects Criterion A (pushes beyond plot summary into ambiguity)",
          keywords: ["criterion a", "plot summary", "ambiguity", "whole work"],
        },
        {
          point: "Shows how sharp inquiry drives Criterion B (compels analysis of formal mechanisms)",
          keywords: ["criterion b", "formal mechanisms", "vague themes", "dissect"],
        },
        {
          point: "Shows how sharp inquiry anchors Criterion C (progressive 3–4 movements within word range)",
          keywords: ["criterion c", "compass", "progressive", "cohere"],
        },
        {
          point: "Identifies limits: weak micro-craft execution (block quotes, neglecting ending) still lowers marks",
          keywords: ["block quotes", "neglects", "rescue", "execution"],
        },
        {
          point: "Identifies Criterion D independence (precise prose & register cannot be automated by a good title)",
          keywords: ["criterion d", "clunky", "repetitive", "prose"],
        },
        {
          point: "Notes procedural word-limit / 1,500w cut-off still overrides strong title if mismanaged",
          keywords: ["1,500-word", "cut-off", "tumble", "redrafting"],
        },
        {
          point: "Concludes with a crisp synthesis balancing architectural design against drafting discipline",
          keywords: ["rigour", "micro–macro", "climbs", "disciplined"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (7–8 marks)",
          marks: [7, 8],
          descriptor: "Nuanced evaluative judgement weighing upstream structural power across A–C against execution limits in micro-craft, word ceiling, and Criterion D.",
        },
        {
          band: "Band 3–4 (4–6 marks)",
          marks: [4, 6],
          descriptor: "Thoughtful account of how a strong inquiry helps structure and focus, with partial consideration of its limits across criteria.",
        },
        {
          band: "Band 1–2 (0–3 marks)",
          marks: [0, 3],
          descriptor: "One-sided claim that a good title guarantees high marks without criterion-specific evaluation.",
        },
      ],
    },
    {
      id: "8-hl-essay-criticism-ch-q07",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Design",
      guideRef: "hl-essay-drafting-rubric",
      marks: 12,
      question:
        "An HL student receives holistic one-draft feedback from their teacher on a 1,460-word draft about Virginia Woolf's *Mrs Dalloway* [Example text — not a set text]:\n*\"Strong micro-analysis of Clarissa's party preparations in the first half, and your prose is elegant (D: 5). However, Septimus's narrative thread disappears after Movement 1, your paragraphs feel parallel rather than evolving, and you never wrestle with why the final party scene feels simultaneously triumphant and elegiac.\"*\n\nDesign a complete **3-Pass Revision Action Plan** preserving the 1,460-word discipline while elevating Criteria A, B, and C to Band 5 — including a revised thesis, 4 progressive topic sentences, exact word-reallocation adjustments, and a model 140-word reflective synthesis conclusion.",
      hints: [
        "Keep the total word count cleanly in 1,350–1,480w (zero bloat!). Reallocate words *away* from over-long Clarissa opening sections to weave Septimus's foil arc back into Movements 2, 3, and 4.",
        "Ensure the 4 topic sentences tell an unmistakably progressive story (harmony → parallel fracture → counter-reading tension → simultaneous triumph/elegy).",
        "Write a genuine ~140-word Band 5 synthesis conclusion (no verbatim repetition, no new unanalysed critics).",
      ],
      modelAnswer:
        "**Revised Conceptual Thesis (Anchored to *Perspective* & *Representation*):**\n*Through fluid free indirect discourse and shared urban motifs — notably Big Ben's tolling and London's sky-writing — Woolf braids Clarissa's social artistry with Septimus's fractured shell-shock to represent post-war survival as an unresolved poise between fragile affirmation and concealed grief.*\n\n**Pass 1 — Architecture & Word-Reallocation Plan (Maintaining 1,440 Counted Words):**\n- Trim 150 words of repetitive domestic detail from Movement 1 (430w → 280w) and tighten intro (180w → 150w), freeing **180 words** to integrate Septimus structurally across Movements 2–4 without risking the 1,500-word ceiling.\n- **Four Progressive Topic Sentences (Criterion C Overhaul):**\n  1. *Movement 1 (280w):* Opening in buoyant free indirect discourse, Woolf initially renders Clarissa's floral errands as luminous immersion in post-war London's renewed vitality.\n  2. *Movement 2 (290w):* Yet the abrupt tonal pivot into Septimus's paranoid sensory syntax exposes how identical civic landmarks — traffic, sky-writing, chiming clocks — fracture into menacing echoes of wartime trauma.\n  3. *Movement 3 (290w — Counter-Reading & Complication):* Although Clarissa's glittering evening reception can be read as shallow upper-class escapism insulated from Septimus's death, Woolf's acoustic motif of 'leaden circles' quietly collapses the social boundary separating drawing room from asylum.\n  4. *Movement 4 (290w — Macro Resolution):* When news of Septimus's suicide intrudes upon the party, Clarissa's solitary window withdrawal transforms grief into fleeting aesthetic solidarity without erasing post-war loss.\n\n**Pass 2 & Pass 3 Execution:** Retain Band 5 prose elegance while auditing verbs (*braids, collapses, intrudes, transforms*) and manually verifying final count at **1,440 counted words** (150 + 280 + 290 + 290 + 290 + 140) excluding title, MLA page citations, and Works Cited.\n\n**Model Reflective Synthesis Conclusion (~140 words):**\n*Ultimately, Woolf refuses either sentimental triumph or pure nihilism at the close of Mrs Dalloway [Example text — not a set text]. By refusing to let Clarissa and Septimus meet physically while binding their consciousnesses through shared sensory motifs and fluid free indirect discourse, the novel transforms structural juxtaposition into ethical witness. Clarissa's celebrated return to her guests neither cancels the violence of Septimus's fall nor trivialises it; instead, the party's shimmering vitality gains its poignant urgency precisely because mortality vibrates beneath every polite gesture. Through this deliberate formal poise between celebration and elegy, Woolf demonstrates that modernist representation cannot heal historical rupture — yet by holding fractured perspectives inside a single acoustic day, literary form creates a luminous, precarious space in which survival itself becomes legible.*",
      markScheme: [
        {
          point: "Drafts a sharpened conceptual thesis integrating Clarissa, Septimus, and formal craft (free indirect discourse / motifs)",
          keywords: ["free indirect discourse", "septimus", "shell-shock", "poise"],
        },
        {
          point: "Specifies concrete word reallocation (trimming Movement 1 / intro to keep total cleanly in 1,350–1,480w)",
          keywords: ["reallocation", "180 words", "1,440", "1440"],
        },
        {
          point: "Movement 1 topic sentence establishes opening stylistic vitality concisely",
          keywords: ["movement 1", "floral", "buoyant", "vitality"],
        },
        {
          point: "Movement 2 topic sentence pivots structurally into Septimus's contrasting sensory fracture",
          keywords: ["movement 2", "paranoid", "sky-writing", "trauma"],
        },
        {
          point: "Movement 3 topic sentence engages counter-reading (shallow escapism) and links via motif ('leaden circles')",
          keywords: ["movement 3", "escapism", "leaden circles", "collapses"],
        },
        {
          point: "Movement 4 topic sentence addresses the simultaneous triumph & elegy of the closing party",
          keywords: ["movement 4", "suicide", "window", "solidarity"],
        },
        {
          point: "Demonstrates genuinely progressive arc across all 4 topic sentences (solving parallel-paragraph flaw)",
          keywords: ["progressive", "abrupt", "boundary", "transforms"],
        },
        {
          point: "Includes Pass 2 & Pass 3 checks (analytical verbs, manual word-count exclusions, MLA)",
          keywords: ["pass 2", "pass 3", "mla", "works cited"],
        },
        {
          point: "Model conclusion avoids verbatim repetition and synthesises the formal juxtaposition of both threads",
          keywords: ["juxtaposition", "witness", "nihilism", "sentimental"],
        },
        {
          point: "Model conclusion explicitly resolves the triumph-versus-elegy tension perceptively",
          keywords: ["elegy", "celebration", "mortality", "poignant"],
        },
        {
          point: "Model conclusion widens cleanly to the broader modernist/aesthetic stakes of literary form",
          keywords: ["modernist", "rupture", "legible", "precarious"],
        },
        {
          point: "Model conclusion stays concise (~140w) with Band 5 Criterion D precision and non-prescriptive tag",
          keywords: ["example text", "acoustic", "luminous", "vibrates"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (10–12 marks)",
          marks: [10, 12],
          descriptor: "Masterful, surgical revision plan: exact word reallocation preserving 1,440w discipline, four genuinely evolving topic sentences restoring Septimus, and an eloquent ~140w Band 5 synthesis conclusion.",
        },
        {
          band: "Band 4 (7–9 marks)",
          marks: [7, 9],
          descriptor: "Strong, coherent revision strategy addressing all teacher comments with solid topic sentences and conclusion, though word maths or micro-craft integration has small gaps.",
        },
        {
          band: "Band 3 (4–6 marks)",
          marks: [4, 6],
          descriptor: "Addresses Septimus and the ending sensibly, yet movements remain somewhat parallel or conclusion repeats earlier claims.",
        },
        {
          band: "Band 1–2 (0–3 marks)",
          marks: [0, 3],
          descriptor: "General editorial advice lacking concrete topic sentences, word-budget arithmetic, or synthesis model.",
        },
      ],
    },
    {
      id: "8-hl-essay-criticism-ch-q08",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explore",
      guideRef: "hl-essay-drafting-rubric",
      marks: 20,
      question:
        "**CAPSTONE 20-MARK HL ESSAY CRITICAL SYNTHESIS & SELF-MODERATION CHALLENGE:**\n\nImagine you are preparing your final IB HL Essay (1,200–1,500 words, 20 marks: A5/B5/C5/D5) on **ONE illustrative work** of your choice (explicitly stamped `[Example text — not a set text]`) in either Poetry, Drama, Prose Fiction, or Literary Non-Fiction. Produce a comprehensive Band 5 **HL Essay Dossier** containing:\n1. **Non-Overlap & Eligibility Verification** (confirming work count, language status, and collection scoping if relevant).\n2. **Line-of-Inquiry Evolution** (showing Draft 1 Vague Topic → Draft 2 Better Theme → Draft 3 Band 5 Inquiry anchored to one of the 7 Concepts + formal craft + tension).\n3. **Critical Lens Strategy** (one optional perspective framed cleanly as an analytical question + how you avoid jargon overload and confirmation bias).\n4. **Full 1,400-Word Progressive Architecture** (Intro + 3–4 Micro–Macro Movements including a Counter-Interpretation Node + Conclusion, with exact word counts summing inside 1,350–1,480w).\n5. **One Band 5 Sample Analytical Paragraph (~140w)** featuring grammatically embedded micro-quotes, evaluative craft verbs, macro trajectory, and clean MLA citation.\n6. **Final Pre-Submission Criteria A–D & Academic Integrity Self-Audit** (verifying counted-word exclusions, 1-draft teacher rule, translator/edition Works Cited, and Band 5 separators across all four criteria).",
      hints: [
        "Treat this capstone like a complete dry run of your real DP2 HL Essay preparation — hit every single numbered section cleanly!",
        "Double check your word-budget arithmetic so the sections add up cleanly inside 1,350–1,480 words.",
        "Make sure your sample paragraph models every Band 5 habit simultaneously: zero dropped quotes, exact formal terminology, macro arc link, and spotless MLA parenthetical placement.",
      ],
      modelAnswer:
        "**1. Non-Overlap & Eligibility Verification:**\nIllustrative Work: Ocean Vuong's poetry collection *Night Sky with Exit Wounds* [Example text — not a set text] (original English work; confirmed strictly excluded from the candidate's Individual Oral and Paper 2 reserve, leaving 10 other studied works eligible for Paper 2). Because this is a poetry volume, the essay scopes deeply onto a cohesive cluster of **3 interlinked poems** while framing their trajectory across the wider collection.\n\n**2. Line-of-Inquiry Evolution (Anchored to *Transformation* & *Representation*):**\n- *Draft 1 (Vague Topic):* Trauma and Family in Vuong's Poems.\n- *Draft 2 (Broad Theme):* How does Vuong represent inherited war trauma and grief in his poetry collection?\n- *Draft 3 (Band 5 Line of Inquiry):* *How do fractured white space, disruptive enjambment, and bodily-botanical imagery transform inherited wartime trauma from silent rupture into fragile lyrical survival across three interlinked poems in Night Sky with Exit Wounds* [Example text — not a set text]?\n\n**3. Critical Lens Strategy (Psychoanalytic + Postcolonial Questions — Zero Jargon Overload):**\nRather than name-dropping clinical jargon, the inquiry translates psychoanalytic and postcolonial curiosity into one plain question: *How does linguistic breakage register intergenerational shock while reclaiming intimate agency from imperial violence?* To prevent confirmation bias, the essay actively confronts moments where poetic beauty risks aestheticising pain rather than healing it.\n\n**4. Full 1,400-Word Progressive Architecture (Sweet Spot: 1,400 Counted Words):**\n- **Conceptual Intro (150w):** Establish the formal paradox of articulating historical devastation through fragile lyrical craft; land on an arguable thesis.\n- **Movement 1 — Typographic Rupture as Unspoken Memory (360w):** Micro-analyse staggered margins, caesurae, and wide visual white space in Poem 1 as spatial enactments of war's unsayable silence.\n- **Movement 2 — Counter-Reading Node: Beauty vs Violence (370w):** Acknowledge the counter-reading that lush pastoral/botanical tropes soften brutal history, then dissect sudden violent verb splices across line breaks in Poem 2 to show how lyric beauty sharpens rather than masks bodily vulnerability.\n- **Movement 3 — Macro Shift Toward Reclaimed Address (370w):** Trace how Poem 3 modulates fragmented breath into tender second-person invocation, charting partial transformation without sentimental closure.\n- **Reflective Synthesis Conclusion (150w):** Synthesise how spatial architecture turns inherited fracture into durable artistic testimony (150 + 360 + 370 + 370 + 150 = **1,400 counted words**).\n\n**5. Band 5 Sample Analytical Paragraph (~145 words):**\n*Far from functioning as passive decorative pauses, Vuong's jagged lineation and generous white space physically choreograph how inherited wartime shock interrupts speech before memory can settle into tidy narrative. When an abrupt line break splits an intimate domestic image across a stark caesura — suspending tender cadence before a harsh plosive verb jolts the reader forward (lines 14–16) — form itself enacts the volatility of post-memory, denying both speaker and audience seamless syntactic shelter. Crucially, this micro-level fracture echoes the collection's wider structural arc: earlier elegies scatter phrases across the page like shrapnel, whereas later poems gradually gather broken clauses into resilient breath-units. Through this disciplined interplay of visual absence and tactile imagery, Vuong evaluates language not as an effortless cure for historical grief, but as a scarred loom capable of weaving survival from silence.*\n\n**6. Pre-Submission Criteria A–D & Academic Integrity Self-Audit:**\n- **Criterion A (5/5):** Whole-collection arc honoured via 3 cohesive poems; explores aesthetic-vs-violence ambiguity without plot paraphrase.\n- **Criterion B (5/5):** Every micro-quote unpacked via form-specific craft (white space, enjambment, plosives, caesura) → effect → conceptual shift.\n- **Criterion C (5/5):** 3 genuinely progressive movements totalling **1,400 counted words** (100w clear of the 1,500w stop-reading wall), verified manually with title, MLA line citations, and Works Cited excluded.\n- **Criterion D & Integrity (5/5):** Concise, upgraded analytical verbs (*choreograph, enacts, evaluates*), consistent MLA 9th edition Works Cited naming exact edition, zero patchwriting or AI prose rewriting, and authentic independent redrafting following the single holistic teacher draft review.",
      markScheme: [
        {
          point: "Stamps illustrative work `[Example text — not a set text]` and verifies strict IO/Paper 2 non-overlap",
          keywords: ["example text", "non-overlap", "excluded", "paper 2"],
        },
        {
          point: "Justifies cohesive scoping (e.g. 3 interlinked poems) for depth within 1,400 words",
          keywords: ["cohesive", "cluster", "interlinked", "3"],
        },
        {
          point: "Shows clear Draft 1 → Draft 2 → Draft 3 Line-of-Inquiry progression",
          keywords: ["draft 1", "draft 2", "draft 3", "evolution"],
        },
        {
          point: "Band 5 Line of Inquiry fuses IB Concept + form-specific craft + dual arguable tension",
          keywords: ["transformation", "white space", "enjambment", "rupture", "survival"],
        },
        {
          point: "Translates optional critical lens into a plain probing question without jargon-dumping",
          keywords: ["psychoanalytic", "postcolonial", "intergenerational", "jargon"],
        },
        {
          point: "Explicitly addresses preventing confirmation bias via textual friction",
          keywords: ["confirmation bias", "aestheticising", "healing", "confronts"],
        },
        {
          point: "Sets balanced ~150w Conceptual Introduction establishing thesis directly",
          keywords: ["conceptual intro", "150w", "paradox", "thesis"],
        },
        {
          point: "Movement 1 establishes foundational craft pattern with exact word allocation",
          keywords: ["movement 1", "360w", "margins", "unsayable"],
        },
        {
          point: "Movement 2 embeds an explicit counter-interpretation node refined by craft evidence",
          keywords: ["movement 2", "counter-reading", "splices", "vulnerability"],
        },
        {
          point: "Movement 3 charts macro whole-work progression / shift without sentimental closure",
          keywords: ["movement 3", "second-person", "sentimental", "partial"],
        },
        {
          point: "Sets ~150w Reflective Synthesis Conclusion with exact word sum inside 1,350–1,480w",
          keywords: ["1,400", "testimony", "synthesis conclusion", "1400"],
        },
        {
          point: "Sample paragraph analyses concrete micro form (lineation, caesura, plosive, white space)",
          keywords: ["choreograph", "caesura", "plosive", "syntactic"],
        },
        {
          point: "Sample paragraph embeds clean MLA citation (lines 14–16)",
          keywords: ["lines 14–16", "lines 14-16", "14–16"],
        },
        {
          point: "Sample paragraph weaves micro detail into macro collection trajectory (shrapnel → breath-units)",
          keywords: ["shrapnel", "breath-units", "wider structural", "loom"],
        },
        {
          point: "Sample paragraph avoids weak verbs and sustains Band 5 Criterion D register",
          keywords: ["enacts", "evaluates", "volatility", "tactile"],
        },
        {
          point: "Self-audit verifies Criterion A Band 5 separator (ambiguity, whole-work awareness, zero paraphrase)",
          keywords: ["criterion a", "ambiguity", "paraphrase", "whole-collection"],
        },
        {
          point: "Self-audit verifies Criterion B Band 5 separator (evaluative craft chain)",
          keywords: ["criterion b", "form-specific", "unpacked", "micro-quote"],
        },
        {
          point: "Self-audit verifies Criterion C & manual word-count exclusion math clear of 1,500w wall",
          keywords: ["criterion c", "stop-reading", "manually", "1,500w"],
        },
        {
          point: "Self-audit verifies Criterion D & MLA 9th edition Works Cited compliance",
          keywords: ["criterion d", "mla", "works cited", "edition"],
        },
        {
          point: "Self-audit confirms Academic Integrity (no patchwriting/AI rewriting + 1 holistic teacher draft)",
          keywords: ["patchwriting", "ai", "holistic", "authentic"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (17–20 marks)",
          marks: [17, 20],
          descriptor: "Distinction-level HL Essay Dossier: airtight non-overlap verification, razor-sharp 3-stage inquiry evolution, jargon-free critical lens, exact 1,400w progressive plan with counter-reading, luminous Band 5 sample paragraph, and exhaustive A–D integrity audit.",
          indicators: [
            "All 6 sections complete and internally coherent",
            "Word budget verified cleanly inside 1,350–1,480w",
            "Sample paragraph exemplifies micro–macro weaving & MLA polish",
          ],
        },
        {
          band: "Band 4 (13–16 marks)",
          marks: [13, 16],
          descriptor: "Comprehensive, high-craft dossier covering all six stages convincingly, with minor scope for deeper counter-reading friction or crisper micro-craft in the sample paragraph.",
        },
        {
          band: "Band 3 (9–12 marks)",
          marks: [9, 12],
          descriptor: "Solid planning dossier addressing key HL Essay rules, though inquiry evolution, critical lens framing, or sample craft evaluation remains partly descriptive.",
        },
        {
          band: "Band 1–2 (0–8 marks)",
          marks: [0, 8],
          descriptor: "Incomplete dossier missing major structural, word-budget, sample-paragraph, or academic integrity components.",
        },
      ],
    },
  ],
};
