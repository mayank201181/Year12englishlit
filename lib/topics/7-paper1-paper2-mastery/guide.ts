import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "7-paper1-paper2-mastery",
  title: "External Exam Craft: Paper 1 & Paper 2",
  strand: "Exam & HL Essay Craft",
  icon: "📝",
  level: "SL",
  summary:
    "Master the exact architecture, timing discipline, comparative synthesis, and Criterion A–D Band 5 moves required across IB Diploma English A: Literature Paper 1 (SL & HL) and Paper 2 (closed book).",
  intro:
    "External exams account for **70% of the SL grade** (Paper 1: 35%, Paper 2: 35%) and **60% of the HL grade** (Paper 1: 35%, Paper 2: 25%). Yet top-band scripts rarely belong to candidates who simply memorise the longest lists of literary terms or quotes — they belong to candidates who think conceptually under timed pressure, respect form-specific craft, and know precisely what separates a Band 3 commentary from a Band 5 critical argument. Consistent with the IB's non-prescriptive syllabus, every framework in this guide transfers directly to any unseen extract on Paper 1 and any pair of studied works you select for Paper 2.",
  guide: [
    // =========================================================================
    // SECTION 1: Paper 1 Guiding Question & 15-Minute Planning (SL & HL Core)
    // =========================================================================
    {
      id: "paper1-guiding-question-planning",
      heading: "Paper 1 (SL & HL): Unpacking Guiding Questions & 15-Minute Planning",
      level: "SL",
      discovery: {
        problem:
          "Read this short original unseen poem (*The Harbour Clerk's Ledger*) and its guiding question: **How do structural restraint and sensory imagery convey the speaker's quiet resistance to bureaucratic erasure?**\n\n*Line 1: Four columns ruled in iron-gall: hull, tonnage, cargo, fee.*\n*Line 2: I press the nib until the brass clicks flat against the page.*\n*Line 3: Outside, salt-wind unspools the rope; a gull splits harbour fog;*\n*Line 4: I fold a strip of cedar bark inside the margin's crease.*\n\nTwo candidates begin planning. **Candidate A** outlines: *Paragraph 1: Line 1; Paragraph 2: Line 2; Paragraph 3: Line 3; Paragraph 4: Line 4.* **Candidate B** outlines: *Movement 1: Clerical order as mechanical containment (Lines 1–2); Movement 2: Sensory intrusion of the untamed maritime world (Line 3); Movement 3: Tactile, clandestine subversion within the archive itself (Line 4 vs Line 1).* Which outline unlocks Band 5 on Criterion C — and why?",
        idea: "Candidate B wins immediately because IB Paper 1 rewards a **conceptual line of argument**, never a chronological line-by-line tour. Grouping evidence by *idea and tension* lets you cross-reference how Line 4 answers Line 1 — something chronological walkthroughs mechanically prevent.",
      },
      body: `### The Official Paper 1 (SL) Blueprint

At **Standard Level**, Paper 1 lasts **1 hour 15 minutes (75 minutes)**, carries **20 marks** (5 each for Criteria A, B, C, and D), and accounts for **35% of your final IB grade**. You are presented with **two unseen literary passages** drawn from **two different literary forms** (from Poetry, Drama, Prose Fiction, and Literary Non-Fiction), each paired with a **guiding question**. SL candidates select **one passage** and write a sustained guided literary analysis.

### Decoding the Guiding Question

The guiding question is not a throwaway prompt — it is an examiner-crafted entry point pointing directly toward a formal or technical feature that unlocks the passage's deeper meaning. Always split it into two halves:

- **The Craft Anchor (the *how*):** e.g. *"How do structural restraint and sensory imagery..."* or *"How does the playwright use stage space and dialogue..."*
- **The Conceptual Inquiry (the *so what*):** e.g. *"...convey the speaker's quiet resistance to bureaucratic erasure?"*

Under official IB FA2021 rules, you are **not penalised** if you propose an alternative technical or formal entry point — provided it is equally focused and illuminates the passage as a whole. In practice, however, using the guiding question as your primary lens saves precious planning minutes and guarantees Criterion C focus.

### The 15-Minute Conceptual Planning Pipeline

Never begin writing sentences at minute 2. Candidates who skip planning drift into chronological paraphrase ("First the writer says... then in the next stanza..."). Treat the opening **15 minutes** as non-negotiable engineering time:

| Window | Phase | Concrete Action |
| :--- | :--- | :--- |
| **Min 0–4** | **Cold Read for Tension** | Read the entire passage twice without a highlighter. Ask: *What is the central conflict, ambiguity, or tonal shift from beginning to end?* |
| **Min 4–9** | **Targeted Annotation** | Re-read with the guiding question beside you. Mark 3–4 clusters of **authorial choices** (diction, syntax, metre/lineation, focalisation, stage cues, structural contrast). |
| **Min 9–13** | **Conceptual Grouping** | Organise your annotations into **3 conceptual movements** (never "Paragraph 1 = Start, Paragraph 2 = Middle, Paragraph 3 = End"). Cross-link opening and closing details. |
| **Min 13–15** | **Thesis & Topic Sentences** | Draft one crisp **thesis statement** capturing the passage's overarching tension, plus 3 **conceptual topic sentences** that build a progressive argument. |

### Writing a Band 5 Thesis and Topic Sentences

A Band 3 thesis merely restates the guiding question: *"The writer uses imagery and structure to show resistance."* A Band 5 thesis articulates a **tension, progression, or irony**:

- **Band 5 Thesis Formula:** *While [surface order or apparent attitude], the writer deploys [interlocking formal/stylistic choices] to expose [deeper psychological, social, or thematic tension], ultimately suggesting [nuanced implication].*
- **Band 5 Topic Sentence Formula:** *Conceptual claim + authorial mechanism + shift/nuance* — e.g. *"Initially, the writer's stark paratactic listing mimics institutional control, yet the strained physicality of the speaker's gesture reveals latent claustrophobia beneath apparent compliance."*`,
      diagram: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Paper 1 15-minute conceptual planning pipeline contrasted with the chronological walkthrough trap">
  <rect x="2" y="2" width="676" height="296" rx="14" fill="#fffaf9" stroke="#e2e8f0" stroke-width="2" />
  <text x="340" y="28" text-anchor="middle" font-size="15" font-weight="700" fill="#1e293b">Paper 1: The 15-Minute Conceptual Planning Pipeline</text>
  <rect x="22" y="44" width="146" height="84" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" />
  <text x="95" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">MIN 0–4</text>
  <text x="95" y="81" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Cold Read</text>
  <text x="95" y="98" text-anchor="middle" font-size="10" fill="#334155">Map central tension,</text>
  <text x="95" y="112" text-anchor="middle" font-size="10" fill="#334155">tone shift &amp; ambiguity</text>
  <path d="M 172 86 L 188 86" stroke="#64748b" stroke-width="2" />
  <rect x="190" y="44" width="146" height="84" rx="10" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5" />
  <text x="263" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="#6d28d9">MIN 4–9</text>
  <text x="263" y="81" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">GQ Annotation</text>
  <text x="263" y="98" text-anchor="middle" font-size="10" fill="#334155">Tag craft clusters</text>
  <text x="263" y="112" text-anchor="middle" font-size="10" fill="#334155">linked to Guiding Q</text>
  <path d="M 340 86 L 356 86" stroke="#64748b" stroke-width="2" />
  <polygon points="354,82 362,86 354,90" fill="#64748b" />
  <polygon points="186,82 194,86 186,90" fill="#64748b" />
  <rect x="358" y="44" width="146" height="84" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="1.5" />
  <text x="431" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">MIN 9–13</text>
  <text x="431" y="81" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">3 Movements</text>
  <text x="431" y="98" text-anchor="middle" font-size="10" fill="#334155">Group by concept,</text>
  <text x="431" y="112" text-anchor="middle" font-size="10" fill="#334155">cross-link start &amp; end</text>
  <path d="M 508 86 L 524 86" stroke="#64748b" stroke-width="2" />
  <polygon points="522,82 530,86 522,90" fill="#64748b" />
  <rect x="526" y="44" width="132" height="84" rx="10" fill="#fff1f2" stroke="#be123c" stroke-width="1.5" />
  <text x="592" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="#be123c">MIN 13–15</text>
  <text x="592" y="81" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Thesis &amp; Claims</text>
  <text x="592" y="98" text-anchor="middle" font-size="10" fill="#334155">1 tension thesis +</text>
  <text x="592" y="112" text-anchor="middle" font-size="10" fill="#334155">3 conceptual topics</text>
  <line x1="24" y1="146" x2="656" y2="146" stroke="#cbd5e1" stroke-dasharray="5 4" />
  <rect x="24" y="162" width="302" height="118" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5" />
  <text x="175" y="184" text-anchor="middle" font-size="12" font-weight="700" fill="#b91c1c">CHRONOLOGICAL TRAP (Band 3 Cap)</text>
  <text x="40" y="206" font-size="11" fill="#334155">• Para 1: "In stanza 1, the speaker..."</text>
  <text x="40" y="226" font-size="11" fill="#334155">• Para 2: "Next, in stanza 2, we see..."</text>
  <text x="40" y="246" font-size="11" fill="#334155">• Para 3: "Finally, in stanza 3..."</text>
  <text x="40" y="268" font-size="10" font-style="italic" fill="#991b1b">Result: Plot-guided summary; weak Crit C focus.</text>
  <rect x="354" y="162" width="302" height="118" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
  <text x="505" y="184" text-anchor="middle" font-size="12" font-weight="700" fill="#047857">CONCEPTUAL ARC (Band 5 Architecture)</text>
  <text x="370" y="206" font-size="11" fill="#334155">• Move 1: Surface order vs latent unease</text>
  <text x="370" y="226" font-size="11" fill="#334155">• Move 2: Form &amp; syntax destabilising control</text>
  <text x="370" y="246" font-size="11" fill="#334155">• Move 3: Structural echo &amp; unresolved irony</text>
  <text x="370" y="268" font-size="10" font-style="italic" fill="#065f46">Result: Cross-textual synthesis; high Crit A &amp; C.</text>
</svg>`,
      diagramCaption:
        "Investing 15 minutes upfront converts scattered annotations into a cohesive three-movement conceptual argument rather than a line-by-line summary.",
      workedExamples: [
        {
          title: "Unpacking an Unseen Prose Extract & Building a 3-Movement Plan",
          problem:
            "Original unseen prose fiction extract (*The Watchmaker's Apprentice*):\n\n*Every Tuesday at four, Uncle Mateo wound the six wall clocks in strict clockwise order, never glancing at the window where the monsoon rattled the tin awning. 'Precision outlives weather,' he told me, though his thumb left a grey smudge on the brass pendulum each week. When I asked why the seventh clock above the cellar door remained stopped at quarter past nine, he shut the glass bezel with a dry snap and slid the oil-can between us like a border stone.*\n\n**Guiding Question:** *How do recurring spatial details and dialogue restraint illuminate the unspoken tension between guardianship and grief?*",
          steps: [
            "**Step 1 — Split the Guiding Question:** Craft anchor = *spatial details* (clocks, window, cellar door, oil-can) + *dialogue restraint* (aphorism, refusal to answer). Conceptual inquiry = *tension between guardianship and grief*.",
            "**Step 2 — Locate the Central Tension:** On the surface, Uncle Mateo models disciplined craft and protection; beneath it, the stopped seventh clock and defensive barrier reveal repressed mourning that isolates him from the narrator.",
            "**Step 3 — Draft a Band 5 Thesis:** *Although Uncle Mateo presents clockwork routine as a shelter against chaos, the writer juxtaposes ritualised domestic order with subtle physical lapses and abrupt conversational shutdowns to reveal how unprocessed grief turns guardianship into emotional distance.*",
            "**Step 4 — Map 3 Conceptual Movements (Non-Chronological):** (1) *Ritualised discipline as emotional armour* ('strict clockwise order', aphorism 'Precision outlives weather' vs storm outside); (2) *Material fissures betraying repressed vulnerability* (the recurring 'grey smudge' on brass and the arrested 'seventh clock above the cellar door'); (3) *Spatial and acoustic boundary-making in the mentor-apprentice bond* (the 'dry snap' of the bezel and the oil-can positioned 'like a border stone').",
          ],
          answer:
            "A 3-movement conceptual outline anchored to a single tension-driven thesis that links micro-evidence across the entire extract without narrating sentence-by-sentence.",
          yourTurn: {
            question:
              "In a standard 75-minute SL Paper 1 using the recommended 15-minute planning and 5-minute proofreading model, how many minutes are allocated strictly to writing the essay?",
            answer: { type: "number", value: 55, display: "55 minutes" },
            solution:
              "Total SL Paper 1 duration is 75 minutes. Subtract 15 minutes for active reading, annotation, and conceptual planning, and 5 minutes for final proofreading: 75 − 15 − 5 = 55 minutes for writing.",
          },
        },
      ],
      keyPoints: [
        "SL Paper 1 is **1 hour 15 minutes (75 min)**, **20 marks** (A5, B5, C5, D5), worth **35%** of the SL grade; you choose **1 of 2 unseen passages** from different literary forms.",
        "Always dissect the guiding question into its **craft anchor** (formal/technical features) and its **conceptual inquiry** (meaning/effect).",
        "Never organise a Paper 1 essay chronologically ('first stanza, second stanza, third stanza'); build **3–4 conceptual movements** that cross-reference the whole passage.",
        "Every body paragraph must open with an arguable **conceptual topic sentence** linking authorial choice to thematic tension.",
      ],
      whyItWorks:
        "Examiners mark Criterion C ('effectively organized and cohesive; well focused') and Criterion A ('insightful interpretation of larger implications') simultaneously. When you group evidence conceptually, you naturally compare an opening image against a closing echo, demonstrating holistic command of the text rather than reactive sentence-by-sentence paraphrase.",
      strategies: [
        "Write your 3 conceptual movement headings directly in the margin of the question paper before touching the answer booklet — if any heading says 'Beginning', 'Middle', or 'End', rewrite it immediately.",
        "Embed 2–5 word micro-quotations inside your own syntax rather than copying two-line block quotes that eat into writing time.",
        "Reserve the final **5 minutes** to sharpen your conclusion so it synthesises the passage's unresolved complexity rather than repeating your introduction verbatim.",
      ],
      thinkDeeper:
        "When might an IB candidate legitimately choose an alternative entry point instead of the printed guiding question? Only when the passage contains a dominant structural or formal tension you can analyse with greater precision — and even then, your introduction must explicitly articulate your chosen technical lens.",
    },

    // =========================================================================
    // SECTION 2: HL Paper 1 Two-Passage Strategy (HL ONLY)
    // =========================================================================
    {
      id: "paper1-hl-two-passages",
      heading: "HL Paper 1 Strategy: Sustaining Quality Across BOTH Unseen Passages",
      level: "HL",
      discovery: {
        problem:
          "Compare two equally gifted HL candidates sitting the **2-hour 15-minute (135 min)** Paper 1 (2 passages × 20 marks = 40 marks):\n\n- **Candidate X** becomes absorbed in Passage 1 (Poetry), spending **85 minutes** polishing it to **18/20**, leaving only **50 minutes** (with zero planning) for Passage 2 (Drama), which collapses into chronological summary at **11/20** → **Total: 29/40**.\n- **Candidate Y** obeys a **hard 65-minute stop** on Passage 1 (**16/20**), takes 15 minutes to plan Passage 2 properly, writes for 50 minutes (**17/20**), and uses the final 5 minutes to tighten both scripts → **Total: 33/40**.\n\nWhy does pushing Essay 1 from 16/20 to 18/20 mathematically sabotage your HL total?",
        idea: "Marks obey diminishing returns: squeezing 2 extra marks out of an already-strong first essay costs 20 minutes, which destroys the 15-minute planning window on Essay 2 and easily forfeits 5–7 marks across Criteria A, B, and C!",
      },
      body: `### The Official HL Paper 1 Blueprint

At **Higher Level**, Paper 1 lasts **2 hours 15 minutes (135 minutes)** and accounts for **35% of your final IB grade**. Unlike SL, HL candidates have **no choice of passage**: you must write **two separate guided literary analyses** — one on **each** of the two unseen passages, which are guaranteed to come from **two different literary forms** (e.g. Poetry + Drama, Prose Fiction + Literary Non-Fiction, Poetry + Prose Fiction). Each essay is marked independently out of **20 marks** (A5, B5, C5, D5) for a combined total of **40 marks**.

### The 65 + 65 + 5 Minute Discipline

Your single biggest strategic weapon at HL is clock discipline. Before you open the booklet, write your exact wall-clock checkpoints at the top of your rough notes:

- **Essay 1 (65 minutes total):** 15 minutes read/annotate/plan + 50 minutes write. **HARD STOP at minute 65** — wrap your final synthesis sentence even if one minor sub-point stays on your plan!
- **Essay 2 (65 minutes total):** 1 minute mental palette cleanse + 14 minutes read/annotate/plan + 50 minutes write (minutes 65–130).
- **Final Buffer (5 minutes, minutes 130–135):** Proofread BOTH essays for precise verbs, accurate embedded quotations, and complete conclusions.

### Rapid Form-Toolkit Switching

Because the two HL passages always belong to **different literary forms**, candidates often accidentally carry Essay 1's analytical vocabulary into Essay 2 (for instance, analysing a drama script as if it were flat prose fiction without mentioning staging, proxemics, or silences). Use this instant switch table at minute 65:

| If Passage 2 Is... | Immediately Shed... | Immediately Activate... |
| :--- | :--- | :--- |
| **Poetry** | Plot pacing, character backstories | Form/metre, caesura, enjambment, volta, acoustic texture (sibilance/plosives), lyrical persona |
| **Drama** | Narrative focalisation, omniscient voice | Stage directions, proxemics, lighting/sound, props, subtext, pauses/interruptions, dramatic irony |
| **Prose Fiction** | Stanza architecture, theatrical lighting | Focalisation, free indirect discourse, psychic distance, temporal pacing (analepsis/ellipsis), motif |
| **Literary Non-Fiction** | Fictional plot arcs, dramatic staging | Experiencing vs retrospective persona, ethos/pathos/logos, anecdote, hypotaxis/parataxis, truth-claims |

### Preventing Essay-2 Fatigue Collapse

Cognitive fatigue hits hardest around minute 80. Protect Essay 2 with three exam-room habits:

1. **Choose your passage order strategically:** Glance at both passages for 60 seconds at the start. Many HL high-scorers tackle the **slightly less comfortable form first** while focus is sharpest, leaving their natural strength for Essay 2; others start with their strongest form to lock confidence. Practise both in mocks and commit before exam day.
2. **Never skip Essay 2's 15-minute plan:** When tired, your brain begs to "just start writing" — resist! A crisp 3-movement outline prevents rambling and preserves Band 5 Criterion C even under fatigue.
3. **Streamline to 3 tight conceptual movements:** Essay 2 does not need 5 sprawling paragraphs; 3 dense, evaluative movements with rich form-specific craft consistently outscore 5 thin ones.`,
      diagram: `<svg viewBox="0 0 680 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Paper 1 SL 75-minute versus HL 135-minute time budget bar chart">
  <rect x="2" y="2" width="676" height="261" rx="14" fill="#fffaf9" stroke="#e2e8f0" stroke-width="2" />
  <text x="340" y="28" text-anchor="middle" font-size="15" font-weight="700" fill="#1e293b">Paper 1 Time-Budget Architecture: SL (75 min) vs HL (135 min)</text>
  <text x="28" y="64" font-size="12" font-weight="700" fill="#0f172a">SL · 1h 15m (75 min · 1 of 2 Passages · 20 marks · 35%)</text>
  <rect x="28" y="74" width="124" height="38" rx="6" fill="#3b82f6" />
  <text x="90" y="97" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Plan · 15m</text>
  <rect x="156" y="74" width="456" height="38" rx="6" fill="#be123c" />
  <text x="384" y="97" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">Write Essay · 55 min</text>
  <rect x="616" y="74" width="40" height="38" rx="6" fill="#059669" />
  <text x="636" y="97" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">5m</text>
  <text x="28" y="148" font-size="12" font-weight="700" fill="#0f172a">HL · 2h 15m (135 min · BOTH Passages · 2 × 20 = 40 marks · 35%)</text>
  <rect x="28" y="158" width="70" height="40" rx="6" fill="#3b82f6" />
  <text x="63" y="182" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Plan 15m</text>
  <rect x="101" y="158" width="228" height="40" rx="6" fill="#be123c" />
  <text x="215" y="182" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Essay 1 Write · 50m</text>
  <line x1="333" y1="149" x2="333" y2="216" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="4 3" />
  <text x="333" y="232" text-anchor="middle" font-size="10" font-weight="700" fill="#b91c1c">HARD STOP: 65m</text>
  <rect x="338" y="158" width="70" height="40" rx="6" fill="#7c3aed" />
  <text x="373" y="182" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Plan 15m</text>
  <rect x="411" y="158" width="218" height="40" rx="6" fill="#9f1239" />
  <text x="520" y="182" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Essay 2 Write · 50m</text>
  <rect x="632" y="158" width="24" height="40" rx="6" fill="#059669" />
  <text x="644" y="182" text-anchor="middle" font-size="9" font-weight="700" fill="#ffffff">5m</text>
  <text x="644" y="232" text-anchor="middle" font-size="9" font-weight="700" fill="#047857">Check</text>
  <text x="28" y="251" font-size="10" fill="#475569">Key HL Rule: 65m (Essay 1) + 65m (Essay 2) + 5m (Buffer) = 135m. Switch form toolkits completely at minute 65.</text>
</svg>`,
      diagramCaption:
        "The HL hard stop at minute 65 protects Essay 2's full 15-minute conceptual planning window and prevents lopsided 18+11 scripts.",
      workedExamples: [
        {
          title: "[HL] Executing a Minute-65 Form Switch: Poetry → Drama",
          problem:
            "You have just completed HL Passage 1 (a lyric sonnet) at minute 65. Passage 2 is an original unseen **Drama** extract:\n\n*[A fluorescent strip flickers over a narrow kitchen table. NORA sits centre-stage folding a laminated ferry timetable into smaller and smaller squares. ARJUN enters from stage left carrying an unsealed cardboard box, stopping two metres short of the table.]*\n*ARJUN: The landlord signed the release.*\n*NORA: (without looking up) Good. Then the kettle won't need descaling.*\n*[Pause. The fluorescent tube hums louder.]*\n\n**Guiding Question:** *How do theatrical space, stage business, and verbal evasion dramatise an unspoken rupture?*",
          steps: [
            "**Step 1 — Shed the Poetry Toolkit (Min 65–66):** Close the sonnet mentally; stop hunting for metre or enjambment. Picture a live 3D stage with an audience watching sightlines, lighting, and silence.",
            "**Step 2 — Load the Drama Toolkit (Min 66–74):** Annotate *lighting/sound* (flickering fluorescent tube humming louder during the pause), *proxemics* (Arjun halting 'two metres short'), *symbolic props & stage business* (shrinking folded timetable vs unsealed box), and *subtext/evasion* (deflecting permanent departure onto 'descaling' a kettle).",
            "**Step 3 — Conceptual 3-Movement Plan (Min 74–80):** (1) *Spatial alienation & staged distance* (proxemics + stark fluorescent lighting framing emotional exposure); (2) *Props as displaced anxiety* (compulsive folding of the timetable shrinking future mobility vs unsealed box signalling incomplete closure); (3) *Domestic banality & acoustic pause as subtextual evasion* (kettle remark + humming silence exposing the rupture neither speaker can name).",
            "**Step 4 — Write & Guard the Clock (Min 80–130):** Complete all 3 movements and a 3-sentence synthesis conclusion by minute 130, leaving minutes 130–135 to polish both HL scripts.",
          ],
          answer:
            "A disciplined 65-minute transition that activates theatrical staging, proxemics, props, and subtext immediately so Essay 2 matches Essay 1's analytical rigour.",
          yourTurn: {
            question:
              "An HL Paper 1 exam starts at 09:00 and runs for 2 hours 15 minutes. Using the strict 65 + 65 + 5 minute protocol, how many minutes after 09:00 should you finish Essay 2's planning phase and begin writing Essay 2?",
            answer: { type: "number", value: 80, display: "80 minutes" },
            solution:
              "Essay 1 ends at minute 65 (10:05). Essay 2 then gets a full 15-minute read, annotate, and conceptual planning window: 65 + 15 = 80 minutes after the start (10:20).",
          },
        },
      ],
      keyPoints: [
        "HL Paper 1 lasts **2 hours 15 minutes (135 min)**, requires analysing **BOTH** unseen passages (always from **two different literary forms**), totals **40 marks** (2 × 20), and weighs **35%** of the HL grade.",
        "Enforce the **65 + 65 + 5 minute rule**: never steal planning time from Passage 2 to polish Passage 1.",
        "Deliberately switch **form-specific analytical toolkits** at minute 65 so drama is read as performance, poetry as acoustic/structural architecture, prose as focalised narration, and non-fiction as crafted persona and rhetoric.",
        "Two balanced 16/20 essays (32/40) outscore one over-polished 18/20 essay paired with a rushed 11/20 essay (29/40).",
      ],
      whyItWorks:
        "Each HL Paper 1 essay is marked on an identical 20-mark grid with no bonus marks for writing extra pages on Passage 1. Protecting Passage 2's 15-minute conceptual outline eliminates the #1 HL Paper 1 score killer: chronological panic in the second hour.",
      strategies: [
        "Write both exact clock times on your question paper at minute 0 (e.g. 'Hard stop E1: 10:05 | Plan E2 done: 10:20 | Stop E2: 11:10 | End: 11:15').",
        "Take 30 seconds between essays to stretch your fingers, breathe once, and ask: *What literary form is Passage 2, and which three form-specific conventions matter most here?*",
        "During your final 5-minute buffer, check that BOTH essays explicitly engage their respective guiding questions in the thesis and conclusion.",
      ],
      thinkDeeper:
        "Why does the IB guarantee that the two HL Paper 1 passages come from *two different literary forms*? Because Higher Level assesses breadth of formal agility — proving you can interpret how medium itself (stage space vs poetic lineation vs narrative perspective vs rhetorical voice) generates meaning.",
    },

    // =========================================================================
    // SECTION 3: Paper 2 Comparative Prompts & Closed-Book Mastery (SL & HL)
    // =========================================================================
    {
      id: "paper2-comparative-prompts",
      heading: "Paper 2: Unpacking Unseen Prompts Across 2 Studied Works (Closed Book)",
      level: "SL",
      discovery: {
        problem:
          "Consider this IB-style unseen Paper 2 prompt: *\"Works of literature often depict characters who believe they are free while remaining trapped by invisible forces.\" Discuss how and to what effect this tension is presented in two of the works you have studied.*\n\n**Candidate A** writes 3 pages on Work 1, adds one transition sentence (*'Similarly, in Work 2...'*), and writes 3 pages on Work 2 — agreeing simply that both characters are trapped. **Candidate B** unpacks *what kind* of 'invisible forces' operate (social expectation vs internalised guilt), examines *where* each protagonist actually exercises agency, and contrasts how Work 1's dramatic staging versus Work 2's unreliable narration shapes audience sympathy in every single section. Why does Candidate B score Band 5 on Criteria A, B, and C while Candidate A stalls in Band 3?",
        idea: "Paper 2 is a **comparative evaluation**, not two mini-essays stapled together. High-scoring scripts interrogate the prompt's assumptions and weave both works together around shared conceptual lenses — explicitly comparing *how different authorial choices and forms* produce convergent or divergent effects.",
      },
      body: `### The Official Paper 2 Blueprint (SL & HL)

Both SL and HL candidates sit the exact same **1-hour 45-minute (105 min)** Paper 2 exam, choosing **1 of 4 unseen general prompts** and writing a comparative essay on **2 studied works**. Paper 2 is strictly **closed book** (no copies of texts or notes are allowed in the exam hall) and is marked out of **30 marks**:

- **Criterion A (Knowledge, understanding & interpretation):** **10 marks**
- **Criterion B (Analysis & evaluation):** **10 marks**
- **Criterion C (Focus & organisation):** **5 marks**
- **Criterion D (Language):** **5 marks**

Notice the weighting difference: Paper 2 counts for **35% of the SL grade** and **25% of the HL grade** (because HL also includes the 20% HL Essay).

### Protecting the Strict Non-Overlap Rule

Before preparing your Paper 2 pairings, verify the mandatory IB **non-overlap work rule**:

- **SL:** You must NOT reuse either of your **2 Individual Oral works** in Paper 2.
- **HL:** You must NOT reuse either of your **2 Individual Oral works** OR your **1 HL Essay work** in Paper 2.

Smart candidates prepare **3 versatile non-overlap works** in DP2 (ideally spanning two distinct forms or eras) so that whichever of the 4 unseen prompts appears on exam day, at least one pairing creates rich, productive contrast.

### 4-Step Unseen Prompt Deconstruction (Minutes 0–15)

1. **Decode the Command & Scope:** Identify whether the prompt asks *"To what extent..."* (requires weighing limits/counter-evidence), *"Compare and contrast..."*, *"Discuss how and to what effect..."* (requires linking craft → reader impact), or *"In what ways..."*.
2. **Interrogate Key Terms & Hidden Assumptions:** Break open abstract nouns (*power, home, memory, outsiders, truth, endings*) and ask: *Could this term mean something opposite in Work 2? Does either work challenge the prompt's premise?*
3. **Build a Comparative T-Matrix:** Map **3–4 shared conceptual angles** where Work 1 and Work 2 both **converge AND diverge** — especially in **authorial craft and form** (Criterion B is worth 10/30 marks!).
4. **Commit to Integrated Point-by-Point Structure:** Never write a "block essay" (all Work 1, then all Work 2). Every body section should put BOTH works into direct analytical dialogue using precision connectives (*whereas, conversely, by contrast, analogously, yet while*).

### Closed-Book Evidence Without Panic Memorisation

Examiners know Paper 2 is closed book — they do **not** reward giant memorised soliloquies dumped without analysis. Instead, revise a compact **Closed-Book Evidence Toolkit** for each work:

- **12–15 micro-quotations (2–6 words each):** Crisp phrases rich in connotation, irony, or motif that embed effortlessly into your sentences.
- **Key structural pivots:** Exact opening scene/line, structural turning points, climax, and ending (plus narrative framing, stanza architecture, or staging transformations).
- **Authorial craft signatures:** Medium-specific devices (e.g. stage props and lighting in drama vs free indirect discourse in prose fiction vs volta/metre in poetry).

*Recommended 105-minute pacing:* **15 min** prompt selection & comparative matrix → **80 min** integrated writing (intro + 3–4 comparative movements + synthesis conclusion) → **10 min** final verification of balance, prompt keywords, and academic precision.`,
      diagram: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Paper 2 integrated point-by-point comparative architecture and IB non-overlap work firewall">
  <rect x="2" y="2" width="676" height="296" rx="14" fill="#fffaf9" stroke="#e2e8f0" stroke-width="2" />
  <text x="340" y="27" text-anchor="middle" font-size="15" font-weight="700" fill="#1e293b">Paper 2: Integrated Comparison &amp; The Non-Overlap Firewall</text>
  <rect x="22" y="44" width="388" height="148" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="1.5" />
  <text x="216" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="#047857">INTEGRATED POINT-BY-POINT (Band 5 Crit B &amp; C)</text>
  <rect x="36" y="74" width="360" height="30" rx="6" fill="#ffffff" stroke="#10b981" />
  <text x="216" y="93" text-anchor="middle" font-size="11" fill="#0f172a">Move 1: Shared Tension A → [Work 1 craft] ↔ [Work 2 craft]</text>
  <rect x="36" y="112" width="360" height="30" rx="6" fill="#ffffff" stroke="#10b981" />
  <text x="216" y="131" text-anchor="middle" font-size="11" fill="#0f172a">Move 2: Form Divergence → [Work 1 form] vs [Work 2 form]</text>
  <rect x="36" y="150" width="360" height="30" rx="6" fill="#ffffff" stroke="#10b981" />
  <text x="216" y="169" text-anchor="middle" font-size="11" fill="#0f172a">Move 3: Resolution / Complication → [Work 1] ↔ [Work 2]</text>
  <rect x="22" y="204" width="388" height="78" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5" />
  <text x="216" y="224" text-anchor="middle" font-size="12" font-weight="700" fill="#b91c1c">BLOCK-BY-BLOCK TRAP (Capped Comparison)</text>
  <rect x="36" y="234" width="166" height="32" rx="6" fill="#fee2e2" stroke="#dc2626" />
  <text x="119" y="254" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">Pages 1–3: Only Work 1</text>
  <text x="216" y="254" text-anchor="middle" font-size="12" font-weight="700" fill="#b91c1c">→</text>
  <rect x="230" y="234" width="166" height="32" rx="6" fill="#fee2e2" stroke="#dc2626" />
  <text x="313" y="254" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">Pages 4–6: Only Work 2</text>
  <rect x="426" y="44" width="232" height="238" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5" />
  <text x="542" y="65" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">NON-OVERLAP RULE</text>
  <text x="542" y="81" text-anchor="middle" font-size="10" fill="#334155">Zero works may repeat across tasks</text>
  <rect x="444" y="94" width="196" height="48" rx="8" fill="#ffffff" stroke="#93c5fd" />
  <text x="542" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Individual Oral (IA)</text>
  <text x="542" y="131" text-anchor="middle" font-size="10" fill="#475569">2 Works (1 Eng + 1 Trans) · LOCKED</text>
  <rect x="444" y="154" width="196" height="48" rx="8" fill="#f5f3ff" stroke="#8b5cf6" />
  <text x="542" y="174" text-anchor="middle" font-size="11" font-weight="700" fill="#5b21b6">HL Essay [HL Only]</text>
  <text x="542" y="191" text-anchor="middle" font-size="10" fill="#475569">1 Work (1,200–1,500w) · LOCKED</text>
  <rect x="444" y="214" width="196" height="54" rx="8" fill="#fff1f2" stroke="#be123c" stroke-width="1.5" />
  <text x="542" y="235" text-anchor="middle" font-size="11" font-weight="700" fill="#be123c">Paper 2 Comparative</text>
  <text x="542" y="252" text-anchor="middle" font-size="10" fill="#334155">2 FRESH Studied Works (30m)</text>
</svg>`,
      diagramCaption:
        "Integrated point-by-point comparison sustains Criteria A, B, and C simultaneously, while the non-overlap firewall protects exam eligibility.",
      workedExamples: [
        {
          title: "Deconstructing an Unseen Paper 2 Prompt Across Two Distinct Forms",
          problem:
            "**Unseen Prompt:** *\"In what ways and to what effect do two works you have studied explore the tension between public performance and private selfhood?\"*\n\nDemonstrate a Band 5 planning blueprint using two illustrative works across different forms: Henrik Ibsen's play *A Doll's House* `[Example text — not a set text]` (Drama, work in translation) and Kazuo Ishiguro's novel *The Remains of the Day* `[Example text — not a set text]` (Prose Fiction).",
          steps: [
            "**Step 1 — Unpack Prompt Terms:** *Public performance* = curated social roles (respectable domestic wife vs 'great butler'); *private selfhood* = suppressed desire, moral autonomy, grief; *in what ways* = form-specific craft (theatrical staging/props vs unreliable first-person retrospection); *to what effect* = provoking audience critique vs tragic complicity.",
            "**Step 2 — Craft a Nuanced Comparative Thesis:** *While both Ibsen (`[Example text — not a set text]`) and Ishiguro (`[Example text — not a set text]`) expose how rigid social roles hollow out authentic selfhood, Ibsen's naturalist staging visibly fractures domestic performance to propel Nora toward public rupture, whereas Ishiguro's guarded first-person narration mirrors Stevens's self-deception so that emotional recognition arrives too late to liberate him.*",
            "**Step 3 — Design 3 Integrated Movements:** (1) *Curating the mask* — Nora's playful diminutives and hidden macaroons (visual dramatic irony) vs Stevens's formal diction and euphemisms ('dignity') masking distress; (2) *Cracks in the performance under crisis* — the frantic tarantella dance externalising panic on stage vs Stevens's digressive narrative evasions when his father falls ill; (3) *Divergent endings & reader impact* — the offstage slamming door unsettling bourgeois audiences vs Stevens's quiet bench reflection at dusk leaving readers in elegiac unease.",
            "**Step 4 — Check Criterion Balance:** Both works receive ~50/50 space in every movement, and every claim links a **medium-specific choice** (staging/sound vs unreliable focalisation) to its **thematic and emotional effect**.",
          ],
          answer:
            "An integrated comparative plan interrogating the prompt's core tension across two literary forms, balancing similarity of theme with sharp divergence in craft and resolution.",
          yourTurn: {
            question:
              "An HL Literature student has studied 13 works. They use 2 works for their Individual Oral and 1 different work for their HL Essay. What is the maximum number of remaining studied works eligible for their Paper 2 Comparative Essay?",
            answer: { type: "number", value: 10, display: "10 works" },
            solution:
              "Under the IB non-overlap rule, neither the 2 IO works nor the 1 HL Essay work may be reused in Paper 2: 13 − 2 − 1 = 10 eligible works remain.",
          },
        },
      ],
      keyPoints: [
        "Paper 2 lasts **1 hour 45 minutes (105 min)**, is strictly **closed book**, offers **1 of 4 unseen prompts** on **2 studied works**, totals **30 marks (A10, B10, C5, D5)**, and weighs **35% at SL / 25% at HL**.",
        "The **non-overlap rule** is absolute: works analysed in your IO or HL Essay [HL] cannot be used in Paper 2.",
        "Always structure Paper 2 **point-by-point around conceptual angles** — never write a block essay ('all Work 1, then all Work 2').",
        "Criteria A (10m) and B (10m) together form **two-thirds of Paper 2**, so comparative craft evaluation (how distinct forms/techniques shape divergent effects) is decisive.",
      ],
      whyItWorks:
        "Paper 2 Criterion A explicitly awards top marks for 'an insightful interpretation of the similarities and differences between the works', and Criterion B explicitly demands 'very good comparison and contrast of the uses of [textual] features'. Integrated comparative sections prove those rubric demands on every single page.",
      strategies: [
        "Build a 1-page **Closed-Book Micro-Quote Sheet** per candidate work (12 short 2–5 word quotations + 4 structural turning points + 4 signature craft devices) and drill active recall weekly.",
        "Highlight every prompt word that implies value judgement or tension (*often, only, inevitably, more powerfully, triumph*) — contesting or qualifying that word immediately elevates Criterion A.",
        "Use precision comparative verbs and connectives (*whereas, conversely, while both writers..., by contrast, diverges sharply in form because...*) at paragraph openings AND mid-paragraph pivots.",
      ],
      thinkDeeper:
        "Is it better to compare two works of the *same* literary form or *two different* literary forms on Paper 2? Neither is privileged by the IB — what matters is exploiting the comparison consciously: same-form pairs invite sharp contrast in convention-breaking (e.g. two plays with opposite staging philosophies), while cross-form pairs highlight how medium itself alters reader intimacy and distance.",
    },

    // =========================================================================
    // SECTION 4: Rubric Mastery Criteria A–D (Band 3 → Band 5)
    // =========================================================================
    {
      id: "rubric-mastery-crit-a-d",
      heading: "Mastering IB Criteria A, B, C & D: Moving from Band 3 to Band 5",
      level: "SL",
      discovery: {
        problem:
          "Read two analytical responses to this original unseen line: *\"The porcelain clock ticked louder than the guests.\"*\n\n- **Response 1 (Band 3):** *The author uses hyperbole and auditory imagery when saying the 'porcelain clock ticked louder than the guests'. This creates a tense atmosphere and makes the reader want to read on because the dinner is awkward.*\n- **Response 2 (Band 5):** *By magnifying the mechanical 'ticked' above human conversation, the writer externalises the room's unspoken hostility; pairing this relentless auditory intrusion with fragile 'porcelain' implies that polite social ritual is brittle and close to shattering.*\n\nBoth responses quote the exact same words. What concrete analytical moves vault Response 2 from Band 3 into Band 5?",
        idea: "Response 1 commits **technique-spotting** (naming devices + adding generic filler 'creates atmosphere / makes the reader want to read on'). Response 2 performs **evaluative craft analysis**: it links *two interlocking details* (auditory exaggeration + fragile material diction) directly to a *psychological and social implication*.",
      },
      body: `### How Paper 1 and Paper 2 Weight Criteria A–D

The four IB external-exam criteria stay consistent across Paper 1 and Paper 2, with Paper 2 doubling Criteria A and B to reward comparative depth:

| Criterion | Focus | Paper 1 (per essay) | Paper 2 | Core Band 5 Verb |
| :--- | :--- | :---: | :---: | :--- |
| **Crit A** | Knowledge, Understanding & Interpretation | **5** | **10** | **Interpret implications & subtleties** |
| **Crit B** | Analysis & Evaluation of Authorial Choices | **5** | **10** | **Evaluate how craft shapes meaning** |
| **Crit C** | Focus & Organisation | **5** | **5** | **Sustain cohesive conceptual arc** |
| **Crit D** | Language (Precision, Register & Style) | **5** | **5** | **Express with concise scholarly control** |
| **Total** | | **20 (SL) / 40 (HL)** | **30** | |

### Decoding the Exact Band 3 → Band 5 Separators

Most Year 12–13 students write accurate, sensible Band 3 essays (roughly 12–13/20 or 17–19/30). Breaking into **Band 5 (17–20/20 or 26–30/30)** requires deliberately targeting four specific examiner separators:

1. **Criterion A — From Literal Paraphrase to Implications & Ambiguity:**
   - *Band 3* explains *what happens* or states an obvious surface message (*"This shows she is sad about leaving"*).
   - *Band 5* uncovers **larger implications, tonal tensions, and unresolved ambiguities** (*"Her dry preoccupation with household trivia implies that naming grief directly feels more threatening than enduring exile itself"*).
2. **Criterion B — From Technique-Spotting to Evaluative Synthesis:**
   - *Band 3* drops isolated labels (*"uses sibilance", "uses a metaphor"*) followed by empty catch-alls (*"emphasises the mood", "engages the reader"*).
   - *Band 5* analyses **how interlocking craft choices operate together** and **evaluates their effectiveness** — tracing the exact causal chain **Device → Mechanism → Emotional/Conceptual Effect**.
3. **Criterion C — From Predictable Listing to Progressive Architecture:**
   - *Band 3* follows chronological text order (Paper 1) or half-and-half blocks (Paper 2), repeating the thesis mechanically at the end of every paragraph.
   - *Band 5* advances a **cumulative argument**: each movement complicates, deepens, or shifts the previous one, with organic transitions that carry the thesis forward.
4. **Criterion D — From Wordy Generality to Concise Analytical Precision:**
   - *Band 3* relies on vague verbs (*shows, uses, makes, says*) and conversational hedging (*"a lot of", "kind of", "in my opinion"*).
   - *Band 5* deploys **surgical analytical verbs** (*destabilises, ironises, compresses, foregrounds, subverts, externalises, refracts*), embeds micro-quotations seamlessly into grammatical clauses, and varies sentence rhythm for rhetorical clarity.

### The High-Impact Analytical Verb Upgrade

Swap tired Band 3 verbs immediately:
- Instead of *"shows / highlights"* → **exposes, dramatises, externalises, underscores, crystallises**.
- Instead of *"makes the reader feel"* → **positions the audience to question, implicates the reader in, unsettles expectations of**.
- Instead of *"contrasts with"* → **juxtaposes, counterpoints, destabilises, undercuts, ironises**.`,
      diagram: `<svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IB Criteria A to D Band 3 versus Band 5 progression ladder">
  <rect x="2" y="2" width="676" height="306" rx="14" fill="#fffaf9" stroke="#e2e8f0" stroke-width="2" />
  <text x="340" y="27" text-anchor="middle" font-size="15" font-weight="700" fill="#1e293b">IB Criteria A–D: Exact Separators from Band 3 to Band 5</text>
  <text x="195" y="49" text-anchor="middle" font-size="11" font-weight="700" fill="#b45309">BAND 3 (Competent / Mid-Range)</text>
  <text x="505" y="49" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">BAND 5 (Insightful / Top-Band)</text>
  <rect x="20" y="60" width="62" height="52" rx="8" fill="#be123c" />
  <text x="51" y="83" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">Crit A</text>
  <text x="51" y="100" text-anchor="middle" font-size="9" fill="#ffe4e6">P1:5 · P2:10</text>
  <rect x="90" y="60" width="232" height="52" rx="8" fill="#fffbeb" stroke="#f59e0b" />
  <text x="206" y="81" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Literal meaning &amp; surface summary</text>
  <text x="206" y="99" text-anchor="middle" font-size="10" fill="#475569">Valid references, predictable claims</text>
  <text x="342" y="91" text-anchor="middle" font-size="16" font-weight="700" fill="#059669">→</text>
  <rect x="362" y="60" width="298" height="52" rx="8" fill="#ecfdf5" stroke="#10b981" />
  <text x="511" y="81" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">Subtle implications &amp; ambiguity</text>
  <text x="511" y="99" text-anchor="middle" font-size="10" fill="#334155">Persuasive, nuanced interpretive conclusions</text>
  <rect x="20" y="122" width="62" height="52" rx="8" fill="#9f1239" />
  <text x="51" y="145" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">Crit B</text>
  <text x="51" y="162" text-anchor="middle" font-size="9" fill="#ffe4e6">P1:5 · P2:10</text>
  <rect x="90" y="122" width="232" height="52" rx="8" fill="#fffbeb" stroke="#f59e0b" />
  <text x="206" y="143" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Technique-spotting &amp; generic effects</text>
  <text x="206" y="161" text-anchor="middle" font-size="10" fill="#475569">"Uses imagery to emphasise mood"</text>
  <text x="342" y="153" text-anchor="middle" font-size="16" font-weight="700" fill="#059669">→</text>
  <rect x="362" y="122" width="298" height="52" rx="8" fill="#ecfdf5" stroke="#10b981" />
  <text x="511" y="143" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">Evaluative craft synthesis</text>
  <text x="511" y="161" text-anchor="middle" font-size="10" fill="#334155">Device → mechanism → conceptual impact</text>
  <rect x="20" y="184" width="62" height="52" rx="8" fill="#1d4ed8" />
  <text x="51" y="207" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">Crit C</text>
  <text x="51" y="224" text-anchor="middle" font-size="9" fill="#dbeafe">P1:5 · P2:5</text>
  <rect x="90" y="184" width="232" height="52" rx="8" fill="#fffbeb" stroke="#f59e0b" />
  <text x="206" y="205" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Chronological / block structure</text>
  <text x="206" y="223" text-anchor="middle" font-size="10" fill="#475569">Adequate order, mechanical transitions</text>
  <text x="342" y="215" text-anchor="middle" font-size="16" font-weight="700" fill="#059669">→</text>
  <rect x="362" y="184" width="298" height="52" rx="8" fill="#ecfdf5" stroke="#10b981" />
  <text x="511" y="205" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">Cohesive conceptual progression</text>
  <text x="511" y="223" text-anchor="middle" font-size="10" fill="#334155">Balanced synthesis &amp; razor-sharp focus</text>
  <rect x="20" y="246" width="62" height="52" rx="8" fill="#6d28d9" />
  <text x="51" y="269" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">Crit D</text>
  <text x="51" y="286" text-anchor="middle" font-size="9" fill="#ede9fe">P1:5 · P2:5</text>
  <rect x="90" y="246" width="232" height="52" rx="8" fill="#fffbeb" stroke="#f59e0b" />
  <text x="206" y="267" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Clear but repetitive phrasing</text>
  <text x="206" y="285" text-anchor="middle" font-size="10" fill="#475569">Overuses "shows", "uses", wordy filler</text>
  <text x="342" y="277" text-anchor="middle" font-size="16" font-weight="700" fill="#059669">→</text>
  <rect x="362" y="246" width="298" height="52" rx="8" fill="#ecfdf5" stroke="#10b981" />
  <text x="511" y="267" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">Precise, varied academic register</text>
  <text x="511" y="285" text-anchor="middle" font-size="10" fill="#334155">Surgical verbs &amp; seamless micro-quotes</text>
</svg>`,
      diagramCaption:
        "Every IB criterion has a crisp behavioural separator: moving from Band 3 to Band 5 means replacing summary, labels, chronology, and vague verbs with implication, evaluation, conceptual progression, and scholarly precision.",
      workedExamples: [
        {
          title: "Upgrading a Band 3 Paragraph to Band 5 Across Criteria A–D",
          problem:
            "Original unseen prose sentence (*The Cartographer's Daughter*): *\"My father drew coastlines in steady violet ink, yet whenever the ferry horn echoed across the estuary, he ruled an extra border around the harbour as if ink could keep water from rising.\"*\n\n**Band 3 Draft:** *In this sentence, the author uses imagery and a simile to show the father's fear. The 'steady violet ink' shows he is calm at first, and then the simile 'as if ink could keep water from rising' emphasises that he cannot control nature. This makes the reader feel sympathy for him.*",
          steps: [
            "**Upgrade Criterion A (Implications):** Move beyond 'he is calm then fearful' to the psychological implication: cartographic precision functions as a fragile defence mechanism against existential loss and temporal change.",
            "**Upgrade Criterion B (Evaluative Craft):** Connect *interlocking* choices — the tactile control of 'steady violet ink' is interrupted by the temporal pivot 'yet whenever' and auditory intrusion ('ferry horn echoed'), culminating in the ironic conditional simile ('as if ink could keep water from rising') that exposes the futility of imposing two-dimensional borders on a tidal world.",
            "**Upgrade Criterion C (Conceptual Framing):** Open with a conceptual claim tying craft directly to the essay's line of argument rather than 'In this sentence...'.",
            "**Upgrade Criterion D (Register & Embedding):** Replace 'shows / emphasises / makes the reader feel' with surgical verbs (*contrasts, destabilises, exposes, invites*) and weave 2–4 word quotations grammatically into the prose.",
          ],
          answer:
            "**Band 5 Revision:** *The narrator exposes cartography not as objective mastery, but as an anxious ritual of containment. Although her father's 'steady violet ink' projects disciplined authority, the syntactic pivot 'yet whenever' allows the encroaching 'ferry horn' to breach his stillness, triggering a compulsive redrawing of borders. Crucially, the narrator's ironic simile — 'as if ink could keep water from rising' — evaluates his precision with tender scepticism, revealing the pathos of attempting to arrest fluid reality through flat geometric lines.*",
          yourTurn: {
            question:
              "An IB examiner writes: 'You identify metaphors, enjambment, and caesura accurately, but you rarely explain how effectively these choices construct the speaker's ironic tone.' Which single IB Criterion letter (A, B, C, or D) does this feedback directly target?",
            answer: {
              type: "text",
              accept: ["B", "Criterion B", "Crit B"],
              display: "Criterion B",
            },
            solution:
              "Criterion B assesses 'Analysis and evaluation' — specifically how effectively you analyse and evaluate how textual features and authorial choices shape meaning, rather than merely listing devices.",
          },
        },
      ],
      keyPoints: [
        "**Criterion A** separates literal paraphrase (Band 3) from insightful interpretation of implications, subtleties, and ambiguity (Band 5).",
        "**Criterion B** separates isolated technique-spotting (Band 3) from evaluative analysis of how interlocking authorial choices construct meaning (Band 5).",
        "**Criterion C** rewards conceptual, progressive organisation and balanced Paper 2 synthesis over chronological or block-by-block walkthroughs.",
        "**Criterion D** rewards concise, precise academic register, surgical analytical verbs, and grammatically embedded micro-quotations.",
      ],
      whyItWorks:
        "IB examiners do not award marks by counting technical terms; they apply holistic best-fit band descriptors. When every paragraph connects **micro-evidence → craft mechanism → conceptual implication**, you simultaneously push Criteria A, B, C, and D upward.",
      strategies: [
        "Ban the empty phrase *'this makes the reader want to read on'* and replace every instance of *'shows'* during your 5-minute proofread with a more exact analytical verb.",
        "Apply the **'So What?' double-check** after every literary term you name: *I named enjambment — how does THAT exact line break destabilise rhythm or reveal psychological hesitation?*",
        "On Paper 2, check at the halfway mark that you have evaluated **authorial craft** (Criterion B, 10 marks), not just thematic plot parallels (Criterion A, 10 marks).",
      ],
      thinkDeeper:
        "Why does Criterion B include the word **evaluation** alongside *analysis*? Analysis explains *how* a device works mechanically; evaluation judges its *aesthetic, ethical, or psychological effectiveness* — for example, assessing whether an ambiguous ending purposefully denies readers comforting closure.",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Paper 1 (SL): duration, passage requirement, marks & weighting?",
        back: "**1 hour 15 minutes (75 min)** · Choose **1 of 2** unseen passages (from 2 different forms) · **20 marks** (A5, B5, C5, D5) · **35%** of SL grade.",
        level: "SL",
      },
      {
        front: "Paper 1 (HL): duration, passage requirement, marks & weighting?",
        back: "**2 hours 15 minutes (135 min)** · Analyse **BOTH** unseen passages (from 2 different literary forms) · **40 marks** (2 × 20) · **35%** of HL grade.",
        level: "HL",
      },
      {
        front: "Paper 2 (SL & HL): duration, task, closed-book status, marks & weightings?",
        back: "**1 hour 45 minutes (105 min)** · Choose **1 of 4** unseen prompts on **2 studied works** · Strictly **closed book** · **30 marks** (A10, B10, C5, D5) · **SL 35% / HL 25%**.",
        level: "SL",
      },
      {
        front: "What is the mandatory IB Non-Overlap Work Rule?",
        back: "No literary work analysed in your **Individual Oral (IA)** (2 works) or **HL Essay [HL]** (1 work) may be reused in **Paper 2** (2 distinct studied works).",
        level: "SL",
      },
      {
        front: "What is the optimal HL Paper 1 time split across 135 minutes?",
        back: "**65 min Essay 1** (15m plan + 50m write, HARD STOP) + **65 min Essay 2** (15m plan + 50m write) + **5 min final buffer** across both scripts.",
        level: "HL",
      },
      {
        front: "What two components should you unpack in every Paper 1 guiding question?",
        back: "1. The **craft anchor** (technical/formal focus: e.g. imagery, stage space, syntax). 2. The **conceptual inquiry** (thematic, tonal, or psychological effect).",
        level: "SL",
      },
      {
        front: "Can you ignore the printed Paper 1 guiding question?",
        back: "You may propose an **alternative technical or formal entry point** of equal analytical depth, but following the printed guiding question is usually faster and secures Criterion C focus.",
        level: "SL",
      },
      {
        front: "Why does chronological ('Stanza 1, Stanza 2, Stanza 3') paragraphing cap Paper 1?",
        back: "It pulls your writing into descriptive summary and prevents cross-referencing structural echoes between the opening and closing — capping Criterion C and weakening Criterion A.",
        level: "SL",
      },
      {
        front: "What separates Band 3 from Band 5 on Criterion A?",
        back: "Band 3 grasps **literal meaning** and surface ideas; Band 5 delivers **insightful interpretation of larger implications, subtleties, and ambiguity** backed by well-chosen evidence.",
        level: "SL",
      },
      {
        front: "What separates Band 3 from Band 5 on Criterion B?",
        back: "Band 3 identifies devices with generic effects ('technique-spotting'); Band 5 **consistently analyses and evaluates** how interlocking authorial choices shape meaning and reader impact.",
        level: "SL",
      },
      {
        front: "Why does Integrated Point-by-Point comparison beat Block-by-Block on Paper 2?",
        back: "Integrated structure puts **both works in active dialogue inside every movement**, sustaining balanced treatment (Crit C) and continuous craft comparison (Crit A & B).",
        level: "SL",
      },
      {
        front: "What makes a Paper 2 closed-book quotation strategy sustainable?",
        back: "Memorising **12–15 short micro-quotations (2–6 words each)** plus exact structural pivots (openings, climaxes, endings) and form-specific craft rather than long speeches.",
        level: "SL",
      },
      {
        front: "When switching at minute 65 from Poetry to Drama on HL Paper 1, what must shift?",
        back: "Shed poetic lineation/metre and immediately activate **performance craft**: stage directions, proxemics, lighting, sound, props, pauses, subtext, and dramatic irony.",
        level: "HL",
      },
      {
        front: "What defines Band 5 on Criterion D (Language)?",
        back: "Language that is **very clear, effective, precise, and accurate**, employing an assured academic register, surgical analytical verbs, and seamlessly embedded micro-quotations.",
        level: "SL",
      },
      {
        front: "Why are Criteria A and B doubled (10 marks each) on Paper 2?",
        back: "Together they represent **66.7% (20/30)** of Paper 2, rewarding deep whole-work understanding, comparative insight (Crit A), and comparative craft evaluation across two works (Crit B).",
        level: "SL",
      },
      {
        front: "How should a Band 5 candidate handle a Paper 2 prompt beginning 'To what extent...'?",
        back: "Resist a binary 'yes/no' answer: evaluate **where and how** the proposition holds, **where the works complicate or resist it**, and why each author's form shifts that balance.",
        level: "SL",
      },
    ],
    mustKnow: [
      "**SL Paper 1:** 1h 15m (75m), 1 of 2 unseen passages (different forms), 20 marks (A5/B5/C5/D5), 35% of grade.",
      "**HL Paper 1:** 2h 15m (135m), BOTH unseen passages (two different forms), 40 marks (2 × 20), 35% of grade — enforce the **65 + 65 + 5 min** hard-stop budget.",
      "**Paper 2 (SL & HL):** 1h 45m (105m), 1 of 4 unseen prompts on 2 studied works, **closed book**, 30 marks (A10/B10/C5/D5), **SL 35% / HL 25%**.",
      "**Non-Overlap Rule:** Never reuse any work from your Individual Oral (2 works) or HL Essay [HL] (1 work) in Paper 2.",
      "**15-Minute Planning Rule:** Spend the first 15 minutes of every Paper 1 essay and Paper 2 essay mapping a conceptual outline before writing a single body paragraph.",
      "**No Chronological Walkthroughs (Paper 1):** Organise around 3–4 conceptual movements that cross-reference the whole passage.",
      "**No Block Essays (Paper 2):** Compare both works side-by-side inside every analytical movement using precision comparative connectives.",
      "**Evaluate Craft, Never Spot Techniques:** Every device named must follow **Evidence → Mechanism → Psychological/Conceptual Effect** (Criterion B).",
      "**Interrogate Prompt Assumptions:** Band 5 Paper 2 essays unpack abstract terms and address nuance, tension, and counter-examples rather than agreeing simplistically.",
      "**Precision Academic Register (Criterion D):** Replace vague verbs ('shows, uses, makes the reader feel') with surgical verbs (*destabilises, ironises, externalises, refracts*).",
    ],
    misconceptions: [
      {
        wrong: "On Paper 1, starting to write at minute 2 gives me more time and a longer, higher-scoring essay.",
        right: "Unplanned essays drift into chronological plot summary and weak Criterion C cohesion. Investing **15 minutes** in active reading and a 3-movement conceptual plan consistently produces tighter, higher-band scripts.",
        level: "SL",
      },
      {
        wrong: "On HL Paper 1, it is smart to spend 85 minutes making Essay 1 spotless and rush Essay 2 in 50 minutes.",
        right: "Both HL passages carry an identical **20 marks**. Overrunning Essay 1 destroys Essay 2's planning window and triggers severe mark losses across Criteria A, B, and C — enforce a hard stop at **minute 65**.",
        level: "HL",
      },
      {
        wrong: "If I mention my favourite Individual Oral novel briefly in Paper 2, examiners won't notice.",
        right: "IB assessment records explicitly log your IO and HL Essay works; violating the **non-overlap rule** breaches IB regulations and jeopardises credit for the duplicated work.",
        level: "SL",
      },
      {
        wrong: "Because Paper 2 is closed book, I cannot score Band 5 on Criterion B unless I memorise long speeches word-for-word.",
        right: "Criterion B rewards **evaluative analysis of authorial choices** — crisp 2–5 word micro-quotations, structural turning points, staging cues, focalisation shifts, and recurring motifs score Band 5 far more reliably than dumped block quotes.",
        level: "SL",
      },
      {
        wrong: "Packing twenty complex rhetorical terms (zeugma, polyptoton, chiasmus) into a paragraph guarantees Band 5 on Criterion B.",
        right: "Examiners penalise empty **technique-spotting**. Three accurately analysed, interlocking choices evaluated for psychological or thematic effect easily outscore twenty unanalysed labels.",
        level: "SL",
      },
      {
        wrong: "On Paper 2, writing three pages on Work 1 followed by three pages on Work 2 counts as a balanced comparative essay.",
        right: "Block-by-block structure forces examiners to hunt for links and caps Criteria A, B, and C. **Integrated point-by-point** comparison weaves both works together inside every body section.",
        level: "SL",
      },
      {
        wrong: "You must treat the two works on Paper 2 as completely identical to prove they answer the prompt.",
        right: "Band 5 Criteria A and B explicitly reward **nuanced divergence within similarity** — especially showing how differing forms, eras, or narrative lenses reshape a shared human concern.",
        level: "SL",
      },
    ],
    examMistakes: [
      "**Chronological commentary on Paper 1:** Opening paragraphs with 'In the first stanza...' or 'Next, in paragraph two...' instead of conceptual claims.",
      "**Ignoring the guiding question's craft anchor:** Discussing only the theme (e.g. 'loneliness') while neglecting the formal aspect named in the guiding question (e.g. 'syntax and spatial imagery').",
      "**HL Essay-2 form carryover:** Analysing an unseen Drama passage like a short story (forgetting lighting, proxemics, props, and pauses) after finishing a Prose passage.",
      "**The 70/30 imbalance on Paper 2:** Writing richly on your favourite studied work while tacking on thin, hurried paragraphs about the second work.",
      "**Plot-summary drift on Paper 2:** Retelling chapters to prove you remember the book instead of evaluating how authorial choices answer the prompt.",
      "**Dropping unembedded quotes:** Inserting standalone quoted sentences ('Quote.' This shows...) rather than weaving 2–5 word micro-quotations smoothly into analytical syntax.",
      "**Generic reader-response filler:** Writing 'this makes the reader feel engaged / emphasises the point' instead of specifying the exact cognitive, ethical, or emotional shift.",
      "**Abrupt non-conclusions:** Running out of time and stopping mid-paragraph — always leave 5–10 minutes to land a cohesive synthesis conclusion.",
    ],
    mnemonics: [
      {
        topic: "Paper 1 Conceptual Planning (15 Min)",
        device: "C-A-M-T (Cold read → Annotate GQ → Map 3 Movements → Thesis)",
        explanation: "4 min Cold read for tension · 5 min Annotate craft clusters for the Guiding Question · 4 min Map 3 non-chronological conceptual movements · 2 min Thesis + topic sentences.",
        level: "SL",
      },
      {
        topic: "HL Paper 1 Pacing Budget",
        device: "65 · 65 · 5 — Stop, Switch, Synthesise",
        explanation: "65 min Essay 1 (hard stop!) → Switch literary form toolkit → 65 min Essay 2 (full 15m plan!) → 5 min final buffer across both scripts.",
        level: "HL",
      },
      {
        topic: "Criterion B Band 5 Analytical Chain",
        device: "C-M-E (Choice → Mechanism → Effect/Implication)",
        explanation: "Never stop at naming a literary **Choice**; explain the **Mechanism** (how the phrasing/structure operates) and evaluate the conceptual **Effect** on meaning and reader perception.",
        level: "SL",
      },
      {
        topic: "Paper 2 Prompt Deconstruction",
        device: "C-A-F-E (Command → Assumptions → Form divergence → Evidence)",
        explanation: "Decode the **Command** term, interrogate hidden **Assumptions**, compare **Form** divergence across both works, and anchor with closed-book micro-**Evidence**.",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Legal & Policy Brief Writing",
        emoji: "⚖️",
        detail: "Appellate lawyers never summarise case files chronologically from page 1 to page 50; like a Band 5 Paper 1 commentary, persuasive briefs organise evidence into 3–4 conceptual arguments that cross-reference key clauses.",
      },
      {
        title: "Comparative Cultural Criticism & Journalism",
        emoji: "📰",
        detail: "Arts critics at outlets such as the *Times Literary Supplement* or *London Review of Books* constantly pair two works across different eras or mediums — exactly mirroring Paper 2's integrated point-by-point comparative synthesis.",
      },
      {
        title: "High-Stakes Timed Decision-Making (65+65+5)",
        emoji: "⏱️",
        detail: "HL Paper 1's hard-stop pacing mirrors real-world triage in medicine, journalism, and consulting: knowing when marginal refinement on Task 1 harms Task 2 is a core executive-function skill.",
      },
      {
        title: "Precision Register & Rhetorical Awareness",
        emoji: "🎙️",
        detail: "Criterion B and D sensitivity — spotting how subtle diction, omission, or framing shifts audience perception — equips readers to evaluate speeches, contracts, and media narratives critically.",
      },
    ],
    videos: [
      {
        title: "IB English A: Literature Paper 1 Guided Analysis — Planning & Structure",
        channel: "IB English Guys",
        url: "https://www.youtube.com/results?search_query=IB+English+Guys+Paper+1+Guided+Literary+Analysis+structure",
      },
      {
        title: "IB English Paper 2 Comparative Essay — Unpacking Prompts & Integrated Comparison",
        channel: "IB English Guys",
        url: "https://www.youtube.com/results?search_query=IB+English+Literature+Paper+2+comparative+essay+tips",
      },
      {
        title: "IB English Criteria A, B, C & D — Moving from Band 3 to Band 5",
        channel: "IB English Literature Revision",
        url: "https://www.youtube.com/results?search_query=IB+English+A+Literature+rubric+criteria+A+B+C+D+level+7",
      },
    ],
    formulas: [
      {
        name: "Paper 1 (SL) Assessment Blueprint",
        formula: "75 min · 1 of 2 passages · 20 marks (A5 + B5 + C5 + D5) · 35% SL",
        note: "Optimal split: 15m plan + 55m write + 5m check.",
        level: "SL",
      },
      {
        name: "Paper 1 (HL) Assessment Blueprint",
        formula: "135 min · BOTH passages (2 forms) · 40 marks (2 × 20) · 35% HL",
        note: "Hard-stop split: 65m Essay 1 + 65m Essay 2 + 5m buffer.",
        level: "HL",
      },
      {
        name: "Paper 2 Assessment Blueprint (SL & HL)",
        formula: "105 min · 1 of 4 prompts · 2 works (closed book) · 30 marks (A10 + B10 + C5 + D5)",
        note: "Weighting: 35% at SL, 25% at HL. Criteria A + B = 66.7% of total.",
        level: "SL",
      },
      {
        name: "Non-Overlap Eligible Works Formula",
        formula: "Eligible_P2 = Total_Studied − 2 (IO) − 1 (HL Essay, HL only)",
        note: "SL min 9 studied → ≥7 eligible; HL min 13 studied → ≥10 eligible.",
        level: "SL",
      },
      {
        name: "Band 5 Paper 1 Thesis Frame",
        formula: "While [surface appearance], [writer] deploys [craft] to reveal [tension/implication]",
        note: "Always anchor directly to the guiding question's technical and conceptual halves.",
        level: "SL",
      },
      {
        name: "Band 5 Topic Sentence Architecture",
        formula: "Conceptual Claim + Authorial Mechanism + Structural/Tonal Shift",
        note: "Replaces chronological openers ('In stanza 2...').",
        level: "SL",
      },
      {
        name: "Criterion B Evaluative Chain",
        formula: "Embedded Micro-Quote (2–5w) → Craft Mechanism → Thematic/Reader Effect",
        note: "Eliminates empty technique-spotting across Paper 1 and Paper 2.",
        level: "SL",
      },
      {
        name: "Paper 2 Integrated Comparative Paragraph",
        formula: "Shared Conceptual Angle → Work 1 Craft → Precision Pivot → Work 2 Divergence → Synthesis",
        note: "Maintains ~50/50 work balance in every body section.",
        level: "SL",
      },
      {
        name: "Paper 2 105-Minute Time Split",
        formula: "15 min (Unpack & Matrix) + 80 min (Integrated Essay) + 10 min (Audit & Polish)",
        note: "Never skip the comparative T-matrix before drafting.",
        level: "SL",
      },
      {
        name: "HL Paper 1 Hard-Stop Checkpoint",
        formula: "E1 Plan: 0–15m · E1 Write: 15–65m | E2 Plan: 65–80m · E2 Write: 80–130m | Check: 130–135m",
        note: "Switch form toolkits completely at minute 65.",
        level: "HL",
      },
    ],
  },
};
