// ---------------------------------------------------------------------------
// Topic 6: The 7 Central Concepts & Global Issues — Practice Bank
// Quiz (10) · Practice Papers (2 × 15 = 30) · Challenge (8)
// IB Diploma English A: Literature (SL & HL, First Assessment 2021)
// Strict Non-Prescriptive Text Policy: ZERO set texts assumed. Every named
// published work/author carries `[Example text — not a set text]`.
// ---------------------------------------------------------------------------
import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK QUIZ (10 questions: 4 mcq [spread 0,1,2,3], 4 short, 2 written)
  // =========================================================================
  quiz: [
    {
      id: "6-concepts-global-issues-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "seven-central-concepts",
      question:
        "Which IB Central Concept specifically examines how language, omissions, and literary framing selectively mediate reality rather than neutrally mirroring it?",
      options: [
        "Representation, focusing on how artistic mediation shapes what is visible, amplified, or erased",
        "Transformation, focusing on how a protagonist changes status between the opening and closing acts",
        "Creativity, focusing on how unconventional stanza shapes break traditional metrical constraints",
        "Communication, focusing on how spoken misunderstandings delay reconciliation between relatives",
      ],
      answerIndex: 0,
      explanation:
        "Representation interrogates how texts actively construct and mediate versions of reality, people, and power — foregrounding certain perspectives while marginalising or distorting others.",
      hints: [
        "Recall the distinction between vantage point (Perspective) and how language mediates reality.",
      ],
    },
    {
      id: "6-concepts-global-issues-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "pairing-english-translated-works",
      question:
        "What is the maximum number of lines permitted for EACH clean, unmarked extract brought into the IB English A: Literature Individual Oral?",
      answer: { type: "number", value: 40, display: "40 lines" },
      traps: [
        {
          spec: { type: "number", value: 30 },
          feedback: "30 lines is a comfortable length inside the limit, but the official IB maximum ceiling is 40 lines.",
        },
        {
          spec: { type: "number", value: 50 },
          feedback: "50 lines breaches the official IB Individual Oral ceiling — extracts must not exceed 40 lines.",
        },
      ],
      solution: [
        "Under official IBO FA2021 rules, each of the two unmarked extracts may be **no more than 40 lines** long.",
        "Always check printed line numbers before recording so neither extract silently runs to 41+ lines.",
      ],
      hints: [
        "Remember the IO numeric sequence: 40-10-10-5-40.",
      ],
    },
    {
      id: "6-concepts-global-issues-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "five-fields-of-inquiry",
      question:
        "A student begins exploring how algorithmic work monitoring erodes employees' dignity and connection to the natural world. Which IB Field of Inquiry is the primary launchpad?",
      options: [
        "Art, creativity and imagination, because office interiors contain decorative wall prints",
        "Science, technology and the environment, because digital automation and ecological estrangement drive the tension",
        "Beliefs, values and education, because workers completed secondary diplomas before being hired",
        "Culture, identity and community, because every modern workplace requires formal uniform policies",
      ],
      answerIndex: 1,
      explanation:
        "Algorithmic monitoring (technology) and disconnection from the natural world (environment) sit squarely within Field 5: Science, technology and the environment.",
      hints: [
        "Spot the two explicit triggers: 'algorithmic work monitoring' and 'connection to the natural world'.",
      ],
    },
    {
      id: "6-concepts-global-issues-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "pairing-english-translated-works",
      question:
        "What is the maximum number of bullet points allowed on a student's official Individual Oral outline?",
      answer: { type: "number", value: 10, display: "10 bullet points" },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback: "15 is the total number of minutes for the recording (10m talk + 5m Q&A), not the outline bullet limit.",
        },
        {
          spec: { type: "number", value: 20 },
          feedback: "20 is far over the limit — the outline is capped strictly at 10 bullet points.",
        },
      ],
      solution: [
        "The official IB Individual Oral outline may contain a maximum of **10 bullet points**.",
        "Keep each bullet concise (conceptual trigger + line reference) rather than scripting prose paragraphs.",
      ],
      hints: [
        "Match the maximum outline bullet count with the duration of the uninterrupted student presentation in minutes.",
      ],
    },
    {
      id: "6-concepts-global-issues-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "narrowing-global-issues",
      question:
        "Which Global Issue passes ALL THREE mandatory IB properties (wide-scale significance, transnational reach, and impact felt in everyday local contexts)?",
      options: [
        "Inequality and social hierarchy across world novels",
        "British coal-mining strikes in Yorkshire during 1984",
        "How chronic economic insecurity fractures solidarity inside ordinary working families",
        "International trade tariff formulas ratified by regional customs unions",
      ],
      answerIndex: 2,
      explanation:
        "Chronic economic insecurity fracturing solidarity inside ordinary working families has wide-scale significance, travels cleanly across countries and centuries, and manifests intimately in everyday household life.",
      hints: [
        "Test each option against W-T-L: Wide-scale, Transnational, Everyday Local.",
        "Reject the broad noun phrase, the single-nation/year event, and the abstract macroeconomic treaty.",
      ],
    },
    {
      id: "6-concepts-global-issues-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "seven-central-concepts",
      question:
        "Which ONE of the 7 Central Concepts best anchors a literary inquiry examining how dramatic silences, evasive letters, and euphemisms distort truth between characters?",
      answer: {
        type: "text",
        accept: ["Communication", "communication"],
        display: "Communication",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Perspective", "perspective"] },
          feedback: "Perspective tracks *whose vantage point* filters experience; here the focus is how speech, silence, and letters convey or distort meaning — that is Communication.",
        },
        {
          spec: { type: "text", accept: ["Representation", "representation"] },
          feedback: "Representation examines how language mediates a group or reality; exchanges, silences, and letters between characters belong directly to Communication.",
        },
      ],
      solution: [
        "Dramatic silences, letters, euphemisms, and distorted dialogue directly interrogate how meaning is conveyed or withheld.",
        "Therefore, the exact IB Central Concept is **Communication**.",
      ],
      hints: [
        "Recall the 7 Central Concepts: Identity, Culture, Creativity, Communication, Perspective, Transformation, Representation.",
        "Which concept centres directly on voice, dialogue, silence, and subtext?",
      ],
    },
    {
      id: "6-concepts-global-issues-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "State",
      guideRef: "pairing-english-translated-works",
      question:
        "What is the total mark allocation and criterion split for the IB English A: Literature Individual Oral (identical at SL and HL)?",
      options: [
        "20 marks total: Criterion A (5), Criterion B (5), Criterion C (5), Criterion D (5)",
        "30 marks total: Criterion A (10), Criterion B (10), Criterion C (5), Criterion D (5)",
        "40 marks total: Criterion A (15), Criterion B (15), Criterion C (5), Criterion D (5)",
        "40 marks total: Criterion A (10), Criterion B (10), Criterion C (10), Criterion D (10)",
      ],
      answerIndex: 3,
      explanation:
        "The Individual Oral is marked out of 40 marks, with all four criteria carrying an equal 10 marks each (A10, B10, C10, D10). Note that 20 marks (5/5/5/5) is Paper 1 SL / HL Essay, and 30 marks (10/10/5/5) is Paper 2.",
      hints: [
        "Do not confuse the IO mark split with Paper 2 (30 marks: 10/10/5/5) or the HL Essay (20 marks: 5/5/5/5).",
        "In the Individual Oral, all four criteria carry identical weight out of 40.",
      ],
    },
    {
      id: "6-concepts-global-issues-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "State",
      guideRef: "pairing-english-translated-works",
      question:
        "What percentage of the final IB Diploma English A: Literature **HL** grade does the Individual Oral represent? (Give a number with %.)",
      answer: { type: "number", value: 20, display: "20%" },
      traps: [
        {
          spec: { type: "number", value: 30 },
          feedback: "30% is the SL weighting for the Individual Oral. At HL, adding the 20% HL Essay reduces the IO weight to 20%.",
        },
        {
          spec: { type: "number", value: 25 },
          feedback: "25% is the HL Paper 2 weighting. The HL Individual Oral carries 20%.",
        },
      ],
      solution: [
        "HL assessment weightings: Paper 1 = 35%, Paper 2 = 25%, HL Essay = 20%, Individual Oral = **20%** (total 100%).",
      ],
      hints: [
        "HL has four assessment components: Paper 1 (35%), Paper 2 (25%), HL Essay (20%), and the Individual Oral.",
        "Subtract 35% + 25% + 20% from 100%.",
      ],
    },
    {
      id: "6-concepts-global-issues-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      marks: 2,
      commandTerm: "Explain",
      guideRef: "narrowing-global-issues",
      question:
        "Explain TWO reasons why \"Justice\" is inadequate as a final Individual Oral Global Issue.",
      modelAnswer:
        "First, a single abstract noun is far too broad and vague to sustain razor-sharp close-reading within ten minutes, inviting scattered generalities rather than focused analysis. Second, it omits any specific social mechanism or everyday local impact, giving the speaker no concrete filter for selecting stylistically rich extracts or evaluating authorial choices.",
      markScheme: [
        {
          point: "Identifies that a single-word theme is overly broad/vague for focused 10-minute literary analysis.",
          keywords: ["broad", "vague", "generalities", "ten minutes", "scattered"],
        },
        {
          point: "Notes that it lacks a specific mechanism/tension or concrete impact felt in everyday local contexts (weakening extract/craft focus).",
          keywords: ["mechanism", "everyday", "local", "concrete", "extracts"],
        },
      ],
      hints: [
        "Think about both time discipline (10 minutes) and the 3 mandatory IB Global Issue properties.",
        "Ask how a vague one-word theme affects your extract choice and Criterion B analysis.",
      ],
    },
    {
      id: "6-concepts-global-issues-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      marks: 3,
      commandTerm: "Outline",
      guideRef: "pairing-english-translated-works",
      question:
        "Outline how a candidate should divide their 10-minute uninterrupted Individual Oral presentation to achieve Band-5 balance on Criteria A and C.",
      modelAnswer:
        "Open with roughly 45 seconds defining the narrowed Global Issue and framing both works cleanly. Allocate equal time — about 4 minutes 15 seconds — to Work 1 (original English) and 4 minutes 15 seconds to Work 2 (translated), balancing close-reading of each ≤40-line extract (around 2 minutes 30 seconds) with macro analysis of the wider whole work (around 1 minute 45 seconds). Conclude with a concise 45-second conceptual synthesis linking both works' formal angles.",
      markScheme: [
        {
          point: "Specifies a concise opening (~45s) framing the Global Issue and a crisp closing synthesis (~45s).",
          keywords: ["45 seconds", "opening", "synthesis", "closing"],
        },
        {
          point: "Protects roughly 50/50 parity (~4–4.5 min each) between Work 1 (original English) and Work 2 (translated).",
          keywords: ["equal", "english", "translated", "4 minutes"],
        },
        {
          point: "Balances micro close-reading of each ≤40-line extract with macro analysis of each wider whole work.",
          keywords: ["extract", "whole work", "close-reading", "macro"],
        },
      ],
      hints: [
        "Remember 'double balance': Work 1 vs Work 2, AND extract vs whole work inside each work.",
        "Give realistic time allocations summing cleanly to 10 minutes.",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (EXACTLY 2 papers × 15 Qs = 30 Qs)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PAPER 1: Concepts, Fields of Inquiry & Global Issue Formulation (15 Qs)
    // -----------------------------------------------------------------------
    {
      id: "6-concepts-global-issues-p1",
      title: "Practice Paper 1 — 7 Concepts, 5 Fields & Global Issue Narrowing",
      level: "SL",
      questions: [
        {
          id: "6-concepts-global-issues-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "seven-central-concepts",
          question:
            "Which ONE of the 7 Central Concepts specifically investigates how writers innovate within, stretch, or subvert inherited literary conventions — or depict artistic imagination as dissent?",
          answer: {
            type: "text",
            accept: ["Creativity", "creativity"],
            display: "Creativity",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Transformation", "transformation"] },
              feedback: "Transformation tracks change or rewriting across texts/characters; artistic innovation and imagination specifically anchor Creativity.",
            },
          ],
          solution: [
            "Artistic innovation, form-breaking, and imagination as survival or dissent directly define the IB Central Concept of **Creativity**.",
          ],
          hints: [
            "Look at the keywords 'innovate', 'subvert inherited conventions', and 'artistic imagination'.",
          ],
        },
        {
          id: "6-concepts-global-issues-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "five-fields-of-inquiry",
          question:
            "A student examines how state propaganda slogans and politicised trials erode citizens' trust in the rule of law. Enter the official Field of Inquiry number (1 to 5):\n1 = Culture, identity & community · 2 = Beliefs, values & education · 3 = Politics, power & justice · 4 = Art, creativity & imagination · 5 = Science, technology & the environment.",
          answer: { type: "number", value: 3, display: "3" },
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback: "Field 2 covers faith, moral values, and schooling; state propaganda and trials sit squarely in Field 3 (Politics, power & justice).",
            },
          ],
          solution: [
            "State propaganda, politicised courts, and the rule of law map directly to **Field 3: Politics, power and justice**.",
          ],
          hints: [
            "Match 'state propaganda' and 'rule of law' directly to the field containing power and justice.",
          ],
        },
        {
          id: "6-concepts-global-issues-p1-q03",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "narrowing-global-issues",
          question:
            "A student proposes the Global Issue: \"The impact of the 1962 Cuban Missile Crisis on naval officers in Havana.\" Which single mandatory IB property (wide-scale, transnational, or local) does this phrasing MOST directly fail?",
          answer: {
            type: "text",
            accept: ["transnational", "Transnational", "not transnational"],
            display: "transnational",
          },
          traps: [
            {
              spec: { type: "text", accept: ["wide-scale", "wide scale"] },
              feedback: "A nuclear standoff certainly has wide-scale significance — the fatal flaw is locking the phrasing to one date (1962) and city (Havana), which breaks transnational reach.",
            },
          ],
          solution: [
            "Anchoring the wording to a single year (1962), country (Cuba), and city (Havana) prevents cross-cultural transfer.",
            "It directly fails the **transnational** property.",
          ],
          hints: [
            "Spot the geographic and date locks: '1962', 'Cuban', and 'Havana'.",
          ],
        },
        {
          id: "6-concepts-global-issues-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "seven-central-concepts",
          question:
            "Which ONE of the 7 Central Concepts is best paired with a close-reading question investigating how shifting from first-person to third-person narration exposes a speaker's moral blind spots?",
          answer: {
            type: "text",
            accept: ["Perspective", "perspective"],
            display: "Perspective",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Identity", "identity"] },
              feedback: "Identity examines selfhood; shifting narrative vantage point from first- to third-person specifically centres on Perspective.",
            },
            {
              spec: { type: "text", accept: ["Representation", "representation"] },
              feedback: "Representation looks at how language constructs a reality or group; shifting the focalising vantage point targets Perspective.",
            },
          ],
          solution: [
            "Shifting from first-person to third-person alters *whose vantage point* filters events and reveals blind spots.",
            "Therefore, **Perspective** is the sharpest Central Concept.",
          ],
          hints: [
            "Ask which concept corresponds to narrative vantage point and focalization.",
            "Eliminate concepts centred on artistic originality or cultural rituals.",
          ],
        },
        {
          id: "6-concepts-global-issues-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "five-fields-of-inquiry",
          question:
            "Two studied texts explore how diaspora families lose fluency in an ancestral dialect across three generations, fracturing emotional intimacy at home. Enter the primary IB Field of Inquiry number (1 to 5):\n1 = Culture, identity & community · 2 = Beliefs, values & education · 3 = Politics, power & justice · 4 = Art, creativity & imagination · 5 = Science, technology & the environment.",
          answer: { type: "number", value: 1, display: "1" },
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback: "While family values intersect, diaspora belonging and ancestral language heritage anchor directly in Field 1 (Culture, identity & community).",
            },
          ],
          solution: [
            "Diaspora heritage, generational belonging, and linguistic identity sit directly within **Field 1: Culture, identity and community**.",
          ],
          hints: [
            "Focus on 'diaspora families', 'ancestral dialect', and 'generational intimacy'.",
            "Which field explicitly covers migration, language heritage, and family belonging?",
          ],
        },
        {
          id: "6-concepts-global-issues-p1-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 3,
          commandTerm: "Distinguish",
          guideRef: "seven-central-concepts",
          question:
            "Distinguish clearly between **Identity** and **Culture** as IB Central Concepts, illustrating how each asks a different analytical question about a character caught between ancestral traditions and modern urban life.",
          modelAnswer:
            "Identity focuses inwardly on individual selfhood, subjectivity, and psychological self-construction — asking how fragmented syntax or shifting pronouns express a character's fractured sense of self. Culture looks outwardly at the shared social ecosystem of customs, rituals, language, and collective expectations — asking how domestic setting or untranslated idioms represent the communal norms pressuring that individual. While closely linked, Identity tracks personal interiority whereas Culture examines inherited collective codes.",
          markScheme: [
            {
              point: "Defines Identity as inward selfhood/subjectivity/self-construction.",
              keywords: ["selfhood", "subjectivity", "interiority", "sense of self"],
            },
            {
              point: "Defines Culture as shared collective customs, rituals, language, or social norms.",
              keywords: ["shared", "customs", "rituals", "collective", "ecosystem"],
            },
            {
              point: "Demonstrates how each directs analysis toward a distinct formal/analytical angle on the character.",
              keywords: ["syntax", "pronouns", "idioms", "setting", "pressuring"],
            },
          ],
          hints: [
            "Contrast inward selfhood with the outward shared social ecosystem.",
            "Link each concept to a concrete formal choice (like pronouns or setting/idiom).",
          ],
        },
        {
          id: "6-concepts-global-issues-p1-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Apply",
          guideRef: "seven-central-concepts",
          question:
            "A student drafts this flat statement about an unseen lyric poem: \"This poem deals with Perspective and Representation because the speaker talks about poor factory workers.\" Rewrite this into TWO separate, high-scoring conceptual claims — one anchored strictly in **Perspective** and one anchored strictly in **Representation** — showing how formal choices power each claim.",
          modelAnswer:
            "Perspective claim: By filtering the factory floor strictly through an aloof manager's detached third-person gaze, the poem exposes how privileged focalization normalises exhaustion as mere scenery. Representation claim: Through repetitive mechanical metaphors that reduce labourers' bodies to interchangeable gears while denying them direct speech, the text critiques how industrial language strips marginalised workers of human individuality.",
          markScheme: [
            {
              point: "Perspective claim isolates vantage point/focalization/gaze filtering perception.",
              keywords: ["focalization", "gaze", "filtering", "detached", "privileged"],
            },
            {
              point: "Perspective claim ties a concrete formal choice to conceptual effect.",
              keywords: ["third-person", "normalises", "aloof", "exposes"],
            },
            {
              point: "Representation claim examines how language/omission constructs or distorts workers.",
              keywords: ["metaphors", "direct speech", "strips", "interchangeable", "mechanical"],
            },
            {
              point: "Representation claim frames an arguable critique rather than flat topic naming.",
              keywords: ["critiques", "marginalised", "individuality", "industrial language"],
            },
          ],
          hints: [
            "Keep Perspective tied to the 'camera angle' (who sees, what blind spots appear).",
            "Keep Representation tied to the 'painted canvas' (how diction, metaphor, or silence constructs/reduces a group).",
          ],
        },
        {
          id: "6-concepts-global-issues-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Explain",
          guideRef: "five-fields-of-inquiry",
          question:
            "Explain how a single Individual Oral Global Issue can productively sit at the intersection of TWO IB Fields of Inquiry, using a concrete literary example (transferable across any two studied works) to show why overlapping fields deepen rather than dilute analysis.",
          modelAnswer:
            "The five Fields of Inquiry are overlapping springboards rather than rigid walls. For instance, examining how corporate profit motives suppress scientific warnings about contaminated water in rural towns bridges Field 5 (Science, technology and the environment) with Field 3 (Politics, power and justice). That intersection deepens analysis without splitting focus because one unified tension governs both extracts: ecological imagery reveals material harm while bureaucratic dialogue and civic silencing expose institutional power. Rather than covering two separate topics, the overlap sharpens how power and environment reinforce each other.",
          markScheme: [
            {
              point: "Clarifies that the 5 Fields are flexible, overlapping springboards rather than mutually exclusive boxes.",
              keywords: ["springboards", "overlapping", "rigid", "walls"],
            },
            {
              point: "Provides a sharp, unified Global Issue spanning two explicitly named Fields of Inquiry.",
              keywords: ["contaminated", "scientific", "corporate", "field 5", "field 3"],
            },
            {
              point: "Explains how one unified tension keeps focus tight instead of juggling two disconnected topics.",
              keywords: ["unified tension", "reinforce", "separate topics", "focus"],
            },
            {
              point: "Connects the intersection directly to richer Criterion B craft analysis (e.g. ecological imagery + political dialogue).",
              keywords: ["imagery", "bureaucratic", "dialogue", "silencing"],
            },
          ],
          hints: [
            "Choose two clearly complementary fields (such as Fields 3 & 5, or Fields 1 & 4).",
            "Show why the overlap yields ONE sharp unified tension rather than two half-developed ideas.",
          ],
        },
        {
          id: "6-concepts-global-issues-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Apply",
          guideRef: "narrowing-global-issues",
          question:
            "Take the vague starting theme \"Gender roles\" and guide it step-by-step through ALL FOUR stages of the **Global Issue Narrowing Funnel**, finishing with a Band-5 formulation that passes wide-scale significance, transnational reach, and everyday local impact.",
          modelAnswer:
            "Stage 1 (Field of Inquiry): Culture, identity and community. Stage 2 (Broad theme): Restrictive expectations placed on masculinity and emotional vulnerability. Stage 3 (Specific mechanism): Social stigma punishing men who express grief or tenderness in front of peers and relatives. Stage 4 (Sharpened IO Global Issue): How inherited codes of stoic masculinity pressure men into emotional suppression, fracturing intimacy within everyday family relationships. This final statement holds wide-scale societal reach, crosses national and historical borders cleanly, and surfaces vividly in daily household speech and silence.",
          markScheme: [
            {
              point: "Stage 1 accurately identifies the launching IB Field of Inquiry.",
              keywords: ["stage 1", "culture, identity and community", "field of inquiry"],
            },
            {
              point: "Stage 2 & Stage 3 show genuine progressive narrowing from broad theme to a specific social mechanism.",
              keywords: ["stage 2", "stage 3", "stigma", "mechanism", "stoic"],
            },
            {
              point: "Stage 4 produces a crisp, active-verb Global Issue with zero country/era/plot lock-in.",
              keywords: ["stage 4", "pressure", "suppression", "fracturing"],
            },
            {
              point: "Verifies wide-scale, transnational, and everyday local dimensions clearly.",
              keywords: ["borders", "household", "societal", "intimacy"],
            },
          ],
          hints: [
            "Name all 4 stages explicitly: Field → Broad Theme → Specific Mechanism → Sharp IO Global Issue.",
            "Use the active-verb formula: How [mechanism] + [verb] + [human impact] + [everyday local space].",
          ],
        },
        {
          id: "6-concepts-global-issues-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 6,
          commandTerm: "Evaluate",
          guideRef: "narrowing-global-issues",
          question:
            "Evaluate THREE flawed student Global Issues below — naming the exact IB property violated by each AND rewriting each into a sharp, Band-5 formulation:\n1. \"Education\"\n2. \"The closure of coal mines in Wales during the 1980s\"\n3. \"How geopolitical border treaties determine maritime exclusive economic zones\"",
          modelAnswer:
            "1. 'Education' is far too broad and vague, lacking any mechanism or everyday local edge. Rewrite: How exam-driven institutional schooling rewards outward conformity while stifling young people's moral curiosity in daily classroom life. 2. 'The closure of coal mines in Wales during the 1980s' violates transnational reach by locking the issue to one region, industry, and decade. Rewrite: How sudden industrial decline erodes collective dignity and intergenerational purpose within displaced working communities. 3. 'Maritime exclusive economic zones' fails impact felt in everyday local contexts because it stays trapped in abstract legal macro-jargon. Rewrite: How contested state borders disrupt ordinary fishermen's livelihoods and sense of home across divided coastal communities.",
          markScheme: [
            {
              point: "Correctly diagnoses Draft 1 as overly broad/vague (no mechanism/local focus).",
              keywords: ["vague", "broad", "mechanism"],
            },
            {
              point: "Rewrites Draft 1 into a sharp transnational + everyday local educational tension.",
              keywords: ["conformity", "classroom", "curiosity", "schooling"],
            },
            {
              point: "Correctly diagnoses Draft 2 as violating transnational reach (region/decade lock-in).",
              keywords: ["transnational", "region", "decade", "locking"],
            },
            {
              point: "Rewrites Draft 2 into a transferable industrial/community tension.",
              keywords: ["industrial decline", "dignity", "displaced", "working communities"],
            },
            {
              point: "Correctly diagnoses Draft 3 as lacking everyday local human impact (abstract macro-jargon).",
              keywords: ["everyday", "local", "abstract", "jargon"],
            },
            {
              point: "Rewrites Draft 3 into an intimate human tension felt in daily coastal/border life.",
              keywords: ["livelihoods", "sense of home", "coastal", "contested"],
            },
          ],
          markbands: [
            {
              band: "Band 3 (5–6 marks)",
              marks: [5, 6],
              descriptor: "Accurately diagnoses all three distinct IB property flaws and provides three razor-sharp, transnational, locally felt rewrites with active mechanisms.",
              indicators: ["Precise IB gate diagnosis for all 3 drafts", "Zero country/date/plot lock-in in rewrites", "Vivid everyday local texture"],
            },
            {
              band: "Band 2 (3–4 marks)",
              marks: [3, 4],
              descriptor: "Diagnoses most flaws accurately; rewrites improve focus but one or more remain slightly broad or detached from daily human experience.",
              indicators: ["2–3 accurate flaw labels", "Rewrites partly narrowed"],
            },
            {
              band: "Band 1 (1–2 marks)",
              marks: [1, 2],
              descriptor: "Identifies surface weaknesses vaguely; rewrites remain overly broad or replicate geographic/abstract flaws.",
              indicators: ["Generic feedback without IB gate criteria", "Weak rewrites"],
            },
          ],
          hints: [
            "Check each draft against the 3 gates: Wide-scale, Transnational, Everyday Local.",
            "Ensure every rewrite uses an active verb and drops any single country, year, or bureaucratic jargon.",
          ],
        },
        {
          id: "6-concepts-global-issues-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Examine",
          guideRef: "narrowing-global-issues",
          question:
            "Examine why \"How a dramatist uses lighting shifts and dramatic irony to build tragic suspense\" fails as an Individual Oral Global Issue — even though it is narrow, transnational, and applicable to everyday theatregoing.",
          modelAnswer:
            "Lighting shifts and dramatic irony are authorial craft choices (the *how* evaluated under Criterion B), not a real-world human Global Issue experienced in society (the *what* required by the IO prompt). The official IO prompt asks how a Global Issue is presented *through* content and form; turning form itself into the Global Issue collapses the distinction between literary technique and lived human concern. To repair it, the speaker must identify the social tension those techniques dramatise — for example, how concealed family secrets destroy moral trust inside tightly policed households — and then analyse lighting and irony as the craft revealing that issue.",
          markScheme: [
            {
              point: "Distinguishes authorial craft/technique (Criterion B means) from a real-world societal Global Issue.",
              keywords: ["craft", "technique", "criterion b", "real-world", "societal"],
            },
            {
              point: "References the official IO prompt distinction (Global Issue presented *through* content and form).",
              keywords: ["content and form", "prompt", "distinction", "collapses"],
            },
            {
              point: "Explains why pure technique fails the lived everyday social-impact dimension of a Global Issue.",
              keywords: ["lived", "human concern", "social tension"],
            },
            {
              point: "Provides a valid repair separating a human Global Issue from the dramatic devices analysing it.",
              keywords: ["secrets", "trust", "households", "repair"],
            },
          ],
          hints: [
            "Separate the *tool* (craft/form) from the *human issue* being illuminated.",
            "Recall the exact wording of the official IO prompt: 'presented through the content and form'.",
          ],
        },
        {
          id: "6-concepts-global-issues-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 6,
          commandTerm: "Design",
          guideRef: "seven-central-concepts",
          question:
            "For an **HL Essay [HL]** (1,200–1,500 words) on a single studied novel or play exploring memory after political violence, design a razor-sharp **Line of Inquiry** anchored in ONE of the 7 Central Concepts, and justify how your question protects against plot summary while enabling sustained Criterion A and B evaluation across 3 progressive analytical movements.",
          modelAnswer:
            "Anchor Concept: **Representation**. Line of Inquiry: *How does the author use fragmented chronology, recurring domestic motifs, and narrative omission to represent traumatic memory not as linear healing, but as an unresolved rupture in everyday life?* Because this question interrogates *how* specific formal choices construct an arguable paradox (trauma resisting linear recovery), a writer cannot answer it by retelling chapters chronologically. Instead, it sustains three progressive Criterion A/B movements: Movement 1 examines how fractured chronology destabilises reassuring closure (Criterion B structural craft); Movement 2 analyses how ordinary household objects carry unspoken grief (micro-imagery); Movement 3 evaluates the ethical ambiguity of narrative silence at the ending, preventing neat moralising while staying cleanly within 1,200–1,500 words.",
          markScheme: [
            {
              point: "Selects ONE clear Central Concept as the sustained conceptual anchor.",
              keywords: ["representation", "anchor concept", "unresolved"],
            },
            {
              point: "Formulates an arguable, formal *how* Line of Inquiry naming specific literary choices.",
              keywords: ["fragmented chronology", "omission", "motifs", "linear"],
            },
            {
              point: "Explains explicitly why an arguable craft-driven question blocks chronological plot retelling.",
              keywords: ["retelling", "paradox", "cannot answer", "chapters"],
            },
            {
              point: "Maps Movement 1 clearly to structural/formal craft analysis.",
              keywords: ["movement 1", "destabilises", "closure", "structural"],
            },
            {
              point: "Maps Movement 2 clearly to micro-level imagery/stylistic analysis.",
              keywords: ["movement 2", "household objects", "micro-imagery", "grief"],
            },
            {
              point: "Maps Movement 3 to nuanced evaluation/ambiguity suited to the 1,200–1,500w scope.",
              keywords: ["movement 3", "ambiguity", "silence", "1,200"],
            },
          ],
          markbands: [
            {
              band: "Band 3 (5–6 marks)",
              marks: [5, 6],
              descriptor: "Designs an original, arguable conceptual Line of Inquiry anchored in concrete craft and maps three genuinely progressive analytical movements.",
              indicators: ["Single clear Concept anchor", "Arguable formal 'how' question", "3 progressive (non-chronological) movements"],
            },
            {
              band: "Band 2 (3–4 marks)",
              marks: [3, 4],
              descriptor: "Creates a workable conceptual question and reasonable plan, though movements partly overlap or lean descriptive.",
              indicators: ["Relevant Concept chosen", "Some formal features named"],
            },
            {
              band: "Band 1 (1–2 marks)",
              marks: [1, 2],
              descriptor: "Question remains broad or plot-focused with minimal formal progression.",
              indicators: ["Broad thematic prompt", "Weak link to craft"],
            },
          ],
          hints: [
            "Pick ONE Concept (e.g. Representation, Perspective, Communication, or Transformation) and tie it to 2–3 concrete formal choices.",
            "Show how 3 conceptual movements escalate an argument rather than walking through Act 1, Act 2, Act 3.",
          ],
        },
        {
          id: "6-concepts-global-issues-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Analyse",
          guideRef: "narrowing-global-issues",
          question:
            "A student says: \"My Global Issue is *how a widowed farmer in a 1950s rural village loses his orchard to a railway developer*.\" Diagnose why this over-narrowing harms the Individual Oral and show how to widen it into the Goldilocks zone without becoming vague.",
          modelAnswer:
            "This draft over-narrows into a single-text plot summary pinned to one character, profession, and decade, violating transnational transferability and making it impossible to pair organically with a second studied work unless both texts happen to share identical plots. To enter the Goldilocks zone without collapsing back into vagueness like 'progress', lift the underlying human mechanism out of one farm while keeping vivid local texture: *How rapid infrastructural modernisation displaces rural livelihoods and severs generational attachment to ancestral land.* That wording travels freely across continents and literary forms while anchoring sharp Criterion B imagery.",
          markScheme: [
            {
              point: "Identifies over-narrowing / plot-summary lock-in (character, profession, decade).",
              keywords: ["plot summary", "pinned", "over-narrows", "decade"],
            },
            {
              point: "Explains how it breaks transnational transferability and organic pairing with Work 2.",
              keywords: ["transnational", "transferability", "second studied work", "identical plots"],
            },
            {
              point: "Explains the widening principle: extract the core mechanism while avoiding vague one-word nouns.",
              keywords: ["mechanism", "vagueness", "local texture", "goldilocks"],
            },
            {
              point: "Supplies a polished Goldilocks Global Issue passing all three IB properties.",
              keywords: ["modernisation", "displaces", "livelihoods", "ancestral land"],
            },
          ],
          hints: [
            "Explain BOTH why the current phrasing is trapped AND how to avoid swinging to the opposite extreme of vagueness.",
            "Test your revised sentence on whether two totally different works (e.g. an English novel and a translated poem) could illuminate it naturally.",
          ],
        },
        {
          id: "6-concepts-global-issues-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          marks: 6,
          commandTerm: "Discuss",
          guideRef: "seven-central-concepts",
          question:
            "Discuss how a poem or play can enact a **productive tension** between what its characters *claim* about **Transformation** or **Identity** and what its literary *form* actually performs — explaining why uncovering such friction moves an essay from Band 3 to Band 5 on Criteria A and B.",
          modelAnswer:
            "Mid-band (Band 3) readers typically take a speaker's or character's surface declarations at face value — assuming that if a speaker proclaims personal reinvention, the text straightforwardly celebrates transformation. Band-5 readers test content *against* form to uncover productive ironic friction. For example, a lyric speaker may declare emotional liberation in triumphant diction while the poet locks every line inside an unbroken, claustrophobic rhyme scheme and heavy end-stopping, implying psychological captivity beneath surface bravado. Similarly, a dramatist may give a character speeches boasting of autonomous identity while stage directions trap them within cramped domestic blocking and repeated interruptions. Evaluating this contradiction elevates Criterion A by grasping subtle, unresolved implications rather than reductive morals, and elevates Criterion B by demonstrating how formal architecture actively complicates — rather than passively decorates — conceptual meaning.",
          markScheme: [
            {
              point: "Contrasts Band-3 surface/literal reading against Band-5 attention to content-versus-form tension.",
              keywords: ["surface", "face value", "friction", "contradiction"],
            },
            {
              point: "Illustrates tension concretely through a poetic formal choice (e.g. rigid rhyme/end-stopping contradicting claimed freedom).",
              keywords: ["rhyme scheme", "end-stopping", "claustrophobic", "captivity"],
            },
            {
              point: "Illustrates tension concretely through a dramatic or prose formal choice (e.g. blocking, interruptions, or syntax).",
              keywords: ["stage directions", "blocking", "interruptions", "autonomous"],
            },
            {
              point: "Explains how embracing ambiguity and ironic friction advances Criterion A (subtle implications over reductive morals).",
              keywords: ["criterion a", "implications", "reductive", "unresolved"],
            },
            {
              point: "Explains how analysing form as an active complicator advances Criterion B (evaluation over decoration).",
              keywords: ["criterion b", "architecture", "complicates", "decorates"],
            },
            {
              point: "Maintains a cohesive, conceptual line of argument linking form directly to Transformation or Identity.",
              keywords: ["reinvention", "bravado", "liberation", "conceptual meaning"],
            },
          ],
          markbands: [
            {
              band: "Band 3 (5–6 marks)",
              marks: [5, 6],
              descriptor: "Perceptively unpacks ironic content-vs-form friction using vivid transferable craft examples and explicit Criterion A & B rubric links.",
              indicators: ["Clear Band 3 vs Band 5 contrast", "Two concrete formal illustrations", "Explicit Criterion A & B impact"],
            },
            {
              band: "Band 2 (3–4 marks)",
              marks: [3, 4],
              descriptor: "Explains content-vs-form tension sensibly with one example, though links to Criteria A & B stay general.",
              indicators: ["Understands irony between form and statement", "Partial rubric explanation"],
            },
            {
              band: "Band 1 (1–2 marks)",
              marks: [1, 2],
              descriptor: "Offers general remarks about literary devices without unpacking productive tension or rubric separators.",
              indicators: ["Surface-level technique naming"],
            },
          ],
          hints: [
            "Contrast how a Band-3 reader reads a speaker's words literally versus how a Band-5 reader tests words against form.",
            "Give concrete transferable craft examples (like rigid poetic rhyme or cramped dramatic blocking) and tie explicitly to Criteria A and B.",
          ],
        },
        {
          id: "6-concepts-global-issues-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          marks: 8,
          commandTerm: "To what extent",
          guideRef: "narrowing-global-issues",
          question:
            "To what extent does a **narrowed, transnational Global Issue** risk erasing the unique historical and cultural specificity of two literary works paired in the Individual Oral? Evaluate this tension and explain how top-band candidates preserve cultural specificity within a transnational lens.",
          modelAnswer:
            "A poorly constructed Global Issue does indeed risk flattening historical and cultural specificity: if a speaker reduces two works from distinct eras and continents to a bland universal slogan such as 'humans suffer under bad governments', they erase the local idioms, political realities, and cultural histories that give each text its power (Area of Exploration 2: Time and Space). However, a genuinely razor-sharp transnational Global Issue operates as a shared analytical bridge rather than a homogenising blanket. By isolating a precise human mechanism — for instance, *how state-sanctioned memory erasure fractures family testimony in everyday domestic life* — the speaker establishes transnational transferability while leaving full space to honour each work's distinct context of production and reception. Top-band candidates achieve this balance in three concrete ways: first, they anchor Work 1 and Work 2 in their specific cultural, historical, and linguistic ecosystems rather than pretending both worlds are identical; second, when analysing the translated work, they attend sensitively to untranslated terms, culturally loaded register, and translator phrasing; third, in their opening and concluding synthesis, they foreground *divergence within similarity*, showing how differing historical pressures and literary forms generate contrasting emotional and ethical responses to the same shared human tension. Thus, far from erasing cultural specificity, a disciplined transnational Global Issue makes cultural difference analytically legible and elevates both Criterion A and Criterion B to Band 5.",
          markScheme: [
            {
              point: "Acknowledges the genuine risk: bland universal slogans flatten historical, political, and cultural specificity.",
              keywords: ["flattening", "slogan", "homogenising", "erase"],
            },
            {
              point: "Refutes total erasure by framing a sharp Global Issue as an analytical bridge rather than a blanket.",
              keywords: ["bridge", "mechanism", "transferability", "legible"],
            },
            {
              point: "Connects specificity explicitly to Area of Exploration 2 (contexts of production and reception).",
              keywords: ["production", "reception", "time and space", "ecosystems"],
            },
            {
              point: "Demonstrates a concrete, balanced transnational Global Issue sample.",
              keywords: ["memory erasure", "testimony", "domestic", "sanctioned"],
            },
            {
              point: "Highlights attending to untranslated idioms, register, and translator phrasing in the translated work.",
              keywords: ["untranslated", "register", "translator", "linguistic"],
            },
            {
              point: "Highlights foregrounding divergence within similarity across distinct literary forms in intro/synthesis.",
              keywords: ["divergence", "contrasting", "synthesis", "forms"],
            },
            {
              point: "Links preserving specificity directly to Band-5 performance on Criteria A and B.",
              keywords: ["criterion a", "criterion b", "band 5", "ethical"],
            },
            {
              point: "Reaches a nuanced, balanced 'to what extent' judgement rather than a binary yes/no claim.",
              keywords: ["far from", "however", "disciplined", "thus"],
            },
          ],
          markbands: [
            {
              band: "Band 4 (7–8 marks)",
              marks: [7, 8],
              descriptor: "Offers a nuanced, evaluative 'to what extent' judgement balancing genuine risks of universalising against concrete, transferable strategies (AoE 2, translation nuance, divergence within similarity).",
              indicators: ["Nuanced counter-argument + synthesis", "Concrete translated-work craft", "Clear Criterion A/B linkage"],
            },
            {
              band: "Band 3 (5–6 marks)",
              marks: [5, 6],
              descriptor: "Weighs both sides sensibly and offers workable strategies for keeping cultural context alive within a transnational lens.",
              indicators: ["Acknowledges risk and benefit", "Solid examples of cultural specificity"],
            },
            {
              band: "Band 2 (3–4 marks)",
              marks: [3, 4],
              descriptor: "Makes a largely one-sided argument with limited explanation of how translated works or synthesis protect context.",
              indicators: ["Mostly descriptive", "Thin link to IO craft"],
            },
            {
              band: "Band 1 (1–2 marks)",
              marks: [1, 2],
              descriptor: "Gives a brief yes/no opinion with minimal engagement with IB Global Issue requirements.",
              indicators: ["Binary answer", "No methodological detail"],
            },
          ],
          hints: [
            "Never give a flat 'yes' or 'no' to a 'To what extent' question — concede when the risk is real (bland slogans) and show how sharp craft resolves it.",
            "Bring in AoE 2 (production/reception), translator register sensitivity, and 'divergence within similarity' in the synthesis.",
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PAPER 2: Individual Oral Craft, Extract Selection, Pacing & Rubric (15 Qs)
    // -----------------------------------------------------------------------
    {
      id: "6-concepts-global-issues-p2",
      title: "Practice Paper 2 — Individual Oral Pairing, Pacing & Rubric Mastery",
      level: "SL",
      questions: [
        {
          id: "6-concepts-global-issues-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "pairing-english-translated-works",
          question:
            "A student chooses a 47-line prose extract for Work 1 of their Individual Oral. What is the MINIMUM number of lines they must trim to comply with the official IB extract ceiling?",
          answer: { type: "number", value: 7, display: "7 lines" },
          traps: [
            {
              spec: { type: "number", value: 40 },
              feedback: "40 lines is the official maximum length, not the number of lines to trim: 47 − 40 = 7 lines.",
            },
          ],
          solution: [
            "Maximum extract length = 40 lines.",
            "Excess lines to trim = 47 − 40 = **7 lines**.",
          ],
          hints: [
            "Subtract the official maximum extract ceiling (40 lines) from 47.",
          ],
        },
        {
          id: "6-concepts-global-issues-p2-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "pairing-english-translated-works",
          question:
            "What percentage of the final IB Diploma English A: Literature **SL** grade does the Individual Oral represent? (Give a number with %.)",
          answer: { type: "number", value: 30, display: "30%" },
          traps: [
            {
              spec: { type: "number", value: 20 },
              feedback: "20% is the HL weighting for the Individual Oral; at SL it is worth 30%.",
            },
            {
              spec: { type: "number", value: 35 },
              feedback: "35% is the weighting for Paper 1 SL and Paper 2 SL; the remaining 30% is the Individual Oral.",
            },
          ],
          solution: [
            "SL assessment weightings: Paper 1 (35%) + Paper 2 (35%) + Individual Oral (**30%**) = 100%.",
          ],
          hints: [
            "SL Paper 1 and Paper 2 are worth 35% each — find the remaining share.",
          ],
        },
        {
          id: "6-concepts-global-issues-p2-q03",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "pairing-english-translated-works",
          question:
            "In a mock Individual Oral, a candidate earns Criterion A = 9, Criterion B = 8, Criterion C = 9, and Criterion D = 8. Express their total score as a percentage of the maximum 40 marks.",
          answer: { type: "number", value: 85, display: "85%" },
          traps: [
            {
              spec: { type: "number", value: 34 },
              feedback: "34 is the raw mark out of 40 — convert 34 / 40 to a percentage (34 ÷ 40 × 100 = 85%).",
            },
          ],
          solution: [
            "Raw score = 9 + 8 + 9 + 8 = 34 out of 40.",
            "Percentage = {{(34 / 40) * 100}} = **85%**.",
          ],
          hints: [
            "Sum the four criteria first, then divide by 40 and multiply by 100.",
          ],
        },
        {
          id: "6-concepts-global-issues-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "pairing-english-translated-works",
          question:
            "An SL student studies the minimum **9 works** (including 3 translated works). After committing 1 English work and 1 translated work to their Individual Oral, how many distinct remaining works are eligible for Paper 2 under the non-overlap rule?",
          answer: { type: "number", value: 7, display: "7 works" },
          traps: [
            {
              spec: { type: "number", value: 9 },
              feedback: "Works used in the Individual Oral CANNOT be reused in Paper 2 under the non-overlap rule.",
            },
            {
              spec: { type: "number", value: 6 },
              feedback: "SL students do NOT write an HL Essay, so only 2 works (the IO pair) are removed from 9, leaving 7.",
            },
          ],
          solution: [
            "SL minimum works studied = 9; Individual Oral uses 2 works (1 English + 1 translated); SL has no HL Essay.",
            "Eligible Paper 2 reserve works = 9 − 2 = **7 works**.",
          ],
          hints: [
            "Check how many works the Individual Oral uses and remember SL has no HL Essay.",
            "Subtract the IO works from the SL minimum of 9.",
          ],
        },
        {
          id: "6-concepts-global-issues-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "pairing-english-translated-works",
          question:
            "A student plans a 10-minute (600-second) Individual Oral with 45 seconds for the opening, 45 seconds for closing synthesis, and an exact 50/50 split between Work 1 and Work 2. How many seconds does EACH work receive?",
          answer: { type: "number", value: 255, display: "255 seconds" },
          traps: [
            {
              spec: { type: "number", value: 300 },
              feedback: "300 seconds (5 minutes) ignores the 90 seconds allocated to the opening (45s) and synthesis (45s).",
            },
            {
              spec: { type: "number", value: 510 },
              feedback: "510 seconds is the combined time for BOTH works — divide by 2 for each individual work (255s = 4m 15s).",
            },
          ],
          solution: [
            "Remaining body time = 600 − (45 + 45) = 510 seconds.",
            "Equal split per work = 510 ÷ 2 = **255 seconds** (4 minutes 15 seconds each).",
          ],
          hints: [
            "Subtract both the 45s opening AND the 45s synthesis from 600 seconds first.",
            "Divide the remaining body seconds equally by 2.",
          ],
        },
        {
          id: "6-concepts-global-issues-p2-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 3,
          commandTerm: "Explain",
          guideRef: "pairing-english-translated-works",
          question:
            "Explain THREE craft criteria a candidate should use when choosing a ≤40-line extract for the Individual Oral instead of merely picking a page where a character mentions the Global Issue aloud.",
          modelAnswer:
            "First, prioritise stylistic density — choose a turning point rich in form-specific choices such as imagery, tonal shifts, stage directions, rhythm, or focalization so Criterion B analysis thrives. Second, seek subtext and emotional tension rather than flat plot exposition, allowing evaluative commentary on what is concealed or ironic. Third, confirm strong macro resonance — the passage should echo or pivot against key motifs and structural arcs across the wider whole work so zooming out feels organic.",
          markScheme: [
            {
              point: "Prioritises stylistic density / rich form-specific authorial choices to fuel Criterion B.",
              keywords: ["stylistic density", "form-specific", "imagery", "stage directions", "criterion b"],
            },
            {
              point: "Favours subtext, ambiguity, or tonal tension over plain plot exposition.",
              keywords: ["subtext", "exposition", "tension", "ironic"],
            },
            {
              point: "Ensures structural/motif resonance enabling smooth zoom-out to the wider whole work.",
              keywords: ["macro", "resonance", "motifs", "zooming out", "whole work"],
            },
          ],
          hints: [
            "Think about Criterion B (authorial choices) AND Criterion A (linking micro extract to macro whole work).",
            "Why does flat explanatory dialogue starve your analysis?",
          ],
        },
        {
          id: "6-concepts-global-issues-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Contrast",
          guideRef: "pairing-english-translated-works",
          question:
            "Contrast the assessment requirements of the **Individual Oral** with **Paper 2** across four specific dimensions: text access, work selection, comparative structure, and mark distribution.",
          modelAnswer:
            "First, text access: the Individual Oral permits two clean unmarked ≤40-line extracts plus a maximum 10-bullet outline, whereas Paper 2 is completely closed-book with zero texts or notes. Second, work selection: the IO strictly requires pairing one original English work with one translated work, whereas Paper 2 allows any two remaining non-overlapping studied works (English or translated). Third, structure: Paper 2 explicitly rewards integrated comparative synthesis throughout every body section, whereas the IO assesses balanced work-by-work presentation framed by concise intro and synthesis without demanding constant back-and-forth alternation. Fourth, marks: the IO is worth 40 marks evenly split (A10/B10/C10/D10), whereas Paper 2 is worth 30 marks weighted more heavily toward content and craft (A10/B10/C5/D5).",
          markScheme: [
            {
              point: "Contrasts text access: IO clean ≤40-line extracts + ≤10-bullet outline vs Paper 2 strictly closed-book.",
              keywords: ["unmarked", "outline", "closed-book", "zero texts"],
            },
            {
              point: "Contrasts work selection: IO mandatory 1 English + 1 translated vs Paper 2 any two unused non-overlapping works.",
              keywords: ["english", "translated", "non-overlapping", "remaining"],
            },
            {
              point: "Contrasts structure: Paper 2 sustained integrated comparison vs IO balanced work-by-work presentation with framing synthesis.",
              keywords: ["integrated", "work-by-work", "alternation", "synthesis"],
            },
            {
              point: "Contrasts exact mark allocations: IO 40 marks (A10/B10/C10/D10) vs Paper 2 30 marks (A10/B10/C5/D5).",
              keywords: ["40 marks", "30 marks", "a10/b10/c10/d10", "a10/b10/c5/d5"],
            },
          ],
          hints: [
            "Cover all four named dimensions systematically: access, pairing, structure, and exact mark splits.",
            "Remember the exact Paper 2 split (A10, B10, C5, D5 = 30) versus IO (A10, B10, C10, D10 = 40).",
          ],
        },
        {
          id: "6-concepts-global-issues-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Analyse",
          guideRef: "pairing-english-translated-works",
          question:
            "A student submits this rehearsal log for their 10-minute Individual Oral:\n- Intro: 1:45 (full author biographies + Global Issue)\n- Work 1 (English): 3:45 extract + 0:15 whole work\n- Work 2 (Translated): 1:30 extract + 2:30 whole work\n- Synthesis: 0:15\nDiagnose FOUR distinct pacing or balance flaws in this log and specify exact fixes.",
          modelAnswer:
            "First, the 1:45 introduction wastes vital time on author biographies rather than launching sharply into the Global Issue in ~45 seconds. Second, Work 1 (4:00 total) and Work 2 (4:00 total) look balanced on paper, yet Work 1 starves whole-work analysis at just 15 seconds, capping Criteria A and B on the English text; shift at least 1:30 from its extract to macro whole-work touchpoints. Third, Work 2 flips into the opposite imbalance, giving only 1:30 to close-reading its ≤40-line extract while drifting into 2:30 of broader summary; expand micro close-reading of Work 2's extract to ~2:30. Fourth, the rushed 15-second closing cuts off conceptual synthesis — reallocate ~30 seconds saved from the bloated intro so the ending lands cleanly at 0:45.",
          markScheme: [
            {
              point: "Identifies bloated 1:45 intro / biography waste and trims to ~45s focused Global Issue framing.",
              keywords: ["biographies", "wastes", "45 seconds", "bloated"],
            },
            {
              point: "Diagnoses Work 1's extract-heavy / whole-work-starved split (3:45 vs 0:15) and rebalances toward macro coverage.",
              keywords: ["starves", "15 seconds", "macro", "rebalance", "touchpoints"],
            },
            {
              point: "Diagnoses Work 2's extract-light / whole-work-heavy drift (1:30 vs 2:30) and expands micro extract close-reading.",
              keywords: ["flips", "opposite", "close-reading", "2:30"],
            },
            {
              point: "Diagnoses rushed 0:15 synthesis and restores a purposeful ~45s conceptual closing.",
              keywords: ["rushed", "synthesis", "reallocate", "0:45"],
            },
          ],
          hints: [
            "Look beyond the total 4:00 / 4:00 split — inspect the intro, inside Work 1, inside Work 2, and the ending!",
            "Pair every flaw with a concrete timing adjustment.",
          ],
        },
        {
          id: "6-concepts-global-issues-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Explain",
          guideRef: "pairing-english-translated-works",
          question:
            "Explain how a candidate using a **studied poetry collection** as one of their Individual Oral works should handle both the ≤40-line extract and the 'whole work' requirement without turning the presentation into a superficial list of poem titles.",
          modelAnswer:
            "Select either one complete short poem of ≤40 lines or a self-contained ≤40-line excerpt from a longer poem that showcases dense poetic craft (metre, volta, caesura, semantic fields) for the 2:30 micro close-reading. When zooming out for the 1:45 whole-work section, treat the studied body of poems by that same poet as the 'whole work', focusing deeply on just 2–3 contrasting poems rather than rattling off seven titles superficially. For each wider poem, evaluate one sharp recurring or contrasting formal technique — such as how ironic understatement in a later poem complicates the elegiac imagery of the extract — so macro references still earn high Criterion B marks.",
          markScheme: [
            {
              point: "Explains extract selection cleanly: one complete short poem ≤40 lines or a ≤40-line excerpt rich in poetic craft.",
              keywords: ["complete short poem", "excerpt", "volta", "caesura", "metre"],
            },
            {
              point: "Defines the 'whole work' accurately as the wider studied collection/body of poems by that same poet.",
              keywords: ["body of poems", "same poet", "collection"],
            },
            {
              point: "Recommends depth over breadth: select 2–3 key contrasting poems instead of listing many titles.",
              keywords: ["2–3", "contrasting poems", "superficially", "seven titles"],
            },
            {
              point: "Requires linking wider poems to specific authorial craft choices (not bare themes) to protect Criterion B.",
              keywords: ["understatement", "elegiac", "formal technique", "criterion b"],
            },
          ],
          hints: [
            "Clarify what counts as the extract vs the whole work for a poet.",
            "Show how choosing 2–3 deep craft touchpoints beats name-dropping six poem titles.",
          ],
        },
        {
          id: "6-concepts-global-issues-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 6,
          commandTerm: "Design",
          guideRef: "pairing-english-translated-works",
          question:
            "Design a complete, symmetrical **10-bullet Individual Oral outline blueprint** (showing exact purpose, target timing, and what belongs vs what must be excluded on each bullet) that safeguards both Criterion C organisation and Criterion D natural spoken delivery.",
          modelAnswer:
            "Bullet 1 (0:00–0:45): Exact narrowed Global Issue + crisp framing sentence naming Work 1 (English) and Work 2 (Translated). Bullets 2–4 (0:45–3:15): Three tight Work 1 extract cues pairing line numbers + authorial feature + conceptual effect (e.g. 'L.5–9 jagged syntax → fractured selfhood'). Bullet 5 (3:15–5:00): Work 1 whole-work cues — 2–3 structural moments or contrasting arcs across the wider text. Bullets 6–8 (5:00–7:30): Three symmetrical Work 2 extract cues covering form-specific craft and any translation/register nuance. Bullet 9 (7:30–9:15): Work 2 whole-work cues linking the extract to wider motifs or collection poems. Bullet 10 (9:15–10:00): Closing synthesis cue contrasting how the two literary forms complicate the Global Issue differently. Crucially, every bullet stays crisp (around 15–25 words of shorthand prompts, never full scripted prose sentences), enforcing 50/50 Criterion C balance while freeing the speaker to maintain fluent, responsive Criterion D voice and eye contact.",
          markScheme: [
            {
              point: "Bullet 1 sets the 0:00–0:45 Global Issue & dual-work framing.",
              keywords: ["bullet 1", "0:00", "framing"],
            },
            {
              point: "Bullets 2–4 cover Work 1 extract craft cues with line references (~2:30).",
              keywords: ["bullets 2–4", "line numbers", "authorial feature", "3:15"],
            },
            {
              point: "Bullet 5 explicitly locks in Work 1 whole-work zoom-out (~1:45).",
              keywords: ["bullet 5", "whole-work", "structural moments", "5:00"],
            },
            {
              point: "Bullets 6–9 mirror Work 1 symmetrically across Work 2 extract (with translation sensitivity) + whole work.",
              keywords: ["bullets 6–8", "bullet 9", "symmetrical", "translation"],
            },
            {
              point: "Bullet 10 reserves 9:15–10:00 for conceptual synthesis contrasting both forms.",
              keywords: ["bullet 10", "synthesis", "9:15", "differently"],
            },
            {
              point: "Specifies concise shorthand cues (no scripted paragraphs) to protect Criterion D fluency.",
              keywords: ["shorthand", "scripted", "fluency", "criterion d"],
            },
          ],
          markbands: [
            {
              band: "Band 3 (5–6 marks)",
              marks: [5, 6],
              descriptor: "Provides a symmetrical 10-bullet blueprint with exact timings, double balance (extract + whole work), and clear rationale linking shorthand cues to Criteria C & D.",
              indicators: ["All 10 bullets mapped cleanly", "Timings sum to 10:00", "Explicit Criterion C & D justification"],
            },
            {
              band: "Band 2 (3–4 marks)",
              marks: [3, 4],
              descriptor: "Outlines 10 bullets with reasonable balance, though timings or Criterion D shorthand rules are partly missing.",
              indicators: ["Covers both works", "Missing some timing or exclusion detail"],
            },
            {
              band: "Band 1 (1–2 marks)",
              marks: [1, 2],
              descriptor: "General advice on making notes without a structured 10-bullet balance plan.",
              indicators: ["Unstructured bullet advice"],
            },
          ],
          hints: [
            "Use the symmetrical 1 + 3 + 1 + 3 + 1 + 1 = 10 formula with exact timestamps summing to 10:00.",
            "Remember to explain *what must be excluded* (scripted paragraphs) to protect Criterion D spoken fluency.",
          ],
        },
        {
          id: "6-concepts-global-issues-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Explain",
          guideRef: "pairing-english-translated-works",
          question:
            "Explain how a candidate can turn the **5-minute teacher Q&A** after their 10-minute presentation into a strategic mark-booster for Criteria A and B, detailing TWO specific moves to practise beforehand.",
          modelAnswer:
            "Examiners mark the entire 15-minute recording holistically, so perceptive insights delivered during the 5-minute Q&A directly elevate Criteria A and B whenever the prepared talk ran thin on a detail. Teachers ask open probing questions specifically to help candidates unlock missed depth — such as how a work's ending complicates the extract, or how a translated idiom alters tone. Move 1: prepare a small mental 'reserve bank' of 2–3 unused whole-work moments and micro-quotations from each text so you can supply fresh textual evidence instead of repeating your prepared talk. Move 2: practise welcoming counter-readings with nuanced academic stems (e.g. 'That tension actually deepens in the final act where...'), linking every response back to authorial craft and the Global Issue.",
          markScheme: [
            {
              point: "Explains holistic 15-minute assessment: Q&A insights actively lift Criteria A & B marks.",
              keywords: ["holistically", "15-minute", "elevate", "criteria a and b"],
            },
            {
              point: "Clarifies teacher Q&A intent: probing prompts open doors to missed depth rather than setting traps.",
              keywords: ["probing", "missed depth", "ending", "idiom"],
            },
            {
              point: "Move 1: prepare an unused reserve bank of whole-work moments/micro-quotations to avoid repetition.",
              keywords: ["reserve bank", "unused", "fresh", "repeating"],
            },
            {
              point: "Move 2: engage counter-readings constructively and anchor every answer in authorial craft + Global Issue.",
              keywords: ["counter-readings", "nuanced", "authorial craft", "final act"],
            },
          ],
          hints: [
            "Remind yourself how the 5 minutes are assessed alongside the 10-minute talk.",
            "Give two concrete rehearsal habits rather than generic advice like 'stay calm'.",
          ],
        },
        {
          id: "6-concepts-global-issues-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 6,
          commandTerm: "Apply",
          guideRef: "pairing-english-translated-works",
          question:
            "An **HL** student has studied 13 works across DP1–DP2 (9 original English, 4 translated) spanning poetry, drama, prose fiction, and literary non-fiction. Construct a risk-proof **Non-Overlap Course Map** allocating works cleanly across the **Individual Oral**, **HL Essay [HL]**, and **Paper 2 Reserve**, justifying why keeping at least 3–4 varied works in the Paper 2 pool protects against unpredictable exam prompts.",
          modelAnswer:
            "Bucket 1 — Individual Oral (2 works locked): allocate 1 original English work and 1 translated work that illuminate a razor-sharp transnational Global Issue through dense ≤40-line extracts (leaving 8 English + 3 translated = 11 works). Bucket 2 — HL Essay [HL] (1 distinct work locked): allocate 1 separate studied work — either English or translated — that rewards sustained 1,200–1,500 word single-text conceptual inquiry (leaving 10 untouched works). Bucket 3 — Paper 2 Reserve (select a core preparation pool of 3–4 contrasting works from the remaining 10, spanning different literary forms, eras, and thematic tensions such as power, memory, and domestic conflict). Keeping 3–4 varied non-overlapping works sharply prepared for Paper 2 ensures that whichever 1 of the 4 unseen closed-book exam prompts appears, the candidate can immediately choose an organic, high-contrast pair without shoehorning an ill-fitting text or ever risking a non-overlap breach.",
          markScheme: [
            {
              point: "Allocates exactly 2 works (1 English + 1 translated) to the Individual Oral cleanly.",
              keywords: ["bucket 1", "1 original english", "1 translated", "11 works"],
            },
            {
              point: "Allocates 1 completely separate work (English or translated) to the HL Essay [HL].",
              keywords: ["bucket 2", "separate", "1,200", "10 untouched"],
            },
            {
              point: "Confirms zero overlap across IO, HL Essay, and Paper 2 (10 eligible works remain).",
              keywords: ["non-overlap", "breach", "remaining 10"],
            },
            {
              point: "Selects a focused Paper 2 preparation pool of 3–4 contrasting works spanning diverse forms/eras/themes.",
              keywords: ["bucket 3", "3–4", "diverse", "contrasting", "literary forms"],
            },
            {
              point: "Justifies why 3–4 varied reserve works insure against unpredictable unseen Paper 2 prompts (1 of 4).",
              keywords: ["unseen", "shoehorning", "1 of the 4", "organic"],
            },
            {
              point: "Links early Learner Portfolio mapping to avoiding DP2 deadline traps.",
              keywords: ["core preparation", "high-contrast", "ill-fitting", "tensions"],
            },
          ],
          markbands: [
            {
              band: "Band 3 (5–6 marks)",
              marks: [5, 6],
              descriptor: "Accurately enforces every HL count and non-overlap constraint (13 → 2 IO + 1 HLE + 10 remaining) and persuasively justifies a 3–4 work diverse Paper 2 reserve strategy.",
              indicators: ["Exact HL numbers (13/2/1/10)", "Clear 3-bucket separation", "Strong exam-day rationale for 3–4 P2 texts"],
            },
            {
              band: "Band 2 (3–4 marks)",
              marks: [3, 4],
              descriptor: "Applies the non-overlap rule correctly but gives a thin justification for Paper 2 reserve diversity.",
              indicators: ["Correct non-overlap math", "Basic Paper 2 rationale"],
            },
            {
              band: "Band 1 (1–2 marks)",
              marks: [1, 2],
              descriptor: "Miscounts HL allocations or misunderstands non-overlap restrictions.",
              indicators: ["Incorrect counts or reuse allowed"],
            },
          ],
          hints: [
            "Track the exact math across the 3 buckets: 13 total → 2 IO → 1 HL Essay → 10 untouched works.",
            "Explain why preparing ONLY 2 texts for Paper 2 is risky when all 4 exam prompts are unseen!",
          ],
        },
        {
          id: "6-concepts-global-issues-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Analyse",
          guideRef: "pairing-english-translated-works",
          question:
            "Analyse how treating a **translated work** thoughtfully — rather than as transparent original English — strengthens Criteria A and B in the Individual Oral, using an illustrative example (stamped `[Example text — not a set text]`) or transferable craft strategy.",
          modelAnswer:
            "Treating a work in translation as an interpretive bridge rather than transparent English immediately lifts Criterion A (cultural understanding) and Criterion B (precision on language choices). For instance, in Franz Kafka's *The Metamorphosis* `[Example text — not a set text]`, the German noun *Ungeziefer* carries connotations of an unclean sacrificial creature rather than merely a biological 'beetle'; noting how a translator's choice of 'monstrous vermin' intensifies moral disgust sharpens analysis of dehumanisation. More broadly, candidates should attend to retained untranslated idioms, formal versus familiar pronouns, honorifics, and cultural rhythms — while keeping major focus on structural, metaphorical, and dramatic craft that survives cleanly across editions.",
          markScheme: [
            {
              point: "Explains translation as an interpretive act rather than transparent English.",
              keywords: ["interpretive", "transparent", "bridge"],
            },
            {
              point: "Provides a concrete linguistic/translator nuance (e.g. Kafka's *Ungeziefer* / 'monstrous vermin' or honorifics/pronouns).",
              keywords: ["ungeziefer", "vermin", "dehumanisation", "connotations"],
            },
            {
              point: "Names transferable translation-aware features (untranslated idioms, register, formal/familiar pronouns).",
              keywords: ["untranslated", "idioms", "pronouns", "honorifics"],
            },
            {
              point: "Balances linguistic awareness with macro structural/metaphorical craft so Criterion B stays grounded.",
              keywords: ["structural", "metaphorical", "editions", "criterion b"],
            },
          ],
          hints: [
            "Remember the `[Example text — not a set text]` policy if naming a published work like Kafka's *The Metamorphosis*.",
            "Balance lexical/register awareness (idioms, honorifics) with broader structural craft.",
          ],
        },
        {
          id: "6-concepts-global-issues-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          marks: 6,
          commandTerm: "Evaluate",
          guideRef: "pairing-english-translated-works",
          question:
            "Evaluate the four Individual Oral rubric criteria (**Criterion A, Criterion B, Criterion C, Criterion D — 10 marks each**) by identifying the exact Band-3 (5–6) ceiling trap and the Band-5 (9–10) breakthrough move for EACH criterion.",
          modelAnswer:
            "Criterion A (Knowledge, Understanding & Interpretation): Band 3 stalls in accurate literal understanding or uneven extract/whole-work summary; Band 5 breaks through by drawing perceptive, persuasive conclusions about subtle implications across BOTH extracts and whole works in relation to a razor-sharp Global Issue. Criterion B (Analysis & Evaluation): Band 3 identifies literary devices accurately yet describes them unevenly or forgets choices in the wider work; Band 5 consistently evaluates *how* form-specific authorial choices construct and complicate the Global Issue across micro and macro scales. Criterion C (Focus & Organisation): Band 3 shows general structure marred by noticeable Work 1/Work 2 time imbalance or abrupt jumps; Band 5 achieves tight ~50/50 parity, purposeful transitions, and cohesive conceptual progression ending cleanly around 9:45–10:00. Criterion D (Language): Band 3 stays clear yet relies on repetitive phrasing, informal speech, or stiff memorised recitation; Band 5 combines precise literary terminology with natural, varied, persuasive academic delivery.",
          markScheme: [
            {
              point: "Criterion A: contrasts literal/summary Band 3 against perceptive implications across extract + whole work (Band 5).",
              keywords: ["literal", "implications", "perceptive", "persuasive"],
            },
            {
              point: "Criterion B: contrasts descriptive device-spotting Band 3 against consistent evaluation of form-specific choices across micro & macro (Band 5).",
              keywords: ["devices", "evaluates", "form-specific", "complicate"],
            },
            {
              point: "Criterion C: contrasts time imbalance/abrupt transitions (Band 3) against ~50/50 parity and cohesive progression (Band 5).",
              keywords: ["imbalance", "parity", "transitions", "progression"],
            },
            {
              point: "Criterion D: contrasts repetitive/informal/scripted recitation (Band 3) against precise terminology and fluent persuasive register (Band 5).",
              keywords: ["recitation", "terminology", "varied", "delivery"],
            },
            {
              point: "Demonstrates how Criteria A–D interact holistically inside the 40-mark IO.",
              keywords: ["micro and macro", "9:45", "cohesive", "razor-sharp"],
            },
            {
              point: "Uses accurate IB English A: Literature rubric language throughout.",
              keywords: ["criterion a", "criterion b", "criterion c", "criterion d"],
            },
          ],
          markbands: [
            {
              band: "Band 3 (5–6 marks)",
              marks: [5, 6],
              descriptor: "Pinpoints sharp, rubric-accurate Band-3 traps AND Band-5 breakthroughs for all four Individual Oral criteria cleanly.",
              indicators: ["All 4 criteria explicitly contrasted", "Accurate IB rubric separators", "Actionable oral craft detail"],
            },
            {
              band: "Band 2 (3–4 marks)",
              marks: [3, 4],
              descriptor: "Contrasts most criteria sensibly, though one or two separators stay somewhat general.",
              indicators: ["Covers 3–4 criteria", "Partly generic advice"],
            },
            {
              band: "Band 1 (1–2 marks)",
              marks: [1, 2],
              descriptor: "Lists criteria loosely without identifying exact Band-3 vs Band-5 differentiators.",
              indicators: ["Missing criteria or vague commentary"],
            },
          ],
          hints: [
            "Structure cleanly in four crisp blocks: Crit A, Crit B, Crit C, Crit D.",
            "For EVERY criterion, state BOTH what traps a student in 5–6 AND what pushes them to 9–10.",
          ],
        },
        {
          id: "6-concepts-global-issues-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          marks: 8,
          commandTerm: "Examine",
          guideRef: "pairing-english-translated-works",
          question:
            "Examine how pairing **two contrasting literary forms** (for example, an original English lyric poetry collection + a translated domestic drama) strengthens an Individual Oral on the shared Global Issue *how unspoken social shame polices emotional honesty inside families*. Show concretely how form-specific Criterion B choices, extract/whole-work scaling, and closing synthesis work together.",
          modelAnswer:
            "Pairing contrasting literary forms immediately prevents repetitive analysis and turns Criterion B into an evaluative showcase because each medium constructs silence and shame through radically different tools. For Work 1 (original English poetry collection), the speaker selects a dense ≤40-line lyric turning on fractured caesurae, enjambment that stalls across stanza breaks, and clinical domestic metaphors — revealing shame as compressed interior psychology. Zooming out across 2–3 other studied poems in the collection traces how recurring acoustic restraint (muted sibilance or half-rhyme) gradually shifts toward guarded defiance. For Work 2 (translated domestic drama), the speaker selects a ≤40-line dinner confrontation rich in theatrical craft: cramped proxemics, stage directions dictating averted glances, clipped interruptions, and dramatic irony — exposing shame not as private lyric hesitation, but as a public performance policed in shared physical space. Zooming out across the play's structural arc links this quiet dinner to an earlier facade of hospitality and a climactic spatial rupture, while attending thoughtfully to culturally resonant honorifics in translation. Finally, a tight 45-second closing synthesis crystallises the conceptual dialogue: whereas lyric poetry turns unspoken shame inward through rhythmic fracture, staged drama projects it outward across bodies, doorways, and overheard silence — giving Criteria A, B, and C unmistakable Band-5 depth.",
          markScheme: [
            {
              point: "Articulates why pairing contrasting forms prevents repetition and deepens Criterion B evaluation.",
              keywords: ["contrasting", "repetitive", "radically different", "showcase"],
            },
            {
              point: "Analyses form-specific poetic extract choices (caesurae, enjambment, stanza breaks, metaphor) tied to interior shame.",
              keywords: ["caesurae", "enjambment", "stanza breaks", "interior"],
            },
            {
              point: "Handles poetry whole-work zoom-out cleanly via 2–3 other studied poems & acoustic evolution.",
              keywords: ["2–3", "collection", "sibilance", "half-rhyme"],
            },
            {
              point: "Analyses form-specific dramatic extract choices (proxemics, stage directions, interruptions, irony) tied to public/physical shame.",
              keywords: ["proxemics", "stage directions", "interruptions", "physical space"],
            },
            {
              point: "Handles drama whole-work zoom-out across structural arcs (opening facade → climactic rupture).",
              keywords: ["structural arc", "hospitality", "rupture", "climactic"],
            },
            {
              point: "Integrates translated-work cultural/linguistic sensitivity (honorifics/register).",
              keywords: ["honorifics", "translation", "culturally resonant"],
            },
            {
              point: "Crafts a crisp closing synthesis highlighting contrasting formal angles (inward lyric vs outward stage).",
              keywords: ["inward", "outward", "45-second", "crystallises"],
            },
            {
              point: "Connects cross-form architecture explicitly to Band-5 performance across Criteria A, B, and C.",
              keywords: ["criteria a, b, and c", "band-5", "dialogue", "policed"],
            },
          ],
          markbands: [
            {
              band: "Band 4 (7–8 marks)",
              marks: [7, 8],
              descriptor: "Masterfully demonstrates how contrasting forms unlock distinct micro/macro craft, translation sensitivity, and high-level conceptual synthesis across Criteria A–C.",
              indicators: ["Medium-specific poetry + drama toolkits", "Clean micro→macro scaling for both", "Sharp inward vs outward synthesis"],
            },
            {
              band: "Band 3 (5–6 marks)",
              marks: [5, 6],
              descriptor: "Clearly compares poetry and drama craft choices and handles extract/whole-work scaling well, with minor gaps in translation or synthesis depth.",
              indicators: ["Solid form-specific devices", "Clear whole-work awareness"],
            },
            {
              band: "Band 2 (3–4 marks)",
              marks: [3, 4],
              descriptor: "Discusses both works sensibly but blurs medium-specific craft or neglects whole-work scaling.",
              indicators: ["Generic device mentions", "Limited macro scaling"],
            },
            {
              band: "Band 1 (1–2 marks)",
              marks: [1, 2],
              descriptor: "Offers broad remarks on shame without demonstrating medium-specific IO craft.",
              indicators: ["Thematic summary only"],
            },
          ],
          hints: [
            "Show the distinct toolkit of Poetry (caesura, enjambment, sound, 2–3 collection poems) vs Drama (proxemics, stage cues, blocking, act-to-act arc).",
            "Do not forget cultural/translation awareness on Work 2 and the crisp 45-second synthesis comparing how both forms illuminate shame differently.",
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
      id: "6-concepts-global-issues-ch-q01",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 8,
      commandTerm: "Evaluate",
      guideRef: "narrowing-global-issues",
      question:
        "A student brings you four draft Individual Oral Global Issues for pairing an original English modernist novel with a translated twentieth-century tragedy:\n- **Draft A:** \"Oppression and freedom\"\n- **Draft B:** \"How 1936 Spanish municipal censorship laws silenced Granada theatre directors\"\n- **Draft C:** \"How shifts in third-person focalization create psychological suspense\"\n- **Draft D:** \"How institutional conformity pressures ordinary citizens into complicit silence when neighbours are persecuted\"\nEvaluate ALL FOUR drafts against the official IB criteria, rank the single viable draft, and show how to transform the best rejected draft into a strong alternative.",
      modelAnswer:
        "Draft A ('Oppression and freedom') fails focus and everyday local specificity: two sweeping abstract nouns invite vague thematic generalities across ten minutes with no concrete filter for extracts. Draft B ('1936 Spanish municipal censorship laws in Granada') violates the mandatory **transnational** gate by locking the topic to one country, city, statute, and year — blocking organic cross-cultural pairing. Draft C ('Third-person focalization creating suspense') confuses Criterion B **literary craft** with a real-world human Global Issue, failing to examine a societal concern felt in daily life. Draft D ('How institutional conformity pressures ordinary citizens into complicit silence when neighbours are persecuted') is the ONLY viable Band-5 formulation: it carries wide-scale moral significance, crosses borders and centuries seamlessly, and lands intimately in everyday neighbourhood choices and whispered complicity. The strongest rejected candidate to rescue is Draft B, because its historical core holds vivid dramatic stakes once lifted above 1936 Granada: *How state censorship coerces artists and citizens into coded self-restraint inside everyday public and domestic speech.* That rescue restores transnational reach while preserving rich artistic tension.",
      markScheme: [
        {
          point: "Diagnoses Draft A accurately: overly broad abstract nouns lacking mechanism/everyday focus.",
          keywords: ["sweeping", "generalities", "abstract nouns", "no concrete filter"],
        },
        {
          point: "Diagnoses Draft B accurately: violates transnational reach via country/city/year lock-in.",
          keywords: ["transnational", "statute", "granada", "cross-cultural"],
        },
        {
          point: "Diagnoses Draft C accurately: confuses Criterion B literary craft with a real-world societal Global Issue.",
          keywords: ["confuses", "literary craft", "societal concern", "criterion b"],
        },
        {
          point: "Ranks Draft D as the sole viable Band-5 formulation.",
          keywords: ["only viable", "band-5", "draft d"],
        },
        {
          point: "Verifies all 3 IB gates on Draft D (wide-scale, transnational, everyday local neighbourhood impact).",
          keywords: ["wide-scale", "borders", "neighbourhood", "whispered"],
        },
        {
          point: "Selects a sensible rejected draft to rescue (e.g. Draft B) with clear justification.",
          keywords: ["rescue", "historical core", "dramatic stakes"],
        },
        {
          point: "Rewrites the rescued draft cleanly to satisfy all three IB Global Issue gates.",
          keywords: ["self-restraint", "coded", "domestic speech", "coerces"],
        },
        {
          point: "Maintains sharp, evaluative IB Literature register throughout.",
          keywords: ["restores", "organic", "preserving", "artistic tension"],
        },
      ],
      markbands: [
        {
          band: "Band 4 (7–8 marks)",
          marks: [7, 8],
          descriptor: "Clinically evaluates all four drafts against exact IB Global Issue properties, validates Draft D across all three gates, and produces a polished rescue rewrite.",
          indicators: ["All 4 diagnoses precise", "Draft D verified on W-T-L", "Strong active-verb rescue rewrite"],
        },
        {
          band: "Band 3 (5–6 marks)",
          marks: [5, 6],
          descriptor: "Accurately identifies Draft D and diagnoses most flaws, though the rescue rewrite or one gate check lacks crispness.",
          indicators: ["Correct ranking", "3–4 accurate diagnoses"],
        },
        {
          band: "Band 2 (3–4 marks)",
          marks: [3, 4],
          descriptor: "Identifies Draft D as strongest but gives surface-level explanations of why the other drafts fail.",
          indicators: ["Weak distinction between craft and Global Issue"],
        },
        {
          band: "Band 1 (1–2 marks)",
          marks: [1, 2],
          descriptor: "Misranks the drafts or omits IB Global Issue criteria.",
          indicators: ["Incorrect ranking"],
        },
      ],
      hints: [
        "Each of the three rejected drafts illustrates a classic IB trap: too broad, not transnational, and craft-mistaken-for-Global-Issue.",
        "Verify Draft D explicitly against all 3 gates, then rescue Draft B by removing the 1936/Spanish/Granada lock-in.",
      ],
    },
    {
      id: "6-concepts-global-issues-ch-q02",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 8,
      commandTerm: "Compare and contrast",
      guideRef: "seven-central-concepts",
      question:
        "Compare and contrast how **Communication**, **Perspective**, and **Representation** operate as analytical lenses on the exact same literary moment: a courtroom testimony scene in a drama where an impoverished witness is repeatedly interrupted and mistranslated by a court official.",
      modelAnswer:
        "All three concepts illuminate how literary form exposes unequal power inside the courtroom, yet each targets a distinct analytical mechanism. **Communication** focuses on the transactional breakdown of speech itself: how overlapping interruptions, deliberate mistranslations, clipped legal jargon, and enforced pauses obstruct truth and turn courtroom dialogue into an asymmetric weapon. **Perspective** zeroes in on the vantage point filtering audience judgement: how dramatic irony lets spectators recognise the witness's genuine meaning even as the presiding judge hears only the distorted official record, creating an acute split between institutional blindness and audience awareness. **Representation** steps back to interrogate how the play's language and staging construct class identity itself: by denying the witness uninterrupted syntax while cloaking the official in elevated diction and podium staging, the dramatist critiques how legal institutions manufacture caricatures of marginalised citizens as 'incoherent'. Whereas Communication traces the *mechanics of exchange*, Perspective tracks the *angle of perception*, and Representation evaluates the *constructed social image* — allowing a writer to choose whichever single lens best drives a focused thesis.",
      markScheme: [
        {
          point: "Identifies shared conceptual ground: all three interrogate unequal power through dramatic form.",
          keywords: ["unequal power", "distinct analytical mechanism", "dramatic form"],
        },
        {
          point: "Applies Communication sharply to speech breakdown (interruptions, mistranslation, jargon, pauses).",
          keywords: ["transactional", "mistranslations", "jargon", "asymmetric"],
        },
        {
          point: "Applies Perspective sharply to vantage point, dramatic irony, and institutional vs audience awareness.",
          keywords: ["vantage point", "dramatic irony", "blindness", "spectators"],
        },
        {
          point: "Applies Representation sharply to constructed social image/caricature via diction, syntax, and staging.",
          keywords: ["caricatures", "podium", "manufacture", "incoherent"],
        },
        {
          point: "Explicitly contrasts the three mechanisms (exchange vs perception vs constructed image).",
          keywords: ["mechanics of exchange", "angle of perception", "constructed social image"],
        },
        {
          point: "Embeds specific dramatic form features (staging, syntax, dialogue, irony) rather than plot summary.",
          keywords: ["uninterrupted syntax", "elevated diction", "enforced pauses"],
        },
        {
          point: "Notes the practical essay takeaway: picking ONE primary lens keeps focus razor-sharp.",
          keywords: ["single lens", "focused thesis", "drives"],
        },
        {
          point: "Demonstrates sustained comparative precision throughout.",
          keywords: ["whereas", "steps back", "zeroes in", "distorted"],
        },
      ],
      markbands: [
        {
          band: "Band 4 (7–8 marks)",
          marks: [7, 8],
          descriptor: "Separates all three near-neighbour concepts with surgical precision, tying each to specific dramatic craft and a clear comparative synthesis.",
          indicators: ["Exchange vs perception vs constructed image", "Rich dramatic form detail", "Clear thesis-selection takeaway"],
        },
        {
          band: "Band 3 (5–6 marks)",
          marks: [5, 6],
          descriptor: "Distinguishes all three concepts accurately with relevant courtroom craft examples, though comparative synthesis is briefer.",
          indicators: ["Accurate definitions applied to scene", "Good craft focus"],
        },
        {
          band: "Band 2 (3–4 marks)",
          marks: [3, 4],
          descriptor: "Blurs Perspective and Representation slightly or leans toward plot description of the trial.",
          indicators: ["Partial overlap between concepts"],
        },
        {
          band: "Band 1 (1–2 marks)",
          marks: [1, 2],
          descriptor: "Lists general definitions without applying them to dramatic form.",
          indicators: ["Textbook definitions only"],
        },
      ],
      hints: [
        "Use the crisp three-way separator: Communication = exchange/breakdown; Perspective = vantage point/irony; Representation = constructed social image.",
        "Anchor every single lens in specific dramatic craft (interruptions, dramatic irony, podium staging, syntax).",
      ],
    },
    {
      id: "6-concepts-global-issues-ch-q03",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 8,
      commandTerm: "Evaluate",
      guideRef: "pairing-english-translated-works",
      question:
        "An IB moderator reviews a recorded Individual Oral that scored 25/40 (A:6, B:6, C:6, D:7) and writes:\n*\"The candidate clearly knows both texts well and speaks fluently, yet Work 1 took 6 minutes 20 seconds while Work 2 received 2 minutes 40 seconds; both extracts were 44 lines of plot-heavy dialogue; and the Global Issue ('Family conflict') stayed generic throughout.\"*\nProduce a **4-point Examiner Action Plan** showing exact, concrete interventions that would elevate this candidate from 25/40 into the 36–39/40 Band-5 zone across Criteria A, B, C, and D.",
      modelAnswer:
        "Intervention 1 — Narrow the Global Issue (lifts Criteria A & C): replace generic 'Family conflict' with a razor-sharp, transnational mechanism felt locally, such as *how unspoken generational sacrifice breeds guilt and emotional distance inside ordinary households*, immediately eliminating thematic drift. Intervention 2 — Swap & Trim Extracts to ≤40 Lines of Stylistic Density (lifts Criterion B & compliance): cut both 44-line passages down to clean, unmarked ≤40-line turning points packed with imagery, subtext, rhythm, or staging rather than plot-heavy dialogue, unlocking evaluative craft analysis over paraphrase. Intervention 3 — Enforce Double Balance via a Symmetrical 10-Bullet Outline (lifts Criterion C from 6 to 9–10): restructure to 0:45 intro + 4:15 Work 1 (2:30 extract / 1:45 whole work) + 4:15 Work 2 (2:30 extract / 1:45 whole work) + 0:45 synthesis, rehearsing aloud with a hard 5:00 halfway check so Work 2 never gets starved. Intervention 4 — Sharpen Academic Terminology & Q&A Reserve Bank (lifts Criteria A, B & D to 9–10): upgrade general fluency into precise form-specific terminology (`subtext`, `focalization`, `caesura`, `proxemics`) and stockpile 2–3 unused whole-work moments per text to deploy live during the 5-minute teacher Q&A.",
      markScheme: [
        {
          point: "Intervention 1: replaces generic 'Family conflict' with a sharp W-T-L Global Issue to lift Criteria A & C.",
          keywords: ["intervention 1", "generational sacrifice", "drift", "transnational"],
        },
        {
          point: "Intervention 2: enforces the ≤40-line clean-extract limit (fixing the 44-line breach).",
          keywords: ["intervention 2", "≤40-line", "unmarked", "compliance"],
        },
        {
          point: "Intervention 2 replaces plot-heavy dialogue with stylistically dense turning points to lift Criterion B.",
          keywords: ["stylistic density", "turning points", "subtext", "paraphrase"],
        },
        {
          point: "Intervention 3: fixes the 6:20 vs 2:40 imbalance via exact ~4:15 / ~4:15 parity and 5:00 checkpoint.",
          keywords: ["intervention 3", "4:15", "halfway", "starved"],
        },
        {
          point: "Intervention 3 embeds extract-to-whole-work micro/macro balance inside a symmetrical 10-bullet outline.",
          keywords: ["double balance", "10-bullet", "whole work", "synthesis"],
        },
        {
          point: "Intervention 4: upgrades general fluency (D:7) via precise form-specific terminology.",
          keywords: ["intervention 4", "terminology", "focalization", "proxemics"],
        },
        {
          point: "Intervention 4 prepares an unused Q&A reserve bank to capture live Criterion A & B depth.",
          keywords: ["stockpile", "unused", "q&a", "live"],
        },
        {
          point: "Explicitly links every intervention to exact rubric criteria (A, B, C, D).",
          keywords: ["criteria a & c", "criterion b", "criterion c", "criteria a, b & d"],
        },
      ],
      markbands: [
        {
          band: "Band 4 (7–8 marks)",
          marks: [7, 8],
          descriptor: "Diagnoses every single moderator flaw (broad GI, 44-line breach, thin extracts, severe 6:20/2:40 imbalance, general D register) with concrete, Band-5 rubric-linked fixes.",
          indicators: ["Fixes 44-line violation explicitly", "Rewrites GI + pacing + extract quality + D/Q&A", "Maps every move to Crit A–D"],
        },
        {
          band: "Band 3 (5–6 marks)",
          marks: [5, 6],
          descriptor: "Addresses almost all moderator flaws with workable improvements, though one area (e.g. D terminology or whole-work scaling) is lighter.",
          indicators: ["Solid pacing and GI fixes", "Links mostly to criteria"],
        },
        {
          band: "Band 2 (3–4 marks)",
          marks: [3, 4],
          descriptor: "Offers sensible general study advice but misses concrete timing targets or the 40-line compliance issue.",
          indicators: ["Misses 44-line rule or double balance"],
        },
        {
          band: "Band 1 (1–2 marks)",
          marks: [1, 2],
          descriptor: "Repeats the moderator's comments without concrete remedies.",
          indicators: ["Restates problem only"],
        },
      ],
      hints: [
        "Spot ALL four buried flaws in the moderator's note: broad GI, 44-line rule violation + plot-heavy dialogue, 6:20/2:40 imbalance, and merely 'fluent' (not terminology-rich) Criterion D.",
        "Tie each concrete fix directly to the criterion (A, B, C, or D) it upgrades.",
      ],
    },
    {
      id: "6-concepts-global-issues-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      marks: 6,
      commandTerm: "Examine",
      guideRef: "seven-central-concepts",
      question:
        "Examine the structural difference between how an **HL** student uses a **Central Concept** inside the **HL Essay [HL]** (1,200–1,500 words) versus how they use a **Global Issue** inside the **Individual Oral** (15 minutes), highlighting three concrete planning pitfalls to avoid when preparing both assessments in DP2.",
      modelAnswer:
        "First, scope and text architecture differ sharply: the HL Essay explores ONE Central Concept (such as Perspective or Representation) as an analytical lens across a **single studied work**, drilling deeply into formal evolution across 1,200–1,500 written words; by contrast, the Individual Oral uses ONE narrowed, real-world **Global Issue** (wide-scale, transnational, locally felt) to connect **two works** (1 original English + 1 translated) orally across balanced extract and whole-work segments. Pitfall 1 — Work Overlap: accidentally using the same favourite text in both the HL Essay and the IO (or reusing either in Paper 2) violates the strict IB non-overlap rule. Pitfall 2 — Swapping Lenses: writing an HL Essay that reads like a sociological Global Issue report lacking literary craft, OR giving an Individual Oral anchored in a pure literary technique ('how imagery evolves') instead of a lived societal Global Issue. Pitfall 3 — Format/Limit Drift: exceeding the 1,500-word HL Essay ceiling (losing Criterion C/D credit) or importing scripted essay paragraphs into the 10-bullet IO outline (destroying spoken Criterion D fluency).",
      markScheme: [
        {
          point: "Contrasts single-work conceptual focus (HL Essay, 1,200–1,500w) against dual-work (English + translated) real-world Global Issue focus (IO).",
          keywords: ["single studied work", "1,200–1,500", "two works", "real-world"],
        },
        {
          point: "Distinguishes an inward literary/formal lens (Concept) from a societal W-T-L tension (Global Issue).",
          keywords: ["analytical lens", "transnational", "locally felt", "formal evolution"],
        },
        {
          point: "Pitfall 1: strictly enforces the IB non-overlap work rule across HL Essay, IO, and Paper 2.",
          keywords: ["pitfall 1", "non-overlap", "violates", "paper 2"],
        },
        {
          point: "Pitfall 2: warns against sociological HL Essays OR technique-only IOs lacking a real Global Issue.",
          keywords: ["pitfall 2", "sociological", "pure literary technique", "lived societal"],
        },
        {
          point: "Pitfall 3: enforces exact formal ceilings (1,500-word HL Essay cap vs concise 10-bullet spoken IO outline).",
          keywords: ["pitfall 3", "1,500-word", "10-bullet", "scripted"],
        },
        {
          point: "Links format discipline directly to Criterion C & D consequences.",
          keywords: ["criterion c/d", "spoken", "fluency", "credit"],
        },
      ],
      markbands: [
        {
          band: "Band 3 (5–6 marks)",
          marks: [5, 6],
          descriptor: "Articulates the conceptual vs Global Issue structural distinction with precision and identifies three high-stakes HL planning pitfalls clearly.",
          indicators: ["Clean Concept vs GI distinction", "All 3 distinct pitfalls addressed", "Accurate HL Essay + IO specs"],
        },
        {
          band: "Band 2 (3–4 marks)",
          marks: [3, 4],
          descriptor: "Explains the basic difference between HL Essay and IO and names 2 valid pitfalls.",
          indicators: ["Covers text count + non-overlap", "Lighter on lens-swap pitfall"],
        },
        {
          band: "Band 1 (1–2 marks)",
          marks: [1, 2],
          descriptor: "Gives surface-level descriptions of the two assessments without contrasting lenses or pitfalls.",
          indicators: ["Descriptive summary only"],
        },
      ],
      hints: [
        "Contrast text count (1 vs 2), mode (written 1,200–1,500w vs oral 15m), and lens type (literary Concept vs societal Global Issue).",
        "Cover three concrete HL traps: work overlap, lens swapping, and word/outline format drift.",
      ],
    },
    {
      id: "6-concepts-global-issues-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "pairing-english-translated-works",
      question:
        "An HL student scores 34/40 on their Individual Oral (worth 20% of the final HL grade). How many weighted percentage points out of 100 does this IO contribute toward their overall HL score? (Give an exact whole number.)",
      answer: { type: "number", value: 17, display: "17%" },
      traps: [
        {
          spec: { type: "number", value: 85 },
          feedback: "85% is the raw percentage on the IO alone — multiply by the HL weighting (20%): 0.85 × 20 = 17 percentage points.",
        },
        {
          spec: { type: "number", value: 25.5 },
          feedback: "25.5 points uses the SL weighting (30%). At HL, the IO weighting is 20%: (34 / 40) × 20 = 17.",
        },
      ],
      solution: [
        "Raw IO percentage = {{34 / 40}} = 0.85 (85%).",
        "HL weighting = 20% of the final grade.",
        "Weighted contribution = 0.85 × 20 = **17%** (17 weighted percentage points out of 100).",
      ],
      hints: [
        "First find the fraction or percentage earned on the Individual Oral: 34 ÷ 40.",
        "Multiply that fraction by the HL Individual Oral weighting (20%).",
      ],
    },
    {
      id: "6-concepts-global-issues-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 6,
      commandTerm: "Design",
      guideRef: "five-fields-of-inquiry",
      question:
        "Choose **Field 4 (Art, creativity and imagination)** and **Field 5 (Science, technology and the environment)**. For EACH field, design a complete Individual Oral planning triad containing: (a) a sharpened transnational Global Issue passing all 3 IB gates, (b) ONE primary Central Concept lens, and (c) TWO specific literary craft features you would hunt for inside your ≤40-line extracts.",
      modelAnswer:
        "Field 4 Triad (Art, creativity & imagination): (a) Global Issue — *How marginalised artists deploy subversive storytelling to preserve suppressed collective memory under conditions of exile.* (b) Primary Central Concept — **Creativity** (interrogating aesthetic invention as quiet resistance). (c) Target Extract Craft — self-reflexive metafictional framing and sensory soundscapes/refrains that enact oral memory enduring beyond physical borders. Field 5 Triad (Science, technology & the environment): (a) Global Issue — *How relentless urban industrialisation estranges ordinary workers from sensory attachment to the natural environment.* (b) Primary Central Concept — **Representation** (evaluating how language mediates ecological loss). (c) Target Extract Craft — juxtaposed semantic fields (sterile mechanical imagery colliding against organic pastoral motifs) and claustrophobic spatial syntax mimicking industrial confinement.",
      markScheme: [
        {
          point: "Field 4 Global Issue is sharp, transnational, wide-scale, and locally felt.",
          keywords: ["subversive storytelling", "suppressed", "exile", "marginalised artists"],
        },
        {
          point: "Field 4 anchors cleanly in ONE named Central Concept with brief analytical rationale.",
          keywords: ["creativity", "resistance", "invention"],
        },
        {
          point: "Field 4 targets two specific extract-level literary craft features.",
          keywords: ["metafictional", "refrains", "soundscapes", "oral memory"],
        },
        {
          point: "Field 5 Global Issue is sharp, transnational, wide-scale, and locally felt.",
          keywords: ["urban industrialisation", "estranges", "sensory attachment", "natural environment"],
        },
        {
          point: "Field 5 anchors cleanly in ONE named Central Concept with brief analytical rationale.",
          keywords: ["representation", "mediates", "ecological loss"],
        },
        {
          point: "Field 5 targets two specific extract-level literary craft features.",
          keywords: ["semantic fields", "pastoral", "mechanical imagery", "spatial syntax"],
        },
      ],
      markbands: [
        {
          band: "Band 3 (5–6 marks)",
          marks: [5, 6],
          descriptor: "Delivers two complete, cohesive planning triads passing all 3 Global Issue gates with precision Central Concepts and form-specific Criterion B craft targets.",
          indicators: ["Both fields cleanly executed", "Zero vague or region-locked issues", "Concrete extract craft targets"],
        },
        {
          band: "Band 2 (3–4 marks)",
          marks: [3, 4],
          descriptor: "Delivers solid triads for both fields, though one Global Issue is slightly broad or craft features stay general.",
          indicators: ["Both fields addressed", "Partly general craft terms"],
        },
        {
          band: "Band 1 (1–2 marks)",
          marks: [1, 2],
          descriptor: "Incomplete triads or vague thematic issues lacking extract-level craft.",
          indicators: ["Missing elements"],
        },
      ],
      hints: [
        "Make sure BOTH Global Issues pass Wide-scale, Transnational, AND Everyday Local impact.",
        "Name concrete, analytical craft features (e.g. semantic fields, metafiction, refrains, spatial syntax) rather than generic words like 'diction' or 'tone'.",
      ],
    },
    {
      id: "6-concepts-global-issues-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 6,
      commandTerm: "Justify",
      guideRef: "pairing-english-translated-works",
      question:
        "Two students share the exact Global Issue *how rigid institutional authority crushes individual moral conscience in everyday spaces*. Student A chooses two works that share an identical tragic moral verdict; Student B pairs an English dystopian prose work ending in quiet conformity with a translated classical drama (comparable to Sophocles' *Antigone* `[Example text — not a set text]`) where defiant martyrdom shatters the ruler's house. Justify why Student B's **divergent pairing** typically scores higher on Criteria A and B, while noting one Criterion C pitfall Student B must guard against.",
      modelAnswer:
        "Student B's divergent pairing unlocks richer Criterion A interpretation because contrasting outcomes — quiet conformity versus defiant martyrdom — allow the speaker to probe *ambiguity* and competing human responses rather than repeating the exact same thesis twice. On Criterion B, divergent tones and literary forms (claustrophobic prose focalization versus public tragic dialogue and choral judgement) highlight *why* each writer's medium constructs a radically different ethical effect on the reader or audience. Even the 45-second closing synthesis gains genuine intellectual punch by articulating how one work warns of quiet erasure while the other questions the tragic cost of absolute defiance. However, Student B must guard against one Criterion C pitfall: drifting into two unrelated arguments (treating Work 1 as 'conformity' and Work 2 as 'rebellion' without anchoring both consistently back to the single shared Global Issue). Keeping the exact same Global Issue sentence active in every transition ensures divergent angles deepen unity rather than fracturing focus.",
      markScheme: [
        {
          point: "Criterion A advantage: divergent verdicts open nuanced ambiguity and prevent repeating one flat conclusion twice.",
          keywords: ["ambiguity", "competing", "repeating", "criterion a"],
        },
        {
          point: "Criterion B advantage: contrasting forms/tones showcase how distinct authorial choices create divergent ethical effects.",
          keywords: ["focalization", "choral", "ethical effect", "criterion b"],
        },
        {
          point: "Synthesis payoff: closing 45 seconds crystallises a genuine conceptual dialogue between erasure and defiance.",
          keywords: ["45-second", "erasure", "cost of", "intellectual punch"],
        },
        {
          point: "Identifies the exact Criterion C pitfall: drifting into two disconnected sub-topics instead of one unified Global Issue.",
          keywords: ["criterion c", "disconnected", "unrelated arguments", "fracturing"],
        },
        {
          point: "Provides the structural safeguard: anchor transitions consistently back to the exact shared Global Issue.",
          keywords: ["transitions", "shared global issue", "unity", "anchoring"],
        },
        {
          point: "Demonstrates mature evaluative judgement across all three criteria (A, B, C).",
          keywords: ["divergent", "martyrdom", "conformity", "radically different"],
        },
      ],
      markbands: [
        {
          band: "Band 3 (5–6 marks)",
          marks: [5, 6],
          descriptor: "Persuasively justifies Criterion A & B gains from divergent pairing, connects to synthesis, and pinpoints the exact Criterion C drift pitfall plus its safeguard.",
          indicators: ["Sharp Crit A + B advantages", "Clear Crit C drift risk + fix"],
        },
        {
          band: "Band 2 (3–4 marks)",
          marks: [3, 4],
          descriptor: "Explains why contrast is interesting but gives thin rubric linkage or omits the Criterion C safeguard.",
          indicators: ["General contrast benefits", "Weak Crit C warning"],
        },
        {
          band: "Band 1 (1–2 marks)",
          marks: [1, 2],
          descriptor: "Asserts Student B is better without analysing criteria or risks.",
          indicators: ["Assertion only"],
        },
      ],
      hints: [
        "Explain what Student B gains on Criterion A (ambiguity), Criterion B (medium/tonal contrast), and synthesis.",
        "Then diagnose the exact Criterion C danger when two works pull in opposite directions — and how transitions prevent it.",
      ],
    },
    {
      id: "6-concepts-global-issues-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 10,
      commandTerm: "Discuss",
      guideRef: "pairing-english-translated-works",
      question:
        "Using your **Learner Portfolio** across DP1 and DP2, discuss how an IB English A: Literature candidate can systematically connect the **7 Central Concepts**, the **5 Fields of Inquiry**, and the **3 Global Issue Properties** from their very first studied text to build a Band-5 Individual Oral (and, at HL, a non-overlapping HL Essay) without last-minute panic.",
      modelAnswer:
        "A high-impact Learner Portfolio transforms the Individual Oral and HL Essay from stressful DP2 sprints into an organic two-year synthesis. From the very first studied text in DP1, the candidate builds a structured conceptual matrix: after every major chapter, scene, or lyric cluster, they log stylistically dense passages (already checked to sit cleanly at ≤40 lines) alongside two metadata tags — one primary **Central Concept** formulated as an active *how* question (e.g. *how fractured dialogue complicates Communication*), and 1–2 numbered **Fields of Inquiry** (`F1`–`F5`) capturing the text's core societal tensions. Crucially, they maintain an explicit **English vs Translated** column so cross-linguistic pairings emerge naturally across Areas of Exploration 1, 2, and 3 rather than being forced in DP2 Term 2. By the end of DP1, the candidate audits intersections where an original English work and a translated work share a Field tag — then runs those candidate tensions through the **4-Stage Narrowing Funnel** and the **3 Mandatory Global Issue Gates** (wide-scale significance, transnational reach verified by the Two-Continent Swap Test, and everyday local impact verified by the Kitchen-Table Test). Simultaneously, they lock in a strict **Non-Overlap Course Map**: reserving 2 works (1 English + 1 translated) for the IO, 1 separate conceptually rich work for the **HL Essay [HL]** (anchored cleanly to a single Central Concept for 1,200–1,500w formal inquiry), and at least 3–4 diverse untouched works for closed-book **Paper 2**. Finally, during DP2 Term 1–2, their pre-harvested ≤40-line passages and macro structural notes condense effortlessly into a symmetrical 10-bullet outline (1 + 3 + 1 + 3 + 1 + 1), leaving ample rehearsal time to perfect 4:15 / 4:15 double balance, precise Criterion D terminology, and a fresh reserve bank for the 5-minute teacher Q&A.",
      markScheme: [
        {
          point: "Frames the Learner Portfolio as a proactive two-year conceptual synthesis rather than DP2 cramming.",
          keywords: ["two-year", "conceptual matrix", "proactive", "organic"],
        },
        {
          point: "Logs stylistically dense ≤40-line candidate extracts progressively across DP1.",
          keywords: ["≤40 lines", "stylistically dense", "log", "pre-harvested"],
        },
        {
          point: "Tags texts with active Central Concept *how* questions rather than passive buzzwords.",
          keywords: ["active", "how question", "central concept", "metadata"],
        },
        {
          point: "Tags texts with numbered Fields of Inquiry (F1–F5) to surface organic cross-text bridges.",
          keywords: ["fields of inquiry", "f1", "intersections", "societal tensions"],
        },
        {
          point: "Tracks original English vs translated works explicitly so mandatory IO pairings emerge early.",
          keywords: ["english vs translated", "cross-linguistic", "column"],
        },
        {
          point: "Stress-tests candidate tensions through the Narrowing Funnel and all 3 Global Issue Gates (W-T-L).",
          keywords: ["narrowing funnel", "two-continent", "kitchen-table", "wide-scale"],
        },
        {
          point: "Enforces the strict Non-Overlap Course Map across IO (2), HL Essay [HL] (1), and Paper 2 reserve (3–4).",
          keywords: ["non-overlap", "hl essay", "paper 2", "untouched"],
        },
        {
          point: "Distinguishes HL Essay single-work Concept focus (1,200–1,500w) cleanly from IO Global Issue focus.",
          keywords: ["1,200–1,500", "single central concept", "formal inquiry"],
        },
        {
          point: "Condenses portfolio notes into a symmetrical 10-bullet outline supporting ~4:15 / ~4:15 double balance.",
          keywords: ["10-bullet", "4:15", "double balance", "symmetrical"],
        },
        {
          point: "Includes rehearsal discipline for Criterion D terminology and a 5-minute Q&A reserve bank.",
          keywords: ["rehearsal", "criterion d", "reserve bank", "5-minute"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (9–10 marks)",
          marks: [9, 10],
          descriptor: "Integrates the Learner Portfolio, 7 Concepts, 5 Fields, 3 GI Gates, Non-Overlap Map (SL/HL), ≤40-line harvesting, 10-bullet balance, and Q&A into a seamless, executable DP1–DP2 roadmap.",
          indicators: ["All syllabus frameworks interconnected", "Exact IB limits & non-overlap rules", "Actionable rehearsal & Q&A finish"],
        },
        {
          band: "Band 4 (7–8 marks)",
          marks: [7, 8],
          descriptor: "Builds a thorough, logical DP1–DP2 portfolio workflow connecting concepts, fields, GI gates, and IO preparation, with minor omission of HL Essay or Q&A detail.",
          indicators: ["Strong chronological workflow", "Accurate IB rules"],
        },
        {
          band: "Band 3 (5–6 marks)",
          marks: [5, 6],
          descriptor: "Explains helpful Learner Portfolio habits and mentions concepts and Global Issues, though links to non-overlap or extract/outline craft are uneven.",
          indicators: ["Good general study habits", "Partial rubric/rule integration"],
        },
        {
          band: "Band 2 (3–4 marks)",
          marks: [3, 4],
          descriptor: "Describes basic note-taking in the Learner Portfolio without systematically connecting syllabus frameworks.",
          indicators: ["Descriptive note-taking tips"],
        },
        {
          band: "Band 1 (1–2 marks)",
          marks: [1, 2],
          descriptor: "Brief or generic remarks about organising notes before exams.",
          indicators: ["Minimal syllabus awareness"],
        },
      ],
      hints: [
        "Walk chronologically from DP1 Term 1 logging → DP1 Term 3 intersection audit & Non-Overlap Map → DP2 Term 1–2 Funnel, 10-bullet outline, and timed rehearsals.",
        "Weave in EVERY piece of Topic 6: 7 Concepts, 5 Fields, 3 GI properties, English + Translated tracking, ≤40-line harvesting, HL Essay non-overlap, double balance, and 5-min Q&A.",
      ],
    },
  ],
};
