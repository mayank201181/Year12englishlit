// ---------------------------------------------------------------------------
// IB English A: Literature (FA2021) Paper 1 (HL) Mock Exam Paper.
// Simulates the mandatory HL double-passage format (2h 15m, two distinct
// literary forms: Drama + Literary Non-Fiction, 2 × 20 = 40 marks).
// Strict Non-Prescriptive Text Policy: 100% original unseen passages.
// ---------------------------------------------------------------------------
import type { ExamPaper, MarkBand } from "../types.ts";

const DRAMA_PASSAGE = `**Passage 1 — Original Unseen Drama Extract: *The Monsoon Ledger* (Act II, Scene 3)**

> *[A cramped ground-floor printshop at dusk. Shelves of lead type sag along the rear wall. Downstage centre stands a heavy ink-stained oak table lit by a single low-hanging amber bulb; the rest of the room recedes into damp blue-grey shadow. Upstage right, a shuttered window rattles intermittently in the rising wind. DEV (72) sits downstage, polishing a brass composing stick with methodical slowness. MEERA (46) stands near the door, coat still buttoned, clutching a damp yellow envelope. Neither looks at the other for three full seconds.]*
>
> **DEV:** *(without lifting his eyes)* You left the latch off again. The damp gets into the paper stock.
> **MEERA:** The bolt’s rusted through, Baba. I told you in April.
> **DEV:** April had dry wind. Oil fixes rust. Leaving fixes nothing.
> **MEERA:** *(steps two paces towards the table, then stops outside the pool of light)* I brought the notice from the municipal board. The extension was refused.
> **DEV:** *(sets the brass stick precisely parallel to the edge of the desk)* Put it under the paperweight.
> **MEERA:** You haven’t read the date.
> **DEV:** I know the date.
> **MEERA:** Thirty days.
> **DEV:** Plenty of time to finish the parish almanac.
> **MEERA:** *(voice tightening)* Nobody prints a parish almanac in lead anymore.
> **DEV:** *(sharply)* Nobody remembers who lived on this street before the overpass, either.
>
> *[Beat. The overhead bulb flickers once. MEERA crosses into the pool of light and lays the yellow envelope squarely over the brass composing stick, hiding it. DEV stares at the covered metal, his hands resting flat on the oak.]*
>
> **MEERA:** *(softer)* The clinic upstairs offered you the corner flat. Ground-level entrance. No stairs.
> **DEV:** *(quietly)* White walls.
> **MEERA:** Dry walls.
> **DEV:** No ink.
> **MEERA:** *(pause; she looks toward the rattling shutter)* You think I want to lock this door?
> **DEV:** *(rises slowly, moves upstage away from the lamp until his face is half in shadow, and fastens the shutter hook with a sharp metallic click)* I think you believe everything heavy is supposed to be thrown overboard so the boat moves faster.
> **MEERA:** *(still beneath the bright bulb, staring at the yellow envelope)* And I think you would rather sink with the press than admit you can’t lift the type-cases alone.
>
> *[Long silence. Outside, the first heavy sheet of rain strikes the corrugated roof. Neither moves to pick up the envelope. Lights hold on the covered brass stick as they fade slowly to black.]*`;

const NONFICTION_PASSAGE = `**Passage 2 — Original Unseen Literary Non-Fiction Extract: *On Cartography and Forgetting***

> **[Paragraph 1]** Every map is a polite confession of what its maker chose to omit. When I was eleven, I believed the folded street directory in my mother’s glovebox told the whole truth of our island: blue for water, yellow for reclaimed flats, crisp red veins for expressways that promised speed without memory. I would trace my fingertip along the coastline from the back seat, delighted by how cleanly the harbour surrendered to ink, unaware that the shore I traced had already been buried twice beneath imported sand.
>
> **[Paragraph 2]** Decades later, spreading that same crease-softened map across my desk, I am struck less by its accuracy than by its quiet confidence. The old ferry pier is still printed there in stubborn miniature; the mangrove creek where my uncle kept his wooden skiff remains a neat turquoise ribbon, though concrete pilings replaced the roots twenty winters ago. Yet I must guard against my own nostalgia, too. If official cartographers flatten a landscape in the name of order, memoirists often commit the gentler forgery of gilding it. Did the creek really smell of crushed lime and low tide every afternoon, or have I braided three separate summers into one convenient scent?
>
> **[Paragraph 3]** Still, the paper remembers what the skyline denies. Folded and refolded along the same pale scars, the directory refuses to lie flat; it lifts at the seams, insisting on its third dimension. We keep photographs, we keep receipts, we keep obsolete maps—not because they arrest time, but because they prove our earlier selves were not hallucinating. To read an outdated map honestly is to stand in two centuries at once: one foot on the asphalt that actually exists, the other on the vanished jetty that still governs how you measure distance.`;

const P1_HL_MARKBANDS_20: MarkBand[] = [
  {
    band: "Band 5 (17–20)",
    marks: [17, 20],
    descriptor:
      "**Crit A (5/5):** Perceptive, persuasive interpretation probing subtle tensions and ambiguities, anchored in tightly integrated micro-references. **Crit B (5/5):** Consistently insightful, medium-specific evaluation of *how* authorial choices construct meaning and audience/reader effect. **Crit C (5/5):** Cohesive conceptual organisation sustained across the full essay without chronological paraphrase. **Crit D (5/5):** Precise, fluent, varied academic register with accurate form-specific terminology.",
  },
  {
    band: "Band 4 (13–16)",
    marks: [13, 16],
    descriptor:
      "**Crit A (4/5):** Well-sustained, thoughtful interpretation grounded in relevant textual evidence with awareness of nuance. **Crit B (4/5):** Effective analysis of form-specific choices linked purposefully to meaning, with occasional lapses in evaluative depth. **Crit C (4/5):** Clear, focused conceptual progression and coherent paragraphing. **Crit D (4/5):** Clear, articulate academic expression with accurate terminology.",
  },
  {
    band: "Band 3 (9–12)",
    marks: [9, 12],
    descriptor:
      "**Crit A (3/5):** Sound literal comprehension with valid interpretive points, though some paraphrase creeps in. **Crit B (3/5):** Identifies relevant stylistic or formal devices with reasonable explanation, occasionally lapsing into technique-spotting. **Crit C (3/5):** Generally organised, though may drift toward sequential narration. **Crit D (3/5):** Clear overall register with minor repetition or imprecision.",
  },
  {
    band: "Band 2 (5–8)",
    marks: [5, 8],
    descriptor:
      "**Crit A (2/5):** Surface reading dominated by summary rather than critical interpretation. **Crit B (2/5):** Sparse or descriptive listing of features with minimal evaluation of effect. **Crit C (2/5):** Uneven focus or mechanical walkthrough structure. **Crit D (2/5):** Basic academic register with recurring lapses in clarity or precision.",
  },
  {
    band: "Band 1 (1–4)",
    marks: [1, 4],
    descriptor:
      "**Crit A–D (1/5 each):** Minimal grasp of passage meaning, virtually no analysis of form or craft, fragmented structure, and restricted linguistic control.",
  },
];

export const paper: ExamPaper = {
  id: "exam-p1-hl",
  title: "Paper 1 (HL) · Guided Literary Analysis (Drama & Literary Non-Fiction)",
  level: "HL",
  calculator: false,
  minutes: 135,
  paperType: "Paper 1 (HL) · Guided Literary Analysis (2 Passages, 40m)",
  questions: [
    // ======================== PASSAGE 1: DRAMA (Q01–Q07) ===================
    {
      id: "exam-p1-hl-q01",
      kind: "short",
      difficulty: "warmup",
      level: "HL",
      commandTerm: "Identify",
      topicId: "4-poetry-and-drama",
      guideRef: "dramatic-conventions-staging",
      question: `${DRAMA_PASSAGE}\n\nIdentify the **one-word theatrical term** for the meaningful use of physical distance, stage positioning, and spatial movement between characters (exemplified by Meera halting outside the pool of light and Dev later retreating upstage toward the shutter).`,
      answer: {
        type: "text",
        accept: ["proxemics", "stage proxemics"],
        display: "proxemics",
      },
      traps: [
        {
          spec: { type: "text", accept: ["blocking"] },
          feedback: "‘Blocking’ is the director’s rehearsal notation of movement; in IB Drama analysis, name the critical term for *meaningful physical distance and spatial relations* (derived from ‘proximity’).",
        },
        {
          spec: { type: "text", accept: ["pathetic fallacy"] },
          feedback: "Pathetic fallacy links weather/nature to emotion; here we want the theatrical term derived from ‘proximity’ for physical spacing between characters on stage.",
        },
      ],
      hints: [
        "Think of the root word ‘proximity’—how physical closeness or separation on stage communicates power and emotional distance.",
        "This one-word plural-form noun is a staple of Band 5 IB drama commentary.",
      ],
      solution: [
        "The meaningful theatrical deployment of physical distance, levels, and positioning between characters is called **proxemics**.",
        "Here, Meera’s hesitation near the door and Dev’s retreat upstage into half-shadow visually embody their emotional divide.",
      ],
      commonError: "Treating stage movements as neutral logistics rather than reading proxemics as primary dramatic meaning.",
      strategy: "Always map who moves toward/away from light, doors, and other bodies on stage",
    },
    {
      id: "exam-p1-hl-q02",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      topicId: "4-poetry-and-drama",
      guideRef: "subtext-dialogue-tragedy-comedy",
      question: `${DRAMA_PASSAGE}\n\nName the **classical dramatic dialogue technique** used in the rapid-fire exchange *“White walls.” / “Dry walls.” / “No ink.”* where characters trade terse, alternating single-phrase lines that sharpen ideological conflict.`,
      answer: {
        type: "text",
        accept: ["stichomythia", "stichomythic dialogue"],
        display: "stichomythia",
      },
      traps: [
        {
          spec: { type: "text", accept: ["soliloquy"] },
          feedback: "A soliloquy is a solo speech delivered alone on stage; this technique involves rapid alternating single lines between two speakers.",
        },
        {
          spec: { type: "text", accept: ["monologue"] },
          feedback: "A monologue is an extended uninterrupted speech by one character, whereas here Dev and Meera duel in clipped two-word volleys.",
        },
      ],
      hints: [
        "Originated in ancient Greek tragedy to mimic verbal fencing between antagonists.",
        "It begins with ‘stich-’ (Greek *stichos*, meaning a line of verse/dialogue).",
      ],
      solution: [
        "Rapid, tightly matched alternating lines of dialogue between two disputants—such as ‘White walls.’ / ‘Dry walls.’ / ‘No ink.’—are termed **stichomythia**.",
        "The compressed rhythm distils the gulf between sterile safety and lived craft into six stark words.",
      ],
      commonError: "Describing stichomythia vaguely as ‘short sentences’ without naming the dramatic convention or analysing its combative pacing.",
      strategy: "When dialogue shrinks to two-word volleys, ask what core clash of values is being distilled",
    },
    {
      id: "exam-p1-hl-q03",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      topicId: "4-poetry-and-drama",
      guideRef: "subtext-dialogue-tragedy-comedy",
      question: `${DRAMA_PASSAGE}\n\nIdentify the **one-word dramatic term** for the unspoken psychological meaning and power struggle operating beneath characters’ literal utterances (for instance, when Dev argues about damp paper stock and rusted bolts rather than confessing his dread of displacement and aging).`,
      answer: {
        type: "text",
        accept: ["subtext", "dramatic subtext"],
        display: "subtext",
      },
      traps: [
        {
          spec: { type: "text", accept: ["dramatic irony"] },
          feedback: "Dramatic irony occurs when the audience knows a crucial fact hidden from a character; here both speakers conceal emotional motives beneath literal remarks.",
        },
        {
          spec: { type: "text", accept: ["aside"] },
          feedback: "An aside is spoken explicitly to the audience unheard by other characters, whereas here the deeper meaning remains entirely unspoken beneath everyday lines.",
        },
      ],
      hints: [
        "Literally means what lies ‘underneath’ (*sub-*) the spoken text.",
        "In realist drama, characters often fight over domestic trivia (latches, oil, paper) because naming the real fear aloud feels unbearable.",
      ],
      solution: [
        "The unspoken emotional tension, accusation, or vulnerability embedded beneath surface dialogue is **subtext**.",
        "Dev’s sharp aphorism ‘Leaving fixes nothing’ superficially addresses rust, yet subtextually indicts Meera’s perceived abandonment of family history.",
      ],
      commonError: "Confusing subtext (unspoken psychological meaning beneath dialogue) with dramatic irony (audience knowledge exceeding a character’s).",
      strategy: "Ask: ‘What are they arguing about on the surface, and what are they *really* fighting over underneath?’",
    },
    {
      id: "exam-p1-hl-q04",
      kind: "written",
      difficulty: "core",
      level: "HL",
      commandTerm: "Analyse",
      marks: 5,
      topicId: "4-poetry-and-drama",
      guideRef: "dramatic-conventions-staging",
      question: `${DRAMA_PASSAGE}\n\n**Analyse** how the playwright uses lighting and symbolic props—specifically the single amber bulb, the brass composing stick, and the damp yellow envelope—to externalise the conflict visually on stage. *(5 marks)*`,
      hints: [
        "Trace the chiaroscuro contrast between the warm, isolated amber bulb and the encroaching ‘damp blue-grey shadow’—and notice the single ‘flicker’ at the scene’s turning point.",
        "Examine the exact stage action in the middle of the scene: Meera laying the municipal notice *squarely over* the brass composing stick, and the final lighting fade holding on that covered object.",
      ],
      modelAnswer:
        "Before a single grievance is articulated, theatrical lighting and material props establish an ideological battleground between artisanal heritage and bureaucratic modernity. The low-hanging ‘amber bulb’ carves a warm, shrinking sanctuary around the ink-stained oak table while ‘damp blue-grey shadow’ encroaches from the margins, visually figuring Dev’s printshop as an endangered pocket of memory surrounded by urban erasure. Crucially, the bulb’s brief ‘flicker’ following Dev’s indictment of civic amnesia physically registers the fragility of that legacy. Into this chiaroscuro frame enter two competing props: Dev’s meticulously polished ‘brass composing stick’ embodies tactile permanence, craft discipline, and historical continuity, whereas Meera’s ‘damp yellow envelope’ materialises impersonal municipal authority and eviction. When Meera steps into the light and lays the notice squarely over the metal, hiding it from view, the stage picture enacts bureaucratic eclipse without needing melodramatic shouting. Holding the final fade-to-black exclusively on the covered brass stick leaves the audience with a haunting visual verdict: institutional paperwork now smothers lived craft, yet neither figure can bring themselves to lift it away.",
      markScheme: [
        {
          point: "Analyses the chiaroscuro lighting contrast (isolated warm amber bulb vs encroaching blue-grey shadow) as symbolising a beleaguered heritage.",
          keywords: ["chiaroscuro", "sanctuary", "encroach", "beleaguered", "endangered", "pocket"],
        },
        {
          point: "Evaluates the brief flicker of the overhead bulb as a theatrical cue marking the fragility or instability of Dev’s world.",
          keywords: ["flicker", "fragility", "instability", "amnesia", "registers", "cue"],
        },
        {
          point: "Interprets the symbolic opposition between the polished brass composing stick (craft/permanence) and the yellow envelope (bureaucratic erasure).",
          keywords: ["artisanal", "permanence", "bureaucratic", "eviction", "continuity", "impersonal"],
        },
        {
          point: "Analyses the pivotal stage action of Meera covering the brass stick with the envelope as a visual enactment of eclipse or displacement.",
          keywords: ["eclipse", "displacement", "smothers", "stage picture", "enacts", "hiding"],
        },
        {
          point: "Evaluates the final theatrical image—lights holding on the covered prop during the slow fade-to-black—for audience impact.",
          keywords: ["fade-to-black", "haunting", "verdict", "audience", "covered", "lift"],
        },
      ],
      markbands: [
        { band: "Band 3 (4–5)", marks: [4, 5], descriptor: "Analyses lighting, flicker, competing props, and final stage image cohesively as three-dimensional visual theatre." },
        { band: "Band 2 (2–3)", marks: [2, 3], descriptor: "Explains the symbolism of the brass stick and envelope clearly, with partial attention to lighting or staging." },
        { band: "Band 1 (1)", marks: [1, 1], descriptor: "Summarises what happens to the props with minimal theatrical interpretation." },
      ],
      commonError: "Analysing the props as if reading a novel instead of emphasising how an *audience watching the stage* experiences the covered brass stick in the final fade.",
      strategy: "Visualise the stage picture at opening, midpoint, and fade-to-black to anchor drama analysis",
    },
    {
      id: "exam-p1-hl-q05",
      kind: "written",
      difficulty: "core",
      level: "HL",
      commandTerm: "Examine",
      marks: 5,
      topicId: "1-readers-writers-texts",
      guideRef: "voice-tone-ambiguity",
      question: `${DRAMA_PASSAGE}\n\n**Examine** how theatrical silences, pauses, and the closing nautical metaphor (*“thrown overboard”* / *“sink with the press”*) expose both characters’ unspoken vulnerability beneath their defensive confrontation. *(5 marks)*`,
      hints: [
        "Map the structural silences: the ‘three full seconds’ at the opening, the midpoint ‘Beat’, Meera’s pause gazing at the shutter, and the closing ‘Long silence’ broken by rain on corrugated iron.",
        "Notice how Meera *adopts and turns* Dev’s maritime metaphor back on him—exposing not contempt, but tender dread about his failing physical strength.",
      ],
      modelAnswer:
        "Throughout the scene, silence operates not as empty space between lines but as the acoustic chamber where unspoken tenderness and grief reverberate. The opening ‘three full seconds’ of averted gaze establishes entrenched mutual defensiveness, while the midpoint ‘Beat’ and Meera’s pause toward the rattling shutter fracture her pragmatic armour, allowing her rhetorical question—‘You think I want to lock this door?’—to expose filial guilt rather than bureaucratic coldness. This emotional unmasking culminates in their shared extended maritime metaphor. By accusing Meera of believing ‘everything heavy is supposed to be thrown overboard’, Dev casts his lifetime’s craft—and implicitly his aging self—as inconvenient ballast discarded for modern efficiency. Yet rather than rejecting his imagery, Meera inhabits and inverts it: accusing him of preferring to ‘sink with the press’ than admit he can no longer lift the lead type-cases alone transforms argument into anguished care. Finally, the ‘Long silence’ filled by heavy rain hammering the corrugated roof seals their stalemate in shared vulnerability, showing that neither character’s position is merely cruel or stubborn.",
      markScheme: [
        {
          point: "Analyses opening/midpoint silences and pauses as actively conveying entrenched guardedness and cracking emotional armour.",
          keywords: ["armour", "armor", "entrenched", "guarded", "defensiveness", "acoustic"],
        },
        {
          point: "Interprets Meera’s pause and rhetorical question as exposing filial guilt and reluctance beneath practical insistence.",
          keywords: ["filial guilt", "reluctance", "unmasking", "pragmatic", "coldness", "guilt"],
        },
        {
          point: "Analyses Dev’s nautical metaphor (‘thrown overboard’) as expressing terror that his craft and aging self are treated as disposable weight.",
          keywords: ["ballast", "disposable", "aging", "ageing", "efficiency", "nautical", "maritime"],
        },
        {
          point: "Examines how Meera echoes and inverts the metaphor (‘sink with the press’) to reveal anxious care over his physical decline.",
          keywords: ["inverts", "physical decline", "anguished", "care", "strength", "vulnerability"],
        },
        {
          point: "Evaluates the closing ‘Long silence’ and rain soundscape as dramatising a compassionate stalemate where both positions carry weight.",
          keywords: ["stalemate", "soundscape", "corrugated", "compassionate", "shared", "weight"],
        },
      ],
      markbands: [
        { band: "Band 3 (4–5)", marks: [4, 5], descriptor: "Integrates acoustic silences and the shared nautical metaphor perceptively to uncover mutual vulnerability." },
        { band: "Band 2 (2–3)", marks: [2, 3], descriptor: "Explains the boat metaphor and notes that pauses create tension, with limited exploration of mutual sympathy." },
        { band: "Band 1 (1)", marks: [1, 1], descriptor: "Paraphrases the final two lines with basic comment on sadness or conflict." },
      ],
      commonError: "Focusing exclusively on Dev’s dignity while casting Meera as cold and modernising, overlooking how her silence and inverted metaphor reveal anxious love.",
      strategy: "In dramatic dialogue, track when one character picks up and re-aims the other’s metaphor—it marks an emotional breakthrough",
    },
    {
      id: "exam-p1-hl-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      marks: 6,
      topicId: "7-paper1-paper2-mastery",
      guideRef: "paper1-hl-two-passages",
      question:
        "**Evaluate** how an HL Paper 1 candidate should manage the 2-hour-15-minute (135-minute) examination window and deliberately pivot analytical toolkits when moving from **Passage 1 (Drama)** to **Passage 2 (Literary Non-Fiction)** so that both essays sustain Band 5 standards. *(6 marks)*",
      hints: [
        "Break down the exact time budget for Essay 1, Essay 2, and final proofreading—explaining why a hard stop on Essay 1 is non-negotiable.",
        "Contrast the medium-specific craft toolkit required for Drama (three-dimensional staging, audience perception, dialogue dynamics) with that required for Literary Non-Fiction (writing persona, rhetorical architecture, negotiation of memory and truth-claims).",
        "Identify the typical HL pitfall (over-writing Essay 1 and rushing Essay 2 into chronological paraphrase) and explain how a brief mental reset prevents Criterion C and D fatigue.",
      ],
      modelAnswer:
        "Because HL Paper 1 weights both unseen passages equally, sustaining Band 5 across two distinct forms depends on disciplined time-fencing and an intentional analytical pivot. First, candidates should divide the 135 minutes rigorously into 65 minutes for Essay 1 (15 minutes active annotation and conceptual planning, 50 minutes writing), 65 minutes for Essay 2 on the identical rhythm, and a 5-minute cross-check buffer. Enforcing a hard stop at minute 65 is decisive: squeezing an extra 15 minutes into Essay 1 rarely gains more than one mark on Criterion A or B, yet starving Essay 2 routinely causes a steep collapse from Band 5 to Band 3 through rushed chronological paraphrase and Criterion D fatigue. Equally vital is a deliberate cognitive reset between literary forms. On Passage 1 (Drama), evaluative Criterion B analysis must treat the script as live three-dimensional theatre—foregrounding audience perception, stage lighting, spatial movement, props, acoustic cues, and unspoken conversational tension. When pivoting to Passage 2 (Literary Non-Fiction), that theatrical lens must give way immediately to essayistic craft: probing the dual memoir persona, rhetorical cadence, syntactic balance, figurative conceits, and the writer’s self-reflexive negotiation of memory and truth-claims. Honouring both strict pacing and form-specific precision guarantees two balanced, high-band essays rather than one polished commentary paired with an exhausted sketch.",
      markScheme: [
        {
          point: "Specifies a disciplined, balanced 135-minute allocation (approx. 65m Essay 1 + 65m Essay 2 + 5m review, including ~15m planning per passage).",
          keywords: ["65", "15", "buffer", "allocation", "time-fencing", "hard stop"],
        },
        {
          point: "Evaluates the asymmetric mark risk: overrunning Essay 1 yields tiny marginal gains while heavily penalising Essay 2’s Criteria A–D.",
          keywords: ["marginal", "starving", "collapse", "fatigue", "equally", "steep"],
        },
        {
          point: "Identifies the form-specific analytical toolkit needed for Drama (live performance, audience, lighting, props, space, pauses).",
          keywords: ["theatre", "audience", "lighting", "props", "live", "three-dimensional"],
        },
        {
          point: "Contrasts this explicitly with the Literary Non-Fiction toolkit (persona, rhetoric, syntax, truth-claims/memory negotiation).",
          keywords: ["persona", "rhetoric", "truth-claims", "essayistic", "self-reflexive", "memoir"],
        },
        {
          point: "Explains the value of a brief conceptual reset/planning stage before Essay 2 to prevent chronological paraphrase.",
          keywords: ["reset", "conceptual planning", "paraphrase", "pivot", "chronological"],
        },
        {
          point: "Links disciplined pacing and form-switching directly to sustaining Band 5 performance across Criteria B, C, and D.",
          keywords: ["criterion b", "criterion c", "criterion d", "balanced", "band 5", "precision"],
        },
      ],
      markbands: [
        { band: "Band 3 (5–6)", marks: [5, 6], descriptor: "Evaluates both quantitative HL time-fencing and qualitative form-toolkit switching with crisp rubric awareness." },
        { band: "Band 2 (3–4)", marks: [3, 4], descriptor: "Recommends splitting time evenly and notes some differences between drama and non-fiction features." },
        { band: "Band 1 (1–2)", marks: [1, 2], descriptor: "Offers generic exam advice (‘manage time well’, ‘plan first’) without HL form-specific evaluation." },
      ],
      commonError: "Treating HL Paper 1 as simply ‘SL Paper 1 twice’ without actively recalibrating terminology from theatrical audience analysis to rhetorical non-fiction persona.",
      strategy: "65m (15m plan + 50m write) · Hard stop · Switch form toolkit · 65m · 5m polish",
    },
    {
      id: "exam-p1-hl-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      marks: 20,
      topicId: "7-paper1-paper2-mastery",
      guideRef: "paper1-hl-two-passages",
      question: `${DRAMA_PASSAGE}\n\n### Full IB Paper 1 (HL) Guided Literary Analysis — Passage 1 of 2 (Drama)\n\n**Guiding Question:** *How does the playwright use stagecraft, dialogue dynamics, and physical objects to dramatise a conflict between preservation and necessity?*\n\nWrite a complete, conceptually structured IB Paper 1 (HL) essay on Passage 1 (target: 65 minutes under exam conditions; do NOT narrate chronologically). *(20 marks: Criterion A 5 · Criterion B 5 · Criterion C 5 · Criterion D 5)*`,
      hints: [
        "Organise around 3 conceptual theatrical lenses: (1) Visual architecture of light, proxemics, and symbolic props staging cultural displacement, (2) Compressed dialogue dynamics and unspoken tension converting domestic debate into generational grief, (3) Soundscape, silences, and inverted metaphor reframing conflict as mutual vulnerability.",
        "Write consistently for a *live audience* watching a three-dimensional stage rather than a reader turning pages.",
        "Preserve the scene’s ethical balance: evaluate how the playwright refuses to villainise either Dev’s preservation or Meera’s pragmatic care.",
      ],
      modelAnswer: `### Essay: Covered Brass and Shrinking Light in *The Monsoon Ledger*

In this taut extract from *The Monsoon Ledger*, the playwright dramatises urban displacement and intergenerational grief not through melodramatic exposition, but through three-dimensional theatrical restraint. Set inside a dusk-lit printshop facing municipal eviction, the confrontation between Dev and his daughter Meera resists an easy binary between nostalgic stubbornness and callous modernisation. By orchestrating chiaroscuro lighting, charged stage proxemics, competing symbolic props, and compressed verbal sparring punctuated by heavy silences, the playwright compels the audience to experience preservation and practical necessity as equally persuasive—and painfully irreconcilable—expressions of love.

From the opening tableau, visual stagecraft materialises the ideological clash before a single word is spoken. A solitary ‘low-hanging amber bulb’ isolates Dev’s ink-stained oak table while ‘damp blue-grey shadow’ consumes the rear walls where lead type sags under its own weight. For an audience in the auditorium, this stark chiaroscuro frames the printshop as a beleaguered sanctuary of craft slowly being swallowed by time and civic indifference. Proxemics immediately reinforce that fracture: Meera enters with her ‘coat still buttoned’, halting defensively ‘outside the pool of light’ as though stepping into her father’s illuminated zone would concede emotional ground. Crucially, the playwright concentrates the scene’s entire thesis inside two colliding physical props. Dev’s ‘brass composing stick’—polished with ‘methodical slowness’ and aligned ‘precisely parallel’ to the table’s edge—epitomises artisanal permanence and dignified routine, whereas Meera’s ‘damp yellow envelope’ embodies impersonal municipal finality. At the scene’s midpoint, preceded by an ominous flicker of the overhead bulb, Meera steps into the amber light and lays the notice ‘squarely over the brass composing stick, hiding it’. That silent visual eclipse speaks louder than debate: bureaucratic inevitability literally overlays lived heritage, yet Dev’s motionless hands resting ‘flat on the oak’ signal an understated shock that prevents the moment from tipping into caricature.

Layered over this visual architecture, tightly controlled dialogue dynamics reveal how everyday domestic remarks disguise raw emotional terror. Initially, Dev deflects eviction onto a rusted latch and ‘damp… paper stock’, firing the barbed aphorism ‘Oil fixes rust. Leaving fixes nothing.’ Here, piercing subtext converts household maintenance into a quiet indictment of filial abandonment. As urgency intensifies, syntax compresses into rapid stichomythia—‘You haven’t read the date.’ / ‘I know the date.’ / ‘Thirty days.’—whose clipped, prosecutorial tempo tightens dramatic tension until Dev defends the obsolete parish almanac as an act of neighbourhood witness against ‘the overpass’. Later, an even starker stichomythic triad (‘White walls.’ / ‘Dry walls.’ / ‘No ink.’) distils the two characters’ opposing definitions of survival into six monosyllables: where Meera hears hygienic safety (‘Dry walls’), Dev hears sterile erasure (‘No ink’). Through such extreme verbal economy, the playwright ensures the audience weighs both imperatives simultaneously rather than siding comfortably with either speaker.

Ultimately, acoustic cues, strategic pauses, and an inverted extended metaphor dissolve defensive hostility into painful mutual vulnerability. Bookended by an opening ‘three full seconds’ of averted eyes and a closing ‘Long silence’, the dialogue continually yields to offstage weather—the rattling upstage shutter and finally the heavy ‘sheet of rain’ striking corrugated iron—creating an encroaching sensory urgency neither character can silence. When Dev retreats upstage into half-shadow and snaps the shutter hook with a ‘sharp metallic click’, his physical withdrawal mirrors his dread of obsolescence, voiced through a stark nautical conceit accusing Meera of throwing ‘everything heavy… overboard’ for speed. Yet Meera’s response transforms confrontation into anguished devotion: stepping verbally inside her father’s own metaphor, she counters that he would ‘rather sink with the press’ than confess he can no longer lift the heavy type-cases alone. Suddenly, her insistence on a ground-level flat without stairs is re-illuminated not as cultural amnesia, but as protective fear for an aging parent’s body. Refusing sentimental resolution, the final stage picture leaves the envelope untouched and holds the slow fade-to-black exclusively upon the covered brass stick, suspending the audience inside an unresolved elegy for what must yield to time.

Through seamless synergy between visual theatre, spare verbal combat, and resonant silence, *The Monsoon Ledger* elevates a local eviction notice into a universal drama of transition. Rather than adjudicating between Dev’s fidelity to memory and Meera’s fidelity to survival, the playwright makes the darkened stage itself hold the unbearable weight of both.`,
      markScheme: [
        // Criterion A (5 marks)
        { point: "[Crit A 1/5] Advances a nuanced central thesis rejecting a simplistic binary between stubborn nostalgia and cold modernisation.", keywords: ["irreconcilable", "easy binary", "restraint", "displacement"] },
        { point: "[Crit A 2/5] Explores Dev’s attachment to the press as cultural witness, dignity, and terror of personal obsolescence.", keywords: ["artisanal permanence", "obsolescence", "neighbourhood witness", "dignified"] },
        { point: "[Crit A 3/5] Recognises Meera’s conflicting motives: pragmatic protection, filial guilt, and anxious love for her aging father.", keywords: ["protective fear", "filial", "anguished devotion", "survival"] },
        { point: "[Crit A 4/5] Interprets the unresolved ending perceptively—neither character moves the envelope, preserving ethical balance.", keywords: ["sentimental resolution", "unresolved elegy", "adjudicating", "suspending"] },
        { point: "[Crit A 5/5] Embeds crisp, apposite textual details from both dialogue and stage directions smoothly throughout.", keywords: ["coat still buttoned", "methodical slowness", "parish almanac", "corrugated iron"] },
        // Criterion B (5 marks)
        { point: "[Crit B 1/5] Evaluates chiaroscuro lighting (amber bulb, blue-grey shadow, midpoint flicker) in theatrical terms for a live audience.", keywords: ["chiaroscuro", "auditorium", "flicker", "beleaguered"] },
        { point: "[Crit B 2/5] Analyses proxemics and spatial blocking (halting outside light, retreating upstage into half-shadow).", keywords: ["proxemics", "withdrawal", "illuminated zone", "tableau"] },
        { point: "[Crit B 3/5] Evaluates competing symbolic props and the pivotal visual eclipse of covering the brass stick with the yellow envelope.", keywords: ["visual eclipse", "bureaucratic inevitability", "colliding", "composing stick"] },
        { point: "[Crit B 4/5] Analyses dialogue craft—specifically subtext and stichomythia (‘White walls / Dry walls / No ink’).", keywords: ["subtext", "stichomythia", "monosyllables", "verbal economy"] },
        { point: "[Crit B 5/5] Evaluates acoustic texture (silences, shutter click, rain) and the inverted nautical metaphor reshaping audience sympathy.", keywords: ["metallic click", "nautical conceit", "re-illuminated", "encroaching"] },
        // Criterion C (5 marks)
        { point: "[Crit C 1/5] Structures the essay by conceptual dramatic lenses (visual stagecraft → dialogue dynamics → silence/metaphor) rather than chronological summary.", keywords: ["from the opening tableau", "layered over", "ultimately", "through seamless synergy"] },
        { point: "[Crit C 2/5] Sustains clear, unbroken focus on all elements of the guiding question (stagecraft, dialogue, objects, preservation vs necessity).", keywords: ["preservation", "necessity", "stagecraft", "ideological clash"] },
        { point: "[Crit C 3/5] Uses forceful, analytical topic sentences that establish conceptual direction before textual illustration.", keywords: ["materialises", "disguise raw", "dissolve defensive", "elevates a local"] },
        { point: "[Crit C 4/5] Employs cohesive analytical transitions linking visual, verbal, and auditory dimensions into one cumulative argument.", keywords: ["crucially", "initially", "suddenly", "rather than"] },
        { point: "[Crit C 5/5] Concludes with a perceptive synthesis that elevates the scene’s theatrical significance without mechanical repetition.", keywords: ["unbearable weight", "fidelity", "universal drama", "darkened stage"] },
        // Criterion D (5 marks)
        { point: "[Crit D 1/5] Sustains an authoritative, concise, and sophisticated academic literary register throughout.", keywords: ["epitomises", "indictment", "distils", "orchestrating"] },
        { point: "[Crit D 2/5] Uses accurate, form-specific dramatic terminology organically to illuminate effect.", keywords: ["stage picture", "fade-to-black", "exposition", "offstage"] },
        { point: "[Crit D 3/5] Varies syntactic rhythm purposefully to mirror analytical contrast and build rhetorical precision.", keywords: ["before a single word", "for an audience", "through such extreme", "refusing sentimental"] },
        { point: "[Crit D 4/5] Demonstrates exact lexical sensitivity when capturing subtle tonal shifts and psychological complexity.", keywords: ["caricature", "hygienic", "sterile", "prosecutorial"] },
        { point: "[Crit D 5/5] Integrates short embedded quotations seamlessly into grammatical prose without clumsy filler phrases.", keywords: ["overlays lived", "concede emotional", "deflects eviction", "weighs both"] },
      ],
      markbands: P1_HL_MARKBANDS_20,
      commonError: "Treating the drama extract like a prose narrative by ignoring lighting, proxemics, acoustic rain cues, and the silent stage image at fade-to-black.",
      strategy: "Keep the live theatrical audience central: analyse what is *seen*, *heard*, and left *unspoken* on stage",
    },

    // ======================== PASSAGE 2: LITERARY NON-FICTION (Q08–Q15) ====
    {
      id: "exam-p1-hl-q08",
      kind: "short",
      difficulty: "warmup",
      level: "HL",
      commandTerm: "Identify",
      topicId: "5-prose-fiction-nonfiction",
      guideRef: "rhetoric-persona-truth-claims",
      question: `${NONFICTION_PASSAGE}\n\nIdentify the **rhetorical device** created by repeating the opening clause in *“We keep photographs, we keep receipts, we keep obsolete maps—”* to build rhythmic insistence and shared human urgency.`,
      answer: {
        type: "text",
        accept: ["anaphora", "anaphoric tricolon", "tricolon with anaphora"],
        display: "anaphora",
      },
      traps: [
        {
          spec: { type: "text", accept: ["epiphora", "epistrophe"] },
          feedback: "Epiphora/epistrophe repeats words at the *end* of successive clauses; here ‘We keep’ repeats at the *beginning* of each clause.",
        },
        {
          spec: { type: "text", accept: ["antithesis"] },
          feedback: "Antithesis contrasts opposing ideas in parallel structure, whereas here three parallel clauses share the exact same opening phrase ‘We keep’.",
        },
      ],
      hints: [
        "Notice the exact repetition at the *start* of three consecutive clauses: ‘We keep… we keep… we keep…’.",
        "Do not confuse repetition at the *beginning* of clauses with epiphora (repetition at the *end*).",
      ],
      solution: [
        "Deliberate repetition of the same opening phrase (‘We keep’) across consecutive clauses is **anaphora** (here combined with a rhythmic three-part tricolon).",
        "The inclusive pronoun ‘We’ widens personal memoir into collective human testimony.",
      ],
      commonError: "Calling anaphora simply ‘repetition’ instead of naming the precise rhetorical figure and analysing its cumulative cadence.",
      strategy: "Pair the rhetorical name (anaphora) with the pronoun shift (‘I’ → ‘We’) to unpack its persuasive reach",
    },
    {
      id: "exam-p1-hl-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      topicId: "5-prose-fiction-nonfiction",
      guideRef: "rhetoric-persona-truth-claims",
      question: `${NONFICTION_PASSAGE}\n\nIdentify the **one-word rhetorical figure** of balanced grammatical opposition used in the closing sentence (*“one foot on the asphalt that actually exists, the other on the vanished jetty that still governs how you measure distance”*).`,
      answer: {
        type: "text",
        accept: ["antithesis", "parallel antithesis"],
        display: "antithesis",
      },
      traps: [
        {
          spec: { type: "text", accept: ["oxymoron"] },
          feedback: "An oxymoron compresses two contradictory words directly side-by-side (e.g. ‘deafening silence’); here two contrasting *balanced clauses* stand in parallel opposition.",
        },
        {
          spec: { type: "text", accept: ["anaphora"] },
          feedback: "Anaphora repeats identical opening words across clauses; here ‘one foot… actually exists’ is balanced against its opposite ‘the other… vanished jetty’.",
        },
      ],
      hints: [
        "Derived from the Greek for ‘setting opposite’ (*anti-* + *thesis*): contrasting ideas placed inside symmetrical grammatical halves.",
        "Compare the physical permanence of ‘asphalt that actually exists’ with the ghostly persistence of ‘the vanished jetty’.",
      ],
      solution: [
        "Balancing contrasting realities inside parallel clauses (‘one foot on the asphalt that actually exists, the other on the vanished jetty’) is **antithesis**.",
        "Its symmetry enacts the essay’s culminating stance: living honestly astride present geography and vanished memory.",
      ],
      commonError: "Confusing clause-level antithesis with word-level oxymoron or calling it merely ‘contrast’.",
      strategy: "Spot symmetrical grammatical halves that hold two rival realities in equilibrium—that is antithesis",
    },
    {
      id: "exam-p1-hl-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "State",
      topicId: "7-paper1-paper2-mastery",
      guideRef: "paper1-hl-two-passages",
      question:
        "Under the official IB Diploma English A: Literature syllabus (First Assessment 2021), state the **maximum combined mark total** across BOTH mandatory essays on **HL Paper 1**.",
      answer: {
        type: "number",
        value: 40,
        display: "40 marks",
      },
      traps: [
        {
          spec: { type: "number", value: 20 },
          feedback: "20 marks is the total for *one* Paper 1 essay (or the entire SL Paper 1); HL candidates write TWO essays for 2 × 20 = 40 marks.",
        },
        {
          spec: { type: "number", value: 30 },
          feedback: "30 marks is the Paper 2 Comparative Essay total (A10/B10/C5/D5); HL Paper 1 totals 40 marks across two 20-mark commentaries.",
        },
      ],
      hints: [
        "Each individual Paper 1 guided literary analysis carries 20 marks (Criteria A5, B5, C5, D5).",
        "At Higher Level, candidates MUST analyse BOTH unseen passages separately.",
      ],
      solution: [
        "Each Paper 1 commentary is marked out of 20 (Criterion A: 5, B: 5, C: 5, D: 5).",
        "Because HL candidates analyse **both** unseen passages, HL Paper 1 carries 2 × 20 = **40 marks** in total (35% of the HL grade).",
      ],
      commonError: "Confusing HL Paper 1’s 40-mark double-passage ceiling with SL Paper 1 (20 marks) or Paper 2 (30 marks).",
      strategy: "Remember: SL P1 = 20m (1 essay) · HL P1 = 40m (2 essays) · P2 = 30m · HL Essay = 20m · IO = 40m",
    },
    {
      id: "exam-p1-hl-q11",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      topicId: "5-prose-fiction-nonfiction",
      guideRef: "literary-nonfiction-genres",
      question: `${NONFICTION_PASSAGE}\n\nMemoir and personal essays frequently construct a dialogue between two temporal personas. Contrasted with the eleven-year-old **experiencing self** in Paragraph 1, state the **two-word critical label** for the older, reflective writer looking back from *“Decades later”* in Paragraph 2.`,
      answer: {
        type: "text",
        accept: [
          "retrospective self",
          "retrospective persona",
          "narrating self",
          "remembering self",
          "older self",
        ],
        display: "retrospective self",
      },
      traps: [
        {
          spec: { type: "text", accept: ["experiencing self"] },
          feedback: "The experiencing self is the eleven-year-old inside the past moment; here we want the label for the older persona looking back decades later.",
        },
        {
          spec: { type: "text", accept: ["omniscient narrator"] },
          feedback: "This is a first-person non-fiction essayist reflecting on her own past, not a third-person omniscient fiction narrator.",
        },
      ],
      hints: [
        "Think of the Latin root *retro-* (‘looking back’): the mature persona who evaluates and questions earlier childhood perceptions.",
        "This two-word term pairs directly with ‘experiencing self’ in IB Literary Non-Fiction analysis.",
      ],
      solution: [
        "In literary non-fiction and memoir, the mature writer reflecting back upon an earlier childhood consciousness is termed the **retrospective self** (or **narrating self** / **retrospective persona**).",
        "The critical distance between the credulous eleven-year-old and the sceptical retrospective self drives the essay’s interrogation of truth.",
      ],
      commonError: "Flattening a memoirist into a single static ‘I’ instead of analysing the ironic distance between the experiencing child and the retrospective writer.",
      strategy: "In every memoir extract, map how the retrospective self corrects, ironises, or sympathises with the experiencing self",
    },
    {
      id: "exam-p1-hl-q12",
      kind: "written",
      difficulty: "core",
      level: "HL",
      commandTerm: "Analyse",
      marks: 4,
      topicId: "5-prose-fiction-nonfiction",
      guideRef: "rhetoric-persona-truth-claims",
      question: `${NONFICTION_PASSAGE}\n\n**Analyse** how the essayist builds intellectual authority (**ethos**) and self-critical credibility in Paragraph 2 by interrogating her own nostalgia alongside official cartography. *(4 marks)*`,
      hints: [
        "Look closely at the balanced conditional sentence: ‘If official cartographers flatten a landscape… memoirists often commit the gentler forgery of gilding it.’",
        "Analyse the effect of turning a probing rhetorical question directly on her own sensory memory (‘crushed lime and low tide… braided three separate summers’).",
      ],
      modelAnswer:
        "Rather than claiming nostalgic superiority over official planners, the essayist strengthens her rhetorical ethos through disciplined self-scrutiny. Opening with the reflective pivot ‘Yet I must guard against my own nostalgia, too’, she explicitly places personal memory under the same ethical audit applied to municipal maps. Her balanced conditional syntax pairs two rival forms of distortion—where state cartographers ‘flatten’ lived terrain for administrative order, memoirists commit ‘the gentler forgery of gilding it’—using the ironic oxymoronic resonance of ‘gentler forgery’ to acknowledge that sentimental embellishment still falsifies history. Immediately afterwards, a self-directed rhetorical question interrogates whether ‘crushed lime and low tide’ was a daily fact or merely ‘braided’ from ‘three separate summers’. Paradoxically, admitting memory’s fallibility makes the persona far more trustworthy, persuading the reader that her closing defence of obsolete maps is hard-won rather than romantic delusion.",
      markScheme: [
        {
          point: "Explains how turning critical scrutiny onto her own nostalgia strengthens persuasive ethos/credibility.",
          keywords: ["ethos", "self-scrutiny", "trustworthy", "audit", "credibility", "fallibility"],
        },
        {
          point: "Analyses the parallel critique equating official cartographic ‘flattening’ with memoirists’ ‘gentler forgery of gilding’.",
          keywords: ["flatten", "forgery", "gilding", "distortion", "embellishment", "falsifies"],
        },
        {
          point: "Evaluates the self-interrogating rhetorical question and metaphor of ‘braided’ summers exposing composite memory.",
          keywords: ["rhetorical question", "braided", "composite", "interrogates", "self-directed"],
        },
        {
          point: "Articulates the persuasive paradox: confessing subjectivity earns reader trust rather than weakening authority.",
          keywords: ["paradox", "subjectivity", "hard-won", "delusion", "persuading", "admitting"],
        },
      ],
      markbands: [
        { band: "Band 3 (4)", marks: [4, 4], descriptor: "Analyses the persuasive paradox of self-doubt—linking ‘gentler forgery’ and rhetorical questioning directly to authoritative ethos." },
        { band: "Band 2 (2–3)", marks: [2, 3], descriptor: "Notes that the writer questions her own memory and compares herself to mapmakers, with partial rhetorical analysis." },
        { band: "Band 1 (1)", marks: [1, 1], descriptor: "Summarises Paragraph 2 with little attention to persona or persuasive strategy." },
      ],
      commonError: "Treating the writer’s self-doubt as a sign of unreliability in a fictional sense rather than an intentional non-fiction rhetorical strategy that strengthens ethos.",
      strategy: "In literary non-fiction, candour about memory’s limits is often the writer’s sharpest tool for building ethos",
    },
    {
      id: "exam-p1-hl-q13",
      kind: "written",
      difficulty: "core",
      level: "HL",
      commandTerm: "Explore",
      marks: 5,
      topicId: "5-prose-fiction-nonfiction",
      guideRef: "literary-nonfiction-genres",
      question: `${NONFICTION_PASSAGE}\n\n**Explore** how the physical materiality of the folded street directory evolves across the passage—from a child’s illusion of flat certainty to a complex metaphor for embodied memory. *(5 marks)*`,
      hints: [
        "Track the tactile trajectory: ‘cleanly… surrendered to ink’ and colour-coded flatness in Paragraph 1 → ‘crease-softened’ in Paragraph 2 → ‘pale scars’, ‘refuses to lie flat’, and ‘insisting on its third dimension’ in Paragraph 3.",
        "Notice the anatomical/bodily imagery (‘crisp red veins’, ‘pale scars’, ‘seams’) that turns paper into a living, wounded witness.",
      ],
      modelAnswer:
        "Across the three paragraphs, the street directory undergoes a striking figurative metamorphosis from docile two-dimensional authority into a stubborn, scarred body of remembrance. In Paragraph 1, viewed through the eleven-year-old’s credulous eyes, the glovebox map seduces with graphic obedience: stark colour blocks and ‘crisp red veins’ promise frictionless progress while the coastline appears to have ‘cleanly… surrendered to ink’. Yet that anatomical metaphor—‘veins’—already hints that landscape is organic rather than purely geometric. Decades later, repeated handling has rendered the object ‘crease-softened’, eroding its official crispness until Paragraph 3 personifies the worn paper as an active resistor. Marked by ‘pale scars’ from years of refolding, the directory ‘refuses to lie flat’ and ‘lifts at the seams, insisting on its third dimension’. By breaking literally off the flat desktop into sculptural depth, the weathered paper subverts the cartographer’s flattening impulse, embodying how lived history buckles against tidy modern erasure and refuses to stay neatly repressed.",
      markScheme: [
        {
          point: "Traces the initial childhood perception of the map as flat, colour-coded, obedient certainty (‘surrendered to ink’).",
          keywords: ["credulous", "obedience", "two-dimensional", "certainty", "docile", "flat"],
        },
        {
          point: "Analyses the anatomical/organic imagery (‘crisp red veins’, ‘pale scars’) equating mapped territory and paper with a living or wounded body.",
          keywords: ["anatomical", "organic", "wounded", "scarred", "bodily", "veins"],
        },
        {
          point: "Examines the transitional tactile detail ‘crease-softened’ showing how human use transforms institutional print into personal artefact.",
          keywords: ["tactile", "handling", "artefact", "artifact", "eroding", "weathered"],
        },
        {
          point: "Analyses the defiant personification in Paragraph 3 (‘refuses to lie flat’, ‘insisting on its third dimension’).",
          keywords: ["personifies", "personification", "defiant", "resistor", "sculptural", "buckles"],
        },
        {
          point: "Synthesises the conceptual evolution: physical depth subverts official cartographic flattening and embodies resilient lived memory.",
          keywords: ["subverts", "repressed", "resilient", "metamorphosis", "erasure", "depth"],
        },
      ],
      markbands: [
        { band: "Band 3 (4–5)", marks: [4, 5], descriptor: "Traces the material transformation cohesively across all three paragraphs, uniting anatomical imagery and personification." },
        { band: "Band 2 (2–3)", marks: [2, 3], descriptor: "Identifies how the old, folded map symbolises memory resisting forgetting, with partial tracking from Paragraph 1." },
        { band: "Band 1 (1)", marks: [1, 1], descriptor: "Describes the physical condition of the map with minimal metaphorical interpretation." },
      ],
      commonError: "Analysing the map solely in Paragraph 3 while missing its deliberate evolution from the flat ‘surrendered’ surface of Paragraph 1.",
      strategy: "Track how one central object changes texture from beginning to end—that arc reveals the essay’s structural spine",
    },
    {
      id: "exam-p1-hl-q14",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      marks: 6,
      topicId: "2-time-and-space",
      guideRef: "historical-cultural-lenses",
      question: `${NONFICTION_PASSAGE}\n\n**Evaluate** how the essay represents coastal land reclamation and urban development (*“buried twice beneath imported sand”*, *“concrete pilings”*, *“asphalt”*) to critique how modernisation reshapes cultural space and historical memory. *(6 marks)*`,
      hints: [
        "Examine the diction of burial and speed: ‘speed without memory’, ‘buried twice beneath imported sand’, ‘concrete pilings replaced the roots’, ‘skyline denies’.",
        "Consider the AoE 2 lens of space and place: how does physically re-engineering a coastline alter a community’s sense of belonging—and why does the writer insist we ‘stand in two centuries at once’?",
      ],
      modelAnswer:
        "Through an incisive spatial contrast between fluid coastal ecology and engineered urban permanence, the essay critiques how rapid island modernisation erases vernacular cultural memory. Even the childhood expressways are characterised by a chillingly efficient abstraction—‘speed without memory’—implying that infrastructural acceleration actively severs citizens from local history. The verb ‘buried twice beneath imported sand’ carries unmistakable funerary weight, portraying land reclamation not as neutral expansion but as the entombment of an indigenous shoreline beneath foreign sediment. Similarly, replacing living mangrove ‘roots’ with utilitarian ‘concrete pilings’ stages a stark ecological and cultural substitution, severing organic continuity—and Uncle’s handmade ‘wooden skiff’—in favour of anonymous concrete. Crucially, the personified claim that ‘the skyline denies’ what the worn paper remembers exposes urban architecture itself as an ideological narrator that naturalises erasure by presenting the newest asphalt as inevitable. Yet the essay resists bitter Luddism: by closing on an image of standing simultaneously upon existing ‘asphalt’ and the ‘vanished jetty’, the writer evaluates place as a palimpsest in which disappeared landscapes continue quietly to calibrate personal and cultural identity.",
      markScheme: [
        {
          point: "Analyses ‘speed without memory’ as critiquing how infrastructural modernisation severs citizens from historical continuity.",
          keywords: ["acceleration", "infrastructural", "severs", "continuity", "abstraction", "vernacular"],
        },
        {
          point: "Evaluates the funerary diction of ‘buried twice beneath imported sand’ portraying land reclamation as entombment or erasure.",
          keywords: ["funerary", "entombment", "reclamation", "sediment", "erasure", "burial"],
        },
        {
          point: "Contrasts living vernacular ecology (mangrove ‘roots’, ‘wooden skiff’) against anonymous engineered permanence (‘concrete pilings’, ‘asphalt’).",
          keywords: ["ecology", "substitution", "anonymous", "utilitarian", "organic", "engineered"],
        },
        {
          point: "Analyses the personification ‘the skyline denies’ as exposing built urban space as an ideological force suppressing the past.",
          keywords: ["ideological", "naturalises", "suppressing", "personified", "narrator", "inevitable"],
        },
        {
          point: "Evaluates the essay’s nuanced cultural stance: viewing modern space as a layered palimpsest rather than merely rejecting progress.",
          keywords: ["palimpsest", "layered", "luddism", "nuanced", "calibrate", "simultaneously"],
        },
        {
          point: "Connects spatial transformation directly to cultural identity and how individuals measure belonging across changing landscapes.",
          keywords: ["cultural identity", "belonging", "disappeared", "landscape", "modernisation"],
        },
      ],
      markbands: [
        { band: "Band 3 (5–6)", marks: [5, 6], descriptor: "Evaluates spatial diction, ecological contrast, and ideological urban erasure with sophisticated AoE 2 cultural insight." },
        { band: "Band 2 (3–4)", marks: [3, 4], descriptor: "Explains how sand, concrete, and asphalt replace older coastal places and connect to memory loss." },
        { band: "Band 1 (1–2)", marks: [1, 2], descriptor: "Notes briefly that the city changed and replaced the beach and creek." },
      ],
      commonError: "Turning the response into a sociological lecture on urban planning instead of anchoring every cultural claim in the essay’s specific verbs and metaphors (‘buried’, ‘denies’, ‘roots’).",
      strategy: "Tie AoE 2 space/place insights directly to textual diction—let the writer’s metaphors carry the cultural critique",
    },
    {
      id: "exam-p1-hl-q15",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      marks: 20,
      topicId: "7-paper1-paper2-mastery",
      guideRef: "rubric-mastery-crit-a-d",
      question: `${NONFICTION_PASSAGE}\n\n### Full IB Paper 1 (HL) Guided Literary Analysis — Passage 2 of 2 (Literary Non-Fiction)\n\n**Guiding Question:** *How does the writer use reflective voice, figurative language, and rhetorical pacing to explore the relationship between physical space and unreliable memory?*\n\nWrite a complete, conceptually structured IB Paper 1 (HL) essay on Passage 2 (target: 65 minutes under exam conditions; do NOT paraphrase paragraph-by-paragraph). *(20 marks: Criterion A 5 · Criterion B 5 · Criterion C 5 · Criterion D 5)*`,
      hints: [
        "Organise around 3 conceptual essayistic movements: (1) The aphoristic, self-reflexive dual persona interrogating both institutional and nostalgic distortion, (2) Extended anatomical and cartographic metaphors turning a flat map into a scarred witness of urban erasure, (3) Rhetorical cadence, pronoun shifts, and balanced syntax elevating personal recollection into collective ethical stance.",
        "Evaluate non-fiction craft specifically: ethos, rhetorical questioning, anaphoric tricolon, antithesis, and how the retrospective writer navigates truth-claims.",
        "Keep the paradox central: both maps and memories omit or distort, yet obsolete artefacts remain indispensable anchors of lived identity.",
      ],
      modelAnswer: `### Essay: The Third Dimension of Erasure in *On Cartography and Forgetting*

In *On Cartography and Forgetting*, the essayist explores an unsettling symmetry between public geography and private remembrance: both maps and memories claim authority while quietly editing the past. Framing an ordinary glovebox street directory as both ideological artefact and personal relic, the writer charts how rapid coastal reclamation alters not merely an island’s perimeter, but the psychic coordinates by which its inhabitants locate themselves. Through a candidly self-critical dual persona, an evolving anatomical conceit, and meticulously orchestrated rhetorical pacing, the essay argues that although memory can never be an infallible archive, obsolete physical traces remain vital proof against collective amnesia.

Central to the essay’s persuasive force is the dynamic interplay between an innocent experiencing self and a sceptical retrospective voice that earns ethos by refusing easy nostalgia. Opening with a razor-sharp aphorism—‘Every map is a polite confession of what its maker chose to omit’—the adult essayist immediately destabilises cartographic neutrality, using the ironic collocation ‘polite confession’ to unmask how authoritative documents disguise exclusion as courtesy. Against this mature scepticism stands the eleven-year-old child tracing coastlines from a car’s back seat, seduced by primary colours and ‘expressways that promised speed without memory’. Yet the essay avoids simplistic antagonism between virtuous recollection and villainous state planning. Pivoting decisively in Paragraph 2 (‘Yet I must guard against my own nostalgia, too’), the retrospective self places memoir writing beside official surveying: if cartographers ‘flatten’ terrain, memoirists commit ‘the gentler forgery of gilding it’. Turning an unsparing rhetorical question onto her own sensory recollection—wondering whether she has ‘braided three separate summers into one convenient scent’ of lime and low tide—demonstrates rare intellectual humility. By confessing memory’s composite, fallible nature, the writer converts self-doubt into ethical credibility, persuading readers to trust her nuanced final claim.

This philosophical tension is rendered viscerally tangible through an evolving figurative architecture that pits organic, bodily imagery against sterile infrastructural erasure. Initially, the child’s harbour appears to have ‘cleanly… surrendered to ink’, a verb of military capitulation ironised by the funerary revelation that the shore had already been ‘buried twice beneath imported sand’. Similarly, the replacement of living mangrove ‘roots’ with utilitarian ‘concrete pilings’ and the disappearance of an uncle’s ‘wooden skiff’ contrast vernacular, tactile belonging with anonymous urban permanence. Against such flattening, the essay gradually breathes anatomical life into the map itself. From ‘crisp red veins’ in Paragraph 1, the paper ages into a ‘crease-softened’ artefact lined with ‘pale scars’ that ‘refuses to lie flat’ and ‘lifts at the seams, insisting on its third dimension’. Through this sustained bodily personification, the worn directory literally rebels against two-dimensional tidiness; its buckled folds enact how suppressed spatial histories push back against what the modern ‘skyline denies’.

Equally decisive is the essay’s rhetorical pacing, which widens solitary reflection into shared cultural testimony before crystallising in balanced philosophical synthesis. Across the opening two paragraphs, leisurely hypotactic sentences mirror the meandering back-seat journeys and qualifying doubts of personal reflection. In Paragraph 3, however, syntactic rhythm tightens dramatically through an anaphoric tricolon—‘We keep photographs, we keep receipts, we keep obsolete maps—’—where the sudden shift from singular ‘I’ to collective ‘We’ recruits the reader into a universal human impulse. Pausing dramatically on an em-dash before delivering its stark psychological explanation (‘prove our earlier selves were not hallucinating’), the sentence elevates mundane clutter into existential evidence of continuity. Finally, the essay closes on an exquisite structural antithesis, positioning honest remembrance astride ‘two centuries at once’: ‘one foot on the asphalt that actually exists, the other on the vanished jetty that still governs how you measure distance.’ Addressing the reader directly through ‘you’ and suspending two rival physical surfaces inside symmetrical halves, the closing cadence refuses both cynical erasure and escapist delusion, modelling a clear-eyed coexistence with loss.

Ultimately, *On Cartography and Forgetting* exemplifies the quiet power of literary non-fiction to transform an everyday object into an instrument of cultural inquiry. By calibrating self-reflexive ethos, scarred material metaphor, and disciplined rhetorical cadence, the writer convinces us that while neither map nor memory tells the whole truth, honouring the seams between them is how we remain oriented in a changing world.`,
      markScheme: [
        // Criterion A (5 marks)
        { point: "[Crit A 1/5] Articulates a sharp, arguable thesis identifying the symmetry between cartographic omission and fallible personal memory.", keywords: ["unsettling symmetry", "infallible archive", "collective amnesia", "psychic coordinates"] },
        { point: "[Crit A 2/5] Explores how rapid coastal modernisation and land reclamation reshape both physical place and personal identity.", keywords: ["coastal reclamation", "vernacular", "anonymous urban", "perimeter"] },
        { point: "[Crit A 3/5] Recognises the essay’s nuanced refusal of binary nostalgia, probing how memoirists also distort the past.", keywords: ["simplistic antagonism", "composite", "fallible", "intellectual humility"] },
        { point: "[Crit A 4/5] Interprets the closing synthesis insightfully as an honest, clear-eyed coexistence between present reality and vanished past.", keywords: ["escapist delusion", "coexistence", "oriented", "existential evidence"] },
        { point: "[Crit A 5/5] Embeds short, precise textual references seamlessly throughout every analytical movement.", keywords: ["polite confession", "imported sand", "wooden skiff", "pale scars"] },
        // Criterion B (5 marks)
        { point: "[Crit B 1/5] Evaluates the dual memoir persona (experiencing child vs sceptical retrospective voice) and how candour strengthens ethos.", keywords: ["experiencing self", "retrospective", "ethos", "rhetorical question"] },
        { point: "[Crit B 2/5] Analyses opening aphoristic voice and ironic diction (‘polite confession’, ‘gentler forgery of gilding’).", keywords: ["aphorism", "collocation", "gilding", "destabilises"] },
        { point: "[Crit B 3/5] Evaluates the evolving anatomical/bodily conceit and personification of the worn directory (‘veins’, ‘scars’, ‘refuses to lie flat’).", keywords: ["anatomical", "personification", "buckled", "two-dimensional"] },
        { point: "[Crit B 4/5] Analyses spatial diction of capitulation and burial (‘surrendered to ink’, ‘buried twice’, ‘concrete pilings’, ‘skyline denies’).", keywords: ["capitulation", "funerary", "flattening", "suppressed"] },
        { point: "[Crit B 5/5] Evaluates rhetorical pacing, syntactic contrast (hypotaxis → anaphoric tricolon + em-dash), pronoun shifts (‘I’ → ‘We’ → ‘you’), and closing antithesis.", keywords: ["hypotactic", "anaphoric tricolon", "antithesis", "em-dash"] },
        // Criterion C (5 marks)
        { point: "[Crit C 1/5] Structures the commentary around 3 conceptual essayistic lenses (persona/ethos → figurative materiality → rhetorical pacing) rather than paragraph-by-paragraph narration.", keywords: ["central to the essay", "this philosophical tension", "equally decisive", "ultimately"] },
        { point: "[Crit C 2/5] Sustains strict relevance to all three guiding-question dimensions (reflective voice, figurative language, rhetorical pacing).", keywords: ["reflective", "figurative architecture", "rhetorical pacing", "persuasive force"] },
        { point: "[Crit C 3/5] Leads every body paragraph with a focused conceptual argument before unpacking evidence.", keywords: ["dynamic interplay", "rendered viscerally", "widens solitary", "exemplifies the quiet"] },
        { point: "[Crit C 4/5] Uses cohesive analytical transitions connecting persona, space, metaphor, and syntax into one unified line of inquiry.", keywords: ["initially", "similarly", "however", "finally"] },
        { point: "[Crit C 5/5] Concludes with a crisp reflective synthesis echoing the seam/orientation motif without mechanical repetition.", keywords: ["honouring the seams", "cultural inquiry", "tells the whole truth", "calibrating"] },
        // Criterion D (5 marks)
        { point: "[Crit D 1/5] Sustains an incisive, fluent, and appropriately formal academic literary register throughout.", keywords: ["viscerally", "orchestrated", "unmask", "crystallising"] },
        { point: "[Crit D 2/5] Employs exact literary non-fiction and rhetorical terminology organically in service of meaning.", keywords: ["ideological artefact", "cadence", "testimony", "syntactic"] },
        { point: "[Crit D 3/5] Varies sentence construction effectively to sharpen contrast and analytical poise.", keywords: ["against this mature", "by confessing", "pausing dramatically", "addressing the reader"] },
        { point: "[Crit D 4/5] Displays high lexical precision in capturing tonal subtlety and reader impact.", keywords: ["seduced", "unsparing", "mundane", "symmetrical"] },
        { point: "[Crit D 5/5] Weaves embedded micro-quotations cleanly into grammatical sentences free from mechanical phrasing.", keywords: ["recruits the reader", "breathes anatomical", "elevates mundane", "models a clear-eyed"] },
      ],
      markbands: P1_HL_MARKBANDS_20,
      commonError: "Summarising the essayist’s childhood memories or neglecting non-fiction specific features such as ethos, pronoun shifts (‘I’ → ‘We’ → ‘you’), and self-interrogating truth-claims.",
      strategy: "On Literary Non-Fiction, treat *persona* and *rhetorical cadence* with the same rigour you bring to poetic form or dramatic stagecraft",
    },
  ],
};
