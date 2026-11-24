import type { Drill, DrillItem, Rng } from "./types.ts";

interface Actor {
  name: string;
  subj: string;
  obj: string;
  poss: string;
  Subj: string;
  Poss: string;
}

const ACTORS: readonly Actor[] = [
  { name: "Clara", subj: "she", obj: "her", poss: "her", Subj: "She", Poss: "Her" },
  { name: "Tomas", subj: "he", obj: "him", poss: "his", Subj: "He", Poss: "His" },
  { name: "Nadia", subj: "she", obj: "her", poss: "her", Subj: "She", Poss: "Her" },
  { name: "Dev", subj: "he", obj: "him", poss: "his", Subj: "He", Poss: "His" },
  { name: "Mei", subj: "she", obj: "her", poss: "her", Subj: "She", Poss: "Her" },
  { name: "Arthur", subj: "he", obj: "him", poss: "his", Subj: "He", Poss: "His" },
  { name: "Hana", subj: "she", obj: "her", poss: "her", Subj: "She", Poss: "Her" },
  { name: "Jonas", subj: "he", obj: "him", poss: "his", Subj: "He", Poss: "His" },
];

const PLACES = [
  "ferry terminal",
  "municipal archive",
  "station café",
  "harbour office",
  "courthouse vestibule",
  "boarding-house landing",
  "empty conservatory",
  "dockside warehouse",
] as const;

const OBJECTS = [
  "brass key",
  "folded telegram",
  "cracked teacup",
  "red ledger",
  "tarnished compass",
  "sealed envelope",
  "silver pocket watch",
  "tin biscuit box",
] as const;

const SPANS = ["seven winters", "twelve years", "nine summers", "fourteen autumns", "eleven winters", "six years"] as const;

// ---------------------------------------------------------------------------
// 1. Narrative Mode, Genette's Focalisation & Free Indirect Discourse
// ---------------------------------------------------------------------------
const focalizationMode: Drill = {
  id: "5-prose-fiction-nonfiction.focalization-mode",
  topicId: "5-prose-fiction-nonfiction",
  title: "Narrative Mode, Focalisation & Free Indirect Discourse",
  level: 1,
  ibLevel: "SL",
  guideRef: "narrative-perspective-focalization",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const a = rng.pick(ACTORS);
    const place = rng.pick(PLACES);
    const obj = rng.pick(OBJECTS);

    type ModeKind = "zero" | "internal" | "external" | "fid" | "second" | "stream";
    const pool: ModeKind[] =
      tier === 1
        ? ["zero", "internal", "external", "fid"]
        : tier === 2
          ? ["zero", "internal", "external", "fid", "second"]
          : ["fid", "external", "internal", "zero", "second", "stream"];

    const pick = rng.pick(pool);

    if (pick === "fid") {
      const variants = [
        `${a.name} set the ${obj} beside the lamp. Honestly, could the committee really expect ${a.obj} to apologise after ten years of unpaid labour? ${a.Subj} smoothed ${a.poss} cuffs and stood.`,
        `At the ${place}, ${a.name} checked ${a.poss} watch twice. Tomorrow was the hearing, and surely no magistrate in the province would take ${a.poss} cousin's word over signed receipts?`,
        `${a.name} paused outside the ${place}. Of all people to summon ${a.obj} in pouring rain — hadn't ${a.subj} settled that ridiculous debt back in autumn?`,
      ];
      return {
        prompt: `Read this unseen prose extract:\n\n> *${rng.pick(variants)}*\n\nName the specific narrative technique fusing third-person past tense with ${a.name}'s unquoted interior idiom and questions.`,
        answer: {
          type: "text",
          accept: ["free indirect discourse", "free indirect speech", "free indirect style", "FID"],
          display: "free indirect discourse",
        },
        traps: [
          {
            spec: { type: "text", accept: ["external focalisation", "external focalization"] },
            feedback: "External focalisation hides inner thoughts completely; here the character's unquoted idiom and questions colour the narration.",
          },
          {
            spec: { type: "text", accept: ["direct speech", "direct thought", "interior monologue"] },
            feedback: "Direct speech or thought uses quotation marks or first-person verbs; merging third-person past tense with character voice without tags is free indirect discourse.",
          },
        ],
        hint: "Third-person pronouns + past tense + character's unquoted exclamation/modal/deictic — no quotation marks or 'thought' tag.",
        solution: [
          "The narration retains third-person pronouns and past tense while absorbing the character's unquoted idioms, modals (*surely*, *honestly*), proximal time markers (*Tomorrow*), or questions.",
          "That double-voiced blend is **free indirect discourse** (FID).",
        ],
      };
    }

    if (pick === "external") {
      const variants = [
        `Two strangers sat opposite each other inside the ${place}. The elder placed a ${obj} squarely between them. Neither spoke for four minutes; then the younger stood, buttoned a grey coat, and walked into the rain.`,
        `${a.name} entered the ${place} at six, laid the ${obj} on the counter, and waited beside the glass door without speaking. When the clerk lifted the latch, ${a.name} nodded once and left.`,
      ];
      return {
        prompt: `Read this unseen prose extract:\n\n> *${rng.pick(variants)}*\n\nUsing Genette's terminology, identify the type of **focalisation** governing this camera-eye passage.`,
        answer: {
          type: "text",
          accept: ["external focalisation", "external focalization", "external"],
          display: "external focalisation",
        },
        traps: [
          {
            spec: { type: "text", accept: ["zero focalisation", "zero focalization", "omniscient"] },
            feedback: "Zero (omniscient) focalisation knows MORE than characters; this camera-eye narrator withholds all inner thoughts (knows LESS).",
          },
          {
            spec: { type: "text", accept: ["internal focalisation", "internal focalization"] },
            feedback: "Internal focalisation enters a character's mind; here we see strictly observable physical gestures and silences.",
          },
        ],
        hint: "Notice that zero inner thoughts, memories, or emotions are revealed — only observable exterior surfaces.",
        solution: [
          "The narrator acts like an outside camera recording only visible gestures, objects, and silences, withholding interior consciousness.",
          "In Genette's system, this is **external focalisation**.",
        ],
      };
    }

    if (pick === "zero") {
      const variants = [
        `In the dry autumn of 1962, nobody in the ${place} suspected how swiftly the guild would collapse. ${a.name} gripped the ${obj} believing ${a.subj} stood safe, while across town the solicitor was already drafting the eviction writ that neither sister would see until spring.`,
        `From the harbour ridge to the ${place}, every clerk cherished a private illusion that winter. ${a.name} assumed the ${obj} guaranteed promotion, unaware that three floors above, the directors had already voted to close the branch in April.`,
      ];
      return {
        prompt: `Read this unseen prose extract:\n\n> *${rng.pick(variants)}*\n\nUsing Genette's terminology, identify the type of **focalisation** where the narrator knows more than any individual character.`,
        answer: {
          type: "text",
          accept: ["zero focalisation", "zero focalization", "zero"],
          display: "zero focalisation",
        },
        traps: [
          {
            spec: { type: "text", accept: ["internal focalisation", "internal focalization"] },
            feedback: "Internal focalisation is restricted to one character's knowledge; here the narrator sees across minds and future events.",
          },
          {
            spec: { type: "text", accept: ["external focalisation", "external focalization"] },
            feedback: "External focalisation withholds inner minds completely; unrestricted omniscience is zero focalisation.",
          },
        ],
        hint: "The omniscient narrator ranges freely across characters' private illusions and hidden simultaneous events.",
        solution: [
          "Because the narrator possesses unrestricted omniscient access across spaces, minds, and future outcomes unavailable to characters, Genette labels this **zero focalisation**.",
        ],
      };
    }

    if (pick === "internal") {
      const variants = [
        `${a.name} gripped the ${obj} inside the ${place} and felt a cold dread rise behind ${a.poss} ribs. ${a.Subj} wondered whether the clerk had noticed the ink stain, though ${a.subj} could not tell what the woman behind the counter was thinking.`,
        `Watching the rain streak the glass of the ${place}, ${a.name} remembered ${a.poss} grandfather's warning about the ${obj}. ${a.Subj} feared the stranger at the doorway had come to collect the lease, yet ${a.subj} could only guess at the man's expression.`,
      ];
      return {
        prompt: `Read this unseen prose extract:\n\n> *${rng.pick(variants)}*\n\nUsing Genette's terminology, identify the type of **focalisation** anchored strictly inside ${a.name}'s perception and limited knowledge.`,
        answer: {
          type: "text",
          accept: ["internal focalisation", "internal focalization", "fixed internal focalisation", "fixed internal focalization", "internal"],
          display: "internal focalisation",
        },
        traps: [
          {
            spec: { type: "text", accept: ["zero focalisation", "zero focalization"] },
            feedback: "Zero focalisation knows every mind; here the narrator explicitly cannot access the other character's thoughts.",
          },
          {
            spec: { type: "text", accept: ["external focalisation", "external focalization"] },
            feedback: "External focalisation hides ALL inner thoughts; here we enter the focaliser's fear and memory directly.",
          },
        ],
        hint: "We share one character's feelings and memories ('felt', 'wondered', 'feared') while remaining locked out of everyone else's mind.",
        solution: [
          "Narration is filtered exclusively through one focalising consciousness while withholding other characters' minds.",
          "In Genette's system, this is **(fixed) internal focalisation**.",
        ],
      };
    }

    if (pick === "second") {
      const variants = [
        `You set the ${obj} neatly beside the sink and tell yourself the cramped ${place} is only temporary. You rehearse a calm smile so no neighbour guesses how fast your hands are shaking.`,
        `You enter the ${place} pretending not to notice the quiet stares, sliding the ${obj} deeper into your coat pocket as if composure were merely a matter of straight shoulders.`,
      ];
      return {
        prompt: `Read this unseen prose extract:\n\n> *${rng.pick(variants)}*\n\nIdentify the grammatical narrative perspective used here to stage self-estrangement and implicate the reader.`,
        answer: {
          type: "text",
          accept: ["second-person", "second person", "second-person narration", "second person narration", "2nd person", "2nd-person"],
          display: "second-person narration",
        },
        traps: [
          {
            spec: { type: "text", accept: ["first-person", "first person", "first-person narration"] },
            feedback: "First-person uses 'I/we'; addressing the protagonist directly as 'you' is second-person narration.",
          },
          {
            spec: { type: "text", accept: ["third-person", "third person", "third-person narration"] },
            feedback: "Third-person uses 'he/she/they'; sustained 'you' narration is second-person narration.",
          },
        ],
        hint: "Check the dominant grammatical pronoun ('You set... You rehearse...').",
        solution: [
          "Sustained use of *you* constitutes **second-person narration**, simultaneously enacting self-distance and drawing the reader uncomfortably into the protagonist's posture.",
        ],
      };
    }

    const streamVariants = [
      `Cold rail — ${obj} heavy in the pocket — why come back to the ${place} now, footsteps echoing, three beats no four — keep breathing, don't look at the clock, grey rain on the sill.`,
      `Salt air — ${place} doors banging shut — where did the ${obj} go, check the lining, no, cold fingers — his voice still ringing under the rafters — keep counting tiles, one two three.`,
    ];
    return {
      prompt: `Read this unseen prose extract:\n\n> *${rng.pick(streamVariants)}*\n\nName the Level 5 modernist narrative mode shown here, characterised by fractured associative syntax and unfiltered perceptual flux.`,
      answer: {
        type: "text",
        accept: ["stream of consciousness", "interior monologue"],
        display: "stream of consciousness",
      },
      traps: [
        {
          spec: { type: "text", accept: ["external focalisation", "external focalization"] },
          feedback: "External focalisation stays outside the mind; these jagged associative impressions sit right inside raw consciousness.",
        },
      ],
      hint: "Sits at Level 5 of John Gardner's psychic distance scale — unfiltered cognitive and sensory leaps.",
      solution: [
        "Jagged dashes, abrupt sensory leaps, and unmediated self-commands typify **stream of consciousness** (Level 5 on Gardner's psychic distance scale).",
      ],
    };
  },
};

// ---------------------------------------------------------------------------
// 2. Temporal Structure, Pacing, Setting & Symbolism
// ---------------------------------------------------------------------------
const temporalStructure: Drill = {
  id: "5-prose-fiction-nonfiction.temporal-structure",
  topicId: "5-prose-fiction-nonfiction",
  title: "Temporal Order, Narrative Pacing & Structural Devices",
  level: 1,
  ibLevel: "SL",
  guideRef: "prose-time-setting-symbolism",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const a = rng.pick(ACTORS);
    const place = rng.pick(PLACES);
    const obj = rng.pick(OBJECTS);
    const span = rng.pick(SPANS);

    type StructKind = "analepsis" | "prolepsis" | "inMediasRes" | "ellipsis" | "frame" | "summary" | "stretch" | "patheticFallacy" | "foil";
    const pool: StructKind[] =
      tier === 1
        ? ["analepsis", "prolepsis", "inMediasRes", "ellipsis", "patheticFallacy"]
        : tier === 2
          ? ["analepsis", "prolepsis", "inMediasRes", "ellipsis", "frame", "foil", "patheticFallacy"]
          : ["analepsis", "prolepsis", "ellipsis", "frame", "summary", "stretch", "foil", "patheticFallacy"];

    const pick = rng.pick(pool);

    switch (pick) {
      case "analepsis": {
        const prompts = [
          `While waiting inside the ${place}, ${a.name} touched the ${obj} — and suddenly saw again the sunlit courtyard ${span} earlier, when ${a.poss} father had first pressed it into ${a.poss} palm.`,
          `Hearing the bell outside the ${place}, ${a.name} dropped the ${obj}. The narrative immediately breaks backward ${span} to the rainy evening the shipyard first closed.`,
        ];
        return {
          prompt: `Read this unseen prose moment:\n\n> *${rng.pick(prompts)}*\n\nState the precise narratological term for this backward temporal leap.`,
          answer: { type: "text", accept: ["analepsis", "flashback"], display: "analepsis" },
          traps: [
            { spec: { type: "text", accept: ["prolepsis", "flashforward"] }, feedback: "Prolepsis leaps forward into the future; jumping backward into the past is analepsis." },
            { spec: { type: "text", accept: ["ellipsis"] }, feedback: "Ellipsis omits time silently; revisiting an earlier event is analepsis." },
          ],
          hint: "Genette's classical term paired with prolepsis (flashback).",
          solution: ["Jumping backward in discourse time to retrieve an earlier memory or event is **analepsis** (flashback)."],
        };
      }
      case "prolepsis": {
        const prompts = [
          `${a.name} smiled as ${a.subj} locked the ${obj} inside the ${place}, unaware that ${span} later the very clerk holding the lantern would testify against ${a.obj} at the harbour tribunal.`,
          `Handing over the ${obj} at the ${place}, ${a.name} could not yet guess that ${span} hence the entire street would lie submerged beneath the new reservoir.`,
        ];
        return {
          prompt: `Read this unseen prose moment:\n\n> *${rng.pick(prompts)}*\n\nState the precise narratological term for this forward jump revealing a future outcome.`,
          answer: { type: "text", accept: ["prolepsis", "flashforward", "flash-forward"], display: "prolepsis" },
          traps: [
            { spec: { type: "text", accept: ["analepsis", "flashback"] }, feedback: "Analepsis reaches backward into the past; anticipating a future outcome is prolepsis." },
          ],
          hint: "Begins with 'pro-' (forward) in Genette's taxonomy of narrative order.",
          solution: ["Reaching forward in discourse time to anticipate future consequences is **prolepsis** (flashforward), here generating dramatic irony."],
        };
      }
      case "inMediasRes": {
        const prompts = [
          `Page 1 of a novel opens mid-sentence: *"Drop the ${obj} before the watchman turns!"* — plunging straight into a breathless chase across the ${place} with zero prior backstory.`,
          `A short story opens directly amidst shattering glass inside the ${place} as ${a.name} slams the ${obj} across the counter, delaying all explanation of the feud until page six.`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nState the three-word Latin term for this structural opening strategy.`,
          answer: { type: "text", accept: ["in medias res"], display: "in medias res" },
          hint: "Literally translates from Latin as 'into the middle of things'.",
          solution: ["Launching directly into ongoing action without preliminary exposition is opening ***in medias res***."],
        };
      }
      case "ellipsis": {
        const prompts = [
          `Section I ends as ${a.name} sets the ${obj} on the counter of the ${place}. Section II begins immediately: *"${span[0].toUpperCase() + span.slice(1)} later, weeds pushed through the tiled floor."*`,
          `Chapter 2 closes with ${a.name} boarding the night steamer holding a ${obj}; Chapter 3 opens across a stark white break ${span} afterward, narrating none of the intervening exile.`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nIdentify the narrative pacing device operating across the break where story time passes with zero discourse space.`,
          answer: { type: "text", accept: ["ellipsis", "temporal ellipsis"], display: "ellipsis" },
          traps: [
            { spec: { type: "text", accept: ["summary"] }, feedback: "Summary still condenses events into prose; skipping an entire period with zero narration is ellipsis." },
            { spec: { type: "text", accept: ["analepsis"] }, feedback: "Analepsis goes backward to narrate an earlier scene; skipping forward over an unnarrated gap is ellipsis." },
          ],
          hint: "The fastest speed on Genette's E–S–S–P pacing scale (0 lines spent on years elapsed).",
          solution: ["Skipping an entire span of story time without narrating it is a **temporal ellipsis**, often signalling unspoken trauma or estrangement."],
        };
      }
      case "frame": {
        const prompts = [
          `An opening chapter shows an archivist unlocking a weathered diary found inside the ${place}; the rest of the novel consists of ${a.name}'s testimony copied from those pages, interrupted twice by the archivist's sceptical footnotes.`,
          `On a fogbound deck outside the ${place}, a retired pilot recounts ${a.name}'s long-ago scandal over the ${obj} to three silent passengers, whose uneasy interruptions bracket the beginning and end of the book.`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nName the overarching structural technique enclosing an inner tale inside an outer narrative layer.`,
          answer: { type: "text", accept: ["frame narrative", "frame story", "framing narrative", "embedded narrative"], display: "frame narrative" },
          hint: "Think of an outer story surrounding an inner narrative — highlighting mediation and reliability.",
          solution: ["Enclosing an inner account inside an outer storytelling situation is a **frame narrative**, foregrounding mediation, hearsay, and contested truth."],
        };
      }
      case "summary": {
        const prompts = [
          `Read this sentence: *"For ${span}, ${a.name} unlocked the ${place} at dawn, dusted the ${obj} each Friday, and answered letters in the same neat blue ink."*`,
          `Read this sentence: *"Across ${span} of quiet rationing, ${a.name} crossed the ${place} every dusk carrying the ${obj}, speaking scarcely ten words a month."*`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nIn Genette's four pacing modes (ellipsis, summary, scene, stretch/pause), which mode compresses years of routine into one brief sentence?`,
          answer: { type: "text", accept: ["summary", "narrative summary"], display: "summary" },
          traps: [
            { spec: { type: "text", accept: ["ellipsis"] }, feedback: "Ellipsis omits the years completely without narrating them; compressing recurring events into brief lines is summary." },
            { spec: { type: "text", accept: ["scene"] }, feedback: "Scene unfolds 1:1 in real time through live dialogue or action; condensing years into one sentence is summary." },
          ],
          hint: "Sits between ellipsis and real-time scene on the E–S–S–P pacing ladder.",
          solution: ["Compressing extended story spans into concise prose is **summary**, often conveying routine, endurance, or retrospective distance."],
        };
      }
      case "stretch": {
        const prompts = [
          `In the two seconds it takes the ${obj} to slip from ${a.name}'s palm toward the stone floor of the ${place}, the prose expands across twenty slow-motion lines detailing dust motes, breath, and a sudden childhood memory.`,
          `A single heartbeat before the door of the ${place} swings shut takes half a page of suspended sensory inventory as ${a.name} counts cracks in the paint and hears rain bead on the window.`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nIn Genette's four pacing modes, name the mode where discourse time expands far beyond story clock time.`,
          answer: { type: "text", accept: ["stretch", "pause", "descriptive pause", "dilation", "stretch / pause"], display: "stretch" },
          traps: [
            { spec: { type: "text", accept: ["summary"] }, feedback: "Summary shrinks long story time into short text; expanding seconds across many lines is stretch (or pause)." },
            { spec: { type: "text", accept: ["ellipsis"] }, feedback: "Ellipsis skips time silently; slowing clock time nearly to a halt is stretch / pause." },
          ],
          hint: "The slowest speed on Genette's E–S–S–P pacing ladder.",
          solution: ["Dilating a tiny slice of clock time across extended prose is **stretch** (or descriptive pause), heightening shock or epiphany."],
        };
      }
      case "patheticFallacy": {
        const prompts = [
          `Read this unseen line: *"Outside the ${place}, a vindictive sleet lashed the shutters and the brooding river sulked black beneath the pier as ${a.name} clutched the ${obj}."*`,
          `Read this unseen line: *"An anxious gale worried the iron hinges of the ${place}, and the bruised dusk hung sullenly over ${a.name}'s shoulders."*`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nName the specific literary technique attributing human emotional states to weather and nature here.`,
          answer: { type: "text", accept: ["pathetic fallacy"], display: "pathetic fallacy" },
          traps: [
            { spec: { type: "text", accept: ["foil", "prolepsis"] }, feedback: "Focus on how weather and landscape ('vindictive', 'brooding', 'anxious') mirror human mood." },
          ],
          hint: "Two-word term coined by John Ruskin for projecting human emotion onto weather or landscape.",
          solution: ["Projecting human moods (*vindictive*, *brooding*, *sullen*) onto weather and nature is **pathetic fallacy**."],
        };
      }
      default: {
        const other = ACTORS.find((x) => x.name !== a.name) ?? ACTORS[0];
        const prompts = [
          `Inside the ${place}, ${a.name} painstakingly polishes the inherited ${obj} every dusk to honour tradition, whereas ${a.poss} sibling ${other.name} trades ${other.poss} own heirloom for train fare — a deliberate contrast sharpening both characters' values.`,
          `${a.name} meets the closure of the ${place} with rigid silence and meticulous ledgers, deliberately juxtaposed against colleague ${other.name}'s reckless candour so that each temperament exposes the other's limits.`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nWhat literary term designates a character structured in deliberate contrast to illuminate another figure's defining traits?`,
          answer: { type: "text", accept: ["foil", "foil character", "character foil"], display: "foil" },
          hint: "A four-letter craft term (originally from jewellers setting dark metal behind a gem to make it stand out).",
          solution: ["A character constructed in deliberate contrast to throw another character's values or flaws into sharper relief is a **foil**."],
        };
      }
    }
  },
};

// ---------------------------------------------------------------------------
// 3. Literary Non-Fiction Sub-Genres, Structure & Persona
// ---------------------------------------------------------------------------
const nonfictionGenrePersona: Drill = {
  id: "5-prose-fiction-nonfiction.nonfiction-genre-persona",
  topicId: "5-prose-fiction-nonfiction",
  title: "Literary Non-Fiction: Sub-Genres, Persona & Structural Moves",
  level: 2,
  ibLevel: "SL",
  guideRef: "literary-nonfiction-genres",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const obj = rng.pick(OBJECTS);
    const place = rng.pick(PLACES);
    const span = rng.pick(SPANS);

    type NfKind =
      | "memoir"
      | "autobiography"
      | "personalEssay"
      | "travelogue"
      | "epistolary"
      | "oratory"
      | "anecdote"
      | "structuralTurn"
      | "retrospectiveSelf"
      | "experiencingSelf"
      | "observersGaze";

    const pool: NfKind[] =
      tier === 1
        ? ["memoir", "personalEssay", "travelogue", "anecdote", "oratory"]
        : tier === 2
          ? ["memoir", "autobiography", "personalEssay", "travelogue", "epistolary", "anecdote", "structuralTurn"]
          : ["memoir", "travelogue", "epistolary", "structuralTurn", "retrospectiveSelf", "experiencingSelf", "observersGaze"];

    const pick = rng.pick(pool);

    switch (pick) {
      case "memoir": {
        const prompts = [
          `A non-fiction book concentrates selectively on the ${span} the author spent caring for an ageing grandmother near a coastal ${place}, frequently pausing to question how unreliable childhood recall shapes grief.`,
          `Rather than covering birth to retirement, this non-fiction work focuses tightly on one defining relationship framed around an inherited ${obj}, interrogating memory's blind spots throughout.`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nIdentify the specific literary non-fiction sub-genre described here.`,
          answer: { type: "text", accept: ["memoir", "a memoir"], display: "memoir" },
          traps: [
            { spec: { type: "text", accept: ["autobiography"] }, feedback: "Autobiography aims for comprehensive chronological lifespan coverage; a selective, thematic interrogation of memory is a memoir." },
          ],
          hint: "Contrast selective, thematic memory-writing with comprehensive chronological life-span accounts.",
          solution: ["Selective, thematic non-fiction centring on a specific period or relationship while probing memory itself is **memoir**."],
        };
      }
      case "autobiography": {
        const prompts = [
          `A retired judge publishes a comprehensive chronological account of her entire life from childhood village schooling through law school near the ${place} to retirement, tracing her public legacy decade by decade.`,
          `Spanning eight decades in linear chronological sequence, this first-person non-fiction volume documents every milestone of a surgeon's life, career, and civic honours from infancy onward.`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nIdentify the traditional non-fiction sub-genre characterised by this comprehensive chronological lifespan scope.`,
          answer: { type: "text", accept: ["autobiography", "an autobiography"], display: "autobiography" },
          traps: [
            { spec: { type: "text", accept: ["memoir"] }, feedback: "Memoir focuses selectively on a tight theme or episode; a comprehensive birth-to-legacy chronicle is an autobiography." },
          ],
          hint: "Unlike selective memoir, this genre traces a full linear life arc.",
          solution: ["A comprehensive, chronological first-person life chronicle is an **autobiography**."],
        };
      }
      case "personalEssay": {
        const prompts = [
          `Opening with a stray ${obj} spotted inside a second-hand shop beside the ${place}, the writer follows associative leaps through etymology, urban memory, and self-doubt before closing on an open-ended image rather than a rigid moral.`,
          `A short reflective prose piece begins with watching rain blur chalk timetables outside the ${place}, meandering inquisitively from private habit to cultural anxiety without pretending to reach final certainty.`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nIdentify this exploratory literary non-fiction sub-genre (descended from Montaigne's *essais* [Example text — not a set text]).`,
          answer: { type: "text", accept: ["personal essay", "familiar essay", "essay", "literary essay"], display: "personal essay" },
          hint: "An associative, reflective prose form dramatising an inquiring mind weighing ideas on the page.",
          solution: ["Associative movement from concrete trigger through self-questioning reflection to open resonance defines the **personal essay**."],
        };
      }
      case "travelogue": {
        const prompts = [
          `Journeying by night ferry toward a northern ${place}, the narrator records harbour voices, confronts the colonial clichés in his guidebook, and reflects on how crossing borders unsettles his notion of home.`,
          `Combining an itinerary across drought-hit salt towns with lyrical landscape imagery and uncomfortable reflections on outsider privilege beside a coastal ${place}, this passage exemplifies which non-fiction sub-genre?`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nName the literary non-fiction sub-genre.`,
          answer: { type: "text", accept: ["travel writing", "travelogue", "travel narrative", "travel literature"], display: "travel writing" },
          hint: "Braids physical itinerary across unfamiliar geographies with cultural framing and internal reckoning.",
          solution: ["Literary **travel writing** (or travelogue) navigates both physical journey and cultural/psychological perspective."],
        };
      }
      case "epistolary": {
        const prompts = [
          `Read this unseen non-fiction opening: *"My dear Mei — You will laugh when you see the tea stain beside Tuesday's postmark, yet keep the enclosed ${obj} anyway, because the fog over the ${place} finally lifted at dusk."*`,
          `Addressed directly to an estranged brother ('You always swore the ${place} would outlast both of us'), this dated non-fiction text leans on shared private shorthand and anticipates the recipient's exact reply.`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nIdentify the non-fiction sub-genre (or formal mode) characterised by intimate direct address to a specific named recipient.`,
          answer: { type: "text", accept: ["letter", "letters", "epistolary", "epistolary non-fiction", "epistle"], display: "letter" },
          hint: "Think of direct salutation, postmarks, and an absent recipient shaping every sentence.",
          solution: ["Intimate direct address invoking shared history with a specific recipient defines **letters** (epistolary non-fiction)."],
        };
      }
      case "oratory": {
        const prompts = [
          `Crafted for live delivery outside the ${place} on the eve of a municipal vote, the text uses collective pronouns (*we, our*), rhythmic tricolon, and acoustic crescendos calibrated to an urgent historical moment (*kairos*).`,
          `Read this unseen non-fiction line delivered to a crowded civic hall: *"Friends, we did not gather outside this ${place} tonight to mourn a roof — we gathered to reclaim a common voice!"*`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nName this performance-oriented literary non-fiction sub-genre.`,
          answer: { type: "text", accept: ["speech", "oratory", "literary oratory", "public address", "address"], display: "speech" },
          hint: "Written for the human ear in a shared public moment.",
          solution: ["Live vocal cadence, collective interpellation, and timeliness (*kairos*) characterise literary **speech / oratory**."],
        };
      }
      case "anecdote": {
        const prompts = [
          `Before arguing that cities erase working-class heritage, an essayist opens with a crisp 4-line memory of watching a retired cobbler polish a ${obj} outside the ${place} during a summer blackout.`,
          `To ground an abstract reflection on patience, a speaker begins with a vivid 3-sentence real-life incident involving a missed ferry and a stranger sharing warm tea beside the ${place}.`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nWhat term names this brief, concrete real-life micro-story used to anchor wider ideas?`,
          answer: { type: "text", accept: ["anecdote", "personal anecdote"], display: "anecdote" },
          hint: "An eight-letter term for a short illustrative real-world story opening or anchoring an essay.",
          solution: ["A brief, vivid lived incident grounding abstract claims in concrete human texture is an **anecdote**."],
        };
      }
      case "structuralTurn": {
        const prompts = [
          `For two warm paragraphs, an essay nostalgically describes childhood errands to the ${place}; Paragraph 3 opens abruptly: *"Yet returning last winter with my mother's deeds in hand, I saw for the first time who had been barred from that courtyard."*`,
          `After celebrating the polished symmetry of the ${obj} across ten lines, an essayist pivots sharply: *"What I failed to notice at fourteen, however, was the quiet exhaustion etched beneath that polish."*`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nWhat structural feature (the prose equivalent of a poetic *volta*) occurs at this hinge sentence?`,
          answer: { type: "text", accept: ["structural turn", "turn", "prose volta", "volta", "pivot", "structural pivot"], display: "structural turn" },
          hint: "Two words naming the decisive conceptual/tonal pivot in an essay (analogous to a sonnet's volta).",
          solution: ["The hinge where a non-fiction piece pivots from initial nostalgia or certainty into complication is a **structural turn** (prose *volta*)."],
        };
      }
      case "retrospectiveSelf": {
        const prompts = [
          `Read this memoir line: *"At ten I thought the locked ${place} guarded fairy gold; **at thirty-eight, holding the yellowed eviction notice, I recognise it guarded unpaid rent**."*`,
          `Read this memoir line: *"Back then I laughed at the tarnished ${obj}; **today, writing ${span} after the flood, I understand why my father never threw it away**."*`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nIn memoir analysis, which half of the split persona is speaking in the **bold** clause?`,
          answer: { type: "text", accept: ["retrospective self", "the retrospective self", "narrating self", "retrospective I"], display: "retrospective self" },
          traps: [
            { spec: { type: "text", accept: ["experiencing self", "the experiencing self"] }, feedback: "The experiencing self is the younger consciousness inside the past event; the older voice reflecting from the present is the retrospective self." },
          ],
          hint: "The older, reflective version of 'I' armed with hindsight (contrasted with the experiencing self).",
          solution: ["The older narrating voice re-evaluating childhood assumptions with hindsight is the **retrospective self** (or narrating self)."],
        };
      }
      case "experiencingSelf": {
        const prompts = [
          `Read this memoir line: *"**At nine I believed the loud brass bell outside the ${place} rang purely to celebrate my birthday**; decades later I learned it signalled the night-shift lockout."*`,
          `Read this memoir line: *"**That wet autumn I gripped the ${obj} convinced the border guards were merely checking luggage tags** — only in adulthood did my aunt tell me how close we came to arrest."*`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nIn memoir analysis, which half of the split persona is captured inside the **bold** clause?`,
          answer: { type: "text", accept: ["experiencing self", "the experiencing self", "experiencing I"], display: "experiencing self" },
          traps: [
            { spec: { type: "text", accept: ["retrospective self", "narrating self"] }, feedback: "The retrospective self writes from the present with adult knowledge; the younger immersed self living inside the memory is the experiencing self." },
          ],
          hint: "The younger, immersed consciousness living inside the past moment with limited foresight.",
          solution: ["The younger consciousness immersed inside the past moment before adult hindsight arrives is the **experiencing self**."],
        };
      }
      default: {
        const prompts = [
          `In a travelogue about a coastal ${place}, the visitor calls local fisherfolk "picturesque silhouettes from a timeless era" while never quoting a single resident's voice. What critical concept should an IB reader interrogate here?`,
          `A foreign travel writer compares a bustling market beside the ${place} to "a living museum untouched by clocks", framing real citizens as aesthetic backdrop. Name the analytical lens capturing how an outsider frames a place and its people.`,
        ];
        return {
          prompt: `${rng.pick(prompts)}\n\nState the two-word analytical concept for how a travel writer frames unfamiliar landscapes and people.`,
          answer: { type: "text", accept: ["observer's gaze", "the observer's gaze", "observers gaze", "tourist gaze", "colonial gaze"], display: "observer's gaze" },
          hint: "Two words: _____'s gaze — interrogating who holds the pen and how they frame 'elsewhere'.",
          solution: ["Interrogating how an outsider's diction and framing aestheticise or silence local subjects analyses the **observer's gaze**."],
        };
      }
    }
  },
};

// ---------------------------------------------------------------------------
// 4. Rhetorical Schemes, Aristotelian Appeals & Syntactic Craft
// ---------------------------------------------------------------------------
const rhetoricSyntaxCraft: Drill = {
  id: "5-prose-fiction-nonfiction.rhetoric-syntax-craft",
  topicId: "5-prose-fiction-nonfiction",
  title: "Rhetoric & Syntax: Schemes, Appeals, Parataxis & Hypotaxis",
  level: 2,
  ibLevel: "SL",
  guideRef: "rhetoric-persona-truth-claims",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const place = rng.pick(PLACES);
    const obj = rng.pick(OBJECTS);

    type RhetKind = "anaphora" | "antithesis" | "tricolon" | "parataxis" | "hypotaxis" | "ethos" | "pathos" | "logos" | "epistrophe";
    const pool: RhetKind[] =
      tier === 1
        ? ["anaphora", "antithesis", "tricolon", "ethos", "pathos", "logos"]
        : tier === 2
          ? ["anaphora", "antithesis", "tricolon", "parataxis", "hypotaxis", "ethos", "pathos", "logos"]
          : ["anaphora", "epistrophe", "antithesis", "tricolon", "parataxis", "hypotaxis", "ethos", "pathos", "logos"];

    const pick = rng.pick(pool);

    switch (pick) {
      case "anaphora": {
        const lines = [
          `We remember the shuttered ${place}. We remember the missing ${obj}. We remember who stayed silent when the floodwaters rose.`,
          `Not for the comfort of officials, not for the applause of distant editors, not for the vanity of monuments do we rebuild this ${place}.`,
          `They signed the demolition order; they locked the ${place}; they called the silence progress.`,
        ];
        return {
          prompt: `Read this unseen non-fiction line:\n\n> *${rng.pick(lines)}*\n\nName the rhetorical scheme created by repeating identical words at the **start** of successive clauses.`,
          answer: { type: "text", accept: ["anaphora"], display: "anaphora" },
          traps: [
            { spec: { type: "text", accept: ["epistrophe", "epiphora"] }, feedback: "Epistrophe repeats words at the END of clauses; repeating words at the BEGINNING is anaphora." },
            { spec: { type: "text", accept: ["antithesis"] }, feedback: "Antithesis pairs opposites in parallel balance; repeating opening words across clauses is anaphora." },
          ],
          hint: "Greek term for repeated openings across consecutive clauses (builds rhythmic insistence).",
          solution: ["Repeating the same opening phrase across successive clauses is **anaphora**."],
        };
      }
      case "epistrophe": {
        const lines = [
          `When the budget shrank, they closed the ${place}; when the rain returned, we sheltered beside the ${place}; when elders speak of home, they still name the ${place}.`,
          `We kept the ${obj} for memory, polished the ${obj} for honour, and passed down the ${obj} for warning.`,
        ];
        return {
          prompt: `Read this unseen non-fiction line:\n\n> *${rng.pick(lines)}*\n\nName the rhetorical scheme created by repeating the same phrase at the **end** of successive clauses.`,
          answer: { type: "text", accept: ["epistrophe", "epiphora"], display: "epistrophe" },
          traps: [
            { spec: { type: "text", accept: ["anaphora"] }, feedback: "Anaphora repeats words at the START of clauses; repeating words at the END is epistrophe (or epiphora)." },
          ],
          hint: "Mirror twin of anaphora — repeated endings rather than repeated openings.",
          solution: ["Repeating identical words at the close of consecutive clauses is **epistrophe** (also called epiphora)."],
        };
      }
      case "antithesis": {
        const lines = [
          `They budgeted for taller walls at the ${place}, yet forgot to budget for open doors.`,
          `Official histories prize polished marble; domestic memory clings to a scarred ${obj}.`,
          `Delay wears the mask of caution; courage wears the risk of action.`,
        ];
        return {
          prompt: `Read this unseen non-fiction line:\n\n> *${rng.pick(lines)}*\n\nName the rhetorical device pairing sharply opposing concepts inside balanced parallel syntax.`,
          answer: { type: "text", accept: ["antithesis"], display: "antithesis" },
          traps: [
            { spec: { type: "text", accept: ["anaphora"] }, feedback: "Look at the symmetrical contrast of opposing ideas across the two halves — that is antithesis." },
          ],
          hint: "Literally 'setting opposite' inside parallel grammatical balance.",
          solution: ["Placing contrasting concepts in mirrored grammatical balance is **antithesis**."],
        };
      }
      case "tricolon": {
        const lines = [
          `Within one winter, the ${place} lost its timber roof, its evening choir, and its last stubborn caretaker.`,
          `The committee promised transparent hearings, fair compensation, and enduring trust — delivering none of the three.`,
          `Inside the drawer lay a cracked ${obj}, a faded transit pass, and an unposted apology.`,
        ];
        return {
          prompt: `Read this unseen non-fiction line:\n\n> *${rng.pick(lines)}*\n\nName the classical rhetorical scheme built from a rhythmic series of **three** parallel elements.`,
          answer: { type: "text", accept: ["tricolon", "rule of three"], display: "tricolon" },
          hint: "Greek term meaning literally 'three members/clauses'.",
          solution: ["A parallel three-part sequence building rhythm, completeness, or climax is a **tricolon**."],
        };
      }
      case "parataxis": {
        const lines = [
          `The whistle blew. Rain blackened the ${place}. Nobody waved. The gate clicked shut.`,
          `I wrapped the ${obj}. I locked the shutters. I left the key on the stone sill.`,
          `Power failed at six. Candles guttered out. Shadows filled the ${place}.`,
        ];
        return {
          prompt: `Read this unseen memoir excerpt:\n\n> *${rng.pick(lines)}*\n\nName the syntactic style placing short, grammatically equal clauses side by side with no subordinating conjunctions.`,
          answer: { type: "text", accept: ["parataxis", "paratactic syntax"], display: "parataxis" },
          traps: [
            { spec: { type: "text", accept: ["hypotaxis", "hypotactic syntax"] }, feedback: "Hypotaxis layers subordinate clauses ('although', 'because'); side-by-side unsubordinated clauses are parataxis." },
          ],
          hint: "Prefix 'para-' = side by side / parallel (opposite of hypotaxis).",
          solution: ["Placing independent clauses side by side without grammatical subordination is **parataxis**, enacting stark shock, stoicism, or immediacy."],
        };
      }
      case "hypotaxis": {
        const lines = [
          `Although municipal records date the closure of the ${place} to November, and because my grandfather refused to sign the deed until frost broke the pipes, our family always counted exile from January.`,
          `While younger relatives dismiss the ${obj} as mere clutter, and even though I recognise how easily nostalgia distorts small objects, I cannot empty the shelf without feeling I am editing out a witness.`,
        ];
        return {
          prompt: `Read this unseen essay sentence:\n\n> *${rng.pick(lines)}*\n\nName the syntactic architecture built from nested subordinating conjunctions (*although, because, while*) arranging ideas in explicit hierarchy.`,
          answer: { type: "text", accept: ["hypotaxis", "hypotactic syntax"], display: "hypotaxis" },
          traps: [
            { spec: { type: "text", accept: ["parataxis", "paratactic syntax"] }, feedback: "Parataxis avoids subordination altogether; nested subordinate clauses form hypotaxis." },
          ],
          hint: "Prefix 'hypo-' = beneath / subordinated (enacts analytical nuance and qualification).",
          solution: ["Nesting subordinate clauses (*although*, *because*, *while*) beneath a main clause is **hypotaxis**, enacting layered reflection and qualification."],
        };
      }
      case "ethos": {
        const lines = [
          `I speak not as an academic theorist from an upland university, but as a nurse who spent twenty winters walking home past the flooded ${place} and who once, I admit, doubted those warnings myself.`,
          `Having audited harbour ledgers beside the ${place} for eighteen years — and having missed early warning signs in my own first report — I urge this council to examine the raw accounts candidly.`,
        ];
        return {
          prompt: `Read this unseen non-fiction excerpt:\n\n> *${rng.pick(lines)}*\n\nWhich Aristotelian appeal is primarily constructed through lived witness and candid self-critique here?`,
          answer: { type: "text", accept: ["ethos"], display: "ethos" },
          traps: [
            { spec: { type: "text", accept: ["pathos"] }, feedback: "Pathos targets emotional empathy; building trustworthiness and moral authority via witness and candour is ethos." },
            { spec: { type: "text", accept: ["logos"] }, feedback: "Logos structures logical proof; establishing speaker credibility and honesty is ethos." },
          ],
          hint: "One of Aristotle's three appeals: credibility, character, and moral authority.",
          solution: ["Establishing lived witness and honest self-correction builds trustworthy **ethos**."],
        };
      }
      case "pathos": {
        const lines = [
          `Outside the demolished ${place}, an elderly tailor stood in damp slippers holding a single unclaimed ${obj}, whispering the names of neighbours whose doorways no longer existed.`,
          `No budget spreadsheet records the sound of a seven-year-old asking why the rain now runs right across the bedroom tiles beneath the ${place} wall.`,
        ];
        return {
          prompt: `Read this unseen non-fiction excerpt:\n\n> *${rng.pick(lines)}*\n\nWhich Aristotelian appeal is primarily evoked through restrained, concrete human detail here?`,
          answer: { type: "text", accept: ["pathos"], display: "pathos" },
          traps: [
            { spec: { type: "text", accept: ["logos"] }, feedback: "Logos relies on reasoned data or inference; evocative human particulars eliciting empathy build pathos." },
            { spec: { type: "text", accept: ["ethos"] }, feedback: "Ethos establishes the speaker's authority; evoking tenderness, grief, or shared empathy is pathos." },
          ],
          hint: "One of Aristotle's three appeals: emotional resonance and empathy.",
          solution: ["Grounding human loss in restrained tactile detail powerfully evokes **pathos**."],
        };
      }
      default: {
        const lines = [
          `If maintenance of the ${place} costs one-fifth of emergency flood reconstruction, and if three neighbouring ports cut storm damage by half after reinforcing their sea walls, postponement cannot credibly be defended as fiscal prudence.`,
          `Comparing census records across four decades around the ${place} reveals a clear causal pattern: wherever public transit links vanished first, independent workshops closed within thirty-six months.`,
        ];
        return {
          prompt: `Read this unseen non-fiction excerpt:\n\n> *${rng.pick(lines)}*\n\nWhich Aristotelian appeal governs this structured chain of comparative evidence and causal inference?`,
          answer: { type: "text", accept: ["logos"], display: "logos" },
          traps: [
            { spec: { type: "text", accept: ["pathos"] }, feedback: "Pathos appeals to emotion; structured comparison, proportion, and causal inference build logos." },
            { spec: { type: "text", accept: ["ethos"] }, feedback: "Ethos builds speaker credibility; reasoned evidence and logical progression constitute logos." },
          ],
          hint: "One of Aristotle's three appeals: reasoned structure, comparison, and evidence.",
          solution: ["Structured comparison, proportionality, and causal deduction exemplify **logos**."],
        };
      }
    }
  },
};

// ---------------------------------------------------------------------------
// 5. Unreliable Narrator Cue Spotting & Psychic Distance Calibration
// ---------------------------------------------------------------------------
const unreliableCues: Drill = {
  id: "5-prose-fiction-nonfiction.unreliable-cues",
  topicId: "5-prose-fiction-nonfiction",
  title: "Unreliable Narrator Cues & Psychic Distance Diagnostics",
  level: 3,
  ibLevel: "SL",
  guideRef: "narrative-perspective-focalization",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const a = rng.pick(ACTORS);
    const place = rng.pick(PLACES);
    const obj = rng.pick(OBJECTS);

    // Tier 1 & 2 focus on spotting distinct unreliable narrator textual cues;
    // Tier 3 mixes subtle unreliable cues with John Gardner psychic-distance level calibration (1–5).
    const doDistance = tier === 3 && rng.bool(0.42);

    if (doDistance) {
      const level = rng.pick([1, 2, 3, 4, 5] as const);
      const samples: Record<1 | 2 | 3 | 4 | 5, string[]> = {
        1: [
          `In the bitter winter of 1958, the coastal town surrounding the ${place} lost half its shipping fleet to debt.`,
          `During the dry autumn of 1974, three provincial guilds beside the ${place} closed their ledgers forever.`,
        ],
        2: [
          `${a.name} stood outside the shut doors of the ${place}, turning a cold ${obj} slowly between ${a.poss} gloved fingers.`,
          `Across the wet cobblestones of the ${place}, ${a.name} buttoned ${a.poss} wool coat and laid the ${obj} on the stone parapet.`,
        ],
        3: [
          `${a.name} stared at the locked ${place} and felt a sharp tightening beneath ${a.poss} collarbone; ${a.subj} dreaded explaining the missing ${obj} to the clerk.`,
          `Inside the dim ${place}, ${a.name} noticed the damp ring beneath the ${obj} and realised with quiet panic that someone had opened the drawer before dawn.`,
        ],
        4: [
          `Honestly, thirty years serving the ${place} and not even a proper farewell — did the directors really expect ${a.obj} to surrender the ${obj} with a polite bow?`,
          `Tomorrow was the audit at the ${place}, and surely nobody in their right mind would blame ${a.obj} for a smudged ${obj} left behind by careless interns!`,
        ],
        5: [
          `Cold brass — ${obj} gone — rain hammering the ${place} glass — breathe, count the stair treads, no, someone's footsteps on the landing — too late now.`,
          `Salt on the lip — ${place} bell three chimes no four — where's the ${obj}, pockets empty — keep walking, don't turn around, white glare everywhere.`,
        ],
      };

      const labels: Record<1 | 2 | 3 | 4 | 5, string> = {
        1: "Level 1 (panoramic / cosmic zero focalisation)",
        2: "Level 2 (external social observation)",
        3: "Level 3 (close third-person internal focalisation with reporting tags)",
        4: "Level 4 (free indirect discourse — unquoted interior idiom in 3rd-person past)",
        5: "Level 5 (unfiltered stream of consciousness)",
      };

      return {
        prompt: `Read this unseen prose sentence:\n\n> *${rng.pick(samples[level])}*\n\nOn John Gardner's **1 to 5 psychic distance scale** (1 = panoramic omniscient overview, 5 = unfiltered stream of consciousness), enter the integer level (1, 2, 3, 4, or 5) that best fits this prose.`,
        answer: { type: "number", value: level, display: String(level) },
        hint: "1 = wide historical panorama; 2 = exterior gesture only; 3 = internal tags ('felt', 'dreaded'); 4 = FID (no tags, character voice in 3rd past); 5 = fractured raw stream.",
        solution: [
          `This sentence exemplifies **${labels[level]}**.`,
          `Psychic distance level = **${level}**.`,
        ],
      };
    }

    type CueKind = "euphemism" | "contradiction" | "naive" | "incongruity" | "defensive";
    const cuePool: CueKind[] =
      tier === 1
        ? ["euphemism", "contradiction", "naive", "defensive"]
        : ["euphemism", "contradiction", "naive", "incongruity", "defensive"];

    const cue = rng.pick(cuePool);
    const bankLabels: Record<CueKind, string> = {
      euphemism: "euphemism",
      contradiction: "self-contradiction",
      naive: "naive unreliability",
      incongruity: "tonal incongruity",
      defensive: "defensive over-insistence",
    };

    const optionsList = rng
      .shuffle(cuePool.map((k) => bankLabels[k]))
      .join(" / ");

    if (cue === "euphemism") {
      const extracts = [
        `I merely conducted some overdue "housekeeping" in the ${place} before the auditors arrived, sensibly retiring the inconvenient ${obj} to the incinerator.`,
        `Borrowing my sister's ${obj} without mention was simply a temporary "custodial transfer" to save her from careless habits around the ${place}.`,
      ];
      return {
        prompt: `Read this unreliable first-person extract:\n\n> *${rng.pick(extracts)}*\n\nClassify the primary textual cue of unreliability (${optionsList}):`,
        answer: { type: "text", accept: ["euphemism", "euphemistic diction", "euphemistic reframing"], display: "euphemism" },
        traps: [
          { spec: { type: "text", accept: ["naive unreliability", "naive"] }, feedback: "A naive narrator misunderstands innocently; here the speaker knowingly softens theft or destruction with polite substitute terms." },
        ],
        hint: "Look at polite, sanitised substitute phrases disguising destruction or theft.",
        solution: [
          "Softening theft or destruction of evidence as 'housekeeping' or 'custodial transfer' is **euphemism** — a calculated linguistic disguise signalling moral unreliability.",
        ],
      };
    }

    if (cue === "contradiction") {
      const extracts = [
        `I have never once set foot inside the ${place} after dusk. Admittedly, when I slipped past the watchman's lantern at midnight to retrieve the ${obj}, the courtyard was quite empty.`,
        `Nothing in my cousin's letter troubled me in the slightest. Still, I sat awake beside the ${place} until four in the morning tearing the ${obj}'s receipt into twenty tiny squares.`,
      ];
      return {
        prompt: `Read this unreliable first-person extract:\n\n> *${rng.pick(extracts)}*\n\nClassify the primary textual cue of unreliability (${optionsList}):`,
        answer: { type: "text", accept: ["self-contradiction", "contradiction", "micro-contradiction"], display: "self-contradiction" },
        traps: [
          { spec: { type: "text", accept: ["euphemism"] }, feedback: "Notice Sentence 2 directly disproves the absolute claim made in Sentence 1." },
        ],
        hint: "Compare the sweeping denial in Sentence 1 with the admission that immediately follows in Sentence 2.",
        solution: [
          "Sentence 2 directly undermines the absolute assertion in Sentence 1 — textbook **self-contradiction** exposing an untrustworthy narrator.",
        ],
      };
    }

    if (cue === "naive") {
      const extracts = [
        `Mother says our sudden midnight trip past the ${place} is a lovely holiday surprise, though I don't know why Father sewed our gold rings into my coat lining and told me never to say our surname aloud.`,
        `Uncle said the men outside the ${place} taking away our ${obj} were helpful furniture inspectors, which explains why Grandmother cried quietly behind the pantry door until the lorry left.`,
      ];
      return {
        prompt: `Read this unreliable first-person extract:\n\n> *${rng.pick(extracts)}*\n\nClassify the primary textual cue of unreliability (${optionsList}):`,
        answer: { type: "text", accept: ["naive unreliability", "naive narrator", "naivety", "naive"], display: "naive unreliability" },
        traps: [
          { spec: { type: "text", accept: ["defensive over-insistence", "defensive"] }, feedback: "The child speaker is not defensively lying — they innocently report literal details whose sinister reality only the reader decodes." },
        ],
        hint: "The speaker is innocent rather than deceitful: the reader decodes danger or persecution that the child takes literally.",
        solution: [
          "The innocent speaker reports exact surface facts and adult euphemisms without grasping the underlying flight or seizure — **naive unreliability** generating acute dramatic irony.",
        ],
      };
    }

    if (cue === "incongruity") {
      const extracts = [
        `Evicting four elderly tenants from the ${place} in freezing rain proved remarkably brisk; I finished with twenty minutes to spare and treated myself to a delightful lemon tart while polishing my ${obj}.`,
        `After the workshop collapsed behind the ${place}, the chief nuisance was chalk dust settling on my trousers, which took an utterly tedious quarter-hour to brush clean.`,
      ];
      return {
        prompt: `Read this unreliable first-person extract:\n\n> *${rng.pick(extracts)}*\n\nClassify the primary textual cue of unreliability (${optionsList}):`,
        answer: { type: "text", accept: ["tonal incongruity", "incongruous tone", "incongruity"], display: "tonal incongruity" },
        traps: [
          { spec: { type: "text", accept: ["self-contradiction", "contradiction"] }, feedback: "The speaker doesn't contradict a literal fact — rather, their jaunty, trivial tone clashes chillingly against human suffering." },
        ],
        hint: "Compare the moral gravity of the crisis against the narrator's breezy, trivial emotional register.",
        solution: [
          "Applying jaunty or petty register (*delightful lemon tart*, *chief nuisance*) to human calamity creates chilling **tonal incongruity**, exposing callous self-absorption.",
        ],
      };
    }

    const defExtracts = [
      `I am certainly not a jealous colleague — indeed, everyone at the ${place} knows I am the calmest soul alive, and I mention ${a.name}'s undeserved promotion and flashy ${obj} purely out of professional concern!`,
      `Believe me, I bear zero resentment toward the board at the ${place}; anyone suggesting I hid the ${obj} out of spite simply misunderstands my tireless devotion to order.`,
    ];
    return {
      prompt: `Read this unreliable first-person extract:\n\n> *${rng.pick(defExtracts)}*\n\nClassify the primary textual cue of unreliability (${optionsList}):`,
      answer: { type: "text", accept: ["defensive over-insistence", "defensive insistence", "over-insistence", "defensiveness"], display: "defensive over-insistence" },
      traps: [
        { spec: { type: "text", accept: ["naive unreliability", "naive"] }, feedback: "Notice how aggressively the speaker protests their own innocence ('I am certainly not...', 'Believe me...') — protesting too much." },
      ],
      hint: "The speaker 'protests too much', anxiously assuring the reader of their own virtue before anyone even accused them.",
      solution: [
        "Unsolicited, emphatic protests of innocence (*I am certainly not...*, *Believe me...*) betray **defensive over-insistence**, alerting the reader to concealed envy or guilt.",
      ],
    };
  },
};

export const drills: Drill[] = [
  focalizationMode,
  temporalStructure,
  nonfictionGenrePersona,
  rhetoricSyntaxCraft,
  unreliableCues,
];
