import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "2-time-and-space",
  title: "AoE 2: Time & Space",
  strand: "Areas of Exploration",
  icon: "🧭",
  level: "SL",
  summary:
    "Explore how historical, cultural, and geographical contexts shape both the creation and changing reception of literary works, how spaces encode power, how translation acts as interpretation, and how to integrate context analytically without biographical or historical fallacy.",
  intro:
    "No literary text floats in a vacuum, yet no great work stays imprisoned inside the year it was published. **Area of Exploration 2: Time and Space** invites you to examine a fertile two-way relationship: how a work emerges from particular historical, cultural, and spatial realities (*context of production*), and how readers in other centuries, geographies, and languages remake its meaning (*context of reception*). Because the IB English A: Literature course requires you to study **works in translation** alongside works originally written in English (at least **3 translated works at SL** and **4 at HL**), you will also learn to read translation as a deliberate craft rather than transparent glass—and to weave cultural context directly into close textual analysis without falling into biography-hunting or textbook history dumps.",
  guide: [
    {
      id: "production-reception-contexts",
      heading: "Contexts of Production vs Contexts of Reception",
      level: "SL",
      discovery: {
        problem:
          "Read this unseen 1848 letter-fragment from a merchant father to his nineteen-year-old daughter:\n\n> *“A wise daughter knows that her hand secures not merely her own hearth, but the credit of her father's ledger; yield quietly to Mr. Halstead's offer, and every respectable parlour in this port will praise your prudence.”*\n\nWhy might an 1848 reader hear affectionate duty and pragmatic protection here, while a twenty-first-century reader hears transactional coercion—and which exact words in the passage already make that tension audible?",
        idea:
          "Notice that the words on the page never change, yet the **moral and cultural lens** brought to them shifts radically across time. Even within the 1848 phrasing, the pairing of **“hearth”** (domestic affection) with **“credit of her father's ledger”** (commercial accounting) and the imperative **“yield quietly”** quietly exposes the economic transaction beneath polite respectability. Great IB analysis links shifting historical reception directly back to tensions already wired into the text's language.",
      },
      body:
        "Every literary work sits at the intersection of at least two distinct historical moments:\n\n" +
        "- **Context of Production:** The historical, social, political, economic, religious, geographical, and literary-publishing conditions that shaped the work when it was written and first circulated. This includes prevailing gender norms, censorship laws, class structures, patronage systems, and dominant literary conventions.\n" +
        "- **Context of Reception:** The cultural, ethical, and aesthetic conditions under which audiences encounter, perform, study, or re-evaluate the work—whether across centuries (**diachronic reception**) or across different cultures and regions at the same moment (**synchronic reception**).\n\n" +
        "Literary theorist **Hans Robert Jauss** coined the phrase **horizon of expectations** (*Erwartungshorizont*) to describe the shared assumptions, genre norms, and moral frameworks an audience brings to a text. When a work confirms its original audience's horizon, it feels reassuring or conventional; when it disrupts that horizon, it provokes shock, censorship, or fierce debate. Decades later, as a society's moral horizon shifts, the very same passage can transform from scandalous to canonical—or from celebrated to deeply contested.\n\n" +
        "Consider two famous cross-era shifts: when Henrik Ibsen's *A Doll's House* `[Example text — not a set text]` premiered in 1879, Nora's final exit outraged many European audiences so sharply that German theatres pressured Ibsen into writing an alternative ending in which she stayed; modern audiences, by contrast, frequently experience the slamming door as a foundational statement of personal autonomy. Similarly, Jacobean playgoers watching William Shakespeare's *The Tempest* `[Example text — not a set text]` encountered Caliban partly through seventeenth-century discourses of natural hierarchy and New World wonder, whereas late twentieth-century postcolonial critics and directors foreground Caliban's linguistic resistance and territorial dispossession.\n\n" +
        "| Analytical Dimension | Context of Production | Context of Reception |\n" +
        "| --- | --- | --- |\n" +
        "| **Core question** | What cultural, historical, and literary forces shaped how this work was constructed? | How do later or culturally distant readers reinterpret this work's tensions and silences? |\n" +
        "| **Typical evidence** | Period idioms, genre conventions, social hierarchies, contemporary allusions inside the text | Shifts in critical focus, stage re-interpretations, altered sympathies toward marginalised characters |\n" +
        "| **IB analytical goal** | Explain how authorial choices engage with, negotiate, or critique norms of their era | Show why the text's ambiguities remain productive across changing ethical horizons |\n\n" +
        "Crucially, **reception is not a free-for-all**. A perceptive IB reader does not impose an anachronistic lecture onto an older work; instead, you demonstrate how the text's **own stylistic choices**—irony, structural juxtaposition, focalisation, unanswered silences—open space for multiple historical readings.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 245" role="img" aria-label="Dual-horizon diagram showing Context of Production flowing into the fixed Literary Text and branching outward into shifting Contexts of Reception">' +
        '<rect x="6" y="6" width="628" height="233" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="320" y="30" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">THE DUAL-HORIZON MODEL: PRODUCTION → TEXT → RECEPTION</text>' +
        '<rect x="24" y="48" width="170" height="148" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="109" y="70" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Context of Production</text>' +
        '<text x="109" y="92" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Historical &amp; political moment</text>' +
        '<text x="109" y="112" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Prevailing cultural norms</text>' +
        '<text x="109" y="132" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Publishing &amp; censorship</text>' +
        '<text x="109" y="152" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Original genre horizon</text>' +
        '<text x="109" y="180" text-anchor="middle" font-size="10" font-style="italic" fill="var(--ink-2)">Shapes creation &amp; form</text>' +
        '<line x1="194" y1="122" x2="226" y2="122" stroke="var(--brand)" stroke-width="2.2"/>' +
        '<polygon points="226,116 236,122 226,128" fill="var(--brand)"/>' +
        '<rect x="238" y="48" width="164" height="148" rx="10" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.8"/>' +
        '<text x="320" y="70" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">The Literary Text</text>' +
        '<text x="320" y="90" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">Fixed Words · Live Tensions</text>' +
        '<text x="320" y="113" text-anchor="middle" font-size="10.5" fill="var(--ink)">Diction &amp; semantic fields</text>' +
        '<text x="320" y="133" text-anchor="middle" font-size="10.5" fill="var(--ink)">Voice, irony &amp; focalisation</text>' +
        '<text x="320" y="153" text-anchor="middle" font-size="10.5" fill="var(--ink)">Form, staging &amp; silences</text>' +
        '<text x="320" y="180" text-anchor="middle" font-size="10" font-style="italic" fill="var(--ink-2)">Anchor every claim here</text>' +
        '<line x1="402" y1="122" x2="434" y2="122" stroke="var(--info)" stroke-width="2.2"/>' +
        '<polygon points="434,116 444,122 434,128" fill="var(--info)"/>' +
        '<rect x="446" y="48" width="170" height="148" rx="10" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1.5"/>' +
        '<text x="531" y="70" text-anchor="middle" font-size="12" font-weight="800" fill="var(--info)">Context of Reception</text>' +
        '<text x="531" y="92" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Diachronic (across eras)</text>' +
        '<text x="531" y="112" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Synchronic (across cultures)</text>' +
        '<text x="531" y="132" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Shifting moral horizons</text>' +
        '<text x="531" y="152" text-anchor="middle" font-size="10.5" fill="var(--ink)">• New staging &amp; critical lenses</text>' +
        '<text x="531" y="180" text-anchor="middle" font-size="10" font-style="italic" fill="var(--ink-2)">Activates latent meanings</text>' +
        '<text x="320" y="222" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)">Meaning emerges where historical horizons intersect with specific textual choices.</text>' +
        '</svg>',
      diagramCaption:
        "Production shapes the text's original codes; reception re-illuminates those codes across time and culture—but all credible IB claims pass through the centre box (the text itself).",
      workedExamples: [
        {
          title: "Analysing Dual Horizons in an Unseen 1906 Travelogue Extract",
          problem:
            "Read this unseen excerpt from a fictional 1906 imperial travelogue:\n\n> *“By dusk our railway had stitched the unruly valley to the capital; the stationmaster saluted beneath the new clock-tower, and even the river seemed to learn punctuality.”*\n\nHow do contexts of production and contemporary reception illuminate the figurative choices in this sentence?",
          steps: [
            "Pinpoint the specific authorial choices first: the verb **“stitched”** (domesticating territorial conquest into neat repair), the adjective **“unruly”** (casting indigenous landscape as disorderly), and the personification **“even the river seemed to learn punctuality”** (imposing industrial clock-time onto nature).",
            "Examine the **context of production** (1906): within an early twentieth-century imperial horizon celebrating technological progress and administrative order, the narrator's crisp, triumphant cadence frames rail infrastructure and standardised clock-time as civilising virtues.",
            "Examine the **context of reception** (contemporary postcolonial and ecocritical reading): modern readers hear ironic hubris in **“seemed to learn”**—the hedging verb *seemed* subtly exposes the narrator's projection, revealing imperial anxiety that both landscape and colonised subjects exceed administrative control.",
            "Synthesise both horizons without abandoning the text: the passage does not merely reflect 1906 optimism; its self-satisfied metaphor of imposing **“punctuality”** on a river invites later readers to interrogate the arrogance embedded in imperial rhetoric.",
          ],
          answer:
            "Production illuminates the 1906 discourse of rail-and-clock 'progress', while contemporary reception exposes the ironic hubris latent in the narrator's personification of a landscape forced to 'learn punctuality'.",
          yourTurn: {
            question:
              "When an essay examines how a 2020s Singaporean theatre audience responds differently to a seventeenth-century tragedy than its original London audience did, which context is being foregrounded: **production** or **reception**?",
            answer: {
              type: "text",
              accept: ["reception", "context of reception"],
              display: "context of reception",
            },
            solution:
              "Because the focus is on how a later and geographically distinct audience interprets the work through a different cultural horizon, the focus is the **context of reception**.",
          },
        },
      ],
      keyPoints: [
        "**Context of production** concerns the historical, social, and literary conditions in which a work was created; **context of reception** concerns how later or cross-cultural audiences reinterpret it.",
        "Shifts in reception can be **diachronic** (across historical periods) or **synchronic** (across distinct cultural communities in the same era).",
        "Hans Robert Jauss's **horizon of expectations** explains why a work's reception changes as readers' moral, political, and aesthetic norms evolve.",
        "Top-band IB essays never treat changing reception as detached opinion: they trace how shifting lenses activate ambiguities, ironies, and silences **already embedded in the text's craft**.",
      ],
      whyItWorks:
        "Examiners reward AoE 2 awareness in Criterion A and Criterion B because literature endures precisely through friction between eras. Showing *both* what a choice signified within its original cultural horizon *and* how its resonance shifts for later audiences moves your analysis from flat summary to nuanced, multi-dimensional interpretation.",
      strategies: [
        "When studying any historical work in your Learner Portfolio, write two 3-sentence notes side by side: *How an original audience might have heard this moment* vs *What strikes a contemporary global reader*.",
        "Hunt for **lexical pressure points**—words like *duty, honour, civilised, proper, natural*—whose moral connotations have shifted dramatically across time.",
        "In Paper 2, compare how two works from different periods or regions disrupt their own audiences' horizons of expectations using distinct literary forms.",
      ],
      thinkDeeper:
        "Can an author ever fully control the future reception of a work? Consider a studied text whose sympathetic hero or villain has flipped roles in modern criticism: is that shift a distortion of the text, or proof of its artistic complexity?",
    },
    {
      id: "historical-cultural-lenses",
      heading: "Cultural Values, Space, Place & Power Dynamics",
      level: "SL",
      discovery: {
        problem:
          "Read this unseen prose miniature:\n\n> *“From the service staircase, Mei-Ling could hear only the silver cutlery and the laugh that stopped whenever the baize door swung open. Upstairs, the map of the harbour hung framed in teak; downstairs, the tide-mark climbed the damp plaster in silence.”*\n\nBefore looking at plot or dialogue, how does the architecture of this single room-pair dramatise class and power?",
        idea:
          "Space here is not neutral wallpaper—it is a **vertical diagram of hierarchy**. The **baize door** acts as an acoustic and social filter (laughter halts when labour enters); the framed **“map of the harbour”** upstairs signifies abstract ownership and aesthetic distance, while the creeping **“tide-mark”** downstairs forces working bodies to absorb the physical reality of the water. Space speaks power visually and structurally.",
      },
      body:
        "In IB Literature, **space and place** are never merely geographical backdrops. Writers construct physical environments as symbolic arenas where cultural values—class, gender, empire, belonging, and collective memory—are **endorsed**, **negotiated**, or **subverted**.\n\n" +
        "Four recurring spatial archetypes appear across periods, forms, and world literatures:\n\n" +
        "1. **Domestic Spaces** (parlours, kitchens, bedrooms, thresholds, gardens): Often staged as microcosms of broader political hierarchies. Closed doors, locked rooms, and domestic rituals can embody sanctuary and heritage—or surveillance, gendered confinement, and suffocating class propriety. In Lorraine Hansberry's *A Raisin in the Sun* `[Example text — not a set text]`, a cramped, worn Chicago apartment visibly materialises systemic racial exclusion and competing generational dreams.\n" +
        "2. **Urban Spaces** (tenements, boulevards, railway stations, neon streets, bureaucratic offices): Cities frequently dramatise modernity's paradox—hyper-proximity paired with profound anonymity, kinetic ambition colliding with economic precarity, and industrial tempo fracturing human memory.\n" +
        "3. **Colonial & Postcolonial Spaces** (plantations, members-only clubs, imperial maps, ports, altered landscapes): Spatial design enforces authority through segregation, naming, and resource extraction. Postcolonial writers often invert imperial geography—as in Jean Rhys's *Wide Sargasso Sea* `[Example text — not a set text]`, where vibrant, sensuous Caribbean spaces contrast sharply against the cold, shuttered English attic to interrogate colonial control.\n" +
        "4. **Borderland & Liminal Spaces** (frontiers, waiting rooms, bridges, coastlines, trains, diaspora homes): Derived from *limen* (threshold), liminal spaces suspend characters between nations, languages, classes, or historical eras. They foreground hybrid identity, displacement, nostalgia, and cultural negotiation.\n\n" +
        "When analysing how a text engages cultural values through space, avoid binary claims that a writer simply 'agrees with' or 'rejects' society. Most rich literary works **negotiate** tensions—giving alluring weight to traditional security even while exposing its human cost. Ask three sharp questions of any setting:\n" +
        "- **Access:** Who may cross thresholds freely, and who is confined, surveilled, or excluded?\n" +
        "- **Perception (Focalisation):** Through whose eyes is the space framed—the map-maker's bird's-eye gaze or the inhabitant's embodied experience?\n" +
        "- **Stability vs Disruption:** Does the space remain static, decay, fracture, or transform over the arc of the work?",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 258" role="img" aria-label="Four-quadrant symbolic space compass showing Domestic, Urban, Colonial, and Borderland spaces radiating from Textual Craft">' +
        '<rect x="6" y="6" width="628" height="246" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="320" y="29" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">SYMBOLIC SPACES &amp; CULTURAL POWER DYNAMICS</text>' +
        '<rect x="24" y="44" width="236" height="84" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.4"/>' +
        '<text x="142" y="65" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Domestic Space</text>' +
        '<text x="142" y="84" text-anchor="middle" font-size="10.5" fill="var(--ink)">Parlours · Kitchens · Attics · Doors</text>' +
        '<text x="142" y="102" text-anchor="middle" font-size="10" fill="var(--ink-2)">Sanctuary vs gendered confinement</text>' +
        '<text x="142" y="117" text-anchor="middle" font-size="10" fill="var(--ink-2)">Class propriety &amp; private memory</text>' +
        '<rect x="380" y="44" width="236" height="84" rx="10" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1.4"/>' +
        '<text x="498" y="65" text-anchor="middle" font-size="12" font-weight="800" fill="var(--info)">Urban Space</text>' +
        '<text x="498" y="84" text-anchor="middle" font-size="10.5" fill="var(--ink)">Streets · Tenements · Transit · Offices</text>' +
        '<text x="498" y="102" text-anchor="middle" font-size="10" fill="var(--ink-2)">Crowd proximity vs alienation</text>' +
        '<text x="498" y="117" text-anchor="middle" font-size="10" fill="var(--ink-2)">Economic stratification &amp; tempo</text>' +
        '<rect x="24" y="152" width="236" height="84" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.4"/>' +
        '<text x="142" y="173" text-anchor="middle" font-size="12" font-weight="800" fill="var(--accent)">Colonial / Postcolonial Space</text>' +
        '<text x="142" y="192" text-anchor="middle" font-size="10.5" fill="var(--ink)">Clubs · Plantations · Maps · Ports</text>' +
        '<text x="142" y="210" text-anchor="middle" font-size="10" fill="var(--ink-2)">Segregation, naming &amp; erasure</text>' +
        '<text x="142" y="225" text-anchor="middle" font-size="10" fill="var(--ink-2)">Imperial gaze vs local resistance</text>' +
        '<rect x="380" y="152" width="236" height="84" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.4"/>' +
        '<text x="498" y="173" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">Borderland / Liminal Space</text>' +
        '<text x="498" y="192" text-anchor="middle" font-size="10.5" fill="var(--ink)">Frontiers · Bridges · Coasts · Exile</text>' +
        '<text x="498" y="210" text-anchor="middle" font-size="10" fill="var(--ink-2)">Hybrid identity &amp; cultural transit</text>' +
        '<text x="498" y="225" text-anchor="middle" font-size="10" fill="var(--ink-2)">Displacement, longing &amp; threshold</text>' +
        '<line x1="260" y1="86" x2="288" y2="116" stroke="var(--ink-2)" stroke-width="1.4" stroke-dasharray="4 3"/>' +
        '<line x1="380" y1="86" x2="352" y2="116" stroke="var(--ink-2)" stroke-width="1.4" stroke-dasharray="4 3"/>' +
        '<line x1="260" y1="194" x2="288" y2="164" stroke="var(--ink-2)" stroke-width="1.4" stroke-dasharray="4 3"/>' +
        '<line x1="380" y1="194" x2="352" y2="164" stroke="var(--ink-2)" stroke-width="1.4" stroke-dasharray="4 3"/>' +
        '<circle cx="320" cy="140" r="44" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/>' +
        '<text x="320" y="131" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">TEXTUAL</text>' +
        '<text x="320" y="145" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">CRAFT</text>' +
        '<text x="320" y="160" text-anchor="middle" font-size="9" fill="var(--ink-2)">Endorse·Negotiate·Subvert</text>' +
        '</svg>',
      diagramCaption:
        "Four major spatial archetypes through which literary texts dramatise access, belonging, exclusion, and cultural power.",
      workedExamples: [
        {
          title: "Reading Borderland Space in an Unseen Lyric Stanza",
          problem:
            "Analyse how spatial imagery negotiates belonging and state power in this unseen stanza:\n\n> *“Our passports carry ink from two dead seasons;\n> on the iron footbridge between the customs sheds,\n> my grandmother keeps her keys tied inside a handkerchief\n> to a courtyard no street-sign remembers.”*",
          steps: [
            "Identify the spatial archetype: the **“iron footbridge between the customs sheds”** is a classic **borderland / liminal space**—a physical threshold suspended between rival jurisdictions rather than settled inside either.",
            "Examine the tension between institutional space and intimate memory: **“passports”**, **“customs sheds”**, and missing **“street-sign[s]”** belong to bureaucratic cartography that erases past places, whereas **“keys tied inside a handkerchief”** and **“courtyard”** preserve tactile domestic belonging.",
            "Evaluate the ironic pathos of the final line: carrying physical keys to a home **“no street-sign remembers”** dramatises how state renaming can abolish a location on official maps without erasing its emotional persistence in intergenerational memory.",
            "Connect craft to AoE 2 cultural power: the juxtaposition of cold industrial nouns (**“iron”**, **“customs”**) against fragile domestic fabric (**“handkerchief”**) subtly subverts the finality of political borders.",
          ],
          answer:
            "By placing the speaker's grandmother on a liminal footbridge clutching domestic keys to an erased courtyard, the stanza contrasts bureaucratic spatial erasure with resilient intimate memory.",
          yourTurn: {
            question:
              "What term (derived from the Latin *limen*, meaning threshold) describes an in-between literary space such as a frontier, bridge, or waiting room where characters are suspended between identities or worlds?",
            answer: {
              type: "text",
              accept: ["liminal", "liminal space", "borderland", "borderland space"],
              display: "liminal space",
            },
            solution:
              "A **liminal space** (or **borderland space**) situates characters on a threshold between nations, classes, eras, or identities, dramatising transit and cultural hybridity.",
          },
        },
      ],
      keyPoints: [
        "Literary settings act as **symbolic systems of power**, not mere decorative backdrops.",
        "Track four key spatial archetypes: **domestic**, **urban**, **colonial/postcolonial**, and **borderland/liminal** spaces.",
        "Always check whether a text **endorses**, **negotiates**, or **subverts** prevailing cultural norms of class, gender, empire, and memory—most nuanced works occupy the space of negotiation and tension.",
        "In drama, spatial power is physicalised through **staging, proxemics, lighting, and set boundaries**; in prose, through **focalisation and motif**; in poetry, through **imagery and spatial juxtaposition**.",
      ],
      whyItWorks:
        "Focusing on space gives you an instant bridge between micro-level close reading (Criterion B) and macro-level cultural understanding (Criterion A). Even in an unseen Paper 1 passage with zero historical footnotes, spatial boundaries—who stands inside or outside, above or below, seen or unseen—unlock rich insights into power.",
      strategies: [
        "Draw a quick 15-second margin sketch of the **spatial map** of any Paper 1 passage: mark doors, heights, walls, borders, and who controls movement across them.",
        "Ask how **memory clings to objects and places** when official history shifts—keys, renamed streets, family portraits, or ruined buildings are high-yield AoE 2 motifs.",
        "On Paper 2, pairing two works that both feature confined domestic rooms or displaced borderlands lets you compare how distinct cultural contexts and forms reshape the same spatial trope.",
      ],
      thinkDeeper:
        "Think about a domestic room in a work you are studying: does the same room symbolize safety to one character and captivity to another? How does that split focalisation reveal hidden fault lines in the work's society?",
    },
    {
      id: "works-in-translation",
      heading: "Reading Works in Translation: Cultural Nuance & Translator Choices",
      level: "SL",
      discovery: {
        problem:
          "Imagine a line from a coastal East Asian lyric poem whose literal word-for-word gloss is: *“Salt-wind carries old-home-ache across the veranda.”* Compare two published English translations:\n\n- **Version 1:** *“The sea breeze brings homesickness onto the porch.”*\n- **Version 2:** *“Salt-wind carries longing for the ancestral hearth across the engawa.”*\n\nWhich version smooths the poem into familiar English, which preserves cultural distance—and what is gained and lost in each choice?",
        idea:
          "Version 1 makes the line effortlessly fluent for an Anglophone reader (**porch**, **homesickness**), yet it erases the specific architectural threshold (*engawa*) and the pungent tactile compound (*salt-wind*). Version 2 asks the reader to step toward the source culture, preserving rhythmic weight and cultural specificity at the cost of instant familiarity. **Every translation is an interpretive act—never a neutral photocopy.**",
      },
      body:
        "A defining pillar of IB Diploma English A: Literature (First Assessment 2021) is the mandatory study of **works in translation**:\n\n" +
        "- **Standard Level (SL):** Minimum **9 works total** — at least **4** originally written in English (PRL), at least **3** works in translation (PRL), and **2** free-choice works (across at least 3 forms, 3 periods, and 3 countries/regions).\n" +
        "- **Higher Level (HL):** Minimum **13 works total** — at least **5** originally written in English (PRL), at least **4** works in translation (PRL), and **4** free-choice works (across all 4 forms, at least 3 periods, and at least 4 countries/regions).\n" +
        "- **Individual Oral (IA — SL & HL):** You MUST examine your Global Issue across **1 work originally written in English** and **1 work in translation**.\n\n" +
        "Reading a translated work demands **translational awareness**. Translation scholar **Lawrence Venuti** mapped two classic orientations along a spectrum:\n\n" +
        "- **Domestication:** Adapting foreign idioms, syntax, names, and cultural references into smooth, idiomatic target-language English so the translation feels 'invisible' and native. *Gain:* immediate readability and rhythmic fluency. *Risk:* cultural flattening or erasing the distinctive worldview of the source culture.\n" +
        "- **Foreignisation:** Deliberately retaining elements of the source text's cultural lexicon, syntax, cadence, or untranslated terms so the reader feels the presence of another language and culture. *Gain:* cultural specificity and resistance to Anglophone assimilation. *Risk:* opacity or awkwardness if poorly judged.\n\n" +
        "Four specific areas where translator choices subtly reshape literary meaning:\n\n" +
        "1. **Register, Address & Honorifics:** Many languages distinguish formal from intimate 'you' (e.g. French *vous/tu*, Spanish *usted/tú*) or encode age/status in kinship titles. Modern English 'you' flattens these shifts, so translators must compensate through diction, tone, or retained terms of address.\n" +
        "2. **Culturally Loaded Terms & Idioms:** Words deeply rooted in a cultural ethos (such as Portuguese *saudade*, Japanese *mono no aware*, or Arabic hospitality idioms) rarely possess a 1:1 English equivalent. Famously, translators of Albert Camus's *L'Étranger* `[Example text — not a set text]` debate whether to render *“Aujourd'hui, maman est morte”* as *“Mother died today”* (which can sound starkly clinical to English ears) or *“Maman died today”* (preserving an intimate French register that complicates judgements of Meursault's detachment).\n" +
        "3. **Acoustic Craft, Wordplay & Metre:** Rhyme schemes, syllable counts, puns, and rhythmic patterns rarely map identically across languages. Translators of verse—for instance, across competing English translations of Homer's *The Odyssey* `[Example text — not a set text]`—must choose whether to prioritise strict metrical cadence, vivid contemporary speech, or archaic grandeur.\n" +
        "4. **Paratext:** Always inspect the **translator's preface, introduction, footnotes, and glossary**. These reveal the deliberate interpretive principles guiding the edition you hold in your hands.\n\n" +
        "**Vital IB Exam Rule:** Never invent speculative claims about a source language you cannot read (e.g. *'In the original Russian this word is probably harsher'*). Instead, analyse the **concrete English edition in front of you**, noting visible cultural references, retained source terms, register shifts, footnotes, or documented translation choices from your edition's paratext.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 242" role="img" aria-label="Venuti translation spectrum from Foreignisation to Domestication with four literary trade-off pillars below">' +
        '<rect x="6" y="6" width="628" height="230" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="320" y="29" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">VENUTI’S TRANSLATION SPECTRUM &amp; CRAFT TRADE-OFFS</text>' +
        '<rect x="28" y="46" width="210" height="72" rx="10" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1.5"/>' +
        '<text x="133" y="67" text-anchor="middle" font-size="12" font-weight="800" fill="var(--info)">Foreignisation</text>' +
        '<text x="133" y="86" text-anchor="middle" font-size="10" fill="var(--ink)">Moves reader toward source culture</text>' +
        '<text x="133" y="103" text-anchor="middle" font-size="10" fill="var(--ink-2)">Preserves idioms, syntax &amp; distance</text>' +
        '<rect x="402" y="46" width="210" height="72" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="507" y="67" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Domestication</text>' +
        '<text x="507" y="86" text-anchor="middle" font-size="10" fill="var(--ink)">Moves text toward target reader</text>' +
        '<text x="507" y="103" text-anchor="middle" font-size="10" fill="var(--ink-2)">Prioritises fluent, familiar English</text>' +
        '<line x1="244" y1="82" x2="396" y2="82" stroke="var(--ink)" stroke-width="2.5"/>' +
        '<polygon points="244,76 234,82 244,88" fill="var(--info)"/>' +
        '<polygon points="396,76 406,82 396,88" fill="var(--brand)"/>' +
        '<circle cx="320" cy="82" r="14" fill="var(--surface-2)" stroke="var(--accent)" stroke-width="2"/>' +
        '<text x="320" y="86" text-anchor="middle" font-size="10" font-weight="800" fill="var(--accent)">⚖</text>' +
        '<rect x="28" y="138" width="136" height="78" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>' +
        '<text x="96" y="159" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">1. Register</text>' +
        '<text x="96" y="177" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Formal vs intimate</text>' +
        '<text x="96" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">pronouns &amp; honorifics</text>' +
        '<rect x="176" y="138" width="136" height="78" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>' +
        '<text x="244" y="159" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">2. Cultural Idioms</text>' +
        '<text x="244" y="177" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Loaded nouns, food,</text>' +
        '<text x="244" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">proverbs &amp; kinship</text>' +
        '<rect x="328" y="138" width="136" height="78" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>' +
        '<text x="396" y="159" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">3. Sound &amp; Metre</text>' +
        '<text x="396" y="177" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Rhyme, cadence,</text>' +
        '<text x="396" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">wordplay &amp; pace</text>' +
        '<rect x="476" y="138" width="136" height="78" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>' +
        '<text x="544" y="159" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">4. Paratext</text>' +
        '<text x="544" y="177" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Translator’s note,</text>' +
        '<text x="544" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">footnotes &amp; glossary</text>' +
        '</svg>',
      diagramCaption:
        "Every translation negotiates a trade-off along Venuti's spectrum across register, cultural idioms, acoustic rhythm, and paratextual guidance.",
      workedExamples: [
        {
          title: "Comparing Three Translations of an Unseen Dramatic Line",
          problem:
            "An imagined nineteenth-century courtyard drama ends an argument between a younger sister and her elder brother. Literally glossed, the sister says: *“Elder-brother, your roof holds much rain, yet no tea warms my hands.”* Compare:\n\n- **Translation A:** *“Brother, you're a rich man, yet you never show me any kindness.”*\n- **Translation B:** *“Elder Brother, your wide eaves shelter the rain, yet no bowl warms my palms.”*\n\nEvaluate how each translator's strategy transforms dramatic subtext and cultural texture.",
          steps: [
            "Classify the strategies: **Translation A** applies **domestication**, collapsing the proverb into direct, colloquial English; **Translation B** leans toward **foreignisation**, retaining the kinship title **“Elder Brother”**, the architectural metaphor **“wide eaves”**, and the physical ritual **“no bowl warms my palms”**.",
            "Analyse the shift in **register and subtext**: Translation A spells out the emotional accusation overtly (*“rich man”*, *“never show me any kindness”*), flattening the scene's restrained, indirect politeness.",
            "Analyse the craft preserved in Translation B: the formal address **“Elder Brother”** signals hierarchical deference even while the spatial imagery (**“wide eaves”** vs cold **“palms”**) delivers an incisive rebuke through household hospitality codes—preserving theatrical subtext.",
            "Draw the IB takeaway: citing the translator's imagery in Translation B allows you to analyse how cultural politeness codes sharpen, rather than soften, domestic conflict.",
          ],
          answer:
            "Translation A domesticates the proverb into blunt accusation, erasing hierarchical politeness; Translation B foreignises respectfully, preserving kinship deference and hospitality imagery that deepen dramatic subtext.",
          yourTurn: {
            question:
              "Using Lawrence Venuti's terminology, what is the strategy called when a translator deliberately preserves source-culture terms, syntax, or idioms so that the reader senses cultural difference rather than seamless Anglophone familiarity?",
            answer: {
              type: "text",
              accept: ["foreignisation", "foreignization", "foreignising", "foreignizing"],
              display: "foreignisation",
            },
            solution:
              "**Foreignisation** (also spelled *foreignization*) keeps markers of the source language and culture visible so that cultural nuance is not erased into familiar target-language idioms.",
          },
        },
      ],
      keyPoints: [
        "IB Literature mandates at least **3 translated works at SL** (out of min 9) and **4 translated works at HL** (out of min 13), plus **1 English + 1 translated work** in every Individual Oral.",
        "Translation is an **interpretive act**: no translation is completely transparent, and every version balances loss and gain.",
        "**Domestication** prioritises smooth target-culture fluency; **foreignisation** retains source-culture distinctiveness and resists cultural erasure.",
        "Always read the **translator's preface and footnotes**, and comment strictly on visible features of your studied translation rather than guessing about a source language you cannot read.",
      ],
      whyItWorks:
        "Treating a translated work as though it were casually written in modern English misses half its AoE 2 richness—and can even cause misreadings when formal pronouns or cultural idioms flatten in English. A single perceptive sentence acknowledging register, cultural specificity, or a retained term elevates both your Individual Oral and Paper 2 essays.",
      strategies: [
        "Always log the **translator's name, publication date, and 2–3 key notes from the translator's preface** on the cover page of your Learner Portfolio entry for every translated work.",
        "If two translations of a short poem or opening paragraph exist, compare 5 lines side by side in your portfolio—nothing trains Criterion B sensitivity to diction and rhythm faster.",
        "Never write *'This gets lost in translation'* as a vague cliché; specify *what* cultural nuance, honorific register, or figurative association is being navigated.",
      ],
      thinkDeeper:
        "If two students sit Paper 2 writing on the same translated novel using two different published English translations, could they legitimately arrive at slightly different tones for the narrator? What does that suggest about where literary meaning resides?",
    },
    {
      id: "context-without-fallacy",
      heading: "Integrating Context Analytically Without Biographical or Historical Fallacy",
      level: "SL",
      discovery: {
        problem:
          "Read these two student openings about the same unseen 1919 anti-war elegy stanza (*“We filed our dead in alphabetised ledgers / and called the silence peace”*):\n\n- **Draft A:** *“World War I ended in 1918 after four brutal years of trench warfare. The poet was traumatised by losing comrades at the front, so he clearly wanted to express his personal grief and make readers hate bureaucrats.”*\n- **Draft B:** *“By casting bereavement inside the sterile bureaucratic diction of ‘alphabetised ledgers’, the speaker exposes how postwar administrative language sanitises mass loss—a chilling irony sharpened by the clipped euphemism that ‘called the silence peace’.”*\n\nBoth drafts know the historical period. Why does Draft B hit Band 5 on Criteria A & B while Draft A stalls in Band 2?",
        idea:
          "Draft A commits three classic IB errors at once: it dumps textbook history detached from the poem, equates the speaker with the author's private biography, and claims mind-reading access to what the author *'clearly wanted'*. Draft B keeps **contextual tension alive inside the words themselves**—linking postwar disillusionment directly to **“alphabetised ledgers”** and euphemistic **“silence”**.",
      },
      body:
        "AoE 2 asks you to bring historical and cultural awareness to literature—yet one of the fastest ways IB students lose marks on Paper 1, Paper 2, the Individual Oral, and the HL Essay `[HL]` is letting **context hijack close reading**.\n\n" +
        "Guard against four classic contextual fallacies:\n\n" +
        "1. **The Intentional Fallacy (Wimsatt & Beardsley, 1946):** Claiming that a text's meaning equals whatever the author privately intended (*“The writer meant to show…”, “She wanted the reader to feel…”*). Literary critics **W. K. Wimsatt and Monroe Beardsley** argued that an author's private design is neither reliably accessible nor the true standard of literary meaning; what matters is what the **achieved text** enacts through language, form, and structure.\n" +
        "2. **The Biographical Fallacy:** Collapsing the literary speaker, persona, or narrator into the historical author and treating literature as veiled autobiography (*“Because the novelist struggled financially, this protagonist represents the author's own anger”*). Even in memoir and literary non-fiction, writers craft a selective **persona**.\n" +
        "3. **The History-Essay Dump (Context-Drop):** Inserting a standalone block of historical summary (*“In the Victorian era, women had few legal rights…”*) that sits beside the text like an encyclopaedia entry without analysing a single literary choice.\n" +
        "4. **Presentism (Anachronistic Moralising):** Dismissing or scolding an older work solely because its world fails twenty-first-century ethical norms, rather than analysing how the text dramatises, complicates, or exposes tensions within its own cultural horizon.\n\n" +
        "Instead, apply the **Anchor-in-Craft Chain** in every contextual paragraph:\n\n" +
        "> **Micro Textual Choice** (embedded phrase, staging cue, structural shift) → **Literary Mechanism & Effect** (irony, tension, focalisation, dissonance) → **Cultural/Historical Tension Engaged** (how the work reflects, negotiates, or critiques its time and space).\n\n" +
        "For example, rather than reciting Mary Shelley's tragic family biography when discussing *Frankenstein* `[Example text — not a set text]`, a Band 5 essay analyses how the novel's nested frame narratives and sublime Arctic imagery register Romantic anxieties about unchecked Enlightenment ambition and scientific isolation. Notice the verbs that keep you safe from fallacy: replace *“wanted to prove”* and *“felt”* with **enacts, interrogates, dramatises, unsettles, complicates, registers, subverts**.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 248" role="img" aria-label="Comparison flowchart contrasting detached History/Biography Dump pitfalls against the Band 5 Anchor-in-Craft analytical pipeline">' +
        '<rect x="6" y="6" width="628" height="236" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="320" y="29" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">CONTEXT PITFALLS vs THE BAND 5 ANCHOR-IN-CRAFT CHAIN</text>' +
        '<rect x="24" y="46" width="592" height="76" rx="10" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.4"/>' +
        '<text x="40" y="66" font-size="11" font-weight="800" fill="var(--bad)">✗ DETACHED CONTEXT &amp; FALLACY (Caps Criteria A &amp; B)</text>' +
        '<rect x="40" y="76" width="166" height="34" rx="6" fill="var(--surface)" stroke="var(--bad)" stroke-width="1"/>' +
        '<text x="123" y="97" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">History Dump / Bio Speculation</text>' +
        '<line x1="206" y1="93" x2="232" y2="93" stroke="var(--bad)" stroke-width="2"/>' +
        '<polygon points="232,88 240,93 232,98" fill="var(--bad)"/>' +
        '<rect x="242" y="76" width="166" height="34" rx="6" fill="var(--surface)" stroke="var(--bad)" stroke-width="1"/>' +
        '<text x="325" y="97" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">“The author wanted to…”</text>' +
        '<line x1="408" y1="93" x2="434" y2="93" stroke="var(--bad)" stroke-width="2"/>' +
        '<polygon points="434,88 442,93 434,98" fill="var(--bad)"/>' +
        '<rect x="444" y="76" width="156" height="34" rx="6" fill="var(--surface)" stroke="var(--bad)" stroke-width="1"/>' +
        '<text x="522" y="97" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">Zero Craft Evaluation</text>' +
        '<rect x="24" y="138" width="592" height="88" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="40" y="159" font-size="11" font-weight="800" fill="var(--good)">✓ ANCHOR-IN-CRAFT PIPELINE (Hits Band 5 Criteria A, B &amp; C)</text>' +
        '<rect x="40" y="170" width="166" height="44" rx="6" fill="var(--surface)" stroke="var(--good)" stroke-width="1.2"/>' +
        '<text x="123" y="188" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">1. Textual Choice</text>' +
        '<text x="123" y="203" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Micro-quote · Form · Staging</text>' +
        '<line x1="206" y1="192" x2="232" y2="192" stroke="var(--good)" stroke-width="2"/>' +
        '<polygon points="232,187 240,192 232,197" fill="var(--good)"/>' +
        '<rect x="242" y="170" width="166" height="44" rx="6" fill="var(--surface)" stroke="var(--good)" stroke-width="1.2"/>' +
        '<text x="325" y="188" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">2. Literary Effect</text>' +
        '<text x="325" y="203" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Irony · Tone · Dissonance</text>' +
        '<line x1="408" y1="192" x2="434" y2="192" stroke="var(--good)" stroke-width="2"/>' +
        '<polygon points="434,187 442,192 434,197" fill="var(--good)"/>' +
        '<rect x="444" y="170" width="156" height="44" rx="6" fill="var(--surface)" stroke="var(--good)" stroke-width="1.2"/>' +
        '<text x="522" y="188" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--good)">3. Cultural Tension</text>' +
        '<text x="522" y="203" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Interrogates Time &amp; Space</text>' +
        '</svg>',
      diagramCaption:
        "Always start with concrete textual craft, explain its immediate literary effect, and then open outward to the cultural or historical tension it engages.",
      workedExamples: [
        {
          title: "Rescuing a Fallacy-Ridden Paragraph on an Unseen Industrial Prose Extract",
          problem:
            "Read this unseen excerpt:\n\n> *“The foundry whistle divided the morning into six-minute wages; even the sparrows paused on the soot-blackened lintel until the steam cleared.”*\n\nA student writes: *“In the Industrial Revolution, factory owners exploited workers terribly. The author grew up near factories and hated capitalism, so he wanted to make us angry about pollution.”* Rewrite this into a disciplined, fallacy-free IB analytical paragraph.",
          steps: [
            "Diagnose the fallacies: sentence 1 is a **history-essay dump** detached from the extract; sentence 2 commits both **biographical fallacy** (*'grew up near factories'*) and **intentional fallacy** (*'wanted to make us angry'*).",
            "Anchor in textual choices: focus on the metonymy **“six-minute wages”** (converting lived time into monetised units), the personified authority of **“the foundry whistle divided”**, and the ecological interruption where **“even the sparrows paused”** on the **“soot-blackened lintel”**.",
            "Trace the literary effect: the sharp semicolon links human economic discipline directly to disrupted natural rhythms, creating a quietly oppressive cadence rather than loud melodrama.",
            "Fold cultural context smoothly into the textual claim: *“By having the ‘foundry whistle’ carve morning itself into ‘six-minute wages’, the prose dramatises how industrial time-discipline colonises not only human labour but the natural world; the detail that ‘even the sparrows paused’ against a ‘soot-blackened lintel’ registers broader anxieties about mechanical dominance over organic life without needing explicit moralising.”*",
          ],
          answer:
            "Anchor industrial-era tension inside specific phrasing ('six-minute wages', 'soot-blackened lintel', rhythmic semicolon pairing) using analytical verbs ('dramatises', 'registers') instead of biographical mind-reading.",
          yourTurn: {
            question:
              "What is the critical fallacy—named by W. K. Wimsatt and Monroe Beardsley—of claiming a text's meaning is fixed by what the author privately meant or intended to achieve?",
            answer: {
              type: "text",
              accept: ["intentional fallacy", "the intentional fallacy"],
              display: "intentional fallacy",
            },
            solution:
              "The **intentional fallacy** (Wimsatt & Beardsley, 1946) errs by locating literary meaning in the author's supposed private intention rather than in the textual evidence and craft on the page.",
          },
        },
      ],
      keyPoints: [
        "Avoid the **intentional fallacy** (claiming to know what the author 'wanted' or 'meant') and the **biographical fallacy** (treating speaker/character as the author's diary).",
        "Never open a Paper 2 or HL Essay with a standalone **history-essay dump**; context earns marks ONLY when integrated into analysis of literary choices.",
        "Avoid **presentism** (judging historical works purely by modern standards without examining their internal stylistic tensions).",
        "Follow the **Anchor-in-Craft Chain**: `Textual Choice → Literary Effect → Cultural/Historical Tension`, driven by analytical verbs (*dramatises, complicates, interrogates, registers, subverts*).",
      ],
      whyItWorks:
        "IB Literature assesses *literary analysis*, not history or psychology. When every contextual insight is tethered to diction, imagery, structure, or form, it simultaneously powers Criterion A (perceptive interpretation) and Criterion B (evaluation of authorial choices) while keeping Criterion C tightly focused.",
      strategies: [
        "Run a **Verb Audit** on every essay draft: Ctrl+F for *'wanted to'*, *'meant to'*, *'felt'*, or *'because the author'*—and rewrite each sentence so the **text, speaker, or specific device** is the grammatical subject.",
        "Cap any pure contextual framing phrase to **one subordinate clause** attached directly to a quotation (e.g. *'Echoing postwar anxieties over conformity, the clipped syntax…'*).",
        "In Paper 1 (unseen), remember you have NO biography—and you do NOT need one! Let internal historical/spatial cues inside the extract guide your contextual awareness.",
      ],
      thinkDeeper:
        "When *is* biographical or historical information genuinely illuminating in literary study—for instance, in a memoir or politically censored work? How do you cite it as a *framing condition* rather than as a reductive explanation of every metaphor?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Context of Production",
        back: "The historical, social, political, geographical, and literary-publishing conditions that shaped a work when it was written and first circulated.",
      },
      {
        front: "Context of Reception",
        back: "The cultural, moral, and aesthetic conditions under which later (diachronic) or culturally different (synchronic) audiences read, perform, or reinterpret a work.",
      },
      {
        front: "Horizon of Expectations (Hans Robert Jauss)",
        back: "The shared literary conventions, genre assumptions, and cultural values an audience brings to a work—explaining why reception shifts across time and place.",
      },
      {
        front: "Diachronic vs Synchronic Reception",
        back: "**Diachronic** tracks how reception changes across *time* (different centuries/eras); **synchronic** compares how different *cultures or communities* interpret the work at the same historical moment.",
      },
      {
        front: "Domestic Space as Symbolic Arena",
        back: "Home interiors (parlours, kitchens, attics, thresholds) used to dramatise intimacy, family memory, class propriety, surveillance, or gendered confinement.",
      },
      {
        front: "Borderland / Liminal Space",
        back: "From Latin *limen* (threshold): frontiers, bridges, coasts, waiting rooms, or exile spaces where characters sit between nations, languages, or identities, highlighting hybridity and displacement.",
      },
      {
        front: "Colonial & Postcolonial Spatial Dynamics",
        back: "How maps, segregated clubs, plantations, renaming, and imperial architecture encode authority—and how texts negotiate, expose, or subvert spatial domination.",
      },
      {
        front: "IB SL Minimum Work Requirements (FA2021)",
        back: "Minimum **9 works total**: at least **4** originally in English (PRL), at least **3** works in translation (PRL), and **2** free-choice works (spanning ≥3 forms, ≥3 periods, ≥3 countries/regions).",
      },
      {
        front: "IB HL Minimum Work Requirements (FA2021)",
        back: "Minimum **13 works total**: at least **5** originally in English (PRL), at least **4** works in translation (PRL), and **4** free-choice works (spanning all **4 forms**, ≥3 periods, ≥4 countries/regions).",
        level: "HL",
      },
      {
        front: "Domestication (Lawrence Venuti)",
        back: "A translation strategy that adapts source idioms, syntax, and cultural markers into smooth, familiar target-language English—gaining readability while risking cultural erasure.",
      },
      {
        front: "Foreignisation (Lawrence Venuti)",
        back: "A translation strategy that retains source-culture terms, rhythms, or syntactic textures so the reader encounters cultural difference rather than seamless Anglophone familiarity.",
      },
      {
        front: "Paratext in Translated Editions",
        back: "Framing material surrounding the main work—translator's preface, introduction, footnotes, glossary—that reveals the translator's interpretive principles and cultural notes.",
      },
      {
        front: "Register & Honorific Loss in Translation",
        back: "Flattening of formal/intimate pronouns (e.g. *tu/vous*) or status-marked kinship titles when rendered into modern English 'you', requiring tonal or lexical compensation.",
      },
      {
        front: "Intentional Fallacy (Wimsatt & Beardsley, 1946)",
        back: "The critical error of equating a text's meaning with what the author supposedly privately meant or 'wanted to say', rather than analysing what the text itself enacts.",
      },
      {
        front: "Biographical Fallacy",
        back: "Treating a literary speaker, narrator, or character as a direct stand-in for the historical author and reducing artistic craft to personal autobiography.",
      },
      {
        front: "The Anchor-in-Craft Chain (Avoiding History Dumps)",
        back: "Integrate context through three steps: **Textual Choice (micro-quote/form) → Literary Effect (irony/tone/tension) → Cultural or Historical Tension Engaged**.",
      },
    ],
    mustKnow: [
      "Always distinguish **context of production** (how a work emerged in its era/place) from **context of reception** (how later or cross-cultural audiences reinterpret it).",
      "Every shift in reception must stay tethered to **concrete textual choices** (diction, irony, staging, silences)—never invent meanings unsupported by the page.",
      "Treat physical settings (domestic, urban, colonial, borderland) as **active symbolic arguments** about class, gender, empire, belonging, and memory.",
      "Most rich literary works neither blindly endorse nor simply preach against their society—they **negotiate** competing values and dramatise unresolved friction.",
      "Know your official IB translation counts cold: **SL = min 3 translated works (of 9)**; **HL = min 4 translated works (of 13)**; **Individual Oral = 1 original English + 1 translated work**.",
      "Apply **Lawrence Venuti's spectrum** (**domestication** vs **foreignisation**) to discuss how a translator shapes tone, register, cultural idioms, and rhythm.",
      "Read the **translator's preface and footnotes** of every translated work you study—and NEVER speculate blindly about a source language you cannot read.",
      "Eliminate the **intentional fallacy** (*'the author wanted to…'*) and **biographical fallacy** (*'because the poet was sad…'*) by making textual craft the grammatical subject.",
      "Never write a standalone **history-essay dump** paragraph: embed cultural context inside analysis of specific literary devices.",
      "Avoid **presentism**: examine how a historical text engages the moral horizons of its own time alongside why it provokes fresh debate today.",
    ],
    misconceptions: [
      {
        wrong: "A translated novel or play can be analysed exactly as if the original author chose every English word directly.",
        right: "Translation is an interpretive act by a translator. While you analyse the English edition closely, stay alert to register, cultural idioms, retained terms, and paratextual translator notes.",
      },
      {
        wrong: "Starting a Paper 2 essay with a long paragraph of historical background proves strong AoE 2 contextual knowledge.",
        right: "Detached 'history-essay dumps' waste time and lower Criterion C focus. Context only scores Band 5 when woven directly into analysis of authorial craft and textual choices.",
      },
      {
        wrong: "Domestication is always 'bad' and foreignisation is always 'good' in literary translation.",
        right: "Both are strategic trade-offs along Venuti's spectrum: domestication can preserve poetic flow or dramatic speakability, whereas excessive foreignisation can obscure emotional urgency. Evaluate *what each choice gains and loses*.",
      },
      {
        wrong: "If an older work reflects norms that seem unjust today, its meaning is simply 'outdated' and biased.",
        right: "Avoid reductive presentism: distinguish between a character's or era's surface assumptions and the irony, narrative distance, or structural contradictions through which the text itself exposes those assumptions.",
      },
      {
        wrong: "Saying 'the speaker feels isolated because the author suffered tragedy in real life' shows perceptive contextual insight.",
        right: "That is the **biographical fallacy**. Separate historical author from literary speaker, and demonstrate how imagery, syntax, or spatial framing *constructs* isolation on the page.",
      },
      {
        wrong: "Context of reception only matters for ancient or nineteenth-century classics.",
        right: "Even a contemporary work undergoes **synchronic reception** shifts across different countries, diasporas, age groups, and political climates the very month it is published.",
      },
      {
        wrong: "At HL, the HL Essay must be written on a work originally composed in English, not a work in translation.",
        right: "Incorrect! Your **HL Essay [HL]** may examine **any ONE studied work**—either originally in English OR in translation—as long as you respect the strict **non-overlap rule** (it cannot be reused in your IO or Paper 2).",
        level: "HL",
      },
    ],
    examMistakes: [
      "Opening Paper 2 with a 150-word textbook biography of both authors before mentioning the prompt or either work's craft.",
      "Writing mind-reading phrases like *'The author clearly intended to make the audience hate empire'* (intentional fallacy) instead of analysing how ironised diction or staging critiques imperial authority.",
      "Treating a translated work's English puns, rhymes, or idioms without noticing the translator's mediating role—or conversely, guessing inaccurately about words in a source language you do not know.",
      "Describing setting as literal scenery (*'The house is dark and rainy, which creates a sad mood'*) instead of analysing spatial symbolism (thresholds, confinement, surveillance, social access).",
      "Forgetting to cite the **translator** or check the edition's footnotes when preparing your ≤40-line translated extract for the Individual Oral.",
      "Confusing **SL** (min 9 works, 3 translated) and **HL** (min 13 works, 4 translated) course plans, or accidentally reusing an IO translated work in Paper 2 (violating the non-overlap rule).",
      "Claiming 'all readers today think X' as a monolithic generalisation instead of recognising diverse cultural and critical reception lenses.",
      "Letting a contextual comparison turn into a sociology essay about historical oppression while starving Criterion B of micro-quotations and form-specific analysis.",
    ],
    mnemonics: [
      {
        topic: "Contexts of Production & Reception",
        device: "P.R.I.S.M.",
        explanation:
          "**P**roduction horizon (era/norms) · **R**eception shift (diachronic/synchronic) · **I**nternal textual anchor (exact words/form) · **S**ilences & ambiguities · **M**ultiple plausible readings.",
      },
      {
        topic: "Symbolic Spatial Archetypes",
        device: "D.U.C.B. — Do Spaces Control Belonging?",
        explanation:
          "**D**omestic (parlour/threshold/confinement) · **U**rban (crowd/alienation/tempo) · **C**olonial (maps/segregation/naming) · **B**orderland (liminal/exile/hybridity).",
      },
      {
        topic: "Context Without Fallacy",
        device: "C.R.A.F.T. over B.I.H.",
        explanation:
          "Lead with **C**hoice → **R**eader effect → **A**nalytical verb → **F**orm → **T**ension in time/space; reject **B**iographical fallacy, **I**ntentional fallacy, and **H**istory dumps.",
      },
    ],
    realWorld: [
      {
        title: "When Audiences Rewrite an Ending in Real Time",
        emoji: "🎭",
        detail:
          "When Henrik Ibsen's *A Doll's House* `[Example text — not a set text]` toured Germany in 1880, actress Hedwig Niemann-Raabe refused to play a mother walking out on her children, forcing Ibsen to draft a reluctant 'German ending'. That clash between playwright and reception horizon became one of theatre history's clearest lessons in AoE 2.",
      },
      {
        title: "One Word That Changed a Novel's Global Reputation",
        emoji: "🌍",
        detail:
          "For decades, Stuart Gilbert's 1946 English translation of Albert Camus's *L'Étranger* `[Example text — not a set text]` opened with *'Mother died today'*, nudging Anglophone readers to view Meursault as coldly formal. Later translators restored the intimate French *'Maman died today'*, subtly shifting reception of his emotional alienation.",
      },
      {
        title: "Untranslatable Cultural Worlds in Single Words",
        emoji: "🗺️",
        detail:
          "Portuguese *saudade* (melancholic longing for an absent presence), Japanese *mono no aware* (tender pathos at impermanence), and Welsh *hiraeth* (ache for a home that may never have existed as remembered) show how vocabulary encodes a culture's specific relationship with time and place.",
      },
      {
        title: "Re-translating Epic Poetry for a New Century",
        emoji: "📜",
        detail:
          "Emily Wilson's 2017 translation of Homer's *The Odyssey* `[Example text — not a set text]` rendered *polytropos* as 'a complicated man' in brisk iambic pentameter rather than Victorian archaism—sparking global debate over how translation choices reshape gender, class, and heroism for modern audiences.",
      },
      {
        title: "Renovating Colonial Street Maps in Literature",
        emoji: "🧭",
        detail:
          "Across postcolonial cities from Singapore to Mumbai to Nairobi, renamed streets and preserved shophouses turn everyday urban walks into palimpsests of competing historical memories—the exact spatial tension literature captures through layered settings.",
      },
    ],
    videos: [
      {
        title: "IB English A Literature — Area of Exploration: Time and Space Explained",
        channel: "IB English Guys / YouTube Search",
        url: "https://www.youtube.com/results?search_query=IB+English+A+Literature+Time+and+Space+Area+of+Exploration",
      },
      {
        title: "Reading Works in Translation — Domestication vs Foreignization (Venuti)",
        channel: "Literary Translation Studies / YouTube Search",
        url: "https://www.youtube.com/results?search_query=Lawrence+Venuti+domestication+foreignization+literary+translation",
      },
      {
        title: "Wimsatt & Beardsley — The Intentional Fallacy & Close Reading",
        channel: "Literary Theory / YouTube Search",
        url: "https://www.youtube.com/results?search_query=intentional+fallacy+Wimsatt+Beardsley+literature+explained",
      },
      {
        title: "IB Individual Oral — Pairing an English Work and a Translated Work",
        channel: "IB Literature Revision / YouTube Search",
        url: "https://www.youtube.com/results?search_query=IB+English+Literature+Individual+Oral+work+in+translation+tips",
      },
    ],
    formulas: [
      {
        name: "SL Portfolio Work Counts (FA2021)",
        formula: "Min 9 works = ≥4 English (PRL) + ≥3 Translated (PRL) + 2 Free Choice",
        note: "Must span ≥3 literary forms, ≥3 time periods, and ≥3 countries/regions (≥2 continents).",
      },
      {
        name: "HL Portfolio Work Counts (FA2021)",
        formula: "Min 13 works = ≥5 English (PRL) + ≥4 Translated (PRL) + 4 Free Choice",
        note: "Must span all 4 literary forms, ≥3 time periods, and ≥4 countries/regions (≥2 continents).",
        level: "HL",
      },
      {
        name: "Individual Oral Mandatory Pairing",
        formula: "1 Original English Work + 1 Translated Work (≤40-line extract each)",
        note: "Both SL (30%) and HL (20%); non-overlapping with Paper 2 and the HL Essay.",
      },
      {
        name: "Dual-Horizon Meaning Model",
        formula: "Context of Production → Fixed Textual Craft → Shifting Contexts of Reception",
        note: "Track both diachronic (across eras) and synchronic (across cultures) reception shifts.",
      },
      {
        name: "Venuti's Translation Spectrum",
        formula: "Foreignisation (Source-Culture Texture) ⟷ Domestication (Target-Language Fluency)",
        note: "Evaluate trade-offs in register, cultural idioms, acoustic rhythm, and paratext.",
      },
      {
        name: "Anchor-in-Craft Formula",
        formula: "Micro Textual Choice → Literary Mechanism & Effect → Cultural/Historical Tension",
        note: "Replaces history-essay dumps and keeps Criteria A, B & C tightly integrated.",
      },
      {
        name: "Fallacy Guardrail Check",
        formula: "Avoid: Intentional Fallacy · Biographical Fallacy · History Dump · Presentism",
        note: "Make the text, speaker, or formal device—never the author's private mind—the subject of your verb.",
      },
      {
        name: "Spatial Power Audit (3 Questions)",
        formula: "Access (Who crosses?) · Focalisation (Who sees?) · Trajectory (Static or disrupted?)",
        note: "Apply to domestic, urban, colonial/postcolonial, and borderland/liminal spaces.",
      },
      {
        name: "Cultural Stance Spectrum",
        formula: "Endorse Prevailing Norms ⟷ Negotiate Friction ⟷ Subvert Dominant Power",
        note: "Top-band essays recognise ambiguity and negotiation rather than crude binary judgements.",
      },
      {
        name: "Non-Overlap Reserve Rule",
        formula: "Paper 2 Eligible Works = Total Studied Works − 2 (IO) − [1 (HL Essay, HL only)]",
        note: "Protect translated and English reserve works early in your Learner Portfolio.",
      },
    ],
  },
};
