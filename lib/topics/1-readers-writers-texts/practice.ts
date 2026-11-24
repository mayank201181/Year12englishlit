import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ (10 questions: 4 MCQ [0,1,2,3], 4 Short, 2 Written)
  // ===========================================================================
  quiz: [
    {
      id: "1-readers-writers-texts-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "close-reading-meaning",
      question:
        "In the IB Close-Reading Engine (**C-M-E**), what middle link turns raw technique-spotting into Band 5 Criterion B evaluation?",
      options: [
        "Explaining the linguistic mechanism — how the chosen feature alters pace, connotation, or framing.",
        "Listing three additional literary terms from the same paragraph to prove broad terminology.",
        "Summarising the plot events immediately before and after the quotation for narrative clarity.",
        "Adding biographical dates about when the historical author originally drafted the manuscript.",
      ],
      answerIndex: 0,
      explanation:
        "Bridging from Authorial Choice to Conceptual Effect requires the **Mechanism**: explaining precisely how the word, syntax, or image operates to shape emotional or conceptual meaning.",
      hints: [
        "Recall the three letters of C-M-E: Choice → ? → Effect.",
        "Think about what separates naming a device from proving how it works.",
      ],
    },
    {
      id: "1-readers-writers-texts-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "learner-portfolio-craft",
      question:
        "What is the strict maximum number of lines permitted for each unmarked literary extract brought into the IB English A: Literature Individual Oral (IA)?",
      answer: { type: "number", value: 40, display: "40 lines" },
      traps: [
        {
          spec: { type: "number", value: 30 },
          feedback: "30 lines is permissible, but the official IB maximum ceiling is higher — check the Portfolio section.",
        },
        {
          spec: { type: "number", value: 50 },
          feedback: "50 lines exceeds the IB ceiling and risks moderation penalties.",
        },
      ],
      solution: [
        "IB FA2021 Individual Oral regulations cap each of the two extracts at a strict maximum of **40 lines**.",
      ],
      hints: [
        "It is a round multiple of 10 lines under 50.",
      ],
    },
    {
      id: "1-readers-writers-texts-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "voice-tone-ambiguity",
      question:
        "Read this original unseen sentence:\n\n> *After promising his council an 'era of transparent harmony', the governor ordered every shutter along the square nailed shut before dusk.*\n\nWhich literary device is primarily created by the clash between the speech and the order?",
      options: [
        "Lyrical hyperbole glorifying the governor's protective leadership.",
        "Situational and verbal irony exposing authoritarian secrecy beneath soothing civic rhetoric.",
        "Pathetic fallacy linking the darkening dusk to natural seasonal cycles.",
        "Comic understatement mocking the carpentry skill of the town guards.",
      ],
      answerIndex: 1,
      explanation:
        "Pairing the phrase 'transparent harmony' with literally nailing shutters shut creates stark ironic friction, exposing censorship and secrecy behind polished political rhetoric.",
      hints: [
        "Compare the meaning of 'transparent' with nailing every shutter closed.",
        "Look for the mode of irony exposing hypocrisy between words and actions.",
      ],
    },
    {
      id: "1-readers-writers-texts-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "close-reading-meaning",
      question:
        "What single rhetorical term describes placing short, unsubordinated clauses side by side without nested dependent clauses to create stark restraint or breathless urgency?",
      answer: {
        type: "text",
        accept: ["parataxis", "paratactic", "paratactic syntax"],
        display: "parataxis",
      },
      traps: [
        {
          spec: { type: "text", accept: ["hypotaxis", "hypotactic", "hypotactic syntax"] },
          feedback: "Hypotaxis is the opposite: nested subordinate clauses joined by words like 'although' or 'because'.",
        },
      ],
      solution: [
        "Placing coordinate or bare clauses side by side without grammatical subordination is **parataxis**.",
      ],
      hints: [
        "Think of the Greek prefix *para-* ('beside'), contrasted with *hypo-* ('under/subordinate').",
      ],
    },
    {
      id: "1-readers-writers-texts-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "reader-response-choices",
      question:
        "In reader-response criticism, what distinguishes Wolfgang Iser's **textual gaps** from accidental vagueness?",
      options: [
        "Textual gaps appear only in translated poetry where footnotes are missing.",
        "Textual gaps eliminate the need for textual evidence because any guess fits.",
        "Textual gaps are deliberate structural silences and omissions that invite active reader co-construction within textual cues.",
        "Textual gaps instruct every reader to accept the protagonist's viewpoint without hesitation.",
      ],
      answerIndex: 2,
      explanation:
        "Iser's textual gaps (*Leerstellen*) are purposeful omissions embedded between explicit textual cues, prompting readers to bridge implied psychological or ethical connections.",
      hints: [
        "Consider how Hemingway's omitted subtext `[Example text — not a set text]` engages an active reader.",
        "Are Iser's gaps purposeful structural invitations, or excuses to ignore the text?",
      ],
    },
    {
      id: "1-readers-writers-texts-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "voice-tone-ambiguity",
      question:
        "In a novel, the narrator proudly trusts his business partner to mail a life-saving debt repayment, while the reader saw that partner toss the envelope into the furnace two pages earlier. Name the exact type of irony operating here (two words).",
      answer: {
        type: "text",
        accept: ["dramatic irony", "dramatic"],
        display: "dramatic irony",
      },
      traps: [
        {
          spec: { type: "text", accept: ["verbal irony", "verbal"] },
          feedback: "Verbal irony is saying one thing while intentionally meaning another; here the narrator genuinely trusts his partner while the reader knows the truth.",
        },
        {
          spec: { type: "text", accept: ["situational irony", "situational"] },
          feedback: "Situational irony is an unexpected twist in outcome; here the tension stems specifically from asymmetric knowledge between reader and character.",
        },
      ],
      solution: [
        "When the reader/audience possesses crucial knowledge that a character lacks, the resulting tension is **dramatic irony**.",
      ],
      hints: [
        "Ask: who holds the secret knowledge — the character speaking, or the reader watching?",
        "Choose between verbal, situational, and dramatic irony.",
      ],
    },
    {
      id: "1-readers-writers-texts-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "learner-portfolio-craft",
      question:
        "Under the IB English A: Literature FA2021 Non-Overlap Rule, which assessment combination is strictly **prohibited**?",
      options: [
        "Pairing 1 original English play and 1 translated novel in the Individual Oral.",
        "Preparing 3 non-overlapping works in reserve for the closed-book Paper 2 exam.",
        "Choosing a translated work for the HL Essay while using two other works for the IO.",
        "Reusing one of your two Individual Oral works as a comparative text in Paper 2.",
      ],
      answerIndex: 3,
      explanation:
        "No work used in the Individual Oral (or in the HL Essay at HL) may ever be reused in Paper 2. All other combinations listed strictly comply with IB regulations.",
      hints: [
        "Remember the Iron Non-Overlap Rule across IO, HL Essay [HL], and Paper 2.",
        "Which scenario uses the exact same work in two separate IB assessment components?",
      ],
    },
    {
      id: "1-readers-writers-texts-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      guideRef: "learner-portfolio-craft",
      question:
        "Under IB FA2021 regulations, what is the maximum number of bullet points allowed on a candidate's outline taken into the Individual Oral recording?",
      answer: { type: "number", value: 10, display: "10 bullet points" },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback: "15 minutes is the total duration of the IO (10 min talk + 5 min Q&A), whereas the outline cap is fewer bullet points.",
        },
      ],
      solution: [
        "Candidates may bring ONLY their two clean ≤40-line extracts plus an outline of no more than **10** bullet points.",
      ],
      hints: [
        "It matches the number of minutes in the prepared oral talk.",
        "Do not confuse the 15-minute total exam time with the bullet-point limit.",
      ],
    },
    {
      id: "1-readers-writers-texts-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      marks: 3,
      commandTerm: "Analyse",
      guideRef: "close-reading-meaning",
      question:
        "Read this original unseen sentence:\n\n> *After the eviction notice arrived, he spent the whole afternoon sanding and oiling the kitchen table until its pine grain glowed like honey.*\n\nUsing the **C-M-E** close-reading model, analyse how the writer's authorial choices convey the character's psychological response to displacement (3 marks).",
      modelAnswer:
        "By juxtaposing the abrupt arrival of an “eviction” with slow, tender domestic craft (“sanding and oiling”), the writer channels shock into quiet physical ritual rather than overt protest. The warm tactile simile “like honey” elevates ordinary pine into something precious, intensifying the poignant tension between affectionate care and imminent dispossession.",
      markScheme: [
        {
          point: "Identifies a concrete authorial choice with embedded micro-quotation (juxtaposition of eviction and domestic restoration, tactile simile 'like honey', or sensory diction).",
          keywords: ["juxtapos", "contrast", "simile", "honey", "sanding", "tactile", "sensory", "diction"],
        },
        {
          point: "Explains the linguistic mechanism (slowing pace into ritualised care, elevating mundane furniture into warmth/value, or displacing helplessness into control).",
          keywords: ["ritual", "control", "warmth", "elevat", "precious", "pace", "care", "channel"],
        },
        {
          point: "Evaluates the psychological/conceptual effect (poignant tension between attachment and loss, quiet dignity, or understated grief at dispossession).",
          keywords: ["poignant", "tension", "dispossession", "grief", "loss", "attachment", "dignity", "understated"],
        },
      ],
      commonError: "Retelling the plot ('He cleans his table because he is being evicted and feels sad') without examining the contrast or sensory simile.",
      hints: [
        "Start by contrasting the cold bureaucratic reality ('eviction notice') with his meticulous physical actions.",
        "Unpack the sensory simile 'like honey': why make a table he must leave behind glow so warmly?",
        "Make sure you hit all three C-M-E beats: Choice, Mechanism, and Conceptual Effect.",
      ],
    },
    {
      id: "1-readers-writers-texts-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      marks: 3,
      commandTerm: "Distinguish",
      guideRef: "reader-response-choices",
      question:
        "Read this original unseen sentence:\n\n> *Our uncle insisted the boarding school 'forged sturdy men', though my younger brother spent every Sunday evening silently pressing his palms flat against the radiator.*\n\nDistinguish how an **implied reader** aligned with the uncle's maxim differs from a **resisting reader** attending to the second clause (3 marks).",
      modelAnswer:
        "An implied audience accepting the uncle's conventional metaphor (“forged”) would view strict institutional hardship as beneficial character-building. By contrast, a resisting perspective focuses on the brother's wordless posture (“pressing his palms” for heat), reading against the boast to expose quiet emotional trauma and physical vulnerability concealed beneath masculine discipline.",
      markScheme: [
        {
          point: "Explains the surface/invited framing of the uncle's claim (institutional discipline presented as beneficial strength via 'forged').",
          keywords: ["forged", "strength", "discipline", "character", "beneficial", "conventional", "masculin"],
        },
        {
          point: "Explains how a resisting lens reads against that framing by centring the silent physical evidence of the younger brother.",
          keywords: ["against", "silent", "wordless", "palms", "heat", "subvert", "undercut", "interrogat"],
        },
        {
          point: "Evaluates the conceptual tension exposed (concealed emotional trauma, loneliness, or vulnerability masked by stoic ideals).",
          keywords: ["trauma", "vulnerab", "lonel", "harm", "conceal", "suffer", "cold", "pain"],
        },
      ],
      commonError: "Describing the two readers without anchoring each stance in specific textual phrasing ('forged' vs 'silently pressing his palms').",
      hints: [
        "Examine the metallic connotation of 'forged' in the uncle's claim.",
        "Contrast that boast with the brother's quiet physical need for warmth at the radiator.",
        "Connect both details to implied vs resisting reader stances.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (EXACTLY 2 papers × 15 questions = 30 questions)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PRACTICE PAPER 1: Close Reading, Voice, Irony & Textual Gaps (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "1-readers-writers-texts-p1",
      title: "Practice Paper 1: Close Reading, Voice, Irony & Textual Gaps",
      level: "SL",
      questions: [
        {
          id: "1-readers-writers-texts-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "close-reading-meaning",
          question:
            "What two-word literary term denotes a cluster of words belonging to a shared domain of meaning (such as legal, anatomical, or botanical vocabulary) woven through a passage?",
          answer: {
            type: "text",
            accept: ["semantic field", "lexical field", "lexical set"],
            display: "semantic field",
          },
          solution: [
            "A recurring network of vocabulary drawn from one conceptual domain is a **semantic field** (or **lexical field**).",
          ],
          hints: [
            "The first word relates to meaning (*semantics*).",
          ],
        },
        {
          id: "1-readers-writers-texts-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "close-reading-meaning",
          question:
            "What single term describes nested grammatical subordination (sentences built from layered dependent clauses using conjunctions such as *although, while, because*)?",
          answer: {
            type: "text",
            accept: ["hypotaxis", "hypotactic", "hypotactic syntax"],
            display: "hypotaxis",
          },
          traps: [
            {
              spec: { type: "text", accept: ["parataxis", "paratactic", "paratactic syntax"] },
              feedback: "Parataxis places clauses side by side without subordination; nested dependent clauses use the Greek prefix *hypo-*.",
            },
          ],
          solution: [
            "Layered grammatical subordination is called **hypotaxis**.",
          ],
          hints: [
            "Contrast it with parataxis: *hypo-* means 'under' (subordinate clauses tucked under a main clause).",
          ],
        },
        {
          id: "1-readers-writers-texts-p1-q03",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "voice-tone-ambiguity",
          question:
            "A character remarks during a torrential monsoon flood that has soaked the parlour carpet, *“Lovely weather for an indoor garden party.”* Name the exact mode of irony illustrated (two words).",
          answer: {
            type: "text",
            accept: ["verbal irony", "verbal"],
            display: "verbal irony",
          },
          traps: [
            {
              spec: { type: "text", accept: ["situational irony", "situational"] },
              feedback: "Here the speaker intentionally says the opposite of what they mean — that is verbal irony.",
            },
            {
              spec: { type: "text", accept: ["dramatic irony", "dramatic"] },
              feedback: "Both speaker and listener see the flood equally; no hidden audience knowledge is involved.",
            },
          ],
          solution: [
            "Intentionally saying the opposite of literal reality ('Lovely weather' during a flood) is **verbal irony**.",
          ],
          hints: [
            "Check whether the mismatch is between spoken words and intended meaning.",
          ],
        },
        {
          id: "1-readers-writers-texts-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "voice-tone-ambiguity",
          question:
            "A famous critic publishes a book claiming no burglar could ever breach his newly designed electronic door lock, only to return from the book launch and discover thieves entered cleanly through that exact lock. Name the specific mode of irony illustrated (two words).",
          answer: {
            type: "text",
            accept: ["situational irony", "situational"],
            display: "situational irony",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dramatic irony", "dramatic"] },
              feedback: "Dramatic irony requires the audience to know a hidden secret while a character speaks in ignorance; a sharp reversal between expectation and outcome is situational irony.",
            },
            {
              spec: { type: "text", accept: ["verbal irony", "verbal"] },
              feedback: "The critic was not joking or being sarcastic — events themselves reversed his expectation.",
            },
          ],
          solution: [
            "A sharp reversal between what is expected (an unbreakable lock) and what actually occurs (being burgled through that lock) is **situational irony**.",
          ],
          hints: [
            "Compare expectation against actual outcome.",
            "Distinguish verbal (said vs meant), dramatic (audience vs character knowledge), and situational (expected vs outcome).",
          ],
        },
        {
          id: "1-readers-writers-texts-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "reader-response-choices",
          question:
            "Which German literary theorist formulated the influential concept of **textual gaps** (*Leerstellen*) that readers must actively bridge to co-construct literary meaning? (Full name or surname.)",
          answer: {
            type: "text",
            accept: ["wolfgang iser", "iser"],
            display: "Wolfgang Iser",
          },
          solution: [
            "**Wolfgang Iser** (of the Konstanz school of reception theory) developed the theory of textual gaps (*Leerstellen*) and the implied reader.",
          ],
          hints: [
            "His surname has four letters, starting with *I*.",
            "He is paired with reader-response theory and the implied reader in Section 3.",
          ],
        },
        {
          id: "1-readers-writers-texts-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "voice-tone-ambiguity",
          question:
            "What two-word concept refers to the artistic intelligence inferred from a work's structural ironies and craft patterns — distinct from both the historical writer and an unreliable narrator?",
          answer: {
            type: "text",
            accept: ["implied author", "the implied author"],
            display: "implied author",
          },
          traps: [
            {
              spec: { type: "text", accept: ["implied reader", "the implied reader"] },
              feedback: "The implied reader is the imagined audience inscribed in the text; here we want the inferred artistic architect behind the narrator.",
            },
          ],
          solution: [
            "The artistic intelligence inferred from the text's overall design and ironic cues is the **implied author**.",
          ],
          hints: [
            "Recall the middle frame nested between Real Author and Narrator/Speaker in Section 2's diagram.",
            "Two words: 'implied _____'.",
          ],
        },
        {
          id: "1-readers-writers-texts-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "close-reading-meaning",
          question:
            "What single word denotes the associative, emotional, and cultural resonance attached to a word beyond its strict dictionary definition?",
          answer: {
            type: "text",
            accept: ["connotation", "connotations"],
            display: "connotation",
          },
          traps: [
            {
              spec: { type: "text", accept: ["denotation", "denotations"] },
              feedback: "Denotation is the literal dictionary definition — we want the emotional and cultural associations surrounding it.",
            },
          ],
          solution: [
            "A word's emotional, tonal, and cultural associations are its **connotation**.",
          ],
          hints: [
            "It pairs with *denotation* as its analytical counterpart.",
            "Think of the associative web surrounding words like 'home', 'sanctuary', or 'shelter'.",
          ],
        },
        {
          id: "1-readers-writers-texts-p1-q08",
          kind: "written",
          difficulty: "warmup",
          level: "SL",
          marks: 2,
          commandTerm: "Explain",
          guideRef: "close-reading-meaning",
          question:
            "Explain why embedding **1–6 word micro-quotations** grammatically inside your analytical claims outscores dropping full unanalysed block quotes in IB Literature essays (2 marks).",
          modelAnswer:
            "Weaving brief phrases straight into your own syntax keeps the focus on authorial craft rather than plot retelling, preserving fluent academic momentum for Criterion C and D. It also forces targeted scrutiny of exact diction or imagery, elevating evaluative depth in Criterion B.",
          markScheme: [
            {
              point: "Explains how concise integration maintains argumentative flow/concision and prevents plot bloat (Criterion C/D).",
              keywords: ["flow", "momentum", "concis", "fluent", "syntax", "bloat", "criterion c", "criterion d"],
            },
            {
              point: "Explains how short phrases force granular focus on specific word choice, imagery, or craft (Criterion B).",
              keywords: ["diction", "word", "granular", "scrutiny", "specific", "craft", "criterion b", "evaluat"],
            },
          ],
          commonError: "Saying merely 'long quotes take too much time to copy' without linking micro-quotations to precision of language analysis and essay flow.",
          hints: [
            "Think about BOTH analytical precision (Criterion B) and structural fluency (Criteria C & D).",
          ],
        },
        {
          id: "1-readers-writers-texts-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 3,
          commandTerm: "Analyse",
          guideRef: "close-reading-meaning",
          question:
            "Read this original unseen sentence:\n\n> *In the reception hall, the portraits of former headmasters hung three rows high, their brass nameplates polished brighter than the scuffed linoleum where scholarship boys waited with folded caps.*\n\nAnalyse how the writer uses **diction, visual contrast, and spatial hierarchy** to explore institutional power (3 marks).",
          modelAnswer:
            "Elevating the ancestral portraits “three rows high” while placing scholarship pupils below on “scuffed linoleum” establishes a stark vertical hierarchy of inherited authority over precarious belonging. Contrasting gleaming “brass” permanence with worn flooring and submissive “folded caps” exposes how architectural staging quietly disciplines newcomers into deference.",
          markScheme: [
            {
              point: "Identifies vertical/spatial contrast ('three rows high' above 'scuffed linoleum') with embedded micro-evidence.",
              keywords: ["vertical", "hierarchy", "above", "below", "elevat", "linoleum", "rows"],
            },
            {
              point: "Analyses visual/material diction ('brass' gleams vs 'scuffed' wear, or 'folded caps' signalling deference).",
              keywords: ["brass", "gleam", "worn", "scuffed", "caps", "deference", "submiss", "permanence"],
            },
            {
              point: "Evaluates conceptual effect on institutional power, class exclusion, or psychological intimidation.",
              keywords: ["authority", "class", "intimida", "disciplin", "precarious", "exclus", "status", "belonging"],
            },
          ],
          commonError: "Simply stating that the school hall looks old and rich without linking vertical space and material contrast to class hierarchy.",
          hints: [
            "Look at where the portraits sit vertically versus where the boys wait.",
            "Contrast the gleam of 'brass' against 'scuffed linoleum' and 'folded caps'.",
            "Connect those craft choices to how an institution projects authority and class boundaries.",
          ],
        },
        {
          id: "1-readers-writers-texts-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 3,
          commandTerm: "Analyse",
          guideRef: "voice-tone-ambiguity",
          question:
            "Read this original unseen stanza:\n\n> *You praised my manners — how I never wept*\n> *when bailiffs tagged the cedar dining chairs;*\n> *you did not see my nails split through my palms*\n> *behind the tidy pleats of Sunday wool.*\n\nAnalyse how the speaker constructs an ironic contrast between outward composure and concealed anguish (3 marks).",
          modelAnswer:
            "Direct address (“You praised”) highlights an observer's misreading of stoic “manners” as painless decorum during public humiliation. Shifting abruptly behind the “tidy pleats” to violent bodily imagery (“nails split”) punctures that illusion, exposing the quiet, self-inflicted cost of performing respectable restraint.",
          markScheme: [
            {
              point: "Analyses the outward mask / misread composure ('praised', 'manners', or 'tidy pleats' disguising distress).",
              keywords: ["composure", "mask", "decorum", "pleats", "misread", "respectab", "illusion", "facade"],
            },
            {
              point: "Contrasts this with visceral hidden physical imagery ('nails split' into palms) showing concealed anguish.",
              keywords: ["visceral", "bodily", "violent", "nails", "split", "hidden", "self-inflict", "physical"],
            },
            {
              point: "Evaluates the tonal/conceptual critique (quiet indictment of social expectations that reward silent endurance).",
              keywords: ["indict", "cost", "restraint", "expectation", "humiliat", "critique", "perform", "endur"],
            },
          ],
          commonError: "Paraphrasing that the speaker hid her hands behind her skirt without analysing the tonal indictment in 'You praised' or the physical violence of 'split'.",
          hints: [
            "Notice who is addressed in 'You praised' — what did that listener fail to notice?",
            "Contrast the smooth surface diction ('manners', 'tidy pleats') with the sharp kinetic verb 'split'.",
          ],
        },
        {
          id: "1-readers-writers-texts-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Examine",
          guideRef: "voice-tone-ambiguity",
          question:
            "Read this original unseen narrative opening:\n\n> *People exaggerate how difficult it is to dismiss an entire shift before winter. You keep your gaze above the collar, sign each docket neatly in blue ink, and remind yourself that efficiency is simply a stern form of mercy.*\n\nExamine how the writer uses **second-person framing, clinical diction, and ironic rationalisation** to expose the speaker's moral detachment (4 marks).",
          modelAnswer:
            "The generic pronoun “You” implicates the audience in a chillingly practical instruction manual, attempting to normalise mass layoffs as universal common sense. Bureaucratic diction (“docket”, “blue ink”, “efficiency”) strips workers of human faces, echoed physically in keeping one's gaze “above the collar” to evade eye contact. Finally, reframing cruelty as a “stern form of mercy” triggers sharp irony: the implied author exposes how polished euphemism insulates power from guilt.",
          markScheme: [
            {
              point: "Examines how second-person 'You' turns an unethical act into an impersonal, normalised procedure implicating the listener.",
              keywords: ["second-person", "normalis", "impersonal", "instruction", "implicat", "universal", "manual"],
            },
            {
              point: "Analyses bureaucratic/clinical diction ('docket', 'blue ink', 'efficiency') reducing human lives to paperwork.",
              keywords: ["bureaucratic", "paperwork", "dehumanis", "docket", "efficiency", "ink", "clinical"],
            },
            {
              point: "Analyses physical avoidance ('above the collar') signalling deliberate evasion of empathy/eye contact.",
              keywords: ["collar", "eye contact", "evad", "avoid", "gaze", "empathy", "faceless"],
            },
            {
              point: "Evaluates the ironic rationalisation ('stern form of mercy'), separating speaker's alibi from the implied author's critique.",
              keywords: ["mercy", "euphemism", "alibi", "implied author", "guilt", "insulat", "irony", "critique"],
            },
          ],
          commonError: "Assuming the real author endorses firing workers efficiently instead of recognising the ironic gap between speaker and implied author.",
          hints: [
            "Ask why the speaker uses 'You' instead of 'I' — what emotional shield does that build?",
            "Look closely at 'above the collar': what body part does the speaker refuse to look at?",
            "Test the closing paradox 'efficiency is simply a stern form of mercy' for ironic self-justification.",
          ],
        },
        {
          id: "1-readers-writers-texts-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Explain",
          guideRef: "reader-response-choices",
          question:
            "Read this original unseen dialogue extract:\n\n> *“The house looks smaller from the avenue,” Maya murmured.*\n> *Her brother checked his wristwatch and opened the car boot. “Traffic doubles on the bridge after four. Shall we load the trunk?”*\n\nExplain how **Wolfgang Iser's textual gaps** operate in this exchange, and outline two plausible, evidence-grounded interpretations a reader might co-construct (4 marks).",
          modelAnswer:
            "Iser's textual gaps appear in the brother's complete omission of any emotional reply, replacing memory with logistics (“Traffic”, “load the trunk”). One substantiated reading bridges this silence as brittle avoidance: unable to face losing their childhood home, he shields himself behind wristwatch precision. An equally grounded reading infers lingering sibling estrangement, where Maya's nostalgic vulnerability (“murmured”) collides with his brisk eagerness to sever ties and depart.",
          markScheme: [
            {
              point: "Locates the specific textual gap / omission (the brother ignoring Maya's nostalgic remark and pivoting to timetable/luggage).",
              keywords: ["omission", "ignor", "silence", "pivot", "logistics", "reply", "deflect"],
            },
            {
              point: "Links the gap explicitly to Iser's active co-construction (readers infer unspoken motives from concrete cues).",
              keywords: ["co-construct", "infer", "bridge", "active", "unspoken", "motive", "cue"],
            },
            {
              point: "Offers a first evidence-grounded reading (e.g. grief/avoidance masked by practical control).",
              keywords: ["avoidance", "shield", "grief", "defens", "control", "wristwatch", "protective"],
            },
            {
              point: "Offers a distinct second evidence-grounded reading (e.g. emotional estrangement, impatience, or mismatched attachment).",
              keywords: ["estrang", "impati", "sever", "detach", "mismatch", "murmured", "distance", "tension"],
            },
          ],
          commonError: "Inventing wild off-page backstories (like a secret crime) instead of grounding both plausible readings in 'murmured', 'checked his wristwatch', and the topic shift.",
          hints: [
            "Spot the exact gap: Maya offers a wistful reflection, and her brother answers with bridge traffic.",
            "Keep BOTH interpretations anchored in concrete textual cues ('murmured', 'wristwatch', 'Traffic doubles').",
          ],
        },
        {
          id: "1-readers-writers-texts-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Discuss",
          guideRef: "voice-tone-ambiguity",
          question:
            "Read this original unseen ending:\n\n> *At dawn she unlocked the aviary, stepped back into the wet grass, and left the wire gate swinging. Three starlings hopped onto the threshold, tilted their heads at the open sky, and stayed.*\n\nDiscuss how the writer constructs **productive ambiguity** in this closing moment rather than delivering a tidy moral (4 marks).",
          modelAnswer:
            "Unlocking the wire gate initially primes readers for a conventional trope of liberation, underscored by the expansive phrase “open sky”. Yet the abrupt, monosyllabic final verb “stayed” arrests that momentum, creating deliberate unresolved tension. Readers are left weighing competing implications simultaneously: the birds' hesitation may figure institutional conditioning — where captivity breeds fear of freedom — or hint ironically that autonomy includes choosing familiar shelter over exposure.",
          markScheme: [
            {
              point: "Identifies the expected trope / setup ('unlocked', 'swinging', 'open sky' priming liberation).",
              keywords: ["liberat", "freedom", "open sky", "trope", "expect", "release"],
            },
            {
              point: "Analyses the syntactic/rhythmic halt created by the stark final verb 'stayed' (and 'threshold' hesitation).",
              keywords: ["stayed", "monosyllab", "halt", "arrest", "abrupt", "threshold", "hesitat"],
            },
            {
              point: "Articulates Interpretation A (conditioning, fear of the unknown, or internalised captivity).",
              keywords: ["condition", "captiv", "fear", "institution", "dependency", "paraly"],
            },
            {
              point: "Articulates Interpretation B (chosen refuge, shelter, or critique of naive liberty) held simultaneously in tension.",
              keywords: ["shelter", "refuge", "choice", "autonom", "familiar", "simultaneous", "unresolved", "competing"],
            },
          ],
          commonError: "Choosing only one message ('The story proves captivity ruins freedom') instead of holding two evidence-backed implications open.",
          hints: [
            "Notice the classic expectation set up by unlocking a cage at dawn, then the sudden stop on 'stayed'.",
            "Explore TWO genuinely distinct thematic readings that coexist in that final word.",
          ],
        },
        {
          id: "1-readers-writers-texts-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          marks: 6,
          commandTerm: "Analyse",
          guideRef: "close-reading-meaning",
          question:
            "Read this original unseen prose mini-extract:\n\n> *By October the conservatory glass had clouded with salt from the estuary, turning the lemon trees inside into pale ghosts behind frosted panes. My grandmother still entered at seven each morning with brass secateurs, clipping dead stems with the brisk precision of a surgeon who refused to sign a death certificate. Only when she set the empty basket beside the threshold did her shoulders dip by half an inch.*\n\nAnalyse how the writer uses **figurative imagery, tonal shift, and understated physical detail** to portray ageing and resistance to loss (6 marks).",
          modelAnswer:
            "The writer opens with decaying sensory imagery — glass “clouded with salt” reducing once-vibrant lemon trees to “pale ghosts” — establishing an elegiac atmosphere in which encroaching environmental time blurs vitality into spectral absence. Immediately, however, a stark tonal pivot introduces kinetic determination: the grandmother's punctual seven-o'clock entrance and “brass secateurs” assert disciplined ritual against entropy. The unsettling simile comparing her to a “surgeon” refusing to sign a “death certificate” complicates simple admiration, casting her precision as simultaneously heroic devotion and poignant denial of mortality. Structurally, the final sentence contracts both scale and cadence via the restrictive opener “Only when”. Placing the “empty basket” beside the “threshold” makes futile labour quietly visible, while the microscopic gesture — shoulders dipping by “half an inch” — exemplifies stoic restraint, allowing momentary exhaustion to surface without shattering her dignity.",
          markScheme: [
            {
              point: "Analyses opening spectral/decay imagery ('clouded with salt', 'pale ghosts') setting an elegiac atmosphere of encroaching loss.",
              keywords: ["spectral", "ghosts", "decay", "elegiac", "salt", "encroach", "vitality"],
            },
            {
              point: "Identifies the tonal/energetic shift to disciplined routine ('seven each morning', 'brass secateurs', 'brisk precision').",
              keywords: ["shift", "pivot", "ritual", "disciplin", "secateurs", "precision", "routine"],
            },
            {
              point: "Evaluates the clinical simile ('surgeon' / 'death certificate') revealing dual tension between devotion and denial of mortality.",
              keywords: ["surgeon", "denial", "mortality", "clinical", "devotion", "refus", "simile"],
            },
            {
              point: "Analyses symbolic detail of the 'empty basket' at the 'threshold' signalling quiet futility or liminality.",
              keywords: ["empty", "basket", "threshold", "futil", "liminal", "fruitless", "absence"],
            },
            {
              point: "Analyses the understated kinetic detail ('half an inch') showing stoic restraint and guarded vulnerability.",
              keywords: ["half an inch", "restraint", "stoic", "microscop", "vulnerab", "exhaust", "dignity"],
            },
            {
              point: "Maintains conceptual coherence with seamlessly embedded micro-quotations and active craft verbs throughout.",
              keywords: ["simultaneous", "tension", "entropy", "complicat", "contrasts", "establishes", "allows"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (5–6 marks)",
              marks: [5, 6],
              descriptor:
                "Perceptive, cohesive close reading linking imagery, the clinical simile, tonal shift, and micro-gesture to nuanced conceptual tension (devotion vs denial; dignity vs vulnerability), with seamlessly embedded micro-quotations.",
            },
            {
              band: "Band 3–4 (3–4 marks)",
              marks: [3, 4],
              descriptor:
                "Clear, relevant analysis of several stylistic choices (ghosts, surgeon simile, final gesture) with sound textual evidence, though evaluation of nuance or ambiguity may be uneven.",
            },
            {
              band: "Band 1–2 (0–2 marks)",
              marks: [0, 2],
              descriptor:
                "Descriptive plot paraphrase or isolated technique-spotting with minimal explanation of how language constructs meaning.",
            },
          ],
          commonError: "Walking chronologically through the three sentences paraphrasing events instead of evaluating the tension inside the surgeon simile and the restraint of 'half an inch'.",
          hints: [
            "Trace the three-step arc: spectral decay ('pale ghosts') → clinical defiance ('surgeon') → microscopic crack ('half an inch').",
            "Look closely at why the simile says a surgeon 'who refused to sign a death certificate' — is that pure bravery, stubborn denial, or both?",
            "Explain the significance of the basket being 'empty' right before her shoulders dip.",
          ],
        },
        {
          id: "1-readers-writers-texts-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          marks: 8,
          commandTerm: "Explore",
          guideRef: "voice-tone-ambiguity",
          question:
            "Read this original unseen lyric poem:\n\n> *After the sale, we swept the empty rooms*\n> *as though a broom could pay an older debt.*\n> *On every wall, pale rectangles still marked*\n> *where framed horizons used to hold our gaze.*\n> *My sister joked about the dusty light,*\n> *then stopped mid-laugh to touch the doorframe notches —*\n> *thin pencil lines that climbed from knee to chin,*\n> *left waiting for a buyer's coat of white.*\n\n*Guiding question:* How does the poet use **visual absence, tonal modulation, and domestic detail** to explore memory and erasure? Write a structured mini-commentary organised by **conceptual ideas** (not line-by-line summary) (8 marks).",
          modelAnswer:
            "Across this compact lyric, the poet presents domestic erasure not as sudden catastrophe but as an intimate, almost polite effacement against which memory clings in fragile traces. Structuring the meditation around residual absences, the poet turns physical negatives — “pale rectangles” left on bare walls and “thin pencil lines” along a doorframe — into quiet archives of lived time. The metaphor “framed horizons” poignantly elevates vanished family pictures into lost possibilities, suggesting that stripping a house of objects contracts the emotional landscape once shared within it.\n\nThis quiet grief is sharpened through subtle tonal modulation and defensive humour. Opening with the ironic simile “as though a broom could pay”, the speaker gently mocks the impulse to tidy away emotional obligation through mundane chore. Later, the sister's abrupt syntactic break — joking about “dusty light” before stopping “mid-laugh” — dramatises how brittle levity collapses when confronted by embodied history. The vertical progression “from knee to chin” compresses childhood growth into five unadorned syllables, honouring familial time without melodramatic sentimentality.\n\nFinally, the closing image complicates memory with unsentimental realism. By leaving the childhood marks “waiting” for an anonymous “buyer's coat of white”, the poet personifies memory as patient yet powerless before commercial turnover. Rather than offering comforting permanence, the ending sustains productive ambiguity: sweeping and repainting promise fresh starts for strangers even as they quietly overwrite an irreplaceable family past.",
          markScheme: [
            {
              point: "Frames a clear conceptual thesis (erasure as intimate/quiet effacement resisted by fragile physical traces) — not chronological line-by-line retelling.",
              keywords: ["effacement", "traces", "erasure", "conceptual", "intimate", "fragile", "archive"],
            },
            {
              point: "Analyses visual absence ('pale rectangles' and 'framed horizons') showing how emptiness evokes vanished possibility and memory.",
              keywords: ["rectangles", "horizons", "absence", "negatives", "vanished", "possibilit", "stripped"],
            },
            {
              point: "Analyses the opening domestic simile ('as though a broom could pay') exposing the inadequacy of tidy chores to settle emotional debt.",
              keywords: ["broom", "debt", "chore", "inadequa", "mocks", "obligation", "tidy"],
            },
            {
              point: "Tracks tonal modulation / emotional fracture as the sister stops 'mid-laugh' — brittle humour yielding to involuntary grief.",
              keywords: ["mid-laugh", "brittle", "humour", "levity", "collaps", "modulat", "fractur"],
            },
            {
              point: "Analyses the concrete domestic detail of 'doorframe notches' / 'knee to chin' compressing childhood growth with restraint.",
              keywords: ["notches", "knee", "growth", "compress", "unadorned", "restraint", "childhood"],
            },
            {
              point: "Evaluates the closing image ('waiting' / 'coat of white') contrasting intimate history with commercial anonymity and overwriting.",
              keywords: ["white", "overwrit", "commercial", "anonym", "personif", "powerless", "turnover"],
            },
            {
              point: "Embraces productive ambiguity / dual perspective (fresh renewal for incoming strangers vs irreversible loss for the departing family).",
              keywords: ["ambiguity", "strangers", "fresh", "dual", "tension", "simultaneous", "irreplaceable"],
            },
            {
              point: "Organises analysis cohesively by conceptual movements with seamlessly embedded micro-quotations and precise literary register.",
              keywords: ["structur", "poignant", "unsentimental", "dramatis", "elevat", "sharpened"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (7–8 marks)",
              marks: [7, 8],
              descriptor:
                "Perceptive, conceptually structured mini-commentary weaving visual absence, tonal shift, domestic restraint, and closing ambiguity into a sustained argument with seamless micro-quotations.",
            },
            {
              band: "Band 4 (5–6 marks)",
              marks: [5, 6],
              descriptor:
                "Clear, well-focused literary analysis addressing most key features (rectangles, mid-laugh pivot, pencil notches, white paint) with solid links to memory and erasure.",
            },
            {
              band: "Band 3 (3–4 marks)",
              marks: [3, 4],
              descriptor:
                "Sound literal understanding and some accurate device analysis, though organisation leans chronological or evaluation stays partly descriptive.",
            },
            {
              band: "Band 1–2 (0–2 marks)",
              marks: [0, 2],
              descriptor:
                "Plot/event paraphrase of the family moving house with minimal attention to poetic craft.",
            },
          ],
          commonError: "Writing 'In line 1… In line 3… In line 5…' instead of grouping points conceptually (visual traces, brittle humour/tonal shift, commercial overwriting).",
          hints: [
            "Group your commentary into 2–3 conceptual movements rather than walking line 1 to line 8.",
            "Pair the two visual traces ('pale rectangles' and 'thin pencil lines') as one conceptual angle on residual memory.",
            "Analyse the exact tonal hinge when the sister stops 'mid-laugh', then unpack the quiet finality of 'coat of white'.",
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PRACTICE PAPER 2: Reader Response, Ambiguity & Portfolio Mastery (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "1-readers-writers-texts-p2",
      title: "Practice Paper 2: Reader Response, Ambiguity & Portfolio Mastery",
      level: "SL",
      questions: [
        {
          id: "1-readers-writers-texts-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "learner-portfolio-craft",
          question:
            "What is the minimum total number of literary works studied across the two-year IB Diploma English A: Literature **Standard Level (SL)** course (FA 2021)?",
          answer: { type: "number", value: 9, display: "9 works" },
          traps: [
            {
              spec: { type: "number", value: 13 },
              feedback: "13 is the minimum for Higher Level (HL); Standard Level requires fewer works.",
            },
            {
              spec: { type: "number", value: 6 },
              feedback: "6 works is the SL minimum for Language & Literature, not Literature! English A: Literature SL requires 9 works.",
            },
          ],
          solution: [
            "IB English A: Literature **SL** requires a minimum of **9** studied works (≥3 in translation, ≥4 originally in English, plus 2 free choice).",
          ],
          hints: [
            "Do not confuse English A: Literature with Language & Literature (which studies fewer literary works).",
          ],
        },
        {
          id: "1-readers-writers-texts-p2-q02",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "State",
          guideRef: "learner-portfolio-craft",
          question:
            "What is the minimum total number of literary works studied across the two-year IB Diploma English A: Literature **Higher Level (HL)** course (FA 2021)?",
          answer: { type: "number", value: 13, display: "13 works" },
          traps: [
            {
              spec: { type: "number", value: 9 },
              feedback: "9 works is the Standard Level (SL) minimum; Higher Level requires 4 additional works.",
            },
          ],
          solution: [
            "IB English A: Literature **HL** requires a minimum of **13** studied works (≥4 in translation, ≥5 originally in English, plus 4 free choice).",
          ],
          hints: [
            "HL requires 4 more studied works than SL's 9.",
          ],
        },
        {
          id: "1-readers-writers-texts-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "State",
          guideRef: "learner-portfolio-craft",
          question:
            "What is the strict maximum word limit for the IB English A: Literature **HL Essay** (excluding title, citations, and Works Cited)?",
          answer: { type: "number", value: 1500, display: "1,500 words" },
          traps: [
            {
              spec: { type: "number", value: 1200 },
              feedback: "1,200 words is the recommended lower bound of the 1,200–1,500 word window, not the maximum ceiling.",
            },
            {
              spec: { type: "number", value: 4000 },
              feedback: "4,000 words is the Extended Essay limit — the HL Essay is much tighter.",
            },
          ],
          solution: [
            "The HL Essay window is 1,200–**1,500** words; examiners stop crediting work beyond 1,500 words.",
          ],
          hints: [
            "The acceptable window runs from 1,200 up to a round ceiling under 2,000.",
            "Examiners penalise or stop crediting text written beyond this exact word ceiling.",
          ],
        },
        {
          id: "1-readers-writers-texts-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "reader-response-choices",
          question:
            "What two-word concept names the hypothetical audience inscribed within a text's own assumptions, allusions, and invited sympathies (contrasted with a resisting reader)?",
          answer: {
            type: "text",
            accept: ["implied reader", "the implied reader"],
            display: "implied reader",
          },
          traps: [
            {
              spec: { type: "text", accept: ["implied author", "the implied author"] },
              feedback: "The implied author is the artistic design behind the voice; here we want the inscribed audience.",
            },
          ],
          solution: [
            "The hypothetical audience encoded in a text's structural invitations and assumptions is the **implied reader**.",
          ],
          hints: [
            "Two words: paired with Wolfgang Iser's reception theory.",
            "Contrast it with the 'resisting reader' — this reader reads with the text's grain.",
          ],
        },
        {
          id: "1-readers-writers-texts-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "learner-portfolio-craft",
          question:
            "An SL student studies 10 literary works during DP1–DP2 and locks 2 works for their Individual Oral. Under the IB Non-Overlap Rule, how many distinct studied works remain legally eligible for Paper 2?",
          answer: { type: "number", value: 8, display: "8" },
          traps: [
            {
              spec: { type: "number", value: 10 },
              feedback: "You must subtract the 2 works already committed to the Individual Oral.",
            },
            {
              spec: { type: "number", value: 7 },
              feedback: "7 would be correct for 9 studied works; re-check the total number of works stated in this question (10).",
            },
          ],
          solution: [
            "Total studied works (10) minus Individual Oral works (2) = **8** distinct works legally eligible for Paper 2.",
          ],
          hints: [
            "Apply the Non-Overlap Rule: subtract the 2 locked IO works from the student's 10 studied works.",
            "At SL there is no HL Essay, so only the 2 IO works are removed from the Paper 2 pool.",
          ],
        },
        {
          id: "1-readers-writers-texts-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "learner-portfolio-craft",
          question:
            "An HL Literature student studies 14 works across DP1–DP2. They lock 2 works for their Individual Oral and 1 distinct work for their HL Essay. How many distinct studied works remain legally eligible for Paper 2?",
          answer: { type: "number", value: 11, display: "11" },
          traps: [
            {
              spec: { type: "number", value: 12 },
              feedback: "Remember to subtract BOTH the 2 IO works AND the 1 HL Essay work (3 locked works total).",
            },
            {
              spec: { type: "number", value: 10 },
              feedback: "10 applies to 13 studied works; here the student has studied 14 works.",
            },
          ],
          solution: [
            "At HL, 2 IO works + 1 HL Essay work = 3 locked works. Remaining eligible Paper 2 works: 14 − 3 = **11**.",
          ],
          hints: [
            "Count how many total works are locked by IO (2) + HL Essay (1).",
            "Subtract that sum from 14.",
          ],
        },
        {
          id: "1-readers-writers-texts-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "State",
          guideRef: "learner-portfolio-craft",
          question:
            "In total minutes, how long is the complete IB English A: Literature Individual Oral (combining both the prepared student presentation and the teacher's follow-up discussion)?",
          answer: { type: "number", value: 15, display: "15 minutes" },
          traps: [
            {
              spec: { type: "number", value: 10 },
              feedback: "10 minutes is only the prepared student presentation; remember to add the 5-minute teacher Q&A.",
            },
          ],
          solution: [
            "The Individual Oral lasts **15** minutes in total: 10 minutes prepared oral + 5 minutes teacher Q&A.",
          ],
          hints: [
            "Add the prepared talk duration (10 min) and the Q&A segment (5 min).",
            "Do not stop at the 10-minute student presentation alone.",
          ],
        },
        {
          id: "1-readers-writers-texts-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 3,
          commandTerm: "Outline",
          guideRef: "learner-portfolio-craft",
          question:
            "Outline three concrete features that distinguish a **high-yield ≤40-line IO extract** logged in a Learner Portfolio from a weak, plot-heavy extract (3 marks).",
          modelAnswer:
            "First, a high-yield extract contains dense authorial craft — rich imagery, syntactic shifts, subtext, or tonal tension — so Criterion B stays evaluative rather than descriptive. Second, it functions as a thematic microcosm that connects naturally to the Global Issue across the wider work. Third, it sits strictly within the forty-line cap as a self-contained dramatic or lyrical unit rather than awkward mid-sentence plot recap.",
          markScheme: [
            {
              point: "Highlights stylistic density (imagery, syntax, subtext, tonal shift) enabling Criterion B craft evaluation.",
              keywords: ["craft", "imagery", "syntax", "subtext", "tonal", "stylistic", "criterion b", "dense"],
            },
            {
              point: "Highlights conceptual / Global Issue leverage linking micro extract cleanly to the wider work.",
              keywords: ["microcosm", "global issue", "wider", "whole work", "thematic", "conceptual"],
            },
            {
              point: "Highlights structural cohesion and strict adherence to the 40-line ceiling (avoiding plot-only exposition).",
              keywords: ["forty", "40", "self-contained", "unit", "cohes", "exposition", "ceiling"],
            },
          ],
          commonError: "Saying 'pick an exciting dramatic climax' without explaining why stylistic density and micro-to-macro connectivity matter for Criteria A and B.",
          hints: [
            "Think across Criterion B (craft density), Criterion A (link to Global Issue & whole work), and IB compliance (≤40 lines & structural unity).",
            "Ask what makes an extract fuel evaluative analysis rather than trapping you in plot summary.",
          ],
        },
        {
          id: "1-readers-writers-texts-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 3,
          commandTerm: "Justify",
          guideRef: "learner-portfolio-craft",
          question:
            "Justify why an IB candidate should reserve **3–4 non-overlapping studied works** (rather than merely 2) for Paper 2 inside their Learner Portfolio (3 marks).",
          modelAnswer:
            "Because Paper 2 offers four unseen comparative prompts in a closed-book exam, preparing only two texts risks forcing an awkward thematic fit if none of the prompts aligns with that pair. Holding three or four reserve works across distinct forms, eras, and concepts grants strategic agility to select the strongest comparative pairing on exam day. It also safeguards the non-overlap rule if last-minute adjustments shift which texts enter the Individual Oral.",
          markScheme: [
            {
              point: "Notes the unseen nature of the 4 Paper 2 prompts and the risk of shoehorning a weak fit with only 2 prepared works.",
              keywords: ["unseen", "prompt", "fit", "shoehorn", "awkward", "risk", "align"],
            },
            {
              point: "Explains the comparative flexibility gained across diverse forms, themes, or concepts on exam day.",
              keywords: ["flexib", "agility", "form", "diverse", "pair", "concept", "versatil"],
            },
            {
              point: "Notes strategic protection of the non-overlap work rule (insurance if IO or HL Essay selections evolve).",
              keywords: ["non-overlap", "safeguard", "insurance", "buffer", "adjust", "overlap", "distinct"],
            },
          ],
          commonError: "Claiming you can write about all four works inside one Paper 2 essay (Paper 2 strictly compares TWO works).",
          hints: [
            "Remember: you still write on only TWO works in Paper 2 — why prepare 3–4 beforehand?",
            "Think about unseen prompts, form/theme agility, and protecting your non-overlap map.",
          ],
        },
        {
          id: "1-readers-writers-texts-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Analyse",
          guideRef: "reader-response-choices",
          question:
            "Read this original unseen travel-letter fragment:\n\n> *From the veranda of the hillside hotel, the harbour below resembles a painted miniature — tiny red barges drifting across glass water, and coolies along the quay no larger than commas in a ledger. One feels remarkably peaceful up here above the dust.*\n\nAnalyse how a **resisting reader** interrogates the narrator's aestheticising diction and spatial detachment (4 marks).",
          modelAnswer:
            "Whereas an implied audience might savour the picturesque serenity of the “painted miniature” vista, a resisting reading interrogates how literal elevation (“up here above the dust”) enacts colonial and class privilege. Reducing human dockworkers to punctuation marks (“no larger than commas in a ledger”) exposes stark dehumanisation: labour becomes mere accounting notation viewed safely from leisure space. The detached pronoun “One” further universalises elite comfort while erasing the physical strain occurring below, turning seeming tranquillity into quiet ethical indictment.",
          markScheme: [
            {
              point: "Contrasts the narrator's picturesque aesthetic framing ('painted miniature', 'peaceful') with a resisting reading against the grain.",
              keywords: ["picturesque", "aesthetic", "miniature", "against", "grain", "implied", "serenity"],
            },
            {
              point: "Analyses spatial elevation ('veranda', 'up here above the dust') as physical enactment of class/colonial insulation.",
              keywords: ["elevat", "privilege", "colonial", "class", "insulat", "distance", "above"],
            },
            {
              point: "Evaluates the dehumanising simile ('commas in a ledger') reducing labourers to accounting marks/economic units.",
              keywords: ["dehumanis", "commas", "ledger", "accounting", "labour", "economic", "reduc"],
            },
            {
              point: "Analyses the impersonal pronoun 'One' (or closing tension) showing how elite comfort disguises ethical blindness.",
              keywords: ["impersonal", "universal", "comfort", "blind", "indict", "erasing", "strain"],
            },
          ],
          commonError: "Praising the narrator's vivid imagery without noticing how 'commas in a ledger' dehumanises the dockworkers.",
          hints: [
            "Look closely at the simile comparing human labourers to 'commas in a ledger' — what field of meaning does 'ledger' invoke?",
            "Examine where the speaker stands spatially ('veranda', 'above the dust') and who is erased by the calm pronoun 'One'.",
          ],
        },
        {
          id: "1-readers-writers-texts-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Evaluate",
          guideRef: "close-reading-meaning",
          question:
            "Evaluate why the following student sentence on an unseen drama extract would be capped in **Band 2–3**, and rewrite it into a **Band 5** analytical sentence:\n\n*Draft:* “In this scene, Henrik interrupts Clara three times and walks over to the window, which uses stage directions to create tension and show that he is angry.” (4 marks)",
          modelAnswer:
            "The draft stalls in Band 2–3 because it starts with plot narration (“interrupts … walks over”) and attaches a vague generic effect (“create tension … angry”) without unpacking how dramatic craft shapes power dynamics. Upgraded to Band 5: “By pairing Henrik's three abrupt verbal interruptions with his physical retreat toward the window, the playwright uses dialogue control and shifting proxemics to enact emotional stonewalling, simultaneously asserting dominance over the conversation while refusing intimate accountability.”",
          markScheme: [
            {
              point: "Diagnoses Band 2–3 Trap 1: chronological plot summary treating stage action literally rather than as authorial craft.",
              keywords: ["summary", "plot", "retell", "narration", "literal", "descriptive"],
            },
            {
              point: "Diagnoses Band 2–3 Trap 2: empty technique-spotting / vague effect cliché ('create tension', flat label 'angry').",
              keywords: ["generic", "vague", "cliché", "spotting", "flat", "mechanism", "superficial"],
            },
            {
              point: "Rewritten sentence attributes agency to the playwright and names precise dramatic choices (interruption + spatial retreat / proxemics).",
              keywords: ["playwright", "proxemics", "retreat", "spatial", "dialogue", "control", "physical"],
            },
            {
              point: "Rewritten sentence evaluates a nuanced conceptual/psychological effect (power dominance, stonewalling, avoidance, or dual tension).",
              keywords: ["dominance", "stonewall", "accountab", "power", "avoid", "intima", "evasion", "tension"],
            },
          ],
          commonError: "Simply swapping 'angry' for 'furious' without restructuring the sentence around authorial craft → mechanism → conceptual effect.",
          hints: [
            "First diagnose BOTH weaknesses in the draft (plot summary + vague effect cliché).",
            "In your upgrade, make 'the playwright' the active architect and specify what turning away to a window physically communicates (proxemics / evasion).",
          ],
        },
        {
          id: "1-readers-writers-texts-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 4,
          commandTerm: "Evaluate",
          guideRef: "learner-portfolio-craft",
          question:
            "An HL student writes this draft HL Essay title in their Learner Portfolio:\n\n*“How loneliness, family conflict, and nature imagery are important themes throughout Novel X and Play Y.”*\n\nIdentify **three** fatal IB flaws in this proposal and propose a sharp Band 5 **line of inquiry** template that repairs all three (4 marks).",
          modelAnswer:
            "First, comparing two works violates the strict HL Essay rule limiting inquiry to one studied work. Second, bundling three sweeping topics (“loneliness, family conflict, and nature”) produces an unfocused thematic survey incapable of depth inside 1,500 words. Third, calling themes “important” yields a descriptive report rather than an arguable investigation of authorial craft. A repaired Band 5 template reads: “How does [Author]'s use of [specific formal choice, e.g. fractured domestic dialogue] represent [focused conceptual tension] in [One Studied Work]?”",
          markScheme: [
            {
              point: "Identifies Flaw 1: HL Essay must examine strictly ONE studied work (never two).",
              keywords: ["one", "single", "two works", "violat", "limit"],
            },
            {
              point: "Identifies Flaw 2: overly broad list of three topics impossible to sustain with depth in 1,200–1,500 words.",
              keywords: ["broad", "unfocused", "three", "1,500", "1500", "survey", "narrow"],
            },
            {
              point: "Identifies Flaw 3: descriptive/thematic wording ('important themes') lacking an arguable focus on authorial craft/choices.",
              keywords: ["descriptive", "arguable", "craft", "choice", "report", "how"],
            },
            {
              point: "Provides a focused Band 5 inquiry template linking one work, specific literary craft, and a conceptual stake.",
              keywords: ["how does", "template", "formal", "represent", "conceptual", "tension", "inquiry"],
            },
          ],
          commonError: "Fixing the breadth while forgetting that the HL Essay can ONLY focus on ONE literary work.",
          hints: [
            "Check the number of works in the draft title first!",
            "Then evaluate scope (three massive themes inside 1,500 words) and analytical framing ('important themes' vs authorial choices).",
          ],
        },
        {
          id: "1-readers-writers-texts-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Compare and contrast",
          guideRef: "voice-tone-ambiguity",
          question:
            "Compare and contrast how **verbal irony** and **dramatic irony** position the reader differently in relation to a speaker's self-awareness, illustrating each with a brief original example (4 marks).",
          modelAnswer:
            "Both modes rely on a productive gap between surface utterance and deeper reality, inviting active reader decoding. However, they diverge sharply in speaker awareness. In verbal irony, the speaker knowingly crafts the discrepancy — for instance, muttering “What a cosy palace” inside a leaking attic — aligning the reader *with* the speaker's sardonic wit. By contrast, in dramatic irony the speaker speaks in earnest ignorance while the audience holds concealed truth — such as praising a loyal treasurer whom viewers already watched stealing the ledger — positioning the reader *above* the character in tense, critical detachment.",
          markScheme: [
            {
              point: "Identifies shared foundation: both generate meaning through a structural gap between surface speech and deeper truth.",
              keywords: ["both", "gap", "surface", "discrepancy", "active", "decod"],
            },
            {
              point: "Contrasts speaker awareness: intentional/knowing in verbal irony versus unwitting/blind in dramatic irony.",
              keywords: ["knowingly", "intentional", "aware", "ignorance", "unwitting", "blind"],
            },
            {
              point: "Contrasts reader positioning: aligned *with* the speaker's wit in verbal irony vs positioned *above* the character in dread/detachment in dramatic irony.",
              keywords: ["align", "with", "above", "detachment", "dread", "superior", "position"],
            },
            {
              point: "Supplies clear illustrative examples accurately matching both modes.",
              keywords: ["palace", "attic", "treasurer", "steal", "for instance", "such as", "example"],
            },
          ],
          commonError: "Defining the two terms in separate unconnected paragraphs without contrasting how they position the reader differently.",
          hints: [
            "Start with what both modes share, then contrast speaker awareness and reader alignment.",
            "Include one crisp invented 1-sentence illustration for each mode.",
          ],
        },
        {
          id: "1-readers-writers-texts-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          marks: 6,
          commandTerm: "Discuss",
          guideRef: "reader-response-choices",
          question:
            "Read this original unseen monologue:\n\n> *When the railway finally cut across our valley, my grandfather refused to ride it even once. Folks called him stubborn, stuck in yesterday's mud. Still, every dusk he carried a cane chair to the fence and timed the express on his pocket watch — nodding once, with something almost like pride, whenever the 6:15 rounded the bend on the dot.*\n\nDiscuss how the writer balances **competing interpretive perspectives** inside this passage, showing how both an **implied** and a **resisting** or **nuanced** reader can ground distinct claims in the text (6 marks).",
          modelAnswer:
            "The writer deliberately embeds conflicting community and private perspectives so the passage resists any flat caricature of rural obstinacy. Initially, colloquial dismissal (“stuck in yesterday's mud”) signals how modernising neighbours label the grandfather's refusal as mere regression. Yet the pivotal hinge “Still” shifts into tender observation: carrying a cane chair at dusk and checking his “pocket watch” reveals ritual engagement rather than hostile blindness.\n\nAn implied, sympathetic reading follows the narrator's gentle qualifier — “almost like pride” — interpreting the grandfather's solitary nod as quiet reconciliation with precision and order, honouring craftsmanship even in a machine he declines to board. Conversely, a more sceptical or resisting reading notes that his approval belongs solely to punctuality (“on the dot”) measured from behind a “fence”: rather than embracing change, he maintains strict boundary control, domesticating an invasive industrial intrusion into a clockwork spectacle on his own terms. Holding both readings in balance showcases how concrete details — the fence, the watch, the hedged adverb “almost” — sustain rich ambiguity.",
          markScheme: [
            {
              point: "Analyses the opening community verdict ('stubborn', 'yesterday's mud') framing facile dismissal of tradition.",
              keywords: ["community", "neighbour", "dismiss", "mud", "caricature", "obstin", "regression"],
            },
            {
              point: "Identifies the structural/tonal hinge ('Still') pivoting to private evening ritual ('cane chair', 'pocket watch').",
              keywords: ["still", "hinge", "pivot", "ritual", "watch", "evening", "chair"],
            },
            {
              point: "Develops an evidence-grounded sympathetic / implied reading anchored in 'almost like pride' (quiet respect for craft/order).",
              keywords: ["sympathetic", "implied", "pride", "reconcil", "respect", "craft", "precision"],
            },
            {
              point: "Develops a contrasting nuanced / resisting reading anchored in spatial/controlling cues ('fence', 'timed', 'on the dot').",
              keywords: ["resisting", "sceptical", "fence", "boundary", "control", "invas", "spectacle", "terms"],
            },
            {
              point: "Evaluates the tentative qualifier 'almost' as a deliberate textual gap withholding absolute certainty about his inner motive.",
              keywords: ["almost", "qualifier", "hedg", "gap", "certainty", "motive", "ambiguity"],
            },
            {
              point: "Synthesises both perspectives cohesively without collapsing into unsupported speculation.",
              keywords: ["balance", "competing", "tension", "synthes", "evidence", "grounded"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (5–6 marks)",
              marks: [5, 6],
              descriptor:
                "Insightful, well-balanced evaluation weighing community framing, private ritual, implied vs resisting/nuanced readings, and the deliberate ambiguity of 'almost' and 'fence'.",
            },
            {
              band: "Band 3–4 (3–4 marks)",
              marks: [3, 4],
              descriptor:
                "Sound analysis contrasting how neighbours view the grandfather with his evening actions, offering two plausible readings with relevant evidence.",
            },
            {
              band: "Band 1–2 (0–2 marks)",
              marks: [0, 2],
              descriptor:
                "Summarises what the grandfather does or asserts one simplistic reading without examining craft or reader positioning.",
            },
          ],
          commonError: "Declaring flatly 'He secretly loves trains' without examining why he still stays behind the fence and never boards the train.",
          hints: [
            "Look at the hinge word 'Still' dividing neighbours' gossip from the grandfather's private dusk ritual.",
            "Pay special attention to THREE small cues: 'fence', 'pocket watch / on the dot', and the cautious hedge 'something almost like pride'.",
          ],
        },
        {
          id: "1-readers-writers-texts-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          marks: 8,
          commandTerm: "Design",
          guideRef: "learner-portfolio-craft",
          question:
            "Design a comprehensive **DP1–DP2 Learner Portfolio Architecture** for an **HL English A: Literature** candidate studying 13 works (5 translated, 8 originally in English) across all four literary forms. Your plan must explain: (a) how to lock in the **Non-Overlap Work Rule** across IO, HL Essay, and Paper 2; (b) how to curate **≤40-line extracts** and **Global Issues** for the IO; (c) how to harvest an **HL Essay line of inquiry**; and (d) how to build a **closed-book Paper 2 comparative bank** (8 marks).",
          modelAnswer:
            "A disciplined HL Learner Portfolio begins with a master **Non-Overlap Allocation Matrix** partitioning all thirteen studied texts into three mutually exclusive reservoirs: two works locked for the Individual Oral (strictly one original English text plus one work in translation), one entirely distinct work reserved for the external HL Essay (1,200–1,500 words), and a Paper 2 Reserve holding three to four versatile, non-overlapping texts drawn from varied literary forms and historical contexts. Locking these boundaries early guarantees compliance across the minimum five distinct assessment works while still leaving flexibility if prompt priorities shift.\n\nFor Individual Oral preparation, each text receives an **Extract Vault** logging two stylistically dense passages capped strictly at forty lines — prioritising imagery, syntactic shifts, subtext, and tonal tension over bare plot exposition. Alongside each extract sits a **Global Issue Stress-Test** pairing one of the five IB Fields of Inquiry with a narrow statement verified for wide-scale significance, transnational reach, and everyday local impact, ready to distil into the ten-bullet outline.\n\nTo cultivate the **HL Essay**, the portfolio maintains an **Inquiry Log** capturing unresolved interpretive puzzles linked to one of the seven central concepts — turning casual margin notes on narrative voice, omission, or form into an arguable whole-work question tailored to 1,200–1,500 words. Finally, because Paper 2 is closed book, the portfolio stores a **Comparative Memory Bank** for every reserve text: eight to ten embedded micro-quotations (three to eight words each), pivotal structural turning points, and cross-form friction tables showing how contrasting mediums (such as theatrical staging versus prose focalization) reshape shared human tensions.",
          markScheme: [
            {
              point: "Designs a strict Non-Overlap Allocation Matrix separating IO (2 works), HL Essay (1 distinct work), and Paper 2 (2 exam works; 3–4 prepared) out of 13 works.",
              keywords: ["matrix", "non-overlap", "mutually exclusive", "thirteen", "five", "distinct"],
            },
            {
              point: "Specifies the mandatory IO language split (1 original English + 1 translated work) with zero overlap into HL Essay or Paper 2.",
              keywords: ["english", "translat", "individual oral", "pair", "split"],
            },
            {
              point: "Details IO Extract Vault selection criteria: strict ≤40-line cap and high stylistic density (imagery, syntax, subtext) over plot summary.",
              keywords: ["forty", "40", "dense", "subtext", "imagery", "vault", "exposition"],
            },
            {
              point: "Integrates Global Issue narrowing (5 Fields of Inquiry + wide-scale, transnational, local everyday impact) and the 10-bullet outline.",
              keywords: ["global issue", "transnational", "local", "fields", "ten-bullet", "10-bullet"],
            },
            {
              point: "Explains harvesting an HL Essay line of inquiry: ONE distinct work, linked to the 7 Concepts, narrow arguable question within 1,200–1,500 words.",
              keywords: ["1,200", "1,500", "1500", "seven", "concept", "inquiry", "puzzle"],
            },
            {
              point: "Designs a closed-book Paper 2 Memory Bank containing 8–10 short micro-quotations (3–8 words) plus structural/formal turning points.",
              keywords: ["closed book", "micro-quotation", "eight", "structural", "turning point", "memory"],
            },
            {
              point: "Includes cross-form / cross-text comparative mapping (contrasting how different literary forms shape shared tensions).",
              keywords: ["cross-form", "comparative", "staging", "focalization", "medium", "friction"],
            },
            {
              point: "Demonstrates cohesive, practical DP1–DP2 strategic workflow linking portfolio logging directly to assessment performance.",
              keywords: ["strategic", "workflow", "agility", "flexib", "compliance", "discipline"],
            },
          ],
          markbands: [
            {
              band: "Band 5 (7–8 marks)",
              marks: [7, 8],
              descriptor:
                "Comprehensive, accurate, strategically integrated HL Portfolio blueprint satisfying every FA2021 rule (13 works, non-overlap, ≤40 lines, 10 bullets, 1,200–1,500w HL Essay, closed-book Paper 2 cross-form bank).",
            },
            {
              band: "Band 4 (5–6 marks)",
              marks: [5, 6],
              descriptor:
                "Solid, accurate portfolio plan covering all four requested components clearly, with minor omissions in tactical detail or cross-form synthesis.",
            },
            {
              band: "Band 3 (3–4 marks)",
              marks: [3, 4],
              descriptor:
                "Covers several accurate IB regulations (such as non-overlap or 40 lines) but lacks concrete methods for HL Essay inquiry or Paper 2 comparative prep.",
            },
            {
              band: "Band 1–2 (0–2 marks)",
              marks: [0, 2],
              descriptor:
                "Vague general study advice with inaccurate IB rules or missing assessment constraints.",
            },
          ],
          commonError: "Forgetting that Paper 2 is closed book, conflating IO English/translated pairings with HL Essay rules, or ignoring the 10-bullet outline and 1,200–1,500 word limit.",
          hints: [
            "Check all four sub-parts (a)–(d) and anchor each in exact IB FA2021 numbers (13 works, ≤40 lines, 10 bullets, 1,200–1,500 words, 3–4 Paper 2 reserve works).",
            "Explain *how* each portfolio entry directly prevents a classic exam pitfall (e.g. closed-book quotation blanks or last-minute work overlap).",
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 questions — ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "1-readers-writers-texts-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "close-reading-meaning",
      question:
        "A student writes: *“The writer uses sibilance in ‘soft silk’ to create a smooth sound effect that draws the reader in.”* Name the exact two-word IB exam pitfall illustrated by naming a device followed by a generic cliché without conceptual analysis.",
      answer: {
        type: "text",
        accept: ["technique-spotting", "technique spotting", "feature-spotting", "feature spotting", "device-spotting", "device spotting"],
        display: "technique-spotting",
      },
      solution: [
        "Identifying a stylistic label and attaching a generic effect cliché without explaining mechanism or conceptual meaning is **technique-spotting** (or **feature-spotting**).",
      ],
      hints: [
        "Look at Tier 2 of the IB Close-Reading Ladder in Section 1.",
        "Two hyphenated words: 'technique-_____' or 'feature-_____'.",
      ],
    },
    {
      id: "1-readers-writers-texts-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "learner-portfolio-craft",
      question:
        "Under strict IB FA2021 Non-Overlap rules, what is the **minimum number of completely distinct literary works** an HL English A: Literature student must actively deploy across their Individual Oral, HL Essay, and Paper 2 combined?",
      answer: { type: "number", value: 5, display: "5 works" },
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "4 distinct works is the SL total (2 IO + 2 Paper 2); HL candidates must also write the HL Essay on 1 additional non-overlapping work.",
        },
        {
          spec: { type: "number", value: 13 },
          feedback: "13 is the minimum number of works studied across the course, whereas the question asks for works actively deployed across IO + HL Essay + Paper 2.",
        },
      ],
      solution: [
        "Individual Oral (2 works) + HL Essay (1 distinct work) + Paper 2 (2 distinct works) = **5** completely distinct literary works.",
      ],
      hints: [
        "Count each assessed component that uses studied works at HL: IO (?), HL Essay (?), Paper 2 (?).",
        "Sum those three counts with zero overlap.",
      ],
    },
    {
      id: "1-readers-writers-texts-ch-q03",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 4,
      commandTerm: "Analyse",
      guideRef: "close-reading-meaning",
      question:
        "Read this original unseen minimalist passage:\n\n> *He returned the key. She did not check the ring. Rain ticked on the tin awning. After a minute she asked if the bus still ran on the quarter-hour.*\n\nMinimalist prose contains almost no metaphors or ornate adjectives. Analyse how **parataxis, omission, and acoustic detail** construct intense emotional subtext without ever naming an emotion (4 marks).",
      modelAnswer:
            "Stripped-back parataxis — four brief, clipped sentences devoid of subordinating links — enacts emotional numbness, mirroring two people unable to risk sustained dialogue. Omission intensifies the quiet rupture: her refusal to “check the ring” withholds both confrontation and forgiveness, leaving Iserian space for unspoken betrayal or exhaustion. Against that vacuum, the stark mechanical sound of rain ticking on “tin” amplifies suspended silence, until her mundane transit query deflects raw grief into practical exit — proving plainness itself operates as potent authorial craft.",
      markScheme: [
        {
          point: "Analyses stripped-back parataxis / clipped sentence rhythm enacting shock, numbness, or guarded restraint.",
          keywords: ["parataxis", "clipped", "numb", "restraint", "subordinat", "stark", "rhythm"],
        },
        {
          point: "Analyses deliberate omission ('did not check', unnamed feelings) inviting reader inference of unspoken rupture.",
          keywords: ["omission", "unspoken", "rupture", "withhold", "silence", "iser", "infer"],
        },
        {
          point: "Analyses the spare acoustic/sensory cue ('Rain ticked on the tin awning') magnifying tension inside the pause.",
          keywords: ["acoustic", "tick", "tin", "amplif", "pause", "mechanical", "sound"],
        },
        {
          point: "Analyses the closing deflection to bus schedules showing how mundane logistics mask emotional finality.",
          keywords: ["deflect", "mundane", "logistics", "transit", "finality", "exit", "mask"],
        },
      ],
      commonError: "Complaining that the passage lacks literary techniques because it contains no similes or metaphors.",
      hints: [
        "Remember: minimalism IS a deliberate stylistic choice! Look at sentence length (parataxis) and what is withheld (omission).",
        "Notice why the writer inserts 'Rain ticked on the tin awning' between two human moments — what happens to time in that beat?",
      ],
    },
    {
      id: "1-readers-writers-texts-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 6,
      commandTerm: "Examine",
      guideRef: "voice-tone-ambiguity",
      question:
        "Read this original unseen dramatic monologue:\n\n> *I kept the lighthouse gleaming forty winters;*\n> *no freighter scraped the reef upon my watch.*\n> *My daughters write that coastal charts have changed —*\n> *satellites guide the tankers past the point.*\n> *Still, someone ought to oil the brass gear-teeth*\n> *in case the sky forgets its newest tricks.*\n\nExamine how the poet weaves **voice, contrasting semantic fields, and quiet irony** to explore obsolescence and pride (6 marks).",
      modelAnswer:
        "Constructing an ageing keeper's persona, the poet opens with steadfast, almost heroic cadence (“gleaming forty winters”, “upon my watch”), anchoring identity in tangible stewardship and maritime vigilance. A sharp clash of semantic fields immediately destabilises that certainty: modern digital diction (“coastal charts”, “satellites”, “tankers”) intrudes via the daughters' distant letters, relegating manual beacon-keeping to quiet redundancy.\n\nYet the speaker's turning adverb “Still” resists passive surrender. Insisting on oiling the “brass gear-teeth” clings to tactile craft, while his sly understatement — dubbing satellite navigation “newest tricks” — reveals dry, ironic scepticism toward modern hubris. Crucially, the implied author keeps the voice productively ambiguous: the closing line hovers between noble, wary wisdom (“in case the sky forgets”) and poignant self-consolation from a craftsman unwilling to accept his own obsolescence.",
      markScheme: [
        {
          point: "Analyses the opening voice/cadence ('gleaming forty winters', 'upon my watch') anchoring identity in proud stewardship.",
          keywords: ["persona", "stewardship", "vigilance", "heroic", "forty", "identity", "pride"],
        },
        {
          point: "Identifies the colliding semantic fields (traditional tactile brass/reef craft vs automated 'satellites'/'tankers').",
          keywords: ["semantic", "satellites", "digital", "automat", "brass", "tactile", "redundan"],
        },
        {
          point: "Analyses the daughters' mediating role ('write') signalling generational distance and gentle challenge.",
          keywords: ["daughters", "generational", "distant", "letters", "modern"],
        },
        {
          point: "Analyses the ironic dismissal in 'newest tricks' (and personification of 'sky forgets') exposing scepticism toward technological hubris.",
          keywords: ["tricks", "sceptic", "hubris", "understatement", "ironic", "personif", "forgets"],
        },
        {
          point: "Separates speaker from implied author to preserve productive ambiguity (wary wisdom vs poignant denial of obsolescence).",
          keywords: ["ambigu", "implied author", "consolat", "wisdom", "obsolesc", "hovers", "simultaneous"],
        },
        {
          point: "Integrates concise embedded micro-quotations smoothly into cohesive analytical prose.",
          keywords: ["destabilis", "clings", "relegat", "resists", "tension"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (5–6 marks)",
          marks: [5, 6],
          descriptor:
            "Perceptive evaluation of persona, colliding semantic fields, dry irony ('newest tricks'), and dual ambiguity between wisdom and poignant denial.",
        },
        {
          band: "Band 3–4 (3–4 marks)",
          marks: [3, 4],
          descriptor:
            "Clear analysis of old-versus-new contrast and the speaker's pride, with relevant quotations and partial attention to irony.",
        },
        {
          band: "Band 1–2 (0–2 marks)",
          marks: [0, 2],
          descriptor:
            "Summarises that the lighthouse keeper is old-fashioned and disagrees with his daughters about satellites.",
        },
      ],
      commonError: "Deciding either that the speaker is 'obviously foolish' or 'obviously wise' instead of tracing how the poem holds both readings in poignant tension.",
      hints: [
        "Contrast the concrete maritime lexicon ('gleaming', 'reef', 'brass gear-teeth') with the modern technical field ('satellites', 'tankers').",
        "Unpack the sly irony of 'in case the sky forgets its newest tricks' — is he perceptive, stubbornly nostalgic, or both?",
      ],
    },
    {
      id: "1-readers-writers-texts-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 6,
      commandTerm: "To what extent",
      guideRef: "reader-response-choices",
      question:
        "“Because readers bring radically different cultural horizons to a text, literary meaning is entirely invented by the reader rather than constructed by the writer.”\n\n**To what extent** do you agree with this proposition from an IB Area of Exploration 1 perspective? Support your argument with clear reference to textual craft and reader-response theory (6 marks).",
      modelAnswer:
        "The proposition rightly recognises that reading is never passive reception, yet overreaches by erasing authorial craft. As Wolfgang Iser's reception theory demonstrates, literary works contain deliberate textual gaps — silences, ironies, and omissions — that require active reader co-construction. Consequently, audiences from distinct cultural or historical horizons can legitimately diverge: an implied reader may align with a narrator's nostalgic charm while a resisting reader interrogates silenced labour or ideological bias encoded at the margins.\n\nNevertheless, meaning is far from “entirely invented”. Every valid IB interpretation remains strictly bounded by determinate textual cues — specific diction, syntactic shifts, structural juxtapositions, and narrative masks crafted by the writer. Treating reader-response theory as licence for unsupported subjectivity collapses into relativism that fails Criterion A and B. Ultimately, AoE 1 reveals meaning as a disciplined **transaction**: writers engineer linguistic architecture and productive gaps, while attentive readers activate competing, evidence-substantiated readings within those textual walls.",
      markScheme: [
        {
          point: "Takes a nuanced, balanced 'to what extent' stance rejecting binary extremes (neither author-only nor reader-only).",
          keywords: ["overreach", "nuanced", "balance", "transaction", "neither", "partially", "extent"],
        },
        {
          point: "Validates the reader's active role using Wolfgang Iser's textual gaps / co-construction.",
          keywords: ["iser", "gaps", "co-construct", "active", "passive", "reception"],
        },
        {
          point: "Illustrates interpretive plurality via implied vs resisting readers shaped by differing cultural horizons.",
          keywords: ["implied", "resisting", "plural", "horizons", "ideological", "margins"],
        },
        {
          point: "Challenges 'entirely invented' by proving the anchoring power of determinate authorial craft (diction, syntax, irony, structure).",
          keywords: ["determinate", "cues", "craft", "diction", "syntax", "juxtapos", "architecture"],
        },
        {
          point: "Distinguishes rigorous textual plurality from anything-goes relativism under IB Criteria A & B.",
          keywords: ["relativism", "bounded", "substantiat", "criterion", "evidence", "subjectiv"],
        },
        {
          point: "Synthesises AoE 1's triangular model (Readers, Writers, Texts working dynamically together).",
          keywords: ["triang", "dynamic", "disciplin", "walls", "interact", "synthes"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (5–6 marks)",
          marks: [5, 6],
          descriptor:
            "Incisive, balanced critical evaluation weighing Iser's textual gaps and implied/resisting readers against determinate textual evidence and Criterion A/B rigour.",
        },
        {
          band: "Band 3–4 (3–4 marks)",
          marks: [3, 4],
          descriptor:
            "Clear, sensible argument agreeing partially and acknowledging both reader interpretation and textual evidence, though conceptual depth is lighter.",
        },
        {
          band: "Band 1–2 (0–2 marks)",
          marks: [0, 2],
          descriptor:
            "One-sided assertion ('readers can decide anything' or 'only the author's intention matters') with minimal literary theory or craft grounding.",
        },
      ],
      commonError: "Answering with a simplistic 'I completely agree' or 'I completely disagree' instead of calibrating *where* reader agency operates and *where* textual boundaries hold.",
      hints: [
        "Command term 'To what extent' demands calibration: what part of the quote is insightful, and what adverb ('entirely') goes too far?",
        "Deploy Iser's distinction between determinate cues (writer's craft) and indeterminate gaps (reader's active bridge).",
      ],
    },
    {
      id: "1-readers-writers-texts-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 8,
      commandTerm: "Analyse",
      guideRef: "close-reading-meaning",
      question:
        "Read this original unseen prose fiction extract:\n\n> *Every visitor admired the museum's 'Hall of Voyages' — mahogany cases gleaming under amber spots, brass sextants suspended like delicate constellations, and neatly lettered cards celebrating 'fearless cartographic pioneers'. Near the north stairwell, however, a single low cabinet held three salt-blackened oarlocks and a torn manifest listing forty-two deckhands solely by cabin number. Most tour groups passed it on their way to the gift shop, pausing just long enough to adjust their audio-guides.*\n\nAnalyse how the writer deploys **spatial architecture, ironic framing, and contrasting diction** to critique curated historical memory — and how an attentive resisting reader responds to the closing sentence (8 marks).",
      modelAnswer:
        "Through sharp spatial architecture and ironic register, the writer exposes how institutional curation manufactures romantic myth while quietly marginalising anonymous human labour. The main gallery operates as an arena of theatrical reverence: lustrous materials (“mahogany”, “brass”) lit by warm “amber spots” elevate navigation tools into celestial grandeur through the simile “delicate constellations”. Placing “Hall of Voyages” and “fearless cartographic pioneers” inside quotation marks creates unmistakable verbal irony, signalling that the implied author distances herself from heroic imperial self-congratulation.\n\nThe structural hinge “however” redirects gaze from illuminated centrality to a marginalised threshold — a “single low cabinet” tucked near a “north stairwell”. Here, material diction shifts violently from gleaming permanence to corroded fragility (“salt-blackened”, “torn manifest”). Even the archival text strips workers of individual identity, reducing forty-two human lives “solely” to bureaucratic “cabin number” — a chilling contrast to the lovingly named “pioneers” upstairs.\n\nFinally, the closing sentence extends the critique beyond curators to complicit modern spectators. Watching tour groups drift past toward the “gift shop” while tweaking their “audio-guides” generates dry satirical indictment: commodified heritage literally programmes visitors' attention away from uncomfortable truth. For an attentive resisting reader, that final detail becomes an ethical mirror, challenging audiences not merely to condemn biased museums, but to question whose silences our own convenient scripts encourage us to walk past.",
      markScheme: [
        {
          point: "Establishes a sharp conceptual thesis linking curated museum space to selective myth-making and silenced labour.",
          keywords: ["curat", "myth", "marginal", "labour", "institutional", "selective"],
        },
        {
          point: "Analyses lustrous staging and simile ('mahogany', 'amber spots', 'delicate constellations') romanticising exploration.",
          keywords: ["constellations", "mahogany", "amber", "celestial", "romantic", "theatrical", "reverence"],
        },
        {
          point: "Identifies ironic quotation marks ('Hall of Voyages', 'fearless cartographic pioneers') distancing implied author from imperial rhetoric.",
          keywords: ["quotation marks", "verbal irony", "implied author", "imperial", "rhetoric", "self-congratulat"],
        },
        {
          point: "Analyses spatial marginalisation ('however', 'single low cabinet', 'north stairwell') enacting hierarchy of visibility.",
          keywords: ["however", "stairwell", "low cabinet", "spatial", "hierarchy", "threshold", "margin"],
        },
        {
          point: "Contrasts corroded diction ('salt-blackened', 'torn') and bureaucratic erasure ('cabin number') against celebrated 'pioneers'.",
          keywords: ["salt-blackened", "corrod", "torn", "bureaucratic", "cabin number", "anonym", "erasure"],
        },
        {
          point: "Analyses the satirical detail of the 'gift shop' and 'audio-guides' exposing commodified, scripted inattention.",
          keywords: ["gift shop", "audio-guides", "commodif", "scripted", "satir", "inattention", "complic"],
        },
        {
          point: "Articulates a resisting-reader response treating the ending as an ethical mirror implicating modern audiences.",
          keywords: ["resisting", "ethical", "mirror", "implicat", "spectator", "walk past", "silences"],
        },
        {
          point: "Sustains formal academic register and seamlessly embedded micro-quotations across cohesive conceptual movements.",
          keywords: ["exposes", "redirects", "contrasts", "extends", "challenging"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (7–8 marks)",
          marks: [7, 8],
          descriptor:
            "Incisive, cohesive conceptual analysis weaving spatial hierarchy, ironic quotation framing, material contrast, commercial satire, and resisting-reader self-implication.",
        },
        {
          band: "Band 4 (5–6 marks)",
          marks: [5, 6],
          descriptor:
            "Effective, well-supported analysis contrasting the grand hall with the low cabinet and addressing the ironic closing sentence accurately.",
        },
        {
          band: "Band 3 (3–4 marks)",
          marks: [3, 4],
          descriptor:
            "Recognises the contrast between rich displays and ignored workers, though craft evaluation (ironic quotes, audio-guides, resisting lens) stays partial.",
        },
        {
          band: "Band 1–2 (0–2 marks)",
          marks: [0, 2],
          descriptor:
            "Descriptive summary of what visitors see in the museum with minimal stylistic evaluation.",
        },
      ],
      commonError: "Missing the ironic quotation marks around 'fearless cartographic pioneers' or ignoring how 'audio-guides' symbolically control whose voice visitors hear.",
      hints: [
        "Organise conceptually into three movements: (1) Curated theatrical glory; (2) Spatial & bureaucratic erasure at the stairwell; (3) Complicit consumption ('gift shop', 'audio-guides').",
        "Ask what the 'audio-guides' represent metaphorically in a passage about controlled historical narrative.",
      ],
    },
    {
      id: "1-readers-writers-texts-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 8,
      commandTerm: "Evaluate",
      guideRef: "voice-tone-ambiguity",
      question:
        "Read this original unseen drama fragment:\n\n> *SETTING: A bright kitchen table piled with unopened sympathy cards. A kettle boils offstage.*\n> **NORA** *(folding a bank letter into neat squares)*: Everyone keeps saying how brave Father looked at the end. Funny — nobody mentioned how loudly he cursed the staircase every morning for six years.\n> **SAM** *(without looking up from polishing a spoon)*: Let them keep the brave version, Nora. It costs us nothing.\n> **NORA** *(stops folding; long silence as the kettle shrieks)*: It costs *him* everything he actually was.\n\nEvaluate how the playwright combines **stage directions, subtext, acoustic tension, and contrasting tonal registers** to stage an unresolved conflict over remembrance (8 marks).",
      modelAnswer:
        "Rather than delivering sentimental grief, the playwright dramatises an acute clash between sanitised public myth and jagged private honesty through visual props, restrained subtext, and mounting acoustic pressure. Immediately, the opening setting establishes ironic visual dissonance: “unopened sympathy cards” piled across a “bright” table expose social condolence as tidy, sealed ritual disconnected from raw household reality. Both siblings channel grief into repetitive, tightly controlled hand gestures — Nora creasing a “bank letter” into geometric “squares”, Sam methodically “polishing a spoon” — using physical busywork to ward off direct eye contact.\n\nDialogue then splits into sharply opposing registers. Nora's wry, unsentimental aside (“Funny”) punctures public eulogy by pairing “brave” with the gritty domestic reality of cursing the “staircase”, insisting on flawed humanity over hagiography. Sam's pragmatic refusal to look up — defending the polite legend because it “costs us nothing” — deploys transactional diction that inadvertently betrays his wish for emotional shelter rather than historical truth.\n\nThe climax arrives not through shouting, but through theatrical pause and sound design. Nora's arrested motion (“stops folding”) creates visual stillness directly against the offstage kettle's rising “shrieks”, externalising suppressed pressure that neither sibling voices directly. Her italicised rebound — “costs *him* everything” — inverts Sam's commercial verb into an ethical charge, yet the scene refuses tidy resolution: both impulses remain painfully legible, pitting protective mercy for the living against fidelity to the messy dead.",
      markScheme: [
        {
          point: "Analyses opening visual irony ('bright' kitchen + 'unopened sympathy cards') exposing ritualised condolence divorced from lived grief.",
          keywords: ["unopened", "bright", "dissonance", "ritual", "condolence", "visual", "cards"],
        },
        {
          point: "Analyses parallel stage-business props ('folding' bank letter / 'polishing a spoon') signalling defensive deflection and avoided eye contact.",
          keywords: ["folding", "spoon", "busywork", "eye contact", "gestur", "deflect", "controlled"],
        },
        {
          point: "Analyses Nora's wry, unsentimental register ('Funny', 'cursed the staircase') resisting sanitised eulogy.",
          keywords: ["unsentimental", "wry", "eulogy", "staircase", "hagiography", "flawed", "punctur"],
        },
        {
          point: "Analyses Sam's transactional diction ('costs us nothing') and refusal to look up revealing protective evasion.",
          keywords: ["transactional", "pragmatic", "evasion", "shelter", "nothing", "commercial", "protective"],
        },
        {
          point: "Evaluates the juxtaposition of physical freeze ('stops folding', 'long silence') against the offstage 'kettle shrieks' externalising unspoken strain.",
          keywords: ["kettle", "shrieks", "silence", "externalis", "acoustic", "stillness", "pressure"],
        },
        {
          point: "Analyses the italicised verbal echo/inversion ('costs *him*') turning economic language into moral fidelity.",
          keywords: ["echo", "invert", "italic", "fidelity", "moral", "ethical", "verb"],
        },
        {
          point: "Evaluates unresolved conceptual ambiguity (protective peace for survivors vs truthful memory of a flawed person).",
          keywords: ["unresolved", "ambigu", "survivor", "mercy", "living", "dead", "tension"],
        },
        {
          point: "Reads the script explicitly as three-dimensional theatrical performance (playwright's craft, staging, sound, subtext).",
          keywords: ["playwright", "theatrical", "staging", "subtext", "offstage", "performance"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (7–8 marks)",
          marks: [7, 8],
          descriptor:
            "Insightful theatrical evaluation reading staging, props, acoustic tension, transactional verbal echo, and unresolved ethical tension between mercy and truthful memory.",
        },
        {
          band: "Band 4 (5–6 marks)",
          marks: [5, 6],
          descriptor:
            "Clear analysis of both dialogue and stage directions (unopened cards, kettle shrieking, 'costs' repetition) tied effectively to grief and remembrance.",
        },
        {
          band: "Band 3 (3–4 marks)",
          marks: [3, 4],
          descriptor:
            "Accurate understanding of the siblings' disagreement with some relevant attention to stage cues, though reads partly like flat prose.",
        },
        {
          band: "Band 1–2 (0–2 marks)",
          marks: [0, 2],
          descriptor:
            "Summarises that Nora and Sam argue about their late father while ignoring stage directions, sound, and subtext.",
        },
      ],
      commonError: "Treating the drama script like a flat conversation and ignoring the stage directions ('unopened', 'without looking up', 'long silence', 'kettle shrieks').",
      hints: [
        "Read drama three-dimensionally: treat the unopened cards, the folded letter, the polished spoon, and the shrieking kettle as deliberate authorial choices.",
        "Track how Nora catches Sam's exact word 'costs' and turns its meaning inside out.",
        "Keep the final conflict genuinely balanced — why is Sam's instinct understandable even as Nora's rings fiercely true?",
      ],
    },
    {
      id: "1-readers-writers-texts-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 10,
      commandTerm: "Explore",
      guideRef: "close-reading-meaning",
      question:
        "Read this original unseen literary non-fiction extract (memoir essay):\n\n> *When my family left our river town, we packed only what fitted inside two tin trunks — winter coats, a chipped mortar, three ledgers of grandmother's spice ratios, and none of the photographs hanging above the stairwell. For years I told university friends that leaving the portraits behind had been pure practicality; paper warps in monsoon humidity, after all, and luggage weight was billed by the kilo. Yet whenever I visit a strange city now, I find myself lingering in second-hand bookshops, buying faded postcards of strangers' weddings and harbour picnics from decades before I was born. A friend recently joked that I was collecting ghosts. Perhaps she is right — or perhaps, having watched a whole household compress into forty kilos of tin, I keep trying to prove that someone else's small Sunday afternoon survived the weight limit.*\n\n*Guiding question:* How does the writer craft **voice, structural contrast, tonal shift, and productive ambiguity** to explore displacement and inherited memory? Write a full Band 5 Paper 1 mini-essay organised conceptually (10 marks).",
      modelAnswer:
        "In this reflective memoir extract, the writer transforms an ordinary inventory of migration into a searching meditation on how displacement reshapes memory — moving gracefully from pragmatic self-protection toward quiet, unresolved longing. Rather than narrating exile chronologically, the essay constructs a conceptual arc linking material compression, defensive rationalisation, and surrogate remembrance.\n\nFrom the opening sentence, stark diction and selective omission enact the harsh arithmetic of departure. Packing a household into “two tin trunks” pairs utilitarian survival (“winter coats”) with fragile cultural inheritance (“chipped mortar”, “spice ratios”), while the pointed negative — “none of the photographs” — introduces an immediate Iserian textual gap. Readers sense emotional weight precisely in what is excluded. The narrator initially polices that wound through a brisk, conversational shield: bureaucratic justification (“billed by the kilo”) and the casual parenthetical “after all” project an assured retrospective persona who insists loss was merely “practicality”. Yet the subtle irony of treating family faces like perishable freight invites an attentive reader to read against the speaker's surface composure.\n\nThe structural hinge “Yet” fractures that pragmatic mask, pivoting in both time and register from past justification to compulsive present ritual. Wandering “strange” cities to buy “faded postcards” of unknown “weddings and harbour picnics” juxtaposes anonymous intimacy against her own unphotographed past. Crucially, the writer complicates her friend's neat metaphor — “collecting ghosts” — through the hesitant double cadence “Perhaps … or perhaps”. Refusing a single sentimental verdict, the closing sentence reframes the earlier economic phrase “weight limit” into a poignant conceptual metaphor: if migration reduces heritage to “forty kilos of tin”, rescuing strangers' “small Sunday afternoon” hovers ambiguously between grieving an irretrievable personal archive and quietly defying the cold ledger that decides what human moments deserve to survive.",
      markScheme: [
        {
          point: "Establishes a cohesive conceptual thesis framing the memoir as a movement from pragmatic self-protection to unresolved longing (zero plot-recap opening).",
          keywords: ["meditation", "displacement", "longing", "arc", "compression", "self-protection"],
        },
        {
          point: "Analyses the opening inventory ('two tin trunks', 'chipped mortar', 'spice ratios') balancing bare survival with cultural heritage.",
          keywords: ["trunks", "mortar", "spice", "survival", "heritage", "inventory", "arithmetic"],
        },
        {
          point: "Analyses the pointed omission ('none of the photographs') as a deliberate textual gap carrying unspoken emotional weight.",
          keywords: ["omission", "photographs", "gap", "iser", "excluded", "unspoken", "wound"],
        },
        {
          point: "Evaluates the defensive rationalising voice ('practicality', 'after all', 'billed by the kilo') using economic logic to shield vulnerability.",
          keywords: ["rationalis", "after all", "kilo", "shield", "persona", "bureaucratic", "practicality"],
        },
        {
          point: "Identifies ironic friction / resisting reading beneath surface composure (treating family images like perishable freight).",
          keywords: ["irony", "freight", "composure", "against", "attentive", "mask"],
        },
        {
          point: "Tracks the structural & tonal pivot ('Yet') from past justification to present compulsive ritual in 'second-hand bookshops'.",
          keywords: ["yet", "pivot", "hinge", "compuls", "ritual", "fractur", "present"],
        },
        {
          point: "Analyses the evocative contrast of buying strangers' 'faded postcards' ('weddings', 'harbour picnics') as surrogate memory.",
          keywords: ["postcards", "surrogate", "anonymous", "intima", "strangers", "picnics"],
        },
        {
          point: "Evaluates the friend's metaphor ('collecting ghosts') and the reflective double hedge ('Perhaps … or perhaps') opening ambiguity.",
          keywords: ["ghosts", "perhaps", "hedg", "hesitant", "verdict", "complicat"],
        },
        {
          point: "Analyses the closing structural echo transforming literal 'weight limit' / 'forty kilos of tin' into a conceptual metaphor of human worth.",
          keywords: ["weight limit", "echo", "metaphor", "forty kilos", "ledger", "survive"],
        },
        {
          point: "Sustains productive ambiguity and Band 5 Criterion C/D cohesion with seamlessly embedded micro-quotations and precise literary register.",
          keywords: ["ambigu", "hovers", "irretrievable", "defying", "archive", "cohes"],
        },
      ],
      markbands: [
        {
          band: "Band 5 (9–10 marks)",
          marks: [9, 10],
          descriptor:
            "Perceptive, conceptually organised mini-essay uniting omission/gaps, defensive persona, ironic rationalisation, structural echo ('weight limit'), and sustained ambiguity with seamless micro-quotations and polished register.",
        },
        {
          band: "Band 4 (7–8 marks)",
          marks: [7, 8],
          descriptor:
            "Strong, well-focused analysis addressing most stylistic shifts (inventory, 'after all', 'Yet' turn, postcards, closing echo) with clear conceptual progression.",
        },
        {
          band: "Band 3 (5–6 marks)",
          marks: [5, 6],
          descriptor:
            "Sound literal comprehension and relevant literary observations, though analysis occasionally reverts to chronological summary or flattens the closing ambiguity.",
        },
        {
          band: "Band 2 (3–4 marks)",
          marks: [3, 4],
          descriptor:
            "Mostly descriptive paraphrase of the memoir with isolated technique-spotting and weak conceptual linking.",
        },
        {
          band: "Band 1 (0–2 marks)",
          marks: [0, 2],
          descriptor:
            "Minimal retelling with little recognition of voice, structure, or authorial craft.",
        },
      ],
      commonError: "Walking chronologically sentence by sentence or treating the closing sentence as proof that 'she is simply lonely' without tracing how 'weight limit' echoes 'billed by the kilo'.",
      hints: [
        "Organise by three conceptual movements: (1) Material compression & omission; (2) Pragmatic self-defence vs ironic subtext; (3) Surrogate memory & ambiguous structural echo.",
        "Notice how the essay circles back to 'forty kilos of tin' and 'weight limit' — tracing that structural echo is pure Criterion B gold!",
        "Pay close attention to the double hedge 'Perhaps … or perhaps' as a hallmark of productive ambiguity.",
      ],
    },
  ],
};
