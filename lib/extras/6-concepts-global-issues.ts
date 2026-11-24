// ---------------------------------------------------------------------------
// Engagement extras for Topic 6: The 7 Central Concepts & Global Issues
// IB Diploma English A: Literature (SL & HL, First Assessment 2021)
// Strict Non-Prescriptive Text Policy: ZERO set texts assumed. Every named
// published work/author carries `[Example text — not a set text]`.
// ---------------------------------------------------------------------------
import type { TopicExtras } from "../types.ts";

const SVG_NON_OVERLAP_MAP = `<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IB Diploma English A Literature Non-Overlap Work Allocation Map showing strictly separated buckets for Individual Oral, HL Essay, and Paper 2">
  <rect x="0" y="0" width="640" height="250" rx="14" fill="var(--surface-2)" />
  <text x="320" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">The IB Strict Non-Overlap Work Map (Zero Reuse Across Assessments!)</text>
  <text x="320" y="42" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">SL Minimum: 9 Studied Works (≥3 Translated) · HL Minimum: 13 Studied Works (≥4 Translated)</text>

  <rect x="20" y="58" width="188" height="172" rx="12" fill="var(--surface)" stroke="var(--brand)" stroke-width="2" />
  <rect x="20" y="58" width="188" height="34" rx="12" fill="var(--brand)" />
  <text x="114" y="80" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand-ink)">BUCKET 1 · Individual Oral</text>
  <text x="114" y="112" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">2 Works Locked</text>
  <text x="114" y="132" text-anchor="middle" font-size="10" fill="var(--ink-2)">1 Original English Work</text>
  <text x="114" y="148" text-anchor="middle" font-size="10" fill="var(--ink-2)">+ 1 Work in Translation</text>
  <line x1="36" y1="162" x2="192" y2="162" stroke="var(--line)" stroke-width="1" />
  <text x="114" y="182" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--brand)">SL 30% · HL 20%</text>
  <text x="114" y="198" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">≤40-line extracts · 15 min</text>
  <text x="114" y="216" text-anchor="middle" font-size="9" font-weight="800" fill="var(--bad)">LOCKED OUT OF P2 &amp; HLE</text>

  <rect x="226" y="58" width="188" height="172" rx="12" fill="var(--surface)" stroke="var(--s-algebra)" stroke-width="2" />
  <rect x="226" y="58" width="188" height="34" rx="12" fill="var(--s-algebra)" />
  <text x="320" y="80" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand-ink)">BUCKET 2 · HL Essay [HL]</text>
  <text x="320" y="112" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">1 Distinct Work Locked</text>
  <text x="320" y="132" text-anchor="middle" font-size="10" fill="var(--ink-2)">English OR Translated</text>
  <text x="320" y="148" text-anchor="middle" font-size="10" fill="var(--ink-2)">Anchored to 1 Concept</text>
  <line x1="242" y1="162" x2="398" y2="162" stroke="var(--line)" stroke-width="1" />
  <text x="320" y="182" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--s-algebra)">HL Only: 20% · 20 marks</text>
  <text x="320" y="198" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">1,200–1,500 words</text>
  <text x="320" y="216" text-anchor="middle" font-size="9" font-weight="800" fill="var(--bad)">LOCKED OUT OF IO &amp; P2</text>

  <rect x="432" y="58" width="188" height="172" rx="12" fill="var(--surface)" stroke="var(--good)" stroke-width="2" />
  <rect x="432" y="58" width="188" height="34" rx="12" fill="var(--good)" />
  <text x="526" y="80" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand-ink)">BUCKET 3 · Paper 2 Pool</text>
  <text x="526" y="112" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">SL ≥7 · HL ≥10 Eligible</text>
  <text x="526" y="132" text-anchor="middle" font-size="10" fill="var(--ink-2)">Prepare 3–4 varied works</text>
  <text x="526" y="148" text-anchor="middle" font-size="10" fill="var(--ink-2)">Write on 2 in the exam</text>
  <line x1="448" y1="162" x2="604" y2="162" stroke="var(--line)" stroke-width="1" />
  <text x="526" y="182" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--good)">SL 35% · HL 25%</text>
  <text x="526" y="198" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">1h 45m · Closed Book</text>
  <text x="526" y="216" text-anchor="middle" font-size="9" font-weight="800" fill="var(--good)">100% SEPARATE WORKS</text>
</svg>`;

const SVG_IO_PILLARS = `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four equal 10-mark pillars of the IB Individual Oral showing Band 5 targets for Criteria A, B, C, and D">
  <rect x="0" y="0" width="640" height="230" rx="14" fill="var(--surface-2)" />
  <text x="320" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">The 40-Mark Individual Oral: Four Equal 10-Mark Pillars (25% Each)</text>

  <rect x="24" y="44" width="138" height="166" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="2" />
  <rect x="24" y="44" width="138" height="32" rx="10" fill="var(--brand)" />
  <text x="93" y="65" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand-ink)">Crit A · 10/40</text>
  <text x="93" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="var(--ink)">Understanding &amp;</text>
  <text x="93" y="108" text-anchor="middle" font-size="10" font-weight="800" fill="var(--ink)">Interpretation</text>
  <text x="93" y="132" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Sharp W-T-L GI</text>
  <text x="93" y="148" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Extract + whole work</text>
  <text x="93" y="164" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Subtle implications</text>
  <text x="93" y="194" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--good)">Target: 9–10</text>

  <rect x="176" y="44" width="138" height="166" rx="10" fill="var(--surface)" stroke="var(--s-ratio)" stroke-width="2" />
  <rect x="176" y="44" width="138" height="32" rx="10" fill="var(--s-ratio)" />
  <text x="245" y="65" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand-ink)">Crit B · 10/40</text>
  <text x="245" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="var(--ink)">Analysis &amp;</text>
  <text x="245" y="108" text-anchor="middle" font-size="10" font-weight="800" fill="var(--ink)">Evaluation</text>
  <text x="245" y="132" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Dense ≤40-line craft</text>
  <text x="245" y="148" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Choice → Effect → GI</text>
  <text x="245" y="164" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Form-specific insight</text>
  <text x="245" y="194" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--good)">Target: 9–10</text>

  <rect x="328" y="44" width="138" height="166" rx="10" fill="var(--surface)" stroke="var(--s-algebra)" stroke-width="2" />
  <rect x="328" y="44" width="138" height="32" rx="10" fill="var(--s-algebra)" />
  <text x="397" y="65" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand-ink)">Crit C · 10/40</text>
  <text x="397" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="var(--ink)">Focus &amp;</text>
  <text x="397" y="108" text-anchor="middle" font-size="10" font-weight="800" fill="var(--ink)">Organisation</text>
  <text x="397" y="132" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">~4:15 / ~4:15 parity</text>
  <text x="397" y="148" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Double balance</text>
  <text x="397" y="164" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">9:45–10:00 finish</text>
  <text x="397" y="194" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--good)">Target: 9–10</text>

  <rect x="480" y="44" width="138" height="166" rx="10" fill="var(--surface)" stroke="var(--s-geometry)" stroke-width="2" />
  <rect x="480" y="44" width="138" height="32" rx="10" fill="var(--s-geometry)" />
  <text x="549" y="65" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand-ink)">Crit D · 10/40</text>
  <text x="549" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="var(--ink)">Academic</text>
  <text x="549" y="108" text-anchor="middle" font-size="10" font-weight="800" fill="var(--ink)">Language</text>
  <text x="549" y="132" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Precise lit terms</text>
  <text x="549" y="148" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Natural spoken voice</text>
  <text x="549" y="164" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">≤10 shorthand cues</text>
  <text x="549" y="194" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--good)">Target: 9–10</text>
</svg>`;

export const extras: TopicExtras = {
  hook: "How can an ancient Greek tragedy, a nineteenth-century Norwegian living-room play, and a contemporary English lyric poem speak straight into the exact same ten-minute conversation? Through a single razor-sharp **Global Issue** — narrow enough to examine individual commas and pauses, yet wide enough to travel effortlessly across languages and centuries.",
  didYouKnow: [
    "In the IB English A: Literature syllabus, the **7 Central Concepts** are shared identically across *Language A: Literature*, *Language A: Language and Literature*, and *Literature and Performance* — forming a unified conceptual grammar across all Group 1 subjects.",
    "The **≤40-line extract ceiling** is not arbitrary: 30–40 lines of verse, drama, or prose is almost exactly the density a strong speaker can dissect in **2 minutes 30 seconds** without rushing or resorting to summary.",
    "Why did the IBO make pairing **1 original English work + 1 work in translation** mandatory in the Individual Oral? To guarantee that every IB Literature student demonstrates genuine cross-cultural, transnational literary awareness rather than studying English in an isolated bubble.",
    "In Henrik Ibsen's *A Doll's House* `[Example text — not a set text]`, the famous door slam at the end of Act 3 is a single **stage direction** — proof that in drama, one non-spoken line inside a ≤40-line extract can carry more Criterion B power than twenty lines of ordinary chatter.",
    "Moderators consistently report that the single easiest 3–4 marks lost on the Individual Oral come not from weak intelligence, but from **running past 5:30 on Work 1** and compressing Work 2 into a breathless final two minutes!",
  ],
  activities: [
    {
      title: "The 3-Gate Elevator Pitch",
      emoji: "🎯",
      materials: [
        "3 index cards (or sticky notes)",
        "Your Learner Portfolio work list (English + Translated)",
        "A 60-second timer",
      ],
      steps: [
        "Pick ONE of the 5 Fields of Inquiry and write a 1-word theme at the top of Card 1 (e.g. *Silence* or *Exile*).",
        "On Card 2, narrow it using the formula: *How [specific mechanism] + [active verb] + [human impact] + [in everyday local contexts]*.",
        "Run the **Two-Continent Swap Test** and **Kitchen-Table Test**: read Card 2 aloud to a study partner in 20 seconds and ask them to try breaking ANY of the 3 IB gates (Wide-scale, Transnational, Everyday Local).",
        "Refine on Card 3 until your partner cannot find a geographic lock-in, vague noun, or missing daily human context.",
      ],
      maths:
        "Precision ratio: shrinking a vague topic into a 15–25 word active-verb Global Issue typically cuts wasted verbal filler by over 40% during the 10-minute presentation.",
    },
    {
      title: "The 40-Line Stylistic Density Audit",
      emoji: "🔍",
      materials: [
        "Two candidate extracts (each ≤40 lines) from one studied work",
        "Two highlighters (Colour 1 = plot facts, Colour 2 = craft choices)",
      ],
      steps: [
        "Number every single line of both candidate passages (1 to ≤40) to verify official IB compliance.",
        "Highlight pure plot/exposition statements in Colour 1, and highlight distinct authorial craft moments (metaphor, caesura, stage direction, subtext, focalization shift, ironic repetition) in Colour 2.",
        "Count Colour 2 craft moments in each passage: aim for **at least 6–8 rich craft moments** inside 30–40 lines so you can pick the sharpest 3–4 for your 2:30 micro close-reading.",
        "Discard the flatter passage — and always print a **100% clean, unmarked copy** for the actual IO recording!",
      ],
      maths:
        "Target density benchmark: ≥ 6 distinct authorial choices per ≤40-line extract (at least 1 analysable craft choice every 5–7 lines).",
    },
    {
      title: "The Symmetrical Stopwatch Relay",
      emoji: "⏱️",
      materials: [
        "Your draft 10-bullet outline (1 + 3 + 1 + 3 + 1 + 1)",
        "Clean unmarked copies of both ≤40-line extracts",
        "A smartphone stopwatch",
      ],
      steps: [
        "Place four sticky-note checkpoints on your desk: **0:45 (Intro done)** · **3:15 (W1 Extract done)** · **5:00 (W1 Whole done — HARD STOP!)** · **9:15 (W2 done → Synthesis)**.",
        "Deliver your entire 10-minute Individual Oral aloud using ONLY your 10 bullets — never restart mid-run even if you stumble.",
        "Log exact timestamps at each checkpoint. If Work 1 crosses 5:10 OR either whole-work block falls below 1:15, trim one micro detail from the over-long extract and expand one macro structural link.",
        "Finish with a partner asking 3 spontaneous probing Q&A questions for 5 minutes so practising your unseen reserve bank feels effortless.",
      ],
      maths:
        "Parity target: keep Work 1 vs Work 2 within 45/55 to 55/45 (±30 seconds) and extract vs whole work near 60/40 inside each text.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The IB Non-Overlap Course Map (SL & HL)",
      svg: SVG_NON_OVERLAP_MAP,
      caption:
        "Lock your Learner Portfolio into three strictly separate assessment buckets early in DP2 so no work is ever accidentally reused across the IO, HL Essay [HL], and Paper 2.",
    },
    {
      title: "The Four Equal 10-Mark IO Pillars",
      svg: SVG_IO_PILLARS,
      caption:
        "Because Criteria A, B, C, and D each carry 10 marks (25% of the IO), polishing pacing (Crit C) and concise spoken delivery (Crit D) is worth just as many marks as close-reading (Crit B)!",
    },
  ],
  history: {
    title: "From IOC & IOP to the Unified Global Issue Individual Oral (FA2021)",
    story:
      "Before First Assessment 2021, IB English A: Literature students faced *two* completely separate oral assessments: the **Individual Oral Commentary (IOC)** — a blind close-reading of a single English extract chosen by the teacher — and the **Individual Oral Presentation (IOP)** — a student-designed talk on studied works. Meanwhile, Works in Translation were assessed through a separate written coursework essay. In the 2021 curriculum overhaul, the IBO unified these strands around two core innovations: the **7 Central Concepts** (building conceptual continuity across all three Areas of Exploration and the new HL Essay) and the **Global Issue Individual Oral**, where candidates independently select a transnational, locally felt human issue and pair **one original English work with one translated work**. The result shifted IB Literature away from memorising static lectures and toward genuinely independent, cross-cultural literary inquiry.",
  },
};
