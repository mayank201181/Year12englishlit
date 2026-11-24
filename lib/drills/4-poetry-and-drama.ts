import type { AnswerSpec, Trap } from "../types.ts";
import type { Drill, DrillItem, Rng } from "./types.ts";

interface ConceptCard {
  term: string;
  accept: string[];
  tier1Clues: string[];
  tier2Extracts: string[];
  tier3Contrasts: string[];
  explanation: string;
  hint: string;
  traps?: Trap[];
}

function renderCardDrill(
  rng: Rng,
  tier: 1 | 2 | 3,
  cards: readonly ConceptCard[],
  frames: { t1: readonly string[]; t2: readonly string[]; t3: readonly string[] },
): DrillItem {
  const card = rng.pick(cards);
  const answer: AnswerSpec = { type: "text", accept: card.accept, display: card.term };
  let prompt: string;
  if (tier === 1) {
    const clue = rng.pick(card.tier1Clues);
    const frame = rng.pick(frames.t1);
    prompt = frame.replace("{X}", clue);
  } else if (tier === 2) {
    const ex = rng.pick(card.tier2Extracts);
    const frame = rng.pick(frames.t2);
    prompt = frame.replace("{X}", ex);
  } else {
    const con = rng.pick(card.tier3Contrasts);
    const frame = rng.pick(frames.t3);
    prompt = frame.replace("{X}", con);
  }
  return {
    prompt,
    answer,
    solution: [
      `Target craft term: **${card.term}**.`,
      card.explanation,
    ],
    hint: card.hint,
    traps: card.traps,
  };
}

// ============================================================================
// DRILL 1: Poetic Form, Metre & Structure Terms (level 1)
// ============================================================================
const POETIC_STRUCTURE_CARDS: readonly ConceptCard[] = [
  {
    term: "caesura",
    accept: ["caesura", "cesura", "medial caesura"],
    tier1Clues: [
      "a deliberate grammatical or punctuation pause placed **inside** a poetic line to stage hesitation or division",
      "an internal break within a single verse line marked by a dash, semicolon, full stop, or sharp syntactic halt",
      "the prosodic halt splitting one poetic line into two contrasting halves (e.g. *'We locked the gate; the frost stayed in.'*)",
    ],
    tier2Extracts: [
      "*The lanterns died—and still he watched the quay.*",
      "*We packed his books; the study stayed untouched.*",
      "*Stop now. The harbour bells have ceased to ring.*",
      "*Her letter shook, then fell across the ash.*",
    ],
    tier3Contrasts: [
      "Unlike end-stopping (which halts syntax at the line margin), this pause fractures rhythm **mid-line** to dramatise internal conflict or shock.",
      "Where enjambment propels clauses across a line edge, this device inserts a sharp rhythmic halt **inside** a single line of verse.",
      "In *'He spoke of peace; his knuckles bruised the rail'*, which prosodic break physically divides calm words from tense gesture inside one line?",
    ],
    explanation: "A **caesura** is a deliberate pause within a line of poetry, halting pace to dramatise grief, hesitation, or internal contrast.",
    hint: "Latin root meaning 'a cutting'—it slices inside a single line rather than at the line edge.",
    traps: [
      { spec: { type: "text", accept: ["enjambment"] }, feedback: "Enjambment runs syntax across a line break without pausing; an internal mid-line pause is a caesura." },
    ],
  },
  {
    term: "enjambment",
    accept: ["enjambment", "enjambement", "run-on line"],
    tier1Clues: [
      "carrying a grammatical clause across a line break without terminal punctuation so sense spills onto the next line",
      "a run-on poetic line where syntax overflows past the line end to create urgency or momentary double meaning",
      "deliberate omission of punctuation at a verse line ending so the phrase completes itself on the line below",
    ],
    tier2Extracts: [
      "*At dusk the guards inspect our papers, free* / *of mercy as the frosted wire behind them.*",
      "*She poured cold water down the rusted sink* / *until the echoes drowned the hallway clock.*",
      "*He kept one folded map beneath the floor* / *where damp salt blurred the ink to nameless grey.*",
      "*The tide crept past the stone embankment wall* / *and swallowed every lantern on the quay.*",
    ],
    tier3Contrasts: [
      "Unlike end-stopping (which seals a clause at the margin), this lineation choice suspends a word at the line cliff so the next line can twist its meaning.",
      "In *'They promised every border crossing free / of armed patrols'*, which lineation technique allows 'free' to hover ambiguously across the break?",
      "Which structural feature accelerates forward momentum across line—or even stanza—boundaries without punctuation?",
    ],
    explanation: "**Enjambment** runs syntax across a line or stanza break, generating urgency, overflow, or productive ambiguity at the line edge.",
    hint: "From French for 'striding over'—syntax strides straight past the line break.",
    traps: [
      { spec: { type: "text", accept: ["caesura"] }, feedback: "Caesura pauses inside a line; syntax spilling across the line break is enjambment." },
    ],
  },
  {
    term: "volta",
    accept: ["volta", "the volta"],
    tier1Clues: [
      "the structural and tonal pivot in a sonnet (classically Line 9 in Petrarchan form or Line 13 in Shakespearean form)",
      "the Italian term for the crucial 'turn' where a poem's argument, mood, or perspective reframes earlier lines",
      "the decisive rhetorical shift—often cued by *Yet, But,* or *Still*—reversing or complicating a sonnet's opening claim",
    ],
    tier2Extracts: [
      "Lines 1–8 lament a ruined orchard; Line 9 opens: *'Yet roots still grip the frost beneath the stone...'*",
      "Three quatrains praise a marble statue; Line 13 pivots: *'But stone forgets the warmth it tries to keep.'*",
      "An octave depicts restless insomnia; Line 9 turns sharply: *'Still—dawn arrives without asking my leave.'*",
      "Lines 1–8 catalogue bitter grievances; Line 9 shifts tone: *'However, grief outgrew the ledger's ink.'*",
    ],
    tier3Contrasts: [
      "Which structural turn transforms an octave's claustrophobic dilemma into the sestet's reframed resolution?",
      "In an IB Paper 1 sonnet thesis, locating this exact tonal pivot prevents flat, static commentary across all 14 lines.",
      "What Italian prosodic term names the architectural hinge dividing a sonnet's setup from its counter-argument?",
    ],
    explanation: "The **volta** ('turn') is the structural pivot in perspective, argument, or tone—central to sonnet architecture and lyric progression.",
    hint: "Italian word meaning 'turn' (starts with 'v').",
  },
  {
    term: "iambic",
    accept: ["iambic", "iamb", "iambic foot"],
    tier1Clues: [
      "the rising two-syllable metrical foot patterned unstressed–stressed (`˘ /`), as in *'to-DAY'* or *'a-LONE'*",
      "the heartbeat-like rising metre (`˘ /`) forming the traditional baseline of English pentameter",
      "the metrical pattern moving from a light unstressed syllable onto a strong stressed beat (`da-DUM`)",
    ],
    tier2Extracts: [
      "*The HAR-bour LIGHTS are FA-ding IN the MIST.* (`˘ / | ˘ / | ˘ / | ˘ / | ˘ /`)",
      "*She LOCKED the BRASS key IN the CE-dar CHEST.* (`˘ / | ˘ / | ˘ / | ˘ / | ˘ /`)",
      "*A WIN-ter RAIN falls QUI-et ON the ROOF.* (`˘ / | ˘ / | ˘ / | ˘ / | ˘ /`)",
      "*He WALKED a-LONG the FRO-zen RI-ver BANK.* (`˘ / | ˘ / | ˘ / | ˘ / | ˘ /`)",
    ],
    tier3Contrasts: [
      "Unlike falling trochaic rhythm (`/ ˘`), which rising disyllabic metre mimics natural English conversational cadence?",
      "When a poet opens a line with a jolting spondee before restoring steady `˘ /` beats across Feet 2–5, what is the baseline foot type?",
      "Which rising foot (`˘ /`) establishes rhythmic order so that later metrical disruptions feel emotionally jarring?",
    ],
    explanation: "**Iambic** metre (`˘ /`) uses rising unstressed-stressed beats, creating a steady speech-like pulse.",
    hint: "Rising beat: `da-DUM` (`˘ /`).",
    traps: [
      { spec: { type: "text", accept: ["trochaic", "trochee"] }, feedback: "Trochaic falls (`/ ˘`); rising `˘ /` is iambic." },
      { spec: { type: "text", accept: ["spondaic", "spondee"] }, feedback: "Spondaic uses two consecutive stresses (`/ /`); `˘ /` is iambic." },
    ],
  },
  {
    term: "trochaic",
    accept: ["trochaic", "trochee", "trochaic inversion"],
    tier1Clues: [
      "the falling two-syllable metrical foot patterned stressed–unstressed (`/ ˘`), as in *'BREAK-ing'* or *'WIN-ter'*",
      "the falling metre (`/ ˘`) that reverses an opening iamb to jolt the ear with urgency or command",
      "the stressed-then-unstressed foot (`DUM-da`) frequently placed at the start of an iambic line as an inversion",
    ],
    tier2Extracts: [
      "*SHAT-tered* by storms, the lighthouse holds its ground. (opening foot: `/ ˘`)",
      "*SI-lence* descends across the emptied pier. (opening foot: `/ ˘`)",
      "*FALL-ing* through dusk, the lantern smoke unwinds. (opening foot: `/ ˘`)",
      "*BRO-ken* beneath the frost, the orchard sleeps. (opening foot: `/ ˘`)",
    ],
    tier3Contrasts: [
      "Starting an iambic pentameter line with *'SHAT-tered'* (`/ ˘`) rather than `˘ /` introduces what kind of metrical foot/inversion?",
      "Unlike rising iambic cadence (`˘ /`), which falling disyllabic foot slams down immediately on the first syllable?",
      "Which falling metrical pattern (`/ ˘`) turns a calm baseline line into an abrupt jolt or imperative command?",
    ],
    explanation: "**Trochaic** metre (`/ ˘`) places heavy stress first, often disrupting an iambic line via initial trochaic inversion.",
    hint: "Falling beat: `DUM-da` (`/ ˘`).",
    traps: [
      { spec: { type: "text", accept: ["iambic", "iamb"] }, feedback: "Iambic rises (`˘ /`); falling `/ ˘` is trochaic." },
      { spec: { type: "text", accept: ["spondaic", "spondee"] }, feedback: "Spondaic stresses both syllables (`/ /`); stressed-then-unstressed (`/ ˘`) is trochaic." },
    ],
  },
  {
    term: "spondaic",
    accept: ["spondaic", "spondee", "spondaic foot"],
    tier1Clues: [
      "the heavy metrical foot made of two consecutive **stressed** syllables (`/ /`), such as *'COLD STONE'*",
      "a double-stressed foot (`DUM-DUM`) that abruptly slows poetic pace for weight or resistance",
      "two adjacent heavy beats (`/ /`) inserted into an iambic line to create emphatic arrest",
    ],
    tier2Extracts: [
      "*STOP NOW*—the ferries will not cross tonight. (opening foot: `/ /`)",
      "*COLD IRON* locks the harbour gate till dawn. (opening foot: `/ /`)",
      "*STAND FAST*, you clerks who bargain with the tide. (opening foot: `/ /`)",
      "*DARK SALT* clings stubborn to the rusted chain. (opening foot: `/ /`)",
    ],
    tier3Contrasts: [
      "Whereas a trochee alternates `/ ˘`, which double-stressed foot (`/ /`) slams two equal heavy beats together to brake momentum?",
      "Why does *'BREAK, COLD'* (`/ /`) feel far heavier than *'a-LONG'* (`˘ /`)? Name the double-stress metrical foot.",
      "Which metrical substitution (`DUM-DUM`) forces the reader to linger physically on a loaded two-word command?",
    ],
    explanation: "A **spondee** (**spondaic** foot, `/ /`) places two heavy stresses side by side to slow rhythm and anchor emphasis.",
    hint: "Double stress: `DUM-DUM` (`/ /`), starts with 'sp-'.",
    traps: [
      { spec: { type: "text", accept: ["trochaic", "trochee"] }, feedback: "Trochaic is `/ ˘` (one stressed, one unstressed); two stresses (`/ /`) is spondaic." },
      { spec: { type: "text", accept: ["iambic", "iamb"] }, feedback: "Iambic is `˘ /`; two heavy stresses (`/ /`) is spondaic." },
    ],
  },
  {
    term: "villanelle",
    accept: ["villanelle", "a villanelle"],
    tier1Clues: [
      "a 19-line fixed poetic form of five `ABA` tercets and one `ABAA` quatrain built on two alternating refrains",
      "the tightly woven nineteen-line form using only two rhyme sounds and repeating Lines 1 and 3 four times each",
      "a fixed lyrical form whose two refrains alternate across five tercets before uniting in the closing couplet",
    ],
    tier2Extracts: [
      "A 19-line poem whose refrains *'Keep the porch light burning through the fog'* (L1) and *'No sea returns the names it chose to keep'* (L3) recur in Lines 6, 9, 12, 15, 18, and 19.",
      "Five three-line `ABA` stanzas plus a closing four-line `ABAA` stanza circling two haunting repeated lines about exile.",
      "A fixed form built strictly on two end-rhymes (`-ight` / `-ay`) where Lines 1 and 3 lock together at Lines 18–19.",
      "A 19-line obsessive lament in which two repeated imperatives return in slightly altered grammatical contexts across six stanzas.",
    ],
    tier3Contrasts: [
      "Unlike a 14-line sonnet's single volta turn, which 19-line fixed form enacts circular obsession through two recurring refrains?",
      "Which fixed form uses five tercets and a final quatrain so its opening and third lines collide in the closing couplet?",
      "Name the 19-line form ideal for enacting compulsive grief or stubborn defiance via only two rhyme sounds.",
    ],
    explanation: "A **villanelle** has 19 lines (5 `ABA` tercets + 1 `ABAA` quatrain) driven by two alternating refrains.",
    hint: "19 lines, two refrains, French/Italian origin starting with 'v'.",
    traps: [
      { spec: { type: "text", accept: ["sonnet", "petrarchan sonnet", "shakespearean sonnet"] }, feedback: "A sonnet has 14 lines; the 19-line dual-refrain form is a villanelle." },
    ],
  },
  {
    term: "Petrarchan sonnet",
    accept: ["Petrarchan sonnet", "petrarchan", "Italian sonnet", "italian"],
    tier1Clues: [
      "the 14-line sonnet dividing into an `ABBAABBA` octave, a Line-9 volta, and a `CDECDE` / `CDCDCD` sestet",
      "the Italian sonnet architecture pairing an eight-line setup with a six-line counter-perspective",
      "a sonnet structured strictly as an 8-line enclosed-rhyme octave followed by a 6-line sestet",
    ],
    tier2Extracts: [
      "A 14-line poem rhyming `ABBA ABBA CDE CDE` whose argument pivots decisively on Line 9.",
      "An unseen sonnet opening with two enclosed `ABBA` quatrains before shifting into an alternating `CDCDCD` sestet at Line 9.",
      "Fourteen iambic pentameter lines partitioned into an 8-line lament and a 6-line resolution without a closing `GG` couplet.",
      "A sonnet whose rhyme scheme `ABBAABBACDCDCD` frames an indoor-to-outdoor turn right at Line 9.",
    ],
    tier3Contrasts: [
      "Unlike the Shakespearean `ABAB CDCD EFEF GG` blueprint, which sonnet tradition relies on an octave–sestet split at Line 9?",
      "Which sonnet form uses enclosed `ABBA` octave rhymes rather than three alternating quatrains and a closing `GG` couplet?",
      "A 14-line poem turns sharply at Line 9 from `ABBAABBA` into `CDECDE`. Name this specific sonnet tradition.",
    ],
    explanation: "A **Petrarchan (Italian) sonnet** divides into an 8-line `ABBAABBA` octave, a Line-9 volta, and a 6-line sestet.",
    hint: "Named after the Italian poet Petrarch (octave + sestet).",
    traps: [
      { spec: { type: "text", accept: ["Shakespearean sonnet", "shakespearean", "English sonnet"] }, feedback: "Shakespearean sonnets use ABAB CDCD EFEF GG; ABBAABBA + sestet is Petrarchan." },
    ],
  },
  {
    term: "Shakespearean sonnet",
    accept: ["Shakespearean sonnet", "shakespearean", "English sonnet", "Elizabethan sonnet"],
    tier1Clues: [
      "the 14-line sonnet built from three alternating quatrains (`ABAB CDCD EFEF`) and a closing rhyming couplet (`GG`)",
      "the English sonnet blueprint progressing through three four-line units toward an epigrammatic closing couplet",
      "a 14-line sonnet whose `GG` rhyming couplet seals, summarises, or ironically twists the preceding twelve lines",
    ],
    tier2Extracts: [
      "A 14-line poem rhyming `ABAB CDCD EFEF GG` ending in a punchy two-line epigrammatic seal.",
      "Three alternating quatrains developing a clockwork conceit, capped by Lines 13–14 rhyming *steals / wheels*.",
      "Fourteen iambic pentameter lines dividing 4 + 4 + 4 + 2 with a sharp ironic twist in the final rhyming couplet.",
      "An unseen sonnet using seven distinct rhyme sounds (`A` through `G`) culminating in a bold closing couplet.",
    ],
    tier3Contrasts: [
      "Unlike the Petrarchan octave–sestet model, which sonnet form builds three progressive quatrains toward a closing `GG` couplet?",
      "Which 14-line sonnet tradition typically delays its epigrammatic punchline or ironic turn until Line 13?",
      "A poem uses `ABAB CDCD EFEF GG` across 14 iambic pentameter lines. Name this exact sonnet form.",
    ],
    explanation: "A **Shakespearean (English) sonnet** comprises three alternating quatrains (`ABAB CDCD EFEF`) and a closing `GG` couplet.",
    hint: "Also called the English sonnet—three quatrains plus a `GG` couplet.",
    traps: [
      { spec: { type: "text", accept: ["Petrarchan sonnet", "petrarchan", "Italian sonnet"] }, feedback: "Petrarchan sonnets use an ABBAABBA octave + sestet; ABAB CDCD EFEF GG is Shakespearean." },
    ],
  },
  {
    term: "elegy",
    accept: ["elegy", "an elegy", "anti-elegy"],
    tier1Clues: [
      "a reflective lyric poem of mourning that traditionally moves through lament, praise, and consolation",
      "the poetic genre dedicated to grief and remembrance for the dead or a vanished era",
      "a meditative poem of bereavement—often modernised into an 'anti-elegy' when refusing tidy consolation",
    ],
    tier2Extracts: [
      "A sombre 24-line lyric grieving a drowned lighthouse keeper, moving from raw coastal lament to quiet remembrance.",
      "A meditative poem mourning a demolished ancestral village while consciously withholding easy spiritual consolation.",
      "Three slow iambic stanzas lamenting a lost mentor, praising their patient craft before wrestling with silence.",
      "A reflective lyric of bereavement whose quiet acoustic cadence honours a departed parent without neat closure.",
    ],
    tier3Contrasts: [
      "Unlike a dramatic monologue's ironic self-exposure, which lyric form explicitly negotiates mourning, memory, and consolation?",
      "When a modern poem of grief deliberately refuses the classical third stage of comfort, it subverts which poetic genre?",
      "Name the meditative poetic form whose classical three-stage trajectory runs from lament through praise toward consolation.",
    ],
    explanation: "An **elegy** is a reflective poem of mourning; classical elegies seek consolation while modern anti-elegies often resist easy closure.",
    hint: "Starts with 'e'—adjective form is *elegiac*.",
  },
  {
    term: "free verse",
    accept: ["free verse", "vers libre", "open form"],
    tier1Clues: [
      "open-form poetry without regular metre or fixed rhyme scheme, structured instead by cadence, lineation, and white space",
      "poetry liberated from preset metrical grids that relies on visual line breaks, stanza proportion, and organic rhythm",
      "unrhymed, non-metrical poetry where spatial layout and syntactic pace serve as active architectural choices",
    ],
    tier2Extracts: [
      "A 12-line poem with varying line lengths (from 11 words down to a single isolated word *'river.'*), no rhyme scheme, and expressive white space.",
      "Unrhymed stanzas of 5, 2, and 7 lines abandoning regular iambs to trace fractured immigrant memory through abrupt visual indentation.",
      "A contemporary lyric without preset rhyme or metre whose stepped line breaks visually mirror rainwater sliding down glass.",
      "A poem discarding regular metrical feet in favour of speech-driven cadence, sudden one-word lines, and stark page pauses.",
    ],
    tier3Contrasts: [
      "Which open poetic form is frequently mislabelled 'formless' even though it actively harnesses visual lineation, white space, and organic cadence?",
      "Unlike blank verse (which keeps unrhymed iambic pentameter), which form discards BOTH fixed rhyme AND regular metrical feet?",
      "Name the open form that enables poets to mirror fractured consciousness via asymmetrical line lengths and page white space.",
    ],
    explanation: "**Free verse** has no fixed metre or rhyme scheme, using visual lineation, white space, and organic cadence as deliberate craft.",
    hint: "Two words—also known by the French phrase *vers libre*.",
    traps: [
      { spec: { type: "text", accept: ["blank verse"] }, feedback: "Blank verse keeps regular unrhymed iambic pentameter; discarding BOTH rhyme and regular metre is free verse." },
    ],
  },
];

// ============================================================================
// DRILL 2: Poetic Imagery, Soundscapes & Persona (level 1)
// ============================================================================
const IMAGERY_SOUND_CARDS: readonly ConceptCard[] = [
  {
    term: "metonymy",
    accept: ["metonymy"],
    tier1Clues: [
      "substituting an **associated attribute or emblem** (like *'the Crown'* for monarchy) for the concept itself",
      "referring to an institution by an adjacent emblem or venue (e.g. *'the bench'* for judges or *'the press'* for journalists)",
      "a figurative replacement based on conceptual association rather than physical part-to-whole inclusion",
    ],
    tier2Extracts: [
      "*'The Crown raised harbour duties overnight.'* (emblem replacing royal government)",
      "*'The palace ignored every petition from the dock.'* (residence replacing rulers)",
      "*'Downing Street issued no reply before dawn.'* (street address replacing government)",
      "*'The gavel silenced three generations of testimony.'* (associated tool replacing judicial authority)",
    ],
    tier3Contrasts: [
      "Unlike synecdoche (which picks a physical bodily or material part), which device substitutes an **external associated emblem** like *'the throne'*?",
      "In *'The uniform demanded our papers at the gate'*, replacing the officer with an associated garment exemplifies which figurative choice?",
      "Name the device used when *'the stage'* stands for the entire theatrical profession rather than being a physical part of an actor.",
    ],
    explanation: "**Metonymy** replaces a concept or institution with an associated emblem, venue, or attribute (e.g. *the Crown*, *the bench*).",
    hint: "Associated emblem (not physical part): starts with 'met-'.",
    traps: [
      { spec: { type: "text", accept: ["synecdoche"] }, feedback: "Synecdoche uses a physical part for the whole (like 'hands' for workers); an associated emblem is metonymy." },
    ],
  },
  {
    term: "synecdoche",
    accept: ["synecdoche"],
    tier1Clues: [
      "substituting a **physical part** of something to represent the **whole** (e.g. *'weary hands'* for workers)",
      "a figurative device using an anatomical or structural component (like *'forty sails'* for forty ships) to stand for the whole entity",
      "reducing whole people to a single bodily part (e.g. *'bent backs'*, *'hungry mouths'*) to highlight labour or dehumanisation",
    ],
    tier2Extracts: [
      "*'Twenty pairs of gloved hands fed the furnace glare.'* (hands representing whole factory workers)",
      "*'Sixteen white sails vanished beyond the headland.'* (sails representing whole ships)",
      "*'Rows of stiff shoulders waited inside the grey clinic.'* (shoulders representing whole anxious patients)",
      "*'Forty hungry mouths queued beside the harbour warehouse.'* (mouths representing whole people)",
    ],
    tier3Contrasts: [
      "Unlike metonymy (which uses an external associated symbol like *'the Crown'*), which device uses a **physical component** to represent the whole?",
      "Why does referring to factory workers as *'tired hands'* dehumanise them? Name this exact part-for-whole figurative mechanism.",
      "In *'Grey boots marched steadily past the shutters'*, using a physical part of the marching figures to stand for whole soldiers is what device?",
    ],
    explanation: "**Synecdoche** uses a physical part for the whole (or whole for part), frequently dramatising fragmentation or anonymisation.",
    hint: "Part-for-whole substitution (Greek root, spelt *syn-ec-do-che*).",
    traps: [
      { spec: { type: "text", accept: ["metonymy"] }, feedback: "Metonymy uses an associated external emblem; a physical part representing the whole is synecdoche." },
    ],
  },
  {
    term: "synesthesia",
    accept: ["synesthesia", "synaesthesia"],
    tier1Clues: [
      "deliberately blending two distinct sensory modalities—such as taste and sight (*'bitter gold'*)",
      "crossing sensory channels inside one image (e.g. describing a sound with texture or a colour with flavour)",
      "fusing visual, auditory, olfactory, tactile, or gustatory senses into a single heightened perception",
    ],
    tier2Extracts: [
      "*'At three a.m. the furnace coughs its sour gold.'* (taste + sight)",
      "*'Neon hums a bruised violet across the wet tarmac.'* (sound + colour)",
      "*'Her voice carried the cold metallic smell of snow.'* (hearing + touch + smell)",
      "*'A velvet hum drifted out of the darkened cello case.'* (touch + sound)",
    ],
    tier3Contrasts: [
      "What single figurative term explains why *'sharp lemon chime'* activates taste, touch, and hearing simultaneously?",
      "Unlike standard visual imagery limited to one sense, which device fuses distinct physical senses to evoke sensory overwhelm?",
      "Name the cross-sensory technique at work in *'the bitter silver of dawn'*.",
    ],
    explanation: "**Synesthesia** fuses two or more distinct senses (*sour gold*, *velvet hum*) to intensify atmosphere or disorientation.",
    hint: "Greek for 'together-sensation' (starts with 'syn-').",
  },
  {
    term: "conceit",
    accept: ["conceit", "extended metaphor", "metaphysical conceit"],
    tier1Clues: [
      "an ingenious, sustained governing metaphor elaborated systematically across an entire stanza or whole poem",
      "an extended central comparison—such as mapping two lovers onto twin compasses—developed across multiple lines",
      "a controlling figurative analogy stretched across several lines to unpack an abstract psychological or emotional state",
    ],
    tier2Extracts: [
      "A whole sonnet mapping grief onto cartography—*fading coastlines, indigo meridians, rusted compass rose, charting currents*.",
      "Four stanzas comparing an estranged marriage to twin sealed clocks whose *pendulum hearts* and *gear-teeth* never touch.",
      "A 14-line poem comparing indentured youth systematically to a pocket watch's *ratchet, escapement, filings,* and *borrowed wheels*.",
      "An entire lyric comparing diplomatic secrecy to glassblowing—*furnace, molten glare, fragile stem,* and *hairline fracture*.",
    ],
    tier3Contrasts: [
      "Unlike a fleeting one-word metaphor, what term names an elaborate governing analogy sustained ingeniously across a whole poem?",
      "When every stanza extends one surprising central comparison (e.g. bureaucracy as arctic glaciation), what structural figurative term applies?",
      "Name the sustained figurative blueprint famously deployed by Metaphysical poets and still central to extended lyric poems.",
    ],
    explanation: "An **extended metaphor / conceit** sustains and develops one governing comparison systematically across lines or a whole poem.",
    hint: "Also known as an *extended metaphor* (7-letter term starting with 'c').",
  },
  {
    term: "semantic field",
    accept: ["semantic field", "lexical field"],
    tier1Clues: [
      "a deliberate cluster of words drawn from one shared conceptual domain (e.g. finance, liturgy, or surgery)",
      "a recurring lexical network uniting words by shared topic so competing domains expose thematic tension",
      "a cohesive family of domain-specific words woven across a poem (such as *ledger, debt, defaults, foreclosed*)",
    ],
    tier2Extracts: [
      "*ledger, tallies, debt, defaults, foreclosed, cost* woven throughout a poem about autumn frost.",
      "*scalpel, suture, sterile, pulse, anaesthetic* clustered inside a lyric about political censorship.",
      "*meridian, compass, sextant, harbour, shoal, tide* threaded across an elegy for a lost spouse.",
      "*psalm, altar, candlewick, vespers, absolution* recurring inside a poem describing a quiet workshop.",
    ],
    tier3Contrasts: [
      "Tracking how words from *accounting* clash against words from *botany* inside one poem analyses what two-word lexical concept?",
      "Rather than quoting isolated adjectives, grouping *'verdict, witness, bailiff, sentence'* together identifies a unified what?",
      "Name the two-word analytical term for a recurring conceptual network of related vocabulary across a text.",
    ],
    explanation: "A **semantic field** (or *lexical field*) groups conceptually linked vocabulary, allowing readers to spot ideological clashes.",
    hint: "Two words: '_____ field' (rooted in Greek *semantikos*, meaning 'significant/meaning').",
  },
  {
    term: "sibilance",
    accept: ["sibilance", "sibilant"],
    tier1Clues: [
      "the acoustic repetition of hissing or hushed `/s/`, `/z/`, or `/ʃ/` consonant sounds across nearby words",
      "repeated `/s/` and `/ʃ/` sounds whose effect shifts from soothing lullaby to venomous sharpness depending on diction",
      "a specific subset of consonance/alliteration concentrated on hissing `/s, z, sh/` airflow past the teeth",
    ],
    tier2Extracts: [
      "*'Soft snow settles silently across the sleeping sill.'* (hushed `/s/` texture)",
      "*'Shells slit the silt where slipping currents hiss.'* (sharp maritime `/s, ʃ/` texture)",
      "*'Slick steel slices swiftly through the scorched silk.'* (incisive `/s/` friction)",
      "*'Silver mist drifts softly past the shuttered glass.'* (quiet nocturnal `/s, ʃ/` hush)",
    ],
    tier3Contrasts: [
      "Which acoustic device is notoriously misanalysed as 'always sinister', even though gentle diction turns its `/s/` hiss into calm hush?",
      "Unlike explosive `/p, b, t, d, k, g/` stops, which sound pattern streams hissing breath continuously past the teeth?",
      "Name the exact phonetic device unifying *'silence, sea-salt, shadow, whisper'*.",
    ],
    explanation: "**Sibilance** repeats `/s, z, ʃ, ʒ/` sounds—producing calm hush or biting sharpness depending strictly on surrounding diction.",
    hint: "Sounds like the hiss of an 's' (starts with 'sib-').",
    traps: [
      { spec: { type: "text", accept: ["assonance"] }, feedback: "Assonance repeats vowel sounds; repeated /s, ʃ/ sounds are sibilance." },
      { spec: { type: "text", accept: ["plosives", "plosive"] }, feedback: "Plosives are explosive stops (/p, b, t, d, k, g/); /s, ʃ/ sounds are sibilance." },
    ],
  },
  {
    term: "plosives",
    accept: ["plosives", "plosive", "plosive consonants"],
    tier1Clues: [
      "consonant sounds (`/p, b, t, d, k, g/`) produced by completely stopping and explosively releasing airflow",
      "percussive stop-consonants like `/b, k, t, d, p, g/` used to evoke mechanical clatter, shock, or blunt anger",
      "hard explosive consonant bursts contrasting sharply with smooth liquids or gentle sibilance",
    ],
    tier2Extracts: [
      "*'Black bolts cracked across the buckled deck.'* (heavy `/b, k, t, d/` impacts)",
      "*'Clock-hands click and crack the dark into neat shifts.'* (percussive `/k, t, d/`)",
      "*'Iron pilings clack against the pier and rusted chains knock blunt.'* (hard `/p, k, t, b/`)",
      "*'Boots beat briskly down the brick dockyard steps.'* (sharp `/b, t, k, p/`)",
    ],
    tier3Contrasts: [
      "Which phonetic group (`/p, b, t, d, k, g/`) physically blocks breath before bursting open to mimic impact or defiance?",
      "When a soundscape pivots abruptly from soft `/l, m, s/` serenity to jagged `/k, b, t, d/` strikes, which consonant category drives the shock?",
      "Name the explosive consonant category behind the percussive violence of *'bitter brick broke crisp'*.",
    ],
    explanation: "**Plosives** (`/p, b, t, d, k, g/`) halt and burst airflow, reinforcing percussive force, abruptness, or mechanical tension.",
    hint: "Think of the word 'ex**plosive**'—stops airflow then bursts.",
    traps: [
      { spec: { type: "text", accept: ["sibilance"] }, feedback: "Sibilance streams continuous /s, ʃ/ hiss; explosive /p, b, t, d, k, g/ stops are plosives." },
      { spec: { type: "text", accept: ["assonance"] }, feedback: "Assonance repeats vowels; explosive /p, b, t, d, k, g/ stops are plosives." },
    ],
  },
  {
    term: "assonance",
    accept: ["assonance"],
    tier1Clues: [
      "the repetition of **internal vowel sounds** across nearby words regardless of surrounding consonants",
      "echoing vowel music (such as long `/əʊ/` in *cold / stone / lonely*) that slows cadence or deepens emotional resonance",
      "acoustic harmony built on matching internal vowels rather than initial or final consonants",
    ],
    tier2Extracts: [
      "*'Low moons roll slow over cold stone quays.'* (repeated long `/əʊ/` vowel)",
      "*'Grey rain stains the faded railway panes.'* (repeated `/eɪ/` vowel)",
      "*'Deep sea-bells keep the weeping fleet asleep.'* (repeated long `/iː/` vowel)",
      "*'Thin wind clips the crisp silver rim of winter.'* (repeated short `/ɪ/` vowel)",
    ],
    tier3Contrasts: [
      "Unlike consonance (which echoes consonants), which internal acoustic device slows *'cold stone groans alone'* through long vowels?",
      "In *'pale sails fade past the late bay'*, the consonants differ yet the `/eɪ/` vowel binds the line—name this device.",
      "Which acoustic choice governs whether a line stretches languidly with open vowels or tightens with clipped short vowels?",
    ],
    explanation: "**Assonance** repeats internal vowel sounds across nearby words, shaping pace, mood, and sonic cohesion.",
    hint: "Vowel echo (starts with the vowel 'a').",
    traps: [
      { spec: { type: "text", accept: ["consonance"] }, feedback: "Consonance repeats consonant sounds; internal vowel repetition is assonance." },
      { spec: { type: "text", accept: ["sibilance"] }, feedback: "Sibilance repeats /s, ʃ/ consonants; repeated internal vowels are assonance." },
    ],
  },
  {
    term: "consonance",
    accept: ["consonance"],
    tier1Clues: [
      "the repetition of identical **consonant sounds** internally or at the ends of nearby words (e.g. *dark / clock / break*)",
      "tight consonant echoing anywhere across words (not restricted to initial letters) even when vowels change",
      "the acoustic pattern binding *'blank / think / oak'* through shared internal/final consonant articulation",
    ],
    tier2Extracts: [
      "*'The bleak clock struck a cracked brick wall.'* (repeated final/internal `/k/`)",
      "*'First frost crisped the rusted post at dusk.'* (repeated `/st/` cluster)",
      "*'Hard boards groaned under iron girders.'* (repeated `/r, d/` consonants)",
      "*'Thick smoke choked the blackened attic track.'* (repeated final `/k/`)",
    ],
    tier3Contrasts: [
      "Unlike alliteration (limited to word-initial sounds) or assonance (vowels), which device repeats consonants inside or at the ends of words?",
      "In *'wind bent the rusted tent'*, shared final `/nt/` consonants unify the clause despite shifting vowels—name this technique.",
      "What broader acoustic term names consonant repetition across internal and closing syllables of nearby words?",
    ],
    explanation: "**Consonance** repeats consonant sounds across internal or final positions of nearby words, creating taut acoustic cohesion.",
    hint: "Contains the word 'consonant' inside its name.",
    traps: [
      { spec: { type: "text", accept: ["assonance"] }, feedback: "Assonance repeats vowels; repeating internal/final consonants is consonance." },
      { spec: { type: "text", accept: ["alliteration"] }, feedback: "Alliteration focuses on initial sounds; consonant echoes across internal/final positions are consonance." },
    ],
  },
  {
    term: "half-rhyme",
    accept: ["half-rhyme", "half rhyme", "slant rhyme", "pararhyme", "near rhyme"],
    tier1Clues: [
      "imperfect rhyme pairing matching consonants with shifted vowels (e.g. *blade / blood*) to create tonal unease",
      "near-rhyme or pararhyme that deliberately frustrates the ear's expectation of full chime, withholding neat closure",
      "dissonant line-end echoing such as *warm / worm* or *stone / stain* used for unsettled grief or irony",
    ],
    tier2Extracts: [
      "End-word pairing across a war quatrain: *mud / wood* and *blade / blood*.",
      "A closing couplet pairing *pine / time* so artistic confidence retains a fragile edge of dissonance.",
      "Elegiac stanza endings *grief / grave* and *hall / hill*, denying soothing harmonic resolution.",
      "Satirical lines closing on *grace / grass* and *crown / crane* to undercut false certainty.",
    ],
    tier3Contrasts: [
      "Why might a poet pair *'stone'* with *'stain'* instead of *'alone'*? Name this intentionally dissonant rhyme choice.",
      "Which prosodic device—also called pararhyme or slant rhyme—turns the ear's expectation of musical chime into lingering discomfort?",
      "When consonants match at line-ends while vowels tilt out of tune to deny sentimental comfort, what term applies?",
    ],
    explanation: "**Half-rhyme** (*slant rhyme* / *pararhyme*) matches consonants while diverging in vowels, unsettling the ear to resist tidy closure.",
    hint: "Imperfect rhyme: '_____-rhyme' (also accepted: *slant rhyme* or *pararhyme*).",
  },
  {
    term: "lyrical persona",
    accept: ["lyrical persona", "persona", "speaker", "the speaker"],
    tier1Clues: [
      "the crafted fictional speaking voice inside a poem—which IB essays must NEVER conflate with the biographical poet",
      "the constructed voice or character uttering a poem, enabling ironic distance between authorial craft and spoken attitude",
      "the mask or speaking consciousness inside a lyric or dramatic monologue distinct from the historical writer",
    ],
    tier2Extracts: [
      "An arrogant museum curator narrating in first-person *'I'* whose polite boasts unwittingly expose colonial erasure.",
      "A collective working-class *'we'* speaking from inside a night-shift glassworks while the poet critiques industrial exploitation.",
      "A naive child voice describing an evacuation train as a holiday game while readers recognise wartime terror.",
      "A self-deceiving grieving widower insisting *'I never missed the noise'* while counting empty chairs.",
    ],
    tier3Contrasts: [
      "Referring to the first-person voice of a poem by this term prevents committing the biographical fallacy.",
      "In *'The poet equips the ____ with clinical diction to expose cold denial'*, what term names the crafted voice inside the text?",
      "What critical concept separates the writer who designs poetic metre from the potentially unreliable 'I' speaking the lines?",
    ],
    explanation: "The **lyrical persona** (or **speaker**) is the constructed voice inside the poem, strictly separate from the biographical poet.",
    hint: "Latin word for an actor's theatrical mask (also accepted: *speaker*).",
  },
];

// ============================================================================
// DRILL 3: Dramatic Conventions & Staging (level 2)
// ============================================================================
const DRAMATIC_STAGING_CARDS: readonly ConceptCard[] = [
  {
    term: "proxemics",
    accept: ["proxemics", "proxemic distance"],
    tier1Clues: [
      "the deliberate theatrical use of physical distance and spatial separation between actors onstage to show power or alienation",
      "how close or far apart characters stand, move, or place furniture barriers between themselves in performance space",
      "the spatial language of theatre communicating intimacy, menace, or estrangement through actor separation",
    ],
    tier2Extracts: [
      "*[CLARA stops three paces inside the doorway while ARTHUR remains motionless upstage beside the fireplace, back turned.]*",
      "*[He steps abruptly into her personal space—barely inches from her shoulder—forcing her backward against the table.]*",
      "*[Throughout the toast, the two siblings stand at opposite downstage corners separated by the entire banquet table.]*",
      "*[Slowly she crosses the wide bare floor until she kneels right beside his chair.]*",
    ],
    tier3Contrasts: [
      "Before a single word is spoken, placing two spouses at opposite diagonal stage corners visually dramatises rift via what term?",
      "Unlike lighting or verbal diction, which staging dimension turns inches and metres on the stage floor into power dynamics?",
      "Name the theatrical concept analysing how physical distance and spatial orientation onstage express psychological closeness or threat.",
    ],
    explanation: "**Proxemics** governs physical distance and spatial positioning between actors onstage to externalise power, intimacy, or estrangement.",
    hint: "Related to the word 'proximity' (ends in '-ics').",
  },
  {
    term: "fourth wall",
    accept: ["fourth wall", "the fourth wall", "4th wall"],
    tier1Clues: [
      "the imaginary transparent barrier separating the fictional domestic room onstage from the watching auditorium",
      "the naturalistic convention pretending spectators are invisible eavesdroppers peering through an absent room wall",
      "the invisible plane across the proscenium front preserved by realism and shattered by Brechtian direct address",
    ],
    tier2Extracts: [
      "*[All actors treat the downstage edge as a solid window overlooking a street, never acknowledging the audience.]*",
      "*[MARA halts mid-sentence, turns straight to Row 2, and asks: 'Would any of you have signed that lease?']*",
      "*[The domestic kitchen displays three realistic walls while spectators peer silently through the open front frame.]*",
      "*[Stepping onto the apron, the chorus leader points at the audience and flips a printed placard.]*",
    ],
    tier3Contrasts: [
      "What invisible architectural boundary does naturalistic drama carefully preserve and Brechtian Epic Theatre deliberately shatter?",
      "When an actor looks directly into the auditorium to interrogate spectators, which theatrical convention has been broken?",
      "Name the two-word theatrical barrier separating fictional stage reality from the darkened seating rows.",
    ],
    explanation: "The **fourth wall** is the imaginary transparent wall facing the audience; maintaining it builds immersion while breaking it triggers critical distance.",
    hint: "Three physical set walls plus one imaginary wall = the _____ ____.",
  },
  {
    term: "Verfremdungseffekt",
    accept: ["Verfremdungseffekt", "verfremdungseffekt", "alienation effect", "estrangement effect", "v-effect"],
    tier1Clues: [
      "Bertolt Brecht's Epic Theatre alienation/estrangement technique disrupting emotional immersion to prompt critical political thought",
      "staging devices—placards, visible lighting rigs, direct address, songs—designed to make the familiar look strange and debatable",
      "the Brechtian theatrical principle halting passive catharsis so spectators actively judge social structures",
    ],
    tier2Extracts: [
      "*[House lights snap bright; an actor drops her apron, holds up a placard reading 'WAR PROFITS RISE 40%', and addresses the stalls.]*",
      "*[Exposed stage lamps remain visible overhead while a singer interrupts a tearful parting with a sarcastic ballad on rent.]*",
      "*[Between scenes, stagehands wheel props in full view as a projector displays historical grain prices on the back wall.]*",
      "*[The actor steps outside character mid-argument and calmly asks the auditorium to weigh both economic motives.]*",
    ],
    tier3Contrasts: [
      "Which Brechtian principle explicitly opposes Aristotelian passive catharsis by reminding audiences they are inside a constructed theatre?",
      "Using scene placards, exposed lighting rigs, and direct audience critique exemplifies what German Epic Theatre concept?",
      "Name the estrangement technique crafted to prevent escapist empathy so audiences critique social injustice rationally.",
    ],
    explanation: "Brecht's ***Verfremdungseffekt*** (alienation/estrangement effect) breaks theatrical illusion to foster critical social reflection.",
    hint: "German term starting with 'V' (English *alienation effect* or *estrangement effect* also accepted).",
    traps: [
      { spec: { type: "text", accept: ["catharsis"] }, feedback: "Catharsis is Aristotelian emotional release; Brecht's anti-immersion technique is Verfremdungseffekt (alienation effect)." },
    ],
  },
  {
    term: "expressionism",
    accept: ["expressionism", "expressionist staging", "expressionist", "plastic theatre"],
    tier1Clues: [
      "non-naturalistic staging using distorted sets, surreal lighting, skewed shadows, and soundscapes to externalise inner psychology",
      "a theatrical mode projecting a protagonist's subjective anxiety, guilt, or memory directly onto the physical stage world",
      "anti-realist theatre where walls turn translucent, shadows tower unnaturally, and sound reflects mental torment",
    ],
    tier2Extracts: [
      "*[Office walls rise off the floor on cables, revealing giant skewed silhouettes of filing cabinets while a fluorescent hum becomes a heartbeat.]*",
      "*[As she recalls the fire, crimson shadows stretch across the translucent back scrim and distorted bells echo offstage.]*",
      "*[Ordinary parlour chairs tilt at impossible angles beneath jagged angular shadows whenever the father enters.]*",
      "*[Realistic amber lighting vanishes into electric blue while a gigantic projection of a ticking clock face engulfs the bedroom wall.]*",
    ],
    tier3Contrasts: [
      "Unlike photographic naturalism (which mirrors external reality), which staging aesthetic bends light and set walls to embody inner mental crisis?",
      "Whereas Brechtian staging seeks cool political analysis, which stylised mode externalises subjective psychological terror onstage?",
      "Name the non-realist theatrical movement behind translucent memory walls, oversized shadows, and subjective soundscapes.",
    ],
    explanation: "**Expressionist staging** (**expressionism**) distorts light, set geometry, and sound to project interior psychology visibly onto the stage.",
    hint: "Opposite of photographic realism—'expresses' internal mental states externally (starts with 'exp-').",
  },
  {
    term: "symbolic prop",
    accept: ["symbolic prop", "prop", "symbolic object", "stage prop"],
    tier1Clues: [
      "a physical stage object handled or isolated onstage that condenses an abstract theme like inheritance, guilt, or freedom",
      "a tangible item inside audience sightlines (such as an unopened letter or cracked heirloom) carrying shifting thematic weight",
      "a concrete theatrical object whose handling, hiding, or abandonment externalises unseen psychological conflict",
    ],
    tier2Extracts: [
      "*[Upstage centre stands a mahogany pendulum clock—its glass face cracked diagonally, its pendulum motionless.]*",
      "*[A sealed red envelope sits untouched on the white tablecloth throughout Acts I and II while both speakers avoid glancing at it.]*",
      "*[TOMAS pulls off his bow-tie and sets it deliberately beneath the bright vanity mirror bulbs before walking out.]*",
      "*[She wipes an already clean porcelain teacup faster and faster until its handle snaps in her fingers.]*",
    ],
    tier3Contrasts: [
      "How does theatre make an abstract theme like 'deferred truth' tangibly inescapable across two full acts without verbal metaphor?",
      "When an abandoned winter overcoat or cracked glass figurine accumulates shifting thematic meaning across scenes, what theatrical term applies?",
      "Name the physical stage element that converts invisible emotional conflict into a concrete object actors can grip, hide, or drop.",
    ],
    explanation: "A **symbolic prop** anchors abstract themes in a visible, tactile stage object handled or avoided in real time.",
    hint: "Two words: a physical theatrical object carrying deeper meaning ('_____ prop').",
  },
  {
    term: "soliloquy",
    accept: ["soliloquy", "a soliloquy"],
    tier1Clues: [
      "a sustained dramatic speech delivered while a character is **alone onstage**, revealing private inner thoughts to the audience",
      "an onstage interior monologue spoken aloud in solitude so spectators witness unfiltered moral conflict or self-deception",
      "a solitary speech exposing private doubt or scheming when no other character occupies the stage",
    ],
    tier2Extracts: [
      "*[All guests exit. Alone beneath one desk lamp, the JUDGE removes his wig and reflects aloud on tomorrow's warrant.]*",
      "*[Empty hall at midnight. ELENA paces centre-stage, debating aloud whether to burn the unsigned deed.]*",
      "*[Left completely alone after the trial, MARCUS speaks quietly to the darkened room about the witness he silenced.]*",
      "*[The curtain falls on the banquet; only NORA stands solitary on the apron voicing her concealed terror.]*",
    ],
    tier3Contrasts: [
      "Unlike an aside (spoken while other characters stay onstage) or dramatic monologue (addressed to a silent listener), which speech requires solitude?",
      "Which dramatic convention grants spectators unmediated access to private conscience when the stage empties to a single actor?",
      "From Latin *solus* (alone) + *loqui* (speak), name this classic interior stage speech.",
    ],
    explanation: "A **soliloquy** is spoken aloud by a character alone onstage, granting the audience direct access to private interiority.",
    hint: "Latin *solus* (alone) + *loqui* (speak).",
    traps: [
      { spec: { type: "text", accept: ["aside"] }, feedback: "An aside happens while other characters remain onstage; speaking alone onstage is a soliloquy." },
      { spec: { type: "text", accept: ["monologue", "dramatic monologue"] }, feedback: "A dramatic monologue addresses a silent listener; solitary onstage reflection is specifically a soliloquy." },
    ],
  },
  {
    term: "aside",
    accept: ["aside", "an aside"],
    tier1Clues: [
      "a brief remark directed straight to the audience while **other characters remain onstage** yet conventionally cannot hear it",
      "a quick conspiratorial murmur aimed at spectators amidst crowded dialogue to sharpen irony or reveal secret intent",
      "the stage convention breaking momentarily from onstage conversation to share a hidden thought only with the auditorium",
    ],
    tier2Extracts: [
      "*[While VICTOR smiles toward the window, HELENA murmurs downstage to the stalls: 'Drink quickly before the surveyor arrives.']*",
      "*[Three councillors debate loudly behind him; the CLERK glances briefly at the audience: 'None of them read page four.']*",
      "*[JULIAN pours tea cheerfully; VERA turns half-front, unheard by him: 'He never looks at my face while lying.']*",
      "*[Mid-banquet, the HOST bows politely to the Duke, then whispers toward the front row: 'My debt expires at midnight.']*",
    ],
    tier3Contrasts: [
      "Unlike a soliloquy (delivered completely alone), which brief convention builds instant audience complicity while rivals stand feet away?",
      "When other actors remain physically onstage yet stay conventionally deaf to one quick ironic whisper to spectators, name the device.",
      "Which dramatic technique turns spectators instantly into co-conspirators mid-dialogue?",
    ],
    explanation: "An **aside** is directed to the audience while other characters stay onstage unheard, instantly generating complicity and irony.",
    hint: "Short 5-letter word: stepping or glancing 'a-____' to whisper to the audience.",
    traps: [
      { spec: { type: "text", accept: ["soliloquy"] }, feedback: "A soliloquy occurs when the speaker is alone; whispering to spectators while others remain onstage is an aside." },
    ],
  },
  {
    term: "stage directions",
    accept: ["stage directions", "stage direction"],
    tier1Clues: [
      "the italicised or bracketed blueprint written by a playwright specifying setting, lighting, movement, gesture, and silence",
      "non-spoken performance instructions encoding proxemics, props, tone of voice, entrances, and exits",
      "the architectural script cues IB drama essays analyse alongside spoken dialogue (never miscalled 'the narrator')",
    ],
    tier2Extracts: [
      "*[Harsh winter daylight falls through one high window onto the cracked clock; downstage corners lie in slate shadow.]*",
      "*[Pause. He aligns the silver pen parallel to the blotter without raising his eyes.]*",
      "*[Distant pile-drivers hammer rhythmically offstage as the mayor smiles and pours water.]*",
      "*[Exits upstage-left. The door does not slam; it clicks shut cleanly.]*",
    ],
    tier3Contrasts: [
      "Calling italicised movement and lighting notes 'the narrator' is a classic IB exam error—what is their accurate dramatic name?",
      "Where in a printed play script does a playwright encode visual symbolism, proxemic shifts, and timed pauses?",
      "Name the two-word theatrical component that transforms flat spoken dialogue into a three-dimensional performance blueprint.",
    ],
    explanation: "**Stage directions** encode setting, proxemics, lighting, soundscapes, props, and pauses—core authorial choices in IB drama analysis.",
    hint: "Two words: '_____ directions' (never call them 'the narrator'!).",
  },
  {
    term: "chiaroscuro",
    accept: ["chiaroscuro", "spotlighting", "spotlight"],
    tier1Clues: [
      "stark theatrical contrast between intense focused light and surrounding darkness to isolate a figure or moral crisis",
      "the Italian lighting term for dramatic light-and-shadow contrast sculpting mood and psychological exposure onstage",
      "concentrated pools of illumination carving sharply out of deep stage shadow",
    ],
    tier2Extracts: [
      "*[A single narrow white beam isolates the empty wooden chair downstage-centre while the entire hall drowns in shadow.]*",
      "*[Only one stark desk lamp illuminates the judge's trembling hands holding the wig; the courtroom gallery behind him stays pitch black.]*",
      "*[Harsh silver moonlight cuts diagonally across the doorstep, leaving the accusing brother's face split half in glare, half in dark.]*",
      "*[One ring of bright vanity bulbs blazes around the mirror while the parent stands swallowed in dim centre-stage gloom.]*",
    ],
    tier3Contrasts: [
      "What Italian aesthetic term—borrowed from painting into lighting design—names extreme contrast between stark light and deep shadow?",
      "Unlike flat even work-lighting in Brechtian theatre, which lighting technique carves dramatic psychological isolation out of darkness?",
      "Name the high-contrast light-versus-shadow staging technique illuminating one focal point amidst gloom.",
    ],
    explanation: "**Chiaroscuro** (literally 'light-dark') uses sharp light/shadow contrast to isolate characters, props, or moral tension.",
    hint: "Italian compound meaning 'clear-dark' (also accepted: *spotlighting*).",
  },
  {
    term: "offstage sound",
    accept: ["offstage sound", "offstage soundscape", "soundscape", "diegetic sound"],
    tier1Clues: [
      "auditory cues—such as a distant foghorn, pile-driver, or slamming gate—originating beyond the visible stage set",
      "an aural backdrop expanding the dramatic world beyond the room's walls to signal encroaching outside forces",
      "heard yet unseen acoustic cues infiltrating an interior scene to heighten isolation, dread, or historical pressure",
    ],
    tier2Extracts: [
      "*[Throughout the mayor's peaceful speech, rhythmic demolition hammers echo steadily beyond the parlour shutters.]*",
      "*[During the siblings' bitter silence, a low foghorn sounds twice across the unseen harbour.]*",
      "*[As she locks the front door, distant iron train brakes shriek from the viaduct outside.]*",
      "*[A marching drumbeat swells faintly behind the upstage wall before fading away unanswered.]*",
    ],
    tier3Contrasts: [
      "How does a playwright make encroaching social collapse audibly inescapable inside a quiet closed parlour without changing the set?",
      "When footsteps recede down gravel beyond the visible doorway or sirens wail outside, which staging element widens the dramatic universe?",
      "Name the theatrical acoustic device that lets the unseen world outside press audibly into onstage silence.",
    ],
    explanation: "**Offstage sound** (or **soundscape**) expands theatrical space beyond visible walls, letting unseen external forces intrude audibly.",
    hint: "Two words: sound originating beyond the visible stage ('_____ sound' or *soundscape*).",
  },
];

// ============================================================================
// DRILL 4: Subtext, Dialogue Dynamics & Tragic/Comic Arcs (level 2)
// ============================================================================
const TRAGIC_COMIC_CARDS: readonly ConceptCard[] = [
  {
    term: "hamartia",
    accept: ["hamartia"],
    tier1Clues: [
      "in Aristotelian tragedy, a protagonist's **tragic error of judgement or fateful miscalculation** ('missing the mark')",
      "the Greek tragic term literally rooted in archery ('missing the target') that sets irreversible downfall in motion",
      "the pivotal misjudgement—broader than a mere cartoon personality flaw—that triggers a tragic reversal",
    ],
    tier2Extracts: [
      "Trusting a forged letter without questioning its seal, a proud governor banishes his only loyal advisor—precipitating civil collapse.",
      "Convinced he can outsmart an ancient oracle by fleeing Corinth, a young prince unknowingly walks straight toward his own doom.",
      "Assuming wealth guarantees family devotion, an ageing patriarch divides his estate by flattery alone, triggering catastrophic betrayal.",
      "Signing a deceptive mortgage to protect social appearances, a devoted father locks his household into irreversible ruin.",
    ],
    tier3Contrasts: [
      "Why do top IB essays avoid reducing this Greek term to 'a bad personality trait'? Name the exact Aristotelian concept for a fatal miscalculation.",
      "Which element of Aristotle's tragic chain immediately precedes *peripeteia* (reversal) as the decisive mistaken choice?",
      "From the Greek for 'missing the mark', name the fateful error driving classical and modern tragic downfall.",
    ],
    explanation: "**Hamartia** ('missing the mark') is the protagonist's tragic error of judgement or miscalculation initiating downfall.",
    hint: "Greek tragic term starting with 'ham-'.",
    traps: [
      { spec: { type: "text", accept: ["hubris"] }, feedback: "Hubris is excessive pride; the fatal error of judgement itself is hamartia." },
      { spec: { type: "text", accept: ["peripeteia"] }, feedback: "Peripeteia is the sudden reversal of fortune caused by the error; the error is hamartia." },
    ],
  },
  {
    term: "peripeteia",
    accept: ["peripeteia"],
    tier1Clues: [
      "the sudden **reversal of fortune** in tragedy where a character's intended triumph triggers the opposite catastrophe",
      "the structural turning point in Aristotle's tragic arc when circumstances pivot sharply from prosperity toward ruin",
      "an ironic plot reversal where the very precaution meant to secure safety precipitates disaster",
    ],
    tier2Extracts: [
      "A messenger arrives intending to free the king from fear of prophecy—yet his reassuring news accidentally proves the king's worst guilt.",
      "A financier orchestrates a hostile takeover to destroy his rival, only to discover the signed merger bankrupted his own family trust.",
      "A magistrate's emergency arrest order designed to silence witnesses instead triggers the courtroom mutiny that unseats him.",
      "A monarch celebrates receiving news of a rival's defeat just moments before learning the victory cost his own heir's life.",
    ],
    tier3Contrasts: [
      "Distinguish external reversal of fortune from inner mental discovery: what Greek term names the sudden **reversal** of circumstances?",
      "Between *hamartia* (fatal misjudgement) and *anagnorisis* (recognition), which Aristotelian milestone flips fortune upside down?",
      "When a character's proud safeguard directly triggers the exact ruin they sought to escape, name that tragic turn.",
    ],
    explanation: "**Peripeteia** is the sudden ironic reversal of fortune turning intended security or victory into catastrophe.",
    hint: "Starts with 'peri-' (turning around).",
    traps: [
      { spec: { type: "text", accept: ["anagnorisis"] }, feedback: "Anagnorisis is the moment of recognition; the reversal of fortune is peripeteia." },
      { spec: { type: "text", accept: ["hamartia"] }, feedback: "Hamartia is the error of judgement; the sudden reversal it precipitates is peripeteia." },
    ],
  },
  {
    term: "anagnorisis",
    accept: ["anagnorisis"],
    tier1Clues: [
      "the devastating flash of **recognition** in tragedy when a protagonist passes from ignorance into painful truth",
      "Aristotle's term for the tragic moment of self-knowledge—usually arriving too late to undo the catastrophe",
      "the sudden interior discovery in which a blind hero finally sees their own complicity or true identity",
    ],
    tier2Extracts: [
      "Lowering the forged ledger, the ruler whispers: *'Then the traitor whose head I demanded all winter was myself.'*",
      "Staring at the daughter's empty room, the rigid father realises too late that his obsession with status drove away everyone he loved.",
      "Reading the witness's birthmark, the detective collapses in horror, finally grasping the hidden kinship he refused to see.",
      "As the auctioneer's gavel falls, the proud landowner admits aloud that her own stubborn silence destroyed the orchard.",
    ],
    tier3Contrasts: [
      "Unlike *peripeteia* (the external shift in fortune), what Greek term names the protagonist's devastating **inner discovery** of truth?",
      "When a modern tragedy deliberately lets a protagonist die still trapped in illusion, which Aristotelian moment is being withheld?",
      "From Greek for 'knowing again', name the painful flash of self-recognition following a tragic reversal.",
    ],
    explanation: "**Anagnorisis** is the tragic moment of startling recognition shifting a character from ignorance to painful truth.",
    hint: "Greek term starting with 'anag-' ('recognition').",
    traps: [
      { spec: { type: "text", accept: ["peripeteia"] }, feedback: "Peripeteia is external reversal of fortune; inner recognition is anagnorisis." },
      { spec: { type: "text", accept: ["catharsis"] }, feedback: "Catharsis happens to the audience; recognition happens to the protagonist (anagnorisis)." },
    ],
  },
  {
    term: "catharsis",
    accept: ["catharsis"],
    tier1Clues: [
      "the audience's emotional purgation and moral clarification through pity and fear at a tragedy's close",
      "Aristotle's term for the cleansing emotional release experienced by spectators once tragic tension resolves",
      "the sobering release of accumulated pity and dread that classical tragedy seeks—and Brechtian theatre disrupts",
    ],
    tier2Extracts: [
      "After the final tragic recognition and mourning chorus, spectators leave the auditorium emotionally drained yet morally clarified.",
      "A classical ending replaces mounting terror with solemn lamentation, offering the audience painful yet cleansing emotional release.",
      "Through intense pity and fear for a flawed protagonist's fall, the closing tableau brings spectators sobering psychological purgation.",
      "Unlike an unresolved absurdist farce, the final tragic silence purges pent-up dread into quiet shared grief across the theatre.",
    ],
    tier3Contrasts: [
      "Unlike *hamartia* or *anagnorisis* (which belong to the character), which Aristotelian effect occurs inside the **audience**?",
      "Bertolt Brecht designed *Verfremdungseffekt* specifically to interrupt this Aristotelian emotional purgation—name it.",
      "What Greek medical/ritual term names the cleansing release of pity and fear concluding classical tragedy?",
    ],
    explanation: "**Catharsis** is the audience's emotional release and moral clarification through pity and fear at tragedy's resolution.",
    hint: "Starts with 'cath-' (Greek for 'cleansing / purgation').",
    traps: [
      { spec: { type: "text", accept: ["anagnorisis"] }, feedback: "Anagnorisis is the hero's recognition; the audience's emotional release is catharsis." },
      { spec: { type: "text", accept: ["hubris"] }, feedback: "Hubris is the hero's excessive pride; audience emotional purgation is catharsis." },
    ],
  },
  {
    term: "hubris",
    accept: ["hubris"],
    tier1Clues: [
      "overweening pride, arrogance, or presumption that blinds a tragic protagonist to mortal or moral limits",
      "excessive self-confidence leading a ruler or patriarch to scorn warnings and invite catastrophic nemesis",
      "the inflated arrogance frequently fuelling a protagonist's fatal miscalculation (*hamartia*)",
    ],
    tier2Extracts: [
      "Boasting *'No storm or court can bend a house I built'*, the shipping magnate tears up the safety inspector's warning unread.",
      "Dismissing every elder's caution as cowardice, the proud commander declares his own decree higher than ancient civic law.",
      "Laughing at debts while raising a crystal glass, the landowner insists *'Nothing on earth touches solid heritage.'*",
      "Convinced his intellect alone can outwit fate, the young monarch mocks the blind prophet before the assembled city.",
    ],
    tier3Contrasts: [
      "While *hamartia* names the specific fatal miscalculation, what Greek term names the **excessive pride** that blinds the hero to warnings?",
      "Which tragic attitude turns polite counsel into perceived insult and convinces a character they stand above mortal limits?",
      "Name the 6-letter Greek term for overweening arrogance in tragedy.",
    ],
    explanation: "**Hubris** is excessive pride or presumption blinding a character to ethical, social, or mortal limits.",
    hint: "6-letter Greek term for overweening pride (starts with 'h').",
    traps: [
      { spec: { type: "text", accept: ["hamartia"] }, feedback: "Hamartia is the fatal error of judgement; excessive pride/arrogance itself is hubris." },
    ],
  },
  {
    term: "stichomythia",
    accept: ["stichomythia"],
    tier1Clues: [
      "rapid-fire alternating single lines (or half-lines) of dialogue enacting verbal fencing or intellectual conflict",
      "a tight back-and-forth exchange where two speakers trade crisp one-line utterances echoing and inverting each other's words",
      "the classical dialogue rhythm accelerating pace through clipped single-line turns between evenly matched rivals",
    ],
    tier2Extracts: [
      "**A:** *You signed the dock curfew.* / **B:** *I signed to save the port.* / **A:** *You locked the workers out.* / **B:** *I locked the riot out.*",
      "**A:** *Did you burn the ledger?* / **B:** *Did you read its margin?* / **A:** *Answer yes or no.* / **B:** *Ask a cleaner question.*",
      "**A:** *The ferry isn't running.* / **B:** *The board still says Delayed.* / **A:** *It hasn't moved since four.* / **B:** *Then we wait till five.*",
      "**A:** *You promised to return.* / **B:** *You promised not to sell.* / **A:** *The bank demanded cash.* / **B:** *And loyalty cost less.*",
    ],
    tier3Contrasts: [
      "Unlike an asymmetric speech where one character talks for twenty lines while another stays silent, which dialogue pattern locks two rivals into rapid single-line sparring?",
      "Inherited from ancient Greek tragedy, what term names brisk alternating single lines that mirror and invert vocabulary?",
      "When dialogue sharpens into a sword-fight of clipped alternating one-liners, what classical dramatic technique is operating?",
    ],
    explanation: "**Stichomythia** alternates rapid single lines between two speakers, heightening pace, intellect, and verbal confrontation.",
    hint: "Greek compound starting with 'stich-' (line-speech).",
  },
  {
    term: "subtext",
    accept: ["subtext"],
    tier1Clues: [
      "the unspoken emotional motive, hidden resentment, or status bid pulsing underneath literal spoken dialogue",
      "the concealed layer of meaning inferred from the gap between polite surface lines and tense pauses or gestures",
      "what characters genuinely mean, fear, or desire beneath ordinary everyday conversation",
    ],
    tier2Extracts: [
      "**A:** *'You folded the funeral programmes so neatly.'* / **B:** *(pause)* *'At least nothing gets lost in my drawer.'*",
      "**A:** *'You left the porch light on again.'* / **B:** *'I thought you'd forgotten where home was.'*",
      "**A:** *'How charming to see you wearing Mother's brooch.'* / **B:** *'She always preferred things kept out of damp vaults.'*",
      "**A:** *'Another late night auditing accounts?'* / **B:** *(coldly)* *'Someone has to count what vanishes before dawn.'*",
    ],
    tier3Contrasts: [
      "Think of the iceberg model: surface trivia sits above the waterline—what single term names the concealed conflict beneath?",
      "When two siblings argue bitterly over family betrayal while literally discussing a tea tray, what dramatic layer drives the scene?",
      "Name the unspoken psychological undercurrent decoded through pauses, deflections, and contradictory stage cues.",
    ],
    explanation: "**Subtext** is the concealed motive, hostility, or longing vibrating beneath literal spoken words.",
    hint: "Literally 'underneath the text' (`sub-` + `text`).",
  },
  {
    term: "dramatic irony",
    accept: ["dramatic irony"],
    tier1Clues: [
      "a knowledge gap where the **audience knows a vital truth** that one or more onstage characters remain oblivious to",
      "the theatrical device turning innocent dialogue into dread or satirical exposure because spectators hold superior knowledge",
      "when spectators witness a secret earlier in a play and later watch an unsuspecting character trust their deceiver",
    ],
    tier2Extracts: [
      "Spectators saw the clerk plant a forged receipt in Act I; in Act II the manager warmly praises the clerk's *'unblemished honesty'*.",
      "The audience knows the orchard was sold this morning; Victor raises a toast praising *'solid soil that never changes hands'*.",
      "We watched Julian transfer the deeds yesterday; now he calmly assures his sister *'every paper stays intact'*.",
      "Spectators know the warning telegram lies unopened inside the coat pocket while the host celebrates a safe voyage.",
    ],
    tier3Contrasts: [
      "Unlike verbal irony (deliberate sarcasm by a speaker), which irony relies strictly on **audience knowledge exceeding character knowledge**?",
      "Which structural irony intensifies helpless dread in tragedy while fuelling hilarious exposure in comedy of manners?",
      "Name the two-word theatrical irony created whenever spectators see the hidden trap an onstage speaker walks straight toward.",
    ],
    explanation: "**Dramatic irony** arises whenever audience knowledge exceeds character knowledge, sharpening suspense, pathos, or satire.",
    hint: "Two words: '_____ irony' (audience knows more than the character).",
    traps: [
      { spec: { type: "text", accept: ["verbal irony"] }, feedback: "Verbal irony is when a speaker knowingly says the opposite of what they mean; audience superior knowledge is dramatic irony." },
      { spec: { type: "text", accept: ["situational irony"] }, feedback: "Situational irony is an unexpected outcome for everyone; audience knowing more than onstage characters is dramatic irony." },
    ],
  },
  {
    term: "Pinteresque pause",
    accept: ["Pinteresque pause", "pinteresque pause", "pause", "loaded pause", "pinter pause"],
    tier1Clues: [
      "a deliberate, charged halt inside realistic dialogue where unspoken menace, hesitation, or power calculation fills the room",
      "the trademark theatrical silence associated with Harold Pinter, turning gaps between ordinary words into psychological battlefields",
      "a timed halt in speech—longer than a brief beat—allowing concealed subtext to pressurise the auditorium",
    ],
    tier2Extracts: [
      "**A:** *'You didn't answer who signed the deed.'* / **B:** *(Four silent seconds pass as he aligns a silver pen parallel to the blotter.)* *'You worry too much about paper.'*",
      "**A:** *'We haven't invited guests since March.'* / **B:** *(Stays mute for five slow beats, continuing to polish an immaculate silver fork.)*",
      "**A:** *'Did you lock the basement?'* / **B:** *(Long, charged halt; looks slowly from the door to his brother's muddy boots.)* *'I thought you did.'*",
      "**A:** *'Congratulations on the promotion.'* / **B:** *(Holds silent for three heavy beats, zipping his briefcase shut without smiling.)* *'Somebody had to take it.'*",
    ],
    tier3Contrasts: [
      "Named after a renowned twentieth-century British dramatist, what two-word phrase describes a loaded conversational halt pulsing with unspoken threat?",
      "When dialogue stalls mid-confrontation so unspoken subtext weighs heavier than any sentence, what charged theatrical cue is deployed?",
      "Name the famous type of charged theatrical halt distinguishing strategic silence from casual conversation.",
    ],
    explanation: "A **Pinteresque pause** suspends spoken dialogue so concealed hostility, calculation, or dread dominates the auditorium.",
    hint: "Named after playwright Harold Pinter ('_____ pause').",
  },
  {
    term: "bathos",
    accept: ["bathos"],
    tier1Clues: [
      "an abrupt anticlimactic plunge from elevated tragic solemnity into trivial everyday absurdity",
      "a sudden comic drop from the sublime to the ridiculous—frequent in satire and Theatre of the Absurd",
      "undercutting lofty rhetorical grandeur with a mundane domestic or absurd punchline",
    ],
    tier2Extracts: [
      "*'Fate has crushed my house, emptied the heavens, and—worse—burnt the breakfast toast again.'*",
      "*'I stand at the precipice of eternity!'* *(checks bare wrist solemnly)* *'Good heavens, my nonexistent watch stopped.'*",
      "*'We shall defend honour, truth, and ancestral glory—provided parking remains free until noon.'*",
      "*'Let empires tremble before our resolve! Also, could someone locate my left slipper?'*",
    ],
    tier3Contrasts: [
      "Rhyming with *pathos* (deep sorrow), which 6-letter term punctures lofty solemnity by plunging abruptly into comic triviality?",
      "When elevated tragic rhetoric collapses suddenly into mundane absurdity, name the stylistic device at work.",
      "Which comic/absurdist technique deliberately drops from cosmic grandeur to ridiculous domestic detail in a single breath?",
    ],
    explanation: "**Bathos** creates an abrupt descent from elevated seriousness to trivial absurdity, exposing pretension or existential comedy.",
    hint: "6-letter word rhyming with 'pathos' (starts with 'b').",
    traps: [
      { spec: { type: "text", accept: ["pathos"] }, feedback: "Pathos evokes genuine pity and sorrow; the abrupt comic drop into triviality is bathos." },
    ],
  },
  {
    term: "Theatre of the Absurd",
    accept: ["Theatre of the Absurd", "theatre of the absurd", "absurdism", "absurdist drama", "absurdist comedy"],
    tier1Clues: [
      "post-war dramatic mode using cyclical non-linear structure, stalled dialogue, and bathos to confront existential uncertainty",
      "the dramatic movement stripping away logical plot progress and purposeful language to depict humans trapped in repetitive waiting",
      "an anti-realist theatrical tradition where comic vaudeville and linguistic breakdown dramatise an incoherent universe",
    ],
    tier2Extracts: [
      "Two figures on a bare platform wait for Tuesday's express on Thursday, checking bare wrists and repeating *'Let's leave'* while neither stands.",
      "Act II replicates Act I's dialogue nearly word-for-word beneath a leafless tree, replacing plot progression with circular stalemate.",
      "Characters debate polite table etiquette logically while the walls disappear and language dissolves into contradictory slogans.",
      "A pair of clerks sort blank envelopes endlessly for an unseen director, alternating philosophical dread with slapstick hat-swapping.",
    ],
    tier3Contrasts: [
      "Unlike Aristotelian causal plots or Brechtian political argument, which dramatic movement uses cyclical stasis and misfiring speech to stage existential limbo?",
      "When dialogue circles back to its opening line and physical comedy underscores meaningless waiting, which dramatic tradition is operating?",
      "Name the dramatic movement associated with cyclical repetition, linguistic breakdown, and existential bathos.",
    ],
    explanation: "**Theatre of the Absurd** (*absurdism*) pairs cyclical stasis, misfiring language, and vaudevillian bathos to confront existential uncertainty.",
    hint: "4-word theatrical movement (also accepted: *absurdism* / *absurdist drama*).",
  },
];

// ============================================================================
// DRILL 5: Prosody, Syllable & Rhyme-Scheme Pattern Matching (level 3)
// Procedurally generates 100+ genuinely distinct items per tier!
// ============================================================================
const RHYME_POOLS: readonly (readonly [string, string])[] = [
  ["night", "light"], ["stone", "alone"], ["sea", "free"], ["wall", "call"],
  ["red", "dead"], ["ring", "spring"], ["keep", "sleep"], ["gold", "cold"],
  ["rain", "pane"], ["grey", "sway"], ["door", "shore"], ["flame", "name"],
  ["tide", "wide"], ["frost", "lost"], ["mist", "list"], ["clock", "dock"],
  ["sand", "hand"], ["song", "long"], ["snow", "glow"], ["ash", "flash"],
  ["dark", "spark"], ["glass", "pass"], ["bell", "shell"], ["wind", "blind"],
];

const METRE_NAMES: readonly { foot: string; pattern: string; syl: number; example: string }[] = [
  { foot: "iambic", pattern: "˘ /", syl: 2, example: "the SEA" },
  { foot: "trochaic", pattern: "/ ˘", syl: 2, example: "WIN-ter" },
  { foot: "spondaic", pattern: "/ /", syl: 2, example: "STOP NOW" },
  { foot: "anapestic", pattern: "˘ ˘ /", syl: 3, example: "in the DARK" },
  { foot: "dactylic", pattern: "/ ˘ ˘", syl: 3, example: "SI-lent-ly" },
];

const LENGTH_NAMES: readonly { name: string; feet: number }[] = [
  { name: "trimeter", feet: 3 },
  { name: "tetrameter", feet: 4 },
  { name: "pentameter", feet: 5 },
  { name: "hexameter", feet: 6 },
];

function generateMetreRhymeItem(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  if (tier === 1) {
    // Mix of syllable counts from scansion patterns + stanza line counts + rhyme scheme identification
    const mode = rng.int(1, 3);
    if (mode === 1) {
      const m = rng.pick(METRE_NAMES.slice(0, 3)); // disyllabic (2 syl) or pick all 5!
      const len = rng.pick(LENGTH_NAMES);
      const extraM = rng.bool(0.45) ? rng.pick(METRE_NAMES.slice(3)) : m;
      const bar = Array.from({ length: len.feet }, () => extraM.pattern).join(" | ");
      const totalSyl = extraM.syl * len.feet;
      const verseLabel = rng.pick(["unseen lyric line", "scanned verse line", "metrical line", "poetic line"]);
      return {
        prompt: `Count the total number of **syllables** in this strictly regular **${extraM.foot} ${len.name}** ${verseLabel}:\n\`${bar}\`\nGive an integer.`,
        answer: { type: "number", value: totalSyl, display: String(totalSyl) },
        solution: [
          `Each **${extraM.foot}** foot (\`${extraM.pattern}\`) contains ${extraM.syl} syllables.`,
          `**${len.name}** means ${len.feet} feet per line: ${extraM.syl} × ${len.feet} = **${totalSyl}** syllables.`,
        ],
        hint: `Count every beat symbol (\`˘\` or \`/\`) across all ${len.feet} feet.`,
        traps: [
          {
            spec: { type: "number", value: len.feet },
            feedback: `${len.feet} is the number of metrical feet (${len.name}); multiply by ${extraM.syl} syllables per foot.`,
          },
        ],
      };
    }
    if (mode === 2) {
      // 4-line quatrain rhyme scheme from freshly picked rhyme pairs
      const pairs = rng.shuffle(RHYME_POOLS).slice(0, 2);
      const [a1, a2] = pairs[0];
      const [b1, b2] = pairs[1];
      const schemeType = rng.pick(["ABAB", "ABBA", "AABB"] as const);
      const ends =
        schemeType === "ABAB"
          ? [a1, b1, a2, b2]
          : schemeType === "ABBA"
            ? [a1, b1, b2, a2]
            : [a1, a2, b1, b2];
      const styleNote =
        schemeType === "ABAB"
          ? "alternating rhyme"
          : schemeType === "ABBA"
            ? "enclosed (envelope) rhyme"
            : "rhyming couplets";
      return {
        prompt: `A 4-line unseen quatrain ends its four lines with the words: *${ends.join(" / ")}*.\nWrite its 4-letter **rhyme scheme** (no spaces, e.g. \`ABAB\`).`,
        answer: { type: "text", accept: [schemeType, schemeType.toLowerCase()], display: schemeType },
        solution: [
          `Match identical end-sounds: *${a1}* rhymes with *${a2}* (\`A\`), and *${b1}* rhymes with *${b2}* (\`B\`).`,
          `Reading Lines 1–4 in order gives **${schemeType}** (${styleNote}).`,
        ],
        hint: `Label the first sound A (*${ends[0]}*) and the second distinct sound B; track where each sound returns.`,
      };
    }
    // Mode 3: Stanza architecture totals
    const nStanzas = rng.int(2, 6);
    const stanzaKinds: readonly { name: string; lines: number }[] = [
      { name: "couplets", lines: 2 },
      { name: "tercets", lines: 3 },
      { name: "quatrains", lines: 4 },
      { name: "quintains", lines: 5 },
      { name: "sestets", lines: 6 },
    ];
    const kind = rng.pick(stanzaKinds);
    const hasCoupletCap = rng.bool(0.5);
    const total = nStanzas * kind.lines + (hasCoupletCap ? 2 : 0);
    const tailText = hasCoupletCap ? " followed by 1 closing rhyming couplet" : "";
    return {
      prompt: `An unseen poem consists of **${nStanzas} ${kind.name}**${tailText}. How many **lines** does the complete poem contain? Give an integer.`,
      answer: { type: "number", value: total, display: String(total) },
      solution: [
        `Each stanza in ${kind.name} has ${kind.lines} lines: ${nStanzas} × ${kind.lines} = ${nStanzas * kind.lines}.`,
        hasCoupletCap
          ? `Add 2 lines for the closing couplet: ${nStanzas * kind.lines} + 2 = **${total}**.`
          : `Total lines = **${total}**.`,
      ],
      hint: `Recall: couplet = 2, tercet = 3, quatrain = 4, quintain = 5, sestet = 6.`,
    };
  }

  if (tier === 2) {
    const mode = rng.int(1, 2);
    if (mode === 1) {
      // Name the exact two-word metre from a scansion bar!
      const m = rng.pick(METRE_NAMES);
      const len = rng.pick(LENGTH_NAMES);
      const bar = Array.from({ length: len.feet }, () => m.pattern).join(" | ");
      const ans = `${m.foot} ${len.name}`;
      const context = rng.pick([
        "an unseen elegy",
        "an unseen lyric",
        "a dramatic verse speech",
        "an unseen sonnet line",
        "an unseen narrative stanza",
      ]);
      return {
        prompt: `This scansion map represents a regular line from ${context}:\n\`${bar}\`\nName its exact **two-word metre** (foot type + line length, e.g. *trochaic trimeter*).`,
        answer: { type: "text", accept: [ans], display: ans },
        solution: [
          `The repeating foot \`${m.pattern}\` is **${m.foot}** (like *${m.example}*).`,
          `There are **${len.feet}** feet across the line (**${len.name}**), giving **${ans}**.`,
        ],
        hint: `Identify the single foot inside \`${m.pattern}\`, then count how many feet appear (3 = trimeter, 4 = tetrameter, 5 = pentameter, 6 = hexameter).`,
      };
    }
    // Mode 2: 6-line or 8-line stanza rhyme scheme from freshly chosen pairs!
    const pairs = rng.shuffle(RHYME_POOLS).slice(0, 3);
    const [a1, a2] = pairs[0];
    const [b1, b2] = pairs[1];
    const [c1, c2] = pairs[2];
    const schemes: readonly { code: string; words: string[]; desc: string }[] = [
      { code: "ABABCC", words: [a1, b1, a2, b2, c1, c2], desc: "alternating quatrain sealed by a rhyming couplet" },
      { code: "ABCABC", words: [a1, b1, c1, a2, b2, c2], desc: "interlaced two-tercet sestet" },
      { code: "ABCBAC", words: [a1, b1, c1, b2, a2, c2], desc: "mirrored sestet closing on C" },
      { code: "AABBCC", words: [a1, a2, b1, b2, c1, c2], desc: "three consecutive rhyming couplets" },
      { code: "ABBACC", words: [a1, b1, b2, a2, c1, c2], desc: "enclosed quatrain sealed by a couplet" },
    ];
    const pick = rng.pick(schemes);
    return {
      prompt: `A 6-line sestet closes its lines on: *${pick.words.join(" / ")}*.\nWrite its exact 6-letter **rhyme scheme** (no spaces).`,
      answer: { type: "text", accept: [pick.code, pick.code.toLowerCase()], display: pick.code },
      solution: [
        `Pair matching sounds: *${a1}/${a2}* = A, *${b1}/${b2}* = B, *${c1}/${c2}* = C.`,
        `In order: **${pick.code}** (${pick.desc}).`,
      ],
      hint: `Assign A to *${pick.words[0]}*, B to the next new rhyme sound, and C to the third.`,
    };
  }

  // Tier 3: Disrupted scansion (identify opening disruption OR total stressed beats OR sonnet/villanelle structural calculation)
  const mode = rng.int(1, 2);
  if (mode === 1) {
    // Disrupted iambic line: count total stressed beats (`/`) when 1 or 2 spondees replace iambs, OR name the opening disruption!
    const len = rng.pick([
      { name: "tetrameter", feet: 4 },
      { name: "pentameter", feet: 5 },
      { name: "hexameter", feet: 6 },
    ]);
    const subMode = rng.bool(0.5);
    if (subMode) {
      // Name the opening metrical substitution!
      const opener = rng.pick([
        { pat: "/ ˘", name: "trochee", accept: ["trochee", "trochaic", "trochaic inversion"], desc: "falling stressed–unstressed (`/ ˘`)" },
        { pat: "/ /", name: "spondee", accept: ["spondee", "spondaic", "spondaic substitution"], desc: "double heavy stress (`/ /`)" },
        { pat: "˘ ˘", name: "pyrrhic", accept: ["pyrrhic", "pyrrhic foot"], desc: "two light unstressed syllables (`˘ ˘`)" },
      ]);
      const rest = Array.from({ length: len.feet - 1 }, () => "˘ /").join(" | ");
      const lineBar = `${opener.pat} | ${rest}`;
      const setting = rng.pick([
        "at a Line-9 sonnet volta",
        "opening an angry dramatic monologue",
        "marking sudden shock in an elegy",
        "breaking regular rhythm in a war lyric",
        "introducing an urgent imperative",
      ]);
      return {
        prompt: `A line of baseline **iambic ${len.name}** (${setting}) scans as:\n\`${lineBar}\`\nName the **disruptive opening foot** placed in Foot 1 (one word, e.g. *trochee* or *spondee*).`,
        answer: { type: "text", accept: opener.accept, display: opener.name },
        solution: [
          `Feet 2–${len.feet} follow regular rising iambs (\`˘ /\`).`,
          `Foot 1 substitutes \`${opener.pat}\` — ${opener.desc} — which is a **${opener.name}**.`,
        ],
        hint: `Inspect ONLY Foot 1 (\`${opener.pat}\`): is it falling (\`/ ˘\`), double-stressed (\`/ /\`), or double-unstressed (\`˘ ˘\`)?`,
      };
    }
    // Count exact stressed syllables (`/`) in a disrupted multi-foot scansion string!
    const footChoices = ["˘ /", "/ ˘", "/ /", "˘ ˘ /"] as const;
    const feet = Array.from({ length: len.feet }, () => rng.pick(footChoices));
    // Ensure at least one spondee so it's genuinely non-trivial!
    const spondeeIdx = rng.int(0, len.feet - 1);
    feet[spondeeIdx] = "/ /";
    const lineBar = feet.join(" | ");
    const stressCount = lineBar.split("").filter((ch) => ch === "/").length;
    const genre = rng.pick(["dramatic verse line", "unseen sonnet line", "elegiac line", "monologue line"]);
    return {
      prompt: `Count the total number of **stressed beats (\`/\`)** in this metrically disrupted ${genre}:\n\`${lineBar}\`\nGive an integer.`,
      answer: { type: "number", value: stressCount, display: String(stressCount) },
      solution: [
        `Count every slash \`/\` across the ${len.feet} feet (remember each spondee \`/ /\` contributes 2 stressed beats).`,
        `Total stressed beats = **${stressCount}**.`,
      ],
      hint: `Count every \`/\` symbol carefully—spondaic feet (\`/ /\`) carry two stresses instead of one.`,
    };
  }

  // Tier 3 Mode 2: Sonnet / Villanelle / Couplet form classification from full compact rhyme pattern!
  const pairs = rng.shuffle(RHYME_POOLS).slice(0, 4);
  const sampleWord = pairs[0][0];
  const formBank: readonly { code: string; ans: string; accept: string[]; note: string }[] = [
    {
      code: "ABBA ABBA CDE CDE",
      ans: "Petrarchan sonnet",
      accept: ["Petrarchan sonnet", "petrarchan", "Italian sonnet"],
      note: "14 lines partitioned into an enclosed ABBAABBA octave and a CDECDE sestet.",
    },
    {
      code: "ABBA ABBA CDC DCD",
      ans: "Petrarchan sonnet",
      accept: ["Petrarchan sonnet", "petrarchan", "Italian sonnet"],
      note: "14 lines with an enclosed octave and an alternating CDCDCD sestet pivoting at Line 9.",
    },
    {
      code: "ABAB CDCD EFEF GG",
      ans: "Shakespearean sonnet",
      accept: ["Shakespearean sonnet", "shakespearean", "English sonnet"],
      note: "Three alternating quatrains capped by a closing GG rhyming couplet.",
    },
    {
      code: "ABA ABA ABA ABA ABA ABAA",
      ans: "villanelle",
      accept: ["villanelle", "a villanelle"],
      note: "19 lines: five ABA tercets plus one ABAA quatrain on two rhyme sounds.",
    },
    {
      code: "ABAB BCBC CDCD EE",
      ans: "Spenserian sonnet",
      accept: ["Spenserian sonnet", "spenserian"],
      note: "14-line interlocking English sonnet linking quatrains (ABAB BCBC CDCD) before a closing EE couplet.",
    },
  ];
  const picked = rng.pick(formBank);
  const openerFrame = rng.pick([
    `An unseen poem opening on the rhyme-word *'${sampleWord}'* follows the full scheme`,
    `Close reading a poem beginning with end-word *'${sampleWord}'* reveals the structural rhyme pattern`,
    `An exam passage anchored on the opening A-rhyme *'${sampleWord}'* maps out as`,
    `Scanning the end-words of an unseen text (A = *'${sampleWord}'*) produces the exact blueprint`,
    `Label the specific poetic form whose rhyme architecture (starting on *'${sampleWord}'*) reads`,
  ]);
  return {
    prompt: `${openerFrame}:\n\`${picked.code}\`\nIdentify this exact **poetic form**.`,
    answer: { type: "text", accept: picked.accept, display: picked.ans },
    solution: [
      picked.note,
      `Exact poetic form: **${picked.ans}**.`,
    ],
    hint: `Count the total letters (14 = sonnet variant; 19 = villanelle) and inspect whether the quatrains interlock, enclose (ABBA), or alternate (ABAB).`,
  };
}

export const drills: Drill[] = [
  {
    id: "4-poetry-and-drama.poetic-structure-metre",
    topicId: "4-poetry-and-drama",
    title: "Poetic Form, Metre & Lineation Terms",
    level: 1,
    ibLevel: "SL",
    guideRef: "poetic-form-metre-structure",
    generate(rng, tier) {
      return renderCardDrill(rng, tier, POETIC_STRUCTURE_CARDS, {
        t1: [
          "Name the poetic term defined as {X}.",
          "Which prosodic or structural term describes {X}?",
          "In IB poetry analysis, what term identifies {X}?",
        ],
        t2: [
          "Close-read this unseen poetic feature:\n{X}\nName the primary **structural or metrical term** foregrounded here.",
          "Inspect this unseen verse extract:\n{X}\nWhich precise **form, metre, or lineation term** applies?",
          "In a Paper 1 commentary on this example:\n{X}\nIdentify the exact **poetic architecture term**.",
        ],
        t3: [
          "Distinction check: {X}",
          "Higher-order prosody check: {X}",
          "IB Paper 1 precision test: {X}",
        ],
      });
    },
  },
  {
    id: "4-poetry-and-drama.imagery-sound-craft",
    topicId: "4-poetry-and-drama",
    title: "Figurative Imagery, Soundscapes & Persona",
    level: 1,
    ibLevel: "SL",
    guideRef: "poetic-imagery-sound-voice",
    generate(rng, tier) {
      return renderCardDrill(rng, tier, IMAGERY_SOUND_CARDS, {
        t1: [
          "Name the figurative, acoustic, or voice term defined as {X}.",
          "Which precise poetic craft term describes {X}?",
          "In unseen lyric commentary, what term denotes {X}?",
        ],
        t2: [
          "Close-read this unseen poetic extract:\n{X}\nIdentify the dominant **figurative, acoustic, or voice choice**.",
          "Examine this unseen lyric example:\n{X}\nName the exact **imagery, soundscape, or persona term**.",
          "For Band 5 Criterion B precision, identify the key poetic craft choice in:\n{X}",
        ],
        t3: [
          "Precision contrast: {X}",
          "Anti-technique-spotting check: {X}",
          "IB Paper 1 figurative/acoustic test: {X}",
        ],
      });
    },
  },
  {
    id: "4-poetry-and-drama.dramatic-staging-terms",
    topicId: "4-poetry-and-drama",
    title: "Drama as 3D Performance & Stagecraft",
    level: 2,
    ibLevel: "SL",
    guideRef: "dramatic-conventions-staging",
    generate(rng, tier) {
      return renderCardDrill(rng, tier, DRAMATIC_STAGING_CARDS, {
        t1: [
          "Name the dramatic staging convention defined as {X}.",
          "In IB drama analysis, what performance term describes {X}?",
          "Which theatrical craft term identifies {X}?",
        ],
        t2: [
          "Visualise this unseen stage moment:\n{X}\nName the key **staging or performance convention** at work.",
          "Read this unseen dramatic cue:\n{X}\nWhich precise **theatrical craft term** captures this choice?",
          "As a director analysing this moment:\n{X}\nIdentify the primary **performance device**.",
        ],
        t3: [
          "Stagecraft distinction: {X}",
          "Performance evaluation check: {X}",
          "IB drama commentary test: {X}",
        ],
      });
    },
  },
  {
    id: "4-poetry-and-drama.tragic-comic-arcs",
    topicId: "4-poetry-and-drama",
    title: "Subtext, Dialogue Dynamics & Tragic/Comic Arcs",
    level: 2,
    ibLevel: "SL",
    guideRef: "subtext-dialogue-tragedy-comedy",
    generate(rng, tier) {
      return renderCardDrill(rng, tier, TRAGIC_COMIC_CARDS, {
        t1: [
          "Name the dramatic dialogue or genre term defined as {X}.",
          "Which precise tragedy, comedy, or dialogue term describes {X}?",
          "In IB Literature drama analysis, what term identifies {X}?",
        ],
        t2: [
          "Analyse this unseen dramatic beat:\n{X}\nName the primary **dialogue, tragic, or comic term** illustrated.",
          "Inspect this theatrical scenario:\n{X}\nWhich exact **dramatic convention or Aristotelian term** applies?",
          "For an IB Paper 1 or Paper 2 drama essay, identify the precise concept operating in:\n{X}",
        ],
        t3: [
          "Genre & dialogue precision check: {X}",
          "Aristotelian & subtext distinction: {X}",
          "Advanced dramatic craft test: {X}",
        ],
      });
    },
  },
  {
    id: "4-poetry-and-drama.metre-rhyme-patterns",
    topicId: "4-poetry-and-drama",
    title: "Scansion, Syllable & Rhyme-Scheme Pattern Matching",
    level: 3,
    ibLevel: "SL",
    guideRef: "poetic-form-metre-structure",
    generate(rng, tier) {
      return generateMetreRhymeItem(rng, tier);
    },
  },
];
