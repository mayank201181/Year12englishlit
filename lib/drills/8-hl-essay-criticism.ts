import type { Drill } from "./types.ts";
import { big } from "./helpers.ts";

const AUDIT_CONTEXTS = [
  "a DP2 HL Essay draft",
  "a candidate's HL Essay submission",
  "a 1,400-word HL Essay manuscript",
  "a practice HL Essay moderation script",
  "a Learner Portfolio HL Essay draft",
  "a mock HL Essay revision sample",
] as const;

interface ConceptPrompt {
  concept: string;
  accept: string[];
  inquiry: string;
  why: string;
}

const CONCEPT_BANK: readonly ConceptPrompt[] = [
  {
    concept: "Perspective",
    accept: ["perspective"],
    inquiry: "How do shifting unreliable narrators and nested temporal frames distort reader alignment across the novel?",
    why: "Vantage point, unreliable narration, and focalised alignment sit directly under the IB Concept of Perspective.",
  },
  {
    concept: "Perspective",
    accept: ["perspective"],
    inquiry: "How does moving from omniscient distance to claustrophobic first-person focalisation alter moral sympathy?",
    why: "Tracking changes in focalisation and narrative distance anchors the inquiry to Perspective.",
  },
  {
    concept: "Perspective",
    accept: ["perspective"],
    inquiry: "How does a non-human speaker's austere detachment expose human self-importance across three linked poems?",
    why: "Viewing the human world through an estranged vantage point exemplifies the Concept of Perspective.",
  },
  {
    concept: "Perspective",
    accept: ["perspective"],
    inquiry: "How do competing epistolary accounts prevent the audience from settling on a single authoritative truth?",
    why: "Conflicting narrative viewpoints and interpretive reliability belong squarely to Perspective.",
  },
  {
    concept: "Perspective",
    accept: ["perspective"],
    inquiry: "How does dramatic irony widen the cognitive gap between what the protagonist believes and what the audience sees?",
    why: "Contrasting character blindness with audience awareness probes Perspective.",
  },
  {
    concept: "Communication",
    accept: ["communication"],
    inquiry: "How do interrupted stichomythia, stage silences, and coded subtext destabilise spoken truth across the play?",
    why: "Dialogue breakdowns, silences, and subtext examine how language succeeds or fails — the Concept of Communication.",
  },
  {
    concept: "Communication",
    accept: ["communication"],
    inquiry: "How do unsent letters, euphemisms, and bureaucratic jargon mask emotional violence between family members?",
    why: "Coded registers, euphemism, and failed exchange anchor the inquiry to Communication.",
  },
  {
    concept: "Communication",
    accept: ["communication"],
    inquiry: "How does the tension between oral storytelling cadence and written legal decrees reshape authority in the work?",
    why: "Contrasting oral and written modes of transmission directly explores Communication.",
  },
  {
    concept: "Communication",
    accept: ["communication"],
    inquiry: "How do rhetorical pauses and halting syntax enact the limits of language when articulating grief?",
    why: "Interrogating what speech can and cannot convey lies at the heart of Communication.",
  },
  {
    concept: "Communication",
    accept: ["communication"],
    inquiry: "How does second-person direct address implicate the reader as a reluctant confidant throughout the memoir?",
    why: "The relationship between speaker, medium, and listener embodies Communication.",
  },
  {
    concept: "Transformation",
    accept: ["transformation"],
    inquiry: "How does evolving pastoral imagery chart the protagonist's gradual shift from defiance to complicity?",
    why: "Tracing psychological and stylistic evolution from opening premise to ending embodies Transformation.",
  },
  {
    concept: "Transformation",
    accept: ["transformation"],
    inquiry: "How do shifting metrical rhythms and stanza breaks enact emotional metamorphosis across three elegies?",
    why: "Formal and psychological change over the arc of a work anchors directly to Transformation.",
  },
  {
    concept: "Transformation",
    accept: ["transformation"],
    inquiry: "To what extent does circular structural framing ironise the narrator's claimed moral awakening by the final chapter?",
    why: "Testing whether genuine change occurs or collapses back into habit interrogates Transformation.",
  },
  {
    concept: "Transformation",
    accept: ["transformation"],
    inquiry: "How do lighting transitions and changing domestic props trace the erosion of polite illusion from Act I to Act III?",
    why: "Tracking progressive staging shifts across acts foregrounds Transformation.",
  },
  {
    concept: "Transformation",
    accept: ["transformation"],
    inquiry: "How does the mutation of an ordinary domestic motif into grotesque bodily imagery chart alienation?",
    why: "Evolving symbolic metamorphosis across a text sits centrally within Transformation.",
  },
  {
    concept: "Representation",
    accept: ["representation"],
    inquiry: "How do claustrophobic avian metaphors construct bourgeois marriage as gilded captivity in the play?",
    why: "Examining how figurative craft constructs a social institution anchors to Representation.",
  },
  {
    concept: "Representation",
    accept: ["representation"],
    inquiry: "How do fragmented acoustic motifs and urban pacing render post-war trauma legible without sentimental cliché?",
    why: "Evaluating *how* literary form depicts complex human experience defines Representation.",
  },
  {
    concept: "Representation",
    accept: ["representation"],
    inquiry: "How does stark minimalist diction portray state surveillance as quiet bureaucratic routine rather than spectacle?",
    why: "Choosing minimalist craft to depict political power exemplifies Representation.",
  },
  {
    concept: "Representation",
    accept: ["representation"],
    inquiry: "How do jagged white space and enjambment visually embody silence and historical erasure on the page?",
    why: "Using typography and lineation to give visual form to absence directly probes Representation.",
  },
  {
    concept: "Representation",
    accept: ["representation"],
    inquiry: "How does grotesque satire distort aristocratic etiquette to expose systemic cruelty across the novella?",
    why: "Investigating how satiric distortion depicts class power centres on Representation.",
  },
  {
    concept: "Identity",
    accept: ["identity"],
    inquiry: "How does the split between retrospective and experiencing persona negotiate fractured selfhood in the memoir?",
    why: "Exploring how literary voice constructs and questions selfhood anchors directly to Identity.",
  },
  {
    concept: "Identity",
    accept: ["identity"],
    inquiry: "How do recurring mirror motifs and doppelgänger foils destabilise the protagonist's sense of an authentic self?",
    why: "Doubling, masks, and fractured self-concept lie at the core of Identity.",
  },
  {
    concept: "Identity",
    accept: ["identity"],
    inquiry: "How does unilateral renaming by an authoritative narrator attempt to erase the heroine's personal autonomy?",
    why: "Naming, self-definition, and autonomy are central concerns of Identity.",
  },
  {
    concept: "Identity",
    accept: ["identity"],
    inquiry: "How do shifting pronouns between 'I', 'we', and 'it' dramatise dehumanisation across the short-story cycle?",
    why: "Grammatical erasure of personhood directly explores Identity.",
  },
  {
    concept: "Identity",
    accept: ["identity"],
    inquiry: "How do threshold stage directions expose the fragile line between social role-playing and inner agency?",
    why: "Performativity versus inner selfhood belongs cleanly to Identity.",
  },
  {
    concept: "Culture",
    accept: ["culture"],
    inquiry: "How do untranslated ancestral proverbs and ceremonial rhythms resist imperial assimilation in the novel?",
    why: "Shared heritage, indigenous idioms, and communal norms anchor the inquiry to Culture.",
  },
  {
    concept: "Culture",
    accept: ["culture"],
    inquiry: "How do nostalgic culinary rituals both preserve diasporic belonging and disguise intergenerational tension?",
    why: "Examining communal traditions and diasporic norms centres on Culture.",
  },
  {
    concept: "Culture",
    accept: ["culture"],
    inquiry: "How does bilingual code-switching across four poems dramatise the friction between inherited customs and exile?",
    why: "Linguistic heritage, custom, and cross-border belonging embody Culture.",
  },
  {
    concept: "Culture",
    accept: ["culture"],
    inquiry: "How do domestic hospitality conventions operate as an unspoken code of regional honour and exclusion?",
    why: "Interrogating inherited social codes and collective values engages Culture.",
  },
  {
    concept: "Culture",
    accept: ["culture"],
    inquiry: "How does ironic subversion of folkloric archetypes critique rigid patriarchal traditions in the translated drama?",
    why: "Reworking shared myths and communal traditions probes Culture.",
  },
  {
    concept: "Creativity",
    accept: ["creativity"],
    inquiry: "How do metafictional digressions and unfinished manuscripts interrogate storytelling's ethical limits?",
    why: "Self-reflexive art-making, storytelling, and imagination sit squarely under Creativity.",
  },
  {
    concept: "Creativity",
    accept: ["creativity"],
    inquiry: "How does the poet's deliberate breaking of sonnet conventions dramatise artistic rebellion against inherited form?",
    why: "Formal innovation and tension with aesthetic tradition embody Creativity.",
  },
  {
    concept: "Creativity",
    accept: ["creativity"],
    inquiry: "How do embedded play-within-a-play scenes expose theatre's paradoxical power to manufacture truth through artifice?",
    why: "Examining artistic invention and illusion within the work directly explores Creativity.",
  },
  {
    concept: "Creativity",
    accept: ["creativity"],
    inquiry: "How does the narrator's reliance on poetic fabrication turn memory into an act of imaginative survival?",
    why: "Using imaginative reconstruction to shape meaning anchors to Creativity.",
  },
  {
    concept: "Creativity",
    accept: ["creativity"],
    inquiry: "How do recurring motifs of painting and framing critique the aestheticisation of human suffering?",
    why: "Questioning the ethics of artistic representation and invention centres on Creativity.",
  },
];

interface TitleDiagnosis {
  label: "broad theme" | "yes-no" | "non-literary" | "sharp";
  accept: string[];
  title: string;
  reason: string;
}

const TITLE_DIAGNOSES: readonly TitleDiagnosis[] = [
  { label: "broad theme", accept: ["broad theme", "broad", "vague", "theme"], title: "Love, Loss, and Family in the Novel", reason: "Lists three sweeping abstract nouns with zero formal craft or arguable tension." },
  { label: "broad theme", accept: ["broad theme", "broad", "vague", "theme"], title: "The Role of Solitude Throughout the Poetry Collection", reason: "Names a static topic ('solitude') without pinpointing poetic craft or an interpretive tension." },
  { label: "broad theme", accept: ["broad theme", "broad", "vague", "theme"], title: "Power and Betrayal Across the Three-Act Play", reason: "Static thematic pairing inviting plot summary rather than formal theatrical inquiry." },
  { label: "broad theme", accept: ["broad theme", "broad", "vague", "theme"], title: "Three Ways Symbolism Appears in the Short Stories", reason: "List-style broad framing ('three ways') creates interchangeable paragraphs rather than a developing tension." },
  { label: "broad theme", accept: ["broad theme", "broad", "vague", "theme"], title: "Memory and Childhood in the Literary Memoir", reason: "Pairs two broad nouns with no rhetorical or structural craft focus." },
  { label: "broad theme", accept: ["broad theme", "broad", "vague", "theme"], title: "Nature and Time in the Translated Novel", reason: "Enormous, unfocused abstractions that cannot be argued tightly in 1,200–1,500 words." },
  { label: "broad theme", accept: ["broad theme", "broad", "vague", "theme"], title: "Exploring Guilt and Redemption in the Tragedy", reason: "Vague thematic label omitting dramatic craft and specific conceptual paradox." },
  { label: "broad theme", accept: ["broad theme", "broad", "vague", "theme"], title: "Identity and Belonging Across the Essay Collection", reason: "Stamps an IB Concept as a passive noun rather than framing a craft-led literary tension." },
  { label: "yes-no", accept: ["yes-no", "yes/no", "binary", "closed"], title: "Is the Narrator Truly Unreliable by the Final Chapter?", reason: "A closed yes/no prompt invites a reductive verdict instead of evaluating *how* craft constructs ambiguity." },
  { label: "yes-no", accept: ["yes-no", "yes/no", "binary", "closed"], title: "Does the Playwright Sympathise with the Protagonist in Act III?", reason: "Binary yes/no framing discourages nuanced analysis of theatrical tension and dramatic irony." },
  { label: "yes-no", accept: ["yes-no", "yes/no", "binary", "closed"], title: "Can the Speaker Achieve Genuine Forgiveness by the Closing Stanza?", reason: "Closed yes/no question that stalls evaluation of poetic structure and unresolved ambiguity." },
  { label: "yes-no", accept: ["yes-no", "yes/no", "binary", "closed"], title: "Is the Ending of the Novella Optimistic or Pessimistic?", reason: "Forces a simplistic binary choice rather than probing how form holds both tones in tension." },
  { label: "yes-no", accept: ["yes-no", "yes/no", "binary", "closed"], title: "Does the Memoirist Tell the Complete Objective Truth About Her Youth?", reason: "Binary framing misses how literary non-fiction deliberately negotiates memory and persona." },
  { label: "yes-no", accept: ["yes-no", "yes/no", "binary", "closed"], title: "Are the Domestic Symbols Successful in Making the Play Tragic?", reason: "Closed yes/no framing blocks deeper evaluation of *how* stage props construct meaning." },
  { label: "yes-no", accept: ["yes-no", "yes/no", "binary", "closed"], title: "Is Colonial Rule Portrayed Negatively in the Novel?", reason: "Obvious binary question with zero interpretive tension or stylistic focus." },
  { label: "non-literary", accept: ["non-literary", "non literary", "historical", "sociological", "biographical"], title: "How Did 19th-Century Industrial Capitalism Cause Urban Poverty in the Novel's City?", reason: "Fails the 'Delete the Author' test — it is a history/economics report detached from literary craft." },
  { label: "non-literary", accept: ["non-literary", "non literary", "historical", "sociological", "biographical"], title: "What Psychological Disorders Explain the Author's Troubled Childhood in the Memoir?", reason: "Reduces a literary work to amateur clinical biography rather than analysing persona and rhetoric." },
  { label: "non-literary", accept: ["non-literary", "non literary", "historical", "sociological", "biographical"], title: "How Accurately Does the Play Document 1950s Divorce Legislation?", reason: "Treats a theatrical script as a legal history document instead of evaluating dramatic form." },
  { label: "non-literary", accept: ["non-literary", "non literary", "historical", "sociological", "biographical"], title: "Why Did Post-War Immigration Policies Create Housing Shortages Mentioned in the Poems?", reason: "Pure policy sociology with zero reference to poetic diction, voice, or form." },
  { label: "non-literary", accept: ["non-literary", "non literary", "historical", "sociological", "biographical"], title: "A Clinical Assessment of Repression and Anxiety Symptoms in the Protagonist", reason: "Diagnoses a fictional construct like a real patient rather than analysing language and syntax." },
  { label: "non-literary", accept: ["non-literary", "non literary", "historical", "sociological", "biographical"], title: "How Colonial Tax Systems Operated in the Historical Region of the Translated Novel", reason: "Economic history prompt that could be answered without ever quoting the novel's artistry." },
  { label: "non-literary", accept: ["non-literary", "non literary", "historical", "sociological", "biographical"], title: "Comparing the Novelist's Real-Life Marriages with Events in Chapters 1–5", reason: "Biographical fallacy prioritising life gossip over Criterion B textual analysis." },
  { label: "sharp", accept: ["sharp", "band 5", "strong", "valid"], title: "How Do Threshold Stage Directions and Transactional Diction Expose Marriage as Performative Confinement?", reason: "Band 5 sharp: fuses Concept (Representation), form-specific dramatic craft, and an arguable tension." },
  { label: "sharp", accept: ["sharp", "band 5", "strong", "valid"], title: "How Does Shifting Free Indirect Discourse Represent Nostalgia as Both Refuge and Self-Deception?", reason: "Band 5 sharp: pairs concrete prose craft with an active Concept and dual interpretive tension." },
  { label: "sharp", accept: ["sharp", "band 5", "strong", "valid"], title: "How Do Fractured White Space and Disruptive Enjambment Transform Silence into Lyrical Witness Across Three Poems?", reason: "Band 5 sharp: scoped cohesively, grounded in poetic architecture, and anchored to Transformation." },
  { label: "sharp", accept: ["sharp", "band 5", "strong", "valid"], title: "How Does the Gap Between Retrospective and Experiencing Persona Complicate Cultural Authenticity in the Memoir?", reason: "Band 5 sharp: targets Literary Non-Fiction persona craft, Culture, and productive tension." },
  { label: "sharp", accept: ["sharp", "band 5", "strong", "valid"], title: "How Do Untranslated Proverbs and Shifting Bureaucratic Register Contest Narrative Authority Across the Novel?", reason: "Band 5 sharp: anchors Communication/Culture directly in contrasting linguistic registers." },
  { label: "sharp", accept: ["sharp", "band 5", "strong", "valid"], title: "How Does Concentric Epistolary Framing Undercut the Marginalised Speaker's Momentary Eloquence?", reason: "Band 5 sharp: integrates macro narrative structure with an arguable Perspective paradox." },
  { label: "sharp", accept: ["sharp", "band 5", "strong", "valid"], title: "How Do Clinical Domestic Motifs and Neuter Pronouns Enact Bourgeois Dehumanisation in the Novella?", reason: "Band 5 sharp: links concrete stylistic craft to ideological Representation across the whole work." },
];

interface Tier3InquiryCase {
  flaw: "overlap" | "over-scoped" | "static list" | "non-literary" | "sharp";
  accept: string[];
  scenario: string;
  why: string;
}

const TIER3_INQUIRY_CASES: readonly Tier3InquiryCase[] = [
  { flaw: "overlap", accept: ["overlap", "non-overlap", "reuse"], scenario: "An HL student crafts a sharp inquiry on a translated tragedy they already used in their Individual Oral, promising to pick a brand-new Concept.", why: "Breaches the strict IB non-overlap rule: no work used in the IO or Paper 2 may be reused in the HL Essay even under a new Concept." },
  { flaw: "overlap", accept: ["overlap", "non-overlap", "reuse"], scenario: "An HL candidate writes an eloquent 1,400w HL Essay on an English novel and later compares that exact novel with a play in Paper 2.", why: "Breaches the absolute IB non-overlap rule prohibiting reuse of an HL Essay work inside Paper 2." },
  { flaw: "overlap", accept: ["overlap", "non-overlap", "reuse"], scenario: "A candidate analyses 3 poems from a studied collection in their HL Essay and uses 2 other poems from the SAME collection in their Individual Oral.", why: "The entire collection counts as ONE studied work — splitting poems from the same collection across IO and HL Essay violates non-overlap." },
  { flaw: "overlap", accept: ["overlap", "non-overlap", "reuse"], scenario: "A student compares TWO separate studied novels in their 1,450-word HL Essay to strengthen intertextual breadth.", why: "Violates the single-work rule: the HL Essay must analyse ONE distinct studied work, not a two-work Paper 2 comparison." },
  { flaw: "over-scoped", accept: ["over-scoped", "overscoped", "too broad", "over-broad", "overbroad"], scenario: "A candidate proposes analysing 14 separate poems from a translated poetry volume within 1,400 words to prove whole-book knowledge.", why: "Over-scoped! ~1,100 body words ÷ 14 poems leaves ~78 words per poem — choose 2–4 cohesive poems instead." },
  { flaw: "over-scoped", accept: ["over-scoped", "overscoped", "too broad", "over-broad", "overbroad"], scenario: "A student plans to cover all 11 essays in a literary non-fiction anthology evenly across a 1,380-word HL Essay.", why: "Over-scoped! Skimming 11 essays yields superficial paraphrase; narrow to 2–3 cohesive essays." },
  { flaw: "over-scoped", accept: ["over-scoped", "overscoped", "too broad", "over-broad", "overbroad"], scenario: "A working inquiry asks: 'How do imagery, sound, rhythm, structure, tone, and symbolism construct Identity, Culture, and Power across the collection?'", why: "Over-scoped! Stacking six devices and three concepts guarantees shallow technique-spotting across 1,400 words." },
  { flaw: "over-scoped", accept: ["over-scoped", "overscoped", "too broad", "over-broad", "overbroad"], scenario: "A candidate attempts to trace all 12 short stories in a single-author cycle one paragraph at a time inside 1,420 words.", why: "Over-scoped! Twelve mini-paragraphs prevent micro close-reading; focus deeply on a cohesive 3-story arc." },
  { flaw: "static list", accept: ["static list", "list", "chronological", "repetitive"], scenario: "A candidate titles their essay 'Four Examples of Irony in the Novel' and structures four interchangeable paragraphs without a thesis shift.", why: "Static list structure caps Criterion C because movements repeat one flat claim instead of progressing." },
  { flaw: "static list", accept: ["static list", "list", "chronological", "repetitive"], scenario: "A student outlines Body 1: Act I, Body 2: Act II, Body 3: Act III, repeating 'this also shows deceit' at the close of each section.", why: "Chronological plot-walking and static repetition stall Criterion C in Band 2–3." },
  { flaw: "static list", accept: ["static list", "list", "chronological", "repetitive"], scenario: "An essay plan on three poems gives Poem 1, Poem 2, and Poem 3 three unrelated mini-theses joined only by 'Another poem about grief is...'", why: "Static disconnected listing breaks Criterion C cohesion; bind the cluster with one evolving conceptual thread." },
  { flaw: "static list", accept: ["static list", "list", "chronological", "repetitive"], scenario: "A title reads 'Three Symbols Used by the Novelist' with paragraphs labelled Symbol 1, Symbol 2, and Symbol 3 in any random order.", why: "Interchangeable list architecture lacks progressive conceptual development." },
  { flaw: "non-literary", accept: ["non-literary", "non literary", "historical", "sociological"], scenario: "A draft devotes 500 words to proving that historical wage inequality in 1920s factories matches economic census records cited in the novel.", why: "Non-literary historical report — fails the 'Delete the Author' test and starves Criterion B." },
  { flaw: "non-literary", accept: ["non-literary", "non literary", "historical", "sociological"], scenario: "An essay diagnoses the drama's protagonist using DSM clinical criteria without analysing dialogue, subtext, or staging.", why: "Non-literary clinical diagnosis — characters are linguistic constructs, not living medical patients." },
  { flaw: "non-literary", accept: ["non-literary", "non literary", "historical", "sociological"], scenario: "A proposal examines whether the author's private diaries prove she disliked her real-life father, matching scenes in the memoir.", why: "Biographical / non-literary fallacy replacing rhetorical and stylistic evaluation with personal gossip." },
  { flaw: "non-literary", accept: ["non-literary", "non literary", "historical", "sociological"], scenario: "An essay argues whether modern climate legislation is effective, mentioning a nature poem only as an opening epigraph.", why: "Non-literary policy essay detached from close analysis of the primary work's language and form." },
  { flaw: "sharp", accept: ["sharp", "valid", "band 5", "strong"], scenario: "On ONE non-overlapping translated poetry volume, a student focuses deeply on 3 linked poems asking how austere negation dismantles anthropocentric Perspective.", why: "Band 5 sharp: protects non-overlap, scopes cohesively (3 poems), names craft, and anchors to Perspective." },
  { flaw: "sharp", accept: ["sharp", "valid", "band 5", "strong"], scenario: "On ONE non-overlapping realist play, a student tracks how lighting cues, props, and clipped subtext evolve from Act I illusion to Act III ambiguous silence.", why: "Band 5 sharp: single non-overlapping work, form-specific theatrical craft, progressive macro arc." },
  { flaw: "sharp", accept: ["sharp", "valid", "band 5", "strong"], scenario: "On ONE non-overlapping memoir, a student examines how juxtaposing lyrical childhood anecdote with self-correcting retrospective footnotes negotiates Identity.", why: "Band 5 sharp: authentic Literary Non-Fiction craft, conceptual tension, cohesive scope." },
  { flaw: "sharp", accept: ["sharp", "valid", "band 5", "strong"], scenario: "On ONE non-overlapping modernist novel, a student traces how shifting free indirect discourse and acoustic clock motifs balance affirmation against post-war elegy.", why: "Band 5 sharp: blends micro craft, macro structural cohesion, and productive ambiguity." },
];

interface LensCase {
  lens: "feminist" | "postcolonial" | "Marxist" | "psychoanalytic" | "ecocritical" | "narratological";
  accept: string[];
  t1Question: string;
  t2Craft: string;
  t3JargonFlaw: string;
  rescue: string;
}

const LENS_CASES: readonly LensCase[] = [
  {
    lens: "feminist",
    accept: ["feminist", "feminism", "gender"],
    t1Question: "How do domestic thresholds, interrupted speech, and objectifying gaze contest or reinforce gendered power?",
    t2Craft: "Tracking diminutive pet-names, silenced replies, and claustrophobic parlour blocking that restrict a heroine's autonomy.",
    t3JargonFlaw: "According to patriarchal gender theory, the male gaze oppresses the female protagonist, proving society is sexist.",
    rescue: "Translate into close reading: analyse how focalisation and conversational interruption enact gendered containment.",
  },
  {
    lens: "feminist",
    accept: ["feminist", "feminism", "gender"],
    t1Question: "How does bodily imagery resist conventional feminine passivity while revealing the social cost of defiance?",
    t2Craft: "Analysing how stage choreography (frantic dance vs stillness) and costume changes dramatise performed femininity.",
    t3JargonFlaw: "Judith Butler's gender performativity theory explains why the character wears fancy dresses in Act I.",
    rescue: "Keep Butler optional and dissect how stage directions around dress and posture stage social compliance.",
  },
  {
    lens: "feminist",
    accept: ["feminist", "feminism", "gender"],
    t1Question: "How do competing domestic and public spaces expose the asymmetrical autonomy granted to male and female voices?",
    t2Craft: "Comparing how male characters dominate expansive outdoor metaphors while female speakers remain framed through windows.",
    t3JargonFlaw: "Second-wave feminist theory proves all male characters in the novel represent hegemonic masculinity.",
    rescue: "Avoid cookie-cutter verdicts; evaluate how spatial metaphors both constrain and complicate female agency.",
  },
  {
    lens: "feminist",
    accept: ["feminist", "feminism", "gender"],
    t1Question: "How does reclaiming first-person narration dismantle earlier portrayals of female madness as passive spectacle?",
    t2Craft: "Examining how lyrical self-naming and fractured maternal elegies challenge patriarchal silence across three poems.",
    t3JargonFlaw: "The author uses feminism to show women had no rights in the nineteenth century.",
    rescue: "Authors deploy literary craft, not 'feminism' as a device — track voice, silencing, and gaze directly.",
  },
  {
    lens: "feminist",
    accept: ["feminist", "feminism", "gender"],
    t1Question: "To what extent does the protagonist's closing silence complicate an otherwise triumphant reading of female liberation?",
    t2Craft: "Unpacking how polite epistolary salutations disguise covert resistance within Victorian courtship conventions.",
    t3JargonFlaw: "Patriarchal ideology completely explains every dialogue line without needing to examine ironic subtext.",
    rescue: "Look for textual friction: show where subtext and closing silences resist simplistic ideological slogans.",
  },
  {
    lens: "postcolonial",
    accept: ["postcolonial", "post-colonial", "postcolonialism"],
    t1Question: "How do untranslated indigenous idioms and bilingual code-switching resist imperial linguistic dominance?",
    t2Craft: "Analysing how oral proverbs collide with the District Commissioner's dry bureaucratic prose at the novel's close.",
    t3JargonFlaw: "Edward Said's Orientalism and Homi Bhabha's hybridity prove the colonisers are evil othering oppressors.",
    rescue: "Drop the theorist name-stack; dissect how diction, naming, and ironic register enact epistemic erasure.",
  },
  {
    lens: "postcolonial",
    accept: ["postcolonial", "post-colonial", "postcolonialism"],
    t1Question: "How does unilateral renaming of landscapes and people enact cultural erasure across the narrative?",
    t2Craft: "Tracking cartographic metaphors, anglicised place names, and sensory clashes between tropical heat and cold imperial etiquette.",
    t3JargonFlaw: "Postcolonial theory of subalternity shows that empire caused political inequality in history.",
    rescue: "Anchor directly in textual form: show how shifting focalisation silences or reclaims marginalised voices.",
  },
  {
    lens: "postcolonial",
    accept: ["postcolonial", "post-colonial", "postcolonialism"],
    t1Question: "How does writing back to an earlier European canonical work invert who holds narrative authority?",
    t2Craft: "Comparing lush associative Creole cadence in Part I against clipped metropolitan legalistic prose in Part II.",
    t3JargonFlaw: "Gayatri Spivak asked whether the subaltern can speak, and this book answers no in every chapter.",
    rescue: "Engage nuance: examine how syntactic contrast grants fractured voice even within imperial containment.",
  },
  {
    lens: "postcolonial",
    accept: ["postcolonial", "post-colonial", "postcolonialism"],
    t1Question: "How do mistranslated cultural rituals expose the tragic blind spots of missionary and colonial discourse?",
    t2Craft: "Evaluating how footnotes, loanwords, and fragmented syntax dramatise diasporic unbelonging in a translated memoir.",
    t3JargonFlaw: "Colonial hegemony completely determines the text's meaning regardless of poetic form.",
    rescue: "Pair postcolonial curiosity with close reading of rhythm, idiom, and narrative irony.",
  },
  {
    lens: "postcolonial",
    accept: ["postcolonial", "post-colonial", "postcolonialism"],
    t1Question: "How do contested borderland settings embody hybrid identity caught between ancestral memory and imperial exile?",
    t2Craft: "Tracing how ironic mimicry in formal speeches subtly mocks colonial hierarchy before overt rebellion erupts.",
    t3JargonFlaw: "The poet uses postcolonialism and imperial discourse to highlight historical colonialism.",
    rescue: "Name concrete poetic mechanisms (code-switching, ironic mimicry, spatial imagery) rather than abstract labels.",
  },
  {
    lens: "Marxist",
    accept: ["marxist", "marxism", "materialist"],
    t1Question: "How do recurring financial ledgers, debts, and property metaphors reveal human intimacy as market exchange?",
    t2Craft: "Tracking semantic fields of appraisal, credit, and inheritance alongside sharp upstairs/downstairs spatial staging.",
    t3JargonFlaw: "Althusser's Ideological State Apparatuses interpellate the bourgeoisie into false consciousness and capitalist alienation.",
    rescue: "Replace jargon-dumping with close analysis of how transactional diction and labour motifs commodify agency.",
  },
  {
    lens: "Marxist",
    accept: ["marxist", "marxism", "materialist"],
    t1Question: "How does the collapse of wage-earning utility strip a character of familial empathy and social personhood?",
    t2Craft: "Analysing how bourgeois furniture, commercial debt, and clinical managerial register eclipse filial affection.",
    t3JargonFlaw: "Karl Marx's base-and-superstructure theory proves the protagonist is a proletariat worker exploited by capital.",
    rescue: "Stay text-led: unpack how commercial metaphors and spatial confinement dramatise alienation from labour.",
  },
  {
    lens: "Marxist",
    accept: ["marxist", "marxism", "materialist"],
    t1Question: "How do contrasting class registers and luxury object motifs expose concealed labour behind aristocratic elegance?",
    t2Craft: "Contrasting opulent drawing-room ornamentation with clipped, invisible servants' exits in stage directions.",
    t3JargonFlaw: "Class struggle and commodity fetishism are shown everywhere in the text to critique capitalism.",
    rescue: "Demonstrate *how* specific props, class dialects, and irony render invisible labour unsettling to the audience.",
  },
  {
    lens: "Marxist",
    accept: ["marxist", "marxism", "materialist"],
    t1Question: "How do inherited estates and marriage settlements constrain personal choice through material precarity?",
    t2Craft: "Evaluating how legalistic contract diction infiltrates romantic dialogue across Chapters 2 to 10.",
    t3JargonFlaw: "Antonio Gramsci's cultural hegemony explains why the wealthy family owns a big house.",
    rescue: "Focus on how architectural imagery and transactional verbs expose material power inside domestic intimacy.",
  },
  {
    lens: "Marxist",
    accept: ["marxist", "marxism", "materialist"],
    t1Question: "How does industrial landscape imagery dramatise the human cost of mechanised production across three poems?",
    t2Craft: "Dissecting metallic acoustic plosives and assembly-line rhythmic repetition that reduce bodies to factory gears.",
    t3JargonFlaw: "The novelist uses Marxist ideology to show rich people treat poor workers unfairly.",
    rescue: "Analyse exact rhythmic, lexical, and structural craft rather than reducing the text to a class slogan.",
  },
  {
    lens: "psychoanalytic",
    accept: ["psychoanalytic", "psychoanalysis", "freudian", "psychological"],
    t1Question: "How do uncanny domestic motifs, dreams, and doppelgänger foils surface repressed guilt beneath rational control?",
    t2Craft: "Tracking recursive syntax, sudden self-interrupting dashes, and familiar home spaces turning eerily alien.",
    t3JargonFlaw: "Freud's id, ego, superego, and Oedipus complex prove the hero has clinical trauma disorder.",
    rescue: "Never diagnose a fictional character clinically; analyse how syntactic fracture and doubling enact inner split.",
  },
  {
    lens: "psychoanalytic",
    accept: ["psychoanalytic", "psychoanalysis", "freudian", "psychological"],
    t1Question: "How do obsessive verbal omissions and recurring nightmares dramatise trauma that conscious narration refuses to name?",
    t2Craft: "Evaluating how fragmented memory loops, spectral imagery, and sudden tonal blanks mirror psychic repression.",
    t3JargonFlaw: "Lacan's symbolic order and mirror stage show the narrator's unconscious psyche is broken.",
    rescue: "Translate theory into crisp craft analysis: examine how gaps, slips, and haunting imagery fracture narration.",
  },
  {
    lens: "psychoanalytic",
    accept: ["psychoanalytic", "psychoanalysis", "freudian", "psychological"],
    t1Question: "How does a monstrous double function as a projected mirror of the protagonist's disavowed ambition and dread?",
    t2Craft: "Comparing echoed vocabulary between creator and creature alongside feverish exclamatory syntax.",
    t3JargonFlaw: "Psychoanalytic theory diagnoses the narrator with paranoid schizophrenia based on Chapter 4.",
    rescue: "Treat characters as linguistic constructs; evaluate how parallel diction and pacing create uncanny doubling.",
  },
  {
    lens: "psychoanalytic",
    accept: ["psychoanalytic", "psychoanalysis", "freudian", "psychological"],
    t1Question: "How do defensive rationalisations and euphemisms betray unconscious fear during moments of crisis?",
    t2Craft: "Unpacking clinical understatement paired with sudden visceral metaphors of decay and suffocation.",
    t3JargonFlaw: "Repression and neurosis are used by the playwright to represent Freudian psychology.",
    rescue: "Track exact dialogue slips, silences, and sensory intrusions rather than stacking clinical labels.",
  },
  {
    lens: "psychoanalytic",
    accept: ["psychoanalytic", "psychoanalysis", "freudian", "psychological"],
    t1Question: "How does the eerie return of suppressed childhood imagery destabilise the speaker's adult composure?",
    t2Craft: "Analysing circular stanza refrains and sudden shifts into childlike parataxis during elegiac reflection.",
    t3JargonFlaw: "Using Freud's uncanny and death drive, this essay proves the speaker wants to escape reality.",
    rescue: "Retain at most one crisp concept (*the uncanny*) tied tightly to concrete textual cadence and imagery.",
  },
  {
    lens: "ecocritical",
    accept: ["ecocritical", "ecocriticism", "ecological", "environmental"],
    t1Question: "How does austere poetic negation strip away anthropocentric naming and grant non-human matter independent presence?",
    t2Craft: "Analysing how refusal of pathetic fallacy and tactile mineral imagery challenge human ownership over landscape.",
    t3JargonFlaw: "Ecocriticism shows that climate change is bad and humans must protect the environment today.",
    rescue: "Avoid preachy policy slogans; evaluate *how* poetic syntax and anti-pastoral imagery unsettle human centrality.",
  },
  {
    lens: "ecocritical",
    accept: ["ecocritical", "ecocriticism", "ecological", "environmental"],
    t1Question: "How does subverting traditional pastoral harmony expose the ecological violence hidden beneath rural nostalgia?",
    t2Craft: "Tracking toxic decay motifs encroaching on idyllic garden metaphors across four linked lyrics.",
    t3JargonFlaw: "The writer uses ecocritical theory to prove nature is more powerful than human civilisation.",
    rescue: "Show the textual mechanism: contrast idyllic pastoral diction with intrusive industrial or botanical disruption.",
  },
  {
    lens: "ecocritical",
    accept: ["ecocritical", "ecocriticism", "ecological", "environmental"],
    t1Question: "How does granting syntactic agency to weather, soil, and wildlife destabilise the protagonist's illusion of mastery?",
    t2Craft: "Evaluating active transitive verbs assigned to rivers and storms while human figures shrink into passive clauses.",
    t3JargonFlaw: "Anthropocentric ecocritical praxis problematises the nature-culture binary in the novel.",
    rescue: "Cut inflated jargon; show clearly how active environmental verbs reverse human mastery in the prose.",
  },
  {
    lens: "ecocritical",
    accept: ["ecocritical", "ecocriticism", "ecological", "environmental"],
    t1Question: "How do urban blight and encroaching botanical imagery blur the boundary between built architecture and organic decay?",
    t2Craft: "Tracing recurring sensory imagery of roots cracking concrete and wild birds colonising abandoned rooms.",
    t3JargonFlaw: "Nature imagery in Chapters 1–3 highlights environmental themes for modern readers.",
    rescue: "Evaluate how specific ecological imagery reconfigures human permanence and fragility across the macro arc.",
  },
  {
    lens: "ecocritical",
    accept: ["ecocritical", "ecocriticism", "ecological", "environmental"],
    t1Question: "How does a non-human creature's detached vantage point reveal human mourning as brief and provincial?",
    t2Craft: "Unpacking flat, unsentimental animal perception that refuses to mirror human grief in domestic space.",
    t3JargonFlaw: "Deep ecology theory explains why the cat in the poem does not care about human politics.",
    rescue: "Dissect the poem's spare diction and rhythmic restraint to show how non-human indifference humbles human scale.",
  },
  {
    lens: "narratological",
    accept: ["narratological", "narratology", "formalist", "structuralist"],
    t1Question: "How do concentric framing devices, analepsis, and shifting psychic distance manipulate truth-claims across the novel?",
    t2Craft: "Tracing transitions between omniscient summary, free indirect discourse, and abrupt temporal ellipses.",
    t3JargonFlaw: "Genette's extradiegetic heterodiegetic homodiegetic focalisation schema proves the narrator tells a story.",
    rescue: "Use one clear term (*focalisation* or *free indirect discourse*) and evaluate its psychological effect on the reader.",
  },
  {
    lens: "narratological",
    accept: ["narratological", "narratology", "formalist", "structuralist"],
    t1Question: "How does withholding a pivotal chronology via prolepsis and deliberate ellipsis manufacture complicity and suspense?",
    t2Craft: "Comparing stretched real-time scene pacing during trivial tea talk against a single-sentence summary of catastrophe.",
    t3JargonFlaw: "Narratology proves the novel has a plot structure with a beginning, middle, and flashback.",
    rescue: "Move beyond spotting order: evaluate *why* pacing contrast and strategic omission reshape moral judgement.",
  },
  {
    lens: "narratological",
    accept: ["narratological", "narratology", "formalist", "structuralist"],
    t1Question: "How does free indirect discourse blur ironic narrator commentary with character self-deception?",
    t2Craft: "Dissecting moments where third-person past tense absorbs a character's frantic exclamations and biased adjectives.",
    t3JargonFlaw: "The diegetic narrator uses narrative framing techniques to make the story more interesting.",
    rescue: "Replace 'more interesting' with forensic evaluation of how blended grammar traps readers inside ironic bias.",
  },
  {
    lens: "narratological",
    accept: ["narratological", "narratology", "formalist", "structuralist"],
    t1Question: "How do competing embedded letters and editorial footnotes undermine the authority of the primary storyteller?",
    t2Craft: "Examining outer frame disclaimers that quietly contradict the inner testimony's emotional climax.",
    t3JargonFlaw: "Structuralist narratology classifies the novel as an epistolary frame narrative in three layers.",
    rescue: "Never stop at classification — evaluate how outer editorial control contains or distorts marginalised testimony.",
  },
  {
    lens: "narratological",
    accept: ["narratological", "narratology", "formalist", "structuralist"],
    t1Question: "How does shifting from retrospective memoir distance to immediate present tense fracture linear closure?",
    t2Craft: "Tracing tense shifts, metaleptic direct address, and unresolved chapter endings across the whole work.",
    t3JargonFlaw: "Temporal anachrony and narrative frequency appear throughout the book to emphasise time.",
    rescue: "Link specific tense shifts directly to reader disorientation and the work's conceptual tension.",
  },
];

interface RubricCase {
  crit: "A" | "B" | "C" | "D";
  accept: string[];
  t1ExaminerNote: string;
  t2StudentFlaw: string;
  t3Bottleneck: string;
  fix: string;
}

const RUBRIC_CASES: readonly RubricCase[] = [
  {
    crit: "A",
    accept: ["a", "criterion a", "crit a"],
    t1ExaminerNote: "Shows solid literal grasp of events, yet slips repeatedly into plot summary and overlooks the ambiguous closing irony.",
    t2StudentFlaw: "Spends 220 words retelling Chapter 1–4 plot events and ignores how the ending reverses the protagonist's opening stance.",
    t3Bottleneck: "Detailed device analysis and elegant prose, yet literal conclusions overlook subtext and whole-work implications.",
    fix: "Replace plot summary with persuasive interpretation of implications, irony, and whole-work trajectory (Criterion A).",
  },
  {
    crit: "A",
    accept: ["a", "criterion a", "crit a"],
    t1ExaminerNote: "References are relevant to Act I, but understanding of the play as a whole remains thin and misses counter-interpretations.",
    t2StudentFlaw: "Asserts simplistically that the antagonist is 'purely evil from page one', ignoring sympathetic nuances in Part II.",
    t3Bottleneck: "Tight structure and fluent language, yet misses the central ambiguity complicating the work's final resolution.",
    fix: "Engage counter-readings and demonstrate perceptive understanding across the entire work (Criterion A).",
  },
  {
    crit: "A",
    accept: ["a", "criterion a", "crit a"],
    t1ExaminerNote: "Accurate factual knowledge of three poems, though conclusions stay predictable and literal rather than perceptive.",
    t2StudentFlaw: "Paraphrases what the speaker literally describes in each stanza without drawing nuanced conceptual conclusions.",
    t3Bottleneck: "Cohesive essay with sharp stylistic labels, yet relies on biographical speculation rather than persuasive textual insight.",
    fix: "Push past literal paraphrase into subtle, well-substantiated interpretive conclusions (Criterion A).",
  },
  {
    crit: "A",
    accept: ["a", "criterion a", "crit a"],
    t1ExaminerNote: "Demonstrates secure comprehension of the memoir's surface narrative, yet misses the ironic gap between older and younger self.",
    t2StudentFlaw: "Takes an unreliable narrator's self-justifying excuses completely at face value throughout the essay.",
    t3Bottleneck: "Well-organised 1,420w script with strong register, yet misreads a key dramatic turning point and ignores textual tension.",
    fix: "Interrogate surface statements, recognise irony/unreliability, and ground insights in whole-work nuance (Criterion A).",
  },
  {
    crit: "A",
    accept: ["a", "criterion a", "crit a"],
    t1ExaminerNote: "Basic thematic links are valid, but interpretations remain undeveloped and rely heavily on recounting storyline details.",
    t2StudentFlaw: "Dedicates half of Movement 2 to explaining who each minor character is and what happened before the climax.",
    t3Bottleneck: "Crisp prose and tidy movements, yet conclusions state only obvious surface morals rather than subtle implications.",
    fix: "Cut storyline recounting and probe deeper conceptual implications across the full work (Criterion A).",
  },
  {
    crit: "A",
    accept: ["a", "criterion a", "crit a"],
    t1ExaminerNote: "Sound literal familiarity with the novella, though textual citations serve merely to verify plot facts rather than interpret meaning.",
    t2StudentFlaw: "Quotes dialogue only to confirm that an argument happened instead of uncovering unspoken psychological tension.",
    t3Bottleneck: "Strong linguistic polish and disciplined 1,410w layout, yet treats a layered tragedy as a simplistic morality fable.",
    fix: "Use evidence to build insightful, nuanced interpretation rather than plot verification (Criterion A).",
  },
  {
    crit: "B",
    accept: ["b", "criterion b", "crit b"],
    t1ExaminerNote: "Accurately identifies metaphor, sibilance, and enjambment, yet stops at noting they 'create mood' without evaluating how.",
    t2StudentFlaw: "Lists five poetic techniques in a single paragraph ('uses alliteration, caesura, and simile') with generic 'adds emphasis' commentary.",
    t3Bottleneck: "Perceptive conceptual argument and cohesive flow, yet treats the play like flat prose while ignoring staging, lighting, and subtext.",
    fix: "Replace technique-spotting with evaluative analysis linking specific authorial choices → mechanism → effect (Criterion B).",
  },
  {
    crit: "B",
    accept: ["b", "criterion b", "crit b"],
    t1ExaminerNote: "Comments thoughtfully on themes, yet analyses very few concrete authorial choices in diction, syntax, or form.",
    t2StudentFlaw: "Drops three 50-word block quotes and moves on without unpacking a single verb, metaphor, or syntactic break.",
    t3Bottleneck: "Insightful whole-work reading and crisp 1,430w architecture, yet commentary stays thematic rather than evaluating literary craft.",
    fix: "Embed short micro-quotations and evaluate explicitly *how* formal choices construct complex meaning (Criterion B).",
  },
  {
    crit: "B",
    accept: ["b", "criterion b", "crit b"],
    t1ExaminerNote: "Spots free indirect discourse and recurring motifs accurately, yet analysis stays largely descriptive rather than evaluative.",
    t2StudentFlaw: "Writes 'the playwright uses stage directions to show tension' without examining proxemics, silence, or audience complicity.",
    t3Bottleneck: "Persuasive thesis and sleek register, yet relies on historical sociology instead of analysing authorial stylistic mechanisms.",
    fix: "Evaluate *why* and *how effectively* form-specific choices manipulate reader or audience response (Criterion B).",
  },
  {
    crit: "B",
    accept: ["b", "criterion b", "crit b"],
    t1ExaminerNote: "Identifies rhetorical devices in the essays accurately, yet rarely evaluates how persona and pacing shape reader trust.",
    t2StudentFlaw: "Name-drops three literary theorists in place of dissecting the novelist's concrete figurative language and narrative distance.",
    t3Bottleneck: "Nuanced interpretation and strong 1,400w organisation, yet neglects acoustic rhythm, lineation, and volta in the selected poems.",
    fix: "Keep primary craft evaluation central — analyse form-specific choices directly rather than summarising theory (Criterion B).",
  },
  {
    crit: "B",
    accept: ["b", "criterion b", "crit b"],
    t1ExaminerNote: "Features are named correctly, yet explanations remain repetitive ('this emphasises alienation') rather than probing stylistic subtlety.",
    t2StudentFlaw: "Notes that a poem 'uses dark imagery to create a sad atmosphere' without unpacking connotations or tonal irony.",
    t3Bottleneck: "Coherent progression and accurate vocabulary, yet evaluates character motivations as real people instead of authorial craft.",
    fix: "Treat characters and images as deliberate artistic constructions and evaluate their precise effects (Criterion B).",
  },
  {
    crit: "B",
    accept: ["b", "criterion b", "crit b"],
    t1ExaminerNote: "Good awareness of ideas, yet misses how structural juxtaposition and ironic pacing produce the novel's most unsettling effects.",
    t2StudentFlaw: "Discusses gender roles purely as plot events without analysing focalisation, dialogue interruption, or spatial imagery.",
    t3Bottleneck: "Original conceptual lens and polished prose, yet analysis of stylistic choices remains patchy and descriptive.",
    fix: "Drive every paragraph through the craft chain: micro-evidence → mechanism → evaluated reader effect (Criterion B).",
  },
  {
    crit: "C",
    accept: ["c", "criterion c", "crit c"],
    t1ExaminerNote: "Walks chronologically chapter by chapter, repeating the thesis at the end of every paragraph without progressive development.",
    t2StudentFlaw: "Submits 1,665 counted words so the examiner stops reading at 1,500w, amputating the entire concluding synthesis.",
    t3Bottleneck: "Insightful close reading and luminous prose, yet body paragraphs feel like interchangeable examples with abrupt transitions.",
    fix: "Re-architect into 3–4 progressive conceptual movements staying strictly inside 1,350–1,480 words (Criterion C).",
  },
  {
    crit: "C",
    accept: ["c", "criterion c", "crit c"],
    t1ExaminerNote: "Strong individual insights, yet paragraphs jump abruptly between four poems without a cohesive developing line of inquiry.",
    t2StudentFlaw: "Spends 340 words on a sweeping biographical intro and ends with a rushed 45-word conclusion introducing a brand-new critic.",
    t3Bottleneck: "Sharp micro-craft and nuanced interpretation, yet drifts off the stated line of inquiry in Movement 3 into an unrelated theme.",
    fix: "Tighten conceptual focus, cut detours, and ensure every topic sentence advances the central inquiry (Criterion C).",
  },
  {
    crit: "C",
    accept: ["c", "criterion c", "crit c"],
    t1ExaminerNote: "Generally readable structure, yet the essay runs short at 1,040 words and fails to sustain a fully developed line of argument.",
    t2StudentFlaw: "Organises a drama essay into 'Act I', 'Act II', and 'Act III' summaries linked mechanically by 'Furthermore' and 'Next'.",
    t3Bottleneck: "Perceptive analysis and spotless register, yet an unfocused 'Three Ways Symbolism Appears' structure blocks progression.",
    fix: "Replace mechanical plot sequence with progressive conceptual movements that build toward synthesis (Criterion C).",
  },
  {
    crit: "C",
    accept: ["c", "criterion c", "crit c"],
    t1ExaminerNote: "Line of inquiry begins clearly but loses cohesion mid-essay when an unlinked historical tangent disrupts paragraph flow.",
    t2StudentFlaw: "Repeats the introductory thesis word for word in the conclusion instead of synthesising how the argument evolved.",
    t3Bottleneck: "Persuasive craft evaluation and vivid phrasing, yet exceeds 1,500 words by 95 words, leaving final closure unread.",
    fix: "Run Pass 1 (Architecture Audit) and Pass 3 (Word Wall) so every movement progresses cleanly under 1,480w (Criterion C).",
  },
  {
    crit: "C",
    accept: ["c", "criterion c", "crit c"],
    t1ExaminerNote: "Paragraphs contain strong moments of analysis, yet lack clear conceptual topic sentences guiding the reader's progression.",
    t2StudentFlaw: "Tacks a fourth poem onto the final page via 'Also, another poem that shows this is...' with zero conceptual bridge.",
    t3Bottleneck: "Rich close reading and articulate prose, yet severe imbalance devotes 65% of words to Chapter 1 alone.",
    fix: "Balance 3–4 progressive body movements evenly across the whole work with purposeful transitions (Criterion C).",
  },
  {
    crit: "C",
    accept: ["c", "criterion c", "crit c"],
    t1ExaminerNote: "Focus remains loosely tied to the work, though digressions into author biography weaken unity and structural momentum.",
    t2StudentFlaw: "Includes a standalone 180-word plot summary paragraph before the real argument finally starts on page two.",
    t3Bottleneck: "Nuanced ideas and strong literary terminology, yet weak signposting leaves the connection between movements blurred.",
    fix: "Eliminate standalone summary/biography blocks and sharpen conceptual topic sentences (Criterion C).",
  },
  {
    crit: "D",
    accept: ["d", "criterion d", "crit d"],
    t1ExaminerNote: "Comprehensible throughout, yet repetitive generic verbs ('shows', 'uses', 'highlights') and clunky syntax limit precision.",
    t2StudentFlaw: "Drops standalone quotations awkwardly between sentences and uses chatty fillers ('basically', 'really super trapped').",
    t3Bottleneck: "Perceptive whole-work insight, sharp craft evaluation, and crisp 1,420w structure, yet comma splices and informal tone recur.",
    fix: "Upgrade weak verbs, weave quotes syntactically, purge informal fillers, and polish sentence control (Criterion D).",
  },
  {
    crit: "D",
    accept: ["d", "criterion d", "crit d"],
    t1ExaminerNote: "Overly dense, pretentious pseudo-jargon ('paradigmatically actualises ontological signifiers') obscures otherwise sound literary ideas.",
    t2StudentFlaw: "Mixes conversational contractions, imprecise terminology ('flowing words'), and inconsistent citation punctuation across pages.",
    t3Bottleneck: "Insightful argument and progressive architecture, yet wordy padding ('in order to effectively show the fact that') dulls clarity.",
    fix: "Prioritise crisp, precise academic prose and natural literary terminology over bloated jargon or padding (Criterion D).",
  },
  {
    crit: "D",
    accept: ["d", "criterion d", "crit d"],
    t1ExaminerNote: "Generally clear expression, though grammatical slips around embedded quotations and inconsistent verb tenses impede fluency.",
    t2StudentFlaw: "Switches erratically between past tense and literary present tense while misusing terms like 'metonymy' and 'caesura'.",
    t3Bottleneck: "Strong conceptual progression and evaluation, yet monotonous sentence openings ('The author...', 'The author...') flatten voice.",
    fix: "Maintain consistent literary present tense, verify precise craft terminology, and vary syntactic cadence (Criterion D).",
  },
  {
    crit: "D",
    accept: ["d", "criterion d", "crit d"],
    t1ExaminerNote: "Vocabulary is functional but vague ('good word choice', 'strong imagery'), falling short of Band 5 academic exactness.",
    t2StudentFlaw: "Over-packs sentences with redundant adverbs ('extremely powerfully', 'deeply effectively') and sloppy MLA punctuation.",
    t3Bottleneck: "Persuasive thesis, strong micro–macro links, and clean 1,400w flow, yet ungrammatical quote splicing breaks fluency.",
    fix: "Embed brief phrases cleanly into grammatical sentences and cut redundant modifiers during Pass 2–3 (Criterion D).",
  },
  {
    crit: "D",
    accept: ["d", "criterion d", "crit d"],
    t1ExaminerNote: "Clear enough to follow, yet informal colloquialisms ('gets mad', 'a ton of symbols') undercut formal academic register.",
    t2StudentFlaw: "Writes meta-signposting like 'In this paragraph I am going to prove' and 'This quote shows' throughout the draft.",
    t3Bottleneck: "Original interpretation and disciplined structure, yet frequent spelling slips and run-on sentences interrupt polish.",
    fix: "Eliminate conversational colloquialisms and meta-signposting, reading aloud during Pass 3 (Criterion D).",
  },
  {
    crit: "D",
    accept: ["d", "criterion d", "crit d"],
    t1ExaminerNote: "Sound command of basic grammar, though stiff repetitive phrasing and unintegrated secondary quotes restrict sophistication.",
    t2StudentFlaw: "Relies on clumsy lead-ins ('On page 42 the author writes the quote...') instead of seamless analytical syntax.",
    t3Bottleneck: "Astute close reading and balanced arc, yet convoluted 65-word sentences obscure clear critical voice.",
    fix: "Tighten over-long sentences, vary clause rhythm, and weave quotations smoothly into your prose (Criterion D).",
  },
];

interface WordCountItem {
  status: "included" | "excluded";
  item: string;
  why: string;
}

const WORD_COUNT_ITEMS: readonly WordCountItem[] = [
  { status: "included", item: "a 6-word primary quotation embedded inside Movement 1", why: "All primary quotations embedded in your prose ARE included in the 1,200–1,500 word count." },
  { status: "included", item: "a 45-word primary block quotation pasted into Movement 2", why: "Block quotations from the primary work ARE included — which is why concise 2–8 word embedded phrases save huge space." },
  { status: "included", item: "a 14-word quotation from an optional secondary literary critic", why: "All quoted prose inside your body paragraphs (both primary and secondary) IS included in the counted total." },
  { status: "included", item: "your conceptual introduction paragraph and thesis statement", why: "The introduction forms part of the essay body and IS included in the word count." },
  { status: "included", item: "your reflective synthesis conclusion paragraph", why: "The conclusion IS included — and goes completely unread if it spills past word 1,500." },
  { status: "included", item: "a counter-interpretation paragraph analysing Act III ambiguity", why: "Every analytical body paragraph IS included in the 1,200–1,500 word range." },
  { status: "included", item: "quoted stage directions woven into a drama paragraph", why: "Quoted stage directions from the primary play count as primary quotations and ARE included." },
  { status: "included", item: "two consecutive lines of poetry quoted inline with a forward slash", why: "Inline quoted verse counts towards the 1,200–1,500 word limit." },
  { status: "included", item: "a concise paraphrase of an optional critical article inside Movement 3", why: "All analytical prose written inside the body paragraphs IS included in the word count." },
  { status: "included", item: "contextual sentences woven directly into your introduction", why: "All introductory prose counts towards the official 1,200–1,500 word total." },
  { status: "included", item: "a short translated idiom quoted in English inside your analysis", why: "Any quoted phrase from the primary work (original or translated) IS included." },
  { status: "included", item: "subheadings or transitional sentences inside body movements (if used)", why: "Prose transitions and body text count — keep structure fluid via topic sentences rather than bloated headings." },
  { status: "excluded", item: "the HL Essay's formal title at the top of page one", why: "The essay title is officially EXCLUDED from the 1,200–1,500 word count." },
  { status: "excluded", item: "the complete Works Cited / Bibliography list at the end", why: "Works Cited / Bibliography entries are EXCLUDED from the official word count." },
  { status: "excluded", item: "an MLA in-text parenthetical page citation like (Shelley 114)", why: "In-text parenthetical citations are EXCLUDED from the 1,200–1,500 word count." },
  { status: "excluded", item: "an MLA drama parenthetical reference like (3.2.45–48)", why: "In-text act/scene/line parenthetical citations are EXCLUDED from the counted word total." },
  { status: "excluded", item: "an MLA poetry line citation like (lines 14–16)", why: "Parenthetical line-number references are EXCLUDED from the official word count." },
  { status: "excluded", item: "a bibliographic translator credit inside the Works Cited list", why: "Everything in the Works Cited page (including edition and translator details) is EXCLUDED." },
  { status: "excluded", item: "a purely bibliographic referencing footnote citing a secondary critic's journal edition", why: "Footnotes used strictly for referencing (not hidden analytical paragraphs) are EXCLUDED." },
  { status: "excluded", item: "a parenthetical surname citation for an optional secondary critic like (Mercer 42)", why: "All in-text parenthetical referencing apparatus is EXCLUDED from the counted total." },
  { status: "excluded", item: "the publisher, publication year, and ISBN/edition details in the bibliography", why: "Bibliographic publication details in Works Cited are EXCLUDED from the word count." },
  { status: "excluded", item: "a 16-word sharpened Line-of-Inquiry heading serving as the essay title", why: "The formal essay title is EXCLUDED from the 1,200–1,500 word limit." },
  { status: "excluded", item: "an MLA shortened title parenthetical citation like ('View' line 4)", why: "In-text parenthetical citations are EXCLUDED from the counted body words." },
  { status: "excluded", item: "a clean Works Cited entry for a translated poetry collection", why: "All Works Cited entries are EXCLUDED from the 1,200–1,500 word range." },
];

interface CitationIntegrityCase {
  label: "valid" | "dropped quote" | "patchwriting" | "citation error";
  accept: string[];
  snippet: string;
  why: string;
}

const CITATION_CASES: readonly CitationIntegrityCase[] = [
  {
    label: "valid",
    accept: ["valid", "correct"],
    snippet: "By framing the doorway as \"narrow iron\" (42), the novelist recasts domestic welcome as quiet surveillance.",
    why: "Short embedded micro-quote, seamless grammar, accurate MLA parenthetical placed before the comma.",
  },
  {
    label: "valid",
    accept: ["valid", "correct"],
    snippet: "The speaker insists that \"winter locks the river / while glass remembers rain\" (lines 12–13).",
    why: "Correct spaced forward slash (` / `) for adjacent poetry lines, line numbers cited, and full stop after parenthesis.",
  },
  {
    label: "valid",
    accept: ["valid", "correct"],
    snippet: "Even as dialogue offers polite truce, the dimming stage lamp leaves the threshold in shadow (3.4.118–124).",
    why: "Accurate MLA drama act.scene.line citation placed cleanly before the final full stop.",
  },
  {
    label: "valid",
    accept: ["valid", "correct"],
    snippet: "Works Cited credits the original novelist, exact English edition, publisher, year, and 'Translated by [Translator Name]'.",
    why: "Honours translated-work citation ethics by explicitly naming both the translator and the exact edition analysed.",
  },
  {
    label: "valid",
    accept: ["valid", "correct"],
    snippet: "While Mercer argues the ending achieves \"domestic equilibrium\" (42), the closing silence complicates that harmony.",
    why: "Concise secondary citation cleanly attributed in MLA style and immediately interrogated with primary craft.",
  },
  {
    label: "valid",
    accept: ["valid", "correct"],
    snippet: "Through stark negation (\"neither grain nor sand\"), the poem strips human language of possessive authority (line 2).",
    why: "Brief micro-quote woven grammatically into an evaluative clause with clean MLA line citation.",
  },
  {
    label: "valid",
    accept: ["valid", "correct"],
    snippet: "The narrator's abrupt admission that \"no voice inside\" will summon him converts glass into exile (88).",
    why: "Embedded 3-word quotation analysed for metaphorical transformation with clean parenthetical placement.",
  },
  {
    label: "dropped quote",
    accept: ["dropped quote", "dropped", "dropped quotation", "unintegrated"],
    snippet: "The protagonist feels trapped by her family. \"The parlour curtains hung heavy over the brass lock.\" This shows confinement.",
    why: "The quotation sits as an isolated standalone sentence with no grammatical integration into analytical syntax.",
  },
  {
    label: "dropped quote",
    accept: ["dropped quote", "dropped", "dropped quotation", "unintegrated"],
    snippet: "Alienation grows stronger in Part II. \"He crawled beneath the sofa and waited for silence.\" This quote proves he is lonely.",
    why: "Dropped standalone quote followed by clunky meta-signposting ('This quote proves') instead of craft evaluation.",
  },
  {
    label: "dropped quote",
    accept: ["dropped quote", "dropped", "dropped quotation", "unintegrated"],
    snippet: "Nature seems indifferent to human pride. \"We call it a grain of sand, / but it calls itself neither grain nor sand.\" Clearly the poet uses imagery.",
    why: "Standalone quotation dropped between two sentences without syntactic weaving or forensic analysis.",
  },
  {
    label: "dropped quote",
    accept: ["dropped quote", "dropped", "dropped quotation", "unintegrated"],
    snippet: "The play highlights tension between husband and wife. \"Put down that lamp and listen to me!\" This shows conflict in Act III.",
    why: "Unintegrated standalone dialogue line lacking grammatical framing and dramatic craft evaluation.",
  },
  {
    label: "dropped quote",
    accept: ["dropped quote", "dropped", "dropped quotation", "unintegrated"],
    snippet: "Memory is unreliable throughout the memoir. \"My mother's blue coat may actually have been grey.\" The writer doubts her past.",
    why: "Dropped quotation tossed onto the page rather than weaving key words ('may actually have been grey') into analysis.",
  },
  {
    label: "dropped quote",
    accept: ["dropped quote", "dropped", "dropped quotation", "unintegrated"],
    snippet: "Colonial power erases local identity. \"He had already chosen the title of the book.\" This demonstrates arrogance.",
    why: "Standalone sentence quotation dropped without embedding or unpacking the ironic bureaucratic diction.",
  },
  {
    label: "dropped quote",
    accept: ["dropped quote", "dropped", "dropped quotation", "unintegrated"],
    snippet: "The speaker longs for refuge. \"Leave the porch light burning till frost melts.\" This proves she misses home.",
    why: "Dropped quote + weak verb ('proves') rather than seamlessly integrating concise quoted words.",
  },
  {
    label: "patchwriting",
    accept: ["patchwriting", "plagiarism", "mosaic plagiarism"],
    snippet: "A student copies a journal critic's 3-sentence argument on dramatic irony, swaps five nouns for synonyms, and omits any citation.",
    why: "Borrowing a source's analytical skeleton and ideas with superficial synonym swaps and no attribution is patchwriting (plagiarism).",
  },
  {
    label: "patchwriting",
    accept: ["patchwriting", "plagiarism", "mosaic plagiarism"],
    snippet: "A candidate rephrases a literary study guide's close reading of a sonnet's volta word-for-word with minor verb changes and no Works Cited entry.",
    why: "Unattributed synonym-swapping of another writer's interpretation breaches IB Academic Integrity as patchwriting.",
  },
  {
    label: "patchwriting",
    accept: ["patchwriting", "plagiarism", "mosaic plagiarism"],
    snippet: "A draft adapts a university blog's exact 4-step structure and phrases on postcolonial code-switching, altering adjectives while crediting nobody.",
    why: "Copying another source's analytical sequence and phrasing without attribution is patchwriting / plagiarism.",
  },
  {
    label: "patchwriting",
    accept: ["patchwriting", "plagiarism", "mosaic plagiarism"],
    snippet: "A student paraphrases a published critic's original thesis about domestic props in Act II, changes two clauses, and presents the insight as purely their own.",
    why: "Paraphrased scholarly arguments STILL require in-text and Works Cited attribution — omitting credit is patchwriting/plagiarism.",
  },
  {
    label: "patchwriting",
    accept: ["patchwriting", "plagiarism", "mosaic plagiarism"],
    snippet: "A candidate stitches half-sentences from two online essays on narrative framing into one paragraph, swapping transitional words with zero citations.",
    why: "Mosaic stitching of uncredited source syntax and arguments constitutes patchwriting under IB Academic Integrity.",
  },
  {
    label: "patchwriting",
    accept: ["patchwriting", "plagiarism", "mosaic plagiarism"],
    snippet: "A draft lifts a translator's introduction commentary on rhythmic cadence, swaps 'cadence' for 'rhythm', and leaves out any reference to the introduction.",
    why: "Even a book's own critical preface/introduction is a secondary source — borrowing its ideas uncredited is patchwriting.",
  },
  {
    label: "patchwriting",
    accept: ["patchwriting", "plagiarism", "mosaic plagiarism"],
    snippet: "A student feeds an article summary into a paraphrasing tool, pastes the slightly reworded claim into Movement 2, and omits the critic.",
    why: "Tool-assisted rewording of uncredited ideas violates IB Academic Integrity as patchwriting / plagiarism.",
  },
  {
    label: "citation error",
    accept: ["citation error", "citation", "mla error", "formatting error"],
    snippet: "The speaker warns that \"winter locks the river — while glass remembers rain.\" (page 44)",
    why: "Three MLA poetry errors: uses a dash instead of ` / `, cites a page number instead of numbered lines, and puts the full stop before the parenthesis.",
  },
  {
    label: "citation error",
    accept: ["citation error", "citation", "mla error", "formatting error"],
    snippet: "A student analyses a translated poetry volume in MLA style yet omits the translator's name completely from the Works Cited entry.",
    why: "For any work in translation, MLA requires explicitly naming the translator and exact edition analysed.",
  },
  {
    label: "citation error",
    accept: ["citation error", "citation", "mla error", "formatting error"],
    snippet: "The essay uses MLA parenthetical `(Author 42)` in Movements 1–2, switches to APA `(Author, 1998, p. 42)` in Movement 3, and omits Works Cited.",
    why: "Mixing incompatible referencing systems mid-essay and omitting Works Cited violates formal citation hygiene.",
  },
  {
    label: "citation error",
    accept: ["citation error", "citation", "mla error", "formatting error"],
    snippet: "The narrator reflects on \"leaden circles dissolving in the air.\" (Woolf, p. 4).",
    why: "MLA omits commas and `p.` inside parenthetical citations and places the single full stop *after* the parenthesis: `(Woolf 4).`",
  },
  {
    label: "citation error",
    accept: ["citation error", "citation", "mla error", "formatting error"],
    snippet: "An inline quote spanning two consecutive lines of verse uses a double slash ` // ` (which denotes a stanza break) instead of ` / `.",
    why: "MLA uses a single spaced slash ` / ` for consecutive lines and reserves ` // ` strictly for stanza breaks.",
  },
  {
    label: "citation error",
    accept: ["citation error", "citation", "mla error", "formatting error"],
    snippet: "A candidate cites a secondary critic by surname `(Mercer 42)` in Movement 2, yet forgets to include Mercer's article in the Works Cited page.",
    why: "Every in-text citation must map cleanly to a complete matching entry in Works Cited.",
  },
  {
    label: "citation error",
    accept: ["citation error", "citation", "mla error", "formatting error"],
    snippet: "The essay quotes a numbered Shakespearean drama scene by quoting a random PDF page number `(p. 19)` instead of act, scene, and line numbers.",
    why: "Verse plays with numbered lines should cite `(act.scene.line)` — e.g. `(3.2.45–48)` — so any edition can locate the passage.",
  },
];

interface IntegrityFixCase {
  answer: string;
  accept: string[];
  prompt: string;
  why: string;
}

const TIER3_INTEGRITY_FIXES: readonly IntegrityFixCase[] = [
  { answer: "translator", accept: ["translator", "the translator"], prompt: "You wrote a Band 5 HL Essay on a studied work in translation. Besides author, title, publisher, and year, what key contributor MUST your MLA Works Cited entry explicitly name?", why: "Different translations alter diction and rhythm, so scholarly referencing must credit the exact translator." },
  { answer: "translator", accept: ["translator", "the translator"], prompt: "A peer checks your Works Cited for a translated novel and notices you omitted who rendered the original language into English. Name the missing contributor role.", why: "MLA requires 'Translated by [Name]' so examiners know which English edition you close-read." },
  { answer: "forward slash", accept: ["forward slash", "slash", "/", "virgule"], prompt: "When quoting two adjacent lines of a studied poem inline inside an analytical sentence under MLA style, what punctuation mark separates Line 1 from Line 2?", why: "Use a spaced forward slash (` / `) for consecutive poetic lines (and ` // ` for stanza breaks)." },
  { answer: "forward slash", accept: ["forward slash", "slash", "/", "virgule"], prompt: "An inline quote merges two neighbouring lines of verse with a comma instead of showing the poet's line break. What MLA punctuation mark should replace the comma?", why: "A spaced forward slash (` / `) preserves the poet's lineation accurately inside prose." },
  { answer: "line numbers", accept: ["line numbers", "lines", "line number"], prompt: "When citing a numbered lyric poem in MLA parenthetical citations, what should replace page numbers inside the brackets?", why: "Numbered poems are cited by line numbers — e.g. `(lines 12–14)` then `(12–14)` — across editions." },
  { answer: "line numbers", accept: ["line numbers", "lines", "line number"], prompt: "A draft cites a 24-line poem from a studied anthology as `(p. 87)` rather than pinpointing exact verse position. What should appear inside the MLA parenthesis instead?", why: "Use line numbers so any reader can verify your close reading instantly regardless of anthology pagination." },
  { answer: "after", accept: ["after", "outside"], prompt: "In standard MLA style for an inline quotation ending a sentence — e.g. `...enacts \"quiet exile\" (114)` — should the final full stop sit BEFORE or AFTER the closing parenthesis?", why: "Place the sentence-ending full stop *after* the closing parenthesis: `\"quiet exile\" (114).`" },
  { answer: "after", accept: ["after", "outside"], prompt: "A student puts the period inside the quotation marks before `(Shelley 114)` on a regular inline sentence. Where should that final period sit in MLA style (`before` or `after` the parenthesis)?", why: "In MLA inline prose quotes, the closing punctuation belongs *after* the parenthetical citation." },
  { answer: "one", accept: ["one", "1", "one draft", "1 draft"], prompt: "Under IB HL Essay authenticity regulations, how many complete drafts may a teacher legally review with general holistic feedback? (Type a word or number.)", why: "Teachers may give general, holistic guidance on ONE complete draft only — never line-editing." },
  { answer: "included", accept: ["included", "count", "counted"], prompt: "A student believes primary quotations from their novel do not count towards the 1,500-word HL Essay limit. Are embedded quotations `included` or `excluded`?", why: "All embedded primary and secondary quotations ARE included in the official 1,200–1,500 word total." },
  { answer: "excluded", accept: ["excluded", "not counted"], prompt: "A panicked candidate trims their Works Cited list to get under 1,500 words. Are Works Cited entries `included` or `excluded` from the official count?", why: "Works Cited, essay title, and parenthetical citations are EXCLUDED — never delete citations to save words!" },
  { answer: "excluded", accept: ["excluded", "not counted"], prompt: "Your essay title runs 18 words long and your parenthetical citations add 24 words. Are those 42 words `included` or `excluded` under IB word-count rules?", why: "Both essay titles and in-text parenthetical citations are EXCLUDED from the 1,200–1,500 word count." },
  { answer: "patchwriting", accept: ["patchwriting", "plagiarism"], prompt: "Borrowing a secondary critic's analytical paragraph while swapping several words for synonyms and omitting citation violates IB Academic Integrity. What specific term names this practice?", why: "Patchwriting (superficial synonym-swapping of uncredited ideas/syntax) is classified as plagiarism." },
  { answer: "works cited", accept: ["works cited", "bibliography", "reference list"], prompt: "You cite `(Mercer 42)` inside Movement 3 of your MLA HL Essay, yet forget to list Mercer's journal article at the end of your file. What uncounted section is missing Mercer's full entry?", why: "Every in-text citation must correspond to a full bibliographic entry in the Works Cited section." },
  { answer: "dropped quote", accept: ["dropped quote", "dropped quotation", "dropped"], prompt: "A 20-word quotation sits completely unattached between two sentences with no grammatical lead-in or syntactic embedding. What craft error is this?", why: "A dropped quote weakens Criterion D fluency and Criterion B analysis — weave short 2–8 word phrases syntactically." },
  { answer: "optional", accept: ["optional", "not mandatory", "not required"], prompt: "Are secondary literary critics and academic journal articles `mandatory` or `optional` to achieve 20/20 on the IB HL Essay?", why: "Secondary criticism is completely optional — Band 5 depends on your own perceptive close analysis of the primary work." },
];

export const drills: Drill[] = [
  {
    id: "8-hl-essay-criticism.line-of-inquiry-sharpener",
    topicId: "8-hl-essay-criticism",
    title: "Line-of-Inquiry Concept & Sharpness Audit",
    level: 1,
    ibLevel: "HL",
    guideRef: "hl-essay-line-of-inquiry",
    generate(rng, tier) {
      if (tier === 1) {
        const item = rng.pick(CONCEPT_BANK);
        const lead = rng.pick([
          "Identify which of the 7 IB Literature Concepts",
          "Which single central IB Concept",
          "Name the IB Concept (Identity, Culture, Creativity, Communication, Perspective, Transformation, or Representation) that",
        ]);
        const formFrame = rng.pick([
          "best anchors this Band 5 HL Essay inquiry:",
          "most directly drives this HL Essay line of inquiry:",
        ]);
        return {
          prompt: `${lead} ${formFrame}\n*"${item.inquiry}"*\n(Type one of the 7 IB Concepts.)`,
          answer: { type: "text", accept: item.accept, display: item.concept },
          hint: "Recall the 7 official Concepts: Identity, Culture, Creativity, Communication, Perspective, Transformation, Representation.",
          solution: [
            `Anchor Concept: **${item.concept}**.`,
            item.why,
          ],
        };
      }
      if (tier === 2) {
        const item = rng.pick(TITLE_DIAGNOSES);
        const context = rng.pick([
          "An HL candidate proposes this working essay title:",
          "Diagnose this draft HL Essay title from a student's Learner Portfolio:",
          "Stress-test this proposed HL Essay line of inquiry:",
        ]);
        return {
          prompt: `${context}\n*"${item.title}"*\nClassify it as: **broad theme**, **yes-no**, **non-literary**, or **sharp**.`,
          answer: { type: "text", accept: item.accept, display: item.label },
          hint: "Run the C-F-T-E & 'Delete the Author' checks: does it pair an IB Concept + literary craft + arguable non-binary tension?",
          solution: [
            `Classification: **${item.label}**.`,
            item.reason,
          ],
        };
      }
      const item = rng.pick(TIER3_INQUIRY_CASES);
      const lead = rng.pick([
        "Audit this DP2 HL Essay proposal:",
        "Act as an HL supervisor evaluating this proposal:",
        "Diagnose this HL Essay planning scenario:",
      ]);
      return {
        prompt: `${lead}\n${item.scenario}\nClassify the verdict as: **overlap**, **over-scoped**, **static list**, **non-literary**, or **sharp**.`,
        answer: { type: "text", accept: item.accept, display: item.flaw },
        hint: "Check four gates in order: non-overlap (1 distinct work), cohesive scope (2–4 texts if a collection), progressive conceptual tension, and literary craft focus.",
        solution: [
          `Verdict: **${item.flaw}**.`,
          item.why,
        ],
      };
    },
  },
  {
    id: "8-hl-essay-criticism.critical-lens-matcher",
    topicId: "8-hl-essay-criticism",
    title: "Critical & Theoretical Lenses Matcher",
    level: 2,
    ibLevel: "HL",
    guideRef: "critical-theoretical-lenses",
    generate(rng, tier) {
      const item = rng.pick(LENS_CASES);
      const ctx = rng.pick(AUDIT_CONTEXTS);
      if (tier === 1) {
        return {
          prompt: `While shaping ${ctx}, an HL student frames this probing analytical question:\n*"${item.t1Question}"*\nWhich critical lens is at work? (Reply: **feminist**, **postcolonial**, **Marxist**, **psychoanalytic**, **ecocritical**, or **narratological**.)`,
          answer: { type: "text", accept: item.accept, display: item.lens },
          hint: "Match the question's core focus: gender/voice, empire/hybridity, class/commodification, repression/uncanny, non-human ecology, or narrative architecture.",
          solution: [
            `Critical lens: **${item.lens}**.`,
            `When deployed as a clean analytical question like this, a ${item.lens} perspective directs close reading without jargon overload.`,
          ],
        };
      }
      if (tier === 2) {
        return {
          prompt: `In ${ctx}, a Band 5 body movement focuses on:\n*${item.t2Craft}*\nIdentify the primary critical perspective guiding this craft analysis. (Reply: **feminist**, **postcolonial**, **Marxist**, **psychoanalytic**, **ecocritical**, or **narratological**.)`,
          answer: { type: "text", accept: item.accept, display: item.lens },
          hint: "Look closely at the exact authorial choices being tracked — they signal the theoretical lens immediately.",
          solution: [
            `Primary critical lens: **${item.lens}**.`,
            `Notice how Band 5 essays express a ${item.lens} perspective through concrete stylistic craft rather than abstract theorist name-dropping.`,
          ],
        };
      }
      return {
        prompt: `In ${ctx}, a weak Band 2 paragraph commits jargon-dumping / cookie-cutter reduction:\n*"${item.t3JargonFlaw}"*\nWhich critical lens is being misused here? (Reply: **feminist**, **postcolonial**, **Marxist**, **psychoanalytic**, **ecocritical**, or **narratological**.)`,
        answer: { type: "text", accept: item.accept, display: item.lens },
        hint: "Identify the theoretical school behind the buzzwords or theorist names, then think about how to translate it into plain close reading.",
        solution: [
          `Misused critical lens: **${item.lens}**.`,
          `**How to rescue to Band 5:** ${item.rescue}`,
        ],
      };
    },
  },
  {
    id: "8-hl-essay-criticism.regulations-word-count",
    topicId: "8-hl-essay-criticism",
    title: "HL Essay Word-Budget & Non-Overlap Calculations",
    level: 1,
    ibLevel: "HL",
    guideRef: "hl-essay-drafting-rubric",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.int(1, 3);
        if (mode === 1) {
          const titleW = rng.int(11, 22);
          const citeW = rng.int(14, 34);
          const wcW = rng.int(65, 115);
          const counted = rng.int(1340, 1485);
          const docTotal = counted + titleW + citeW + wcW;
          return {
            prompt: `An HL Essay document shows **${big(docTotal)} total words**, including a **${titleW}-word title**, **${citeW} words** of parenthetical citations, and a **${wcW}-word Works Cited** page. Calculate the official **IB counted word total**.`,
            answer: { type: "number", value: counted, display: `${big(counted)} words` },
            traps: [
              { spec: { type: "number", value: docTotal }, feedback: "Remember to subtract the excluded apparatus: essay title, parenthetical citations, and Works Cited!" },
              { spec: { type: "number", value: docTotal - wcW }, feedback: "You excluded Works Cited only — also exclude the essay title and parenthetical citations!" },
            ],
            hint: "Add title + parenthetical citations + Works Cited, then subtract that excluded sum from the document total.",
            solution: [
              `Excluded words = ${titleW} + ${citeW} + ${wcW} = ${titleW + citeW + wcW}.`,
              `Official counted total = ${big(docTotal)} − ${titleW + citeW + wcW} = **${big(counted)} words**.`,
            ],
          };
        }
        if (mode === 2) {
          const intro = rng.int(135, 175);
          const m1 = rng.int(255, 305);
          const m2 = rng.int(260, 310);
          const m3 = rng.int(255, 305);
          const m4 = rng.int(240, 290);
          const concl = rng.int(130, 165);
          const total = intro + m1 + m2 + m3 + m4 + concl;
          return {
            prompt: `An HL Essay draft allocates **${intro}w** (Intro), four body movements of **${m1}w**, **${m2}w**, **${m3}w**, and **${m4}w**, plus **${concl}w** (Conclusion) with all citations excluded. Calculate the **counted word total**.`,
            answer: { type: "number", value: total, display: `${big(total)} words` },
            traps: [
              { spec: { type: "number", value: m1 + m2 + m3 + m4 }, feedback: "Don't forget to include the Introduction and Conclusion alongside the four body movements!" },
            ],
            hint: "Sum all six counted sections: Intro + M1 + M2 + M3 + M4 + Conclusion.",
            solution: [
              `Body movements = ${m1} + ${m2} + ${m3} + ${m4} = ${big(m1 + m2 + m3 + m4)}w.`,
              `Total counted = ${big(m1 + m2 + m3 + m4)} + ${intro} + ${concl} = **${big(total)} words**.`,
            ],
          };
        }
        const studied = rng.int(13, 18);
        const remaining = studied - 3;
        return {
          prompt: `An HL English A: Literature course covers **${studied} studied works**. A student commits **2 works** to their Individual Oral and **1 distinct work** to their HL Essay. Under the strict non-overlap rule, how many studied works remain eligible for **Paper 2**?`,
          answer: { type: "number", value: remaining, display: `${remaining} works` },
          traps: [
            { spec: { type: "number", value: studied - 2 }, feedback: "Remember to also exclude the 1 work locked inside the HL Essay!" },
            { spec: { type: "number", value: studied - 1 }, feedback: "Both the 2 Individual Oral works AND the 1 HL Essay work cannot be reused in Paper 2." },
          ],
          hint: "Subtract the 2 IO works and 1 HL Essay work (3 locked works total) from the studied total.",
          solution: [
            `Locked works = 2 (IO) + 1 (HL Essay) = 3.`,
            `Remaining Paper 2 pool = ${studied} − 3 = **${remaining} works**.`,
          ],
        };
      }
      if (tier === 2) {
        const mode = rng.int(1, 3);
        if (mode === 1) {
          const over = rng.int(1535, 1785);
          const unread = over - 1500;
          return {
            prompt: `A student submits an HL Essay containing **${big(over)} counted words** (citations and Works Cited already excluded). Under IB rules, examiners stop reading at 1,500 words. How many final words go **completely unread**?`,
            answer: { type: "number", value: unread, display: `${unread} words` },
            traps: [
              { spec: { type: "number", value: over - 1200 }, feedback: "1,200 is the minimum floor — the examiner stop-reading wall is at 1,500 words!" },
            ],
            hint: "Subtract the strict 1,500-word IB ceiling from the candidate's counted word total.",
            solution: [
              `Unread excess = ${big(over)} − 1,500 = **${unread} words** (typically wiping out the conclusion!).`,
            ],
          };
        }
        if (mode === 2) {
          const scopeRanges: Array<[number, number, number]> = [
            [3, 320, 385],
            [4, 245, 295],
            [6, 160, 195],
            [8, 120, 145],
            [9, 105, 130],
            [10, 96, 118],
            [12, 80, 98],
          ];
          const [poems, loP, hiP] = rng.pick(scopeRanges);
          const perPoem = rng.int(loP, hiP);
          const body = poems * perPoem;
          return {
            prompt: `An HL Essay on a poetry collection budgets **${big(body)} body words** evenly across **${poems} poems**. Calculate the exact average **body words per poem**.`,
            answer: { type: "number", value: perPoem, display: `${perPoem} words` },
            hint: `Divide total body words (${big(body)}) by the number of poems (${poems}).`,
            solution: [
              `${big(body)} ÷ ${poems} = **${perPoem} words per poem**.`,
              poems <= 4
                ? "A cohesive cluster of 2–4 poems leaves generous space (~245–385w each) for Band 5 micro close-reading!"
                : "Notice how skimming 6+ poems slashes depth per poem — narrow to 2–4 cohesive poems instead!",
            ],
          };
        }
        const draft = rng.int(1545, 1775);
        const target = rng.int(1410, 1475);
        const cut = draft - target;
        return {
          prompt: `A complete HL Essay draft sits at **${big(draft)} counted words**. How many counted words must the student trim during Pass 3 to hit a safe Band 5 target of **${big(target)} words**?`,
          answer: { type: "number", value: cut, display: `${cut} words` },
          traps: [
            { spec: { type: "number", value: draft - 1500 }, feedback: "That only brings the essay right onto the risky 1,500-word cliff — trim all the way to the stated target!" },
          ],
          hint: `Subtract the target (${big(target)}) from the current draft length (${big(draft)}).`,
          solution: [
            `Words to trim = ${big(draft)} − ${big(target)} = **${cut} words**.`,
          ],
        };
      }
      // Tier 3: tricky embedded-quotes-included accounting OR rubric percentage conversion
      if (rng.bool(0.65)) {
        const titleW = rng.int(12, 24);
        const parensW = rng.int(18, 38);
        const wcW = rng.int(70, 130);
        const quotesW = rng.int(85, 175);
        const counted = rng.int(1380, 1555);
        const docTotal = counted + titleW + parensW + wcW;
        return {
          prompt: `An HL Essay file reports **${big(docTotal)} total words**. This includes a **${titleW}-word title**, **${parensW} words** in parenthetical citations, a **${wcW}-word Works Cited** page, AND **${quotesW} words** of embedded primary quotations inside body paragraphs. Calculate the exact **official IB counted word total**.`,
          answer: { type: "number", value: counted, display: `${big(counted)} words` },
          traps: [
            {
              spec: { type: "number", value: counted - quotesW },
              feedback: "Classic trap! Embedded primary quotations ARE INCLUDED in the IB word count — NEVER subtract them!",
            },
            {
              spec: { type: "number", value: docTotal - wcW },
              feedback: "Exclude title, parenthetical citations, AND Works Cited (while keeping embedded quotations included).",
            },
          ],
          hint: "Exclude ONLY title + parenthetical citations + Works Cited. Primary quotations embedded in prose ALWAYS stay included!",
          solution: [
            `Excluded apparatus = ${titleW} (title) + ${parensW} (citations) + ${wcW} (Works Cited) = ${titleW + parensW + wcW}.`,
            `Embedded primary quotations (${quotesW}w) remain **INCLUDED**.`,
            `Official counted total = ${big(docTotal)} − ${titleW + parensW + wcW} = **${big(counted)} words**${counted > 1500 ? " (OVER 1,500w — must trim!)" : " (within limit!)"}.`,
          ],
        };
      }
      const a = rng.int(3, 5);
      const b = rng.int(3, 5);
      const c = rng.int(2, 5);
      const d = rng.int(3, 5);
      const raw = a + b + c + d;
      const pct = raw * 5;
      return {
        prompt: `An externally marked HL Essay receives **Criterion A: ${a}/5**, **Criterion B: ${b}/5**, **Criterion C: ${c}/5**, and **Criterion D: ${d}/5**. Express this HL Essay score as a **percentage** of the 20 available marks.`,
        answer: { type: "number", value: pct, display: `${pct}%` },
        traps: [
          { spec: { type: "number", value: raw }, feedback: `${raw} is the raw mark out of 20 — multiply by 5 (or divide by 20 × 100) for the percentage!` },
        ],
        hint: "Sum all four scores out of 20, then multiply by 5 (since 1 mark out of 20 equals 5%).",
        solution: [
          `Raw mark = ${a} + ${b} + ${c} + ${d} = ${raw} / 20.`,
          `Percentage = (${raw} ÷ 20) × 100 = **${pct}%**.`,
        ],
      };
    },
  },
  {
    id: "8-hl-essay-criticism.rubric-band-diagnosis",
    topicId: "8-hl-essay-criticism",
    title: "Criteria A–D Examiner Band Diagnostics",
    level: 3,
    ibLevel: "HL",
    guideRef: "hl-essay-drafting-rubric",
    generate(rng, tier) {
      const item = rng.pick(RUBRIC_CASES);
      const ctx = rng.pick(AUDIT_CONTEXTS);
      if (tier === 1) {
        return {
          prompt: `An IB examiner writes this comment on ${ctx}:\n*"${item.t1ExaminerNote}"*\nWhich single HL Essay criterion is most directly diagnosed? (Reply: **A**, **B**, **C**, or **D**.)`,
          answer: { type: "text", accept: item.accept, display: `Criterion ${item.crit}` },
          hint: "Map the rubric: A = Knowledge/Understanding/Interpretation · B = Analysis & Evaluation · C = Focus/Organisation/Development · D = Language.",
          solution: [
            `Target rubric area: **Criterion ${item.crit}**.`,
            item.fix,
          ],
        };
      }
      if (tier === 2) {
        return {
          prompt: `During Pass 1–2 self-review of ${ctx}, you catch this mark-losing habit:\n*${item.t2StudentFlaw}*\nWhich single criterion takes the primary mark cap? (Reply: **A**, **B**, **C**, or **D**.)`,
          answer: { type: "text", accept: item.accept, display: `Criterion ${item.crit}` },
          hint: "Ask what the flaw hurts most directly: comprehension/nuance (A), authorial craft evaluation (B), progressive structure/1,500w limit (C), or prose precision (D).",
          solution: [
            `Primary criterion capped: **Criterion ${item.crit}**.`,
            item.fix,
          ],
        };
      }
      const hi = rng.pick([4, 5]);
      const lo = rng.pick([2, 3]);
      const scoreText = (["A", "B", "C", "D"] as const)
        .map((letter) => `${letter}: ${letter === item.crit ? lo : hi}/5`)
        .join(" · ");
      return {
        prompt: `In ${ctx}, the script earns **${scoreText}**. Examiner notes:\n*${item.t3Bottleneck}*\nWhich single bottleneck criterion must be rescued to hit Band 5? (Reply: **A**, **B**, **C**, or **D**.)`,
        answer: { type: "text", accept: item.accept, display: `Criterion ${item.crit}` },
        hint: "Cross-check both the isolated lower score AND the exact diagnostic flaw in the examiner's note.",
        solution: [
          `Bottleneck criterion: **Criterion ${item.crit}** (${lo}/5 vs ${hi}/5 across the other three).`,
          item.fix,
        ],
      };
    },
  },
  {
    id: "8-hl-essay-criticism.citation-integrity-check",
    topicId: "8-hl-essay-criticism",
    title: "Citation Hygiene, Word Exclusions & Academic Integrity",
    level: 2,
    ibLevel: "HL",
    guideRef: "evidence-argument-integration",
    generate(rng, tier) {
      const ctx = rng.pick(AUDIT_CONTEXTS);
      if (tier === 1) {
        const item = rng.pick(WORD_COUNT_ITEMS);
        const lead = rng.pick([
          "In",
          "When checking the 1,200–1,500 word ceiling for",
        ]);
        return {
          prompt: `${lead} ${ctx}, is **${item.item}** officially **included** or **excluded** from the IB counted word total? (Reply: **included** or **excluded**.)`,
          answer: { type: "text", accept: [item.status], display: item.status },
          hint: "Remember the clean rule: ONLY essay title, parenthetical citations, and Works Cited are excluded — all prose and embedded quotes count!",
          solution: [
            `Official status: **${item.status}**.`,
            item.why,
          ],
        };
      }
      if (tier === 2) {
        const item = rng.pick(CITATION_CASES);
        const context = rng.pick([
          `Audit this excerpt from ${ctx}:`,
          `Evaluate this quotation & citation example in ${ctx}:`,
        ]);
        return {
          prompt: `${context}\n*${item.snippet}*\nClassify it as: **valid**, **dropped quote**, **patchwriting**, or **citation error**.`,
          answer: { type: "text", accept: item.accept, display: item.label },
          hint: "Check four criteria: grammatical embedding, MLA mechanics (slashes/line numbers/full-stop placement/translator), and honest attribution of ideas.",
          solution: [
            `Classification: **${item.label}**.`,
            item.why,
          ],
        };
      }
      const item = rng.pick(TIER3_INTEGRITY_FIXES);
      const wrap = rng.pick([
        `[Draft Audit · ${ctx}]`,
        `[Pre-Submission Integrity Check · ${ctx}]`,
      ]);
      return {
        prompt: `${wrap}\n${item.prompt}`,
        answer: { type: "text", accept: item.accept, display: item.answer },
        hint: "Apply strict MLA 9th edition referencing rules and IB HL Essay Academic Integrity regulations.",
        solution: [
          `Correct answer: **${item.answer}**.`,
          item.why,
        ],
      };
    },
  },
];
