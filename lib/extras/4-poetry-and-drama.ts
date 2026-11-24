import type { TopicExtras } from "../types.ts";

const SVG_VILLANELLE_MAP = `<svg viewBox="0 0 600 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Structural blueprint of a 19-line villanelle showing five ABA tercets and a closing ABAA quatrain with alternating Refrain 1 and Refrain 2 lines">
  <rect x="0" y="0" width="600" height="285" rx="14" fill="#ffffff" />
  <text x="300" y="25" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">Villanelle Refrain Architecture (19 Lines · 2 Rhymes)</text>

  <!-- Legend -->
  <rect x="115" y="38" width="165" height="22" rx="6" fill="#ffe4e6" stroke="#be123c" stroke-width="1.2" />
  <text x="197" y="53" text-anchor="middle" font-size="10" font-weight="800" fill="#881337">A1 = Refrain Line 1 (×4)</text>
  <rect x="305" y="38" width="175" height="22" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="1.2" />
  <text x="392" y="53" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">A2 = Refrain Line 3 (×4)</text>

  <!-- Stanza 1 -->
  <rect x="20" y="76" width="84" height="122" rx="8" fill="#fdf8f8" stroke="#ebd8de" stroke-width="1.2" />
  <text x="62" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="#241016">Tercet 1</text>
  <rect x="28" y="102" width="68" height="24" rx="4" fill="#ffe4e6" stroke="#be123c" />
  <text x="62" y="118" text-anchor="middle" font-size="10" font-weight="800" fill="#881337">L1 · A1</text>
  <rect x="28" y="132" width="68" height="24" rx="4" fill="#e0f2fe" stroke="#0369a1" />
  <text x="62" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="#0c4a6e">L2 · b</text>
  <rect x="28" y="162" width="68" height="24" rx="4" fill="#fef3c7" stroke="#b45309" />
  <text x="62" y="178" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">L3 · A2</text>

  <!-- Stanza 2 -->
  <rect x="114" y="76" width="84" height="122" rx="8" fill="#fdf8f8" stroke="#ebd8de" stroke-width="1.2" />
  <text x="156" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="#241016">Tercet 2</text>
  <rect x="122" y="102" width="68" height="24" rx="4" fill="#f9efef" stroke="#ebd8de" />
  <text x="156" y="118" text-anchor="middle" font-size="10" font-weight="700" fill="#241016">L4 · a</text>
  <rect x="122" y="132" width="68" height="24" rx="4" fill="#e0f2fe" stroke="#0369a1" />
  <text x="156" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="#0c4a6e">L5 · b</text>
  <rect x="122" y="162" width="68" height="24" rx="4" fill="#ffe4e6" stroke="#be123c" />
  <text x="156" y="178" text-anchor="middle" font-size="10" font-weight="800" fill="#881337">L6 · A1</text>

  <!-- Stanza 3 -->
  <rect x="208" y="76" width="84" height="122" rx="8" fill="#fdf8f8" stroke="#ebd8de" stroke-width="1.2" />
  <text x="250" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="#241016">Tercet 3</text>
  <rect x="216" y="102" width="68" height="24" rx="4" fill="#f9efef" stroke="#ebd8de" />
  <text x="250" y="118" text-anchor="middle" font-size="10" font-weight="700" fill="#241016">L7 · a</text>
  <rect x="216" y="132" width="68" height="24" rx="4" fill="#e0f2fe" stroke="#0369a1" />
  <text x="250" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="#0c4a6e">L8 · b</text>
  <rect x="216" y="162" width="68" height="24" rx="4" fill="#fef3c7" stroke="#b45309" />
  <text x="250" y="178" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">L9 · A2</text>

  <!-- Stanza 4 -->
  <rect x="302" y="76" width="84" height="122" rx="8" fill="#fdf8f8" stroke="#ebd8de" stroke-width="1.2" />
  <text x="344" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="#241016">Tercet 4</text>
  <rect x="310" y="102" width="68" height="24" rx="4" fill="#f9efef" stroke="#ebd8de" />
  <text x="344" y="118" text-anchor="middle" font-size="10" font-weight="700" fill="#241016">L10 · a</text>
  <rect x="310" y="132" width="68" height="24" rx="4" fill="#e0f2fe" stroke="#0369a1" />
  <text x="344" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="#0c4a6e">L11 · b</text>
  <rect x="310" y="162" width="68" height="24" rx="4" fill="#ffe4e6" stroke="#be123c" />
  <text x="344" y="178" text-anchor="middle" font-size="10" font-weight="800" fill="#881337">L12 · A1</text>

  <!-- Stanza 5 -->
  <rect x="396" y="76" width="84" height="122" rx="8" fill="#fdf8f8" stroke="#ebd8de" stroke-width="1.2" />
  <text x="438" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="#241016">Tercet 5</text>
  <rect x="404" y="102" width="68" height="24" rx="4" fill="#f9efef" stroke="#ebd8de" />
  <text x="438" y="118" text-anchor="middle" font-size="10" font-weight="700" fill="#241016">L13 · a</text>
  <rect x="404" y="132" width="68" height="24" rx="4" fill="#e0f2fe" stroke="#0369a1" />
  <text x="438" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="#0c4a6e">L14 · b</text>
  <rect x="404" y="162" width="68" height="24" rx="4" fill="#fef3c7" stroke="#b45309" />
  <text x="438" y="178" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">L15 · A2</text>

  <!-- Stanza 6 (Quatrain) -->
  <rect x="490" y="76" width="90" height="154" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.4" />
  <text x="535" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Quatrain 6</text>
  <rect x="498" y="102" width="74" height="24" rx="4" fill="#ffffff" stroke="#86efac" />
  <text x="535" y="118" text-anchor="middle" font-size="10" font-weight="700" fill="#241016">L16 · a</text>
  <rect x="498" y="132" width="74" height="24" rx="4" fill="#e0f2fe" stroke="#0369a1" />
  <text x="535" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="#0c4a6e">L17 · b</text>
  <rect x="498" y="162" width="74" height="24" rx="4" fill="#ffe4e6" stroke="#be123c" />
  <text x="535" y="178" text-anchor="middle" font-size="10" font-weight="800" fill="#881337">L18 · A1</text>
  <rect x="498" y="192" width="74" height="24" rx="4" fill="#fef3c7" stroke="#b45309" />
  <text x="535" y="208" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">L19 · A2</text>

  <!-- Bottom takeaway -->
  <rect x="20" y="242" width="560" height="30" rx="8" fill="#f9efef" stroke="#ebd8de" />
  <text x="300" y="261" text-anchor="middle" font-size="10.2" font-weight="700" fill="#241016">Both refrains finally collide as a closing couplet (L18–L19) — enacting obsession, ritual, or defiance.</text>
</svg>`;

const SVG_ACOUSTIC_REGISTERS = `<svg viewBox="0 0 600 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart of five poetic acoustic registers — plosives, sibilants, fricatives, liquids and nasals, and long vowel assonance — mapped across airflow mechanics and context-dependent expressive effects">
  <rect x="0" y="0" width="600" height="265" rx="14" fill="#ffffff" />
  <text x="300" y="25" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">The Five Acoustic Registers of Poetic Soundscapes</text>
  <text x="300" y="42" text-anchor="middle" font-size="10" fill="#6b4c56">Remember: phonetic effect is ALWAYS governed by surrounding diction &amp; tone</text>

  <!-- Row 1 -->
  <rect x="24" y="54" width="552" height="34" rx="7" fill="#ffe4e6" stroke="#be123c" stroke-width="1" />
  <text x="38" y="75" font-size="11" font-weight="800" fill="#881337">Plosives (/p, b, t, d, k, g/)</text>
  <text x="215" y="75" font-size="10" fill="#241016">Air blocked then burst</text>
  <text x="360" y="75" font-size="10" fill="#475569">Shock, anger, industrial clatter, crisp finality</text>

  <!-- Row 2 -->
  <rect x="24" y="94" width="552" height="34" rx="7" fill="#fef3c7" stroke="#b45309" stroke-width="1" />
  <text x="38" y="115" font-size="11" font-weight="800" fill="#92400e">Sibilants (/s, z, ʃ, ʒ/)</text>
  <text x="215" y="115" font-size="10" fill="#241016">Hissing stream past teeth</text>
  <text x="360" y="115" font-size="10" fill="#475569">Lullaby hush OR venomous stealth (context!)</text>

  <!-- Row 3 -->
  <rect x="24" y="134" width="552" height="34" rx="7" fill="#e0f2fe" stroke="#0369a1" stroke-width="1" />
  <text x="38" y="155" font-size="11" font-weight="800" fill="#0c4a6e">Fricatives (/f, v, θ, ð/)</text>
  <text x="215" y="155" font-size="10" fill="#241016">Tight breath friction</text>
  <text x="360" y="155" font-size="10" fill="#475569">Wind, exhaustion, whispered strain, roughness</text>

  <!-- Row 4 -->
  <rect x="24" y="174" width="552" height="34" rx="7" fill="#dcfce7" stroke="#15803d" stroke-width="1" />
  <text x="38" y="195" font-size="11" font-weight="800" fill="#166534">Liquids &amp; Nasals (/l, r, m, n/)</text>
  <text x="215" y="195" font-size="10" fill="#241016">Continuous smooth glide</text>
  <text x="360" y="195" font-size="10" fill="#475569">Lyrical flow, nostalgia, mournful lull, hum</text>

  <!-- Row 5 -->
  <rect x="24" y="214" width="552" height="34" rx="7" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1" />
  <text x="38" y="235" font-size="11" font-weight="800" fill="#5b21b6">Long Assonance (/əʊ, uː, ɑː/)</text>
  <text x="215" y="235" font-size="10" fill="#241016">Sustained open vowels</text>
  <text x="360" y="235" font-size="10" fill="#475569">Slows cadence; deepens elegiac solemnity</text>
</svg>`;

export const extras: TopicExtras = {
  hook: "Why can a single three-second pause between two actors holding coffee mugs freeze an entire auditorium of five hundred people—while one enjambed word hanging at the edge of a poetic line can flip tenderness into betrayal before your eye even reaches the next row?",
  didYouKnow: [
    "In ancient Greek theatre, *hamartia* came from archery and spear-throwing: it literally meant **'missing the target'**—which is why top IB essays define it as a fateful error of judgement rather than a simple personality flaw.",
    "The Italian word **stanza** literally means **'room'**. Reading a multi-stanza poem is like walking from room to room inside a house, noticing where the poet locks a door (end-stopping) or knocks down a wall (stanzaic enjambment).",
    "Playwright Harold Pinter famously distinguished three distinct types of theatrical quiet in scripts like *The Homecoming* [Example text — not a set text]: **three dots (...)** for brief hesitation, a **pause** for strategic recalibration, and a **silence** for complete breakdown of speech.",
    "Elizabethan theatres performed largely in **open daylight** without electric blackouts—so playwrights embedded lighting, weather, and midnight atmosphere straight into spoken imagery and portable symbolic props like lanterns or torches.",
    "Bertolt Brecht insisted on keeping stage lighting rigs **visibly exposed** and sometimes leaving auditorium house lights bright so spectators would never sink into dreamy escapism—he wanted an audience as alert as fans analysing tactics at a boxing match.",
    "Modern lyricists in spoken word, grime, and hip-hop use the exact prosodic toolkit of classical verse—especially **internal assonance**, **multisyllabic half-rhyme**, **caesura drops**, and **spondaic weight**.",
  ],
  activities: [
    {
      title: "The Re-Lineation Experiment (Discovering Why Line Breaks Matter)",
      emoji: "✂️",
      materials: [
        "Any 8–10 line unseen poem copied out as a flat block of prose (no line breaks, no capitals at line starts)",
        "A pencil and scissors (or highlighter)",
        "Your Learner Portfolio notebook",
      ],
      steps: [
        "Read the prose block aloud and decide where YOU would slice it into poetic lines to maximise emotional tension or double meaning.",
        "Mark at least two deliberate **enjambments** where a temporary end-word briefly creates an unexpected second sense, plus one sharp mid-line **caesura**.",
        "Compare your lineation against the poet's actual published layout: where did the poet break lines differently from your instinct?",
        "Write a 120-word reflection explaining how **one specific line break** alters rhythm, breath, and thematic nuance.",
      ],
      maths:
        "Poetic craft principle: Lineation is invisible until you alter it—comparing your version against the poet's reveals instantly why every line break is an active conceptual choice.",
    },
    {
      title: "The Two-Chair Proxemics & Subtext Lab",
      emoji: "🪑",
      materials: [
        "Two chairs and one ordinary object (a folded envelope, coffee mug, or set of keys)",
        "Two classmates (or solo sketching on a stage floorplan)",
        "A 4-line mundane dialogue: 'You're early.' / 'The traffic cleared.' / 'Did you bring it?' / 'It's on the table.'",
      ],
      steps: [
        "Stage **Version 1 (Warm Naturalism):** Place both chairs 0.8 m apart facing one another; speak briskly with zero pauses.",
        "Stage **Version 2 (Estranged Tension):** Push the chairs 4 m apart facing opposite directions, isolate the envelope on the floor dead centre, and insert a **4-second silence** before 'It's on the table.'",
        "Stage **Version 3 (Brechtian Alienation):** Have one speaker freeze mid-scene, step forward toward the audience, and calmly announce the financial motive behind the envelope.",
        "Record in your Learner Portfolio how altering **proxemics, pause duration, and fourth-wall boundaries** transformed subtext without changing a single word of dialogue.",
      ],
      maths:
        "Dramatic craft principle: Meaning in theatre lives in the three-dimensional friction between spoken text, spatial distance, prop placement, and timed silence.",
    },
    {
      title: "Acoustic De-Cliché Audit",
      emoji: "🎧",
      materials: [
        "Two contrasting 4-line poetic extracts (one peaceful, one violent) that share the same sound device (e.g. both sibilant or both plosive)",
        "Two coloured pens (one for sound, one for lexical field)",
      ],
      steps: [
        "Underline every repeated `/s/` (sibilant) or `/p, b, t, d, k, g/` (plosive) consonant across both extracts in Colour 1.",
        "Circle the surrounding verbs and sensory adjectives in Colour 2.",
        "Write one single IB Criterion B analytical sentence for each extract proving how the **exact same phonetic device** generates opposite moods once paired with contrasting semantic fields.",
        "Ban any generic filler ('draws the reader in', 'creates a good flow') from your final draft.",
      ],
      maths:
        "IB Band 5 principle: Sound never speaks alone—prosodic and acoustic effects always emerge from the partnership between phonetics, diction, and tone.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Villanelle 19-Line Refrain Blueprint",
      svg: SVG_VILLANELLE_MAP,
      caption:
        "Visual map of how Refrains A1 and A2 alternate across five tercets before locking together in the closing ABAA quatrain.",
    },
    {
      title: "The Five Acoustic Registers of Poetic Soundscapes",
      svg: SVG_ACOUSTIC_REGISTERS,
      caption:
        "Phonetic airflow mechanics paired with context-dependent analytical effects—an anti-technique-spotting reference for unseen poetry.",
    },
  ],
  history: {
    title: "From Open-Air Amphitheatres to Broken Fourth Walls: How Architecture Rewrote Drama",
    story:
      "Every shift in dramatic craft grew straight out of physical stage architecture. In fifth-century BCE Athens, up to 15,000 spectators sat beneath open Mediterranean sky around a circular *orchestra*, which is why classical tragedies like Sophocles's *Oedipus Rex* [Example text — not a set text] relied on amplified masks, a singing Chorus, stark **stichomythia**, and monumental offstage catastrophes rather than subtle eyebrow twitches. Two millennia later, Renaissance thrust stages pushed actors directly into a surrounding daylight crowd—making intimate **soliloquies** and conspiring **asides** feel like private whispers shared across arm's reach. When nineteenth-century gas and electric lighting finally darkened auditoriums behind a picture-frame proscenium arch, **naturalism** (pioneered by playwrights such as Henrik Ibsen in *A Doll's House* [Example text — not a set text]) invented the **fourth wall**, inviting audiences to peer silently into claustrophobic domestic parlours. Inevitably, twentieth-century innovators rebelled against that quiet voyeurism: **expressionists** bent walls and lighting to mirror fractured minds, **Bertolt Brecht** switched house lights back up to jolt spectators into political critique (*Verfremdungseffekt*), and **Harold Pinter** and **Samuel Beckett** stripped domestic rooms down to loaded pauses and existential stillness. Knowing this lineage lets you read any unseen script immediately as living architecture.",
  },
};
