import type { TopicGuide } from "../../types.ts";

const SVG_NON_OVERLAP = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 300" role="img" aria-label="IB HL English A Literature Non-Overlap Work Allocation Map across 13 studied works">
  <rect x="0" y="0" width="720" height="300" rx="16" fill="#fffaf7" stroke="#e2d6cf" stroke-width="1.5"/>
  <text x="360" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#1e293b">HL Non-Overlap Work Allocation Map (Minimum 13 Studied Works)</text>
  <text x="360" y="49" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#475569">Rule: Any work used in the Individual Oral or HL Essay CANNOT be reused in Paper 2</text>

  <rect x="24" y="68" width="206" height="168" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <rect x="24" y="68" width="206" height="32" rx="12" fill="#2563eb"/>
  <text x="127" y="89" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#ffffff">1. Individual Oral (20%)</text>
  <text x="127" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e3a8a">2 Studied Works</text>
  <rect x="42" y="134" width="170" height="28" rx="6" fill="#ffffff" stroke="#93c5fd"/>
  <text x="127" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" fill="#1e293b">1 Original English Work</text>
  <rect x="42" y="170" width="170" height="28" rx="6" fill="#ffffff" stroke="#93c5fd"/>
  <text x="127" y="188" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" fill="#1e293b">1 Work in Translation</text>
  <text x="127" y="220" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">LOCKED — No reuse in HLE / P2</text>

  <rect x="257" y="68" width="206" height="168" rx="12" fill="#fff1f2" stroke="#be123c" stroke-width="2.5"/>
  <rect x="257" y="68" width="206" height="32" rx="12" fill="#be123c"/>
  <text x="360" y="89" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#ffffff">2. HL Essay (20% · HL)</text>
  <text x="360" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#881337">1 Distinct Studied Work</text>
  <rect x="275" y="134" width="170" height="28" rx="6" fill="#ffffff" stroke="#fda4af"/>
  <text x="360" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" fill="#1e293b">English OR Translated</text>
  <rect x="275" y="170" width="170" height="28" rx="6" fill="#ffffff" stroke="#fda4af"/>
  <text x="360" y="188" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" fill="#1e293b">1,200–1,500w · 20 Marks</text>
  <text x="360" y="220" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">LOCKED — No reuse in IO / P2</text>

  <rect x="490" y="68" width="206" height="168" rx="12" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
  <rect x="490" y="68" width="206" height="32" rx="12" fill="#059669"/>
  <text x="593" y="89" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#ffffff">3. Paper 2 Pool (25%)</text>
  <text x="593" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#065f46">10 Remaining Works</text>
  <rect x="508" y="134" width="170" height="28" rx="6" fill="#ffffff" stroke="#6ee7b7"/>
  <text x="593" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" fill="#1e293b">Prepare 3–4 Flexible Works</text>
  <rect x="508" y="170" width="170" height="28" rx="6" fill="#ffffff" stroke="#6ee7b7"/>
  <text x="593" y="188" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" fill="#1e293b">Compare 2 on Exam Day</text>
  <text x="593" y="220" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#047857">ZERO overlap with IO / HLE</text>

  <rect x="24" y="250" width="672" height="34" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="360" y="271" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#334155">Paper 1 (35% · HL) uses 2 UNSEEN passages — so your 13 studied works serve IO (2) + HL Essay (1) + Paper 2 (2 chosen from 10).</text>
</svg>`;

const SVG_CRITICAL_LENSES = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 310" role="img" aria-label="Critical Perspectives Prism showing six theoretical lenses as analytical questions applied to one literary work">
  <rect x="0" y="0" width="720" height="310" rx="16" fill="#fffaf7" stroke="#e2d6cf" stroke-width="1.5"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#1e293b">Critical Lenses as Analytical Questions (Never Jargon Checklists)</text>

  <rect x="24" y="114" width="136" height="84" rx="12" fill="#1e293b"/>
  <text x="92" y="148" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff">Primary Literary</text>
  <text x="92" y="166" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#fda4af">Work</text>
  <text x="92" y="185" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#cbd5e1">Close Reading First</text>

  <polygon points="186,156 238,104 238,208" fill="#be123c" opacity="0.14" stroke="#be123c" stroke-width="2"/>
  <text x="220" y="160" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#881337">Lens</text>
  <line x1="160" y1="156" x2="186" y2="156" stroke="#1e293b" stroke-width="3"/>

  <line x1="238" y1="115" x2="292" y2="66" stroke="#be123c" stroke-width="2"/>
  <line x1="238" y1="130" x2="292" y2="106" stroke="#c2410c" stroke-width="2"/>
  <line x1="238" y1="146" x2="292" y2="146" stroke="#b45309" stroke-width="2"/>
  <line x1="238" y1="164" x2="292" y2="186" stroke="#047857" stroke-width="2"/>
  <line x1="238" y1="180" x2="292" y2="226" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="238" y1="196" x2="292" y2="266" stroke="#6d28d9" stroke-width="2"/>

  <rect x="292" y="48" width="404" height="34" rx="8" fill="#fff1f2" stroke="#fda4af"/>
  <text x="304" y="69" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#9f1239">Feminist:</text>
  <text x="372" y="69" font-family="system-ui, sans-serif" font-size="11.5" fill="#1e293b">How do voice, gaze, and space contest or reinforce gendered power?</text>

  <rect x="292" y="88" width="404" height="34" rx="8" fill="#fff7ed" stroke="#fdba74"/>
  <text x="304" y="109" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#9a3412">Postcolonial:</text>
  <text x="394" y="109" font-family="system-ui, sans-serif" font-size="11.5" fill="#1e293b">How do language, hybridity, and silence critique imperial authority?</text>

  <rect x="292" y="128" width="404" height="34" rx="8" fill="#fefce8" stroke="#fcd34d"/>
  <text x="304" y="149" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#92400e">Marxist:</text>
  <text x="366" y="149" font-family="system-ui, sans-serif" font-size="11.5" fill="#1e293b">How do class ideology, labour, and material objects shape agency?</text>

  <rect x="292" y="168" width="404" height="34" rx="8" fill="#ecfdf5" stroke="#6ee7b7"/>
  <text x="304" y="189" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#065f46">Ecocritical:</text>
  <text x="382" y="189" font-family="system-ui, sans-serif" font-size="11.5" fill="#1e293b">How does form portray non-human nature beyond passive backdrop?</text>

  <rect x="292" y="208" width="404" height="34" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
  <text x="304" y="229" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e40af">Psychoanalytic:</text>
  <text x="405" y="229" font-family="system-ui, sans-serif" font-size="11.5" fill="#1e293b">How do repression, doubling, and slips surface in imagery and syntax?</text>

  <rect x="292" y="248" width="404" height="34" rx="8" fill="#f5f3ff" stroke="#c4b5fd"/>
  <text x="304" y="269" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#5b21b6">Narratological:</text>
  <text x="405" y="269" font-family="system-ui, sans-serif" font-size="11.5" fill="#1e293b">How do focalisation, order, and narrative distance govern truth?</text>
</svg>`;

const SVG_MICRO_MACRO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 290" role="img" aria-label="Micro Close-Reading and Macro Whole-Work Arc Double Helix diagram for sustaining an HL Essay argument">
  <rect x="0" y="0" width="720" height="290" rx="16" fill="#fffaf7" stroke="#e2d6cf" stroke-width="1.5"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#1e293b">The Band 5 HL Essay Architecture: Weaving Micro Craft with Macro Arc</text>

  <path d="M 55 110 C 160 55, 240 165, 360 110 C 480 55, 560 165, 665 110" fill="none" stroke="#be123c" stroke-width="4"/>
  <path d="M 55 170 C 160 225, 240 115, 360 170 C 480 225, 560 115, 665 170" fill="none" stroke="#1d4ed8" stroke-width="4"/>

  <circle cx="110" cy="95" r="7" fill="#be123c"/>
  <circle cx="290" cy="133" r="7" fill="#be123c"/>
  <circle cx="470" cy="95" r="7" fill="#be123c"/>
  <circle cx="620" cy="128" r="7" fill="#be123c"/>

  <circle cx="110" cy="185" r="7" fill="#1d4ed8"/>
  <circle cx="290" cy="147" r="7" fill="#1d4ed8"/>
  <circle cx="470" cy="185" r="7" fill="#1d4ed8"/>
  <circle cx="620" cy="152" r="7" fill="#1d4ed8"/>

  <rect x="44" y="46" width="174" height="36" rx="8" fill="#fff1f2" stroke="#fda4af"/>
  <text x="131" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#9f1239">Micro: Embedded Diction</text>

  <rect x="260" y="46" width="200" height="36" rx="8" fill="#fff1f2" stroke="#fda4af"/>
  <text x="360" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#9f1239">Micro: Syntax, Rhythm, Staging</text>

  <rect x="498" y="46" width="182" height="36" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="589" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#92400e">Counter-Reading Node</text>

  <rect x="44" y="206" width="184" height="36" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
  <text x="136" y="228" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#1e40af">Macro: Opening Premise</text>

  <rect x="262" y="206" width="196" height="36" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
  <text x="360" y="228" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#1e40af">Macro: Structural Turning Point</text>

  <rect x="492" y="206" width="188" height="36" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
  <text x="586" y="228" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#1e40af">Macro: Final Resolution / Arc</text>

  <text x="360" y="271" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#334155">Red strand = Micro close reading (2–8 word quotes)  ·  Blue strand = Macro structural arc across the entire work</text>
</svg>`;

const SVG_WORD_BUDGET = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 275" role="img" aria-label="HL Essay 1,200 to 1,500 Word Budget Blueprint showing recommended word allocation and the 1,500-word examiner stop-reading wall">
  <rect x="0" y="0" width="720" height="275" rx="16" fill="#fffaf7" stroke="#e2d6cf" stroke-width="1.5"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#1e293b">HL Essay Word-Budget Blueprint (Target Sweet Spot: 1,350–1,480 Words)</text>
  <text x="360" y="47" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" fill="#475569">Excluded from count: Essay title, parenthetical citations, and Works Cited / Bibliography</text>

  <rect x="36" y="88" width="648" height="58" rx="8" fill="#f1f5f9" stroke="#cbd5e1"/>

  <rect x="36" y="88" width="58" height="58" rx="6" fill="#334155"/>
  <text x="65" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">Intro</text>
  <text x="65" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#e2e8f0">~150w</text>

  <rect x="96" y="88" width="108" height="58" fill="#be123c"/>
  <text x="150" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">Movement 1</text>
  <text x="150" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#ffe4e6">~280w</text>

  <rect x="206" y="88" width="108" height="58" fill="#e11d48"/>
  <text x="260" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">Movement 2</text>
  <text x="260" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#ffe4e6">~280w</text>

  <rect x="316" y="88" width="108" height="58" fill="#be123c"/>
  <text x="370" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">Movement 3</text>
  <text x="370" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#ffe4e6">~280w</text>

  <rect x="426" y="88" width="100" height="58" fill="#9f1239"/>
  <text x="476" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">Movement 4</text>
  <text x="476" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#ffe4e6">~260w</text>

  <rect x="528" y="88" width="58" height="58" fill="#047857"/>
  <text x="557" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">Concl.</text>
  <text x="557" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#d1fae5">~150w</text>

  <rect x="615" y="88" width="69" height="58" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-dasharray="4 3"/>
  <text x="649" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#b91c1c">STOP</text>
  <text x="649" y="129" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#b91c1c">UNREAD</text>

  <line x1="498" y1="68" x2="498" y2="165" stroke="#0f766e" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="498" y="182" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f766e">1,200w Min</text>

  <line x1="586" y1="68" x2="586" y2="165" stroke="#047857" stroke-width="2"/>
  <text x="586" y="81" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#047857">1,400w Ideal</text>

  <line x1="615" y1="64" x2="615" y2="168" stroke="#dc2626" stroke-width="3"/>
  <text x="615" y="182" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#dc2626">1,500w Hard Wall</text>

  <rect x="36" y="202" width="648" height="54" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
  <text x="360" y="223" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b">~78% of your essay (~1,100w) must be progressive literary analysis across 3–4 conceptual movements.</text>
  <text x="360" y="242" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" fill="#475569">Criteria A (5) + B (5) + C (5) + D (5) = 20 Marks (20% of HL Diploma Grade · External Coursework)</text>
</svg>`;

export const guide: TopicGuide = {
  id: "8-hl-essay-criticism",
  title: "The HL Essay & Critical Inquiry (HL Only)",
  strand: "Exam & HL Essay Craft",
  icon: "🎓",
  level: "HL",
  summary:
    "Master the externally assessed IB HL Essay (20% of HL grade, 1,200–1,500 words, 20 marks): protect the strict non-overlap rule, sharpen an original literary line of inquiry, deploy critical lenses cleanly, weave micro craft with whole-work structure, and hit Band 5 across Criteria A–D.",
  intro:
    "Unlike Paper 1 and Paper 2, the **HL Essay** gives you time, redrafting room, and intellectual independence to write a sustained, publication-grade piece of literary criticism on **one studied work** of your choice. Yet that freedom is a double-edged sword: examiners do not reward sprawling thematic reports, jargon-heavy theory essays, or disguised Extended Essays. At **1,200–1,500 words** (worth **20% of your HL grade** and marked out of **20 marks: A5 / B5 / C5 / D5**), every single paragraph must pull its weight inside a razor-sharp **literary line of inquiry**. Remember our **Strict Non-Prescriptive Text Policy**: zero set texts are assumed here — every illustrative work is marked `[Example text — not a set text]` so you can transfer every method straight onto your own 13-work HL Learner Portfolio.",
  guide: [
    {
      id: "hl-essay-line-of-inquiry",
      heading: "Designing an Original HL Essay Line of Inquiry (1,200–1,500 Words)",
      level: "HL",
      discovery: {
        problem:
          "Compare two HL Essay working titles drafted for the same modern novel:\n- **Draft A:** *The Theme of Isolation in the Novel*\n- **Draft B:** *How does shifting free indirect discourse represent domestic isolation as both a protective sanctuary and a mechanism of self-delusion across the novel?*\n\nBoth essays analyse the exact same text. Why does Draft A almost invariably stall in Band 2–3 on Criteria A, B, and C, whereas Draft B sets up a Band 5 trajectory before paragraph one is even written?",
        idea: "Draft A names a **static noun** ('isolation'), inviting a descriptive list of lonely moments (plot summary). Draft B builds a **dynamic literary inquiry**: it anchors to a Course Concept (*Representation*), pins down an **authorial choice** (*shifting free indirect discourse*), and frames a **productive tension** (*protective sanctuary vs self-delusion*) that forces the essay to argue rather than merely list.",
      },
      body: `### 1. First Gate: Protect the Strict Non-Overlap Work Rule
Before falling in love with an essay idea, open your **Learner Portfolio** and partition your minimum **13 HL studied works** into three airtight buckets:
- **Individual Oral (IA, 20% HL):** 2 works (1 originally written in English + 1 work in translation).
- **HL Essay (External Coursework, 20% HL):** **1 distinct studied work** (it may be originally written in English OR a work in translation — either is completely permitted!).
- **Paper 2 Comparative Essay (25% HL):** 2 distinct works selected on exam day from your remaining pool (ideally prepare 3–4 versatile works).

**Non-negotiable IB regulation:** A work chosen for your HL Essay **CANNOT** be used in your Individual Oral and **CANNOT** be used in Paper 2. Reusing a work violates assessment rules and puts your marks at serious risk.

What if your chosen work is a **collection of shorter texts** (e.g. a volume of poetry, a short-story cycle, or a collection of literary essays by one author)? You must treat the collection as **one studied work** by selecting a **focused, cohesive cluster** — typically **2–4 poems** or **2–3 short stories/essays** — that allows dense micro close-reading while demonstrating awareness of the collection's wider architecture. Trying to cover 12 poems in 1,400 words guarantees superficiality!

### 2. Using the 7 Central IB Concepts as Engines of Inquiry
The IB Language A: Literature Guide explicitly recommends developing your line of inquiry from one of the **7 Central Concepts**:
- **Identity** · **Culture** · **Creativity** · **Communication** · **Perspective** · **Transformation** · **Representation**

A concept is **not** a decorative sticker to paste into your title (*"Identity in X"*). It is a **verb-driven diagnostic lens**:
- Instead of *Communication*, ask: *How do strategic silences, ellipses, and interrupted dialogue destabilise the illusion of transparent communication?*
- Instead of *Transformation*, ask: *To what extent does circular structural framing ironise the protagonist's apparent moral transformation?*

### 3. The 4-Stage Line-of-Inquiry Narrowing Funnel
Every Band 5 HL Essay question passes four progressive filters:
1. **Broad Topic** (too vague): *Gender roles in drama.*
2. **Conceptual Anchor** (connects to the 7 Concepts): *How is female **identity** negotiated within domestic space?*
3. **Authorial / Formal Mechanism** (guarantees Criterion B literary focus): *How do stage directions, thresholds, and domestic props construct female **identity**?*
4. **Arguable Interpretive Tension** (guarantees Criterion A insight & Criterion C progression): *How do claustrophobic domestic props and threshold stage directions expose the fragile boundary between dutiful performance and psychological rebellion in [Work]?*

Notice why the **final question cannot be answered with 'yes' or 'no'**, nor by sociological commentary detached from the text: answering it *compels* close analysis of literary form across the whole work.`,
      diagram: SVG_NON_OVERLAP,
      diagramCaption:
        "Partitioning your 13 HL studied works early prevents non-overlap collisions between the Individual Oral, HL Essay, and Paper 2.",
      workedExamples: [
        {
          title: "Sharpening a Vague Drama Topic into a Band 5 Line of Inquiry",
          problem:
            "A student wants to write their HL Essay on Henrik Ibsen's *A Doll's House* [Example text — not a set text] with the working title: *Money and Power in A Doll's House*. Diagnose why this fails Band 5 criteria and redraft it into a sharp, arguable literary line of inquiry anchored to one of the 7 Concepts.",
          steps: [
            "1. **Diagnose the flaws:** 'Money and Power' is a broad sociological topic rather than a literary line of inquiry. It names zero authorial/dramatic choices (risking plot summary on Criterion A and thin craft analysis on Criterion B) and proposes no interpretive tension.",
            "2. **Choose a Conceptual Anchor:** Select **Communication** or **Representation** — specifically how financial transactions become a coded language of domestic control.",
            "3. **Pinpoint Form-Specific Craft:** Because the work is a realist play, foreground theatrical choices: recurring symbolic props (coins, macaroons, promissory notes), transactional diction, and stage proxemics.",
            "4. **Introduce Productive Tension:** Contrast Nora's outward performance of childlike dependence with her covert financial agency, tracing how that tension fractures by Act III.",
          ],
          answer:
            "**Band 5 Line of Inquiry:** *How does Ibsen deploy transactional diction and domestic stage props to represent financial dependence as both a tool of patriarchal infantilisation and a catalyst for Nora's self-awakening in A Doll's House* [Example text — not a set text]?",
        },
        {
          title: "Scoping a Poetry Collection Cohesively",
          problem:
            "A student studies Wisława Szymborska's translated poetry collection *View with a Grain of Sand* [Example text — not a set text] and plans to analyse **11 different poems** in a 1,400-word HL Essay on *Perspective*. Calculate the average words per poem if 300 words go to intro/conclusion, and redraft the scope for Band 5 depth.",
          steps: [
            "1. **Check the word maths:** Removing ~300 words (150w intro + 150w conclusion) leaves ~1,100 body words. Dividing 1,100 words across 11 poems yields just **100 words per poem** — barely three sentences! That makes micro close-reading of diction, lineation, and tone impossible.",
            "2. **Narrow to a cohesive cluster:** Select **3 thematically linked poems** that chart a clear progression (e.g. non-human objecthood → historical detachment → domestic mortality) while gesturing briefly to the wider collection's philosophical arc.",
            "3. **Recalculate depth:** 1,100 body words across 3 poems allows ~365 words per analytical movement — ample space for embedded phrasing, rhythmic analysis, and counter-readings.",
          ],
          answer:
            "Reduce the focus from 11 poems to a cohesive cluster of **3 poems** (~365 body words each) united by a single conceptual line of inquiry on ironic estrangement and *Perspective*.",
          yourTurn: {
            question:
              "An HL student has studied 13 works. They commit 2 works to their Individual Oral and 1 distinct work to their HL Essay. Under the strict IB non-overlap rule, how many studied works remain legally eligible for their Paper 2 pool? (Enter a whole number.)",
            answer: { type: "number", value: 10 },
            solution:
              "Subtract the 2 IO works and 1 HL Essay work from the 13 studied works: 13 − 2 − 1 = 10 eligible works remaining for Paper 2.",
          },
        },
      ],
      keyPoints: [
        "The HL Essay is an **externally assessed** 1,200–1,500 word formal literary essay on **ONE** studied work (English or translated), worth **20% of your HL grade (20 marks)**.",
        "Strict **non-overlap rule**: the work selected for your HL Essay may NEVER be reused in your Individual Oral or Paper 2.",
        "If choosing a collection of poems, essays, or short stories by one author, focus deeply on a **cohesive subset (2–4 texts)** rather than skimming the entire volume.",
        "A Band 5 line of inquiry fuses **Concept + Authorial/Formal Craft + Arguable Tension** — never a static theme or yes/no question.",
      ],
      whyItWorks:
        "Examiners mark Criteria A, B, and C holistically against the quality of your central inquiry. When your question embeds a literary mechanism and a conceptual tension, every paragraph automatically moves from *how* the writer constructs meaning to *why* that construction unsettles simple readings.",
      strategies: [
        "Run the **'Delete the Author' Test**: if your essay question could be answered in a History or Sociology class without quoting the text's language or form, rewrite it immediately to foreground authorial craft.",
        "Test your title for **evolution**: can you identify 3–4 distinct progressive stages of argument (not three repetitive examples of the same point)?",
        "Harvest promising tensions directly from your **Learner Portfolio** entries — authentic curiosity produces far richer insight than recycled online prompts.",
      ],
      thinkDeeper:
        "Can an HL Essay challenge a work's own surface ideology — for example, examining where a writer's stylistic choices unintentionally undermine the narrator's stated moral stance? Yes! That tension between *explicit claim* and *formal subtext* is often the hallmark of 5/5 Criterion A interpretation.",
    },
    {
      id: "critical-theoretical-lenses",
      heading: "Using Critical & Theoretical Perspectives Without Jargon Overload",
      level: "HL",
      discovery: {
        problem:
          "Read two openings to an HL Essay body paragraph analysing a nineteenth-century novel:\n- **Draft 1:** *According to Marxist theorist Louis Althusser's theory of Ideological State Apparatuses and Gramsci's cultural hegemony, the bourgeoisie interpellate the protagonist into false consciousness.*\n- **Draft 2:** *Through a relentless semantic field of ledgers, debts, and appraisal, the narrator exposes how marriage operates less as an affective bond than as a market transaction that commodifies the heroine's autonomy.*\n\nBoth paragraphs engage a materialist/Marxist perspective. Why does Draft 2 earn Band 5 on Criteria B and D while Draft 1 drops to Band 2–3?",
        idea: "Draft 1 suffers from **jargon-dumping**: it recites abstract theoretical labels *instead of* reading the literary text, sacrificing both Criterion B (authorial choices) and Criterion D (clear, precise register). Draft 2 turns the critical lens into a **precision close-reading tool** — illuminating how specific diction (*ledgers, debts, appraisal*) dramatises commodification.",
      },
      body: `### 1. The Golden IB Rule on Literary Theory & Secondary Sources
Let's clear up the single biggest HL Essay myth: **secondary literary criticism and named theorists are NOT required to score 20/20.** The HL Essay is a formal literary essay grounded in *your* close analysis of a primary work — **not** an Extended Essay (EE) literature review.

That said, optional **critical and theoretical perspectives** can supercharge your insight when used like optical lenses: you look *through* a lens to see textual details more sharply — you do not spend 400 words describing the glass!

### 2. Six High-Value Critical Perspectives (Framed as Questions)
| Perspective | Core Analytical Question to Ask the Text | Authorial Choices to Track |
|---|---|---|
| **Feminist / Gender** | How does the text construct, police, or subvert gendered identity, agency, and voice? | Focalisation & gaze, silencing/interruption, domestic vs public space, bodily imagery |
| **Postcolonial** | How does the work expose imperial hierarchies, cultural hybridity, displacement, or counter-narratives? | Code-switching, untranslated idioms, landscape naming, narrative authority vs marginal voices |
| **Marxist / Materialist** | How do economic structures, class boundaries, labour, and commodification shape character consciousness? | Financial metaphors, spatial segregation (upstairs/downstairs), symbolic possessions, class register |
| **Psychoanalytic** | How do repression, trauma, desire, doubling, or the uncanny rupture conscious control? | Dreams & motifs, fragmented syntax, unreliable omissions, foil/doppelgänger figures |
| **Ecocritical** | How does the work challenge anthropocentric dominance or represent human–environment entanglement? | Pathetic fallacy vs non-human agency, pastoral subversion, sensory landscapes, decay/growth imagery |
| **Narratological / Formalist** | How does the architecture of telling — order, distance, voice, frame — manipulate truth and reader alignment? | Free indirect discourse, analepsis/prolepsis, embedded frames, metalepsis, structural irony |

### 3. Avoiding the 'Cookie-Cutter' Trap
Weak essays force a literary work into a pre-decided theoretical verdict (*"This play proves patriarchy is bad"*). Band 5 essays stay **responsive to textual friction**:
- Ask where the text *resists* a single theoretical reading. For instance, a feminist reading might note both a protagonist's defiance *and* the troubling ways the ending still constrains her agency.
- If you cite a literary critic (completely optional!), keep secondary quotations brief (under 15–20 words) and **dialogue with them** — extend, qualify, or push back against the critic using fresh textual evidence from the primary work. Never use a critic as a substitute for your own thinking.`,
      diagram: SVG_CRITICAL_LENSES,
      diagramCaption:
        "Every critical perspective works best as a focused analytical question that directs your eye to concrete literary choices.",
      workedExamples: [
        {
          title: "Blending Postcolonial & Narratological Questions Cleanly",
          problem:
            "Show how an HL student could use a postcolonial and narratological perspective to analyse Jean Rhys's *Wide Sargasso Sea* [Example text — not a set text] without drowning the prose in theoretical jargon.",
          steps: [
            "1. **Formulate the inquiry question (no buzzword stack):** *How does the structural shift in first-person narration expose the colonial erasure of Antoinette's voice and cultural identity?*",
            "2. **Anchor to concrete craft:** Contrast Antoinette's sensory, fluid associative syntax in Part One with Rochester's clipped, renaming, cartographic control in Part Two.",
            "3. **Deploy theoretical vocabulary sparingly and precisely:** Use one crisp concept (*epistemic violence* or *cultural hybridity*) ONLY after demonstrating the textual mechanism (his unilateral renaming of 'Antoinette' to 'Bertha').",
            "4. **Evaluate reader effect:** Explain how forcing the reader to inhabit Rochester's claustrophobic focalisation creates uncomfortable complicity before Antoinette's final corridor voice reclaims fractured agency.",
          ],
          answer:
            "By tracking the syntactic contrast between Antoinette's lush sensory clauses and Rochester's clipped acts of renaming, the essay reveals how narrative structure itself enacts colonial dispossession — turning postcolonial insight directly into Criterion B formal analysis.",
        },
        {
          title: "Rescuing a Jargon-Heavy Psychoanalytic Paragraph",
          problem:
            "A draft paragraph reads: *Freud's concepts of the id, ego, superego, and uncanny repression explain why the narrator sees ghosts everywhere, proving he has a trauma complex.* Rewrite the analytical focus so it earns Band 5 on Criteria B and D.",
          steps: [
            "1. **Identify the diagnostic flaw:** The draft diagnoses a fictional character like a real clinical patient ('has a trauma complex') and name-drops four Freudian terms without analysing a single word of the author's prose.",
            "2. **Shift from 'diagnosing a person' to 'analysing a text':** Ask *how* linguistic choices construct psychological fracture — e.g. recursive syntax, sudden parenthetical self-corrections, or domestic spaces turning unfamiliar.",
            "3. **Keep at most one sharp term:** Retain *the uncanny* (familiar home rendered alien) only if tied tightly to specific textual imagery.",
          ],
          answer:
            "**Upgraded focus:** *Rather than presenting haunting as mere external spectacle, the writer deploys recursive syntax and abruptly interrupted clauses so that domestic familiarity curdles into the uncanny, signalling grief that the narrator's rational register refuses to name.*",
          yourTurn: {
            question:
              "Which critical perspective primarily asks how focalisation, temporal order (analepsis/prolepsis), and narrative distance shape reader alignment and truth-claims? (Type one word.)",
            answer: {
              type: "text",
              accept: ["narratological", "narratology", "formalist", "structuralist"],
              display: "Narratological",
            },
            solution:
              "A narratological (or narratology) perspective examines narrative architecture — specifically focalisation, temporal order, framing, and psychic distance.",
          },
        },
      ],
      keyPoints: [
        "Secondary critics and named theorists are **optional** in the HL Essay — never mandatory for Band 5.",
        "Use critical lenses (feminist, postcolonial, Marxist, psychoanalytic, ecocritical, narratological) as **probing analytical questions**, not checklists or vocabulary showcases.",
        "Characters are **linguistic constructs**, not living clinical patients — analyse how authorial craft creates psychological or ideological effects.",
        "Whenever you include a secondary critic's view, treat it as a springboard to **extend, qualify, or contest** using your own primary close reading.",
      ],
      whyItWorks:
        "Examiners reward authentic critical voice over ventriloquised theory. Translating a lens into plain, razor-sharp literary questions ensures that 90%+ of your word budget stays focused on the primary work's artistry — maximising both Criterion A (personal insight) and Criterion B (authorial craft).",
      strategies: [
        "Apply the **'One-Sentence Plain English' Rule**: if you cannot explain a theoretical term in one crisp sentence tied to a specific quotation, delete the jargon and keep the insight.",
        "Pair a **ideological lens** (e.g. postcolonial or feminist) with a **formal lens** (narratological or poetic form) so your claims always stay rooted in *how* the work is built.",
        "Cap any quoted secondary criticism at **under 5% of your essay's word count** so your own analytical voice dominates.",
      ],
      thinkDeeper:
        "Why can applying *two* slightly conflicting lenses (e.g. an ecocritical reading alongside a Marxist reading of industrial landscape) elevate an HL Essay? Because friction between perspectives prevents reductive conclusions and highlights the literary work's layered ambiguity.",
    },
    {
      id: "evidence-argument-integration",
      heading: "Sustaining a Formal Line of Argument Across a Whole Work",
      level: "HL",
      discovery: {
        problem:
          "An HL Essay on a 300-page novel produces dazzling close reading of two passages from Chapter 1 and Chapter 2, dissecting every syllable, metaphor, and pause — yet never mentions the novel's turning point or ending. What band cap does this essay hit on Criterion A (Knowledge, Understanding & Interpretation) and Criterion C (Focus, Organisation & Development), and why?",
        idea: "Even exquisite micro close-reading stalls around **Band 3** if it ignores the **whole-work trajectory**. Criterion A specifically demands perceptive understanding of *the work as a whole*, and Criterion C rewards a *developing* line of inquiry. Band 5 essays braid **micro textual craft** with **macro structural evolution** from opening premise through turning point to resolution.",
      },
      body: `### 1. The Micro–Macro Double Helix
A 1,200–1,500 word HL Essay must zoom smoothly between two focal lengths in every body movement:
- **Micro Close-Reading (Zoom In):** Seamlessly embedded **2–8 word quotations** unpacked at the level of diction, connotations, syntax, acoustic rhythm, stage direction, or focalisation. Avoid bulky 4-line block quotes — a single 50-word block quote devours 3.5% of your entire word limit!
- **Macro Whole-Work Awareness (Zoom Out):** Showing how that micro moment participates in a **structural pattern across the entire work** — echoing an opening motif, inverting an earlier scene, foreshadowing the climax, or complicating the resolution.

### 2. Weaving Quotations Grammatically (Zero 'Dropped Quotes')
Never drop a standalone quotation between sentences like a loose brick. Synthesise short quoted phrases directly into your own analytical syntax:
- **Weak (Dropped + Bloated):** *The narrator feels alienated. "I stood at the frosted pane watching the lantern-light fracture across the yard, knowing no voice inside would summon me back." This shows he is lonely.* (35 words, zero craft analysis!)
- **Band 5 (Embedded + Evaluative):** *Positioned behind the "frosted pane," the narrator registers belonging only as light that can "fracture," his syntax quietly conceding that "no voice inside" will reclaim him — turning domestic glass into a visual barrier of self-exile.* (39 words, dissecting metaphor, verb choice, and spatial barrier!)

### 3. Handling Counter-Interpretations & Productive Ambiguity
One of the fastest signals of a **5/5 Criterion A** thinker is deliberate engagement with a plausible **counter-interpretation** or interpretive tension:
- **Acknowledge the surface/alternative reading fairly:** *On an initial reading, the final act's reconciliation appears to restore social harmony...*
- **Pivot with concrete textual friction:** *...yet the abrupt return of the clipped stichomythia and the unextinguished stage lamp undercut that closure, suggesting compliance rather than genuine forgiveness.*
- Notice you do **not** contradict your own thesis! Instead, you **refine and deepen** it, proving you have tested your argument against the work's slipperiest evidence.

### 4. Formal Citation Hygiene & IB Academic Integrity
Because the HL Essay is externally moderated formal coursework, sloppy referencing undermines both **Criterion D** and **Academic Integrity**:
- **Choose ONE consistent citation system** (most IB schools prefer **MLA 9th edition**) and apply it uniformly from page 1 to the Works Cited list.
- **In-text parenthetical citations:**
  - *Prose / Non-fiction:* author surname and page number, e.g. \`(Shelley 114)\` — or \`(114)\` once the single primary author is unmistakably established, per MLA guidelines.
  - *Drama:* act, scene, and line numbers where available, e.g. \`(3.2.45–48)\` or page number for modern prose plays without lineation.
  - *Poetry:* line numbers, e.g. \`(lines 14–16)\` or \`(14–16)\`, using a forward slash \` / \` to preserve line breaks in short quoted phrases.
- **Works Cited / Bibliography:** Always cite the **exact edition (and translator, for works in translation!)** you read, plus every optional secondary source consulted. Never copy uncredited phrasing, paraphrase a critic without attribution, or allow AI tools to draft or rewrite prose — your Learner Portfolio notes serve as your authentic intellectual trail.`,
      diagram: SVG_MICRO_MACRO,
      diagramCaption:
        "High-scoring HL Essays intertwine micro stylistic evidence with macro whole-work trajectory and at least one nuanced counter-reading node.",
      workedExamples: [
        {
          title: "Integrating Micro-Evidence, Macro Arc & Counter-Reading",
          problem:
            "Draft a concise analytical sequence on Mary Shelley's *Frankenstein* [Example text — not a set text] exploring how the frame narrative complicates *Perspective* — combining embedded micro-evidence, macro structural awareness, and a counter-interpretation.",
          steps: [
            "1. **Establish the macro frame:** Point out that the Creature's testimony sits trapped at the innermost core of nested narratives filtered through Victor and Walton.",
            "2. **Embed micro-evidence:** Highlight the Creature's sudden command of eloquent, Miltonic rhetoric (e.g. invoking 'benevolent' justice) in contrast to Victor's febrile exclamations.",
            "3. **Introduce a fair counter-reading:** Acknowledge that critics might view this elevated rhetoric as empowering the marginalised voice directly.",
            "4. **Synthesise with formal friction:** Show how Walton's editorial framing and Victor's dying admonition re-enclose that speech, leaving the reader unable to access the Creature unmediated — deepening the tragedy of *Perspective*.",
          ],
          answer:
            "**Model Synthesis:** *While the Creature's central testimony momentarily commands an eloquent, reasoned cadence that challenges Victor's self-justifying panic, Shelley's concentric epistolary architecture ensures that even this eloquent appeal reaches us solely via Walton's transcribed letters. Although a sympathetic reading celebrates this structural centrepiece as a triumph of marginalised voice, its outer framing simultaneously dramatises how institutional language can absorb and contain dissent before it ever reaches the public realm.*",
        },
        {
          title: "Fixing Citation Hygiene for a Translated Poetry Extract",
          problem:
            "A student writes an HL Essay on a translated poem and embeds: `In line 4 the speaker says \"the stone stays shut.\" (page 12)` and omits the translator from the Works Cited list. Identify and fix ALL three citation/craft flaws.",
          steps: [
            "1. **Check poetry citation convention:** Poems with numbered lines should cite **line numbers** (e.g. `(line 4)` or `(4)`), not page numbers, unless unnumbered prose poetry.",
            "2. **Fix punctuation & mechanical lead-in:** Avoid clunky `'In line 4 the speaker says'`; weave the quoted phrase syntactically and place the final full stop **after** the parenthetical citation in MLA: `...insists that \"the stone stays shut\" (4).`",
            "3. **Credit the translator:** For any **work in translation**, MLA requires naming the translator in the Works Cited entry (e.g. `Translated by [Translator Name]`), honouring translation as an interpretive literary act.",
          ],
          answer:
            "Weave the phrase seamlessly (`...where \"the stone stays shut\" (4).`), cite line numbers rather than page numbers, place sentence-ending punctuation after the parenthesis, and credit the translator explicitly in the Works Cited entry.",
          yourTurn: {
            question:
              "When quoting two adjacent lines of poetry inline inside an HL Essay sentence under MLA style, what single keyboard punctuation character separates the first line from the second? (Type the symbol or its name.)",
            answer: {
              type: "text",
              accept: ["/", "slash", "forward slash", "virgule", "solidus"],
              display: "/ (forward slash)",
            },
            solution:
              "Use a forward slash with spaces on either side (` / `) to mark a poetic line break inside inline prose quotations (and ` // ` for a stanza break).",
          },
        },
      ],
      keyPoints: [
        "Pair **micro close-reading** (2–8 word embedded quotations unpacked for craft) with **macro structural awareness** (evolution from opening to turning point to resolution).",
        "Eliminate bulky block quotes and 'dropped quotes': blend short textual phrases smoothly into your analytical grammar.",
        "Engaging a fair **counter-interpretation** or textual ambiguity — then refining your argument through craft evidence — unlocks Band 5 on Criterion A & B.",
        "Maintain **100% consistent citation hygiene** (MLA or school-approved style), always naming the exact edition and **translator** for translated works.",
      ],
      whyItWorks:
        "Treating a literary work as a dynamic structure across time rather than a bag of isolated quotes proves genuine scholarly mastery. When examiners see short embedded quotations, structural cross-references, and a tested counter-reading, Criteria A, B, C, and D reinforce one another simultaneously.",
      strategies: [
        "Run the **'Highlighter Audit'** on your draft: highlight micro close-reading in pink and macro structural cross-references in blue. Every body movement should display both colours!",
        "Keep 90%+ of your quotations under **10 words**, unpacking individual verbs, adjectives, punctuation marks, or rhythmic fractures rather than quoting whole sentences.",
        "Build a live **Works Cited draft from Day 1** inside your Learner Portfolio so you never scramble to locate edition pages or translator credits at submission.",
      ],
      thinkDeeper:
        "Why is citing the **translator** not just a clerical MLA rule, but an analytical opportunity? When writing on a translated work, noting a translator's register, rhythmic choice, or cultural footnote (without claiming fluency you lack) signals mature awareness of AoE 2 (*Time & Space*) and *Communication*.",
    },
    {
      id: "hl-essay-drafting-rubric",
      heading: "Word-Budgeting, Redrafting & Hitting Band 5 on Criteria A–D (20 Marks)",
      level: "HL",
      discovery: {
        problem:
          "A talented HL candidate submits a **1,690-word** HL Essay packed with nuanced commentary. Their strongest structural synthesis and final answer to the line of inquiry sit in the last 190 words. How do IB examiners handle the excess words, and which criteria take an immediate hit?",
        idea: "IB examiners are strictly instructed to **stop reading at 1,500 words**! Every brilliant insight past word 1,500 is treated as if it were never written — leaving the essay abruptly truncated with **no conclusion**, directly damaging **Criterion C (Focus, Organisation & Development)** and robbing **Criteria A and B** of your culminating evaluation.",
      },
      body: `### 1. Strict Word-Count Regulations (1,200–1,500 Words)
Know the exact accounting rules before your final check:
- **Permitted window:** **1,200 to 1,500 words**.
- **Band 5 Sweet Spot:** **1,350 to 1,480 words** — dense enough to sustain deep literary inquiry, yet safely beneath the 1,500-word cliff edge (allowing for tiny word-processor counting variations!).
- **INCLUDED in the word count:** Introduction, all body paragraphs, conclusion, and **all primary/secondary quotations** inside your prose.
- **EXCLUDED from the word count:** Essay title, in-text parenthetical citations (e.g. \`(Shelley 114)\`), footnotes used purely for bibliographic citation, and the Works Cited / Bibliography page.
- **Under-length risk (<1,200 words):** While there is no automatic zero, essays under 1,200 words almost always lack the sustained development needed for Band 4–5 on Criteria A, B, and C.

### 2. The High-Scoring Word Budget Blueprint (~1,400 Words)
- **Conceptual Introduction (~150 words | ~11%):** Hook directly into the literary tension (NO sweeping *"Since the dawn of time..."* openings!), name author, work, and conceptual anchor, and land on a **clear, arguable thesis** answering your line of inquiry.
- **3–4 Progressive Body Movements (~1,100 words total | ~78%):**
  - *Movement 1 (~280w):* Establish the foundational textual pattern / opening premise via micro craft.
  - *Movement 2 (~280w):* Show how authorial choices *intensify, shift, or complicate* that pattern at the work's midpoint/turning point.
  - *Movement 3 (~280w):* Confront a **counter-reading**, structural rupture, or ideological tension.
  - *Movement 4 (~260w):* Trace how the climax/ending transforms or refuses easy closure (alternatively, 3 deeper movements of ~365w each work brilliantly for focused poetry/drama inquiries!).
- **Reflective Synthesis Conclusion (~150 words | ~11%):** Do NOT repeat your topic sentences verbatim! Synthesise how your movements evolved the thesis and zoom out briefly to the wider literary/human implication of the work's artistry.

### 3. Decoding the 20-Mark Rubric: Band 3 vs Band 5 Separators
| Criterion (Max 5) | Band 3 (Satisfactory / Competent) | Band 5 (Perceptive / Persuasive) |
|---|---|---|
| **A: Knowledge, Understanding & Interpretation (5m)** | Accurate literal understanding; relevant textual references, but occasional plot summary or predictable conclusions. | **Perceptive, persuasive** interpretation across the whole work; explores subtle **implications, ambiguity**, and nuanced conclusions. |
| **B: Analysis & Evaluation (5m)** | Identifies literary features accurately, yet analysis stays partly descriptive ('technique-spotting') rather than evaluative. | **Consistently insightful evaluation** of *how* a rich range of authorial choices (diction, form, structure) construct complex meaning. |
| **C: Focus, Organisation & Development (5m)** | Clear general focus and readable paragraphing, though transitions feel mechanical or argument repeats rather than progresses. | **Tightly focused, cohesive, progressive** architecture; every movement advances the line of inquiry seamlessly within 1,200–1,500w. |
| **D: Language (5m)** | Clear, mostly accurate prose, but repetitive verbs ('shows', 'uses'), clunky quote integration, or occasional informal phrasing. | **Concise, varied, precise academic register**; apt literary terminology used effortlessly; seamless quotation & citation polish. |

### 4. The 3-Pass Redrafting Protocol & IB Teacher Feedback Rule
Under IB rules, your teacher may give **general, holistic written/oral feedback on ONE complete draft** (never line-editing or rewriting your prose). Make every draft count:
1. **Pass 1 (Architecture Audit):** Read ONLY your thesis and the first sentence of each body paragraph. Do they tell a *progressive story of an argument* rather than listing parallel examples?
2. **Pass 2 (Craft & Verb Upgrade):** Hunt down weak verbs (*uses, shows, highlights, emphasizes*) and replace them with precise analytical verbs (*destabilises, fractures, ironises, encodes, naturalises, undercuts, foregrounds*). Delete every sentence that merely retells plot!
3. **Pass 3 (Precision Trim & Citation Check):** Tighten wordy phrases (*"in order to" → "to"*, *"the fact that" → delete*, *"it can be seen that" → delete*) to land cleanly in **1,350–1,480 words**, verify zero overlap with IO/Paper 2, and double-check every citation.`,
      diagram: SVG_WORD_BUDGET,
      diagramCaption:
        "Allocating ~78% of your word count to 3–4 progressive body movements keeps you inside the 1,350–1,480w Band 5 sweet spot and safely clear of the 1,500w stop-reading wall.",
      workedExamples: [
        {
          title: "Trimming a Bloated 1,620-Word Draft Without Losing Insight",
          problem:
            "A student's first complete draft stands at **1,620 counted words** (Introduction: 245w, Plot-Summary Context Paragraph: 165w, 3 Analytical Movements: 1,020w, Conclusion: 190w). Design a surgical cut plan to reach the Band 5 sweet spot (~1,400 words) while actually *raising* Criteria B, C, and D.",
          steps: [
            "1. **Cut the standalone plot-summary paragraph (−165w):** Examiners already know the plot (or expect context woven concisely into claims). Eliminating this immediately drops the essay to **1,455 words** AND removes a Criterion A/C drag.",
            "2. **Tighten the Introduction (−85w → 160w):** Remove biographical fluff and funnel directly from conceptual tension into the thesis. Running total: **1,370 words**.",
            "3. **Sharpen the Conclusion (−35w → 155w) and reinvest +65w into Movement 3's counter-reading:** Final counted length: **1,400 words** — squarely in the 1,350–1,480w sweet spot with higher analytical density!",
          ],
          answer:
            "Delete the 165w plot-summary paragraph, tighten the intro (−85w) and conclusion (−35w), and reinvest +65w into deeper craft analysis — transforming a penalised 1,620w draft into a lean, Band 5 **1,400-word** essay.",
        },
        {
          title: "Upgrading a Band 3 Paragraph to Band 5 Across Criteria A–D",
          problem:
            "Evaluate this 62-word draft sentence pair on Franz Kafka's *The Metamorphosis* [Example text — not a set text] and upgrade it to Band 5:\n*\"Kafka uses dark imagery and short sentences to show that Gregor's family does not care about him anymore. For example, his father throws apples at him and Gregor is hurt, which emphasizes the theme of alienation in the novella.\"*",
          steps: [
            "1. **Diagnose Criterion B & D weaknesses:** 'uses dark imagery' and 'to show' are classic technique-spotting + weak verbs; 'his father throws apples at him and Gregor is hurt' is pure plot summary; 'emphasizes the theme of alienation' states a generic theme rather than evaluating an authorial mechanism.",
            "2. **Anchor to specific craft & implication:** Focus on the grotesque literalisation of domestic violence — the ordinary fruit ('apple') becoming an embedded physical wound that festers inside Gregor's body, mirroring how bourgeois domesticity converts filial duty into bodily erasure.",
            "3. **Upgrade register & conciseness:** Embed crisp micro-evidence, replace generic verbs with precision analytical verbs (*literalises, weaponises, registers*), and connect micro detail to the novella's macro arc of commodification.",
          ],
          answer:
            "**Band 5 Upgrade:** *By weaponising an ordinary domestic \"apple\" that lodges and festers in Gregor's back, Kafka literalises bourgeois resentment as permanent bodily corruption; the narrator's eerily clinical detachment during the assault strips away tragic pathos, signalling that once Gregor's labour ceases, the family registers his suffering merely as an administrative nuisance.*",
          yourTurn: {
            question:
              "An HL Essay file shows 1,560 total words in a word processor. This includes an 18-word essay title, 22 words of in-text parenthetical citations, and a 75-word Works Cited section. What is the **official IB counted word total**? (Enter a whole number.)",
            answer: { type: "number", value: 1445 },
            solution:
              "Exclude the title (18), parenthetical citations (22), and Works Cited (75): 1,560 − (18 + 22 + 75) = 1,560 − 115 = 1,445 counted words (safely inside the 1,200–1,500 word limit!).",
          },
        },
      ],
      keyPoints: [
        "Strict word limit: **1,200–1,500 words** (Band 5 sweet spot: **1,350–1,480 words**); examiners **stop reading beyond 1,500 words**.",
        "Excluded from word count: **title, in-text parenthetical citations, and Works Cited / Bibliography**. Included: **all body prose and embedded quotations**.",
        "Budget roughly **~150w Intro · ~1,100w across 3–4 progressive body movements · ~150w Synthesis Conclusion**.",
        "Total marks = **20 (A5 + B5 + C5 + D5)** worth **20% of your HL grade**; teachers may give general feedback on **one complete draft only**.",
      ],
      whyItWorks:
        "Disciplined word-budgeting forces ruthless precision: when you have only ~1,400 words to examine an entire literary work, you simply cannot afford throat-clearing introductions, biographical detours, or plot retelling — leaving pure conceptual analysis that scores top marks across all four criteria.",
      strategies: [
        "Count **counted words manually** (copy only Introduction through Conclusion without parentheticals into a clean document) before submitting so formatting metadata never tricks you over 1,500w.",
        "Run a `Ctrl+F` purge for weak analytical verbs (`shows`, `uses`, `highlights`, `proves`, `emphasises`, `very`, `basically`) and upgrade each to an exact literary action verb.",
        "Read your final draft **aloud** before submission: awkward rhythm, bloated clauses, and ungrammatically spliced quotations jump out immediately to the ear.",
      ],
      thinkDeeper:
        "Why do some of the sharpest 20/20 HL Essays land at 1,410 words rather than squeezing into 1,499 words? Because conciseness is itself a Criterion D indicator — every cut redundant clause sharpens the velocity and elegance of your critical voice.",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is the official word-count range for the IB English A: Literature HL Essay, and what happens if you exceed the ceiling?",
        back: "**1,200–1,500 words**. If an essay exceeds 1,500 words, IB examiners are instructed to **stop reading at 1,500 words**, leaving your final synthesis unread and damaging Criteria A, B, and C.",
        level: "HL",
      },
      {
        front: "What weighting and mark allocation does the HL Essay carry in IB English A: Literature (FA 2021)?",
        back: "**20% of the final HL grade**, marked externally out of **20 marks** across four equal criteria: **A (5) + B (5) + C (5) + D (5)**.",
        level: "HL",
      },
      {
        front: "State the strict IB non-overlap work rule for the HL Essay.",
        back: "The **single studied work** analysed in your HL Essay **CANNOT** be reused in your **Individual Oral (IA)** and **CANNOT** be reused in **Paper 2**.",
        level: "HL",
      },
      {
        front: "Can the HL Essay be written on a work in translation?",
        back: "**Yes!** Your single studied work may be originally written in English OR a work in translation (from your 13 HL studied works), provided it does not overlap with your IO or Paper 2 and you credit the translator in Works Cited.",
        level: "HL",
      },
      {
        front: "Which elements are EXCLUDED from the HL Essay 1,200–1,500 word count, and which are INCLUDED?",
        back: "**Excluded:** Essay title, in-text parenthetical citations, and Works Cited / Bibliography. **Included:** Introduction, all body paragraphs, conclusion, and **all quoted text embedded inside your prose**.",
        level: "HL",
      },
      {
        front: "What makes a Band 5 HL Essay Line of Inquiry different from a vague essay topic?",
        back: "A Band 5 Line of Inquiry combines a **Course Concept + specific Authorial/Formal Craft + an Arguable Interpretive Tension** across a single work — never a static theme or yes/no question.",
        level: "HL",
      },
      {
        front: "How should an HL Essay handle a collection of shorter texts (poems, short stories, or essays) by one author?",
        back: "Treat the collection as **one studied work**, focusing deeply on a **cohesive cluster of 2–4 texts** (for rich micro close-reading) while demonstrating macro awareness of the wider collection.",
        level: "HL",
      },
      {
        front: "Are secondary literary critics or named theoretical frameworks mandatory in the HL Essay?",
        back: "**No.** Secondary sources and theory are **optional**. The HL Essay is a formal literary essay anchored in your own close reading — never a jargon-heavy mini Extended Essay.",
        level: "HL",
      },
      {
        front: "What is the Band 5 target word-budget split across a ~1,400-word HL Essay?",
        back: "**~150w Conceptual Introduction** (~11%) · **~1,100w across 3–4 Progressive Body Movements** (~78%) · **~150w Reflective Synthesis Conclusion** (~11%). Sweet spot: **1,350–1,480w**.",
        level: "HL",
      },
      {
        front: "What separates Band 3 from Band 5 on Criterion A (Knowledge, Understanding & Interpretation)?",
        back: "Band 3 shows accurate literal comprehension with occasional plot summary; **Band 5** delivers **perceptive, persuasive interpretation** across the whole work, exploring subtle **implications and ambiguity**.",
        level: "HL",
      },
      {
        front: "What separates Band 3 from Band 5 on Criterion B (Analysis & Evaluation)?",
        back: "Band 3 identifies literary features descriptively ('technique-spotting'); **Band 5** **evaluates consistently and insightfully** *how* a range of authorial choices construct complex meaning and reader effect.",
        level: "HL",
      },
      {
        front: "What is the 'Micro–Macro Double Helix' in HL Essay evidence integration?",
        back: "Pairing **micro close-reading** (2–8 word embedded quotations unpacked for diction, syntax, rhythm, or staging) with **macro whole-work trajectory** (openings, turning points, motif shifts, and endings).",
        level: "HL",
      },
      {
        front: "How much feedback may an IB teacher legally provide on your HL Essay draft?",
        back: "Teachers may offer **general, holistic guidance on ONE complete draft** (never editing, correcting, or rewriting sentences) and must authenticate the student's independent work.",
        level: "HL",
      },
      {
        front: "How do the six optional critical lenses (feminist, postcolonial, Marxist, psychoanalytic, ecocritical, narratological) work best?",
        back: "As **probing analytical questions** that illuminate specific authorial choices — never as rigid ideological checklists or opportunities for name-dropping jargon.",
        level: "HL",
      },
    ],
    mustKnow: [
      "HL Essay is **HL-only external coursework**: **20% of HL grade**, **20 marks (A5/B5/C5/D5)**, strictly **1,200–1,500 words**.",
      "Examiners **stop reading past 1,500 words** — aim for the **1,350–1,480 word sweet spot**.",
      "Strict **non-overlap rule**: your 1 HL Essay work CANNOT be reused in your Individual Oral (2 works) or Paper 2 (2 works).",
      "Your Line of Inquiry must be **literary, arguable, and narrow**, ideally anchored to one of the **7 IB Concepts** (*Identity, Culture, Creativity, Communication, Perspective, Transformation, Representation*).",
      "Secondary criticism is **optional**, never mandatory; primary close reading of authorial choices always drives the marks.",
      "Title, parenthetical citations, and Works Cited are **excluded** from the word count; **all embedded quotations are INCLUDED**.",
      "Every body movement must combine **micro close-reading** (short 2–8 word embedded quotes) with **macro whole-work awareness**.",
      "Addressing at least one plausible **counter-interpretation** or textual ambiguity — then refining your claim via craft — signals 5/5 Criterion A & B mastery.",
      "Organise body paragraphs as **3–4 progressive conceptual movements** (never a chronological chapter-by-chapter or stanza-by-stanza summary!).",
      "For a work in translation, ALWAYS credit the **translator** in your Works Cited entry and use **one consistent referencing style** (e.g. MLA).",
    ],
    misconceptions: [
      {
        wrong: "The HL Essay is basically a mini Extended Essay, so I need 6–10 academic critics in my bibliography to reach Band 5.",
        right: "False! Secondary sources are **completely optional** in the HL Essay. Heavy citation of critics often crowds out your own primary close reading and lowers Criterion B.",
        level: "HL",
      },
      {
        wrong: "Quotations from the primary literary work don't count towards the 1,500-word ceiling.",
        right: "False! **All quoted text inside your essay prose COUNTS** towards the 1,200–1,500 word limit — another vital reason to embed crisp 2–8 word phrases instead of bulky block quotes.",
        level: "HL",
      },
      {
        wrong: "I can write my HL Essay on a work in translation and still reuse it in Paper 2 as long as my essay question is different.",
        right: "False! The IB **non-overlap rule** is absolute across assessments: no work used in the HL Essay may be reused in either the Individual Oral or Paper 2, regardless of how different the prompt is.",
        level: "HL",
      },
      {
        wrong: "Applying a critical lens (e.g. Marxist or psychoanalytic) means explaining the theorist's biography and labelling characters with technical terms.",
        right: "False! Fictional characters are artistic constructs, not clinical patients. Use a critical lens solely as a **sharp analytical question** that exposes specific authorial choices in language and form.",
        level: "HL",
      },
      {
        wrong: "If my essay is 1,590 words, examiners just deduct 1 mark from Criterion D and still grade my brilliant conclusion.",
        right: "False! IB examiners are instructed to **stop reading at 1,500 words**, meaning your final synthesis is completely ignored — damaging Criteria A, B, and C simultaneously.",
        level: "HL",
      },
      {
        wrong: "Choosing a poetry collection means I should briefly mention 10–12 poems to prove whole-work knowledge.",
        right: "False! Skimming 10+ poems in 1,400 words leaves barely 100 words per poem (guaranteed superficiality). Analyse a **cohesive cluster of 2–4 poems** in rich micro detail while framing their place in the wider collection.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Drafting a vague thematic report (*'Power in [Work]'*) instead of an arguable literary Line of Inquiry tied to authorial craft.",
      "Exceeding **1,500 counted words** because the student mistakenly excluded embedded quotations or miscounted hyphenated words.",
      "Dropping long 4–5 line block quotes without dissecting their diction, syntax, rhythm, or structural role — wasting precious word budget.",
      "Writing a biographical or historical essay ('history-dump' intro) that treats literature as mere documentary evidence rather than crafted art.",
      "Focusing micro close-reading exclusively on Chapter 1 or Act I while ignoring the work's turning point and ending (capping Criterion A & C).",
      "Using chronological plot organisation ('First in Act I... Next in Act II... Finally in Act III...') instead of progressive conceptual movements.",
      "Name-dropping theorists (Foucault, Butler, Freud, Marx) without linking theoretical concepts to concrete stylistic mechanisms.",
      "Omitting translator credits, mixing citation styles mid-essay, or failing to cite an optional critical article consulted during research.",
    ],
    mnemonics: [
      {
        topic: "Designing a Band 5 Line of Inquiry",
        device: "C-F-T-E (Concept · Form · Tension · Entire Work)",
        explanation:
          "Every HL Essay inquiry question must pass all four checks: anchored to a **C**oncept (one of the 7), tied to authorial **F**orm/craft, driven by an arguable **T**ension, and traceable across the **E**ntire work.",
        level: "HL",
      },
      {
        topic: "The 3-Pass Redrafting Checklist",
        device: "A-V-W (Architecture · Verbs · Word Wall)",
        explanation:
          "Pass 1 checks **A**rchitecture (do topic sentences progress?); Pass 2 upgrades weak **V**erbs (*shows/uses* → *fractures/ironises*); Pass 3 enforces the **W**ord Wall (1,350–1,480 counted words + clean citations).",
        level: "HL",
      },
      {
        topic: "Band 5 Paragraph Engine",
        device: "C-E-M-M (Claim · Embedded Micro · Mechanism · Macro Shift)",
        explanation:
          "Open with a conceptual **C**laim, weave **E**mbedded micro-quotations (2–8 words), evaluate the stylistic **M**echanism & reader effect, and link to the **M**acro whole-work arc.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Academic Journal Word Ceilings",
        detail:
          "Peer-reviewed humanities journals like *Essays in Criticism* and *The Review of English Studies* enforce strict word caps just like the IB's 1,500-word limit — because real scholarly authority lies in precision and compression, not bulk.",
        emoji: "📚",
      },
      {
        title: "Literary Reviewers & Cultural Criticism",
        detail:
          "Long-form essays in the *London Review of Books* or *The New Yorker* typically run 1,200–2,000 words: critics must balance razor-sharp quotation of single phrases with an overarching thesis about an entire novel or poetry volume.",
        emoji: "🖋️",
      },
      {
        title: "University Seminar Papers",
        detail:
          "The HL Essay is the closest IB Diploma bridge to first-year university English criticism — training independent line-of-inquiry design, ethical citation, counter-argument engagement, and revision discipline.",
        emoji: "🏛️",
      },
      {
        title: "Editorial & Legal Precision",
        detail:
          "Cutting a 1,650-word draft cleanly to 1,420 words without losing analytical nuance builds the exact editing instinct prized in law, journalism, policy analysis, and publishing.",
        emoji: "✂️",
      },
    ],
    videos: [
      {
        title: "IB English A: Literature HL Essay — Line of Inquiry & Criteria A–D Walkthrough",
        channel: "IB English Guys (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+English+Guys+HL+Essay+Line+of+Inquiry",
      },
      {
        title: "Structuring a 20/20 IB HL Essay (1,200–1,500 Words) & Avoiding Plot Summary",
        channel: "IB Literature Revision (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+English+A+Literature+HL+Essay+structure+rubric",
      },
      {
        title: "Using Critical Literary Lenses Without Jargon Overload",
        channel: "Literary Theory Explained (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=literary+criticism+lenses+feminist+postcolonial+marxist+close+reading",
      },
      {
        title: "MLA 9th Edition In-Text Citations & Works Cited for Literature Essays",
        channel: "MLA Style Guide (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=MLA+9th+edition+in+text+citations+poetry+drama+prose",
      },
    ],
    formulas: [
      {
        name: "HL Essay Weighting & Mark Total",
        formula: "20% of HL Grade = 20 Marks (Crit A: 5 + Crit B: 5 + Crit C: 5 + Crit D: 5)",
        note: "Externally assessed coursework — HL candidates only.",
        level: "HL",
      },
      {
        name: "Strict Word-Count Window",
        formula: "1,200 ≤ Counted Words ≤ 1,500  (Band 5 Sweet Spot: 1,350–1,480w)",
        note: "Examiners stop reading beyond 1,500 words!",
        level: "HL",
      },
      {
        name: "Counted Words Accounting Formula",
        formula: "Counted Words = Total Document Words − (Title + Parenthetical Citations + Works Cited)",
        note: "All embedded primary & secondary quotations ARE included in the count.",
        level: "HL",
      },
      {
        name: "Recommended Word-Budget Split (~1,400w)",
        formula: "Intro (~150w) + 3–4 Progressive Movements (~1,100w) + Synthesis Conclusion (~150w)",
        note: "~78% of your word budget belongs to analytical body movements.",
        level: "HL",
      },
      {
        name: "HL 13-Work Non-Overlap Partition",
        formula: "13 Studied Works = 2 (IO) + 1 (HL Essay) + 10 (Paper 2 Eligible Pool → pick 2)",
        note: "Zero work reuse allowed across IO, HL Essay, and Paper 2.",
        level: "HL",
      },
      {
        name: "Band 5 Line-of-Inquiry Equation",
        formula: "IB Concept + Form-Specific Authorial Choice + Arguable Interpretive Tension = Sharp Inquiry",
        note: "Eliminates static theme reports and yes/no prompts.",
        level: "HL",
      },
      {
        name: "Cohesive Collection Scoping Rule",
        formula: "1 Poetry / Story / Essay Collection → 2–4 Deeply Analysed Core Texts + Whole-Collection Frame",
        note: "Gives ~275–365 body words per movement for genuine micro craft.",
        level: "HL",
      },
      {
        name: "Band 5 Analytical Chain (Criterion B)",
        formula: "Embedded Micro-Quote (2–8w) → Authorial Mechanism → Reader Effect → Macro Concept Shift",
        note: "Replaces descriptive technique-spotting with evaluative criticism.",
        level: "HL",
      },
      {
        name: "Counter-Interpretation Refinement Move",
        formula: "Plausible Surface Reading → Textual Friction / Craft Evidence → Nuanced Higher Synthesis",
        note: "Demonstrates Band 5 Criterion A insight without contradicting your thesis.",
        level: "HL",
      },
      {
        name: "Teacher Feedback Authenticity Boundary",
        formula: "1 Complete Draft → Holistic Teacher Guidance Only (Zero Line-Editing / Rewriting)",
        note: "Backed by ongoing Learner Portfolio check-ins for IB Academic Integrity.",
        level: "HL",
      },
    ],
  },
};
