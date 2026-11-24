import type { Drill, DrillItem, Rng } from "./types.ts";

// ---------------------------------------------------------------------------
// Procedural Skill Drills for AoE 1: Readers, Writers & Texts
// 5 drills covering all 4 sections, 100% transferable (zero set texts assumed).
// ---------------------------------------------------------------------------

// ===========================================================================
// DRILL 1: Close Reading vs Plot Summary vs Technique-Spotting
// ===========================================================================
interface CraftScenario {
  form: string;
  actor: string;
  object: string;
  actionSummary: string;
  quote: string;
  device: string;
  mechanism: string;
  effect: string;
}

const CRAFT_SCENARIOS: readonly CraftScenario[] = [
  {
    form: "prose extract",
    actor: "the widowed carpenter",
    object: "his brass plane",
    actionSummary: "oils his workbench every Sunday morning and refuses to look at the unpaid bills",
    quote: "shaving curls of cedar until the floor vanished",
    device: "tactile imagery",
    mechanism: "channels unspoken grief into obsessive manual ritual",
    effect: "portraying craft as both consolation and fragile avoidance of ruin",
  },
  {
    form: "lyric stanza",
    actor: "the departing daughter",
    object: "the front door key",
    actionSummary: "puts the house key beside the salt jar before walking to the bus stop",
    quote: "locked the shutters, stacked the cups, left the key",
    device: "stark parataxis",
    mechanism: "strips away grammatical ornamentation to mirror emotional restraint",
    effect: "framing departure as quiet ceremony rather than impulsive flight",
  },
  {
    form: "dramatic scene",
    actor: "the factory manager",
    object: "the dismissal ledger",
    actionSummary: "signs the redundancy notices calmly and calls the layoffs a restructuring",
    quote: "routine workforce calibration",
    device: "clinical bureaucratic diction",
    mechanism: "sanitises human hardship into bloodless administrative jargon",
    effect: "exposing how institutional language insulates authority from guilt",
  },
  {
    form: "memoir passage",
    actor: "the ageing violinist",
    object: "his resin tin",
    actionSummary: "locks his violin case in the wardrobe after the final concert hall closes",
    quote: "velvet-lined silence",
    device: "compressed metaphor",
    mechanism: "turns protective storage into funerary containment",
    effect: "capturing the uneasy border between cherished legacy and obsolescence",
  },
  {
    form: "short-story opening",
    actor: "the lighthouse keeper",
    object: "the brass gear-wheel",
    actionSummary: "continues polishing the lantern gears even though modern ships use radar",
    quote: "in case the sky forgets its newest tricks",
    device: "understated verbal irony",
    mechanism: "punctures blind faith in automated progress through dry scepticism",
    effect: "sustaining productive tension between wary wisdom and stubborn nostalgia",
  },
  {
    form: "unseen poem",
    actor: "the museum guide",
    object: "the glass display case",
    actionSummary: "leads tourists past the gleaming compasses while ignoring the sailors' manifest",
    quote: "suspended like delicate constellations",
    device: "celestial simile and spatial juxtaposition",
    mechanism: "elevates imperial instruments while marginalising corroded deckhand records",
    effect: "critiquing how curated heritage romanticises power and erases labour",
  },
  {
    form: "stage dialogue",
    actor: "the older brother",
    object: "a silver spoon",
    actionSummary: "keeps polishing a spoon without looking up while his sister argues",
    quote: "without looking up",
    device: "defensive stage business and shifting proxemics",
    mechanism: "displaces emotional confrontation into repetitive physical busywork",
    effect: "dramatising protective evasion beneath calm domestic politeness",
  },
  {
    form: "travel-essay fragment",
    actor: "the hillside guest",
    object: "the harbour veranda",
    actionSummary: "watches dockworkers unloading cargo from a shaded hotel balcony",
    quote: "no larger than commas in a ledger",
    device: "dehumanising accounting simile",
    mechanism: "reduces physical labour to tiny marks on a financial page",
    effect: "revealing how literal spatial elevation reinforces class detachment",
  },
  {
    form: "novella extract",
    actor: "the retired judge",
    object: "the grandfather clock",
    actionSummary: "listens to the hallway clock ticking while reading an old court file",
    quote: "tapping like a magistrate auditing a ledger",
    device: "juridical auditory simile",
    mechanism: "converts private domestic quiet into an inescapable courtroom",
    effect: "suggesting that unexamined guilt persists long after public authority fades",
  },
  {
    form: "literary essay",
    actor: "the migrant narrator",
    object: "two tin trunks",
    actionSummary: "packs winter coats and spice recipes while leaving family portraits behind",
    quote: "billed by the kilo",
    device: "deliberate omission paired with commercial diction",
    mechanism: "masks emotional loss beneath brisk economic rationalisation",
    effect: "exposing how displacement forces intimacy to submit to material limits",
  },
];

const SUMMARY_FRAMES = [
  (s: CraftScenario) => `In this ${s.form}, ${s.actor} ${s.actionSummary}, which shows how difficult the situation is.`,
  (s: CraftScenario) => `The ${s.form} describes how ${s.actor} ${s.actionSummary} during a very emotional moment.`,
  (s: CraftScenario) => `First, ${s.actor} ${s.actionSummary}, proving that ${s.object} is an important part of the story.`,
];

const SPOTTING_FRAMES = [
  (s: CraftScenario) => `In the ${s.form}, the writer uses ${s.device} in “${s.quote}” to create vivid imagery and draw the reader in.`,
  (s: CraftScenario) => `By using ${s.device} (“${s.quote}”), the author emphasises the main theme and makes the ${s.form} more engaging.`,
  (s: CraftScenario) => `The ${s.form} includes ${s.device} around ${s.object}, which adds strong descriptive effect for the reader.`,
];

const ANALYSIS_FRAMES = [
  (s: CraftScenario) => `Through ${s.device} (“${s.quote}”), the writer ${s.mechanism}, ${s.effect}.`,
  (s: CraftScenario) => `In this ${s.form}, deploying ${s.device} (“${s.quote}”) ${s.mechanism}, ${s.effect}.`,
  (s: CraftScenario) => `Rather than stating emotion directly, the writer's ${s.device} (“${s.quote}”) ${s.mechanism}, ${s.effect}.`,
];

const craftVsSummaryDrill: Drill = {
  id: "1-readers-writers-texts.craft-vs-summary",
  topicId: "1-readers-writers-texts",
  title: "Close Reading vs Plot Summary & Feature-Spotting",
  level: 1,
  ibLevel: "SL",
  guideRef: "close-reading-meaning",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const s = rng.pick(CRAFT_SCENARIOS);
    const categories = tier === 1 ? (["summary", "analysis"] as const) : (["summary", "spotting", "analysis"] as const);
    const cat = rng.pick(categories);

    let draft: string;
    if (cat === "summary") {
      if (tier === 3 && rng.bool(0.5)) {
        draft = `Quoting “${s.quote}”, the ${s.form} explains that ${s.actor} ${s.actionSummary} before the scene ends.`;
      } else {
        draft = rng.pick(SUMMARY_FRAMES)(s);
      }
    } else if (cat === "spotting") {
      if (tier === 3 && rng.bool(0.5)) {
        draft = `The writer effectively deploys ${s.device} (“${s.quote}”) to highlight deep feelings and keep the reader interested.`;
      } else {
        draft = rng.pick(SPOTTING_FRAMES)(s);
      }
    } else {
      draft = rng.pick(ANALYSIS_FRAMES)(s);
    }

    const choiceList =
      tier === 1
        ? "`summary` (plot retelling) or `analysis` (Band 5 Choice → Mechanism → Effect)"
        : "`summary` (plot retelling), `spotting` (empty technique-spotting), or `analysis` (Band 5 Choice → Mechanism → Effect)";

    const lead = rng.pick([
      "Classify this IB commentary sentence as",
      "Audit this draft literary sentence — type",
      "Which IB commentary tier fits this draft? Type",
    ]);

    const acceptMap = {
      summary: ["summary", "plot summary", "plot retelling"],
      spotting: ["spotting", "technique-spotting", "technique spotting", "feature-spotting", "feature spotting"],
      analysis: ["analysis", "close reading", "evaluative analysis"],
    };

    const traps = (["summary", "spotting", "analysis"] as const)
      .filter((k) => k !== cat)
      .map((k) => ({
        spec: { type: "text" as const, accept: acceptMap[k] },
        feedback:
          k === "summary"
            ? "Look closer: does this merely retell character events, or does it name a device / explain mechanism?"
            : k === "spotting"
              ? "Check whether the sentence actually explains *how* a linguistic mechanism builds a conceptual effect, or only attaches a generic cliché."
              : "True Band 5 analysis requires all three C-M-E links (Authorial Choice → Mechanism → Conceptual Effect) — not plot retelling or generic clichés like 'draw the reader in'.",
      }));

    return {
      prompt: `${lead} ${choiceList}:\n\n> *${draft}*`,
      answer: { type: "text", accept: acceptMap[cat], display: cat },
      hint: "Run the C-M-E test: does the sentence name a craft move, explain its linguistic mechanism, AND evaluate a specific conceptual effect?",
      traps,
      solution: [
        cat === "summary"
          ? "This is **summary**: even if a quote appears, the sentence merely retells what the character does without analysing *how* language constructs meaning."
          : cat === "spotting"
            ? `This is **spotting** (technique-spotting): it names **${s.device}**, but attaches a generic filler cliché (*vivid imagery / draw the reader in / highlight deep feelings*) with zero mechanism.`
            : `This is Band 5 **analysis**: it links **${s.device}** (Choice) → *${s.mechanism}* (Mechanism) → *${s.effect}* (Conceptual Effect).`,
      ],
    };
  },
};

// ===========================================================================
// DRILL 2: Irony Classifier (Verbal, Dramatic, Situational)
// ===========================================================================
interface IronyCase {
  mode: "verbal" | "dramatic" | "situational";
  text: string;
  why: string;
}

const IRONY_CASES_T1: readonly IronyCase[] = [
  { mode: "verbal", text: "Standing ankle-deep in rainwater inside a leaking flat, the tenant mutters, “Our landlord's devotion to indoor plumbing truly brings tears to the eyes.”", why: "The speaker knowingly says the opposite of what they mean through wry praise." },
  { mode: "verbal", text: "After receiving a three-line rejection letter with his name misspelled, the novelist sighs, “How touching to feel so thoroughly read.”", why: "The speaker intentionally contrasts polite diction ('touching') with dismissive reality." },
  { mode: "verbal", text: "Glancing at a single stale biscuit placed on a silver tray, the guest whispers, “Careful — we might faint from such extravagant hospitality.”", why: "Inflated praise ('extravagant hospitality') intentionally signals stinginess." },
  { mode: "verbal", text: "While trapped for four hours inside a stalled lift during a heatwave, the clerk remarks, “Nothing refreshes the spirit like an intimate sauna with strangers.”", why: "The speaker knowingly utters mock appreciation to undercut miserable reality." },
  { mode: "verbal", text: "Inspecting a collapsed garden shed painted bright gold, the neighbour observes dryly, “Clearly a triumph of visionary architecture.”", why: "Mock-elevated phrasing says the exact opposite of what the speaker genuinely judges." },
  { mode: "dramatic", text: "In Act II of a tragedy, the ambassador praises his interpreter's “unshakeable loyalty”, unaware that the audience watched the interpreter photocopy the peace treaty for rivals in Act I.", why: "The audience holds crucial secret knowledge that the speaking character lacks." },
  { mode: "dramatic", text: "A trusting heir hands her brass vault key to her cousin saying, “You are the only soul I trust,” while readers already saw him forging a new will two chapters earlier.", why: "Readers know the cousin's betrayal while the heir speaks in earnest innocence." },
  { mode: "dramatic", text: "On stage, the detective announces triumphantly that the thief must have fled across the harbour, while the audience clearly sees the real culprit seated silently behind him.", why: "Asymmetric knowledge between audience and character charges his confidence with tension." },
  { mode: "dramatic", text: "The captain boasts cheerfully that tonight's fog guarantees safe passage, unaware that viewers watched the harbour watchman extinguish the reef lantern moments ago.", why: "Viewers possess urgent danger knowledge concealed from the boasting captain." },
  { mode: "dramatic", text: "A hopeful playwright writes a celebratory toast to his patron's generosity, while the audience already overheard the patron cancelling the theatre's lease offstage.", why: "Audience foreknowledge turns the celebratory toast bittersweet and tense." },
  { mode: "situational", text: "A famous fire-safety inspector spends twenty years fortifying his home against flames, only for his new electric alarm panel to spark a blaze that burns down his study.", why: "The exact measure intended to prevent fire causes the disaster — reversing expectation." },
  { mode: "situational", text: "An eccentric millionaire hides his fortune inside an old armchair so thieves will never find it, only for his well-meaning nephew to donate that exact chair to charity.", why: "The outcome starkly inverts the millionaire's protective intention." },
  { mode: "situational", text: "A punctual town clockmaker publishes a pamphlet scolding citizens for lateness, then misses his own award ceremony because he forgot to wind his pocket watch.", why: "Actual events sharply reverse the competence and authority expected of the clockmaker." },
  { mode: "situational", text: "A stern censor bans a satirical pamphlet to erase it from public memory, yet the publicity surrounding the ban turns the obscure booklet into the city's bestselling text.", why: "The act of suppression produces the exact opposite outcome of what was intended." },
  { mode: "situational", text: "Two estranged siblings secretly sell their prized heirlooms to buy each other matching display frames, leaving neither sibling with an heirloom left to frame.", why: "Mutual sacrifice cancels itself out in a poignant reversal of expected outcome." },
];

const IRONY_CASES_T23: readonly IronyCase[] = [
  { mode: "verbal", text: "Describing an unpaid twelve-hour factory shift in freezing air, the narrator calls it “another generous opportunity to build resilient character”.", why: "Corporate euphemism ('generous opportunity') is knowingly deployed to expose exploitation." },
  { mode: "verbal", text: "When the committee demolishes a three-hundred-year-old courtyard to build a concrete car park, the essayist hails this “bold triumph of civic imagination”.", why: "Mock praise intentionally says the opposite of the essayist's sharp critical stance." },
  { mode: "verbal", text: "After her uncle locks every bookshelf before visiting, the diarist writes, “How considerate of him to guard our fragile minds from dangerous punctuation.”", why: "Dry understatement and faux gratitude knowingly undercut paternalistic censorship." },
  { mode: "verbal", text: "Surveying a banquet where guests stare silently at their phones, the speaker murmurs, “Truly, the golden age of sparkling conversation has arrived.”", why: "Elevated praise directly contradicts the silent table to generate wry critique." },
  { mode: "verbal", text: "Reading a landlord's notice raising rent while refusing roof repairs, the poet calls the letter “a masterclass in tender neighbourly stewardship”.", why: "Inflated warm diction knowingly indicts cold economic exploitation." },
  { mode: "dramatic", text: "The elderly monarch blesses his younger councillor as “the sole pillar keeping civil war from our gates”, while the audience knows the councillor already signed the rebels' pact.", why: "The audience holds concealed plot truth that undermines the monarch's solemn blessing." },
  { mode: "dramatic", text: "Packing carefully for a surprise reunion, the mother murmurs, “He will laugh when he sees I saved his silver compass,” while readers already know her son boarded a ship out of the country at dawn.", why: "Reader knowledge of the son's departure turns her tender preparation painfully poignant." },
  { mode: "dramatic", text: "In a realist play, the proud architect insists the new bridge piers could withstand a century of tides; spectators have just seen the contractor quietly swap in cracked timber.", why: "Spectators know about the hidden structural sabotage while the architect boasts earnestly." },
  { mode: "dramatic", text: "A naive diarist praises the polite border clerk who “kindly offered to hold my passport overnight for faster stamping”, though readers already saw that clerk handing traveller files to secret police.", why: "Readers recognise the mortal danger concealed from the trusting diarist." },
  { mode: "dramatic", text: "During dinner, the host jokes lightly that “nobody at this table has anything to hide”, while the audience knows his quiet daughter already read the concealed mortgage deed in his desk.", why: "Audience knowledge of the daughter's discovery charges an ordinary dinner remark with dread." },
  { mode: "situational", text: "A proud general builds an immense granite monument so future centuries will remember his surname, yet local children chip away the weathered inscription and rename the plaza after the stray dogs sleeping beneath it.", why: "Reality quietly inverts the monument's intended guarantee of lasting fame." },
  { mode: "situational", text: "Obsessed with protecting his rare orchard from frost, the estate owner cuts down the surrounding pine windbreak for firewood — allowing the winter gale to kill every fruit tree.", why: "The protective action directly causes the destruction it aimed to avert." },
  { mode: "situational", text: "A celebrated memory coach travels overseas to lecture on flawless recall, only to arrive at the auditorium having left both his notes and his spectacles on the kitchen table.", why: "The outcome sharply reverses expectations established by the character's profession." },
  { mode: "situational", text: "A secretive aristocrat seals his private letters in an iron chest so historians will never gossip about him; the unusual padlock fascinates archivists so intensely that his letters become the most studied papers in the museum.", why: "The effort to ensure obscurity triggers extraordinary public scrutiny." },
  { mode: "situational", text: "After refusing to speak to his neighbour for twenty years over a boundary hedge, the retired surveyor discovers during the land sale that the disputed strip belonged to the municipal road all along.", why: "A twenty-year feud collapses in an unexpected factual reversal." },
];

const IRONY_GENRE_WRAPPERS = [
  "In an unseen prose passage",
  "In a studied theatrical script",
  "In a contemporary short story",
  "In an unseen literary extract",
  "In a Paper 1 commentary passage",
  "In a dramatic scene",
];

const IRONY_ASK_WRAPPERS = [
  "Identify the exact irony mode (`verbal`, `dramatic`, or `situational`):",
  "Which mode of irony operates here? Type `verbal`, `dramatic`, or `situational`:",
  "Classify the irony (`verbal`, `dramatic`, or `situational`):",
];

const ironyTypeDrill: Drill = {
  id: "1-readers-writers-texts.irony-type",
  topicId: "1-readers-writers-texts",
  title: "Irony Mode Classifier (Verbal, Dramatic, Situational)",
  level: 1,
  ibLevel: "SL",
  guideRef: "voice-tone-ambiguity",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const pool = tier === 1 ? IRONY_CASES_T1 : tier === 2 ? [...IRONY_CASES_T1, ...IRONY_CASES_T23] : IRONY_CASES_T23;
    const item = rng.pick(pool);
    const ctx = rng.pick(IRONY_GENRE_WRAPPERS);
    const ask = rng.pick(IRONY_ASK_WRAPPERS);

    const acceptMap = {
      verbal: ["verbal", "verbal irony"],
      dramatic: ["dramatic", "dramatic irony"],
      situational: ["situational", "situational irony"],
    };

    const traps = (["verbal", "dramatic", "situational"] as const)
      .filter((k) => k !== item.mode)
      .map((k) => ({
        spec: { type: "text" as const, accept: acceptMap[k] },
        feedback:
          k === "verbal"
            ? "Verbal irony requires the speaker to *knowingly* say one thing while meaning another."
            : k === "dramatic"
              ? "Dramatic irony specifically relies on the audience/reader holding hidden knowledge that a character lacks."
              : "Situational irony arises when an actual outcome sharply reverses expectation — not from sarcasm or secret audience knowledge.",
      }));

    return {
      prompt: `${ctx}: ${item.text}\n\n${ask}`,
      answer: { type: "text", accept: acceptMap[item.mode], display: `${item.mode} irony` },
      hint: "Test the three gaps: said ≠ meant (verbal), audience knows > character knows (dramatic), or expected outcome ≠ actual reversal (situational).",
      traps,
      solution: [
        `Mode: **${item.mode} irony**.`,
        item.why,
      ],
    };
  },
};

// ===========================================================================
// DRILL 3: Tone, Register & Shift Diagnostic
// ===========================================================================
interface ToneExtract {
  tone: string;
  accept: string[];
  distractors: [string, string, string];
  snippet: string;
  why: string;
  tierMin: 1 | 2 | 3;
}

const TONE_EXTRACTS: readonly ToneExtract[] = [
  // Tier 1 & 2 single-tone extracts
  {
    tone: "elegiac",
    accept: ["elegiac"],
    distractors: ["sardonic", "clinical", "defiant"],
    snippet: "By dusk the orchard lane lay silvered in mist, and only the rusted swing still remembered the weight of summer afternoons.",
    why: "Soft cadence, twilight imagery, and quiet mourning for vanished time define an **elegiac** tone.",
    tierMin: 1,
  },
  {
    tone: "elegiac",
    accept: ["elegiac"],
    distractors: ["satirical", "clinical", "brisk"],
    snippet: "Here stood the boathouse where my cousins folded paper fleets; now reeds whisper gently across the sunken pilings.",
    why: "The epitaph opening ('Here stood') and tender sensory memory create an **elegiac** register.",
    tierMin: 1,
  },
  {
    tone: "sardonic",
    accept: ["sardonic"],
    distractors: ["reverent", "elegiac", "wistful"],
    snippet: "How noble of the board to cut heating in January while awarding themselves a commemorative crystal plaque for resilience.",
    why: "Biting, mocking praise exposing hypocrisy exemplifies a **sardonic** tone.",
    tierMin: 1,
  },
  {
    tone: "sardonic",
    accept: ["sardonic"],
    distractors: ["reverent", "restrained", "elegiac"],
    snippet: "Our council truly excels at compassion: they replaced the vanished shelter benches with glossy posters celebrating community spirit.",
    why: "Dry, caustic irony puncturing hollow institutional rhetoric marks a **sardonic** voice.",
    tierMin: 1,
  },
  {
    tone: "restrained",
    accept: ["restrained"],
    distractors: ["sardonic", "reverent", "melodramatic"],
    snippet: "We folded her coat without speeches, set the kettle on the stove, and waited quietly for the morning train.",
    why: "Understated domestic facts devoid of emotional adjectives produce a stoically **restrained** tone.",
    tierMin: 1,
  },
  {
    tone: "restrained",
    accept: ["restrained"],
    distractors: ["satirical", "reverent", "feverish"],
    snippet: "He read the telegram twice, placed it flat beneath the paperweight, and asked whether the bread needed slicing.",
    why: "Channeling shock into crisp, bare routine without exclamation exemplifies a **restrained** register.",
    tierMin: 1,
  },
  {
    tone: "reverent",
    accept: ["reverent"],
    distractors: ["sardonic", "clinical", "evasive"],
    snippet: "Beneath the cedar vaulting, every whispered syllable seemed lifted into stillness, as though centuries of devotion still warmed the stone.",
    why: "Elevated sacred diction ('vaulting', 'devotion', 'stillness') creates an awed, **reverent** tone.",
    tierMin: 1,
  },
  {
    tone: "reverent",
    accept: ["reverent"],
    distractors: ["sardonic", "clinical", "defensive"],
    snippet: "She lifted her grandmother's worn loom-shuttle with both palms, honouring each smooth ridge worn bright by sixty patient winters.",
    why: "Ceremonial physical care and admiring diction ('honouring', 'patient winters') sustain a **reverent** tone.",
    tierMin: 1,
  },
  // Tier 2 expanded registers
  {
    tone: "clinical",
    accept: ["clinical"],
    distractors: ["elegiac", "reverent", "wistful"],
    snippet: "Subject exhibited a fourteen-percent decline in caloric intake following relocation; emotional variance remained outside measurable parameters.",
    why: "Detached scientific/bureaucratic diction ('Subject', 'parameters') produces a cold **clinical** register.",
    tierMin: 2,
  },
  {
    tone: "clinical",
    accept: ["clinical"],
    distractors: ["reverent", "wistful", "elegiac"],
    snippet: "Units seven through twelve were vacated at 08:00 hours; residual personal articles were inventoried and transferred to municipal storage.",
    why: "Bloodless administrative timestamps and passive verbs strip away human feeling into a **clinical** tone.",
    tierMin: 2,
  },
  {
    tone: "defensive",
    accept: ["defensive"],
    distractors: ["reverent", "elegiac", "clinical"],
    snippet: "I burned the letters purely to spare her worry, you understand — anyone in my position would naturally have done the exact same thing.",
    why: "Unsolicited justifications ('purely', 'you understand', 'naturally') signal an anxious, **defensive** voice.",
    tierMin: 2,
  },
  {
    tone: "defensive",
    accept: ["defensive"],
    distractors: ["reverent", "clinical", "wistful"],
    snippet: "I never promised to stay until autumn, of course; people always misremember casual remarks whenever it suits them.",
    why: "Self-exonerating hedges ('of course') and blame-shifting betray a **defensive** speaker.",
    tierMin: 2,
  },
  {
    tone: "wistful",
    accept: ["wistful"],
    distractors: ["sardonic", "clinical", "defensive"],
    snippet: "Sometimes, catching the scent of bruised mint near the station, I almost turn around expecting to see our old yellow bicycle by the railings.",
    why: "Gentle, yearning sensory recollection softened by 'almost' creates a **wistful** tone.",
    tierMin: 2,
  },
  {
    tone: "satirical",
    accept: ["satirical"],
    distractors: ["reverent", "elegiac", "wistful"],
    snippet: "The subcommittee formed three sub-subcommittees to debate the font size of the transparency charter, proudly postponing any actual action until next decade.",
    why: "Exaggerated institutional absurdity mocking bureaucratic folly exemplifies a **satirical** tone.",
    tierMin: 2,
  },
  // Tier 3 tonal shifts (identify the CLOSING tone after the pivot!)
  {
    tone: "restrained",
    accept: ["restrained"],
    distractors: ["sardonic", "reverent", "satirical"],
    snippet: "At the ceremony, speeches boomed about eternal glory; afterwards, the widow simply rinsed two teacups and turned off the porch light.",
    why: "After the semicolon, inflated public ceremony pivots sharply into quiet, understated domesticity — a **restrained** closing tone.",
    tierMin: 3,
  },
  {
    tone: "sardonic",
    accept: ["sardonic"],
    distractors: ["reverent", "elegiac", "wistful"],
    snippet: "The brochure promised 'harmonious coastal living'; in reality, our balcony overlooks a roaring cement depot thoughtfully scented with diesel.",
    why: "The closing adverb 'thoughtfully' paired with 'diesel' turns idyllic brochure language sharply **sardonic**.",
    tierMin: 3,
  },
  {
    tone: "elegiac",
    accept: ["elegiac"],
    distractors: ["clinical", "sardonic", "defensive"],
    snippet: "We briskly tallied the auction lots in blue ink — until a faded lullaby notebook slipped from a drawer, leaving the room hushed with lost years.",
    why: "The dash breaks brisk administrative tallying into hushed, mourning reflection — an **elegiac** closing tone.",
    tierMin: 3,
  },
  {
    tone: "defensive",
    accept: ["defensive"],
    distractors: ["reverent", "elegiac", "clinical"],
    snippet: "Yes, the orchard wall collapsed in March; naturally nobody could have predicted winter rain, and besides, my brother never offered a single coin for mortar.",
    why: "After the brief admission, rapid excuses ('naturally', 'and besides') pivot the voice into a **defensive** tone.",
    tierMin: 3,
  },
  {
    tone: "clinical",
    accept: ["clinical"],
    distractors: ["wistful", "reverent", "elegiac"],
    snippet: "Children once called the flooded quarry the silver mirror; the surveyor's report records solely forty metres of stagnant alkaline volume.",
    why: "The semicolon abruptly replaces lyrical childhood naming with detached measurement — a **clinical** closing tone.",
    tierMin: 3,
  },
  {
    tone: "wistful",
    accept: ["wistful"],
    distractors: ["sardonic", "clinical", "defensive"],
    snippet: "I joked loudly that leaving the harbour town was pure relief — yet whenever fog horns sound at dusk, I still catch myself listening for the ferry bell.",
    why: "The hinge 'yet' melts loud bravado into quiet, lingering longing — a **wistful** closing tone.",
    tierMin: 3,
  },
  {
    tone: "reverent",
    accept: ["reverent"],
    distractors: ["sardonic", "clinical", "defensive"],
    snippet: "We entered the ruined library grumbling about damp stone, then fell silent before the single surviving fresco glowing softly in afternoon light.",
    why: "Casual grumbling pivots into hushed awe before surviving art — a **reverent** closing tone.",
    tierMin: 3,
  },
];

const TONE_CONTEXTS = [
  "Unseen prose excerpt",
  "Paper 1 micro-extract",
  "Unseen monologue fragment",
  "Close-reading sample",
  "Literary non-fiction snippet",
  "Narrative voice sample",
];

const toneRegisterShiftDrill: Drill = {
  id: "1-readers-writers-texts.tone-register-shift",
  topicId: "1-readers-writers-texts",
  title: "Tone, Register & Tonal Shift Diagnostic",
  level: 2,
  ibLevel: "SL",
  guideRef: "voice-tone-ambiguity",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const pool =
      tier === 1
        ? TONE_EXTRACTS.filter((t) => t.tierMin === 1)
        : tier === 2
          ? TONE_EXTRACTS.filter((t) => t.tierMin <= 2)
          : TONE_EXTRACTS.filter((t) => t.tierMin === 3);
    const chosen = rng.pick(pool);
    const opts = rng.shuffle([chosen.tone, ...chosen.distractors]);
    const ctx = rng.pick(TONE_CONTEXTS);
    const askLine =
      tier === 3
        ? `Which single adjective best captures the **closing tone after the tonal shift**? Choose one: ${opts.map((o) => `\`${o}\``).join(", ")}.`
        : `Which single IB tonal adjective best fits this voice? Choose one: ${opts.map((o) => `\`${o}\``).join(", ")}.`;

    const traps = chosen.distractors.map((d) => ({
      spec: { type: "text" as const, accept: [d] },
      feedback: `Check the diction and syntax clues carefully — this voice does not match “${d}”. Look at how the writer frames emotion or distance.`,
    }));

    return {
      prompt: `**${ctx}:**\n\n> *${chosen.snippet}*\n\n${askLine}`,
      answer: { type: "text", accept: chosen.accept, display: chosen.tone },
      hint:
        tier === 3
          ? "Locate the exact punctuation hinge (dash, semicolon, or 'yet') and read the attitude in the *second half* of the sentence."
          : "Examine word connotations, punctuation restraint, and whether the voice mourns, mocks, justifies, honours, or measures.",
      traps,
      solution: [
        `Target tone: **${chosen.tone}**.`,
        chosen.why,
      ],
    };
  },
};

// ===========================================================================
// DRILL 4: Conceptual Claim vs Descriptive Statement & Reader-Response Lens
// ===========================================================================
interface ThesisItem {
  kind: "conceptual" | "descriptive";
  text: string;
  why: string;
}

const THESIS_POOL: readonly ThesisItem[] = [
  { kind: "conceptual", text: "Through clinical legal diction and fractured syntax, the writer portrays institutional mercy as a veiled instrument of social control.", why: "Links concrete authorial craft (diction, syntax) to an arguable conceptual tension." },
  { kind: "conceptual", text: "By juxtaposing tender domestic ritual with creeping coastal decay, the poem casts nostalgia as both emotional shelter and quiet denial.", why: "Names specific craft choices and frames productive ambiguity rather than plot recap." },
  { kind: "conceptual", text: "The playwright weaponises offstage sound and physical stillness to expose how polite family silence sustains intergenerational guilt.", why: "Attributes agency to dramatic craft and articulates a nuanced conceptual claim." },
  { kind: "conceptual", text: "Through shifting spatial elevation and accounting metaphors, the travel essay implicates detached observers in the erasure of working-class labour.", why: "Connects imagery and perspective directly to an analytical conceptual stake." },
  { kind: "conceptual", text: "By pairing defensive parenthetical hedges with understated domestic objects, the speaker unwittingly reveals grief behind performed composure.", why: "Analyses voice, syntax, and ironic subtext rather than summarising storyline." },
  { kind: "conceptual", text: "The memoir transforms commercial travel limits into a poignant symbol of how displacement compresses cultural inheritance.", why: "Moves from authorial motif/transformation to a sharp thematic insight." },
  { kind: "conceptual", text: "Through stark parataxis and deliberate omission, the narrator renders emotional rupture palpable precisely by refusing to name it.", why: "Links minimalist syntax and silence directly to psychological effect." },
  { kind: "conceptual", text: "By contrasting heroic museum plaques with corroded dockhand manifests, the passage interrogates whose memories official history preserves.", why: "Frames an evaluative inquiry driven by structural juxtaposition." },
  { kind: "descriptive", text: "In this extract, an old lighthouse keeper writes letters to his daughters and refuses to stop polishing his brass lantern.", why: "Merely retells plot events with zero authorial craft or arguable claim." },
  { kind: "descriptive", text: "This poem is about memory, family conflict, and moving out of an old house where the family lived for many years.", why: "Lists broad surface topics and storyline instead of an arguable analytical thesis." },
  { kind: "descriptive", text: "In the scene, Nora and Sam argue in the kitchen after their father dies while a kettle starts boiling offstage.", why: "Summarises dramatic plot action rather than evaluating how theatrical craft constructs meaning." },
  { kind: "descriptive", text: "The narrator travels to a coastal hotel, looks down at the busy harbour from the veranda, and writes about the peaceful view.", why: "Retells literal storyline as if it were a factual travel diary." },
  { kind: "descriptive", text: "This passage shows that displacement is an important theme because the family packs two tin trunks and leaves photographs behind.", why: "Calls a theme 'important' and recaps plot facts without analysing authorial choices." },
  { kind: "descriptive", text: "The writer uses imagery, tone, syntax, and symbolism throughout the text to make the story vivid and memorable for readers.", why: "Generic feature-listing without any specific mechanism or conceptual argument." },
  { kind: "descriptive", text: "After the estate is sold, the sister laughs about dust in the rooms and then notices pencil marks on the wooden doorframe.", why: "Chronological plot narration devoid of evaluative literary insight." },
  { kind: "descriptive", text: "This short story clearly teaches readers a moral lesson that greed is bad and families should always communicate honestly.", why: "Reductive moralising rather than conceptual close analysis of craft." },
];

interface ReaderLensItem {
  stance: "implied" | "resisting";
  extract: string;
  reading: string;
  why: string;
}

const READER_LENS_POOL: readonly ReaderLensItem[] = [
  {
    stance: "implied",
    extract: "“My grandfather built this grand stone wall with boys hired from the valley; whenever visitors admire its clean mortar, warm ancestral pride fills my chest.”",
    reading: "A reader accepts the speaker's inviting metaphor of warm pride, sharing his admiration for enduring family craftsmanship.",
    why: "Reading with the text's surface emotional invitation aligns with the **implied** reader.",
  },
  {
    stance: "resisting",
    extract: "“My grandfather built this grand stone wall with boys hired from the valley; whenever visitors admire its clean mortar, warm ancestral pride fills my chest.”",
    reading: "A reader questions the casually dropped phrase “boys hired from the valley”, exposing how family heritage erases uncredited working-class labour.",
    why: "Reading against the narrator's comforting frame to interrogate silenced labour exemplifies a **resisting** reader.",
  },
  {
    stance: "implied",
    extract: "“From the quiet hillside veranda, the harbour looks like a delicate painted fan — one feels wonderfully serene up here above the dust.”",
    reading: "A reader savours the soothing aesthetic beauty of the distant harbour vista and shares the narrator's sense of calm refuge.",
    why: "Accepting the narrator's picturesque framing without challenging its detachment matches the **implied** reader.",
  },
  {
    stance: "resisting",
    extract: "“From the quiet hillside veranda, the harbour looks like a delicate painted fan — one feels wonderfully serene up here above the dust.”",
    reading: "A reader challenges how “up here above the dust” turns colonial class privilege and distant human labour into decorative scenery.",
    why: "Interrogating privilege and marginalisation embedded in picturesque diction exemplifies a **resisting** reader.",
  },
  {
    stance: "implied",
    extract: "“At last the manor runs effortlessly: my wife manages the pantry silently so my diplomatic essays proceed without interruption.”",
    reading: "A reader shares the speaker's satisfaction in an orderly, tranquil household that supports his scholarly writing.",
    why: "Aligning with the narrator's invited satisfaction reads with the grain as an **implied** reader.",
  },
  {
    stance: "resisting",
    extract: "“At last the manor runs effortlessly: my wife manages the pantry silently so my diplomatic essays proceed without interruption.”",
    reading: "A reader focuses on the adverb “silently”, exposing how patriarchal domestic arrangements purchase male leisure through female invisibility.",
    why: "Questioning normalised gendered silence against the narrator's framing is a **resisting** reading.",
  },
  {
    stance: "implied",
    extract: "“Our academy's strict winter drills forged sturdy leaders; only the overly sensitive ever complained of frostbite.”",
    reading: "A reader endorses the speaker's admiring tribute to rugged resilience and dismisses complaints as weakness.",
    why: "Accepting the text's heroic institutional framing reflects the **implied** reader.",
  },
  {
    stance: "resisting",
    extract: "“Our academy's strict winter drills forged sturdy leaders; only the overly sensitive ever complained of frostbite.”",
    reading: "A reader interrogates how dismissing “frostbite” as “overly sensitive” normalises institutional cruelty under masculine ideals.",
    why: "Refusing the speaker's dismissal to foreground concealed harm marks a **resisting** reader.",
  },
  {
    stance: "implied",
    extract: "“Every plaque in the gallery celebrated our bold explorers who charted ‘empty’ northern shores for the crown.”",
    reading: "A reader absorbs the museum's celebratory tone, admiring the courage and navigational ambition of the charted expedition.",
    why: "Following the plaque's heroic invitation aligns with the **implied** reader.",
  },
  {
    stance: "resisting",
    extract: "“Every plaque in the gallery celebrated our bold explorers who charted ‘empty’ northern shores for the crown.”",
    reading: "A reader challenges the word “empty”, exposing imperial rhetoric that erases Indigenous communities already inhabiting those coasts.",
    why: "Reading against imperial framing to question ideological erasure exemplifies a **resisting** reader.",
  },
];

const THESIS_LEADS = [
  "Audit this IB essay thesis draft:",
  "Evaluate this opening Paper 1 claim:",
  "Classify this student argument sentence:",
  "Review this draft literary thesis:",
];

const READER_LEADS = [
  "Classify the reader posture below:",
  "Identify which reader-response stance is shown:",
  "Audit this interpretive stance:",
];

const thesisReaderLensDrill: Drill = {
  id: "1-readers-writers-texts.thesis-reader-lens",
  topicId: "1-readers-writers-texts",
  title: "Thesis Precision & Reader-Response Stance",
  level: 2,
  ibLevel: "SL",
  guideRef: "reader-response-choices",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const doThesis = tier === 1 ? true : tier === 2 ? false : rng.bool(0.5);

    if (doThesis) {
      const item = rng.pick(THESIS_POOL);
      const lead = rng.pick(THESIS_LEADS);
      const genreHint = rng.pick(["(Paper 1 draft)", "(IO framing)", "(HL Essay draft)", "(Close-reading intro)"]);
      const other = item.kind === "conceptual" ? "descriptive" : "conceptual";
      return {
        prompt: `${lead} ${genreHint}\n\n> *${item.text}*\n\nType \`conceptual\` (arguable Band 5 craft claim) or \`descriptive\` (plot summary / vague listing):`,
        answer: {
          type: "text",
          accept:
            item.kind === "conceptual"
              ? ["conceptual", "conceptual claim", "conceptual thesis"]
              : ["descriptive", "descriptive statement", "plot summary"],
          display: item.kind,
        },
        hint: "A Band 5 conceptual thesis connects *specific authorial craft* to an *arguable conceptual tension* — never mere plot facts or generic device lists.",
        traps: [
          {
            spec: { type: "text", accept: [other] },
            feedback:
              other === "conceptual"
                ? "Look closely: does this actually link a specific authorial choice to a nuanced conceptual argument, or just retell events / list generic terms?"
                : "Notice this sentence explicitly connects named authorial craft to a nuanced conceptual tension — that is a strong conceptual claim!",
          },
        ],
        solution: [
          `Classification: **${item.kind}**.`,
          item.why,
        ],
      };
    } else {
      const item = rng.pick(READER_LENS_POOL);
      const lead = rng.pick(READER_LEADS);
      const lensTag = rng.pick(["AoE 1 Seminar", "Reception Audit", "Close-Reading Lab", "Reader-Response Check"]);
      const other = item.stance === "implied" ? "resisting" : "implied";
      return {
        prompt: `**${lensTag}** — ${lead}\n\n*Extract:* ${item.extract}\n*Response:* ${item.reading}\n\nType \`implied\` (reads with the text's invited grain) or \`resisting\` (interrogates silences/framing against the grain):`,
        answer: {
          type: "text",
          accept:
            item.stance === "implied"
              ? ["implied", "implied reader"]
              : ["resisting", "resisting reader", "resistant", "resistant reader"],
          display: `${item.stance} reader`,
        },
        hint: "Ask: does this reader accept the speaker's invited sympathy/framing (implied), or read against the grain to question bias and silences (resisting)?",
        traps: [
          {
            spec: { type: "text", accept: [other, `${other} reader`] },
            feedback:
              other === "implied"
                ? "This response actively challenges the speaker's bias or silenced figures — reading against the grain."
                : "This response accepts the speaker's surface framing and invited sympathy — reading with the grain.",
          },
        ],
        solution: [
          `Stance: **${item.stance} reader**.`,
          item.why,
        ],
      };
    }
  },
};

// ===========================================================================
// DRILL 5: Learner Portfolio Rules & Non-Overlap Audit
// ===========================================================================
const ENGLISH_WORKS = [
  "an English modernist novel",
  "an English tragic drama",
  "an English lyric poetry collection",
  "an English memoir",
  "an English short-story cycle",
  "an English satirical play",
];

const TRANSLATED_WORKS = [
  "a translated European novella",
  "a translated East Asian play",
  "a translated Latin American novel",
  "a translated Arabic poetry collection",
  "a translated Russian drama",
  "a translated French essay volume",
];

const STUDENT_NAMES = ["Amina", "Dev", "Chloe", "Hana", "Lucas", "Priya", "Mateo", "Sora"];

const portfolioNonOverlapDrill: Drill = {
  id: "1-readers-writers-texts.portfolio-non-overlap",
  topicId: "1-readers-writers-texts",
  title: "Learner Portfolio Rules & Non-Overlap Audit",
  level: 3,
  ibLevel: "SL",
  guideRef: "learner-portfolio-craft",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const name = rng.pick(STUDENT_NAMES);
    const eng1 = rng.pick(ENGLISH_WORKS);
    const eng2 = rng.pick(ENGLISH_WORKS.filter((w) => w !== eng1));
    const tr1 = rng.pick(TRANSLATED_WORKS);
    const tr2 = rng.pick(TRANSLATED_WORKS.filter((w) => w !== tr1));

    if (tier === 1) {
      const mode = rng.int(1, 3);
      if (mode === 1) {
        const studied = rng.int(9, 12);
        const remaining = studied - 2;
        return {
          prompt: `**SL Portfolio Audit:** ${name} studies **${studied} works** in SL English A: Literature and locks **2 works** (${eng1} + ${tr1}) for the Individual Oral. Under the IB Non-Overlap Rule, how many studied works remain legally eligible for Paper 2?`,
          answer: { type: "number", value: remaining, display: `${remaining}` },
          hint: "At SL, subtract the 2 works committed to the Individual Oral from the total studied works.",
          traps: [
            { spec: { type: "number", value: studied }, feedback: "You forgot to subtract the 2 Individual Oral works — they cannot be reused in Paper 2." },
          ],
          solution: [
            `Under the strict Non-Overlap Rule, the 2 IO works cannot be reused in Paper 2.`,
            `Remaining eligible Paper 2 works = ${studied} − 2 = **${remaining}**.`,
          ],
        };
      } else if (mode === 2) {
        const isValid = rng.bool(0.5);
        const lines = isValid ? rng.int(26, 40) : rng.int(42, 58);
        return {
          prompt: `**IO Extract Vault Check:** ${name} selects a **${lines}-line** unmarked extract from ${rng.bool() ? eng1 : tr1} for the IB Individual Oral. Is this extract length \`valid\` or \`invalid\` under IB FA2021 rules?`,
          answer: { type: "text", accept: [isValid ? "valid" : "invalid"], display: isValid ? "valid" : "invalid" },
          hint: "Check the strict IB Individual Oral maximum extract ceiling: ≤ 40 lines.",
          traps: [
            {
              spec: { type: "text", accept: [isValid ? "invalid" : "valid"] },
              feedback: isValid
                ? `${lines} lines is within the strict ≤ 40-line IB maximum, so it is valid.`
                : `${lines} lines exceeds the strict 40-line IB ceiling, so it is invalid.`,
            },
          ],
          solution: [
            `IB FA2021 regulations cap each Individual Oral extract at **≤ 40 lines**.`,
            `Because ${lines} ${isValid ? "≤" : ">"} 40, this extract length is **${isValid ? "valid" : "invalid"}**.`,
          ],
        };
      } else {
        const isValid = rng.bool(0.5);
        const bullets = isValid ? rng.int(6, 10) : rng.int(11, 18);
        return {
          prompt: `**IO Outline Check:** ${name} prepares an Individual Oral outline with **${bullets} concise bullet points** covering ${eng1} and ${tr1}. Is this bullet count \`valid\` or \`invalid\` under IB FA2021 rules?`,
          answer: { type: "text", accept: [isValid ? "valid" : "invalid"], display: isValid ? "valid" : "invalid" },
          hint: "Recall the exact maximum number of bullet points permitted on an IB Individual Oral outline.",
          traps: [
            {
              spec: { type: "text", accept: [isValid ? "invalid" : "valid"] },
              feedback: isValid
                ? `${bullets} bullets sits within the maximum 10-bullet-point IB limit.`
                : `${bullets} bullets exceeds the strict 10-bullet-point IB cap.`,
            },
          ],
          solution: [
            `IB Individual Oral rules allow a maximum of **10 bullet points** on the candidate outline.`,
            `Since ${bullets} ${isValid ? "≤" : ">"} 10, this outline is **${isValid ? "valid" : "invalid"}**.`,
          ],
        };
      }
    }

    if (tier === 2) {
      const mode = rng.int(1, 3);
      if (mode === 1) {
        const studied = rng.int(13, 16);
        const remaining = studied - 3;
        return {
          prompt: `**HL Portfolio Audit [HL]:** ${name} studies **${studied} works** in HL English A: Literature, locking **2 works** for the IO (${eng1} + ${tr1}) and **1 distinct work** (${eng2}) for the HL Essay. How many studied works remain legally eligible for Paper 2?`,
          answer: { type: "number", value: remaining, display: `${remaining}` },
          hint: "At HL, subtract BOTH the 2 IO works AND the 1 HL Essay work (3 locked works total).",
          traps: [
            { spec: { type: "number", value: studied - 2 }, feedback: "Remember that the 1 HL Essay work is ALSO barred from Paper 2 — subtract 3 works total." },
          ],
          solution: [
            `Locked HL works: 2 (IO) + 1 (HL Essay) = 3 works.`,
            `Remaining legally eligible Paper 2 works: ${studied} − 3 = **${remaining}**.`,
          ],
        };
      } else if (mode === 2) {
        const isValid = rng.bool(0.5);
        const ioPair = isValid ? `${eng1} + ${tr1}` : rng.bool() ? `${eng1} + ${eng2}` : `${tr1} + ${tr2}`;
        const reason = isValid
          ? "It pairs 1 work originally written in English with 1 work in translation."
          : "The Individual Oral strictly requires **1 original English work + 1 translated work** (never two English or two translated works).";
        return {
          prompt: `**IO Pairing Audit:** For the IB English A: Literature Individual Oral, ${name} plans to pair **${ioPair}**. Is this language pairing \`valid\` or \`invalid\`?`,
          answer: { type: "text", accept: [isValid ? "valid" : "invalid"], display: isValid ? "valid" : "invalid" },
          hint: "In IB English A: Literature, check the mandatory language split for the two Individual Oral works.",
          traps: [
            { spec: { type: "text", accept: [isValid ? "invalid" : "valid"] }, feedback: reason },
          ],
          solution: [`Verdict: **${isValid ? "valid" : "invalid"}**.`, reason],
        };
      } else {
        const isValid = rng.bool(0.5);
        const wA = `W${rng.int(1, 3)}`;
        const wB = `W${rng.int(4, 6)}`;
        const wC = `W${rng.int(7, 9)}`;
        const wD = `W${rng.int(10, 12)}`;
        const p2Second = isValid ? wD : rng.bool() ? wA : wB;
        return {
          prompt: `**Non-Overlap Check:** ${name}'s SL Portfolio maps **IO:** ${wA} (${eng1}) + ${wB} (${tr1}); **Paper 2:** ${wC} (${eng2}) + ${p2Second}. Is this assessment plan \`valid\` or \`invalid\`?`,
          answer: { type: "text", accept: [isValid ? "valid" : "invalid"], display: isValid ? "valid" : "invalid" },
          hint: "Check whether ANY work code appears in both the Individual Oral and Paper 2.",
          traps: [
            {
              spec: { type: "text", accept: [isValid ? "invalid" : "valid"] },
              feedback: isValid
                ? `All four work codes (${wA}, ${wB}, ${wC}, ${wD}) are completely distinct — zero overlap!`
                : `Work ${p2Second} appears in both the Individual Oral and Paper 2, breaching the Non-Overlap Rule.`,
            },
          ],
          solution: [
            `Verdict: **${isValid ? "valid" : "invalid"}**.`,
            isValid
              ? `Zero overlap: IO uses {${wA}, ${wB}} and Paper 2 uses {${wC}, ${wD}}.`
              : `Illegal overlap: **${p2Second}** is already committed to the Individual Oral and cannot be reused in Paper 2.`,
          ],
        };
      }
    }

    // Tier 3: Full HL multi-constraint audit (valid vs invalid across IO, HL Essay, Paper 2, word count, line count)
    const flaw = rng.pick(["none", "none", "overlap-hle-p2", "overlap-io-hle", "wordcount-high", "extract-lines"] as const);
    const w1 = `W${rng.int(1, 2)}`;
    const w2 = `W${rng.int(3, 4)}`;
    const w3 = `W${rng.int(5, 6)}`;
    const w4 = `W${rng.int(7, 8)}`;
    const w5 = `W${rng.int(9, 10)}`;
    const lines = flaw === "extract-lines" ? rng.int(43, 54) : rng.int(31, 40);
    const words = flaw === "wordcount-high" ? rng.int(1540, 1690) : rng.int(1280, 1485);
    const hleWork = flaw === "overlap-io-hle" ? w2 : w3;
    const p2Work2 = flaw === "overlap-hle-p2" ? w3 : w5;
    const isValid = flaw === "none";

    const whyMap: Record<typeof flaw, string> = {
      none: `All rules hold: 1 English + 1 translated IO (${lines} lines ≤ 40), distinct HL Essay (${words} words within 1,200–1,500), and zero overlap into Paper 2.`,
      "overlap-hle-p2": `Breach: **${w3}** is used in BOTH the HL Essay and Paper 2, violating the Non-Overlap Rule.`,
      "overlap-io-hle": `Breach: **${w2}** is used in BOTH the Individual Oral and the HL Essay, violating the Non-Overlap Rule.`,
      "wordcount-high": `Breach: **${words} words** exceeds the strict **1,500-word** HL Essay ceiling.`,
      "extract-lines": `Breach: **${lines} lines** exceeds the strict **40-line** Individual Oral extract ceiling.`,
    };

    return {
      prompt: `**Full HL Portfolio Compliance Audit [HL]:** ${name}'s plan:\n• **IO:** ${w1} (${eng1}) + ${w2} (${tr1}), extracts ${lines} lines each\n• **HL Essay:** ${hleWork} (${eng2}), ${words} words\n• **Paper 2:** ${w4} (${tr2}) + ${p2Work2}\n\nIs this complete HL plan \`valid\` or \`invalid\`?`,
      answer: { type: "text", accept: [isValid ? "valid" : "invalid"], display: isValid ? "valid" : "invalid" },
      hint: "Audit four constraints in order: (1) IO ≤40 lines, (2) HL Essay 1,200–1,500 words, (3) IO = 1 English + 1 Translated, (4) Zero work overlap across IO, HL Essay & Paper 2.",
      traps: [
        {
          spec: { type: "text", accept: [isValid ? "invalid" : "valid"] },
          feedback: whyMap[flaw],
        },
      ],
      solution: [`Verdict: **${isValid ? "valid" : "invalid"}**.`, whyMap[flaw]],
    };
  },
};

export const drills: Drill[] = [
  craftVsSummaryDrill,
  ironyTypeDrill,
  toneRegisterShiftDrill,
  thesisReaderLensDrill,
  portfolioNonOverlapDrill,
];
