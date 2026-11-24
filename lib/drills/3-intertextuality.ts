import type { Drill, DrillItem, Rng } from "./types.ts";

// Shared non-prescriptive fictional titles & forms so every generated scenario
// reads naturally while keeping strict zero-set-text neutrality.
const NOVEL_TITLES = [
  "*The Glass Harbour*",
  "*Salt and Ash*",
  "*Letters from the Floodplain*",
  "*The Clockmaker's Orchard*",
  "*Winter on the Pier*",
  "*A Map of Quiet Streets*",
  "*The Lantern Archive*",
  "*Houses Built on Chalk*",
] as const;

const PLAY_TITLES = [
  "*The Brass Threshold*",
  "*Three Chairs for Winter*",
  "*The Night Ferry*",
  "*Voices in the Courtyard*",
  "*The Unlit Parlour*",
  "*The Dockyard Trial*",
  "*Curtain Before Dawn*",
  "*The Porcelain Room*",
] as const;

const POEM_COLLECTIONS = [
  "*Tide-Line Elegies*",
  "*Notes from an Iron Bridge*",
  "*The Copper Conservatory*",
  "*Fragments of Rain*",
  "*Postcards from the Border*",
  "*Lanterns in Mist*",
] as const;

const MEMOIR_TITLES = [
  "*Returning to the Estuary*",
  "*A Suitcase of Receipts*",
  "*Margins of the Atlas*",
  "*Leaving the Timber Town*",
  "*Two Languages for Snow*",
  "*The Harbour Timetable*",
] as const;

const THEMATIC_PROMPTS = [
  "memory and guilt",
  "silence and power",
  "exile and belonging",
  "public duty versus private longing",
  "domestic confinement",
  "generational conflict",
  "ambition and moral compromise",
  "illusion versus reality",
] as const;

// ============================================================================
// DRILL 1: Identifying Intertextual Strategies
// ============================================================================
interface StrategyCase {
  scenario: (title: string, protagonist: string) => string;
  answer: string[];
  display: string;
  choicesTier: string;
  explanation: string;
  hint: string;
  trap?: { accept: string[]; feedback: string };
}

const PROTAGONISTS = ["Elena", "Tariq", "Mei", "Jonas", "Kavita", "Rafael", "Nadia", "Arthur"] as const;

const STRATEGY_TIER1: StrategyCase[] = [
  {
    scenario: (t, p) =>
      `In ${t}, ${p} stares at a failing business tower and remarks, "Our wax wings are already softening in the noon glare."`,
    answer: ["allusion", "explicit allusion", "local allusion", "mythic allusion"],
    display: "allusion",
    choicesTier: "allusion, parody, pastiche, motif, or writing back",
    explanation:
      "Referring briefly to 'wax wings' invokes the Greek myth of Icarus to compress hubris and impending downfall into a single line — an explicit **allusion**.",
    hint: "A brief, targeted echo of a famous mythic story ('wax wings' → Icarus).",
    trap: {
      accept: ["motif", "a motif"],
      feedback: "A single mythic reference here points outside the text to Icarus — that is an allusion, not an internal recurring motif.",
    },
  },
  {
    scenario: (t, p) =>
      `In ${t}, a comic chapter mimics gloomy nineteenth-century ghost stories by having ${p} try to brood in a tower while a cheerful housekeeper keeps offering warm scones.`,
    answer: ["parody", "a parody"],
    display: "parody",
    choicesTier: "allusion, parody, pastiche, motif, or writing back",
    explanation:
      "Imitating a recognisable Gothic style with exaggerated incongruity and humorous deflation exemplifies **parody**.",
    hint: "Notice the mocking, satirical distance puncturing gloomy genre clichés.",
    trap: {
      accept: ["pastiche", "a pastiche"],
      feedback: "Pastiche imitates neutrally or affectionately; here the comedic deflation clearly mocks Gothic excess — that is parody.",
    },
  },
  {
    scenario: (t, p) =>
      `In ${t}, the author affectionately recreates the fog-lit syntax and polite dialogue of 1890s detective tales as ${p} solves a harbour mystery, without mocking the genre.`,
    answer: ["pastiche", "a pastiche"],
    display: "pastiche",
    choicesTier: "allusion, parody, pastiche, motif, or writing back",
    explanation:
      "Reproducing an earlier period style affectionately for atmosphere without satirical mockery is **pastiche**.",
    hint: "Imitation of an earlier style carried out affectionately/neutrally rather than mockingly.",
    trap: {
      accept: ["parody", "a parody"],
      feedback: "Parody carries mocking or satirical bite; neutral/affectionate stylistic imitation is pastiche.",
    },
  },
  {
    scenario: (t, p) =>
      `Across five acts of ${t}, a brass key appears when ${p} inherits the house, rusts during the family dispute, and is finally dropped into the harbour at the climax.`,
    answer: ["motif", "a motif", "recurring motif"],
    display: "motif",
    choicesTier: "allusion, parody, pastiche, motif, or writing back",
    explanation:
      "A recurring concrete object (the brass key) whose symbolic resonance mutates across the work is a **motif**.",
    hint: "A recurring concrete image or object accumulating evolving thematic meaning within a text.",
  },
  {
    scenario: (t, p) =>
      `In ${t}, ${p} — an unnamed servant silenced in a famous colonial adventure novel — seizes first-person narration to expose the imperial cruelty left out of the original account.`,
    answer: ["writing back", "postcolonial writing back", "revisionary writing back"],
    display: "writing back",
    choicesTier: "allusion, parody, pastiche, motif, or writing back",
    explanation:
      "Re-centring a silenced marginalised voice to contest a canonical precursor's imperial ideology is revisionary **writing back**.",
    hint: "Two-word term for later authors answering and reframing canonical precursors from the margins.",
  },
  {
    scenario: (t, p) =>
      `In ${t}, ${p} calls the town's sealed courtyard "a miniature Eden with broken locks" just before the family's betrayal unfolds.`,
    answer: ["allusion", "explicit allusion", "local allusion", "biblical allusion"],
    display: "allusion",
    choicesTier: "allusion, parody, pastiche, motif, or writing back",
    explanation:
      "Evoking 'Eden' inside a single ironic phrase to foreshadow fallen innocence is an explicit biblical **allusion**.",
    hint: "A concise verbal echo pointing to a well-known biblical garden.",
  },
];

const STRATEGY_TIER2: StrategyCase[] = [
  {
    scenario: (t, p) =>
      `Without naming Homer once, the entire twelve-chapter plot of ${t} maps ${p}'s ten-year bureaucratic journey across border checkpoints back to an estranged spouse.`,
    answer: ["structural allusion", "a structural allusion", "architectural allusion"],
    display: "structural allusion",
    choicesTier: "explicit allusion, structural allusion, archetype, parody, pastiche, or writing back",
    explanation:
      "Modelling a whole work's chapter blueprint and cast on a precursor epic without naming it is **structural allusion**.",
    hint: "An echo that governs the entire narrative blueprint rather than a single phrase.",
    trap: {
      accept: ["explicit allusion", "local allusion"],
      feedback: "Explicit allusion lives inside a brief local reference; mirroring an entire plot architecture is structural allusion.",
    },
  },
  {
    scenario: (t, p) =>
      `In ${t}, ${p} embodies the universal cross-cultural figure of the clever trickster who outwits rigid kings using riddles, echoing folktales from four continents.`,
    answer: ["archetype", "an archetype"],
    display: "archetype",
    choicesTier: "explicit allusion, structural allusion, archetype, parody, pastiche, or writing back",
    explanation:
      "A universal cross-cultural character role recurring across unrelated traditions (such as the trickster) is an **archetype**.",
    hint: "Universal cross-cultural character pattern or mythic plot (not a single text's concrete prop).",
    trap: {
      accept: ["motif", "a motif"],
      feedback: "A motif is a recurring concrete textual detail (like keys or mirrors); a universal cross-cultural role is an archetype.",
    },
  },
  {
    scenario: (t, p) =>
      `In ${t}, a corrupt harbour official washes his hands at a sink while muttering to ${p}, "My palms are clean — let the council answer for the pier."`,
    answer: ["explicit allusion", "allusion", "local allusion", "biblical allusion"],
    display: "explicit allusion",
    choicesTier: "explicit allusion, structural allusion, archetype, parody, pastiche, or writing back",
    explanation:
      "Echoing Pontius Pilate's hand-washing in a brief, ironised moment is an **explicit allusion** (local allusion).",
    hint: "A brief, targeted precursor reference compressed into one speech/gesture.",
  },
  {
    scenario: (t, p) =>
      `In ${t}, the silenced ferryman from an ancient heroic epic interrupts the narrator to tell ${p} how the celebrated hero never paid for the winter crossing.`,
    answer: ["writing back", "revisionary writing back"],
    display: "writing back",
    choicesTier: "explicit allusion, structural allusion, archetype, parody, pastiche, or writing back",
    explanation:
      "Handing voice to an overlooked background labourer to indict heroic class erasure exemplifies revisionary **writing back**.",
    hint: "Two-word strategy where a marginal figure directly answers a canonical precursor.",
  },
  {
    scenario: (t, p) =>
      `In ${t}, ${p} writes overwrought love letters full of exaggerated fainting spells and swooning adjectives to ridicule sentimental eighteenth-century romance novels.`,
    answer: ["parody", "a parody"],
    display: "parody",
    choicesTier: "explicit allusion, structural allusion, archetype, parody, pastiche, or writing back",
    explanation:
      "Deliberately exaggerating sentimental romance tropes in order to ridicule their artificiality is **parody**.",
    hint: "Critical imitation using comic exaggeration to puncture a genre's clichés.",
  },
  {
    scenario: (t, p) =>
      `In ${t}, a postmodern montage blends authentic-sounding Victorian travel diaries and 1920s telegrams around ${p}'s voyage as affectionate stylistic collage without satire.`,
    answer: ["pastiche", "a pastiche"],
    display: "pastiche",
    choicesTier: "explicit allusion, structural allusion, archetype, parody, pastiche, or writing back",
    explanation:
      "Collaging recognisable period styles neutrally or affectionately without mocking them is **pastiche**.",
    hint: "Stylistic imitation or patchwork lacking the satirical edge of parody.",
  },
];

const STRATEGY_TIER3: StrategyCase[] = [
  {
    scenario: (t, p) =>
      `In ${t}, ${p} discovers every hallway mirrors the descent-to-the-underworld journey found across Mesopotamian, Greek, and Norse myth — without copying one specific book.`,
    answer: ["archetype", "an archetype"],
    display: "archetype",
    choicesTier: "structural allusion, archetype, subversion, parody, pastiche, or writing back",
    explanation:
      "The universal cross-cultural descent-to-the-underworld narrative pattern shared across unrelated mythologies is an **archetype**.",
    hint: "Notice it does NOT copy one named precursor work — it taps a universal mythic pattern.",
  },
  {
    scenario: (t, p) =>
      `In ${t}, the entire five-act play shadows the exact plot reversals and fatal misunderstandings of a canonical Renaissance tragedy, transposed into ${p}'s modern newsroom.`,
    answer: ["structural allusion", "a structural allusion"],
    display: "structural allusion",
    choicesTier: "structural allusion, archetype, subversion, parody, pastiche, or writing back",
    explanation:
      "Mirroring a single canonical precursor's full five-act plot architecture inside a modern setting is a **structural allusion**.",
    hint: "Unlike a brief verbal quote, the precursor text supplies the entire structural skeleton.",
  },
  {
    scenario: (t, p) =>
      `In ${t}, the opening three stanzas construct an idyllic romantic orchard for ${p} before the closing line slams into a cold corporate demolition permit, overturning the genre contract.`,
    answer: ["subversion", "genre subversion"],
    display: "subversion",
    choicesTier: "structural allusion, archetype, subversion, parody, pastiche, or writing back",
    explanation:
      "Activating a pastoral horizon of expectations only to shatter it into serious ideological critique is genre **subversion**.",
    hint: "Setting up a genre's rules clearly and then overturning them for sharp critical shock.",
  },
  {
    scenario: (t, p) =>
      `In ${t}, the demonised bride from a nineteenth-century European classic narrates her own tropical childhood alongside ${p}, compelling readers to re-read the original novel with ethical scepticism.`,
    answer: ["writing back", "postcolonial writing back", "feminist writing back", "revisionary writing back"],
    display: "writing back",
    choicesTier: "structural allusion, archetype, subversion, parody, pastiche, or writing back",
    explanation:
      "Reclaiming a demonised canonical character to unsettle imperial/patriarchal assumptions retrospectively is **writing back**.",
    hint: "Retrospectively destabilises how readers interpret the famous canonical precursor.",
  },
  {
    scenario: (t, p) =>
      `In ${t}, ${p}'s detective investigation faithfully adopts the clipped rhythm and rain-slicked metaphors of 1940s noir fiction as loving tribute rather than satire.`,
    answer: ["pastiche", "a pastiche"],
    display: "pastiche",
    choicesTier: "structural allusion, archetype, subversion, parody, pastiche, or writing back",
    explanation:
      "Honouring an iconic precursor style ('loving tribute rather than satire') exemplifies **pastiche**.",
    hint: "Check the authorial attitude: affectionate tribute without ironic mockery.",
  },
  {
    scenario: (t, p) =>
      `In ${t}, a mock-heroic epic devotes forty solemn lines of classical battle diction to ${p} wrestling with a jammed office printer, exposing inflated corporate ego.`,
    answer: ["parody", "a parody"],
    display: "parody",
    choicesTier: "structural allusion, archetype, subversion, parody, pastiche, or writing back",
    explanation:
      "Deploying lofty epic diction for a trivial office printer mishap uses ironic exaggeration and bathos — textbook **parody**.",
    hint: "Mock-heroic inflation that satirises pompous style and ego.",
  },
];

// ============================================================================
// DRILL 2: Genre-Convention & Subversion Matching
// ============================================================================
interface GenreCase {
  clue: (title: string, setting: string) => string;
  questionTail: string;
  answer: string[];
  display: string;
  hint: string;
  solution: string;
  trap?: { accept: string[]; feedback: string };
}

const WORK_FRAMES = [
  "an unseen Paper 1 passage",
  "a comparative study text",
  "a twentieth-century work",
  "a contemporary literary text",
  "a translated anthology extract",
  "an original unseen script",
  "a modern comparative work",
  "a newly published volume",
] as const;

const GENRE_TIER1: GenreCase[] = [
  {
    clue: (t, f) =>
      `${t} (${f}) opens with atmospheric gloom, ancestral secrets, an entrapped heroine, and an eerie double haunting locked corridors.`,
    questionTail: "Name the literary genre whose classical horizon of expectations is invoked (one or two words).",
    answer: ["gothic", "gothic fiction", "gothic novel"],
    display: "Gothic",
    hint: "Think ancestral estates, entrapment, atmospheric dread, and uncanny doubles.",
    solution: "Claustrophobic architecture, inherited secrets, and uncanny doubles are signature conventions of the **Gothic** genre.",
  },
  {
    clue: (t, f) =>
      `${t} (${f}) follows a naive teenager through moral trials, mentors, and hard-won self-knowledge toward mature reconciliation with adult society.`,
    questionTail: "Name the literary genre whose classical horizon of expectations is invoked (one word).",
    answer: ["bildungsroman", "coming-of-age", "coming of age"],
    display: "Bildungsroman",
    hint: "German loanword for a coming-of-age narrative charting moral maturation.",
    solution: "Tracing youthful naivety through moral trial toward mature self-knowledge defines the classical **Bildungsroman**.",
  },
  {
    clue: (t, f) =>
      `${t} (${f}) narrates rainstorms of yellow petals and a floating grandfather in a completely deadpan, matter-of-fact tone alongside real municipal elections.`,
    questionTail: "Name this two-word literary mode.",
    answer: ["magical realism", "magic realism"],
    display: "magical realism",
    hint: "Blends impossible events matter-of-factly into ordinary historical reality.",
    solution: "Deadpan narration of marvellous occurrences embedded seamlessly in sociopolitical reality defines **magical realism**.",
  },
  {
    clue: (t, f) =>
      `${t} (${f}) unfolds in fourteen tightly patterned lines of iambic pentameter that pivot sharply at line nine to complicate an initial declaration of devotion.`,
    questionTail: "Name this fixed poetic form (one word).",
    answer: ["sonnet", "petrarchan sonnet", "shakespearean sonnet"],
    display: "sonnet",
    hint: "Fourteen-line lyric architecture featuring a structural turn (volta).",
    solution: "Fourteen lines of disciplined metre pivoting at a structural turn (*volta*) define the **sonnet**.",
  },
  {
    clue: (t, f) =>
      `${t} (${f}) tracks a respected leader whose fatal error of judgement triggers an irreversible reversal of fortune, painful self-recognition, and solemn emotional purgation.`,
    questionTail: "Name this classical dramatic genre (one word).",
    answer: ["tragedy", "classical tragedy"],
    display: "tragedy",
    hint: "Aristotelian arc of *hamartia*, *peripeteia*, *anagnorisis*, and *catharsis*.",
    solution: "Downfall through *hamartia*, reversal (*peripeteia*), recognition (*anagnorisis*), and *catharsis* define classical **tragedy**.",
  },
  {
    clue: (t, f) =>
      `${t} (${f}) abandons smooth linear consolation for abrupt urban fragments, clashing registers, psychological interiority, and ironic post-industrial disillusionment.`,
    questionTail: "Name this two-word poetic tradition (*____ lyric*).",
    answer: ["modernist lyric", "modernism", "modernist", "modernist poetry"],
    display: "modernist lyric",
    hint: "Twentieth-century reaction against Romantic organic unity (e.g. Eliot's *Prufrock* [Example text — not a set text]).",
    solution: "Fragmented syntax, urban collage, and ironic detachment are hallmarks of the **modernist lyric**.",
  },
];

const GENRE_TIER2: GenreCase[] = [
  {
    clue: (t, f) =>
      `In ${t} (${f}), a spotless glass-walled office building produces suffocating dread and uncanny fractured reflections instead of a ruined midnight castle.`,
    questionTail: "Which classical genre's setting conventions are being deliberately subverted here?",
    answer: ["gothic", "gothic fiction"],
    display: "Gothic",
    hint: "Claustrophobia and uncanny reflections relocated from ruined castles into bright modernity.",
    solution: "Relocating uncanny claustrophobia from medieval ruins into clinical modern glass subverts **Gothic** conventions.",
  },
  {
    clue: (t, f) =>
      `In ${t} (${f}), a young graduate passes every elite exam only to lock away her sketchbook and celebrate becoming invisible in uniform grey.`,
    questionTail: "Which genre is subverted into an anti-____ coming-of-age critique?",
    answer: ["bildungsroman", "anti-bildungsroman", "anti bildungsroman"],
    display: "Bildungsroman",
    hint: "Traditional coming-of-age maturation inverted into conformity-driven self-erasure.",
    solution: "Turning social integration into creative self-erasure subverts the **Bildungsroman** (producing an *anti-Bildungsroman*).",
  },
  {
    clue: (t, f) =>
      `In ${t} (${f}), an idyllic orchard opening full of blossom and gentle bells snaps violently into concrete drainage, diesel fumes, and a wailing siren.`,
    questionTail: "Which classical nature-idealising genre is being subverted here (one word)?",
    answer: ["pastoral", "the pastoral", "pastoral tradition"],
    display: "pastoral",
    hint: "Tradition idealising serene rural retreat, shepherds, orchards, and harmony with nature.",
    solution: "Replacing serene rural sanctuary with diesel and sirens sharply subverts the **pastoral** tradition.",
  },
  {
    clue: (t, f) =>
      `In ${t} (${f}), an ordinary dockworker is crushed not by aristocratic hubris but by an automated shipping merger, ending in wordless exhaustion with no noble catharsis.`,
    questionTail: "Which classical dramatic genre is being renegotiated here?",
    answer: ["tragedy", "classical tragedy"],
    display: "tragedy",
    hint: "Aristotelian stature, *hamartia*, and cathartic closure rewired to critique economic forces.",
    solution: "Replacing noble *hamartia* and catharsis with systemic economic dispossession subverts classical **tragedy**.",
  },
  {
    clue: (t, f) =>
      `In ${t} (${f}), a fourteen-line grief poem fractures its rhythm and breaks off mid-sentence on line fourteen with an em-dash, withholding rhyming-couplet closure.`,
    questionTail: "Which fixed poetic genre is being subverted here?",
    answer: ["sonnet", "shakespearean sonnet"],
    display: "sonnet",
    hint: "Fourteen-line form classically sealed by a tidy rhyming couplet.",
    solution: "Breaking the fourteenth line with an em-dash refuses the tidy resolution expected of a **sonnet**.",
  },
  {
    clue: (t, f) =>
      `In ${t} (${f}), a fourteen-line love lyric honours every rule of metre, octave-sestet balance, and sincere devotion to harness centuries of ritual solemnity.`,
    questionTail: "Is this stance best classified as `adherence`, `parody`, or `subversion`?",
    answer: ["adherence", "fulfilment", "fulfillment"],
    display: "adherence",
    hint: "Does the writer mock the form, overturn it, or work faithfully within its contract?",
    solution: "Working faithfully inside inherited conventions to harness their emotional weight is **adherence**.",
    trap: {
      accept: ["subversion", "parody"],
      feedback: "Here the poem honours every metrical and tonal rule sincerely rather than mocking or inverting them — that is adherence.",
    },
  },
];

const GENRE_TIER3: GenreCase[] = [
  {
    clue: (t, f) =>
      `In ${t} (${f}), the protagonist's fatal error of judgement sets off the tragic collapse.`,
    questionTail: "Type the exact Greek Aristotelian term for this tragic error of judgement.",
    answer: ["hamartia"],
    display: "hamartia",
    hint: "Starts with 'h' — distinct from *hubris* (excessive pride) and *peripeteia* (reversal).",
    solution: "**Hamartia** names the protagonist's decisive error of judgement driving classical tragic downfall.",
    trap: {
      accept: ["anagnorisis", "catharsis", "peripeteia"],
      feedback: "Careful: *peripeteia* is reversal, *anagnorisis* is recognition, and *catharsis* is emotional purgation — the fatal error is *hamartia*.",
    },
  },
  {
    clue: (t, f) =>
      `In ${t} (${f}), the tragic hero suddenly grasps the devastating truth about his own actions just as ruin becomes irreversible.`,
    questionTail: "Type the exact Greek Aristotelian term for this moment of tragic recognition.",
    answer: ["anagnorisis"],
    display: "anagnorisis",
    hint: "Starts with 'ana-' — literally meaning 'recognition' or 'discovery'.",
    solution: "**Anagnorisis** is the pivotal moment of painful self-recognition that modern anti-tragedies often withhold.",
    trap: {
      accept: ["hamartia", "catharsis", "peripeteia"],
      feedback: "That is a different tragic stage: the moment of sudden recognition/self-knowledge is *anagnorisis*.",
    },
  },
  {
    clue: (t, f) =>
      `In ${t} (${f}), a subversive modern lyric delays its decisive emotional pivot from line nine all the way until the final jagged half-line.`,
    questionTail: "Type the exact Italian poetic term for a sonnet's structural turn.",
    answer: ["volta", "the volta"],
    display: "volta",
    hint: "Five-letter Italian word literally meaning 'turn'.",
    solution: "Delaying or dislocating the **volta** disrupts a sonnet reader's expectation of balanced resolution.",
  },
  {
    clue: (t, f) =>
      `In ${t} (${f}), an ending refuses emotional purgation and cleansing closure so the theatre audience departs politically unsettled.`,
    questionTail: "Type the exact Greek Aristotelian term for the emotional purgation being withheld.",
    answer: ["catharsis"],
    display: "catharsis",
    hint: "Starts with 'c' — pity and fear purged at the close of classical tragedy.",
    solution: "Withholding **catharsis** denies spectators comfortable release, turning theatrical discomfort into social critique.",
    trap: {
      accept: ["hamartia", "anagnorisis", "peripeteia"],
      feedback: "The cleansing emotional release classically felt by the audience at the end of a tragedy is *catharsis*.",
    },
  },
  {
    clue: (t, f) =>
      `In ${t} (${f}), Hans Robert Jauss's reception framework explains why readers feel an acute jolt when a calm pastoral opening turns bureaucratic.`,
    questionTail: "Type the three-word critical phrase Jauss coined for the reader's inherited generic expectations.",
    answer: ["horizon of expectations", "the horizon of expectations", "erwartungshorizont"],
    display: "horizon of expectations",
    hint: "Three words: *horizon of ____*.",
    solution: "Jauss's **horizon of expectations** explains why subversions generate their sharpest interpretive shock.",
  },
  {
    clue: (t, f) =>
      `In ${t} (${f}), a coming-of-age narrative systematically reverses youthful idealism into compliant institutional numbness.`,
    questionTail: "Type the hyphenated literary term for this inverted coming-of-age genre.",
    answer: ["anti-bildungsroman", "anti bildungsroman", "antibildungsroman"],
    display: "anti-Bildungsroman",
    hint: "Prefix *anti-* attached to the German coming-of-age novel term.",
    solution: "An **anti-Bildungsroman** subverts traditional maturation narratives by presenting adult integration as self-erasure.",
  },
];

// ============================================================================
// DRILL 3: Integrated vs Block Comparative Architecture Diagnosis
// ============================================================================
const ARCHITECTURE_DIAGNOSES_T2 = [
  {
    makeDesc: (a: string, b: string, th: string) =>
      `Paper 2 draft on ${th}: Paragraphs 1–2 analyse ${a} exclusively (450 words); Paragraphs 3–4 analyse ${b} exclusively (440 words); Conclusion adds one line saying both works share the theme.`,
    answer: ["block structure", "block", "block-by-block", "block by block", "silo", "silos"],
    display: "block structure",
    hint: "Two separate halves ('Text A then Text B') glued together at the end.",
    solution: "Separating Work A and Work B into isolated halves is weak **block structure** (block-by-block silos), capping Criteria A, B, and C.",
  },
  {
    makeDesc: (a: string, b: string, th: string) =>
      `Paper 2 paragraph on ${th}: 210 words of rich close reading on ${a}, followed by a single 12-word closing sentence noting "${b} also shows this."`,
    answer: ["imbalance", "unbalanced", "text imbalance", "uneven weighting"],
    display: "imbalance",
    hint: "Compare the analytical space given to Work A (~95%) versus Work B (~5%).",
    solution: "Giving one text token coverage creates severe **imbalance**, damaging comparative evaluation across Criteria A and B (aim for ~50/50).",
  },
  {
    makeDesc: (a: string, b: string, th: string) =>
      `Paper 2 paragraph on ${th} opens: "In ${a}, the protagonist argues with his uncle at dinner, leaves town by train, and writes a letter home in Chapter 4."`,
    answer: ["plot summary", "plot retelling", "summary", "narration"],
    display: "plot summary",
    hint: "Is the writer evaluating authorial craft, or merely retelling what happens chronologically?",
    solution: "Listing story events instead of analysing form-specific craft is **plot summary**, keeping Criteria A and B in lower bands.",
  },
  {
    makeDesc: (a: string, b: string, th: string) =>
      `Paper 2 thesis on ${th}: "Both ${a} and ${b} prove that society is unfair and characters suffer greatly because of it."`,
    answer: ["flat similarity", "vague similarity", "superficial similarity", "reductive similarity"],
    display: "flat similarity",
    hint: "The thesis lumps both works into one vague slogan without any *divergence within similarity*.",
    solution: "Treating both texts as saying the exact same cliché is **flat similarity** — upgrade by contrasting craft, tone, and divergent nuance.",
  },
  {
    makeDesc: (a: string, b: string, th: string) =>
      `Paper 2 comparison on ${th} claims a 1620s honour tragedy (${a}) and a 2020s dystopian novel (${b}) "both show strict parents ruining modern teenagers' personal freedom."`,
    answer: ["anachronism", "anachronistic flattening", "historical flattening"],
    display: "anachronistic flattening",
    hint: "Projecting twenty-first-century social assumptions backward onto a seventeenth-century text.",
    solution: "Erasing distinct historical contexts of production commits **anachronistic flattening**.",
  },
] as const;

const CAPBS_STAGES = [
  {
    code: "C",
    name: "conceptual claim",
    accept: ["conceptual claim", "c", "topic sentence", "conceptual topic sentence"],
    makeSample: (a: string, b: string, th: string) =>
      `"While both ${a} and ${b} expose ${th} as a quiet instrument of control, the former stages resistance visibly whereas the latter buries rebellion inside private memory."`,
    explanation: "This opening sentence establishes a conceptual tension framing BOTH texts simultaneously — **C (conceptual claim)**.",
  },
  {
    code: "A",
    name: "work a craft",
    accept: ["work a craft", "a", "work a", "text a craft"],
    makeSample: (a: string, _b: string, th: string) =>
      `"In ${a}, tight downstage lighting and a five-second pause before the doorway make ${th} physically oppressive for the live audience."`,
    explanation: "Close evaluation of the first work's medium-specific craft and audience effect is **A (Work A craft)**.",
  },
  {
    code: "P",
    name: "precision pivot",
    accept: ["precision pivot", "p", "pivot", "comparative pivot", "precision comparative pivot"],
    makeSample: (_a: string, b: string) =>
      `"Conversely, pushing this critique from public space into interior guilt, ${b}..."`,
    explanation: "Bridging Work A cleanly into Work B with a calibrated logical connective is **P (precision pivot)**.",
  },
  {
    code: "B",
    name: "work b craft",
    accept: ["work b craft", "b", "work b", "text b craft"],
    makeSample: (_a: string, b: string, th: string) =>
      `"${b} deploys fragmented free indirect discourse and recurring temporal ellipses to trace how ${th} erodes the narrator's certainty from within."`,
    explanation: "Balanced medium-specific close analysis of the second work's authorial craft is **B (Work B craft)**.",
  },
  {
    code: "S",
    name: "synthesis",
    accept: ["synthesis", "s", "evaluative synthesis", "comparative synthesis"],
    makeSample: (a: string, b: string, th: string) =>
      `"Ultimately, juxtaposing ${a}'s theatrical exposure against ${b}'s quiet interior erosion reveals why ${th} operates both externally and psychologically."`,
    explanation: "Stepping back at the paragraph's end to evaluate *why* the divergence illuminates the prompt is **S (synthesis)**.",
  },
] as const;

// ============================================================================
// DRILL 4: Precision Comparative Connectives
// ============================================================================
interface ConnectivePair {
  clauseA: (a: string, th: string) => string;
  clauseB: (b: string, th: string) => string;
  relationLabel: string;
  answer: string[];
  display: string;
  hint: string;
  explanation: string;
  trap?: { accept: string[]; feedback: string };
}

const CONNECTIVE_CASES: Record<1 | 2 | 3, ConnectivePair[]> = {
  1: [
    {
      clauseA: (a, th) => `${a} stages ${th} through harsh public confrontation`,
      clauseB: (b) => `${b} renders the same tension inside muted interior monologue`,
      relationLabel: "direct contrast inside one sentence (use `whereas`, `conversely`, or `analogously`)",
      answer: ["whereas", "while"],
      display: "whereas",
      hint: "Conjunction joining two contrasting clauses inside a single sentence.",
      explanation: "Direct structural contrast inside one sentence (public confrontation vs muted monologue) calls for **whereas**.",
      trap: {
        accept: ["analogously", "similarly"],
        feedback: "Check direction: public confrontation and muted monologue are opposites, not parallels — use 'whereas'.",
      },
    },
    {
      clauseA: (a, th) => `Just as ${a} externalises ${th} via a five-second stage blackout`,
      clauseB: (b) => `${b} ____ arrests the reader with stark white space after a half-line`,
      relationLabel: "cross-form parallel manoeuvre (use `whereas`, `conversely`, or `analogously`)",
      answer: ["analogously", "correspondingly", "similarly"],
      display: "analogously",
      hint: "Precision adverb showing functional equivalence across two different literary forms.",
      explanation: "Two different forms achieving parallel dramatic silence call for **analogously**.",
      trap: {
        accept: ["conversely", "whereas"],
        feedback: "Notice 'Just as...': both choices create arresting silence across different forms — that is a parallel ('analogously').",
      },
    },
    {
      clauseA: (a, th) => `${a} closes on a blazing courtroom speech exposing ${th};`,
      clauseB: (b) => `____, ${b} cuts off mid-sentence inside a silent stairwell`,
      relationLabel: "mirror-opposite resolution across a semicolon (use `whereas`, `conversely`, or `analogously`)",
      answer: ["conversely", "by contrast", "inversely"],
      display: "conversely",
      hint: "Sentence-level adverb signalling a direct structural mirror-reversal.",
      explanation: "Public verbal climax vs truncated private silence is a direct mirror-opposite — signalled cleanly by **conversely**.",
      trap: {
        accept: ["analogously", "similarly"],
        feedback: "A blazing speech and a mid-sentence cutoff are structural opposites — use 'conversely'.",
      },
    },
  ],
  2: [
    {
      clauseA: (a, th) => `While ${a} invokes ${th} through claustrophobic domestic props`,
      clauseB: (b) => `${b} ____ fractures syntax to evoke equivalent psychological entrapment`,
      relationLabel: "parallel cross-form craft (choose: `whereas`, `conversely`, `analogously`, `moreover`, `nonetheless`)",
      answer: ["analogously", "correspondingly", "similarly"],
      display: "analogously",
      hint: "Domestic props and fractured syntax both generate entrapment in different mediums.",
      explanation: "**Analogously** links parallel medium-specific choices producing equivalent psychological entrapment.",
    },
    {
      clauseA: (a, th) => `${a} critiques ${th} by letting its narrator doubt official history;`,
      clauseB: (b) => `____, ${b} radicalises that scepticism by staging two contradictory endings simultaneously`,
      relationLabel: "escalation / pushing a shared critique further (choose: `whereas`, `conversely`, `analogously`, `moreover`, `nonetheless`)",
      answer: ["moreover", "furthermore", "pushing this further"],
      display: "moreover",
      hint: "Work B does not contradict Work A — it intensifies and extends the same scepticism further.",
      explanation: "**Moreover** (or *furthermore*) signals intensification as Work B pushes Work A's critique into bolder formal terrain.",
      trap: {
        accept: ["conversely", "whereas"],
        feedback: "Work B extends and intensifies Work A's scepticism rather than reversing it — use 'moreover'.",
      },
    },
    {
      clauseA: (a, th) => `${a} appears outwardly to satisfy traditional tragic closure around ${th};`,
      clauseB: () => `____, its bitter final stage direction quietly undermines any sense of moral harmony`,
      relationLabel: "concessive qualification / tonal twist (choose: `whereas`, `conversely`, `analogously`, `moreover`, `nonetheless`)",
      answer: ["nonetheless", "nevertheless", "however"],
      display: "nonetheless",
      hint: "Concessive adverb meaning 'despite that outward appearance...'.",
      explanation: "**Nonetheless** (or *nevertheless* / *however*) pivots cleanly from outward compliance to underlying ironic subversion.",
    },
    {
      clauseA: (a, th) => `${a} softens ${th} through elegiac pastoral imagery`,
      clauseB: (b) => `${b} sharpens the wound through jagged urban dissonance`,
      relationLabel: "single-sentence divergence within similarity (choose: `whereas`, `conversely`, `analogously`, `moreover`, `nonetheless`)",
      answer: ["whereas", "while"],
      display: "whereas",
      hint: "Contrastive conjunction joining soft elegiac imagery directly against jagged urban dissonance.",
      explanation: "**Whereas** binds two sharply opposing stylistic treatments into a single comparative claim.",
    },
  ],
  3: [
    {
      clauseA: (a, th) => `${a} grants its protagonist brief cathartic self-recognition regarding ${th};`,
      clauseB: (b) => `____, ${b} withholds insight completely so the protagonist repeats the exact opening mistake`,
      relationLabel: "sharp structural inversion (type one precision connective: `whereas`, `conversely`, `analogously`, `nonetheless`, `moreover`)",
      answer: ["conversely", "inversely", "by contrast"],
      display: "conversely",
      hint: "Brief recognition versus complete denial of insight after a semicolon.",
      explanation: "**Conversely** precisely marks the mirror-opposite structural arc (cathartic insight vs cyclical blindness).",
    },
    {
      clauseA: (a, th) => `Just as ${a}'s shifting focalisation exposes unreliability around ${th}`,
      clauseB: (b) => `${b} ____ uses overlapping stage lighting and contradictory witness testimonies to destabilise truth`,
      relationLabel: "cross-form functional equivalence (type one precision connective: `whereas`, `conversely`, `analogously`, `nonetheless`, `moreover`)",
      answer: ["analogously", "correspondingly"],
      display: "analogously",
      hint: "Shifting focalisation in Prose and contradictory staging in Drama perform parallel epistemic work.",
      explanation: "**Analogously** foregrounds functional equivalence between Prose focalisation and Dramatic staging.",
    },
    {
      clauseA: (a, th) => `${a} exposes ${th} through biting comedic parody of official speeches;`,
      clauseB: (b) => `____, ${b} deepens the indictment by re-centring the silent clerks harmed by those decrees`,
      relationLabel: "intensification / conceptual deepening (type one precision connective: `whereas`, `conversely`, `analogously`, `nonetheless`, `moreover`)",
      answer: ["moreover", "furthermore"],
      display: "moreover",
      hint: "Work B builds upon and deepens Work A's indictment from a more humanly urgent angle.",
      explanation: "**Moreover** bridges from satirical exposure into deepened ethical indictment without falsely claiming opposition.",
    },
    {
      clauseA: (a, th) => `${a} frames ${th} within a gentle nostalgic memoir voice`,
      clauseB: (b) => `${b} confronts the reader with stark, unmediated theatrical silence`,
      relationLabel: "divergence within similarity (type one precision connective: `whereas`, `conversely`, `analogously`, `nonetheless`, `moreover`)",
      answer: ["whereas", "while"],
      display: "whereas",
      hint: "Links gentle retrospective narration against stark theatrical silence inside one sentence.",
      explanation: "**Whereas** (or *while*) sharpens the contrast in medium and tonal immediacy inside a single sentence.",
    },
    {
      clauseA: (a, th) => `${a} faithfully preserves classical sonnet symmetry while mourning ${th};`,
      clauseB: () => `____, its jarring final half-rhyme refuses the emotional consolation the form seems to promise`,
      relationLabel: "concessive ironic undercut (type one precision connective: `whereas`, `conversely`, `analogously`, `nonetheless`, `moreover`)",
      answer: ["nonetheless", "nevertheless", "however"],
      display: "nonetheless",
      hint: "Signals 'even though the classical symmetry holds, a subtle acoustic refusal undercuts it'.",
      explanation: "**Nonetheless** captures nuanced tension between outward formal adherence and subtle acoustic resistance.",
    },
  ],
};

// ============================================================================
// DRILL 5: Cross-Form Craft-Pair Matching
// ============================================================================
interface CrossFormCase {
  effect: string;
  sourceForm: string;
  sourceDevice: string;
  targetForm: string;
  targetClue: string;
  answer: string[];
  display: string;
  hint: string;
  explanation: string;
  trap?: { accept: string[]; feedback: string };
}

const CROSS_FORM_T1: CrossFormCase[] = [
  {
    effect: "physical and emotional estrangement",
    sourceForm: "Prose Fiction",
    sourceDevice: "wide narrative psychic distance",
    targetForm: "Drama",
    targetClue: "meaningful physical spacing between actors on stage (1 word)",
    answer: ["proxemics", "proxemic"],
    display: "proxemics",
    hint: "Derived from 'proximity' — how actors are positioned across stage space.",
    explanation: "In Drama, **proxemics** externalises emotional distance visually on stage, paralleling narrative psychic distance in Prose Fiction.",
  },
  {
    effect: "unspoken resentment beneath polite surfaces",
    sourceForm: "Prose Fiction",
    sourceDevice: "ironic narrative understatement",
    targetForm: "Drama",
    targetClue: "hidden meaning concealed beneath polite spoken lines (1 word)",
    answer: ["subtext"],
    display: "subtext",
    hint: "Literally 'under the text' — what characters mean without stating aloud.",
    explanation: "**Subtext** lets dramatic dialogue hum with unspoken tension, functioning alongside prose irony.",
  },
  {
    effect: "direct access to a character's secret inner conflict",
    sourceForm: "Drama",
    sourceDevice: "solitary stage soliloquy",
    targetForm: "Prose Fiction",
    targetClue: "blending a character's inner voice seamlessly into third-person narration (3 words)",
    answer: ["free indirect discourse", "free indirect speech", "free indirect style"],
    display: "free indirect discourse",
    hint: "Three words: *free ____ ____*.",
    explanation: "**Free indirect discourse** grants prose readers intimate interior access analogous to Drama's solitary soliloquy.",
  },
  {
    effect: "a sudden mid-line arrest or emotional hesitation",
    sourceForm: "Drama",
    sourceDevice: "a tense three-second stage pause",
    targetForm: "Poetry",
    targetClue: "a strong deliberate pause inside a poetic line marked by punctuation (1 word)",
    answer: ["caesura", "a caesura"],
    display: "caesura",
    hint: "Seven-letter poetic term beginning with 'c' for an internal mid-line break.",
    explanation: "A poetic **caesura** interrupts rhythmic flow on the page much as a timed silence arrests live dialogue on stage.",
    trap: {
      accept: ["enjambment"],
      feedback: "Enjambment runs a line continuously over a line break; a deliberate internal pause inside a line is a caesura.",
    },
  },
  {
    effect: "spilling, unstoppable emotional momentum",
    sourceForm: "Prose Fiction",
    sourceDevice: "breathless run-on stream-of-consciousness syntax",
    targetForm: "Poetry",
    targetClue: "running a grammatical clause across a line break without end punctuation (1 word)",
    answer: ["enjambment", "enjambement"],
    display: "enjambment",
    hint: "Poetic term beginning with 'e' for carrying syntax continuously across line endings.",
    explanation: "**Enjambment** drives kinetic overflow across line breaks, mirroring breathless prose syntax.",
    trap: {
      accept: ["caesura"],
      feedback: "Caesura pauses inside a line; flowing syntax across a line break without punctuation is enjambment.",
    },
  },
  {
    effect: "intrusive past memory interrupting the present",
    sourceForm: "Drama",
    sourceDevice: "expressionist amber lighting cues and ghostly sound echoes",
    targetForm: "Prose Fiction",
    targetClue: "a formal narrative flashback shifting backward in chronology (1 word)",
    answer: ["analepsis", "flashback"],
    display: "analepsis",
    hint: "Greek narratological term paired opposite *prolepsis* (also accepts 'flashback').",
    explanation: "**Analepsis** (flashback) fractures linear prose chronology just as expressionist lighting/sound shifts fracture stage time.",
    trap: {
      accept: ["prolepsis"],
      feedback: "Prolepsis jumps forward (foreshadowing/flashforward); leaping backward into memory is analepsis.",
    },
  },
];

const CROSS_FORM_T2: CrossFormCase[] = [
  ...CROSS_FORM_T1.slice(0, 3),
  {
    effect: "an abrupt shift in argument or emotional stance",
    sourceForm: "Literary Non-Fiction",
    sourceDevice: "rhetorical antithesis pivoting an essay's thesis",
    targetForm: "Poetry",
    targetClue: "the structural turn in a sonnet or lyric shifting tone/thought (1 word)",
    answer: ["volta", "the volta"],
    display: "volta",
    hint: "Italian poetic term meaning 'turn'.",
    explanation: "The poetic **volta** pivots argument and emotion concisely, paralleling rhetorical antithesis in an essay.",
  },
  {
    effect: "critical distance between past naivety and present wisdom",
    sourceForm: "Prose Fiction",
    sourceDevice: "ironic older first-person narrator looking back",
    targetForm: "Literary Non-Fiction",
    targetClue: "the reflective voice separating the wiser writer from their younger experiencing self (2 words)",
    answer: ["retrospective persona", "retrospective voice", "persona"],
    display: "retrospective persona",
    hint: "Two words: *retrospective ____*.",
    explanation: "A **retrospective persona** enables memoirists to interrogate memory self-consciously, paralleling retrospective fiction narration.",
  },
  {
    effect: "dread when the audience knows a danger a character misses",
    sourceForm: "Prose Fiction",
    sourceDevice: "shifting focalisation revealing secret deceit before returning to a naive mind",
    targetForm: "Drama",
    targetClue: "a gap in knowledge between spectators and characters on stage (2 words)",
    answer: ["dramatic irony"],
    display: "dramatic irony",
    hint: "Two words: *____ irony* (distinct from verbal irony).",
    explanation: "**Dramatic irony** creates theatrical dread through audience knowledge gaps, mirrored in Prose via shifting focalisation.",
    trap: {
      accept: ["verbal irony", "situational irony"],
      feedback: "When the audience possesses decisive knowledge concealed from a character on stage, that is specifically dramatic irony.",
    },
  },
];

const CROSS_FORM_T3: CrossFormCase[] = [
  {
    effect: "deliberate concealment of traumatic events",
    sourceForm: "Drama",
    sourceDevice: "an abrupt mid-sentence blackout cutting off confession",
    targetForm: "Prose Fiction",
    targetClue: "deliberate narrative omission skipping over a painful stretch of time (1 word)",
    answer: ["ellipsis", "narrative ellipsis"],
    display: "ellipsis",
    hint: "Narratological term (also used for '...') naming a deliberate temporal gap or omission.",
    explanation: "Narrative **ellipsis** withholds traumatic detail on the page analogously to a sudden theatrical blackout.",
  },
  {
    effect: "private truth exposed aloud while other characters remain unaware",
    sourceForm: "Prose Fiction",
    sourceDevice: "interior monologue framed by third-person limited focalisation",
    targetForm: "Drama",
    targetClue: "a speech delivered alone on stage revealing unfiltered inner thought (1 word)",
    answer: ["soliloquy", "a soliloquy"],
    display: "soliloquy",
    hint: "Distinct from a brief *aside* whispered while others stand nearby.",
    explanation: "A **soliloquy** externalises unguarded interiority for live spectators, corresponding to interior focalisation in Prose.",
    trap: {
      accept: ["aside", "monologue"],
      feedback: "Look closely: a character speaking thoughts aloud *alone* on stage is specifically a soliloquy (not an aside or public monologue).",
    },
  },
  {
    effect: "building moral urgency through rhythmic syntactic repetition",
    sourceForm: "Poetry",
    sourceDevice: "a recurring stanzaic refrain hammering home grief",
    targetForm: "Literary Non-Fiction",
    targetClue: "deliberate repetition of an opening word or phrase across successive clauses (1 word)",
    answer: ["anaphora"],
    display: "anaphora",
    hint: "Classical rhetorical term beginning with 'ana-' for repeated clause openings.",
    explanation: "**Anaphora** builds rhetorical cadence and ethical weight in speeches/essays analogously to a poetic refrain.",
    trap: {
      accept: ["epiphora", "epistrophe"],
      feedback: "Epiphora/epistrophe repeats words at the *end* of clauses; repeating *opening* phrases is anaphora.",
    },
  },
  {
    effect: "rapid verbal combat exposing fractured trust",
    sourceForm: "Prose Fiction",
    sourceDevice: "clipped, abrupt paratactic sentences devoid of smooth conjunctions",
    targetForm: "Drama",
    targetClue: "rapid-fire alternating single lines of sparring dialogue (1 word)",
    answer: ["stichomythia"],
    display: "stichomythia",
    hint: "Classical Greek theatrical term starting with 'stich-' for rapid alternating single-line exchanges.",
    explanation: "**Stichomythia** accelerates verbal tension line by line on stage, paralleling terse parataxis in Prose Fiction.",
  },
  {
    effect: "isolating an individual visually inside institutional scrutiny",
    sourceForm: "Poetry",
    sourceDevice: "a single orphaned word isolated on its own indented line",
    targetForm: "Drama",
    targetClue: "focused theatrical illumination separating one actor from surrounding shadow (1 or 2 words)",
    answer: ["stage lighting", "spotlighting", "spotlight", "lighting"],
    display: "spotlighting",
    hint: "Visual theatrical tool using focused illumination to trap or single out a performer.",
    explanation: "Focused **spotlighting** (or *stage lighting*) isolates a figure visually on stage much as an orphaned poetic line isolates a word on the page.",
  },
  {
    effect: "filtering every sensory detail through a single biased subjectivity",
    sourceForm: "Poetry",
    sourceDevice: "an unreliable dramatic monologue speaker exposing blind spots",
    targetForm: "Prose Fiction",
    targetClue: "Genette's term for 'who sees' — the lens filtering narrative perception (1 word)",
    answer: ["focalisation", "focalization"],
    display: "focalisation",
    hint: "Derived from 'focus' — distinguishes *who perceives* from *who speaks*.",
    explanation: "Limited **focalisation** traps readers inside one subjective perception, paralleling the self-revealing persona of a dramatic monologue.",
  },
];

// ============================================================================
// EXPORTED 5 DRILLS
// ============================================================================
export const drills: Drill[] = [
  // 1. Intertextual Strategy Identification (Level 1)
  {
    id: "3-intertextuality.intertextual-strategy",
    topicId: "3-intertextuality",
    title: "Identify the Intertextual Strategy",
    level: 1,
    ibLevel: "SL",
    guideRef: "allusion-motif-dialogue",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const pool = tier === 1 ? STRATEGY_TIER1 : tier === 2 ? STRATEGY_TIER2 : STRATEGY_TIER3;
      const item = rng.pick(pool);
      const title = rng.pick([...NOVEL_TITLES, ...PLAY_TITLES]);
      const protagonist = rng.pick(PROTAGONISTS);
      const lead = rng.pick([
        "Classify the primary intertextual strategy illustrated below:",
        "Identify the exact intertextual device operating in this unseen scenario:",
        "Which AoE 3 intertextual strategy best describes this literary manoeuvre?",
      ]);
      const prompt = `${lead}\n\n${item.scenario(title, protagonist)}\n\n*(Type one: ${item.choicesTier}.)*`;
      return {
        prompt,
        answer: { type: "text", accept: item.answer, display: item.display },
        hint: item.hint,
        traps: item.trap ? [{ spec: { type: "text", accept: item.trap.accept }, feedback: item.trap.feedback }] : undefined,
        solution: [
          `Identify what the text does with prior voices, conventions, or internal imagery.`,
          item.explanation,
        ],
      };
    },
  },

  // 2. Genre-Convention & Subversion Matching (Level 1)
  {
    id: "3-intertextuality.genre-convention-match",
    topicId: "3-intertextuality",
    title: "Genre Conventions & Subversion Match",
    level: 1,
    ibLevel: "SL",
    guideRef: "conventions-traditions-subversion",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const pool = tier === 1 ? GENRE_TIER1 : tier === 2 ? GENRE_TIER2 : GENRE_TIER3;
      const item = rng.pick(pool);
      const title = rng.pick([...NOVEL_TITLES, ...PLAY_TITLES, ...POEM_COLLECTIONS]);
      const frame = rng.pick(WORK_FRAMES);
      const prompt = `${item.clue(title, frame)}\n\n${item.questionTail}`;
      return {
        prompt,
        answer: { type: "text", accept: item.answer, display: item.display },
        hint: item.hint,
        traps: item.trap ? [{ spec: { type: "text", accept: item.trap.accept }, feedback: item.trap.feedback }] : undefined,
        solution: [
          `Match the textual clues against Jauss's horizon of expectations for classical genres.`,
          item.solution,
        ],
      };
    },
  },

  // 3. Integrated vs Block Comparative Architecture Diagnosis (Level 2)
  {
    id: "3-intertextuality.comparative-architecture",
    topicId: "3-intertextuality",
    title: "Paper 2 Architecture & C-A-P-B-S Diagnosis",
    level: 2,
    ibLevel: "SL",
    guideRef: "comparative-synthesis-architecture",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const workA = rng.pick(PLAY_TITLES);
      const workB = rng.pick(NOVEL_TITLES);
      const theme = rng.pick(THEMATIC_PROMPTS);

      if (tier === 1) {
        const isIntegrated = rng.bool(0.5);
        const angle1 = rng.pick([
          "initial conformity to institutional rules",
          "spatial thresholds signalling exclusion",
          "masked dialogue concealing betrayal",
          "early illusions of autonomy",
        ]);
        const angle2 = rng.pick([
          "climactic breakdown of trust",
          "divergent attitudes toward closure",
          "unspoken guilt reshaping identity",
          "withheld catharsis at the resolution",
        ]);
        if (isIntegrated) {
          const prompt = `Inspect this Paper 2 outline on **${theme}** comparing ${workA} and ${workB}:\n- Intro: Divergence-within-similarity thesis braiding both works\n- Body 1: ${angle1} (${workA} craft *whereas* ${workB} craft)\n- Body 2: ${angle2} (${workA} *conversely* paired with ${workB})\n\nClassify this architecture — type \`integrated\` or \`block\`.`;
          return {
            prompt,
            answer: { type: "text", accept: ["integrated", "point-by-point", "point by point", "integrated point-by-point"], display: "integrated" },
            hint: "Check whether both works appear together inside every conceptual body paragraph.",
            traps: [
              {
                spec: { type: "text", accept: ["block", "block-by-block"] },
                feedback: "Look closely: each body paragraph weaves both works around a shared conceptual angle — that is integrated structure, not block.",
              },
            ],
            solution: [
              "Every body paragraph focuses on a shared conceptual angle and braids both works together with precision connectives.",
              "This is **integrated** (point-by-point) Paper 2 architecture, maximising Criteria A, B, and C.",
            ],
          };
        }
        const prompt = `Inspect this Paper 2 outline on **${theme}** comparing ${workA} and ${workB}:\n- Intro: Both works explore ${theme}\n- Body 1–2: Full analysis of ${angle1} and ${angle2} in ${workA} only\n- Body 3–4: Full analysis of ${workB} only, with a brief link back in the conclusion\n\nClassify this architecture — type \`integrated\` or \`block\`.`;
        return {
          prompt,
          answer: { type: "text", accept: ["block", "block-by-block", "block by block"], display: "block" },
          hint: "Notice that Work A and Work B are sealed into separate halves of the essay.",
          traps: [
            {
              spec: { type: "text", accept: ["integrated", "point-by-point"] },
              feedback: "Here Work A finishes completely before Work B begins — those isolated silos are weak block structure.",
            },
          ],
          solution: [
            "Discussing Work A completely before moving to Work B creates isolated single-text silos.",
            "This is **block** structure, which weakens sustained comparative synthesis on IB Paper 2.",
          ],
        };
      }

      if (tier === 2) {
        const d = rng.pick(ARCHITECTURE_DIAGNOSES_T2);
        const prompt = `Diagnose the primary Paper 2 architectural flaw below:\n\n${d.makeDesc(workA, workB, theme)}\n\n*(Type one: \`block structure\`, \`imbalance\`, \`plot summary\`, \`flat similarity\`, or \`anachronistic flattening\`.)*`;
        return {
          prompt,
          answer: { type: "text", accept: [...d.answer], display: d.display },
          hint: d.hint,
          solution: [
            "Audit the draft against Paper 2 Criteria A, B, and C (balance, conceptual craft, integrated structure, contextual nuance).",
            d.solution,
          ],
        };
      }

      const stage = rng.pick(CAPBS_STAGES);
      const prompt = `Inside an integrated Paper 2 body paragraph (**C-A-P-B-S**) comparing ${workA} and ${workB} on **${theme}**, which stage is illustrated by this sentence?\n\n${stage.makeSample(workA, workB, theme)}\n\n*(Type: \`conceptual claim\`, \`work a craft\`, \`precision pivot\`, \`work b craft\`, or \`synthesis\`.)*`;
      return {
        prompt,
        answer: { type: "text", accept: [...stage.accept], display: stage.name },
        hint: "Recall C-A-P-B-S: Conceptual claim → Work A craft → Precision pivot → Work B craft → Synthesis.",
        solution: [
          "Match the sentence's structural role inside the C-A-P-B-S comparative paragraph engine.",
          stage.explanation,
        ],
      };
    },
  },

  // 4. Precision Comparative Connective Selection (Level 2)
  {
    id: "3-intertextuality.comparative-connectives",
    topicId: "3-intertextuality",
    title: "Precision Comparative Connectives",
    level: 2,
    ibLevel: "SL",
    guideRef: "comparative-synthesis-architecture",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const pair = rng.pick(CONNECTIVE_CASES[tier]);
      const workA = rng.pick([...PLAY_TITLES, ...POEM_COLLECTIONS]);
      const workB = rng.pick([...NOVEL_TITLES, ...MEMOIR_TITLES]);
      const theme = rng.pick(THEMATIC_PROMPTS);
      const aText = pair.clauseA(workA, theme);
      const bText = pair.clauseB(workB, theme);
      const combined = aText.endsWith(";")
        ? `${aText} ${bText}.`
        : bText.includes("____")
          ? `${aText}, ${bText}.`
          : `${aText}, ____ ${bText}.`;
      const prompt = `Select the most precise comparative connective for the blank:\n\n> ${combined}\n\nLogical role: ${pair.relationLabel}.`;
      return {
        prompt,
        answer: { type: "text", accept: pair.answer, display: pair.display },
        hint: pair.hint,
        traps: pair.trap ? [{ spec: { type: "text", accept: pair.trap.accept }, feedback: pair.trap.feedback }] : undefined,
        solution: [
          "Identify the exact logical relationship between Work A and Work B (contrast, cross-form parallel, inversion, escalation, or concession).",
          pair.explanation,
        ],
      };
    },
  },

  // 5. Cross-Form Craft-Pair Matching (Level 3)
  {
    id: "3-intertextuality.cross-form-craft-pairs",
    topicId: "3-intertextuality",
    title: "Cross-Form Functional Equivalence Pairs",
    level: 3,
    ibLevel: "SL",
    guideRef: "cross-form-connections",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const pool = tier === 1 ? CROSS_FORM_T1 : tier === 2 ? CROSS_FORM_T2 : CROSS_FORM_T3;
      const item = rng.pick(pool);
      const titleA =
        item.sourceForm === "Drama"
          ? rng.pick(PLAY_TITLES)
          : item.sourceForm === "Poetry"
            ? rng.pick(POEM_COLLECTIONS)
            : item.sourceForm === "Literary Non-Fiction"
              ? rng.pick(MEMOIR_TITLES)
              : rng.pick(NOVEL_TITLES);
      const titleB =
        item.targetForm === "Drama"
          ? rng.pick(PLAY_TITLES)
          : item.targetForm === "Poetry"
            ? rng.pick(POEM_COLLECTIONS)
            : item.targetForm === "Literary Non-Fiction"
              ? rng.pick(MEMOIR_TITLES)
              : rng.pick(NOVEL_TITLES);
      const prompt = `**Cross-Form Craft Pairing** (${item.sourceForm} → ${item.targetForm}):\nTo convey **${item.effect}**, ${titleA} (${item.sourceForm}) deploys *${item.sourceDevice}*.\n\nName the functionally equivalent **${item.targetForm}** device in ${titleB}: ${item.targetClue}.`;
      return {
        prompt,
        answer: { type: "text", accept: item.answer, display: item.display },
        hint: item.hint,
        traps: item.trap ? [{ spec: { type: "text", accept: item.trap.accept }, feedback: item.trap.feedback }] : undefined,
        solution: [
          `Pair the shared conceptual effect (${item.effect}) with a native ${item.targetForm} technique.`,
          item.explanation,
        ],
      };
    },
  },
];
