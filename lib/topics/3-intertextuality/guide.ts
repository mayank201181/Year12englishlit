import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "3-intertextuality",
  title: "AoE 3: Intertextuality — Connecting Texts",
  strand: "Areas of Exploration",
  icon: "🔗",
  level: "SL",
  summary:
    "Explore how literary works speak to one another across time, culture, and form through genre conventions, subversion, allusion, motifs, and writing back — and build integrated point-by-point comparative synthesis for IB Paper 2.",
  intro:
    "No literary text is written in a vacuum, and no reader encounters a work with an empty mind. Every sonnet inherits centuries of love-lyric tradition; every modern play stages a quiet argument with classical tragedy; every postcolonial novel can talk back to an imperial predecessor. **Area of Exploration 3: Intertextuality — Connecting Texts** trains you to hear that ongoing literary conversation across eras, languages, and forms — and to translate those connections into tightly braided, top-band IB comparative essays.",
  guide: [
    // =========================================================================
    // SECTION 1: conventions-traditions-subversion
    // =========================================================================
    {
      id: "conventions-traditions-subversion",
      heading: "Literary Conventions, Movements & Genre Subversion",
      level: "SL",
      discovery: {
        problem:
          "Read this short unseen four-line stanza:\n\n> *Apricot blossom lifts along the wall,*\n> *Warm swallows stitch the orchard air with light,*\n> *Your hand still holds the sweetness of the fall —*\n> *Sign Column Four to authorise the blight.*\n\nWhy does the fourth line feel far more jarring than if it appeared inside an ordinary business memo?",
        idea:
          "Lines 1–3 deliberately activate your **horizon of expectations** for a pastoral love lyric: regular iambic pentameter, lush sensory nature imagery, and intimate second-person address. Because the speaker builds that familiar generic contract first, the sudden bureaucratic diction (*Sign Column Four*, *authorise*) and chilling rhyming snap (*light / blight*) land as a violent rupture. Subversion only works when the reader feels the gravitational pull of the convention being broken.",
      },
      body: `Every literary genre operates like an unwritten contract between writer and reader. Literary theorist **Hans Robert Jauss** called this shared mental framework the **horizon of expectations** (*Erwartungshorizont*): the bundle of formal rules, character types, structural arcs, and tonal patterns a reader expects when opening a tragedy, a Gothic novel, a sonnet, or a modernist lyric.

When you analyse genre in IB English A: Literature, never stop at labelling a text ("This is a Gothic story"). Instead, ask **what the writer does with the contract**:

- **Adherence (Fulfilment):** Working faithfully inside established rules to harness their emotional weight, ritual familiarity, or cultural prestige.
- **Modification (Stretching):** Expanding a tradition to accommodate new voices, modern settings, or contemporary moral anxieties without shattering its frame.
- **Parody:** Imitating a genre's distinctive style or tropes with deliberate exaggeration or ironic mismatch to expose its artificiality, sentimentality, or ideological blind spots.
- **Subversion (Inversion):** Setting up a genre's signature expectations only to overturn them — turning the expected resolution, hero, or moral order upside down to unsettle the reader and generate fresh meaning.

### Core Literary Genres & Subversive Possibilities

| Genre / Tradition | Classical Conventions (Horizon of Expectations) | How Modern or Resistant Writers Subvert It |
|---|---|---|
| **Tragedy** | Noble protagonist with a fatal error (*hamartia*), reversal (*peripeteia*), recognition (*anagnorisis*), and emotional purgation (*catharsis*). | Centres ordinary or marginalised protagonists; denies redemptive recognition; exposes systemic social failure rather than individual flaw (e.g. Arthur Miller's *Death of a Salesman* [Example text — not a set text]). |
| **Sonnet** | 14 lines (often iambic pentameter), tight rhyme architecture (Petrarchan octave + sestet, or Shakespearean three quatrains + couplet), idealised love or devotion pivoting at a *volta*. | Fractures metre or drops rhyme; shifts subject from courtship to political violence, grief, or domestic labour; withholds tidy couplet closure (e.g. Wilfred Owen's *Anthem for Doomed Youth* [Example text — not a set text]). |
| **Gothic** | Isolated ancestral estates, subterranean vaults, atmospheric terror, aristocratic villains, imperilled heroines, uncanny doubles. | Relocates horror into sunlit suburbs, corporate offices, or colonial plantations; exposes the "monster" as inherited trauma, patriarchy, or imperial guilt (e.g. Jane Austen's parody in *Northanger Abbey* [Example text — not a set text]). |
| **Bildungsroman** | Linear coming-of-age narrative moving from youthful naivety through moral trial toward mature self-knowledge and social integration. | Halts or reverses growth; reveals that "integration" demands erasing cultural identity or gender autonomy, producing an anti-*Bildungsroman*. |
| **Magical Realism** | Matter-of-fact, deadpan narration of impossible or supernatural events woven seamlessly into ordinary historical and political reality. | Uses surreal intrusion not as escapist fantasy, but to register collective historical trauma or state violence that strict realism struggles to express (e.g. Gabriel García Márquez's *One Hundred Years of Solitude* [Example text — not a set text]). |
| **Modernist Lyric** | Fragmented syntax, abrupt juxtapositions, psychological interiority, ironic detachment, and disillusionment after industrial modernity. | Contrasts with Romantic organic unity by refusing smooth linear consolation, forcing the reader to assemble meaning across textual gaps (e.g. T. S. Eliot's *The Love Song of J. Alfred Prufrock* [Example text — not a set text]). |

### Literary Movements as Dynamic Conversations

Movements do not replace one another neatly like chapters in a textbook; they **react against** one another. **Romanticism** prized sublime emotion, organic form, and individual imagination in pushback against Enlightenment rationalism; **Realism** turned toward everyday social observation and economic material conditions; **Modernism** fractured linear narrative and omniscient certainty to capture alienation and subjective time; **Postmodernism** foregrounded metafiction, irony, and playfulness to question whether any grand narrative can claim absolute truth.

> **IB Examiner Insight:** Strong AoE 3 essays treat genre not as a filing cabinet, but as an **active pressure system**. Always connect the *broken or fulfilled convention* directly to its *conceptual effect on the reader*.`,
      diagram: `<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing how a reader's horizon of expectations branches into adherence, stretching, parody, or radical subversion to generate literary meaning">
  <rect x="0" y="0" width="640" height="270" rx="14" fill="#ffffff" />
  <text x="320" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#241016">Jauss's Horizon of Expectations: How Genre Choices Create Meaning</text>

  <!-- Left box: Genre Code -->
  <rect x="20" y="92" width="136" height="86" rx="10" fill="#ffe4e6" stroke="#be123c" stroke-width="2" />
  <text x="88" y="118" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#881337">GENRE SIGNALS</text>
  <text x="88" y="138" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#241016">Form, metre, tropes,</text>
  <text x="88" y="154" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#241016">setting, narrative arc</text>

  <!-- Arrow 1 -->
  <line x1="156" y1="135" x2="188" y2="135" stroke="#6b4c56" stroke-width="2" />
  <polygon points="188,130 198,135 188,140" fill="#6b4c56" />

  <!-- Middle box: Horizon -->
  <rect x="198" y="84" width="150" height="102" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2" />
  <text x="273" y="110" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#92400e">HORIZON OF</text>
  <text x="273" y="126" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#92400e">EXPECTATIONS</text>
  <text x="273" y="148" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#241016">Reader predicts tone,</text>
  <text x="273" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#241016">roles &amp; moral closure</text>

  <!-- Branching paths -->
  <path d="M 348 112 C 378 112, 382 68, 412 68" fill="none" stroke="#15803d" stroke-width="2" />
  <polygon points="412,63 422,68 412,73" fill="#15803d" />

  <path d="M 348 135 L 412 135" fill="none" stroke="#0369a1" stroke-width="2" />
  <polygon points="412,130 422,135 412,140" fill="#0369a1" />

  <path d="M 348 158 C 378 158, 382 204, 412 204" fill="none" stroke="#be123c" stroke-width="2" />
  <polygon points="412,199 422,204 412,209" fill="#be123c" />

  <!-- Right Outcome 1: Adherence -->
  <rect x="422" y="44" width="198" height="48" rx="9" fill="#dcfce7" stroke="#15803d" stroke-width="1.8" />
  <text x="521" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#14532d">Adherence / Fulfilment</text>
  <text x="521" y="81" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#241016">Deepens ritual resonance &amp; catharsis</text>

  <!-- Right Outcome 2: Stretching / Parody -->
  <rect x="422" y="111" width="198" height="48" rx="9" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.8" />
  <text x="521" y="131" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#0c4a6e">Stretching / Parody</text>
  <text x="521" y="148" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#241016">Exposes artifice via ironic distance</text>

  <!-- Right Outcome 3: Subversion -->
  <rect x="422" y="180" width="198" height="52" rx="9" fill="#ffe4e6" stroke="#be123c" stroke-width="1.8" />
  <text x="521" y="200" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#881337">Subversion / Inversion</text>
  <text x="521" y="216" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#241016">Defamiliarises norms; forces critique</text>

  <text x="320" y="254" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-style="italic" fill="#6b4c56">Meaning arises in the tension between what the tradition promises and what the text delivers.</text>
</svg>`,
      diagramCaption:
        "Writers invoke genre conventions to establish a reader's horizon of expectations, then confirm, stretch, parody, or subvert that horizon to shape interpretation.",
      workedExamples: [
        {
          title: "Analysing Gothic Subversion in an Unseen Prose Extract",
          problem:
            "Read this unseen opening paragraph and explain how the writer subverts Gothic conventions to critique domestic conformity:\n\n> *There was no crumbling turret on Acacia Close, only twenty-four identical white driveways washed clean every Sunday morning. Yet when Mira unlocked her sunlit kitchen, the silence pressed against her throat with the weight of a sealed crypt, and the spotless marble counter reflected her face in three slightly mismatched panes.*",
          steps: [
            "1. Identify the explicit invocation and negation of the classical Gothic horizon: the opening clause (*no crumbling turret*) activates the reader's expectation of ruined castles and shadowed isolation, only to substitute hyper-orderly suburbia (*twenty-four identical white driveways*).",
            "2. Track how Gothic psychological dread migrates into the bright modern interior: sensory compression (*silence pressed against her throat*) and mortuary imagery (*sealed crypt*) turn the *sunlit kitchen* itself into a site of entrapment.",
            "3. Analyse the fractured reflection (*three slightly mismatched panes*) as a modern reworking of the Gothic uncanny double, hinting at identity splintered by suburban conformity.",
            "4. Synthesise the conceptual effect: by stripping away melodramatic ruins while keeping claustrophobic terror, the writer implies that everyday social uniformity can be more suffocating than any supernatural monster.",
          ],
          answer:
            "The extract invokes and immediately negates traditional Gothic architecture (*no crumbling turret*) in order to relocate claustrophobic dread (*sealed crypt*) and uncanny self-division (*mismatched panes*) inside a spotless suburban kitchen, suggesting that enforced domestic uniformity breeds its own quiet terror.",
          yourTurn: {
            question:
              "What two-word (or three-word) critical phrase, coined by Hans Robert Jauss, describes the shared set of genre rules and expectations a reader brings to a literary text?",
            answer: {
              type: "text",
              accept: [
                "horizon of expectations",
                "the horizon of expectations",
                "erwartungshorizont",
              ],
              display: "horizon of expectations",
            },
            solution:
              "Hans Robert Jauss termed this shared cultural and generic framework the **horizon of expectations** (*Erwartungshorizont*). Writers generate resonance or shock by confirming, stretching, or rupturing it.",
          },
        },
        {
          title: "Evaluating an Anti-Bildungsroman Ending",
          problem:
            "An unseen coming-of-age novel concludes with its eighteen-year-old narrator passing every elite examination, putting on an immaculate grey coat identical to his father's, and quietly locking his sketchbook in a basement trunk before saying, *'At last, nobody asks who I am.'* How does this ending invert the *Bildungsroman* tradition?",
          steps: [
            "1. Recall the classical *Bildungsroman* arc: youthful exploration leads toward authentic self-discovery reconciled with adult society.",
            "2. Note the surface compliance: passing exams and adopting the paternal coat visually mimic successful maturation.",
            "3. Pinpoint the symbolic inversion: locking away the sketchbook and celebrating anonymity (*nobody asks who I am*) turn social 'integration' into self-erasure.",
            "4. Conclude with the thematic critique: the writer subverts the triumphal coming-of-age script to indict an educational and patriarchal order that rewards conformity over authentic identity.",
          ],
          answer:
            "Although the protagonist achieves outward social integration, locking away the sketchbook and welcoming anonymity invert the classical *Bildungsroman* promise of self-realisation, presenting adulthood as conformity-driven self-erasure.",
        },
      ],
      whyItWorks:
        "Genres act as shared shortcuts of cultural memory. When a writer honours a convention, the text borrows centuries of accumulated emotional weight; when a writer subverts it, the resulting cognitive dissonance forces the reader to question not only the literary form, but also the real-world values (gender roles, heroism, social order, historical progress) built into that form.",
      keyPoints: [
        "**Horizon of expectations (Jauss):** Readers interpret every literary choice against inherited conventions of genre, form, and literary movement.",
        "**Convention ≠ cliché:** Adherence can be deeply expressive when formal restraint mirrors emotional repression or ritual grief.",
        "**Subversion requires recognition:** A writer must signal a genre's rules clearly enough for the audience to feel the shock when those rules break.",
        "**Parody vs subversion:** Parody typically foregrounds comedic or satirical exaggeration of style, whereas subversion often overturns structural or ideological assumptions for serious thematic critique.",
        "Always link genre moves to **conceptual meaning** (Identity, Power, Transformation, Representation) rather than merely ticking off generic features.",
      ],
      strategies: [
        "When facing an unseen extract or studied work, ask two rapid questions: *(1) Which generic script does this text invite me to expect?* and *(2) Where does it diverge from that script, and why?*",
        "Use active analytical verbs: *invokes, inherits, stretches, destabilises, parodies, ironises, inverts, dismantles* — avoid flat phrases like *uses the genre*.",
        "In Paper 2, comparing *how two writers differently renegotiate the same genre convention* (e.g. tragic recognition or Gothic claustrophobia) immediately elevates Criterion A and B.",
      ],
      thinkDeeper:
        "Can a subversive work stay subversive forever? Over decades, once-shocking modernist fragmentation or anti-heroic endings become expected conventions themselves — proving that Jauss's horizon of expectations shifts continuously across contexts of reception.",
    },

    // =========================================================================
    // SECTION 2: allusion-motif-dialogue
    // =========================================================================
    {
      id: "allusion-motif-dialogue",
      heading: "Allusion, Motif, Archetype & Intertextual Dialogue",
      level: "SL",
      discovery: {
        problem:
          "Compare two brief unseen fictional openings:\n\n- **Text X:** *'Do not look back,' his sister whispered as the ferry pulled away from the burning port; he glanced over his shoulder anyway, and felt the salt stiffen on his cheeks.*\n- **Text Y:** *A ten-chapter novel follows a displaced botanist spending ten years crossing ten bureaucratic border zones to reach an estranged spouse who keeps unpicking a tapestry of maps each night — without ever mentioning Homer or ancient Greece.*\n\nBoth texts draw on ancient stories, yet they operate on completely different scales. How?",
        idea:
          "**Text X** uses a **local/explicit allusion** (echoing the biblical story of Lot's wife turning into a pillar of salt, or Orpheus looking back) concentrated inside a single charged image. **Text Y** uses a **structural allusion**, quietly modelling its entire plot architecture and motifs on Homer's *The Odyssey* [Example text — not a set text] so the whole narrative dialogues with an epic template.",
      },
      body: `In 1966, theorist **Julia Kristeva** — building on **Mikhail Bakhtin's** idea of **dialogism** (the principle that language always carries the voices of previous speakers) — coined the term **intertextuality**: every text is a *"mosaic of quotations"*, an absorption and transformation of other texts.

To write with Band 5 precision in IB Literature, distinguish sharply between the main mechanisms of intertextual dialogue:

### 1. Explicit (Local) Allusion vs Structural Allusion
- **Explicit / Local Allusion:** A brief, targeted reference to a mythic, biblical, historical, or literary figure, line, or event (e.g. a character calling a doomed garden *"our small Eden"*, or naming a reckless aviator *"Icarus"*). It compresses huge emotional and moral freight into a few words — inviting the reader to measure the gap between the grand original and the present situation.
- **Structural Allusion:** An entire work echoes the plot blueprint, character constellation, or symbolic framework of an earlier precursor text — for instance, James Joyce's *Ulysses* [Example text — not a set text] mapping a single ordinary day in Dublin onto Homer's *The Odyssey* [Example text — not a set text], or T. S. Eliot's *The Waste Land* [Example text — not a set text] braiding Grail legend, classical myth, and Jacobean drama into a fractured portrait of post-war Europe.

### 2. Motif, Archetype & Trope
- **Motif:** A recurring concrete image, sound, object, colour, or verbal phrase *within* a work (or echoed across works) that accumulates shifting thematic resonance — such as mirrors, thresholds, water, keys, or birds.
- **Archetype:** A deeply rooted cross-cultural character pattern, situation, or symbolic plot (the trickster, the reluctant wanderer, the descent to the underworld, the wise outcast) recurring across mythologies and eras.
- **Analysing Evolution:** Never simply say *"Water is a motif."* Trace how the motif *mutates* — from baptismal cleansing early in a text to suffocating flood at its climax — or how two different writers invest the same archetype with opposing moral meanings.

### 3. Parody, Pastiche & Homage
- **Parody:** Imitates a recognizable precursor style or text with **critical, satirical, or ironic distance**, puncturing its authority or exposing absurdity.
- **Pastiche:** Assembles or imitates earlier styles in a **neutral, affectionate, or patchwork spirit** — celebrating craft or evoking historical texture without the biting mockery of parody.
- **Homage:** Openly honours an admired precursor work while extending its ideas into a new era.

### 4. Postcolonial & Feminist "Writing Back"
One of the richest areas of AoE 3 study is **revisionary writing back**: when a later author re-imagines a canonical text from the perspective of a character previously silenced, demonised, or pushed to the margins.

- **Postcolonial writing back** exposes the imperial assumptions hidden inside canonical works — as in Jean Rhys's *Wide Sargasso Sea* [Example text — not a set text] giving voice and Caribbean history to the silenced Creole wife from Charlotte Brontë's *Jane Eyre* [Example text — not a set text], or J. M. Coetzee's *Foe* [Example text — not a set text] interrogating authorship and colonial silence in Daniel Defoe's *Robinson Crusoe* [Example text — not a set text].
- **Feminist writing back** reclaims mythic or canonical women reduced to passive symbols or cautionary villains — as in Margaret Atwood's *The Penelopiad* [Example text — not a set text] centring Penelope and the twelve hanged maids from Homer's *The Odyssey* [Example text — not a set text].
- **Metatheatrical / Philosophical re-framing** shifts the spotlight onto minor figures — as in Tom Stoppard's *Rosencrantz and Guildenstern Are Dead* [Example text — not a set text] inverting Shakespeare's *Hamlet* [Example text — not a set text] into an absurdist meditation on fate and agency.

> **Key Rule:** Writing back is never mere imitation. It **alters our reading of the original text retrospectively**: once you have heard the marginalised voice, the canonical original can never look innocent again.`,
      diagram: `<svg viewBox="0 0 640 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concept map of five intertextual dialogue strategies radiating around a central literary text: explicit allusion, structural allusion, motif and archetype, parody versus pastiche, and writing back">
  <rect x="0" y="0" width="640" height="285" rx="14" fill="#ffffff" />
  <text x="320" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#241016">Five Mechanisms of Intertextual Dialogue</text>

  <!-- Connecting lines from centre (320, 152) -->
  <line x1="252" y1="126" x2="178" y2="82" stroke="#be123c" stroke-width="2" />
  <line x1="388" y1="126" x2="462" y2="82" stroke="#0369a1" stroke-width="2" />
  <line x1="242" y1="168" x2="168" y2="210" stroke="#15803d" stroke-width="2" />
  <line x1="398" y1="168" x2="472" y2="210" stroke="#b45309" stroke-width="2" />
  <line x1="320" y1="184" x2="320" y2="220" stroke="#7c3aed" stroke-width="2" />

  <!-- Centre hub -->
  <rect x="234" y="118" width="172" height="66" rx="12" fill="#be123c" />
  <text x="320" y="146" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#ffffff">INTERTEXTUAL</text>
  <text x="320" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#ffffff">DIALOGUE</text>

  <!-- Top Left: Explicit Allusion -->
  <rect x="20" y="44" width="194" height="64" rx="10" fill="#ffe4e6" stroke="#be123c" stroke-width="1.8" />
  <text x="117" y="65" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#881337">Explicit / Local Allusion</text>
  <text x="117" y="82" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">Targeted mythic, biblical or</text>
  <text x="117" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">literary reference in a moment</text>

  <!-- Top Right: Structural Allusion -->
  <rect x="426" y="44" width="194" height="64" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.8" />
  <text x="523" y="65" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#0c4a6e">Structural Allusion</text>
  <text x="523" y="82" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">Whole plot arc or cast mirrors</text>
  <text x="523" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">an earlier architectural template</text>

  <!-- Bottom Left: Motif & Archetype -->
  <rect x="20" y="198" width="186" height="68" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.8" />
  <text x="113" y="219" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#14532d">Motif &amp; Archetype</text>
  <text x="113" y="236" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">Recurring concrete images &amp;</text>
  <text x="113" y="250" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">universal mythic patterns</text>

  <!-- Bottom Centre: Writing Back -->
  <rect x="220" y="220" width="200" height="54" rx="10" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.8" />
  <text x="320" y="240" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#5b21b6">Revisionary Writing Back</text>
  <text x="320" y="257" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">Re-centres silenced / marginal voices</text>

  <!-- Bottom Right: Parody vs Pastiche -->
  <rect x="434" y="198" width="186" height="68" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="1.8" />
  <text x="527" y="219" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#92400e">Parody vs Pastiche</text>
  <text x="527" y="236" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">Parody: ironic critique of style</text>
  <text x="527" y="250" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">Pastiche: neutral / homage mosaic</text>
</svg>`,
      diagramCaption:
        "Intertextuality spans local allusions, whole-text structural blueprints, evolving motifs and archetypes, stylistic imitation (parody vs pastiche), and revisionary writing back.",
      workedExamples: [
        {
          title: "Unpacking an Ironic Mythic Allusion in Unseen Verse",
          problem:
            "Analyse how the mythic allusion functions in these unseen lines about a corporate executive departing a failing skyscraper:\n\n> *Wax-neat his collar, waxed his borrowed wings —*\n> *He rides the glass lift forty storeys high,*\n> *And signs off forecasts bright enough to blind,*\n> *While silent ledgers drizzle down the sky.*",
          steps: [
            "1. Identify the explicit mythic allusion: *borrowed wings* and *wax* evoke **Icarus**, whose hubris led him to fly too close to the sun despite his father Daedalus's warning.",
            "2. Examine the ironic transfer into contemporary corporate diction: *wax-neat his collar*, *glass lift*, and *forecasts* shrink classical tragic hubris into slick modern financial recklessness.",
            "3. Analyse the sensory consequence: *bright enough to blind* replaces the literal sun with self-deceptive corporate optimism, while *silent ledgers drizzle down* turns the Icarian plunge into falling spreadsheets and quiet institutional ruin.",
            "4. State the conceptual implication: the allusion elevates a mundane office scandal into an archetypal warning about hubris, while simultaneously exposing how modern corporate jargon tries to mask age-old arrogance.",
          ],
          answer:
            "By mapping the Icarus myth (*waxed*, *borrowed wings*) onto corporate imagery (*glass lift*, *forecasts*, *ledgers*), the speaker creates sharp ironic tension: timeless hubris wears a polished business collar, transforming an everyday financial collapse into an archetypal fall.",
          yourTurn: {
            question:
              "What critical term describes an affectionate or neutral stylistic imitation/patchwork of earlier literary styles *without* the mocking satirical distance of parody?",
            answer: {
              type: "text",
              accept: ["pastiche", "a pastiche"],
              display: "pastiche",
            },
            solution:
              "**Pastiche** imitates or blends earlier literary styles neutrally or affectionately (unlike **parody**, which mocks or critically undermines its target through ironic exaggeration).",
          },
        },
        {
          title: "Evaluating Revisionary Writing Back in a Dramatic Monologue",
          problem:
            "An unseen dramatic monologue gives voice to the unnamed ferryman from a famous heroic epic: *'You sang of his oar-strokes and bronze shield; nobody counted the coins that corroded my palms, nor the winter currents I rowed alone after his triumph moved on.'* How does this passage exemplify revisionary writing back?",
          steps: [
            "1. Identify the shift in perspective: a silent background figure (*the unnamed ferryman*) seizes direct first-person address (*You sang... nobody counted*).",
            "2. Analyse the contrast in diction: grand epic iconography (*bronze shield*, *triumph*) collides with visceral labour imagery (*coins that corroded my palms*, *winter currents*).",
            "3. Trace the dialogic critique: accusing the implied canonical poet (*You sang*) exposes how heroic narratives systematically erase working-class labour.",
            "4. Evaluate the retrospective effect: the monologue forces readers to re-evaluate the celebratory epic tradition as partial and class-biased.",
          ],
          answer:
            "By centring a previously unnamed labourer who directly confronts the canonical chronicler (*You sang*), the monologue juxtaposes epic glamour (*bronze shield*) with physical exhaustion (*corroded my palms*), exposing the class erasures embedded in heroic literature.",
        },
      ],
      whyItWorks:
        "Intertextual dialogue creates **double vision**: the reader holds the precursor text and the new text in mind simultaneously. Meaning sparks inside the gap between them — whether that gap produces tragic resonance, biting irony, or ethical re-examination of who got left out of literary history.",
      keyPoints: [
        "**Julia Kristeva & Mikhail Bakhtin:** Texts exist in constant *dialogic* exchange; no utterance is completely sealed off from earlier literary voices.",
        "**Explicit vs structural allusion:** Explicit allusions pack symbolic density into a single line or name; structural allusions shape an entire text's architecture.",
        "**Motif vs archetype:** Motifs recur as concrete textual patterns within/across works; archetypes are universal cross-cultural roles or plots.",
        "**Parody ≠ pastiche:** Parody packs a satirical or critical edge; pastiche borrows styles as tribute, atmosphere, or postmodern collage.",
        "**Writing back** (postcolonial, feminist, or class-conscious) reclaims silenced perspectives and permanently alters how we read the canonical precursor.",
      ],
      strategies: [
        "Never drop the word *allusion* without completing the **three-step chain**: *(1) Name the precursor echo → (2) Explain how the new text transforms or ironises it → (3) State the conceptual effect on the reader.*",
        "Check whether an allusion works by **elevation** (magnifying an ordinary moment), **deflation** (exposing petty hypocrisy against a grand ideal), or **resistance** (challenging the original's ideology).",
        "In your Learner Portfolio, keep a two-column Intertextuality Log pairing recurring motifs (mirrors, thresholds, storms, letters) across different works you study.",
      ],
      thinkDeeper:
        "What happens when a reader misses an allusion entirely? Does the text fail, or does it operate on layered levels — rewarding initiated readers with ironic depth while remaining emotionally intelligible to newcomers?",
    },

    // =========================================================================
    // SECTION 3: cross-form-connections
    // =========================================================================
    {
      id: "cross-form-connections",
      heading: "Comparing Across Eras, Cultures & Different Literary Forms",
      level: "SL",
      discovery: {
        problem:
          "Read two brief unseen moments exploring unspoken estrangement between siblings:\n\n- **Drama Extract:** *[CLARA sets two cups on opposite ends of the long wooden table. She wipes an invisible mark for five full seconds. TOM remains standing in the doorway, coat buttoned to the collar. Neither speaks.]*\n- **Prose Fiction Extract:** *Clara poured the tea with scrupulous politeness, noting — though she would never have admitted the arithmetic — that Tom had left three inches of polished oak between his elbow and her saucer, just as he had since their father's will was read.*\n\nBoth passages convey emotional distance, yet neither writer uses the same literary tools. What can the play do that the novel cannot, and vice versa?",
        idea:
          "The **drama extract** externalises estrangement through **visual staging, proxemics (physical distance across the table and doorway), symbolic props (a buttoned coat), and audible silence** — inviting the audience to infer subtext in real time. The **prose extract** penetrates private consciousness through **third-person limited focalisation and parenthetical irony** (*though she would never have admitted the arithmetic*), revealing backstory and repressed calculation directly. Comparing across forms means matching **medium-specific craft choices** rather than pretending both texts work identically.",
      },
      body: `One of the greatest strengths of IB English A: Literature is that you study works across **all four literary forms** (Drama, Poetry, Prose Fiction, Literary Non-Fiction), across **multiple historical periods**, and across **languages and cultures** (including mandatory works in translation).

Students often worry: *"How can I compare a seventeenth-century play with a twenty-first-century lyric collection, or a translated novella with a contemporary memoir?"* The secret is **functional equivalence across forms**: do not search for identical techniques — search for how **different medium-specific choices construct, complicate, or contest a shared human concern**.

### Cross-Form Craft Equivalence Map

| Shared Conceptual Concern | Drama (Stage Craft) | Prose Fiction (Narrative Craft) | Poetry (Lyric Craft) | Literary Non-Fiction (Rhetorical / Essay Craft) |
|---|---|---|---|---|
| **Psychological Entrapment** | Claustrophobic single-room set, dim lighting, blocked exits, tight proxemics. | Suffocating limited focalisation, circular temporal loops (*analepsis*), claustrophobic syntax. | Rigid fixed rhyme scheme (villanelle/sonnet), relentless end-stopping, tight metrical cage. | Constraining institutional anecdotes, recurring structural refrains, terse paratactic sentences. |
| **Unspoken Tension / Repression** | Subtext beneath polite dialogue, stage pauses, stichomythia, telling props. | Free indirect discourse, narrative ellipsis, unreliable omissions, understated irony. | Caesura, white space, broken syntax, half-rhyme refusing tidy harmonic closure. | Strategic silence, understatement, self-correcting retrospective commentary. |
| **Power & Perspective Shift** | Dramatic irony, solitary soliloquy vs public speech, spotlighting, upstage/downstage dominance. | Shifting focalisation across chapters, frame narratives, intrusive vs detached narrator. | Dramatic monologue persona, structural *volta* (turn), sudden shift in pronoun (*I → we*). | Rhetorical antithesis, shifting between experiencing self and wiser retrospective persona. |
| **Memory & Time** | Expressionist lighting shifts, ghostly entrances, overlapping sound cues. | Non-linear chronology (*analepsis* / *prolepsis*), pacing contrast (summary vs scene). | Tenses colliding across stanzas, rhythmic echoes, elegiac refrains. | Braided essay structure linking personal memory to archival or historical record. |

### Navigating Cross-Era & Cross-Cultural Comparison Safely

Comparing texts separated by centuries or continents demands intellectual care. Avoid two common traps:

1. **Anachronistic Flattening:** Do not assume that a pre-modern play and a contemporary novel share identical cultural definitions of *honour*, *freedom*, or *family*. Highlight how differing **contexts of production** shape the exact pressure placed on characters — for instance, how aristocratic kinship codes operate differently from postcolonial or neoliberal anxieties.
2. **Plot-Match Reduction:** Two texts do *not* need identical storylines to produce a dazzling comparison. A play about a collapsing household and a sequence of translated poems about ecological exile can generate extraordinary Paper 2 synthesis if both interrogate *how memory resists official erasure* — one through stage objects and domestic confrontation, the other through acoustic fragmentation and stark landscape imagery.
3. **Attending to Translation in Cross-Cultural Pairing:** When one work is a **work in translation**, remain alert to cultural idioms, historical register, and structural choices (imagery, narrative architecture, pacing, dialogue dynamics) rather than making fragile micro-claims about English-only rhymes or puns unless clearly supported by translator notes.

> **Examiner Benchmark (Paper 2 Criterion B):** Comparing *medium-specific craft* — explaining **why** a playwright uses a five-second stage silence to achieve what a novelist conveys through free indirect discourse — is one of the surest markers of a Band 5 comparative essay.`,
      diagram: `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing a cross-form craft bridge linking Drama, Prose Fiction, Poetry, and Literary Non-Fiction to a central shared conceptual focus via form-specific tools">
  <rect x="0" y="0" width="640" height="280" rx="14" fill="#ffffff" />
  <text x="320" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#241016">The Cross-Form Craft Bridge (Functional Equivalence)</text>

  <!-- Central Concept Pillar -->
  <rect x="218" y="106" width="204" height="68" rx="12" fill="#241016" />
  <text x="320" y="132" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#ffe4e6">SHARED CONCEPTUAL FOCUS</text>
  <text x="320" y="150" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#ffffff">e.g. Silenced Voice / Entrapment /</text>
  <text x="320" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#ffffff">Memory vs Institutional Power</text>

  <!-- Connectors -->
  <line x1="194" y1="84" x2="238" y2="112" stroke="#be123c" stroke-width="2" />
  <line x1="446" y1="84" x2="402" y2="112" stroke="#0369a1" stroke-width="2" />
  <line x1="194" y1="202" x2="238" y2="170" stroke="#15803d" stroke-width="2" />
  <line x1="446" y1="202" x2="402" y2="170" stroke="#b45309" stroke-width="2" />

  <!-- Top Left: Drama -->
  <rect x="18" y="44" width="186" height="72" rx="10" fill="#ffe4e6" stroke="#be123c" stroke-width="1.8" />
  <text x="111" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#881337">DRAMA (Staged)</text>
  <text x="111" y="81" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">Proxemics, lighting, props,</text>
  <text x="111" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">pauses, subtext, soliloquy</text>

  <!-- Top Right: Prose Fiction -->
  <rect x="436" y="44" width="186" height="72" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.8" />
  <text x="529" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#0c4a6e">PROSE FICTION (Narrated)</text>
  <text x="529" y="81" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">Focalisation, free indirect</text>
  <text x="529" y="96" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">discourse, pacing, analepsis</text>

  <!-- Bottom Left: Poetry -->
  <rect x="18" y="170" width="186" height="72" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.8" />
  <text x="111" y="190" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#14532d">POETRY (Compressed)</text>
  <text x="111" y="207" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">Lineation, caesura, volta,</text>
  <text x="111" y="222" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">metre, acoustic imagery</text>

  <!-- Bottom Right: Literary Non-Fiction -->
  <rect x="436" y="170" width="186" height="72" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="1.8" />
  <text x="529" y="190" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#92400e">NON-FICTION (Reflective)</text>
  <text x="529" y="207" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">Retrospective persona,</text>
  <text x="529" y="222" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">anecdote, rhetoric, register</text>

  <text x="320" y="264" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-style="italic" fill="#6b4c56">Do not force identical techniques — compare how distinct form-specific choices produce parallel or contrasting effects.</text>
</svg>`,
      diagramCaption:
        "Different literary forms reach shared conceptual concerns via medium-specific authorial choices: align the conceptual lens first, then contrast the form-specific craft.",
      workedExamples: [
        {
          title: "Comparing an Unseen Lyric Poem and an Unseen Memoir Extract",
          problem:
            "Compare how these two unseen extracts from different forms convey the fragility of family memory:\n\n- **Poem Extract:** *My mother's kitchen shrinks to three / cracked tiles — / a kettle's hiss, a hinge, a winter key.*\n- **Memoir Extract:** *Whenever I try to reconstruct our old flat on Harbour Road, I discover I am really describing a photograph taken in 1998 rather than the room itself; the plaster walls have quietly borrowed the sepia border of the print.*",
          steps: [
            "1. Establish the shared conceptual focus: both texts portray memory not as an intact archive, but as selective and eroding.",
            "2. Analyse the **poetry craft**: sharp enjambment (*three / cracked tiles*) and an isolated short line visually mimic spatial shrinkage, while sensory synecdoche (*kettle's hiss, hinge, winter key*) compresses an entire home into three austere acoustic/tactile fragments.",
            "3. Analyse the **memoir craft**: a self-conscious retrospective persona (*Whenever I try to reconstruct... I discover*) explicitly interrogates the act of remembering, using the extended visual metaphor of the *sepia border* bleeding onto *plaster walls* to expose how artefacts overwrite lived recall.",
            "4. Synthesise the cross-form contrast: whereas the poem *enacts* memory's erosion physically on the page through line breaks and stripped-down sensory fragments, the memoir *reflects analytically* on memory's unreliability through an essayistic persona catching itself in the act of mediation.",
          ],
          answer:
            "Both extracts portray domestic memory as incomplete, yet they exploit distinct form-specific tools: the lyric enacts erosion spatially through abrupt enjambment and sensory compression (*three / cracked tiles*), whereas the memoir relies on a self-aware retrospective persona to expose how photographs overwrite authentic recall (*sepia border*).",
          yourTurn: {
            question:
              "In drama analysis, what single technical noun refers to the meaningful physical distance and spatial arrangement between characters on stage?",
            answer: {
              type: "text",
              accept: ["proxemics", "proxemic"],
              display: "proxemics",
            },
            solution:
              "**Proxemics** describes how physical distance, positioning, and spatial boundaries between actors on stage communicate power, intimacy, or estrangement — often serving as Drama's visual counterpart to narrative psychic distance in Prose Fiction.",
          },
        },
        {
          title: "Avoiding Anachronism When Pairing Texts Across Eras",
          problem:
            "A student compares a nineteenth-century realist domestic play with a twenty-first-century speculative novella and writes: *'Both writers show women hated being trapped in marriage.'* How can this cross-era comparison be sharpened analytically?",
          steps: [
            "1. Spot the flattening: *'hated being trapped'* reduces both works to a generic thematic slogan and erases historical and formal differences.",
            "2. Differentiate historical pressure: in the realist play, legal and financial dependence is dramatised inside a drawing-room set where social respectability polices every gesture (comparable to Henrik Ibsen's *A Doll's House* [Example text — not a set text]).",
            "3. Contrast the speculative novella's mode: futuristic surveillance or distorted narrative framing externalises institutional control onto bodily or linguistic regulation.",
            "4. Rewrite as a nuanced cross-era synthesis honouring both context and form.",
          ],
          answer:
            "While both works interrogate gendered domestic confinement, the nineteenth-century realist play exposes economic and reputational entrapment through claustrophobic drawing-room staging and polite subtext, whereas the contemporary speculative novella defamiliarises institutional control through estranging focalisation and distorted world-building.",
        },
      ],
      whyItWorks:
        "Cross-form comparison sharpens your awareness of **medium specificity**. When you place a stage silence beside a poetic caesura or a prose ellipsis, you suddenly notice *why* each writer chose their medium — and your Criterion B evaluation moves effortlessly from feature-spotting to genuine artistic appraisal.",
      keyPoints: [
        "**Functional equivalence:** Pair *comparable dramatic/emotional effects* achieved through *form-specific devices*, not superficial plot twins.",
        "**Medium awareness:** Drama relies on live space, embodiment, sound, and subtext; Prose Fiction on focalisation, temporality, and psychic distance; Poetry on compression, sound, and lineation; Literary Non-Fiction on persona, rhetoric, and truth-claims.",
        "**Respect historical & cultural distance:** Explain how different contexts of production reshape the same human concern rather than flattening both texts into modern slogans.",
        "**Works in translation:** Ground comparative close reading in imagery, structure, register, narrative perspective, and cultural tension rather than English-only wordplay.",
      ],
      strategies: [
        "Build a **4-Form Craft Pairing Chart** in your Learner Portfolio before exams: pick 3 core themes (e.g. *silence*, *exile*, *power*) and map one medium-specific craft choice from each studied work.",
        "Use form-conscious nouns throughout your essay: say *the audience witnesses* (drama), *the reader tracks the focalised consciousness* (prose fiction), *the lyric lineation arrests the reader* (poetry), and *the essayist invites the reader* (non-fiction).",
        "In Paper 2, you are allowed to pair two works of the *same* form or *different* forms — if you choose different forms, explicitly turn that formal difference into an analytical asset.",
      ],
      thinkDeeper:
        "When a novel is adapted into a play or film, certain narrative tools (like free indirect discourse) vanish while new ones (lighting, silence, physical posture) emerge. What does this reveal about how literary form itself shapes the truths a text can tell?",
    },

    // =========================================================================
    // SECTION 4: comparative-synthesis-architecture
    // =========================================================================
    {
      id: "comparative-synthesis-architecture",
      heading: "Integrated Point-by-Point Comparative Architecture (Paper 2 Foundation)",
      level: "SL",
      discovery: {
        problem:
          "Imagine answering this Paper 2 prompt: *'Compare how two works you have studied use thresholds or borders to reveal characters' inner conflicts.'*\n\n- **Plan A (Block-by-Block):** Intro → Paragraph 1: Thresholds in Work 1 → Paragraph 2: More on Work 1 → Paragraph 3: Borders in Work 2 → Paragraph 4: More on Work 2 → Conclusion: *'In conclusion, both works use borders to show conflict.'*\n- **Plan B (Integrated Point-by-Point):** Intro with nuanced comparative thesis → Paragraph 1: Physical thresholds signalling social exclusion (Work 1 staging *whereas* Work 2 focalisation) → Paragraph 2: Crossing the border as illusion of freedom (Work 1 *analogously* mirrored yet darker in Work 2) → Paragraph 3: Refusing to cross — unresolved tension at the climax (Work 1 *conversely* diverges from Work 2) → Synthesis Conclusion.\n\nWhy does Plan B consistently outscore Plan A across IB Paper 2 Criteria A, B, and C?",
        idea:
          "**Plan A** produces two miniature single-text essays glued together by a hasty conclusion — forcing the examiner to wait halfway through the essay before any comparison happens (capping Criteria A, B, and C). **Plan B** organises every body paragraph around a **shared conceptual claim**, braiding both works together with precision connectives so comparison is **continuous, analytical, and evaluative** from opening line to conclusion.",
      },
      body: `Paper 2 (SL 35%, HL 25%; 1 hour 45 minutes; 30 marks: Criterion A 10, Criterion B 10, Criterion C 5, Criterion D 5) is a **closed-book comparative essay** on two studied works. More Paper 2 essays lose Band 5 marks through **weak structure** than through weak memory.

### Block-by-Block vs Integrated Point-by-Point Architecture

- **Why Block-by-Block ("Text A then Text B") Underperforms:** Writing 45 minutes on Text A followed by 45 minutes on Text B encourages plot narration, forces repetitive signposting (*"Similarly to Text A, which I discussed two pages ago..."*), and weakens comparative evaluation under Criteria A and B.
- **Why Integrated Point-by-Point Architecture Wins:** Each body paragraph is governed by a **conceptual tension or analytical angle** (never a character name or plot chapter). Inside each paragraph, you weave Text A and Text B together around specific authorial choices, illuminating how each work qualifies or complicates the other.

### The Band 5 Secret: Divergence Within Similarity

Average Paper 2 essays stop at **flat similarity**: *"Both Work A and Work B show that power corrupts."* Top-band essays unlock **divergence within similarity** — identifying a genuine shared conceptual ground, then dissecting the **crucial difference in craft, tone, context, or moral resolution** within that similarity:

> **Band 5 Comparative Thesis Frame:**
> *While both [Author A] and [Author B] mobilise [shared motif / tension] to interrogate [prompt concept], [Author A] deploys [form-specific craft A] to evoke [effect / stance A], whereas [Author B] subverts [form-specific craft B] to expose [contrasting or darker nuance B].*

### Precision Comparative Connectives Toolkit

Vague transitions (*"Also"*, *"On the other hand"*, *"In contrast"* used blindly) signal mechanical comparison. Select connectives that state the **exact logical relationship** between your two texts:

| Analytical Relationship | High-Precision Connectives | Example Analytical Pivot |
|---|---|---|
| **Divergence within Similarity** | *whereas, while, although, yet, even as* | *While both speakers invoke garden imagery to mourn lost innocence, Speaker A's lush rhythm longs for restoration, **whereas** Speaker B's clipped fragments accept permanence of ruin.* |
| **Direct Structural / Tonal Opposition** | *conversely, by contrast, in sharp counterpoint, inversely* | *Work A stages its climax inside a blazing public courtroom; **conversely**, Work B buries its decisive betrayal inside a whispered kitchen aside.* |
| **Parallel Craft Across Forms** | *analogously, correspondingly, in a parallel manoeuvre, similarly* | *Just as the playwright weaponises a ten-second silence to expose guilt, the novelist **analogously** inserts a jarring temporal ellipsis to mark unspoken trauma.* |
| **Intensification / Complication** | *moreover, pushing this critique further, radicalising this motif, nonetheless* | ***Pushing this critique further**, Work B refuses even the fleeting catharsis granted at Work A's conclusion, leaving the reader inside moral ambiguity.* |

### Anatomy of an Integrated Comparative Paragraph (**C-A-P-B-S**)

1. **Conceptual Topic Sentence (C):** Names a specific analytical claim answering the prompt and framing **both** works together (no plot summary!).
2. **Work A Close Craft Analysis (A):** Embeds a memorised micro-quotation or crisp structural/staging detail and evaluates its effect on the reader/audience.
3. **Precision Comparative Pivot (P):** Bridges directly to Work B using a calibrated connective (*whereas, analogously, conversely, pushing this further*) that states *how* the two choices relate.
4. **Work B Close Craft Analysis (B):** Evaluates Work B's parallel or contrasting medium-specific choice with equal analytical weight (maintaining ~50/50 balance).
5. **Comparative Synthesis Sentence (S):** Steps back to explain **why this similarity-with-difference matters** conceptually in relation to the exam prompt.`,
      diagram: `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Structural comparison diagram contrasting weak block-by-block Paper 2 essays in isolated silos against strong integrated point-by-point synthesis paragraphs">
  <rect x="0" y="0" width="640" height="280" rx="14" fill="#ffffff" />
  <text x="320" y="25" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#241016">Paper 2 Architecture: Block Silos vs Integrated Synthesis</text>

  <!-- LEFT PANEL: Weak Block -->
  <rect x="18" y="42" width="280" height="220" rx="12" fill="#fff7ed" stroke="#c2410c" stroke-width="1.8" />
  <text x="158" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#9a3412">WEAK: Block-by-Block Silos</text>

  <rect x="36" y="76" width="244" height="52" rx="8" fill="#fed7aa" stroke="#c2410c" stroke-width="1.2" />
  <text x="158" y="97" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#241016">Paragraphs 1–2: Work A Only</text>
  <text x="158" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#6b4c56">Isolated analysis; drifts into plot summary</text>

  <text x="158" y="143" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#c2410c">↓  ("Meanwhile, in Work B...")  ↓</text>

  <rect x="36" y="152" width="244" height="52" rx="8" fill="#fed7aa" stroke="#c2410c" stroke-width="1.2" />
  <text x="158" y="173" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#241016">Paragraphs 3–4: Work B Only</text>
  <text x="158" y="190" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#6b4c56">Forced back-references; tacked-on links</text>

  <rect x="36" y="216" width="244" height="32" rx="7" fill="#ffedd5" stroke="#c2410c" stroke-dasharray="4 3" />
  <text x="158" y="236" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#9a3412">Outcome: Fragmented Crit A/B/C</text>

  <!-- RIGHT PANEL: Strong Integrated -->
  <rect x="316" y="42" width="306" height="220" rx="12" fill="#f0fdf4" stroke="#15803d" stroke-width="2" />
  <text x="469" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#14532d">STRONG: Integrated Point-by-Point</text>

  <!-- Integrated Row 1 -->
  <rect x="332" y="76" width="274" height="44" rx="8" fill="#ffffff" stroke="#15803d" stroke-width="1.4" />
  <text x="469" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#14532d">Body 1 — Conceptual Angle 1</text>
  <text x="469" y="109" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">Work A craft  ⇄  whereas / analogously  ⇄  Work B craft</text>

  <!-- Integrated Row 2 -->
  <rect x="332" y="128" width="274" height="44" rx="8" fill="#ffffff" stroke="#15803d" stroke-width="1.4" />
  <text x="469" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#14532d">Body 2 — Conceptual Angle 2</text>
  <text x="469" y="161" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">Work A craft  ⇄  conversely / pushing further  ⇄  Work B</text>

  <!-- Integrated Row 3 -->
  <rect x="332" y="180" width="274" height="44" rx="8" fill="#ffffff" stroke="#15803d" stroke-width="1.4" />
  <text x="469" y="196" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#14532d">Body 3 — Climax / Nuanced Divergence</text>
  <text x="469" y="213" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#241016">Work A resolution  ⇄  yet / in counterpoint  ⇄  Work B</text>

  <rect x="332" y="232" width="274" height="22" rx="6" fill="#dcfce7" />
  <text x="469" y="247" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#14532d">Outcome: Sustained Band 5 Synthesis (A/B/C)</text>
</svg>`,
      diagramCaption:
        "Integrated point-by-point synthesis braids Work A and Work B inside every conceptual paragraph, sustaining comparative evaluation across Criteria A, B, and C.",
      workedExamples: [
        {
          title: "Upgrading a Flat Thesis into Divergence Within Similarity",
          problem:
            "Prompt: *'Compare how two works explore the tension between public duty and private desire.'*\n\nUpgrade this Band 2 student thesis:\n> *'Both Work A and Work B show that public duty conflicts with private desire, and the characters suffer because of it.'*",
          steps: [
            "1. Diagnose the weaknesses: the original merely repeats the prompt, names zero authorial craft choices, and flattens both works into an identical plot outcome (*characters suffer*).",
            "2. Identify the shared conceptual core: both works expose how public duty extracts an intimate psychological toll.",
            "3. Introduce form-specific craft and divergence: suppose Work A is a tragedy relying on stark public/private spatial staging and soliloquy, while Work B is a modernist novel deploying unreliable first-person retrospective narration.",
            "4. Construct a concise, arguable Band 5 comparative thesis using a precision concessive frame (*While both... whereas...*).",
          ],
          answer:
            "*While both works expose public duty as an intrusive force that fractures private longing, Play A dramatises this collision overtly through stark transitions between public courtrooms and solitary soliloquies, whereas Novel B internalises the conflict through restrained, self-deceiving retrospective narration that reveals how thoroughly the protagonist has policed his own desire.*",
          yourTurn: {
            question:
              "Which precision single-word comparative connective best completes this sentence to signal direct contrast inside a shared premise? 'While the play externalises guilt through stark stage lighting, ____ the novel buries remorse inside fragmented interior monologue.' (Type one word.)",
            answer: {
              type: "text",
              accept: ["conversely", "whereas", "however"],
              display: "conversely",
            },
            solution:
              "**Conversely** (or **whereas** / **however**, depending on clause punctuation; with *While...* already opening the sentence, **conversely** works cleanly as a contrastive adverb in the main clause!) signals a deliberate mirror-opposite artistic manoeuvre across the two works.",
          },
        },
        {
          title: "Evaluating Comparative Balance & Paragraph Architecture",
          problem:
            "Inspect this paragraph outline for a Paper 2 essay:\n- Topic sentence: *'Both writers use weather motifs to reflect grief.'*\n- Sentences 2–7: Detailed analysis of storm imagery in Play A (140 words).\n- Sentence 8: *'Similarly, Novel B also has rain when the grandfather dies.'* (11 words).\n\nIdentify two specific architectural flaws and state how to repair them.",
          steps: [
            "1. Diagnose Flaw 1 (Severe Imbalance): Play A receives ~93% of the paragraph's analytical space, reducing Novel B to a token one-sentence plot mention — damaging Criterion A (comparative depth) and Criterion B (evaluation of both authors' choices).",
            "2. Diagnose Flaw 2 (Superficial Similarity & Plot-Telling): The topic sentence and link (*also has rain*) treat weather as passive plot coincidence rather than contrasting how each author crafts atmosphere for distinct tonal effects.",
            "3. Repair Strategy: Give Novel B equal close-reading space (analysing its specific prose craft — e.g. muted cadence or sensory restraint around the rain), and pivot with a nuanced contrast (*whereas Play A weaponises thunder as theatrical catharsis, Novel B renders the steady drizzle in flat, paratactic prose to convey numbed emotional paralysis*).",
          ],
          answer:
            "Flaw 1: Extreme imbalance (token mention of Novel B); Flaw 2: Flat similarity relying on plot mention rather than craft evaluation. Repair by balancing analytical depth (~50/50) and pivoting via divergence within similarity to contrast Play A's theatrical tempest against Novel B's restrained prose atmosphere.",
        },
      ],
      whyItWorks:
        "IB Paper 2 rubrics explicitly reward **sustained, insightful comparison and contrast** across both Criterion A (interpretation of implications) and Criterion B (evaluation of authorial choices). When two texts sit side by side inside every conceptual paragraph, each text acts as a microscope on the other — exposing subtle stylistic decisions you would never notice reading either work alone.",
      keyPoints: [
        "**Integrated > Block-by-Block:** Organise every body paragraph around a *conceptual tension*, not a single text title.",
        "**Divergence within similarity:** Move past *'Both works show X'* into *'While both interrogate X, Author A achieves Y via [craft], whereas Author B complicates it toward Z via [craft].'*",
        "**C-A-P-B-S paragraph engine:** Conceptual claim → Work A craft → Precision comparative pivot → Work B craft → Synthesis back to the prompt.",
        "**50/50 equilibrium:** Give both works comparable depth, textual detail, and craft evaluation across the entire essay.",
        "**Zero plot-recap transitions:** Replace *'Now I will talk about Text B'* with logical connectives (*whereas, conversely, analogously, pushing this further*).",
      ],
      strategies: [
        "Spend **15 minutes planning** in Paper 2: draw a 3-row comparative matrix (*Conceptual Angle | Work A craft + micro-quote | Pivot connective | Work B craft + micro-quote*) before writing a single sentence.",
        "Test every topic sentence with the **Two-Work Check**: could a reader immediately tell *both* what conceptual argument you are making *and* how both texts engage with it?",
        "Memorise **8–12 ultra-short micro-quotations (2–6 words)** and **4–5 decisive structural/staging moments** per studied work so you can weave evidence seamlessly in a closed-book exam.",
      ],
      thinkDeeper:
        "Can an integrated comparative essay ever spend slightly more space on one work in Paragraph 1 and rebalance in Paragraph 2? Yes — flexible braiding works well as long as *every* body paragraph sustains active comparative interplay and the overall essay remains balanced 50/50.",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "What is Hans Robert Jauss's 'horizon of expectations'?",
        back: "The shared cultural and literary framework of genre rules, structural patterns, and tonal expectations that a reader brings to a text — against which adherence, parody, or subversion generates meaning.",
        level: "SL",
      },
      {
        front: "Distinguish genre adherence from genre subversion.",
        back: "Adherence fulfils established conventions to harness their familiar emotional/ritual power; subversion deliberately invokes and then overturns those expectations to unsettle assumptions and produce critique.",
        level: "SL",
      },
      {
        front: "Who coined the term 'intertextuality', and on whose theory of 'dialogism' did she build?",
        back: "Julia Kristeva (1966), building on Mikhail Bakhtin's concept of dialogism — the insight that every text absorbs, answers, and transforms prior voices and texts.",
        level: "SL",
      },
      {
        front: "What is the difference between explicit (local) allusion and structural allusion?",
        back: "Explicit allusion is a brief, targeted reference to a mythic, biblical, or literary source within a line or moment; structural allusion models an entire work's plot arc, cast, or architecture on a precursor text.",
        level: "SL",
      },
      {
        front: "How do parody and pastiche differ?",
        back: "Parody imitates a recognisable style or genre with ironic, mocking, or critical distance; pastiche imitates or collages earlier styles neutrally, playfully, or affectionately without satirical bite.",
        level: "SL",
      },
      {
        front: "What does postcolonial or feminist 'writing back' achieve?",
        back: "It re-imagines a canonical text from the viewpoint of a previously silenced or marginalised character, exposing ideological blind spots and permanently altering how readers interpret the original.",
        level: "SL",
      },
      {
        front: "Distinguish a motif from an archetype.",
        back: "A motif is a recurring concrete image, object, sound, or phrase inside/across texts that builds thematic meaning; an archetype is a universal cross-cultural character pattern, symbol, or mythic plot.",
        level: "SL",
      },
      {
        front: "What is an anti-Bildungsroman?",
        back: "A subversion of the traditional coming-of-age novel in which maturation brings disillusionment, halted growth, or self-erasing conformity rather than harmonious social integration.",
        level: "SL",
      },
      {
        front: "How does magical realism differ from pure fantasy?",
        back: "Magical realism weaves supernatural or impossible events matter-of-factly into recognisable historical and political reality, rather than constructing a sealed-off secondary fantasy world.",
        level: "SL",
      },
      {
        front: "What is 'functional equivalence' in cross-form comparison?",
        back: "Pairing two works of different literary forms around a shared conceptual effect achieved through medium-specific tools (e.g. a play's proxemics and silence beside a novel's free indirect discourse).",
        level: "SL",
      },
      {
        front: "What is proxemics in Drama analysis?",
        back: "The meaningful use of physical distance, positioning, and spatial boundaries between actors on stage to reveal intimacy, hierarchy, threat, or emotional alienation.",
        level: "SL",
      },
      {
        front: "Why does integrated point-by-point architecture outscore block-by-block essays on IB Paper 2?",
        back: "Braiding both works inside every conceptual paragraph sustains continuous comparison and evaluation across Criteria A, B, and C, avoiding two isolated single-text essays glued together at the end.",
        level: "SL",
      },
      {
        front: "What is 'divergence within similarity'?",
        back: "A Band 5 comparative strategy that establishes genuine common conceptual ground between two works, then analyses how their differing craft, tone, or context produce distinct or opposing effects.",
        level: "SL",
      },
      {
        front: "Give three precision connectives for direct contrast and two for cross-form parallel.",
        back: "Contrast: whereas, conversely, by contrast (or in counterpoint). Parallel: analogously, correspondingly (or similarly).",
        level: "SL",
      },
      {
        front: "What does the C-A-P-B-S integrated paragraph structure stand for?",
        back: "Conceptual topic sentence → Work A close craft analysis → Precision comparative pivot → Work B close craft analysis → Synthesis back to the prompt.",
        level: "SL",
      },
      {
        front: "How should you handle works in translation in a comparative essay?",
        back: "Focus close reading on resilient textual features (imagery, structure, register, narrative focalisation, cultural idioms, dialogue dynamics) rather than fragile English-only puns or rhymes.",
        level: "SL",
      },
    ],
    mustKnow: [
      "No literary text exists in isolation: AoE 3 examines how works adhere to, stretch, parody, invert, or talk back to literary traditions and precursor texts.",
      "Jauss's **horizon of expectations** explains why genre subversion packs emotional and intellectual force — the reader must feel the pull of the convention being broken.",
      "Always differentiate **explicit (local) allusion** from **structural allusion**, and **parody** (critical/ironic imitation) from **pastiche** (neutral/affectionate imitation).",
      "Revisionary **writing back** (postcolonial, feminist, class-conscious) does not merely spin off a canonical plot; it interrogates the precursor text's silences and reshapes how we read the original.",
      "Cross-form comparison compares **medium-specific craft choices** (Drama: staging/proxemics/subtext; Prose: focalisation/temporality; Poetry: lineation/volta/sound; Non-Fiction: persona/rhetoric) serving a shared conceptual concern.",
      "On Paper 2 (30 marks: A10, B10, C5, D5), **integrated point-by-point architecture** beats block-by-block ('Text A then Text B') essays across Criteria A, B, and C.",
      "Top-band comparison relies on **divergence within similarity** — moving beyond *'Both texts show X'* to contrast *how* and *to what different effect* each writer shapes X.",
      "Maintain balanced **50/50 attention** to both studied works throughout Paper 2 and the Individual Oral — never relegate Work B to a hasty afterthought.",
      "Anachronism trap: comparing works from different eras requires acknowledging how distinct **contexts of production** redefine concepts like honour, autonomy, or exile.",
      "Memorise **short micro-quotations (2–6 words)** and **key structural/staging moments** for Paper 2 closed-book synthesis rather than long blocks of text.",
    ],
    misconceptions: [
      {
        wrong: "Intertextuality only counts when one author explicitly quotes or names another famous book.",
        right: "Intertextuality also operates through structural allusions, shared archetypes, genre conventions, subversive inversions, parody, pastiche, and implicit dialogue with literary traditions.",
        level: "SL",
      },
      {
        wrong: "Parody and pastiche mean the exact same thing: copying another writer's style.",
        right: "Parody imitates with ironic, satirical, or mocking critical distance, whereas pastiche borrows or blends earlier styles neutrally or affectionately as homage or collage.",
        level: "SL",
      },
      {
        wrong: "You can only compare two works effectively on Paper 2 if they come from the same literary form and historical era.",
        right: "Comparing across different forms and eras often yields sharper Criterion B evaluation because contrasting medium-specific tools (e.g. stage silence vs free indirect discourse) highlights deliberate authorial craft.",
        level: "SL",
      },
      {
        wrong: "Writing two paragraphs on Work A followed by two paragraphs on Work B is a safe, high-scoring Paper 2 structure.",
        right: "Block-by-block essays isolate the two works, trigger plot summary, and weaken comparative synthesis — capping marks in Criteria A, B, and C compared with integrated point-by-point structure.",
        level: "SL",
      },
      {
        wrong: "Strong comparison means proving that two works have the exact same message.",
        right: "Band 5 comparative essays uncover **divergence within similarity**: showing how two works explore a shared tension via sharply different craft choices, tones, or conclusions.",
        level: "SL",
      },
      {
        wrong: "Spotting a mythic or biblical allusion earns full marks on its own.",
        right: "Identifying the source is only Step 1; you must analyse how the new text transforms, elevates, or ironises that allusion to shape meaning for the reader.",
        level: "SL",
      },
      {
        wrong: "Subverting a genre means ignoring all of its rules from the very first sentence.",
        right: "Effective subversion invokes recognisable conventions first to establish the reader's horizon of expectations, then overturns them so the rupture creates sharp interpretive shock.",
        level: "SL",
      },
    ],
    examMistakes: [
      "**The 'Two Mini-Essays' Trap (Paper 2):** Writing half the exam on Work A and half on Work B with only a brief linking sentence in the conclusion — severely limiting Criteria A, B, and C.",
      "**Vague Similarity Slogans:** Opening paragraphs with *'Both texts explore power'* instead of framing a specific, arguable tension with divergence within similarity.",
      "**Technique-Mismatching Across Forms:** Analysing a play as if it were a novel (ignoring staging, lighting, proxemics, and audience reception) or analysing a lyric poem purely as prose plot.",
      "**Unbalanced Weighting (70/30 Split):** Spending far longer on a favourite work while relegating the second work to brief, underdeveloped tacked-on mentions.",
      "**Mechanical Connective Abuse:** Dropping *'Similarly'* or *'On the other hand'* between unrelated sentences instead of using precision connectives (*whereas, analogously, conversely*) that clarify the craft link.",
      "**Allusion Name-Dropping Without Analysis:** Writing *'This alludes to the Garden of Eden'* and moving straight on without evaluating the ironic or thematic friction created.",
      "**Anachronistic Cultural Flattening:** Treating a seventeenth-century text and a twenty-first-century text as though they emerged from identical social norms.",
      "**Long Block Quotations in Paper 2:** Trying to recite long passages from memory instead of embedding crisp 2–6 word micro-quotations and vivid structural/staging moments.",
    ],
    mnemonics: [
      {
        topic: "Integrated Comparative Paragraph Engine",
        device: "C-A-P-B-S",
        explanation:
          "**C**onceptual claim (both texts) → Work **A** craft & effect → **P**recision connective pivot → Work **B** craft & effect → **S**ynthesis answering the prompt.",
        level: "SL",
      },
      {
        topic: "Five Intertextual Moves",
        device: "A-S-M-P-W (Always Spot Meaningful Precursor Links — Wait: Allusion, Structure, Motif, Parody/Pastiche, Writing Back)",
        explanation:
          "Check every AoE 3 passage for **A**llusion (explicit), **S**tructural blueprint, **M**otif/archetype, **P**arody vs pastiche, and **W**riting back.",
        level: "SL",
      },
      {
        topic: "Band 5 Thesis Formula",
        device: "W-W-W (While — Whereas — Why)",
        explanation:
          "**While** both texts share [conceptual tension], Work A uses [craft A] to create [effect A], **whereas** Work B uses [craft B] to create [effect B] — revealing **Why** their visions diverge.",
        level: "SL",
      },
      {
        topic: "Three-Step Allusion Analysis",
        device: "N-T-E (Name → Transform → Effect)",
        explanation:
          "**N**ame the precursor echo → show how the author **T**ransforms/ironises it → evaluate its conceptual **E**ffect on the reader.",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Modern Cinema & Streaming Re-imaginings",
        detail:
          "Contemporary films and prestige dramas constantly rewire classical tragedy, noir, and fairy-tale archetypes — from updating Jacobean succession struggles into modern media boardrooms to inverting Gothic haunted houses into psychological thrillers.",
        emoji: "🎬",
      },
      {
        title: "Postcolonial Literature Reclaiming the Archive",
        detail:
          "Across Caribbean, African, South Asian, and Indigenous literatures, writers deploy revisionary writing back to contest colonial histories, translating inherited imperial forms (the English sonnet or Victorian realist novel) into instruments of cultural self-determination.",
        emoji: "🌍",
      },
      {
        title: "Hip-Hop Sampling & Musical Intertextuality",
        detail:
          "Just as literary texts layer allusions and pastiche, hip-hop producers sample soul, jazz, or classical bars — turning a familiar musical hook into ironic commentary, homage, or political critique depending on the new lyrics layered above it.",
        emoji: "🎧",
      },
      {
        title: "Global News & Mythic Framing",
        detail:
          "Journalists, speechwriters, and essayists routinely invoke mythic and biblical allusions ('Pandora's box', 'Trojan horse', 'Icarus moment') to compress complex geopolitical or technological crises into instantly recognisable moral narratives.",
        emoji: "📰",
      },
      {
        title: "Architectural Pastiche vs Radical Subversion",
        detail:
          "Postmodern cities place classical columns alongside glass towers — illustrating the same spectrum between nostalgic pastiche, playful irony, and structural subversion that operates in literature.",
        emoji: "🏛️",
      },
    ],
    videos: [
      {
        title: "IB English A Literature: Area of Exploration 3 — Intertextuality Explained",
        channel: "IB English Guys",
        url: "https://www.youtube.com/results?search_query=IB+English+Literature+Intertextuality+Area+of+Exploration+3",
      },
      {
        title: "IB Paper 2 Comparative Essay Structure: Integrated Point-by-Point Mastery",
        channel: "IB English Guys",
        url: "https://www.youtube.com/results?search_query=IB+English+Literature+Paper+2+comparative+structure+point+by+point",
      },
      {
        title: "Allusion, Parody, Pastiche & Postcolonial Writing Back in Literature",
        channel: "CrashCourse Literature / Literary Theory",
        url: "https://www.youtube.com/results?search_query=intertextuality+allusion+parody+pastiche+writing+back+literature",
      },
      {
        title: "Jauss's Horizon of Expectations & Genre Subversion",
        channel: "Literary Theory Overview",
        url: "https://www.youtube.com/results?search_query=Hans+Robert+Jauss+horizon+of+expectations+genre+subversion",
      },
    ],
    formulas: [
      {
        name: "Band 5 Divergence-Within-Similarity Thesis",
        formula:
          "While both [Work A] and [Work B] explore [shared tension], [Author A] deploys [form-specific craft A] to evoke [effect A], whereas [Author B] uses [form-specific craft B] to complicate/subvert [effect B].",
        note: "Sets up integrated Paper 2 comparison from sentence one.",
        level: "SL",
      },
      {
        name: "Genre Subversion Analytical Frame",
        formula:
          "By initially activating the [genre] horizon of expectations through [convention], [Author] intensifies the shock when [subversive choice] overturns [assumed value], compelling the reader to [interpretive critique].",
        note: "Turns genre spotting into Band 5 Criterion B evaluation.",
        level: "SL",
      },
      {
        name: "Three-Step Allusion Formula (N-T-E)",
        formula:
          "[Image/line] alludes to [precursor myth/text], yet [Author] ironises/transforms this echo by [shift in diction/context], thereby exposing [conceptual implication].",
        note: "Prevents empty 'this is an allusion' annotation.",
        level: "SL",
      },
      {
        name: "Revisionary Writing-Back Frame",
        formula:
          "Re-centring [marginalised figure] against the silences of [canonical tradition], [Author] destabilises [dominant ideology] and forces a retrospective re-reading of [archetype/convention].",
        note: "Ideal for postcolonial, feminist, and class-conscious intertextual dialogue.",
        level: "SL",
      },
      {
        name: "Cross-Form Functional Equivalence Frame",
        formula:
          "Whereas [Playwright/Poet] externalises [inner state] through [stage/lyric craft], [Novelist/Memoirist] analogously renders [parallel tension] via [narrative/rhetorical craft], demonstrating how medium shapes meaning.",
        note: "Unlocks top marks when comparing different literary forms.",
        level: "SL",
      },
      {
        name: "Integrated Paragraph Architecture (C-A-P-B-S)",
        formula:
          "Conceptual Topic Claim → Work A Micro-Evidence + Craft Effect → Precision Connective Pivot → Work B Micro-Evidence + Craft Effect → Evaluative Prompt Synthesis",
        note: "Eliminates block-by-block silos on Paper 2.",
        level: "SL",
      },
      {
        name: "Precision Contrastive Pivot Bank",
        formula: "whereas | conversely | by contrast | in sharp counterpoint | inversely | yet",
        note: "Signals deliberate divergence in craft, tone, or moral resolution.",
        level: "SL",
      },
      {
        name: "Precision Analogical & Escalating Pivot Bank",
        formula: "analogously | correspondingly | in a parallel manoeuvre | pushing this critique further | radicalising this motif",
        note: "Signals cross-form parallels or deeper ideological intensification.",
        level: "SL",
      },
      {
        name: "Motif Evolution Formula",
        formula:
          "Across [Work], the recurring motif of [concrete object/image] mutates from [early connotation] to [late connotation], charting [character/thematic transformation].",
        note: "Shows dynamic structural progression rather than static symbol labelling.",
        level: "SL",
      },
      {
        name: "Paper 2 Time & Weighting Blueprint",
        formula: "15 min comparative matrix plan + 80 min integrated writing (50/50 text balance) + 10 min precision proofread = 105 min (30 marks: A10 / B10 / C5 / D5)",
        note: "Standard SL & HL Paper 2 examination workflow.",
        level: "SL",
      },
    ],
  },
};
