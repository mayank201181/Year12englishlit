"use client";

import { useMemo, useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type ConceptKey = "Identity" | "Representation" | "Perspective" | "Transformation" | "Communication";
type FormKey = "poetry" | "drama" | "prose" | "nonfiction";
type StageKey = "draft1" | "draft2" | "draft3";

interface InquiryPreset {
  craftLabel: string;
  draft1: string;
  draft2: string;
  draft3: string;
  movements: [string, string, string];
}

const INQUIRY_MATRIX: Record<FormKey, Record<ConceptKey, InquiryPreset>> = {
  poetry: {
    Identity: {
      craftLabel: "Fragmented lineation, white space & pronoun shifts",
      draft1: "Identity in Three Poems from the Collection",
      draft2: "How does the poet explore personal identity and memory across three poems?",
      draft3:
        "How do staggered white space and shifting pronouns construct inherited identity as both tender refuge and linguistic fracture across three linked poems?",
      movements: [
        "M1: Visual caesurae establish fractured selfhood on the page",
        "M2: Tactile metaphors complicate nostalgia into uneasy complicity",
        "M3: Counter-reading on lyrical closure vs resilient second-person address",
      ],
    },
    Representation: {
      craftLabel: "Austere negation, acoustic cadence & anti-pastoral imagery",
      draft1: "Nature and Humanity in the Poetry Collection",
      draft2: "How does the poet represent human arrogance toward nature in selected poems?",
      draft3:
        "How do austere negation and anti-pastoral diction represent non-human matter as an ironic check on human linguistic mastery across three poems?",
      movements: [
        "M1: Possessive naming conventions establish anthropocentric pride",
        "M2: Balanced syntactic negation strips metaphor of ownership",
        "M3: Counter-reading on detached coldness vs humbling ecocritical awe",
      ],
    },
    Perspective: {
      craftLabel: "Persona detachment, enjambment & structural volta",
      draft1: "Point of View in the Poetry Volume",
      draft2: "How does the speaker's perspective shape the reader's view of grief in the poems?",
      draft3:
        "How do delayed structural voltas and estranged speaker detachment transform private mourning into unsettled historical witness across three poems?",
      movements: [
        "M1: Clinical opening diction creates ironic perceptual distance",
        "M2: Disruptive enjambment fractures composure at the volta",
        "M3: Counter-reading on emotional reserve vs lingering ethical intimacy",
      ],
    },
    Transformation: {
      craftLabel: "Metrical disruption, stanza breaks & evolving motifs",
      draft1: "Change Over Time in the Poems",
      draft2: "How does the poet show emotional transformation across three selected poems?",
      draft3:
        "How do tightening stanza forms and disrupted iambic rhythms enact psychological transformation from silent grief to defiant voice across three linked poems?",
      movements: [
        "M1: Loose, breathless open lines mirror disoriented opening loss",
        "M2: Plosive acoustic clashes mark active struggle with inherited silence",
        "M3: Counter-reading on incomplete healing vs hard-won lyrical agency",
      ],
    },
    Communication: {
      craftLabel: "Caesura, ellipses & bilingual code-switching",
      draft1: "Language and Silence in the Poetry Collection",
      draft2: "How does the poet explore difficulties of communication between generations?",
      draft3:
        "How do bilingual code-switching and abrupt midline caesurae dramatise speech as both an intimate lifeline and a barrier of intergenerational loss?",
      movements: [
        "M1: Untranslated idioms anchor cultural intimacy in Poem 1",
        "M2: Halting dashes and silence register widening generational distance",
        "M3: Counter-reading on linguistic breakdown vs hybrid poetic survival",
      ],
    },
  },
  drama: {
    Identity: {
      craftLabel: "Domestic props, costume cues & threshold proxemics",
      draft1: "Female Identity in the Play",
      draft2: "How does the playwright present the protagonist's struggle for identity?",
      draft3:
        "How do claustrophobic domestic props and threshold stage directions expose performed obedience as both survival strategy and erosion of selfhood?",
      movements: [
        "M1: Polite parlour props stage domestic harmony as choreography",
        "M2: Escalating physical blocking exposes hidden anxiety beneath compliance",
        "M3: Counter-reading on triumphant exit vs lingering material precarity",
      ],
    },
    Representation: {
      craftLabel: "Transactional diction, lighting shifts & symbolic set",
      draft1: "Money and Power in the Three-Act Play",
      draft2: "How does the play represent wealth and patriarchal control over marriage?",
      draft3:
        "How do transactional diction and narrowing stage lighting represent bourgeois domesticity as an economic contract masquerading as affection?",
      movements: [
        "M1: Warm opening lighting and gift motifs disguise material hierarchy",
        "M2: Legalistic debt language invades intimate spousal exchanges",
        "M3: Counter-reading on emotional redemption vs austere Act III realism",
      ],
    },
    Perspective: {
      craftLabel: "Dramatic irony, soliloquy & offstage sound cues",
      draft1: "Truth and Deception in the Tragedy",
      draft2: "How does dramatic irony shape audience perspective on the protagonist's flaws?",
      draft3:
        "How do asymmetric dramatic irony and sudden stage silences force the audience into uneasy complicity with the protagonist's self-delusion?",
      movements: [
        "M1: Confident opening rhetoric invites surface alignment with authority",
        "M2: Offstage cues and asides fracture audience trust systematically",
        "M3: Counter-reading on tragic catharsis vs unresolved moral indictment",
      ],
    },
    Transformation: {
      craftLabel: "Dialogue pacing, stichomythia & spatial inversion",
      draft1: "Character Development Across Acts I to III",
      draft2: "How does the main character transform from Act I to Act III in the play?",
      draft3:
        "How does the shift from interrupted polite banter to austere, unhurried stichomythia chart the protagonist's transformation from dependent performer to autonomous speaker?",
      movements: [
        "M1: Fragmented diminutive replies establish subordinate speech rhythm",
        "M2: Rapid stichomythic clashes destabilise domestic power balances",
        "M3: Counter-reading on abrupt reversal vs carefully foreshadowed subtext",
      ],
    },
    Communication: {
      craftLabel: "Subtext, pauses, interruption & stage silence",
      draft1: "Communication Problems in the Play",
      draft2: "How do characters fail to communicate honestly throughout the drama?",
      draft3:
        "How do strategic stage pauses, euphemistic subtext, and closing silence reveal spoken politeness as an instrument of domestic surveillance rather than intimacy?",
      movements: [
        "M1: Scripted social pleasantries conceal unspoken power asymmetries",
        "M2: Interrupted exits and hesitant silences expose creeping distrust",
        "M3: Counter-reading on closing truce vs persistent proxemic division",
      ],
    },
  },
  prose: {
    Identity: {
      craftLabel: "Free indirect discourse, mirror motifs & pronoun shift",
      draft1: "Alienation and Identity in the Novel",
      draft2: "How does the novelist portray the protagonist's crisis of identity?",
      draft3:
        "How do clinical domestic motifs and shifting third-person focalisation dramatise alienation as both bodily erasure and bourgeois self-deception?",
      movements: [
        "M1: Blended free indirect grammar establishes fragile social conformity",
        "M2: Narrowing spatial imagery and neuter diction track progressive dehumanisation",
        "M3: Counter-reading on familial victimhood vs conditional transactional empathy",
      ],
    },
    Representation: {
      craftLabel: "Urban acoustic motifs, pacing & figurative fields",
      draft1: "War and Society in the Modernist Novel",
      draft2: "How does the novel represent the impact of post-war trauma on daily life?",
      draft3:
        "How do recurring urban acoustic motifs and juxtaposed focalisation represent post-war survival as an unresolved poise between luminous vitality and concealed elegy?",
      movements: [
        "M1: Buoyant sensory flow renders civic surface celebration vividly",
        "M2: Abrupt syntactic panic fractures identical landmarks into war echoes",
        "M3: Counter-reading on elite escapism vs quiet structural solidarity at closure",
      ],
    },
    Perspective: {
      craftLabel: "Nested epistolary frames, analepsis & unreliable voice",
      draft1: "Unreliable Narration in the Novel",
      draft2: "How does the novel's multiple narration affect our understanding of truth?",
      draft3:
        "How does concentric epistolary framing simultaneously amplify and re-contain a marginalised voice, questioning who holds authority to narrate tragedy?",
      movements: [
        "M1: Outer editorial letters frame authority as cool rational stewardship",
        "M2: Inner eloquent testimony disrupts the narrator's self-justifying rhetoric",
        "M3: Counter-reading on narrative empowerment vs final framing enclosure",
      ],
    },
    Transformation: {
      craftLabel: "Circular framing, temporal ellipsis & evolving symbols",
      draft1: "Growth and Change in the Novel",
      draft2: "How does the protagonist change from the opening chapter to the ending?",
      draft3:
        "To what extent do circular spatial motifs and ironic temporal ellipses undercut the protagonist's apparent moral transformation by the closing chapter?",
      movements: [
        "M1: Opening threshold symbolism promises linear self-reinvention",
        "M2: Midpoint tonal fissures expose lingering habits beneath new rhetoric",
        "M3: Counter-reading on genuine awakening vs cyclical formal containment",
      ],
    },
    Communication: {
      craftLabel: "Untranslated proverbs, dialogue & bureaucratic register",
      draft1: "Language and Colonialism in the Novel",
      draft2: "How does the novel show communication breaking down under colonial rule?",
      draft3:
        "How does the collision between oral proverbial cadence and closing bureaucratic diction expose colonial language as a vehicle of cultural erasure?",
      movements: [
        "M1: Oral rhythm and communal proverbs anchor reciprocal civic ethics",
        "M2: Clipped personal imperatives reveal internal strain prior to rupture",
        "M3: Counter-reading on missionary resonance vs administrative reduction at close",
      ],
    },
  },
  nonfiction: {
    Identity: {
      craftLabel: "Retrospective vs experiencing persona & anecdote",
      draft1: "Childhood and Self in the Memoir",
      draft2: "How does the writer explore cultural identity through personal memories?",
      draft3:
        "How does the shifting gap between retrospective and experiencing persona negotiate diasporic identity as continual imaginative reconstruction rather than fixed origin?",
      movements: [
        "M1: Lyrical childhood anecdotes construct memory as sensory sanctuary",
        "M2: Self-correcting retrospective asides expose gaps in family mythology",
        "M3: Counter-reading on factual unreliability vs honest metafictional witness",
      ],
    },
    Representation: {
      craftLabel: "Sensory anecdote, irony & hypotactic syntax",
      draft1: "Power and Empire in the Essay Collection",
      draft2: "How do the writer's essays represent imperial bureaucracy critically?",
      draft3:
        "How do self-implicating personal anecdote and biting rhetorical antithesis represent imperial authority as a theatrical trap that corrodes ruler and ruled alike?",
      movements: [
        "M1: Visceral sensory observation strips official duty of heroic glamour",
        "M2: Balanced antithetical clauses expose the absurdity of performed mastery",
        "M3: Counter-reading on colonial self-pity vs sharp structural self-indictment",
      ],
    },
    Perspective: {
      craftLabel: "Ethos construction, tonal irony & selective omission",
      draft1: "Bias and Truth in the Literary Non-Fiction Work",
      draft2: "How does the author's personal perspective influence truth in the memoir?",
      draft3:
        "How do candid admissions of flawed recall and layered hypotaxis convert subjective memory from a liability into persuasive literary ethos?",
      movements: [
        "M1: Intimate observational detail establishes credible experiential authority",
        "M2: Deliberate ellipses and tentative qualifiers foreground memory's edges",
        "M3: Counter-reading on rhetorical manipulation vs transparent self-scrutiny",
      ],
    },
    Transformation: {
      craftLabel: "Rhetorical cadence, tricolon & structural framing",
      draft1: "Personal Growth in the Travel Memoir",
      draft2: "How do the writer's journeys transform their beliefs across the essays?",
      draft3:
        "How does the stylistic shift from crisp paratactic observation to recursive elegiac reflection chart the persona's transformation from detached tourist to implicated witness?",
      movements: [
        "M1: Detached clipped clauses frame foreign space as picturesque spectacle",
        "M2: Disrupted anecdotes force confrontation with historical complicity",
        "M3: Counter-reading on lingering privilege vs disciplined ethical humility",
      ],
    },
    Communication: {
      craftLabel: "Direct address, rhetorical questions & epistolary voice",
      draft1: "Voice and Audience in the Essays",
      draft2: "How does the author communicate urgent political ideas to the reader?",
      draft3:
        "How do second-person direct address and alternating colloquial and elevated registers bridge private testimony and collective civic accountability across three essays?",
      movements: [
        "M1: Conversational cadence disarms defensive reader distance early on",
        "M2: Escalating anaphora and stark diction heighten urgent moral stakes",
        "M3: Counter-reading on didactic preachiness vs unresolved closing questions",
      ],
    },
  },
};

function LineOfInquiryStressTester() {
  const [concept, setConcept] = useState<ConceptKey>("Representation");
  const [form, setForm] = useState<FormKey>("drama");
  const [stage, setStage] = useState<StageKey>("draft3");

  const preset = INQUIRY_MATRIX[form][concept];
  const activeTitle = stage === "draft1" ? preset.draft1 : stage === "draft2" ? preset.draft2 : preset.draft3;

  const checks = useMemo(() => {
    const isD2 = stage === "draft2";
    const isD3 = stage === "draft3";
    return [
      { label: "Single Non-Overlapping Studied Work", pass: true },
      { label: `Active IB Concept Engine (${concept})`, pass: isD2 || isD3 },
      { label: "Form-Specific Authorial Craft Named (Crit B)", pass: isD3 },
      { label: "Arguable Dual Interpretive Tension (Crit A)", pass: isD3 },
      { label: "Passes 'Delete the Author' Literary Test", pass: isD2 || isD3 },
    ];
  }, [concept, stage]);

  const passCount = checks.filter((c) => c.pass).length;
  const bandLabel = stage === "draft1" ? "Band 2–3 Cap" : stage === "draft2" ? "Band 3–4 Cap" : "Band 5 Ready";
  const bandTone: "bad" | "brand" | "good" = stage === "draft1" ? "bad" : stage === "draft2" ? "brand" : "good";

  return (
    <WidgetFrame
      title="HL Essay Line-of-Inquiry Stress-Tester"
      tryThis={[
        "Start on **Draft 1 (Vague Topic)** and step right to **Draft 3 (Band 5 Inquiry)** to see exactly how naming form-specific craft unlocks Criteria A, B, and C.",
        "Switch across **Poetry, Drama, Prose Fiction, and Literary Non-Fiction** — notice how every title transfers directly onto *your* own studied works (zero set texts assumed!).",
      ]}
      caption={
        stage === "draft1" ? (
          "Draft 1 names a static theme without authorial craft or tension — practically guaranteeing plot summary (Crit A) and interchangeable listing (Crit C)."
        ) : stage === "draft2" ? (
          "Draft 2 asks a 'how' question linked to a concept, yet still omits medium-specific authorial choices — risking thematic commentary over Criterion B craft evaluation."
        ) : (
          <>
            Draft 3 fuses <strong>{concept}</strong> + form-specific craft ({preset.craftLabel.toLowerCase()}) + an arguable dual tension — setting up a natural 3-movement Band 5 arc!
          </>
        )
      }
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Anchor IB Concept</div>
          <Segmented<ConceptKey>
            label="Anchor IB Concept"
            value={concept}
            onChange={setConcept}
            options={[
              { value: "Identity", label: "Identity" },
              { value: "Representation", label: "Representation" },
              { value: "Perspective", label: "Perspective" },
              { value: "Transformation", label: "Transformation" },
              { value: "Communication", label: "Communication" },
            ]}
          />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Literary Form (Transferable to Any Studied Work)</div>
          <Segmented<FormKey>
            label="Literary Form"
            value={form}
            onChange={setForm}
            options={[
              { value: "poetry", label: "Poetry" },
              { value: "drama", label: "Drama" },
              { value: "prose", label: "Prose Fiction" },
              { value: "nonfiction", label: "Non-Fiction" },
            ]}
          />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">3. Inquiry Rigour Stage</div>
          <Segmented<StageKey>
            label="Inquiry Rigour Stage"
            value={stage}
            onChange={setStage}
            options={[
              { value: "draft1", label: "Draft 1 · Vague Topic" },
              { value: "draft2", label: "Draft 2 · Broad Theme" },
              { value: "draft3", label: "Draft 3 · Band 5 Inquiry" },
            ]}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-brand">
              Working HL Essay Title / Line of Inquiry
            </span>
            <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-bold text-ink-2 border border-line">
              Craft toolkit: {preset.craftLabel}
            </span>
          </div>
          <p className="mt-2 text-base font-bold leading-snug text-ink">“{activeTitle}”</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Readout label="Diagnostic Checklist" value={`${passCount} / 5 Passed`} tone={bandTone} />
          <Readout label="Rubric Trajectory" value={bandLabel} tone={bandTone} />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">C-F-T-E Diagnostic Checks</div>
            <ul className="mt-2 space-y-1.5 text-sm">
              {checks.map((c) => (
                <li key={c.label} className="flex items-start gap-2">
                  <span aria-hidden className={c.pass ? "font-bold text-good" : "font-bold text-bad"}>
                    {c.pass ? "✓" : "✗"}
                  </span>
                  <span className={c.pass ? "text-ink" : "text-ink-2 line-through"}>{c.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              Progressive 3-Movement Spine (Crit C)
            </div>
            <ol className="mt-2 space-y-1.5 text-sm text-ink">
              {preset.movements.map((m) => (
                <li key={m} className="leading-snug">
                  {m}
                </li>
              ))}
            </ol>
            <p className="mt-2 text-xs text-ink-2">
              Non-overlap lock: confirm this single studied work is NOT used in your IO or Paper 2.
            </p>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

interface BudgetSegment {
  key: string;
  label: string;
  words: number;
  startWords: number;
  fill: string;
}

function WordBudgetAllocator() {
  const [intro, setIntro] = useState(150);
  const [m1, setM1] = useState(280);
  const [m2, setM2] = useState(285);
  const [m3, setM3] = useState(280);
  const [m4, setM4] = useState(255);
  const [concl, setConcl] = useState(150);

  const bodyWords = m1 + m2 + m3 + m4;
  const total = intro + bodyWords + concl;
  const bodyPct = total > 0 ? Math.round((bodyWords / total) * 100) : 0;
  const activeMovements = m4 > 0 ? 4 : 3;

  const segments = useMemo<BudgetSegment[]>(() => {
    const raw: Array<{ key: string; label: string; words: number; fill: string }> = [
      { key: "intro", label: "Intro", words: intro, fill: "#334155" },
      { key: "m1", label: "M1", words: m1, fill: "#be123c" },
      { key: "m2", label: "M2", words: m2, fill: "#e11d48" },
      { key: "m3", label: "M3", words: m3, fill: "#9f1239" },
      ...(m4 > 0 ? [{ key: "m4", label: "M4", words: m4, fill: "#881337" }] : []),
      { key: "concl", label: "Concl", words: concl, fill: "#047857" },
    ];
    return raw.reduce<BudgetSegment[]>((acc, seg) => {
      const prev = acc[acc.length - 1];
      const startWords = prev ? prev.startWords + prev.words : 0;
      return [...acc, { ...seg, startWords }];
    }, []);
  }, [intro, m1, m2, m3, m4, concl]);

  const scaleMax = Math.max(1700, total + 40);
  const barX = 16;
  const barW = 648;
  const toX = (w: number) => barX + (w / scaleMax) * barW;

  const statusInfo = useMemo(() => {
    if (total > 1500) {
      return {
        label: `OVER LIMIT (+${total - 1500}w UNREAD!)`,
        tone: "bad" as const,
        note: `Red alert: IB examiners STOP reading strictly at 1,500 words! Your final ${total - 1500} words (likely your conclusion!) will earn ZERO credit. Trim at least ${total - 1470} words to land safely inside the sweet spot.`,
      };
    }
    if (total < 1200) {
      return {
        label: `UNDER FLOOR (${1200 - total}w short)`,
        tone: "bad" as const,
        note: `At ${total} counted words you sit below the 1,200-word floor, risking underdeveloped whole-work analysis on Criteria A and B. Deepen a turning point or add a counter-reading node (+${1380 - total}w).`,
      };
    }
    if (total > 1480) {
      return {
        label: "Danger Margin (1,481–1,500w)",
        tone: "brand" as const,
        note: `Technically legal (${total}w), but dangerously close to the 1,500-word cliff! Word-processor hyphen counting differences could accidentally push you over — trim 20–40 filler words for safety.`,
      };
    }
    if (total >= 1350) {
      return {
        label: "Band 5 Sweet Spot",
        tone: "good" as const,
        note: `Spot-on! At ${total} counted words (${bodyPct}% progressive literary analysis across ${activeMovements} movements), you have full Band 5 depth plus a safe ${1500 - total}-word cushion below the stop-reading wall.`,
      };
    }
    return {
      label: "Legal · Room to Deepen",
      tone: "brand" as const,
      note: `Valid length (${total}w), though you still have ${1420 - total} words of productive headroom to sharpen micro-quotations or strengthen your counter-interpretation node.`,
    };
  }, [total, bodyPct, activeMovements]);

  const balanceVerdict = useMemo(() => {
    if (intro > 210) return "Intro bloated (>210w) — trim biography/fluff";
    if (concl > 200) return "Conclusion too long (>200w) — tighten synthesis";
    if (bodyPct < 70) return `Body thin (${bodyPct}%) — aim for 74–82%`;
    if (bodyPct > 84) return `Intro/Concl cramped — give ~140–160w each`;
    return `Optimal Micro/Macro Split (${bodyPct}% Body)`;
  }, [intro, concl, bodyPct]);

  const applyPreset = (kind: "four" | "three" | "bloated") => {
    if (kind === "four") {
      setIntro(150);
      setM1(280);
      setM2(285);
      setM3(280);
      setM4(255);
      setConcl(150);
    } else if (kind === "three") {
      setIntro(150);
      setM1(370);
      setM2(370);
      setM3(370);
      setM4(0);
      setConcl(150);
    } else {
      setIntro(250);
      setM1(340);
      setM2(350);
      setM3(340);
      setM4(140);
      setConcl(220);
    }
  };

  return (
    <WidgetFrame
      title="1,200–1,500 Word Budget Allocator"
      tryThis={[
        "Click **Bloated Over-Limit Trap (1,640w)** to see how exceeding 1,500 words visually wipes out your concluding synthesis behind the red STOP-READING wall!",
        "Slide **Movement 4 to 0w** and expand Movements 1–3 to ~370w each to model a cohesive **3-poem cluster** essay cleanly inside **1,350–1,480w**.",
      ]}
      caption={statusInfo.note}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => applyPreset("four")}
            className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-xs font-bold text-ink hover:border-brand"
          >
            4-Movement Ideal (1,400w)
          </button>
          <button
            type="button"
            onClick={() => applyPreset("three")}
            className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-xs font-bold text-ink hover:border-brand"
          >
            3-Poem Cluster (1,410w)
          </button>
          <button
            type="button"
            onClick={() => applyPreset("bloated")}
            className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-xs font-bold text-bad hover:border-bad"
          >
            Over-Limit Trap (1,640w)
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 680 124"
            role="img"
            aria-label={`HL Essay word budget gauge showing ${total} counted words out of 1,500 maximum`}
            className="block h-auto w-full"
          >
            <rect x="0" y="0" width="680" height="124" rx="10" fill="#fffaf7" />
            <rect x={barX} y="36" width={barW} height="38" rx="6" fill="#e2e8f0" />

            <rect
              x={toX(1350)}
              y="26"
              width={Math.max(2, toX(1480) - toX(1350))}
              height="58"
              rx="4"
              fill="#10b981"
              opacity="0.16"
            />

            {segments.map((seg) => {
              const x1 = toX(seg.startWords);
              const w = Math.max(0, toX(seg.startWords + seg.words) - x1);
              return (
                <g key={seg.key}>
                  <rect x={x1} y="36" width={w} height="38" fill={seg.fill} stroke="#fffaf7" strokeWidth="1.5" />
                  {w > 34 ? (
                    <text
                      x={x1 + w / 2}
                      y="59"
                      textAnchor="middle"
                      fontFamily="system-ui, sans-serif"
                      fontSize="10.5"
                      fontWeight="700"
                      fill="#ffffff"
                    >
                      {seg.label}
                    </text>
                  ) : null}
                </g>
              );
            })}

            {total > 1500 ? (
              <rect
                x={toX(1500)}
                y="36"
                width={Math.max(0, toX(total) - toX(1500))}
                height="38"
                fill="#dc2626"
                opacity="0.48"
              />
            ) : null}

            <line x1={toX(1200)} y1="22" x2={toX(1200)} y2="86" stroke="#0f766e" strokeWidth="2" strokeDasharray="4 3" />
            <text x={toX(1200)} y="102" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10.5" fontWeight="700" fill="#0f766e">
              1,200w Min
            </text>

            <text
              x={(toX(1350) + toX(1480)) / 2}
              y="18"
              textAnchor="middle"
              fontFamily="system-ui, sans-serif"
              fontSize="10"
              fontWeight="800"
              fill="#047857"
            >
              Sweet Spot (1,350–1,480)
            </text>

            <line x1={toX(1500)} y1="20" x2={toX(1500)} y2="88" stroke="#dc2626" strokeWidth="3" />
            <text x={toX(1500)} y="102" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10.5" fontWeight="800" fill="#dc2626">
              1,500w STOP
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Readout label="Counted Words" value={`${total.toLocaleString("en-GB")} w`} tone={statusInfo.tone} />
          <Readout label="IB Limit Status" value={statusInfo.label} tone={statusInfo.tone} />
          <Readout label="Micro/Macro Split" value={balanceVerdict} tone={bodyPct >= 70 && bodyPct <= 84 ? "good" : "brand"} />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider label="Intro · Conceptual Thesis" value={intro} min={80} max={280} step={5} onChange={setIntro} format={(v) => `${v}w`} />
          <Slider label="Movement 1 · Opening Craft" value={m1} min={140} max={420} step={5} onChange={setM1} format={(v) => `${v}w`} />
          <Slider label="Movement 2 · Structural Shift" value={m2} min={140} max={420} step={5} onChange={setM2} format={(v) => `${v}w`} />
          <Slider label="Movement 3 · Counter-Reading" value={m3} min={140} max={420} step={5} onChange={setM3} format={(v) => `${v}w`} />
          <Slider
            label="Movement 4 · Macro Arc (0 = 3-Mvmt)"
            value={m4}
            min={0}
            max={400}
            step={5}
            onChange={setM4}
            format={(v) => (v === 0 ? "Off (3-Mvmt)" : `${v}w`)}
          />
          <Slider label="Conclusion · Reflective Synthesis" value={concl} min={80} max={280} step={5} onChange={setConcl} format={(v) => `${v}w`} />
        </div>

        <p className="text-xs text-ink-2">
          <strong>Accounting reminder:</strong> Embedded primary &amp; secondary quotations <strong>ARE included</strong> inside these counted words. Essay title, in-text parenthetical citations, and Works Cited are <strong>excluded</strong>.
        </p>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "hl-essay-inquiry-tester",
    title: "HL Essay Line-of-Inquiry Stress-Tester",
    blurb: "Toggle an IB Concept, literary form, and drafting stage to sharpen a vague topic into a Band 5 inquiry with instant C-F-T-E diagnostics.",
    Component: LineOfInquiryStressTester,
  },
  {
    id: "hl-essay-word-budget",
    title: "1,200–1,500 Word Budget Allocator",
    blurb: "Balance your introduction, 3–4 progressive movements, and conclusion while watching the 1,350–1,480w sweet spot and 1,500w examiner stop-reading wall.",
    Component: WordBudgetAllocator,
  },
];

export default widgets;
