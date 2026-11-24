import type { TopicExtras } from "../types.ts";

const SVG_UNRELIABILITY_SPECTRUM = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spectrum of unreliable narration from naive witness to self-deceiving rationaliser and manipulative deceiver">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="#ffffff"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">The Unreliable Narration Spectrum (Wayne Booth)</text>

  <defs>
    <linearGradient id="unrelGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488"/>
      <stop offset="50%" stop-color="#b45309"/>
      <stop offset="100%" stop-color="#be123c"/>
    </linearGradient>
  </defs>
  <rect x="42" y="48" width="476" height="10" rx="5" fill="url(#unrelGrad)"/>

  <circle cx="96" cy="53" r="8" fill="#0d9488"/>
  <circle cx="280" cy="53" r="8" fill="#b45309"/>
  <circle cx="464" cy="53" r="8" fill="#be123c"/>

  <rect x="20" y="74" width="162" height="154" rx="10" fill="#f0fdfa" stroke="#5eead4" stroke-width="1.2"/>
  <text x="101" y="96" text-anchor="middle" font-size="11.5" font-weight="800" fill="#115e59">1. Naive / Limited</text>
  <text x="101" y="114" text-anchor="middle" font-size="9.5" fill="#115e59">Child, outsider, or</text>
  <text x="101" y="128" text-anchor="middle" font-size="9.5" fill="#115e59">sheltered observer.</text>
  <text x="101" y="150" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0f766e">Textual Cue:</text>
  <text x="101" y="166" text-anchor="middle" font-size="9.5" fill="#115e59">Literal surface detail</text>
  <text x="101" y="180" text-anchor="middle" font-size="9.5" fill="#115e59">whose darker meaning</text>
  <text x="101" y="194" text-anchor="middle" font-size="9.5" fill="#115e59">only the reader decodes</text>
  <text x="101" y="212" text-anchor="middle" font-size="9" font-weight="700" fill="#0f766e">(piercing dramatic irony)</text>

  <rect x="199" y="74" width="162" height="154" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>
  <text x="280" y="96" text-anchor="middle" font-size="11.5" font-weight="800" fill="#78350f">2. Self-Deceiving</text>
  <text x="280" y="114" text-anchor="middle" font-size="9.5" fill="#78350f">Repressed, vain, or</text>
  <text x="280" y="128" text-anchor="middle" font-size="9.5" fill="#78350f">traumatised speaker.</text>
  <text x="280" y="150" text-anchor="middle" font-size="9.5" font-weight="700" fill="#b45309">Textual Cue:</text>
  <text x="280" y="166" text-anchor="middle" font-size="9.5" fill="#78350f">Euphemism, abrupt</text>
  <text x="280" y="180" text-anchor="middle" font-size="9.5" fill="#78350f">digression, &amp; gap from</text>
  <text x="280" y="194" text-anchor="middle" font-size="9.5" fill="#78350f">others' visible distress</text>
  <text x="280" y="212" text-anchor="middle" font-size="9" font-weight="700" fill="#b45309">(tragic or comic irony)</text>

  <rect x="378" y="74" width="162" height="154" rx="10" fill="#ffe4e6" stroke="#be123c" stroke-width="1.2"/>
  <text x="459" y="96" text-anchor="middle" font-size="11.5" font-weight="800" fill="#881337">3. Manipulative</text>
  <text x="459" y="114" text-anchor="middle" font-size="9.5" fill="#881337">Calculated confessor</text>
  <text x="459" y="128" text-anchor="middle" font-size="9.5" fill="#881337">courting complicity.</text>
  <text x="459" y="150" text-anchor="middle" font-size="9.5" font-weight="700" fill="#be123c">Textual Cue:</text>
  <text x="459" y="166" text-anchor="middle" font-size="9.5" fill="#881337">Flattering direct address,</text>
  <text x="459" y="180" text-anchor="middle" font-size="9.5" fill="#881337">self-contradiction &amp;</text>
  <text x="459" y="194" text-anchor="middle" font-size="9.5" fill="#881337">smearing rival witnesses</text>
  <text x="459" y="212" text-anchor="middle" font-size="9" font-weight="700" fill="#be123c">(ethical friction)</text>
</svg>`;

const SVG_FICTION_VS_NONFICTION = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram comparing prose fiction craft and literary non-fiction craft with shared literary toolkit in the overlap">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="#ffffff"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">Prose Fiction vs Literary Non-Fiction: Shared Craft &amp; Distinct Pacts</text>

  <circle cx="195" cy="140" r="94" fill="#ffe4e6" fill-opacity="0.72" stroke="#be123c" stroke-width="1.6"/>
  <circle cx="365" cy="140" r="94" fill="#f0fdfa" fill-opacity="0.78" stroke="#0d9488" stroke-width="1.6"/>

  <text x="148" y="88" text-anchor="middle" font-size="11.5" font-weight="800" fill="#881337">PROSE FICTION</text>
  <text x="144" y="112" text-anchor="middle" font-size="9.5" fill="#881337">• Invented world</text>
  <text x="144" y="129" text-anchor="middle" font-size="9.5" fill="#881337">• Zero / internal /</text>
  <text x="144" y="142" text-anchor="middle" font-size="9.5" fill="#881337">  external focalisation</text>
  <text x="144" y="159" text-anchor="middle" font-size="9.5" fill="#881337">• Free indirect</text>
  <text x="144" y="172" text-anchor="middle" font-size="9.5" fill="#881337">  discourse (FID)</text>
  <text x="144" y="189" text-anchor="middle" font-size="9.5" fill="#881337">• Foil characters</text>

  <text x="280" y="96" text-anchor="middle" font-size="10.5" font-weight="800" fill="#241016">SHARED CRAFT</text>
  <text x="280" y="116" text-anchor="middle" font-size="9.5" fill="#334155">Syntax &amp; rhythm</text>
  <text x="280" y="132" text-anchor="middle" font-size="9.5" fill="#334155">Evolving symbols</text>
  <text x="280" y="148" text-anchor="middle" font-size="9.5" fill="#334155">Temporal shifts</text>
  <text x="280" y="164" text-anchor="middle" font-size="9.5" fill="#334155">Tone &amp; irony</text>
  <text x="280" y="180" text-anchor="middle" font-size="9.5" fill="#334155">Sensory imagery</text>
  <text x="280" y="196" text-anchor="middle" font-size="9.5" fill="#334155">Structural turns</text>

  <text x="414" y="88" text-anchor="middle" font-size="11.5" font-weight="800" fill="#115e59">NON-FICTION</text>
  <text x="418" y="112" text-anchor="middle" font-size="9.5" fill="#115e59">• Autobiographical pact</text>
  <text x="418" y="129" text-anchor="middle" font-size="9.5" fill="#115e59">• Retrospective vs</text>
  <text x="418" y="142" text-anchor="middle" font-size="9.5" fill="#115e59">  experiencing self</text>
  <text x="418" y="159" text-anchor="middle" font-size="9.5" fill="#115e59">• Ethos / pathos / logos</text>
  <text x="418" y="176" text-anchor="middle" font-size="9.5" fill="#115e59">• Observer's gaze</text>
  <text x="418" y="193" text-anchor="middle" font-size="9.5" fill="#115e59">• Epistemic hedging</text>
</svg>`;

export const extras: TopicExtras = {
  hook: "Two sentences can describe the exact same railway platform — yet sliding the narrative lens two inches closer turns neutral observation into biting irony, and shifting a single conjunction turns cool explanation into quiet heartbreak.",
  didYouKnow: [
    "Jane Austen is widely credited with perfecting **free indirect discourse** in English prose — in *Emma* `[Example text — not a set text]`, readers routinely mistake Emma's snobbish misjudgements for objective narrator wisdom on a first read, only to discover the double-voiced joke chapters later.",
    "The English word **essay** comes directly from French *essayer* ('to weigh, test, or attempt'), chosen by Michel de Montaigne in 1580 (`[Example text — not a set text]`) precisely because literary essays explore uncertainty rather than deliver courtroom verdicts.",
    "Narratologist Gérard Genette coined **focalisation** specifically to break the lazy confusion between 'who speaks' and 'who sees' — pointing out that a third-person story can still trap the reader inside a single character's claustrophobic blind spots.",
    "In John Gardner's classic teaching exercise on **psychic distance**, writers rewrite one five-sentence crisis five different ways, discovering that simply deleting the words *he thought* or *she felt* collapses the wall between narrator and mind.",
    "Philippe Lejeune's **autobiographical pact** explains why readers react so fiercely when a supposed memoir turns out to have fabricated events: non-fiction carries an implicit ethical contract with historical reality, even when it uses poetic imagery and reconstructed dialogue.",
    "Ancient Greek rhetoricians distinguished **chronos** (ordinary ticking clock time) from **kairos** (the urgent, unrepeatable turning point) — which is why analysing a literary speech without asking *'why today?'* misses half its persuasive electricity.",
  ],
  activities: [
    {
      title: "The Five-Lens Camera Rewrite",
      emoji: "🎥",
      materials: ["A notebook or laptop", "One simple 3-sentence scenario (e.g. missing the last bus in heavy rain)"],
      steps: [
        "Draft the same 30-second moment at **Level 1** (distant panoramic third-person naming the city and year).",
        "Rewrite it at **Level 3** (close internal focalisation using reporting tags like *she noticed* and *she dreaded*).",
        "Rewrite it at **Level 4** (**free indirect discourse**): delete every reporting tag and let the character's spoken idiom, a proximal deictic (*now*), and a rhetorical question hijack the third-person past tense.",
        "Highlight the exact words that vanished or entered between Level 3 and Level 4 — those are the exact markers you quote on Paper 1!",
      ],
      maths:
        "IB Criterion B takeaway: **Psychic distance is measurable in syntax** — dropping reporting verbs and introducing modals/deictics shifts the ratio between empathy and ironic scrutiny.",
    },
    {
      title: "Parataxis vs Hypotaxis Stress-Test",
      emoji: "✂️",
      materials: ["Any 6-line prose or memoir paragraph", "Two highlighters (warm for parataxis, cool for hypotaxis)"],
      steps: [
        "Take a reflective paragraph rich in subordinating conjunctions (*although, because, while, whereas*) and break every clause apart into short, stark full-stop sentences.",
        "Read both versions aloud at natural speaking speed.",
        "Note how removing *because* and *although* strips away self-justification and leaves raw emotional shock or stoic detachment.",
        "Write one Band 5 analytical sentence explaining *why* the original writer chose their exact balance of subordination and compression.",
      ],
      maths:
        "IB Criterion B & D takeaway: Never say 'short sentences speed up the pace'. Name **parataxis** vs **hypotaxis** and link syntactic architecture directly to psychological state.",
    },
    {
      title: "The Double-Self Memoir Audit",
      emoji: "🪞",
      materials: ["A 15-line unseen memoir or personal essay extract", "Two coloured pens"],
      steps: [
        "Underline every verb or sensory impression anchored in the **experiencing self** (what the younger 'I' felt, misread, or noticed then).",
        "Circle every verb, hedge (*perhaps, I now recognise*), or ironic metaphor voiced by the **retrospective self** (writing from the present).",
        "Locate the exact hinge sentence where the two selves collide — that hinge is your strongest conceptual topic sentence for a Paper 1 commentary.",
      ],
      maths:
        "IB Criterion A & C takeaway: The richest meaning in literary non-fiction lives in the **friction between past immersion and present scrutiny**.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The Unreliable Narration Spectrum",
      svg: SVG_UNRELIABILITY_SPECTRUM,
      caption:
        "Unreliability ranges from innocent limited awareness (naive witness) to defensive self-deception and calculated manipulation — always anchor claims in concrete textual cues.",
    },
    {
      title: "Prose Fiction vs Literary Non-Fiction Craft Map",
      svg: SVG_FICTION_VS_NONFICTION,
      caption:
        "Both forms share imagery, syntax, symbolism, and structural turns — yet their distinct ethical contracts shape how perspective and truth-claims operate.",
    },
  ],
  history: {
    title: "How the Modern Novel & Personal Essay Learned to Look Inside the Mind",
    story:
      "For centuries, prose narratives leaned toward external action, sweeping chronicles, or explicit moral commentary. Two parallel revolutions transformed prose into the intimate psychological instrument studied in IB Literature today. First, in 1580, French magistrate Michel de Montaigne retired to his tower library to invent the modern personal essay (`[Example text — not a set text]`): instead of composing rigid classical treatises, he tracked his own shifting doubts, griefs, and physical habits, proving that a candid, self-questioning persona could turn everyday trivia into profound philosophy. Two centuries later, novelists discovered a parallel breakthrough in fiction. Where early novels swung awkwardly between stiff third-person summaries and quoted diary entries, Jane Austen (`[Example text — not a set text]`) and Gustave Flaubert (`[Example text — not a set text]`) fused narrator and character inside **free indirect discourse**, letting irony and sympathy occupy a single sentence. By the twentieth century, modernists like Virginia Woolf (`[Example text — not a set text]`) pushed psychic distance all the way into fluid stream of consciousness, while essayists and memoirists like James Baldwin (`[Example text — not a set text]`) and Joan Didion (`[Example text — not a set text]`) fused lyrical fiction craft with urgent public witness — establishing literary non-fiction firmly alongside novels, poetry, and drama as a vital artistic form.",
  },
};
