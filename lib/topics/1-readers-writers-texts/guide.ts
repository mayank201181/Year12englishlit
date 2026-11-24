import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "1-readers-writers-texts",
  title: "AoE 1: Readers, Writers & Texts",
  strand: "Areas of Exploration",
  icon: "📖",
  level: "SL",
  summary:
    "Master the core craft of IB Diploma English A: Literature: close reading of authorial choices, voice, irony, productive ambiguity, active reader response, and strategic Learner Portfolio design.",
  intro:
    "Area of Exploration 1 (**Readers, Writers & Texts**) is the foundation of the entire IB Diploma English A: Literature course (SL & HL, First Assessment 2021). Before you compare two novels on Paper 2, deliver your Individual Oral, or craft a 1,500-word HL Essay, you must learn to read like a literary architect — asking not merely *what happens*, but *how* every word, pause, image, silence, and narrative mask invites readers to co-construct meaning. Because IB Literature is strictly non-prescriptive, every framework in this guide is 100% transferable to whatever 9 (SL) or 13 (HL) works sit in your personal syllabus; any published title cited for illustration is stamped `[Example text — not a set text]`.",
  guide: [
    // =========================================================================
    // SECTION 1: close-reading-meaning
    // =========================================================================
    {
      id: "close-reading-meaning",
      heading: "How Literary Meaning Is Constructed: Authorial Choices Over Plot Summary",
      level: "SL",
      discovery: {
        problem:
          "Read these two original sentences describing the exact same event:\n\n> (A) *After the funeral, Mira walked into her father's study and threw away his old letters.*\n> (B) *After the service, Mira crossed the threshold of her father's study, lifted the twine-bound letters one by one, and fed their brittle edges to the grate.*\n\nBoth sentences report the same plot event. Why does (B) feel charged with ritual, hesitation, and erasure whereas (A) reads like a police log?",
        idea:
          "Literary meaning lives in **authorial choices**, not bare plot facts. In (B), the spatial diction (*crossed the threshold*) frames entry as transgression; the deliberate paratactic sequence (*lifted … one by one … fed*) slows narrative tempo; the tactile adjective *brittle* transfers fragility from paper to memory; and the verb *fed* personifies the fire as an appetite. Close reading traces *how* those choices generate emotional and conceptual tension.",
      },
      body: `In IB English A: Literature, the single fastest way to separate a **Band 2–3** essay from a **Band 5** essay is moving from **what happens** (plot summary) and **what device is present** (technique-spotting) to **how specific authorial choices construct nuanced meaning**.

### The Three-Tier Ladder of Literary Commentary
Examiners marking Criterion A (*Knowledge, Understanding & Interpretation*) and Criterion B (*Analysis & Evaluation*) immediately recognise which rung a paragraph occupies:

| Tier | Typical Student Move | Example Sentence (on Passage B above) | IB Ceiling |
| :--- | :--- | :--- | :--- |
| **1. Plot Summary** | Retells events as if the characters were real people acting on their own. | *Mira goes into her father's study after the funeral and burns his letters.* | Band 1–2 |
| **2. Technique-Spotting** | Names a device without explaining *how* it works or *why* it matters. | *The writer uses imagery and personification in “fed their brittle edges to the grate” to create a vivid image.* | Band 2–3 |
| **3. Evaluative Close Reading** | Links **authorial choice → linguistic mechanism → conceptual effect**. | *By pairing the ceremonial rhythm of “one by one” with the predatory verb “fed”, the writer recasts grief not as passive loss but as an intentional, almost sacrificial erasure of paternal memory.* | Band 5 |

### Five High-Leverage Authorial Choices to Track in Any Unseen Text
Whenever you open an unseen Paper 1 passage or annotate a ≤40-line Individual Oral extract, interrogate five concrete craft levers:

1. **Diction & Connotation:** Look beyond dictionary meaning (*denotation*) to associative charge (*connotation*), register (clinical vs colloquial vs archaic), and recurring **semantic fields** (e.g. legal, botanical, liturgical, or anatomical vocabulary clustered in one paragraph).
2. **Syntax & Pacing:** Notice sentence length and grammatical architecture. **Parataxis** (short, unsubordinated clauses joined by commas or *and*) can convey breathless urgency, shock, or numbed restraint; **hypotaxis** (nested subordinate clauses) often mirrors obsessive self-justification or tangled memory. Watch for **inversion**, **fragments**, and **punctuation pauses** (dashes, semicolons, colons).
3. **Figurative Imagery & Sensory Texture:** Track metaphor, simile, metonymy, synecdoche, and concrete sensory detail — especially when an image mutates across an extract (e.g. light shifting from warm lantern glow to harsh fluorescent glare).
4. **Structural Juxtaposition:** Meaning frequently sparks in the *collision* between two neighbouring elements — a lavish wedding banquet placed immediately beside an eviction notice, or a tender memory interrupted by a bureaucratic checklist.
5. **Omission & Silence:** What a text *refuses* to name can carry heavier weight than what it states. Ellipses, abrupt topic shifts, unnamed grief, or unanswered dialogue force the reader to sense the unspoken weight beneath the surface.

### Seamless Micro-Quotation Embedding
Long, unanalysed block quotes waste exam minutes and interrupt your argument. Top-band IB essays weave **micro-quotations (1–6 words)** grammatically into their own analytical sentences:

> **Clunky “dropped” quote:** *The narrator feels alienated in the room. “The brass clock ticked like a magistrate tapping a pencil against a ledger.” This shows she feels judged.*
> **Seamless embedded quote:** *Comparing the clock's rhythm to “a magistrate tapping a pencil” transforms domestic silence into a courtroom, casting time itself as an impersonal judge auditing the narrator's guilt.*

Notice three upgrades in the second version: (1) the quote sits naturally inside the syntax of the sentence; (2) no empty filler phrase (*“This shows”*); (3) the verb *transforms* attributes agency to the writer's craft rather than treating the room as a real photograph.`,
      diagram: `<svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart comparing the Band 5 IB Close-Reading Engine (Textual Detail to Authorial Choice to Mechanism to Conceptual Effect) against the Band 2 dead end of Plot Summary and Technique-Spotting">
  <rect x="0" y="0" width="640" height="310" rx="14" fill="#fdf8f8" />
  <text x="320" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">The IB Close-Reading Engine (Criteria A &amp; B)</text>
  <!-- Top Band 5 Pipeline -->
  <rect x="20" y="52" width="132" height="86" rx="10" fill="#ffffff" stroke="#be123c" stroke-width="2" />
  <text x="86" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#be123c">1. MICRO-EVIDENCE</text>
  <text x="86" y="95" text-anchor="middle" font-size="10.5" fill="#241016">Embedded quote</text>
  <text x="86" y="111" text-anchor="middle" font-size="10.5" fill="#241016">(1–6 words), pause,</text>
  <text x="86" y="127" text-anchor="middle" font-size="10.5" fill="#241016">juxtaposition, gap</text>

  <line x1="152" y1="95" x2="174" y2="95" stroke="#be123c" stroke-width="2.5" />
  <polygon points="174,90 183,95 174,100" fill="#be123c" />

  <rect x="184" y="52" width="132" height="86" rx="10" fill="#ffe4e6" stroke="#be123c" stroke-width="2" />
  <text x="250" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#881337">2. AUTHORIAL CHOICE</text>
  <text x="250" y="95" text-anchor="middle" font-size="10.5" fill="#241016">Exact craft move:</text>
  <text x="250" y="111" text-anchor="middle" font-size="10.5" fill="#241016">parataxis, semantic</text>
  <text x="250" y="127" text-anchor="middle" font-size="10.5" fill="#241016">field, omission</text>

  <line x1="316" y1="95" x2="338" y2="95" stroke="#0d9488" stroke-width="2.5" />
  <polygon points="338,90 347,95 338,100" fill="#0d9488" />

  <rect x="348" y="52" width="132" height="86" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="2" />
  <text x="414" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#0d9488">3. MECHANISM</text>
  <text x="414" y="95" text-anchor="middle" font-size="10.5" fill="#241016">How language acts:</text>
  <text x="414" y="111" text-anchor="middle" font-size="10.5" fill="#241016">compresses pace,</text>
  <text x="414" y="127" text-anchor="middle" font-size="10.5" fill="#241016">inverts register</text>

  <line x1="480" y1="95" x2="502" y2="95" stroke="#15803d" stroke-width="2.5" />
  <polygon points="502,90 511,95 502,100" fill="#15803d" />

  <rect x="512" y="52" width="110" height="86" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2" />
  <text x="567" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">4. EFFECT</text>
  <text x="567" y="95" text-anchor="middle" font-size="10.5" fill="#241016">Psychological,</text>
  <text x="567" y="111" text-anchor="middle" font-size="10.5" fill="#241016">thematic, or</text>
  <text x="567" y="127" text-anchor="middle" font-size="10.5" fill="#241016">conceptual stake</text>

  <rect x="200" y="152" width="240" height="24" rx="12" fill="#15803d" />
  <text x="320" y="168" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">BAND 5: Evaluative Literary Analysis</text>

  <!-- Bottom Trap Box -->
  <line x1="40" y1="194" x2="600" y2="194" stroke="#ebd8de" stroke-width="1.5" stroke-dasharray="5,4" />
  <rect x="46" y="210" width="256" height="80" rx="10" fill="#ffedd5" stroke="#c2410c" stroke-width="1.8" />
  <text x="174" y="232" text-anchor="middle" font-size="11" font-weight="800" fill="#c2410c">TRAP 1: Plot Summary (Band 1–2)</text>
  <text x="174" y="252" text-anchor="middle" font-size="10.5" fill="#241016">Retells “what happens next” without</text>
  <text x="174" y="268" text-anchor="middle" font-size="10.5" fill="#241016">examining language, form, or perspective.</text>

  <rect x="338" y="210" width="256" height="80" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="1.8" />
  <text x="466" y="232" text-anchor="middle" font-size="11" font-weight="800" fill="#b45309">TRAP 2: Feature-Spotting (Band 2–3)</text>
  <text x="466" y="252" text-anchor="middle" font-size="10.5" fill="#241016">Names a device + generic cliché</text>
  <text x="466" y="268" text-anchor="middle" font-size="10.5" fill="#241016">(“creates imagery / draws the reader in”).</text>
</svg>`,
      diagramCaption:
        "Every analytical sentence should travel left-to-right across all four stages rather than stalling in plot summary or empty feature-spotting.",
      workedExamples: [
        {
          title: "Upgrading a Draft Sentence on an Unseen Prose Extract",
          problem:
            "Consider this original unseen prose extract:\n\n> *Every Sunday he polished the silver trophy until his own forehead warped across its bowl. He never opened the drawer beneath it, where the surgeon's final invoice lay folded into a neat, yellowing triangle.*\n\nA student writes: *“The writer uses imagery to show that the man cleans his trophy every Sunday and avoids looking at his medical bill, which makes the reader feel sad.”*\n\nTransform this Band 2 sentence into a Band 5 close-reading point.",
          steps: [
            "Spot the micro-evidence: the distorting verb *“warped”*, the absolute adverb *“never”*, and the juxtaposition between the polished *“silver trophy”* above and the hidden *“yellowing triangle”* of the *“surgeon's final invoice”* beneath.",
            "Name the authorial choices precisely: **spatial juxtaposition**, **visual distortion imagery**, and **symbolic omission/concealment**.",
            "Trace the mechanism: placing the gleaming trophy directly above the concealed invoice creates a physical hierarchy between public triumph and private bodily failure; *“warped”* suggests his obsession with past glory literally deforms his self-perception.",
            "Articulate the conceptual effect using embedded micro-quotations and active analytical verbs (*contrasts, recasts, exposes*).",
          ],
          answer:
            "Through stark spatial juxtaposition, the writer contrasts the ritually polished “silver trophy” above with the hidden, “yellowing” invoice beneath, exposing how curated nostalgia conceals physical decline. That the man's own forehead is “warped across its bowl” subtly implies that clinging to past triumph distorts rather than restores his identity.",
          yourTurn: {
            question:
              "In the extract above, what single literary term best describes placing the polished silver trophy directly above the concealed medical invoice to generate contrast? (One word.)",
            answer: {
              type: "text",
              accept: ["juxtaposition", "spatial juxtaposition", "contrast"],
              display: "juxtaposition",
            },
            solution:
              "Placing two contrasting images or realities side by side (here vertically: gleaming trophy above yellowing invoice) so each sharpens the meaning of the other is **juxtaposition**.",
          },
        },
      ],
      keyPoints: [
        "Plot summary treats a text as a transparent window onto real events; IB close reading treats a text as a **crafted artefact** shaped by deliberate authorial decisions.",
        "Follow the **C-M-E Engine**: **Authorial Choice → Mechanism → Conceptual Effect**.",
        "Embed **1–6 word micro-quotations** grammatically inside your own claims instead of dropping whole sentences followed by *“This shows…”*.",
        "Never overlook **omission, silence, and syntax** — what is withheld or grammatically compressed is often as revealing as ornate figurative language.",
      ],
      whyItWorks:
        "IB Criterion B rewards *evaluation of how features shape meaning*, not an inventory of literary vocabulary. When you explain *how* a semantic field, syntactic break, or spatial juxtaposition alters a reader's emotional or ethical footing, you prove you understand literature as constructed art rather than summarised storyline.",
      strategies: [
        "Run the **Subject-Verb Audit** on your own paragraphs: if your sentence subjects are mostly character names (*Mira walked… He felt…*), rewrite them with the writer or craft move as subject (*By fracturing the syntax… The writer's clinical diction…*).",
        "Ban generic effect clichés — *“creates imagery”*, *“makes the reader want to read on”*, *“emphasises the point”* — and replace them with precise verbs (*destabilises, ironises, domesticates, sanctifies, fractures, compresses*).",
        "Annotate unseen passages in **two quick passes**: Pass 1 for surface arc and central tension; Pass 2 for recurring diction, syntactic anomalies, structural turns, and omissions.",
      ],
      thinkDeeper:
        "Can a writer's *simplest*, most stripped-back sentence (zero metaphors, plain monosyllables) be just as stylistically rich as an ornate passage? Consider how plainness itself operates as an authorial choice in minimalist prose or stark lyric poetry.",
    },

    // =========================================================================
    // SECTION 2: voice-tone-ambiguity
    // =========================================================================
    {
      id: "voice-tone-ambiguity",
      heading: "Narrative Voice, Tone, Irony & Productive Ambiguity",
      level: "SL",
      discovery: {
        problem:
          "Read this original four-line dramatic monologue fragment:\n\n> *I bought her the quietest room in the wing,*\n> *with shutters that latch from the corridor side.*\n> *People who whisper of cruelty never* \n> *had to keep a bright bird from the glass.*\n\nDoes the speaker believe they are cruel — and do *we* agree with the speaker? How does the poet make two opposite moral realities occupy the exact same sentence?",
        idea:
          "The **speaker** frames confinement as protective tenderness (*“keep a bright bird from the glass”*), yet the chilling architectural detail — *“shutters that latch from the corridor side”* — lets the **author** signal captivity behind the speaker's self-justifying mask. Separating **speaker** from **author** unlocks irony and psychological complexity.",
      },
      body: `One of the sharpest hallmarks of mature IB literary analysis is refusing to collapse the **speaker or narrator** into the **real author**. Authors regularly invent unreliable, self-deceiving, pompous, naive, or morally compromised voices precisely so the gap between what the voice *claims* and what the text *exposes* generates critical energy.

### Separating Author, Implied Author, and Speaker / Narrator
* **Real Author:** The historical human being who wrote the work (whose private opinions you cannot simply guess from a fictional scene).
* **Implied Author:** The artistic intelligence inferred from the text's overall design — its structural ironies, juxtapositions, and patterns of sympathy or critique.
* **Narrator / Poetic Speaker / Persona:** The constructed voice speaking inside the text. In a novel, drama, or lyric poem (such as Robert Browning's dramatic monologues \`[Example text — not a set text]\`), the speaker may boast, rationalise, or misremember while the text quietly undercuts their credibility.

### Tracking Tone & Tonal Shifts
**Tone** is the voice's discernible attitude toward its subject, audience, or itself — *never* a vague one-word emotion like “sad” or “happy”. Build a nuanced tonal lexicon and always watch for **tonal shifts** (pivots where a voice fractures or reverses):

| Tonal Family | Precise IB Adjectives | Typical Stylistic Markers |
| :--- | :--- | :--- |
| **Grief & Memory** | *elegiac, wistful, plangent, stoic, restrained* | Soft cadences, sensory absences, measured understatement |
| **Critique & Distance** | *sardonic, caustic, wry, clinical, detached, satirical* | Crisp antithesis, inflated diction applied to trivial acts, dry litotes |
| **Awe & Intensity** | *reverent, impassioned, urgent, feverish, foreboding* | Elevated lexicon, anaphora, breathless enjambment or rising clauses |
| **Self-Protection** | *defensive, evasive, conciliatory, brisk, self-mocking* | Parenthetical qualifiers, abrupt pivots, euphemism, shifting pronouns |

> **Exam Gold:** A single passage rarely holds one flat tone from line 1 to line 35. Mapping a **tonal arc** — for instance, from *brisk administrative composure* to *fractured vulnerability* — immediately gives your Paper 1 essay a conceptual progression!

### The Three Modes of Literary Irony
Irony always arises from a **structural gap** between surface and depth:
1. **Verbal Irony:** A speaker says one thing while signalling the opposite (or an undercut meaning) through phrasing, understatement, or mismatched register — e.g. calling a leaking cellar *“our subterranean estate”*. (Note: sarcasm is a sharp, mocking subset of verbal irony, but verbal irony can also be gentle, tragic, or understated.)
2. **Situational Irony:** An outcome starkly reverses what characters or readers were led to expect — e.g. a locksmith spending thirty years fortifying his home only to lock himself outside during a storm.
3. **Dramatic Irony:** The audience or reader possesses crucial knowledge that a character lacks, charging ordinary lines with dread or pathos (classic in tragedy such as Sophocles's *Oedipus Rex* \`[Example text — not a set text]\`, or whenever a narrator misreads a clue the reader has already caught).

### Embracing Productive Ambiguity
Weak essays hunt for a tidy moral lesson (*“Therefore, the poem teaches us that greed is bad”*). **Top-band IB essays embrace productive ambiguity** — showing how a text deliberately sustains **unresolved conceptual tension**:
* A character's final gesture may read *simultaneously* as liberation and abandonment.
* A nostalgic image may hover between genuine consolation and paralysing denial.
* A closing line may refuse closure, leaving the reader ethically unsettled.

Use balanced analytical framing — *“while … simultaneously …”*, *“hovers between … and …”*, *“resists tidy resolution by …”* — to demonstrate Band 5 Criterion A insight.`,
      diagram: `<svg viewBox="0 0 640 305" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nested narrative communication layers separating Real Author, Implied Author, and Speaker alongside the three modes of literary irony">
  <rect x="0" y="0" width="640" height="305" rx="14" fill="#fdf8f8" />
  <text x="320" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">Voice Layers &amp; The Three Modes of Irony</text>

  <!-- Left: Nested Voice Frames -->
  <rect x="20" y="44" width="295" height="242" rx="12" fill="#ffffff" stroke="#6b4c56" stroke-width="1.8" stroke-dasharray="6,4" />
  <text x="34" y="65" font-size="11" font-weight="800" fill="#6b4c56">REAL AUTHOR (Historical person — outside text)</text>

  <rect x="34" y="78" width="267" height="194" rx="10" fill="#ffe4e6" stroke="#be123c" stroke-width="2" />
  <text x="48" y="99" font-size="11" font-weight="800" fill="#881337">IMPLIED AUTHOR (Text's craft &amp; ironic design)</text>

  <rect x="48" y="114" width="239" height="142" rx="10" fill="#ffffff" stroke="#0d9488" stroke-width="2" />
  <text x="62" y="135" font-size="11" font-weight="800" fill="#0d9488">NARRATOR / SPEAKER (Inside voice)</text>
  <text x="62" y="154" font-size="10.5" fill="#241016">May be reliable, biased, naive,</text>
  <text x="62" y="170" font-size="10.5" fill="#241016">defensive, or self-deceiving.</text>

  <rect x="64" y="186" width="207" height="54" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.6" />
  <text x="167" y="207" text-anchor="middle" font-size="11" font-weight="800" fill="#b45309">THE IRONIC GAP</text>
  <text x="167" y="226" text-anchor="middle" font-size="10" fill="#241016">Speaker's claim ≠ Text's evidence</text>

  <!-- Right: 3 Irony Modes -->
  <rect x="335" y="44" width="285" height="72" rx="10" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.8" />
  <text x="351" y="66" font-size="11.5" font-weight="800" fill="#7c3aed">1. Verbal Irony</text>
  <text x="351" y="84" font-size="10.5" fill="#241016">What is said ≠ what is meant</text>
  <text x="351" y="100" font-size="10" fill="#6b4c56">(understatement, dry praise, register clash)</text>

  <rect x="335" y="129" width="285" height="72" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.8" />
  <text x="351" y="151" font-size="11.5" font-weight="800" fill="#0d9488">2. Situational Irony</text>
  <text x="351" y="169" font-size="10.5" fill="#241016">Expected outcome ≠ actual reversal</text>
  <text x="351" y="185" font-size="10" fill="#6b4c56">(plot or action turns back on intention)</text>

  <rect x="335" y="214" width="285" height="72" rx="10" fill="#ffe4e6" stroke="#be123c" stroke-width="1.8" />
  <text x="351" y="236" font-size="11.5" font-weight="800" fill="#be123c">3. Dramatic Irony</text>
  <text x="351" y="254" font-size="10.5" fill="#241016">Audience knows what character does not</text>
  <text x="351" y="270" font-size="10" fill="#6b4c56">(ordinary speech gains tragic/comic tension)</text>
</svg>`,
      diagramCaption:
        "Never equate the narrator or speaker with the real author: irony and ambiguity live in the space between what a voice asserts and what the text's craft reveals.",
      workedExamples: [
        {
          title: "Analysing Tonal Shift & Unresolved Ambiguity in an Unseen Ending",
          problem:
            "Read this original unseen closing paragraph:\n\n> *We congratulated ourselves on how sensibly we had divided Mother's books — three neat crates for my brother, three for me, the odd volume left for charity. Only on the stairwell, when the cardboard gave slightly beneath my thumb, did I notice the smell of cardamom still trapped between the pages. I set the crate down on the landing and stood listening to the lift doors close far below.*\n\nHow do tonal shift and ambiguity work together here?",
          steps: [
            "Map the opening tone: *“congratulated ourselves”*, *“sensibly”*, and the symmetrical arithmetic (*“three neat crates … three for me”*) project a brisk, **self-congratulatory, managerial** tone.",
            "Locate the exact pivot: *“Only on the stairwell”* signals a spatial and psychological turn triggered by an involuntary sensory cue (*“the smell of cardamom still trapped”*).",
            "Track the closing imagery and omission: *“set the crate down”* halts the brisk movement, while *“listening to the lift doors close far below”* replaces orderly speech with resonant silence and receding distance.",
            "Embrace ambiguity rather than forcing one flat moral: the ending hovers between belated grief breaking through emotional armour and a quiet hesitation over whether the narrator can carry her mother's legacy away at all.",
          ],
          answer:
            "The extract pivots from a brisk, managerial tone — underscored by the symmetrical tally of “three neat crates” — to hushed, arrested vulnerability triggered by the “trapped” scent of cardamom. By ending on the narrator setting the crate down beside the receding sound of “lift doors”, the writer preserves productive ambiguity: the pause suggests both an involuntary breach of grief and an unresolved uncertainty about whether inheritance can ever be tidily partitioned.",
          yourTurn: {
            question:
              "In a play, a character proudly boasts that his trusted deputy will guard the treasury all night, while the audience has already watched that deputy pocket the spare key in the previous scene. Which specific type of irony is operating? (Two words.)",
            answer: {
              type: "text",
              accept: ["dramatic irony", "dramatic"],
              display: "dramatic irony",
            },
            solution:
              "Because the audience possesses crucial knowledge that the boasting character lacks, every word of his praise carries **dramatic irony**.",
          },
        },
      ],
      keyPoints: [
        "Always refer to the **speaker** (in poetry) or **narrator** (in prose), never assuming their attitudes belong directly to the **real author**.",
        "Replace vague tone labels (*sad, angry, positive*) with precise tonal adjectives (*elegiac, sardonic, restrained, clinical, wistful*) and trace **tonal shifts** across the passage.",
        "Distinguish **verbal irony** (said vs meant), **situational irony** (expected vs actual outcome), and **dramatic irony** (audience knowledge vs character ignorance).",
        "Top-band IB arguments **hold ambiguity open** rather than flattening complex works into simplistic one-line morals.",
      ],
      whyItWorks:
        "Literature rarely behaves like a sermon or an advertisement. Criterion A explicitly rewards candidates who recognise *subtle implications* and *nuanced complexities* — and those almost always surface when a narrator's mask slips, a tone pivots, or two competing meanings coexist without cancelling each other out.",
      strategies: [
        "When identifying tone, pair an adjective with a qualifier — e.g. *quietly sardonic*, *elegiac yet unsentimental*, *briskly defensive* — to avoid caricaturing a subtle voice.",
        "Whenever a speaker sounds overly confident or logical (*“sensibly”, “of course”, “naturally”*), test for **dramatic or verbal irony** by checking whether the surrounding imagery undermines their claim.",
        "In Paper 1 conclusions, resist writing *“Ultimately, the writer teaches us…”*; instead synthesise the **unresolved tension** that lingers after the final line.",
      ],
      thinkDeeper:
        "What happens when a first-person narrator *explicitly warns* the reader that they are lying or forgetting — does that confession make the narrator more trustworthy, or does it deepen their unreliability?",
    },

    // =========================================================================
    // SECTION 3: reader-response-choices
    // =========================================================================
    {
      id: "reader-response-choices",
      heading: "Reader Response, Implied Readership & Interpretive Lenses",
      level: "SL",
      discovery: {
        problem:
          "Read this original two-sentence scene:\n\n> *At nine o'clock he folded the newspaper, rose without a word, and cleared only his own plate. She watched the steam fade from her untouched tea.*\n\nNothing explicitly mentions anger, gender roles, or loneliness. Why can two thoughtful readers convincingly argue different readings — one focusing on entrenched domestic power, another on mutual grief — while a third reading (“he is rushing to catch a spaceship”) is completely invalid?",
        idea:
          "German theorist **Wolfgang Iser** observed that literary texts are full of deliberate **textual gaps** (*Leerstelle*): unsaid motives, pauses, and silences that the reader must actively bridge. Meaning is **co-constructed** between textual cues and the reader's interpretive horizon — open to multiple plausible lenses, yet strictly bounded by concrete textual evidence.",
      },
      body: `Area of Exploration 1 explicitly links **Readers**, **Writers**, and **Texts** as a dynamic triangle. A printed page does not transmit a single fixed message like a traffic sign; instead, the text supplies structured cues, gaps, and invitations that different readers activate in distinct ways.

### Wolfgang Iser's Textual Gaps & Active Co-Construction
In **reader-response theory** (pioneered by thinkers like Wolfgang Iser and Louise Rosenblatt), reading is an *event* rather than passive reception:
* **Determinate Elements (Textual Cues):** Concrete details fixed on the page — the folded newspaper, clearing *“only his own plate”*, the fading steam on *“her untouched tea”*.
* **Indeterminate Gaps (*Leerstelle*):** What the text deliberately omits — *why* he leaves silently, *what* occurred before nine o'clock, *whether* her stillness signals resignation, fury, or shock.
* **The Reading Transaction:** Readers continually form hypotheses, revise them when later details clash, and fill gaps using their own cultural, historical, and emotional frameworks.

### Implied Reader vs Resisting Reader
Two essential IB Literature concepts help you analyse how texts position their audience:
1. **The Implied Reader:** Not any real individual, but the *imagined audience encoded in the text's own assumptions* — the reader who catches its allusions, accepts its moral framing, laughs at its ironies, or sympathises where the narrative directs sympathy.
2. **The Resisting Reader** (a term popularised by Judith Fetterley \`[Example text — not a set text]\`): A reader who consciously reads **against the grain** of the text's invited sympathies — questioning whose voice is silenced, whose privilege is normalised, or what ideological blind spots a charming narrator expects us to overlook.

> **Illustrative example \`[Example text — not a set text]\`:** When reading classic nineteenth-century domestic or imperial fiction, an **implied reader** might accept a narrator's framing of a colonial outpost as an exotic backdrop, whereas a **resisting reader** interrogates the silenced local figures standing at the margin of the scene.

### Plurality Without Relativism: The Evidence Test
Students sometimes misread reader-response theory as *“every opinion is equally valid because it's just my interpretation”*. IB examiners firmly reject unsupported subjectivity. Use the **Three-Point Evidence Test** to weigh competing interpretations:

| Criterion | Weak / Unsupported Reading | Persuasive IB Reading |
| :--- | :--- | :--- |
| **Textual Anchoring** | Ignores contradicting lines; invents off-page backstories. | Accounts for specific diction, syntax, and structural details across the *entire* extract. |
| **Nuance & Counter-Evidence** | Forces every detail into one rigid thesis. | Acknowledges details that complicate the reading (*“Although X might invite sympathy, Y complicates…”*). |
| **Interpretive Yield** | Restates the obvious surface level. | Illuminates patterns, silences, and tensions that a literal reading would miss. |

### Using Interpretive Lenses Naturally
Different readers bring different **interpretive lenses** — psychological, feminist/gendered, socio-economic, postcolonial, ecocritical, or formalist. At SL and HL alike, you never need dense theoretical jargon to think through lenses: simply ask sharper questions of the text (e.g. *Who controls physical space and speech here? Whose labour remains invisible? How does the text's structure reward or punish conformity?*).`,
      diagram: `<svg viewBox="0 0 640 295" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of Wolfgang Iser's textual gaps showing how Textual Cues and Gaps interact with the Reader's Horizon to produce Implied and Resisting Readings bounded by evidence">
  <rect x="0" y="0" width="640" height="295" rx="14" fill="#fdf8f8" />
  <text x="320" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">Co-Constructing Meaning: Textual Gaps &amp; Reader Positions</text>

  <!-- Left: Text Box -->
  <rect x="22" y="52" width="176" height="162" rx="12" fill="#ffffff" stroke="#be123c" stroke-width="2" />
  <text x="110" y="75" text-anchor="middle" font-size="11.5" font-weight="800" fill="#be123c">THE TEXT</text>
  <rect x="36" y="88" width="148" height="48" rx="8" fill="#ffe4e6" />
  <text x="110" y="108" text-anchor="middle" font-size="10.5" font-weight="700" fill="#881337">Determinate Cues</text>
  <text x="110" y="124" text-anchor="middle" font-size="9.5" fill="#241016">Diction, syntax, imagery</text>

  <rect x="36" y="148" width="148" height="52" rx="8" fill="#fdf8f8" stroke="#be123c" stroke-width="1.5" stroke-dasharray="5,3" />
  <text x="110" y="168" text-anchor="middle" font-size="10.5" font-weight="700" fill="#be123c">Iser's Textual Gaps</text>
  <text x="110" y="184" text-anchor="middle" font-size="9.5" fill="#241016">Silences, omissions, tension</text>

  <!-- Middle: Transaction -->
  <line x1="198" y1="133" x2="232" y2="133" stroke="#7c3aed" stroke-width="2.5" />
  <polygon points="232,128 242,133 232,138" fill="#7c3aed" />

  <rect x="244" y="74" width="142" height="118" rx="12" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2" />
  <text x="315" y="100" text-anchor="middle" font-size="11.5" font-weight="800" fill="#7c3aed">ACTIVE READER</text>
  <text x="315" y="120" text-anchor="middle" font-size="10" fill="#241016">Bridges gaps via</text>
  <text x="315" y="136" text-anchor="middle" font-size="10" fill="#241016">cultural horizon,</text>
  <text x="315" y="152" text-anchor="middle" font-size="10" fill="#241016">values &amp; prior</text>
  <text x="315" y="168" text-anchor="middle" font-size="10" fill="#241016">literary schema</text>

  <!-- Right Branches -->
  <line x1="386" y1="104" x2="424" y2="86" stroke="#0d9488" stroke-width="2.2" />
  <polygon points="421,81 432,83 425,91" fill="#0d9488" />

  <line x1="386" y1="162" x2="424" y2="180" stroke="#b45309" stroke-width="2.2" />
  <polygon points="425,175 432,183 421,185" fill="#b45309" />

  <rect x="434" y="48" width="184" height="76" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="2" />
  <text x="526" y="70" text-anchor="middle" font-size="11" font-weight="800" fill="#0d9488">IMPLIED READER</text>
  <text x="526" y="88" text-anchor="middle" font-size="10" fill="#241016">Reads with the text's grain;</text>
  <text x="526" y="104" text-anchor="middle" font-size="10" fill="#241016">accepts its invited sympathies</text>

  <rect x="434" y="142" width="184" height="76" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2" />
  <text x="526" y="164" text-anchor="middle" font-size="11" font-weight="800" fill="#b45309">RESISTING READER</text>
  <text x="526" y="182" text-anchor="middle" font-size="10" fill="#241016">Reads against the grain;</text>
  <text x="526" y="198" text-anchor="middle" font-size="10" fill="#241016">interrogates silences &amp; bias</text>

  <!-- Bottom Evidence Floor -->
  <rect x="22" y="236" width="596" height="42" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.8" />
  <text x="320" y="254" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">TEXTUAL EVIDENCE BOUNDARY (IB Criterion A &amp; B Anchor)</text>
  <text x="320" y="270" text-anchor="middle" font-size="10" fill="#241016">Multiple readings are welcomed — ONLY when grounded in concrete phrasing and whole-text patterns.</text>
</svg>`,
      diagramCaption:
        "Both implied and resisting readings can achieve Band 5 when every interpretive step remains anchored inside the text's evidence boundary.",
      workedExamples: [
        {
          title: "Testing an Implied vs Resisting Reading on an Unseen Extract",
          problem:
            "Read this original unseen monologue extract:\n\n> *My grandfather built the orchard wall with stones hauled from the river by hired boys whose names nobody thought to record. Whenever visitors praise the neat mortar, I feel his quiet pride settle in my chest like warm brick.*\n\nCompare how an **implied reader** and a **resisting reader** might interpret this moment, keeping both grounded in the text.",
          steps: [
            "Identify the text's surface invitation (implied-reader pull): the tactile simile *“like warm brick”* and *“quiet pride”* invite emotional warmth toward ancestral craftsmanship and continuity.",
            "Locate the textual gap / fissure: the parenthetical detail *“by hired boys whose names nobody thought to record”* quietly undercuts the verb *“built”* — the grandfather supervised, while unnamed labourers hauled the stone.",
            "Articulate the resisting reading: a resisting reader refuses the comforting warmth of *“warm brick”*, noticing how heritage nostalgia relies on erasing the uncredited labour that literally made the wall possible.",
            "Synthesise both into a single nuanced Band 5 claim: the writer plants that erasure *inside* the speaker's own sentence, allowing attentive readers to witness how class privilege disguises itself as family heritage.",
          ],
          answer:
            "While the nostalgic simile “like warm brick” invites an implied reader to share the speaker's pride in ancestral permanence, a resisting reading seizes on the casually tossed-off clause “by hired boys whose names nobody thought to record”. By embedding that anonymous labour inside a tribute to the grandfather's achievement, the writer exposes how inherited prestige often depends on the quiet erasure of working-class bodies.",
          yourTurn: {
            question:
              "What two-word term describes a reader who consciously reads against a text's invited sympathies to question its silences, biases, or ideological assumptions?",
            answer: {
              type: "text",
              accept: ["resisting reader", "resistant reader"],
              display: "resisting reader",
            },
            solution:
              "A reader who interrogates a text's framing and reads against its grain — rather than accepting its default perspective — is a **resisting reader**.",
          },
        },
      ],
      keyPoints: [
        "**Wolfgang Iser's textual gaps** (*Leerstelle*) explain why silences, ellipses, and omissions compel readers to co-construct meaning actively.",
        "An **implied reader** aligns with the text's structural invitations and assumptions; a **resisting reader** reads against the grain to interrogate silences, privilege, or framing.",
        "Reader-response awareness never excuses vague personal opinion: every interpretive lens must satisfy the **textual evidence test**.",
        "Acknowledging a plausible **counter-reading** before advancing your strongest synthesis is one of the cleanest ways to signal Band 5 critical judgement.",
      ],
      whyItWorks:
        "IB Literature examiners do not mark against one secret 'correct' interpretation. Instead, Criterion A evaluates whether your interpretation is *perceptive, persuasive, and textually substantiated*. Showing awareness of *how* a text positions readers — and *where* another reader might resist that positioning — proves high-level critical independence.",
      strategies: [
        "Avoid writing *“the reader feels…”* as though every human on earth reacts identically. Prefer more precise formulations: *“invites the reader to…”*, *“positions an attentive reader to question…”*, or *“unsettles readers who expect…”*.",
        "Whenever you encounter a minor or silent character in a passage, run a 10-second **Resisting-Reader Check**: *Whose perspective is excluded from this narration, and what detail hints at their unspoken reality?*",
        "In essays and the Individual Oral, use concessive hinges (*“While an initial reading might view… closer attention to the syntax reveals…”*) to showcase layered interpretation.",
      ],
      thinkDeeper:
        "How can a text *itself* deliberately train a reader to become a resisting reader — planting subtle clues that force us to distrust a narrator we initially liked?",
    },

    // =========================================================================
    // SECTION 4: learner-portfolio-craft
    // =========================================================================
    {
      id: "learner-portfolio-craft",
      heading: "Building a High-Impact IB Learner Portfolio Across DP1–DP2",
      level: "SL",
      discovery: {
        problem:
          "Imagine reaching DP2 Term 2 with your Individual Oral next month, your Paper 2 mock in six weeks, and (at HL) your HL Essay due soon. You suddenly realise that the ONLY two works you annotated thoroughly are the two works you just submitted for your Individual Oral — leaving you with thin notes for Paper 2 and risking a fatal IB assessment breach. How do top IB students prevent this trap from Day 1 of DP1?",
        idea:
          "They treat the mandatory **IB Learner Portfolio** not as a messy dumping ground for class handouts, but as a living **cross-text research engine** that tags ≤40-line IO extracts, tracks Global Issues, maps connections across original English and translated works, and locks in the **Non-Overlap Work Rule** early.",
      },
      body: `Although the **IB Learner Portfolio** is not formally graded by the IBO, it is a **mandatory course requirement** across all two years of DP1–DP2 — and in practice it is the single strongest predictor of top marks across your **Individual Oral (IA)**, **HL Essay [HL]**, and **Paper 2**.

### The Official IB Work Counts & Non-Overlap Work Rule (FA 2021)
Understanding the exact syllabus architecture protects you from last-minute assessment disasters:

| Course Level | Minimum Studied Works | Works in Translation (Min) | Works Originally in English (Min) | Assessment Allocation (STRICT NON-OVERLAP) |
| :--- | :--- | :--- | :--- | :--- |
| **SL** | **9 works** | **3 works** | **4 works** (+ 2 free choice) | **IO:** 2 works (1 English + 1 Translated) · **Paper 2:** 2 *other* works |
| **HL** | **13 works** | **4 works** | **5 works** (+ 4 free choice) | **IO:** 2 works (1 English + 1 Translated) · **HL Essay:** 1 *other* work · **Paper 2:** 2 *other* works |

> **THE IRON NON-OVERLAP RULE:** No literary work you use for your **Individual Oral** — or (at HL) for your **HL Essay** — may be reused in your **Paper 2 Comparative Essay**! Likewise, your HL Essay work CANNOT be one of your two IO works. At HL, that means **5 completely separate works** are committed across IO (2) + HL Essay (1) + Paper 2 (2) — and you should reserve at least **3–4 strong works** for Paper 2 so you can answer whichever of the 4 unseen Paper 2 prompts fits best!

### Four High-Value Entries to Log for Every Studied Work
Whenever you finish reading a work (novel, play, poetry collection, or literary non-fiction work), add four crisp pages to your Learner Portfolio:

1. **Extract Vault (≤40 Lines for IO Readiness):** Flag **2–3 stylistically dense passages** of **no more than 40 lines each** (note: 40 lines is the strict IB ceiling for Individual Oral extracts!). Avoid pure plot-heavy dialogue; choose moments packed with imagery, tonal shifts, subtext, or structural tension that act as microcosms of the whole work.
2. **Global Issue & 5 Fields of Inquiry Tagging:** Link the work to at least two of the **5 IB Fields of Inquiry** (*Culture, identity & community; Beliefs, values & education; Politics, power & justice; Art, creativity & imagination; Science, technology & the environment*) and draft one narrow, transnational, locally felt Global Issue sentence.
3. **7 Central Concepts & Cross-Text Matrix:** Log how the work engages key IB concepts (**Identity, Culture, Creativity, Communication, Perspective, Transformation, Representation**) and note **one original English partner** and **one translated partner** that offer productive contrast — not just surface similarity!
4. **Closed-Book Paper 2 Memory Bank:** Because Paper 2 is **closed book**, record **8–10 ultra-short micro-quotations (3–8 words each)** plus **3–4 pivotal structural/formal moments** (opening frame, turning point, staging cue, closing ambiguity) while the text is still fresh in your mind.

### From Portfolio Notes to Assessment Launchpads
* **For the Individual Oral (SL 30% / HL 20%, 15 min total = 10 min talk + 5 min Q&A):** Your portfolio supplies both ≤40-line unmarked extracts and the macro whole-work touchpoints you distil into your **maximum 10-bullet-point outline**.
* **For the HL Essay [HL Only, 20%, 1,200–1,500 words]:** Your portfolio's questioning entries help you spot a genuine interpretive puzzle in **one** non-overlapping work — turning casual margin notes into a sharp, concept-driven line of inquiry.
* **For Paper 2 (SL 35% / HL 25%, 1h 45m, 30 marks):** Your portfolio's cross-text comparison tables let you enter the exam hall ready to pivot across themes, forms, and eras without panic.`,
      diagram: `<svg viewBox="0 0 640 315" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Blueprint showing the IB Learner Portfolio feeding three strictly non-overlapping assessment buckets: Individual Oral, HL Essay, and Paper 2 Reserve">
  <rect x="0" y="0" width="640" height="315" rx="14" fill="#fdf8f8" />
  <text x="320" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#241016">Learner Portfolio &amp; The Non-Overlap Work Rule</text>

  <!-- Top Hub -->
  <rect x="130" y="42" width="380" height="58" rx="12" fill="#ffe4e6" stroke="#be123c" stroke-width="2" />
  <text x="320" y="65" text-anchor="middle" font-size="12" font-weight="800" fill="#881337">IB LEARNER PORTFOLIO (SL: 9+ Works · HL: 13+ Works)</text>
  <text x="320" y="85" text-anchor="middle" font-size="10.5" fill="#241016">≤40-line Extract Vault · Global Issues · 7 Concepts · Micro-Quotes</text>

  <!-- Arrows Down -->
  <line x1="210" y1="100" x2="112" y2="140" stroke="#0d9488" stroke-width="2.2" />
  <polygon points="109,135 104,143 114,144" fill="#0d9488" />

  <line x1="320" y1="100" x2="320" y2="140" stroke="#7c3aed" stroke-width="2.2" />
  <polygon points="315,138 320,147 325,138" fill="#7c3aed" />

  <line x1="430" y1="100" x2="528" y2="140" stroke="#b45309" stroke-width="2.2" />
  <polygon points="526,144 536,143 531,135" fill="#b45309" />

  <!-- Bucket 1: IO -->
  <rect x="18" y="148" width="186" height="106" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="2" />
  <text x="111" y="170" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0d9488">INDIVIDUAL ORAL (IA)</text>
  <text x="111" y="189" text-anchor="middle" font-size="10.5" font-weight="700" fill="#241016">2 Works Locked:</text>
  <text x="111" y="206" text-anchor="middle" font-size="10" fill="#241016">1 English + 1 Translated</text>
  <text x="111" y="222" text-anchor="middle" font-size="10" fill="#241016">≤40-line extracts · 10 bullets</text>
  <text x="111" y="239" text-anchor="middle" font-size="9.5" fill="#6b4c56">SL 30% · HL 20%</text>

  <!-- Bucket 2: HL Essay -->
  <rect x="227" y="148" width="186" height="106" rx="10" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2" />
  <text x="320" y="170" text-anchor="middle" font-size="11.5" font-weight="800" fill="#7c3aed">HL ESSAY [HL ONLY]</text>
  <text x="320" y="189" text-anchor="middle" font-size="10.5" font-weight="700" fill="#241016">1 Distinct Work Locked:</text>
  <text x="320" y="206" text-anchor="middle" font-size="10" fill="#241016">English OR Translated</text>
  <text x="320" y="222" text-anchor="middle" font-size="10" fill="#241016">1,200–1,500 words</text>
  <text x="320" y="239" text-anchor="middle" font-size="9.5" fill="#6b4c56">HL 20% (External)</text>

  <!-- Bucket 3: Paper 2 -->
  <rect x="436" y="148" width="186" height="106" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2" />
  <text x="529" y="170" text-anchor="middle" font-size="11.5" font-weight="800" fill="#b45309">PAPER 2 RESERVE</text>
  <text x="529" y="189" text-anchor="middle" font-size="10.5" font-weight="700" fill="#241016">2 Exam Works (Prep 3–4):</text>
  <text x="529" y="206" text-anchor="middle" font-size="10" fill="#241016">Closed-book comparison</text>
  <text x="529" y="222" text-anchor="middle" font-size="10" fill="#241016">Micro-quotes + form arcs</text>
  <text x="529" y="239" text-anchor="middle" font-size="9.5" fill="#6b4c56">SL 35% · HL 25%</text>

  <!-- Non-Overlap Warning Bar -->
  <rect x="18" y="268" width="604" height="32" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.8" />
  <text x="320" y="288" text-anchor="middle" font-size="11" font-weight="800" fill="#c2410c">STRICT NON-OVERLAP RULE: Zero shared works between IO, HL Essay [HL], and Paper 2!</text>
</svg>`,
      diagramCaption:
        "Map every studied work into one dedicated assessment bucket early in DP2 so your IO, HL Essay [HL], and Paper 2 never collide.",
      workedExamples: [
        {
          title: "Auditing an HL Student's Assessment Work Plan for Non-Overlap Compliance",
          problem:
            "An HL Literature student has studied 13 works (labelled W1–W13; W1–W5 are Works in Translation and W6–W13 are Works Originally in English). They propose the following plan:\n\n- **Individual Oral:** W2 (translated play) + W7 (English novel)\n- **HL Essay:** W9 (English poetry collection)\n- **Paper 2 Reserve:** W2 (translated play), W4 (translated novella), W11 (English drama)\n\nIdentify the breach in this plan and state how many remaining studied works are legally eligible for Paper 2.",
          steps: [
            "Check the **Individual Oral** pairing: W2 (translated) + W7 (original English) satisfies the mandatory 1 English + 1 translated requirement.",
            "Check the **HL Essay**: W9 is distinct from both W2 and W7 — valid.",
            "Check the **Paper 2 Reserve** against the non-overlap rule: **W2 is illegal** because it is already committed to the Individual Oral!",
            "Count remaining legally eligible works for Paper 2: out of 13 studied works, 3 works are locked (W2, W7, W9), leaving 13 − 3 = **10 eligible works** from which to choose 2 (preparing 3–4 versatile works is best practice).",
          ],
          answer:
            "W2 cannot be reused in Paper 2 because it is already assigned to the Individual Oral. Replacing W2 with another non-overlapping work (from the **10** remaining eligible works out of 13) restores full IB compliance.",
          yourTurn: {
            question:
              "An SL English A: Literature student has studied the minimum 9 works and locks 2 works for their Individual Oral. How many distinct studied works remain legally eligible for Paper 2?",
            answer: {
              type: "number",
              value: 7,
              display: "7",
            },
            solution:
              "Under the non-overlap rule, the 2 works used in the Individual Oral cannot be reused in Paper 2: 9 − 2 = **7** distinct eligible works remain.",
          },
        },
      ],
      keyPoints: [
        "The Learner Portfolio is **mandatory** (not externally graded) and acts as your launchpad for the IO, HL Essay [HL], and closed-book Paper 2.",
        "**Minimum work counts (FA 2021):** **SL = 9 works** (min 3 translated, 4 English) · **HL = 13 works** (min 4 translated, 5 English).",
        "**Strict Non-Overlap Rule:** No work used in the IO (2 works) or HL Essay [HL] (1 work) may be reused in Paper 2 (2 works).",
        "Tag **≤40-line** stylistically dense extracts (not plot summaries!) and **8–10 short micro-quotations** per work while each text is fresh.",
      ],
      whyItWorks:
        "Paper 2 is closed book, the IO allows only unmarked ≤40-line extracts plus a 10-bullet outline, and the HL Essay demands an original 1,200–1,500 word line of inquiry. Capturing dense micro-evidence and cross-text tensions incrementally across DP1–DP2 eliminates frantic cramming and ensures your non-overlap map stays airtight.",
      strategies: [
        "Create a single-page **Assessment Allocation Matrix** at the front of your Learner Portfolio with three colour-coded columns (*IO · HL Essay [HL] · Paper 2 Reserve*) so you can verify zero overlap at a glance.",
        "When logging a candidate IO extract, literally count the lines (≤40) and test whether you can spot at least **four distinct authorial choices** (not just four plot events) inside it.",
        "After every class seminar, write one 4-sentence **Conceptual Friction Note** comparing how today's work treats a concept differently from an earlier studied work — these notes become instant Paper 2 body paragraphs!",
      ],
      thinkDeeper:
        "Why does the IBO deliberately prohibit reusing works across the IO, HL Essay, and Paper 2 — and how does preparing 3–4 Paper 2 reserve works across varied literary forms give you an edge on unseen exam prompts?",
    },
  ],

  // ===========================================================================
  // LEARN SMART TAB
  // ===========================================================================
  learn: {
    flashcards: [
      {
        front: "What is the core difference between plot summary and IB close reading?",
        back: "Plot summary retells *what happens*; IB close reading analyses *how* specific authorial choices (diction, syntax, imagery, structure, omission) construct conceptual meaning and reader effect.",
      },
      {
        front: "What are the three stages of the C-M-E close-reading engine?",
        back: "**Choice** (exact literary move + micro-quote) → **Mechanism** (how the language operates) → **Effect** (psychological, thematic, or conceptual implication).",
      },
      {
        front: "What is “technique-spotting” and why does it cap Criterion B?",
        back: "Naming a literary device (e.g. *“the writer uses metaphor”*) followed by a generic cliché (*“creates a vivid image”*) without explaining *how* the device shapes meaning — typically capped in Band 2–3.",
      },
      {
        front: "Distinguish denotation from connotation.",
        back: "**Denotation** is a word's literal dictionary meaning; **connotation** is the web of emotional, cultural, and tonal associations surrounding it.",
      },
      {
        front: "Distinguish parataxis from hypotaxis in prose syntax.",
        back: "**Parataxis** places short clauses side by side without subordination (often conveying urgency, shock, or stark restraint); **hypotaxis** nests subordinate clauses (often mirroring layered reasoning, hesitation, or obsessive reflection).",
      },
      {
        front: "Why must IB essays separate the poetic speaker or narrator from the real author?",
        back: "Authors routinely invent biased, naive, defensive, or unreliable voices so the gap between what the voice *claims* and what the text's craft *exposes* generates irony and critique.",
      },
      {
        front: "Define the three modes of literary irony: verbal, situational, and dramatic.",
        back: "**Verbal:** said ≠ meant. **Situational:** outcome starkly reverses expectation. **Dramatic:** audience/reader knows crucial truth that a character does not.",
      },
      {
        front: "What is “productive ambiguity” in IB Literature?",
        back: "Deliberate interpretive openness where two competing meanings or emotional registers coexist in unresolved tension — rewarded in Criterion A far above reductive one-line morals.",
      },
      {
        front: "What are Wolfgang Iser's “textual gaps” (*Leerstelle*)?",
        back: "Deliberate silences, omissions, and indeterminate moments in a text that compel the reader to participate actively in co-constructing meaning.",
      },
      {
        front: "Distinguish an implied reader from a resisting reader.",
        back: "An **implied reader** reads with the text's grain and accepts its invited sympathies; a **resisting reader** reads against the grain to interrogate silences, privilege, or ideological framing.",
      },
      {
        front: "How long may each extract be for the IB Individual Oral (IA)?",
        back: "Maximum **40 lines** per extract (unmarked clean copy brought into the recording, alongside a maximum **10-bullet-point** outline).",
      },
      {
        front: "What is the IB Non-Overlap Work Rule across assessments?",
        back: "No literary work used in your **Individual Oral** (2 works) or **HL Essay [HL]** (1 work) may be reused in **Paper 2** — nor may your HL Essay repeat an IO work.",
      },
      {
        front: "How many minimum studied works are required at SL vs HL (FA 2021)?",
        back: "**SL:** minimum **9 works** (≥3 translated, ≥4 original English). **HL:** minimum **13 works** (≥4 translated, ≥5 original English).",
      },
      {
        front: "How many works are required for the Individual Oral, and what is the mandatory language split?",
        back: "**2 works:** **1** originally written in English and **1** work in translation, linked by ONE focused Global Issue.",
      },
      {
        front: "What is the exact word-count window and work limit for the HL Essay?",
        back: "**1,200–1,500 words** examining **ONE** studied literary work (English or translated) not used in the IO or Paper 2.",
        level: "HL",
      },
      {
        front: "How many completely distinct works does an HL candidate commit across IO + HL Essay + Paper 2?",
        back: "At least **5 distinct works** (2 IO + 1 HL Essay + 2 Paper 2), with 3–4 non-overlapping works ideally prepared for Paper 2 prompt flexibility.",
        level: "HL",
      },
    ],
    mustKnow: [
      "IB close reading analyses **authorial choices → mechanism → conceptual effect** — NEVER retelling plot events as if characters were real people.",
      "Embed **short 1–6 word micro-quotations** grammatically inside your own analytical sentences; avoid unanalysed dropped block quotes.",
      "Always separate the **speaker / narrator** from the **real author** — irony lives in the gap between what a voice asserts and what the text's craft reveals.",
      "Track **tonal shifts** across a passage using precise vocabulary (*elegiac, sardonic, restrained, clinical, wistful*), never flat labels (*sad, negative*).",
      "Distinguish **verbal**, **situational**, and **dramatic** irony accurately and explain their conceptual effect rather than merely spotting them.",
      "Embrace **productive ambiguity**: Band 5 essays hold competing implications in tension rather than flattening literature into tidy moral lessons.",
      "Reader-response analysis balances **openness** (implied vs resisting readers bridging Iser's textual gaps) with **rigour** (every claim anchored in concrete textual evidence).",
      "The **Learner Portfolio** is mandatory across DP1–DP2 and should log ≤40-line IO extracts, Global Issues, cross-text links, and closed-book Paper 2 micro-quotes.",
      "**Minimum studied works (FA 2021):** SL = 9 works (≥3 translated, ≥4 English); HL = 13 works (≥4 translated, ≥5 English).",
      "**Strict Non-Overlap Rule:** Zero shared works between your Individual Oral (2 works), HL Essay [HL] (1 work), and Paper 2 (2 works).",
    ],
    misconceptions: [
      {
        wrong: "“If I name lots of literary devices like metaphor, alliteration, and syntax, I will get full marks in Criterion B.”",
        right: "Empty **technique-spotting** caps Criterion B in Band 2–3. One craft move analysed through **Choice → Mechanism → Effect** outscores five unexplained labels.",
      },
      {
        wrong: "“Whatever the narrator or poetic speaker says represents the real author's personal beliefs.”",
        right: "Writers frequently construct biased, ironic, or self-deceiving speakers. Always refer to the *speaker* or *narrator*, and treat the *author* as the architect of the work's design.",
      },
      {
        wrong: "“Because reader-response theory says readers co-construct meaning, any personal interpretation is equally valid.”",
        right: "Plurality is NOT relativism: an interpretation is only persuasive in IB Literature when it accounts for concrete textual phrasing, structural patterns, and counter-details.",
      },
      {
        wrong: "“A strong essay conclusion should pin down the single clear moral message the text is teaching us.”",
        right: "Reductive morals flatten literary nuance. Top-band Criterion A essays explore **productive ambiguity** and unresolved conceptual tensions.",
      },
      {
        wrong: "“Quoting three full sentences proves I know the passage thoroughly.”",
        right: "Long dropped block quotes eat up time and stall analysis. Seamless **1–6 word micro-quotations** woven into analytical sentences show sharper command of language.",
      },
      {
        wrong: "“The Learner Portfolio is ungraded, so I can skip keeping notes until two weeks before my Individual Oral.”",
        right: "The Learner Portfolio is mandatory and builds your ≤40-line IO Extract Vault, HL Essay inquiry seeds, and closed-book Paper 2 quotation bank incrementally across DP1–DP2.",
      },
      {
        wrong: "“At HL I can write my HL Essay on my favourite work and also use it in Paper 2 if a great prompt appears.”",
        right: "Strictly prohibited! Under the **IB Non-Overlap Rule**, any work used in your HL Essay OR your Individual Oral is permanently barred from Paper 2.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Opening paragraphs with plot recap (*“In this extract, a boy visits his grandmother…”*) instead of a conceptual thesis anchored in authorial craft.",
      "Writing generic effect fillers — *“creates imagery in the reader's mind”*, *“emphasises the theme”*, *“makes the reader want to keep reading”* — that could fit any text ever written.",
      "Confusing **situational irony** (unexpected reversal of events) with **dramatic irony** (audience knows what a character does not) or simply labelling any sad coincidence “ironic”.",
      "Treating the reader as a monolith (*“the reader feels disgusted”*) instead of analysing how the text *invites*, *positions*, or *unsettles* implied versus resisting readers.",
      "Choosing a flat, plot-driven 40-line Individual Oral extract that forces retelling instead of a stylistically dense extract rich in imagery, syntax, and subtext.",
      "Forgetting to check the **40-line ceiling** on Individual Oral extracts or exceeding the **10-bullet** outline limit.",
      "Accidentally overlapping a work between the Individual Oral, HL Essay [HL], and Paper 2 during DP2 planning.",
      "Forcing a neat moralising ending (*“Ultimately, the text shows that family is important”*) instead of synthesising the passage's unresolved tension.",
    ],
    mnemonics: [
      {
        topic: "Evaluative Close Reading",
        device: "C-M-E (Choice → Mechanism → Effect)",
        explanation:
          "Before moving to your next sentence, verify all three links: **C**hoice (exact craft move + micro-quote), **M**echanism (how language alters pace, framing, or connotation), **E**ffect (conceptual or psychological stake).",
      },
      {
        topic: "Tracking Voice & Tone",
        device: "S-T-I-A (Speaker · Tone Shift · Irony · Ambiguity)",
        explanation:
          "Interrogate any voice in four beats: separate **S**peaker from author, mark where **T**one pivots, test for **I**rony (verbal/situational/dramatic), and preserve **A**mbiguity.",
      },
      {
        topic: "Reader-Response Analysis",
        device: "G-I-R-E (Gaps · Implied · Resisting · Evidence)",
        explanation:
          "Spot Iser's textual **G**aps, trace what the **I**mplied reader is invited to feel, test how a **R**esisting reader reads against the grain, and anchor both inside **E**vidence.",
      },
      {
        topic: "Learner Portfolio Entry",
        device: "40 · G · C · Q (≤40-line Extract · Global Issue · Concept Link · Micro-Quotes)",
        explanation:
          "Log four essentials for every studied work: a dense **≤40**-line extract, a **G**lobal Issue tag, a **C**oncept/cross-text link, and 8–10 closed-book **Q**uotations.",
      },
    ],
    realWorld: [
      {
        title: "Dramatic Monologue & Unreliable Masks",
        emoji: "🎭",
        detail:
          "In Robert Browning's Victorian dramatic monologues `[Example text — not a set text]`, aristocratic speakers boast of their refinement while unwittingly confessing jealousy and cruelty — proving why separating speaker from author is essential.",
      },
      {
        title: "Omission & The Iceberg Principle",
        emoji: "🧊",
        detail:
          "Ernest Hemingway's pared-back short fiction `[Example text — not a set text]` famously leaves core conflicts unspoken beneath ordinary café dialogue, illustrating Wolfgang Iser's textual gaps in action.",
      },
      {
        title: "Reading Against the Grain in Literary Criticism",
        emoji: "🔍",
        detail:
          "Postcolonial and feminist critics revisiting canonical nineteenth-century novels `[Example text — not a set text]` demonstrated how resisting readers uncover silenced perspectives without inventing facts outside the text.",
      },
      {
        title: "From Commonplace Books to the IB Learner Portfolio",
        emoji: "📓",
        detail:
          "Renaissance writers and modern novelists alike kept commonplace books — curated notebooks of striking phrases, cross-references, and questions — the direct ancestor of the IB Learner Portfolio.",
      },
      {
        title: "Dramatic Irony in Classical Amphitheatres",
        emoji: "🏛️",
        detail:
          "Ancient Athenian audiences already knew the mythic fate awaiting Sophocles's tragic protagonists `[Example text — not a set text]`, turning ordinary declarations of triumph into electric moments of dramatic irony.",
      },
    ],
    videos: [
      {
        title: "IB English A Literature: Close Reading & Authorial Choices (Paper 1)",
        channel: "IB English Guys · YouTube Search",
        url: "https://www.youtube.com/results?search_query=IB+English+A+Literature+close+reading+authorial+choices+Paper+1",
      },
      {
        title: "Narrative Voice, Tone Shifts & Irony in Literary Analysis",
        channel: "IB Literature Craft · YouTube Search",
        url: "https://www.youtube.com/results?search_query=IB+English+Literature+narrative+voice+tone+irony+ambiguity",
      },
      {
        title: "Reader-Response Theory, Implied Reader & Textual Gaps (Wolfgang Iser)",
        channel: "Literary Theory Explained · YouTube Search",
        url: "https://www.youtube.com/results?search_query=Wolfgang+Iser+implied+reader+textual+gaps+reader+response+theory",
      },
      {
        title: "IB English A Literature Learner Portfolio & Non-Overlap Work Rule",
        channel: "IB Diploma Literature · YouTube Search",
        url: "https://www.youtube.com/results?search_query=IB+English+A+Literature+Learner+Portfolio+Individual+Oral+non+overlap",
      },
    ],
    formulas: [
      {
        name: "Close-Reading Engine (C-M-E)",
        formula: "Authorial Choice + Micro-Quote → Linguistic Mechanism → Conceptual Effect",
        note: "Every Criterion B analytical point must traverse all three links; stopping at step 1 is technique-spotting.",
      },
      {
        name: "Micro-Quotation Embedding Rule",
        formula: "1–6 quoted words woven directly into the syntax of your own analytical clause",
        note: "Eliminates clunky dropped quotes and “This shows…” filler.",
      },
      {
        name: "Voice Separation Rule",
        formula: "Real Author ≠ Implied Author ≠ Speaker / Narrator",
        note: "Always attribute craft to the writer and perspective/bias to the speaker or narrator.",
      },
      {
        name: "Irony Mode Matrix",
        formula: "Verbal (said ≠ meant) · Situational (expected ≠ outcome) · Dramatic (audience knows > character knows)",
        note: "Identify the exact gap and evaluate its psychological or thematic pressure.",
      },
      {
        name: "Productive Ambiguity Frame",
        formula: "“Hovers between [Interpretation A] and [Interpretation B], resisting closure through [Craft Move]”",
        note: "Demonstrates Band 5 Criterion A sensitivity to conceptual complexity.",
      },
      {
        name: "Iser's Co-Construction Principle",
        formula: "Determinate Textual Cues + Indeterminate Gaps + Reader Horizon = Substantiated Interpretation",
        note: "Both implied and resisting readings must stay bounded by concrete textual evidence.",
      },
      {
        name: "Minimum Studied Works (FA 2021)",
        formula: "SL: ≥ 9 works (≥ 3 translated, ≥ 4 English) · HL: ≥ 13 works (≥ 4 translated, ≥ 5 English)",
        note: "Remaining 2 (SL) or 4 (HL) works are free-choice additions set by your school syllabus.",
      },
      {
        name: "Individual Oral Extract & Outline Limits",
        formula: "2 Works (1 English + 1 Translated) · ≤ 40 lines per extract · ≤ 10 bullet points on outline",
        note: "15 minutes total: 10 min prepared oral (~4.5m / ~4.5m balance) + 5 min teacher Q&A.",
      },
      {
        name: "Strict Non-Overlap Work Rule",
        formula: "IO Works (2) ∩ HL Essay Work (1, HL) ∩ Paper 2 Works (2) = ∅ (Zero Overlap)",
        note: "Commits 4 distinct works at SL and 5 distinct works at HL; keep 3–4 non-overlapping works ready for Paper 2.",
      },
      {
        name: "HL Essay Scope & Word Window",
        formula: "1 Distinct Studied Work · 1,200–1,500 words · 20 marks (A5 / B5 / C5 / D5)",
        note: "External coursework worth 20% of HL grade; examiners stop crediting beyond 1,500 words.",
        level: "HL",
      },
    ],
  },
};
