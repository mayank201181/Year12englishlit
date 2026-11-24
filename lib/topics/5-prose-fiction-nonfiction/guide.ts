import type { TopicGuide } from "../../types.ts";

const SVG_PSYCHIC_DISTANCE = `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Psychic distance and focalisation ladder from Level 1 distant omniscient to Level 5 unfiltered interiority">
  <rect x="0" y="0" width="560" height="320" rx="14" fill="#ffffff"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">Psychic Distance &amp; Focalisation Ladder (Gardner + Genette)</text>
  <line x1="58" y1="46" x2="58" y2="288" stroke="#be123c" stroke-width="3"/>
  <polygon points="58,296 51,284 65,284" fill="#be123c"/>
  <text x="24" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="#be123c" transform="rotate(-90 24 172)">CLOSER INTERIORITY</text>

  <rect x="80" y="42" width="458" height="44" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2"/>
  <circle cx="58" cy="64" r="10" fill="#475569"/>
  <text x="58" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">1</text>
  <text x="94" y="60" font-size="12" font-weight="800" fill="#1e293b">Distant Omniscient (Zero Focalisation)</text>
  <text x="94" y="76" font-size="10.5" fill="#475569">Panoramic overview; narrator knows more than any character. Cool, panoramic authority.</text>

  <rect x="80" y="94" width="458" height="44" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>
  <circle cx="58" cy="116" r="10" fill="#b45309"/>
  <text x="58" y="120" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">2</text>
  <text x="94" y="112" font-size="12" font-weight="800" fill="#78350f">Social / External Lens (External or Loose 3rd)</text>
  <text x="94" y="128" font-size="10.5" fill="#78350f">Names character and setting; observes gesture and speech from just outside the mind.</text>

  <rect x="80" y="146" width="458" height="44" rx="8" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.2"/>
  <circle cx="58" cy="168" r="10" fill="#0d9488"/>
  <text x="58" y="172" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">3</text>
  <text x="94" y="164" font-size="12" font-weight="800" fill="#115e59">Close Third-Person (Internal Focalisation)</text>
  <text x="94" y="180" font-size="10.5" fill="#115e59">Anchored in one mind using reporting tags ("she noticed", "he dreaded"); restricted knowledge.</text>

  <rect x="80" y="198" width="458" height="44" rx="8" fill="#ffe4e6" stroke="#be123c" stroke-width="1.5"/>
  <circle cx="58" cy="220" r="10" fill="#be123c"/>
  <text x="58" y="224" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">4</text>
  <text x="94" y="216" font-size="12" font-weight="800" fill="#881337">Free Indirect Discourse (Double-Voiced Blend)</text>
  <text x="94" y="232" font-size="10.5" fill="#881337">3rd-person past tense + character idiom, deixis ("now") &amp; questions — NO tags or quotes.</text>

  <rect x="80" y="250" width="458" height="44" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.4"/>
  <circle cx="58" cy="272" r="10" fill="#7c3aed"/>
  <text x="58" y="276" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">5</text>
  <text x="94" y="268" font-size="12" font-weight="800" fill="#4c1d95">Unfiltered Interiority / Stream of Consciousness</text>
  <text x="94" y="284" font-size="10.5" fill="#4c1d95">Raw associative fragments, fractured syntax, immediate perceptual flux inside consciousness.</text>
</svg>`;

const SVG_NARRATIVE_TIME = `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Story time versus discourse time showing in medias res, analepsis, prolepsis and four pacing modes">
  <rect x="0" y="0" width="560" height="310" rx="14" fill="#ffffff"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">Story Time (Fabula) vs Discourse Time (Syuzhet)</text>

  <text x="24" y="54" font-size="11" font-weight="800" fill="#475569">CHRONOLOGICAL STORY (FABULA)</text>
  <line x1="40" y1="74" x2="520" y2="74" stroke="#94a3b8" stroke-width="2.5"/>
  <circle cx="80" cy="74" r="7" fill="#64748b"/>
  <text x="80" y="95" text-anchor="middle" font-size="10" font-weight="700" fill="#334155">A: Childhood</text>
  <circle cx="220" cy="74" r="7" fill="#64748b"/>
  <text x="220" y="95" text-anchor="middle" font-size="10" font-weight="700" fill="#334155">B: Betrayal</text>
  <circle cx="360" cy="74" r="7" fill="#be123c"/>
  <text x="360" y="95" text-anchor="middle" font-size="10" font-weight="800" fill="#be123c">C: Crisis</text>
  <circle cx="490" cy="74" r="7" fill="#0d9488"/>
  <text x="490" y="95" text-anchor="middle" font-size="10" font-weight="700" fill="#0f766e">D: Aftermath</text>

  <path d="M 360 64 C 330 34, 140 34, 86 64" fill="none" stroke="#be123c" stroke-width="2" stroke-dasharray="5,3"/>
  <polygon points="82,66 93,65 88,57" fill="#be123c"/>
  <text x="222" y="42" text-anchor="middle" font-size="10.5" font-weight="800" fill="#be123c">Analepsis (flashback from C to A)</text>

  <path d="M 366 80 C 400 112, 456 112, 484 82" fill="none" stroke="#0d9488" stroke-width="2" stroke-dasharray="5,3"/>
  <polygon points="488,78 478,82 485,89" fill="#0d9488"/>
  <text x="425" y="118" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0f766e">Prolepsis (flashforward)</text>

  <rect x="292" y="114" width="136" height="22" rx="6" fill="#ffe4e6" stroke="#be123c" stroke-width="1"/>
  <text x="360" y="129" text-anchor="middle" font-size="10" font-weight="800" fill="#881337">Opening: in medias res</text>

  <line x1="24" y1="150" x2="536" y2="150" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="24" y="170" font-size="11" font-weight="800" fill="#475569">FOUR PACING SPEEDS (DURATION)</text>

  <rect x="24" y="182" width="120" height="108" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="84" y="202" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e293b">Ellipsis</text>
  <text x="84" y="220" text-anchor="middle" font-size="10" font-weight="700" fill="#be123c">0 pages / Years</text>
  <text x="84" y="242" text-anchor="middle" font-size="9.5" fill="#475569">Unspoken leap;</text>
  <text x="84" y="256" text-anchor="middle" font-size="9.5" fill="#475569">conceals shock</text>
  <text x="84" y="270" text-anchor="middle" font-size="9.5" fill="#475569">or long grief.</text>

  <rect x="154" y="182" width="120" height="108" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>
  <text x="214" y="202" text-anchor="middle" font-size="11.5" font-weight="800" fill="#78350f">Summary</text>
  <text x="214" y="220" text-anchor="middle" font-size="10" font-weight="700" fill="#b45309">1 para / Months</text>
  <text x="214" y="242" text-anchor="middle" font-size="9.5" fill="#78350f">Compresses time;</text>
  <text x="214" y="256" text-anchor="middle" font-size="9.5" fill="#78350f">signals routine</text>
  <text x="214" y="270" text-anchor="middle" font-size="9.5" fill="#78350f">or detachment.</text>

  <rect x="284" y="182" width="120" height="108" rx="8" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.2"/>
  <text x="344" y="202" text-anchor="middle" font-size="11.5" font-weight="800" fill="#115e59">Scene</text>
  <text x="344" y="220" text-anchor="middle" font-size="10" font-weight="700" fill="#0d9488">Real-time 1 : 1</text>
  <text x="344" y="242" text-anchor="middle" font-size="9.5" fill="#115e59">Live dialogue and</text>
  <text x="344" y="256" text-anchor="middle" font-size="9.5" fill="#115e59">action; heightens</text>
  <text x="344" y="270" text-anchor="middle" font-size="9.5" fill="#115e59">dramatic crisis.</text>

  <rect x="414" y="182" width="122" height="108" rx="8" fill="#ffe4e6" stroke="#be123c" stroke-width="1.2"/>
  <text x="475" y="202" text-anchor="middle" font-size="11.5" font-weight="800" fill="#881337">Stretch / Pause</text>
  <text x="475" y="220" text-anchor="middle" font-size="10" font-weight="700" fill="#be123c">Pages / Seconds</text>
  <text x="475" y="242" text-anchor="middle" font-size="9.5" fill="#881337">Time halts for</text>
  <text x="475" y="256" text-anchor="middle" font-size="9.5" fill="#881337">intense memory</text>
  <text x="475" y="270" text-anchor="middle" font-size="9.5" fill="#881337">or reflection.</text>
</svg>`;

const SVG_NONFICTION_ARC = `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Literary non-fiction structural arc rising from concrete anecdote through sensory expansion and structural turn to universal reflection">
  <rect x="0" y="0" width="560" height="300" rx="14" fill="#ffffff"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">Literary Non-Fiction: Structural Arc &amp; Sub-Genre Landscape</text>

  <line x1="48" y1="186" x2="528" y2="186" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="48" y1="54" x2="48" y2="186" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="22" y="122" text-anchor="middle" font-size="10" font-weight="700" fill="#64748b" transform="rotate(-90 22 122)">CONCEPTUAL SCOPE</text>

  <path d="M 74 166 C 142 160, 178 130, 232 122 C 292 112, 316 86, 366 78 C 420 70, 452 62, 504 58" fill="none" stroke="#be123c" stroke-width="3"/>

  <circle cx="78" cy="165" r="7" fill="#b45309"/>
  <rect x="54" y="120" width="106" height="34" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
  <text x="107" y="135" text-anchor="middle" font-size="10" font-weight="800" fill="#78350f">1. Concrete</text>
  <text x="107" y="148" text-anchor="middle" font-size="9.5" fill="#78350f">Anecdote / Object</text>

  <circle cx="222" cy="124" r="7" fill="#0d9488"/>
  <rect x="172" y="76" width="114" height="34" rx="6" fill="#f0fdfa" stroke="#0d9488" stroke-width="1"/>
  <text x="229" y="91" text-anchor="middle" font-size="10" font-weight="800" fill="#115e59">2. Lyrical Detail</text>
  <text x="229" y="104" text-anchor="middle" font-size="9.5" fill="#115e59">Imagery &amp; Context</text>

  <circle cx="366" cy="78" r="8" fill="#be123c"/>
  <rect x="304" y="34" width="124" height="34" rx="6" fill="#ffe4e6" stroke="#be123c" stroke-width="1.2"/>
  <text x="366" y="49" text-anchor="middle" font-size="10" font-weight="800" fill="#881337">3. Structural Turn</text>
  <text x="366" y="62" text-anchor="middle" font-size="9.5" fill="#881337">Counter-memory / Pivot</text>

  <circle cx="504" cy="58" r="7" fill="#7c3aed"/>
  <rect x="438" y="78" width="108" height="44" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="1"/>
  <text x="492" y="95" text-anchor="middle" font-size="10" font-weight="800" fill="#4c1d95">4. Resonant</text>
  <text x="492" y="108" text-anchor="middle" font-size="9.5" fill="#4c1d95">Reflection (open</text>
  <text x="492" y="119" text-anchor="middle" font-size="9.5" fill="#4c1d95">complexity)</text>

  <text x="280" y="214" text-anchor="middle" font-size="11" font-weight="800" fill="#475569">CORE SUB-GENRES IN THE 4TH IB LITERATURE FORM</text>

  <rect x="20" y="226" width="98" height="56" rx="8" fill="#fff1f2" stroke="#fda4af" stroke-width="1.1"/>
  <text x="69" y="246" text-anchor="middle" font-size="10.5" font-weight="800" fill="#881337">Personal Essay</text>
  <text x="69" y="262" text-anchor="middle" font-size="9" fill="#6b4c56">Associative, reflective</text>
  <text x="69" y="274" text-anchor="middle" font-size="9" fill="#6b4c56">mind at work</text>

  <rect x="126" y="226" width="98" height="56" rx="8" fill="#fef3c7" stroke="#fcd34d" stroke-width="1.1"/>
  <text x="175" y="246" text-anchor="middle" font-size="10.5" font-weight="800" fill="#78350f">Memoir</text>
  <text x="175" y="262" text-anchor="middle" font-size="9" fill="#78350f">Selective, thematic</text>
  <text x="175" y="274" text-anchor="middle" font-size="9" fill="#78350f">interrogation of past</text>

  <rect x="232" y="226" width="98" height="56" rx="8" fill="#f0fdfa" stroke="#5eead4" stroke-width="1.1"/>
  <text x="281" y="246" text-anchor="middle" font-size="10.5" font-weight="800" fill="#115e59">Travelogue</text>
  <text x="281" y="262" text-anchor="middle" font-size="9" fill="#115e59">Place, cultural gaze</text>
  <text x="281" y="274" text-anchor="middle" font-size="9" fill="#115e59">&amp; inner reckoning</text>

  <rect x="338" y="226" width="98" height="56" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.1"/>
  <text x="387" y="246" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1e40af">Letters / Diary</text>
  <text x="387" y="262" text-anchor="middle" font-size="9" fill="#1e40af">Direct address, gaps</text>
  <text x="387" y="274" text-anchor="middle" font-size="9" fill="#1e40af">&amp; intimate voice</text>

  <rect x="444" y="226" width="98" height="56" rx="8" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1.1"/>
  <text x="493" y="246" text-anchor="middle" font-size="10.5" font-weight="800" fill="#5b21b6">Oratory / Speech</text>
  <text x="493" y="262" text-anchor="middle" font-size="9" fill="#5b21b6">Acoustic rhythm,</text>
  <text x="493" y="274" text-anchor="middle" font-size="9" fill="#5b21b6">kairos &amp; urgency</text>
</svg>`;

const SVG_RHETORIC_PERSONA = `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Split self in memoir alongside the ethos pathos logos triad and parataxis versus hypotaxis syntax comparison">
  <rect x="0" y="0" width="560" height="310" rx="14" fill="#ffffff"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">Persona, Rhetorical Appeals &amp; Syntactic Architecture</text>

  <rect x="20" y="42" width="246" height="114" rx="10" fill="#fff1f2" stroke="#fda4af" stroke-width="1.3"/>
  <text x="143" y="62" text-anchor="middle" font-size="11.5" font-weight="800" fill="#881337">THE DOUBLE-SELF IN MEMOIR</text>
  <rect x="34" y="74" width="94" height="50" rx="7" fill="#ffffff" stroke="#be123c" stroke-width="1.1"/>
  <text x="81" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="#be123c">Experiencing "I"</text>
  <text x="81" y="109" text-anchor="middle" font-size="9" fill="#475569">Immersed, immediate</text>
  <text x="81" y="120" text-anchor="middle" font-size="9" fill="#475569">partial awareness</text>
  <line x1="130" y1="99" x2="154" y2="99" stroke="#be123c" stroke-width="2"/>
  <polygon points="156,99 149,95 149,103" fill="#be123c"/>
  <polygon points="128,99 135,95 135,103" fill="#be123c"/>
  <rect x="158" y="74" width="94" height="50" rx="7" fill="#ffffff" stroke="#881337" stroke-width="1.1"/>
  <text x="205" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="#881337">Retrospective "I"</text>
  <text x="205" y="109" text-anchor="middle" font-size="9" fill="#475569">Reflective, ironic</text>
  <text x="205" y="120" text-anchor="middle" font-size="9" fill="#475569">re-evaluates memory</text>
  <text x="143" y="145" text-anchor="middle" font-size="9.5" font-weight="700" fill="#881337">Irony &amp; self-scrutiny live in the gap between them.</text>

  <rect x="282" y="42" width="258" height="114" rx="10" fill="#f0fdfa" stroke="#5eead4" stroke-width="1.3"/>
  <text x="411" y="62" text-anchor="middle" font-size="11.5" font-weight="800" fill="#115e59">ARISTOTELIAN APPEALS</text>
  <polygon points="411,72 346,144 476,144" fill="#ffffff" stroke="#0d9488" stroke-width="1.5"/>
  <text x="411" y="96" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0f766e">ETHOS</text>
  <text x="411" y="108" text-anchor="middle" font-size="8.5" fill="#475569">Authority &amp; candour</text>
  <text x="326" y="138" text-anchor="middle" font-size="10.5" font-weight="800" fill="#be123c">PATHOS</text>
  <text x="326" y="150" text-anchor="middle" font-size="8.5" fill="#475569">Empathy</text>
  <text x="496" y="138" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1d4ed8">LOGOS</text>
  <text x="496" y="150" text-anchor="middle" font-size="8.5" fill="#475569">Reasoning</text>

  <rect x="20" y="170" width="246" height="122" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>
  <text x="143" y="190" text-anchor="middle" font-size="11.5" font-weight="800" fill="#78350f">PARATAXIS (Side-by-Side Clauses)</text>
  <rect x="36" y="202" width="60" height="24" rx="5" fill="#ffffff" stroke="#b45309" stroke-width="1.2"/>
  <text x="66" y="218" text-anchor="middle" font-size="9.5" font-weight="700" fill="#78350f">Clause 1.</text>
  <rect x="112" y="202" width="60" height="24" rx="5" fill="#ffffff" stroke="#b45309" stroke-width="1.2"/>
  <text x="142" y="218" text-anchor="middle" font-size="9.5" font-weight="700" fill="#78350f">Clause 2.</text>
  <rect x="188" y="202" width="60" height="24" rx="5" fill="#ffffff" stroke="#b45309" stroke-width="1.2"/>
  <text x="218" y="218" text-anchor="middle" font-size="9.5" font-weight="700" fill="#78350f">Clause 3.</text>
  <text x="143" y="248" text-anchor="middle" font-size="10" fill="#78350f">No subordinating hierarchy ("because", "though").</text>
  <text x="143" y="264" text-anchor="middle" font-size="10" fill="#78350f">Effect: stark urgency, shock, stoic restraint,</text>
  <text x="143" y="279" text-anchor="middle" font-size="10" fill="#78350f">or raw sensory immediacy.</text>

  <rect x="282" y="170" width="258" height="122" rx="10" fill="#eff6ff" stroke="#60a5fa" stroke-width="1.2"/>
  <text x="411" y="190" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e3a8a">HYPOTAXIS (Nested Subordination)</text>
  <rect x="298" y="200" width="226" height="32" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.1"/>
  <rect x="330" y="206" width="164" height="20" rx="5" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.1"/>
  <text x="412" y="219" text-anchor="middle" font-size="9" font-weight="700" fill="#1e3a8a">Although [sub], because [sub], MAIN</text>
  <text x="411" y="250" text-anchor="middle" font-size="10" fill="#1e3a8a">Explicit causal &amp; concessive links.</text>
  <text x="411" y="266" text-anchor="middle" font-size="10" fill="#1e3a8a">Effect: analytical nuance, qualification,</text>
  <text x="411" y="281" text-anchor="middle" font-size="10" fill="#1e3a8a">hesitation, or layered retrospection.</text>
</svg>`;

export const guide: TopicGuide = {
  id: "5-prose-fiction-nonfiction",
  title: "Literary Forms II: Prose Fiction & Literary Non-Fiction",
  strand: "Literary Forms",
  icon: "✒️",
  level: "SL",
  summary:
    "Master how prose fiction manipulates perspective, focalisation, free indirect discourse, temporal architecture, and evolving symbols — and how literary non-fiction shapes lived reality through essayistic structure, split persona, rhetorical appeals, and syntax.",
  intro:
    "Prose looks deceptively familiar because we read sentences every day. Yet on IB English A: Literature Paper 1, Paper 2, the Individual Oral, and the HL Essay, prose passages reward readers who look *through* the story to the invisible machinery shaping perception. Who is holding the narrative camera? Why does a single second stretch across half a page while a decade disappears between paragraphs? And in **literary non-fiction** — the fourth official IB Literature form — how does an essayist, memoirist, travel writer, or orator turn real memory into crafted art without surrendering critical scrutiny? Every illustrative published work cited below carries `[Example text — not a set text]`; all close-reading skills transfer directly to any unseen or studied prose work.",
  guide: [
    {
      id: "narrative-perspective-focalization",
      heading: "Narrative Perspective, Focalization & Free Indirect Discourse",
      level: "SL",
      discovery: {
        problem:
          "Compare two versions of the same moment:\n\n> **Version A:** Mira read the rejection letter from the conservatory and folded it neatly. She wondered why she had dared to apply.\n\n> **Version B:** Mira folded the stiff cream letter twice. Honestly, who on earth expected a scholarship to Vienna on a damp Tuesday in November? The kettle clicked off, entirely unbothered.\n\nBoth versions use third-person past tense (*Mira*, *folded*). So why does Version B suddenly feel as though we are standing right inside Mira's head?",
        idea: "Version B drops the reporting verb (*She wondered*) and lets Mira's own conversational idiom (*Honestly, who on earth...*) and ironic projection (*the kettle... unbothered*) bleed directly into the narrator's third-person past tense. That fusion is **free indirect discourse** — and spotting it immediately elevates Criterion B analysis.",
      },
      body: `### 1. Grammatical Person vs Genette's Focalisation
Students often stop at labelling a narrator "first-person" or "third-person". IB examiners expect you to separate two distinct narratological questions formulated by Gérard Genette:
- **Voice (*Who speaks?*):** The grammatical narrator — first-person (*I/we*, often participating in events), rare second-person (*you*, implicating the reader or staging self-estrangement), or third-person (*she/he/they*, standing outside the action).
- **Focalisation (*Who sees, hears, and perceives?*):** The perceptual filter through which information reaches the reader (note: both British *focalisation* and international *focalization* are standard in IB essays).

| Focalisation Type | What the Narrator Knows | Typical Literary Effect |
| --- | --- | --- |
| **Zero focalisation** (omniscient) | More than any character; can move freely across minds, eras, and ironies | Sweeping social panorama, dramatic irony, philosophical commentary |
| **Internal focalisation** (fixed, variable, or multiple) | Strictly what one focalising mind perceives at a given moment | Psychological intimacy, subjective bias, suspense, claustrophobia |
| **External focalisation** (camera-eye) | Less than the characters; records only observable surfaces, speech, and gesture | Clinical detachment, enigma, emotional withholding, moral ambiguity |

### 2. Free Indirect Discourse (FID)
**Free indirect discourse** blends third-person narrator grammar (third-person pronouns + past tense) with a character's interior consciousness — without quotation marks or reporting clauses (*she thought*, *he told himself*).

Look for four unmistakable textual markers of FID:
- **Character-specific diction or exclamations:** *Honestly*, *of all people*, *what a farce*.
- **Direct-style questions or hesitations in past tense:** *Could she really walk back into that hall tomorrow?*
- **Proximal deictics anchored to the character's present:** *now*, *here*, *today*, *tomorrow* paired with past-tense verbs (*Tomorrow was the tribunal*).
- **Subjective modal verbs and value judgements:** *must have*, *surely*, *of course* — reflecting the character's hopes or rationalisations rather than objective narrative truth.

Because two voices occupy the exact same sentence, FID creates **double-voiced irony**: the reader experiences the character's self-justifications from within while still sensing the narrator's subtle ironic framing. Classic uses appear in Jane Austen's *Emma* \`[Example text — not a set text]\` and Virginia Woolf's *Mrs Dalloway* \`[Example text — not a set text]\`.

### 3. Psychic Distance (John Gardner's Scale)
Novelist John Gardner proposed a five-point scale of **psychic distance** — how close the prose brings the reader to a character's immediate inner life:
1. **Level 1 (Cosmic / Panoramic):** *"In the dry autumn of 1954, the harbour town lost its last timber mill."*
2. **Level 2 (Social Exterior):** *"Old Tomas sat outside the shut dock gates, turning a cold brass key in his palm."*
3. **Level 3 (Close Third / Internal):** *"Tomas watched the gulls wheel above the empty slipway and felt the familiar tightness return behind his ribs."*
4. **Level 4 (Free Indirect Discourse):** *"Forty years on that jetty, and not even a hand-signed letter? Let the accountants try hauling spruce in a November gale."*
5. **Level 5 (Stream of Consciousness):** *"Salt on the lip — crane chains clinking — no, silence now, only gulls — cold brass, cold hands."*

In Paper 1 unseen prose, the richest analytical gold rarely lies in naming a static level; it lies in tracking a **shift** in psychic distance (for instance, zooming abruptly from Level 4 intimacy back to Level 1 detachment to isolate a character in grief).

### 4. Unreliable Narration
A narrator is **unreliable** (Wayne Booth's term) when a noticeable fissure opens between what the narrator claims and what the text's accumulated details imply. Unreliability is not only deliberate lying; it often stems from naivety, trauma, vanity, ideological conditioning, or self-deception — as famously illustrated by Stevens in Kazuo Ishiguro's *The Remains of the Day* \`[Example text — not a set text]\`.

Watch for five textual cues of unreliability:
- **Defensive over-insistence:** *"I am not a jealous man; indeed, anyone at the ministry will confirm my composure."*
- **Micro-contradictions:** Reporting an event one way on page 1, then letting a conflicting detail slip ten lines later.
- **Tonal incongruity:** Clinical, bureaucratic, or jaunty diction applied to cruelty or devastation.
- **Selective omission or abrupt digression:** Changing the subject right at the point of moral accountability.
- **Gap between others' reported reactions and the narrator's interpretation:** Describing a listener turning pale or edging toward the door while concluding, *"Clearly she was moved by my candour."*`,
      diagram: SVG_PSYCHIC_DISTANCE,
      diagramCaption:
        "How Genette's focalisation and Gardner's psychic distance work together as a narrative zoom lens.",
      workedExamples: [
        {
          title: "Close-Reading a Shift into Free Indirect Discourse",
          problem:
            "Analyse how narrative perspective constructs irony in this unseen prose extract:\n\n> *Arthur adjusted his silk tie in the vestibule mirror. Seven minutes late, yet surely a man of his seniority need not sprint up marble stairs like an apprentice clerk. After all, hadn't the committee waited three winters for his signature? He pushed open the oak doors and smiled broadly at the rows of turned backs.*",
          steps: [
            "1. Establish the opening baseline: Sentence 1 sits at Level 2–3 (external gesture in third-person past tense: *Arthur adjusted his silk tie*).",
            "2. Pinpoint the syntactic glide into **free indirect discourse** in Sentences 2–3: no reporting verb (*he thought*) appears, yet modal colouring (*surely*), conversational linker (*After all*), and a self-flattering rhetorical question (*hadn't the committee waited...?*) let Arthur's pompous voice overtake the narration.",
            "3. Track the abrupt zoom back out in Sentence 4: external focalisation (*rows of turned backs*) punctuates his interior confidence with quiet **situational irony**, exposing his blindness to his declining status.",
          ],
          answer:
            "By gliding from external observation into unquoted free indirect discourse (*surely*, *After all*, rhetorical question) before snapping back to the stark visual reality of *turned backs*, the passage lets Arthur's vanity convict itself without heavy-handed narratorial condemnation.",
          yourTurn: {
            question:
              "Name the narrative technique used in Sentences 2–3 where third-person past-tense grammar blends directly with Arthur's unquoted interior phrasing and rhetorical question.",
            answer: {
              type: "text",
              accept: [
                "free indirect discourse",
                "free indirect speech",
                "free indirect style",
                "FID",
              ],
              display: "free indirect discourse",
            },
            solution:
              "Free indirect discourse (also called free indirect speech or style) merges third-person past tense with a character's interior idiom, modals (*surely*), and questions without quotation marks or reporting tags.",
          },
        },
        {
          title: "Diagnosing an Unreliable First-Person Narrator",
          problem:
            "Identify two textual cues of narrative unreliability in this unseen opening:\n\n> *I mention the locked cedar chest only because my sister insists on making melodrama out of housekeeping. Naturally I burned the correspondence before the solicitor arrived — damp paper breeds mould, and someone in this family must remain practical. When Clara wept on the landing, I poured her weak tea and noted with satisfaction how rapidly hysteria subsides once met with quiet efficiency.*",
          steps: [
            "1. Spot **defensive minimisation and incongruous diction**: Calling the destruction of legal/family letters *housekeeping* and *practical* reveals calculated euphemism.",
            "2. Spot the **gap between reported behaviour and self-serving interpretation**: Clara *wept on the landing*, yet the narrator reframes grief as *hysteria* cured by *quiet efficiency* — inviting the reader to distrust the speaker's moral authority.",
          ],
          answer:
            "Euphemistic reframing (*housekeeping*, *damp paper*) and the jarring gap between Clara's visible grief and the narrator's smug verdict (*hysteria*, *satisfaction*) expose an unreliable, self-justifying persona.",
          yourTurn: {
            question:
              "In Genette's narratology, what term describes a 'camera-eye' narrator who reports only observable exterior speech and action, with zero access to any character's inner thoughts?",
            answer: {
              type: "text",
              accept: ["external focalisation", "external focalization"],
              display: "external focalisation",
            },
            solution:
              "External focalisation restricts narration to externally observable appearances, gestures, and spoken dialogue — withholding interior consciousness.",
          },
        },
      ],
      keyPoints: [
        "Always separate **voice** (grammatical person: who speaks) from **focalisation** (perceptual filter: who sees).",
        "**Free indirect discourse** lacks quotation marks and reporting tags, blending narrator grammar with character lexicon, deixis (*now/here*), and modal colouring (*surely, must*).",
        "Analyse **shifts in psychic distance** rather than treating perspective as a static label.",
        "**Unreliable narration** is proven through concrete textual fissures (contradiction, euphemism, tonal incongruity, omission), never vague accusations that 'the narrator seems biased'.",
      ],
      whyItWorks:
        "Readers instinctively trust a grammatical narrator's authority until stylistic clues create friction. By modulating focalisation and psychic distance, a writer controls the exact ratio of empathy to ironic scrutiny — forcing the reader to become an active ethical interpreter rather than a passive spectator.",
      strategies: [
        "On Paper 1 unseen prose, circle every reporting verb (*thought, felt, knew*), modal (*surely, perhaps, must*), and proximal deictic (*now, tomorrow, here*) — wherever reporting verbs vanish while modals surge, test for free indirect discourse.",
        "Never claim 'first-person narration makes the story automatically biased and third-person makes it objective' — a third-person internally focalised narrator can be just as claustrophobically subjective as any first-person 'I'.",
        "When writing about unreliability, pair **what the narrator asserts** with **what the text quietly reveals** using contrasting quotations.",
      ],
      thinkDeeper:
        "How does **variable internal focalisation** (shifting focalisers between chapters or scenes) change a reader's ethical judgement compared with a single fixed focaliser? Consider how witnessing the same conflict through incompatible consciousnesses resists tidy moral closure.",
    },

    {
      id: "prose-time-setting-symbolism",
      heading: "Temporal Structure, Pace, Setting, Characterisation & Symbolism",
      level: "SL",
      discovery: {
        problem:
          "Suppose a short story concerns a bridge collapse that kills a town's ferryman. Compare three ways to open page 1:\n\n1. Start twenty years earlier on the day the bridge's blueprints are signed.\n2. Open mid-storm as the iron cables begin to sing and snap (*in medias res*).\n3. Open with an old archivist handing a sealed notebook to a journalist forty years later, framing the tragedy inside someone else's testimony.\n\nThe underlying events (*fabula*) are identical — so what changes in the reader's mind?",
        idea: "Literary meaning lives in the **syuzhet** (how events are ordered, framed, and paced). Starting *in medias res* generates sensory urgency; a frame narrative makes truth and memory themselves the central subject; inserting an *analepsis* at a moment of crisis turns backstory into emotional explanation rather than mere exposition.",
      },
      body: `### 1. Story Time (*Fabula*) vs Discourse Time (*Syuzhet*)
Every prose narrative operates on two clocks:
- **Story time (*fabula*):** The chronological sequence in which events occur in the fictional world.
- **Discourse time (*syuzhet*):** The order and proportion in which the text actually delivers those events to the reader.

Key structural reordering devices:
- **Analepsis (flashback):** Reaching backward in time. Don't simply say "gives backstory" — ask *why this memory erupts at this exact narrative threshold* (often triggered by trauma, guilt, or sensory association).
- **Prolepsis (flashforward / proleptic foreshadowing):** Jumping ahead to reveal or hint at a future outcome, shifting suspense from *what* happens to *how* and *why* the inevitable unfolds.
- ***In medias res*:** Opening in the middle of action or dialogue, stripping away comforting orientation so the reader must reconstruct context alongside disoriented characters.
- **Frame narrative (embedded narration):** An outer narrative enclosing one or more inner stories (as in Mary Shelley's *Frankenstein* \`[Example text — not a set text]\` or Emily Brontë's *Wuthering Heights* \`[Example text — not a set text]\`). Frames foreground **mediation, hearsay, historical distance, and competing versions of truth**.

### 2. Narrative Pacing (Duration)
Genette maps pacing as the ratio between **discourse time** (pages/lines spent) and **story time** (clock time elapsed):
- **Ellipsis:** Time passes in the story while the text remains silent (*"Six winters later..."*, or a stark white line break). Ellipses often mark trauma too painful to narrate or emotional estrangement.
- **Summary:** Compresses long spans into brief prose (*"For three summers they repaired the orchard wall in silence"*), establishing rhythm, monotony, or retrospective detachment.
- **Scene:** Approximates 1:1 real-time unfolding through dialogue and micro-action, pulling the reader into dramatic confrontation.
- **Stretch / Descriptive Pause:** Story time slows nearly to a halt while discourse time expands into sensory detail or interior memory — spotlighting a decisive psychological awakening.

### 3. Setting, Spatial Atmosphere & Pathetic Fallacy
In IB analysis, setting is never mere "background". Treat space as an active semantic system:
- **Threshold and liminal spaces** (doorways, platforms, coastlines, bridges) frequently dramatise identity transition or moral hesitation.
- **Spatial contrast** (claustrophobic interiors vs exposed landscapes; colonial boulevards vs neglected alleyways) encodes class, gender, and institutional power.
- **Pathetic fallacy:** Attributing human emotion or temperament to weather and landscape (*"the brooding estuary"*, *"vindictive sleet"*) to externalise psychological states. Always test the opposite too: **ironic environmental contrast**, where serene sunlight or mundane cheerfulness intensifies a character's isolation.

### 4. Characterisation, Foils & Evolving Symbols
- **Indirect characterisation:** Rather than explicit adjectives (*"he was cruel"*), literary prose reveals character through micro-gestures, speech rhythms, habitual objects, silences, and how others physically react around them.
- **Foil characters:** Two figures placed in structural parallel whose contrasting choices, temperaments, or values throw each other's defining traits into sharp relief.
- **Motif vs Evolving Symbol:** A **motif** is a recurring image, phrase, or sound woven through the text (e.g. ticking clocks, locked drawers). A **symbol** condenses complex, often contradictory ideas into a concrete object or space. Top-band IB essays **never reduce a symbol to a flat equals sign** ("bird = freedom"); instead, they trace how the symbol's meaning *mutates, accrues irony, or fractures* as the narrative develops.`,
      diagram: SVG_NARRATIVE_TIME,
      diagramCaption:
        "How reordering (analepsis, prolepsis, in medias res) and duration (ellipsis, summary, scene, pause) turn raw events into narrative tension.",
      workedExamples: [
        {
          title: "Analysing Pacing Shifts & Pathetic Fallacy",
          problem:
            "Examine how temporal pacing and setting construct emotional tension in this unseen extract:\n\n> *For seven quiet years the ledger balanced to the halfpenny, and every October the harbour fog thinned on cue. Then came the Tuesday the crane snapped. In the three seconds before the steel cable struck the pier, Dev counted four rusted rivets on the boom, heard a gull cough over the breakwater, and saw the bruised sky lean low as though eager to witness the wreck.*",
          steps: [
            "1. Contrast the **temporal pacing**: Sentence 1 uses compressed **summary** (*For seven quiet years... every October*) to establish habitual security and institutional order.",
            "2. Identify the abrupt **stretch / dilation** in Sentence 3: three real-time seconds expand across a long tripartite sensory clause (*counted four rusted rivets... heard a gull... saw the bruised sky*), enacting shock and hyper-vigilant trauma.",
            "3. Analyse **pathetic fallacy**: *the bruised sky lean low as though eager to witness* projects menace and voyeuristic hostility onto the weather, amplifying Dev's sudden vulnerability.",
          ],
          answer:
            "The violent shift from seven-year temporal summary to a dilated three-second stretch shatters routine security, while pathetic fallacy (*bruised sky lean low as though eager*) turns the environment itself into a menacing spectator of catastrophe.",
          yourTurn: {
            question:
              "What narratological term describes a sudden jump backward in discourse time to recount an earlier event?",
            answer: {
              type: "text",
              accept: ["analepsis", "flashback"],
              display: "analepsis",
            },
            solution:
              "Analepsis (flashback) interrupts the current narrative timeline to retrieve an earlier event or memory.",
          },
        },
        {
          title: "Tracking a Foil & an Evolving Symbol",
          problem:
            "Comment on how the brass compass functions symbolically alongside the two brothers in this unseen pairing:\n\n> *At eighteen, Jonas polished their father's brass compass every dusk until the glass shone like ice; Eli tossed his own rusted tin box beneath the floorboards. Twelve years later, stranded at the border checkpoint, Jonas watched the needle spin wildly near the iron barricade while Eli simply lifted his chin toward the wind and named the river's bend by smell.*",
          steps: [
            "1. Identify **foil characterisation**: Jonas (orderly, reliant on inherited instruments) is structurally contrasted with Eli (irreverent, embodied, intuitive).",
            "2. Trace the **evolving symbol**: Initially, the brass compass represents disciplined heritage and certainty (*polished... shone like ice*); by the checkpoint, the *iron barricade* makes its needle *spin wildly*, turning the inherited instrument into an ironic symbol of institutional disorientation when confronting geopolitical borders.",
          ],
          answer:
            "The brothers operate as structural foils whose contrasting attitudes to inheritance invert over time: the brass compass evolves from an emblem of orderly certainty into a compromised relic rendered useless by the iron border, validating Eli's sensory adaptability.",
          yourTurn: {
            question:
              "What literary term describes a character intentionally contrasted with another figure so that their differing traits and choices illuminate each other?",
            answer: {
              type: "text",
              accept: ["foil", "foil character", "character foil"],
              display: "foil",
            },
            solution:
              "A foil (or foil character) highlights key qualities, values, or flaws of another character through structured contrast.",
          },
        },
      ],
      keyPoints: [
        "Distinguish **story time (*fabula*)** from **discourse time (*syuzhet*)**; explain *why* an analepsis, prolepsis, or frame appears where it does.",
        "Track **pacing contrasts** (ellipsis vs summary vs scene vs stretch) to show where the writer concentrates psychological weight.",
        "Read **setting** as symbolic and ideological space — notice both pathetic fallacy and ironic environmental contrast.",
        "Never give a symbol a static dictionary meaning; trace how motifs and symbols **evolve or turn ironic** across a text.",
      ],
      whyItWorks:
        "Because human memory and grief do not move at a uniform clock speed, non-linear ordering and variable pacing mimic lived consciousness. Likewise, foils and evolving symbols let writers argue complex ideas through concrete dramatic contrast rather than overt lecturing.",
      strategies: [
        "Draw a tiny 3-step timeline in your Paper 1 margin: mark where the passage begins, where time jumps or stalls, and where it lands — temporal shifts make outstanding Criterion C paragraph pivots.",
        "Replace 'the weather creates pathetic fallacy showing sadness' with precision: name the specific figurative verb (*brooding, scalding, indifferent*) and link it to the focaliser's internal tension.",
        "For Paper 2 comparative essays, comparing how two authors deploy **frame narratives** or **evolving domestic symbols** yields sharp cross-text structural analysis.",
      ],
      thinkDeeper:
        "Why do many postcolonial and modernist narratives resist tidy chronological progression, favouring fragmented analepsis and stark ellipses instead? Consider how broken temporal form can mirror historical rupture or unassimilated trauma.",
    },

    {
      id: "literary-nonfiction-genres",
      heading: "Literary Non-Fiction: Essay, Memoir, Travel Writing & Speech",
      level: "SL",
      discovery: {
        problem:
          "Read this unseen opening of a personal essay:\n\n> *After the river receded, our family encyclopaedias dried into pleated fans of silt. Every volume from A to M refused to shut, as though history itself had swollen past the spine built to contain it. My grandmother stacked bricks across the covers; the books simply lifted the bricks overnight.*\n\nEvery physical fact here could appear in a flood-insurance claim. What transforms it into **literary non-fiction**?",
        idea: "Instead of merely reporting flood damage, the writer turns wet books into a kinetic **extended metaphor** for unruly, uncontainable memory (*history itself had swollen past the spine*), using rhythmic pacing and an understated comic image (*lifted the bricks overnight*) to prepare a conceptual pivot about inheritance.",
      },
      body: `### 1. The Fourth Official IB Literature Form
Alongside Poetry, Drama, and Prose Fiction, **Prose: Non-Fiction** is one of the four core literary forms assessed in IB English A: Literature. On Paper 1, one of your unseen passages is very frequently literary non-fiction — an essay, memoir extract, travelogue, letter, or speech.

A fatal exam error is treating non-fiction as "just opinions and facts" and hunting only for persuasive bullet points. **Literary non-fiction uses the full imaginative toolkit of literature** — narrative arc, focalised anecdote, figurative imagery, acoustic cadence, tonal irony, and structural turns — to interrogate lived human experience.

### 2. Navigating the Key Sub-Genres

| Sub-Genre | Distinguishing Structural & Stylistic Features | What to Analyse Closely (Criterion B) |
| --- | --- | --- |
| **Personal / Familiar Essay** | Exploratory, associative voice moving from a small concrete trigger (an object, encounter, or word) outward into wider cultural or philosophical reflection (e.g. Michel de Montaigne \`[Example text — not a set text]\`, James Baldwin \`[Example text — not a set text]\`, Joan Didion \`[Example text — not a set text]\`) | Associative leaps, structural turns (*voltas*), self-questioning tone, recurring metaphors linking private to public |
| **Memoir** | Selective, thematic, episode-driven reconstruction of a defined period, relationship, or wound; openly preoccupied with *how* memory works | Gap between younger and older selves, sensory reconstruction, admissions of blurred recall, lyric compression |
| **Autobiography** | Broader chronological account of a public or representative life arc, often tracing formation and legacy | Self-fashioning, selection/omission of milestones, public authority vs private vulnerability |
| **Travel Writing (Travelogue)** | Combines physical itinerary with cultural observation and internal reckoning across unfamiliar geographies | The **observer's gaze** (humility vs exoticisation/imperial framing), sensory contrast between 'home' and 'elsewhere', moments of cultural disorientation |
| **Letters & Diaries** | Addressed to a named recipient (*you*) or private future self; immediate, dated, shaped by unspoken shared context | Direct address, intimacy vs performance, emotional urgency, what remains unsaid between lines |
| **Speeches & Literary Oratory** | Crafted for live vocal delivery in a specific historical moment (*kairos*) | Acoustic rhythm, inclusive pronouns (*we/our*), structural crescendo, interplay of moral urgency and poetic imagery |

### 3. Essential Craft Moves in Literary Non-Fiction
- **The Anchoring Anecdote:** Rather than opening with dry abstractions (*"Urban renewal destroys community"*), literary essayists begin with a single textured scene or encounter — then allow its details to radiate outward into cultural critique.
- **Lyrical Imagery & Motif:** Figurative language in non-fiction is never decorative "prettiness"; it reveals the writer's conceptual lens (e.g. describing a border wall in surgical diction vs geological diction frames the entire political argument differently).
- **The Structural Turn (*Prose Volta*):** Watch for the exact paragraph where an essay pivots — from nostalgia to discomfort, from personal reminiscence to systemic critique, or from confident assertion to unsettling doubt. Naming and unpacking that structural turn is one of the fastest ways into Band 5 on Criterion C as well as Criterion B.
- **Tonal Modulation:** Notice when a travel writer or memoirist shifts from wry humour to elegiac stillness, or from crisp reportage to lyrical confession — the shift itself signals thematic pressure.`,
      diagram: SVG_NONFICTION_ARC,
      diagramCaption:
        "How literary non-fiction moves from grounded sensory anecdote through lyrical expansion and a structural turn toward open-ended reflection.",
      workedExamples: [
        {
          title: "Unpacking Observer's Gaze & Structural Turn in Travel Writing",
          problem:
            "Analyse how the writer shapes perspective and tone in this unseen travelogue excerpt:\n\n> *I arrived at the salt flats armed with three guidebooks and a borrowed telephoto lens, determined to capture 'timeless stillness'. By noon, however, the heat had warped my tripod hinge, and a teenage salt-harvester paused beside his wheelbarrow to ask — in sharper English than my own phrasebook — why visitors always photographed the empty horizon instead of the men shovelling it. Suddenly my notebooks felt heavier than his iron spade.*",
          steps: [
            "1. Examine the opening **self-ironising persona**: Military diction (*armed*) and scare-quoted cliché (*'timeless stillness'*) critique the tourist's extractive, aestheticising gaze before the encounter even occurs.",
            "2. Identify the **structural turn** at *By noon, however*: physical failure (*warped my tripod hinge*) strips away the observer's technical buffer, giving the local labourer vocal agency that inverts the expected power dynamic (*sharper English than my own phrasebook*).",
            "3. Analyse the closing **symbolic contrast**: *notebooks felt heavier than his iron spade* converts literal weight into ethical guilt — shifting the passage from travelogue comedy into postcolonial self-interrogation.",
          ],
          answer:
            "Through ironic military diction (*armed*), a sharp structural pivot (*By noon, however*), and the closing tactile metaphor (*notebooks felt heavier than his iron spade*), the travel writer exposes and dismantles the romanticising tourist gaze.",
          yourTurn: {
            question:
              "Which literary non-fiction sub-genre focuses selectively on a specific theme, period, or relationship — foregrounding the act of remembering — rather than attempting a full chronological life-span account?",
            answer: {
              type: "text",
              accept: ["memoir", "a memoir"],
              display: "memoir",
            },
            solution:
              "Memoir is selective and thematic, centring on a specific period, relationship, or emotional thread and often interrogating memory itself, whereas autobiography aims for comprehensive chronological coverage.",
          },
        },
        {
          title: "From Concrete Anecdote to Conceptual Resonance in a Personal Essay",
          problem:
            "Explain how the anecdote functions structurally in this unseen personal essay opening:\n\n> *Every Sunday my grandfather oiled a pocket watch that had lost its minute hand in 1962. He never replaced the brass pointer; knowing the hour, he claimed, left room for mercy. Only decades later, watching commuters sprint beneath glowing digital departure boards, did I suspect he had not been resisting punctuality so much as mourning a slower century.*",
          steps: [
            "1. Spot the **anchoring anecdote**: A singular domestic habit (oiling a handless watch) establishes intimate specificity and familial warmth.",
            "2. Trace the **juxtaposition and temporal pivot** (*Only decades later*): Contrasting the grandfather's brass watch with *glowing digital departure boards* scales a private quirk into a cultural critique of modern acceleration.",
          ],
          answer:
            "The grandfather's handless watch serves as a concrete narrative anchor whose sensory patina contrasts starkly with digital departure boards, turning private nostalgia into a nuanced meditation on modernity and temporal anxiety.",
          yourTurn: {
            question:
              "What term names a brief, vivid real-life incident or micro-story used by an essayist or speaker to ground an abstract idea in lived human detail?",
            answer: {
              type: "text",
              accept: ["anecdote", "an anecdote", "personal anecdote"],
              display: "anecdote",
            },
            solution:
              "An anecdote anchors abstract ideas in concrete, memorable lived detail before the writer widens the conceptual lens.",
          },
        },
      ],
      keyPoints: [
        "**Literary non-fiction** is crafted art, not raw reportage: analyse imagery, structure, tone, pacing, and irony with the same rigour you bring to novels.",
        "Know the conventions of each sub-genre: **personal essay** (associative inquiry), **memoir** (selective, thematic memory), **autobiography** (chronological life arc), **travelogue** (observer's gaze & place), **letters** (intimate address), and **speech** (vocal cadence & *kairos*).",
        "Locate the **structural turn** — the exact moment an essay pivots from anecdote to complication or from private detail to collective critique.",
        "In travel writing and reportage, interrogate the **observer's gaze**: who holds the pen, who gets quoted, and whether the writer questions their own framing.",
      ],
      whyItWorks:
        "Because literary non-fiction carries the implicit weight of 'this really happened', its metaphors and structural pivots acquire ethical urgency. By moving from a single sensory detail to a wider human question, essayists invite readers to think *alongside* an inquiring mind rather than absorb pre-packaged conclusions.",
      strategies: [
        "On Paper 1, immediately identify the **exact non-fiction sub-genre** and **implied audience/occasion** in your introduction — then show how the writer fulfils or subverts that sub-genre's expectations.",
        "Never write 'because this is non-fiction, it is more realistic and relatable' — that is an empty generalisation. Instead, analyse *how* the writer constructs the illusion of candour or immediacy through concrete detail.",
        "Look for **open-ended endings** in personal essays: unlike school persuasive essays, great literary essays often end on a resonant image or unresolved paradox rather than a tidy moral slogan.",
      ],
      thinkDeeper:
        "Where does the boundary between memoir and autofiction blur? When a memoirist reconstructs dialogue spoken thirty years earlier, does 'emotional truth' justify imaginative recreation — and how should a critical IB reader evaluate that choice?",
    },

    {
      id: "rhetoric-persona-truth-claims",
      heading: "Persona, Rhetorical Craft, Syntax & Negotiating Truth-Claims",
      level: "SL",
      discovery: {
        problem:
          "Read this single sentence from an unseen memoir:\n\n> *At nine I believed the iron garden bolts kept intruders out; at forty-two I recognise they were always slid shut from the hallway side.*\n\nCount how many versions of 'I' live inside this sentence — and notice how the balanced two-part grammar sharpens its emotional sting.",
        idea: "Two distinct personas share the sentence: the **experiencing self** (*At nine I believed*) and the **retrospective self** (*at forty-two I recognise*). Framed in crisp **antithesis** (outside intruders vs inside hallway), the sentence transforms a childhood misconception into an adult revelation about domestic confinement.",
      },
      body: `### 1. Persona and the Split Self in Non-Fiction
Just as you never equate a poem's speaker with the biographical poet, never treat the *"I"* of a memoir, travelogue, or essay as raw, unmediated reality. The writer deliberately constructs a **persona** — selecting which memories to surface, which flaws to confess, and which tone (ironic, elegiac, combative, bewildered) to adopt.

In memoir and autobiographical essays, pay special attention to the **double-self**:
- **The Experiencing Self:** The younger, immersed consciousness living inside the past moment, with limited foresight and immediate sensory reactions.
- **The Retrospective (Narrating) Self:** The older voice writing from the present, armed with hindsight, irony, regret, or revised moral clarity.

Top-band IB commentary examines the **friction between the two selves** — where the older narrator gently mocks, pities, or corrects their younger convictions, or admits that the younger self saw a truth the adult later tried to forget.

### 2. Aristotelian Appeals as Literary Craft
Classical rhetoric offers three lenses that work powerfully in literary non-fiction when analysed as **stylistic choices** rather than crude advertising tricks:
- **Ethos (credibility, character, moral authority):** Built through tone, intellectual precision, lived witness — and paradoxically through **concession and vulnerability** (admitting uncertainty or past error often wins deeper reader trust than dogmatic certainty).
- **Pathos (emotional resonance):** Evoked through sensory particulars, silence, understatement, and human cadence. Notice how **restraint** often generates far stronger pathos than melodramatic adjectives.
- **Logos (reasoned architecture):** Built through logical progression, comparison, historical evidence, structured counter-argument, and disciplined definition of terms.

### 3. Rhetorical Schemes & Syntactic Architecture
Syntax is meaning in motion. Master these five high-yield devices for Paper 1 and IO close reading:
- **Anaphora:** Repeating the same word or phrase at the start of successive clauses (*"We kept the ledgers. We kept the silence. We kept the key."*). Builds incantatory momentum, moral insistence, or inescapable routine. (By contrast, repeating endings is **epistrophe**.)
- **Antithesis:** Placing sharply contrasting ideas in balanced, parallel grammar (*"built to shelter, used to conceal"*). Clarifies ethical or ideological conflict with epigrammatic force.
- **Tricolon:** A rhythmic series of three parallel words, phrases, or clauses. Often moves from concrete to abstract, builds crescendo, or springs an ironic sting on the third beat.
- **Parataxis:** Short, independent clauses placed side by side with minimal or no subordination (*"The sirens stopped. Dust settled on the apricots. Nobody spoke."*). Enacts shock, stoic restraint, blunt realism, or childlike perception.
- **Hypotaxis:** Multi-layered sentences using subordinating conjunctions (*although, because, while, unless, whereas*) to arrange ideas in explicit hierarchy. Enacts analytical nuance, hesitation, self-qualification, or the tangled web of memory.

### 4. Interrogating Memory, Subjectivity & Truth-Claims
French theorist Philippe Lejeune described the **autobiographical pact**: non-fiction invites readers to trust that the author, narrator, and protagonist share a real historical identity. Yet sophisticated IB readers actively interrogate how **truth-claims** are negotiated:
- **Epistemic hedging:** Phrases like *perhaps*, *as I remember it*, *the photograph insists*, or *I may have invented the rain* openly foreground memory's fragility — paradoxically strengthening ethical honesty (*ethos*) while destabilising certainty.
- **Selective framing & silence:** Whose voices are quoted directly, and whose perspectives are summarised or omitted?
- **Performative authority:** How does an orator or essayist use collective pronouns (*we*, *our*) to manufacture consensus — and might a resisting reader question who that *"we"* silently excludes?`,
      diagram: SVG_RHETORIC_PERSONA,
      diagramCaption:
        "How split persona, the Ethos–Pathos–Logos triad, and parataxis vs hypotaxis work together to negotiate authority and truth in literary non-fiction.",
      workedExamples: [
        {
          title: "Analysing Syntax & Rhetorical Schemes in an Unseen Speech",
          problem:
            "Analyse how rhetorical schemes and syntactic shifts build persuasive force in this unseen speech excerpt:\n\n> *Although some advisors urge us to postpone repair until the treasury recovers, and although delay always wears the polite disguise of prudence, we know what postponement costs. We see it in the cracked sea-walls. We see it in the shuttered clinics. We see it in the silence of young families packing before the monsoon. Action is expensive; neglect is terminal.*",
          steps: [
            "1. Examine the opening **hypotaxis** (*Although... and although... we know*): Nested concessive clauses model calm **logos** and reasonable **ethos**, anticipating counter-arguments before refuting them with *polite disguise of prudence* (personifying evasion).",
            "2. Track the shift into **anaphora** and **tricolon** (*We see it in... / We see it in... / We see it in...*): Three escalating parallel clauses shift from physical infrastructure (*sea-walls*) to public care (*clinics*) to human displacement (*young families*), building urgent **pathos** through collective witness (*We*).",
            "3. Analyse the closing **antithesis** in crisp **parataxis** (*Action is expensive; neglect is terminal*): Stripping away all subordination turns moral urgency into an unanswerable binary climax.",
          ],
          answer:
            "The orator moves deliberately from balanced hypotaxis (establishing measured ethos and logos) into an escalating tricolon driven by anaphora (*We see it in...*), culminating in stark paratactic antithesis (*Action is expensive; neglect is terminal*) that reframes inaction as existential peril.",
          yourTurn: {
            question:
              "What syntactic term describes placing short, grammatically equal clauses side by side without subordinating conjunctions (such as 'because' or 'although')?",
            answer: {
              type: "text",
              accept: ["parataxis"],
              display: "parataxis",
            },
            solution:
              "Parataxis places clauses side by side without grammatical subordination, creating blunt immediacy, urgency, or stoic restraint.",
          },
        },
        {
          title: "Interrogating Memory & Double-Self in a Memoir Excerpt",
          problem:
            "Examine how the memoirist negotiates subjectivity and authority in this unseen passage:\n\n> *In my childhood recollection the kitchen table was vast, an oak island where my mother ruled over flour and silence. Yet when I returned to sell the house last spring, the room barely held two chairs. Memory enlarges what fear measured; still, I refuse to call the child's scale a lie, for terror has its own accurate geometry.*",
          steps: [
            "1. Contrast the **experiencing self** (who perceived the table as *vast, an oak island* ruled by maternal power) with the **retrospective self** returning *last spring* to a cramped physical reality (*barely held two chairs*).",
            "2. Analyse the **interrogation of truth-claims**: Rather than pretending memory is photographic, the narrator concedes distortion (*Memory enlarges what fear measured*) — strengthening candid **ethos** — before defending subjective emotional truth through the paradoxical metaphor *terror has its own accurate geometry*.",
          ],
          answer:
            "By testing the experiencing child's monumental memory against the retrospective adult's physical measurement, the memoirist openly interrogates factual unreliability while asserting through precise metaphor (*accurate geometry*) that emotional perception constitutes its own valid truth.",
          yourTurn: {
            question:
              "What rhetorical device pairs sharply opposing ideas inside balanced, parallel grammatical structure (as in 'Action is expensive; neglect is terminal')?",
            answer: {
              type: "text",
              accept: ["antithesis"],
              display: "antithesis",
            },
            solution:
              "Antithesis juxtaposes contrasting concepts within balanced parallel syntax to crystallise ideological or emotional tension.",
          },
        },
      ],
      keyPoints: [
        "Even in non-fiction, **'I' is a crafted persona** — separate the biographical writer from the constructed textual voice.",
        "In memoir, analyse the dynamic gap between the **experiencing self** (past) and the **retrospective self** (present).",
        "Treat **ethos, pathos, and logos** as interwoven literary strategies — note how candour and restraint often build stronger authority and emotion than boasting or melodrama.",
        "Connect syntax directly to meaning: **parataxis** enacts immediacy, shock, or stark clarity; **hypotaxis** enacts nuance, qualification, and complex reflection.",
        "Always interrogate **truth-claims**: notice epistemic hedging (*perhaps, as I recall*), selective framing, and who collective pronouns (*we*) include or exclude.",
      ],
      whyItWorks:
        "How a sentence is built mirrors how a mind processes reality. When an essayist shifts from tangled hypotactic qualification into a single short paratactic declaration — or exposes the cracks in their own memory — form itself performs the text's argument about truth and selfhood.",
      strategies: [
        "When you spot a rhetorical device (anaphora, antithesis, tricolon), immediately follow a three-part sentence: **name the device → embed the exact micro-quotation → explain its psychological or ideological effect on the implied reader**.",
        "Avoid calling hypotaxis 'complicated writing' or parataxis 'simple writing'; show how the writer's *alternation* between them controls rhythm and authority.",
        "In Paper 1 non-fiction, dedicate at least one analytical thread to **epistemology and persona**: how does the writer earn, complicate, or question their own credibility?",
      ],
      thinkDeeper:
        "Can a first-person memoirist ever be an 'unreliable narrator' in the same way as a fictional protagonist? Reflect on the difference between deliberate fictional irony (controlled by an author behind a character) and unintentional blind spots or self-mythologising in real-world autobiography.",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Voice vs Focalisation (Genette)",
        back: "**Voice** asks *who speaks* (grammatical narrator: 1st, 2nd, or 3rd person); **focalisation** asks *who sees and perceives* (zero/omniscient, internal, or external lens). A 3rd-person voice can still be strictly internally focalised.",
      },
      {
        front: "Zero, Internal & External Focalisation",
        back: "**Zero**: narrator knows more than characters (omniscient). **Internal**: restricted to one or more characters' minds (fixed, variable, multiple). **External**: camera-eye view knowing less than characters, showing only surface behaviour.",
      },
      {
        front: "Free Indirect Discourse (FID)",
        back: "Third-person past-tense narration fused with a character's unquoted interior idiom, deictics (*now, tomorrow*), modals (*surely*), and questions — without quotation marks or reporting tags (*she thought*). Produces double-voiced irony.",
      },
      {
        front: "Psychic Distance (John Gardner)",
        back: "A 1–5 continuum measuring how close prose moves to a character's mind: from Level 1 panoramic detachment down to Level 4 FID and Level 5 raw stream of consciousness. **Shifts** in distance signal emotional turning points.",
      },
      {
        front: "Unreliable Narration (Textual Cues)",
        back: "A narrator whose claims clash with textual evidence. Proven via micro-contradictions, euphemistic diction, defensive over-insistence, tonal incongruity, selective omission, or gaps between others' reactions and the narrator's spin.",
      },
      {
        front: "Story Time (Fabula) vs Discourse Time (Syuzhet)",
        back: "**Fabula** is chronological event order in the story world; **syuzhet** is the artful order and proportion in which the text delivers events (using analepsis, prolepsis, *in medias res*, and framing).",
      },
      {
        front: "Analepsis vs Prolepsis",
        back: "**Analepsis** jumps backward in time (flashback) to illuminate present trauma or motive. **Prolepsis** jumps forward (flashforward/proleptic reveal), shifting tension from *what* happens to *how* and *why*.",
      },
      {
        front: "Frame Narrative & *In Medias Res*",
        back: "**Frame narrative**: an outer tale enclosing an inner story, foregrounding mediation, reliability, and historical distance. ***In medias res***: plunging straight into mid-action to create immediacy and disorientation.",
      },
      {
        front: "Four Narrative Pacing Speeds",
        back: "**Ellipsis** (time leaps silently), **Summary** (months compressed into lines), **Scene** (1:1 real-time dialogue/action), and **Stretch / Pause** (a moment dilated into extended sensory or mental reflection).",
      },
      {
        front: "Pathetic Fallacy vs Environmental Contrast",
        back: "**Pathetic fallacy** projects human emotion onto weather or nature (*brooding sky*). **Ironic environmental contrast** pairs serene or indifferent surroundings with human distress to sharpen isolation.",
      },
      {
        front: "Foil Character & Evolving Symbol",
        back: "A **foil** contrasts with another character to illuminate values and flaws. An **evolving symbol** mutates or turns ironic across a text — never reduce a literary symbol to a rigid one-word equation.",
      },
      {
        front: "Memoir vs Autobiography",
        back: "**Autobiography** usually covers an entire life chronologically; **memoir** is selective and thematic (a wound, place, or relationship) and often foregrounds the fallibility of memory itself.",
      },
      {
        front: "Personal Essay & Structural Turn",
        back: "A reflective, associative sub-genre moving from a concrete **anecdote** or object through lyrical expansion and a **structural turn** (prose *volta*) toward wider cultural or philosophical resonance.",
      },
      {
        front: "Experiencing Self vs Retrospective Self",
        back: "In memoir and personal essays, the **experiencing self** is the younger consciousness immersed inside the past event, while the **retrospective self** is the older narrating persona re-evaluating or ironising it from the present.",
      },
      {
        front: "Ethos, Pathos & Logos in Literary Non-Fiction",
        back: "**Ethos**: constructed credibility (often deepened by candour/concession). **Pathos**: emotional resonance (often sharpened by restraint and concrete detail). **Logos**: reasoned structure, comparison, and evidence.",
      },
      {
        front: "Parataxis vs Hypotaxis (plus Anaphora, Antithesis, Tricolon)",
        back: "**Parataxis**: unsubordinated side-by-side clauses (shock, urgency, stoicism). **Hypotaxis**: nested subordinate clauses (*although, because* — nuance, reflection). **Anaphora** repeats clause openings; **antithesis** balances opposites; **tricolon** builds 3-part rhythm.",
      },
    ],
    mustKnow: [
      "Never equate grammatical person with objectivity: a third-person narrator using **internal focalisation** can be deeply biased and claustrophobic.",
      "**Free indirect discourse** keeps third-person past tense while dropping quotation marks and reporting verbs, allowing character idiom and narratorial irony to coexist in one sentence.",
      "Track **shifts** — shifts in psychic distance, pacing speed, tone, or syntax — because IB Criterion B rewards dynamic craft analysis over static technique lists.",
      "Always explain *why* an **analepsis**, **ellipsis**, or **frame narrative** occurs at that exact structural moment, rather than merely defining the term.",
      "Symbols in literary prose are dynamic: trace how a motif or object **acquires tension, fractures, or reverses meaning** across the passage or work.",
      "**Literary non-fiction** is the 4th official IB form: treat essays, memoirs, travelogues, letters, and speeches as consciously crafted literature, not plain journalism.",
      "In non-fiction, distinguish the **biographical writer** from the **crafted persona**, and separate the **experiencing self** from the **retrospective self**.",
      "In travel writing and reportage, interrogate the **observer's gaze** — notice who speaks, who is aestheticised, and whether the writer critiques their own framing.",
      "Link syntax directly to psychology and ideology: **parataxis** strips away causality for stark immediacy; **hypotaxis** maps layered qualification and reflection.",
      "Interrogate **truth-claims** in non-fiction: epistemic hedging (*perhaps, as I recall*) exposes memory's limits while paradoxically building candid ethos.",
    ],
    misconceptions: [
      {
        wrong: "Third-person narration is always objective and reliable, while first-person narration is biased.",
        right: "Third-person prose with **internal focalisation** or **free indirect discourse** filters reality through one flawed mind; conversely, a reflective first-person narrator may openly test and correct their own bias.",
      },
      {
        wrong: "Free indirect discourse is simply quoting a character's thoughts in italics or quotation marks.",
        right: "Quoted or italicised first-person thoughts are **direct interior monologue**; free indirect discourse removes quotation marks and reporting tags while retaining third-person pronouns and past tense.",
      },
      {
        wrong: "An ellipsis in prose analysis means three dots ('...').",
        right: "In narratology, **temporal ellipsis** means an unspoken leap in story time (e.g. skipping ten years between paragraphs), distinct from punctuation ellipses.",
      },
      {
        wrong: "Literary non-fiction doesn't use literary devices because everything in it really happened.",
        right: "Choosing which anecdote opens, which metaphor frames an event, where a structural turn lands, and how syntax paces grief are all **deliberate literary choices** shaping real material.",
      },
      {
        wrong: "In a memoir or personal essay, 'I' is transparently the real author speaking without artifice.",
        right: "Every memoirist crafts a **textual persona** — selecting, compressing, and splitting consciousness into an experiencing self and a retrospective self.",
      },
      {
        wrong: "Parataxis is 'simple or immature writing', while hypotaxis is 'advanced writing'.",
        right: "Both are sophisticated stylistic tools: parataxis can enact trauma, stark stoicism, or urgent crisis, whereas hypotaxis enacts qualification, memory, or ironic hesitation.",
      },
      {
        wrong: "A symbol in prose has one fixed textbook meaning (e.g. 'light = hope', 'rain = sadness').",
        right: "Literary symbols derive meaning strictly from **textual context** and often evolve or invert ironically — harsh sunlight can signal pitiless exposure rather than hope.",
      },
    ],
    examMistakes: [
      "Calling an unseen prose passage 'a story' when it is actually a **personal essay**, **memoir**, or **travelogue** — check the contextual blurb and genre cues first!",
      "Feature-spotting rhetoric ('the writer uses ethos, pathos, and anaphora to engage the reader') without naming the specific emotional effect, quoted phrase, or conceptual implication.",
      "Summarising plot chronologically on Paper 1 prose instead of organising body paragraphs around **conceptual tensions** (e.g. interior anxiety vs exterior performance).",
      "Ignoring **free indirect discourse** and attributing a character's ironic rationalisations to the author as 'the writer's own view'.",
      "Treating **setting** as mere decoration ('sets a gloomy mood') instead of linking spatial imagery and pathetic fallacy to power, entrapment, or identity.",
      "Confusing **memoir** with **autobiography**, or forgetting to analyse the tension between the **retrospective** and **experiencing** selves.",
      "Overlooking **structural turns** and **endings** in personal essays, where a quiet tonal pivot often reframes every earlier paragraph.",
      "Writing vague praise like 'the short sentences speed up the pace' without showing how **parataxis** enacts a specific psychological state (shock, detachment, defiance).",
    ],
    mnemonics: [
      {
        topic: "Prose Perspective Check",
        device: "V–F–D–R (Voice, Focalisation, Distance, Reliability)",
        explanation:
          "Scan any unseen prose fiction in 20 seconds: Who speaks (**V**oice)? Who sees (**F**ocalisation)? Where is the camera (**D**istance / FID shifts)? Can we trust them (**R**eliability)?",
      },
      {
        topic: "Narrative Pacing Speeds",
        device: "E–S–S–P (Ellipsis → Summary → Scene → Pause)",
        explanation:
          "Ordered from fastest clock speed to slowest: **E**llipsis (skipped), **S**ummary (compressed), **S**cene (real-time 1:1), **P**ause/Stretch (frozen or dilated).",
      },
      {
        topic: "Personal Essay Architecture",
        device: "A–E–T–R (Anecdote → Expansion → Turn → Resonance)",
        explanation:
          "Track how literary non-fiction scales up: concrete **A**necdote → lyrical **E**xpansion → structural **T**urn → open conceptual **R**esonance.",
      },
      {
        topic: "Syntax & Rhetoric Pairings",
        device: "P-A-R-A = Parallel / Plain; H-Y-P-O = Hierarchy / Layered",
        explanation:
          "**Para**taxis puts equal clauses side by side (like *parallel* tracks); **Hypo**taxis nests clauses underneath one another (*hypo-* = beneath, subordinated).",
      },
    ],
    realWorld: [
      {
        title: "Free Indirect Discourse & Modernist Interiority",
        detail:
          "Pioneered with comic precision in Jane Austen's *Emma* `[Example text — not a set text]` and pushed into fluid consciousness in Virginia Woolf's *Mrs Dalloway* `[Example text — not a set text]`, FID reshaped modern cinema's voiceover and close-up editing too.",
        emoji: "🎞️",
      },
      {
        title: "The Essay as an 'Attempt' at Thinking",
        detail:
          "Michel de Montaigne coined *essais* (`[Example text — not a set text]`) from the French *essayer* ('to try' or 'to weigh'). Literary essays do not preach finished dogmas; they dramatise a mind testing its own doubts on the page.",
        emoji: "⚖️",
      },
      {
        title: "Unreliable Testimony in Courtrooms & Fiction",
        detail:
          "Psychologists studying memory distortion highlight the same mechanisms seen in Kazuo Ishiguro's *The Remains of the Day* `[Example text — not a set text]`: euphemism, post-hoc rationalisation, and selective omission protect ego from guilt.",
        emoji: "🔍",
      },
      {
        title: "Travel Writing & the Postcolonial Gaze",
        detail:
          "Contemporary travelogues increasingly interrogate who gets to narrate a landscape — exposing how 19th-century imperial travel accounts often framed inhabited regions as 'empty' or 'timeless' backdrops.",
        emoji: "🧭",
      },
      {
        title: "Political Oratory & Acoustic Cadence",
        detail:
          "Historic speeches — such as Martin Luther King Jr.'s *I Have a Dream* `[Example text — not a set text]` — deploy anaphora, tricolon, and antithesis not as ornament, but as communal acoustic architecture built to move a live crowd.",
        emoji: "🎙️",
      },
    ],
    videos: [
      {
        title: "Free Indirect Discourse & Narrative Focalization Explained",
        channel: "YouTube IB Literature Search",
        url: "https://www.youtube.com/results?search_query=free+indirect+discourse+focalization+IB+English+Literature",
      },
      {
        title: "Narrative Time: Analepsis, Prolepsis & Pacing in Prose Analysis",
        channel: "YouTube IB Literature Search",
        url: "https://www.youtube.com/results?search_query=analepsis+prolepsis+narrative+pacing+prose+analysis+IB",
      },
      {
        title: "IB English A Literature Paper 1: Analysing Literary Non-Fiction & Memoirs",
        channel: "YouTube IB Literature Search",
        url: "https://www.youtube.com/results?search_query=IB+English+Literature+Paper+1+literary+nonfiction+memoir+essay",
      },
      {
        title: "Rhetoric, Parataxis vs Hypotaxis & Persona in Essays and Speeches",
        channel: "YouTube IB Literature Search",
        url: "https://www.youtube.com/results?search_query=parataxis+hypotaxis+anaphora+antithesis+literary+nonfiction+analysis",
      },
    ],
    formulas: [
      {
        name: "Free Indirect Discourse Diagnostic",
        formula: "FID = 3rd-Person Past Grammar + Character Lexicon / Deixis / Modals − Reporting Tag",
        note: "Signals double-voiced narration blending intimacy with potential ironic distance.",
      },
      {
        name: "Narratological Distinction (Genette)",
        formula: "Narrative Mode = Voice (Who Speaks?) + Focalisation (Who Perceives?)",
        note: "Always name both axes separately before evaluating their interpretive effect.",
      },
      {
        name: "Unreliable Narrator Equation",
        formula: "Unreliability = Narrator's Explicit Claim ≠ Accumulated Textual Evidence",
        note: "Prove the gap with paired micro-quotations (claim vs contradiction/reaction).",
      },
      {
        name: "Narrative Pacing Ratio",
        formula: "Pacing Speed = Story Time Elapsed ÷ Discourse Space Spent",
        note: "Infinite = Ellipsis; High = Summary; 1:1 = Scene; Near-Zero = Stretch / Pause.",
      },
      {
        name: "Evolving Symbol Formula",
        formula: "Symbol Analysis = Initial Concrete Image → Contextual Pressure → Shifted / Ironic Resonance",
        note: "Avoids reductive 'X stands for Y' equations; hits Band 5 on Criterion B.",
      },
      {
        name: "Literary Non-Fiction Structural Arc",
        formula: "Essay Arc = Concrete Anecdote → Lyrical Expansion → Structural Turn → Open Reflection",
        note: "Locate the exact paragraph of the structural turn when planning Paper 1.",
      },
      {
        name: "Memoir Double-Self Tension",
        formula: "Memoir Meaning = Retrospective 'I' (Present Insight) ↔ Experiencing 'I' (Past Immersion)",
        note: "The ethical and ironic charge of memoir lies in the gap between these two selves.",
      },
      {
        name: "Syntactic Contrast Rule",
        formula: "Parataxis (Equal Clauses → Immediacy / Shock) vs Hypotaxis (Subordinate Clauses → Nuance / Reflection)",
        note: "Always analyse the *pivot* between long hypotactic and abrupt paratactic sentences.",
      },
      {
        name: "Criterion B Rhetorical Sentence",
        formula: "Device + Embedded Micro-Quote + Psychological / Ideological Effect on Implied Reader",
        note: "Eliminates empty feature-spotting in both prose fiction and literary non-fiction.",
      },
      {
        name: "Truth-Claim Interrogation",
        formula: "Authority = Ethos (Candour / Witness) + Epistemic Hedging ('perhaps') + Selective Framing",
        note: "Shows critical awareness of subjectivity without dismissing non-fiction as 'biased'.",
      },
    ],
  },
};
