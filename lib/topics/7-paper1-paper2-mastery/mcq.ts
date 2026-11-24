import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1 (15 Qs) — Paper 1 Architecture, Guiding Questions & HL Pacing
  // answerIndex spread: [0:4, 1:4, 2:4, 3:3]
  // ===========================================================================
  {
    id: "7-paper1-paper2-mastery-m1",
    title: "MCQ Paper 1 — Paper 1 Planning, Guiding Questions & HL Pacing",
    level: "SL",
    questions: [
      {
        id: "7-paper1-paper2-mastery-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper1-guiding-question-planning",
        question:
          "Under the IB Diploma English A: Literature (First Assessment 2021) syllabus, what are the official duration, task requirement, and mark total for **Standard Level Paper 1**?",
        options: [
          "1 hour 15 minutes; analyse 1 of 2 unseen passages; 20 marks total.",
          "1 hour 45 minutes; analyse 1 of 2 unseen passages; 30 marks total.",
          "2 hours 15 minutes; analyse both unseen passages; 40 marks total.",
          "1 hour 15 minutes; compare 2 unseen passages; 25 marks total.",
        ],
        answerIndex: 0,
        hints: [
          "Recall how SL Paper 1 differs from HL Paper 1 in both time and number of passages analysed.",
          "Each single Paper 1 guided literary analysis is assessed across four 5-mark criteria (A, B, C, D).",
        ],
        explanation:
          "SL Paper 1 lasts 1 hour 15 minutes (75 minutes), requires analysing 1 of 2 unseen passages from different literary forms, and is marked out of 20 (5 marks each for Criteria A–D), weighing 35% of the SL grade.",
      },
      {
        id: "7-paper1-paper2-mastery-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "paper1-hl-two-passages",
        question:
          "How does **Higher Level Paper 1** differ from Standard Level Paper 1 in examination structure and total marks?",
        options: [
          "HL candidates write one comparative essay linking both unseen passages for 30 marks.",
          "HL candidates write two separate analyses in 2 hours 15 minutes for 40 marks total.",
          "HL candidates choose 1 of 3 unseen passages in 1 hour 45 minutes for 20 marks total.",
          "HL candidates analyse two extracts from the same literary form for 35 marks total.",
        ],
        answerIndex: 1,
        hints: [
          "Do HL candidates compare the two unseen passages or analyse each passage separately?",
          "Multiply the 20-mark Paper 1 rubric by the number of unseen essays required at HL.",
        ],
        explanation:
          "HL Paper 1 lasts 2 hours 15 minutes (135 minutes) and requires two separate guided literary analyses — one for each of the two unseen passages (drawn from two different literary forms), worth 2 × 20 = 40 marks (35% of the HL grade).",
      },
      {
        id: "7-paper1-paper2-mastery-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "paper1-guiding-question-planning",
        question:
          "Read this Paper 1 guiding question: *'How do shifts in narrative distance and sensory contrast expose the narrator's reluctant complicity?'* Which analytical breakdown most accurately separates its **craft anchor** from its **conceptual inquiry**?",
        options: [
          "Craft anchor: reluctant complicity; conceptual inquiry: shifts in narrative distance.",
          "Craft anchor: plot progression across paragraphs; conceptual inquiry: narrator's biography.",
          "Craft anchor: narrative distance and sensory contrast; conceptual inquiry: reluctant complicity.",
          "Craft anchor: historical setting of the extract; conceptual inquiry: sensory contrast.",
        ],
        answerIndex: 2,
        hints: [
          "The craft anchor names the technical or formal tools the writer manipulates.",
          "The conceptual inquiry names the thematic, tonal, or psychological meaning produced by those tools.",
        ],
        explanation:
          "Every guiding question pairs a technical craft anchor ('narrative distance and sensory contrast') with a conceptual inquiry ('the narrator's reluctant complicity'). Addressing both halves prevents plot summary and secures Criteria B and C.",
      },
      {
        id: "7-paper1-paper2-mastery-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "paper1-guiding-question-planning",
        question:
          "Why does organising a Paper 1 poetry analysis chronologically (*'In stanza 1... In stanza 2... In stanza 3...'*) typically prevent a candidate from reaching Band 5?",
        options: [
          "IB rules strictly forbid mentioning stanza numbers or line references in Paper 1.",
          "Examiners automatically deduct two marks whenever an essay has fewer than five paragraphs.",
          "Chronological analysis works only for drama extracts and never for lyric poetry.",
          "Walkthrough structure encourages plot paraphrase and blocks cross-textual conceptual synthesis.",
        ],
        answerIndex: 3,
        hints: [
          "Think about what happens to Criterion C (cohesive focus) when paragraph boundaries follow the poem's sequence rather than ideas.",
          "Consider how easily you can compare Line 1 with Line 18 inside a chronological walkthrough.",
        ],
        explanation:
          "Chronological paragraphing pulls essays into descriptive line-by-line paraphrase and makes it awkward to connect structural echoes between opening and closing lines, capping Criterion C and thinning Criterion A.",
      },
      {
        id: "7-paper1-paper2-mastery-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "paper1-guiding-question-planning",
        question:
          "Which topic sentence best exemplifies a **Band 5 conceptual Paper 1 opening** for an unseen prose extract about a family dismantling an heirloom dining table?",
        options: [
          "In the second paragraph, the narrator describes the dining table using visual imagery and metaphors.",
          "By contrasting ceremonial carpentry diction with blunt monosyllabic verbs, the writer exposes how inherited prestige fractures under economic necessity.",
          "Next, the author moves the setting to the hallway where the siblings argue loudly about moving the chairs.",
          "The writer uses several interesting literary devices in this extract to show that the family feels sad about selling the table.",
        ],
        answerIndex: 1,
        hints: [
          "Eliminate any opener anchored to paragraph sequence ('In the second paragraph', 'Next') or vague filler ('several interesting literary devices').",
          "Look for the sentence that links specific authorial craft directly to a conceptual tension.",
        ],
        explanation:
          "A Band 5 conceptual topic sentence names interlocking authorial mechanisms ('ceremonial carpentry diction' vs 'blunt monosyllabic verbs') and articulates the conceptual tension they produce ('inherited prestige fractures under economic necessity').",
      },
      {
        id: "7-paper1-paper2-mastery-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "paper1-guiding-question-planning",
        question:
          "Under official IB FA2021 guidelines, what is a candidate's exact freedom regarding the printed **guiding question** on Paper 1?",
        options: [
          "Candidates may propose an alternative technical or formal entry point of equivalent depth.",
          "Candidates must copy the guiding question verbatim as the first sentence of every paragraph.",
          "Candidates may ignore technical craft entirely and write a personal reflection on the theme.",
          "Candidates are penalised two marks on Criterion C unless they answer the printed wording.",
        ],
        answerIndex: 0,
        hints: [
          "Does the IB treat the guiding question as an immutable constraint or a guided entry point?",
          "Any alternative entry point must still focus on a technical or formal aspect that illuminates the passage as a whole.",
        ],
        explanation:
          "IB FA2021 rules allow candidates to choose either the printed guiding question or an alternative technical/formal entry point of comparable depth, though the printed question is usually the most efficient anchor.",
      },
      {
        id: "7-paper1-paper2-mastery-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Apply",
        guideRef: "paper1-hl-two-passages",
        question:
          "An HL candidate sits Paper 1 (135 minutes) and spends 88 minutes perfecting Passage 1 (scoring 18/20), leaving 47 minutes with no outline for Passage 2 (scoring 11/20). What strategic error caused the lower overall score?",
        options: [
          "Failing to merge both passages into a single unified comparative essay of 40 marks.",
          "Selecting two passages from different literary forms rather than two poems.",
          "Breaching the minute-65 hard stop, sacrificing Passage 2's planning window for minor gains.",
          "Spending too much time proofreading Passage 2 instead of lengthening Passage 1.",
        ],
        answerIndex: 2,
        hints: [
          "Compare marginal mark gain on Essay 1 (e.g. 16 → 18) against mark collapse on an unplanned Essay 2.",
          "Recall the 65 + 65 + 5 minute HL Paper 1 discipline.",
        ],
        explanation:
          "Overrunning minute 65 yields tiny diminishing returns on Essay 1 while starving Essay 2 of its 15-minute conceptual outline, causing severe drops across Criteria A, B, and C.",
      },
      {
        id: "7-paper1-paper2-mastery-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Apply",
        guideRef: "paper1-hl-two-passages",
        question:
          "On HL Paper 1, Passage 1 is a lyric poem and Passage 2 is a one-act **Drama** extract. At minute 65, which cluster of analytical features must the candidate immediately activate for Passage 2?",
        options: [
          "Iambic pentameter, rhyme scheme, stanza symmetry, and third-person omniscient narration.",
          "Free indirect discourse, analepsis, chapter pacing, and retrospective memoir persona.",
          "Rhetorical tricolon, empirical anecdote, editorial footnotes, and epistolary voice.",
          "Stage directions, proxemics, symbolic props, lighting cues, pauses, and subtext.",
        ],
        answerIndex: 3,
        hints: [
          "Drama is written to be performed in three-dimensional theatrical space before an audience.",
          "Eliminate poetic metre, prose focalisation, and non-fiction rhetoric.",
        ],
        explanation:
          "Effective HL form-switching treats a drama extract as a live performance script — foregrounding stage directions, proxemics, lighting/sound, symbolic props, pauses, and spoken subtext.",
      },
      {
        id: "7-paper1-paper2-mastery-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Outline",
        guideRef: "paper1-guiding-question-planning",
        question:
          "During the recommended **15-minute Paper 1 planning phase**, why should the first 3–4 minutes be a *cold read* without heavy highlighting?",
        options: [
          "IB exam invigilators prohibit holding any pen or highlighter during the first four minutes.",
          "Highlighting slows reading speed so much that you cannot finish a 35-line passage in time.",
          "Reading whole-text first lets you grasp the overarching tension, tonal shift, and ending before isolating details.",
          "Waiting to annotate ensures you copy out fewer quotations and rely on summary instead.",
        ],
        answerIndex: 2,
        hints: [
          "Think about what happens when you highlight line 1 before knowing the ironic twist in line 28.",
          "Good annotations serve a central conceptual tension rather than decorating every metaphor randomly.",
        ],
        explanation:
          "A cold read lets you see the passage's complete arc, tonal volta, and underlying irony first, ensuring your subsequent annotations cluster meaningfully around the central argument.",
      },
      {
        id: "7-paper1-paper2-mastery-m1-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "paper1-guiding-question-planning",
        question:
          "Read this unseen opening of a literary non-fiction essay: *'Every airport lounge promises weightlessness, yet the carpet remembers forty thousand dragged heels.'* Which thesis claim best captures its subtle tension?",
        options: [
          "By contrasting commercial promises of transcendence with tactile traces of exhaustion, the writer exposes modern transit as disguised labour.",
          "Through personification of the carpet and hyperbole about heels, the writer makes the airport setting sound vivid and engaging to readers.",
          "In the opening sentence, the writer describes an airport lounge carpet to explain why air travel has become crowded in recent decades.",
          "The essay argues simply that airport lounges should replace their carpets more frequently to maintain an atmosphere of comfort.",
        ],
        answerIndex: 0,
        hints: [
          "Notice the ironic pivot 'yet' between 'promises weightlessness' and 'forty thousand dragged heels'.",
          "Look for the thesis that moves beyond device-naming or literal summary to articulate a conceptual implication.",
        ],
        explanation:
          "A Band 5 thesis articulates the conceptual irony: polished rhetoric of effortless mobility ('weightlessness') is undercut by accumulated physical wear ('forty thousand dragged heels'), reframing transit as collective fatigue.",
      },
      {
        id: "7-paper1-paper2-mastery-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "paper1-hl-two-passages",
        question:
          "An HL Paper 1 exam begins at **13:30** (duration 2 hours 15 minutes). Following the strict **65 + 65 + 5** pacing model, at what exact clock time must the candidate execute the hard stop on Essay 1?",
        options: [
          "14:25, leaving 80 minutes remaining for Essay 2 and proofreading.",
          "14:35, leaving 65 minutes for Essay 2 and a 5-minute final buffer.",
          "14:45, splitting the exam into two equal 75-minute halves with no buffer.",
          "14:50, prioritising a complete Essay 1 before starting Essay 2.",
        ],
        answerIndex: 1,
        hints: [
          "Add exactly 65 minutes (1 hour and 5 minutes) to the start time of 13:30.",
          "Verify that 65 + 65 + 5 equals the full 135-minute HL duration ending at 15:45.",
        ],
        explanation:
          "13:30 + 65 minutes = 14:35. Stopping cleanly at 14:35 secures 14:35–15:40 (65 minutes) for Essay 2 and 15:40–15:45 (5 minutes) to polish both essays.",
      },
      {
        id: "7-paper1-paper2-mastery-m1-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Justify",
        guideRef: "paper1-hl-two-passages",
        question:
          "At minute 85 of HL Paper 1, fatigue sets in while drafting Essay 2 on an unseen **Literary Non-Fiction** memoir extract. Which structural adjustment best protects Band 5 quality without overrunning time?",
        options: [
          "Abandon the conceptual outline and paraphrase each remaining paragraph sequentially to reach three pages.",
          "Switch to listing five rhetorical devices rapidly per sentence without explaining their thematic effect.",
          "Omit the conclusion entirely so every remaining minute goes into copying longer block quotations.",
          "Commit to three dense, tightly argued conceptual movements using embedded micro-quotations and land a crisp synthesis conclusion.",
        ],
        answerIndex: 3,
        hints: [
          "Does the IB Paper 1 rubric reward sheer page count or focused, evaluative depth?",
          "Consider which choice preserves Criteria A, B, C, and D simultaneously under fatigue.",
        ],
        explanation:
          "Examiners reward conceptual precision and evaluative craft over length: three dense, well-supported analytical movements plus a cohesive conclusion protect all four criteria far better than sprawling paraphrase.",
      },
      {
        id: "7-paper1-paper2-mastery-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "paper1-guiding-question-planning",
        question:
          "Which method of integrating textual evidence best supports both **Criterion A** (judicious references) and **Criterion D** (precise, fluent style) in Paper 1?",
        options: [
          "Weaving 2–5 word micro-quotations grammatically into your own analytical clauses.",
          "Copying three-line standalone block quotations at the start of every body paragraph.",
          "Avoiding all direct quotations so that every idea is expressed purely in paraphrase.",
          "Listing ten single-word quotes in brackets at the end of each paragraph as proof.",
        ],
        answerIndex: 0,
        hints: [
          "Think about how sentence flow and analytical precision improve when quotations sit inside your grammatical syntax.",
          "Long copied blocks waste timed minutes and leave less space for evaluation.",
        ],
        explanation:
          "Embedding concise 2–5 word micro-quotations directly into analytical syntax proves close textual control, saves exam time, and elevates Criterion D fluency.",
      },
      {
        id: "7-paper1-paper2-mastery-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "paper1-hl-two-passages",
        question:
          "Why does the IB guarantee that the two unseen passages on **Paper 1** always come from **two different literary forms**?",
        options: [
          "To ensure SL candidates always avoid poetry and choose prose fiction instead.",
          "To assess breadth of formal agility across distinct mediums at HL and offer balanced form choice at SL.",
          "To allow HL candidates to combine both texts into one comparative essay on genre.",
          "To guarantee that one passage is always a work in translation and the other originally English.",
        ],
        answerIndex: 1,
        hints: [
          "Think about what HL candidates must demonstrate by writing on BOTH passages.",
          "Recall the four IB Literature forms: Poetry, Drama, Prose Fiction, and Literary Non-Fiction.",
        ],
        explanation:
          "Drawing the two passages from two different literary forms ensures SL candidates have a genuine choice of medium while requiring HL candidates to demonstrate transferable, form-specific mastery across distinct genres.",
      },
      {
        id: "7-paper1-paper2-mastery-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "paper1-guiding-question-planning",
        question:
          "What distinguishes a **Band 5 Paper 1 conclusion** from a repetitive Band 3 conclusion?",
        options: [
          "A Band 5 conclusion introduces a brand-new biographical fact about the author's childhood.",
          "A Band 5 conclusion repeats the introductory thesis sentence word-for-word to prove consistency.",
          "A Band 5 conclusion synthesises how the passage's craft leaves readers with a deepened or unresolved conceptual implication.",
          "A Band 5 conclusion lists every literary device mentioned in the essay in alphabetical order.",
        ],
        answerIndex: 2,
        hints: [
          "Avoid adding unsupported biographical speculation or mechanically copying your introduction.",
          "Think about how a strong conclusion zooms out to the passage's ultimate tonal or thematic resonance.",
        ],
        explanation:
          "A Band 5 conclusion neither introduces irrelevant new evidence nor parrots the introduction verbatim; it synthesises how the text's interlocking choices leave the reader confronting a nuanced or unresolved implication.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2 (15 Qs) — Paper 2 Comparative Prompts, Non-Overlap & Closed Book
  // answerIndex spread: [0:4, 1:4, 2:3, 3:4]
  // ===========================================================================
  {
    id: "7-paper1-paper2-mastery-m2",
    title: "MCQ Paper 2 — Comparative Prompts, Non-Overlap & Closed-Book Craft",
    level: "SL",
    questions: [
      {
        id: "7-paper1-paper2-mastery-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper2-comparative-prompts",
        question:
          "What are the official IB Diploma English A: Literature specifications for **Paper 2** across SL and HL?",
        options: [
          "1 hour 15 minutes; open book; 1 of 2 prompts; 20 marks; 30% SL / 20% HL.",
          "1 hour 45 minutes; closed book; 1 of 4 prompts on 2 works; 30 marks; 35% SL / 25% HL.",
          "2 hours 15 minutes; closed book; 2 of 4 prompts on 3 works; 40 marks; 35% SL / 35% HL.",
          "1 hour 45 minutes; open book; 1 of 6 prompts on 2 works; 30 marks; 25% SL / 35% HL.",
        ],
        answerIndex: 1,
        hints: [
          "Remember that SL and HL sit the exact same Paper 2 exam paper and duration, but it carries a different final weighting.",
          "Check whether texts are permitted in the Paper 2 exam hall.",
        ],
        explanation:
          "Paper 2 lasts 1 hour 45 minutes (105 minutes), is strictly closed book, offers 1 of 4 unseen general prompts on 2 studied works, totals 30 marks (A10/B10/C5/D5), and weighs 35% at SL and 25% at HL.",
      },
      {
        id: "7-paper1-paper2-mastery-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "paper2-comparative-prompts",
        question:
          "An **HL** candidate used Work 1 and Work 2 for their Individual Oral, and Work 3 for their HL Essay. Which pairing is **strictly compliant** with the IB non-overlap rule for Paper 2?",
        options: [
          "Work 1 paired with Work 4, since Work 1 is compared to a fresh text.",
          "Work 3 paired with Work 5, provided a different theme is discussed.",
          "Work 2 paired with Work 3, because Paper 2 is externally assessed.",
          "Work 4 paired with Work 5, since neither appeared in the IO or HL Essay.",
        ],
        answerIndex: 3,
        hints: [
          "Does the IB allow reusing an IO or HL Essay work in Paper 2 if you pick a different theme?",
          "Identify the pairing containing zero overlap with Works 1, 2, and 3.",
        ],
        explanation:
          "The IB non-overlap rule is absolute: no work used in the Individual Oral or HL Essay may be reused in Paper 2, regardless of theme or comparative pairing. Only Works 4 and 5 are eligible.",
      },
      {
        id: "7-paper1-paper2-mastery-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "paper2-comparative-prompts",
        question:
          "Read this unseen Paper 2 prompt: *'To what extent do endings in two works you have studied resolve the central tensions established earlier?'* Which interpretive stance best unlocks Band 5 on Criterion A?",
        options: [
          "Weighing where closure is achieved against where deliberate ambiguity or irony leaves tensions unsettled across both works.",
          "Declaring firmly that both endings resolve every single conflict cleanly to prove the works fit the prompt.",
          "Summarising the final chapter of Work 1 and the final act of Work 2 in detailed chronological order.",
          "Rewriting the prompt to discuss opening chapters instead because endings are harder to remember.",
        ],
        answerIndex: 0,
        hints: [
          "Pay close attention to the IB command phrase 'To what extent'.",
          "Band 5 Criterion A embraces nuance, qualification, and unresolved tension rather than binary yes/no claims.",
        ],
        explanation:
          "'To what extent' explicitly invites a nuanced judgement — evaluating both partial resolution and deliberate ambiguity, and contrasting how each writer's ending affects the reader.",
      },
      {
        id: "7-paper1-paper2-mastery-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "paper2-comparative-prompts",
        question:
          "Why does **integrated point-by-point** structure consistently outscore **block-by-block** structure ('all of Work A, then all of Work B') on Paper 2?",
        options: [
          "Block essays are mathematically shorter and fail to meet an official 2,000-word minimum.",
          "Integrated essays eliminate the need to analyse literary form or authorial technique.",
          "Integrated sections place both works in continuous dialogue, proving comparative insight in every movement.",
          "Block essays are prohibited by exam regulations and receive an automatic zero on Criterion C.",
        ],
        answerIndex: 2,
        hints: [
          "Remember that Paper 2 has no mandatory word-count minimum, nor is block structure automatically zeroed — rather, it limits band attainment.",
          "Look at what Paper 2 Criteria A, B, and C explicitly ask candidates to sustain *throughout* the essay.",
        ],
        explanation:
          "Point-by-point comparative movements put both works into active analytical dialogue throughout the essay, sustaining balanced treatment under Criterion C and continuous craft contrast under Criteria A and B.",
      },
      {
        id: "7-paper1-paper2-mastery-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "paper2-comparative-prompts",
        question:
          "Because Paper 2 is strictly **closed book**, which evidence-preparation strategy produces the strongest Band 5 analysis under timed exam conditions?",
        options: [
          "Memorising three 15-line speeches per work so you can copy whole pages as proof of knowledge.",
          "Avoiding textual references entirely and focusing exclusively on historical context and biography.",
          "Memorising only character names and chapter summaries while ignoring stylistic choices.",
          "Mastering 12–15 short 2–6 word micro-quotations, structural turning points, and signature formal choices per work.",
        ],
        answerIndex: 3,
        hints: [
          "Long memorised block quotes often get dumped irrelevantly and waste precious exam time.",
          "Think about what kinds of closed-book evidence simultaneously feed Criterion A (knowledge) and Criterion B (craft evaluation).",
        ],
        explanation:
          "Compact 2–6 word micro-quotations, exact structural pivots (openings, climaxes, endings), and form-specific craft details flex effortlessly across any of the 4 unseen Paper 2 prompts.",
      },
      {
        id: "7-paper1-paper2-mastery-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare and contrast",
        guideRef: "paper2-comparative-prompts",
        question:
          "A candidate compares Henrik Ibsen's play *A Doll's House* `[Example text — not a set text]` with Kazuo Ishiguro's novel *The Remains of the Day* `[Example text — not a set text]` on a prompt about self-deception. What elevates this cross-form comparison into Band 5 on **Criterion B**?",
        options: [
          "Noting that both protagonists inhabit strict European households shaped by rigid social hierarchies.",
          "Evaluating how Ibsen's visible stage business exposes panic whereas Ishiguro's guarded prose traps readers in denial.",
          "Listing the exact publication dates, literary movements, and biographical backgrounds of both authors upfront.",
          "Arguing that stage drama and prose novels operate identically because both genres rely on spoken dialogue.",
        ],
        answerIndex: 1,
        hints: [
          "Criterion B evaluates *how authorial and formal choices shape meaning* — especially when comparing two distinct mediums.",
          "Look for the response that links medium-specific craft (staging vs narration) directly to contrasting audience/reader effects.",
        ],
        explanation:
          "Top-band Paper 2 Criterion B compares how distinct literary forms construct divergent effects — contrasting theatrical visibility on stage against intimate, unreliable narrative focalisation in prose.",
      },
      {
        id: "7-paper1-paper2-mastery-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper2-comparative-prompts",
        question:
          "What percentage of the total **Paper 2** score (30 marks) is carried jointly by **Criterion A (10m)** and **Criterion B (10m)**?",
        options: [
          "66.7% (two-thirds of the entire Paper 2 mark).",
          "50.0% (exactly half of the Paper 2 mark).",
          "75.0% (three-quarters of the Paper 2 mark).",
          "40.0% (two-fifths of the Paper 2 mark).",
        ],
        answerIndex: 0,
        hints: [
          "Add Criterion A (10) and Criterion B (10), then divide by the Paper 2 maximum of 30 marks.",
          "20 divided by 30 reduces to 2/3.",
        ],
        explanation:
          "Criteria A (10) and B (10) total 20 out of 30 marks, or 66.7%. Neglecting craft comparison under Criterion B forfeits up to a third of the entire Paper 2 exam.",
      },
      {
        id: "7-paper1-paper2-mastery-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "paper2-comparative-prompts",
        question:
          "Which comparative transition sentence demonstrates **Band 5 analytical nuance** rather than mechanical juxtaposition?",
        options: [
          "Now I will move on to discuss how the second studied work also explores the central theme of exile and displacement.",
          "Similarly, both writers refer repeatedly to childhood memory across several important chapters throughout their books.",
          "While both cast memory as contested, Work 1's fragmented verse mimics trauma whereas Work 2's irony exposes revisionism.",
          "In contrast to the first studied work, the second literary text was published fifty years later in a different country.",
        ],
        answerIndex: 2,
        hints: [
          "Strong Paper 2 pivots articulate *divergence within similarity* while anchoring to authorial craft.",
          "Eliminate mechanical signposting ('Now I will move on') and purely biographical facts.",
        ],
        explanation:
          "A Band 5 comparative pivot establishes a shared conceptual terrain ('memory as a contested archive') and immediately differentiates how each writer's distinct formal strategy produces a divergent implication.",
      },
      {
        id: "7-paper1-paper2-mastery-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "paper2-comparative-prompts",
        question:
          "An **SL** Literature student studies the minimum **9 works** across DP1–DP2 and selects 2 works for their Individual Oral. How many studied works remain eligible for Paper 2?",
        options: [
          "6 works, because SL candidates must also exclude one work for an HL Essay.",
          "7 works, since only the 2 Individual Oral works are locked out at SL.",
          "9 works, because the non-overlap rule applies exclusively to Higher Level.",
          "5 works, because translated works cannot be used in Paper 2.",
        ],
        answerIndex: 1,
        hints: [
          "Does Standard Level include an HL Essay?",
          "Subtract the 2 IO works from the minimum 9 studied SL works.",
        ],
        explanation:
          "SL students do not write an HL Essay; subtracting their 2 Individual Oral works from 9 studied works leaves 7 eligible works for Paper 2 (both original English and translated works are allowed).",
      },
      {
        id: "7-paper1-paper2-mastery-m2-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Examine",
        guideRef: "paper2-comparative-prompts",
        question:
          "Read this unseen Paper 2 prompt: *'Conflict in literature is rarely between pure good and pure evil; it is more often between competing loyalties.'* What hidden assumption should a Band 5 candidate interrogate during planning?",
        options: [
          "Whether the broad term 'literature' permits selecting a stage drama script alongside a prose novel.",
          "Whether senior IB examiners prefer nineteenth-century classics over contemporary translated texts.",
          "Whether the opening paragraph should quote a standard dictionary definition of the noun 'conflict'.",
          "Whether 'competing loyalties' assumes equal choice, or whether power imbalances turn loyalty into coercion.",
        ],
        answerIndex: 3,
        hints: [
          "Look at the ethical assumption tucked inside the phrase 'competing loyalties'.",
          "Ask how a literary work might complicate or challenge the idea of symmetrical, freely chosen loyalties.",
        ],
        explanation:
          "Interrogating whether 'loyalties' are genuinely voluntary or coerced by structural power immediately moves Criterion A beyond agreeing obediently with the prompt into perceptive critical inquiry.",
      },
      {
        id: "7-paper1-paper2-mastery-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Outline",
        guideRef: "paper2-comparative-prompts",
        question:
          "Which time allocation best fits the **1-hour 45-minute (105 min)** Paper 2 exam?",
        options: [
          "15 min prompt selection & comparative matrix + 80 min integrated writing + 10 min final audit.",
          "2 min picking a prompt + 103 min continuous writing with no comparative outline.",
          "45 min planning both works in full detail + 55 min writing + 5 min proofreading.",
          "50 min writing Work 1 first + 50 min writing Work 2 second + 5 min writing a comparison paragraph.",
        ],
        answerIndex: 0,
        hints: [
          "Balance upfront conceptual architecture against sufficient writing and revision time.",
          "Eliminate zero-planning panic, over-planning, and block-by-block drafting.",
        ],
        explanation:
          "15 minutes for prompt deconstruction and a 3–4 movement comparative T-matrix, 80 minutes for balanced integrated drafting, and 10 minutes to verify prompt alignment and precision register is the gold-standard 105-minute split.",
      },
      {
        id: "7-paper1-paper2-mastery-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "paper2-comparative-prompts",
        question:
          "Why is preparing **three** versatile non-overlap works (rather than only two) before Paper 2 an effective exam-day hedge?",
        options: [
          "Because IB Paper 2 requires writing on all three studied works to reach Band 5.",
          "Because examiners award bonus Criterion A marks for mentioning a third work in the conclusion.",
          "Because Paper 2 forbids pairing two works written in different centuries.",
          "Because having a third prepared work lets you select the sharpest 2-work pairing for any of the 4 unseen prompts.",
        ],
        answerIndex: 3,
        hints: [
          "Remember that you MUST write on exactly TWO works in the actual exam — never three!",
          "Think about how unseen prompts vary (e.g. setting, power, form, endings, memory) and how a third revised backup protects flexibility.",
        ],
        explanation:
          "You always write on exactly 2 works in Paper 2, but revising 3 versatile non-overlap works gives you three flexible pairings — Work 1 with 2, Work 1 with 3, or Work 2 with 3 — so you never force an awkward fit onto an unseen prompt.",
      },
      {
        id: "7-paper1-paper2-mastery-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Apply",
        guideRef: "paper1-hl-two-passages",
        question:
          "On HL Paper 1, Passage 1 is a **Prose Fiction** excerpt with tight free indirect discourse and Passage 2 is a **Literary Non-Fiction** travel essay. What shift in analytical lens is vital when beginning Passage 2?",
        options: [
          "Treating the travel writer as a fictional protagonist unaware of the essay's narrator.",
          "Focusing strictly on stanza symmetry, rhyme patterns, and theatrical stage directions.",
          "Examining how the writing persona negotiates memory, cultural authority, rhetorical appeals, and truth-claims.",
          "Ignoring stylistic choices in Passage 2 because non-fiction is evaluated solely for factual accuracy.",
        ],
        answerIndex: 2,
        hints: [
          "Recall what defines Literary Non-Fiction (essay, memoir, travelogue, speech) as the fourth IB literary form.",
          "Consider the relationship between the experiencing self, retrospective persona, and persuasive craft.",
        ],
        explanation:
          "Literary non-fiction relies on crafted persona (experiencing vs retrospective self), rhetorical cadence (ethos, pathos, logos, hypotaxis/parataxis), anecdote, and how the writer negotiates subjectivity and cultural authority.",
      },
      {
        id: "7-paper1-paper2-mastery-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Justify",
        guideRef: "paper2-comparative-prompts",
        question:
          "In a closed-book Paper 2 essay, what should you do if you remember the exact imagery and structural significance of a crucial line, but are unsure of one connecting preposition?",
        options: [
          "Quote only the exact 2–4 word core phrase you are certain of and analyse the surrounding detail accurately in your own words.",
          "Invent a plausible full sentence inside quotation marks so the essay looks heavily quoted.",
          "Drop the entire point from your essay even though it is central to your argument.",
          "Write an apologetic note to the examiner explaining that Paper 2 is closed book.",
        ],
        answerIndex: 0,
        hints: [
          "Never fabricate quoted phrasing, and never discard a strong structural insight because of one forgotten word.",
          "Micro-quotations paired with accurate analytical paraphrase maintain complete textual integrity.",
        ],
        explanation:
          "Quoting only the exact 2–4 core words you recall cleanly — while paraphrasing the surrounding structural context accurately — preserves scholarly accuracy without fabricating lines or abandoning key evidence.",
      },
      {
        id: "7-paper1-paper2-mastery-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "paper2-comparative-prompts",
        question:
          "A Paper 2 candidate writes four insightful paragraphs on Work 1 and only one brief, hurried paragraph on Work 2 before concluding. Which criterion suffers the sharpest direct structural penalty for this **80/20 imbalance**?",
        options: [
          "Criterion D exclusively, because the unbalanced paragraphs cause spelling errors.",
          "Criterion C (as well as capping comparative depth in A and B), since Paper 2 requires balanced, focused treatment of both works.",
          "None of the criteria, provided the four paragraphs on Work 1 demonstrate Band 5 craft.",
          "Only Criterion B, because Criterion A does not consider how both works are compared.",
        ],
        answerIndex: 1,
        hints: [
          "Check the wording of Paper 2 Criterion C: 'How well structured, balanced and focused is the presentation of ideas?'",
          "Notice that an 80/20 split also limits comparative insight in Criteria A and B.",
        ],
        explanation:
          "Paper 2 Criterion C explicitly assesses *balance* alongside structure and focus; a severe 80/20 skew directly depresses Criterion C while simultaneously starving the comparative demands of Criteria A and B.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3 (15 Qs) — Criterion A–D Band 3→5 Diagnostics & Precision Craft
  // answerIndex spread: [0:3, 1:4, 2:4, 3:4]
  // ===========================================================================
  {
    id: "7-paper1-paper2-mastery-m3",
    title: "MCQ Paper 3 — Criterion A–D Band 5 Diagnostics & Craft Upgrades",
    level: "SL",
    questions: [
      {
        id: "7-paper1-paper2-mastery-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "rubric-mastery-crit-a-d",
        question:
          "An examiner comments: *'Your essay grasps the literal events accurately and offers relevant references, yet rarely probes the subtle ironies or larger thematic implications beneath the surface.'* Which IB criterion does this comment diagnose?",
        options: [
          "Criterion D — Language, register, and grammatical accuracy.",
          "Criterion C — Conceptual organisation and paragraph transitions.",
          "Criterion A — Understanding and interpretation of implications.",
          "Criterion B — Evaluative analysis of poetic metre and syntax.",
        ],
        answerIndex: 2,
        hints: [
          "Notice the exact rubric keywords: 'literal events', 'subtle ironies', 'larger thematic implications'.",
          "Which criterion separates literal meaning (Band 3) from insightful interpretation of implications (Band 5)?",
        ],
        explanation:
          "Criterion A evaluates knowledge, understanding, and interpretation — moving from literal comprehension (Band 3) to perceptive interpretation of subtleties and larger implications (Band 5).",
      },
      {
        id: "7-paper1-paper2-mastery-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "rubric-mastery-crit-a-d",
        question:
          "An examiner writes: *'You spot alliteration, caesura, and extended metaphor accurately, but stop short of evaluating how effectively these choices shape the speaker's conflicted voice.'* Which criterion is capped by this habit?",
        options: [
          "Criterion B — Analysis and evaluation of authorial choices.",
          "Criterion A — Literal comprehension of the unseen passage.",
          "Criterion C — Cohesive conceptual focus across paragraphs.",
          "Criterion D — Academic vocabulary and sentence variety.",
        ],
        answerIndex: 0,
        hints: [
          "Look for the hallmark Band 3 trap known as 'technique-spotting'.",
          "Which criterion explicitly tests both *analysis* and *evaluation* of textual features?",
        ],
        explanation:
          "Naming devices without evaluating how they construct meaning or reader effect directly caps Criterion B ('Analysis and evaluation') in the middle band.",
      },
      {
        id: "7-paper1-paper2-mastery-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "rubric-mastery-crit-a-d",
        question:
          "An examiner notes: *'The commentary is clear overall, but colloquial expressions like \"kind of shows\" and repetitive verbs weaken critical precision.'* Which criterion does this feedback target?",
        options: [
          "Criterion A — Depth of textual interpretation.",
          "Criterion B — Evaluation of structural symbolism.",
          "Criterion C — Balance between two comparative works.",
          "Criterion D — Clarity, precision, register, and style of language.",
        ],
        answerIndex: 3,
        hints: [
          "Focus on 'colloquial expressions', 'repetitive verbs', and 'critical precision'.",
          "Which single criterion governs register, vocabulary accuracy, and syntactic style?",
        ],
        explanation:
          "Criterion D assesses language clarity, precision, accuracy, variety, and academic register — rewarding surgical analytical verbs over conversational hedging.",
      },
      {
        id: "7-paper1-paper2-mastery-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "rubric-mastery-crit-a-d",
        question:
          "Read this unseen poetic line: *'We stacked our winter letters in a rusted biscuit tin.'* Which analytical sentence best achieves **Band 5 on Criterion B**?",
        options: [
          "The poet uses concrete imagery of a 'rusted biscuit tin' to create a vivid picture that engages the reader's imagination.",
          "Housing intimate 'winter letters' inside a corroded domestic container juxtaposes emotional tenderness with quiet decay, implying devotion eroded by neglect.",
          "In this line, the speaker tells the reader that they placed old seasonal correspondence inside a metal box.",
          "The author employs alliteration and tactile diction here to emphasise that the poem takes place during a cold season.",
        ],
        answerIndex: 1,
        hints: [
          "Apply the C-M-E chain: Choice → Mechanism → Psychological/Conceptual Effect.",
          "Reject vague catch-alls ('engages the reader's imagination'), literal paraphrase, and misapplied labels.",
        ],
        explanation:
          "Band 5 Criterion B evaluates how interlocking textual details ('winter letters' paired with 'rusted biscuit tin') operate together to imply an emotional tension — preserved tenderness quietly yielding to erosion.",
      },
      {
        id: "7-paper1-paper2-mastery-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "rubric-mastery-crit-a-d",
        question:
          "Which replacement best upgrades the Band 3 phrase *'This contrast shows that the narrator is uncomfortable'* into **Band 5 Criterion D** academic register?",
        options: [
          "This contrast really makes the reader see a lot of discomfort inside the narrator.",
          "This big contrast clearly proves to everyone that the narrator feels bad here.",
          "This sharp juxtaposition externalises the narrator's suppressed unease and destabilises their composed facade.",
          "This contrast is a technique that highlights how the narrator does not like the situation.",
        ],
        answerIndex: 2,
        hints: [
          "Look for surgical analytical verbs (*externalises, destabilises*) paired with exact conceptual nouns.",
          "Eliminate vague filler ('really makes', 'big contrast', 'does not like').",
        ],
        explanation:
          "Replacing 'shows' with precise analytical verbs ('externalises', 'destabilises') simultaneously sharpens Criterion D register and deepens Criterion A/B interpretation.",
      },
      {
        id: "7-paper1-paper2-mastery-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "rubric-mastery-crit-a-d",
        question:
          "Why does the IB Band 5 descriptor for Criterion A prize acknowledging **productive ambiguity** rather than forcing a single reductive moral?",
        options: [
          "Because IB examiners prefer indecisive essays that avoid stating any clear thesis statement.",
          "Because major literary works rarely contain any coherent themes, tensions, or formal patterns.",
          "Because listing several contradictory opinions automatically doubles your overall exam word count.",
          "Because rich literature holds competing truths in tension, and recognising complexity proves perceptive reading.",
        ],
        answerIndex: 3,
        hints: [
          "Does embracing ambiguity mean abandoning a thesis, or crafting a nuanced thesis that accounts for tension?",
          "Compare a simplistic moral ('greed is bad') against a nuanced reading of competing motives.",
        ],
        explanation:
          "A persuasive Band 5 argument maintains a clear conceptual thesis while honouring ironic tension, moral complexity, and unresolved ambiguity embedded in the text.",
      },
      {
        id: "7-paper1-paper2-mastery-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "rubric-mastery-crit-a-d",
        question:
          "A candidate's Paper 1 essay contains perceptive close-reading sentences, yet jumps erratically between unrelated devices inside each paragraph and drifts away from the guiding question halfway through. Which criterion suffers most directly?",
        options: [
          "Criterion D — Grammatical accuracy and vocabulary selection.",
          "Criterion C — Focus, coherence, and conceptual organisation.",
          "Criterion A — Literal understanding of individual sentences.",
          "Criterion B — Ability to recognise figurative devices.",
        ],
        answerIndex: 1,
        hints: [
          "Notice the symptoms: erratic jumps inside paragraphs + drifting off the guiding question.",
          "Which criterion evaluates 'effectively organized and cohesive; well focused'?",
        ],
        explanation:
          "Criterion C directly governs structural cohesion, logical progression of ideas, and sustained focus on the guiding question or prompt throughout the essay.",
      },
      {
        id: "7-paper1-paper2-mastery-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "rubric-mastery-crit-a-d",
        question:
          "In **Criterion B**, what concretely separates *evaluation* from basic *analysis*?",
        options: [
          "Evaluation judges how effectively and to what wider aesthetic, psychological, or ethical impact a writer's craft operates.",
          "Evaluation awards the published author a personal star rating based on whether the candidate enjoyed reading the book.",
          "Evaluation counts how many rhetorical terms appear per page without examining their contextual meaning.",
          "Evaluation replaces textual analysis with historical summaries of the century in which the writer lived.",
        ],
        answerIndex: 0,
        hints: [
          "IB literary evaluation is NEVER a personal book review ('I liked this poem').",
          "Think about judging the *effectiveness* and *consequences* of a writer's stylistic or structural choice.",
        ],
        explanation:
          "In IB Literature, evaluation is rigorous critical appraisal — assessing *how effectively* a technique achieves its unsettling, ironic, sympathetic, or structural impact on the reader.",
      },
      {
        id: "7-paper1-paper2-mastery-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "rubric-mastery-crit-a-d",
        question:
          "Read this Band 3 sentence on an unseen drama cue (*'[She laughs softly, then locks the terrace bolt twice]'*): *'The stage direction shows she is nervous and creates suspense.'* Which revision upgrades **both Criterion A and Criterion B** simultaneously?",
        options: [
          "The playwright writes a very effective stage direction here that makes the audience feel suspenseful and worried.",
          "Because she locks the door twice after laughing, the audience understands literally that she wants the terrace secured.",
          "Using dramatic stage directions in square brackets is a common theatrical convention found in modern plays.",
          "Juxtaposing a gentle laugh with the compulsive double-bolting turns outward courtesy into palpable dread, visually implicating the audience in her unspoken threat.",
        ],
        answerIndex: 3,
        hints: [
          "Look for the revision that connects BOTH details in the cue (laugh + double-bolting) and evaluates the theatrical effect on spectators.",
          "Avoid vague 'creates suspense' or generic definitions of stage directions.",
        ],
        explanation:
          "Connecting the acoustic warmth ('laughs softly') against the repeated defensive gesture ('locks... twice') uncovers subtextual dread for Criterion A while evaluating visual theatrical craft for Criterion B.",
      },
      {
        id: "7-paper1-paper2-mastery-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "rubric-mastery-crit-a-d",
        question:
          "Which phrase is a classic **Band 3 generic filler** that examiners advise cutting immediately during your 5-minute proofread?",
        options: [
          "'The abrupt caesura fractures the speaker's declarative certainty.'",
          "'The writer's ironic understatement strips the ceremony of grandeur.'",
          "'This clever device emphasises the point and makes the reader want to read on.'",
          "'Shifting into free indirect discourse narrows psychic distance between narrator and character.'",
        ],
        answerIndex: 2,
        hints: [
          "Spot the sentence that could be pasted into literally any essay on any book without changing a word.",
          "Specific craft mechanisms name exact psychological, tonal, or structural effects.",
        ],
        explanation:
          "'Emphasises the point and makes the reader want to read on' is interchangeable generic filler; replacing it with the specific psychological or tonal shift immediately strengthens Criteria B and D.",
      },
      {
        id: "7-paper1-paper2-mastery-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "rubric-mastery-crit-a-d",
        question:
          "How does the mark distribution of **Paper 1** (20 marks per essay) compare with **Paper 2** (30 marks)?",
        options: [
          "Paper 1 weights Criterion D twice as heavily as Criterion A; Paper 2 weights all four equally.",
          "Paper 1 weights Criteria A, B, C, and D equally at 5 each; Paper 2 doubles Criteria A and B to 10 each while keeping C and D at 5.",
          "Paper 1 awards 10 marks each to Criteria C and D; Paper 2 awards 15 marks each to A and B.",
          "Both Paper 1 and Paper 2 award 7.5 marks to every criterion to keep rubrics identical.",
        ],
        answerIndex: 1,
        hints: [
          "Add up Paper 1: 5 + 5 + 5 + 5 = 20. Now add up Paper 2: 10 + 10 + 5 + 5 = 30.",
          "Notice which two criteria expand to accommodate whole-work comparative demands on Paper 2.",
        ],
        explanation:
          "Paper 1 splits 20 marks evenly (A5, B5, C5, D5), whereas Paper 2 doubles Criterion A (10) and Criterion B (10) — keeping C (5) and D (5) — to reward sustained comparative understanding and craft evaluation across two whole works.",
      },
      {
        id: "7-paper1-paper2-mastery-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "paper1-hl-two-passages",
        question:
          "An HL candidate achieves 16/20 on Passage 1 (A4, B4, C4, D4) and 16/20 on Passage 2 (A4, B4, C4, D4). Another HL candidate achieves 19/20 on Passage 1 but runs out of time on Passage 2, earning 11/20 (A3, B2, C3, D3). Which statement accurately reflects their combined HL Paper 1 performance?",
        options: [
          "The second candidate scores higher overall because IB HL Paper 1 counts only your higher-scoring passage.",
          "Both candidates receive identical marks because examiners round Passage 2 up to match Passage 1.",
          "The first candidate leads by 2 marks overall (32/40 vs 30/40) because steady discipline across both essays outperforms lopsided perfectionism.",
          "The first candidate scores lower because neither essay reached 19/20 on any single criterion.",
        ],
        answerIndex: 2,
        hints: [
          "Sum both essays cleanly: 16 + 16 = 32, whereas 19 + 11 = 30.",
          "Remember that HL Paper 1 marks both passages independently out of 20 and sums them out of 40.",
        ],
        explanation:
          "HL Paper 1 sums both 20-mark essays equally (32/40 vs 30/40). Consistent high-Band-4/Band-5 execution across both forms beats pouring excessive time into Passage 1 at Passage 2's expense.",
      },
      {
        id: "7-paper1-paper2-mastery-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Examine",
        guideRef: "rubric-mastery-crit-a-d",
        question:
          "Why can quoting an obscure rhetorical label (e.g. *'polyptoton'* or *'asyndeton'*) without unpacking its contextual effect actually **hurt** a candidate's Band 5 ambitions?",
        options: [
          "Because IB Literature rubrics ban classical Greek rhetorical terminology in exam essays.",
          "Because using any technical term automatically reduces your Criterion D register mark.",
          "Because examiners only accept metaphor, simile, and personification on Paper 1.",
          "Because unanalysed jargon signals mechanical technique-spotting rather than genuine evaluation of how style shapes meaning.",
        ],
        answerIndex: 3,
        hints: [
          "Technical terms are valuable tools ONLY when paired with precise effect analysis.",
          "Think about how an examiner distinguishes authentic critical insight from memorised glossary name-dropping.",
        ],
        explanation:
          "Accurate terminology enhances precision when evaluated in context, but dropping rare labels without unpacking their psychological, rhythmic, or thematic function signals mechanical technique-spotting (Band 3).",
      },
      {
        id: "7-paper1-paper2-mastery-m3-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "rubric-mastery-crit-a-d",
        question:
          "During the final 5-minute proofread of a Paper 1 or Paper 2 essay, which targeted edit typically yields the fastest **Criterion D and B** lift?",
        options: [
          "Replacing vague verbs ('shows, uses, says') with surgical analytical verbs and trimming wordy filler clauses.",
          "Crossing out your conclusion and starting a brand-new fourth body paragraph in the margin.",
          "Adding three extra lines of plot summary to the introduction so the examiner knows the story.",
          "Rewriting every embedded 3-word quotation into a full 3-sentence block quote.",
        ],
        answerIndex: 0,
        hints: [
          "Five minutes is too short for structural demolition, but ideal for surgical lexical upgrades.",
          "Which quick edit sharpens precision, concision, and evaluative force simultaneously?",
        ],
        explanation:
          "Upgrading weak verbs ('shows' → 'ironises / externalises / destabilises') and pruning conversational filler takes seconds per sentence and visibly sharpens Criteria B and D.",
      },
      {
        id: "7-paper1-paper2-mastery-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "rubric-mastery-crit-a-d",
        question:
          "A Paper 2 candidate incorporates historical context about post-war society accurately, yet devotes an entire body paragraph to textbook history without quoting or analysing either literary work. How does an IB examiner assess that paragraph?",
        options: [
          "It earns automatic Band 5 on Criterion A because contextual breadth is prized above close reading.",
          "It dilutes Criterion C focus and contributes zero Criterion B craft analysis, since context must always serve textual interpretation.",
          "It counts as half a literary work, reducing the need to analyse the second studied text.",
          "It boosts Criterion D automatically because historical dates elevate academic formality.",
        ],
        answerIndex: 1,
        hints: [
          "Remember IB English A: Literature's core rule on historical context: avoid 'history-essay dumps'.",
          "Context only earns top marks when tied directly to how specific authorial choices engage with cultural tensions.",
        ],
        explanation:
          "Standalone historical summaries waste word space, weaken Criterion C focus, and earn zero Criterion B credit. Context belongs inside literary analysis only when explaining how specific craft choices respond to cultural tensions.",
      },
    ],
  },
];
