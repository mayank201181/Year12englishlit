import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "8-hl-essay-criticism-m1",
    title: "MCQ Paper 1 — Regulations, Non-Overlap & Line of Inquiry",
    level: "HL",
    questions: [
      {
        id: "8-hl-essay-criticism-m1-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "Under the IB Diploma English A: Literature (First Assessment 2021) syllabus, what is the official assessment weighting and mark total of the HL Essay?",
        options: [
          "20% of the final HL grade, externally assessed out of 20 marks (Criteria A–D, 5 marks each)",
          "25% of the final HL grade, externally assessed out of 30 marks (Criteria A–D, weighted unevenly)",
          "20% of the final HL grade, internally assessed by the teacher out of 40 marks and moderated",
          "30% of the final HL grade, externally assessed out of 20 marks (Criteria A–D, 5 marks each)",
        ],
        answerIndex: 0,
        hints: [
          "Check the HL four-component split: Paper 1 (35%), Paper 2 (25%), Individual Oral (20%), and HL Essay.",
          "Unlike the Individual Oral (IA), the HL Essay is sent directly to IB examiners for external marking across four equal 5-mark criteria.",
        ],
        explanation:
          "The HL Essay is an externally assessed HL-only coursework component worth 20% of the final HL grade and marked out of 20 marks (Criterion A: 5, B: 5, C: 5, D: 5). Paper 2 carries 25% (30 marks), and the Individual Oral is the internal assessment worth 20% at HL (40 marks).",
      },
      {
        id: "8-hl-essay-criticism-m1-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "An HL candidate studies 13 works across DP1–DP2. Which combination strictly complies with the IB non-overlap work rule?",
        options: [
          "Using Work 1 and Work 2 in the IO, Work 1 again in the HL Essay on a new concept, and Works 3–4 in Paper 2",
          "Using Work 1 and Work 2 in the IO, Work 3 exclusively in the HL Essay, and Works 4–5 in Paper 2",
          "Using Work 1 and Work 2 in the IO, Work 3 in the HL Essay, and comparing Work 3 with Work 4 in Paper 2",
          "Using Work 1 and Work 2 in the IO, comparing Works 3–4 in the HL Essay, and using Works 5–6 in Paper 2",
        ],
        answerIndex: 1,
        hints: [
          "Count how many literary works the HL Essay examines — it must be a single studied work.",
          "Check whether any single title appears in more than one assessment across IO, HL Essay, and Paper 2.",
        ],
        explanation:
          "The HL Essay must examine ONE distinct studied work, and the strict IB non-overlap rule prohibits reusing any work from the Individual Oral or the HL Essay in Paper 2 (or overlapping IO and HL Essay). Dedicating Works 1–2 to the IO, Work 3 solely to the HL Essay, and Works 4–5 to Paper 2 is fully compliant.",
      },
      {
        id: "8-hl-essay-criticism-m1-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "May an HL candidate choose a work in translation for their HL Essay?",
        options: [
          "No; the HL Essay must analyse a work originally written in English so stylistic nuance is preserved",
          "Only if the student also submits the original foreign-language edition alongside the English translation",
          "Yes; any single studied work (English or translated) is eligible provided it does not overlap with IO or Paper 2",
          "Only if both works chosen for the candidate's Individual Oral were originally written in English",
        ],
        answerIndex: 2,
        hints: [
          "Recall that the Individual Oral requires 1 English work + 1 translated work, whereas the HL Essay focuses on 1 studied work.",
          "Any of your 13 HL studied works is eligible as long as you obey the non-overlap rule and cite the translator accurately.",
        ],
        explanation:
          "Candidates may write their HL Essay on either a work originally written in English or a studied work in translation, provided it is not reused in the Individual Oral or Paper 2 (and the IO still retains its own required 1 English + 1 translated pairing).",
      },
      {
        id: "8-hl-essay-criticism-m1-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "Which candidate working title best exemplifies a Band 5 HL Essay line of inquiry?",
        options: [
          "An Exploration of Memory, Grief, and Cultural Identity Throughout the Entire Novel",
          "Does the Playwright Portray Patriarchal Marriage Negatively in the Closing Act?",
          "The Historical Reality of Post-War Urban Displacement Reflected in Selected Poems",
          "How Fragmented Focalisation Represents Nostalgia as Both Refuge and Erasure in the Novel",
        ],
        answerIndex: 3,
        hints: [
          "Test each title against the C-F-T-E check: Concept, Form/Authorial Craft, Arguable Tension, and Literary Focus.",
          "Eliminate yes/no questions, broad lists of abstract nouns, and sociological history prompts detached from literary craft.",
        ],
        explanation:
          "Anchoring the inquiry to an active IB Concept (Representation), a concrete authorial choice (fragmented focalisation), and a productive interpretive tension (nostalgia as both refuge and erasure) forces sustained literary evaluation across the work. Yes/no questions, multi-theme lists, and history-report titles stall in mid-band.",
      },
      {
        id: "8-hl-essay-criticism-m1-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "An HL candidate decides to write their HL Essay on a studied collection of 28 poems by a single poet. What is the strongest scope strategy for a 1,200–1,500 word essay?",
        options: [
          "Mention at least 12–15 poems briefly so the examiner sees broad coverage across the entire collection",
          "Focus deeply on a cohesive cluster of 2–4 poems while framing how they connect to the wider collection",
          "Analyse only one 14-line sonnet in isolation so every syllable can be examined without mentioning other poems",
          "Compare two poems from the collection against two poems by a different poet from the same movement",
        ],
        answerIndex: 1,
        hints: [
          "Calculate how many body words remain per poem if you try to cover 12+ poems inside ~1,100 body words.",
          "Remember the HL Essay covers ONE studied work (by one author) and must balance micro craft with whole-work awareness.",
        ],
        explanation:
          "With ~1,100 body words available, analysing a focused, cohesive cluster of 2–4 poems gives ~275–365 words per movement for genuine micro close-reading while still demonstrating awareness of the collection as a single work. Covering 12+ poems produces superficial listing, a single short sonnet rarely constitutes a whole work, and adding a second author violates the single-work rule.",
      },
      {
        id: "8-hl-essay-criticism-m1-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "Which of the following is NOT one of the seven official central IB Literature Concepts recommended for anchoring an HL Essay line of inquiry?",
        options: [
          "Transformation — examining how shifts in form or voice chart psychological or cultural change",
          "Representation — examining how literary craft constructs or distorts social realities",
          "Globalisation — examining how transnational economic markets shape modern publishing",
          "Communication — examining how dialogue, silence, or framing mediate meaning between figures",
        ],
        answerIndex: 2,
        hints: [
          "List the seven official IB Language A: Literature Concepts from memory.",
          "Check which term belongs to geography/economics rather than the seven literary concepts (Identity, Culture, Creativity, Communication, Perspective, Transformation, Representation).",
        ],
        explanation:
          "The seven official IB Literature Concepts are Identity, Culture, Creativity, Communication, Perspective, Transformation, and Representation. Globalisation is a broad socioeconomic topic rather than one of the seven IB Literature Concepts.",
      },
      {
        id: "8-hl-essay-criticism-m1-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "A student drafts the title *'How does George Orwell's essay collection [Example text — not a set text] critique British imperial bureaucracy?'* Why does a mentor advise sharpening this title before drafting?",
        options: [
          "It foregrounds political content without specifying the rhetorical or structural choices constructing that critique",
          "Literary non-fiction essay collections are excluded from the HL Essay, which permits only fiction, drama, or poetry",
          "The word 'how' makes the essay question too open-ended and prevents the student from writing a clear thesis",
          "Focusing on a political issue automatically turns the HL Essay into an Individual Oral Global Issue response",
        ],
        answerIndex: 0,
        hints: [
          "Check whether literary non-fiction is one of the four official IB Literature forms (it is!).",
          "Look for what Criterion B requires: explicit focus on authorial craft (e.g. ironic persona, anecdote, antithesis) rather than content alone.",
        ],
        explanation:
          "Literary non-fiction is completely valid for the HL Essay, and 'how' questions are ideal — the flaw is that the draft focuses solely on thematic/political content without pinpointing authorial choices (such as self-implicating persona, ironic antithesis, or sensory anecdote) that construct the critique.",
      },
      {
        id: "8-hl-essay-criticism-m1-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "Why does framing a line of inquiry around a binary yes/no question (e.g. *'Is the narrator truly unreliable?'*) typically cap an HL Essay in mid-band?",
        options: [
          "IB examiners strictly forbid question marks in HL Essay titles and deduct marks from Criterion D",
          "A yes/no framing prevents the student from mentioning secondary critics or biographical context",
          "Yes/no questions are reserved exclusively for Paper 2 comparative prompts and cannot fit a single work",
          "It invites a reductive verdict rather than evaluating how authorial craft sustains nuanced textual tension",
        ],
        answerIndex: 3,
        hints: [
          "Think about what Band 5 Criterion A and Criterion B reward: exploring complexity, implications, and *how* craft creates tension.",
          "Compare answering 'Yes, he is unreliable' with exploring 'How shifting temporal gaps weaponise narrative unreliability'.",
        ],
        explanation:
          "Question titles are completely permitted in the HL Essay, but a binary yes/no framing pushes the writer toward a simplistic verdict rather than an evaluative exploration of *how* and *to what effect* authorial choices construct ambiguity and interpretive complexity.",
      },
      {
        id: "8-hl-essay-criticism-m1-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "How should the **Learner Portfolio** contribute to developing a Band 5 HL Essay?",
        options: [
          "By serving as a submitted appendix of rough drafts that IB examiners grade alongside the final 1,500-word essay",
          "By supplying a compulsory list of pre-approved IB essay titles assigned directly by the school's coordinator",
          "By incubating authentic lines of inquiry, logging rich micro-passages, and evidencing independent authorship",
          "By replacing the Works Cited page so students do not need formal bibliographic entries in the essay itself",
        ],
        answerIndex: 2,
        hints: [
          "Is the Learner Portfolio itself sent to examiners for marking? No — it is an ongoing course workspace.",
          "Think about how teachers authenticate independent work and where your sharpest textual tensions first emerge.",
        ],
        explanation:
          "Although the Learner Portfolio is not externally marked as an appendix, it is the intellectual workshop where genuine curiosity, annotated passages, conceptual links, and drafting milestones evolve — providing both original inquiry seeds and an authenticity trail.",
      },
      {
        id: "8-hl-essay-criticism-m1-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "A student applies the 'Delete the Author' diagnostic test to their proposed HL Essay question: *'How did 19th-century industrial capitalism cause urban poverty in the novel's setting?'* What does this test reveal?",
        options: [
          "The prompt treats the novel as a historical document rather than a crafted literary work, starving Criterion B",
          "The prompt relies too heavily on close stylistic reading and needs a broader sociological introduction to pass",
          "The prompt is overly narrow because 19th-century historical eras cannot connect to universal IB Concepts",
          "The prompt succeeds because connecting a novel directly to real-world economic causes guarantees Band 5",
        ],
        answerIndex: 0,
        hints: [
          "Could a History student answer that exact question without analysing diction, imagery, focalisation, or structure?",
          "Criterion B rewards analysis and evaluation of *authorial choices* — not historical causation reports.",
        ],
        explanation:
          "If a prompt can be answered in a History or Sociology essay without analysing language, form, or narrative choices, it fails the literary focus required by the HL Essay. Reframing around *how* the author's spatial imagery or grotesque diction critiques industrial commodification restores Criterion B power.",
      },
      {
        id: "8-hl-essay-criticism-m1-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "When narrowing an HL Essay on a drama work such as Henrik Ibsen's *A Doll's House* [Example text — not a set text], which focus best honours medium-specific literary craft?",
        options: [
          "Evaluating whether the play's historical audience in 1879 agreed with divorce reform across Scandinavia",
          "Analysing how domestic props, threshold stage directions, and conversational subtext stage Nora's shifting agency",
          "Summarising Nora's psychological biography before Act I to explain why she forged the promissory note",
          "Treating the script purely as a prose novel and ignoring stage directions because actors change them in performance",
        ],
        answerIndex: 1,
        hints: [
          "Remember Literary Forms I: drama is written for three-dimensional theatrical performance, not flat silent reading.",
          "Look for the option that centres concrete dramatic craft rather than biography, pure history, or prose-only reading.",
        ],
        explanation:
          "Top-band drama essays analyse theatrical choices unique to the medium — stage directions, proxemics, symbolic props, lighting, pauses, and dialogue subtext — showing how performance architecture constructs conceptual meaning.",
      },
      {
        id: "8-hl-essay-criticism-m1-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "Which distinction accurately separates an **Individual Oral Global Issue** from an **HL Essay Line of Inquiry**?",
        options: [
          "The IO investigates only one work in depth, whereas the HL Essay always compares two works from different cultures",
          "The HL Essay requires a transnational social issue, whereas the IO focuses strictly on formal poetic metre",
          "The IO relies exclusively on unseen extracts, whereas the HL Essay uses works studied outside the IB syllabus",
          "The IO pairs two works around a transnational human issue, whereas the HL Essay pursues a literary inquiry within one work",
        ],
        answerIndex: 3,
        hints: [
          "Compare the number of works and central focus of the IO (1 English + 1 Translated, Global Issue) vs the HL Essay (1 studied work, formal literary inquiry).",
          "Does the HL Essay need a Global Issue with transnational everyday impact? No — it can be purely aesthetic, structural, or conceptual!",
        ],
        explanation:
          "The Individual Oral examines how ONE transnational Global Issue is presented across TWO works (1 English + 1 translated), whereas the HL Essay develops a sustained formal literary inquiry (often anchored to one of the 7 Concepts or an aesthetic/structural question) within ONE distinct studied work.",
      },
      {
        id: "8-hl-essay-criticism-m1-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "A candidate wants to write an HL Essay on a short-story collection by one author using the Concept of **Transformation**. Which plan best prevents structural fragmentation across 1,400 words?",
        options: [
          "Select three linked stories that stage escalating phases of transformation via a recurring formal motif",
          "Devote one brief paragraph to each of the ten stories in the volume in order of publication date",
          "Analyse one short story for 1,200 words and append a 200-word summary of the author's biography",
          "Select three completely unrelated stories and give each story its own independent mini-thesis",
        ],
        answerIndex: 0,
        hints: [
          "Criterion C rewards a *single cohesive, developing line of argument* rather than disconnected mini-essays.",
          "Think about how a shared formal thread (e.g. shifting focalisation or threshold imagery) binds 3 stories into one arc.",
        ],
        explanation:
          "Selecting 3 interconnected stories that chart escalating phases of Transformation through a shared formal thread preserves unity of argument under Criterion C while granting enough word space (~350w per movement) for deep close reading under Criterion B.",
      },
      {
        id: "8-hl-essay-criticism-m1-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "Why does an HL Essay title like *'Three Ways Symbolism Appears in the Novel'* signal a likely Criterion C cap before the examiner finishes reading page one?",
        options: [
          "Symbols cannot be analysed in the HL Essay unless paired with a published psychoanalytic critic",
          "A list-style framing encourages three static, interchangeable paragraphs rather than a developing conceptual argument",
          "Focusing on symbolism violates the IB requirement to analyse at least five different literary devices per work",
          "The number 'three' limits the student to three paragraphs, making it impossible to reach 1,200 words",
        ],
        answerIndex: 1,
        hints: [
          "Ask yourself: in a 'Three Ways X Appears' essay, could you shuffle Body Paragraphs 1, 2, and 3 into any random order without breaking logic?",
          "Band 5 Criterion C requires a *progressive* line of inquiry where each movement deepens or complicates the last.",
        ],
        explanation:
          "A 'three ways X appears' structure creates a static catalogue of parallel examples rather than an evolving thesis. Band 5 Criterion C demands progressive conceptual development — showing *how* and *why* a symbol shifts, destabilises, or turns ironic across the whole work.",
      },
      {
        id: "8-hl-essay-criticism-m1-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "hl-essay-line-of-inquiry",
        question:
          "An HL candidate's chosen novel has an overt moral narrator, yet the author's imagery and pacing repeatedly contradict that narrator's self-righteous claims. Can the HL Essay centre on this friction?",
        options: [
          "No; IB Literature essays must accept the narrator's explicit moral judgements as the author's intended message",
          "Only if the student locates a verified author interview confirming the contradiction was consciously planned",
          "Yes; exposing how formal craft subverts surface narration is a classic route to 5/5 Criterion A insight",
          "No; arguing against a narrator's explicit statements is penalised as misreading literal plot facts",
        ],
        answerIndex: 2,
        hints: [
          "Recall AoE 1 (Readers, Writers & Texts): never collapse narrator into author, and avoid the intentional fallacy.",
          "Does Band 5 Criterion A reward safe surface agreement or perceptive exploration of irony, subtext, and ambiguity?",
        ],
        explanation:
          "Distinguishing speaker/narrator from authorial craft — and demonstrating how imagery, irony, or structural pacing subtly undercuts a narrator's surface authority — exemplifies perceptive, nuanced Criterion A interpretation without falling into the intentional fallacy.",
      },
    ],
  },
  {
    id: "8-hl-essay-criticism-m2",
    title: "MCQ Paper 2 — Critical Lenses, Close Reading & Academic Integrity",
    level: "HL",
    questions: [
      {
        id: "8-hl-essay-criticism-m2-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        guideRef: "critical-theoretical-lenses",
        question:
          "What is the official IB position on citing secondary literary criticism and named theorists in the HL Essay?",
        options: [
          "At least five peer-reviewed journal articles must appear in the Works Cited to earn Band 5 on Criterion A",
          "Secondary criticism is completely optional; primary close reading of the literary work always carries the essay",
          "Secondary sources are strictly banned because the HL Essay must be written under closed-book exam conditions",
          "Students must select exactly one named theorist and devote the first 300 words to summarising their framework",
        ],
        answerIndex: 1,
        hints: [
          "Distinguish the HL Essay from a Literature Extended Essay (EE).",
          "Does the IB rubric penalise an essay that has zero secondary critics if its own textual analysis is perceptive?",
        ],
        explanation:
          "Secondary literary criticism is entirely optional in the HL Essay. Candidates can earn 20/20 purely through insightful independent analysis of the primary work; if critics are consulted, they must be properly cited and kept subordinate to the student's own close reading.",
      },
      {
        id: "8-hl-essay-criticism-m2-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        guideRef: "critical-theoretical-lenses",
        question:
          "Which analytical question best reflects an **ecocritical** perspective applied cleanly to a literary work?",
        options: [
          "How do recurring financial ledgers and property inheritances enforce class stratification between households?",
          "How do fragmented chronological flashbacks conceal the protagonist's repressed childhood guilt?",
          "How does code-switching between imperial English and indigenous idioms expose colonial power hierarchies?",
          "How does poetic syntax grant non-human landscapes active agency rather than reducing nature to a passive backdrop?",
        ],
        answerIndex: 3,
        hints: [
          "Match each option to its lens: Marxist, psychoanalytic, postcolonial, and ecocritical.",
          "Ecocriticism interrogates anthropocentrism and human–environment representation in literary form.",
        ],
        explanation:
          "An ecocritical lens examines how literary language and form represent the non-human environment, challenging anthropocentric tropes that treat nature merely as a static mirror for human emotion.",
      },
      {
        id: "8-hl-essay-criticism-m2-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "critical-theoretical-lenses",
        question:
          "A student examines how Toni Morrison's *Beloved* [Example text — not a set text] uses nonlinear temporal leaps, overlapping polyphonic voices, and recursive memory fragments to convey trauma. Which pair of lenses most naturally illuminates these choices?",
        options: [
          "Narratological and psychoanalytic perspectives working together on temporal architecture and repressed memory",
          "Strictly biographical and New Critical perspectives ignoring historical slavery and structural order",
          "Purely ecocritical and classical Aristotelian comedy frameworks focused on rural pastoral settings",
          "Strictly economic supply-and-demand analysis detached from narrative perspective and figurative imagery",
        ],
        answerIndex: 0,
        hints: [
          "Look at the two exact craft dimensions named in the stem: temporal leaps/polyphonic voices (narrative structure) and trauma/memory fragments (psyche).",
          "Which pair aligns directly with narrative architecture and repressed psychic return?",
        ],
        explanation:
          "Pairing a narratological lens (examining temporal order, polyphony, and focalisation) with a psychoanalytic lens (examining trauma, repression, and haunting) keeps the analysis anchored directly in authorial craft rather than forcing an alien framework onto the text.",
      },
      {
        id: "8-hl-essay-criticism-m2-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "critical-theoretical-lenses",
        question:
          "Why does an examiner mark down a paragraph that opens with: *'Using Freud's Oedipus complex and Lacan's mirror stage, we can diagnose the protagonist with clinical narcissism'*?",
        options: [
          "Psychoanalytic perspectives are discouraged in IB Literature because they predate contemporary literary studies",
          "Mentioning two theorists in one essay violates the IB rule limiting each HL Essay to one critical school",
          "It replaces textual analysis with jargon-dumping and treats a literary construct like a real clinical patient",
          "Clinical vocabulary is permitted only in Literary Non-Fiction essays and never in prose fiction criticism",
        ],
        answerIndex: 2,
        hints: [
          "Ask: how many words of the primary literary text did that sentence actually analyse?",
          "Remember: characters are made of language, syntax, and structural cues — not living clinical subjects.",
        ],
        explanation:
          "Diagnosing a fictional character with clinical labels while name-dropping abstract theory starves Criterion B (analysis of authorial choices) and muddies Criterion D (clear, precise register). A Band 5 psychoanalytic move instead examines how imagery, slips, or doubling construct psychological tension.",
      },
      {
        id: "8-hl-essay-criticism-m2-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "critical-theoretical-lenses",
        question:
          "An HL candidate reads a published scholar's essay arguing that a play's ending represents pure liberation. The candidate disagrees after noticing subtle stage directions implying ongoing surveillance. What is the strongest Band 5 way to integrate that scholar?",
        options: [
          "Omit the scholar entirely and pretend the opposing reading does not exist so the essay stays simpler",
          "Quote a 110-word block passage from the scholar to show thorough university-level secondary research",
          "Dismiss the scholar sarcastically as obviously mistaken without offering specific textual evidence",
          "Concise paraphrase with accurate citation, then qualify the critic's claim using close analysis of the stage directions",
        ],
        answerIndex: 3,
        hints: [
          "Think about academic register (Criterion D), word-budget discipline, and critical dialogue (Criterion A & B).",
          "How do published critics treat a peer's interpretation when primary textual evidence complicates it?",
        ],
        explanation:
          "Concisely crediting and then qualifying a critic's view with concrete micro-evidence (the stage directions) showcases scholarly maturity, fair counter-interpretation handling, and authoritative Criterion A & B control without wasting word count on long secondary quotes.",
      },
      {
        id: "8-hl-essay-criticism-m2-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "critical-theoretical-lenses",
        question:
          "Which analytical move demonstrates a **postcolonial** critical perspective applied with Band 5 precision to Chinua Achebe's *Things Fall Apart* [Example text — not a set text]?",
        options: [
          "Evaluating how untranslated Igbo proverbs disrupt the coloniser's English and assert indigenous epistemic authority",
          "Reciting a 250-word textbook timeline of the 1884 Berlin Conference before briefly quoting the final paragraph",
          "Asserting that colonialism was historically unjust without examining narrative voice, irony, or diction",
          "Counting how many pages mention colonial officials to measure the mathematical proportion of imperial influence",
        ],
        answerIndex: 0,
        hints: [
          "Look for the move that ties a postcolonial question directly to a *specific linguistic/formal authorial choice*.",
          "Avoid history-essay dumps, unsupported thematic assertions, and mechanical page-counting.",
        ],
        explanation:
          "Analysing how Achebe weaves untranslated idioms and Igbo proverbs into English prose shows directly how *language and form* enact cultural resistance — keeping postcolonial insight tightly anchored to Criterion B literary craft.",
      },
      {
        id: "8-hl-essay-criticism-m2-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        guideRef: "evidence-argument-integration",
        question:
          "Why do top-band HL Essays favour short, grammatically embedded quotations (2–8 words) over 4-line block quotations?",
        options: [
          "MLA formatting prohibits block quotations in essays shorter than 2,500 words across all disciplines",
          "Short embedded phrases conserve strict word budget while forcing forensic analysis of specific diction and rhythm",
          "Short quotations are excluded from the 1,500-word limit, whereas block quotations are always counted double",
          "Examiners automatically cap Criterion D at Band 3 whenever a quotation spans more than one line",
        ],
        answerIndex: 1,
        hints: [
          "Remember: ALL primary quotations count towards the 1,200–1,500 word limit!",
          "Compare dissecting three sharp verbs woven into your sentence versus pasting a 55-word paragraph and summarising it.",
        ],
        explanation:
          "Every quoted word counts toward the 1,500-word limit. Embedding concise 2–8 word phrases preserves precious space for analysis, elevates syntactic fluency (Criterion D), and pushes the writer to unpack exact authorial choices (Criterion B).",
      },
      {
        id: "8-hl-essay-criticism-m2-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "evidence-argument-integration",
        question:
          "What is the primary flaw of a **'dropped quotation'** in an HL Essay body paragraph?",
        options: [
          "It cites the wrong edition year in the Works Cited page while keeping the in-text page number accurate",
          "It shortens a long quotation using square brackets and ellipses to preserve grammatical agreement",
          "It sits as a disconnected standalone sentence without syntactic integration or analytical framing",
          "It embeds a single evocative verb inside the student's own clause to analyse metaphorical resonance",
        ],
        answerIndex: 2,
        hints: [
          "Look at the metaphor 'dropped': imagine tossing a full quote onto the page between two sentences like a loose brick.",
          "How does Criterion D reward quotation handling? Seamless grammatical weaving.",
        ],
        explanation:
          "A 'dropped quote' stands alone between sentences without being woven into the writer's grammatical syntax or analytical claim. Blending brief quoted phrases seamlessly into your own sentence improves both prose fluency under Criterion D and immediate craft focus under Criterion B.",
      },
      {
        id: "8-hl-essay-criticism-m2-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "evidence-argument-integration",
        question:
          "In an HL Essay on Virginia Woolf's *Mrs Dalloway* [Example text — not a set text], a student pairs micro-analysis of Big Ben's 'leaden circles' motif with its macro structural function linking Clarissa and Septimus across the single June day. Why is this pairing prized by examiners?",
        options: [
          "It weaves micro stylistic evaluation with macro whole-work architecture, simultaneously satisfying Criteria A, B, and C",
          "It eliminates the need for any in-text citations because well-known modernist motifs are common knowledge",
          "It proves the student has read Woolf's private diaries and can verify her biographical intentions accurately",
          "It concentrates the entire essay on a single opening paragraph so no later scenes need to be referenced",
        ],
        answerIndex: 0,
        hints: [
          "Recall the Micro–Macro Double Helix: zooming in on exact phrasing while zooming out to whole-work structure.",
          "Which three criteria work together when craft detail illuminates the overall arc of the work?",
        ],
        explanation:
          "Bridging micro stylistic texture ('leaden circles' — tactile heaviness vs acoustic dispersion) with macro structural cohesion (stitching separate consciousnesses across the whole novel) demonstrates whole-work mastery (Crit A), formal evaluation (Crit B), and sustained development (Crit C).",
      },
      {
        id: "8-hl-essay-criticism-m2-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "evidence-argument-integration",
        question:
          "What is the difference between a Band 5 **counter-interpretation** move and self-contradiction?",
        options: [
          "A counter-interpretation waits until the final sentence of the conclusion to reverse the essay's main claim",
          "A counter-interpretation quotes an online study guide solely to pad the essay closer to 1,450 words",
          "A counter-interpretation gives equal weight to two incompatible theses so the reader must choose one",
          "A counter-interpretation tests a plausible alternative reading against textual friction to refine the central thesis",
        ],
        answerIndex: 3,
        hints: [
          "Does acknowledging a fair alternative reading weaken a strong thesis, or sharpen it when you answer it with craft evidence?",
          "Look for the option that shows *refinement* rather than abandoning or reversing your line of argument.",
        ],
        explanation:
          "A Band 5 counter-interpretation acknowledges why a perceptive reader might view a moment differently, then uses closer attention to irony, syntax, or structural placement to subsume and refine that reading — proving the essay's thesis withstands rigorous scrutiny.",
      },
      {
        id: "8-hl-essay-criticism-m2-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "evidence-argument-integration",
        question:
          "Under MLA 9th edition conventions, which inline quotation of two consecutive lines from a poem is formatted and cited correctly?",
        options: [
          "The speaker warns that \"winter locks the river,\" (page 44) \"while glass remembers rain.\"",
          "The speaker warns that \"winter locks the river / while glass remembers rain\" (lines 12–13).",
          "The speaker warns that \"winter locks the river — while glass remembers rain.\" (12–13)",
          "The speaker warns that \"winter locks the river // while glass remembers rain.\" (p. 44).",
        ],
        answerIndex: 1,
        hints: [
          "Check three MLA poetry details: single slash `/` for adjacent lines (`//` is for stanza breaks), line numbers instead of page numbers, and full stop AFTER the parenthesis.",
          "Spot which option gets all three mechanics right simultaneously.",
        ],
        explanation:
          "MLA marks a single poetic line break inline with a spaced forward slash (` / `), cites numbered poems by line numbers (`(lines 12–13)` on first reference, then `(12–13)`), and places the sentence-ending full stop *after* the closing parenthesis.",
      },
      {
        id: "8-hl-essay-criticism-m2-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "evidence-argument-integration",
        question:
          "A student reads an academic blog commentary on their studied play, swaps out a few synonyms in a three-sentence explanation of dramatic irony, and inserts it into their HL Essay without naming the blog. Under IB Academic Integrity rules, what is this?",
        options: [
          "Patchwriting / plagiarism — paraphrased ideas and syntax from another source still require full citation",
          "Acceptable common scholarly practice provided fewer than five consecutive words match the original source",
          "A minor formatting slip that affects only Criterion D punctuation rather than academic honesty",
          "Permitted as long as the student adds the blog's URL in the Works Cited without an in-text reference",
        ],
        answerIndex: 0,
        hints: [
          "Does changing a few words turn someone else's analytical argument into your own original thought?",
          "IB Academic Integrity covers ideas, structure, and paraphrased claims — not only verbatim copy-pasting.",
        ],
        explanation:
          "Borrowing another writer's analytical argument or sentence skeleton while merely swapping synonyms is patchwriting — a serious form of plagiarism under IB Academic Integrity policy. Every consulted source's ideas require genuine independent reformulation AND explicit in-text plus Works Cited attribution.",
      },
      {
        id: "8-hl-essay-criticism-m2-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "evidence-argument-integration",
        question:
          "Why is naming the **translator** in the Works Cited entry mandatory when writing an HL Essay on a work in translation?",
        options: [
          "Only translated editions published after 2000 are permitted in IB HL coursework, so dates must be audited",
          "Examiners automatically convert translated quotations back into the original language before marking Criterion B",
          "Different translations make distinct lexical and rhythmic choices, so scholarly citation must identify the exact text analysed",
          "Translator names count towards the minimum 1,200-word requirement if the body prose runs slightly short",
        ],
        answerIndex: 2,
        hints: [
          "Recall AoE 2 (*Time & Space*): translation is an interpretive act — two English versions of the same poem often choose completely different verbs and rhythms.",
          "Remember also that Works Cited entries are excluded from the word count.",
        ],
        explanation:
          "Every translation shapes diction, cadence, and register differently. Naming the exact edition and translator in Works Cited ensures academic accuracy and demonstrates scholarly awareness that your micro close-reading engages a specific translated text.",
      },
      {
        id: "8-hl-essay-criticism-m2-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "critical-theoretical-lenses",
        question:
          "A student applies a **feminist** lens to a novel and notes that while the female protagonist defies domestic marriage norms in Part II, her final retreat into silence reproduces the very erasure she resisted. Why does this observation elevate the essay?",
        options: [
          "It proves the feminist lens was inappropriate for the novel and should be replaced with a Marxist argument",
          "It softens the essay's tone so the candidate avoids taking any clear interpretive stance in the thesis",
          "It replaces close reading of diction with biographical speculation about the novelist's personal ambivalence",
          "It avoids 'cookie-cutter' ideological reduction by confronting textual complexity and unresolved structural tension",
        ],
        answerIndex: 3,
        hints: [
          "Recall the 'cookie-cutter' trap: forcing a complex literary text into a neat, one-sided slogan.",
          "How do Band 5 essays treat moments where a text complicates or resists a simple theoretical verdict?",
        ],
        explanation:
          "Refusing to flatten a rich literary text into a simplistic ideological slogan — and instead examining how the ending's silence creates unresolved friction within the feminist inquiry — signals genuine Band 5 sophistication across Criteria A and B.",
      },
      {
        id: "8-hl-essay-criticism-m2-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "evidence-argument-integration",
        question:
          "An HL candidate uses a generative AI tool to 'polish and rewrite awkward analytical paragraphs' before submitting their final HL Essay. How does IB Academic Integrity classify this action?",
        options: [
          "Permitted editorial support analogous to running a basic spelling check in a standard word processor",
          "An authenticity violation because prose rewritten by AI is no longer the candidate's own academic language",
          "Acceptable provided the candidate attaches a screenshot of the AI prompt inside an uncounted appendix",
          "Permitted only if the student's teacher already gave holistic feedback on an earlier rough draft",
        ],
        answerIndex: 1,
        hints: [
          "Criterion D assesses *the candidate's own* command of precise academic language, syntax, and literary terminology.",
          "Compare correcting a typo with letting an external system rewrite your analytical prose.",
        ],
        explanation:
          "Allowing an AI system to draft or rewrite your analytical prose compromises authentic authorship and invalidates Criterion D assessment of your own language control. Under IB Academic Integrity guidelines, the HL Essay's ideas, structure, and prose must be authentically the candidate's own.",
      },
    ],
  },
  {
    id: "8-hl-essay-criticism-m3",
    title: "MCQ Paper 3 — Word-Budgeting, Drafting & Criteria A–D Mastery",
    level: "HL",
    questions: [
      {
        id: "8-hl-essay-criticism-m3-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "What happens when an HL Essay reaches **1,640 counted words**, placing its culminating conclusion in the final 140 words?",
        options: [
          "The examiner reads the whole essay as normal and deducts a flat 1-mark administrative penalty from Criterion D",
          "The IB uploads an automated software summary of the last 140 words so the student retains full Criterion C credit",
          "The examiner stops reading at 1,500 words, leaving the conclusion completely unassessed and harming Criteria A, B, and C",
          "The essay is returned to the school coordinator for a two-week grace period so the candidate can trim excess prose",
        ],
        answerIndex: 2,
        hints: [
          "Remember the hard wall at 1,500 words in the Word-Budget Blueprint.",
          "What happens to your synthesis and structural closure if nobody reads past word 1,500?",
        ],
        explanation:
          "IB examiners are instructed to stop reading strictly at 1,500 words. Anything past that limit earns zero credit — effectively amputating your conclusion and damaging Criteria C (organisation/closure), A (persuasive conclusions), and B (culminating evaluation).",
      },
      {
        id: "8-hl-essay-criticism-m3-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "Which set of items is **EXCLUDED** from the official IB HL Essay word count?",
        options: [
          "Essay title, in-text parenthetical citations, and the Works Cited / Bibliography list",
          "All primary literary quotations, subheadings, and the introductory paragraph",
          "Primary block quotations, essay title, and any analytical paragraphs discussing historical context",
          "Secondary critic quotations, parenthetical citations, and the concluding synthesis paragraph",
        ],
        answerIndex: 0,
        hints: [
          "Remember the single biggest trap: ALL embedded quotations (primary AND secondary) COUNT towards 1,200–1,500 words!",
          "Only bibliographic apparatus and the title are excluded.",
        ],
        explanation:
          "Only the essay title, in-text parenthetical citations (or purely bibliographic referencing footnotes), and the Works Cited / Bibliography are excluded. All body prose — including every primary and secondary quotation — counts towards the 1,200–1,500 word limit.",
      },
      {
        id: "8-hl-essay-criticism-m3-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "A candidate's word-processor shows **1,585 words** in total. This includes a 15-word title, 25 words in parenthetical citations, and a 95-word Works Cited page. What is the essay's official counted length, and how does it compare with the Band 5 sweet spot?",
        options: [
          "1,490 words — safely inside the 1,350–1,480 word sweet spot with generous buffer",
          "1,570 words — 70 words over the 1,500-word limit because citations and Works Cited still count",
          "1,450 words — under the 1,200-word minimum floor and urgently needing another body movement",
          "1,450 words — squarely inside the 1,350–1,480 word Band 5 sweet spot with a 50-word safety margin",
        ],
        answerIndex: 3,
        hints: [
          "Add up the three excluded elements: 15 (title) + 25 (parenthetical citations) + 95 (Works Cited).",
          "Subtract that sum (135) from 1,585, then check where the result sits relative to 1,200–1,500w (sweet spot 1,350–1,480w).",
        ],
        explanation:
          "Subtracting excluded items gives 1,585 − (15 + 25 + 95) = 1,585 − 135 = 1,450 counted words. That lands right in the 1,350–1,480 word sweet spot — substantial enough for sustained depth while maintaining a safe 50-word buffer beneath the 1,500-word wall.",
      },
      {
        id: "8-hl-essay-criticism-m3-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "Which word-budget allocation across a ~1,400-word HL Essay gives the strongest structural foundation for Band 5 on Criterion C?",
        options: [
          "380w biographical intro · 720w across 2 body movements · 300w repetitive conclusion",
          "150w conceptual intro · 1,100w across 3–4 progressive body movements · 150w synthesis conclusion",
          "100w intro · 300w full plot summary · 850w on Chapter 1 close reading · 150w conclusion",
          "260w theory overview · 240w historical background · 750w literary analysis · 150w conclusion",
        ],
        answerIndex: 1,
        hints: [
          "Check what percentage of your word budget should be devoted directly to progressive literary analysis of the primary work.",
          "Target ~11% intro, ~78% progressive body movements, ~11% reflective synthesis.",
        ],
        explanation:
          "Allocating ~150w to a crisp conceptual introduction, ~1,100w (~78%) across 3–4 progressive analytical movements, and ~150w to a reflective synthesis conclusion maximises analytical density and eliminates plot-summary or biography bloat.",
      },
      {
        id: "8-hl-essay-criticism-m3-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "An examiner writes on a script: *'Accurately identifies metaphor, enjambment, and sibilance across three poems, yet stops at noting that they reinforce a sad tone without unpacking how these choices complicate the speaker's perspective.'* Which criterion is most directly capped in Band 3?",
        options: [
          "Criterion D (Language), because literary terms like sibilance and enjambment are too informal",
          "Criterion C (Focus & Organisation), because three poems cannot be organised within 1,500 words",
          "Criterion B (Analysis and Evaluation), because technique-spotting replaces evaluative analysis of craft",
          "Criterion A (Knowledge & Understanding), because poetry collections do not require close reading",
        ],
        answerIndex: 2,
        hints: [
          "Identify the exact examiner buzzword in the comment: spotting features ('metaphor, enjambment, sibilance') without evaluating *how* they construct complex effect.",
          "Which criterion specifically assesses 'Analysis and Evaluation' of authorial choices?",
        ],
        explanation:
          "Naming literary devices and attaching a generic emotional label ('reinforces a sad tone') is classic Band 3 technique-spotting. Moving to Band 5 on Criterion B requires evaluating *how* each formal choice operates and complicates conceptual meaning.",
      },
      {
        id: "8-hl-essay-criticism-m3-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "Which examiner comment most directly diagnoses a **Criterion C (Focus, Organisation & Development)** ceiling?",
        options: [
          "Frequent comma splices, conversational contractions, and repetitive reliance on the verb 'shows'",
          "Misidentifies an iambic pentameter line as trochaic and misquotes a pivotal stage direction",
          "Overlooks how free indirect discourse ironises the protagonist's claims about social mobility",
          "Walks chronologically chapter by chapter, repeating the thesis without progressive transitions",
        ],
        answerIndex: 3,
        hints: [
          "Sort each comment into its exact criterion: grammar/register (D), factual accuracy (A), craft analysis (B), and structure/progression (C).",
          "Chronological walkthroughs and repetitive non-developing paragraphs are classic Criterion C issues.",
        ],
        explanation:
          "Criterion C measures sustained focus on the line of inquiry, cohesive conceptual organisation, and logical progression of ideas. Walking chronologically through plot events while repeating the same claim caps Criterion C even when language or comprehension is solid.",
      },
      {
        id: "8-hl-essay-criticism-m3-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "Which analytical sentence best exemplifies **Band 5 Criterion D (Language)** precision and conciseness?",
        options: [
          "In order to really emphasize the fact that the character feels super trapped, the writer uses a lot of cage imagery.",
          "Through claustrophobic avian imagery, the playwright recasts domestic hospitality as gilded captivity.",
          "It can clearly be seen that the author utilizes birds and cages to basically show a very oppressive home life.",
          "The utilization of ornithological metaphorical signifiers paradigmatically actualises domestic carceral ontology.",
        ],
        answerIndex: 1,
        hints: [
          "Watch out for BOTH extremes that hurt Criterion D: chatty wordiness ('in order to really emphasize the fact that') AND pompous pseudo-jargon ('ornithological metaphorical signifiers').",
          "Band 5 Criterion D is concise, crystal clear, varied, and natural in its literary precision.",
        ],
        explanation:
          "Band 5 Criterion D rewards concise, precise, evocative academic prose ('recasts domestic hospitality as gilded captivity'). Both informal padding ('super trapped', 'basically show') and inflated thesaurus-jargon ('paradigmatically actualises') reduce clarity and elegance.",
      },
      {
        id: "8-hl-essay-criticism-m3-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "Under official IB HL Essay supervision regulations, what role may a teacher legally play during drafting?",
        options: [
          "Provide general, holistic guidance on ONE complete draft without editing, correcting, or rewriting prose",
          "Line-edit grammar, upgrade weak verbs, and restructure topic sentences across three successive redrafts",
          "Write the candidate's formal line of inquiry and select all primary quotations from the studied text",
          "Grade the final essay internally and submit only a brief summary report instead of the essay to the IB",
        ],
        answerIndex: 0,
        hints: [
          "Remember two strict IB boundaries: (1) the HL Essay is externally assessed, and (2) teacher feedback is strictly limited to one complete draft.",
          "Teachers guide conceptually ('sharpen your link to whole-work structure'); they never rewrite sentences.",
        ],
        explanation:
          "IB regulations permit teachers to review **one complete draft** and provide general, holistic guidance (alongside ongoing Learner Portfolio authenticity check-ins). Teachers must never edit, correct, or rewrite a student's prose, and final marking is strictly external.",
      },
      {
        id: "8-hl-essay-criticism-m3-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "During Pass 1 (Architecture Audit) of the 3-Pass Redrafting Protocol, a student extracts ONLY their thesis and the opening topic sentence of each body paragraph. What are they checking?",
        options: [
          "Whether every single body paragraph contains at least two citations from published academic journals",
          "Whether the essay uses British rather than American spelling consistently in every single paragraph",
          "Whether the essay's title and Works Cited list have been properly subtracted from the total word count",
          "Whether the body movements form a progressive conceptual arc rather than a repetitive list or plot summary",
        ],
        answerIndex: 3,
        hints: [
          "Think about reading a 'skeleton outline' of just thesis + topic sentences.",
          "If all four topic sentences say roughly the same thing ('First, solitude is shown... Second, solitude is also shown...'), what structural flaw did you just catch?",
        ],
        explanation:
          "Reading the thesis and topic sentences in isolation acts like an X-ray of Criterion C architecture: it immediately reveals whether each movement genuinely advances, complicates, or shifts the argument — or merely repeats one static claim.",
      },
      {
        id: "8-hl-essay-criticism-m3-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "A candidate's draft sits at **1,110 counted words** — concise and fluent, yet 90 words below the 1,200-word floor. What is the smartest revision strategy?",
        options: [
          "Paste a 100-word block quotation from Chapter 1 so the essay crosses 1,200 words without changing the analysis",
          "Add a 120-word author biography paragraph at the start of the introduction to pad the word total smoothly",
          "Deepen close analysis of an under-explored turning point and integrate a nuanced counter-interpretation (~250w)",
          "Inflate concise verbs into longer phrases ('in order to effectively demonstrate the fact that') across every paragraph",
        ],
        answerIndex: 2,
        hints: [
          "Padding with block quotes, biographies, or wordy fluff lowers Criteria B, C, and D even while lifting the word count!",
          "How can adding ~250 high-value analytical words simultaneously reach the 1,350–1,480w sweet spot AND raise Criteria A and B?",
        ],
        explanation:
          "Never pad an under-length draft with fluff, biography, or long quotes. Expanding a turning-point close reading and engaging a plausible counter-interpretation lifts the essay to ~1,360 words while directly strengthening Criteria A, B, and C.",
      },
      {
        id: "8-hl-essay-criticism-m3-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "In Pass 2 (Craft & Verb Upgrade) of redrafting, replacing *'the narrator uses fragmented syntax to show panic'* with *'fragmented parataxis fractures the narrator's composed facade, enacting escalating dread'* primarily elevates which two criteria?",
        options: [
          "Criterion A (plot recall) and Criterion C (title formatting)",
          "Criterion B (evaluative craft analysis) and Criterion D (precise academic language)",
          "Criterion C (Works Cited order) and Academic Integrity authentication",
          "Criterion A (biographical accuracy) and Paper 2 comparative balance",
        ],
        answerIndex: 1,
        hints: [
          "Look at what changed: vague 'uses... to show' became exact formal naming ('fragmented parataxis') + evaluative mechanism ('fractures... enacting escalating dread').",
          "Which two criteria reward evaluative analysis of authorial craft and precise, varied literary prose?",
        ],
        explanation:
          "Upgrading generic verbs ('uses', 'shows') into precise analytical action verbs ('fractures', 'enacting') paired with exact formal craft ('parataxis') sharpens both Criterion B (evaluation of authorial choices) and Criterion D (concise, precise literary language).",
      },
      {
        id: "8-hl-essay-criticism-m3-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "What distinguishes a Band 5 **reflective synthesis conclusion** (~150 words) from a Band 3 summary conclusion?",
        options: [
          "It synthesises how the movements reshaped the thesis and opens onto the wider aesthetic or conceptual stakes",
          "It introduces two brand-new literary scenes and a completely new critical theorist in the final four lines",
          "It restates the introductory thesis and all four topic sentences word for word so the examiner remembers them",
          "It ends with a moralising real-world call to action urging modern readers to change their personal habits",
        ],
        answerIndex: 0,
        hints: [
          "Avoid three common conclusion traps: verbatim repetition, introducing brand-new unanalysed evidence, or preachiness.",
          "Think of a Band 5 conclusion as the view from the summit after climbing 3–4 progressive movements.",
        ],
        explanation:
          "A Band 5 conclusion neither repeats earlier sentences mechanically nor introduces unsubstantiated new passages or preachiness; it synthesises the arc of discovery across the essay and crystallises why the writer's craft matters conceptually.",
      },
      {
        id: "8-hl-essay-criticism-m3-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "An HL Essay on Ocean Vuong's *Night Sky with Exit Wounds* [Example text — not a set text] explores how white space and fractured lineation represent inherited trauma, scoring A: 5, B: 5, C: 3, D: 5 (18/20). What single structural flaw most plausibly caused the isolated drop on Criterion C?",
        options: [
          "Misinterpreting the literal meaning of two central metaphors in the opening poem",
          "Relying on informal conversational slang and weak analytical verbs throughout the essay",
          "Listing poetic techniques accurately without explaining their psychological or thematic impact",
          "Allowing paragraphs to jump abruptly between poems with weak conceptual links or drifting past 1,500w",
        ],
        answerIndex: 3,
        hints: [
          "Notice A, B, and D are all 5/5 — meaning comprehension, craft evaluation, and prose elegance are already exemplary!",
          "Identify the flaw that uniquely belongs to Criterion C (Focus, Organisation & Development).",
        ],
        explanation:
          "When Criteria A, B, and D all hit 5/5 while Criterion C drops to 3/5, the culprit is structural: abrupt transitions between movements, weak progression of the line of inquiry, or exceeding the 1,500-word limit so closure is cut off.",
      },
      {
        id: "8-hl-essay-criticism-m3-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "Why is aiming for **1,350–1,480 counted words** strongly preferable to aiming for exactly **1,500 words**?",
        options: [
          "IB examiners award a hidden bonus mark to essays sitting precisely between 1,350 and 1,450 words",
          "Essays between 1,481 and 1,500 words are automatically flagged for an extra academic integrity interview",
          "Different word processors count hyphenated compounds and punctuation slightly differently, risking accidental overrun",
          "The official IB ceiling drops from 1,500 to 1,480 words whenever a candidate includes a Works Cited page",
        ],
        answerIndex: 2,
        hints: [
          "Have you ever noticed Google Docs, Microsoft Word, and Pages reporting slightly different word counts on the exact same text?",
          "What happens if your file counts 1,499 in Word but 1,514 in the IB marking viewer?",
        ],
        explanation:
          "Different word processors handle hyphenated words, en-dashes, and citations slightly differently. Landing in 1,350–1,480 counted words provides full Band 5 depth while giving a safe 20–150 word margin beneath the strict 1,500-word stop-reading wall.",
      },
      {
        id: "8-hl-essay-criticism-m3-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "hl-essay-drafting-rubric",
        question:
          "Which quick editing move cuts **word bloat** most effectively during Pass 3 without sacrificing a single analytical idea?",
        options: [
          "Deleting all embedded micro-quotations from the primary text and replacing them with general plot paraphrase",
          "Trimming empty throat-clearing fillers ('it can be seen that', 'in order to', 'the fact that') and redundant adverbs",
          "Removing the entire counter-interpretation paragraph so the essay presents a shorter, simpler one-sided claim",
          "Deleting the Works Cited list and all in-text parenthetical citations from the submitted document",
        ],
        answerIndex: 1,
        hints: [
          "Remember: deleting Works Cited or parenthetical citations saves ZERO counted words (they're already excluded!) AND violates Academic Integrity.",
          "Deleting quotes or counter-readings damages Criteria A and B; trimming empty filler boosts Criterion D!",
        ],
        explanation:
          "Works Cited and citations are already excluded from the word count, and cutting micro-quotes or counter-readings hurts Criteria A and B. Purging filler phrases ('the fact that', 'it can be seen that', 'very', 'basically') cuts 80–150 wasted words while making prose crisper for Criterion D.",
      },
    ],
  },
];
