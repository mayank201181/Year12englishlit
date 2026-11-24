import type { TopicGuide } from "../../types.ts";

const SVG_SONNET_VOLTA = `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Petrarchan and Shakespearean sonnet architecture showing octave, sestet, quatrains, rhyming couplet, and volta positions alongside metrical scansion beats">
  <rect x="0" y="0" width="600" height="320" rx="14" fill="#ffffff" />
  <text x="300" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">Sonnet Architecture, Volta Placement &amp; Metrical Feet</text>

  <!-- Petrarchan Column -->
  <rect x="24" y="42" width="258" height="206" rx="10" fill="#fdf8f8" stroke="#ebd8de" stroke-width="1.5" />
  <text x="153" y="62" text-anchor="middle" font-size="12" font-weight="800" fill="#881337">Petrarchan (Italian) Sonnet</text>
  <rect x="38" y="72" width="230" height="82" rx="8" fill="#ffe4e6" stroke="#be123c" stroke-width="1.2" />
  <text x="50" y="92" font-size="11" font-weight="800" fill="#881337">Octave (Lines 1–8)</text>
  <text x="50" y="110" font-size="10.5" fill="#241016">Rhyme: ABBA ABBA</text>
  <text x="50" y="127" font-size="10" fill="#6b4c56">Establishes tension, dilemma, or</text>
  <text x="50" y="141" font-size="10" fill="#6b4c56">observation in two enclosed quatrains</text>

  <!-- Volta Banner Petrarchan -->
  <rect x="38" y="159" width="230" height="20" rx="5" fill="#b45309" />
  <text x="153" y="173" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ffffff">⚡ VOLTA (Turn) at Line 9</text>

  <rect x="38" y="184" width="230" height="54" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.2" />
  <text x="50" y="202" font-size="11" font-weight="800" fill="#92400e">Sestet (Lines 9–14)</text>
  <text x="50" y="218" font-size="10.5" fill="#241016">Rhyme: CDECDE or CDCDCD</text>
  <text x="50" y="232" font-size="10" fill="#6b4c56">Reframes, answers, or complicates octave</text>

  <!-- Shakespearean Column -->
  <rect x="318" y="42" width="258" height="206" rx="10" fill="#fdf8f8" stroke="#ebd8de" stroke-width="1.5" />
  <text x="447" y="62" text-anchor="middle" font-size="12" font-weight="800" fill="#0369a1">Shakespearean (English) Sonnet</text>
  <rect x="332" y="72" width="230" height="34" rx="6" fill="#e0f2fe" stroke="#0369a1" stroke-width="1" />
  <text x="344" y="88" font-size="10.5" font-weight="700" fill="#0c4a6e">Quatrain 1 (L1–4): ABAB</text>
  <text x="344" y="101" font-size="9.5" fill="#475569">Introduces central motif or argument</text>

  <rect x="332" y="111" width="230" height="34" rx="6" fill="#e0f2fe" stroke="#0369a1" stroke-width="1" />
  <text x="344" y="127" font-size="10.5" font-weight="700" fill="#0c4a6e">Quatrain 2 (L5–8): CDCD</text>
  <text x="344" y="140" font-size="9.5" fill="#475569">Develops or intensifies the imagery</text>

  <rect x="332" y="150" width="230" height="34" rx="6" fill="#e0f2fe" stroke="#0369a1" stroke-width="1" />
  <text x="344" y="166" font-size="10.5" font-weight="700" fill="#0c4a6e">Quatrain 3 (L9–12): EFEF</text>
  <text x="344" y="179" font-size="9.5" fill="#475569">Often initiates subtle shift (early volta)</text>

  <rect x="332" y="189" width="230" height="18" rx="4" fill="#b45309" />
  <text x="447" y="201" text-anchor="middle" font-size="10" font-weight="800" fill="#ffffff">⚡ Epigrammatic VOLTA at Line 13</text>

  <rect x="332" y="211" width="230" height="27" rx="6" fill="#dcfce7" stroke="#15803d" stroke-width="1.2" />
  <text x="447" y="229" text-anchor="middle" font-size="10.5" font-weight="800" fill="#166534">Rhyming Couplet (L13–14): GG</text>

  <!-- Metrical Feet Key Bar -->
  <rect x="24" y="260" width="552" height="46" rx="9" fill="#f9efef" stroke="#ebd8de" stroke-width="1.2" />
  <text x="40" y="279" font-size="11" font-weight="800" fill="#241016">Core Metrical Feet:</text>
  <text x="165" y="279" font-size="11" font-weight="700" fill="#be123c">Iamb (˘ /)</text>
  <text x="165" y="295" font-size="9.5" fill="#6b4c56">rising heartbeat</text>
  <text x="295" y="279" font-size="11" font-weight="700" fill="#b45309">Trochee (/ ˘)</text>
  <text x="295" y="295" font-size="9.5" fill="#6b4c56">falling / urgent</text>
  <text x="435" y="279" font-size="11" font-weight="700" fill="#0369a1">Spondee (/ /)</text>
  <text x="435" y="295" font-size="9.5" fill="#6b4c56">heavy emphasis</text>
</svg>`;

const SVG_SOUNDSCAPE_PERSONA = `<svg viewBox="0 0 600 295" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing the separation between biographical poet and lyrical persona, and how figurative imagery and acoustic texture combine to produce psychological and thematic effect">
  <rect x="0" y="0" width="600" height="295" rx="14" fill="#ffffff" />
  <text x="300" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">From Craft to Effect: Persona, Imagery &amp; Soundscape</text>

  <!-- Poet vs Persona -->
  <rect x="22" y="48" width="122" height="72" rx="10" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 3" />
  <text x="83" y="72" text-anchor="middle" font-size="11.5" font-weight="800" fill="#475569">Biographical Poet</text>
  <text x="83" y="89" text-anchor="middle" font-size="9.5" fill="#64748b">Historical writer</text>
  <text x="83" y="103" text-anchor="middle" font-size="9.5" fill="#64748b">(outside the text)</text>

  <text x="161" y="88" text-anchor="middle" font-size="16" font-weight="800" fill="#be123c">≠</text>

  <rect x="178" y="48" width="142" height="72" rx="10" fill="#ffe4e6" stroke="#be123c" stroke-width="1.6" />
  <text x="249" y="71" text-anchor="middle" font-size="11.5" font-weight="800" fill="#881337">Speaker / Persona</text>
  <text x="249" y="88" text-anchor="middle" font-size="9.5" fill="#241016">Constructed voice,</text>
  <text x="249" y="102" text-anchor="middle" font-size="9.5" fill="#241016">bias &amp; tonal lens</text>

  <!-- Arrows to two craft boxes -->
  <line x1="320" y1="84" x2="366" y2="84" stroke="#be123c" stroke-width="2" />
  <polygon points="366,79 376,84 366,89" fill="#be123c" />

  <!-- Effect Box -->
  <rect x="378" y="46" width="200" height="76" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.6" />
  <text x="478" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="#166534">Analytical Effect (Band 5)</text>
  <text x="478" y="86" text-anchor="middle" font-size="9.8" fill="#1f2937">Psychological tension, irony,</text>
  <text x="478" y="101" text-anchor="middle" font-size="9.8" fill="#1f2937">attitude &amp; thematic nuance</text>
  <text x="478" y="115" text-anchor="middle" font-size="9" font-weight="700" fill="#15803d">(Never bare technique-spotting!)</text>

  <!-- Bottom two craft pillars -->
  <rect x="22" y="144" width="268" height="130" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="1.4" />
  <text x="156" y="166" text-anchor="middle" font-size="12" font-weight="800" fill="#92400e">Figurative &amp; Lexical Craft</text>
  <text x="36" y="187" font-size="10.2" fill="#241016"><tspan font-weight="700">Extended Conceit:</tspan> sustained governing analogy</text>
  <text x="36" y="206" font-size="10.2" fill="#241016"><tspan font-weight="700">Metonymy:</tspan> associated emblem (crown → power)</text>
  <text x="36" y="225" font-size="10.2" fill="#241016"><tspan font-weight="700">Synecdoche:</tspan> part ↔ whole (sails → ships)</text>
  <text x="36" y="244" font-size="10.2" fill="#241016"><tspan font-weight="700">Synesthesia:</tspan> fused senses (bitter gold)</text>
  <text x="36" y="263" font-size="10.2" fill="#241016"><tspan font-weight="700">Semantic Field:</tspan> recurring lexical cluster</text>

  <rect x="310" y="144" width="268" height="130" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.4" />
  <text x="444" y="166" text-anchor="middle" font-size="12" font-weight="800" fill="#0c4a6e">Acoustic Soundscape</text>
  <text x="324" y="187" font-size="10.2" fill="#241016"><tspan font-weight="700">Sibilance (/s, ʃ, z/):</tspan> hush OR venomous hiss</text>
  <text x="324" y="206" font-size="10.2" fill="#241016"><tspan font-weight="700">Plosives (/p, b, t, d, k, g/):</tspan> force, impact</text>
  <text x="324" y="225" font-size="10.2" fill="#241016"><tspan font-weight="700">Assonance:</tspan> internal vowel echo (slows/opens)</text>
  <text x="324" y="244" font-size="10.2" fill="#241016"><tspan font-weight="700">Consonance:</tspan> consonant echo across syllables</text>
  <text x="324" y="263" font-size="10.2" fill="#241016"><tspan font-weight="700">Half-rhyme:</tspan> tonal unease, withheld closure</text>

  <!-- Connector arrows up to effect -->
  <line x1="249" y1="144" x2="249" y2="125" stroke="#b45309" stroke-width="1.6" />
  <polygon points="244,128 249,120 254,128" fill="#b45309" />
  <line x1="478" y1="144" x2="478" y2="127" stroke="#0369a1" stroke-width="1.6" />
  <polygon points="473,130 478,122 483,130" fill="#0369a1" />
</svg>`;

const SVG_STAGE_PROXEMICS = `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top-down proscenium theatre diagram illustrating stage zones, proxemic distance, symbolic props, lighting pool, the fourth wall, and audience sightlines">
  <rect x="0" y="0" width="600" height="320" rx="14" fill="#ffffff" />
  <text x="300" y="25" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">Stage Proxemics, Blocking Zones &amp; Audience Sightlines</text>

  <!-- Stage Grid -->
  <rect x="60" y="42" width="480" height="174" rx="8" fill="#fdf8f8" stroke="#881337" stroke-width="2" />
  <!-- Grid dividers -->
  <line x1="220" y1="42" x2="220" y2="216" stroke="#ebd8de" stroke-width="1.2" stroke-dasharray="5 4" />
  <line x1="380" y1="42" x2="380" y2="216" stroke="#ebd8de" stroke-width="1.2" stroke-dasharray="5 4" />
  <line x1="60" y1="100" x2="540" y2="100" stroke="#ebd8de" stroke-width="1.2" stroke-dasharray="5 4" />
  <line x1="60" y1="158" x2="540" y2="158" stroke="#ebd8de" stroke-width="1.2" stroke-dasharray="5 4" />

  <!-- Stage Zone Labels (Actor's Perspective) -->
  <text x="140" y="60" text-anchor="middle" font-size="9.5" font-weight="700" fill="#6b4c56">UPSTAGE RIGHT (UR)</text>
  <text x="300" y="60" text-anchor="middle" font-size="9.5" font-weight="700" fill="#6b4c56">UPSTAGE CENTRE (UC)</text>
  <text x="460" y="60" text-anchor="middle" font-size="9.5" font-weight="700" fill="#6b4c56">UPSTAGE LEFT (UL)</text>

  <text x="140" y="118" text-anchor="middle" font-size="9.5" font-weight="700" fill="#6b4c56">CENTRE RIGHT (CR)</text>
  <text x="300" y="118" text-anchor="middle" font-size="9.5" font-weight="700" fill="#6b4c56">CENTRE STAGE (CS)</text>
  <text x="460" y="118" text-anchor="middle" font-size="9.5" font-weight="700" fill="#6b4c56">CENTRE LEFT (CL)</text>

  <text x="140" y="176" text-anchor="middle" font-size="9.5" font-weight="700" fill="#6b4c56">DOWNSTAGE RIGHT (DR)</text>
  <text x="300" y="176" text-anchor="middle" font-size="9.5" font-weight="700" fill="#6b4c56">DOWNSTAGE CENTRE (DC)</text>
  <text x="460" y="176" text-anchor="middle" font-size="9.5" font-weight="700" fill="#6b4c56">DOWNSTAGE LEFT (DL)</text>

  <!-- Spotlight Pool at Centre -->
  <ellipse cx="300" cy="134" rx="54" ry="26" fill="#fef3c7" opacity="0.85" stroke="#b45309" stroke-width="1.2" stroke-dasharray="3 2" />
  <rect x="285" y="126" width="30" height="16" rx="3" fill="#b45309" />
  <text x="300" y="137" text-anchor="middle" font-size="8.5" font-weight="800" fill="#ffffff">PROP</text>

  <!-- Character A (Upstage Authority) & Character B (Downstage Confidant/Aside) -->
  <circle cx="170" cy="82" r="14" fill="#be123c" />
  <text x="170" y="86" text-anchor="middle" font-size="10" font-weight="800" fill="#ffffff">A</text>
  <circle cx="435" cy="192" r="14" fill="#0369a1" />
  <text x="435" y="196" text-anchor="middle" font-size="10" font-weight="800" fill="#ffffff">B</text>

  <!-- Proxemic Tension Vector -->
  <line x1="184" y1="88" x2="421" y2="186" stroke="#be123c" stroke-width="1.8" stroke-dasharray="6 3" />
  <rect x="206" y="71" width="110" height="18" rx="4" fill="#ffffff" stroke="#ebd8de" />
  <text x="261" y="83" text-anchor="middle" font-size="9" font-weight="700" fill="#881337">Proxemic distance</text>

  <!-- Fourth Wall Line -->
  <line x1="40" y1="224" x2="560" y2="224" stroke="#b45309" stroke-width="2.5" stroke-dasharray="10 5" />
  <rect x="195" y="214" width="210" height="20" rx="10" fill="#b45309" />
  <text x="300" y="227" text-anchor="middle" font-size="9.5" font-weight="800" fill="#ffffff">THE FOURTH WALL (Invisible / Broken)</text>

  <!-- Sightlines from Audience -->
  <line x1="130" y1="286" x2="288" y2="146" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="3 3" />
  <line x1="300" y1="286" x2="300" y2="152" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="3 3" />
  <line x1="470" y1="286" x2="435" y2="208" stroke="#0369a1" stroke-width="1.5" />
  <polygon points="432,213 435,205 440,212" fill="#0369a1" />
  <text x="488" y="253" font-size="9.5" font-weight="700" fill="#0369a1">Aside / Direct</text>
  <text x="488" y="265" font-size="9.5" font-weight="700" fill="#0369a1">Address</text>

  <!-- Audience Arc -->
  <rect x="90" y="280" width="420" height="28" rx="12" fill="#f9efef" stroke="#ebd8de" stroke-width="1.5" />
  <text x="300" y="298" text-anchor="middle" font-size="11" font-weight="800" fill="#241016">AUDIENCE (Sightlines &amp; Interpretive Witness)</text>
</svg>`;

const SVG_TRAGIC_ARC_SUBTEXT = `<svg viewBox="0 0 600 305" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-panel diagram showing the Aristotelian tragic arc from hubris and hamartia through peripeteia and anagnorisis to catharsis, alongside the subtext iceberg separating spoken dialogue from unspoken motives">
  <rect x="0" y="0" width="600" height="305" rx="14" fill="#ffffff" />
  <text x="300" y="25" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">Aristotelian Tragic Architecture &amp; The Subtext Iceberg</text>

  <!-- Left Panel: Tragic Arc -->
  <rect x="20" y="42" width="335" height="246" rx="10" fill="#fdf8f8" stroke="#ebd8de" stroke-width="1.4" />
  <text x="187" y="63" text-anchor="middle" font-size="12" font-weight="800" fill="#881337">Classical Tragic Trajectory</text>

  <!-- Curve -->
  <path d="M 42 225 Q 100 135 162 104 Q 212 82 248 164 T 330 250" fill="none" stroke="#be123c" stroke-width="3" stroke-linecap="round" />

  <!-- Nodes -->
  <circle cx="56" cy="206" r="5.5" fill="#6b4c56" />
  <text x="40" y="242" font-size="9.5" font-weight="700" fill="#241016">1. Hubris</text>
  <text x="40" y="254" font-size="8.5" fill="#6b4c56">excessive pride</text>

  <circle cx="116" cy="133" r="5.5" fill="#b45309" />
  <text x="64" y="114" font-size="9.5" font-weight="700" fill="#92400e">2. Hamartia</text>
  <text x="64" y="125" font-size="8.5" fill="#6b4c56">fatal error / misjudgement</text>

  <circle cx="188" cy="100" r="6" fill="#be123c" />
  <text x="188" y="84" text-anchor="middle" font-size="9.5" font-weight="800" fill="#881337">3. Peripeteia</text>
  <text x="188" y="94" text-anchor="middle" font-size="8.5" fill="#6b4c56">reversal of fortune</text>

  <circle cx="258" cy="180" r="5.5" fill="#0369a1" />
  <text x="270" y="175" font-size="9.5" font-weight="700" fill="#0c4a6e">4. Anagnorisis</text>
  <text x="270" y="187" font-size="8.5" fill="#6b4c56">shock of recognition</text>

  <circle cx="326" cy="248" r="5.5" fill="#15803d" />
  <text x="236" y="268" font-size="9.5" font-weight="700" fill="#166534">5. Catastrophe &amp; Catharsis</text>
  <text x="236" y="279" font-size="8.5" fill="#6b4c56">pity, fear &amp; moral clarity</text>

  <!-- Right Panel: Subtext Iceberg -->
  <rect x="370" y="42" width="210" height="246" rx="10" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.4" />
  <text x="475" y="63" text-anchor="middle" font-size="12" font-weight="800" fill="#0c4a6e">The Subtext Iceberg</text>

  <!-- Above water -->
  <polygon points="475,78 432,138 518,138" fill="#ffffff" stroke="#0369a1" stroke-width="1.5" />
  <text x="475" y="114" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0369a1">Spoken Text</text>
  <text x="475" y="128" text-anchor="middle" font-size="8.5" fill="#475569">polite deflection</text>

  <!-- Waterline -->
  <line x1="382" y1="140" x2="568" y2="140" stroke="#0284c7" stroke-width="2" stroke-dasharray="5 3" />
  <text x="566" y="135" text-anchor="end" font-size="8" font-weight="700" fill="#0284c7">SURFACE</text>

  <!-- Below water -->
  <polygon points="432,142 518,142 548,268 402,268" fill="#bae6fd" stroke="#0369a1" stroke-width="1.5" />
  <text x="475" y="168" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0c4a6e">UNSPOKEN SUBTEXT</text>
  <text x="475" y="188" text-anchor="middle" font-size="9.2" fill="#1e293b">• Concealed hostility or guilt</text>
  <text x="475" y="205" text-anchor="middle" font-size="9.2" fill="#1e293b">• Pinteresque pause / silence</text>
  <text x="475" y="222" text-anchor="middle" font-size="9.2" fill="#1e293b">• Interruption &amp; power bids</text>
  <text x="475" y="239" text-anchor="middle" font-size="9.2" fill="#1e293b">• Contradictory body language</text>
  <text x="475" y="256" text-anchor="middle" font-size="9.2" fill="#1e293b">• Dramatic irony gap</text>
</svg>`;

export const guide: TopicGuide = {
  id: "4-poetry-and-drama",
  title: "Literary Forms I: Poetry & Drama Craft",
  strand: "Literary Forms",
  icon: "🎭",
  level: "SL",
  summary:
    "Master close reading of poetry (form, metre, lineation, volta, imagery, soundscapes, persona) and drama as live three-dimensional theatre (stagecraft, proxemics, subtext, dialogue dynamics, and tragic/comic arcs).",
  intro:
    "Poetry and drama are the two literary forms designed to be **heard and embodied**, not merely scanned silently on a page. A poem compresses meaning into rhythmic pulses, line breaks, and acoustic echoes; a play script is an architectural blueprint for bodies, light, objects, and silences in real time. Under the IB English A: Literature syllabus, no set texts are prescribed—meaning your superpower in Paper 1, Paper 2, the Individual Oral, and the HL Essay is knowing **how** medium-specific choices generate tension, ambiguity, and thematic force.",
  guide: [
    // =========================================================================
    // SECTION 1
    // =========================================================================
    {
      id: "poetic-form-metre-structure",
      heading: "Poetic Architecture: Form, Metre, Stanza, Lineation & Volta",
      level: "SL",
      discovery: {
        problem:
          "Compare two versions of the same poetic moment:\n\n**Version A:**\n*The harbour froze before the ferries left, / And winter locked the iron chains in place.*\n\n**Version B:**\n*The harbour froze before the ferries*\n*left—and winter locked* / *the iron chains*\n*in place.*\n\nBoth contain the exact same sixteen words. Yet **how does the reader's experience of time, hesitation, and abruptness change** between Version A and Version B?",
        idea:
          "Version A uses regular **end-stopped iambic pentameter**, giving the freeze an orderly, inevitable calm. Version B fractures the syntax with **enjambment** across *ferries / left* and a sharp mid-line **caesura** (dash) after *left—*, forcing the reader to dangle momentarily before the word *left* drops into the next line. **Form is never merely a decorative wrapper—it choreographs how the mind breathes and thinks through a poem.**",
      },
      body: `When IB examiners award top marks in **Criterion B (Analysis and Evaluation)** on a poetry commentary, they look for candidates who treat a poem's **structural architecture** as an active producer of meaning rather than an afterthought tacked onto the final paragraph.

### 1. Fixed Forms vs Open Forms
Choosing a fixed form invites the reader to measure the speaker's emotions against an inherited tradition—and notice the exact moments where emotion strains against or shatters that container.

| Poetic Form | Architectural Blueprint | Typical Expressive Tension |
| :--- | :--- | :--- |
| **Petrarchan Sonnet** | 14 lines: **Octave** (ABBAABBA) + Line-9 **Volta** + **Sestet** (CDECDE / CDCDCD) | Problem or longing in the octave answered, complicated, or undercut in the sestet |
| **Shakespearean Sonnet** | 14 lines: 3 **Quatrains** (ABAB CDCD EFEF) + **Rhyming Couplet** (GG) | Progressive argument across three stages, capped by an epigrammatic twist or ironic seal |
| **Villanelle** | 19 lines: 5 tercets (ABA) + 1 quatrain (ABAA); Lines 1 & 3 alternate as **refrains** | Obsession, circular grief, haunting persistence, or defiant refusal to move on |
| **Elegy** | Reflective poem of mourning (traditionally lament → praise → consolation) | Wrestling with loss; modern *anti-elegies* deliberately withhold neat consolation |
| **Dramatic Monologue** | Single persona addressing a silent auditor at a critical dramatic juncture | Gap between what the speaker intends to project and what they unwittingly reveal |
| **Free Verse** | No fixed metre or regular rhyme scheme; governed by cadence, visual lineation & white space | Organic thought, fractured memory, or liberation from rigid institutional order |

For instance, in Elizabeth Bishop's *"One Art"* [Example text — not a set text], the strict repeating refrains of the **villanelle** enact a speaker desperately rehearsing self-control until the final stanza's parenthetical command exposes the crack in that composure. Conversely, in Robert Browning's *"My Last Duchess"* [Example text — not a set text], smooth **heroic couplets** disguised by constant enjambment mirror an aristocratic speaker who masks chilling violence beneath polished courtesy.

### 2. Metre & Metrical Disruption
Metre is the underlying rhythmic pulse of stressed (\`/\`) and unstressed (\`˘\`) syllables grouped into **feet**. Rather than mechanically counting syllables for its own sake, listen for the **baseline rhythm**—and then pinpoint where the poet **breaks** it:
- **Iamb (\`˘ /\`):** Rising unstressed-stressed beat (*to-DAY, the SEA*). Five iambs make **iambic pentameter** (10 syllables), close to English speech and the human heartbeat.
- **Trochee (\`/ ˘\`):** Falling stressed-unstressed beat (*BREAK-ing, SIL-ence*). A **trochaic inversion** at the start of an iambic line creates a jolt of command, shock, or urgency.
- **Spondee (\`/ /\`):** Two adjacent heavy stresses (*COLD STONE, STOP NOW*). Slows tempo abruptly, forcing emotional weight or physical resistance.
- **Anapest (\`˘ ˘ /\`) & Dactyl (\`/ ˘ ˘\`):** Triple-time metres creating surging momentum (anapest) or mournful, cascading descent (dactyl).

> **Examiner Rule of Thumb:** Never write *"The poet uses iambic pentameter to make the poem flow."* Instead, ask: **Does regular metre enact control, ritual, or entrapment—and where does a spondee or trochaic inversion crack that composure?**

### 3. Lineation, Caesura & The Volta
- **End-stopping:** A line ends with terminal or firm punctuation (\`.\`, \`;\`, \`:\`, \`?\`). Creates closure, certainty, aphoristic control, or emotional containment.
- **Enjambment:** Syntax spills across a line break (or even a **stanza break**) without punctuation. Generates urgency, breathless overflow, double-meaning (when the temporary end-word briefly misleads the reader), or instability.
- **Caesura:** A deliberate pause *inside* a line—created by punctuation (\`—\`, \`;\`, \`.\`, \`,\`) or syntactic break. Can stage hesitation, grief, sudden interruption, or an internal division between two opposing realities.
- **Volta (Turn):** The structural pivot where a poem's argument, perspective, or tone shifts—classically at **Line 9** of a Petrarchan sonnet or **Line 13** (and often subtly at Line 9) of a Shakespearean sonnet, frequently signalled by pivot words (*Yet, But, Still, Then, However*) or an unannounced tonal rupture.`,
      diagram: SVG_SONNET_VOLTA,
      diagramCaption:
        "Architectural comparison of Petrarchan and Shakespearean sonnet proportions, volta placements, and the three foundational metrical feet.",
      workedExamples: [
        {
          title: "Close Reading Structure, Caesura & Volta in an Unseen Sonnet",
          problem:
            "Read this original unseen sonnet (*\"The Cartographer's Widow\"*) and analyse how structural architecture, lineation, and metrical disruption trace a shift in the speaker's relationship to grief:\n\n*She traces coastlines fading on the wall,*\n*Where indigo meridians unthread*\n*Across the plaster, silent as the dead*\n*Who never answered when she used to call.*\n*Each compass rose sits rusted in the hall,*\n*A brass horizon gathering the red*\n*Of autumn dust; she counts the years instead*\n*Of counting footsteps never meant to fall.*\n*Still—salt endures beneath her wedding ring,*\n*A stubborn tide no parchment map can keep;*\n*She opens wide the casement to the spring,*\n*Unlocking harbours from their winter sleep,*\n*And learns that grief is not a fragile thing,*\n*But charts the waters where the currents sweep.*",
          steps: [
            "**Identify the inherited container:** Fourteen lines rhyming ABBAABBA CDCDCD establish a classic **Petrarchan sonnet**, dividing cleanly into an 8-line octave and a 6-line sestet.",
            "**Analyse the octave's lineation:** Enjambment across *unthread / Across*, *dead / Who*, and *instead / Of counting* mirrors the way absence bleeds continually through domestic space; meanwhile, the mid-line semicolon **caesura** in line 7 (*Of autumn dust; she counts...*) halts the sentence at decay before pivoting into stagnant routine.",
            "**Pinpoint the Line-9 volta and metrical break:** After eight lines of steady iambic pentameter, Line 9 opens with an emphatic **spondee** and em-dash caesura (**\"Still—salt\"**). The word *Still* carries rich double meaning (both \"yet\" and \"motionless\"), jolting the rhythm out of museum-like paralysis.",
            "**Evaluate the sestet's resolution:** By alternating rhymes (CDCDCD) instead of enclosed octave rhymes (ABBA), the sestet opens outward spatially—moving from peeling indoor plaster to an opened casement and sweeping harbour currents—recasting grief from static relic to active navigation.",
          ],
          answer:
            "The poet exploits the Petrarchan octave–sestet divide, sustained octave enjambment, and a jarring spondaic caesura at the Line-9 volta (*Still—salt*) to chart grief's transformation from claustrophobic stasis to resilient outward motion.",
          yourTurn: {
            question:
              "In the Petrarchan sonnet above, what technical Italian term names the structural and tonal turn occurring at Line 9 (*Still—salt endures...*)?",
            answer: {
              type: "text",
              accept: ["volta", "the volta", "turn"],
              display: "volta",
            },
            solution:
              "The structural and tonal pivot—here placed classically at Line 9 between the octave and sestet—is called the **volta**.",
          },
        },
      ],
      keyPoints: [
        "Fixed forms (sonnet, villanelle, elegy) create an expected pattern so that **adherence** suggests discipline or ritual while **disruption** signals emotional fracture.",
        "Always link **metre** to meaning by contrasting the baseline pulse (e.g. iambic pentameter) with deliberate disruptions (trochaic inversions, spondees, truncated lines).",
        "**Enjambment** creates forward spill, restlessness, or syntactic ambiguity; **end-stopping** signals control, certainty, or finality; **caesura** dramatises internal pause or rupture.",
        "Locate the **volta** (or multiple micro-turns) in every unseen poem—tracing how the ending re-evaluates the opening is the backbone of a conceptual Paper 1 thesis.",
        "Free verse is never 'formless': analyse its stanza lengths, visual white space, line-end emphasis, and shifts in sentence cadence.",
      ],
      whyItWorks:
        "Human ears naturally anticipate rhythmic and structural regularity. When a poet establishes a steady iambic heartbeat or an enclosed ABBA octave, the reader relaxes into predictability; the instant a dash slices a line in half or a spondee drops two adjacent stresses onto the ear, the nervous system registers friction. Structural craft therefore turns abstract emotions—hesitation, obsession, release—into felt physical rhythm.",
      strategies: [
        "**Never organise a Paper 1 essay stanza-by-stanza.** Instead, build 3 conceptual movements (e.g. Containment → Rupture at the Volta → Reframed Resolution) and pull structural evidence from across the poem.",
        "When scanning a line in an exam, tap out natural speech stresses softly on your fingers—mark only the **2–3 most revealing disruptions** rather than trying to scan all 40 lines.",
        "Always examine the **first word** and **final word** of enjambed lines: poets frequently isolate loaded words at the cliff-edge of a line break.",
      ],
      thinkDeeper:
        "Why might a twenty-first-century poet choose a 700-year-old form such as the Petrarchan sonnet or villanelle to write about modern ecological loss or displacement, rather than free verse?",
    },

    // =========================================================================
    // SECTION 2
    // =========================================================================
    {
      id: "poetic-imagery-sound-voice",
      heading: "Poetic Imagery, Soundscapes & Lyrical Persona",
      level: "SL",
      discovery: {
        problem:
          "Consider two lines that both contain heavy **sibilance** (repeated `/s/` and `/ʃ/` sounds):\n\n**Line 1:** *Soft snow settles silently across the sleeping sill.*\n**Line 2:** *Slick steel slices swiftly through the scorched silk.*\n\nBoth rely on the exact same acoustic device. Why would writing *\"sibilance creates a sinister snake-like atmosphere\"* fail completely for Line 1—and what actually determines a sound's effect?",
        idea:
          "Acoustic devices have **zero fixed dictionary meaning** on their own. In Line 1, sibilance interacts with soft lexical diction (*snow, sleeping*) and gentle long vowels to evoke hushed sanctuary; in Line 2, the same `/s/` hiss collides with sharp diction (*steel, slices, scorched*) and clipped short vowels to evoke surgical violence. **Sound always works in partnership with imagery, diction, and tone.**",
      },
      body: `The single most common trap in IB Literature essays is **technique spotting**—listing labels (*"The poet uses sibilance, metaphor, and assonance"*) without explaining how those choices construct psychological complexity or thematic tension. Precision in naming figurative and acoustic tools only earns Band 5 marks when paired with nuanced evaluation of **effect**.

### 1. Precision Figurative Craft
Go beyond generic *"metaphor"* and *"imagery"* by naming the exact figurative mechanism at work:
- **Extended Metaphor / Conceit:** A central comparison sustained and ingeniously developed across multiple lines or an entire poem (as in John Donne's famous twin-compasses conceit in *"A Valediction: Forbidding Mourning"* [Example text — not a set text]). Ask what intellectual or emotional leap the conceit forces the reader to make.
- **Metonymy:** Substituting an **associated attribute or emblem** for the concept itself—e.g. *"the Crown"* for royal authority, *"the bench"* for the judiciary, *"brass"* for military officers. Metonymy often exposes institutional power or strips individuals down to social roles.
- **Synecdoche:** Substituting a **physical part for the whole** (or whole for a part)—e.g. *"weary hands"* for factory workers, *"all sails turned homeward"* for ships. Synecdoche frequently dramatises dehumanisation, fragmentation, or hyper-focused perception.
- **Synesthesia:** Blending two distinct sensory modalities—e.g. *"a brassy smell"*, *"bitter gold"*, *"the cold chime of light"*. Signals heightened perception, disorientation, memory fusion, or sensory overwhelm.
- **Semantic Field:** A deliberate network of words drawn from a shared conceptual domain (e.g. finance, surgery, liturgy, cartography). Tracking **competing semantic fields** (such as domestic comfort colliding with warfare) unlocks a poem's deepest tension.

### 2. Acoustic Soundscapes (Always Tied to Context!)
- **Sibilance (\`/s, z, ʃ, ʒ/\`):** Can evoke whispered tenderness, ocean hush, secrecy, **or** serpentine malice—always check the surrounding diction!
- **Plosives (\`/p, b, t, d, k, g/\`):** Articulated by blocking and explosively releasing airflow. Often reinforce anger, mechanical percussion, abrupt finality, or physical shock.
- **Fricatives (\`/f, v, θ, ð/\`) & Liquids/Nasals (\`/l, r, m, n/\`):** Fricatives introduce breathy friction or effort; liquids and nasals linger in the mouth, cultivating lyric smoothness, lullaby cadence, or elegiac grief.
- **Assonance:** Repetition of **internal vowel sounds** across nearby words (*cold / stone / alone*). Long open vowels slow reading pace and deepen resonance; short clipped vowels quicken tension.
- **Consonance:** Repetition of **consonant sounds** anywhere inside or at the ends of words (*dark / clock / break*), creating taut sonic unity even without rhyme.
- **Half-rhyme (Slant Rhyme / Pararhyme):** Imperfect rhyme where consonants match while vowels shift (*warm / worm*, *blade / blood*), famously refined by Wilfred Owen in *"Strange Meeting"* [Example text — not a set text]. Because the ear expects full harmonic chime and receives dissonance instead, half-rhyme is a master tool for **unsettled grief, irony, and withheld closure**.

### 3. Lyrical Persona: Speaker ≠ Poet
Even when a poem uses first-person *"I"* and seems deeply personal, **never conflate the speaker (persona) with the biographical poet**. Refer consistently to *"the speaker"*, *"the lyrical voice"*, or *"the persona"*, while reserving *"the poet"* for the craftsperson making deliberate artistic decisions (*"The poet equips the speaker with legalistic diction to expose..."*). This distinction is essential when the speaker is naive, self-deceiving, ironic, or morally compromised.`,
      diagram: SVG_SOUNDSCAPE_PERSONA,
      diagramCaption:
        "Analytical pathway from crafted lyrical persona, figurative precision, and context-dependent soundscapes to evaluative Band 5 IB commentary.",
      workedExamples: [
        {
          title: "Evaluating Competing Semantic Fields, Synesthesia & Half-Rhyme",
          problem:
            "Examine this unseen 8-line extract (*\"Night Shift at the Glassworks\"*) and evaluate how figurative language, soundscapes, and persona shape the depiction of labour:\n\n*At three a.m. the furnace coughs its sour gold,*\n*And twenty pairs of gloved hands feed the glare;*\n*Molten light spills heavy, hiss-bright, cold*\n*Only in the ledger where our hours wear*\n*Thin as blown crystal. Every breath tastes tin.*\n*Above the rafters, clock-hands click and crack*\n*The dark into neat shifts, until the dawn creeps in—*\n*A pale supervisor checking each bent back.*",
          steps: [
            "**Distinguish poet from persona:** The first-person plural (*\"our hours\"*) constructs a collective working-class **persona** speaking from inside physical exhaustion, allowing the poet to critique industrial alienation from lived interiority.",
            "**Trace synecdoche and competing semantic fields:** Calling workers *\"twenty pairs of gloved hands\"* and *\"each bent back\"* uses **synecdoche** to reduce human beings to anatomical labour-parts. Meanwhile, the poetic semantic field of luminous craft (*gold, molten light, blown crystal*) collides violently with an administrative field (*ledger, neat shifts, supervisor*), revealing how beauty is extracted into profit.",
            "**Unpack synesthesia:** Both *\"sour gold\"* (taste + sight) and *\"breath tastes tin\"* fuse sensory channels so the factory's metallic heat invades the worker's very body.",
            "**Evaluate acoustic craft and half-rhyme:** Harsh velar **plosives** (*clock-hands click and crack*) mimic mechanical timekeeping slicing human endurance, while the unnerving **half-rhyme** / dissonant pairing (*tin / in* contrasting with the clipped stress of *crack / back* and the delayed enjambed drop on *cold / Only in the ledger*) refuses romanticised comfort.",
          ],
          answer:
            "By combining fragmenting synecdoche, invasive synesthesia (*sour gold*), percussive plosives (*click and crack*), and a clash between artisanal and bureaucratic semantic fields, the poet uses a collective persona to expose how industrial labour converts human vitality into audited commodity.",
          yourTurn: {
            question:
              "In the line *\"twenty pairs of gloved hands feed the glare\"*, what precise figurative term describes using a bodily part (*hands*) to represent whole workers?",
            answer: {
              type: "text",
              accept: ["synecdoche"],
              display: "synecdoche",
            },
            solution:
              "**Synecdoche** uses a physical part (*gloved hands*) to stand for the whole person, emphasising how industrial labour reduces workers to mechanical instruments.",
          },
        },
      ],
      keyPoints: [
        "Distinguish **metonymy** (associated emblem, e.g. *the Crown*) from **synecdoche** (part-for-whole, e.g. *gloved hands*).",
        "Identify **semantic fields**—especially two *clashing* semantic fields—to reveal a poem's underlying ideological or emotional conflict.",
        "Acoustic devices (sibilance, plosives, assonance, consonance, half-rhyme) have **no fixed meaning** outside context; always pair sound with lexical meaning and pace.",
        "**Half-rhyme** deliberately frustrates the ear's expectation of harmony, generating unease, disillusionment, or unresolved tension.",
        "Always separate the **speaker / persona** (voice inside the poem) from the **poet** (architect of the poem's craft).",
      ],
      whyItWorks:
        "Poetry recruits both conceptual cognition (metaphor, metonymy, semantic networks) and physical vocal articulation (mouth shape, breath friction, vowel openness). When a poet aligns harsh plosives with violent imagery—or deliberately pits lush lyrical sound against grim subject matter—the resulting friction creates ironic depth that flat prose paraphrase cannot replicate.",
      strategies: [
        "Use the **3-Part Anti-Technique-Spotting Formula**: *(1) Name precise choice + micro-quote → (2) Explain the immediate sensory/psychological mechanism → (3) Link to the poem's central tension or thematic argument.*",
        "Read unseen poems **silently with your inner voice** (mouthing tricky lines in the exam hall): your jaw and breath will immediately feel plosives, elongated assonance, and jagged half-rhymes.",
        "Test every speaker for **ironic distance**: ask *\"Does the poet completely endorse this speaker's confidence, or do subtle lexical cracks undermine them?\"*",
      ],
      thinkDeeper:
        "How can a poet create emotional devastation by choosing **deliberately restrained, clinical, or understated diction** instead of heightened figurative imagery?",
    },

    // =========================================================================
    // SECTION 3
    // =========================================================================
    {
      id: "dramatic-conventions-staging",
      heading: "Drama as Performance: Stage Directions, Space, Lighting & Props",
      level: "SL",
      discovery: {
        problem:
          "Read these two lines of bare dialogue:\n**ELENA:** *Did you bring the key?*\n**MARCUS:** *It's on the sideboard.*\n\nNow imagine staging the exact same two lines in **two radically different ways**:\n- **Staging 1:** Warm kitchen lamp; Elena stands half a metre from Marcus, smiling softly as he slides the brass key across the wooden table.\n- **Staging 2:** Harsh overhead strip-light; Elena stands motionless upstage near the locked door while Marcus stays seated downstage, his back turned to her; a single rusted key sits isolated at centre stage.\n\nWhat changed? Not a single spoken word—yet what completely transformed?",
        idea:
          "The entire power balance, emotional temperature, and thematic meaning transformed through **proxemics** (physical distance and orientation), **lighting**, and a **symbolic prop** placed in dead centre space. Reading a play as if it were a novel made only of dialogue throws away half of the playwright's artistry.",
      },
      body: `A dramatic text is not a prose narrative with speaker labels—it is a **score for three-dimensional live performance**. In IB Paper 1 (unseen drama extracts) and Paper 2 (studied plays), examiners explicitly reward candidates who visualise the **stage picture**: bodies moving in space, light sculpting mood, objects accumulating symbolic gravity, and the living contract between stage and audience.

### 1. Stage Directions: The Playwright's Silent Architecture
Stage directions (usually italicised or bracketed) are never optional filler to skip over while reading dialogue. Analyse their four distinct functions:
- **Spatial / Architectural Cues:** Set design, walls, windows, locked doors, cramped rooms vs open horizons—externalising entrapment, class stratification, or surveillance.
- **Kinesic & Proxemic Cues:** Posture, gesture, gaze aversion, turning away, and **proxemics** (physical distance between actors). Closing distance can signify intimacy or menace; widening distance across the stage visually enacts ideological estrangement.
- **Vocal & Temporal Cues:** *Softly*, *sharply*, *without looking up*, *a long pause*—revealing friction between what a character says and how their body betrays them.
- **Lighting & Soundscapes:** Sudden blackouts, **chiaroscuro** (sharp light/shadow contrast), warm domestic lamps vs clinical glare, diegetic sound (heard by characters, like a ticking clock or distant train) vs non-diegetic theatrical cues.

### 2. Entrances, Exits & Symbolic Props
- **Entrances & Exits:** Who holds the power to enter unannounced or walk offstage mid-argument? An abrupt exit strips the remaining character of closure; an offstage presence (a knock, a voice from another room) expands the dramatic world beyond the visible set.
- **Symbolic Props:** Physical objects handled on stage carry visual immediacy that purely verbal metaphors lack. A letter kept unopened in a coat pocket, a fragile heirloom, or a slammed door—like the iconic closing door in Henrik Ibsen's *A Doll's House* [Example text — not a set text]—anchors abstract themes of autonomy, legacy, or guilt in concrete material reality.

### 3. Staging Aesthetics: Naturalism, Expressionism & Brechtian Alienation
Playwrights adopt sharply different relationships with theatrical illusion—especially regarding the **fourth wall** (the invisible barrier separating the fictional room from the watching audience):

| Theatrical Mode | Staging Signature | Effect on Audience |
| :--- | :--- | :--- |
| **Naturalism / Realism** | Detailed domestic box-set, lifelike props, intact **fourth wall** | Draws audience into empathetic immersion, observing social pressure as if peeking into real life |
| **Expressionist / Plastic Theatre** | Distorted lighting, surreal projections, haunting soundscapes, symbolic set walls (e.g. Tennessee Williams's *The Glass Menagerie* [Example text — not a set text]) | Projects a character's fractured interior psychology directly onto the physical stage |
| **Brechtian Epic Theatre (*Verfremdungseffekt*)** | Broken fourth wall, direct address, placards/titles, visible lighting rigs, songs interrupting pathos (e.g. Bertolt Brecht's *Mother Courage and Her Children* [Example text — not a set text]) | Deliberately **estranges** (*alienates*) the audience from passive emotional absorption so they critically interrogate social and political structures |`,
      diagram: SVG_STAGE_PROXEMICS,
      diagramCaption:
        "Proscenium blocking map showing actor-perspective stage zones, proxemic tension vectors, symbolic centre prop, fourth-wall boundary, and direct-address sightlines.",
      workedExamples: [
        {
          title: "Analysing Stagecraft, Proxemics & Symbolic Props in an Unseen Scene",
          problem:
            "Read this original unseen dramatic opening (*\"The Auction Room\"*) and analyse how stagecraft constructs power and generational rift before major conflict is even voiced:\n\n*[A cavernous drawing room stripped of carpets. Chalk lot-numbers are taped to three covered armchairs. Upstage centre, a tall mahogany pendulum clock stands uncovered—its glass face cracked diagonally, its pendulum motionless. Harsh winter daylight falls from a single high window onto the clock, leaving downstage corners in slate shadow. CLARA (30s, wool coat still buttoned) stands near the downstage-left doorway, briefcase gripped in both hands. ARTHUR (70s) sits rigid in an uncovered wooden chair beside the clock, facing front.]*\n\n**ARTHUR:** *(not turning)* You're six minutes late.\n**CLARA:** *(taking one cautious step inside, stopping short of the light)* The bridge was closed. Are you keeping your coat off in here?\n**ARTHUR:** *(tapping the brass key of the clock on his knee)* Men who sell a house do not need heating.",
          steps: [
            "**Read the set as visual exposition:** Stripped carpets and chalk lot-numbers immediately establish commercial dismantling of family history; the space is neither home nor empty warehouse, caught in uncomfortable transition.",
            "**Analyse proxemics and blocking:** Clara remains **downstage-left** near the exit with her coat buttoned and briefcase held like a shield—physically signalling reluctance to stay—while Arthur occupies **upstage centre** beside the heirloom, refusing even to turn his body toward her. The diagonal stage gulf embodies their emotional estrangement.",
            "**Decode lighting and spatial division:** Harsh winter light isolates Arthur and the clock while relegating Clara to *\"slate shadow\"*; her deliberate decision to *\"stop short of the light\"* stages her refusal to step onto his moral terrain.",
            "**Evaluate the symbolic prop:** The uncovered pendulum clock with its **diagonally cracked glass** and **motionless pendulum** externalises frozen memory and fractured lineage. Arthur's rhythmic tapping of the brass key on his knee converts an emblem of inheritance into an acoustic weapon of guilt.",
          ],
          answer:
            "Through stark lighting contrast, wide diagonal proxemics separating doorway from hearth, and the symbolically stalled pendulum clock, the playwright visually dramatises an unbridgeable generational gulf between preservation and departure.",
          yourTurn: {
            question:
              "What theatrical term specifically describes the use of physical distance and spatial positioning between characters on stage to convey power or emotional estrangement?",
            answer: {
              type: "text",
              accept: ["proxemics", "proxemic distance", "blocking"],
              display: "proxemics",
            },
            solution:
              "**Proxemics** refers to the meaningful use of physical space and distance between characters on stage (complemented by stage blocking).",
          },
        },
      ],
      keyPoints: [
        "Treat a play script as a **3D performance blueprint**: integrate stage directions, spatial blocking, lighting, sound, and props directly alongside spoken dialogue.",
        "**Proxemics** (distance, elevation, orientation, movement toward/away) visually expresses intimacy, intimidation, and ideological division without a word spoken.",
        "**Symbolic props** condense abstract themes into tangible stage objects that can be gripped, hidden, broken, or left behind.",
        "Notice how playwrights manipulate the **fourth wall**—either preserving naturalistic illusion or shattering it through Brechtian *Verfremdungseffekt* (alienation effect) to stimulate critical detachment.",
        "**Entrances, exits, and offstage cues** control dramatic rhythm and reveal who commands the physical and social boundaries of the scene.",
      ],
      whyItWorks:
        "Theatre happens simultaneously to eyes, ears, and bodies sharing one room. An audience processes spatial hierarchy and lighting contrast milliseconds before finishing a sentence of dialogue; when a character claims 'I'm completely calm' while gripping a teacup in a harsh spotlight at the far edge of the stage, the visual contradiction instantaneously creates dramatic tension.",
      strategies: [
        "In Paper 1 on an unseen drama extract, **always read the opening stage-direction block twice** and underline lighting, props, posture, and entrances—they often unlock the guiding question.",
        "Use active theatrical verbs in your essays: *stages, blocks, isolates, frames, disrupts, foregrounds, illuminates, externalises*—rather than prose habits like *'the narrator tells us'* (plays rarely have a narrator!).",
        "Ask **'What would an audience seated in Row 5 see and hear at this exact beat?'** to keep your commentary anchored in live performance.",
      ],
      thinkDeeper:
        "Why might a playwright deliberately use **non-naturalistic or Brechtian staging** when tackling a deeply painful political injustice, rather than trying to make the audience weep with realistic pathos?",
    },

    // =========================================================================
    // SECTION 4
    // =========================================================================
    {
      id: "subtext-dialogue-tragedy-comedy",
      heading: "Subtext, Dialogue Dynamics, Dramatic Irony & Tragic/Comic Arcs",
      level: "SL",
      discovery: {
        problem:
          "Read this brief dramatic exchange between two siblings after a funeral:\n\n**NAOMI:** *You folded the programmes very neatly.*\n**DAVID:** *(pause)* *Someone had to.*\n**NAOMI:** *You always did love an orderly drawer.*\n**DAVID:** *(longer pause; sets the stack down precisely)* *At least nothing gets lost in mine.*\n\nOn the literal surface, they are discussing folded paper and drawers. **What are they actually arguing about—and what signals the concealed battlefield?**",
        idea:
          "Beneath mundane domestic trivia lies a bitter accusation about emotional coldness versus family responsibility. The **subtext** erupts through loaded qualifiers (*always*), clipped elliptical replies (*Someone had to*), ironic praise, and **Pinteresque pauses** that let unspoken resentment reverberate across the room.",
      },
      body: `Great dramatic dialogue rarely states feelings directly—because in life, people deflect, conceal, negotiate status, and wound each other sideways. Analysing **how** speech moves (and where it stalls) reveals the psychological engine beneath a play's surface.

### 1. Subtext & Dialogue Dynamics
- **Subtext:** The unspoken motive, fear, desire, or power struggle pulsing underneath literal words. Track the **gap** between surface politeness and concealed intent.
- **Stichomythia:** Rapid-fire alternating single lines (or half-lines) of dialogue, inherited from Greek tragedy and perfected in Renaissance and modern drama. Generates verbal fencing, intellectual rivalry, escalating panic, or tightly matched wills.
- **Interruption & Overlapping Speech:** Cutting across another speaker (marked by dashes \`—\` or slashes \`/\`) enacts dominance, impatience, or frantic evasion—whereas trailing ellipses (\`...\`) reveal hesitation, self-censorship, or collapse of confidence.
- **Pauses & Silences (Pinteresque Pauses):** Following Harold Pinter's theatrical craft (e.g. *The Homecoming* [Example text — not a set text]), distinguish carefully between a **beat** (brief cognitive shift), a **pause** (charged hesitation where a character recalculates strategy), and a **silence** (an oppressive void where dialogue breaks down completely and subtext dominates the auditorium).

### 2. Interior Speech & Audience Complicity
Never confuse these three distinct dramatic conventions:

| Convention | Who Is On Stage? | Who Hears It? | Primary Dramatic Function |
| :--- | :--- | :--- | :--- |
| **Soliloquy** | Character is **alone** (or believes they are alone) | Audience only | Exposes unfiltered internal deliberation, moral conflict, or self-deception |
| **Aside** | **Other characters** are on stage | Audience only (by convention, unheard by others) | Creates instant conspiracy with the audience, sharpens irony or comic commentary |
| **Dramatic Monologue** | Speaker addresses a **silent listener** (in drama or poetry) | Onstage auditor & audience | Reveals character psychology through one-sided persuasion, power, or evasion |

- **Dramatic Irony:** Occurs whenever the **audience knows a crucial truth** that one or more onstage characters do not. In tragedy, dramatic irony intensifies helplessness and dread; in comedy, it fuels misunderstandings and satirical exposure.

### 3. Classical & Modern Tragedy vs Satirical & Absurdist Comedy
Aristotle's *Poetics* [Example text — not a set text] codified five analytical concepts that remain essential across both classical plays (such as Sophocles's *Oedipus Rex* [Example text — not a set text]) and modern domestic tragedies (such as Arthur Miller's *Death of a Salesman* [Example text — not a set text]):
- **Hubris:** Overweening pride or arrogance that blinds a protagonist to mortal, moral, or social limits.
- **Hamartia:** Often mis-translated simply as a "personality flaw," *hamartia* more accurately means a **tragic error of judgement or fateful miscalculation**—an arrow missing its mark—which sets irreversible consequences in motion.
- **Peripeteia:** The sudden **reversal of fortune** where a character's intended triumph or precaution triggers the exact catastrophe they tried to avert.
- **Anagnorisis:** The devastating flash of **recognition**, moving from ignorance to painful self-knowledge—usually arriving too late to undo the catastrophe.
- **Catharsis:** The audience's emotional release and moral clarification through pity and fear as the tragic pattern completes itself.

**Modern tragedy** frequently democratises this arc—replacing royal palaces with kitchens and offices, locating *hamartia* inside systemic economic or familial illusions rather than cosmic fate.

**Comedy** operates with equally rigorous craft:
- **Satirical Comedy / Comedy of Manners** (e.g. Oscar Wilde's *The Importance of Being Earnest* [Example text — not a set text]) deploys witty repartee, epigrammatic inversion, and absurd social etiquette to expose hypocrisy, class pretension, and performative morality.
- **Theatre of the Absurd** (e.g. Samuel Beckett's *Waiting for Godot* [Example text — not a set text]) dismantles linear plot and logical dialogue—using cyclical repetition, vaudevillian **bathos** (sudden plunge from elevated seriousness to trivial absurdity), and linguistic stalemate to confront existential uncertainty.`,
      diagram: SVG_TRAGIC_ARC_SUBTEXT,
      diagramCaption:
        "Left: Classical Aristotelian tragic arc from hubris and hamartia through peripeteia and anagnorisis to catharsis. Right: The Subtext Iceberg separating spoken surface from concealed dramatic tension.",
      workedExamples: [
        {
          title: "Unpacking Stichomythia, Subtext, Aside & Dramatic Irony",
          problem:
            "Read this unseen dramatic exchange (*\"The Ledger\"*)—the audience already knows that JULIAN secretly transferred the deeds of the family timber yard to a rival firm yesterday—and analyse how dialogue craft builds tension:\n\n**VERA:** You signed the renewal with Harbour Trust?\n**JULIAN:** Every signature was dry before noon.\n**VERA:** And the warehouse lease stays intact?\n**JULIAN:** Intact as the day Father drew it.\n**VERA:** *(sharply)* You haven't answered whether Harbour Trust still holds the deed.\n**JULIAN:** *(Pause. He straightens a silver fountain pen parallel to the blotter.)* You worry too much about paper, Vera.\n**VERA:** *(turning slightly downstage, murmured aside)* And you have never once looked at my face while lying.",
          steps: [
            "**Analyse the opening stichomythia:** The rapid four-line question-and-response exchange establishes taut verbal fencing. Notice Julian's **evasive legalism**: *\"Every signature was dry\"* and *\"Intact as the day Father drew it\"* sound reassuring while carefully avoiding naming the buyer.",
            "**Trace dramatic irony:** Because the audience already knows Julian transferred the deeds, his smooth assurances produce chilling **dramatic irony**—every polished metaphor (*intact*, *paper*) exposes his duplicity rather than comforting us.",
            "**Unpack the Pinteresque pause and micro-action:** When Vera pins him down with an exact factual question, Julian's **pause** and obsessive straightening of the fountain pen reveal involuntary tension; his condescending deflection (*\"You worry too much about paper\"*) shifts the attack onto her temperament to mask his guilt.",
            "**Evaluate the aside:** Vera's downstage **aside** cracks the naturalism for one razor-sharp beat, revealing that she already suspects his deceit—transforming the audience's perception of her from naive victim to watchful strategist.",
          ],
          answer:
            "By layering evasive stichomythia with dramatic irony, a loaded pause accompanied by nervous prop-fiddling, and a strategic downstage aside, the playwright exposes both Julian's calculated deceit and Vera's quiet tactical awareness.",
          yourTurn: {
            question:
              "What classical dramatic term describes rapid-fire alternating single lines of dialogue—as seen in the opening four-line sparring match between Vera and Julian?",
            answer: {
              type: "text",
              accept: ["stichomythia"],
              display: "stichomythia",
            },
            solution:
              "**Stichomythia** is rapid alternating single-line (or half-line) dialogue used to heighten verbal conflict, intellect, or pace.",
          },
        },
      ],
      keyPoints: [
        "**Subtext** is the gap between spoken surface and concealed desire/hostility—often betrayed by deflection, loaded qualifiers, pauses, or contradictory gestures.",
        "**Stichomythia** accelerates conflict through rapid single-line exchanges; **interruptions** enact power bids; **Pinteresque pauses and silences** amplify unspoken threat.",
        "Keep **soliloquy** (alone on stage), **aside** (spoken to audience while others remain present), and **dramatic monologue** (addressed to a silent onstage listener) strictly distinct.",
        "**Hamartia** denotes a fateful error of judgement rather than merely a cartoon 'bad trait'; pair it accurately with **hubris, peripeteia, anagnorisis, and catharsis**.",
        "Satirical and absurdist comedies use inversion, wit, cyclical stasis, and **bathos** to perform serious social and philosophical critique.",
      ],
      whyItWorks:
        "Audiences are active detectives: when a playwright hides motive beneath polite dialogue or hands the auditorium knowledge withheld from a protagonist (dramatic irony), spectators lean forward to decode every pause, glance, and evasively phrased clause. Emotional power multiplies when spectators discover the hidden truth themselves rather than being lectured.",
      strategies: [
        "Whenever you quote dialogue in an essay, **translate the subtext explicitly** using phrases such as *'On the surface this polite inquiry suggests..., yet the accompanying pause and deflection expose...'*.",
        "Distinguish **dramatic irony** (audience knows more than the character) from **verbal irony** (speaker says the opposite of what they mean) and **situational irony** (outcome inverts expectation).",
        "When evaluating tragedy on Paper 2, ask **how the playwright adapts or subverts Aristotle's model**—for example, whether *anagnorisis* is tragically withheld or whether *catharsis* is deliberately denied.",
      ],
      thinkDeeper:
        "If a modern play denies its protagonist **anagnorisis** (so they fall without ever understanding why) and denies the audience **catharsis**, can it still function as tragedy—or does it cross into the absurd?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is the **volta**, and where does it conventionally appear in Petrarchan vs Shakespearean sonnets?",
        back: "The **volta** is the structural and tonal turn in a poem's argument or attitude. In a **Petrarchan sonnet** it arrives at **Line 9** (between octave and sestet); in a **Shakespearean sonnet** it often pivots at **Line 13** (the rhyming couplet), though a secondary turn may appear at Line 9.",
      },
      {
        front: "Distinguish **enjambment**, **end-stopping**, and **caesura**.",
        back: "**Enjambment** carries syntax across a line break without punctuation (urgency, spill, double meaning). **End-stopping** closes syntax at the line end (control, finality). **Caesura** is a deliberate pause *within* a line (hesitation, fracture, internal contrast).",
      },
      {
        front: "How do **iambic**, **trochaic**, and **spondaic** feet differ in rhythm and expressive effect?",
        back: "**Iamb (`˘ /`)**: rising speech-like heartbeat. **Trochee (`/ ˘`)**: falling beat; initial trochaic inversion creates sudden force or command. **Spondee (`/ /`)**: two adjacent heavy stresses slowing tempo for weight, shock, or resistance.",
      },
      {
        front: "What defines a **villanelle**, and what psychological states does it commonly enact?",
        back: "A **19-line** fixed form (five **ABA** tercets + one **ABAA** quatrain) built on two alternating refrains (Lines 1 and 3) and just two rhyme sounds—ideal for obsession, circular grief, haunting persistence, or defiant refusal.",
      },
      {
        front: "What is the precise difference between **metonymy** and **synecdoche**?",
        back: "**Metonymy** replaces a concept with an **associated attribute or emblem** (*the Crown* for monarchy; *the press* for journalism). **Synecdoche** replaces a **whole with a physical part** (or vice versa, e.g. *gloved hands* for workers; *sails* for ships).",
      },
      {
        front: "Why is *'sibilance creates a sinister atmosphere'* an IB exam trap?",
        back: "Sound devices have **no inherent fixed meaning**. Repeated `/s/` or `/ʃ/` sounds can evoke a gentle lullaby hush or ocean calm just as easily as venomous malice—effect always depends on lexical context, diction, and tone.",
      },
      {
        front: "What is **half-rhyme** (slant rhyme / pararhyme) and why do poets use it?",
        back: "Imperfect rhyme matching consonants while shifting vowels (e.g. *blood / blade*, *warm / worm*). Frustrating the ear's expectation of chime generates tonal dissonance, unease, irony, or unresolved grief.",
      },
      {
        front: "What is **synesthesia** in poetry?",
        back: "The deliberate fusion of two distinct sensory channels—such as taste and sight (*'sour gold'*) or sound and touch (*'velvet static'*)—to intensify perception, disorientation, or sensory immersion.",
      },
      {
        front: "Why must IB essays separate the **speaker (persona)** from the **poet**?",
        back: "The **speaker** is a crafted fictional voice inside the poem (who may be ironic, unreliable, or self-deceiving), while the **poet** is the writer shaping structural and stylistic choices. Conflating them commits the biographical fallacy.",
      },
      {
        front: "What is **proxemics** in drama analysis?",
        back: "The deliberate manipulation of physical distance, orientation, and spatial zones between actors on stage to communicate intimacy, dominance, alienation, or shifting power dynamics visually.",
      },
      {
        front: "What is Bertolt Brecht's ***Verfremdungseffekt*** (alienation / estrangement effect)?",
        back: "Theatrical techniques—such as breaking the fourth wall, placards, visible lighting rigs, and interrupting songs—designed to prevent passive emotional absorption and prompt audiences to critique social and political structures.",
      },
      {
        front: "Contrast **expressionist staging** with **naturalistic staging**.",
        back: "**Naturalism** aims for lifelike domestic illusion behind an intact fourth wall; **expressionism** uses distorted lighting, symbolic sets, and heightened soundscapes to project a character's interior psychological state directly onto the stage.",
      },
      {
        front: "Distinguish **soliloquy**, **aside**, and **dramatic monologue**.",
        back: "**Soliloquy**: character speaks thoughts aloud while alone on stage. **Aside**: brief remark directed to the audience while other characters are present (conventionally unheard by them). **Dramatic monologue**: sustained speech addressed to a silent listener.",
      },
      {
        front: "What is **stichomythia**, and what dramatic effect does it produce?",
        back: "Rapid-fire alternating single lines (or half-lines) of dialogue between two characters, creating verbal fencing, sharp intellectual rivalry, escalating panic, or intense emotional friction.",
      },
      {
        front: "Define **subtext** and **Pinteresque pause**.",
        back: "**Subtext** is the unspoken motive, tension, or hostility beneath literal spoken dialogue. A **Pinteresque pause** is a deliberate, charged halt in speech where unspoken menace, hesitation, or power calculation fills the room.",
      },
      {
        front: "Distinguish **hamartia**, **peripeteia**, **anagnorisis**, and **catharsis**.",
        back: "**Hamartia**: tragic error of judgement/miscalculation. **Peripeteia**: sudden reversal of fortune. **Anagnorisis**: devastating recognition of truth. **Catharsis**: audience's emotional purgation and moral clarification through pity and fear.",
      },
    ],
    mustKnow: [
      "Always pair any poetic or dramatic device with its **psychological, tonal, or thematic effect**—naming a technique alone earns minimal Criterion B credit.",
      "Read a poem's **form, metre, enjambment, caesura, and volta** as active meaning-makers that enact control, restlessness, or rupture.",
      "Acoustic effects (sibilance, plosives, assonance, consonance, half-rhyme) are strictly **context-dependent**—interpret sound alongside diction and imagery.",
      "Distinguish **poet** (craftsperson) from **speaker / persona** (constructed voice) in every poetry essay.",
      "Read drama scripts as **three-dimensional performance blueprints**: weave stage directions, proxemics, lighting, soundscapes, and symbolic props into your close reading.",
      "Keep **soliloquy**, **aside**, and **dramatic monologue** strictly distinct—and never refer to a play's stage directions as 'the narrator'.",
      "Translate **subtext** explicitly: show the gap between literal surface words and concealed motive, status play, or emotional defence.",
      "Use Aristotelian terms with precision: **hamartia** is a tragic error of judgement (not merely a bad trait), triggering **peripeteia** (reversal) and **anagnorisis** (recognition).",
      "Recognise how **Brechtian *Verfremdungseffekt*** breaks the fourth wall to provoke critical social reflection rather than passive emotional empathy.",
      "Never structure an IB commentary chronologically stanza-by-stanza or speech-by-speech—organise around **conceptual arguments** anchored in textual shifts.",
    ],
    misconceptions: [
      {
        wrong: "The 'I' in a lyric poem is automatically the poet's personal diary voice.",
        right: "Even autobiographical-sounding poems construct a **lyrical persona (speaker)** filtered through artistic craft; always distinguish speaker from poet to avoid biographical fallacy.",
      },
      {
        wrong: "Sibilance always means something sinister, evil, or snake-like.",
        right: "Sibilance is purely acoustic—in gentle lexical contexts it evokes hushed calm, lullabies, or sea spray; only harsh diction makes it hiss with menace.",
      },
      {
        wrong: "Free verse has 'no structure' or 'no form' because it lacks regular rhyme and metre.",
        right: "Free verse deliberately employs **visual lineation, stanza proportion, white space, caesura, enjambment, and rhythmic cadence** as its expressive architecture.",
      },
      {
        wrong: "Stage directions are just background notes for actors; IB essays should focus only on spoken lines.",
        right: "Stage directions encode **proxemics, lighting, props, gestures, and silences**—central authorial choices directly rewarded under IB Criterion B for drama.",
      },
      {
        wrong: "Hamartia simply means a character's 'fatal personality flaw' like being stubborn.",
        right: "In Aristotle's *Poetics* [Example text — not a set text], *hamartia* literally means 'missing the mark'—an **error of judgement or fateful miscalculation**, which may stem from pride, ignorance, or moral dilemma.",
      },
      {
        wrong: "A soliloquy and a dramatic monologue are the same thing because only one person is talking.",
        right: "In a **soliloquy**, the character is alone on stage addressing only themselves/the audience; in a **dramatic monologue**, they address a specific silent listener whose presence shapes what they conceal or perform.",
      },
      {
        wrong: "Metonymy and synecdoche are interchangeable synonyms for metaphor.",
        right: "**Synecdoche** uses a physical part for the whole (*weary hands* for workers), whereas **metonymy** uses an external associated emblem (*the Crown* for monarchy).",
      },
      {
        wrong: "Comedy in IB Literature is light entertainment with less serious thematic craft than tragedy.",
        right: "Satirical comedy, comedy of manners, and Theatre of the Absurd deploy sharp linguistic inversion, dramatic irony, and bathos to expose social hypocrisy and existential vulnerability.",
      },
    ],
    examMistakes: [
      "**Chronological walk-throughs (Paper 1):** Summarising Stanza 1, then Stanza 2, then Stanza 3 traps essays in lower Criterion C bands—group paragraphs by conceptual tensions instead.",
      "**Empty technique-spotting (Criterion B):** Writing *'The poet uses enjambment and alliteration to draw the reader in'* scores poorly because 'draws the reader in' is generic and could describe any text.",
      "**Ignoring drama as theatre:** Writing about a play as if characters exist in a novel—omitting staging, proxemics, lighting, audience sightlines, and pauses—misses drama-specific craft.",
      "**Calling the playwright 'the narrator':** Unless a play explicitly casts an onstage Narrator character, speak of **the playwright**, **the stage directions**, and **the audience** (not 'the reader' alone).",
      "**Over-claiming fixed sound symbolism:** Asserting that plosives *always* signify violence or caesura *always* signifies death without testing the surrounding diction and syntax.",
      "**Quoting massive 5-line blocks:** Long unanalysed quotations waste time and blur focus; embed crisp 2–6 word **micro-quotations** directly into analytical sentences.",
      "**Missing the volta or tonal shift:** Treating a poem or dramatic scene as emotionally monotonous from start to finish misses the structural evolution that produces insightful Criterion A interpretations.",
      "**Misapplying Aristotelian terms to every sad play:** Check whether a modern play actually enacts *anagnorisis* and *catharsis*—or deliberately **subverts** classical tragedy by withholding them.",
    ],
    mnemonics: [
      {
        topic: "Poetic Structural Audit",
        device: "F-M-L-V (Form, Metre, Lineation, Volta)",
        explanation:
          "Scan every unseen poem through four structural lenses before planning: **F**orm (fixed/open), **M**etre (baseline pulse & disruptions), **L**ineation (enjambment, caesura, end-stops), and **V**olta (where perspective or tone pivots).",
      },
      {
        topic: "Drama as 3D Performance",
        device: "S-P-L-P-S (Space, Proxemics, Lighting, Props, Silence)",
        explanation:
          "Visualise every dramatic extract in five physical dimensions: **S**pace/set, **P**roxemics/blocking, **L**ighting & soundscapes, symbolic **P**rops, and **S**ilence/pauses carrying subtext.",
      },
      {
        topic: "Aristotelian Tragic Sequence",
        device: "H-H-P-A-C (Hubris → Hamartia → Peripeteia → Anagnorisis → Catharsis)",
        explanation:
          "Trace classical tragic escalation cleanly in order: **H**ubris (pride) + **H**amartia (fatal error) → **P**eripeteia (reversal) → **A**nagnorisis (recognition) → **C**atharsis (emotional clarification).",
      },
      {
        topic: "Anti-Technique-Spotting Engine",
        device: "C-M-T (Choice → Mechanism → Tension)",
        explanation:
          "Never stop at naming a feature. Pair **C**hoice (precise term + micro-quote) with **M**echanism (how sound/space/imagery acts on reader or audience) and **T**ension (how it complicates the work's central thematic conflict).",
      },
    ],
    realWorld: [
      {
        title: "Spoken-Word & Hip-Hop Prosody",
        detail:
          "Modern spoken-word artists and lyricists deploy internal assonance, multisyllabic half-rhyme, caesura pauses, and deliberate off-beat metrical syncopation for the exact rhythmic force poets have engineered for centuries.",
        emoji: "🎤",
      },
      {
        title: "Live Theatre Directing & Re-Staging Across Eras",
        detail:
          "Two stage productions of the very same script—say, staging a classical tragedy in stark fluorescent hospital lighting versus candlelit period dress—prove that proxemics, lighting, and costume actively rewrite a play's political meaning.",
        emoji: "🎬",
      },
      {
        title: "Subtext in Prestige Film & Television Dialogue",
        detail:
          "Screenwriters routinely borrow Harold Pinter's theatrical principle: scenes where characters argue intensely over who left a window open or how tea is poured hit harder than scenes where characters openly announce 'I resent you'.",
        emoji: "📺",
      },
      {
        title: "Architectural Acoustics & Political Theatre",
        detail:
          "Contemporary immersive and documentary theatre draws directly on Brechtian *Verfremdungseffekt*—leaving house lights up, projecting live data onto stage walls, and addressing audiences directly so spectators feel ethically implicated.",
        emoji: "🏛️",
      },
      {
        title: "Elegies in Public Mourning & Memorials",
        detail:
          "From carved stone memorials to contemporary civic poems, elegiac structures negotiate the tension between seeking comforting closure and refusing to tidy away historical grief.",
        emoji: "🕯️",
      },
    ],
    videos: [
      {
        title: "IB English A Literature: Analysing Unseen Poetry (Form, Metre & Volta)",
        channel: "IB English Guys",
        url: "https://www.youtube.com/results?search_query=IB+English+A+Literature+unseen+poetry+form+metre+volta",
      },
      {
        title: "Scansion & Poetic Metre Explained: Iambs, Trochees, Spondees & Enjambment",
        channel: "Literature & Prosody Walkthroughs",
        url: "https://www.youtube.com/results?search_query=poetic+metre+scansion+iambic+trochaic+spondaic+enjambment+caesura",
      },
      {
        title: "How to Analyse Drama Scripts for IB Paper 1 & Paper 2 (Staging, Proxemics & Subtext)",
        channel: "IB English Guys",
        url: "https://www.youtube.com/results?search_query=IB+English+drama+analysis+stage+directions+proxemics+subtext",
      },
      {
        title: "Brechtian Epic Theatre, Verfremdungseffekt & Aristotelian Tragedy Explained",
        channel: "National Theatre Discover",
        url: "https://www.youtube.com/results?search_query=National+Theatre+Brecht+epic+theatre+Aristotle+tragedy+hamartia",
      },
    ],
    formulas: [
      {
        name: "Petrarchan Sonnet Blueprint",
        formula: "14 lines = Octave (ABBAABBA) + Line-9 Volta + Sestet (CDECDE / CDCDCD)",
        note: "Two-part dialectic: setup/dilemma pivoted and reframed at Line 9.",
      },
      {
        name: "Shakespearean Sonnet Blueprint",
        formula: "14 lines = 3 Quatrains (ABAB CDCD EFEF) + Rhyming Couplet (GG)",
        note: "Progressive three-step development sealed or inverted in Lines 13–14.",
      },
      {
        name: "Villanelle Architecture",
        formula: "19 lines = 5 Tercets (ABA) + 1 Quatrain (ABAA) | 2 alternating refrains (L1 & L3)",
        note: "Only two rhyme sounds across the entire poem; enacts circularity or obsession.",
      },
      {
        name: "Iambic Pentameter Baseline",
        formula: "˘ / | ˘ / | ˘ / | ˘ / | ˘ /   (5 iambs = 10 syllables)",
        note: "Listen for initial trochee (/ ˘) or heavy spondee (/ /) breaking the baseline pulse.",
      },
      {
        name: "Metonymy vs Synecdoche Rule",
        formula: "Metonymy = Associated Emblem (Crown → Monarchy) | Synecdoche = Physical Part ↔ Whole (Hands → Workers)",
        note: "Check whether the substitute is physically part of the object or conceptually adjacent.",
      },
      {
        name: "Anti-Technique-Spotting Formula",
        formula: "Precise Authorial Choice + Micro-Quote → Sensory/Psychological Mechanism → Thematic Tension",
        note: "Replaces hollow phrasing like 'creates an effect' or 'engages the reader'.",
      },
      {
        name: "Lyrical Persona Filter",
        formula: "Biographical Poet ≠ Constructed Speaker (Persona)",
        note: "Attribute formal craft to the poet; attribute attitude, bias, or blind spots to the speaker.",
      },
      {
        name: "Performance Reading Equation",
        formula: "Dramatic Meaning = Spoken Dialogue + Stagecraft (Proxemics, Lighting, Props, Silence)",
        note: "When visual stagecraft contradicts spoken dialogue, subtext intensifies dramatically.",
      },
      {
        name: "Brechtian Alienation Formula",
        formula: "Broken Fourth Wall + Theatrical Visibility → Critical Detachment (Verfremdungseffekt)",
        note: "Interrupts passive emotional immersion to expose social and political choices.",
      },
      {
        name: "Dramatic Irony Gap",
        formula: "Audience Knowledge > Character Knowledge ⇒ Dread (Tragedy) or Satirical Exposure (Comedy)",
        note: "Distinct from verbal irony (saying the opposite) and situational irony (inverted outcome).",
      },
      {
        name: "Aristotelian Tragic Arc",
        formula: "Hubris + Hamartia (error) → Peripeteia (reversal) → Anagnorisis (recognition) → Catharsis",
        note: "Evaluate whether a playwright fulfils or deliberately subverts each stage.",
      },
      {
        name: "Subtext Iceberg Principle",
        formula: "Subtext = Unspoken Motive / Status Bid − Literal Surface Utterance",
        note: "Decoded through Pinteresque pauses, evasions, stichomythia, and contradictory body language.",
      },
    ],
  },
};
