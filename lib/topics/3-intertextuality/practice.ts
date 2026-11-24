import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK QUIZ (10 questions: 4 MCQ + 4 Short + 2 Written)
  // =========================================================================
  quiz: [
    {
      id: "3-intertextuality-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Define",
      guideRef: "conventions-traditions-subversion",
      question:
        "Which phrase best describes what happens when a contemporary novel invokes classic Gothic conventions only to stage terror inside a sunlit modern office?",
      options: [
        "Genre subversion unsettling the reader's inherited horizon of expectations.",
        "Strict neoclassical adherence preserving traditional aristocratic tragic unities.",
        "Pure biographical fallacy linking plot events to the author's personal childhood.",
        "Chronological plot summary recounting events without analytical commentary.",
      ],
      answerIndex: 0,
      hints: [
        "Think about the tension between the expected Gothic ruin and the bright corporate room.",
        "When a writer activates a genre script and turns it upside down, what is that move called?",
      ],
      explanation:
        "Relocating Gothic claustrophobia into a bright modern workplace deliberately overturns inherited visual codes to defamiliarise everyday conformity — classic genre subversion.",
    },
    {
      id: "3-intertextuality-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "allusion-motif-dialogue",
      question:
        "Name the literary theorist who coined the term 'intertextuality' in 1966, extending Mikhail Bakhtin's concept of dialogism.",
      answer: {
        type: "text",
        accept: ["Julia Kristeva", "Kristeva"],
        display: "Julia Kristeva",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Hans Robert Jauss", "Jauss"] },
          feedback:
            "Jauss developed the 'horizon of expectations' in reception theory; look for the theorist who coined 'intertextuality'.",
        },
        {
          spec: { type: "text", accept: ["Wolfgang Iser", "Iser"] },
          feedback:
            "Iser theorised textual gaps and the implied reader; look for the 1966 theorist who built directly on Bakhtin.",
        },
      ],
      hints: [
        "Her surname begins with K and she described every text as a 'mosaic of quotations'.",
        "She introduced Bakhtin's dialogic criticism to French literary theory in 1966.",
      ],
      solution: [
        "Mikhail Bakhtin proposed dialogism (all language responds to prior voices).",
        "Building on Bakhtin in 1966, **Julia Kristeva** coined the term **intertextuality**.",
      ],
    },
    {
      id: "3-intertextuality-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "allusion-motif-dialogue",
      question:
        "A short lyric drops the phrase 'his cardboard Labyrinth', whereas an entire 400-page novel mirrors every episode of Homer's *The Odyssey* [Example text — not a set text]. How do these two intertextual methods differ?",
      options: [
        "Both represent neutral stylistic pastiche recreating ancient prose rhythm.",
        "The poem uses explicit local allusion, whereas the novel uses structural allusion.",
        "The poem uses structural allusion, whereas the novel uses comedic parody.",
        "Both represent feminist writing back rewriting a single silenced minor character.",
      ],
      answerIndex: 1,
      hints: [
        "Compare the scope: a single targeted reference versus an entire narrative blueprint.",
        "Match 'local' to the two-word phrase and 'structural' to the whole novel's architecture.",
      ],
      explanation:
        "A targeted verbal echo ('cardboard Labyrinth') is an explicit local allusion, while modelling a whole work's macro-architecture on a precursor epic is structural allusion.",
    },
    {
      id: "3-intertextuality-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "allusion-motif-dialogue",
      question:
        "What single literary term names an imitation of an earlier style or genre carried out with ironic, mocking, or satirical distance?",
      answer: {
        type: "text",
        accept: ["parody", "a parody"],
        display: "parody",
      },
      traps: [
        {
          spec: { type: "text", accept: ["pastiche", "a pastiche"] },
          feedback:
            "Pastiche imitates earlier styles neutrally or affectionately without satirical bite; the mocking counterpart is parody.",
        },
      ],
      hints: [
        "Contrast this term with pastiche (which is neutral or affectionate).",
        "Jane Austen's *Northanger Abbey* [Example text — not a set text] famously uses this strategy on Gothic excesses.",
      ],
      solution: [
        "**Parody** imitates a recognisable style or genre with ironic exaggeration or satirical critique.",
        "By contrast, *pastiche* borrows styles affectionately or neutrally without mocking its source.",
      ],
    },
    {
      id: "3-intertextuality-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Compare",
      guideRef: "cross-form-connections",
      question:
        "Which cross-form craft pair best exemplifies **functional equivalence** when comparing how a play and a novel portray repressed grief?",
      options: [
        "Comparing identical chapter headings printed inside both manuscripts.",
        "Comparing stage costumes in the novel with third-person omniscience in the play.",
        "Comparing a five-second stage silence and closed posture with narrative ellipsis and restrained focalisation.",
        "Comparing the exact publication dates and authors' family histories across both works.",
      ],
      answerIndex: 2,
      hints: [
        "Check that each device genuinely belongs to its literary form (Drama vs Prose Fiction).",
        "Look for two medium-specific tools that both render unspoken grief.",
      ],
      explanation:
        "Drama externalises repression through audible silence and bodily posture on stage, while Prose Fiction achieves an equivalent restraint through narrative ellipsis and tightly controlled focalisation.",
    },
    {
      id: "3-intertextuality-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Apply",
      guideRef: "comparative-synthesis-architecture",
      question:
        "Type the single comparative adverb (ending in '-ly') that best signals a parallel artistic choice across two different literary forms: 'Just as the playwright uses dim downstage lighting to isolate the speaker, the poet ____ uses fractured caesura to sever the speaker from community.'",
      answer: {
        type: "text",
        accept: ["analogously", "correspondingly", "similarly"],
        display: "analogously",
      },
      traps: [
        {
          spec: { type: "text", accept: ["conversely", "inversely"] },
          feedback:
            "Watch the logical direction: both authors create isolation via form-specific craft — that is a parallel ('analogously'), not an opposition ('conversely').",
        },
      ],
      hints: [
        "Notice the opening words 'Just as...' — the sentence compares a parallel craft manoeuvre across Drama and Poetry.",
        "Choose a precision adverb meaning 'in a parallel way across different mediums'.",
      ],
      solution: [
        "Both the playwright's lighting and the poet's caesura achieve parallel isolation in different forms.",
        "**Analogously** (or *correspondingly* / *similarly*) signals exact cross-form functional equivalence.",
      ],
    },
    {
      id: "3-intertextuality-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "comparative-synthesis-architecture",
      question:
        "Why do IB Paper 2 examiners generally award lower Criterion C marks to block-by-block ('Text A then Text B') essays?",
      options: [
        "Because block-by-block essays are strictly forbidden to cite any quotations from memory.",
        "Because block-by-block essays prohibit students from analysing poetry alongside drama.",
        "Because block-by-block essays force students to write fewer than five hundred words total.",
        "Because separating the texts produces two isolated mini-essays with delayed, mechanical links.",
      ],
      answerIndex: 3,
      hints: [
        "Think about the reader's experience when Work B does not appear until halfway through the essay.",
        "What does Criterion C reward in a comparative essay?",
      ],
      explanation:
        "Block-by-block organisation silos Work A and Work B into separate halves, delaying genuine comparison and turning links into repetitive back-references rather than cohesive point-by-point synthesis.",
    },
    {
      id: "3-intertextuality-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "conventions-traditions-subversion",
      question:
        "What hyphenated literary term describes a subversion of the traditional coming-of-age novel in which maturation produces alienation or conformity rather than harmonious self-realisation?",
      answer: {
        type: "text",
        accept: ["anti-Bildungsroman", "anti Bildungsroman", "antibildungsroman"],
        display: "anti-Bildungsroman",
      },
      hints: [
        "Start with the German loanword for a coming-of-age novel.",
        "Add the prefix indicating inversion or opposition.",
      ],
      solution: [
        "A classical *Bildungsroman* charts moral growth toward authentic social integration.",
        "When adulthood instead brings disillusionment or self-erasure, critics call the form an **anti-Bildungsroman**.",
      ],
    },
    {
      id: "3-intertextuality-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "allusion-motif-dialogue",
      marks: 3,
      question:
        "Explain how postcolonial or feminist 'writing back' alters a reader's understanding of a canonical precursor text. Illustrate your explanation with either a brief original scenario or a clearly marked example work.",
      hints: [
        "Focus on whose perspective moves from the margin to the centre.",
        "Explain what ideological assumption in the precursor text becomes visible once that silenced voice speaks.",
        "Show how the change works retrospectively — transforming how we re-read the original.",
      ],
      modelAnswer:
        "Postcolonial and feminist writing back shifts narrative authority to a previously silenced or stereotyped marginal figure, exposing the imperial or patriarchal blind spots embedded in a canonical precursor. For example, Jean Rhys's *Wide Sargasso Sea* [Example text — not a set text] reclaims the Caribbean history and psychological agency of the Creole wife demonised in Charlotte Brontë's *Jane Eyre* [Example text — not a set text]. Crucially, this dialogue works retrospectively: once the silenced voice enters the record, readers can no longer view the original canonical triumph as morally innocent.",
      markScheme: [
        {
          point: "Identifies re-centring of a silenced, marginalised, or stereotyped perspective.",
          keywords: ["silenced", "marginal", "marginalised", "marginalized", "reclaims", "agency"],
        },
        {
          point: "Explains how this exposes ideological, imperial, or patriarchal assumptions in the precursor.",
          keywords: ["imperial", "patriarchal", "colonial", "blind spots", "ideological", "assumptions"],
        },
        {
          point: "Articulates the retrospective effect on re-reading the original work (with illustration).",
          keywords: ["retrospectively", "retrospective", "re-read", "no longer", "innocent", "original"],
        },
      ],
    },
    {
      id: "3-intertextuality-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Construct",
      guideRef: "comparative-synthesis-architecture",
      marks: 4,
      question:
        "Rewrite this weak Paper 2 thesis into a Band 5 comparative thesis demonstrating **divergence within similarity**, contrasting a stage play and a novel (you may keep the works anonymous as Play A and Novel B):\n\n> *Weak draft:* 'Both Play A and Novel B show that family secrets damage relationships.'",
      hints: [
        "Open with a concessive clause ('While both...') that refines 'damage relationships' into a sharper conceptual tension.",
        "Assign a medium-specific craft choice to Play A (e.g. domestic staging, subtext, explosive confrontation).",
        "Pivot with 'whereas' to assign a contrasting prose craft choice and tonal/thematic effect to Novel B (e.g. fragmented focalisation, withheld confession).",
      ],
      modelAnswer:
        "While both works expose domestic secrecy as a corrosive barrier that fractures kinship, Play A dramatises concealment as volatile theatrical pressure through claustrophobic parlour staging and tense conversational subtext that erupts into public reckoning, whereas Novel B renders secrecy as quiet emotional erosion through unreliable retrospective focalisation and deliberate narrative omissions that deny the family any cathartic release.",
      markScheme: [
        {
          point: "Establishes a sharper shared conceptual claim beyond the weak draft's cliché.",
          keywords: ["corrosive", "fractures", "concealment", "while both", "kinship", "domestic"],
        },
        {
          point: "Identifies medium-specific dramatic craft and effect for Play A.",
          keywords: ["staging", "subtext", "theatrical", "proxemics", "lighting", "public", "dialogue"],
        },
        {
          point: "Uses a precision contrastive connective to pivot to Novel B.",
          keywords: ["whereas", "conversely", "by contrast", "in counterpoint"],
        },
        {
          point: "Contrasts medium-specific prose craft and a divergent tonal or thematic outcome for Novel B.",
          keywords: ["focalisation", "focalization", "omissions", "unreliable", "erosion", "cathartic", "retrospective"],
        },
      ],
      markbands: [
        {
          band: "Band 4 (4 marks)",
          marks: [4, 4],
          descriptor:
            "Articulates a nuanced divergence-within-similarity thesis integrating distinct form-specific craft choices and contrasting conceptual effects.",
          indicators: [
            "Concessive shared tension ('While both...')",
            "Specific Drama vs Prose Fiction craft contrast",
            "Precision contrastive pivot and divergent implication",
          ],
        },
        {
          band: "Band 2–3 (2–3 marks)",
          marks: [2, 3],
          descriptor:
            "Improves upon the weak draft with clear contrast or craft awareness, though one work's medium or conceptual nuance remains underdeveloped.",
        },
        {
          band: "Band 1 (0–1 marks)",
          marks: [0, 1],
          descriptor:
            "Restates plot similarity with minimal craft contrast or remains vague.",
        },
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (EXACTLY 2 papers × 15 questions = 30 questions)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PRACTICE PAPER 1: Conventions, Allusion & Cross-Form Craft (15 Qs)
    // -----------------------------------------------------------------------
    {
      id: "3-intertextuality-p1",
      title: "Practice Paper 1: Genre Subversion, Allusion & Cross-Form Craft",
      level: "SL",
      questions: [
        {
          id: "3-intertextuality-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "conventions-traditions-subversion",
          question:
            "What three-word critical concept, formulated by Hans Robert Jauss, names the bundle of genre conventions and cultural assumptions a reader brings to a text?",
          answer: {
            type: "text",
            accept: ["horizon of expectations", "the horizon of expectations", "erwartungshorizont"],
            display: "horizon of expectations",
          },
          hints: [
            "It pairs a visual word for the farthest line you can see with what you anticipate from a genre.",
            "In German, Jauss called it *Erwartungshorizont*.",
          ],
          solution: [
            "Hans Robert Jauss coined the **horizon of expectations** to explain how readers measure every literary work against inherited genre codes.",
          ],
        },
        {
          id: "3-intertextuality-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "allusion-motif-dialogue",
          question:
            "Name the Russian literary theorist whose concept of **dialogism** — arguing that every utterance responds to prior voices — laid the foundation for intertextuality.",
          answer: {
            type: "text",
            accept: ["Mikhail Bakhtin", "Bakhtin"],
            display: "Mikhail Bakhtin",
          },
          hints: [
            "Julia Kristeva built directly on his work in 1966.",
            "His surname starts with B.",
          ],
          solution: [
            "**Mikhail Bakhtin** theorised *dialogism*, showing that literary language always engages in live dialogue with prior texts and social voices.",
          ],
        },
        {
          id: "3-intertextuality-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "conventions-traditions-subversion",
          question:
            "In classical sonnet architecture, what Italian technical term names the structural turn or shift in thought, tone, or argument (typically around line 9 or line 13)?",
          answer: {
            type: "text",
            accept: ["volta", "the volta"],
            display: "volta",
          },
          hints: [
            "It literally means 'turn' in Italian.",
            "Modern subversive sonnets often delay, misplace, or refuse this structural pivot.",
          ],
          solution: [
            "The **volta** is the rhetorical or emotional pivot of a sonnet — a key site where modern poets subvert traditional expectations of neat resolution.",
          ],
        },
        {
          id: "3-intertextuality-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "allusion-motif-dialogue",
          question:
            "A contemporary spy thriller quietly patterns its entire plot, character cast, and tragic ending on Shakespeare's *Macbeth* [Example text — not a set text] without quoting a single Shakespearean line. What two-word type of allusion is this?",
          answer: {
            type: "text",
            accept: ["structural allusion", "a structural allusion", "architectural allusion"],
            display: "structural allusion",
          },
          traps: [
            {
              spec: { type: "text", accept: ["explicit allusion", "local allusion"] },
              feedback:
                "Explicit/local allusion occurs within a brief line or phrase; when an entire work's plot blueprint mirrors a precursor, it is a structural allusion.",
            },
          ],
          hints: [
            "Contrast local/explicit references with whole-text blueprint echoes.",
            "The first word describes how the echo shapes the text's overall architecture.",
          ],
          solution: [
            "Patterning an entire plot arc and character constellation on a precursor text is a **structural allusion**.",
          ],
        },
        {
          id: "3-intertextuality-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "cross-form-connections",
          question:
            "In Prose Fiction analysis, what three-word narrative technique blends a character's inner idioms and emotional consciousness seamlessly into third-person grammatical narration (often serving as Prose's counterpart to Drama's soliloquy)?",
          answer: {
            type: "text",
            accept: ["free indirect discourse", "free indirect speech", "free indirect style"],
            display: "free indirect discourse",
          },
          hints: [
            "No quotation marks or 'she thought' tags are used, yet the character's voice colours the third-person narrator.",
            "Three words beginning with F, I, D (or S).",
          ],
          solution: [
            "**Free indirect discourse** (or *free indirect speech/style*) merges third-person grammar with character interiority — frequently paired with dramatic soliloquy or subtext in cross-form comparisons.",
          ],
        },
        {
          id: "3-intertextuality-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "allusion-motif-dialogue",
          question:
            "What single term names a universal, cross-cultural character pattern or mythic plot (such as the trickster, the exile's return, or the descent into the underworld) recurring across unrelated literary traditions?",
          answer: {
            type: "text",
            accept: ["archetype", "an archetype"],
            display: "archetype",
          },
          traps: [
            {
              spec: { type: "text", accept: ["motif", "a motif"] },
              feedback:
                "A motif is a recurring concrete textual detail (like keys or mirrors); a universal cross-cultural character role or mythic pattern is an archetype.",
            },
          ],
          hints: [
            "Do not confuse this with a concrete textual motif like a recurring colour or prop.",
            "Starts with 'arch-' (meaning original pattern).",
          ],
          solution: [
            "An **archetype** is a universal cross-cultural role, symbol, or mythic narrative pattern echoed across eras and traditions.",
          ],
        },
        {
          id: "3-intertextuality-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "conventions-traditions-subversion",
          question:
            "Which literary mode weaves supernatural or impossible occurrences matter-of-factly into recognisable historical and political reality — as exemplified in Gabriel García Márquez's *One Hundred Years of Solitude* [Example text — not a set text]?",
          answer: {
            type: "text",
            accept: ["magical realism", "magic realism"],
            display: "magical realism",
          },
          hints: [
            "Two words combining the marvellous with the everyday documentary mode.",
            "Unlike pure fantasy, the narrator treats impossible events in a calm, deadpan tone.",
          ],
          solution: [
            "**Magical realism** blends surreal or impossible phenomena seamlessly into grounded sociopolitical reality.",
          ],
        },
        {
          id: "3-intertextuality-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "conventions-traditions-subversion",
          marks: 4,
          question:
            "Read this unseen opening stanza of a fourteen-line poem:\n\n> *Shall I compare thee to a leasehold flat / With damp behind the plaster, due in May? / Rough rents do shake the promises we sat / To sign before the agent slipped away.*\n\nAnalyse how the speaker subverts Shakespearean sonnet conventions to comment on modern economic precarity.",
          hints: [
            "Identify the specific canonical sonnet opening being parodied/echoed ('Shall I compare thee...').",
            "Examine the collision between high romantic diction/metre and mundane rental vocabulary ('leasehold flat', 'damp', 'rough rents').",
            "Link the comedic/ironic deflation to a serious critique of housing insecurity.",
          ],
          modelAnswer:
            "The stanza deliberately echoes the iconic opening rhythm and phrasing of Shakespeare's Sonnet 18 [Example text — not a set text] ('Shall I compare thee...'), activating the reader's horizon of expectations for timeless romantic idealisation. Immediately, however, bureaucratic housing diction ('leasehold flat', 'damp behind the plaster', 'rough rents') punctures that elevated register through bathetic deflation. By substituting a fleeting landlord's contract ('due in May') for eternal summer, the speaker parodies Renaissance immortality tropes to expose how modern economic insecurity intrudes upon intimate domestic security. The regular iambic cadence makes the mundane anxiety sound darkly ironic rather than purely comic.",
          markScheme: [
            {
              point: "Recognises the explicit echo of Shakespearean love-sonnet convention and reader expectations.",
              keywords: ["sonnet 18", "idealisation", "idealization", "horizon", "romantic", "eternal"],
            },
            {
              point: "Analyses the bathetic clash between poetic form/metre and mundane rental diction.",
              keywords: ["bathos", "bathetic", "deflation", "bureaucratic", "mundane", "register", "punctures"],
            },
            {
              point: "Interprets the thematic critique of financial/housing insecurity invading personal life.",
              keywords: ["insecurity", "housing", "economic", "landlord", "contract", "temporary"],
            },
            {
              point: "Evaluates the ironic tension generated by maintaining traditional cadence or parodic tone.",
              keywords: ["ironic", "parodies", "cadence", "iambic", "tension"],
            },
          ],
          markbands: [
            {
              band: "Band 4 (4 marks)",
              marks: [4, 4],
              descriptor:
                "Perceptively connects the sonnet echo, lexical bathos, metrical irony, and social critique of housing precarity.",
            },
            {
              band: "Band 2–3 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Spots the parody of love poetry and quotes rental diction, with partial analysis of tone or conceptual implication.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "Paraphrases the stanza as being about renting a flat without analysing sonnet conventions.",
            },
          ],
        },
        {
          id: "3-intertextuality-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "allusion-motif-dialogue",
          marks: 4,
          question:
            "Read this unseen excerpt from a contemporary short story:\n\n> *Every evening Dev sat beneath the flickering sodium streetlamp beside the ring road, offering stray coins to passing commuters as if tolling souls across a black tarmac Styx. Nobody paused; headlights swept over his palm like indifferent oars.*\n\nUsing the three-step allusion approach (Name → Transform → Effect), analyse how the mythic allusion shapes the reader's perception of urban alienation.",
          hints: [
            "Name the Greek underworld river and ferryman archetype invoked ('Styx', 'coins', 'oars').",
            "Examine how classical myth is transformed into gritty modern commuter imagery ('sodium streetlamp', 'black tarmac', 'headlights').",
            "Evaluate the resulting mood and social critique of urban indifference.",
          ],
          modelAnswer:
            "The passage explicitly alludes to the Greek underworld river Styx and Charon's ferryman archetype through 'coins', 'tolling souls', and 'oars'. Yet the writer transforms this sacred mythic crossing into desolate urban infrastructure — 'sodium streetlamp', 'ring road', and 'black tarmac' — turning commuting rush-hour traffic into a ghostly procession. Crucially, the simile 'headlights swept over his palm like indifferent oars' casts anonymous drivers as deadened phantoms while isolating Dev as an unheeded witness on the margins. The mythic magnification elevates a fleeting street encounter into an indictment of modern metropolitan numbness and spiritual estrangement.",
          markScheme: [
            {
              point: "Accurately identifies the Greek underworld / River Styx / Charon ferryman allusion.",
              keywords: ["underworld", "charon", "ferryman", "greek", "mythic"],
            },
            {
              point: "Analyses how the classical myth is transposed into bleak contemporary urban diction.",
              keywords: ["infrastructure", "urban", "transposed", "transforms", "commuting", "tarmac"],
            },
            {
              point: "Close-reads specific imagery (headlights as indifferent oars / ghostlike commuters).",
              keywords: ["simile", "indifferent", "phantoms", "ghostly", "anonymous", "drivers"],
            },
            {
              point: "Evaluates the conceptual effect: magnifying ordinary street isolation into spiritual/social critique.",
              keywords: ["elevates", "magnification", "indictment", "numbness", "estrangement", "margins"],
            },
          ],
          markbands: [
            {
              band: "Band 4 (4 marks)",
              marks: [4, 4],
              descriptor:
                "Completes the full Name → Transform → Effect chain with crisp close reading of imagery and urban critique.",
            },
            {
              band: "Band 2–3 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Names the Styx/underworld link and notes loneliness, with partial analysis of how modern imagery transforms the myth.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "Merely spots 'Styx' or summarises Dev sitting by a road.",
            },
          ],
        },
        {
          id: "3-intertextuality-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "allusion-motif-dialogue",
          marks: 4,
          question:
            "Distinguish clearly between **parody** and **pastiche**, explaining how a reader identifies which mode an author is using and what different effects each produces.",
          hints: [
            "Define the shared starting point: both imitate a recognisable precursor style or genre.",
            "Contrast critical/satirical ironic distance (parody) against neutral/affectionate homage or collage (pastiche).",
            "Identify textual clues (exaggeration, bathos, incongruity vs faithful stylistic immersion).",
          ],
          modelAnswer:
            "Both parody and pastiche imitate recognisable precursor styles, yet they diverge sharply in critical attitude and tonal distance. Parody mimics a genre or authorial voice with deliberate exaggeration, incongruity, or bathos in order to satirise its clichés and expose ideological artificiality. By contrast, pastiche reproduces or collages earlier styles neutrally or affectionately — functioning as nostalgic homage, atmospheric texture, or postmodern patchwork without mocking its target. A reader distinguishes them by checking whether the surrounding context deflates the borrowed voice ironically (parody) or honours its craft earnestly (pastiche).",
          markScheme: [
            {
              point: "Notes the shared mechanism of imitating recognisable earlier styles/genres.",
              keywords: ["imitate", "precursor", "borrow", "recognisable", "recognizable"],
            },
            {
              point: "Defines parody via satirical, ironic, or critical distance and exaggeration/bathos.",
              keywords: ["satirise", "satirize", "ironic", "exaggeration", "bathos", "mocking", "artificiality"],
            },
            {
              point: "Defines pastiche via neutral, affectionate homage, atmosphere, or patchwork without mockery.",
              keywords: ["neutral", "affectionately", "homage", "collage", "patchwork", "nostalgic"],
            },
            {
              point: "Explains how textual clues (deflation vs earnest immersion) guide reader judgement.",
              keywords: ["deflates", "incongruity", "earnestly", "tonal", "clues", "attitude"],
            },
          ],
          markbands: [
            {
              band: "Band 4 (4 marks)",
              marks: [4, 4],
              descriptor:
                "Crisp, balanced distinction articulating tone, critical stance, textual clues, and divergent reader effects.",
            },
            {
              band: "Band 2–3 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Accurately contrasts mocking vs affectionate imitation, with brief explanation of clues or effect.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "Vague or partially conflated definitions.",
            },
          ],
        },
        {
          id: "3-intertextuality-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "allusion-motif-dialogue",
          marks: 4,
          question:
            "In an unseen novel spanning thirty years, a cracked porcelain tea-cup appears at three turning points: (1) carried wrapped in linen by a refugee grandmother escaping border conflict; (2) hidden nervously inside a cupboard by her teenage granddaughter ashamed of its chipped rim in front of wealthy classmates; (3) placed centre-table beside a new passport at the novel's end. Analyse how this evolving **motif** constructs thematic meaning across the narrative arc.",
          hints: [
            "Trace the three distinct stages rather than calling the cup a static symbol of 'heritage'.",
            "Examine stage 2 carefully: why does hiding the chipped cup represent internalised cultural shame?",
            "Connect stage 3 (beside the passport) to reconciliation between inherited memory and contemporary identity.",
          ],
          modelAnswer:
            "Rather than remaining a static emblem, the cracked porcelain cup functions as a dynamic motif whose connotations mutate alongside generational identity. Initially, wrapping it in linen sacralises fragile continuity — an heirloom preserving memory against violent displacement. In adolescence, concealing the chipped rim inside a cupboard transforms the object into an index of class anxiety and internalised cultural shame under peer scrutiny. Finally, placing the visibly flawed cup beside a new passport reconciles heritage with mobility: imperfection is no longer hidden, signalling hard-won pride and hybrid belonging.",
          markScheme: [
            {
              point: "Recognises the cup as a dynamic/evolving motif rather than a static symbol.",
              keywords: ["dynamic", "mutates", "evolves", "generational", "static"],
            },
            {
              point: "Interprets Stage 1 as fragile continuity/memory carried through displacement.",
              keywords: ["continuity", "displacement", "heirloom", "sacralises", "survival"],
            },
            {
              point: "Interprets Stage 2 as internalised shame or class/cultural alienation.",
              keywords: ["shame", "alienation", "anxiety", "concealing", "scrutiny"],
            },
            {
              point: "Synthesises Stage 3 (juxtaposed with the passport) as reconciled hybrid identity/pride.",
              keywords: ["reconciles", "hybrid", "pride", "belonging", "imperfection"],
            },
          ],
          markbands: [
            {
              band: "Band 4 (4 marks)",
              marks: [4, 4],
              descriptor:
                "Tracks all three stages perceptively as an evolving structural arc charting generational identity.",
            },
            {
              band: "Band 2–3 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Explains most stages accurately but treats transitions somewhat descriptively.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "Repeats the three plot moments or gives a single flat label ('means family').",
            },
          ],
        },
        {
          id: "3-intertextuality-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare",
          guideRef: "cross-form-connections",
          marks: 6,
          question:
            "Compare how these two unseen extracts from **different literary forms** convey powerlessness inside an institution:\n\n- **Extract A (Drama):** *[A bare fluorescent office. The CLERK sits elevated behind a glass partition stamping forms rhythmically: THUD — pause — THUD. NADIA stands below holding a damp paper folder. She opens her mouth twice; each time the stamp lands, drowning out her first syllable.]*\n- **Extract B (Prose Fiction):** *By the fourth corridor Nadia felt herself shrinking to the scale of a footnote. Every door bore a brass plaque longer than her own surname, and when the clerk finally beckoned, she heard someone — surely not herself — thank him twice for keeping her waiting.*",
          hints: [
            "Open with a shared conceptual focus: both dramatise bureaucratic diminishment and silenced voice.",
            "Analyse Drama's physical/auditory staging: elevated glass partition (proxemics/hierarchy), fluorescent glare, percussive stamp drowning speech.",
            "Pivot via precision contrast ('whereas') to Prose Fiction's internalised focalisation, self-diminishing metaphor ('footnote'), and alienated dissociation ('surely not herself').",
            "Conclude by evaluating what each form uniquely reveals about institutional power.",
          ],
          modelAnswer:
            "While both extracts expose how bureaucratic institutions systematically shrink individual agency, the playwright externalises intimidation through sensory staging and spatial hierarchy, whereas the novelist traces psychological self-erasure from inside the character's fractured consciousness. In Extract A, visual proxemics — elevating the clerk behind a glass partition while Nadia stands below clutching a vulnerable 'damp paper folder' — makes asymmetrical power immediately legible to a live audience. Crucially, the mechanical acoustic rhythm of the stamp ('THUD — pause — THUD') physically obliterates Nadia's voice before speech can form, dramatising coercion as an external, audible barrier. Conversely, Extract B penetrates Nadia's interiority through third-person limited focalisation, rendering powerlessness as self-diminishment via the textual metaphor of 'shrinking to the scale of a footnote' beside imposing 'brass plaques'. Pushing this psychological toll further, the parenthetical dissociation ('surely not herself') reveals how institutional deference colonises even her involuntary politeness ('thank him twice'). Ultimately, pairing these forms reveals two sides of bureaucratic domination: Drama stages the visible machinery of silencing, while Prose exposes how subjects quietly internalise their own subordination.",
          markScheme: [
            {
              point: "Frames a clear comparative thesis establishing shared institutional diminishment with cross-form divergence.",
              keywords: ["externalises", "externalizes", "interiority", "bureaucratic", "agency", "whereas"],
            },
            {
              point: "Analyses Drama's spatial/visual craft (proxemics, elevation, glass barrier, damp folder).",
              keywords: ["proxemics", "partition", "asymmetrical", "hierarchy", "vulnerable", "audience"],
            },
            {
              point: "Analyses Drama's auditory craft (percussive stamp rhythm physically drowning speech).",
              keywords: ["acoustic", "rhythm", "obliterates", "audible", "mechanical", "coercion"],
            },
            {
              point: "Analyses Prose's focalisation and figurative diminution ('scale of a footnote', brass plaques).",
              keywords: ["focalisation", "focalization", "footnote", "metaphor", "self-diminishment", "imposing"],
            },
            {
              point: "Analyses Prose's psychological dissociation/irony ('surely not herself', thanking for delay).",
              keywords: ["dissociation", "parenthetical", "deference", "internalise", "internalize", "subordination"],
            },
            {
              point: "Delivers evaluative cross-form synthesis contrasting external machinery vs internalised compliance.",
              keywords: ["machinery", "ultimately", "conversely", "pairing", "silencing"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (6 marks)",
              marks: [6, 6],
              descriptor:
                "Sustained integrated cross-form comparison with perceptive evaluation of medium-specific Drama and Prose craft.",
              indicators: [
                "Nuanced divergence-within-similarity framing",
                "Form-authentic vocabulary (proxemics, acoustic rhythm, focalisation, dissociation)",
                "Balanced 50/50 analysis culminating in conceptual synthesis",
              ],
            },
            {
              band: "Band 3–4 (4–5 marks)",
              marks: [4, 5],
              descriptor:
                "Clear, well-evidenced comparison identifying genuine form-specific tools, though synthesis or balance may dip slightly.",
            },
            {
              band: "Band 2 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Describes both extracts mostly separately with limited attention to how Drama and Prose operate differently.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "Minimal plot paraphrase without meaningful literary craft analysis.",
            },
          ],
        },
        {
          id: "3-intertextuality-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Examine",
          guideRef: "conventions-traditions-subversion",
          marks: 6,
          question:
            "Examine how modern playwrights can both inherit and subvert classical tragic conventions (*hamartia*, noble status, *anagnorisis*, *catharsis*) to interrogate contemporary social pressures. Refer to specific generic shifts (marking any illustrative real work with `[Example text — not a set text]`).",
          hints: [
            "Outline the classical Aristotelian horizon (noble stature, fatal error, self-recognition, emotional purgation).",
            "Explain how modern tragedy democratises stature (ordinary/working protagonists) and shifts causality from personal flaw toward structural/economic pressures.",
            "Examine what happens when *anagnorisis* or *catharsis* is withheld — leaving the audience unsettled rather than purged.",
            "Include an illustrative text clearly marked as `[Example text — not a set text]` (e.g. Arthur Miller's *Death of a Salesman*).",
          ],
          modelAnswer:
            "Classical tragedy establishes a potent horizon of expectations rooted in Aristotelian poetics: a figure of elevated rank falls through an error of judgement (*hamartia*), suffers a sharp reversal (*peripeteia*), attains painful self-knowledge (*anagnorisis*), and grants the audience cleansing emotional release (*catharsis*). Modern dramatists deliberately invoke this austere arc of inevitability while subverting its aristocratic assumptions to critique systemic social forces. First, by centring ordinary working-class or marginalised protagonists — as in Arthur Miller's *Death of a Salesman* [Example text — not a set text] — modern tragedy asserts that everyday dignity warrants tragic weight, redefining ruin as the collision between fragile human illusions and ruthless economic structures rather than purely personal hubris. Second, contemporary playwrights frequently fracture or withhold redemptive *anagnorisis*, allowing protagonists to remain trapped inside ideological myths until the curtain falls. Finally, refusing comforting *catharsis* denies spectators neat moral closure: instead of leaving the theatre purged and reconciled to cosmic order, the audience departs politically unsettled, compelled to question the social order that crushed the protagonist.",
          markScheme: [
            {
              point: "Accurately defines classical tragic conventions establishing the reader/audience horizon.",
              keywords: ["aristotelian", "elevated", "peripeteia", "judgement", "horizon"],
            },
            {
              point: "Explains the democratisation of tragic stature to ordinary/marginalised protagonists.",
              keywords: ["ordinary", "working-class", "dignity", "marginalised", "marginalized", "aristocratic"],
            },
            {
              point: "Shows how causality shifts from individual flaw toward systemic/economic pressures.",
              keywords: ["systemic", "economic", "structures", "illusions", "hubris"],
            },
            {
              point: "Examines how withholding or fracturing *anagnorisis* intensifies tragic critique.",
              keywords: ["withhold", "fracture", "myths", "trapped", "self-knowledge"],
            },
            {
              point: "Evaluates how denying neat *catharsis* keeps the audience critically unsettled.",
              keywords: ["closure", "unsettled", "purged", "politically", "spectators"],
            },
            {
              point: "Supports analysis with a crisp, properly marked illustrative example or concrete dramatic scenario.",
              keywords: ["example text", "miller", "curtain", "theatre"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (6 marks)",
              marks: [6, 6],
              descriptor:
                "Insightful, cohesive examination linking classical tragic conventions to specific modern subversions and audience impact.",
            },
            {
              band: "Band 3–4 (4–5 marks)",
              marks: [4, 5],
              descriptor:
                "Solid knowledge of tragic terms and modern shifts, though audience effect or systemic critique could be sharper.",
            },
            {
              band: "Band 2 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Lists tragic conventions with limited analytical explanation of subversion.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "General remarks about sad plays without precise tragic terminology.",
            },
          ],
        },
        {
          id: "3-intertextuality-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "allusion-motif-dialogue",
          marks: 6,
          question:
            "Read this unseen dramatic monologue spoken by the silent portrait-subject of a celebrated Renaissance painting:\n\n> *Three winters I stood motionless so your varnish might gleam; / You titled me 'Quiet Virtue' and signed beneath my knee. / Tourists praise the gold thread stitched across my stiffened seam — / Not one asks why my knuckles clench the silk they come to see.*\n\nAnalyse how this poem uses **revisionary writing back** and formal irony to challenge canonical artistic representation.",
          hints: [
            "Identify the shift in voice: a silent aesthetic object turns into an accusatory speaker ('you titled me').",
            "Analyse the contrast between museum aesthetics ('varnish', 'gold thread', 'Quiet Virtue') and suppressed bodily tension ('motionless', 'stiffened seam', 'knuckles clench').",
            "Consider the formal irony: the speaker uses disciplined rhyming quatrains (ABAB) — echoing traditional elegance — to deliver quiet fury.",
            "Evaluate how the final line indicts complicit modern spectators ('Tourists... Not one asks').",
          ],
          modelAnswer:
            "By granting a sharp first-person voice to a nameless artistic subject, the poem exemplifies feminist revisionary writing back against canonical objectification. The opening accusation ('Three winters I stood motionless so your varnish might gleam') strips away romanticised museum aura to expose unpaid physical endurance underlying the artist's prestige. Tellingly, the painter's signature 'beneath my knee' and abstract label 'Quiet Virtue' reduce a living woman to moral property, erasing her identity behind patriarchal iconography. Against the ornamental glitter of 'gold thread', tactile diction of physical strain ('stiffened seam', 'knuckles clench') reveals repressed resistance hidden in plain sight. Formally, the crisp alternating rhyme and poised rhythm operate ironically: the poem wears the polished symmetry expected of classical portraiture only to weaponise that restraint into biting indictment. Extending its critique from Renaissance creator to modern gallery-goers ('Tourists praise... Not one asks'), the closing line implicates contemporary contexts of reception in perpetuating canonical erasure.",
          markScheme: [
            {
              point: "Identifies feminist/revisionary writing back reversing subject-object hierarchy.",
              keywords: ["objectification", "feminist", "first-person", "agency", "erasure"],
            },
            {
              point: "Analyses the exposure of physical labour/endurance behind artistic prestige ('three winters', 'varnish').",
              keywords: ["endurance", "labour", "labor", "prestige", "aura", "motionless"],
            },
            {
              point: "Examines naming and ownership ('Quiet Virtue', signature beneath the knee).",
              keywords: ["property", "iconography", "patriarchal", "ownership", "label"],
            },
            {
              point: "Contrasts decorative surface ('gold thread') with concealed bodily resistance ('knuckles clench').",
              keywords: ["resistance", "tactile", "strain", "repressed", "clench"],
            },
            {
              point: "Evaluates formal irony in using disciplined rhyme/rhythm to voice simmering defiance.",
              keywords: ["symmetry", "rhyme", "restraint", "poised", "ironically"],
            },
            {
              point: "Extends analysis to modern viewers/reception ('Tourists... Not one asks').",
              keywords: ["reception", "implicates", "gallery", "spectators", "complicit"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (6 marks)",
              marks: [6, 6],
              descriptor:
                "Perceptive close reading weaving writing-back theory, bodily vs aesthetic imagery, formal irony, and reception critique.",
            },
            {
              band: "Band 3–4 (4–5 marks)",
              marks: [4, 5],
              descriptor:
                "Strong grasp of the reclaimed voice and imagery contrast, with less developed attention to rhyme/form or tourist reception.",
            },
            {
              band: "Band 2 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Identifies the woman's anger at the painter with descriptive quotation.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "Literal summary of a painting in a museum.",
            },
          ],
        },
        {
          id: "3-intertextuality-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "cross-form-connections",
          marks: 8,
          question:
            "Compare and evaluate how these two unseen extracts — one a **lyric poem** and one a **literary memoir** — construct the tension between belonging and cultural displacement:\n\n- **Extract A (Lyric Poem):**\n> *My grandmother's tongue / folds small inside customs trays — / two syllables for monsoon, / taxed down to 'rain'. / Even the airport glass / returns my face half-translated.*\n\n- **Extract B (Literary Memoir):**\n> *Each August we drove back to the coastal town where my parents grew up, and each August I noticed my accent widening in the car like an ill-fitting borrowed jacket. My cousins teased me gently for pronouncing the harbour's name with an inland flatness; I laughed along, though I kept the ferry timetable folded inside my pocket as proof that I still knew the tide's hours.*",
          hints: [
            "Establish divergence within similarity: both explore linguistic displacement and hybrid identity, yet deploy radically different form-specific tools and tones.",
            "Analyse Poem A's radical compression: enjambment, customs/border metaphor ('folds small inside customs trays', 'taxed down to rain'), and fractured visual reflection ('half-translated').",
            "Analyse Memoir B's retrospective narrative craft: seasonal repetition ('Each August'), tactile garment simile ('ill-fitting borrowed jacket'), social interplay (teasing cousins), and poignant symbolic keepsake ('ferry timetable').",
            "Evaluate the tonal divergence: stark institutional stripping in Poem A versus tender, ambivalent family negotiation in Memoir B.",
          ],
          modelAnswer:
            "While both extracts portray language as a fragile border where cultural belonging is constantly tested, Extract A dramatises displacement as abrupt institutional diminishment through austere lyric compression, whereas Extract B explores diasporic in-betweenness with affectionate ambivalence through retrospective narrative reflection and domestic anecdote.\n\nIn Extract A, sharp enjambment ('My grandmother's tongue / folds small') physically enacts linguistic contraction on the page, shrinking inherited ancestry to fit inside sterile bureaucratic space ('customs trays'). The fiscal metaphor 'taxed down to \"rain\"' crystallises what translation loses: the lush seasonal specificity of 'monsoon' is stripped into a flat English equivalent by border authority. Ending on the uncanny reflection in 'airport glass' returning a face 'half-translated', the speaker collapses linguistic erosion directly into fractured selfhood.\n\nConversely, Extract B shifts the site of displacement from impersonal state borders into warm yet unsettling kinship rituals. The anaphoric temporal marker 'Each August' signals an ongoing cyclical negotiation rather than a single violent rupture. Through a self-aware retrospective persona, the memoirist captures vocal alienation via the tactile simile of an accent 'widening... like an ill-fitting borrowed jacket' — suggesting identity that feels simultaneously familiar and slightly awkward. Unlike Poem A's stark institutional coldness, the cousins' 'gentle' teasing keeps belonging tender, while the secret 'ferry timetable' tucked inside a pocket operates as a quiet private talisman asserting intimate local knowledge ('the tide's hours').\n\nUltimately, the cross-form contrast shapes contrasting emotional truths: Poetry's stripped-down imagery and line breaks confront readers with the sharp violence of translation loss, whereas Literary Non-Fiction's reflective pacing and lived social detail capture the softer, unresolved ache of belonging partly everywhere and wholly nowhere.",
          markScheme: [
            {
              point: "Articulates a nuanced comparative thesis highlighting shared linguistic displacement with cross-form and tonal divergence.",
              keywords: ["compression", "ambivalence", "retrospective", "whereas", "displacement"],
            },
            {
              point: "Analyses Poem A's lineation/enjambment mimicking linguistic shrinkage.",
              keywords: ["enjambment", "contraction", "shrink", "line breaks", "sterile"],
            },
            {
              point: "Analyses Poem A's bureaucratic/economic translation imagery ('customs trays', 'taxed down to rain').",
              keywords: ["bureaucratic", "fiscal", "monsoon", "equivalent", "authority"],
            },
            {
              point: "Analyses Poem A's closing metaphor equating linguistic loss with splintered identity ('half-translated').",
              keywords: ["uncanny", "selfhood", "fractured", "erosion", "reflection"],
            },
            {
              point: "Analyses Memoir B's cyclical narrative frame ('Each August') and retrospective persona.",
              keywords: ["anaphoric", "cyclical", "persona", "negotiation", "kinship"],
            },
            {
              point: "Analyses Memoir B's tactile garment simile ('ill-fitting borrowed jacket') conveying awkward hybridity.",
              keywords: ["simile", "tactile", "awkward", "familiar", "hybrid"],
            },
            {
              point: "Analyses Memoir B's tender social interplay and symbolic keepsake ('ferry timetable', 'tide's hours').",
              keywords: ["talisman", "keepsake", "gentle", "tender", "local"],
            },
            {
              point: "Delivers evaluative cross-form conclusion contrasting poetic starkness with memoiristic nuance.",
              keywords: ["ultimately", "conversely", "violence", "unresolved", "ache"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (7–8 marks)",
              marks: [7, 8],
              descriptor:
                "Perceptive, seamlessly integrated cross-form synthesis evaluating poetic compression against retrospective memoir craft with nuanced tonal insight.",
              indicators: [
                "Balanced 50/50 attention across Poetry and Literary Non-Fiction",
                "Form-authentic terminology (enjambment, fiscal metaphor, anaphora, retrospective persona)",
                "Evaluates why each medium produces a distinct emotional vision of displacement",
              ],
            },
            {
              band: "Band 3–4 (5–6 marks)",
              marks: [5, 6],
              descriptor:
                "Effective comparative analysis addressing form and imagery in both extracts, with occasional reliance on separate commentary.",
            },
            {
              band: "Band 2 (3–4 marks)",
              marks: [3, 4],
              descriptor:
                "Describes themes of language and home with some relevant quotations, but cross-form craft evaluation remains surface-level.",
            },
            {
              band: "Band 1 (0–2 marks)",
              marks: [0, 2],
              descriptor:
                "Brief paraphrase of travel/family scenes with minimal analytical focus.",
            },
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2: Paper 2 Comparative Synthesis & Architecture (15 Qs)
    // -----------------------------------------------------------------------
    {
      id: "3-intertextuality-p2",
      title: "Practice Paper 2: Integrated Comparative Architecture & Synthesis",
      level: "SL",
      questions: [
        {
          id: "3-intertextuality-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "comparative-synthesis-architecture",
          question:
            "How many total marks is the IB Diploma English A: Literature Paper 2 comparative essay worth (combining Criteria A, B, C, and D)?",
          answer: {
            type: "number",
            value: 30,
            display: "30 marks",
          },
          hints: [
            "Add Criteria A (10) + B (10) + C (5) + D (5).",
            "Paper 1 is 20 marks per essay; Paper 2 carries a larger comparative total.",
          ],
          solution: [
            "IB Paper 2 is assessed out of **30 marks**: Criterion A (10), Criterion B (10), Criterion C (5), and Criterion D (5).",
          ],
        },
        {
          id: "3-intertextuality-p2-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "comparative-synthesis-architecture",
          question:
            "How many studied literary works must every SL and HL candidate compare in IB English A: Literature Paper 2?",
          answer: {
            type: "number",
            value: 2,
            display: "2 works",
          },
          hints: [
            "Paper 2 is strictly a paired comparison, never one single work and never three.",
            "Remember also the non-overlap rule: neither work may have been used in your IO or HL Essay.",
          ],
          solution: [
            "Every SL and HL candidate compares exactly **2** studied works on Paper 2 (neither of which was used in the IO or HL Essay).",
          ],
        },
        {
          id: "3-intertextuality-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "comparative-synthesis-architecture",
          question:
            "What three-word Band 5 comparative principle describes identifying genuine common thematic ground between two works and then dissecting how their craft, tone, or resolution splits apart?",
          answer: {
            type: "text",
            accept: ["divergence within similarity", "difference within similarity", "contrast within similarity"],
            display: "divergence within similarity",
          },
          hints: [
            "It moves past flat 'Both works show X' claims.",
            "First word starts with D (splitting apart), followed by 'within similarity'.",
          ],
          solution: [
            "**Divergence within similarity** anchors top-band Paper 2 comparison by linking shared conceptual territory directly to contrasting craft choices and effects.",
          ],
        },
        {
          id: "3-intertextuality-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Apply",
          guideRef: "comparative-synthesis-architecture",
          question:
            "Supply the single most precise contrastive conjunction (one word, starting with 'w') to complete this integrated comparative claim: 'Novel A lets grief dissolve quietly into landscape description, ____ Play B forces grief into an explosive public accusation across the dinner table.'",
          answer: {
            type: "text",
            accept: ["whereas", "while"],
            display: "whereas",
          },
          traps: [
            {
              spec: { type: "text", accept: ["analogously", "similarly"] },
              feedback:
                "Look at the sharp tonal opposition (quiet dissolution vs explosive public accusation) — you need a contrastive conjunction starting with 'w'.",
            },
          ],
          hints: [
            "The two clauses sit inside one sentence with a direct structural opposition.",
            "Seven-letter precision contrastive conjunction starting with 'w'.",
          ],
          solution: [
            "**Whereas** (or *while*) cleanly joins two directly opposing authorial manoeuvres inside a single taut comparative sentence.",
          ],
        },
        {
          id: "3-intertextuality-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Apply",
          guideRef: "comparative-synthesis-architecture",
          question:
            "In the **C-A-P-B-S** integrated paragraph blueprint, what does the middle letter **P** represent?",
          answer: {
            type: "text",
            accept: [
              "precision comparative pivot",
              "comparative pivot",
              "pivot",
              "precision pivot",
              "pivot connective",
            ],
            display: "precision comparative pivot",
          },
          hints: [
            "It sits directly between Work A craft analysis and Work B craft analysis.",
            "It uses a calibrated connective such as *whereas*, *analogously*, or *conversely*.",
          ],
          solution: [
            "In C-A-P-B-S, **P** stands for the **precision comparative pivot** connecting Work A's craft choice directly to Work B's parallel or contrasting manoeuvre.",
          ],
        },
        {
          id: "3-intertextuality-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "cross-form-connections",
          question:
            "When a student compares a seventeenth-century tragedy and a twenty-first-century novel as though both authors held identical modern views of teenagers and family autonomy, what two-word critical pitfall have they committed?",
          answer: {
            type: "text",
            accept: ["anachronistic flattening", "historical flattening", "anachronism"],
            display: "anachronistic flattening",
          },
          hints: [
            "The first word comes from *anachronism* (misplacing modern norms into an earlier era).",
            "The second word describes squashing genuine historical differences flat.",
          ],
          solution: [
            "**Anachronistic flattening** erases historical contexts of production by forcing texts from distant eras into identical contemporary assumptions.",
          ],
        },
        {
          id: "3-intertextuality-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "comparative-synthesis-architecture",
          marks: 4,
          question:
            "Diagnose **two** distinct structural weaknesses in the following Paper 2 paragraph plan and explain how to fix each one:\n\n> *Prompt:* 'Compare how two works explore the cost of ambition.'\n> *Draft Paragraph 2:* Topic sentence: 'In Novel X, Elena wants to win the scholarship.' → 180 words summarising Elena's exam preparation and fallout with her sister → Closing sentence: 'In Play Y, Marcus is also ambitious and ruins his friendship.'",
          hints: [
            "Check the topic sentence: is it conceptual and comparative, or plot summary for a single text?",
            "Check the weighting and depth given to Play Y versus Novel X.",
            "Explain specifically how to rebuild the paragraph using C-A-P-B-S and divergence within similarity.",
          ],
          modelAnswer:
            "First, the draft opens with single-text plot narration ('Elena wants to win the scholarship') rather than a conceptual comparative claim, inviting chronological summary instead of craft evaluation. To fix this, anchor the topic sentence in a shared analytical tension framing both works — for instance, how ambition turns intimate bonds into transactional rivalries. Second, the paragraph suffers from extreme text imbalance and flat similarity, reducing Play Y to an eleven-word tacked-on afterthought ('also ambitious'). Rebuilding around C-A-P-B-S restores roughly 50/50 depth: analyse one focused narrative choice in Novel X (such as tight focalisation exposing Elena's rationalisations), pivot with a precision connective (*whereas* or *conversely*), evaluate a parallel staging choice in Play Y, and close with evaluative synthesis.",
          markScheme: [
            {
              point: "Diagnoses Flaw 1: single-text plot narration instead of a conceptual comparative topic sentence.",
              keywords: ["plot", "conceptual", "single-text", "narration", "summary"],
            },
            {
              point: "Provides a concrete conceptual repair for the opening claim.",
              keywords: ["shared", "tension", "transactional", "framing", "both works"],
            },
            {
              point: "Diagnoses Flaw 2: extreme imbalance / token mention of Play Y and flat similarity.",
              keywords: ["imbalance", "afterthought", "token", "flat", "eleven-word"],
            },
            {
              point: "Provides an integrated repair restoring balanced craft analysis and precision pivoting.",
              keywords: ["50/50", "pivot", "c-a-p-b-s", "craft", "synthesis", "whereas"],
            },
          ],
          markbands: [
            {
              band: "Band 4 (4 marks)",
              marks: [4, 4],
              descriptor:
                "Precisely diagnoses both structural flaws and offers actionable Band 5 Paper 2 repairs grounded in craft and balance.",
            },
            {
              band: "Band 2–3 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Identifies imbalance and plot summary accurately, with general suggestions for improvement.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "Vague feedback ('add more detail about Play Y') without structural diagnosis.",
            },
          ],
        },
        {
          id: "3-intertextuality-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Construct",
          guideRef: "comparative-synthesis-architecture",
          marks: 4,
          question:
            "For the unseen Paper 2 prompt *'To what extent do two works you have studied present silence as a form of power?'*, explain how a top-band candidate should unpack the prompt's wording in the introduction before outlining two distinct conceptual angles for body paragraphs.",
          hints: [
            "Notice the command phrase 'To what extent': does silence *always* empower, or can it also signal coercion, trauma, or complicity?",
            "Show how testing the boundary between chosen silence (agency/resistance) and imposed silence (oppression) creates an arguable line of inquiry.",
            "Outline two clear conceptual body-paragraph angles that work across both texts simultaneously.",
          ],
          modelAnswer:
            "A top-band introduction avoids agreeing blindly that silence equals power; instead, it interrogates the command phrase 'To what extent' by separating **chosen strategic silence** (which withholds consent or protects autonomy) from **coerced or traumatic silence** (which signals erasure and institutional subjugation). By framing silence as an ambivalent, contested arena rather than a uniform weapon, the essay earns immediate Criterion A nuance. Two strong integrated body angles follow naturally: first, comparing how both writers dramatise **silencing as external control** (through form-specific craft such as stage interruption versus narrative omission); second, examining **defiant or withholding silence as quiet resistance**, evaluating where one work grants genuine agency while the other reveals the devastating emotional cost of remaining mute.",
          markScheme: [
            {
              point: "Interrogates 'To what extent' rather than accepting the prompt's premise uncritically.",
              keywords: ["interrogates", "ambivalent", "contested", "premise", "blindly"],
            },
            {
              point: "Distinguishes chosen/strategic silence from coerced/traumatic silence.",
              keywords: ["strategic", "coerced", "chosen", "subjugation", "autonomy"],
            },
            {
              point: "Proposes an integrated conceptual Body Angle 1 usable across both works.",
              keywords: ["external control", "interruption", "omission", "craft", "angle"],
            },
            {
              point: "Proposes a progressive Body Angle 2 introducing divergence/evaluation of cost or agency.",
              keywords: ["resistance", "agency", "cost", "mute", "divergent", "while"],
            },
          ],
          markbands: [
            {
              band: "Band 4 (4 marks)",
              marks: [4, 4],
              descriptor:
                "Unpacks prompt nuance incisively and designs two progressive, fully integrated conceptual paragraph angles.",
            },
            {
              band: "Band 2–3 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Recognises positive vs negative silence and outlines relevant body ideas, though craft integration is lighter.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "Restates the prompt or proposes splitting the essay into Work A then Work B.",
            },
          ],
        },
        {
          id: "3-intertextuality-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare",
          guideRef: "comparative-synthesis-architecture",
          marks: 6,
          question:
            "Write **one complete integrated comparative body paragraph** (following C-A-P-B-S) comparing how these two unseen extracts use **light and darkness** to dramatise moral exposure:\n\n- **Extract A (Drama):** *[Overhead, a single harsh tungsten bulb drops lower as the tribunal begins. KAVITA steps back toward the painted wall, but the shadow behind her doubles in size across the floorboards.]*\n- **Extract B (Prose Fiction):** *At noon the courtyard offered no merciful shade; every cracked flagstone glared white, and Arun realised with quiet nausea that the neighbours' closed shutters were not empty — behind each slat, watching eyes waited for him to cross the open square.*",
          hints: [
            "C: Open with a conceptual claim framing harsh illumination as inescapable moral scrutiny across both extracts.",
            "A: Analyse Drama's lowering tungsten bulb and doubling shadow (theatrical visual exaggeration of vulnerability/guilt).",
            "P: Use a precision pivot ('Analogously, yet shifting from interior interrogation to communal surveillance...' or 'Whereas...').",
            "B: Analyse Prose's blinding noon glare ('no merciful shade'), somatic focalisation ('quiet nausea'), and unseen watchers behind closed shutters.",
            "S: Close with a crisp synthesis sentence comparing theatrical spectacle against psychological paranoia.",
          ],
          modelAnswer:
            "While both writers weaponise harsh illumination to strip away psychological refuge, Extract A stages scrutiny as overt institutional spectacle, whereas Extract B transforms ordinary daylight into suffocating communal surveillance. In Extract A, the lowering of a 'single harsh tungsten bulb' visually compresses the playing space like an interrogation lamp, trapping Kavita under direct audience gaze; tellingly, her retreat toward the wall backfires as her shadow 'doubles in size across the floorboards', an expressionist visual distortion that magnifies vulnerability into unavoidable public exposure. Shifting from theatrical interrogation to quiet civic policing, Extract B analogously removes shelter through blinding midday glare ('no merciful shade', 'glared white'), yet conveys its dread through intimate third-person focalisation and somatic diction ('quiet nausea'). Whereas Kavita faces an overt tribunal, Arun confronts invisible judgement hidden behind 'closed shutters' and narrow slats, making the sunlit square itself feel like a panopticon of whispered shame. Together, these contrasting lighting regimes reveal that moral exposure is sharpest not when darkness hides danger, but when relentless light denies the individual any unguarded corner.",
          markScheme: [
            {
              point: "C: Opens with a conceptual comparative topic sentence establishing divergence within similarity.",
              keywords: ["illumination", "refuge", "spectacle", "surveillance", "whereas"],
            },
            {
              point: "A: Analyses Drama's lowering tungsten bulb as spatial/institutional compression.",
              keywords: ["tungsten", "interrogation", "compresses", "audience", "playing space"],
            },
            {
              point: "A: Evaluates the doubling shadow as visual/expressionist magnification of exposure.",
              keywords: ["expressionist", "magnifies", "distortion", "vulnerability", "retreat"],
            },
            {
              point: "P: Uses a calibrated comparative pivot linking Drama cleanly into Prose Fiction.",
              keywords: ["analogously", "shifting", "conversely", "civic"],
            },
            {
              point: "B: Analyses Prose's midday glare, somatic focalisation ('quiet nausea'), and concealed watchers.",
              keywords: ["focalisation", "focalization", "somatic", "nausea", "shutters", "panopticon"],
            },
            {
              point: "S: Concludes with an evaluative synthesis sentence connecting both extracts conceptually.",
              keywords: ["together", "ultimately", "unguarded", "regimes", "relentless"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (6 marks)",
              marks: [6, 6],
              descriptor:
                "Exemplary C-A-P-B-S paragraph braiding medium-specific staging and prose focalisation with balanced depth and evaluative synthesis.",
            },
            {
              band: "Band 3–4 (4–5 marks)",
              marks: [4, 5],
              descriptor:
                "Integrated comparison with strong evidence from both extracts; pivot or closing synthesis may be slightly less pointed.",
            },
            {
              band: "Band 2 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Mentions both extracts accurately but leans toward description or unequal analytical depth.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "Summarises light/heat in one or both passages without literary analysis.",
            },
          ],
        },
        {
          id: "3-intertextuality-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Justify",
          guideRef: "cross-form-connections",
          marks: 4,
          question:
            "A classmate insists: *'Never pair a translated novel with an original English play for Paper 2 because translation ruins close reading and different forms cannot be compared smoothly.'* Justify why this advice is misguided under IB Literature AoE 2 and AoE 3 principles.",
          hints: [
            "Rebut the translation claim: explain which robust literary features (imagery, narrative structure, focalisation, pacing, register, cultural tension) transfer richly across translation.",
            "Rebut the cross-form claim: explain how functional equivalence across Drama and Prose Fiction actually boosts Criterion B evaluation.",
            "Mention how comparing distinct cultural/linguistic traditions enriches interpretive depth (Criterion A).",
          ],
          modelAnswer:
            "This advice misunderstands both how works in translation function and what IB Paper 2 rewards. First, translation does not disable rigorous close reading: while candidates avoid fragile arguments built purely on English-only rhymes or puns, macro-craft and semantic architecture — focalisation, temporal pacing, structural motifs, figurative imagery, register, and cultural idioms — remain richly analysable in translated fiction. Second, pairing a novel with a play is frequently an advantage rather than an obstacle: applying functional equivalence lets the writer contrast medium-specific choices (such as theatrical proxemics and audible subtext against prose interiority), making deliberate authorial craft far more visible for Criterion B. Finally, bringing an original English play and a translated novel into dialogue widens cultural perspective and prevents flat plot-matching, directly strengthening Criterion A insight.",
          markScheme: [
            {
              point: "Explains which robust textual features remain richly analysable in translated works.",
              keywords: ["focalisation", "focalization", "motifs", "imagery", "pacing", "register"],
            },
            {
              point: "Notes sensible caution against fragile English-only phonetic wordplay/puns.",
              keywords: ["puns", "rhymes", "fragile", "wordplay"],
            },
            {
              point: "Justifies cross-form pairing via functional equivalence boosting Criterion B craft evaluation.",
              keywords: ["functional equivalence", "criterion b", "medium-specific", "proxemics", "subtext"],
            },
            {
              point: "Highlights how cross-cultural dialogue enriches Criterion A conceptual interpretation.",
              keywords: ["criterion a", "cultural", "perspective", "dialogue", "plot-matching"],
            },
          ],
          markbands: [
            {
              band: "Band 4 (4 marks)",
              marks: [4, 4],
              descriptor:
                "Thorough, persuasive rebuttal addressing translation craft hygiene, cross-form functional equivalence, and IB rubric rewards.",
            },
            {
              band: "Band 2–3 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Rebuts both misconceptions reasonably well, though specific links to rubric criteria or resilient craft features are briefer.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "Asserts that IB allows translated works without explaining analytically why the pairing succeeds.",
            },
          ],
        },
        {
          id: "3-intertextuality-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "conventions-traditions-subversion",
          marks: 6,
          question:
            "Read these two unseen endings to short stories about returning to an ancestral village:\n\n- **Ending A (Pastoral Adherence):** *At dusk the orchard gate swung open on oiled hinges; the smell of crushed thyme rose under his boots, and hearing the church bell carry cleanly across the valley, he set down his pack and breathed as though twenty restless years had melted into dew.*\n- **Ending B (Pastoral Subversion):** *At dusk the orchard gate hung by one rusted bolt over concrete drainage; the scent of diesel drifted across dry stubble, and when a siren wailed down the ring road, he kept his pack buckled tightly to his shoulders.*\n\nAnalyse how Ending B gains sharper emotional force when read against the pastoral horizon fulfilled in Ending A.",
          hints: [
            "Analyse how Ending A satisfies classical pastoral conventions: sensory harmony ('crushed thyme', 'church bell'), ease ('oiled hinges'), and spiritual restoration ('melted into dew').",
            "Track Ending B's point-for-point structural inversions: 'oiled hinges' → 'rusted bolt', 'thyme' → 'diesel', 'church bell' → 'siren', setting down the pack → keeping it 'buckled tightly'.",
            "Explain the intertextual reader effect: Ending B exposes rural nostalgia as an irrecoverable illusion under industrial transformation.",
          ],
          modelAnswer:
            "Ending A lovingly fulfils the classical pastoral horizon of expectations: welcoming domestic motion ('oiled hinges'), aromatic nature ('crushed thyme'), and harmonious acoustics ('church bell carry cleanly') converge to promise healing homecoming, culminating in the protagonist laying down his pack as twenty estranged years 'melt into dew'. Reading Ending B directly alongside this traditional script magnifies its bleak disillusionment because every single sensory cue is methodically inverted. Where Ending A offers smooth entry and organic fragrance, Ending B confronts the traveller with decay and industrial intrusion ('rusted bolt', 'concrete drainage', 'diesel'). Acoustically, the communal reassurance of a 'church bell' mutates into the urgent alarm of a 'siren' along a 'ring road', transforming refuge into transit noise. Most tellingly, the closing kinetic gesture reverses pastoral surrender: keeping his pack 'buckled tightly' signals defensive refusal to belong. Ending B's quiet heartbreak depends upon our memory of Ending A's promise — exposing sentimental rural nostalgia as a sanctuary that modernity has permanently dismantled.",
          markScheme: [
            {
              point: "Identifies Ending A's fulfilment of pastoral harmony, sensory balm, and restorative homecoming.",
              keywords: ["pastoral", "horizon", "restorative", "homecoming", "harmony", "dew"],
            },
            {
              point: "Analyses point-by-point visual/olfactory inversion ('oiled hinges'/'thyme' vs 'rusted bolt'/'diesel').",
              keywords: ["inverted", "industrial", "decay", "diesel", "concrete", "fragrance"],
            },
            {
              point: "Analyses the acoustic inversion from communal 'church bell' to alarming 'siren'.",
              keywords: ["acoustically", "siren", "alarm", "communal", "transit"],
            },
            {
              point: "Close-reads the opposing physical posture (setting down the pack vs keeping it 'buckled tightly').",
              keywords: ["kinetic", "posture", "defensive", "buckled", "refusal"],
            },
            {
              point: "Explains the intertextual dynamic: Ending B hits harder precisely because readers feel the broken pastoral script.",
              keywords: ["promise", "magnifies", "disillusionment", "memory", "script"],
            },
            {
              point: "Articulates the conceptual critique of irrecoverable nostalgia under modernity.",
              keywords: ["nostalgia", "modernity", "dismantled", "sanctuary", "sentimental"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (6 marks)",
              marks: [6, 6],
              descriptor:
                "Incisive integrated analysis mapping sensory, acoustic, and kinetic inversions directly to Jauss's horizon of expectations.",
            },
            {
              band: "Band 3–4 (4–5 marks)",
              marks: [4, 5],
              descriptor:
                "Clearly contrasts pastoral peace with industrial decay using apt quotations, with moderate theoretical synthesis.",
            },
            {
              band: "Band 2 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Describes Ending A as happy and Ending B as sad/polluted with minimal craft evaluation.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "Brief paraphrase of the two endings.",
            },
          ],
        },
        {
          id: "3-intertextuality-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "comparative-synthesis-architecture",
          marks: 4,
          question:
            "Explain how a candidate preparing for a closed-book IB Paper 2 exam should curate and deploy textual evidence from two studied works so that Criterion A and Criterion B remain strong without memorising entire pages.",
          hints: [
            "Discuss ultra-short micro-quotations (2–6 words) rich in diction or metaphor.",
            "Include non-verbal / structural evidence (turning points, staging cues, narrative shifts, recurring motifs, endings).",
            "Explain how to weave micro-quotes seamlessly inside analytical sentences rather than dropping detached quotations.",
          ],
          modelAnswer:
            "Because Paper 2 is closed-book, effective candidates curate compact, high-leverage evidence rather than attempting rote memorisation of long speeches. First, memorising 8–12 razor-sharp micro-quotations (2–6 words each) per work — chosen for dense figurative diction, tonal shifts, or recurring motifs — enables precise word-level close reading that embeds smoothly inside grammatical sentences. Second, candidates pair those micro-quotes with concrete macro-structural evidence: pivotal scene openings, stage directions, lighting or proxemic shifts, temporal leaps, and contrasting endings. Finally, organising revision notes into thematic comparative pairs inside the Learner Portfolio ensures evidence is retrieved ready-linked to conceptual tensions rather than isolated plot chapters, elevating both Criterion A depth and Criterion B craft evaluation.",
          markScheme: [
            {
              point: "Recommends concise micro-quotations (2–6 words) chosen for rich diction/imagery.",
              keywords: ["micro-quotations", "micro-quotes", "2–6 words", "short", "compact", "diction"],
            },
            {
              point: "Advocates embedding quotations seamlessly within analytical syntax.",
              keywords: ["embeds", "embed", "grammatical", "seamlessly", "word-level"],
            },
            {
              point: "Highlights macro-structural / staging evidence (openings, endings, stage directions, temporal shifts).",
              keywords: ["macro-structural", "structural", "stage directions", "proxemic", "endings", "motifs"],
            },
            {
              point: "Connects curated comparative retrieval (e.g. Learner Portfolio matrix) to Criteria A and B.",
              keywords: ["learner portfolio", "criterion a", "criterion b", "conceptual", "comparative"],
            },
          ],
          markbands: [
            {
              band: "Band 4 (4 marks)",
              marks: [4, 4],
              descriptor:
                "Practical, exam-accurate strategy integrating micro-quotations, macro-structural moments, syntax embedding, and comparative curation.",
            },
            {
              band: "Band 2–3 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Recommends short quotes and structural moments cleanly, with lighter linkage to rubric criteria.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "Generic revision advice ('revise both books carefully').",
            },
          ],
        },
        {
          id: "3-intertextuality-p2-q13",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "allusion-motif-dialogue",
          marks: 6,
          question:
            "Compare and contrast how these two unseen extracts repurpose the **labyrinth / maze archetype** to explore grief:\n\n- **Extract A (Lyric Poem):**\n> *I measure corridors of folded coats, / each sleeve a blind turn back to January — / no Ariadne's thread unspools this house, / only the kettle's echo answering itself.*\n\n- **Extract B (Prose Fiction):**\n> *After the funeral, Rafael began drawing meticulous maps of every bus route his brother had ever taken. He knew the city was a labyrinth that gave nothing back, yet tracing each intersection in blue ink kept his hands steady and gave his sorrow edges he could hold.*",
          hints: [
            "Establish divergence within similarity: both cast bereavement through the classical labyrinth archetype, yet arrive at opposite psychological stances.",
            "Analyse Extract A's explicit mythic negation ('no Ariadne's thread'), domestic entrapment ('corridors of folded coats'), and hollow acoustic loop ('kettle's echo answering itself').",
            "Pivot via 'conversely' / 'whereas' to Extract B's active cartography ('meticulous maps', 'blue ink'), paradoxical acceptance ('gave nothing back, yet...'), and soothing containment ('edges he could hold').",
            "Conclude by contrasting suffocating entrapment against disciplined ritual ordering.",
          ],
          modelAnswer:
            "While both writers invoke the classical labyrinth archetype to spatialise bereavement, Extract A renders grief as an inescapable domestic trap devoid of rescue, whereas Extract B transforms the maze into a deliberate ritual of containment that steadies the mourner.\n\nIn Extract A, ordinary household objects mutate into claustrophobic architecture ('corridors of folded coats', 'blind turn back to January'), showing how mourning freezes domestic space inside recurring winter time. Crucially, the explicit mythic negation 'no Ariadne's thread unspools this house' activates the Cretan myth of salvation only to cancel it, leaving the speaker marooned inside the circular auditory isolation of 'the kettle's echo answering itself'.\n\nConversely, Extract B strips away mythic rescue fantasies from the start — acknowledging coolly that the urban labyrinth 'gave nothing back' — yet converts mapping into quiet agency. Through restrained third-person prose and tactile craft detail ('meticulous maps', 'blue ink'), Rafael's cartography imposes geometry upon chaos. The closing tactile metaphor ('edges he could hold') subverts the maze's traditional terror: rather than swallowing the hero, tracing the labyrinth's lines makes overwhelming loss tangible and bearable. Together, the extracts show how a single archetype can signify either paralysing enclosure or active, elegiac ordering.",
          markScheme: [
            {
              point: "Frames divergence within similarity around the shared labyrinth archetype of grief.",
              keywords: ["spatialise", "spatialize", "bereavement", "whereas", "containment", "inescapable"],
            },
            {
              point: "Analyses Extract A's domestic spatialisation and temporal freeze ('corridors of folded coats', 'January').",
              keywords: ["claustrophobic", "domestic", "freezes", "recurring", "winter"],
            },
            {
              point: "Evaluates Extract A's explicit negation of rescue ('no Ariadne's thread') and acoustic loop.",
              keywords: ["ariadne", "negation", "salvation", "cancel", "auditory", "circular"],
            },
            {
              point: "Pivots sharply ('conversely') to Extract B's unsentimental acceptance paired with active agency.",
              keywords: ["conversely", "agency", "unsentimental", "cartography", "geometry"],
            },
            {
              point: "Analyses Extract B's closing tactile metaphor ('edges he could hold') inverting maze dread.",
              keywords: ["tactile", "tangible", "bearable", "subverts", "steadies"],
            },
            {
              point: "Concludes with evaluative synthesis contrasting paralysing enclosure vs ritual ordering.",
              keywords: ["paralysing", "paralyzing", "enclosure", "ritual", "elegiac", "ordering"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (6 marks)",
              marks: [6, 6],
              descriptor:
                "Perceptive, balanced integrated comparison tracking mythic negation in Poetry against active ritual cartography in Prose.",
            },
            {
              band: "Band 3–4 (4–5 marks)",
              marks: [4, 5],
              descriptor:
                "Clear comparison of trapped vs coping grief using well-chosen evidence from both texts.",
            },
            {
              band: "Band 2 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Notes the maze references in both extracts with mostly descriptive commentary.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "Summarises two people feeling sad after a death.",
            },
          ],
        },
        {
          id: "3-intertextuality-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "comparative-synthesis-architecture",
          marks: 8,
          question:
            "Compare and discuss how these two unseen extracts — an **early-modern-style dramatic monologue** and a **contemporary non-fiction essay** — interrogate the myth of heroic conquest:\n\n- **Extract A (Dramatic Monologue):**\n> *Stand back, chronicler, and sharpen well your quill: / Write how the harbour knelt beneath my prow! / Leave out the mutiny, the fever, and the chill — / Posterity prefers a gilded brow.*\n\n- **Extract B (Literary Non-Fiction Essay):**\n> *Schoolroom atlases draw imperial voyages as sleek crimson arrows gliding effortlessly across blank blue oceans. Yet those arrows erase currents, scurvy, mutinous crews, and above all the dense coastal cities already humming with trade long before any European vessel sighted land. A line on paper looks inevitable only because ink hides everyone it crosses out.*",
          hints: [
            "Establish shared conceptual terrain (both expose how official records fabricate heroic triumph by erasing suffering and dissent) alongside sharp cross-form divergence.",
            "Analyse Extract A's dramatic irony: an arrogant conqueror unwittingly indicts himself through commanding imperatives ('Stand back', 'Leave out'), personification ('harbour knelt'), and cynical rhyming closure ('gilded brow').",
            "Pivot to Extract B's essayistic rhetoric: visual metaphor of 'sleek crimson arrows', accumulative catalogue of erased realities, and incisive closing aphorism ('ink hides everyone it crosses out').",
            "Evaluate how dramatic satire invites readers to convict a speaking voice from within, whereas non-fiction persuasion builds direct ethical solidarity with the reader.",
          ],
          modelAnswer:
            "While both extracts expose official history as a curated fabrication that polishes imperial violence into heroic inevitability, Extract A unmasks propaganda ironically from inside the conqueror's own boastful voice, whereas Extract B dismantles colonial myth directly through lucid essayistic rhetoric and cartographic critique.\n\nIn Extract A, the dramatic monologue weaponises dramatic irony against its speaker. Imperative verbs ('Stand back', 'Write', 'Leave out') stage authority as deliberate editorial censorship, while the grandiose personification of a 'harbour' that 'knelt' betrays imperial narcissism. Yet by listing the exact hardships he demands excluded ('mutiny', 'fever', 'chill'), the commander inadvertently preserves the very counter-evidence he tries to bury. Formally, the crisp alternating rhyme culminating in the cynical confession 'Posterity prefers a gilded brow' turns polished verse elegance into an ironic mirror of his gilded falsification — forcing the reader to act as sceptical juror.\n\nConversely, Extract B abandons persona-driven irony in favour of transparent ethical argument. Opening with the familiar childhood artefact of 'schoolroom atlases', the essayist reveals how institutional education naturalises conquest via visual aesthetics ('sleek crimson arrows' across 'blank blue oceans'). The abrupt pivot 'Yet those arrows erase...' deploys an escalating catalogue moving from sailors' hardship ('scurvy', 'mutinous crews') to the gravest erasure of all: thriving 'coastal cities' reduced to 'blank' emptiness. Pushing this critique into memorable rhetorical closure, the concluding aphorism ('ink hides everyone it crosses out') fuses literal map-drawing with violent human erasure, positioning the reader as a waking critical witness.\n\nUltimately, pairing dramatic monologue with literary essay illuminates two potent modes of intertextual counter-history: drama indicts arrogance indirectly by letting power incriminate itself, whereas non-fiction recruits clear analytical prose to strip the glamour off inherited narratives.",
          markScheme: [
            {
              point: "Frames divergence within similarity: shared exposure of fabricated conquest history via opposing formal strategies.",
              keywords: ["fabrication", "propaganda", "ironically", "whereas", "rhetoric"],
            },
            {
              point: "Analyses Extract A's dramatic irony and imperative staging of censorship ('Stand back', 'Leave out').",
              keywords: ["dramatic irony", "imperative", "censorship", "editorial", "narcissism"],
            },
            {
              point: "Notes how Extract A's speaker self-incriminates by naming the very miseries he suppresses.",
              keywords: ["inadvertently", "incriminate", "counter-evidence", "bury", "juror"],
            },
            {
              point: "Evaluates Extract A's formal rhyme/polish mirroring superficial falsification ('gilded brow').",
              keywords: ["gilded", "falsification", "rhyme", "polished", "cynical"],
            },
            {
              point: "Analyses Extract B's critique of educational/cartographic imagery ('schoolroom atlases', 'crimson arrows', 'blank').",
              keywords: ["cartographic", "atlases", "naturalises", "naturalizes", "emptiness", "aesthetics"],
            },
            {
              point: "Analyses Extract B's structural pivot ('Yet...') and escalating list highlighting indigenous coastal erasure.",
              keywords: ["catalogue", "escalating", "erasure", "thriving", "sailors"],
            },
            {
              point: "Evaluates Extract B's closing aphorism ('ink hides everyone it crosses out') fusing pen and violence.",
              keywords: ["aphorism", "fuses", "witness", "concluding", "violent"],
            },
            {
              point: "Synthesises how Drama's indirect self-indictment contrasts with Non-Fiction's direct ethical persuasion.",
              keywords: ["ultimately", "conversely", "counter-history", "indirectly", "glamour"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (7–8 marks)",
              marks: [7, 8],
              descriptor:
                "Authoritative, seamlessly braided synthesis evaluating dramatic irony against essayistic persuasion with crisp close reading.",
            },
            {
              band: "Band 3–4 (5–6 marks)",
              marks: [5, 6],
              descriptor:
                "Solid integrated comparison highlighting bias and erasure in both extracts with sound craft terms.",
            },
            {
              band: "Band 2 (3–4 marks)",
              marks: [3, 4],
              descriptor:
                "Explains that both passages criticise fake history, mostly sequentially with lighter formal evaluation.",
            },
            {
              band: "Band 1 (0–2 marks)",
              marks: [0, 2],
              descriptor:
                "Basic summary of a conqueror and school maps.",
            },
          ],
        },
        {
          id: "3-intertextuality-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "To what extent",
          guideRef: "comparative-synthesis-architecture",
          marks: 10,
          question:
            "Paper 2 Full Mini-Essay Architecture Task (10 marks):\n\nPrompt: *'To what extent do writers rely on breaking inherited conventions to expose uncomfortable truths?'*\n\nUsing these two unseen synopses — **Play A** (a stark modern domestic tragedy where a retired judge loses standing through silent family withdrawal rather than royal downfall, ending in mid-conversation blackout) and **Novel B** (a postcolonial coming-of-age novel whose protagonist masters every colonial school exam only to burn his diploma and narrate the final chapter in his grandmother's untranslated dialect idioms) — write an integrated **Introduction + Two C-A-P-B-S Body Paragraphs + Synthesis Conclusion**.",
          hints: [
            "Introduction: Interrogate 'To what extent' — argue that writers do NOT discard conventions altogether; they *activate* conventions first so breaking them exposes systemic truth.",
            "Body 1: Compare how both works initially activate a classical horizon (tragic stature in Play A; Bildungsroman attainment in Novel B) to lure the reader/audience.",
            "Body 2: Compare the climactic structural ruptures (mid-conversation blackout denying catharsis in Play A *whereas* burning the diploma and shifting linguistic register in Novel B turns an anti-Bildungsroman into cultural reclamation).",
            "Conclusion: Synthesise why subversion relies paradoxically on adherence — and weigh how Play A ends in bleak paralysis while Novel B reaches defiant renewal.",
          ],
          modelAnswer:
            "Writers rarely expose uncomfortable truths by abandoning literary tradition wholesale; rather, they rely paradoxically on *activating* inherited conventions first so that rupturing those expectations strikes with maximum moral force. While both Play A and Novel B dismantle revered genres — classical tragedy and the *Bildungsroman* — to indict institutional authority, Play A withholds tragic catharsis through abrupt theatrical blackout to leave patriarchal power exposed in bleak stasis, whereas Novel B shatters colonial coming-of-age scripts through linguistic reclamation to transform disillusionment into cultural sovereignty.\n\nIn their opening trajectories, both works deliberately court Jauss's horizon of expectations so that readers recognise the prestigious social roles being tested. Play A casts a retired judge — a modern counterpart to aristocratic authority — inviting the audience to expect conventional public debate, formal reckoning, and eloquent *anagnorisis*. Analogously, Novel B launches along the classic *Bildungsroman* pathway as its protagonist conquers elite colonial examinations, outwardly mimicking harmonious entry into adult prestige. Yet in both texts, formal compliance operates as an ironic trap: the judge's courtroom dignity masks domestic tyranny, while academic triumph in Novel B conceals the quiet price of cultural self-erasure. By staging familiar generic ladders first, both authors prove that subversion requires tradition as its indispensable foil.\n\nIt is at each work's climactic rupture, however, that their visions diverge sharply in tone and agency. Rather than granting Play A's judge a grand Aristotelian fall or redemptive speech, the playwright strips his power quietly through silent family withdrawal and terminates the play in a jarring mid-conversation blackout. Denying spectators verbal closure or emotional purgation forces the audience to sit with unresolved domestic accountability. Pushing generic inversion toward active liberation, Novel B conversely converts its anti-*Bildungsroman* collapse into defiance: burning the diploma rejects colonial validation physically, while shifting the concluding chapter into the grandmother's untranslated dialect idioms reclaims linguistic sovereignty on the page itself. Whereas Play A's broken form traps its protagonist in sterile silence, Novel B's broken language opens an uncolonised future.\n\nUltimately, both works demonstrate that breaking conventions exposes truth only *to the extent* that the reader feels the gravitational weight of what has been overturned. Play A's anti-cathartic blackout and Novel B's linguistic revolt prove that form is never neutral packaging: when inherited genres encode class, gender, or imperial hierarchies, dismantling the form becomes the sharpest means of dismantling the myth.",
          markScheme: [
            {
              point: "Intro interrogates 'To what extent' with a paradox: subversion depends on first activating conventions.",
              keywords: ["paradoxically", "activating", "abandoning", "rupturing", "force"],
            },
            {
              point: "Intro frames a Band 5 divergence-within-similarity thesis distinguishing Play A's bleak stasis from Novel B's reclamation.",
              keywords: ["stasis", "sovereignty", "whereas", "patriarchal", "reclamation"],
            },
            {
              point: "Body 1 opens with a conceptual claim integrating both works around Jauss's horizon of expectations.",
              keywords: ["horizon of expectations", "prestigious", "trajectories", "analogously", "foil"],
            },
            {
              point: "Body 1 analyses Play A's invocation of tragic stature/courtroom authority masking domestic tyranny.",
              keywords: ["aristocratic", "anagnorisis", "tyranny", "courtroom", "dignity"],
            },
            {
              point: "Body 1 analyses Novel B's initial Bildungsroman compliance concealing cultural self-erasure.",
              keywords: ["bildungsroman", "examinations", "self-erasure", "compliance", "ladders"],
            },
            {
              point: "Body 2 pivots cleanly into climactic divergence between the two structural ruptures.",
              keywords: ["diverge", "rupture", "conversely", "agency"],
            },
            {
              point: "Body 2 evaluates Play A's anti-cathartic mid-conversation blackout leaving the audience unsettled.",
              keywords: ["blackout", "purgation", "closure", "accountability", "withdrawal"],
            },
            {
              point: "Body 2 evaluates Novel B's diploma burning and untranslated dialect shift as linguistic sovereignty.",
              keywords: ["diploma", "dialect", "idioms", "defiance", "uncolonised"],
            },
            {
              point: "Sustains balanced 50/50 point-by-point synthesis across the entire response (Criterion C).",
              keywords: ["sterile", "liberation", "anti-bildungsroman", "whereas"],
            },
            {
              point: "Conclusion delivers higher-order synthesis arguing that dismantling genre form dismantles embedded ideology.",
              keywords: ["ultimately", "packaging", "hierarchies", "dismantling", "gravitational"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (9–10 marks)",
              marks: [9, 10],
              descriptor:
                "Outstanding Paper 2 architecture: interrogates the prompt perceptively, sustains seamless 50/50 integrated C-A-P-B-S synthesis across forms, and evaluates ideological effects of genre subversion.",
              indicators: [
                "Nuanced answer to 'To what extent' (adherence enables subversion)",
                "Precision comparative connectives throughout (analogously, conversely, whereas)",
                "Distinct Drama vs Prose Fiction craft evaluation culminating in elevated synthesis",
              ],
            },
            {
              band: "Band 4 (7–8 marks)",
              marks: [7, 8],
              descriptor:
                "Strong integrated comparative essay addressing both works effectively with clear craft evaluation and mostly balanced structure.",
            },
            {
              band: "Band 3 (5–6 marks)",
              marks: [5, 6],
              descriptor:
                "Relevant comparison of broken conventions in Play A and Novel B, though argument may drift partially into sequential discussion or lighter form evaluation.",
            },
            {
              band: "Band 2 (3–4 marks)",
              marks: [3, 4],
              descriptor:
                "Descriptive retelling of the two synopses with basic linking statements.",
            },
            {
              band: "Band 1 (0–2 marks)",
              marks: [0, 2],
              descriptor:
                "Minimal or unfocused response lacking comparative architecture.",
            },
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 questions, ALL difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "3-intertextuality-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "allusion-motif-dialogue",
      question:
        "In narratology and intertextual theory, what critical adjective (derived from Mikhail Bakhtin's central term) describes a text that stages multiple competing voices and ideological viewpoints in unresolved interaction rather than enforcing one single authorial voice?",
      answer: {
        type: "text",
        accept: ["dialogic", "polyphonic", "dialogical"],
        display: "dialogic",
      },
      hints: [
        "Turn Bakhtin's noun 'dialogism' into its adjective form.",
        "Contrast this with a 'monologic' text dominated by one authoritative voice.",
      ],
      solution: [
        "A **dialogic** (or *polyphonic*) text puts competing social, historical, and intertextual voices into live, unresolved interplay.",
      ],
    },
    {
      id: "3-intertextuality-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Apply",
      guideRef: "comparative-synthesis-architecture",
      question:
        "Identify the single most precise comparative transition phrase (three words: 'in sharp ____') that signals deliberate tonal and structural opposition between two paired texts: 'Play A grants its heroine a triumphant courtroom acquittal; in sharp ____, Novel B seals its narrator behind an unsigned administrative transfer.'",
      answer: {
        type: "text",
        accept: [
          "in sharp counterpoint",
          "in sharp contrast",
          "in sharp opposition",
          "counterpoint",
          "contrast",
          "opposition",
        ],
        display: "in sharp counterpoint",
      },
      hints: [
        "Musical metaphor widely prized in IB Literature for two voices moving in deliberate contrast.",
        "Also starts with 'c' and combines 'counter' + 'point'.",
      ],
      solution: [
        "**Counterpoint** (in the phrase *in sharp counterpoint*; *contrast* or *opposition* also accepted) conveys disciplined artistic contrast in which two voices illuminate one another through opposition.",
      ],
    },
    {
      id: "3-intertextuality-ch-q03",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "conventions-traditions-subversion",
      marks: 6,
      question:
        "Read this critical claim: *'Once a radical genre subversion becomes widely imitated and celebrated, it ceases to have subversive power.'*\n\nEvaluate this claim using Hans Robert Jauss's **horizon of expectations** and distinguishing between a text's **context of production** and **context of reception**.",
      hints: [
        "Explain how an original shock ruptures its contemporary horizon of expectations at the moment of production.",
        "Trace how canonisation and imitation gradually widen future readers' horizons of expectations (context of reception).",
        "Weigh a counter-argument: even when a technique looks familiar today, historical awareness or fresh staging/reading can reactivate its critical edge.",
      ],
      modelAnswer:
        "This claim holds substantial truth under Jauss's reception theory, yet requires qualification because familiarity does not wholly neutralise critical force. At its context of production, a bold subversion — such as modernist fragmentation shattering nineteenth-century realist omniscience, or an anti-tragic ending refusing noble catharsis — jars readers sharply because it violates their prevailing horizon of expectations. Over decades, however, imitation, classroom canonisation, and cultural absorption expand the collective horizon: what once scandalised audiences becomes an expected stylistic repertoire, muting immediate shock for later contexts of reception. Nevertheless, the claim overstates the case when it implies subversive power vanishes completely. Readers who reconstruct the historical convention being overturned still perceive the text's structural rebellion intellectually, and contemporary directors or translators can defamiliarise canonical subversions anew by relocating them into urgent present-day tensions. Thus, while initial visceral shock fades as horizons shift, enduring formal friction retains interpretive bite across time.",
      markScheme: [
        {
          point: "Links initial disruptive power to violating the prevailing horizon at the context of production.",
          keywords: ["prevailing", "violates", "jars", "scandalised", "scandalized", "repertoire"],
        },
        {
          point: "Explains how canonisation and imitation absorb radical moves into later horizons of reception.",
          keywords: ["canonisation", "canonization", "absorption", "expand", "muting", "expected"],
        },
        {
          point: "Introduces a nuanced counter-argument qualifying the absolute claim.",
          keywords: ["nevertheless", "qualification", "overstates", "neutralise", "neutralize"],
        },
        {
          point: "Shows how historical awareness of the broken convention preserves intellectual/structural force.",
          keywords: ["reconstruct", "intellectual", "rebellion", "structural", "friction"],
        },
        {
          point: "Considers how modern performance, re-staging, or translation can defamiliarise the work anew.",
          keywords: ["defamiliarise", "defamiliarize", "directors", "translators", "relocating"],
        },
        {
          point: "Reaches a balanced evaluative judgement distinguishing fading visceral shock from enduring critical bite.",
          keywords: ["visceral", "enduring", "bite", "thus", "fades"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (6 marks)",
          marks: [6, 6],
          descriptor:
            "Nuanced, theoretically assured evaluation balancing Jauss's shifting horizon against enduring structural and performative reactivation.",
        },
        {
          band: "Band 3–4 (4–5 marks)",
          marks: [4, 5],
          descriptor:
            "Clearly explains shifting expectations over time with some qualification or counter-perspective.",
        },
        {
          band: "Band 2 (2–3 marks)",
          marks: [2, 3],
          descriptor:
            "Agrees or disagrees one-sidedly with general references to old vs modern readers.",
        },
        {
          band: "Band 1 (0–1 marks)",
          marks: [0, 1],
          descriptor:
            "Brief opinion unsupported by literary theory or textual reasoning.",
        },
      ],
    },
    {
      id: "3-intertextuality-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "allusion-motif-dialogue",
      marks: 6,
      question:
        "Read this unseen modernist prose-poem fragment:\n\n> *At noon the clerks file down marble stairs humming an advertising jingle; beneath the subway grate, dark water mutters old prophecies nobody stops to decode. A crumpled brochure promises 'Paradise in Twelve Easy Instalments', drifting past an iron railing shaped like laurel leaves.*\n\nAnalyse how this extract braids **mythic/biblical allusions** with **commercial modernity** to construct ironic disillusionment.",
      hints: [
        "Spot all three classical/biblical echoes tucked inside modern urban details: 'dark water mutters old prophecies' (oracle/underworld), 'Paradise' (Eden), and 'laurel leaves' (classical poetic/heroic glory).",
        "Examine the bathetic juxtapositions: 'advertising jingle', 'subway grate', 'Twelve Easy Instalments', 'crumpled brochure'.",
        "Connect the collage technique to modernist intertextual irony (comparable in spirit to T. S. Eliot's *The Waste Land* [Example text — not a set text]).",
      ],
      modelAnswer:
        "Through sharp modernist collage, the fragment collides three elevated mythic and biblical allusions against banal consumer detritus to dramatise spiritual exhaustion in modern urban life. First, subterranean 'dark water' muttering 'old prophecies' beneath a 'subway grate' evokes classical oracles and underworld rivers, yet the clerks' mindless 'advertising jingle' signals a culture acoustically deaf to deeper meaning ('nobody stops to decode'). Second, the biblical allusion to 'Paradise' is grotesquely commodified inside a 'crumpled brochure' offering salvation 'in Twelve Easy Instalments', reducing sacred transcendence to disposable hire-purchase marketing. Finally, the visual detail of the brochure drifting past an 'iron railing shaped like laurel leaves' ironises classical emblems of poetic immortality and heroic honour, shrinking living laurel into mass-produced civic ironwork. Like the fractured intertextual mosaics of T. S. Eliot's *The Waste Land* [Example text — not a set text], these deflated echoes neither preach outright nor offer easy consolation; instead, the jarring gap between mythic grandeur and commercial trivia compels the reader to feel the hollowness of commodified modernity.",
      markScheme: [
        {
          point: "Analyses the oracle/underworld echo ('dark water', 'prophecies') drowned out by commercial noise ('advertising jingle').",
          keywords: ["oracle", "underworld", "subterranean", "deaf", "jingle"],
        },
        {
          point: "Analyses the commodified biblical Eden allusion ('Paradise in Twelve Easy Instalments').",
          keywords: ["eden", "commodified", "salvation", "marketing", "transcendence", "disposable"],
        },
        {
          point: "Analyses the deflated classical symbol ('laurel leaves' reduced to iron railing).",
          keywords: ["laurel", "immortality", "ironwork", "mass-produced", "emblems"],
        },
        {
          point: "Identifies modernist juxtaposition / collage as the overarching structural method.",
          keywords: ["collage", "juxtaposition", "mosaic", "detritus", "fractured"],
        },
        {
          point: "Evaluates the tonal effect: bathetic deflation and quiet spiritual disillusionment without heavy-handed lecturing.",
          keywords: ["deflation", "hollowness", "exhaustion", "banal", "grandeur"],
        },
        {
          point: "Connects effectively to intertextual modernist tradition (marking any real example appropriately).",
          keywords: ["eliot", "example text", "echoes", "gap", "trivia"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (6 marks)",
          marks: [6, 6],
          descriptor:
            "Incisive close reading unpacking all three intertextual collisions and evaluating modernist ironic collage with sophistication.",
        },
        {
          band: "Band 3–4 (4–5 marks)",
          marks: [4, 5],
          descriptor:
            "Clearly analyses two or more mythic/modern contrasts with accurate tone evaluation.",
        },
        {
          band: "Band 2 (2–3 marks)",
          marks: [2, 3],
          descriptor:
            "Identifies commercial imagery and notes general sadness or cynicism.",
        },
        {
          band: "Band 1 (0–1 marks)",
          marks: [0, 1],
          descriptor:
            "Literal summary of commuters walking past litter.",
        },
      ],
    },
    {
      id: "3-intertextuality-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Compare and contrast",
      guideRef: "cross-form-connections",
      marks: 8,
      question:
        "Compare and contrast how these two unseen extracts — a **stage scene** and a **modernist lyric** — depict the impossibility of honest communication between estranged partners:\n\n- **Extract A (Drama):**\n> *HELEN: Did you lock the shed?*\n> *DAVID: The hinge caught again. I'll oil it Sunday.*\n> *HELEN: (Not looking up from folding napkins) You always say Sunday.*\n> *[A three-second silence. Outside, a train passes; both watch the teacup rattle until it stops. Neither finishes the sentence.]*\n\n- **Extract B (Modernist Lyric):**\n> *Between our plates a winter treaty holds — / you pass the salt; I pass the folded news. / Each syllable wears gloves against the cold, / afraid of what an ungloved word might bruise.*",
          hints: [
            "Establish divergence within similarity: both capture domestic estrangement masked by civility, yet Drama relies on unspoken subtext and ambient stage sound whereas Poetry relies on extended political/tactile metaphor and tight formal restraint.",
            "Analyse Drama A: trivial surface dialogue ('lock the shed', 'hinge') hiding accumulated resentment ('You always say Sunday'), physical avoidance ('Not looking up'), and the three-second silence filled by an external passing train and rattling teacup.",
            "Pivot cleanly ('whereas', 'analogously') to Poem B: geopolitical metaphor ('winter treaty'), balanced syntactic symmetry ('you pass... I pass...'), personification ('Each syllable wears gloves'), and fragile closing cadence ('bruise').",
            "Evaluate how live stage absence forces the audience to hear what is unsaid, whereas poetic rhyme/metre mimics the very defensive armour the speaker describes.",
          ],
          modelAnswer:
            "While both extracts reveal how estranged partners weaponise everyday domestic ritual to avoid painful confrontation, Extract A externalises unspoken breakdown through theatrical subtext, avoidance, and ambient sound, whereas Extract B crystallises emotional defence through extended geopolitical metaphor and tight formal symmetry.\n\nIn Extract A, communication fails inside the gap between trivial spoken words and heavy subtext. Discussing a broken 'shed' hinge deflects deeper marital stagnation, until Helen's quiet reproach — 'You always say Sunday' — loads a single weekday with years of broken promises. Crucially, the stage directions carry the emotional core: Helen's physical refusal of eye contact ('Not looking up from folding napkins') pairs with a deliberate 'three-second silence' that stretches discomfort across the auditorium. When an unseen passing train makes the 'teacup rattle', external vibration substitutes for the domestic eruption neither character dares voice, leaving the scene suspended in unfinished evasion.\n\nConversely, Extract B distils identical table-top distance into disciplined lyric reflection rather than live dialogue. Opening with the diplomatic metaphor 'winter treaty', the speaker frames polite dinner gestures as a frozen armistice rather than intimacy. Syntactic parallelism across the caesura ('you pass the salt; I pass the folded news') visually balances the couple on opposite sides of a grammatical border. Pushing this restraint further, personifying speech itself ('Each syllable wears gloves against the cold') reveals that silence is driven as much by mutual fragility as by hostility — echoed in the tender, vulnerable verb 'bruise'. Formally, the tidy alternating rhyme acts like those very gloves: controlled metrical polish protects the speaker from emotional spill.\n\nUltimately, cross-form comparison sharpens our perception of both crafts: Drama trusts embodied pauses and trembling props to let the audience feel tension in real time, whereas Poetry bends metaphor and tight metrical armour to diagnose why polite surfaces survive long after trust has thawed.",
          markScheme: [
            {
              point: "Frames divergence within similarity around domestic civility concealing estrangement across Drama and Poetry.",
              keywords: ["ritual", "subtext", "geopolitical", "symmetry", "whereas"],
            },
            {
              point: "Analyses Drama A's mundane dialogue carrying accumulated emotional subtext ('You always say Sunday').",
              keywords: ["deflects", "reproach", "stagnation", "trivial", "promises"],
            },
            {
              point: "Analyses Drama A's stage directions: visual avoidance (napkins) and audible three-second silence.",
              keywords: ["eye contact", "avoidance", "auditorium", "pauses", "discomfort"],
            },
            {
              point: "Evaluates the passing train and rattling teacup as externalised sensory proxy for suppressed eruption.",
              keywords: ["vibration", "eruption", "proxy", "rattling", "evasion"],
            },
            {
              point: "Analyses Poem B's extended diplomatic metaphor ('winter treaty') and balanced caesura/parallelism.",
              keywords: ["armistice", "parallelism", "caesura", "border", "diplomatic"],
            },
            {
              point: "Analyses Poem B's personification ('syllable wears gloves') and fragile nuance ('bruise').",
              keywords: ["personification", "fragility", "vulnerable", "bruise", "hostility"],
            },
            {
              point: "Evaluates how Poem B's controlled rhyme/metre enacts the protective restraint it describes.",
              keywords: ["armour", "armor", "metrical", "polish", "rhyme"],
            },
            {
              point: "Delivers evaluative cross-form synthesis contrasting live theatrical tension against poetic diagnosis.",
              keywords: ["ultimately", "conversely", "embodied", "diagnose", "real time"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (7–8 marks)",
              marks: [7, 8],
              descriptor:
                "Superb integrated cross-form analysis evaluating theatrical subtext/soundscapes alongside poetic metaphor, syntax, and formal restraint.",
            },
            {
              band: "Band 3–4 (5–6 marks)",
              marks: [5, 6],
              descriptor:
                "Effective integrated comparison with relevant quotes from both extracts; formal/metrical evaluation could be deeper.",
            },
            {
              band: "Band 2 (3–4 marks)",
              marks: [3, 4],
              descriptor:
                "Identifies poor communication in both couples with mostly sequential commentary.",
            },
            {
              band: "Band 1 (0–2 marks)",
              marks: [0, 2],
              descriptor:
                "Brief plot description of two quiet meals.",
            },
          ],
        },
        {
          id: "3-intertextuality-ch-q06",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "allusion-motif-dialogue",
          marks: 6,
          question:
            "Read this provocatively argued critical view:\n\n> *'Revisionary writing back is trapped in dependence: because a postcolonial or feminist rewrite relies on a canonical European precursor for its plot and audience recognition, it accidentally reinforces the canon's dominance instead of escaping it.'*\n\nEvaluate this viewpoint thoughtfully, weighing both its kernel of truth and its major counter-arguments (marking any illustrative real works with `[Example text — not a set text]`).",
          hints: [
            "Acknowledge the nuance in the critique: writing back does keep the canonical precursor visible in the reader's mind and often enters literary markets via its famous predecessor.",
            "Advance the decisive counter-argument: dialogic confrontation does NOT reinforce dominance — it destabilises the canon from within, stripping away its illusion of universality.",
            "Support with a clearly marked illustrative example (e.g. Jean Rhys's *Wide Sargasso Sea* `[Example text — not a set text]` altering *Jane Eyre* `[Example text — not a set text]`, or Margaret Atwood's *The Penelopiad* `[Example text — not a set text]` contesting *The Odyssey* `[Example text — not a set text]`).",
          ],
          modelAnswer:
            "This critique raises a genuine paradox of intertextual resistance, yet ultimately misjudges how dialogic subversion operates. Its kernel of truth lies in visibility: because revisionary writing back deliberately anchors itself to a famous precursor, readers often encounter the newer work alongside — and initially through — the canonical original, risking commercial framing as a mere 'prequel' or satellite text. However, equating intertextual engagement with ideological dependence ignores the transformative power of counter-discourse. When Jean Rhys's *Wide Sargasso Sea* [Example text — not a set text] reconstructs the Caribbean history of the marginalised Creole wife from Charlotte Brontë's *Jane Eyre* [Example text — not a set text], or when Margaret Atwood's *The Penelopiad* [Example text — not a set text] hands chorus voices to the hanged maids of Homer's *The Odyssey* [Example text — not a set text], those texts do not leave the canon intact: they infect it with ethical doubt. Once the silenced perspective enters literary memory, the canonical precursor can never again claim effortless neutrality or universal authority. Rather than remaining trapped in homage, writing back turns the canon's own fame into a megaphone for contesting empire and patriarchy.",
          markScheme: [
            {
              point: "Acknowledges the genuine paradox/risk (keeping the precursor central or framed as a satellite text).",
              keywords: ["paradox", "visibility", "satellite", "prequel", "commercial"],
            },
            {
              point: "Rebuts the assumption that engagement equals ideological submission via counter-discourse.",
              keywords: ["counter-discourse", "transformative", "dependence", "misjudges", "subversion"],
            },
            {
              point: "Supports with an apt, properly marked illustrative example of postcolonial or feminist writing back.",
              keywords: ["example text", "rhys", "atwood", "sargasso", "penelopiad"],
            },
            {
              point: "Explains the retrospective destabilisation of the canonical original's supposed neutrality.",
              keywords: ["neutrality", "intact", "doubt", "universal", "authority"],
            },
            {
              point: "Articulates how strategic intertextuality turns canonical prestige against itself.",
              keywords: ["megaphone", "contesting", "empire", "patriarchy", "reconstructs"],
            },
            {
              point: "Sustains balanced evaluative judgement throughout rather than one-sided dismissal.",
              keywords: ["however", "ultimately", "rather than", "kernel"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (6 marks)",
              marks: [6, 6],
              descriptor:
                "Sophisticated, balanced evaluation engaging directly with the theoretical paradox and illustrating retrospective destabilisation.",
            },
            {
              band: "Band 3–4 (4–5 marks)",
              marks: [4, 5],
              descriptor:
                "Thoughtful rebuttal acknowledging both sides clearly, with sound illustrative support.",
            },
            {
              band: "Band 2 (2–3 marks)",
              marks: [2, 3],
              descriptor:
                "Defends writing back largely one-sidedly without examining why critics raise the dependence objection.",
            },
            {
              band: "Band 1 (0–1 marks)",
              marks: [0, 1],
              descriptor:
                "Simple assertion without literary reasoning.",
            },
          ],
        },
    {
      id: "3-intertextuality-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Examine",
      guideRef: "comparative-synthesis-architecture",
      marks: 8,
      question:
        "Below is a flawed Paper 2 comparative draft (two sequential paragraphs) responding to: *'Compare how two works use landscapes or weather to mirror political crisis.'*\n\n> *Draft Paragraph A:* 'In Novel 1, there is a terrible drought while the dictator rules. The crops die and the river dries up into mud, which shows the country is suffering badly under bad leadership. The narrator looks at the dry fields and feels hopeless.'\n> *Draft Paragraph B:* 'In Play 2, it also rains nonstop during the civil war. The characters wear wet coats on stage and argue indoors. This is similar to Novel 1 because both writers use bad weather to show political trouble.'\n\n(a) Identify **three** specific Band 2 limitations dragging down Criteria A, B, and C in this draft (3 marks).\n(b) Rewrite the draft as **one cohesive, Band 5 integrated C-A-P-B-S paragraph** elevating craft, divergence within similarity, and medium specificity (5 marks).",
      hints: [
        "Part (a): Flag block-by-block silos ('Draft A then Draft B'), plot/literal weather summary with zero form-specific craft analysis, and flat similarity ('both writers use bad weather to show political trouble').",
        "Part (b): Open with a shared conceptual tension (environmental extremity exposing state breakdown) while contrasting sterile stagnation in Novel 1 (drought rendered through barren focalisation) against suffocating claustrophobia in Play 2 (relentless stage rain driving characters into volatile indoor confinement).",
        "Include precision comparative connectives (*whereas*, *conversely*, *while*) and an evaluative closing synthesis.",
      ],
      modelAnswer:
        "**(a) Three Band 2 Limitations:**\n1. **Block-by-block separation (Criterion C):** Isolating Novel 1 and Play 2 into separate mini-paragraphs delays comparison until a tacked-on concluding clause ('This is similar...').\n2. **Descriptive plot summary lacking form-specific craft (Criterion B):** Both drafts merely report literal weather ('crops die', 'wear wet coats') without evaluating how prose focalisation or dramatic staging constructs tone and audience effect.\n3. **Flat similarity without conceptual nuance (Criterion A):** Reducing both works to 'bad weather shows political trouble' erases the tonal and ideological contrast between parched exhaustion and drenched indoor volatility.\n\n**(b) Integrated Band 5 Rewrite:**\nWhile both writers deploy hostile ecological extremes to manifest political decay, Novel 1 evokes sterile authoritarian paralysis through parched, interiorised focalisation, whereas Play 2 generates volatile civic claustrophobia through relentless stage acoustics and inescapable indoor confinement. In Novel 1, filtering the cracked riverbed and dying harvest through the narrator's depleted perspective turns drought into a stark correlative for a regime that drains public vitality dry, trapping readers inside quiet, sun-bleached resignation. Conversely, Play 2 refuses motionless exhaustion: hammering offstage rain and sodden coats force fractured factions into a cramped interior where damp physical discomfort visibly sharpens ideological hostility before the audience's eyes. Thus, whereas Novel 1's aridity portrays tyranny as slow ecological desiccation, Play 2's deluge dramatises civil fracture as an overflowing pressure chamber — revealing how distinct natural motifs and literary forms yield sharply contrasting anatomies of state collapse.",
      markScheme: [
        {
          point: "Part (a): Diagnoses block-by-block structural separation harming Criterion C.",
          keywords: ["block-by-block", "criterion c", "tacked-on", "separat", "silo"],
        },
        {
          point: "Part (a): Diagnoses literal plot summary lacking medium-specific craft evaluation (Criterion B).",
          keywords: ["criterion b", "literal", "plot", "medium-specific", "staging"],
        },
        {
          point: "Part (a): Diagnoses flat similarity erasing tonal/conceptual nuance (Criterion A).",
          keywords: ["criterion a", "flat", "nuance", "erases", "similarity"],
        },
        {
          point: "Part (b): Opens rewrite with an integrated divergence-within-similarity topic sentence.",
          keywords: ["sterile", "paralysis", "claustrophobia", "whereas", "extremes"],
        },
        {
          point: "Part (b): Analyses Novel 1 through prose craft (focalisation/correlative imagery) and tone.",
          keywords: ["focalisation", "focalization", "correlative", "resignation", "depleted"],
        },
        {
          point: "Part (b): Executes a precision contrastive pivot into Play 2.",
          keywords: ["conversely", "refuses", "by contrast", "in counterpoint"],
        },
        {
          point: "Part (b): Analyses Play 2 through dramatic craft (stage acoustics, sodden props, spatial confinement, audience impact).",
          keywords: ["acoustics", "sodden", "confinement", "audience", "cramped"],
        },
        {
          point: "Part (b): Closes with evaluative synthesis tying contrasting weather motifs and forms back to political collapse.",
          keywords: ["thus", "desiccation", "pressure chamber", "anatomies", "collapse"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (7–8 marks)",
          marks: [7, 8],
          descriptor:
            "Pinpoints all three rubric flaws accurately and delivers a sparkling integrated C-A-P-B-S rewrite balancing Prose and Drama craft.",
        },
        {
          band: "Band 3–4 (5–6 marks)",
          marks: [5, 6],
          descriptor:
            "Sound diagnosis and strong integrated rewrite, though one craft element or synthesis link is slightly lighter.",
        },
        {
          band: "Band 2 (3–4 marks)",
          marks: [3, 4],
          descriptor:
            "Identifies general flaws and improves vocabulary, yet retains partial block separation or descriptive phrasing.",
        },
        {
          band: "Band 1 (0–2 marks)",
          marks: [0, 2],
          descriptor:
            "Minimal critique and largely unchanged rewrite.",
        },
      ],
    },
    {
      id: "3-intertextuality-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Explore",
      guideRef: "cross-form-connections",
      marks: 10,
      question:
        "Extended Unseen Comparative Synthesis (10 marks):\n\nExplore how these two unseen extracts — a **Gothic-inflected prose passage** and a **modernist dramatic scene** — use **mirrors and reflections** to interrogate fractured identity and social performance:\n\n- **Extract A (Prose Fiction):**\n> *Every hallway in the estate held a silvered glass taller than a doorway, so that wherever Clara walked, a slightly paler twin kept pace beside her — chin tilted to the exact angle her guardian approved. Once, alone at dusk, she breathed mist across the glass and felt a brief, dizzying rush of triumph as the obedient twin blurred into grey cloud; ten seconds later, the cold air cleared the surface and restored the immaculate smile before she could turn away.*\n\n- **Extract B (Drama):**\n> *[A dressing room lit by glaring vanity bulbs. Three hinged mirrors surround ELENA at sharp angles, multiplying her profile into competing versions. Offstage, applause swells.]*\n> *STAGE MANAGER (voice over intercom): Two minutes, Elena. Give them the radiant widow.*\n> *[ELENA lifts a lipstick, pauses, and tilts the left mirror outward so one reflection vanishes into darkness. She smiles brightly at the remaining glass — her shoulders rigid, unmoving — as the intercom buzzes again.]*",
      hints: [
        "Introduction: Frame a crisp divergence-within-similarity thesis — both deploy reflective surfaces to expose coerced female performance, yet Extract A renders identity policing as inherited Gothic haunting inside silent domestic space, whereas Extract B stages self-division overtly as public spectacle under commercial surveillance.",
        "Body 1 (Architecture of Surveillance): Contrast the ancestral hallway mirrors ('taller than a doorway') and guardian's invisible gaze in Prose A against the dazzling, angular 'vanity bulbs', 'three hinged mirrors', and intrusive offstage intercom in Drama B.",
        "Body 2 (Acts of Micro-Rebellion & Recapture): Contrast Clara's fragile, fleeting breath of mist ('ten seconds later... cleared') against Elena's deliberate spatial defiance (tilting the left mirror into darkness) paired with bodily stiffness ('shoulders rigid') beneath a forced 'radiant' smile.",
        "Conclusion: Synthesise how medium specificity transforms the mirror motif — Prose penetrates fleeting interior euphoria and cold relapse, while Drama forces the audience to watch manufactured radiance collide with physical rigidity in real time.",
      ],
      modelAnswer:
        "While both extracts mobilise the recurring motif of mirrors to expose how external authority scripts female identity into polished performance, Extract A internalises self-policing as uncanny Gothic confinement inside an ancestral house, whereas Extract B dramatises fragmented selfhood as live commercial spectacle under relentless public demand.\n\nFrom the outset, both writers turn reflective architecture into an instrument of surveillance, yet through medium-specific spatial regimes. In Extract A, third-person limited focalisation infuses classical Gothic tropes — towering 'silvered glass' and an eerie 'paler twin' — into quiet psychological tyranny. The mirror's monumental scale ('taller than a doorway') dwarfs Clara physically, while the twin's precision ('chin tilted to the exact angle her guardian approved') suggests that patriarchal scrutiny has been wholly absorbed into her own stride. Analogously, Extract B traps Elena inside reflective multiplication, yet trades ancestral gloom for harsh theatrical exposure: 'glaring vanity bulbs' and 'three hinged mirrors' splinter her profile into competing visual selves right before the live audience. Pushing surveillance from silent internalised habit into audible command, the disembodied intercom voice ('Give them the radiant widow') commodifies grief itself into a timed performance cue, amplified by swelling offstage applause.\n\nBoth protagonists attempt a brief micro-rebellion against their reflected doubles, yet the two forms calibrate defiance and recapture differently. Clara's resistance in Extract A is intimate, ephemeral, and sensory: breathing warm 'mist' over cold glass triggers an interior 'dizzying rush of triumph' as the 'obedient twin' dissolves. Tellingly, however, no human antagonist needs to intervene — the chilly room itself 'cleared the surface' within 'ten seconds', turning Gothic atmosphere into an inexorable mechanism that reinstates the 'immaculate smile' against her will. Conversely, Elena's gesture in Extract B is angular, deliberate, and physically staged: tilting the left wing of the mirror outward consigns one multiplied persona 'into darkness'. Yet this partial assertion of control cannot halt the show; as the intercom buzzes again, Drama relies on stark visual contrast between her bright painted smile and her 'rigid, unmoving' shoulders — allowing spectators to witness the agonising somatic split between mask and body simultaneously.\n\nUltimately, placing Gothic prose beside modernist theatre reveals how literary form reshapes an identical symbolic motif. Prose Fiction invites readers into the fragile, private cadence of Clara's brief inner triumph and cold relapse, whereas Drama confronts spectators directly with the mechanical glare, disembodied commands, and frozen posture of performed identity — implicating the audience itself in the applause that demands the mask.",
      markScheme: [
        {
          point: "Intro frames divergence within similarity: shared coerced performance via mirrors, contrasting Gothic domestic interiority vs commercial theatrical spectacle.",
          keywords: ["spectacle", "gothic", "confinement", "whereas", "performance"],
        },
        {
          point: "Analyses Prose A's Gothic double motif ('paler twin') and towering reflective scale dwarfing Clara.",
          keywords: ["dwarfs", "monumental", "uncanny", "focalisation", "focalization", "patriarchal"],
        },
        {
          point: "Analyses how Prose A reveals internalised guardian scrutiny through physical posture ('exact angle').",
          keywords: ["absorbed", "scrutiny", "tyranny", "stride", "policing"],
        },
        {
          point: "Uses a precision cross-form pivot ('analogously') to contrast Drama B's glaring vanity bulbs and fractured hinged mirrors.",
          keywords: ["analogously", "splinter", "multiplication", "glaring", "exposure"],
        },
        {
          point: "Analyses Drama B's disembodied intercom and offstage applause commodifying grief ('radiant widow').",
          keywords: ["disembodied", "commodifies", "applause", "audible", "intercom"],
        },
        {
          point: "Analyses Clara's fragile, ephemeral micro-rebellion (warm mist vs cold automatic restoration).",
          keywords: ["ephemeral", "triumph", "inexorable", "dissolves", "reinstates"],
        },
        {
          point: "Pivots ('conversely') to Elena's deliberate physical tilting of the left mirror into darkness.",
          keywords: ["conversely", "tilting", "deliberate", "consigns", "assertion"],
        },
        {
          point: "Analyses Drama B's embodied visual dissonance between forced bright smile and 'rigid, unmoving' shoulders.",
          keywords: ["somatic", "dissonance", "rigid", "mask", "simultaneously"],
        },
        {
          point: "Sustains balanced 50/50 integrated comparison across all paragraphs.",
          keywords: ["micro-rebellion", "recapture", "doubles", "whereas"],
        },
        {
          point: "Concludes with elevated cross-form synthesis (including audience complicity in theatrical applause).",
          keywords: ["ultimately", "implicating", "complicity", "cadence", "relapse"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (9–10 marks)",
          marks: [9, 10],
          descriptor:
            "Insightful, fluidly integrated cross-form analysis evaluating Gothic prose interiority against theatrical lighting, sound cues, and embodied staging with perceptive synthesis.",
          indicators: [
            "Crisp divergence-within-similarity framing throughout",
            "Close word-level and stage-direction analysis in 50/50 equilibrium",
            "Evaluates how medium specificity transforms the shared mirror motif and implicates the audience",
          ],
        },
        {
          band: "Band 4 (7–8 marks)",
          marks: [7, 8],
          descriptor:
            "Strong integrated comparative response with thorough textual support and sound attention to form-specific craft.",
        },
        {
          band: "Band 3 (5–6 marks)",
          marks: [5, 6],
          descriptor:
            "Clear discussion of mirrors and social pressure in both extracts, with partial craft evaluation or slight imbalance.",
        },
        {
          band: "Band 2 (3–4 marks)",
          marks: [3, 4],
          descriptor:
            "Mostly sequential explanation of Clara and Elena looking into mirrors with limited formal analysis.",
        },
        {
          band: "Band 1 (0–2 marks)",
          marks: [0, 2],
          descriptor:
            "Brief plot summary without meaningful literary evaluation.",
        },
      ],
    },
  ],
};
