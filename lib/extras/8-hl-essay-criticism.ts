import type { TopicExtras } from "../types.ts";

const SVG_PARAGRAPH_ANATOMY = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 280" role="img" aria-label="Side-by-side comparison of a Band 3 HL Essay paragraph versus a Band 5 C-E-M-M analytical movement">
  <rect x="0" y="0" width="720" height="280" rx="16" fill="#fffaf7" stroke="#e2d6cf" stroke-width="1.5"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#1e293b">Inside One Movement: Band 3 Trap vs Band 5 C-E-M-M Engine</text>

  <rect x="24" y="48" width="324" height="212" rx="12" fill="#fef2f2" stroke="#f87171" stroke-width="1.5"/>
  <rect x="24" y="48" width="324" height="32" rx="12" fill="#dc2626"/>
  <text x="186" y="69" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Band 3 Paragraph (Plot + Spotting)</text>

  <rect x="40" y="92" width="292" height="34" rx="6" fill="#ffffff" stroke="#fecaca"/>
  <text x="52" y="113" font-family="system-ui, sans-serif" font-size="11.5" fill="#7f1d1d">1. Chronological opener ("Next in Act II...")</text>
  <rect x="40" y="134" width="292" height="34" rx="6" fill="#ffffff" stroke="#fecaca"/>
  <text x="52" y="155" font-family="system-ui, sans-serif" font-size="11.5" fill="#7f1d1d">2. Dropped 50-word block quotation</text>
  <rect x="40" y="176" width="292" height="34" rx="6" fill="#ffffff" stroke="#fecaca"/>
  <text x="52" y="197" font-family="system-ui, sans-serif" font-size="11.5" fill="#7f1d1d">3. Technique spotting ("uses imagery to show...")</text>
  <rect x="40" y="218" width="292" height="30" rx="6" fill="#fee2e2"/>
  <text x="186" y="237" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#991b1b">Result: High word cost, static claim, Crit B/C cap</text>

  <rect x="372" y="48" width="324" height="212" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <rect x="372" y="48" width="324" height="32" rx="12" fill="#047857"/>
  <text x="534" y="69" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Band 5 Movement (C-E-M-M Engine)</text>

  <rect x="388" y="92" width="292" height="34" rx="6" fill="#ffffff" stroke="#a7f3d0"/>
  <text x="400" y="113" font-family="system-ui, sans-serif" font-size="11.5" fill="#064e3b"><tspan font-weight="700">C</tspan>laim: Conceptual shift advancing thesis</text>
  <rect x="388" y="134" width="292" height="34" rx="6" fill="#ffffff" stroke="#a7f3d0"/>
  <text x="400" y="155" font-family="system-ui, sans-serif" font-size="11.5" fill="#064e3b"><tspan font-weight="700">E</tspan>mbedded Micro: 2–8 word woven phrases</text>
  <rect x="388" y="176" width="292" height="34" rx="6" fill="#ffffff" stroke="#a7f3d0"/>
  <text x="400" y="197" font-family="system-ui, sans-serif" font-size="11.5" fill="#064e3b"><tspan font-weight="700">M</tspan>echanism: Craft verb + reader effect</text>
  <rect x="388" y="218" width="292" height="30" rx="6" fill="#d1fae5"/>
  <text x="534" y="237" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#065f46"><tspan font-weight="700">M</tspan>acro Shift: Links to whole-work arc / counter-view</text>
</svg>`;

const SVG_REDRAFT_FUNNEL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 260" role="img" aria-label="Three-pass HL Essay redrafting protocol from raw first draft to polished 1,400-word Band 5 submission">
  <rect x="0" y="0" width="720" height="260" rx="16" fill="#fffaf7" stroke="#e2d6cf" stroke-width="1.5"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#1e293b">The 3-Pass Redrafting Protocol (A-V-W Audit)</text>

  <rect x="28" y="52" width="196" height="148" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="126" y="76" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e3a8a">Pass 1: Architecture</text>
  <text x="126" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb">Targets Criterion C &amp; A</text>
  <text x="126" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">Extract thesis + topic lines.</text>
  <text x="126" y="140" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">Do movements evolve?</text>
  <text x="126" y="158" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">Cut standalone plot recap.</text>
  <text x="126" y="182" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1d4ed8">Check counter-reading node</text>

  <polygon points="232,126 254,114 254,138" fill="#64748b"/>

  <rect x="262" y="52" width="196" height="148" rx="12" fill="#fff1f2" stroke="#be123c" stroke-width="2"/>
  <text x="360" y="76" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#881337">Pass 2: Verbs &amp; Craft</text>
  <text x="360" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#be123c">Targets Criterion B &amp; D</text>
  <text x="360" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">Purge "shows / uses / proves".</text>
  <text x="360" y="140" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">Embed 2–8 word quotes.</text>
  <text x="360" y="158" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">Trim unapplied theory jargon.</text>
  <text x="360" y="182" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#9f1239">Test micro-to-macro balance</text>

  <polygon points="466,126 488,114 488,138" fill="#64748b"/>

  <rect x="496" y="52" width="196" height="148" rx="12" fill="#ecfdf5" stroke="#047857" stroke-width="2"/>
  <text x="594" y="76" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#065f46">Pass 3: Word Wall</text>
  <text x="594" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#047857">Protects 1,500w Limit</text>
  <text x="594" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">Manual count: 1,350–1,480w.</text>
  <text x="594" y="140" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">Verify MLA + translator cite.</text>
  <text x="594" y="158" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">Read aloud for prose cadence.</text>
  <text x="594" y="182" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#047857">Confirm zero IO / P2 overlap</text>

  <rect x="28" y="214" width="664" height="30" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="360" y="233" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" fill="#334155">Remember: Teachers may offer general holistic guidance on ONE complete draft only — self-editing is your Band 5 edge.</text>
</svg>`;

export const extras: TopicExtras = {
  hook:
    "Fourteen hundred words is barely three double-spaced pages — shorter than a typical magazine feature — yet it carries **20% of your entire HL English A: Literature diploma grade**. Why do some essays feel breathless and cramped while others read like published criticism? Because top-band HL Essayists never try to say *everything* about a book: they carve out one razor-sharp question and follow its linguistic tremors from opening line to closing echo.",
  didYouKnow: [
    "In official IB examiner reports, **exceeding the 1,500-word ceiling** (often because students mistakenly thought primary quotations were excluded!) is one of the most preventable causes of losing Criterion C and A marks — examiners literally stop reading at word 1,500.",
    "You can score a spotless **20/20** on the HL Essay with **zero secondary critics** in your Works Cited page: the IB explicitly designates secondary criticism as optional so your own independent close reading stays centre stage.",
    "A single 60-word block quotation consumes **4% of your entire HL Essay word limit** — nearly half an introduction! Trimming block quotes into crisp 2–8 word embedded phrases routinely frees 150–250 words for genuine analysis.",
    "Two English translations of the exact same foreign-language poem can change verb tension, metre, and tonal irony completely — which is why MLA Works Cited insists on naming the **translator** alongside the original author.",
    "Because HL students study a minimum of **13 literary works**, locking away 2 for the Individual Oral and 1 for the HL Essay still leaves **10 clean, non-overlapping works** in your Paper 2 reserve.",
    "Many university English professors note that IB HL Essays in the 18–20/20 band already match first-year undergraduate seminar essays in structure, embedded quotation craft, and counter-reading sophistication.",
  ],
  activities: [
    {
      title: "The Skeleton X-Ray Audit (10-Minute Architecture Check)",
      emoji: "🩻",
      materials: [
        "Your complete HL Essay draft (digital or printed)",
        "One blank page or scratch document",
      ],
      steps: [
        "Copy ONLY your thesis statement and the very first sentence (topic sentence) of each body paragraph onto the blank page.",
        "Read those 4–5 sentences aloud consecutively without looking at your quotes or examples.",
        "Test progression: could you swap Movement 2 and Movement 3 without anyone noticing? If yes, your essay is a static list — rewrite the topic sentences so each movement explicitly deepens, pivots, or complicates the previous one.",
        "Check that at least one movement explicitly signals a turning point or counter-interpretation across the whole work.",
      ],
      maths:
        "Criterion C mastery depends on **progressive conceptual movement** rather than chronological summary. The Skeleton X-Ray exposes repetitive listing in under ten minutes.",
    },
    {
      title: "Two-Colour Micro–Macro Highlighter Check",
      emoji: "🖍️",
      materials: [
        "A printed copy of your draft (or digital highlight tools)",
        "One pink highlighter (Micro craft) and one blue highlighter (Macro arc)",
      ],
      steps: [
        "Highlight every sentence that analyses concrete micro craft (specific word connotations, syntax, caesura, stage direction, focalisation) in **pink**.",
        "Highlight every sentence that connects a moment to the whole work's wider structure (opening motif echo, midpoint turning point, ending inversion, counter-reading) in **blue**.",
        "Leave unhighlighted any sentence that merely summarises plot or recites author biography.",
        "Inspect the colour pattern: every body movement should show strong pink + blue braiding, and unhighlighted plot sentences should shrink to under 10% of the page!",
      ],
      maths:
        "Visualising the pink/blue ratio enforces the **Micro–Macro Double Helix**: pure pink without blue misses whole-work understanding (Crit A), while pure blue without pink starves close stylistic evaluation (Crit B).",
    },
    {
      title: "The 150-Word Ruthless Compression Lab",
      emoji: "✂️",
      materials: [
        "One bloated 350–400 word body paragraph from a working draft",
        "Word-counter tool and a list of precision analytical verbs",
      ],
      steps: [
        "Run a search for weak filler phrases (`in order to`, `the fact that`, `it can be seen that`, `basically`, `very`) and delete every single one.",
        "Hunt down generic analytical verbs (`uses`, `shows`, `highlights`, `emphasises`, `proves`) and upgrade each to an exact literary action verb (`destabilises`, `fractures`, `ironises`, `encodes`, `undercuts`).",
        "Shrink any quotation longer than 10 words into two or three embedded 2–6 word phrases woven grammatically into your own clauses.",
        "Compare your 'before' and 'after' word counts: notice how cutting 60–80 words makes the literary insight sound twice as authoritative!",
      ],
      maths:
        "Conciseness raises **Criterion D** and buys breathing room beneath the **1,500-word hard ceiling** simultaneously — turning editorial trimming into an analytical upgrade.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Band 3 Trap vs Band 5 C-E-M-M Movement Anatomy",
      svg: SVG_PARAGRAPH_ANATOMY,
      caption:
        "Every body movement in a 20/20 HL Essay runs on the C-E-M-M engine: Conceptual Claim → Embedded Micro-Quotes → Evaluative Mechanism → Macro Shift.",
    },
    {
      title: "The 3-Pass Redrafting Protocol (Architecture · Verbs · Word Wall)",
      svg: SVG_REDRAFT_FUNNEL,
      caption:
        "Separating structural editing, craft polishing, and word-count verification into three focused passes eliminates blind spots before final submission.",
    },
  ],
  history: {
    title: "From 'Close Reading Alone' to Pluralistic Literary Criticism",
    story:
      "In the mid-twentieth century, Anglo-American **New Criticism** revolutionised university literature departments by insisting that readers stop treating novels and poems as thinly disguised author biographies — demanding instead forensic attention to irony, ambiguity, metaphor, and tension on the page itself. By the 1970s and 1980s, new waves of criticism (**feminist**, **postcolonial**, **Marxist**, **psychoanalytic**, **narratological**, and later **ecocritical** studies) argued that formal craft never exists in a vacuum: syntax, voice, and genre always negotiate gender, empire, class, psyche, and ecology. The modern IB HL Essay sits at the sweet spot of both traditions — asking you to pair New Criticism's disciplined, word-by-word close reading with contemporary criticism's conceptual curiosity about how literary form engages the world.",
  },
};
