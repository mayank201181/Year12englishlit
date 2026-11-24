import type { MarkBand, TopicPractice } from "../../types.ts";

const PAPER1_20M_MARKBANDS: MarkBand[] = [
  {
    band: "Band 1 (Limited)",
    marks: [1, 4],
    descriptor:
      "Limited literal understanding with heavy paraphrase; isolated or inaccurate device identification; weak focus and frequent language errors.",
    indicators: [
      "Summarises surface plot without interpreting underlying tension",
      "Mentions literary devices loosely without explaining effect",
      "Lacks conceptual structure or clear focus on the guiding question",
    ],
  },
  {
    band: "Band 2 (Basic)",
    marks: [5, 8],
    descriptor:
      "Basic understanding of surface meaning with occasional references; largely descriptive account of textual features; chronological or loosely connected paragraphs.",
    indicators: [
      "Grasps literal narrative situation with limited grasp of nuance",
      "Lists isolated techniques with generic claims ('creates imagery')",
      "Follows chronological line-by-line order; clear but basic register",
    ],
  },
  {
    band: "Band 3 (Satisfactory)",
    marks: [9, 12],
    descriptor:
      "Sound understanding of literal meaning with relevant references; generally appropriate analysis of authorial choices; adequate organisation and clear, mostly appropriate register.",
    indicators: [
      "Addresses the guiding question with valid but somewhat predictable claims",
      "Explains several textual features without sustained evaluation",
      "Adequate paragraphing though partially chronological or repetitive",
    ],
  },
  {
    band: "Band 4 (Good)",
    marks: [13, 16],
    descriptor:
      "Thorough understanding and reasoned interpretation of implications; effective analysis and some evaluation of authorial choices; well-organised conceptual argument and clear, varied register.",
    indicators: [
      "Integrates well-chosen micro-quotations to support interpretive claims",
      "Evaluates how interlocking stylistic and structural choices construct tone",
      "Organises around conceptual movements with smooth transitions",
    ],
  },
  {
    band: "Band 5 (Perceptive / Top Band)",
    marks: [17, 20],
    descriptor:
      "Thorough, perceptive understanding and convincing interpretation of subtle implications; consistently insightful analysis and evaluation of craft; cohesive conceptual architecture; precise, effective academic register.",
    indicators: [
      "Uncovers irony, tension, and productive ambiguity anchored to the guiding question",
      "Evaluates interlocking formal, structural, and lexical choices with nuance",
      "Sustains a progressive conceptual line of argument with surgical analytical verbs",
    ],
  },
];

const PAPER2_30M_MARKBANDS: MarkBand[] = [
  {
    band: "Band 1 (Limited)",
    marks: [1, 6],
    descriptor:
      "Limited knowledge of the two works with minimal comparison; descriptive plot retelling; little attention to authorial craft; poor organisation and frequent language lapses.",
    indicators: [
      "Recalls superficial plot details with inaccuracies or severe imbalance",
      "Treats works separately with virtually no craft evaluation",
      "Lacks sustained focus on the unseen prompt",
    ],
  },
  {
    band: "Band 2 (Basic)",
    marks: [7, 12],
    descriptor:
      "Basic knowledge of the works with superficial links to the prompt; descriptive rather than analytical commentary on craft; block-by-block or uneven organisation.",
    indicators: [
      "Identifies obvious thematic parallels without probing divergence",
      "Relies heavily on plot summary rather than authorial choices",
      "Uneven balance between works (e.g. 75/25 split) and basic register",
    ],
  },
  {
    band: "Band 3 (Satisfactory)",
    marks: [13, 18],
    descriptor:
      "Satisfactory knowledge and interpretation of similarities and differences; generally appropriate analysis of textual features and adequate comparison; coherent organisation and clear language.",
    indicators: [
      "Answers the prompt clearly with valid closed-book references",
      "Compares several techniques adequately though sometimes mechanically",
      "Maintains reasonable balance and clear, mostly accurate academic prose",
    ],
  },
  {
    band: "Band 4 (Good)",
    marks: [19, 24],
    descriptor:
      "Good, well-supported understanding and thoughtful comparative interpretation; effective analysis and evaluation of how authorial choices compare across both works; balanced, well-focused structure and varied language.",
    indicators: [
      "Unpacks key prompt terms and compares both similarities and divergences",
      "Evaluates medium-specific craft across both studied works convincingly",
      "Uses integrated point-by-point movements with strong academic control",
    ],
  },
  {
    band: "Band 5 (Perceptive / Top Band)",
    marks: [25, 30],
    descriptor:
      "Perceptive knowledge and persuasive comparative interpretation of subtle implications; consistently insightful evaluation of authorial and formal choices across both works; cohesive, balanced conceptual structure; precise, effective academic register.",
    indicators: [
      "Interrogates hidden prompt assumptions and nuances convergence with divergence",
      "Evaluates contrasting form/craft signatures using embedded micro-quotations and structural pivots",
      "Sustains seamless 50/50 point-by-point dialogue and concise scholarly prose",
    ],
  },
];

const BAND_6M: MarkBand[] = [
  {
    band: "Band 1–2 (Basic)",
    marks: [1, 2],
    descriptor: "Surface summary or unanalysed device naming with loose organisation.",
  },
  {
    band: "Band 3 (Satisfactory)",
    marks: [3, 4],
    descriptor: "Clear literal grasp and valid craft identification with partial evaluation.",
  },
  {
    band: "Band 4–5 (Perceptive)",
    marks: [5, 6],
    descriptor: "Insightful conceptual synthesis evaluating interlocking authorial choices precisely.",
  },
];

const BAND_8M: MarkBand[] = [
  {
    band: "Band 1–2 (Basic)",
    marks: [1, 3],
    descriptor: "Descriptive paraphrase or chronological listing with generic reader-effect claims.",
  },
  {
    band: "Band 3 (Satisfactory)",
    marks: [4, 5],
    descriptor: "Sound understanding and relevant craft analysis with adequate comparative or conceptual structure.",
  },
  {
    band: "Band 4–5 (Perceptive)",
    marks: [6, 8],
    descriptor: "Convincing, nuanced interpretation evaluating interlocking formal choices in concise academic prose.",
  },
];

const BAND_10M: MarkBand[] = [
  {
    band: "Band 1–2 (Basic)",
    marks: [1, 3],
    descriptor: "Broad summary or uneven coverage with minimal craft evaluation.",
  },
  {
    band: "Band 3 (Satisfactory)",
    marks: [4, 6],
    descriptor: "Competent understanding and valid textual analysis with adequate conceptual coherence.",
  },
  {
    band: "Band 4–5 (Perceptive)",
    marks: [7, 10],
    descriptor: "Perceptive interrogation of ambiguity and sustained evaluation of interlocking authorial choices.",
  },
];

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ (10 Qs): 4 MCQ (balanced 0,1,2,3) + 4 Short + 2 Written
  // ===========================================================================
  quiz: [
    {
      id: "7-paper1-paper2-mastery-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "paper1-guiding-question-planning",
      question:
        "How many unseen passages appear on the **SL Paper 1** examination paper, and how many must an SL candidate analyse?",
      options: [
        "Two unseen passages from different forms; analyse one passage.",
        "Three unseen passages from the same form; analyse two passages.",
        "Two unseen passages from the same form; compare both passages.",
        "Four unseen passages across all forms; analyse two passages.",
      ],
      answerIndex: 0,
      hints: [
        "SL Paper 1 lasts 1 hour 15 minutes for a single 20-mark guided analysis.",
        "The IB always supplies passages from two distinct literary forms.",
      ],
      explanation:
        "SL Paper 1 provides 2 unseen passages from 2 different literary forms, and SL candidates choose 1 passage to analyse in 75 minutes for 20 marks.",
    },
    {
      id: "7-paper1-paper2-mastery-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "HL",
      commandTerm: "State",
      guideRef: "paper1-hl-two-passages",
      question:
        "State the total official examination duration in **minutes** for **HL Paper 1** (2 hours 15 minutes).",
      answer: { type: "number", value: 135, display: "135 minutes" },
      traps: [
        {
          spec: { type: "number", value: 75 },
          feedback: "75 minutes (1h 15m) is SL Paper 1 — HL Paper 1 lasts 2 hours 15 minutes.",
        },
        {
          spec: { type: "number", value: 105 },
          feedback: "105 minutes (1h 45m) is Paper 2 — HL Paper 1 lasts 2 hours 15 minutes.",
        },
      ],
      hints: [
        "Convert 2 hours into minutes first, then add 15 minutes.",
        "2 × 60 + 15 = ?",
      ],
      solution: [
        "HL Paper 1 officially lasts 2 hours 15 minutes.",
        "2 hours = 120 minutes; 120 + 15 = 135 minutes (budgeted as 65 + 65 + 5 min).",
      ],
    },
    {
      id: "7-paper1-paper2-mastery-quiz-q03",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "paper2-comparative-prompts",
      question:
        "What is the official percentage weighting of **Paper 2** toward the final IB Literature grade at **SL** versus **HL**?",
      options: [
        "25% at SL and 35% at HL.",
        "35% at SL and 25% at HL.",
        "30% at SL and 30% at HL.",
        "40% at SL and 20% at HL.",
      ],
      answerIndex: 1,
      hints: [
        "Remember that HL includes the 20% HL Essay, which lowers HL Paper 2's weighting relative to SL.",
        "SL has three assessments: Paper 1 (35%), Paper 2 (?), and Individual Oral (30%).",
      ],
      explanation:
        "Paper 2 accounts for 35% of the SL grade (35 + 35 + 30 = 100%) and 25% of the HL grade (Paper 1: 35%, Paper 2: 25%, HL Essay: 20%, IO: 20%).",
    },
    {
      id: "7-paper1-paper2-mastery-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "rubric-mastery-crit-a-d",
      question:
        "Which single IB criterion letter (**A**, **B**, **C**, or **D**) explicitly assesses *'Focus and organisation'* — including conceptual structure on Paper 1 and balanced comparison on Paper 2?",
      answer: { type: "text", accept: ["C", "Criterion C", "Crit C"], display: "Criterion C" },
      traps: [
        {
          spec: { type: "text", accept: ["B", "Criterion B", "Crit B"] },
          feedback: "Criterion B assesses Analysis and evaluation of authorial choices; Focus and organisation is Criterion C.",
        },
        {
          spec: { type: "text", accept: ["D", "Criterion D", "Crit D"] },
          feedback: "Criterion D assesses Language (clarity, accuracy, register); structure and cohesion sit in Criterion C.",
        },
      ],
      hints: [
        "Recall the four criteria in order: A = Understanding/Interpretation, B = Analysis/Evaluation, C = ?, D = Language.",
      ],
      solution: [
        "Criterion C is 'Focus and organisation' (worth 5 marks on both Paper 1 and Paper 2).",
      ],
    },
    {
      id: "7-paper1-paper2-mastery-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Apply",
      guideRef: "paper1-hl-two-passages",
      question:
        "Under the **65 + 65 + 5** HL Paper 1 protocol, why is the final 5-minute buffer reserved at the end rather than added to Passage 1?",
      options: [
        "So candidates can write a brand-new third essay comparing both passages together.",
        "Because invigilators collect Passage 1 answer booklets at minute 65.",
        "So both scripts receive a final accuracy check on conclusions, quotations, and analytical verbs without jeopardising Essay 2.",
        "Because HL candidates do not need to plan Passage 2 and finish twenty minutes early.",
      ],
      answerIndex: 2,
      hints: [
        "Both HL essays remain on your desk until minute 135.",
        "Think about high-leverage lexical and conclusion fixes across both scripts.",
      ],
      explanation:
        "Reserving 5 minutes at the end ensures you protect Essay 2's full 65-minute allocation while still tightening precision verbs, quotations, and synthesis conclusions across both scripts.",
    },
    {
      id: "7-paper1-paper2-mastery-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "paper2-comparative-prompts",
      question:
        "A Paper 2 candidate earns **8/10** on Criterion A, **9/10** on Criterion B, **4/5** on Criterion C, and **5/5** on Criterion D. Calculate their total Paper 2 mark out of 30.",
      answer: { type: "number", value: 26, display: "26" },
      hints: [
        "Sum all four criterion scores directly: A + B + C + D.",
        "8 + 9 + 4 + 5 = ?",
      ],
      solution: [
        "Paper 2 maximum is A(10) + B(10) + C(5) + D(5) = 30.",
        "8 + 9 + 4 + 5 = 26 out of 30 (Band 5 range).",
      ],
    },
    {
      id: "7-paper1-paper2-mastery-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "rubric-mastery-crit-a-d",
      question:
        "Which analytical revision best fixes the Band 3 error of **technique-spotting** in the sentence: *'The writer uses pathetic fallacy with the rain to create a sad mood'*?",
      options: [
        "The writer uses pathetic fallacy and weather imagery effectively so readers feel sympathetic.",
        "Rain is a well-known literary symbol that writers commonly employ in tragic openings.",
        "Because it is raining outside, the audience knows literally that the character is feeling gloomy.",
        "Relentless rain streaking the parlour glass mirrors the speaker's sealed interior grief, turning domestic shelter into claustrophobic isolation.",
      ],
      answerIndex: 3,
      hints: [
        "Apply Choice → Mechanism → Conceptual/Psychological Effect.",
        "Reject vague 'creates a sad mood' or textbook definitions of symbols.",
      ],
      explanation:
        "Band 5 Criterion B evaluates exactly *how* the weather imagery functions — converting an external domestic boundary into an emblem of sealed psychological isolation.",
    },
    {
      id: "7-paper1-paper2-mastery-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "paper1-guiding-question-planning",
      question:
        "Classify this Paper 1 topic sentence as either **conceptual** or **chronological**: *'Moving to the third stanza, the poet next introduces images of rust and tidewater.'*",
      answer: { type: "text", accept: ["chronological"], display: "chronological" },
      traps: [
        {
          spec: { type: "text", accept: ["conceptual"] },
          feedback: "Opening with 'Moving to the third stanza... next introduces' tracks text sequence rather than a conceptual claim.",
        },
      ],
      hints: [
        "Look at the opening phrase: does it argue an idea or walk through stanza order?",
        "Words like 'Moving to the third stanza' and 'next' signal linear sequencing.",
      ],
      solution: [
        "The opener tracks stanza sequence ('Moving to the third stanza... next') without advancing an arguable conceptual tension, making it **chronological**.",
      ],
    },
    {
      id: "7-paper1-paper2-mastery-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "paper2-comparative-prompts",
      marks: 3,
      question:
        "Explain **three** reasons why an integrated point-by-point structure outscores a block-by-block structure on IB Paper 2.",
      hints: [
        "Connect structure directly to Criteria A (comparative interpretation), B (comparative craft evaluation), and C (balance and focus).",
        "Think about what happens to analytical transitions when you discuss Work 1 for three pages before mentioning Work 2.",
      ],
      modelAnswer:
        "First, point-by-point organisation sustains active dialogue between both works inside every movement, enabling insightful comparison of subtle divergences rather than delayed parallels (Criterion A). Second, placing contrasting authorial techniques side by side lets the candidate evaluate how distinct forms or stylistic choices shape different reader effects directly (Criterion B). Third, alternating consistently around shared conceptual lenses enforces an equitable 50/50 balance and sharper focus on the prompt throughout the essay (Criterion C).",
      markScheme: [
        {
          point: "Sustains direct analytical dialogue and nuanced similarity/divergence throughout (Criterion A).",
          keywords: ["dialogue", "divergence", "divergences", "criterion a", "nuanced"],
        },
        {
          point: "Enables immediate side-by-side evaluation of contrasting authorial craft/forms (Criterion B).",
          keywords: ["craft", "techniques", "forms", "criterion b", "reader effects"],
        },
        {
          point: "Protects balanced ~50/50 coverage and sustained conceptual cohesion/focus (Criterion C).",
          keywords: ["balance", "50/50", "equitable", "criterion c", "conceptual lenses"],
        },
      ],
    },
    {
      id: "7-paper1-paper2-mastery-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "rubric-mastery-crit-a-d",
      marks: 4,
      question:
        "Upgrade this Band 3 commentary sentence on an unseen line (*'His apology arrived folded inside a tax receipt'*) into a Band 5 analytical micro-paragraph demonstrating stronger Criteria A, B, and D:\n\n*Band 3 draft: 'The writer uses irony here because an apology is in a tax receipt. This shows he does not really care and makes the reader dislike him.'*",
      hints: [
        "Replace 'shows' and 'makes the reader dislike him' with surgical analytical verbs.",
        "Evaluate the juxtaposition between emotional contrition ('apology') and bureaucratic accounting ('tax receipt') as well as the verb 'folded'.",
      ],
      modelAnswer:
        "By embedding an intimate 'apology' inside a bureaucratic 'tax receipt', the writer creates biting situational irony that reduces moral contrition to a financial transaction. The tactile participle 'folded' implies deliberate concealment and tidy containment, exposing a character who treats human injury as an administrative ledger item to be filed away. Rather than inviting simple dislike, this cold juxtaposition unsettles the reader by revealing how institutional habits hollow out genuine remorse.",
      markScheme: [
        {
          point: "Analyses the juxtaposition between emotional intimacy ('apology') and bureaucratic/financial register ('tax receipt').",
          keywords: ["bureaucratic", "financial", "transaction", "juxtaposition", "ledger"],
        },
        {
          point: "Evaluates the specific phrasing or verb ('folded') for psychological implication (containment/concealment).",
          keywords: ["concealment", "containment", "tactile", "filed", "administrative"],
        },
        {
          point: "Moves beyond surface judgement ('does not care') to deeper conceptual implication (hollowing out remorse).",
          keywords: ["remorse", "contrition", "hollow", "human injury", "moral"],
        },
        {
          point: "Uses precise academic register and surgical verbs rather than Band 3 filler.",
          keywords: ["exposing", "unsettles", "situational", "reduces", "embedding"],
        },
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPER 1 (15 Qs) — Paper 1 Mastery, Unseen Craft & 20m Full Task
  // ===========================================================================
  papers: [
    {
      id: "7-paper1-paper2-mastery-p1",
      title: "Practice Paper 1 — Guided Literary Analysis, Unseen Planning & Rubric Mastery",
      level: "SL",
      questions: [
        {
          id: "7-paper1-paper2-mastery-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "paper1-guiding-question-planning",
          question:
            "How many total marks is a single IB Paper 1 guided literary analysis essay marked out of?",
          answer: { type: "number", value: 20, display: "20 marks" },
          traps: [
            {
              spec: { type: "number", value: 30 },
              feedback: "30 marks is Paper 2; a single Paper 1 essay is marked out of 20 (A5 + B5 + C5 + D5).",
            },
            {
              spec: { type: "number", value: 40 },
              feedback: "40 marks is the combined total for BOTH essays at HL; each individual Paper 1 essay is out of 20.",
            },
          ],
          hints: [
            "Each of Criteria A, B, C, and D is worth 5 marks on a Paper 1 essay.",
          ],
          solution: [
            "Criterion A (5) + Criterion B (5) + Criterion C (5) + Criterion D (5) = 20 marks per Paper 1 essay.",
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "paper1-guiding-question-planning",
          question:
            "In the guiding question *'How do rhythmic fractures and domestic motifs expose the speaker's repressed nostalgia?'*, classify **repressed nostalgia** as either the **craft anchor** or the **conceptual inquiry**.",
          answer: {
            type: "text",
            accept: ["conceptual inquiry", "conceptual", "conceptual enquiry"],
            display: "conceptual inquiry",
          },
          traps: [
            {
              spec: { type: "text", accept: ["craft anchor", "craft"] },
              feedback: "'Rhythmic fractures and domestic motifs' are the craft anchor (the *how*); 'repressed nostalgia' is the conceptual inquiry (the *so what*).",
            },
          ],
          hints: [
            "Does 'repressed nostalgia' name a technical device or a psychological/thematic tension?",
          ],
          solution: [
            "'Rhythmic fractures and domestic motifs' form the craft anchor; 'repressed nostalgia' is the **conceptual inquiry**.",
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "paper1-hl-two-passages",
          question:
            "An HL Paper 1 exam begins at **08:45**. Following the strict 65 + 65 + 5 minute protocol, how many minutes into the exam should you finish writing Essay 2 and begin your 5-minute final buffer?",
          answer: { type: "number", value: 130, display: "130 minutes" },
          traps: [
            {
              spec: { type: "number", value: 135 },
              feedback: "135 minutes is the final bell — stop writing Essay 2 at minute 130 to keep your 5-minute proofread buffer.",
            },
            {
              spec: { type: "number", value: 65 },
              feedback: "Minute 65 is the hard stop for Essay 1; Essay 2 finishes at 65 + 65 = 130 minutes.",
            },
          ],
          hints: [
            "Add Essay 1's 65 minutes and Essay 2's 65 minutes together.",
            "Confirm that 135 − 5 = 130.",
          ],
          solution: [
            "Essay 1 uses minutes 0–65; Essay 2 uses minutes 65–130.",
            "65 + 65 = 130 minutes (10:55), reserving minutes 130–135 for proofreading both scripts.",
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "rubric-mastery-crit-a-d",
          question:
            "An examiner notes: *'Frequent vague verbs such as \"shows\" and conversational hedges weaken the critical authority of your prose.'* State the single IB criterion letter (**A**, **B**, **C**, or **D**) targeted by this remark.",
          answer: { type: "text", accept: ["D", "Criterion D", "Crit D"], display: "Criterion D" },
          traps: [
            {
              spec: { type: "text", accept: ["C", "Criterion C", "Crit C"] },
              feedback: "Criterion C covers organisation and focus; lexical precision and academic register sit in Criterion D.",
            },
          ],
          hints: [
            "Which criterion assesses vocabulary precision, sentence control, register, and style?",
            "Distinguish language precision from organisation (Criterion C) and craft evaluation (Criterion B).",
          ],
          solution: [
            "Register, lexical precision, and academic style are assessed under **Criterion D (Language)**.",
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "paper1-hl-two-passages",
          question:
            "On HL Paper 1, Passage 1 is Poetry and Passage 2 includes brackets such as *[Lights dim to amber; she pauses mid-gesture]* and alternating speaker names. State the exact IB literary form of Passage 2.",
          answer: { type: "text", accept: ["Drama", "play"], display: "Drama" },
          hints: [
            "Choose from the four IB Literature forms: Poetry, Drama, Prose Fiction, or Literary Non-Fiction.",
            "Bracketed lighting and gesture cues are stage directions written for performance.",
          ],
          solution: [
            "Stage directions, lighting cues, pauses, and dialogue script formatting identify **Drama**.",
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p1-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "paper1-guiding-question-planning",
          marks: 4,
          question:
            "Outline the four timed stages of the recommended **15-minute Paper 1 conceptual planning pipeline**, explaining the exact purpose of each stage.",
          hints: [
            "Think of the mnemonic C-A-M-T: Cold read, Annotate GQ, Map 3 movements, Thesis & topic sentences.",
            "Specify why you must avoid highlighting prematurely in Stage 1 and avoid chronological ordering in Stage 3.",
          ],
          modelAnswer:
            "Stage 1 (Minutes 0–4, Cold Read): read the entire extract twice without heavy marking to grasp its central conflict, tonal shift, and ending irony. Stage 2 (Minutes 4–9, Targeted Annotation): re-read through the guiding question's technical anchor, tagging interlocking clusters of diction, syntax, form, or staging. Stage 3 (Minutes 9–13, Conceptual Grouping): sort annotations into three non-chronological movements that cross-link opening and closing details. Stage 4 (Minutes 13–15, Thesis and Topic Claims): formulate a tension-driven thesis statement and three arguable topic sentences that build a cumulative progression.",
          markScheme: [
            {
              point: "Stage 1 (Min 0–4): Cold read for overarching tension, tonal shift, and whole-text arc before highlighting.",
              keywords: ["cold read", "tonal shift", "central conflict", "ending irony"],
            },
            {
              point: "Stage 2 (Min 4–9): Targeted annotation of interlocking authorial choices tied to the guiding question.",
              keywords: ["targeted annotation", "interlocking", "clusters", "technical anchor"],
            },
            {
              point: "Stage 3 (Min 9–13): Grouping evidence into three non-chronological movements cross-linking the passage.",
              keywords: ["non-chronological", "three", "cross-link", "conceptual grouping"],
            },
            {
              point: "Stage 4 (Min 13–15): Drafting a tension-driven thesis statement and progressive topic sentences.",
              keywords: ["tension-driven", "thesis", "progressive", "cumulative"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p1-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Construct",
          guideRef: "paper1-guiding-question-planning",
          marks: 4,
          question:
            "Read this original unseen micro-extract from a **Literary Non-Fiction** memoir (*The Salt-Warehouse Notebooks*):\n\n*We called the dockyard ledger 'the Bible', though nobody prayed over it; we simply watched my grandfather run a calloused thumb down the columns of unloaded timber until his knuckles went chalk-white. Years later, turning those water-stained leaves in an air-conditioned archive, I realised his neat figures were less a record of profit than a census of every storm he had outlasted.*\n\nConstruct a Band 5 **thesis statement** and **two conceptual topic sentences** answering the guiding question: *How do retrospective framing and contrasting sensory details illuminate the writer's shifting understanding of labour and endurance?*",
          hints: [
            "Avoid chronological phrasing ('First the writer remembers... Then years later...').",
            "Anchor your thesis to the shift between the experiencing child's literal view and the retrospective adult persona inside the 'air-conditioned archive'.",
          ],
          modelAnswer:
            "Thesis: While the young narrator initially witnesses dockyard bookkeeping as austere clerical routine, the retrospective adult persona contrasts tactile physical strain with sterile archival stillness to reframe commercial figures as an intimate testament to human survival. Topic Sentence 1: Through dry irony ('the Bible') and visceral bodily imagery ('calloused thumb', 'chalk-white' knuckles), the memoirist exposes the physical toll concealed beneath seemingly dry numerical order. Topic Sentence 2: By juxtaposing 'water-stained leaves' against an 'air-conditioned archive', the mature voice bridges temporal distance to transform economic accounting into an elegiac tribute to resilience.",
          markScheme: [
            {
              point: "Thesis articulates a conceptual shift/tension between youthful observation and retrospective reinterpretation.",
              keywords: ["retrospective", "testament", "survival", "clerical routine"],
            },
            {
              point: "Thesis anchors explicitly to authorial craft (persona/framing and sensory contrast).",
              keywords: ["persona", "sterile", "physical strain", "reframe"],
            },
            {
              point: "Topic Sentence 1 offers a non-chronological conceptual claim unpacking irony and bodily physicality.",
              keywords: ["irony", "visceral", "physical toll", "numerical order"],
            },
            {
              point: "Topic Sentence 2 contrasts material/spatial settings ('water-stained' vs 'air-conditioned') to evaluate resilience/memory.",
              keywords: ["juxtaposing", "temporal distance", "elegiac", "resilience"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "rubric-mastery-crit-a-d",
          marks: 4,
          question:
            "Read this original unseen poetic couplet:\n\n*Our kitchen clock still keeps the railway's old timetable—*\n*each chime departs without us, punctual and cold.*\n\nRewrite this Band 3 draft (*'The poet uses personification because the clock chimes depart without them. This creates a sad tone and shows they miss travelling.'*) into a Band 5 analytical response hitting Criteria A, B, and D.",
          hints: [
            "Look closely at the em-dash pause, the pun on 'departs', and the final adjective pair 'punctual and cold'.",
            "Move beyond 'sad tone' to evaluate how institutional railway precision intrudes into domestic stillness to dramatise stranded grief or stasis.",
          ],
          modelAnswer:
            "By grafting public transit precision ('railway's old timetable') onto an intimate domestic heirloom, the poet destabilises the comfort of home with restless longing. The abrupt dash suspends the first line before the wry double meaning of 'departs' personifies each chime as an abandoning train, stranding the speakers inside static time. Concluding with the stark pairing 'punctual and cold' evaluates mechanical order as indifferent to human loss, leaving the reader with quiet, unsentimental ache rather than melodrama.",
          markScheme: [
            {
              point: "Analyses the conceptual clash between public/mechanical schedule and domestic intimacy.",
              keywords: ["domestic", "heirloom", "public", "destabilises", "longing"],
            },
            {
              point: "Evaluates the punctuation (em-dash) and dual resonance/personification of 'departs'.",
              keywords: ["dash", "suspends", "abandoning", "double meaning", "static"],
            },
            {
              point: "Interprets 'punctual and cold' for emotional implication (indifferent mechanical time vs human loss).",
              keywords: ["indifferent", "mechanical", "unsentimental", "ache", "stranding"],
            },
            {
              point: "Employs precise academic verbs and concise scholarly register (Criterion D).",
              keywords: ["grafting", "evaluates", "concluding", "stark"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "paper1-hl-two-passages",
          marks: 4,
          question:
            "An HL candidate finishes Passage 1 (a Prose Fiction extract heavy on free indirect discourse) at minute 65 and turns to Passage 2 (a Petrarchan sonnet). Explain **four** concrete mental and technical pivots required during minutes 65–80 to prevent form carryover and Essay-2 collapse.",
          hints: [
            "Address cognitive reset, shedding prose tools, and activating sonnet-specific craft (octave/sestet, volta, metre/lineation).",
            "Do not overlook acoustic soundscapes and protecting the full 15-minute conceptual outline until minute 80.",
          ],
          modelAnswer:
            "First, execute a brief physical and mental palette cleanse at minute 65 so Passage 1's prose vocabulary does not bleed into the sonnet. Second, shed narrative tools like focalisation and immediately activate poetic architecture — checking octave-versus-sestet division, rhyme scheme, iambic metre, caesura, enjambment, and the structural volta. Third, separate the lyrical persona sharply from the biographical poet while listening for acoustic textures such as sibilance or plosives. Fourth, protect the full 15-minute conceptual planning window up to minute 80, grouping the poem into three thematic movements rather than collapsing into stanza-by-stanza summary.",
          markScheme: [
            {
              point: "Performs a deliberate cognitive reset/palette cleanse at the minute-65 hard stop.",
              keywords: ["palette cleanse", "reset", "bleed", "hard stop"],
            },
            {
              point: "Sheds prose tools and activates sonnet-specific structural craft (octave/sestet, volta, metre, lineation).",
              keywords: ["volta", "octave", "sestet", "enjambment", "caesura", "metre"],
            },
            {
              point: "Attends to lyrical persona/speaker distinction and acoustic soundscape (sibilance/plosives).",
              keywords: ["lyrical persona", "acoustic", "sibilance", "plosives", "biographical"],
            },
            {
              point: "Refuses to skip Passage 2's 15-minute conceptual outline (until minute 80) to prevent chronological fatigue.",
              keywords: ["minute 80", "three thematic", "stanza-by-stanza", "conceptual planning"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "rubric-mastery-crit-a-d",
          marks: 6,
          markbands: BAND_6M,
          question:
            "Read this short original unseen **Drama** exchange:\n\n*[A dim conservatory. Rain drums against glass overhead. ELENA trims a dead orchid stem with silver shears, her back to DAVID, who stands near the doorway holding an unopened telegram.]*\n*DAVID: You've cut it down to the root.*\n*ELENA: (snipping once more) Rot spreads faster than news, David. Leave the envelope on the slate.*\n*[Pause. Neither moves toward the centre table.]*\n\nAnalyse how the playwright uses **staging, symbolic props, and dialogue subtext** to construct unspoken antagonism (Band 5 Criterion A & B focus).",
          hints: [
            "Read the extract as a 3D performance: look at proxemics (her back turned, him at the doorway, the empty centre table).",
            "Connect the 'dead orchid stem', 'silver shears', and 'unopened telegram' directly to Elena's oblique metaphor ('Rot spreads faster than news').",
          ],
          modelAnswer:
            "The playwright choreographs domestic estrangement visually before a single line is spoken: Elena's turned back and David's hesitation at the doorway establish hostile proxemics across a dim conservatory where drumming rain seals both figures inside suffocating intimacy. The empty centre table acts as a silent chasm reinforcing the final pause in which neither character yields ground. Meanwhile, Elena's stage business with 'silver shears' cutting an already 'dead orchid stem' externalises controlled surgical ruthlessness — her compulsive extra snip signals emotional severance rather than botanical care. Crucially, her clipped riposte ('Rot spreads faster than news') operates through sharp subtext, equating David's concealed message with domestic decay and reducing the 'unopened telegram' to a tainted object exiled onto cold 'slate'. By uniting stark spatial distance, lethal domestic props, and oblique verbal evasion, the playwright invites spectators to read antagonism through what remains conspicuously unuttered.",
          markScheme: [
            {
              point: "Analyses proxemics and spatial blocking (turned back, doorway hesitation, untouched centre table).",
              keywords: ["proxemics", "estrangement", "chasm", "blocking", "spatial distance"],
            },
            {
              point: "Evaluates atmospheric lighting/sound cues (dim conservatory, drumming rain) creating claustrophobic tension.",
              keywords: ["claustrophobic", "suffocating", "seals", "atmospheric"],
            },
            {
              point: "Interprets symbolic props and stage business (silver shears, extra snip on dead orchid = surgical severance).",
              keywords: ["severance", "ruthlessness", "surgical", "stage business", "externalises"],
            },
            {
              point: "Unpacks verbal subtext and metaphor ('Rot spreads faster than news' equating secrecy with decay).",
              keywords: ["decay", "concealed", "subtext", "equating", "riposte"],
            },
            {
              point: "Evaluates the telegram's symbolic exile onto cold 'slate' and the theatrical silence of the final pause.",
              keywords: ["tainted", "exiled", "yields", "silence", "unuttered"],
            },
            {
              point: "Sustains evaluative theatrical register addressing spectator/audience perception directly.",
              keywords: ["choreographs", "spectators", "invites", "oblique"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "rubric-mastery-crit-a-d",
          marks: 4,
          question:
            "Distinguish clearly between **Band 3** and **Band 5** performance on **both Criterion A and Criterion B** for Paper 1, giving one concrete behavioural contrast for each criterion.",
          hints: [
            "Criterion A contrasts literal understanding/paraphrase with subtle implications and ambiguity.",
            "Criterion B contrasts device-naming ('technique-spotting') with evaluative analysis of interlocking authorial choices.",
          ],
          modelAnswer:
            "On Criterion A, Band 3 demonstrates sound literal comprehension with generally relevant quotations, whereas Band 5 uncovers subtle implications, tonal ironies, and productive ambiguities supported by judiciously selected micro-evidence. In practice, a Band 3 script explains what a character does, while a Band 5 script interrogates why that gesture conceals contradictory motives. On Criterion B, Band 3 identifies isolated literary features with generic effects ('creates tension'), whereas Band 5 consistently evaluates how interlocking authorial choices — such as syntax, imagery, and structural shifts — cooperate to shape reader perception. Behaviourally, Band 5 replaces device checklists with the causal evaluative chain of choice, mechanism, and conceptual impact.",
          markScheme: [
            {
              point: "Contrasts Crit A Band 3 (literal meaning/paraphrase) with Band 5 (subtle implications, irony, ambiguity).",
              keywords: ["literal", "implications", "ambiguities", "judiciously"],
            },
            {
              point: "Gives a concrete behavioural illustration for Criterion A.",
              keywords: ["contradictory motives", "conceals", "gesture", "interrogates"],
            },
            {
              point: "Contrasts Crit B Band 3 (isolated technique-spotting/generic effects) with Band 5 (evaluative interlocking craft).",
              keywords: ["isolated", "generic", "interlocking", "cooperate"],
            },
            {
              point: "Gives a concrete behavioural contrast for Criterion B (choice → mechanism → conceptual impact).",
              keywords: ["mechanism", "conceptual impact", "checklists", "causal"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "paper1-guiding-question-planning",
          marks: 6,
          markbands: BAND_6M,
          question:
            "A student submits this Paper 1 essay plan for an unseen 24-line poem about a retired lighthouse keeper selling his brass telescope:\n\n- *Intro: The poem is about an old man selling his telescope.*\n- *Para 1: Lines 1–8 describe the lighthouse and sea.*\n- *Para 2: Lines 9–16 show him polishing the brass.*\n- *Para 3: Lines 17–24 show him handing it to a buyer.*\n- *Conclusion: Overall, the poet uses imagery and enjambment to make the reader feel sad.*\n\nEvaluate **three** rubric weaknesses in this plan and propose a **3-movement conceptual redesign** that lifts Criteria A, B, and C into Band 5.",
          hints: [
            "Diagnose the plot-summary intro, the rigid chronological 8-line slicing, and the empty generic conclusion.",
            "Redesign the three movements around conceptual tensions (e.g. vocational identity vs obsolescence, sensory mastery vs relinquishment, structural echo).",
          ],
          modelAnswer:
            "Weakness 1 (Crit A): the introduction summarises literal plot ('selling his telescope') without articulating any central tension or deeper implication about ageing and identity. Weakness 2 (Crit C): slicing the poem chronologically into three eight-line blocks prevents cross-referencing how the closing handover echoes or inverts the opening seascape. Weakness 3 (Crit B & D): the conclusion commits technique-spotting ('uses imagery and enjambment') paired with generic emotional filler ('feel sad'). Conceptual Redesign: Thesis framing the sale not as mere transaction but as a quiet negotiation between vocational dignity and obsolescence. Movement 1 — Maritime authority and optical mastery (pairing opening seascape diction with tactile polishing of brass). Movement 2 — Rhythmic resistance to relinquishment (evaluating how enjambment and caesura mirror hesitation beneath outward composure). Movement 3 — The ambiguous handover (cross-linking the buyer's transaction against the keeper's enduring inner horizon to leave an unsentimental, bittersweet resonance).",
          markScheme: [
            {
              point: "Diagnoses Criterion A weakness (literal plot summary lacking conceptual tension/thesis).",
              keywords: ["literal plot", "identity", "central tension", "ageing"],
            },
            {
              point: "Diagnoses Criterion C weakness (chronological slicing blocking opening-to-closing cross-references).",
              keywords: ["chronologically", "cross-referencing", "blocks", "inverts"],
            },
            {
              point: "Diagnoses Criterion B/D weakness (unanalysed technique-spotting and generic filler).",
              keywords: ["technique-spotting", "generic", "filler", "emotional"],
            },
            {
              point: "Proposes Movement 1 organised conceptually (vocational authority/craft cross-linking early and middle details).",
              keywords: ["vocational", "optical", "mastery", "obsolescence"],
            },
            {
              point: "Proposes Movement 2 evaluating formal/rhythmic craft (enjambment/caesura conveying hesitation).",
              keywords: ["relinquishment", "caesura", "hesitation", "composure"],
            },
            {
              point: "Proposes Movement 3 synthesising an ambiguous/nuanced resolution rather than simplistic sadness.",
              keywords: ["ambiguous", "handover", "bittersweet", "unsentimental", "horizon"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p1-q13",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Justify",
          guideRef: "paper1-hl-two-passages",
          marks: 6,
          markbands: BAND_6M,
          question:
            "At minute 62 of HL Paper 1, you have written two strong body movements on Passage 1 (Prose Fiction), still have a third interesting sub-point on your plan, and have not yet written a conclusion. Passage 2 (Poetry) remains untouched. Justify your exact decision over minutes **62–80** using mark-return logic and IB rubric criteria.",
          hints: [
            "Consider marginal mark return: an extra 15 minutes on Passage 1 might add 1–2 marks, whereas stealing 15 minutes from Passage 2 can cost 5–7 marks.",
            "What should you do in minutes 62–65 (before hard stop), and how must minutes 65–80 protect Passage 2?",
          ],
          modelAnswer:
            "Between minutes 62 and 65, I must resist adding the full third sub-point and instead integrate its sharpest insight briefly into a crisp, three-sentence synthesis conclusion so Passage 1 finishes with coherent structural closure (protecting Criterion C) by the hard stop at minute 65. Continuing Passage 1 past minute 65 yields poor marginal returns — squeezing perhaps one extra mark on an already strong script while destroying Passage 2's essential planning window and risking a 5-to-7-mark collapse across Criteria A, B, and C. At minute 65, I execute a deliberate 30-second cognitive reset, shed prose focalisation terminology, and invest minutes 65–80 in a full 15-minute conceptual plan for Passage 2: cold-reading for the poem's tonal volta, annotating metre, lineation, and soundscapes against the guiding question, and mapping three balanced conceptual movements before beginning to write at minute 80.",
          markScheme: [
            {
              point: "Uses minutes 62–65 to land a concise synthesis conclusion rather than opening an unfinished third body movement.",
              keywords: ["synthesis conclusion", "closure", "three-sentence", "resist"],
            },
            {
              point: "Enforces the minute-65 hard stop explicitly to protect overall 40-mark balance.",
              keywords: ["hard stop", "minute 65", "balanced", "40-mark"],
            },
            {
              point: "Justifies via diminishing marginal mark returns (gaining 1–2 marks vs risking 5–7 marks on Passage 2).",
              keywords: ["marginal", "diminishing", "5-to-7", "collapse"],
            },
            {
              point: "Includes a deliberate cognitive reset and form-toolkit switch from Prose Fiction to Poetry.",
              keywords: ["cognitive reset", "shed", "focalisation", "toolkit"],
            },
            {
              point: "Protects Passage 2's full 15-minute planning phase (minutes 65–80) instead of panicking into writing.",
              keywords: ["minute 80", "15-minute", "planning window", "cold-reading"],
            },
            {
              point: "Activates poetry-specific craft cues (volta, metre, lineation, soundscapes) within a conceptual outline.",
              keywords: ["volta", "metre", "lineation", "soundscapes"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Examine",
          guideRef: "rubric-mastery-crit-a-d",
          marks: 8,
          markbands: BAND_8M,
          question:
            "Read this original unseen **Prose Fiction** micro-extract (*The Piano Tuner's Visit*):\n\n*For forty minutes he struck middle C until the wallpaper seemed to shiver, pausing only to jot slanted figures into a pocket diary he kept buttoned inside his waistcoat. My mother stood beside the sideboard smoothing the lace runner again and again, apologising for the dampness in the hall as though the sea had broken in through her own carelessness. When at last he closed the mahogany lid, the silence felt heavier than the missing chord; he accepted the exact fare without counting it and stepped backwards down the porch steps, leaving a faint ring of chalk on the parlour floor.*\n\nExamine how **auditory contrast, domestic gesture, and spatial detail** convey unspoken class tension and quiet vulnerability.",
          hints: [
            "Notice how the tuner's repetitive mechanical strike ('middle C') and private 'buttoned' diary contrast with the mother's nervous smoothing and self-blaming apology.",
            "Evaluate the ending details: 'heavier than the missing chord', accepting 'exact fare without counting', stepping 'backwards', and the 'faint ring of chalk'.",
          ],
          modelAnswer:
            "Through tightly controlled auditory and domestic detail, the writer dramatises an encounter in which polite transaction barely masks class hierarchy and fragile dignity. Initially, the tuner's relentless striking of 'middle C' until the 'wallpaper seemed to shiver' transforms acoustic calibration into a subtle invasion of domestic space; his 'buttoned' pocket diary reinforces guarded professional authority that excludes the household from judgement. By contrast, the mother's repetitive 'smoothing' of the lace runner externalises anxious self-scrutiny, while the conditional simile — apologising 'as though the sea had broken in through her own carelessness' — exposes internalised shame that mistakes environmental decay for moral failure. Crucially, the structural pivot arrives not in speech but in acoustic absence: shutting the 'mahogany lid' creates a silence 'heavier than the missing chord', suggesting that unspoken social distance outweighs audible disruption. Finally, the tuner's dignified refusal to count the 'exact fare', his deferential retreat 'backwards down the porch steps', and the lingering 'faint ring of chalk' complicate any simple villainy — exposing two proud figures equally constrained by rigid rituals of deference and scarcity.",
          markScheme: [
            {
              point: "Articulates overarching conceptual tension (polite commercial ritual masking class hierarchy and shared vulnerability).",
              keywords: ["hierarchy", "fragile dignity", "polite transaction", "scarcity"],
            },
            {
              point: "Analyses auditory intrusion ('middle C', shivering wallpaper) destabilising domestic security.",
              keywords: ["invasion", "calibration", "destabilises", "shiver"],
            },
            {
              point: "Evaluates the 'buttoned' diary as guarded professional control/exclusion.",
              keywords: ["guarded", "excludes", "professional authority", "buttoned"],
            },
            {
              point: "Interprets the mother's repetitive smoothing of lace as externalised social anxiety.",
              keywords: ["externalises", "self-scrutiny", "anxious", "repetitive"],
            },
            {
              point: "Evaluates the conditional simile about the sea as internalised shame over economic/environmental decay.",
              keywords: ["internalised shame", "moral failure", "environmental decay", "conditional simile"],
            },
            {
              point: "Analyses the closing acoustic inversion (silence 'heavier than the missing chord' embodying social distance).",
              keywords: ["acoustic absence", "social distance", "outweighs", "missing chord"],
            },
            {
              point: "Recognises nuanced ambiguity in the tuner's parting gestures (uncounted fare, backwards retreat, chalk trace).",
              keywords: ["deferential", "villainy", "equally constrained", "chalk"],
            },
            {
              point: "Maintains cohesive conceptual progression and precise Band 5 register throughout.",
              keywords: ["dramatises", "complicate", "rituals", "deference"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "paper1-guiding-question-planning",
          marks: 20,
          markbands: PAPER1_20M_MARKBANDS,
          question:
            "**FULL AUTHENTIC IB PAPER 1 TASK (20 Marks · Official Rubric A5 / B5 / C5 / D5)**\n\nRead this original unseen **Poem** (*Inventory of a Demolished Orchard*) carefully:\n\n*1  They numbered every apple tree in chalk before the graders came—*\n*2  seventeen crooked spines still leaning slightly toward the salt marsh.*\n*3  My uncle kept the pruning saw greased in a strip of flannel,*\n*4  though the deed had already changed hands at the municipal desk.*\n*\n*5  All morning, diesel coughed across the ditch where starlings nested;*\n*6  he walked the perimeter counting wire fence-posts as if arithmetic*\n*7  could hold a boundary the parchment had already surrendered.*\n*8  At noon a surveyor offered him a paper cup of lukewarm coffee.*\n*\n*9  He took it with both hands—polite, unhurried, eyes on the surveyor's boots—*\n*10 then poured the last dark mouthful quietly beside the oldest trunk.*\n*11 By dusk the earth lay combed into obedient gravel rectangles,*\n*12 yet bruised windfalls still scented the exhaust along the service road.*\n\n**Guiding Question:** *How do structural contrasts, figurative imagery, and restrained action convey the tension between institutional erasure and quiet defiance?*\n\nWrite a full, conceptually organised Paper 1 guided literary analysis addressing Criteria A (5), B (5), C (5), and D (5).",
          hints: [
            "Plan three conceptual movements (NEVER stanza 1 → stanza 2 → stanza 3): (1) Bureaucratic quantification vs organic stubbornness; (2) Ritualised labour and acoustic intrusion; (3) Silent ceremonial defiance and lingering sensory persistence.",
            "Embed 2–5 word micro-quotations and evaluate interlocking craft: chalk numbers vs 'crooked spines', ironic conditional simile 'as if arithmetic...', the em-dash pause in line 9, the libation gesture in line 10, and the final volta 'yet' in line 12.",
            "Keep your conclusion synthesising the poem's unresolved, unsentimental tension rather than declaring an easy victory.",
          ],
          modelAnswer:
            "In *Inventory of a Demolished Orchard*, the speaker stages the clearing of ancestral land not as dramatic spectacle, but as a muted collision between bureaucratic administration and quiet, embodied fidelity. While municipal paperwork and machinery flatten living ground into symmetrical geometry, the poet deploys stark semantic contrasts, ironic syntactic restraint, and a single ceremonial gesture to reveal how memory resists total erasure — persisting subtly even after physical dispossession is complete.\n\nFirst, the poem exposes institutional power operating through clinical quantification that reduces living roots to disposable units. Opening with an anonymous plural pronoun ('They numbered') strips the demolition of accountable human agency, while marking trunks in erasable 'chalk' reduces decades of growth to temporary inventory. Yet the poet immediately undercuts that flat geometry through organic personification: the trees' 'seventeen crooked spines' lean persistently 'toward the salt marsh', suggesting an unruly bodily history that refuses rigid straightening. This ideological clash intensifies by the final stanza, where the earth lies 'combed into obedient gravel rectangles' — an unsettling domestic metaphor ('combed') coupled with authoritarian diction ('obedient') that evaluates urban redevelopment as coerced submission rather than benign order. Crucially, the speaker's ironic title — *Inventory* — turns bureaucratic language back upon itself, transforming a developer's tally into an elegiac counter-archive.\n\nSecond, personal ritual and syntactic pacing dramatise the painful futility — and quiet dignity — of defending lost ground. The uncle's careful maintenance of a 'greased' pruning saw wrapped in soft 'flannel' contrasts tenderly with the sterile finality of the 'municipal desk', exposing an attachment that outlives legal ownership. When heavy machinery intrudes, harsh plosive soundscapes ('diesel coughed across the ditch') rupture the pastoral sanctuary where 'starlings nested', audibly enacting ecological displacement. Against this mechanical aggression, the speaker embeds an incisive conditional simile across enjambed lines — pacing fence-posts 'as if arithmetic / could hold a boundary' already 'surrendered' by 'parchment'. Breaking the line right on 'arithmetic' momentarily suspends his desperate hope before the harsh past participle 'surrendered' collapses it, evaluating human counting as poignantly inadequate against legal power.\n\nFinally, the poem pivots from powerless observation to understated ceremonial subversion through controlled physical action and lingering sensory irony. When offered 'lukewarm coffee' in a disposable 'paper cup' — emblems of cursory corporate sympathy — the uncle's measured pause framed by em-dashes ('polite, unhurried, eyes on the surveyor's boots') creates tense subtextual poise, concealing refusal beneath outward courtesy. Pouring 'the last dark mouthful quietly beside the oldest trunk' elevates a trivial beverage into an ancient funerary libation, honouring rooted lineage without uttering a single slogan. Although the closing quatrain concedes physical defeat, the sharp concessive volta 'yet' in line twelve refuses total surrender: 'bruised windfalls' continue to perfume 'the exhaust along the service road'. By pairing damaged sweetness ('bruised') with toxic 'exhaust', the poet avoids sentimental triumph, leaving the reader with an unsentimental, haunting paradox — erasure can pave over territory, yet sensory memory lingers stubbornly inside the wreckage.",
          markScheme: [
            // Criterion A (5 marks): Understanding, interpretation, implications, nuance, judicious references
            {
              point: "[Crit A1] Frames an insightful overarching thesis linking bureaucratic erasure to embodied/memorial resistance.",
              keywords: ["dispossession", "embodied fidelity", "muted collision", "memory resists"],
            },
            {
              point: "[Crit A2] Interprets the anonymous collective ('They') and title irony as depersonalised institutional authority turned counter-archive.",
              keywords: ["counter-archive", "accountable", "depersonalised", "anonymous"],
            },
            {
              point: "[Crit A3] Explores the psychological pathos of the uncle's attachment outliving legal transfer ('pruning saw' / 'arithmetic').",
              keywords: ["outlives", "inadequate", "poignantly", "futility"],
            },
            {
              point: "[Crit A4] Recognises the poured coffee as a silent ceremonial/funerary libation rather than mere waste.",
              keywords: ["libation", "funerary", "lineage", "honouring"],
            },
            {
              point: "[Crit A5] Embraces nuanced, unsentimental complexity at the ending (physical defeat alongside sensory persistence).",
              keywords: ["unsentimental", "paradox", "sentimental triumph", "wreckage"],
            },
            // Criterion B (5 marks): Evaluative analysis of authorial/formal choices
            {
              point: "[Crit B1] Evaluates contrast between clinical quantification ('chalk', 'rectangles') and organic personification ('crooked spines').",
              keywords: ["personification", "quantification", "unruly", "straightening"],
            },
            {
              point: "[Crit B2] Analyses unsettling diction in 'combed into obedient gravel rectangles' as coerced domestication/submission.",
              keywords: ["coerced submission", "authoritarian", "benign", "redevelopment"],
            },
            {
              point: "[Crit B3] Evaluates acoustic harshness/plosives ('diesel coughed') invading pastoral wildlife ('starlings nested').",
              keywords: ["plosives", "plosive", "ecological displacement", "pastoral"],
            },
            {
              point: "[Crit B4] Analyses enjambment across 'arithmetic / could hold' and the ironic conditional simile.",
              keywords: ["enjambed", "suspends", "conditional simile", "participle"],
            },
            {
              point: "[Crit B5] Evaluates parenthetical em-dash rhythm ('polite, unhurried') and final concessive volta ('yet' + olfactory clash).",
              keywords: ["em-dashes", "subtextual poise", "concessive volta", "damaged sweetness"],
            },
            // Criterion C (5 marks): Conceptual organisation, non-chronological cross-linking, cohesion, focus
            {
              point: "[Crit C1] Opens with a focused conceptual thesis directly answering both halves of the guiding question.",
              keywords: ["semantic contrasts", "syntactic restraint", "symmetrical geometry"],
            },
            {
              point: "[Crit C2] Organises Movement 1 conceptually by cross-linking opening chalk numbering with closing gravel rectangles.",
              keywords: ["ideological clash", "final stanza", "disposable units"],
            },
            {
              point: "[Crit C3] Advances Movement 2 around ritualised maintenance and acoustic/legal tension.",
              keywords: ["sterile finality", "mechanical aggression", "legal ownership"],
            },
            {
              point: "[Crit C4] Pivots cleanly into Movement 3 focusing on ceremonial subversion and sensory irony.",
              keywords: ["pivots", "ceremonial subversion", "cursory corporate"],
            },
            {
              point: "[Crit C5] Synthesises whole-poem tension seamlessly in the conclusion without verbatim repetition.",
              keywords: ["concedes", "lingers stubbornly", "pave over"],
            },
            // Criterion D (5 marks): Precise academic register, surgical verbs, embedded micro-quotes, syntactic control
            {
              point: "[Crit D1] Embeds crisp 2–5 word micro-quotations fluidly within grammatical clauses.",
              keywords: ["erasable", "disposable", "clipped", "flannel"],
            },
            {
              point: "[Crit D2] Uses surgical analytical verbs ('exposes', 'undercuts', 'dramatises', 'elevates', 'evaluates').",
              keywords: ["undercuts", "dramatises", "elevates", "evaluates"],
            },
            {
              point: "[Crit D3] Sustains formal, varied, concise academic syntax free from conversational hedging.",
              keywords: ["clinical", "incisive", "understated", "haunting"],
            },
            {
              point: "[Crit D4] Employs accurate poetic and literary terminology strictly in service of meaning.",
              keywords: ["soundscapes", "quatrain", "pronoun", "metaphor"],
            },
            {
              point: "[Crit D5] Maintains coherent rhetorical cadence and precise lexical nuance throughout.",
              keywords: ["elegiac", "concealing", "outward courtesy", "slogan"],
            },
          ],
        },
      ],
    },

    // ===========================================================================
    // PRACTICE PAPER 2 (15 Qs) — Paper 2 Comparison, Non-Overlap & 30m Full Task
    // ===========================================================================
    {
      id: "7-paper1-paper2-mastery-p2",
      title: "Practice Paper 2 — Comparative Essay Architecture, Closed-Book Craft & HL Strategy",
      level: "SL",
      questions: [
        {
          id: "7-paper1-paper2-mastery-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "paper2-comparative-prompts",
          question:
            "How many unseen essay prompts appear on the IB **Paper 2** exam paper, from which every candidate chooses exactly one?",
          answer: { type: "number", value: 4, display: "4 prompts" },
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback: "2 is the number of unseen passages on Paper 1 and the number of works you write on in Paper 2 — Paper 2 offers 4 prompts to choose from.",
            },
            {
              spec: { type: "number", value: 6 },
              feedback: "The pre-2021 syllabus offered genre-grouped choices; FA2021 Paper 2 offers exactly 4 general comparative prompts.",
            },
          ],
          hints: [
            "FA2021 Paper 2 replaced genre-specific questions with a small set of general comparative prompts.",
          ],
          solution: [
            "IB FA2021 Paper 2 provides **4 general unseen prompts**; candidates choose 1 and compare 2 studied works.",
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p2-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "paper2-comparative-prompts",
          question:
            "What is the official examination duration in **minutes** for **Paper 2** (both SL and HL: 1 hour 45 minutes)?",
          answer: { type: "number", value: 105, display: "105 minutes" },
          traps: [
            {
              spec: { type: "number", value: 75 },
              feedback: "75 minutes is SL Paper 1; Paper 2 lasts 1 hour 45 minutes (105 minutes).",
            },
            {
              spec: { type: "number", value: 135 },
              feedback: "135 minutes is HL Paper 1; Paper 2 lasts 1 hour 45 minutes (105 minutes) at both SL and HL.",
            },
          ],
          hints: [
            "Convert 1 hour 45 minutes into total minutes: 60 + 45.",
          ],
          solution: [
            "Paper 2 lasts 1 hour 45 minutes = 60 + 45 = **105 minutes** for both SL and HL.",
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "paper2-comparative-prompts",
          question:
            "An HL Literature student studies **14 works** in total, selects **2** for their Individual Oral, and writes their HL Essay on **1** different work. How many distinct studied works remain eligible for Paper 2 under the IB non-overlap rule?",
          answer: { type: "number", value: 11, display: "11 works" },
          traps: [
            {
              spec: { type: "number", value: 12 },
              feedback: "Remember to subtract BOTH the 2 Individual Oral works AND the 1 HL Essay work.",
            },
            {
              spec: { type: "number", value: 14 },
              feedback: "Under the IB non-overlap rule, IO and HL Essay works cannot be reused in Paper 2.",
            },
          ],
          hints: [
            "Apply: Eligible = Total Studied − IO works (2) − HL Essay work (1).",
            "Remember that neither IO works nor the HL Essay work can ever be reused in Paper 2.",
          ],
          solution: [
            "14 − 2 (IO) − 1 (HL Essay) = **11 eligible works**.",
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "paper2-comparative-prompts",
          question:
            "State whether Paper 2 is **open book** or **closed book** under IB FA2021 examination regulations.",
          answer: { type: "text", accept: ["closed book", "closed-book", "closed"], display: "closed book" },
          traps: [
            {
              spec: { type: "text", accept: ["open book", "open-book", "open"] },
              feedback: "No texts or notes are permitted inside the Paper 2 exam hall — it is strictly closed book.",
            },
          ],
          hints: [
            "Are candidates allowed to bring copies of their studied novels or plays into Paper 2?",
            "Think about why Paper 2 revision relies on memorised 2–6 word micro-quotations and structural pivots.",
          ],
          solution: [
            "Paper 2 is strictly **closed book** — candidates rely on conceptual mastery, structural knowledge, and concise memorised micro-quotations.",
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "rubric-mastery-crit-a-d",
          question:
            "On Paper 2 (30 marks total), what is the **combined maximum mark** of Criteria **C** and **D** together?",
          answer: { type: "number", value: 10, display: "10 marks" },
          traps: [
            {
              spec: { type: "number", value: 20 },
              feedback: "20 marks is Criteria A (10) + B (10). Criteria C (5) + D (5) total 10 marks.",
            },
            {
              spec: { type: "number", value: 15 },
              feedback: "Both C and D remain 5 marks each on Paper 2 (5 + 5 = 10).",
            },
          ],
          hints: [
            "Recall the Paper 2 split: A = 10, B = 10, C = 5, D = 5.",
            "Add only the maximum marks for Criterion C and Criterion D.",
          ],
          solution: [
            "Paper 2 Criterion C (5) + Criterion D (5) = **10 marks** (one-third of the 30-mark total).",
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p2-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Examine",
          guideRef: "paper2-comparative-prompts",
          marks: 4,
          question:
            "Unpack this unseen Paper 2 prompt using the 4-step deconstruction method:\n\n*'To what extent do two works you have studied portray nostalgia as a destructive illusion rather than a source of comfort?'*\n\nIdentify (1) the command demand, (2) two key tension words to define, (3) one hidden assumption to challenge, and (4) one form-based comparative angle.",
          hints: [
            "'To what extent' forbids a simplistic yes/no answer — look for the false binary 'destructive illusion rather than comfort'.",
            "Consider how different literary forms (e.g. retrospective narration vs dramatic staging) alter whether nostalgia feels seductive or hollow.",
          ],
          modelAnswer:
            "1. Command demand: 'To what extent' requires a nuanced, qualified judgement weighing where nostalgia genuinely comforts characters against where it paralyses or deceives them across both works. 2. Key tension words: 'destructive illusion' (self-deceiving idealisation that blocks moral growth) versus 'comfort' (emotional shelter or cultural continuity during displacement). 3. Hidden assumption to challenge: the binary phrase 'rather than' assumes comfort and destruction are mutually exclusive, whereas sophisticated works often show nostalgia comforting individuals in the moment precisely while eroding their agency over time. 4. Form-based comparative angle: contrasting how first-person retrospective prose can immerse readers inside seductive memory whereas theatrical staging exposes nostalgic props or delusions visually from an external vantage point.",
          markScheme: [
            {
              point: "Decodes 'To what extent' as requiring qualified weighing rather than binary agreement.",
              keywords: ["qualified", "weighing", "paralyses", "nuanced"],
            },
            {
              point: "Defines both conceptual poles ('destructive illusion' vs 'comfort' / shelter / continuity).",
              keywords: ["idealisation", "continuity", "shelter", "self-deceiving"],
            },
            {
              point: "Challenges the hidden either/or binary ('rather than' — showing comfort and erosion can coexist).",
              keywords: ["mutually exclusive", "binary", "coexist", "eroding"],
            },
            {
              point: "Proposes a medium/form-specific comparative lens (e.g. narrative retrospection vs visual theatrical exposure).",
              keywords: ["retrospective prose", "theatrical staging", "vantage point", "immerse"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "paper2-comparative-prompts",
          marks: 6,
          markbands: BAND_6M,
          question:
            "Using two illustrative works clearly labelled `[Example text — not a set text]` — Henrik Ibsen's play *A Doll's House* `[Example text — not a set text]` and Mary Shelley's novel *Frankenstein* `[Example text — not a set text]` — write ONE **integrated point-by-point comparative body paragraph** answering a Paper 2 prompt on *outsiders exposing the hypocrisy of dominant society*.",
          hints: [
            "Open with a conceptual comparative topic sentence naming BOTH works/writers.",
            "Compare their distinct literary forms (naturalist domestic staging vs nested epistolary/frame narration) using a precision pivot ('whereas', 'conversely').",
            "Keep the work balance close to 50/50 and end with a short evaluative synthesis.",
          ],
          modelAnswer:
            "Both Ibsen (`[Example text — not a set text]`) and Shelley (`[Example text — not a set text]`) deploy socially marginalised figures to strip respectable institutions of moral disguise, yet their contrasting literary forms direct audience judgement along markedly different paths. In *A Doll's House* `[Example text — not a set text]`, Krogstad's physical intrusion into the brightly lit Helmer parlour exploits naturalist staging and visual proxemics to shatter Torvald's illusion of bourgeois purity; when Krogstad reveals the forged signature, dramatic irony exposes how patriarchal law punishes Nora's devotion while rewarding Torvald's vanity. Conversely, Shelley's nested frame narrative in *Frankenstein* `[Example text — not a set text]` grants the Creature a strikingly eloquent central monologue — elevated diction contrasting violently with his grotesque exterior — forcing readers to confront Enlightenment society's revulsion at its own creation. Whereas Ibsen uses confined domestic theatre to trap spectators inside immediate bourgeois complicity, Shelley's layered narratorial mediation compels readers to test whose testimony deserves credibility, proving across both forms that moral monstrosity resides inside exclusionary power rather than on its margins.",
          markScheme: [
            {
              point: "Opens with a conceptual comparative claim linking both works and signalling formal divergence.",
              keywords: ["marginalised", "disguise", "contrasting literary forms", "judgement"],
            },
            {
              point: "Analyses dramatic craft in Ibsen (naturalist parlour staging, proxemics, dramatic irony).",
              keywords: ["naturalist", "proxemics", "dramatic irony", "patriarchal"],
            },
            {
              point: "Uses a precision comparative pivot ('Conversely', 'Whereas') rather than mechanical listing.",
              keywords: ["conversely", "whereas", "markedly different"],
            },
            {
              point: "Analyses prose narrative craft in Shelley (nested frame narrative, eloquent central voice vs physical exterior).",
              keywords: ["nested frame", "eloquent", "monologue", "enlightenment"],
            },
            {
              point: "Evaluates contrasting reader/spectator effects (domestic theatrical complicity vs testing narrative credibility).",
              keywords: ["complicity", "credibility", "spectators", "mediation"],
            },
            {
              point: "Closes with a cohesive conceptual synthesis balancing both texts.",
              keywords: ["monstrosity", "exclusionary", "margins", "proving"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "paper2-comparative-prompts",
          marks: 4,
          question:
            "Design a sustainable **Closed-Book Evidence Toolkit** for preparing a studied work for Paper 2, explaining **four** distinct categories of textual detail you should revise (and why long memorised block speeches are counterproductive).",
          hints: [
            "Think beyond quotations: structural pivots, recurring motifs/symbols, medium-specific craft signatures, and compact micro-quotations.",
            "Explain why memorising long 15-line speeches wastes revision time and encourages unanalysed quote-dumping.",
          ],
          modelAnswer:
            "First, memorise 12–15 short micro-quotations (2–6 words each) packed with ironic or figurative weight so they embed cleanly into any prompt without derailing essay focus. Second, map key structural pivots — the exact opening scene, major turning points, climactic reversal, and final image — to anchor macro-level Criterion A and B evaluation. Third, catalogue 4–5 signature form-specific craft choices (such as stage lighting and props in drama, or free indirect discourse and pacing in prose) so every paragraph evaluates authorial method rather than plot. Fourth, track evolving motifs and tonal shifts across the whole work to demonstrate nuanced progression. By contrast, memorising long 15-line block speeches consumes huge revision time and tempts candidates to dump irrelevant quotes unanalysed under exam pressure.",
          markScheme: [
            {
              point: "Category 1: 12–15 compact micro-quotations (2–6 words) that embed flexibly across prompts.",
              keywords: ["micro-quotations", "2–6 words", "embed", "figurative"],
            },
            {
              point: "Category 2: Exact structural pivots (opening, turning points, climax, ending).",
              keywords: ["structural pivots", "turning points", "climactic", "opening scene"],
            },
            {
              point: "Category 3: Form-specific authorial craft signatures (staging, focalisation, metre, etc.).",
              keywords: ["form-specific", "lighting", "free indirect", "authorial method"],
            },
            {
              point: "Category 4 + critique: Evolving motifs/tonal shifts, explaining why long block speeches waste time and invite unanalysed dumping.",
              keywords: ["evolving motifs", "dump", "unanalysed", "revision time"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "paper2-comparative-prompts",
          marks: 4,
          question:
            "A student drafts this Paper 2 outline for a prompt on *how secrets fracture trust*:\n\n- *Para 1–3: Plot summary and secrets in Work 1.*\n- *Para 4–6: Plot summary and secrets in Work 2.*\n- *Para 7: Conclusion noting both works contain secrets.*\n\nDiagnose **two** major rubric flaws and convert this block outline into a **3-movement integrated comparative blueprint**.",
          hints: [
            "Identify the block-by-block separation (capping Criteria A, B, C) and the plot-summary drift (starving Criterion B's 10 marks).",
            "Re-organise into 3 comparative movements: e.g. concealment/motives, craft/dramatic revelation, divergent aftermath.",
          ],
          modelAnswer:
            "Flaw 1: Block-by-block separation delays real comparison until the conclusion, capping comparative nuance in Criterion A and cohesion in Criterion C. Flaw 2: Relying on plot summary neglects evaluative craft analysis, forfeiting Criterion B's crucial 10-mark weighting. Integrated 3-Movement Redesign: Movement 1 — The architecture of concealment (comparing why characters withhold truth and how each writer's form, such as unreliable narration versus stage subtext, implicates the audience differently). Movement 2 — Fissures under pressure (evaluating how recurring motifs, props, or syntactic evasions betray hidden guilt across both texts). Movement 3 — Divergent reckonings (contrasting whether exposure triggers cathartic liberation or permanent alienation, and how each ending shapes final reader judgement).",
          markScheme: [
            {
              point: "Diagnoses block-by-block delay capping comparative depth (Criteria A and C).",
              keywords: ["delays", "capping", "cohesion", "criterion c"],
            },
            {
              point: "Diagnoses plot-summary drift starving Criterion B's 10-mark craft evaluation.",
              keywords: ["10-mark", "craft analysis", "forfeiting", "criterion b"],
            },
            {
              point: "Designs Movement 1 & 2 around integrated conceptual lenses and form-specific craft.",
              keywords: ["concealment", "fissures", "subtext", "evasions"],
            },
            {
              point: "Designs Movement 3 around divergent endings/aftermath and reader impact.",
              keywords: ["divergent reckonings", "cathartic", "alienation", "reader judgement"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "paper2-comparative-prompts",
          marks: 4,
          question:
            "Explain the IB **non-overlap work rule** across **SL** and **HL**, including the minimum number of distinct works assessed across coursework and Paper 2 at each level and why strategic DP2 work-mapping prevents exam-day crises.",
          hints: [
            "Count distinct assessed works: SL = 2 (IO) + 2 (Paper 2) = 4; HL = 2 (IO) + 1 (HL Essay) + 2 (Paper 2) = 5.",
            "Remember the smart strategy of revising 3 versatile non-overlap works for Paper 2.",
          ],
          modelAnswer:
            "Under IB English A: Literature regulations, no literary work analysed in the Individual Oral (2 works) or the HL Essay (1 work, HL only) may ever be reused in Paper 2 (2 works). Consequently, SL candidates must draw on at least 4 completely distinct assessed works from their minimum 9 studied texts, while HL candidates require at least 5 distinct assessed works from their minimum 13 studied texts. Mapping coursework choices early in DP2 ensures students do not accidentally lock away their two most flexible comparative texts inside the IO or HL Essay. Reserving three versatile, non-overlapping candidate works across varied themes or forms for Paper 2 guarantees a strong two-work pairing regardless of which four unseen prompts appear on exam day.",
          markScheme: [
            {
              point: "States clearly that IO works (2) and HL Essay work (1) are strictly barred from reuse in Paper 2.",
              keywords: ["reused", "individual oral", "hl essay", "regulations"],
            },
            {
              point: "Gives accurate distinct work totals for SL (4 distinct from ≥9) and HL (5 distinct from ≥13).",
              keywords: ["4 completely distinct", "5 distinct", "minimum 9", "minimum 13"],
            },
            {
              point: "Explains the risk of locking away the most versatile texts in coursework if unplanned.",
              keywords: ["lock away", "mapping", "coursework", "accidentally"],
            },
            {
              point: "Recommends reserving three non-overlapping Paper 2 backups for prompt flexibility.",
              keywords: ["three versatile", "non-overlapping", "four unseen", "pairing"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Justify",
          guideRef: "rubric-mastery-crit-a-d",
          marks: 6,
          markbands: BAND_6M,
          question:
            "Read this Band 3 comparative paragraph drafted for a Paper 2 essay on *memory and guilt*:\n\n*'Both writers use flashbacks to show the protagonists feel guilty about their pasts. In Work 1, the narrator remembers a childhood betrayal and this creates a dark mood. Similarly, in Work 2, a character has a flashback about abandoning his friend, which shows he regrets it too. Therefore, flashbacks are a very effective device in both books.'*\n\nDiagnose **three** rubric ceilings in this draft and rewrite it into a **Band 5 comparative craft evaluation** (you may keep generic labels Work 1 and Work 2, illustrating transferable analytical structure).",
          hints: [
            "Spot the generic claims ('dark mood', 'very effective device'), identical surface comparison ('similarly... too'), and vague verbs ('shows').",
            "Introduce divergence within similarity (e.g. involuntary fragmented analepsis vs curated self-justifying retrospection) and evaluate contrasting effects on readers.",
          ],
          modelAnswer:
            "Ceilings diagnosed: (1) Criterion A treats both works as flatly identical ('similarly... too') without interpreting subtle psychological divergence; (2) Criterion B labels 'flashbacks' without evaluating *how* temporal disruption shapes meaning, ending with empty praise ('very effective device'); (3) Criterion D relies on repetitive, imprecise phrasing ('shows', 'dark mood'). Band 5 Revision: While both writers disrupt linear chronology through analepsis to expose lingering moral culpability, each deploys temporal structure to elicit sharply contrasting reader judgements. In Work 1, sudden, fragmentary intrusions of childhood betrayal shatter the narrator's present-tense composure, trapping readers inside involuntary trauma and fostering uneasy compassion. Conversely, Work 2 frames retrospection through polished, self-exculpatory narration that revisits the abandonment selectively — exposing evasion rather than authentic contrition. By contrasting raw psychological haunting against curated self-defence, the two works reveal that memory can either pierce denial or subtly reinforce it.",
          markScheme: [
            {
              point: "Diagnoses Criterion A ceiling (flat identical comparison lacking nuance/divergence).",
              keywords: ["flatly identical", "psychological divergence", "criterion a"],
            },
            {
              point: "Diagnoses Criterion B ceiling (naming 'flashbacks' + generic 'dark mood / very effective').",
              keywords: ["empty praise", "temporal disruption", "criterion b"],
            },
            {
              point: "Diagnoses Criterion D ceiling (vague repetitive verbs and imprecise register).",
              keywords: ["imprecise", "repetitive", "criterion d"],
            },
            {
              point: "Rewrites using precise literary terminology ('analepsis', 'linear chronology') and divergence within similarity.",
              keywords: ["analepsis", "chronology", "culpability", "conversely"],
            },
            {
              point: "Evaluates contrasting formal mechanisms (fragmentary involuntary trauma vs curated self-exculpatory retrospection).",
              keywords: ["fragmentary", "involuntary trauma", "self-exculpatory", "contrition"],
            },
            {
              point: "Concludes with a sharp comparative synthesis on reader judgement and conceptual tension.",
              keywords: ["reader judgements", "pierce denial", "curated", "haunting"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p2-q12",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "paper2-comparative-prompts",
          marks: 6,
          markbands: BAND_6M,
          question:
            "Discuss how a Band 5 Paper 2 candidate integrates **context of production and reception** productively into a comparative essay without falling into a 'history-essay dump' or biographical fallacy.",
          hints: [
            "Explain the trap (standalone history paragraphs / assuming author biography dictates meaning).",
            "Show the Band 5 move: using cultural or historical tension strictly to illuminate specific literary choices and shifting audience reception across eras.",
          ],
          modelAnswer:
            "Top-band Paper 2 essays treat context strictly as an interpretive lens tethered to textual craft rather than a detached historical lecture. Devoting a whole paragraph to political timelines or speculating about an author's personal biography (intentional fallacy) dilutes Criterion C focus and contributes zero marks to Criterion B's ten-mark craft requirement. Instead, a Band 5 writer embeds concise contextual pressure directly inside stylistic analysis — showing, for example, how nineteenth-century bourgeois property laws sharpen the shock of a slammed stage door in *A Doll's House* `[Example text — not a set text]`, or how differing eras of reception shift audience sympathy toward a rebellious outsider. Furthermore, contrasting the divergent cultural conditions under which two works were produced explains *why* each writer selects distinct conventions, tones, or endings to interrogate a shared human tension. When context enters through specific authorial phrasing, staging, or structure, it deepens Criterion A's insight into larger implications while keeping literary evaluation firmly at the centre.",
          markScheme: [
            {
              point: "Identifies the twin traps of standalone history dumps and intentional/biographical fallacy.",
              keywords: ["intentional fallacy", "detached", "timelines", "speculating"],
            },
            {
              point: "Explains the rubric cost (diluting Criterion C focus and yielding zero Criterion B craft credit).",
              keywords: ["dilutes", "zero marks", "ten-mark", "criterion c"],
            },
            {
              point: "Shows how context of production should illuminate specific formal or stylistic choices.",
              keywords: ["tethered", "property laws", "slammed", "stylistic analysis"],
            },
            {
              point: "Incorporates context of reception (how later or cross-cultural audiences reinterpret the work).",
              keywords: ["reception", "sympathy", "rebellious", "audience"],
            },
            {
              point: "Links contrasting cultural conditions between two works to divergent literary conventions/endings.",
              keywords: ["divergent cultural", "conventions", "interrogate", "shared human"],
            },
            {
              point: "Synthesises how anchored context elevates Criterion A implications without displacing literary evaluation.",
              keywords: ["anchored", "implications", "displacing", "deepens"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p2-q13",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "paper1-hl-two-passages",
          marks: 6,
          markbands: BAND_6M,
          question:
            "Compare the **strategic mental demands** of **HL Paper 1 (2h 15m, 2 unseen passages, 35%)** against **HL Paper 2 (1h 45m, 2 studied works, 25%)**, evaluating how a candidate must adapt their planning, evidence use, and rubric priorities across the two exams.",
          hints: [
            "Compare: unseen micro close-reading + rapid form-switching (P1) vs closed-book whole-work comparative synthesis + double-weighted A/B (P2).",
            "Contrast timing splits (65+65+5 vs 15+80+10) and equal A5/B5/C5/D5 weighting vs A10/B10/C5/D5.",
          ],
          modelAnswer:
            "Although both external papers demand conceptual rather than descriptive thinking, HL Paper 1 and HL Paper 2 test sharply distinct cognitive workflows. HL Paper 1 (135 minutes, 35% weighting) tests rapid unseen agility across two separate literary forms: candidates must enforce a hard 65 + 65 + 5 minute split, switch formal toolkits cleanly at minute 65, and mine rich micro-evidence printed right on the exam sheet. Because each 20-mark Paper 1 essay weights Criteria A, B, C, and D evenly (5 marks each), organisation and precision prose carry half the score alongside interpretation and craft. By contrast, HL Paper 2 (105 minutes, 25% weighting) requires closed-book macro synthesis across two whole studied works in a single sustained comparative arc (15 min matrix + 80 min integrated drafting + 10 min audit). Crucially, Paper 2 doubles Criteria A and B to 10 marks each (66.7% combined), meaning sustained comparative craft evaluation and disciplined recall of micro-quotations and structural pivots become paramount.",
          markScheme: [
            {
              point: "Contrasts exam weightings and durations accurately (HL P1: 135m/35% vs HL P2: 105m/25%).",
              keywords: ["135 minutes", "35%", "105 minutes", "25%"],
            },
            {
              point: "Evaluates HL Paper 1's core cognitive demand (unseen micro close-reading + minute-65 form-toolkit switching).",
              keywords: ["agility", "65 + 65 + 5", "toolkits", "minute 65"],
            },
            {
              point: "Evaluates HL Paper 2's core cognitive demand (closed-book whole-work integrated comparative synthesis).",
              keywords: ["closed-book", "macro synthesis", "integrated drafting", "matrix"],
            },
            {
              point: "Contrasts evidence mechanics (printed passages on P1 vs recalled micro-quotations and structural pivots on P2).",
              keywords: ["printed", "micro-quotations", "structural pivots", "recall"],
            },
            {
              point: "Contrasts rubric weightings (P1 even A5/B5/C5/D5 vs P2 doubled A10/B10 = 66.7%).",
              keywords: ["evenly", "66.7%", "doubles", "paramount"],
            },
            {
              point: "Sustains clear, comparative evaluative register throughout.",
              keywords: ["workflows", "sustained", "contrasting", "conversely"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Examine",
          guideRef: "paper2-comparative-prompts",
          marks: 8,
          markbands: BAND_8M,
          question:
            "Read this unseen Paper 2 prompt:\n\n*'How and to what effect do two works you have studied use irony or contrast to expose the gap between ambition and reality?'*\n\nDraft a complete **Paper 2 Comparative Planning Matrix** (Thesis + 3 Integrated Comparative Movements + Conclusion angle) using two illustrative works clearly stamped `[Example text — not a set text]` (for example, F. Scott Fitzgerald's *The Great Gatsby* `[Example text — not a set text]` and Arthur Miller's *Death of a Salesman* `[Example text — not a set text]`, OR any two non-overlapping works clearly marked `[Example text — not a set text]`).",
          hints: [
            "Ensure every movement compares BOTH works on shared conceptual terrain AND highlights medium-specific craft (e.g. lyrical retrospective prose vs expressionist staging).",
            "Include specific closed-book micro-evidence (e.g. green light, valley of ashes, stockings, flute melody, wire recorder) and evaluate divergent reader/audience effects.",
          ],
          modelAnswer:
            "Comparative Thesis: While both Fitzgerald's *The Great Gatsby* `[Example text — not a set text]` and Miller's *Death of a Salesman* `[Example text — not a set text]` weaponise structural contrast and dramatic irony to dismantle the myth of effortless self-invention, Fitzgerald's nostalgic first-person narration seduces readers into Gatsby's romantic glamour before exposing its corruption, whereas Miller's expressionist staging fractures domestic space onstage to confront audiences directly with Willy Loman's psychological disintegration. Movement 1 — Seductive emblems versus squalid materiality: juxtapose Gatsby's glowing 'green light' and lavish parties against the barren 'valley of ashes' (lyrical symbolic contrast) alongside Willy's soaring pastoral flute motif interrupted by towering 'angular shapes' of encroaching apartment blocks (theatrical soundscape and lighting). Movement 2 — Dramatic irony exposing hollow self-mythology: contrast Nick's retrospective scepticism toward Gatsby's invented pedigree ('Oxford man') with Miller's overlapping time-shifts and the silk stockings prop, where spectators witness Biff's disillusionment shattering Willy's boastful domestic veneer. Movement 3 — Divergent tragic closures and ethical resonance: compare Gatsby's desolate funeral attended almost solely by Nick and 'Owl Eyes' (quiet elegiac irony) against Linda's stunned whisper 'We're free' over Willy's grave (devastating theatrical irony exposing debt outliving labour). Conclusion synthesis: across prose lyricism and stage expressionism alike, irony refuses cynical mockery, revealing that destructive ambition endures precisely because it hijacks deeply human longing for dignity.",
          markScheme: [
            {
              point: "Establishes a nuanced comparative thesis contrasting form, tone, and audience/reader positioning.",
              keywords: ["self-invention", "seduces", "expressionist", "disintegration"],
            },
            {
              point: "Labels illustrative published works clearly with `[Example text — not a set text]`.",
              keywords: ["example text", "fitzgerald", "miller"],
            },
            {
              point: "Movement 1 compares symbolic spatial contrasts with medium-specific evidence (green light/ashes vs flute/angular apartments).",
              keywords: ["green light", "valley of ashes", "flute", "angular shapes"],
            },
            {
              point: "Movement 2 evaluates irony and narrative/dramatic perspective (Nick's scepticism vs overlapping time-shifts/stockings).",
              keywords: ["retrospective scepticism", "pedigree", "time-shifts", "stockings"],
            },
            {
              point: "Movement 3 compares ironic endings and closed-book micro-quotations (desolate funeral vs Linda's 'We're free').",
              keywords: ["desolate funeral", "owl eyes", "we're free", "outliving labour"],
            },
            {
              point: "Evaluates medium-specific craft divergence (lyrical prose narration vs visual/auditory stagecraft).",
              keywords: ["soundscape", "lyricism", "stagecraft", "veneer"],
            },
            {
              point: "Maintains balanced 50/50 integrated comparison across every single movement.",
              keywords: ["alongside", "contrast", "compare", "juxtapose"],
            },
            {
              point: "Lands an insightful synthesis conclusion capturing tragic human complexity rather than reductive moralising.",
              keywords: ["cynical mockery", "hijacks", "dignity", "longing"],
            },
          ],
        },
        {
          id: "7-paper1-paper2-mastery-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "paper2-comparative-prompts",
          marks: 30,
          markbands: PAPER2_30M_MARKBANDS,
          question:
            "**FULL AUTHENTIC IB PAPER 2 COMPARATIVE ESSAY TASK (30 Marks · Official Rubric A10 / B10 / C5 / D5 · Closed Book)**\n\n**Unseen Prompt:** *\"Works of literature often reveal how physical spaces confine, shape, or quietly liberate the inner lives of those who inhabit them.\" Compare and contrast how and to what effect physical spaces are presented in two works you have studied.*\n\nWrite a complete, integrated Band 5 comparative essay (using two illustrative works stamped `[Example text — not a set text]`, demonstrating transferable closed-book structure, micro-quotations, structural pivots, and form comparison that you can adapt to your own non-overlapping studied works).",
          hints: [
            "Interrogate the prompt's tension: domestic interiors advertised as protective sanctuaries often operate as sites of surveillance and infantilisation.",
            "Demonstrate integrated point-by-point comparison across two distinct forms — e.g. Henrik Ibsen's naturalist drama *A Doll's House* `[Example text — not a set text]` and Charlotte Perkins Gilman's epistolary/diary short prose *The Yellow Wallpaper* `[Example text — not a set text]`.",
            "Weave both works into every body movement with ~50/50 balance, comparing theatrical props/doors/lighting against unreliable first-person focalisation, motif escalation, and divergent endings.",
          ],
          modelAnswer:
            "Domestic interiors are conventionally equated with safety and autonomy, yet literature repeatedly dismantles that comforting assumption by revealing how architecture encodes social hierarchy. Both Henrik Ibsen's naturalist play *A Doll's House* `[Example text — not a set text]` and Charlotte Perkins Gilman's psychological prose fiction *The Yellow Wallpaper* `[Example text — not a set text]` transform respectable nineteenth-century rooms into emblems of patriarchal containment that distort female selfhood. Yet while both writers expose how spatial confinement erodes psychological agency, their divergent literary forms produce sharply contrasting trajectories of liberation: Ibsen's static bourgeois parlour relies on visible stage boundaries and external doors to culminate in decisive public departure, whereas Gilman's claustrophobic attic nursery employs escalating first-person diary narration so that escape arrives only through harrowing mental fracture.\n\nFrom their openings, both writers construct domestic space as a deceptive sanctuary whose decorative polish masks subtle surveillance and infantilisation. Ibsen sets his entire three-act drama inside a single 'comfortably and tastefully' furnished drawing room; by restricting spectators to one unchanging box set, the playwright visually mimics the circumscribed horizons permitted to middle-class wives. Within this curated parlour, spatial hierarchy is immediately enforced through offstage territory: Torvald's private study represents masculine economic authority, while Nora's playful hiding of forbidden 'macaroons' turns her own home into an arena of furtive performance. Analogously, Gilman's narrator arrives at an 'ancestral hall' marketed as restorative retreat, yet her physician husband John relegates her to an upstairs 'nursery' equipped with 'barred' windows, metal 'rings' in the walls, and a bed 'nailed' immovably to the floor. Whereas Ibsen uses realist theatrical furnishings to lull contemporary nineteenth-century audiences into recognising polite normality before destabilising it, Gilman deploys Gothic architectural undertones from the outset, generating acute dramatic irony as the narrator struggles to reconcile John's affectionate endearments with carceral hardware.\n\nAs psychological pressure mounts, both authors animate physical props and shifting light to externalise interior claustrophobia, though their narrative and performative mediums position audiences differently. In *A Doll's House* `[Example text — not a set text]`, the locked letterbox positioned visibly on the hall door acts as an acoustic and spatial countdown; every glance Nora casts toward that glass-fronted box tightens theatrical suspense, culminating in the frantic 'tarantella' rehearsal where violent bodily choreography fractures the neat symmetry of Torvald's parlour. Spectators observe Nora's terror from an external vantage point, witnessing how physical movement strains against social decorum. Conversely, *The Yellow Wallpaper* `[Example text — not a set text]` eliminates external witnesses entirely: Gilman's epistolary journal format narrows psychic distance until the room's 'sprawling flamboyant' wallpaper mutates under shifting 'moonlight' into vertical 'bars' imprisoning a creeping figure. As the narrator's syntax fragments into breathless, staccato paragraphs and compulsive repetition ('creeping', 'peeled'), the prose mimics cognitive unravelling from within. Where Ibsen's stagecraft makes confinement publicly legible through choreography and visible thresholds, Gilman's unreliable focalisation traps readers inside sensory obsession, forcing complicity in her distorted perception.\n\nCrucially, the two works diverge most provocatively in how spatial thresholds resolve — or complicate — the prompt's possibility of liberation. In Ibsen's climactic Act Three reversal, Nora strips off her 'fancy dress' costume, sits calmly opposite Torvald across the parlour table to reclaim intellectual parity, and finally exits through the front threshold. The offstage 'sound of a door shutting' reverberates far beyond the naturalist set: acoustic minimalism converts an ordinary architectural boundary into a historic indictment of bourgeois marriage, leaving audiences unsettled yet witnessing conscious, lucid agency. By stark contrast, Gilman denies her narrator any external threshold. By the story's harrowing finale, the narrator bolts the nursery door from the inside, throws the key onto the front path, and circles relentlessly along the wall's 'smooch', stepping directly over John's fainted body while claiming triumphantly to have 'got out at last'. That chilling verbal irony dismantles easy optimism: reclaiming power inside the locked attic costs rational coherence, exposing the tragic paradox that total institutional confinement can leave madness as the sole available protest.\n\nUltimately, neither Ibsen nor Gilman depicts physical space as neutral backdrop; rooms actively script obedience, silence, and resistance. By comparing naturalist theatrical staging with intimate psychological narration, we see how form shapes the ethical impact of spatial revolt: Ibsen's slamming door projects outward into public debate through lucid departure, while Gilman's torn wallpaper turns inward to haunt readers with the psychic toll of enforced domesticity. Together, both works prove that while architecture may regulate bodies for a season, the tension between imposed boundaries and inner consciousness inevitably fractures the illusion of tranquil containment.",
          markScheme: [
            // Criterion A (10 marks): Knowledge, understanding, comparative interpretation, implications, nuance
            {
              point: "[Crit A01] Interrogates the prompt's comforting assumption about domestic space (encoding hierarchy/containment).",
              keywords: ["encodes", "patriarchal containment", "deceptive sanctuary"],
            },
            {
              point: "[Crit A02] Formulates a nuanced comparative thesis pairing convergence (confinement) with sharp divergence (lucid departure vs mental fracture).",
              keywords: ["decisive public departure", "mental fracture", "trajectories"],
            },
            {
              point: "[Crit A03] Demonstrates accurate closed-book knowledge of Ibsen's opening spatial hierarchy (single drawing room, Torvald's study, macaroons).",
              keywords: ["drawing room", "macaroons", "private study", "circumscribed"],
            },
            {
              point: "[Crit A04] Demonstrates accurate closed-book knowledge of Gilman's nursery architecture ('barred' windows, wall 'rings', 'nailed' bed).",
              keywords: ["ancestral hall", "barred", "nailed", "carceral"],
            },
            {
              point: "[Crit A05] Interprets Nora's crisis and 'tarantella' as physical strain against bourgeois decorum.",
              keywords: ["tarantella", "decorum", "letterbox", "countdown"],
            },
            {
              point: "[Crit A06] Interprets the mutating wallpaper under 'moonlight' as projected female imprisonment.",
              keywords: ["moonlight", "creeping", "imprisoning", "unravelling"],
            },
            {
              point: "[Crit A07] Analyses Ibsen's Act Three reversal (shedding costume, reclaiming table parity, slamming door as lucid agency).",
              keywords: ["fancy dress", "intellectual parity", "lucid agency", "indictment"],
            },
            {
              point: "[Crit A08] Analyses Gilman's ironic ending (bolted door, thrown key, 'smooch', stepping over John, 'got out at last').",
              keywords: ["smooch", "fainted", "got out at last", "rational coherence"],
            },
            {
              point: "[Crit A09] Evaluates the tragic paradox of liberation vs madness (challenging simple triumph).",
              keywords: ["tragic paradox", "sole available protest", "optimism", "chilling"],
            },
            {
              point: "[Crit A10] Integrates contextual awareness (nineteenth-century bourgeois marriage/domesticity) strictly in service of interpretation.",
              keywords: ["bourgeois", "nineteenth-century", "enforced domesticity", "public debate"],
            },
            // Criterion B (10 marks): Analysis and evaluation of authorial/formal choices & comparative craft
            {
              point: "[Crit B01] Evaluates Ibsen's unchanging single box set visually mimicking social restriction.",
              keywords: ["box set", "unchanging", "visually mimics", "furnishings"],
            },
            {
              point: "[Crit B02] Contrasts Ibsen's naturalist realism with Gilman's Gothic architectural undertones.",
              keywords: ["gothic", "undertones", "lull", "destabilising"],
            },
            {
              point: "[Crit B03] Evaluates dramatic irony in Gilman (John's affectionate language clashing with carceral room features).",
              keywords: ["endearments", "reconcile", "acute dramatic irony", "hardware"],
            },
            {
              point: "[Crit B04] Analyses theatrical props and visual choreography (glass-fronted letterbox, frantic dance shattering symmetry).",
              keywords: ["choreography", "glass-fronted", "symmetry", "stagecraft"],
            },
            {
              point: "[Crit B05] Contrasts external theatrical spectatorship in Drama against eliminated witnesses in diary Prose.",
              keywords: ["vantage point", "eliminates external witnesses", "spectators", "publicly legible"],
            },
            {
              point: "[Crit B06] Evaluates Gilman's epistolary journal narrowing psychic distance and deploying unreliable focalisation.",
              keywords: ["epistolary", "psychic distance", "unreliable focalisation", "complicity"],
            },
            {
              point: "[Crit B07] Analyses syntactic fragmentation and compulsive lexical repetition mirroring cognitive breakdown.",
              keywords: ["staccato", "syntax fragments", "compulsive repetition", "peeled"],
            },
            {
              point: "[Crit B08] Evaluates acoustic minimalism of Ibsen's offstage slamming door.",
              keywords: ["acoustic minimalism", "reverberates", "door shutting", "offstage"],
            },
            {
              point: "[Crit B09] Evaluates bitter verbal irony in Gilman's closing claim of escape inside a bolted room.",
              keywords: ["verbal irony", "bolts", "external threshold", "dismantles"],
            },
            {
              point: "[Crit B10] Synthesises across both mediums how form determines ethical and emotional impact on readers/audiences.",
              keywords: ["script obedience", "ethical impact", "haunt", "psychic toll"],
            },
            // Criterion C (5 marks): Focus, balance, integrated comparative organisation
            {
              point: "[Crit C01] Sustains explicit focus on the unseen prompt's core terms (confine, shape, liberate) throughout.",
              keywords: ["spatial confinement", "spatial thresholds", "spatial revolt"],
            },
            {
              point: "[Crit C02] Uses strict integrated point-by-point structure across all three body movements (zero block drift).",
              keywords: ["analogously", "conversely", "by stark contrast", "whereas"],
            },
            {
              point: "[Crit C03] Maintains balanced ~50/50 coverage of both works in every paragraph.",
              keywords: ["both writers", "both authors", "together, both"],
            },
            {
              point: "[Crit C04] Develops a cumulative argument progressing from deceptive containment → escalating crisis → divergent thresholds.",
              keywords: ["from their openings", "as psychological pressure", "crucially"],
            },
            {
              point: "[Crit C05] Concludes with cohesive comparative synthesis rather than summary repetition.",
              keywords: ["neutral backdrop", "tranquil containment", "regulate bodies"],
            },
            // Criterion D (5 marks): Language clarity, precision, register, embedded quotations, variety
            {
              point: "[Crit D01] Embeds crisp 2–5 word closed-book micro-quotations grammatically inside analytical clauses.",
              keywords: ["sprawling flamboyant", "comfortably and tastefully", "furtive"],
            },
            {
              point: "[Crit D02] Deploys surgical analytical verbs ('dismantles', 'relegates', 'externalise', 'fractures', 'reverberates').",
              keywords: ["relegates", "externalise", "fractures", "dismantles"],
            },
            {
              point: "[Crit D03] Sustains formal, varied, incisive academic register without filler.",
              keywords: ["infantilisation", "provocatively", "harrowing", "circumscribed"],
            },
            {
              point: "[Crit D04] Applies form-specific literary terminology accurately across Drama and Prose Fiction.",
              keywords: ["naturalist", "thresholds", "focalisation", "journal"],
            },
            {
              point: "[Crit D05] Clearly stamps illustrative named works `[Example text — not a set text]` with total clarity.",
              keywords: ["example text", "ibsen", "gilman"],
            },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 Qs — ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "7-paper1-paper2-mastery-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "paper1-hl-two-passages",
      question:
        "An HL candidate starts Paper 1 at **09:00** (135 min) and accidentally overruns Essay 1 until **10:18** (78 minutes). If they still preserve a **5-minute** final proofread buffer and a full **15-minute** conceptual plan for Essay 2, how many minutes remain strictly for **writing** Essay 2?",
      answer: { type: "number", value: 37, display: "37 minutes" },
      traps: [
        {
          spec: { type: "number", value: 57 },
          feedback: "57 minutes is the total time remaining after 10:18 — subtract 15 min for Essay 2 planning and 5 min for proofreading!",
        },
        {
          spec: { type: "number", value: 42 },
          feedback: "Don't forget to subtract the 5-minute final proofread buffer as well as the 15-minute planning window.",
        },
      ],
      hints: [
        "Total HL Paper 1 duration is 135 minutes. Subtract the 78 minutes spent on Essay 1 first.",
        "Then subtract 15 minutes (planning Essay 2) and 5 minutes (proofreading buffer) from the remaining 57 minutes.",
      ],
      solution: [
        "Remaining time after minute 78: 135 − 78 = 57 minutes.",
        "Subtract 15 min (Essay 2 conceptual plan) and 5 min (final buffer): 57 − 15 − 5 = **37 minutes** (down from the ideal 50 minutes — proving why the minute-65 hard stop is critical!).",
      ],
    },
    {
      id: "7-paper1-paper2-mastery-ch-q02",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "rubric-mastery-crit-a-d",
      marks: 6,
      markbands: BAND_6M,
      question:
        "Read this unseen **Literary Non-Fiction** speech excerpt:\n\n*They tell us to be grateful for the bridge—look at its steel arches, its four smooth lanes!—yet nobody counted the river-ferrymen whose jetties were bulldozed before the ribbon was cut. Progress loves an aerial photograph; it never stands at water level.*\n\nEvaluate how **rhetorical punctuation, shifting visual perspective, and ironic personification** dismantle official narratives of modernisation (Band 5 Criteria A, B, and D).",
      hints: [
        "Examine the parenthetical exclamation framed by em-dashes mimicking promotional enthusiasm, followed by the blunt pivot 'yet'.",
        "Evaluate the closing spatial contrast between 'aerial photograph' (detached bureaucratic power) and 'water level' (lived human cost).",
      ],
      modelAnswer:
            "The orator exposes state modernisation as selective spectacle rather than shared prosperity by pitting celebratory civic rhetoric against erased working-class livelihoods. Ventriloquising official pride inside emphatic em-dashes ('look at its steel arches, its four smooth lanes!') mimics promotional boosterism before the abrupt concessive pivot 'yet' punctures that spectacle with harsh passive violence ('bulldozed') preceding ceremonial pageantry ('before the ribbon was cut'). Crucially, the speaker deploys biting personification in the closing aphorism — 'Progress loves an aerial photograph; it never stands at water level' — splitting perspective along a vertical axis of power. An 'aerial' vantage flattens human displacement into sleek geometry, whereas 'water level' restores tactile, embodied witness among vanished 'river-ferrymen'. Through tightly balanced antithesis and surgical syntactic compression, the speech implicates listeners in questioning whose losses remain invisible beneath triumphant civic symmetry.",
      markScheme: [
        {
          point: "Interprets overarching tension (official celebratory modernisation masking working-class erasure).",
          keywords: ["spectacle", "erased", "livelihoods", "prosperity"],
        },
        {
          point: "Analyses ventriloquised em-dash exclamation mimicking boosterism, punctured by 'yet'.",
          keywords: ["ventriloquising", "boosterism", "em-dashes", "punctures"],
        },
        {
          point: "Evaluates ironic timing/juxtaposition between 'bulldozed' and ceremonial 'ribbon was cut'.",
          keywords: ["pageantry", "passive violence", "preceding", "ceremonial"],
        },
        {
          point: "Analyses personification of 'Progress' and vertical spatial antithesis ('aerial' vs 'water level').",
          keywords: ["vertical", "aphorism", "geometry", "antithesis"],
        },
        {
          point: "Evaluates ethical/rhetorical impact on listeners (implicating audience in questioning selective visibility).",
          keywords: ["implicates", "embodied witness", "displacement", "triumphant"],
        },
        {
          point: "Sustains concise, incisive academic register and embedded micro-quotations.",
          keywords: ["orator", "compression", "flattens", "symmetry"],
        },
      ],
    },
    {
      id: "7-paper1-paper2-mastery-ch-q03",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Examine",
      guideRef: "paper2-comparative-prompts",
      marks: 8,
      markbands: BAND_8M,
      question:
        "Examine why a Paper 2 candidate who writes *'Both works agree completely with the prompt'* almost always caps Criterion A in Band 3, and demonstrate how to craft a **counter-intuitive, tension-rich comparative thesis** for this unseen prompt:\n\n*'Literature demonstrates that truth always liberates those who uncover it.'*",
      hints: [
        "Challenge the absolute adverb 'always' and unpack whether 'liberation' can coexist with alienation, ruin, or moral paralysis.",
        "Demonstrate with two illustrative works stamped `[Example text — not a set text]` (e.g. Sophocles's *Oedipus Rex* `[Example text — not a set text]` and Henrik Ibsen's *A Doll's House* `[Example text — not a set text]`, showing sharp tragic vs modern divergence!).",
      ],
      modelAnswer:
            "Agreeing obediently with an absolute prompt claim ('always liberates') caps Criterion A because it flattens literary complexity into mechanical confirmation rather than interrogating the proposition's limits. Top-band IB examiners look for persuasive critical nuance: showing where a claim holds, where texts resist or invert it, and how differing genres or cultural contexts complicate moral outcomes. In this prompt, the absolute adverb 'always' is a deliberate invitation to test whether uncovering truth frees characters or annihilates their illusions. Model Band 5 Thesis: *Far from confirming that truth universally liberates, Sophocles's *Oedipus Rex* `[Example text — not a set text]` and Henrik Ibsen's *A Doll's House* `[Example text — not a set text]` expose discovery as a perilous threshold whose outcome depends on agency and genre: whereas Ibsen's naturalist domestic drama transforms painful disillusionment into Nora's austere, conscious autonomy, Sophocles's classical tragedy wields relentless dramatic irony and anagnorisis so that full self-knowledge shatters Oedipus into self-blinding exile — revealing that truth liberates only when individuals retain social or existential space to remake themselves.* By contesting 'always' and juxtaposing classical fatalism against modern self-determination, this thesis immediately secures Band 5 Criterion A insight and opens rich Criterion B formal comparison across choral/tragic staging versus bourgeois naturalism.",
      markScheme: [
        {
          point: "Explains why obedient agreement flattens complexity and caps Criterion A in mid-band.",
          keywords: ["flattens", "mechanical confirmation", "limits", "obediently"],
        },
        {
          point: "Pinpoints the absolute prompt trigger ('always') as an invitation to contest/qualify.",
          keywords: ["absolute adverb", "annihilates", "perilous", "contesting"],
        },
        {
          point: "Formulates a thesis explicitly challenging universal liberation with clear conceptual nuance.",
          keywords: ["universally", "threshold", "remake", "agency"],
        },
        {
          point: "Clearly stamps illustrative named works `[Example text — not a set text]`.",
          keywords: ["example text", "sophocles", "ibsen"],
        },
        {
          point: "Contrasts Ibsen's austere modern autonomy against Sophocles's shattering tragic anagnorisis.",
          keywords: ["autonomy", "anagnorisis", "self-blinding", "disillusionment"],
        },
        {
          point: "Links thematic divergence explicitly to literary genre/form (classical tragedy vs naturalist drama).",
          keywords: ["fatalism", "dramatic irony", "naturalist", "choral"],
        },
        {
          point: "Articulates a wider conceptual implication (liberation depends on social/existential space).",
          keywords: ["existential", "self-determination", "outcomes", "complicate"],
        },
        {
          point: "Sustains crisp academic register and seamless comparative syntax.",
          keywords: ["wields", "austere", "relentless", "juxtaposing"],
        },
      ],
    },
    {
      id: "7-paper1-paper2-mastery-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "rubric-mastery-crit-a-d",
      marks: 8,
      markbands: BAND_8M,
      question:
        "Act as a senior IB examiner moderating this excerpt from an unseen Paper 1 essay:\n\n*'In stanza 1, the speaker sees grey clouds which is pathetic fallacy and creates a sombre mood. Next, in stanza 2, there is enjambment on line 7 and a metaphor comparing grief to winter frost, which emphasises how lonely the speaker is and makes the reader sympathise deeply. Finally, stanza 3 ends with a short sentence that shows finality.'*\n\nAward a realistic band diagnosis across **Criteria A, B, C, and D**, justifying each judgement with exact rubric language and prescribing one concrete Band 5 fix per criterion.",
      hints: [
        "Diagnose Criteria A and B distinctly: A (surface literal summary — Band 2–3) and B (classic technique-spotting + generic effects — Band 2).",
        "Diagnose Criteria C and D distinctly: C (rigid chronological stanza 1/2/3 walkthrough — Band 2) and D (clear but vague verbs 'creates/emphasises/shows' — Band 3), giving one Band 5 fix each.",
      ],
      modelAnswer:
            "Criterion A (Band 2–3): the candidate grasps literal sorrow ('lonely', 'finality') accurately but never probes subtle implications, ironies, or why grief feels frozen rather than merely sad. Band 5 fix: articulate a central conceptual tension (e.g. emotional numbness as self-protection) supported by micro-quotations. Criterion B (Band 2): the paragraph exemplifies textbook technique-spotting — naming 'pathetic fallacy', 'enjambment', and 'metaphor' while attaching empty catch-alls ('sombre mood', 'sympathise deeply'). Band 5 fix: evaluate exact mechanisms — explain *which* words split across line 7's enjambment to enact emotional rupture and how 'winter frost' implies preservation alongside coldness. Criterion C (Band 2): mechanical chronological signposting ('In stanza 1... Next, in stanza 2... Finally, stanza 3') chains the essay to linear sequence rather than ideas. Band 5 fix: reorganise into conceptual movements that cross-link opening weather imagery with the closing sentence's abrupt restraint. Criterion D (Band 3): grammar is clear and intelligible, yet generic verbs ('creates', 'emphasises', 'shows') and cliché reader appeals blunt critical force. Band 5 fix: deploy surgical analytical verbs (*crystallises, fractures, arrests*) and integrate short quotations grammatically.",
      markScheme: [
        {
          point: "Diagnoses Criterion A accurately (literal surface grasp lacking subtle implications/nuance).",
          keywords: ["literal sorrow", "subtle implications", "numbness", "self-protection"],
        },
        {
          point: "Prescribes a concrete Criterion A Band 5 upgrade (conceptual tension + judicious micro-quotations).",
          keywords: ["conceptual tension", "micro-quotations", "ironies", "merely"],
        },
        {
          point: "Diagnoses Criterion B accurately (textbook technique-spotting + empty catch-all effects).",
          keywords: ["technique-spotting", "catch-alls", "empty", "naming"],
        },
        {
          point: "Prescribes a concrete Criterion B Band 5 upgrade (evaluating exact enjambment split and metaphor nuances).",
          keywords: ["exact mechanisms", "rupture", "preservation", "coldness"],
        },
        {
          point: "Diagnoses Criterion C accurately (mechanical chronological stanza-by-stanza signposting).",
          keywords: ["signposting", "linear sequence", "chains", "chronological"],
        },
        {
          point: "Prescribes a concrete Criterion C Band 5 upgrade (conceptual movements cross-linking opening and closing).",
          keywords: ["conceptual movements", "cross-link", "restraint", "reorganise"],
        },
        {
          point: "Diagnoses Criterion D accurately (intelligible grammar weakened by generic verbs and cliché appeals).",
          keywords: ["intelligible", "cliché", "blunt", "generic verbs"],
        },
        {
          point: "Prescribes a concrete Criterion D Band 5 upgrade (surgical analytical verbs and embedded syntax).",
          keywords: ["crystallises", "fractures", "arrests", "grammatically"],
        },
      ],
    },
    {
      id: "7-paper1-paper2-mastery-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "paper1-hl-two-passages",
      marks: 10,
      markbands: BAND_10M,
      question:
        "**[HL STRETCH] Rapid Two-Form Toolkit Switch Simulation (10 Marks)**\n\nYou have just hit minute 65 on HL Paper 1 after analysing a **Prose Fiction** extract. Below is **Passage 2** — an original unseen **Drama** micro-scene:\n\n*[A municipal waiting room under harsh overhead strip-lighting. Three bolted plastic chairs face a frosted-glass counter. SANA sits upright clutching a red cardboard folder to her ribs. Behind the glass, only a silhouette moves. A wall clock jumps from 16:58 to 16:59 with a loud metallic clack.]*\n*VOICE (muffled through glass): Next ticket.*\n*SANA: (glancing at the empty chairs, then rising slowly) Number fourteen. I've been waiting since nine.*\n*VOICE: Window closes at five. Re-apply online.*\n*[The frosted shutter slides down halfway, leaving only a two-inch slot of pale light across Sana's wrists. She does not move her folder.]*\n\n**Guiding Question:** *How do theatrical architecture, disembodied dialogue, and controlled movement dramatise bureaucratic indifference and quiet persistence?*\n\nDemonstrate a complete Band 5 **HL Passage 2 response** (conceptual thesis + 3 concise body movements + synthesis) proving total form-switch mastery into **Drama**.",
      hints: [
        "Activate pure Drama craft: fluorescent strip-lighting, bolted chairs, frosted glass/silhouette (dehumanising anonymity), metallic clock sound cue, muffled offstage-like voice, shutter lighting strip across wrists, and Sana's stillness.",
        "Organise conceptually (NEVER beat-by-beat): (1) Dehumanising institutional staging & obscured visibility; (2) Acoustic brutality & asymmetrical dialogue; (3) Framed lighting & embodied stillness as resistance.",
      ],
      modelAnswer:
            "Stepping squarely into live theatrical space, the playwright turns an ordinary civic waiting room into a stark visual arena of institutional erasure — yet anchors quiet moral endurance in a single unyielding human gesture. By uniting dehumanising set design, muffled disembodied dialogue, and surgical lighting imagery, the scene dramatises how bureaucracy strips away individuality while proving that silent bodily presence refuses tidy dismissal.\n\nFirst, architectural staging and blocked sightlines visualise asymmetrical power before speech begins. Harsh 'overhead strip-lighting' eliminates warmth or privacy, while 'bolted plastic chairs' physically fix citizens into passive, regimented posture. Separating Sana from an obscured 'silhouette' behind 'frosted-glass' strips institutional authority of an accountable face; spectators watch her plead toward an opaque barrier rather than another human being, converting public service into impersonal enclosure.\n\nSecond, acoustic cues and clipped verbal exchange accelerate bureaucratic dismissal with brutal efficiency. The wall clock's 'loud metallic clack' punctuates the silence like a mechanical guillotine, foreshadowing the abrupt cutoff ('Window closes at five'). Reduced to a 'muffled' disembodied 'VOICE' barking procedural imperatives ('Next ticket', 'Re-apply online'), the clerk denies Sana conversational reciprocity even after she glances across 'empty chairs' — a stinging visual irony exposing that refusal stems from rigid rules rather than genuine scarcity of time.\n\nFinally, theatrical lighting and controlled stillness crystallise quiet defiance without melodrama. As the 'frosted shutter' drops halfway, slicing a narrow 'two-inch slot of pale light across Sana's wrists', the stage picture evokes handcuffs or prison bars, framing administrative indifference as subtle carceral violence. Yet Sana's closing stillness — refusing to lower the 'red cardboard folder' clutched 'to her ribs' — transforms vibrant colour and bodily poise into stubborn testimony: bureaucracy can lower its shutter, yet it cannot erase the human claim standing patiently before the glass.",
      markScheme: [
        {
          point: "Articulates a pure Drama conceptual thesis addressing theatrical space, erasure, and quiet persistence.",
          keywords: ["theatrical space", "arena", "unyielding", "tidy dismissal"],
        },
        {
          point: "Analyses lighting and fixed furniture ('strip-lighting', 'bolted plastic chairs') enforcing citizen passivity.",
          keywords: ["regimented", "passivity", "warmth", "fixed"],
        },
        {
          point: "Evaluates blocked sightlines ('frosted-glass', 'silhouette') removing accountable human faces.",
          keywords: ["sightlines", "opaque barrier", "accountable", "impersonal enclosure"],
        },
        {
          point: "Analyses acoustic sound design ('loud metallic clack') heightening mechanical temporal pressure.",
          keywords: ["acoustic cues", "guillotine", "foreshadowing", "cutoff"],
        },
        {
          point: "Evaluates disembodied dialogue ('VOICE', imperatives) denying conversational reciprocity.",
          keywords: ["imperatives", "reciprocity", "efficiency", "procedural"],
        },
        {
          point: "Interprets visual dramatic irony of 'empty chairs' exposing arbitrary rigidity over scarcity.",
          keywords: ["visual irony", "arbitrary", "rigid rules", "scarcity"],
        },
        {
          point: "Evaluates the closing shutter lighting strip across Sana's wrists evoking carceral confinement.",
          keywords: ["handcuffs", "prison bars", "carceral violence", "slicing"],
        },
        {
          point: "Interprets the symbolic colour/prop ('red cardboard folder' clutched to ribs) and stillness as stubborn resistance.",
          keywords: ["vibrant colour", "poise", "stubborn testimony", "clutched"],
        },
        {
          point: "Maintains conceptual 3-movement organisation completely free of prose-fiction carryover.",
          keywords: ["first,", "second,", "finally,"],
        },
        {
          point: "Sustains concise, evocative Band 5 register targeting live audience/spectator impact.",
          keywords: ["spectators", "crystallise", "melodrama", "asymmetrical"],
        },
      ],
    },
    {
      id: "7-paper1-paper2-mastery-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Contrast",
      guideRef: "paper2-comparative-prompts",
      marks: 6,
      markbands: BAND_6M,
      question:
        "Contrast how **same-form** Paper 2 pairings (e.g. two novels or two plays) and **cross-form** Paper 2 pairings (e.g. a play paired with a poetry collection or memoir) unlock Band 5 **Criterion B** marks differently — and explain one pitfall candidates must avoid in each.",
      hints: [
        "Same-form: highlights contrasting uses of shared conventions (e.g. naturalist vs expressionist staging) — pitfall: listing surface similarities without sharpening technique contrasts.",
        "Cross-form: highlights how medium itself alters intimacy, perspective, and reader role — pitfall: analysing each form in isolated silos rather than comparing how different tools produce convergent or divergent effects.",
      ],
      modelAnswer:
            "Neither same-form nor cross-form pairings receive preferential weighting from the IB, yet each generates Criterion B evaluation through a distinct comparative mechanism. A **same-form** pairing (such as two plays or two novels) excels at exposing how two writers bend or subvert identical medium conventions — for instance, contrasting claustrophobic naturalist staging against fragmented expressionist time-shifts to show how theatrical architecture shapes audience judgement. Its chief pitfall is falling into flat surface equivalence ('both playwrights use stage directions') without evaluating *divergent* aesthetic effects. Conversely, a **cross-form** pairing (such as a lyric poetry collection compared with a novel or drama) unlocks high-band Criterion B by foregrounding medium itself — evaluating how compressed poetic lineation and acoustic volta create intense interior subjectivity whereas dramatic proxemics or prose focalisation construct social distance. Its main pitfall is writing disconnected craft silos (discussing metre for Work 1 and dialogue for Work 2 without explaining how those contrasting tools resolve the same conceptual tension differently).",
      markScheme: [
        {
          point: "Clarifies IB policy: neither same-form nor cross-form is privileged inherently.",
          keywords: ["preferential", "neither", "mechanism"],
        },
        {
          point: "Explains same-form strength (contrasting how writers bend/subvert shared conventions).",
          keywords: ["subvert", "identical medium", "expressionist", "naturalist"],
        },
        {
          point: "Identifies same-form pitfall (flat surface equivalence without evaluating divergent effects).",
          keywords: ["equivalence", "flat surface", "divergent"],
        },
        {
          point: "Explains cross-form strength (foregrounding how distinct mediums alter subjectivity, intimacy, or distance).",
          keywords: ["foregrounding", "subjectivity", "social distance", "lineation"],
        },
        {
          point: "Identifies cross-form pitfall (isolated craft silos failing to compare tools against a shared conceptual tension).",
          keywords: ["silos", "disconnected", "contrasting tools", "shared conceptual"],
        },
        {
          point: "Sustains balanced evaluative comparison and precise academic register.",
          keywords: ["conversely", "excels", "unlocks", "aesthetic"],
        },
      ],
    },
    {
      id: "7-paper1-paper2-mastery-ch-q07",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "rubric-mastery-crit-a-d",
      question:
        "An **SL** candidate scores **16/20** on Paper 1 (35% weight), **24/30** on Paper 2 (35% weight), and **32/40** on the Individual Oral (30% weight). Calculate their exact weighted overall percentage across all three SL components.",
      answer: { type: "number", value: 80, display: "80%" },
      traps: [
        {
          spec: { type: "number", value: 72 },
          feedback: "72 is the unweighted raw mark sum (16 + 24 + 32 = 72 out of 90) — compute each component's percentage and apply the 35% / 35% / 30% weights!",
        },
      ],
      hints: [
        "Find each component's percentage first: 16/20 = 80%, 24/30 = 80%, 32/40 = 80%.",
        "Compute 0.35 × 80 + 0.35 × 80 + 0.30 × 80.",
      ],
      solution: [
        "Paper 1: 16 / 20 = 80% → 80 × 0.35 = 28%.",
        "Paper 2: 24 / 30 = 80% → 80 × 0.35 = 28%.",
        "Individual Oral: 32 / 40 = 80% → 80 × 0.30 = 24%.",
        "Total weighted score: 28 + 28 + 24 = **80%**.",
      ],
    },
    {
      id: "7-paper1-paper2-mastery-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "paper1-guiding-question-planning",
      marks: 8,
      markbands: BAND_8M,
      question:
        "Read this original unseen **Prose Fiction** ending (*The Winter Ferry*):\n\n*When the gangplank rose, the quay lamps shrank to pinpricks behind the spray. Tomas kept both hands in his coat pockets, feeling the brass house-key warm against his knuckles, though the cottage had already been sold to a builder from the mainland. Beside him, an elderly passenger complained that the crossing took twelve minutes longer since the new pier opened. Tomas nodded politely, watching the dark wake erase their white foam almost as soon as the propellers churned it.*\n\nEvaluate how **spatial recession, tactile irony, overheard banality, and closing aquatic imagery** resist melodrama while conveying bittersweet exile — explaining specifically why a Band 5 conclusion must honour this passage's unresolved restraint.",
      hints: [
        "Link four craft clusters conceptually: receding 'pinpricks' of home, the pocketed 'brass house-key' warming an empty claim, the stranger's mundane 'twelve minutes' remark, and the self-erasing 'dark wake'.",
        "Explain why a Band 5 conclusion avoids declaring 'Tomas is heartbroken forever' and instead synthesises quiet acceptance tangled with ongoing attachment.",
      ],
      modelAnswer:
            "Rather than staging departure as melodramatic weeping, the writer constructs quiet emotional exile through austere visual recession, tactile irony, and anti-climactic social interruption. As the 'gangplank' lifts and 'quay lamps' dwindle into 'pinpricks' veiled by 'spray', physical distance compresses an entire lived landscape into vanishing points of light, visually enacting erasure without explicit self-pity. Against that widening gulf, the intimate tactile detail of Tomas holding the 'brass house-key warm against his knuckles' generates poignant situational irony: body heat animates an obsolete token of belonging after legal ownership has already passed to a 'mainland' developer. Crucially, the adjacent passenger's trivial grumble about a 'twelve minutes longer' crossing punctures private grief with mundane social noise; Tomas's 'polite' nod externalises stoic containment, underscoring how public transit moves indifferently alongside private loss. Finally, the closing image of the 'dark wake' erasing 'white foam' almost instantaneously serves as an unsentimental objective correlative for transience — implying that departure leaves no permanent scar upon the water. Consequently, a Band 5 Paper 1 conclusion must refuse reductive melodrama ('he is devastated forever'), synthesising instead the passage's unresolved poise: attachment persists invisibly in the warm brass key even as outward motion carries Tomas smoothly beyond trace.",
      markScheme: [
        {
          point: "Articulates overarching aesthetic strategy (resisting melodrama through austere, restrained exile).",
          keywords: ["austere", "self-pity", "anti-climactic", "restrained"],
        },
        {
          point: "Analyses spatial recession ('gangplank', 'pinpricks', 'spray') compressing home into vanishing scale.",
          keywords: ["vanishing", "compresses", "recession", "widening gulf"],
        },
        {
          point: "Evaluates tactile situational irony of the warmed 'brass house-key' as an obsolete emblem of belonging.",
          keywords: ["obsolete", "situational irony", "animates", "belonging"],
        },
        {
          point: "Interprets the stranger's mundane 'twelve minutes' complaint and Tomas's polite nod as stoic isolation amid indifference.",
          keywords: ["stoic", "punctures", "indifferently", "social noise"],
        },
        {
          point: "Evaluates the closing 'dark wake' erasing 'white foam' as an unsentimental emblem/correlative of transience.",
          keywords: ["objective correlative", "transience", "permanent scar", "unsentimental"],
        },
        {
          point: "Explains explicitly why a Band 5 conclusion must reject reductive emotional summaries.",
          keywords: ["reductive", "devastated", "refuse", "poise"],
        },
        {
          point: "Synthesises the passage's unresolved dual tension (enduring inward attachment vs outward erasure).",
          keywords: ["invisibly", "outward motion", "beyond trace", "persists"],
        },
        {
          point: "Sustains surgical analytical verbs and concise Band 5 academic register throughout.",
          keywords: ["enacting", "externalises", "underscoring", "synthesising"],
        },
      ],
    },
  ],
};
