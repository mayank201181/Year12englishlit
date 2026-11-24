// ---------------------------------------------------------------------------
// Procedural skill drills for Topic 6: The 7 Central Concepts & Global Issues
// IB Diploma English A: Literature (SL & HL, First Assessment 2021)
// Strict Non-Prescriptive Text Policy: ZERO set texts assumed.
// ---------------------------------------------------------------------------
import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean } from "./helpers.ts";

function fmtTime(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

const FORMS_SINGLE = [
  "a studied novel",
  "a modern tragedy",
  "a lyric poetry sequence",
  "a literary memoir",
  "a translated novella",
  "a contemporary drama",
  "a short-story collection",
  "an essay collection",
] as const;

const FORM_PAIRS = [
  "an original English novel and a translated drama",
  "an original English poetry collection and a translated novella",
  "an original English drama and a translated memoir",
  "an original English short-story cycle and a translated tragedy",
  "an original English essay collection and a translated novel",
  "an original English lyric sequence and a translated domestic play",
] as const;

const STUDENT_NAMES = [
  "Ananya", "Mei", "Daniel", "Rohan", "Sofia", "Kieran", "Priya", "Lucas", "Nadia", "Ethan", "Hana", "Zara",
] as const;

// ===========================================================================
// DRILL 1: 7 Central Concepts — Match the Analytical Question (level 1)
// ===========================================================================
interface ConceptCase {
  concept: "Identity" | "Culture" | "Creativity" | "Communication" | "Perspective" | "Transformation" | "Representation";
  tier: 1 | 2 | 3;
  inquiry: string;
  rationale: string;
  nearMiss: "Identity" | "Culture" | "Creativity" | "Communication" | "Perspective" | "Transformation" | "Representation";
  nearFeedback: string;
}

const CONCEPT_CASES: readonly ConceptCase[] = [
  // Tier 1 — crisp canonical conceptual questions
  {
    concept: "Identity",
    tier: 1,
    inquiry: "how shifting pronouns and fractured self-naming express a protagonist's divided sense of selfhood",
    rationale: "Selfhood, pronouns, and subjective self-construction anchor **Identity**.",
    nearMiss: "Culture",
    nearFeedback: "Culture focuses on shared social codes; inward selfhood and self-naming anchor **Identity**.",
  },
  {
    concept: "Identity",
    tier: 1,
    inquiry: "how mirror motifs and internal monologue chart an exile's struggle to define who they truly are",
    rationale: "Exploring personal self-definition and interiority centres squarely on **Identity**.",
    nearMiss: "Perspective",
    nearFeedback: "Perspective tracks narrative vantage point; struggling to define personal selfhood centres on **Identity**.",
  },
  {
    concept: "Culture",
    tier: 1,
    inquiry: "how inherited wedding rituals, dialect idioms, and communal customs regulate belonging inside a village",
    rationale: "Shared rituals, idioms, and communal social norms anchor **Culture**.",
    nearMiss: "Identity",
    nearFeedback: "Identity examines individual selfhood; shared rituals and communal customs anchor **Culture**.",
  },
  {
    concept: "Culture",
    tier: 1,
    inquiry: "how generational clashes over ancestral foodways and etiquette expose tensions within a diaspora community",
    rationale: "Ancestral traditions, etiquette, and collective heritage define **Culture**.",
    nearMiss: "Identity",
    nearFeedback: "Here the focus is shared communal traditions and heritage — that is **Culture** rather than individual Identity.",
  },
  {
    concept: "Creativity",
    tier: 1,
    inquiry: "how an author breaks traditional sonnet conventions and invents hybrid verse to enact artistic freedom",
    rationale: "Artistic innovation and stretching literary conventions directly define **Creativity**.",
    nearMiss: "Transformation",
    nearFeedback: "Transformation examines change across plots or adaptations; artistic originality and form-breaking anchor **Creativity**.",
  },
  {
    concept: "Creativity",
    tier: 1,
    inquiry: "how a jailed storyteller's imaginative fables sustain hope and aesthetic dissent inside an oppressive cell",
    rationale: "Artistic imagination acting as survival and aesthetic dissent anchors **Creativity**.",
    nearMiss: "Communication",
    nearFeedback: "Communication focuses on speech exchange; artistic invention and imaginative craft anchor **Creativity**.",
  },
  {
    concept: "Communication",
    tier: 1,
    inquiry: "how awkward stage pauses, evasive euphemisms, and unsent letters distort truth between spouses",
    rationale: "How meaning is conveyed, masked, or withheld through speech and silence defines **Communication**.",
    nearMiss: "Perspective",
    nearFeedback: "Perspective asks through whose eyes we see; silences, euphemisms, and unsent letters directly target **Communication**.",
  },
  {
    concept: "Communication",
    tier: 1,
    inquiry: "how clipped stichomythia and deliberate verbal interruptions expose breakdown in family dialogue",
    rationale: "Dialogue breakdowns, interruptions, and spoken subtext belong directly to **Communication**.",
    nearMiss: "Representation",
    nearFeedback: "Representation looks at how language constructs reality; dialogue exchanges and interruptions target **Communication**.",
  },
  {
    concept: "Perspective",
    tier: 1,
    inquiry: "how restricting focalization strictly to an unreliable narrator's eyes conceals crucial moral blind spots",
    rationale: "Controlling *whose eyes* and biases filter every event anchors **Perspective**.",
    nearMiss: "Representation",
    nearFeedback: "Representation examines how language mediates a group or reality; restricting focalization to one vantage point targets **Perspective**.",
  },
  {
    concept: "Perspective",
    tier: 1,
    inquiry: "how alternating between an innocent child's viewpoint and a wary adult's retrospective voice reshapes reader judgement",
    rationale: "Shifting vantage points and temporal angles directly interrogate **Perspective**.",
    nearMiss: "Identity",
    nearFeedback: "Identity examines selfhood; shifting narrative vantage points between child and adult anchors **Perspective**.",
  },
  {
    concept: "Transformation",
    tier: 1,
    inquiry: "how a structural volta and sudden tragic reversal chart an irreversible shift from arrogance to humility",
    rationale: "Irreversible personal or structural change directly anchors **Transformation**.",
    nearMiss: "Identity",
    nearFeedback: "While selfhood is affected, tracking an irreversible arc of reversal and change specifically defines **Transformation**.",
  },
  {
    concept: "Transformation",
    tier: 1,
    inquiry: "how reworking an ancient Greek myth into a modern suburban setting reshapes its original tragic meaning",
    rationale: "Adapting and rewriting an earlier literary text across eras directly exemplifies **Transformation**.",
    nearMiss: "Culture",
    nearFeedback: "Rewriting and reshaping an earlier genre or myth into a new work specifically anchors **Transformation**.",
  },
  {
    concept: "Representation",
    tier: 1,
    inquiry: "how mechanical metaphors and omitted direct speech reduce factory labourers to voiceless abstractions",
    rationale: "How language selectively constructs, distorts, or erases a group defines **Representation**.",
    nearMiss: "Perspective",
    nearFeedback: "Perspective tracks the narrative camera angle; how metaphors and omissions construct a social group defines **Representation**.",
  },
  {
    concept: "Representation",
    tier: 1,
    inquiry: "how glossy aesthetic imagery mediates the horror of war rather than passively mirroring battlefield reality",
    rationale: "Interrogating how art selectively mediates and frames reality defines **Representation**.",
    nearMiss: "Creativity",
    nearFeedback: "Creativity asks about artistic innovation; interrogating how language mediates or distorts reality defines **Representation**.",
  },

  // Tier 2 — IB Diploma exam-standard analytical inquiries
  {
    concept: "Identity",
    tier: 2,
    inquiry: "how recurring mask imagery and code-switching dramatise the performance of gendered selfhood under scrutiny",
    rationale: "Performing and negotiating personal selfhood under social gaze anchors **Identity**.",
    nearMiss: "Representation",
    nearFeedback: "Here the question centres on a character's performed selfhood and masks — **Identity** is the sharpest anchor.",
  },
  {
    concept: "Identity",
    tier: 2,
    inquiry: "how fragmented syntax in a dramatic monologue enacts a speaker's psychological split between public title and private self",
    rationale: "Fractured subjectivity and split selfhood directly anchor **Identity**.",
    nearMiss: "Communication",
    nearFeedback: "The tension here is the split between public role and private selfhood — **Identity** rather than conversational exchange.",
  },
  {
    concept: "Culture",
    tier: 2,
    inquiry: "how domestic architecture, untranslated honorifics, and ancestral proverbs encode rigid class hierarchy",
    rationale: "Shared linguistic honorifics, proverbs, and social codes anchor **Culture**.",
    nearMiss: "Communication",
    nearFeedback: "Honorifics and ancestral proverbs functioning as shared social hierarchy codes belong primarily to **Culture**.",
  },
  {
    concept: "Culture",
    tier: 2,
    inquiry: "how contrasting rural harvest festivals with sterile urban cafes maps competing communal value systems",
    rationale: "Contrasting shared social rituals and communal ecosystems anchors **Culture**.",
    nearMiss: "Representation",
    nearFeedback: "Mapping competing social ecosystems and communal rituals squarely targets **Culture**.",
  },
  {
    concept: "Creativity",
    tier: 2,
    inquiry: "how metafictional digressions and typographical play invite readers to question who invents artistic truth",
    rationale: "Self-reflexive formal invention and artistic play directly anchor **Creativity**.",
    nearMiss: "Representation",
    nearFeedback: "Metafictional formal experimentation foregrounding artistic invention specifically anchors **Creativity**.",
  },
  {
    concept: "Creativity",
    tier: 2,
    inquiry: "how blending lyrical prose with courtroom transcripts subverts genre boundaries to generate fresh aesthetic urgency",
    rationale: "Innovating across genre conventions to forge new expressive forms anchors **Creativity**.",
    nearMiss: "Transformation",
    nearFeedback: "Inventing a hybrid form to disrupt genre expectations specifically anchors **Creativity**.",
  },
  {
    concept: "Communication",
    tier: 2,
    inquiry: "how censored correspondence and mistranslated courtroom remarks expose speech as an arena of asymmetric power",
    rationale: "Censorship, mistranslation, and obstructed verbal exchange target **Communication**.",
    nearMiss: "Culture",
    nearFeedback: "Censored letters and mistranslated speech directly examine how meaning breaks down — **Communication**.",
  },
  {
    concept: "Communication",
    tier: 2,
    inquiry: "how subtextual small talk over tea conceals unspoken grief more forcefully than explicit confession",
    rationale: "Subtext — what is withheld beneath polite speech — sits at the core of **Communication**.",
    nearMiss: "Identity",
    nearFeedback: "Analysing how spoken small talk conceals unspoken emotion directly interrogates **Communication**.",
  },
  {
    concept: "Perspective",
    tier: 2,
    inquiry: "how free indirect discourse blurs narrator irony with a protagonist's self-deception to destabilise sympathy",
    rationale: "Free indirect discourse controls psychic distance and focalising vantage point — **Perspective**.",
    nearMiss: "Representation",
    nearFeedback: "Free indirect discourse specifically manipulates *whose consciousness filters narration* — that is **Perspective**.",
  },
  {
    concept: "Perspective",
    tier: 2,
    inquiry: "how layered frame narration forces readers to reassess an opening testimony through three competing eyewitnesses",
    rationale: "Competing eyewitness vantage points and framing angles anchor **Perspective**.",
    nearMiss: "Communication",
    nearFeedback: "Competing eyewitnesses framing the same events specifically interrogate narrative **Perspective**.",
  },
  {
    concept: "Transformation",
    tier: 2,
    inquiry: "how an evolving water motif tracks a community's gradual slide from ecological stewardship into commercial apathy",
    rationale: "Tracking gradual structural and moral evolution across a whole text anchors **Transformation**.",
    nearMiss: "Culture",
    nearFeedback: "The central verb here is tracking gradual *change and erosion* over time — **Transformation**.",
  },
  {
    concept: "Transformation",
    tier: 2,
    inquiry: "how translating a terse classical tragedy into colloquial modern dialogue reshapes its rhythmic gravity",
    rationale: "How translation and adaptation alter a text's tone and meaning exemplifies **Transformation**.",
    nearMiss: "Communication",
    nearFeedback: "Reshaping an older work across languages and registers into a new aesthetic form specifically anchors **Transformation**.",
  },
  {
    concept: "Representation",
    tier: 2,
    inquiry: "how colonial travelogues frame indigenous landscapes as empty backdrops while erasing local inhabitants' agency",
    rationale: "Exposing how language constructs biased portraits and erases voices defines **Representation**.",
    nearMiss: "Perspective",
    nearFeedback: "Focus on how text *constructs* landscapes and *erases* people's agency — that is **Representation**.",
  },
  {
    concept: "Representation",
    tier: 2,
    inquiry: "how restrained, understated domestic detail depicts political trauma without sensationalising human suffering",
    rationale: "Evaluating ethical artistic choices in how suffering is depicted defines **Representation**.",
    nearMiss: "Communication",
    nearFeedback: "Evaluating how art depicts trauma responsibly without sensationalism anchors **Representation**.",
  },

  // Tier 3 — nuanced near-neighbour tension inquiries (SL/HL stretch)
  {
    concept: "Identity",
    tier: 3,
    inquiry: "how a narrator's refusal to accept an inherited surname resists external categorisation yet deepens private alienation",
    rationale: "Self-naming, autonomy, and resisting external labels over personal selfhood anchor **Identity**.",
    nearMiss: "Culture",
    nearFeedback: "Although surnames carry cultural weight, the tension centres on individual self-definition and alienation — **Identity**.",
  },
  {
    concept: "Culture",
    tier: 3,
    inquiry: "how a play's shifting reception from nineteenth-century scandal to modern canonical classic exposes evolving moral horizons",
    rationale: "How changing societal values across historical contexts reshape reception anchors **Culture**.",
    nearMiss: "Transformation",
    nearFeedback: "Evolving societal moral horizons shaping audience reception across periods anchor **Culture**.",
  },
  {
    concept: "Creativity",
    tier: 3,
    inquiry: "how an author's deliberate refusal of narrative closure turns artistic incompleteness into an act of imaginative resistance",
    rationale: "Deliberate aesthetic innovation using formal incompleteness as resistance anchors **Creativity**.",
    nearMiss: "Representation",
    nearFeedback: "Using bold formal innovation and imaginative resistance as artistic strategy anchors **Creativity**.",
  },
  {
    concept: "Communication",
    tier: 3,
    inquiry: "how bureaucratic euphemisms and ritualised state slogans hollow out ordinary citizens' capacity for honest dissent",
    rationale: "Examining how corrupted public language distorts speech and truth-telling anchors **Communication**.",
    nearMiss: "Representation",
    nearFeedback: "Here the core mechanism is how euphemisms and slogans corrupt speech and truth exchange — **Communication**.",
  },
  {
    concept: "Perspective",
    tier: 3,
    inquiry: "how dramatic irony splits the audience's ethical awareness from a tragic ruler's self-justifying soliloquy",
    rationale: "Splitting audience vantage point from a character's blind viewpoint anchors **Perspective**.",
    nearMiss: "Communication",
    nearFeedback: "Dramatic irony works by contrasting two *vantage points* (audience vs ruler) — that is **Perspective**.",
  },
  {
    concept: "Transformation",
    tier: 3,
    inquiry: "how a sonnet's rigid, unchanging rhyme scheme ironically undercuts its speaker's bold claim of personal reinvention",
    rationale: "Testing claimed personal reinvention against unchanging formal architecture directly probes **Transformation**.",
    nearMiss: "Identity",
    nearFeedback: "The ironic clash centres directly on whether *change/reinvention* genuinely occurs — **Transformation**.",
  },
  {
    concept: "Representation",
    tier: 3,
    inquiry: "how denying domestic workers interiority while aestheticising their silence exposes the ethics of who gets narrated",
    rationale: "Interrogating selective visibility, narrative omission, and who gets constructed as a subject anchors **Representation**.",
    nearMiss: "Perspective",
    nearFeedback: "Notice the explicit ethical focus on *aestheticising silence and who gets constructed/narrated* — **Representation**.",
  },
  {
    concept: "Perspective",
    tier: 3,
    inquiry: "how shifting from retrospective adult omniscience to breathless present-tense focalization narrows the reader's moral distance",
    rationale: "Modulating focalization and temporal vantage point to control reader distance anchors **Perspective**.",
    nearMiss: "Transformation",
    nearFeedback: "Switching narrative lens and psychic distance between narrator and character specifically anchors **Perspective**.",
  },
  {
    concept: "Representation",
    tier: 3,
    inquiry: "how pastoral nostalgia masks rural poverty by converting exhausted labourers into picturesque landscape figures",
    rationale: "Unmasking how romanticised literary conventions distort material reality anchors **Representation**.",
    nearMiss: "Culture",
    nearFeedback: "Critiquing how aesthetic conventions distort poverty into picturesque figures specifically defines **Representation**.",
  },
  {
    concept: "Communication",
    tier: 3,
    inquiry: "how untranslated footnotes and hesitant ellipses foreground the friction of conveying grief across two languages",
    rationale: "Foregrounding friction in conveying meaning across languages, ellipses, and silences anchors **Communication**.",
    nearMiss: "Culture",
    nearFeedback: "Focus on 'foreground the friction of conveying grief' — obstacles in transmitting meaning belong to **Communication**.",
  },
  {
    concept: "Transformation",
    tier: 3,
    inquiry: "how an elegy subverts classical consolation by refusing to convert personal grief into neat spiritual renewal",
    rationale: "Questioning whether grief yields renewal or resists conventional emotional change probes **Transformation**.",
    nearMiss: "Creativity",
    nearFeedback: "The inquiry probes the refusal of emotional/spiritual conversion and change — **Transformation**.",
  },
  {
    concept: "Identity",
    tier: 3,
    inquiry: "how an autobiographical narrator distinguishes her naive experiencing self from her sceptical retrospective self",
    rationale: "Constructing and interrogating a layered personal self across time in memoir anchors **Identity**.",
    nearMiss: "Perspective",
    nearFeedback: "While vantage point contributes, dividing experiencing self vs retrospective self in autobiography specifically centres on selfhood (**Identity**).",
  },
  {
    concept: "Culture",
    tier: 3,
    inquiry: "how ceremonial banquets and unspoken hospitality codes enforce conformity even when no character voices a threat",
    rationale: "Unspoken communal codes and ceremonial social norms exerting quiet conformity anchor **Culture**.",
    nearMiss: "Communication",
    nearFeedback: "Ceremonial banquets and hospitality codes operate as collective social norms — **Culture**.",
  },
  {
    concept: "Creativity",
    tier: 3,
    inquiry: "how an unreliable playwright-protagonist stages plays-within-plays to explore whether fiction can heal real guilt",
    rationale: "Examining the power and limits of artistic creation through plays-within-plays anchors **Creativity**.",
    nearMiss: "Representation",
    nearFeedback: "Asking whether imaginative invention and artistic creation can heal guilt specifically targets **Creativity**.",
  },
];

const CONCEPT_STEMS = [
  "In {form}, an essay investigates {inquiry}. Name the single sharpest IB Central Concept:",
  "A candidate studying {form} frames a thesis asking {inquiry}. Which ONE of the 7 IB Central Concepts fits best?",
  "Which of the 7 IB Central Concepts most directly anchors an inquiry into {form} examining {inquiry}?",
  "For an HL/SL analytical paragraph on {form} exploring {inquiry}, identify the primary IB Central Concept:",
] as const;

const drillCentralConcepts: Drill = {
  id: "6-concepts-global-issues.central-concepts-lens",
  topicId: "6-concepts-global-issues",
  title: "7 Central Concepts: Match the Analytical Question",
  level: 1,
  guideRef: "seven-central-concepts",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const pool = CONCEPT_CASES.filter((c) => c.tier === tier);
    const chosen = rng.pick(pool);
    const form = rng.pick(FORMS_SINGLE);
    const stem = rng.pick(CONCEPT_STEMS);
    const prompt = stem.replace("{form}", form).replace("{inquiry}", chosen.inquiry);

    return {
      prompt,
      answer: {
        type: "text",
        accept: [chosen.concept, chosen.concept.toLowerCase()],
        display: chosen.concept,
      },
      traps: [
        {
          spec: { type: "text", accept: [chosen.nearMiss, chosen.nearMiss.toLowerCase()] },
          feedback: chosen.nearFeedback,
        },
      ],
      hint: "Choose one of the 7 IB Central Concepts: Identity, Culture, Creativity, Communication, Perspective, Transformation, or Representation.",
      solution: [
        `Identify the core analytical focus: "${chosen.inquiry}".`,
        chosen.rationale,
      ],
    };
  },
};

// ===========================================================================
// DRILL 2: 5 Fields of Inquiry — Classify the Global Issue (level 1)
// ===========================================================================
interface FieldCase {
  field: 1 | 2 | 3 | 4 | 5;
  tier: 1 | 2 | 3;
  issue: string;
  nearField: 1 | 2 | 3 | 4 | 5;
  nearFeedback: string;
  why: string;
}

const FIELD_NAMES: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: "Culture, identity & community",
  2: "Beliefs, values & education",
  3: "Politics, power & justice",
  4: "Art, creativity & imagination",
  5: "Science, technology & the environment",
};

const FIELD_CASES: readonly FieldCase[] = [
  // Field 1
  {
    field: 1, tier: 1,
    issue: "how linguistic assimilation inside migrant homes creates emotional distance between grandparents and grandchildren",
    nearField: 2, nearFeedback: "Family beliefs touch this, yet diaspora language and generational belonging sit directly in Field 1.",
    why: "Migration, heritage language, and family belonging anchor **Field 1: Culture, identity & community**.",
  },
  {
    field: 1, tier: 1,
    issue: "how rigid social class expectations isolate outsiders who marry across economic boundaries",
    nearField: 3, nearFeedback: "Class touches power, but everyday community belonging and marriage expectations anchor Field 1.",
    why: "Class belonging, community exclusion, and domestic identity anchor **Field 1: Culture, identity & community**.",
  },
  {
    field: 1, tier: 2,
    issue: "how inherited codes of stoic masculinity discourage men from expressing grief inside ordinary households",
    nearField: 2, nearFeedback: "Socialised gender roles and domestic identity belong primarily to Field 1 (Culture, identity & community).",
    why: "Gender identity and communal expectations in family life anchor **Field 1: Culture, identity & community**.",
  },
  {
    field: 1, tier: 2,
    issue: "how returning exiles struggle to reconcile idealised nostalgia for a homeland with contemporary neighbourhood realities",
    nearField: 3, nearFeedback: "Political exile may be background, yet belonging and cultural displacement anchor Field 1.",
    why: "Exile, homeland belonging, and cultural dislocation anchor **Field 1: Culture, identity & community**.",
  },
  {
    field: 1, tier: 3,
    issue: "how subtle dialect shame pressures working-class adolescents into concealing family origins at university",
    nearField: 2, nearFeedback: "University is the backdrop, yet the core tension is linguistic class identity and belonging (Field 1).",
    why: "Linguistic stigma, class origin, and identity negotiation sit directly in **Field 1: Culture, identity & community**.",
  },
  {
    field: 1, tier: 3,
    issue: "how neighbourhood gossip enforces unspoken boundaries of gender respectability across tight-knit towns",
    nearField: 2, nearFeedback: "Community policing of gender identity and belonging anchors Field 1 most directly.",
    why: "Communal policing of gender norms and belonging sits in **Field 1: Culture, identity & community**.",
  },

  // Field 2
  {
    field: 2, tier: 1,
    issue: "how authoritarian boarding-school discipline rewards blind obedience while crushing moral curiosity",
    nearField: 3, nearFeedback: "Institutional schooling and moral formation anchor Field 2 (Beliefs, values & education).",
    why: "Schooling, ethical formation, and obedience anchor **Field 2: Beliefs, values & education**.",
  },
  {
    field: 2, tier: 1,
    issue: "how dogmatic religious guilt compels young believers to conceal honest spiritual doubt from relatives",
    nearField: 1, nearFeedback: "While family is present, religious faith, guilt, and personal conscience sit directly in Field 2.",
    why: "Faith, spiritual doubt, and moral conscience anchor **Field 2: Beliefs, values & education**.",
  },
  {
    field: 2, tier: 2,
    issue: "how exam-driven schooling reduces learning to status competition and erodes students' ethical empathy",
    nearField: 1, nearFeedback: "Formal schooling and value systems belong squarely to Field 2 (Beliefs, values & education).",
    why: "Educational systems shaping ethical values anchor **Field 2: Beliefs, values & education**.",
  },
  {
    field: 2, tier: 2,
    issue: "how outward religious piety disguises everyday hypocrisy and cruelty toward vulnerable household dependants",
    nearField: 3, nearFeedback: "Religious belief and moral hypocrisy sit directly in Field 2 (Beliefs, values & education).",
    why: "Piety, moral codes, and ethical hypocrisy sit squarely in **Field 2: Beliefs, values & education**.",
  },
  {
    field: 2, tier: 3,
    issue: "how conflicting inherited moral codes force conscientious individuals to choose between filial obedience and personal integrity",
    nearField: 1, nearFeedback: "The central conflict is an ethical dilemma between competing value systems — Field 2.",
    why: "Moral codes, conscience, and competing ethical values anchor **Field 2: Beliefs, values & education**.",
  },
  {
    field: 2, tier: 3,
    issue: "how selective history curricula train young citizens to forget inconvenient national injustices",
    nearField: 3, nearFeedback: "Politics intersects here, yet curriculum design and ideological schooling anchor Field 2.",
    why: "Education, curricula, and the shaping of historical values sit directly in **Field 2: Beliefs, values & education**.",
  },

  // Field 3
  {
    field: 3, tier: 1,
    issue: "how state surveillance and neighbourhood informants destroy everyday trust between relatives",
    nearField: 1, nearFeedback: "The household feels the harm, yet state surveillance and authoritarian control anchor Field 3.",
    why: "State surveillance and authoritarian abuse of authority anchor **Field 3: Politics, power & justice**.",
  },
  {
    field: 3, tier: 1,
    issue: "how biased legal courts deny impoverished citizens fair redress against wealthy landowners",
    nearField: 1, nearFeedback: "Courts, legal rights, and systemic injustice sit squarely in Field 3 (Politics, power & justice).",
    why: "Law, judicial bias, and institutional injustice anchor **Field 3: Politics, power & justice**.",
  },
  {
    field: 3, tier: 2,
    issue: "how bureaucratic euphemisms normalise state coercion inside ordinary citizens' daily speech",
    nearField: 4, nearFeedback: "Euphemism is a linguistic tool, yet state coercion and propaganda anchor Field 3.",
    why: "Propaganda, state power, and political coercion anchor **Field 3: Politics, power & justice**.",
  },
  {
    field: 3, tier: 2,
    issue: "how colonial administration strips local communities of legal autonomy and self-determination",
    nearField: 1, nearFeedback: "Identity suffers, yet colonial governance and legal sovereignty anchor Field 3.",
    why: "Colonial authority, governance, and rights sit directly in **Field 3: Politics, power & justice**.",
  },
  {
    field: 3, tier: 3,
    issue: "how fear of civic reprisal coerces ordinary bystanders into complicit silence when neighbours are persecuted",
    nearField: 2, nearFeedback: "Moral conscience plays a role, yet persecution and civic reprisal anchor Field 3.",
    why: "Civic persecution, power dynamics, and justice anchor **Field 3: Politics, power & justice**.",
  },
  {
    field: 3, tier: 3,
    issue: "how emergency decrees weaponise fear to strip citizens of basic freedoms inside everyday streets",
    nearField: 5, nearFeedback: "Emergency decrees and civil liberties sit directly in Field 3 (Politics, power & justice).",
    why: "State decrees, authority, and civil rights belong to **Field 3: Politics, power & justice**.",
  },

  // Field 4
  {
    field: 4, tier: 1,
    issue: "how banned poets circulate clandestine verses to preserve silenced cultural memory under exile",
    nearField: 3, nearFeedback: "Censorship is present, yet the core focus is how *artistic creation* preserves memory — Field 4.",
    why: "Poetry as aesthetic resistance and creative memory preservation anchors **Field 4: Art, creativity & imagination**.",
  },
  {
    field: 4, tier: 1,
    issue: "how commercial patronage pressures painters and writers into sacrificing artistic integrity for survival",
    nearField: 3, nearFeedback: "Economic pressure is present, yet artistic integrity and commodification of art anchor Field 4.",
    why: "Artistic autonomy and commodification of art anchor **Field 4: Art, creativity & imagination**.",
  },
  {
    field: 4, tier: 2,
    issue: "how imaginative storytelling offers traumatised children a fragile refuge from everyday domestic violence",
    nearField: 1, nearFeedback: "The focus is explicitly *imaginative storytelling* as psychological refuge — Field 4.",
    why: "Imagination and storytelling as survival directly anchor **Field 4: Art, creativity & imagination**.",
  },
  {
    field: 4, tier: 2,
    issue: "how aestheticising human suffering in journalism or photography numbs everyday viewers' moral empathy",
    nearField: 2, nearFeedback: "Ethical response matters, yet interrogating how *artistic representation* frames suffering anchors Field 4.",
    why: "Aesthetics, artistic framing, and the ethics of representation sit in **Field 4: Art, creativity & imagination**.",
  },
  {
    field: 4, tier: 3,
    issue: "how theatrical satire exposes pompous social illusions more sharply than direct political argument",
    nearField: 3, nearFeedback: "Politics is the target, yet the mechanism foregrounded is *theatrical craft and satire* — Field 4.",
    why: "The distinctive social force of theatrical satire and artistic craft anchors **Field 4: Art, creativity & imagination**.",
  },
  {
    field: 4, tier: 3,
    issue: "how rewriting inherited folk tales allows marginalised storytellers to reclaim voice and imaginative agency",
    nearField: 1, nearFeedback: "Reclaiming agency specifically through *rewriting stories and imaginative craft* anchors Field 4.",
    why: "Storytelling, re-imagination, and creative agency sit squarely in **Field 4: Art, creativity & imagination**.",
  },

  // Field 5
  {
    field: 5, tier: 1,
    issue: "how industrial river pollution destroys rural communities' daily livelihoods and attachment to place",
    nearField: 3, nearFeedback: "Pollution and ecological attachment sit directly in Field 5 (Science, technology & the environment).",
    why: "Environmental degradation and human-nature relationships anchor **Field 5: Science, technology & the environment**.",
  },
  {
    field: 5, tier: 1,
    issue: "how unchecked scientific hubris in medical experimentation strips vulnerable patients of bodily dignity",
    nearField: 2, nearFeedback: "Ethics intersect, yet medical experimentation and scientific hubris anchor Field 5.",
    why: "Scientific ethics and hubris anchor **Field 5: Science, technology & the environment**.",
  },
  {
    field: 5, tier: 2,
    issue: "how constant digital monitoring in modern workplaces erodes workers' privacy and mental peace",
    nearField: 3, nearFeedback: "Digital technology reshaping daily human agency sits directly in Field 5.",
    why: "Digital surveillance and technological alienation sit in **Field 5: Science, technology & the environment**.",
  },
  {
    field: 5, tier: 2,
    issue: "how relentless urban concrete expansion severs city dwellers from sensory connection with living landscapes",
    nearField: 1, nearFeedback: "Alienation from natural landscapes anchors Field 5 (Science, technology & the environment).",
    why: "Urbanisation and ecological estrangement anchor **Field 5: Science, technology & the environment**.",
  },
  {
    field: 5, tier: 3,
    issue: "how slow climate drought reshapes daily rituals of scarcity and solidarity across agrarian households",
    nearField: 1, nearFeedback: "Household solidarity is the local lens, yet climate drought drives the tension — Field 5.",
    why: "Climate crisis and ecological scarcity sit directly in **Field 5: Science, technology & the environment**.",
  },
  {
    field: 5, tier: 3,
    issue: "how algorithmic media feeds fracture shared attention and deepen emotional isolation in everyday homes",
    nearField: 4, nearFeedback: "Algorithmic technology mediating daily isolation belongs squarely to Field 5.",
    why: "Technological alienation and digital mediation anchor **Field 5: Science, technology & the environment**.",
  },
];

const FIELD_LEGEND =
  "Enter the primary IB Field number (1–5): 1 = Culture, identity & community | 2 = Beliefs, values & education | 3 = Politics, power & justice | 4 = Art, creativity & imagination | 5 = Science, technology & the environment.";

const drillFieldsOfInquiry: Drill = {
  id: "6-concepts-global-issues.fields-of-inquiry-map",
  topicId: "6-concepts-global-issues",
  title: "5 Fields of Inquiry: Classify the Global Issue",
  level: 1,
  guideRef: "five-fields-of-inquiry",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const pool = FIELD_CASES.filter((c) => c.tier === tier);
    const chosen = rng.pick(pool);
    const pair = rng.pick(FORM_PAIRS);
    const name = rng.pick(STUDENT_NAMES);
    const prompt = `${name} pairs ${pair} to explore **${chosen.issue}**. ${FIELD_LEGEND}`;

    return {
      prompt,
      answer: { type: "number", value: chosen.field, display: String(chosen.field) },
      traps: [
        {
          spec: { type: "number", value: chosen.nearField },
          feedback: chosen.nearFeedback,
        },
      ],
      hint: "Focus on the primary engine of tension (C-B-P-A-S: 1 Culture, 2 Beliefs, 3 Politics, 4 Art, 5 Science).",
      solution: [
        chosen.why,
        `Primary Field of Inquiry = **${chosen.field}** (${FIELD_NAMES[chosen.field]}).`,
      ],
    };
  },
};

// ===========================================================================
// DRILL 3: Global Issue Flaw Detector — 3 IB Properties (level 2)
// ===========================================================================
type GiVerdict = "too broad" | "not transnational" | "lacks local impact" | "strong";

const GI_BROAD_T1 = [
  "Power", "Identity", "War", "Love", "Justice", "Freedom", "Nature", "Family", "Inequality", "Silence",
] as const;

const GI_BROAD_T2 = [
  "Power and corruption in literature",
  "Gender inequality across society",
  "Conflict, violence, and human suffering",
  "Culture, identity, and family relationships",
  "Technology and modern society",
  "Education, beliefs, and growing up",
  "Art, beauty, and human imagination",
  "Class hierarchy and social injustice",
] as const;

const GI_BROAD_T3 = [
  "How power affects human relationships in novels and plays",
  "The many ways society shapes personal identity over time",
  "How writers explore war, loss, and memory in literature",
  "The complex role of religion and morality in human life",
  "How social inequality impacts different groups around the world",
  "The challenges of love, loyalty, and betrayal inside families",
] as const;

const GI_LOCAL_LOCK_T1 = [
  "The 1920s American Prohibition statute in Chicago",
  "Victorian British debtors' prisons in 1850s London",
  "The 1984 miners' strike in Yorkshire, England",
  "Apartheid pass-book laws in 1960s Johannesburg",
  "Post-1945 railway rebuilding laws in Tokyo",
  "The 1917 bread riots in St Petersburg, Russia",
  "1936 municipal theatre censorship decrees in Granada, Spain",
  "The 1929 Wall Street stock crash in New York",
] as const;

const GI_LOCAL_LOCK_T2 = [
  "How British Edwardian inheritance laws shaped aristocratic marriages in rural Devon",
  "How 1950s McCarthy-era blacklists silenced Hollywood screenwriters in California",
  "How Tokugawa-era merchant guilds regulated family apprenticeships in Kyoto",
  "How French Third Republic school curricula taught patriotism in 1890s Paris",
  "How post-independence partition border checks divided rail towns in 1947 Punjab",
  "How Weimar German hyperinflation destabilised household savings in 1923 Berlin",
] as const;

const GI_LOCAL_LOCK_T3 = [
  "How a widowed Norwegian bank clerk's wife forging a loan signature in winter 1879 destroys her marriage",
  "How a 1930s Spanish matriarch locking five daughters inside an Andalusian farmhouse enforces mourning",
  "How a single municipal tax dispute in 1882 Oslo splits two brothers over public bathhouse pipes",
  "How one nineteenth-century Russian student pawning a silver watch in St Petersburg descends into guilt",
  "How a 1925 Long Island millionaire hosting summer jazz parties fails to win back an old romance",
  "How a specific 1970s Canadian suburban zoning bylaw alters one street's backyard fences",
] as const;

const GI_NO_LOCAL_T1 = [
  "International sovereign-debt restructuring formulas negotiated by multilateral banks",
  "Global maritime exclusive-economic-zone boundary conventions",
  "Macroeconomic exchange-rate pegs between central monetary unions",
  "Geopolitical nuclear deterrence treaties signed at diplomatic summits",
  "Cross-border corporate tariff schedules in global shipping cartels",
  "Multilateral space-orbital satellite allocation protocols",
] as const;

const GI_NO_LOCAL_T2 = [
  "How quarterly trade-balance fluctuations alter sovereign credit ratings across G20 nations",
  "How international diplomatic immunity protocols govern embassy staffing ratios worldwide",
  "How global central-bank interest-rate corridors influence institutional bond yields",
  "How multinational aviation treaties standardise high-altitude airspace sovereignty",
  "How transnational carbon-credit derivatives trade on institutional commodity exchanges",
  "How abstract geopolitical multipolarity reshapes United Nations committee voting blocs",
] as const;

const GI_NO_LOCAL_T3 = [
  "How theoretical shifts in macroeconomic fiscal orthodoxy alter long-term national GDP forecasts",
  "How structural realignments in inter-state alliance treaties recalibrate continental defence budgets",
  "How global reserve-currency hegemony governs sovereign treasury liquidity across decades",
  "How international intellectual-property arbitration panels resolve patent disputes between conglomerates",
  "How supranational telecommunications standards harmonise undersea fibre-optic routing treaties",
  "How abstract theories of utilitarian statecraft debate optimal legislative representation formulas",
] as const;

const GI_STRONG_SUBJECTS = [
  "institutional surveillance",
  "generational language loss",
  "rigid codes of outward respectability",
  "extractive industrial development",
  "state-sponsored censorship",
  "inherited expectations of domestic self-sacrifice",
  "chronic economic precarity",
  "authoritarian schooling discipline",
] as const;

const GI_STRONG_VERBS = [
  "erodes",
  "distorts",
  "fractures",
  "constrains",
  "undermines",
] as const;

const GI_STRONG_IMPACTS = [
  "emotional honesty and intimacy inside ordinary households",
  "private moral conscience in everyday family and neighbourhood choices",
  "ancestral attachment to land and dignity in local working communities",
  "personal autonomy and candid speech inside daily domestic spaces",
  "intergenerational solidarity and belonging within displaced families",
] as const;

const GI_PROMPT_OPTIONS =
  "Diagnose its IB status (enter: **too broad**, **not transnational**, **lacks local impact**, or **strong**):";

const drillGlobalIssueDiagnosis: Drill = {
  id: "6-concepts-global-issues.global-issue-diagnosis",
  topicId: "6-concepts-global-issues",
  title: "Global Issue Flaw Detector (3 IB Properties)",
  level: 2,
  guideRef: "narrowing-global-issues",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const verdict = rng.pick<GiVerdict>(["too broad", "not transnational", "lacks local impact", "strong"]);
    const name = rng.pick(STUDENT_NAMES);
    let candidate = "";
    let reason = "";

    if (verdict === "too broad") {
      candidate =
        tier === 1 ? rng.pick(GI_BROAD_T1) : tier === 2 ? rng.pick(GI_BROAD_T2) : rng.pick(GI_BROAD_T3);
      reason =
        "It lacks a sharp social mechanism and concrete everyday edge, inviting vague generalities across ten minutes.";
    } else if (verdict === "not transnational") {
      candidate =
        tier === 1
          ? rng.pick(GI_LOCAL_LOCK_T1)
          : tier === 2
            ? rng.pick(GI_LOCAL_LOCK_T2)
            : rng.pick(GI_LOCAL_LOCK_T3);
      reason =
        "It locks the issue to a single country, city, historical date, or individual plot — preventing transnational transfer across two works.";
    } else if (verdict === "lacks local impact") {
      candidate =
        tier === 1
          ? rng.pick(GI_NO_LOCAL_T1)
          : tier === 2
            ? rng.pick(GI_NO_LOCAL_T2)
            : rng.pick(GI_NO_LOCAL_T3);
      reason =
        "Although wide-scale and cross-border, it remains detached in abstract institutional/policy jargon without tangible impact in everyday local human life.";
    } else {
      const subj = rng.pick(GI_STRONG_SUBJECTS);
      const verb = rng.pick(GI_STRONG_VERBS);
      const imp = rng.pick(GI_STRONG_IMPACTS);
      candidate = `How ${subj} ${verb} ${imp}`;
      reason =
        "It passes ALL THREE IB Global Issue gates: wide-scale societal significance, transnational reach (zero country/era lock-in), and vivid impact felt in everyday local contexts.";
    }

    const prompt = `${name} drafts this Individual Oral Global Issue: "${candidate}." ${GI_PROMPT_OPTIONS}`;

    const acceptMap: Record<GiVerdict, string[]> = {
      "too broad": ["too broad", "broad", "too vague", "vague"],
      "not transnational": ["not transnational", "transnational", "region locked", "country locked"],
      "lacks local impact": ["lacks local impact", "no local impact", "lacks local", "not local"],
      strong: ["strong", "valid", "passes"],
    };

    const trapFeedback: Record<GiVerdict, string> = {
      "too broad": "Check carefully: is the issue actually vague, or is it narrowed in the wrong way (locked to one country or purely abstract)?",
      "not transnational": "Check for geographic/date/plot lock-in — only choose 'not transnational' when the phrasing is fenced inside one nation, era, or single plot.",
      "lacks local impact": "Check the Kitchen-Table Test — only choose 'lacks local impact' when an issue stays detached in abstract macro-policy without daily human life.",
      strong: "Not quite! Test all 3 gates (wide-scale, transnational, everyday local) AND check whether it is narrowed beyond a vague theme.",
    };

    const allVerdicts: GiVerdict[] = ["too broad", "not transnational", "lacks local impact", "strong"];
    const traps = allVerdicts
      .filter((v) => v !== verdict)
      .map((v) => ({
        spec: { type: "text" as const, accept: acceptMap[v] },
        feedback: trapFeedback[v],
      }));

    return {
      prompt,
      answer: { type: "text", accept: acceptMap[verdict], display: verdict },
      traps,
      hint: "Run the 3 IB gates: (1) sharp wide-scale mechanism (not vague), (2) transnational (no country/date/plot lock), (3) felt in everyday local contexts.",
      solution: [
        `Inspect "${candidate}".`,
        reason,
        `Verdict: **${verdict}**.`,
      ],
    };
  },
};

// ===========================================================================
// DRILL 4: Individual Oral Official Parameters, Pacing & Non-Overlap Math (level 1)
// ===========================================================================
const drillIoOfficialRules: Drill = {
  id: "6-concepts-global-issues.io-official-rules",
  topicId: "6-concepts-global-issues",
  title: "Individual Oral Official Parameters, Pacing & Non-Overlap",
  level: 1,
  guideRef: "pairing-english-translated-works",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const name = rng.pick(STUDENT_NAMES);

    if (tier === 1) {
      const mode = rng.int(1, 5);
      if (mode === 1) {
        const lines = rng.int(42, 64);
        const cut = lines - 40;
        const form = rng.pick(FORMS_SINGLE);
        return {
          prompt: `${name} prints an extract from ${form} that runs to **${lines} lines**. By how many lines must ${name} trim it to meet the official IB Individual Oral ceiling?`,
          answer: { type: "number", value: cut, display: `${cut} lines` },
          traps: [
            { spec: { type: "number", value: 40 }, feedback: "40 lines is the IB ceiling itself — subtract 40 from the draft line count." },
          ],
          hint: "Each clean IO extract has an official maximum of 40 lines.",
          solution: [
            "Official IB Individual Oral extract limit = 40 lines.",
            `Lines to trim = ${lines} − 40 = **${cut} lines**.`,
          ],
        };
      }
      if (mode === 2) {
        const bullets = rng.int(11, 24);
        const cut = bullets - 10;
        return {
          prompt: `${name}'s draft Individual Oral outline currently has **${bullets} bullet points**. How many bullet points must be removed to satisfy the official IB maximum?`,
          answer: { type: "number", value: cut, display: `${cut}` },
          traps: cut !== 10
            ? [{ spec: { type: "number", value: 10 }, feedback: "10 is the maximum allowed bullets — calculate how many excess bullets must be removed." }]
            : [{ spec: { type: "number", value: bullets }, feedback: `${bullets} is the total draft count — subtract 10 to find how many excess bullets must be removed.` }],
          hint: "The official IB Individual Oral outline allows at most 10 bullet points.",
          solution: [
            "Official IB Individual Oral outline ceiling = 10 bullet points.",
            `Excess bullets to cut = ${bullets} − 10 = **${cut}**.`,
          ],
        };
      }
      if (mode === 3) {
        const a = rng.int(6, 10);
        const b = rng.int(6, 10);
        const c = rng.int(6, 10);
        const d = rng.int(6, 10);
        const total = a + b + c + d;
        return {
          prompt: `In a practice Individual Oral (40 marks total), ${name} scores Criterion A = ${a}, Criterion B = ${b}, Criterion C = ${c}, and Criterion D = ${d}. How many marks short of the full 40 marks is ${name}?`,
          answer: { type: "number", value: 40 - total, display: `${40 - total} marks` },
          traps: [
            { spec: { type: "number", value: total }, feedback: `${total} is the total score earned — subtract ${total} from 40 to find marks below maximum.` },
          ],
          hint: "Sum A + B + C + D, then subtract from the IO maximum of 40 marks.",
          solution: [
            `Total earned = ${a} + ${b} + ${c} + ${d} = ${total} / 40.`,
            `Marks below full 40 = 40 − ${total} = **${40 - total} marks**.`,
          ],
        };
      }
      if (mode === 4) {
        const talkSec = rng.pick([540, 555, 570, 585, 600]);
        const totalRec = talkSec + 300;
        const qaMin = 5;
        const diffFrom10 = 600 - talkSec;
        if (rng.bool()) {
          return {
            prompt: `${name} finishes the uninterrupted Individual Oral talk at **${fmtTime(talkSec)}** and then completes the standard **${qaMin}-minute** teacher Q&A. How many total seconds is the recording?`,
            answer: { type: "number", value: totalRec, display: `${totalRec} seconds` },
            traps: [
              { spec: { type: "number", value: talkSec }, feedback: "Remember to add the 5-minute (300-second) teacher Q&A." },
            ],
            hint: "Convert the talk time to seconds and add 5 minutes = 300 seconds.",
            solution: [
              `Talk duration = ${fmtTime(talkSec)} = ${talkSec} seconds; Q&A = 5 min = 300 seconds.`,
              `Total recording = ${talkSec} + 300 = **${totalRec} seconds**.`,
            ],
          };
        }
        return {
          prompt: `${name} ends the uninterrupted Individual Oral talk at **${fmtTime(talkSec)}** out of the 10-minute allowance. How many seconds remain unused before the 10:00 mark?`,
          answer: { type: "number", value: diffFrom10, display: `${diffFrom10} seconds` },
          hint: "10 minutes equals 600 seconds.",
          solution: [
            `10 minutes = 600 seconds; ${fmtTime(talkSec)} = ${talkSec} seconds.`,
            `Unused time = 600 − ${talkSec} = **${diffFrom10} seconds**.`,
          ],
        };
      }
      const isHL = rng.bool();
      const studied = isHL ? rng.int(13, 16) : rng.int(9, 12);
      const locked = isHL ? 3 : 2;
      const rem = studied - locked;
      return {
        prompt: `${name} is an **${isHL ? "HL" : "SL"}** candidate who has studied **${studied} works**. Under the IB non-overlap rule, after committing works to the Individual Oral${isHL ? " (2 works) and the HL Essay (1 work)" : " (2 works)"}, how many distinct studied works remain eligible for Paper 2?`,
        answer: { type: "number", value: rem, display: `${rem} works` },
        traps: [
          { spec: { type: "number", value: studied }, feedback: "IO (and HL Essay) works cannot be reused in Paper 2 under the IB non-overlap rule." },
          {
            spec: { type: "number", value: isHL ? studied - 2 : studied - 3 },
            feedback: isHL
              ? "At HL you must subtract BOTH the 2 IO works AND 1 separate HL Essay work (3 total)."
              : "SL candidates do NOT write an HL Essay — subtract only the 2 Individual Oral works.",
          },
        ],
        hint: isHL ? "Subtract 2 (IO) + 1 (HL Essay) = 3 locked works." : "Subtract 2 (IO) locked works; SL has no HL Essay.",
        solution: [
          isHL ? "HL locked works = 2 (IO) + 1 (HL Essay) = 3." : "SL locked works = 2 (IO).",
          `Remaining eligible Paper 2 works = ${studied} − ${locked} = **${rem} works**.`,
        ],
      };
    }

    if (tier === 2) {
      const mode = rng.int(1, 4);
      if (mode === 1) {
        const intro = rng.pick([30, 45, 60, 75]);
        const synth = rng.pick([30, 45, 60]);
        const w1 = rng.pick([210, 225, 240, 255, 270]);
        const w2 = 600 - intro - synth - w1;
        return {
          prompt: `${name} plans a 10-minute (600 s) Individual Oral with Intro = **${fmtTime(intro)}**, Work 1 (English) = **${fmtTime(w1)}**, and Closing Synthesis = **${fmtTime(synth)}**. How many seconds remain for Work 2 (Translated)?`,
          answer: { type: "number", value: w2, display: `${w2} seconds` },
          traps: w1 !== w2
            ? [{ spec: { type: "number", value: w1 }, feedback: "Don't assume Work 2 equals Work 1 — subtract Intro, Work 1, and Synthesis from 600 seconds." }]
            : [{ spec: { type: "number", value: 600 - w1 }, feedback: "Remember to subtract Intro and Closing Synthesis as well as Work 1 from 600 seconds." }],
          hint: "Convert every block to seconds and subtract from 600.",
          solution: [
            `Used time = ${intro} + ${w1} + ${synth} = ${intro + w1 + synth} seconds.`,
            `Remaining time for Work 2 = 600 − ${intro + w1 + synth} = **${w2} seconds** (${fmtTime(w2)}).`,
          ],
        };
      }
      if (mode === 2) {
        const raw = rng.pick([22, 24, 26, 28, 30, 32, 34, 36, 38, 40]);
        const pct = clean((raw / 40) * 100);
        return {
          prompt: `${name} earns **${raw} out of 40 marks** on the Individual Oral (A10/B10/C10/D10). What is ${name}'s raw IO percentage?`,
          answer: { type: "number", value: pct, display: `${pct}%` },
          hint: "Divide the score by 40 and multiply by 100.",
          solution: [
            `Percentage = (${raw} ÷ 40) × 100 = **${pct}%**.`,
          ],
        };
      }
      if (mode === 3) {
        const lines1 = rng.int(28, 39);
        const lines2 = rng.int(41, 56);
        const excess = lines2 - 40;
        const combinedExcess = lines1 + lines2 - 80;
        return {
          prompt: `${name} brings two extracts to an IO check: Work 1 (English) is **${lines1} lines** and Work 2 (Translated) is **${lines2} lines**. How many lines in total must be cut across BOTH extracts so both satisfy the ≤40-line IB rule?`,
          answer: { type: "number", value: excess, display: `${excess} lines` },
          traps: combinedExcess >= 0 && combinedExcess !== excess
            ? [{ spec: { type: "number", value: combinedExcess }, feedback: "Unused lines below 40 on Work 1 CANNOT be transferred to Work 2 — each extract is capped individually at 40 lines!" }]
            : [{ spec: { type: "number", value: 0 }, feedback: "Even if the combined total is under 80 lines, Work 2 individually exceeds 40 lines and MUST be trimmed!" }],
          hint: "Each extract is capped individually at 40 lines; spare lines on Work 1 cannot be lent to Work 2.",
          solution: [
            `Work 1 (${lines1} lines) is already ≤40 lines (0 lines to cut).`,
            `Work 2 (${lines2} lines) exceeds 40 lines individually → cut ${lines2} − 40 = **${excess} lines**.`,
          ],
        };
      }
      const isHL = rng.bool();
      const totalTrans = isHL ? rng.int(4, 7) : rng.int(3, 6);
      const hleIsTrans = isHL && rng.bool();
      const usedTrans = 1 + (hleIsTrans ? 1 : 0);
      const remTrans = totalTrans - usedTrans;
      return {
        prompt: `${name} (${isHL ? "HL" : "SL"}) has studied **${totalTrans} works in translation**. After completing the mandatory Individual Oral${isHL ? (hleIsTrans ? " AND writing the HL Essay on a translated work" : " AND writing the HL Essay on an original English work") : ""}, how many distinct **translated works** remain eligible for Paper 2?`,
        answer: { type: "number", value: remTrans, display: `${remTrans}` },
        traps: [
          {
            spec: { type: "number", value: totalTrans },
            feedback: "The Individual Oral always locks 1 translated work under the non-overlap rule.",
          },
        ],
        hint: "The IO ALWAYS consumes exactly 1 translated work; check whether an HL Essay also uses a translated work.",
        solution: [
          `Translated works locked = 1 (IO)${hleIsTrans ? " + 1 (HL Essay) = 2" : " = 1"}.`,
          `Remaining translated works eligible for Paper 2 = ${totalTrans} − ${usedTrans} = **${remTrans}**.`,
        ],
      };
    }

    // Tier 3 — weighted IB grade contributions & exact 50/50 rebalancing math
    const mode = rng.int(1, 3);
    if (mode === 1) {
      const isHL = rng.bool();
      const weight = isHL ? 20 : 30;
      const raw = isHL ? rng.pick([24, 26, 28, 30, 32, 34, 36, 38, 40]) : rng.pick([24, 28, 32, 36, 40]);
      const contrib = clean((raw / 40) * weight);
      return {
        prompt: `${name} is an **${isHL ? "HL" : "SL"}** student who scores **${raw}/40** on the Individual Oral. Using the official ${isHL ? "HL" : "SL"} IO weighting, how many weighted percentage points (out of 100) does this IO contribute to ${name}'s final English A: Literature grade?`,
        answer: { type: "number", value: contrib, display: `${contrib}%` },
        traps: [
          {
            spec: { type: "number", value: clean((raw / 40) * (isHL ? 30 : 20)) },
            feedback: isHL
              ? "30% is the SL IO weighting — at HL the IO is worth 20%."
              : "20% is the HL IO weighting — at SL the IO is worth 30%.",
          },
          {
            spec: { type: "number", value: clean((raw / 40) * 100) },
            feedback: "That is the raw IO percentage — multiply by the official weighting (SL 30% or HL 20%).",
          },
        ],
        hint: `Remember official weightings: SL IO = 30%, HL IO = 20%. Compute (${raw} ÷ 40) × ${weight}.`,
        solution: [
          `Official ${isHL ? "HL" : "SL"} Individual Oral weighting = ${weight}%.`,
          `Weighted contribution = (${raw} ÷ 40) × ${weight} = **${contrib}%**.`,
        ],
      };
    }
    if (mode === 2) {
      const shift = rng.pick([30, 45, 60, 75, 90, 105, 120]);
      const target = rng.pick([240, 255, 270]);
      const w1 = target + shift;
      const w2 = target - shift;
      return {
        prompt: `In a rehearsal, ${name} spends **${fmtTime(w1)}** on Work 1 (English) and **${fmtTime(w2)}** on Work 2 (Translated). Keeping total body time fixed, how many seconds must ${name} shift from Work 1 to Work 2 to achieve exact 50/50 parity?`,
        answer: { type: "number", value: shift, display: `${shift} seconds` },
        traps: [
          {
            spec: { type: "number", value: shift * 2 },
            feedback: `${shift * 2} seconds is the full gap between Work 1 and Work 2 — shifting half the gap restores exact 50/50 balance!`,
          },
        ],
        hint: "Find the gap (Work 1 − Work 2) in seconds, then divide by 2.",
        solution: [
          `Work 1 = ${w1} s; Work 2 = ${w2} s; difference = ${w1 - w2} s.`,
          `Shift half the difference = (${w1 - w2}) ÷ 2 = **${shift} seconds** (giving ${fmtTime(target)} each).`,
        ],
      };
    }
    // Mode 3: exact 60/40 extract-to-whole-work split inside a work block
    const workSec = rng.pick([240, 250, 260, 270, 280]);
    const extTarget = clean(workSec * 0.6);
    const wholeTarget = workSec - extTarget;
    const askWhole = rng.bool();
    return {
      prompt: `${name} allocates **${workSec} seconds** to Work 2 (Translated) and targets an exact **60% extract / 40% whole-work** micro-macro split. How many seconds should ${name} devote to the **${askWhole ? "whole-work zoom-out" : "≤40-line extract close-reading"}**?`,
      answer: {
        type: "number",
        value: askWhole ? wholeTarget : extTarget,
        display: `${askWhole ? wholeTarget : extTarget} seconds`,
      },
      traps: [
        {
          spec: { type: "number", value: askWhole ? extTarget : wholeTarget },
          feedback: askWhole
            ? "That is the 60% extract allocation — the question asked for the 40% whole-work zoom-out."
            : "That is the 40% whole-work allocation — the question asked for the 60% extract close-reading.",
        },
      ],
      hint: `Compute ${askWhole ? "40%" : "60%"} of ${workSec} seconds.`,
      solution: [
        `Extract (60%) = 0.6 × ${workSec} = ${extTarget} seconds; Whole work (40%) = 0.4 × ${workSec} = ${wholeTarget} seconds.`,
        `Target allocation = **${askWhole ? wholeTarget : extTarget} seconds**.`,
      ],
    };
  },
};

// ===========================================================================
// DRILL 5: Micro-Extract vs Whole-Work & Work-to-Work Balance Audit (level 2)
// ===========================================================================
type BalanceDiagnosis = "work imbalance" | "extract heavy" | "whole-work heavy" | "balanced";

const BALANCE_LEGEND =
  "Diagnose the Criterion A/C timing profile (enter: **work imbalance**, **extract heavy**, **whole-work heavy**, or **balanced**):";

const drillBalanceAudit: Drill = {
  id: "6-concepts-global-issues.extract-whole-work-balance",
  topicId: "6-concepts-global-issues",
  title: "IO Balance & Extract-to-Whole-Work Audit",
  level: 2,
  guideRef: "pairing-english-translated-works",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const diag = rng.pick<BalanceDiagnosis>(["work imbalance", "extract heavy", "whole-work heavy", "balanced"]);
    const name = rng.pick(STUDENT_NAMES);
    const pair = rng.pick(FORM_PAIRS);

    const intro = rng.pick([30, 45, 60]);
    const synth = rng.pick([30, 45, 60]);
    // Keep body cleanly divisible in 15s chunks
    const body = 600 - intro - synth; // 480..540
    let w1e = 0;
    let w1w = 0;
    let w2e = 0;
    let w2w = 0;
    let reason = "";

    if (diag === "balanced") {
      const half = Math.floor(body / 30) * 15;
      const delta = tier === 1 ? 0 : rng.pick([-15, 0, 15]);
      const w1 = half + delta;
      const w2 = body - w1;
      w1e = Math.round((w1 * rng.pick([0.55, 0.58, 0.6])) / 15) * 15;
      w1w = w1 - w1e;
      w2e = Math.round((w2 * rng.pick([0.55, 0.58, 0.6])) / 15) * 15;
      w2w = w2 - w2e;
      reason = `Work 1 (${fmtTime(w1)}) and Work 2 (${fmtTime(w2)}) stay near 50/50 parity, and both works balance micro extract analysis (~60%) with macro whole-work analysis (~40%).`;
    } else if (diag === "work imbalance") {
      const heavyFirst = rng.bool();
      const skew = tier === 1 ? rng.pick([90, 105, 120]) : tier === 2 ? rng.pick([75, 90, 105]) : rng.pick([60, 75, 90]);
      const half = Math.floor(body / 30) * 15;
      const w1 = heavyFirst ? half + skew : half - skew;
      const w2 = body - w1;
      w1e = Math.round((w1 * 0.58) / 15) * 15;
      w1w = w1 - w1e;
      w2e = Math.round((w2 * 0.58) / 15) * 15;
      w2w = w2 - w2e;
      reason = `Work 1 takes ${fmtTime(w1)} versus Work 2 taking ${fmtTime(w2)} — a severe ${fmtTime(Math.abs(w1 - w2))} skew that immediately caps Criterion C organisation!`;
    } else if (diag === "extract heavy") {
      const half = Math.floor(body / 30) * 15;
      const w1 = half;
      const w2 = body - w1;
      const tinyWhole1 = tier === 1 ? rng.pick([0, 15, 30]) : tier === 2 ? rng.pick([15, 30, 45]) : rng.pick([30, 45]);
      const tinyWhole2 = tier === 1 ? rng.pick([0, 15, 30]) : tier === 2 ? rng.pick([15, 30, 45]) : rng.pick([30, 45]);
      w1w = tinyWhole1;
      w1e = w1 - w1w;
      w2w = tinyWhole2;
      w2e = w2 - w2w;
      reason = `Although Work 1 (${fmtTime(w1)}) and Work 2 (${fmtTime(w2)}) are 50/50 balanced, extracts eat ${fmtTime(w1e)} and ${fmtTime(w2e)} while starving whole-work coverage at ${fmtTime(w1w)} and ${fmtTime(w2w)}.`;
    } else {
      const half = Math.floor(body / 30) * 15;
      const w1 = half;
      const w2 = body - w1;
      const tinyExt1 = tier === 1 ? rng.pick([30, 45]) : tier === 2 ? rng.pick([45, 60]) : rng.pick([60, 75]);
      const tinyExt2 = tier === 1 ? rng.pick([30, 45]) : tier === 2 ? rng.pick([45, 60]) : rng.pick([60, 75]);
      w1e = tinyExt1;
      w1w = w1 - w1e;
      w2e = tinyExt2;
      w2w = w2 - w2e;
      reason = `Although Work 1 (${fmtTime(w1)}) and Work 2 (${fmtTime(w2)}) are evenly split, close-reading of the ≤40-line extracts is starved (${fmtTime(w1e)} and ${fmtTime(w2e)}) while broad whole-work talk dominates (${fmtTime(w1w)} and ${fmtTime(w2w)}).`;
    }

    const prompt = `${name}'s 10:00 IO rehearsal (${pair}): Intro **${fmtTime(intro)}** · W1 Extract **${fmtTime(w1e)}** · W1 Whole **${fmtTime(w1w)}** · W2 Extract **${fmtTime(w2e)}** · W2 Whole **${fmtTime(w2w)}** · Synthesis **${fmtTime(synth)}**. ${BALANCE_LEGEND}`;

    const acceptMap: Record<BalanceDiagnosis, string[]> = {
      "work imbalance": ["work imbalance", "imbalanced works", "imbalance", "unbalanced works"],
      "extract heavy": ["extract heavy", "extract-heavy", "too much extract", "starves whole work"],
      "whole-work heavy": ["whole-work heavy", "whole work heavy", "too much whole work", "starves extract"],
      balanced: ["balanced", "well balanced", "even"],
    };

    const trapFeedback: Record<BalanceDiagnosis, string> = {
      "work imbalance": "Add Work 1 total (Extract + Whole) vs Work 2 total first — only choose 'work imbalance' when one work significantly outweighs the other.",
      "extract heavy": "Check inside each work: 'extract heavy' means extracts consume almost all of each work while starving whole-work analysis.",
      "whole-work heavy": "Check inside each work: 'whole-work heavy' means macro summary overwhelms micro close-reading of the ≤40-line extracts.",
      balanced: "Check BOTH balances (Work 1 vs Work 2 AND Extract vs Whole Work) — one of them fails here!",
    };

    const allDiags: BalanceDiagnosis[] = ["work imbalance", "extract heavy", "whole-work heavy", "balanced"];
    const traps = allDiags
      .filter((d) => d !== diag)
      .map((d) => ({
        spec: { type: "text" as const, accept: acceptMap[d] },
        feedback: trapFeedback[d],
      }));

    return {
      prompt,
      answer: { type: "text", accept: acceptMap[diag], display: diag },
      traps,
      hint: "Step 1: Compare Work 1 total vs Work 2 total (~50/50?). Step 2: Inside each work, check Extract (~2:30) vs Whole Work (~1:45).",
      solution: [
        `Work 1 total = ${fmtTime(w1e + w1w)} (Extract ${fmtTime(w1e)} / Whole ${fmtTime(w1w)}); Work 2 total = ${fmtTime(w2e + w2w)} (Extract ${fmtTime(w2e)} / Whole ${fmtTime(w2w)}).`,
        reason,
        `Diagnosis: **${diag}**.`,
      ],
    };
  },
};

export const drills: Drill[] = [
  drillCentralConcepts,
  drillFieldsOfInquiry,
  drillGlobalIssueDiagnosis,
  drillIoOfficialRules,
  drillBalanceAudit,
];
