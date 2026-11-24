import type { Drill, Rng } from "./types.ts";

// ---------------------------------------------------------------------------
// Procedural skill drills for 2-time-and-space (AoE 2: Time & Space)
// 5 drills covering all 4 sections; designed for high prompt diversity across
// 200 seeds × 3 tiers with strict IB FA2021 accuracy and zero set texts.
// ---------------------------------------------------------------------------

const PRODUCTION_SCENARIOS = {
  t1: [
    { detail: "strict print censorship laws active when the manuscript was drafted", cue: "legal constraints during composition" },
    { detail: "weekly serialised magazine deadlines that dictated each section's cliffhanger", cue: "original publishing format" },
    { detail: "nineteenth-century property and inheritance statutes prevailing in the author's city", cue: "historical social conditions of creation" },
    { detail: "court patronage expectations shaping which political themes could be praised openly", cue: "institutional pressures during writing" },
    { detail: "wartime paper rationing and broadcast directives governing public speech in that decade", cue: "material realities at the time of writing" },
    { detail: "prevailing genre expectations in the literary market when the work first went to press", cue: "original publishing horizon" },
  ],
  t2: [
    { detail: "how colonial port trade codes shaped the commercial diction woven into its opening section", cue: "historical discourse shaping authorial diction" },
    { detail: "how post-independence print debates informed the work's cautious narrative frame", cue: "contemporary political climate during drafting" },
    { detail: "how civic licensing restrictions pushed the writer toward indirect domestic subtext", cue: "original institutional constraint shaping form" },
    { detail: "how rapid industrial rail expansion supplied the urgent clock-time metaphors drafted in the text", cue: "period cultural forces embedded during composition" },
    { detail: "how prevailing nineteenth-century marriage customs structured the speaker's guarded irony", cue: "social norms active when the text was composed" },
    { detail: "how regional oral ballad traditions shaped the work's original recurring refrain", cue: "literary conditions shaping original craft" },
  ],
  t3: [
    { detail: "why state-controlled literary journals in 1954 led the writer to disguise satire inside rural folklore", cue: "political publishing constraints at creation" },
    { detail: "how nineteenth-century imperial cartography shaped the work's original vocabulary of 'untamed' landscapes", cue: "period ideological discourse embedded at composition" },
    { detail: "how local performance conventions in the author's own century dictated the text's austere structural pauses", cue: "original performance conventions during drafting" },
    { detail: "how wartime rationing bulletins provided the bureaucratic register parodied in the opening passage", cue: "contemporary source discourse at the moment of writing" },
    { detail: "how strict subscription-library morality rules influenced the guarded omission at the climax", cue: "publishing gatekeepers shaping original composition" },
    { detail: "how newly mechanised factory shift schedules shaped the clipped, repetitive syntax drafted in 1922", cue: "material historical rhythms active during writing" },
  ],
};

const RECEPTION_SCENARIOS = {
  t1: [
    { detail: "how twenty-first-century readers reinterpret a nineteenth-century protagonist's silence as quiet resistance", cue: "later audience re-evaluation across time" },
    { detail: "why audiences in two different continents responded oppositely to the same text during its opening month", cue: "synchronic cross-cultural audience divergence" },
    { detail: "how contemporary postcolonial readers interrogate an older work's portrayal of indigenous guides", cue: "shifted modern critical horizon" },
    { detail: "why a scandalous 1880s work provoked public boycotts until publishers and directors softened its ending", cue: "audience resistance clashing with expectations" },
    { detail: "how modern ecocritical seminars re-read an industrial praise-piece as a warning about ecological hubris", cue: "new interpretive lens applied in a later era" },
    { detail: "how younger diasporic readers today feel sharper irony in an assimilation text than its 1960s reviewers did", cue: "generational shift in audience response" },
  ],
  t2: [
    { detail: "how a 2024 revival re-weights a marginalised servant's brief speech into the emotional centre of a 1790s text", cue: "later theatrical reinterpretation of fixed text" },
    { detail: "why modern readers hear quiet coercion inside a historical domestic passage once praised for 'dutiful prudence'", cue: "shifting moral horizon altering reader response" },
    { detail: "how readers in a newly independent nation reacted fiercely to a metropolitan work celebrated abroad in the same year", cue: "synchronic divergence across cultural communities" },
    { detail: "why contemporary feminist criticism foregrounds textual silences that nineteenth-century reviewers largely ignored", cue: "changing interpretive priorities over time" },
    { detail: "how a new museum-repatriation climate transforms the ironic force of an 1860s auction-room passage today", cue: "modern ethical context re-illuminating existing craft" },
    { detail: "why university readers across three regions debate whether a twentieth-century protagonist is heroic or complicit", cue: "plural cross-cultural audience interpretation" },
  ],
  t3: [
    { detail: "how contemporary directors re-staging a seventeenth-century work without changing a word invert sympathy toward a dispossessed islander", cue: "diachronic reception activating latent textual tensions" },
    { detail: "why readers in a high-surveillance state immediately heard political allegory in a newly translated text viewed as playful elsewhere", cue: "synchronic reception shaped by distinct political horizons" },
    { detail: "how changing attitudes to mental health cause modern readers to question an older speaker's 'rational' dismissal of his wife", cue: "shifted ethical horizon unsettling surface reliability" },
    { detail: "why a 1950s domestic work once dismissed as melodrama is newly acclaimed today for exposing suburban enclosure", cue: "diachronic re-evaluation across shifting aesthetic norms" },
    { detail: "how two contemporary diaspora book clubs in London and Singapore arrive at contrasting readings of the same exile work", cue: "synchronic cross-cultural reception" },
    { detail: "why modern audiences recoil at a comic subplot that originally drew applause under eighteenth-century class hierarchies", cue: "clash between inherited text and transformed moral horizon" },
  ],
};

const GENRES_SHORT = ["novel", "stage play", "lyric poem", "memoir", "short story", "satirical essay"] as const;
const CITIES_GENERIC = ["a coastal port", "an industrial capital", "a former colonial hub", "a border city", "a mountain province", "a river metropolis"] as const;
const VERBS_ANALYTIC = ["examines", "investigates", "traces", "explores", "evaluates"] as const;

const drill1: Drill = {
  id: "2-time-and-space.production-vs-reception",
  topicId: "2-time-and-space",
  title: "Production vs Reception Contexts",
  level: 1,
  guideRef: "production-reception-contexts",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const isProd = rng.bool();
    const genre = rng.pick(GENRES_SHORT);
    const place = rng.pick(CITIES_GENERIC);
    const verb = rng.pick(VERBS_ANALYTIC);
    const key = tier === 1 ? "t1" : tier === 2 ? "t2" : "t3";
    const sc = isProd ? rng.pick(PRODUCTION_SCENARIOS[key]) : rng.pick(RECEPTION_SCENARIOS[key]);

    const stemLead = rng.pick([
      `An IB essay on an unseen ${genre} set in ${place} ${verb}`,
      `In their Learner Portfolio, a student reading a ${genre} from ${place} ${verb}`,
      `During an Individual Oral, a candidate discussing a ${genre} rooted in ${place} ${verb}`,
    ]);
    const prompt = `${stemLead} ${sc.detail}.\n\nClassify this contextual focus as **production** or **reception**.`;

    return {
      prompt,
      answer: isProd
        ? { type: "text", accept: ["production", "context of production"], display: "production" }
        : { type: "text", accept: ["reception", "context of reception"], display: "reception" },
      traps: [
        {
          spec: isProd
            ? { type: "text", accept: ["reception", "context of reception"] }
            : { type: "text", accept: ["production", "context of production"] },
          feedback: isProd
            ? "This focuses on forces active while the work was being created, not later audience responses — that is **production**."
            : "This focuses on how audiences interpret or re-evaluate the text across eras or cultures, not its original composition — that is **reception**.",
        },
      ],
      hint: "Ask: are these forces shaping how the text was *created* (production), or how *audiences encounter and reinterpret* it (reception)?",
      solution: [
        `The key cue is ${sc.cue}.`,
        isProd
          ? "Conditions shaping how a work was written and originally circulated belong to **context of production**."
          : "How later (diachronic) or culturally distinct (synchronic) audiences interpret a text belongs to **context of reception**.",
      ],
    };
  },
};

// ---------------------------------------------------------------------------
// Drill 2: Translation strategies (Domestication / Foreignisation / Register loss / Literal)
// ---------------------------------------------------------------------------
const TRANS_DOM = [
  { item: "a culturally specific autumn harvest proverb", action: "replaces it with the familiar British idiom 'make hay while the sun shines'" },
  { item: "an untranslatable regional mourning sweet", action: "swaps it for 'plain funeral biscuits' so English readers need no footnote" },
  { item: "inverted source-language poetic clauses", action: "smooths them into brisk, everyday conversational English syntax" },
  { item: "regional folk nicknames carrying clan history", action: "converts them into casual modern English nicknames like 'Bud' and 'Pal'" },
  { item: "traditional street-market banter full of local allusions", action: "rewrites the dialogue into native London pub slang for effortless fluency" },
  { item: "an unfamiliar monsoon-wind metaphor", action: "substitutes a familiar northern-hemisphere winter storm cliché" },
];

const TRANS_FOR = [
  { item: "the intimate kinship term *Elder Sister*", action: "retains it unchanged rather than flattening it into plain 'my sister'" },
  { item: "a culturally specific architectural threshold (*engawa*)", action: "keeps the source noun in italics alongside subtle contextual cues" },
  { item: "unusual compound nature metaphors ('winter-bone', 'salt-ache')", action: "preserves their striking foreign cadence instead of paraphrasing into plain prose" },
  { item: "a regional hospitality blessing referencing ancestral hearths", action: "renders every cultural image intact rather than swapping in 'make yourself at home'" },
  { item: "a formal ceremonial greeting title", action: "keeps the elevated source-culture address visible so English readers sense social distance" },
  { item: "an untranslatable nostalgia term", action: "preserves the original term with a concise glossary note rather than simplifying it to 'sadness'" },
];

const TRANS_REG = [
  { item: "a climactic shift from formal *vous* to defiant intimate *tu*", action: "disappears into identical modern English 'you', obscuring the social boundary-crossing" },
  { item: "a servant dropping an honorific suffix when confronting an employer", action: "flattens in English into standard 'you', hiding the abrupt rupture in deference" },
  { item: "age-graded pronouns marking junior-to-elder respect", action: "collapse into neutral English second-person address without tonal compensation" },
  { item: "a courtier switching from royal plural address to blunt familiar speech", action: "becomes invisible in plain English 'you' unless clarified in a translator's footnote" },
  { item: "distinct formal and affectionate maternal terms", action: "flatten into a single clinical English noun that shifts how readers judge emotional warmth" },
  { item: "a dialectal class marker differentiating rural and metropolitan speakers", action: "merges into uniform standard English prose, erasing vocal hierarchy" },
];

const TRANS_LIT = [
  { item: "the figurative phrase meaning 'to lose courage'", action: "renders it word for word as 'his liver fell into his sandals', producing stiff dictionary English" },
  { item: "an idiomatic farewell wishing safe passage", action: "copies each lexical root mechanically ('may your shadow remain heavy on the road') with no rhythmic shaping" },
  { item: "a witty pun built on double meanings", action: "prints a rigid word-for-word gloss that preserves dictionary sense while draining all comic rhythm" },
  { item: "a compressed classical stanza", action: "maps each word strictly in source-language order purely as an unpolished crib sheet" },
  { item: "a colloquial coastal taunt", action: "translates every noun and preposition mechanically without adjusting for English phrasing or tone" },
  { item: "an idiomatic blessing for a new home", action: "renders each morpheme strictly verbatim ('salt and bread sit inside your roof-beam') as a bare lexical gloss" },
];

const TRANS_WORK_TYPES = ["translated play", "translated novel", "translated lyric poem", "translated folk tale", "translated novella", "translated monologue"] as const;

const drill2: Drill = {
  id: "2-time-and-space.translation-strategies",
  topicId: "2-time-and-space",
  title: "Translation Strategies & Register Shifts",
  level: 2,
  guideRef: "works-in-translation",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const work = rng.pick(TRANS_WORK_TYPES);
    const pool =
      tier === 1
        ? (["domestication", "foreignisation"] as const)
        : tier === 2
          ? (["domestication", "foreignisation", "register loss"] as const)
          : (["domestication", "foreignisation", "register loss", "literal translation"] as const);
    const target = rng.pick(pool);

    const choicesLabel =
      tier === 1
        ? "**domestication** or **foreignisation**"
        : tier === 2
          ? "**domestication**, **foreignisation**, or **register loss**"
          : "**domestication**, **foreignisation**, **register loss**, or **literal translation**";

    const intro = rng.pick([
      `In an English edition of a ${work},`,
      `While preparing an Individual Oral on a ${work}, you notice that`,
      `Examining a ${work} for AoE 2, a reader observes how`,
    ]);

    if (target === "domestication") {
      const sc = rng.pick(TRANS_DOM);
      return {
        prompt: `${intro} the translator encounters ${sc.item} and ${sc.action}.\n\nClassify this phenomenon as ${choicesLabel}.`,
        answer: { type: "text", accept: ["domestication", "domesticating"], display: "domestication" },
        traps: [
          {
            spec: { type: "text", accept: ["foreignisation", "foreignization"] },
            feedback: "Foreignisation preserves source-culture texture; replacing cultural markers with familiar target-language equivalents is **domestication**.",
          },
          {
            spec: { type: "text", accept: ["register loss", "register flattening"] },
            feedback: "Register loss happens when English grammar flattens status/pronoun distinctions; actively substituting native idioms is **domestication**.",
          },
        ],
        hint: "Ask whether the translator moves the text toward effortless Anglophone familiarity (domestication) or preserves cultural distance (foreignisation).",
        solution: [
          `Substituting familiar target-language idioms or syntax for ${sc.item} prioritises seamless English fluency.`,
          "Under Lawrence Venuti's spectrum, this strategy is **domestication**.",
        ],
      };
    }

    if (target === "foreignisation") {
      const sc = rng.pick(TRANS_FOR);
      return {
        prompt: `${intro} the translator encounters ${sc.item} and ${sc.action}.\n\nClassify this phenomenon as ${choicesLabel}.`,
        answer: {
          type: "text",
          accept: ["foreignisation", "foreignization", "foreignising", "foreignizing"],
          display: "foreignisation",
        },
        traps: [
          {
            spec: { type: "text", accept: ["domestication", "domesticating"] },
            feedback: "Domestication smooths away cultural strangeness; retaining source-culture nouns, titles, or cadence is **foreignisation**.",
          },
        ],
        hint: "Notice that the translator deliberately preserves visible markers of the source culture rather than swapping in English clichés.",
        solution: [
          `Preserving ${sc.item} invites the reader to step toward the source culture's social and poetic texture.`,
          "Under Lawrence Venuti's spectrum, this strategy is **foreignisation** (also spelled *foreignization*).",
        ],
      };
    }

    if (target === "register loss") {
      const sc = rng.pick(TRANS_REG);
      return {
        prompt: `${intro} ${sc.item} ${sc.action}.\n\nClassify this phenomenon as ${choicesLabel}.`,
        answer: {
          type: "text",
          accept: ["register loss", "register flattening", "register shift", "pronoun flattening"],
          display: "register loss",
        },
        traps: [
          {
            spec: { type: "text", accept: ["foreignisation", "foreignization"] },
            feedback: "Foreignisation would preserve visible hierarchy; losing formal vs intimate social nuance in English 'you' is **register loss**.",
          },
          {
            spec: { type: "text", accept: ["domestication", "domesticating"] },
            feedback: "Here the specific linguistic problem is flattening formal/intimate social status or pronouns into uniform English — **register loss**.",
          },
        ],
        hint: "Focus on what disappears when English lacks formal/informal pronouns or honorific hierarchy.",
        solution: [
          `When ${sc.item} flattens into uniform English phrasing, crucial markers of social hierarchy or intimacy vanish.`,
          "This translation phenomenon is **register loss** (or **register flattening**).",
        ],
      };
    }

    const sc = rng.pick(TRANS_LIT);
    return {
      prompt: `${intro} the translator encounters ${sc.item} and ${sc.action}.\n\nClassify this phenomenon as ${choicesLabel}.`,
      answer: {
        type: "text",
        accept: ["literal translation", "literal", "literal gloss", "word-for-word"],
        display: "literal translation",
      },
      traps: [
        {
          spec: { type: "text", accept: ["domestication", "domesticating"] },
          feedback: "Domestication aims for smooth, idiomatic English; a stiff word-for-word dictionary rendering is a **literal translation**.",
        },
        {
          spec: { type: "text", accept: ["foreignisation", "foreignization"] },
          feedback: "Thoughtful foreignisation crafts literary rhythm while honouring cultural texture; an unshaped mechanical word-for-word crib is a **literal translation**.",
        },
      ],
      hint: "Look for cues like 'word for word', 'mechanically', or 'bare lexical gloss'.",
      solution: [
        "Copying dictionary equivalents word for word without literary shaping of rhythm or tone produces a **literal translation** (or literal gloss).",
      ],
    };
  },
};

// ---------------------------------------------------------------------------
// Drill 3: Identifying fallacies vs analytical textual contextualisation
// ---------------------------------------------------------------------------
const BIO_SPEAKERS = ["the speaker's", "the protagonist's", "the narrator's", "the heroine's", "the elder's"] as const;
const BIO_MOTIFS = [
  "dread of locked doors",
  "insomnia on the rain-slicked pier",
  "silence at the banquet table",
  "obsession with torn family letters",
  "unease inside cramped apartments",
  "bitter irony about railway departures",
] as const;
const BIO_LEAPS = [
  "directly confesses the author's own childhood displacement in 1948",
  "simply mirrors the poet's personal divorce recorded in private diaries",
  "proves the novelist secretly resented their own father's business debts",
  "is an autobiographical confession of the playwright's years of exile",
  "reflects the writer's real-life grief after leaving their hometown",
] as const;

const INT_AGENTS = ["the poet", "the novelist", "the playwright", "the essayist"] as const;
const INT_CLAIMS = [
  "clearly wanted readers to feel outraged at wartime propaganda committees",
  "undoubtedly meant to force parliamentary ministers to abolish class privilege",
  "secretly intended audiences to reject every form of urban modernisation",
  "deliberately tried to make readers sympathise with rebellious border guards",
  "plainly wished to teach young people that imperial maps are always dishonest",
  "definitely aimed to persuade citizens to abandon traditional family rituals",
] as const;
const INT_DEVICES = [
  "By using abrupt caesuras,",
  "Through dark storm imagery,",
  "By closing Act II with a slamming door,",
  "Through ironised bureaucratic nouns,",
  "By juxtaposing harbour fog with brass clocks,",
] as const;

const DUMP_TOPICS = [
  "In the Victorian era, married women possessed limited legal property rights and industrial factories expanded rapidly across northern ports.",
  "During the mid-twentieth century, decolonisation redrew national frontiers across Asia and Africa, triggering widespread administrative transition.",
  "Following World War I, European societies experienced severe economic dislocation, strict rationing, and widespread disillusionment with official rhetoric.",
  "In the 1950s, postwar suburban development reshaped urban geography while mass-media broadcasts promoted ideals of domestic uniformity.",
  "Throughout the late nineteenth century, rapid railway expansion standardised national clock-time and accelerated rural-to-urban migration.",
  "In early seventeenth-century London, royal patronage and strict theatre licensing shaped public performances across commercial playhouses.",
] as const;
const DUMP_FOLLOWS = [
  "Many historians agree this period brought major economic upheaval across multiple social classes.",
  "These political reforms lasted for decades and affected millions of ordinary citizens.",
  "Such historical background explains why the century was widely remembered as a turbulent era.",
  "Textbooks note that these structural shifts transformed national politics and daily employment.",
] as const;

const CTX_DEVICES = [
  "By pairing tender 'hearth' imagery with the financial noun 'ledger'",
  "Through the jarring juxtaposition of 'stamped ration cards' against 'promised victory'",
  "By framing the bolted brass turnstile under flickering fluorescent lighting",
  "Through the recurring motif of 'unopened suitcases' beside repainted street-signs",
  "By contrasting clipped 'London bulletins' against monsoon rain tearing 'tin sheets'",
  "Through the violent verb 'gutting' hidden behind 'pastel limewash' facades",
] as const;
const CTX_VERBS = ["dramatises", "interrogates", "registers", "exposes", "complicates"] as const;
const CTX_TENSIONS = [
  "how commercial patriarchy encodes transactional anxiety inside polite domestic duty",
  "how wartime euphemistic rhetoric clashes against material scarcity",
  "how postcolonial borders institutionalise liminal displacement",
  "how imperial centre-periphery distance fractures official narratives of calm",
  "how heritage gentrification commodifies working-class cultural memory",
  "how industrial clock-time subordinates lived ecological rhythms",
] as const;

const drill3: Drill = {
  id: "2-time-and-space.fallacy-vs-contextualisation",
  topicId: "2-time-and-space",
  title: "Fallacies vs Textual Contextualisation",
  level: 2,
  guideRef: "context-without-fallacy",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const categories =
      tier === 1
        ? (["biographical fallacy", "intentional fallacy", "textual contextualisation"] as const)
        : (["biographical fallacy", "intentional fallacy", "history dump", "textual contextualisation"] as const);
    const target = rng.pick(categories);

    const choicesLabel =
      tier === 1
        ? "**biographical fallacy**, **intentional fallacy**, or **textual contextualisation**"
        : "**biographical fallacy**, **intentional fallacy**, **history dump**, or **textual contextualisation**";

    const lead = rng.pick([
      "Read this student essay sentence:",
      "Evaluate this Paper 2 draft sentence:",
      "Diagnose this commentary sentence:",
    ]);

    if (target === "biographical fallacy") {
      const sp = rng.pick(BIO_SPEAKERS);
      const motif = rng.pick(BIO_MOTIFS);
      const leap = rng.pick(BIO_LEAPS);
      const sentence =
        tier === 3
          ? `“Although framed in vivid diction, ${sp} ${motif} ${leap}.”`
          : `“${sp.charAt(0).toUpperCase() + sp.slice(1)} ${motif} ${leap}.”`;
      return {
        prompt: `${lead}\n\n> ${sentence}\n\nClassify this move as ${choicesLabel}.`,
        answer: {
          type: "text",
          accept: ["biographical fallacy", "the biographical fallacy", "biographical"],
          display: "biographical fallacy",
        },
        traps: [
          {
            spec: { type: "text", accept: ["intentional fallacy", "the intentional fallacy"] },
            feedback: "Intentional fallacy claims to know what the author 'wanted/intended'; collapsing speaker/character directly into the author's real life is **biographical fallacy**.",
          },
          {
            spec: { type: "text", accept: ["textual contextualisation", "textual contextualization"] },
            feedback: "Even if diction is mentioned briefly, equating a crafted persona directly with the writer's private life commits **biographical fallacy**.",
          },
        ],
        hint: "Notice how the sentence collapses a fictional speaker/protagonist directly into the historical author's private life.",
        solution: [
          "Treating a literary persona's emotion or motif as a direct diary confession of the author's personal biography commits the **biographical fallacy**.",
          "Fix it by analysing how textual choices *construct* the emotion rather than attributing it to the writer's private history.",
        ],
      };
    }

    if (target === "intentional fallacy") {
      const agent = rng.pick(INT_AGENTS);
      const claim = rng.pick(INT_CLAIMS);
      const dev = rng.pick(INT_DEVICES);
      const sentence = tier >= 2 ? `“${dev} ${agent} ${claim}.”` : `“${agent.charAt(0).toUpperCase() + agent.slice(1)} ${claim}.”`;
      return {
        prompt: `${lead}\n\n> ${sentence}\n\nClassify this move as ${choicesLabel}.`,
        answer: {
          type: "text",
          accept: ["intentional fallacy", "the intentional fallacy", "intentional"],
          display: "intentional fallacy",
        },
        traps: [
          {
            spec: { type: "text", accept: ["biographical fallacy", "the biographical fallacy"] },
            feedback: "Biographical fallacy maps real life events onto a character; claiming mind-reading access to what the writer 'wanted/meant/intended' is **intentional fallacy**.",
          },
          {
            spec: { type: "text", accept: ["textual contextualisation", "textual contextualization"] },
            feedback: "Naming a device at the start does not rescue mind-reading verbs like 'wanted', 'meant', or 'intended' — it still commits **intentional fallacy**.",
          },
        ],
        hint: "Run the Verb Audit: look for mind-reading claims about what the author privately 'wanted', 'meant', or 'intended'.",
        solution: [
          "Claiming certainty about the writer's private psychological purpose ('wanted', 'meant', 'intended', 'tried to') commits Wimsatt and Beardsley's **intentional fallacy**.",
          "Even when a stylistic device is named first, keep the *text*—not the author's private mind—as the grammatical subject.",
        ],
      };
    }

    if (target === "history dump") {
      const top = rng.pick(DUMP_TOPICS);
      const fol = rng.pick(DUMP_FOLLOWS);
      return {
        prompt: `${lead}\n\n> “${top} ${fol}”\n\nClassify this move as ${choicesLabel}.`,
        answer: {
          type: "text",
          accept: ["history dump", "history-essay dump", "history essay dump", "historical dump", "context dump"],
          display: "history dump",
        },
        traps: [
          {
            spec: { type: "text", accept: ["textual contextualisation", "textual contextualization"] },
            feedback: "Notice there is ZERO reference to a literary text, quotation, or authorial choice — detached historical background is a **history dump**.",
          },
        ],
        hint: "Check whether a single quotation, literary technique, or textual choice appears anywhere in the passage.",
        solution: [
          "Reciting standalone textbook history unanchored to any quotation, form, or authorial choice is a **history dump** (or history-essay dump).",
          "Anchor historical awareness inside a specific literary choice using the Anchor-in-Craft Chain.",
        ],
      };
    }

    const dev = rng.pick(CTX_DEVICES);
    const verb = rng.pick(CTX_VERBS);
    const tens = rng.pick(CTX_TENSIONS);
    const subject = rng.pick(["the passage", "the stanza", "the scene", "the narrative", "the dialogue"]);
    return {
      prompt: `${lead}\n\n> “${dev}, ${subject} ${verb} ${tens}.”\n\nClassify this move as ${choicesLabel}.`,
      answer: {
        type: "text",
        accept: [
          "textual contextualisation",
          "textual contextualization",
          "contextualisation",
          "contextualization",
          "analytical contextualisation",
          "analytical contextualization",
        ],
        display: "textual contextualisation",
      },
      traps: [
        {
          spec: { type: "text", accept: ["history dump", "history-essay dump", "historical dump"] },
          feedback: "Unlike a detached history dump, this sentence opens directly with embedded literary craft and links it smoothly to cultural tension — **textual contextualisation**.",
        },
        {
          spec: { type: "text", accept: ["intentional fallacy", "biographical fallacy"] },
          feedback: "Notice the analytical subject is the *text* ('the passage dramatises/interrogates…'), with zero biographical or mind-reading speculation — **textual contextualisation**.",
        },
      ],
      hint: "Check whether the sentence follows the Anchor-in-Craft Chain: Textual Choice → Analytical Verb → Cultural/Historical Tension.",
      solution: [
        "The sentence anchors cultural context directly inside an embedded textual choice and makes the text—not the author's biography or private intention—the grammatical subject.",
        "This exemplifies Band 5 **textual contextualisation**.",
      ],
    };
  },
};

// ---------------------------------------------------------------------------
// Drill 4: Spatial symbolism matching (Domestic / Urban / Colonial / Borderland)
// ---------------------------------------------------------------------------
const SPATIAL_DATA = {
  domestic: {
    cores: [
      "Behind the drawn velvet parlour curtains",
      "From the narrow service staircase beneath the dining room",
      "Beside the locked cedar dowry chest under the bedroom window",
      "Across the polished mahogany banister separating kitchen from drawing room",
      "Inside the shuttered conservatory where teacups were counted each afternoon",
    ],
    details: [
      "every visiting caller was quietly measured against rigid family propriety.",
      "the laughter stopped abruptly whenever the baize pantry door swung open.",
      "an iron key hung on the housekeeper's ribbon to police who crossed the threshold.",
      "spotless porcelain disguised unspoken generational resentment beneath polite hush.",
      "curated household routine turned sanctuary into quiet gendered enclosure.",
    ],
    t3Details: [
      "even as railway sirens echoed faintly from the far edge of town, household rules locked every shutter tight.",
      "though an overseas map hung framed upstairs, private marital obedience governed every glance across the hearth.",
      "while street-lamps flickered outside, the family parlour policed respectability with silent, claustrophobic precision.",
      "despite distant harbour bells, the kitchen threshold remained the household's sharpest border of class and gender.",
      "even with modern headlines folded on the sideboard, ancestral parlour decorum muted every private disagreement.",
    ],
  },
  urban: {
    cores: [
      "Beneath the vibrating commuter overpass at 06:15",
      "Across ten thousand lit apartment windows stacked above the rain-slicked avenue",
      "Inside the neon-lit metro concourse where turnstiles clicked in rapid sequence",
      "Between mirror-glass corporate towers casting narrow shadows across the tarmac",
      "Along the crowded industrial boulevard timed by factory shift whistles",
    ],
    details: [
      "strangers brushed shoulders in dense proximity while remaining wholly anonymous.",
      "mechanical timestamps converted human names into a single numbered hum.",
      "an unlicensed street vendor measured morning heat directly beneath rushing salaried commuters.",
      "old brick shophouse facades stood hollowed out behind climate-controlled boutiques.",
      "relentless commercial velocity drowned out neighbourhood conversation.",
    ],
    t3Details: [
      "though a single potted jasmine sat on a fifth-floor ledge, towering concrete and glowing turnstiles reduced daily life to anonymous tempo.",
      "even where heritage paint lingered on one facade, frantic transit schedules and sterile glass corridors governed every step.",
      "despite a quiet family supper memory, the roaring power grid and neon subway signs dictated the rhythm of the block.",
      "while one kiosk kept an older sign, industrial shift whistles and crowded escalators stratified the modern metropolis.",
      "even beside a tiny courtyard tree, hyper-dense tenements and buzzing billboards turned proximity into urban alienation.",
    ],
  },
  colonial: {
    cores: [
      "Beneath the whirring punkah fan of the members-only highland club",
      "Across the governor's linen map bearing freshly printed European surnames",
      "Along the whitewashed plantation veranda overlooking the fenced cane fields",
      "Inside the imperial museum gallery where seized bronze relics sat under gas-lamps",
      "Along the terraced cedar ridge where official surveyors hammered copper property pegs",
    ],
    details: [
      "local fishermen still steered every dawn by the reef's older, unprinted name.",
      "the commissioner signed a sweeping land decree without glancing up from imported cricket scores.",
      "imperial naming overwrote sacred regional geography as 'Lot 14' in neat ledger ink.",
      "crisp broadcasts from the distant metropole claimed serene order over restless territories.",
      "spatial segregation separated imported leisure from extracted local labour.",
    ],
    t3Details: [
      "even inside a quiet household study, the framed imperial atlas and segregated club pass enforced metropolitan supremacy over local soil.",
      "though paved boulevards ringed the port, the bronze governor's plinth and renamed wharves inscribed empire directly onto native stone.",
      "despite domestic teacups rattling on the tray, the administrator's land ledger and survey flags asserted colonial territorial custody.",
      "while rain hammered the tin godown roof, distant London bulletins tried to project imperial calm across the subordinate harbour.",
      "even on a tranquil coastline, the chartered company's customs flag converted ancestral marshland into extracted metropolitan wealth.",
    ],
  },
  borderland: {
    cores: [
      "On the narrow iron footbridge suspended between two rival customs sheds",
      "Inside the frontier railway waiting room where the platform clock had stopped",
      "Beside the barbed-wire checkpoint dividing a valley into two new alphabets",
      "At the twilight ferry pier where stateless travellers held folded transit visas",
      "Along the coastal sandbar separating an abandoned village from a foreign shore",
    ],
    details: [
      "passengers clutched brass house-keys to courtyards no official street-sign remembered.",
      "passports carried faded stamps from two countries that no longer shared a boundary.",
      "grandmothers spoke two overlapping languages while waiting between rival flags.",
      "unopened rattan suitcases sat tied with twine in prolonged threshold limbo.",
      "hybrid memories refused to settle neatly on either side of the surveyor's line.",
    ],
    t3Details: [
      "though she carried a domestic silk shawl from her grandmother's parlour, the twin sentry boxes and visa desk held her body in threshold exile.",
      "even as city lights flickered far across the strait, the customs barrier and unrecognised passport suspended the travellers between nations.",
      "despite colonial survey stamps on their papers, the stopped frontier clock and footbridge placed identity in liminal transit.",
      "while clutching a kitchen spice-tin, the migrants waited on the partition platform between two competing jurisdictions.",
      "even beside quiet harbour water, the inspection turnstile and bilingual notice board framed belonging as unfinished border crossing.",
    ],
  },
};

const drill4: Drill = {
  id: "2-time-and-space.spatial-symbolism",
  topicId: "2-time-and-space",
  title: "Symbolic Spatial Archetypes",
  level: 2,
  guideRef: "historical-cultural-lenses",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const archetypes = ["domestic", "urban", "colonial", "borderland"] as const;
    const target = rng.pick(archetypes);
    const data = SPATIAL_DATA[target];
    const core = rng.pick(data.cores);
    const detail = tier === 3 ? rng.pick(data.t3Details) : rng.pick(data.details);

    const lead =
      tier === 1
        ? rng.pick([
            "Read this unseen prose miniature:",
            "Examine this unseen literary setting:",
            "Consider this unseen descriptive line:",
          ])
        : tier === 2
          ? rng.pick([
              "Analyse the spatial power dynamic in this unseen extract:",
              "Read this unseen literary scene closely:",
              "Identify the primary symbolic space driving this unseen miniature:",
            ])
          : rng.pick([
              "This layered unseen extract weaves a secondary motif into one dominant spatial lens:",
              "Look past the secondary backdrop to identify the *primary* spatial archetype here:",
              "Determine which overarching symbolic space controls power in this unseen passage:",
            ]);

    const prompt = `${lead}\n\n> *“${core}, ${detail}”*\n\nClassify the primary symbolic space as **domestic**, **urban**, **colonial**, or **borderland**.`;

    const acceptMap: Record<(typeof archetypes)[number], string[]> = {
      domestic: ["domestic", "domestic space"],
      urban: ["urban", "urban space"],
      colonial: ["colonial", "colonial space", "postcolonial", "postcolonial space"],
      borderland: ["borderland", "borderland space", "liminal", "liminal space"],
    };

    const otherTraps = archetypes
      .filter((a) => a !== target)
      .map((a) => ({
        spec: { type: "text" as const, accept: acceptMap[a] },
        feedback: `Look closely at the dominant architectural and power cues (${core.toLowerCase()}): the primary symbolic arena here is **${target}** space, not ${a} space.`,
      }));

    return {
      prompt,
      answer: { type: "text", accept: acceptMap[target], display: target },
      traps: otherTraps,
      hint: "Ask who controls access and movement in the dominant architectural boundary: home interior (domestic), metropolis (urban), imperial authority (colonial), or threshold/frontier transit (borderland).",
      solution: [
        `The controlling spatial frame — “${core}” — anchors the passage's power dynamic.`,
        `This exemplifies **${target}** space${target === "borderland" ? " (liminal threshold space)" : ""}.`,
      ],
    };
  },
};

// ---------------------------------------------------------------------------
// Drill 5: IB Literature Portfolio & Translated-Work Counts (SL vs HL)
// ---------------------------------------------------------------------------
const SCHOOL_LABELS = [
  "An international IB school",
  "A Year 12 Literature cohort",
  "A Diploma English department",
  "A DP1 curriculum planner",
  "A Year 13 IB candidate",
] as const;

const drill5: Drill = {
  id: "2-time-and-space.translated-portfolio-counts",
  topicId: "2-time-and-space",
  title: "IB Translated-Work & Portfolio Counts (SL/HL)",
  level: 1,
  guideRef: "works-in-translation",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const label = rng.pick(SCHOOL_LABELS);
    const isHL = rng.bool();
    const minTotal = isHL ? 13 : 9;
    const minEng = isHL ? 5 : 4;
    const minTrans = isHL ? 4 : 3;
    const lvl = isHL ? "HL" : "SL";

    if (tier === 1) {
      const variant = rng.int(1, 3);
      if (variant === 1) {
        // How many additional PRL translated works needed?
        const currentTrans = rng.int(0, minTrans - 1);
        const currentEng = rng.int(minEng, minEng + 2);
        const needed = minTrans - currentTrans;
        const altTransTrap = (isHL ? 3 : 4) - currentTrans;
        const trapVal = altTransTrap > 0 && altTransTrap !== needed ? altTransTrap : needed + 1;
        return {
          prompt: `${label} is planning an IB English A: Literature **${lvl}** syllabus. So far they have selected **${currentEng}** PRL works originally in English and **${currentTrans}** PRL works in translation. What is the **minimum** number of additional PRL works in translation required to satisfy official IB ${lvl} rules?`,
          answer: { type: "number", value: needed, display: String(needed) },
          traps: [
            {
              spec: { type: "number", value: trapVal },
              feedback: `Check SL vs HL minimums carefully: SL requires at least **3** translated PRL works; HL requires at least **4**.`,
            },
          ],
          hint: `Recall the official IB ${lvl} PRL translated-work minimum (${isHL ? "4 out of 13" : "3 out of 9"}), then subtract ${currentTrans}.`,
          solution: [
            `Official IB English A: Literature **${lvl}** requires at least **${minTrans}** PRL works in translation.`,
            `Additional translated works needed = ${minTrans} − ${currentTrans} = **${needed}**.`,
          ],
        };
      }
      if (variant === 2) {
        // How many total works remaining to reach minimum total?
        const currentEng = rng.int(minEng, minEng + 1);
        const currentTrans = rng.int(minTrans, minTrans + 1);
        const soFar = currentEng + currentTrans;
        const needed = minTotal - soFar;
        const wrongLevelMin = isHL ? 9 : 13;
        const trapVal = wrongLevelMin > soFar && wrongLevelMin - soFar !== needed ? wrongLevelMin - soFar : needed + (isHL ? -1 : 4);
        const safeTrap = trapVal >= 0 && trapVal !== needed ? trapVal : needed + 2;
        return {
          prompt: `${label} has mapped **${currentEng}** original English works and **${currentTrans}** works in translation (${soFar} works so far) for an IB English A: Literature **${lvl}** course. How many more works must be added to reach the IB **${lvl}** minimum total?`,
          answer: { type: "number", value: needed, display: String(needed) },
          traps: [
            {
              spec: { type: "number", value: safeTrap },
              feedback: `Check the total minimum works carefully: **SL = 9** works minimum, **HL = 13** works minimum.`,
            },
          ],
          hint: `Recall the minimum total works required at ${lvl} (SL = 9, HL = 13) and subtract ${soFar}.`,
          solution: [
            `IB English A: Literature **${lvl}** requires a minimum of **${minTotal}** works in total.`,
            `Remaining works needed = ${minTotal} − ${soFar} = **${needed}**.`,
          ],
        };
      }
      // Variant 3: Remaining works eligible for Paper 2 after IO (+ HL Essay if HL)
      const total = isHL ? rng.int(13, 16) : rng.int(9, 12);
      const locked = isHL ? 3 : 2;
      const rem = total - locked;
      return {
        prompt: `${label} designs an IB **${lvl}** course containing **${total}** studied works in total. Under the strict IB non-overlap rule, after a ${lvl} student commits their required works to the **Individual Oral**${isHL ? " (2 works) and the **HL Essay** (1 work)" : " (1 English + 1 translated)"}, how many studied works remain eligible for **Paper 2**?`,
        answer: { type: "number", value: rem, display: String(rem) },
        traps: [
          {
            spec: { type: "number", value: total - (isHL ? 2 : 1) },
            feedback: isHL
              ? "At HL, subtract BOTH the 2 IO works AND the 1 HL Essay work (3 works total)."
              : "The Individual Oral locks 2 works (1 English + 1 translated), not 1.",
          },
          {
            spec: { type: "number", value: total },
            feedback: "Remember the non-overlap rule: works used in the IO or HL Essay cannot be reused in Paper 2.",
          },
        ],
        hint: `Apply the non-overlap rule: subtract ${isHL ? "2 (IO) + 1 (HL Essay) = 3" : "2 (IO)"} from ${total}.`,
        solution: [
          `Total studied works = ${total}.`,
          `Works locked by non-overlap = ${isHL ? "2 (Individual Oral) + 1 (HL Essay) = 3" : "2 (Individual Oral: 1 English + 1 translated)"}.`,
          `Works remaining eligible for Paper 2 = ${total} − ${locked} = **${rem}**.`,
        ],
      };
    }

    if (tier === 2) {
      const eng = isHL ? rng.int(6, 9) : rng.int(5, 8);
      const trans = isHL ? rng.int(4, 7) : rng.int(3, 6);
      const total = eng + trans;
      const hlUsesTrans = isHL ? rng.bool() : false;
      const askKind = rng.pick(["translated", "english", "total"] as const);

      const usedTrans = 1 + (hlUsesTrans ? 1 : 0);
      const usedEng = 1 + (isHL && !hlUsesTrans ? 1 : 0);
      const remTrans = trans - usedTrans;
      const remEng = eng - usedEng;
      const remTotal = total - usedTrans - usedEng;

      const hlPhrase = isHL
        ? hlUsesTrans
          ? " and **1 separate translated work** to the HL Essay"
          : " and **1 separate original English work** to the HL Essay"
        : "";

      const targetPhrase =
        askKind === "translated"
          ? "**works in translation**"
          : askKind === "english"
            ? "**works originally in English**"
            : "**total studied works**";
      const ans = askKind === "translated" ? remTrans : askKind === "english" ? remEng : remTotal;

      return {
        prompt: `${label} runs an IB **${lvl}** syllabus of **${total}** works (**${eng}** originally in English and **${trans}** in translation). A student commits **1 English + 1 translated work** to the Individual Oral${hlPhrase}. Under the non-overlap rule, how many ${targetPhrase} remain eligible for **Paper 2**?`,
        answer: { type: "number", value: ans, display: String(ans) },
        traps: [
          {
            spec: { type: "number", value: askKind === "translated" ? trans : askKind === "english" ? eng : total },
            feedback: "You must subtract every work already committed to the IO (and HL Essay at HL) under the non-overlap rule.",
          },
          {
            spec: { type: "number", value: ans + 1 },
            feedback: "Double-check all deductions: IO uses 1 English + 1 translated, and at HL the HL Essay locks 1 additional distinct work.",
          },
        ],
        hint: `Track the exact bucket asked (${askKind}): start with ${askKind === "translated" ? trans : askKind === "english" ? eng : total} and subtract each locked work in that bucket.`,
        solution: [
          `Starting pool: ${eng} English + ${trans} translated = ${total} total works.`,
          `Committed works: IO locks 1 English + 1 translated${isHL ? `; HL Essay locks 1 ${hlUsesTrans ? "translated" : "English"} work` : ""}.`,
          askKind === "translated"
            ? `Remaining translated works = ${trans} − ${usedTrans} = **${remTrans}**.`
            : askKind === "english"
              ? `Remaining original English works = ${eng} − ${usedEng} = **${remEng}**.`
              : `Remaining total works = ${total} − ${usedEng + usedTrans} = **${remTotal}**.`,
        ],
      };
    }

    // Tier 3: Multi-step portfolio planning, reserve budgeting & IO extract line budgets
    const variant = rng.int(1, 3);
    if (variant === 1) {
      // HL uncommitted translated works left in reserve after IO + HL Essay + Paper 2
      const trans = rng.int(5, 9);
      const eng = rng.int(6, 9);
      const hlUsesTrans = rng.bool();
      const p2Trans = rng.int(1, 2);
      const used = 1 + (hlUsesTrans ? 1 : 0) + p2Trans;
      const reserve = trans - used;
      return {
        prompt: `An **HL** candidate studies **${eng + trans}** works (**${eng}** original English and **${trans}** in translation). They commit **1 translated work** to the IO, **${hlUsesTrans ? "1 translated work" : "1 original English work"}** to the HL Essay, and **${p2Trans}** translated work${p2Trans === 1 ? "" : "s"} to Paper 2. How many translated works remain completely uncommitted in reserve?`,
        answer: { type: "number", value: reserve, display: String(reserve) },
        traps: [
          {
            spec: { type: "number", value: reserve + p2Trans },
            feedback: `Remember to also subtract the ${p2Trans} translated work${p2Trans === 1 ? "" : "s"} committed to Paper 2.`,
          },
          {
            spec: { type: "number", value: reserve + 1 },
            feedback: "Check every single assessment consuming a translated work: IO (1), HL Essay, and Paper 2.",
          },
        ],
        hint: "Add up every distinct translated work used across IO, HL Essay (if translated), and Paper 2, then subtract from the starting translated total.",
        solution: [
          `Translated works studied = ${trans}.`,
          `Translated works committed: 1 (IO) + ${hlUsesTrans ? 1 : 0} (HL Essay) + ${p2Trans} (Paper 2) = ${used}.`,
          `Uncommitted translated works left in reserve = ${trans} − ${used} = **${reserve}**.`,
        ],
      };
    }

    if (variant === 2) {
      // Minimum additional translated works needed to keep r translated options open for Paper 2
      const wantOpen = rng.int(2, 4);
      const locked = isHL ? 2 : 1; // worst-case translated locked: IO(1) + HL Essay(1) at HL, or IO(1) at SL
      const requiredTrans = Math.max(minTrans, wantOpen + locked);
      const currentTrans = rng.int(1, requiredTrans - 1);
      const addNeeded = requiredTrans - currentTrans;
      return {
        prompt: `${label} currently has **${currentTrans}** translated work${currentTrans === 1 ? "" : "s"} on its **${lvl}** reading list. To guarantee that every ${lvl} student still has at least **${wantOpen}** translated works eligible for **Paper 2** even after using ${isHL ? "1 translated work in the IO and 1 translated work in the HL Essay" : "1 translated work in the IO"} (while meeting IB ${lvl} minimums), how many additional translated works must be added?`,
        answer: { type: "number", value: addNeeded, display: String(addNeeded) },
        traps: [
          {
            spec: { type: "number", value: Math.max(0, minTrans - currentTrans) === addNeeded ? addNeeded + 1 : Math.max(0, minTrans - currentTrans) },
            feedback: `Meeting the basic IB minimum (${minTrans}) is not enough if students also need ${wantOpen} translated options left after committing ${locked} translated work(s)!`,
          },
        ],
        hint: `Compute how many translated works are needed in total (${wantOpen} free for Paper 2 + ${locked} committed), check it is at least ${minTrans}, then subtract ${currentTrans}.`,
        solution: [
          `Required translated works = ${wantOpen} (open for Paper 2) + ${locked} (committed) = ${wantOpen + locked} (which satisfies the IB ${lvl} minimum of ${minTrans}).`,
          `Additional translated works to add = ${requiredTrans} − ${currentTrans} = **${addNeeded}**.`,
        ],
      };
    }

    // Variant 3: IO extract line-budgeting (40-line cap on original English + 40-line cap on translated = 80 max)
    const engLines = rng.int(22, 39);
    const transLines = rng.int(22, 39);
    const unused = 80 - engLines - transLines;
    return {
      prompt: `For the Individual Oral, ${label.toLowerCase()} prepares an unmarked extract of **${engLines} lines** from an original English work and **${transLines} lines** from a translated work. Given the official IB maximum line cap per extract, how many total lines **below** the combined maximum allowance are the two extracts together?`,
      answer: { type: "number", value: unused, display: String(unused) },
      traps: [
        {
          spec: { type: "number", value: engLines + transLines },
          feedback: `${engLines + transLines} is the total lines *used*; the question asks how many lines *below* the combined 80-line maximum allowance that is.`,
        },
        {
          spec: { type: "number", value: 40 - engLines },
          feedback: "Include the headroom from BOTH extracts (each capped at 40 lines, so 80 lines combined).",
        },
      ],
      hint: "Each IO extract is capped at 40 lines (so 80 lines combined across 1 English + 1 translated extract).",
      solution: [
        "Each Individual Oral extract is capped at **40 lines**, giving a combined maximum of 40 + 40 = **80 lines**.",
        `Total lines used = ${engLines} + ${transLines} = ${engLines + transLines} lines.`,
        `Lines below combined maximum = 80 − ${engLines + transLines} = **${unused}**.`,
      ],
    };
  },
};

export const drills: Drill[] = [drill1, drill2, drill3, drill4, drill5];
