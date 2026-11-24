// ---------------------------------------------------------------------------
// Topic 6: The 7 Central Concepts & Global Issues
// IB Diploma English A: Literature (SL & HL, First Assessment 2021)
// Strict Non-Prescriptive Text Policy: ZERO set texts assumed. Every named
// published work/author carries `[Example text — not a set text]`.
// ---------------------------------------------------------------------------
import type { TopicGuide } from "../../types.ts";

const SVG_SEVEN_CONCEPTS = `<svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing the 7 Central IB English A Literature Concepts arranged around a literary text, each paired with its core analytical verb">
  <rect x="0" y="0" width="640" height="310" rx="14" fill="var(--surface-2)" />
  <text x="320" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">The 7 Central Concepts as Active Analytical Lenses</text>
  <line x1="320" y1="162" x2="108" y2="74" stroke="var(--line)" stroke-width="2" />
  <line x1="320" y1="162" x2="320" y2="62" stroke="var(--line)" stroke-width="2" />
  <line x1="320" y1="162" x2="532" y2="74" stroke="var(--line)" stroke-width="2" />
  <line x1="320" y1="162" x2="96" y2="168" stroke="var(--line)" stroke-width="2" />
  <line x1="320" y1="162" x2="544" y2="168" stroke="var(--line)" stroke-width="2" />
  <line x1="320" y1="162" x2="188" y2="262" stroke="var(--line)" stroke-width="2" />
  <line x1="320" y1="162" x2="452" y2="262" stroke="var(--line)" stroke-width="2" />
  <rect x="242" y="132" width="156" height="60" rx="12" fill="var(--brand)" />
  <text x="320" y="158" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand-ink)">LITERARY TEXT</text>
  <text x="320" y="176" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--brand-ink)">Ask HOW form constructs</text>
  <rect x="28" y="48" width="160" height="48" rx="10" fill="var(--surface)" stroke="var(--s-number)" stroke-width="2" />
  <text x="108" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="var(--s-number)">1. Identity</text>
  <text x="108" y="84" text-anchor="middle" font-size="10" fill="var(--ink-2)">Selfhood, hybridity, fragmentation</text>
  <rect x="240" y="38" width="160" height="48" rx="10" fill="var(--surface)" stroke="var(--s-algebra)" stroke-width="2" />
  <text x="320" y="58" text-anchor="middle" font-size="12" font-weight="800" fill="var(--s-algebra)">2. Culture</text>
  <text x="320" y="74" text-anchor="middle" font-size="10" fill="var(--ink-2)">Norms, heritage, belonging, clash</text>
  <rect x="452" y="48" width="160" height="48" rx="10" fill="var(--surface)" stroke="var(--s-ratio)" stroke-width="2" />
  <text x="532" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="var(--s-ratio)">3. Creativity</text>
  <text x="532" y="84" text-anchor="middle" font-size="10" fill="var(--ink-2)">Artistic innovation, form-breaking</text>
  <rect x="16" y="144" width="160" height="48" rx="10" fill="var(--surface)" stroke="var(--s-stats)" stroke-width="2" />
  <text x="96" y="164" text-anchor="middle" font-size="12" font-weight="800" fill="var(--s-stats)">4. Communication</text>
  <text x="96" y="180" text-anchor="middle" font-size="10" fill="var(--ink-2)">Voice, silence, subtext, dialogue</text>
  <rect x="464" y="144" width="160" height="48" rx="10" fill="var(--surface)" stroke="var(--s-geometry)" stroke-width="2" />
  <text x="544" y="164" text-anchor="middle" font-size="12" font-weight="800" fill="var(--s-geometry)">5. Perspective</text>
  <text x="544" y="180" text-anchor="middle" font-size="10" fill="var(--ink-2)">Focalization, bias, shifting angles</text>
  <rect x="98" y="238" width="180" height="48" rx="10" fill="var(--surface)" stroke="var(--good)" stroke-width="2" />
  <text x="188" y="258" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">6. Transformation</text>
  <text x="188" y="274" text-anchor="middle" font-size="10" fill="var(--ink-2)">Change, adaptation, rewriting</text>
  <rect x="362" y="238" width="180" height="48" rx="10" fill="var(--surface)" stroke="var(--info)" stroke-width="2" />
  <text x="452" y="258" text-anchor="middle" font-size="12" font-weight="800" fill="var(--info)">7. Representation</text>
  <text x="452" y="274" text-anchor="middle" font-size="10" fill="var(--ink-2)">How language mediates reality</text>
</svg>`;

const SVG_FIVE_FIELDS = `<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five IB Fields of Inquiry matrix showing each field title and the core literary tensions it explores">
  <rect x="0" y="0" width="640" height="270" rx="14" fill="var(--surface-2)" />
  <text x="320" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">The 5 Official IB Fields of Inquiry (Starting Springboards — Not Final Global Issues)</text>
  <rect x="16" y="42" width="116" height="210" rx="10" fill="var(--surface)" stroke="var(--s-number)" stroke-width="2" />
  <rect x="16" y="42" width="116" height="36" rx="10" fill="var(--s-number)" />
  <text x="74" y="64" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand-ink)">Field 1</text>
  <text x="74" y="98" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Culture,</text>
  <text x="74" y="113" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Identity &amp;</text>
  <text x="74" y="128" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Community</text>
  <line x1="28" y1="142" x2="120" y2="142" stroke="var(--line)" stroke-width="1" />
  <text x="74" y="160" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Migration &amp; exile</text>
  <text x="74" y="176" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Gender &amp; family</text>
  <text x="74" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Class &amp; ethnicity</text>
  <text x="74" y="208" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Language &amp; roots</text>
  <text x="74" y="236" text-anchor="middle" font-size="9" font-weight="700" fill="var(--s-number)">Who belongs?</text>

  <rect x="139" y="42" width="116" height="210" rx="10" fill="var(--surface)" stroke="var(--s-algebra)" stroke-width="2" />
  <rect x="139" y="42" width="116" height="36" rx="10" fill="var(--s-algebra)" />
  <text x="197" y="64" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand-ink)">Field 2</text>
  <text x="197" y="98" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Beliefs,</text>
  <text x="197" y="113" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Values &amp;</text>
  <text x="197" y="128" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Education</text>
  <line x1="151" y1="142" x2="243" y2="142" stroke="var(--line)" stroke-width="1" />
  <text x="197" y="160" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Faith vs doubt</text>
  <text x="197" y="176" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Moral hypocrisy</text>
  <text x="197" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Institutional schooling</text>
  <text x="197" y="208" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Intergenerational ethics</text>
  <text x="197" y="236" text-anchor="middle" font-size="9" font-weight="700" fill="var(--s-algebra)">What shapes conscience?</text>

  <rect x="262" y="42" width="116" height="210" rx="10" fill="var(--surface)" stroke="var(--s-geometry)" stroke-width="2" />
  <rect x="262" y="42" width="116" height="36" rx="10" fill="var(--s-geometry)" />
  <text x="320" y="64" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand-ink)">Field 3</text>
  <text x="320" y="98" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Politics,</text>
  <text x="320" y="113" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Power &amp;</text>
  <text x="320" y="128" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Justice</text>
  <line x1="274" y1="142" x2="366" y2="142" stroke="var(--line)" stroke-width="1" />
  <text x="320" y="160" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">State censorship</text>
  <text x="320" y="176" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Rights &amp; law</text>
  <text x="320" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Inequality &amp; protest</text>
  <text x="320" y="208" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Abuse of authority</text>
  <text x="320" y="236" text-anchor="middle" font-size="9" font-weight="700" fill="var(--s-geometry)">Who holds power?</text>

  <rect x="385" y="42" width="116" height="210" rx="10" fill="var(--surface)" stroke="var(--s-ratio)" stroke-width="2" />
  <rect x="385" y="42" width="116" height="36" rx="10" fill="var(--s-ratio)" />
  <text x="443" y="64" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand-ink)">Field 4</text>
  <text x="443" y="98" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Art,</text>
  <text x="443" y="113" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Creativity &amp;</text>
  <text x="443" y="128" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Imagination</text>
  <line x1="397" y1="142" x2="489" y2="142" stroke="var(--line)" stroke-width="1" />
  <text x="443" y="160" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Artistic freedom</text>
  <text x="443" y="176" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Beauty &amp; commodification</text>
  <text x="443" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Storytelling &amp; memory</text>
  <text x="443" y="208" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Aesthetic dissent</text>
  <text x="443" y="236" text-anchor="middle" font-size="9" font-weight="700" fill="var(--s-ratio)">Why does art matter?</text>

  <rect x="508" y="42" width="116" height="210" rx="10" fill="var(--surface)" stroke="var(--s-stats)" stroke-width="2" />
  <rect x="508" y="42" width="116" height="36" rx="10" fill="var(--s-stats)" />
  <text x="566" y="64" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand-ink)">Field 5</text>
  <text x="566" y="98" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Science,</text>
  <text x="566" y="113" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Technology &amp;</text>
  <text x="566" y="128" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Environment</text>
  <line x1="520" y1="142" x2="612" y2="142" stroke="var(--line)" stroke-width="1" />
  <text x="566" y="160" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Ecological loss</text>
  <text x="566" y="176" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Urban alienation</text>
  <text x="566" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Scientific hubris</text>
  <text x="566" y="208" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Surveillance &amp; media</text>
  <text x="566" y="236" text-anchor="middle" font-size="9" font-weight="700" fill="var(--s-stats)">At what cost progress?</text>
</svg>`;

const SVG_NARROWING_FUNNEL = `<svg viewBox="0 0 640 315" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Global Issue Narrowing Funnel transforming a broad Field of Inquiry through four stages while passing the three mandatory IB Global Issue gate checks">
  <rect x="0" y="0" width="640" height="315" rx="14" fill="var(--surface-2)" />
  <text x="320" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">The Global Issue Narrowing Funnel &amp; 3 Mandatory IB Gate Checks</text>
  <polygon points="36,44 396,44 374,94 58,94" fill="var(--surface)" stroke="var(--line)" stroke-width="2" />
  <text x="216" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink-2)">STAGE 1: FIELD OF INQUIRY (Too Vast)</text>
  <text x="216" y="83" text-anchor="middle" font-size="11" fill="var(--ink)">Politics, Power &amp; Justice</text>

  <polygon points="62,106 370,106 346,156 86,156" fill="var(--surface)" stroke="var(--warn)" stroke-width="2" />
  <text x="216" y="127" text-anchor="middle" font-size="11" font-weight="800" fill="var(--warn)">STAGE 2: BROAD THEME (Still Too Vague)</text>
  <text x="216" y="145" text-anchor="middle" font-size="11" fill="var(--ink)">Authoritarian control and censorship</text>

  <polygon points="90,168 342,168 318,218 114,218" fill="var(--surface)" stroke="var(--info)" stroke-width="2" />
  <text x="216" y="189" text-anchor="middle" font-size="11" font-weight="800" fill="var(--info)">STAGE 3: SPECIFIC MECHANISM</text>
  <text x="216" y="207" text-anchor="middle" font-size="10.5" fill="var(--ink)">State surveillance infiltrating private homes</text>

  <polygon points="118,230 314,230 296,294 136,294" fill="var(--brand)" />
  <text x="216" y="250" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--brand-ink)">STAGE 4: SHARP IO GLOBAL ISSUE</text>
  <text x="216" y="266" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--brand-ink)">How institutional surveillance erodes</text>
  <text x="216" y="280" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--brand-ink)">trust and speech inside everyday families</text>

  <rect x="424" y="54" width="198" height="66" rx="10" fill="var(--surface)" stroke="var(--good)" stroke-width="2" />
  <text x="438" y="75" font-size="11" font-weight="800" fill="var(--good)">GATE 1 · Wide-Scale</text>
  <text x="438" y="92" font-size="10" fill="var(--ink-2)">Matters to large populations,</text>
  <text x="438" y="106" font-size="10" fill="var(--ink-2)">not a trivial private quirk.</text>

  <rect x="424" y="136" width="198" height="66" rx="10" fill="var(--surface)" stroke="var(--good)" stroke-width="2" />
  <text x="438" y="157" font-size="11" font-weight="800" fill="var(--good)">GATE 2 · Transnational</text>
  <text x="438" y="174" font-size="10" fill="var(--ink-2)">Crosses borders and eras;</text>
  <text x="438" y="188" font-size="10" fill="var(--ink-2)">never locked to one nation.</text>

  <rect x="424" y="218" width="198" height="66" rx="10" fill="var(--surface)" stroke="var(--good)" stroke-width="2" />
  <text x="438" y="239" font-size="11" font-weight="800" fill="var(--good)">GATE 3 · Everyday Local</text>
  <text x="438" y="256" font-size="10" fill="var(--ink-2)">Felt intimately in daily speech,</text>
  <text x="438" y="270" font-size="10" fill="var(--ink-2)">homes, schools, and relationships.</text>
</svg>`;

const SVG_IO_TIMELINE = `<svg viewBox="0 0 640 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="10-minute Individual Oral pacing and balance timeline plus 5-minute teacher Q and A showing equal time on original English and translated works and balanced extract versus whole-work analysis">
  <rect x="0" y="0" width="640" height="255" rx="14" fill="var(--surface-2)" />
  <text x="320" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Individual Oral 15-Minute Architecture (10m Uninterrupted Talk + 5m Q&amp;A)</text>

  <text x="20" y="54" font-size="10.5" font-weight="700" fill="var(--ink-2)">0:00</text>
  <text x="58" y="54" font-size="10.5" font-weight="700" fill="var(--ink-2)">0:45</text>
  <text x="220" y="54" font-size="10.5" font-weight="700" fill="var(--ink-2)">5:00 (Halfway)</text>
  <text x="394" y="54" font-size="10.5" font-weight="700" fill="var(--ink-2)">9:15</text>
  <text x="430" y="54" font-size="10.5" font-weight="700" fill="var(--brand)">10:00</text>
  <text x="590" y="54" font-size="10.5" font-weight="700" fill="var(--ink-2)">15:00</text>

  <rect x="20" y="64" width="32" height="54" rx="6" fill="var(--s-algebra)" />
  <text x="36" y="95" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--brand-ink)">Intro</text>

  <rect x="55" y="64" width="102" height="54" rx="6" fill="var(--brand)" />
  <text x="106" y="87" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand-ink)">Work 1 Extract</text>
  <text x="106" y="103" text-anchor="middle" font-size="9" fill="var(--brand-ink)">≤40 lines (~2:30)</text>

  <rect x="160" y="64" width="72" height="54" rx="6" fill="var(--brand-2)" />
  <text x="196" y="87" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand-ink)">W1 Whole</text>
  <text x="196" y="103" text-anchor="middle" font-size="9" fill="var(--brand-ink)">(~1:45)</text>

  <rect x="236" y="64" width="102" height="54" rx="6" fill="var(--s-ratio)" />
  <text x="287" y="87" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand-ink)">Work 2 Extract</text>
  <text x="287" y="103" text-anchor="middle" font-size="9" fill="var(--brand-ink)">≤40 lines (~2:30)</text>

  <rect x="341" y="64" width="72" height="54" rx="6" fill="var(--info)" />
  <text x="377" y="87" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand-ink)">W2 Whole</text>
  <text x="377" y="103" text-anchor="middle" font-size="9" fill="var(--brand-ink)">(~1:45)</text>

  <rect x="416" y="64" width="32" height="54" rx="6" fill="var(--s-algebra)" />
  <text x="432" y="95" text-anchor="middle" font-size="9" font-weight="800" fill="var(--brand-ink)">End</text>

  <rect x="458" y="64" width="162" height="54" rx="6" fill="var(--surface)" stroke="var(--s-geometry)" stroke-width="2" stroke-dasharray="5 3" />
  <text x="539" y="87" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--s-geometry)">Teacher Q&amp;A (5:00)</text>
  <text x="539" y="103" text-anchor="middle" font-size="9" fill="var(--ink-2)">Deepens Crit A &amp; B live</text>

  <line x1="55" y1="130" x2="232" y2="130" stroke="var(--brand)" stroke-width="2.5" />
  <text x="143" y="146" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--brand)">Work 1: Original English (~4:15)</text>

  <line x1="236" y1="130" x2="413" y2="130" stroke="var(--s-ratio)" stroke-width="2.5" />
  <text x="324" y="146" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--s-ratio)">Work 2: Translated (~4:15)</text>

  <rect x="20" y="168" width="144" height="68" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5" />
  <text x="92" y="188" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Crit A · 10m</text>
  <text x="92" y="205" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Understanding &amp;</text>
  <text x="92" y="219" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">interpretation</text>

  <rect x="172" y="168" width="144" height="68" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5" />
  <text x="244" y="188" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Crit B · 10m</text>
  <text x="244" y="205" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Authorial choices</text>
  <text x="244" y="219" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">&amp; evaluation</text>

  <rect x="324" y="168" width="144" height="68" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5" />
  <text x="396" y="188" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Crit C · 10m</text>
  <text x="396" y="205" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Focus, balance &amp;</text>
  <text x="396" y="219" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">organisation</text>

  <rect x="476" y="168" width="144" height="68" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5" />
  <text x="548" y="188" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Crit D · 10m</text>
  <text x="548" y="205" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Clear, accurate,</text>
  <text x="548" y="219" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">persuasive register</text>
</svg>`;

export const guide: TopicGuide = {
  id: "6-concepts-global-issues",
  title: "The 7 Central Concepts & Global Issues",
  strand: "Concepts & Global Issues",
  icon: "🌐",
  level: "SL",
  summary:
    "Turn the 7 IB Literature concepts into incisive analytical questions, navigate the 5 Fields of Inquiry, sharpen a Global Issue through all 3 mandatory IB tests, and architect a perfectly balanced 10-minute Individual Oral pairing 1 original English work with 1 translated work.",
  intro:
    "Great IB Literature candidates never treat concepts or Global Issues as decorative labels pasted onto plot summaries. They treat the **7 Central Concepts** as active analytical engines and the **Global Issue** as a calibrated focal lens that lets two works from different languages, cultures, and forms illuminate one another. Whether you are building your Learner Portfolio, preparing your **Individual Oral (SL 30% / HL 20%)**, or anchoring an **HL Essay [HL]**, everything in this topic is 100% transferable to whatever works your school chooses.",
  guide: [
    // =========================================================================
    // SECTION 1: seven-central-concepts
    // =========================================================================
    {
      id: "seven-central-concepts",
      heading: "Applying the 7 IB Literature Concepts as Analytical Lenses",
      level: "SL",
      discovery: {
        problem:
          "Compare two opening thesis sentences on an unseen poem about an immigrant grandmother's kitchen:\n- **Draft A:** \"This poem explores the IB concepts of Identity and Culture through imagery and metaphors.\"\n- **Draft B:** \"By juxtaposing untranslated culinary nouns with fragmented English syntax, the speaker constructs hybrid **identity** not as harmony, but as an ongoing act of linguistic negotiation.\"\nWhy does Draft B immediately signal Band 5 (Criteria A & B) while Draft A stalls in Band 2?",
        idea:
          "Draft A treats concepts as static **nouns to name-drop** ('about Identity'). Draft B turns a concept into a **dynamic claim about craft**: it specifies *which* formal choice (untranslated nouns + fragmented syntax) generates *what* tension around identity. In IB Literature, concepts are verbs in disguise — lenses that ask *how* meaning is made.",
      },
      body: `The IBO Language A: Literature (FA2021) syllabus places **7 Central Concepts** at the heart of every Area of Exploration, every Learner Portfolio reflection, and (for HL students) the **HL Essay [HL]**. Rather than memorising textbook definitions, learn the **distinct analytical question** each concept unlocks:

1. **Identity** — How do literary choices construct, fracture, perform, or resist personal, communal, gender, or national selfhood? *(Look for: unreliable voice, shifting pronouns, naming/un-naming, masks, interior monologue.)*
2. **Culture** — How does a text inherit, celebrate, negotiate, or critique shared customs, beliefs, language, power structures, and historical memory across time and space? *(Look for: idiom, untranslated terms, ritual, domestic or public settings, generational conflict.)*
3. **Creativity** — How does a writer innovate within or disrupt literary conventions — and how do texts depict artistic imagination as liberation, escape, or political dissent? *(Look for: form-breaking, metafiction, hybrid genres, unconventional lineation or staging.)*
4. **Communication** — How is meaning conveyed, distorted, withheld, or misread between characters AND between writer and reader? *(Look for: subtext, dramatic silences, letters, euphemism, translation gaps, broken dialogue.)*
5. **Perspective** — Through whose eyes, values, temporal distance, or ideological frame is experience filtered — and how does shifting perspective destabilise certainty? *(Look for: focalization, free indirect discourse, multiple narrators, dramatic irony, framing narratives.)*
6. **Transformation** — How do characters, societies, literary genres, or older myths undergo irreversible change — and how does rewriting or translating a text transform its meaning? *(Look for: structural volta, tragic peripeteia, intertextual adaptation, evolving motifs.)*
7. **Representation** — How does literature selectively *mediate* reality rather than passively mirror it, foregrounding certain voices while marginalising or distorting others? *(Look for: caricature vs complexity, symbolic framing, narrative omission, aestheticising violence or suffering.)*

Notice how **Perspective** and **Representation** are closely related yet distinct: **Perspective** asks *from what vantage point* the text sees (the camera angle), whereas **Representation** asks *how language constructs and shapes* a version of reality, a group, or an experience (the painted canvas). Similarly, **Identity** zeroes in on *selfhood and subjectivity*, whereas **Culture** examines the *shared social ecosystem* that shapes or constrains that self.

For **HL students**, anchoring your 1,200–1,500 word **HL Essay [HL]** to one of the 7 Concepts prevents vague plot-surveys and gives your line of inquiry immediate academic spine. For **SL and HL alike**, pairing a Concept with a formal feature generates razor-sharp topic sentences in Paper 1, Paper 2, and the Individual Oral.`,
      diagram: SVG_SEVEN_CONCEPTS,
      diagramCaption:
        "Each of the 7 IB Central Concepts acts as a distinct analytical lens pointing directly at authorial choices rather than plot summary.",
      workedExamples: [
        {
          title: "Turning a Flat Concept Label into a Band-5 Analytical Question",
          problem:
            "A student studying a play where a state-controlled newspaper prints false triumph while citizens whisper in queues writes: \"This play deals with Communication and Representation.\" Upgrade this into a sharp conceptual inquiry question using ONE primary concept and concrete formal choices.",
          steps: [
            "Choose the sharper single anchor concept: **Communication** targets the breakdown between official speech and whispered truth (while **Representation** targets how reality is distorted in print — picking one prevents blur).",
            "Identify the specific dramatic choices constructing that tension: booming radio broadcasts (aural staging) juxtaposed against clipped stichomythia and stage silences.",
            "Frame an arguable *how* question that invites evaluation of effect rather than a yes/no answer.",
          ],
          answer:
            "\"How does the playwright juxtapose amplified state broadcasts with clipped whispered dialogue and stage silences to expose **communication** as an instrument of both coercion and quiet resistance?\"",
          yourTurn: {
            question:
              "Which ONE of the 7 Central Concepts is best suited to a literary question asking how a novelist uses free indirect discourse and an unreliable retrospective narrator to destabilise a reader's moral judgement?",
            answer: {
              type: "text",
              accept: ["Perspective", "perspective"],
              display: "Perspective",
            },
            solution:
              "**Perspective** is the sharpest anchor because free indirect discourse and an unreliable retrospective narrator directly control *whose vantage point* filters events and manipulates reader judgement.",
          },
        },
        {
          title: "Distinguishing Representation vs Perspective Across Texts",
          problem:
            "Consider a short-story collection that depicts rural domestic workers solely through the clipped remarks of wealthy employers, never granting the workers interiority (comparable to how postcolonial fiction critiques voicelessness — e.g. Arundhati Roy's *The God of Small Things* `[Example text — not a set text]`). How do **Perspective** and **Representation** ask different questions about the exact same choice?",
          steps: [
            "Apply **Perspective**: Focus on the *focalising lens* — how restricting focalization to wealthy employers forces the reader to see through blind spots and self-serving rationalisations.",
            "Apply **Representation**: Focus on *constructed visibility and omission* — how denying workers direct speech represents class hierarchy as structural erasure, critiquing who gets to narrate history.",
            "Decide which lens fits your thesis best: use Perspective if your essay tracks shifting narratorial distance; use Representation if your essay interrogates how form critiques social invisibility.",
          ],
          answer:
            "Perspective interrogates the *filtering consciousness* (restricted focalization); Representation interrogates the *aesthetic and ethical politics* of who is rendered visible, audible, or erased.",
        },
      ],
      keyPoints: [
        "All 7 IB Central Concepts: **Identity, Culture, Creativity, Communication, Perspective, Transformation, Representation**.",
        "Never drop a concept as a passive noun ('This text is about Culture'); turn it into an active *how* question tied to authorial craft.",
        "Distinguish near-neighbours cleanly: **Perspective** = vantage point/filter; **Representation** = how language constructs/mediates reality; **Identity** = selfhood; **Culture** = shared social codes.",
        "In the **HL Essay [HL]**, anchoring your 1,200–1,500 word line of inquiry to one of the 7 Concepts is the fastest way to sustain Criterion A & C focus.",
      ],
      whyItWorks:
        "Examiners read hundreds of essays repeating plot events. A conceptual lens forces every paragraph to explain *significance* (Criterion A) and *craft* (Criterion B) simultaneously, because a concept cannot be answered by plot summary alone.",
      strategies: [
        "Use the formula: **Authorial Choice + Verb + Central Concept + Complicating Tension** (e.g. *Fractured chronology destabilises **identity** by refusing linear self-reinvention*).",
        "Keep a two-column Learner Portfolio tracker: Column 1 = memorable craft moment; Column 2 = which of the 7 Concepts it complicates.",
        "Limit each essay or HL Essay inquiry to **one primary concept** (with at most one supporting lens) so your argument goes deep rather than wide.",
      ],
      thinkDeeper:
        "Can a literary text *resist* its own apparent concept — for instance, a poem that claims to celebrate **Transformation** while its rigid, unchanging rhyme scheme traps the speaker in the past? Top Band-5 IB essays love uncovering tension between what a text *says* conceptually and what its *form* actually enacts.",
    },

    // =========================================================================
    // SECTION 2: five-fields-of-inquiry
    // =========================================================================
    {
      id: "five-fields-of-inquiry",
      heading: "The 5 IB Fields of Inquiry for Framing Global Issues",
      level: "SL",
      discovery: {
        problem:
          "A student begins their Individual Oral by announcing: \"My Global Issue today is *Politics, power and justice*.\" Why does an IB examiner immediately flag a Criterion A & C ceiling before the student has even quoted a single line?",
        idea:
          "Because **Politics, power and justice** is an official **Field of Inquiry** — a massive umbrella category, NOT a Global Issue! The 5 Fields of Inquiry are compass points to help you brainstorm, never ready-made Global Issues.",
      },
      body: `To help candidates across the world brainstorm authentic Individual Oral topics without handing out a restrictive list, the IBO provides **5 broad Fields of Inquiry**. They are explicitly *not* exhaustive and *not* mutually exclusive — many of the strongest Global Issues sit at the intersection of two fields! Know all five accurately:

1. **Culture, identity and community** — Explores how belonging, exclusion, migration, diaspora, family structures, gender roles, class, race, ethnicity, sexuality, and linguistic heritage shape human experience. *(e.g., how linguistic assimilation inside immigrant households fractures intergenerational intimacy.)*
2. **Beliefs, values and education** — Explores how religious faith, moral codes, ethical dilemmas, secular ideologies, inherited traditions, and formal or informal schooling shape conscience, conformity, and rebellion. *(e.g., how rigid moral honour codes compel individuals to conceal personal vulnerability in close-knit communities.)*
3. **Politics, power and justice** — Explores rights, responsibility, law, state authority, institutional corruption, colonialism, war, censorship, propaganda, social hierarchy, and resistance to injustice. *(e.g., how bureaucratic euphemism normalises state violence in citizens' everyday speech.)*
4. **Art, creativity and imagination** — Explores aesthetic inspiration, beauty, artistic censorship, the ethics of storytelling, the commodification of art, and imagination as survival or critique. *(e.g., how marginalised artists use subversive storytelling to preserve suppressed collective memory.)*
5. **Science, technology and the environment** — Explores the relationship between humans and nature, ecological degradation, climate anxiety, medical or scientific ethics, industrialisation, digital surveillance, and technological alienation. *(e.g., how industrial exploitation of natural landscapes parallels the psychological alienation of displaced rural communities.)*

Crucially, **you do not get extra marks for naming a Field of Inquiry**, nor are you penalised if your Global Issue bridges two fields (for example, state censorship of poets bridges *Politics, power and justice* and *Art, creativity and imagination*). What matters is using the 5 Fields as a **launchpad** to spot a genuine human concern shared across two distinct literary works — and then narrowing ruthlessly until you have a sharp, arguable Global Issue.`,
      diagram: SVG_FIVE_FIELDS,
      diagramCaption:
        "Use the 5 IB Fields of Inquiry as brainstorming compass points to locate a shared human tension, then narrow sharply before designing your Individual Oral.",
      workedExamples: [
        {
          title: "Mapping a Literary Tension to Its Primary & Intersecting Fields",
          problem:
            "Suppose a candidate pairs an English dystopian novel about algorithmic consumerism with a translated play about factory towns poisoning a local river (for illustration, themes reminiscent of Henrik Ibsen's *An Enemy of the People* `[Example text — not a set text]`). Which Field of Inquiry is the primary anchor, and which secondary field enriches the framing?",
          steps: [
            "Look at the shared driver across both works: technological/industrial systems altering human habitats and daily agency → **Field 5: Science, technology and the environment**.",
            "Look at the institutional cover-up and economic leverage silencing dissent → **Field 3: Politics, power and justice**.",
            "Synthesise both into a single narrow Global Issue rather than juggling two disconnected topics.",
          ],
          answer:
            "Primary anchor: **Science, technology and the environment** (intersecting with **Politics, power and justice**). Narrowed issue: *How economic self-interest suppresses environmental and technological warnings at the expense of ordinary local communities.*",
          yourTurn: {
            question:
              "A candidate explores how rigid patriarchal schooling systems teach young girls to equate silence with moral virtue. Which numbered IB Field of Inquiry (1 to 5) is the PRIMARY starting field?",
            answer: {
              type: "number",
              value: 2,
              display: "2",
            },
            solution:
              "**Field 2: Beliefs, values and education** is the primary anchor (schooling systems + moral virtue codes), though it productively intersects with Field 1 (Culture, identity and community).",
          },
        },
        {
          title: "Spotting When an 'Art' Issue Belongs in Field 4",
          problem:
            "Two works — an original English memoir about a banned journalist and a translated poetry collection written in exile — both explore how writing poetry or testimony keeps banned cultural memories alive. Which Field of Inquiry best captures the *function of creative expression* here?",
          steps: [
            "Check what the texts actually foreground: not merely political oppression (Field 3), but specifically *how artistic creation and storytelling* act as resistance and survival.",
            "Match that focus to **Field 4: Art, creativity and imagination**.",
            "Note how anchoring in Field 4 automatically primes Criterion B analysis because you will examine self-reflexive literary choices (metaphor, form, testimony, poetic rhythm).",
          ],
          answer:
            "**Field 4: Art, creativity and imagination** — focused on *how creative storytelling preserves silenced collective memory under conditions of exile or censorship.*",
        },
      ],
      keyPoints: [
        "The 5 IB Fields of Inquiry are: **(1) Culture, identity & community; (2) Beliefs, values & education; (3) Politics, power & justice; (4) Art, creativity & imagination; (5) Science, technology & the environment**.",
        "A Field of Inquiry is a **starting category**, NEVER a valid Individual Oral Global Issue on its own.",
        "Fields frequently **overlap** — hybrid issues (e.g., environmental injustice bridging Fields 3 and 5) often produce the richest literary discussions.",
        "Always check that your chosen field genuinely fits **both** works organically rather than forcing a tenuous link onto the second work.",
      ],
      whyItWorks:
        "Because the 5 Fields map the broadest domains of human experience, scanning them against your Learner Portfolio helps you uncover unexpected transnational pairings — for instance, linking a nineteenth-century translated drama with a contemporary English lyric sequence through a shared ethical or ecological tension.",
      strategies: [
        "Tag every Learner Portfolio entry with 1–2 Field numbers (`F1`–`F5`) as you study each work across DP1–DP2 so IO pairings emerge naturally.",
        "Never spend 45 seconds of your 10-minute IO reciting the Field of Inquiry name like a checklist; move straight into your razor-sharp narrowed Global Issue.",
        "If two works feel 'too similar' in plot, use a Field intersection (e.g. *Field 1 + Field 4*) to spotlight how their *forms* illuminate distinct facets of the tension.",
      ],
      thinkDeeper:
        "Why does the IBO explicitly state that the 5 Fields of Inquiry are *non-exhaustive*? Because literature continuously invents new ethical and existential tensions — from grief and mortality to artificial memory — that overflow neat bureaucratic boxes. Use the fields to unlock thinking, never to cage it.",
    },

    // =========================================================================
    // SECTION 3: narrowing-global-issues
    // =========================================================================
    {
      id: "narrowing-global-issues",
      heading: "The Global Issue Narrowing Funnel: 3 Mandatory IB Properties",
      level: "SL",
      discovery: {
        problem:
          "Test three candidate Individual Oral Global Issues:\n1. \"Gender inequality\"\n2. \"The collapse of the 1929 Wall Street stock market in New York\"\n3. \"How expectations of domestic self-sacrifice pressure women into silencing personal ambition within ordinary households\"\nWhich single candidate passes ALL THREE IBO Global Issue tests — and exactly which test does each rejected candidate fail?",
        idea:
          "Candidate 1 is **far too broad** to analyse meaningfully in 10 minutes (it lacks a specific mechanism and local sharpness). Candidate 2 fails the **transnational** test (locked to one country and single historical date). Only Candidate 3 has **wide-scale significance**, **transnational** reach, AND **impact felt in everyday local contexts**!",
      },
      body: `The single highest-leverage decision in your entire Individual Oral happens *before* you write a single bullet point: crafting a razor-sharp **Global Issue**. The IBO Language A: Literature Guide sets **three non-negotiable properties**. A legitimate Global Issue MUST simultaneously:

1. **Have significance on a wide/large scale** — It must matter across substantial communities or societies, not be a quirky private plot detail (e.g., *"sibling rivalry over a missing watch"* fails wide-scale significance; *"how material scarcity fractures familial solidarity"* passes).
2. **Be transnational** — It must cross national borders, cultures, and historical periods rather than being fenced inside one country, law, or single dated event (e.g., *"Victorian British debtors' prisons"* or *"Post-1945 Japanese railway policy"* fails transnational reach; *"how punitive economic systems trap marginalised families in generational debt"* passes).
3. **Be felt in everyday local contexts** — Its impact must show up in concrete, intimate, daily human experience (homes, classrooms, workplaces, conversations, relationships), not remain an abstract geopolitical headline (e.g., *"Macroeconomic treaty negotiations between superpowers"* stays detached from lived reality; *"how economic displacement erodes dignity and belonging in everyday family rituals"* passes).

To build a Band-5 Global Issue reliably, push your idea through the **4-Stage Narrowing Funnel**:
- **Stage 1 (Field of Inquiry):** *Culture, identity and community*
- **Stage 2 (Broad Theme — still weak):** *Immigration and belonging*
- **Stage 3 (Specific Mechanism/Tension):** *Language loss between immigrant parents and children*
- **Stage 4 (Sharpened IO Global Issue — Band 5):** *How generational language barriers within migrant families create emotional estrangement and contested cultural identity in everyday domestic life.*

Notice the grammatical blueprint of a top-band Global Issue:
**How [specific social/cultural/political mechanism] + [active verb: erodes / distorts / sustains / constrains] + [concrete human impact] + [in everyday local contexts].**

Watch out for the **Goldilocks trap** in the opposite direction too: **over-narrowing**. If your issue reads *"How a Norwegian bank manager's wife forging a loan signature in winter 1879 destroys her marriage"* (a plot summary of Henrik Ibsen's *A Doll's House* \`[Example text — not a set text]\`), you have described a single plot rather than a transnational Global Issue — and your second work will never fit naturally!`,
      diagram: SVG_NARROWING_FUNNEL,
      diagramCaption:
        "Push every IO idea from broad Field → vague theme → specific mechanism → sharp Global Issue, verifying all 3 IB Gate Checks before selecting extracts.",
      workedExamples: [
        {
          title: "Diagnosing & Repairing Three Flawed Global Issues",
          problem:
            "Diagnose the exact IB property flaw in each draft Global Issue and rewrite Draft B so it passes all three properties:\n- **Draft A:** \"Power and corruption\"\n- **Draft B:** \"Apartheid pass-book laws in 1960s Johannesburg\"\n- **Draft C:** \"How global diplomatic summits fail to resolve multilateral trade imbalances\"",
          steps: [
            "**Draft A ('Power and corruption'):** Too broad/vague — lacks a specific mechanism and fails to specify how the impact is felt in everyday local contexts.",
            "**Draft B ('Apartheid pass-book laws in 1960s Johannesburg'):** Fails the **transnational** property because it is locked to one nation, statute, and decade.",
            "**Draft C ('Multilateral trade imbalances'):** Fails **impact felt in everyday local contexts** (purely abstract macro-policy with no intimate human dimension for close literary analysis).",
            "**Repair Draft B** by lifting its core human mechanism out of one city while keeping vivid local everyday impact.",
          ],
          answer:
            "Draft A = too broad; Draft B = not transnational; Draft C = lacks everyday local impact. Repaired Draft B: *\"How state-enforced bureaucracy and movement controls strip marginalised individuals of dignity and freedom in everyday public and domestic spaces.\"*",
          yourTurn: {
            question:
              "A student proposes the Global Issue: \"The impact of the 1917 Russian Revolution on St Petersburg bread queues.\" Which of the 3 mandatory IB Global Issue properties does this formulation MOST directly violate? (Enter: wide-scale, transnational, or local)",
            answer: {
              type: "text",
              accept: ["transnational", "Transnational", "not transnational", "transnational reach"],
              display: "transnational",
            },
            solution:
              "It violates **transnational** reach because it locks the issue to one specific country (Russia), city (St Petersburg), and historical date (1917). Broaden it to a transnational tension such as *how political upheaval and material scarcity reshape everyday community solidarity and survival.*",
          },
        },
        {
          title: "Stress-Testing a 'Goldilocks' Narrow Global Issue",
          problem:
            "Evaluate this candidate Global Issue: *\"How social pressure to maintain outward moral respectability drives individuals to conceal trauma within tight-knit communities.\"* Does it pass all 3 IB tests and stay transferable across two distinct works?",
          steps: [
            "**Wide-scale significance?** Yes — social stigma, honour norms, and concealed trauma affect societies worldwide.",
            "**Transnational?** Yes — zero country, era, or single-text plot lock-in; applies equally to a 19th-century European tragedy, a Latin American novella (such as Gabriel García Márquez's *Chronicle of a Death Foretold* `[Example text — not a set text]`), or a contemporary English novel.",
            "**Felt in everyday local contexts?** Yes — 'outward respectability' and 'tight-knit communities' manifest immediately in gossip, silence at the dinner table, euphemistic dialogue, and repressed body language.",
            "**Analytical focus for 10 minutes?** Sharp enough to anchor micro close-reading of diction, subtext, and staging without drifting into generic commentary.",
          ],
          answer:
            "Passes all 3 IB properties cleanly: wide-scale, transnational, rooted in intimate everyday contexts, and razor-sharp for 10-minute literary analysis.",
        },
      ],
      keyPoints: [
        "Every IB Global Issue MUST satisfy 3 properties: **(1) wide-scale significance**, **(2) transnational**, and **(3) impact felt in everyday local contexts**.",
        "Avoid both extremes: **too broad** ('war', 'identity', 'power') leaves you vague; **too specific/plot-locked** (one country, date, or character) breaks transnational reach.",
        "Phrase your Global Issue as a **tension or mechanism**, not a one-word topic noun — use active verbs (*erodes, silences, distorts, sustains, complicates*).",
        "Your Global Issue should feel naturally illuminated by **both** works, ideally with each work revealing a *different* nuance or formal angle.",
      ],
      whyItWorks:
        "A tightly narrowed Global Issue acts like a magnetic filter: it instantly tells you *which* ≤40-line extracts to pick, *which* literary devices matter most for Criterion B, and *how* to avoid drifting into irrelevant plot summary during your 10-minute presentation.",
      strategies: [
        "Run the **Two-Continent Swap Test**: could your exact Global Issue sentence apply naturally to a work from East Asia AND a work from South America or Europe? If not, remove national/historical lock-in!",
        "Run the **Kitchen-Table Test**: can you picture how this issue affects an ordinary conversation, bedroom, street, or classroom? If not, add everyday local texture!",
        "Test your phrasing in 15–25 words — long enough to specify mechanism + human impact, short enough to recall effortlessly in your opening 30 seconds.",
      ],
      thinkDeeper:
        "Must your two works *agree* about the Global Issue? Absolutely not! Some of the highest-scoring Individual Orals choose a Global Issue where Work 1 presents the tension through tragic resignation while Work 2 responds with satiric defiance or ironic ambiguity — giving you rich evaluative insight for Criteria A and B.",
    },

    // =========================================================================
    // SECTION 4: pairing-english-translated-works
    // =========================================================================
    {
      id: "pairing-english-translated-works",
      heading: "Pairing 1 Original English Work + 1 Translated Work for the Individual Oral",
      level: "SL",
      discovery: {
        problem:
          "Student X and Student Y share the same strong Global Issue. Student X picks two plot-heavy action passages (45 lines each), speaks for 7 minutes on the English novel and 2.5 minutes on the translated play, and barely mentions the rest of either book. Student Y picks two stylistically rich 36-line extracts, spends ~4:15 on each work (~2:30 extract + ~1:45 whole work), and finishes at 9:50 before a lively 5-minute Q&A. Why can Student Y score 37/40 while Student X stalls near 23/40?",
        idea:
          "The Individual Oral awards **40 marks equally across four criteria (A10, B10, C10, D10)**. Violating extract length (≤40 lines), starving Work 2 of time (Criterion C), ignoring the whole work (Criterion A), or selecting stylistically thin extracts (Criterion B) collapses marks across ALL four rubrics at once!",
      },
      body: `The **Individual Oral (IA)** carries **30% of the final grade at SL** and **20% at HL**, assessed out of **40 marks** (**Criterion A: 10, Criterion B: 10, Criterion C: 10, Criterion D: 10**). Mastering its official architecture protects easy marks and lets your literary insight shine:

### Official IB Individual Oral Rules (Non-Negotiable)
- **The Official Prompt:** *"Examine the ways in which the global issue of your choice is presented through the content and form of two of the works that you have studied."*
- **Mandatory Pairing:** **1 work originally written in English** + **1 work in translation** (both studied in your IB Literature course).
- **Strict Non-Overlap Rule (SL & HL):** Neither of your 2 IO works may be reused in **Paper 2** — and at HL, neither may be used for your **HL Essay [HL]**! Plan your 9 (SL) or 13 (HL) works early inside your Learner Portfolio.
- **Extract Ceiling:** Two clean, **unmarked** extracts of **no more than 40 lines each** (≤40 lines). If studying a collection of poems, essays, or short stories, your extract may be one complete short piece (≤40 lines) or an excerpt of ≤40 lines, and the "whole work" means the wider studied body of work by that same author.
- **10-Bullet Outline:** You may bring ONLY your two clean extracts plus a **maximum 10-bullet-point outline** into the recording (concise conceptual cues and brief phrases — NEVER scripted full paragraphs!).
- **Exact Timing (15 Minutes Total):** **10 minutes** uninterrupted student presentation + **5 minutes** teacher-led Q&A discussion.

### Selecting High-Yield Extracts & Balancing Micro vs Macro
A fatal mistake is picking an extract merely because "the Global Issue gets mentioned in dialogue." Instead, hunt for **stylistic density**: a 30–40 line turning point packed with imagery, tonal shifts, rhythmic breaks, stage directions, subtext, or narrative irony so Criterion B explodes with analytical material.

Within your 10-minute talk, protect **double balance**:
1. **Work-to-Work Balance (~50/50):** Spend roughly **4:15–4:30 on Work 1 (English)** and **4:15–4:30 on Work 2 (Translated)**, framed by a crisp **0:45 opening** and **0:45 concluding synthesis**.
2. **Extract-to-Whole-Work Balance (within EACH work):** Spend roughly **2:30** close-reading specific authorial choices inside your ≤40-line extract (micro), then spend roughly **1:45** zooming out to trace how the Global Issue develops across the **whole work** (macro — structural arcs, contrasting earlier/later scenes, evolving motifs, or other poems in the collection).

### IO Is NOT Paper 2 — And How to Use the 5-Minute Q&A
Unlike Paper 2, the Individual Oral rubric does **not** require forced sentence-by-sentence comparison throughout; clear, balanced work-by-work presentation with crisp conceptual framing in the intro, transition, and conclusion scores Band 5 cleanly on Criterion C! Finally, treat the **5-minute teacher Q&A** not as an interrogation, but as an opportunity: teachers ask open probing questions specifically to help you unlock Criterion A/B points you didn't have time to develop (such as an ending, a counter-reading, a structural motif, or a translation nuance in Work 2).`,
      diagram: SVG_IO_TIMELINE,
      diagramCaption:
        "Target ~4:15 per work (split ~2:30 extract / ~1:45 whole work), framed by crisp 0:45 intro and synthesis blocks, leaving 5:00 for high-value teacher Q&A.",
      workedExamples: [
        {
          title: "Auditing Two Candidate Extracts for Stylistic Density",
          problem:
            "For the Global Issue *how domestic silence masks generational grief*, a student studying a translated drama (compare the compressed domestic tension of Federico García Lorca's *The House of Bernarda Alba* `[Example text — not a set text]`) must choose between:\n- **Extract 1 (38 lines):** Two neighbours casually recapping the grandfather's past funeral in plain exposition.\n- **Extract 2 (34 lines):** A silent dinner scene where stage directions specify rigid seating, clinking cutlery, an unanswered question, and an abrupt lighting shift.\nWhich extract scores far higher on Criterion B, and why?",
          steps: [
            "Check compliance: both extracts are ≤40 lines (38 and 34 lines).",
            "Audit Criterion B craft density: Extract 1 offers mostly literal plot exposition — forcing the student to summarise what happened rather than analyse *how* dramatic form constructs silence.",
            "Extract 2 offers rich form-specific dramatic choices: proxemics (rigid seating), aural staging (clinking cutlery amplifying quiet), subtext (unanswered question), and visual lighting cues.",
            "Confirm whole-work link: Extract 2 can zoom out effortlessly to track how domestic silence builds toward the play's climactic rupture.",
          ],
          answer:
            "**Extract 2 (34 lines)** is vastly superior because its dense dramatic choices (proxemics, sound, subtext, lighting) fuel evaluative Criterion B analysis rather than plot summary.",
          yourTurn: {
            question:
              "An HL student has studied 13 works in total. After reserving 2 works for the Individual Oral and 1 separate work for the HL Essay, what is the MAXIMUM number of distinct remaining works available in their Paper 2 reserve pool under the IB non-overlap rule?",
            answer: {
              type: "number",
              value: 10,
              display: "10 works",
            },
            solution:
              "Under the strict non-overlap rule, the 2 IO works and 1 HL Essay work cannot be reused in Paper 2: 13 − 2 − 1 = **10** distinct remaining works available for Paper 2.",
          },
        },
        {
          title: "Designing a Clean 10-Bullet Individual Oral Outline",
          problem:
            "How should a candidate distribute the **maximum 10 bullet points** on their official IO outline so they keep exact 50/50 pacing and never forget the whole-work zoom-out?",
          steps: [
            "**Bullet 1 (0:00–0:45):** Narrowed Global Issue statement + brief thesis framing both works.",
            "**Bullets 2–4 (0:45–3:15):** Work 1 (English) Extract — 3 crisp craft cues (e.g. *L.4–8 fractured syntax → hesitation; L.19–22 cold light motif → isolation; L.31–36 volta shift*).",
            "**Bullet 5 (3:15–5:00):** Work 1 Whole Work — 2–3 wider structural touchpoints (opening contrast, climactic echo, ambiguous ending).",
            "**Bullets 6–8 (5:00–7:30):** Work 2 (Translated) Extract — 3 crisp craft cues (including form-specific and translation/register choices).",
            "**Bullet 9 (7:30–9:15):** Work 2 Whole Work — 2–3 wider touchpoints across the translated text/collection.",
            "**Bullet 10 (9:15–10:00):** Closing synthesis — how contrasting forms/cultures complicate the Global Issue differently.",
          ],
          answer:
            "A symmetrical **1 + 3 + 1 + 3 + 1 + 1 = 10-bullet** blueprint guarantees work-to-work balance, extract-to-whole-work coverage, and natural spoken fluency (Criterion D).",
        },
      ],
      keyPoints: [
        "IO official formula: **1 original English work + 1 translated work**, **≤40 lines** per clean extract, **≤10 bullet points**, **10 min talk + 5 min Q&A** = **15 min**, **40 marks** (**A10/B10/C10/D10**).",
        "Weighting: **SL 30%** of final grade (min 9 works studied); **HL 20%** of final grade (min 13 works studied).",
        "Protect **double balance**: ~50/50 split between Work 1 and Work 2, AND balanced micro extract close-reading (~60%) + macro whole-work analysis (~40%) inside EACH work.",
        "Protect the **non-overlap rule**: works used in the IO cannot be reused in **Paper 2** or the **HL Essay [HL]**.",
      ],
      whyItWorks:
        "Criterion C rewards disciplined proportion and focus while Criterion A & B reward simultaneous mastery of fine-grained textual craft and whole-work architecture. Symmetrical planning prevents last-minute panic on Work 2 and turns the 5-minute Q&A into a live bonus round.",
      strategies: [
        "Rehearse aloud three times with a stopwatch: if you pass **5:05** while still inside Work 1, tighten Work 1 immediately so Work 2 never gets squashed!",
        "Keep every outline bullet to ~15–25 words of conceptual triggers and line numbers — reading dense prose sentences aloud kills Criterion D spoken fluency.",
        "When discussing your translated work, attend sensitively to cultural context, idiom, and translator register choices rather than treating the translation as transparent English.",
      ],
      thinkDeeper:
        "What if your 10-minute presentation ends at 9:45 and you realise you forgot to mention a key structural parallel from the ending of Work 2? Don't panic — listen closely during the **5-minute Q&A** and weave that exact whole-work moment naturally into your answer to earn the Criterion A and B credit live!",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "List all 7 Central Concepts of IB English A: Literature (FA2021).",
        back: "**Identity, Culture, Creativity, Communication, Perspective, Transformation, Representation.**",
        level: "SL",
      },
      {
        front: "How do Perspective and Representation differ as analytical lenses?",
        back: "**Perspective** examines *whose vantage point/filter* shapes perception (focalization, bias, narratorial distance); **Representation** examines *how language selectively constructs and mediates reality*, deciding what is foregrounded, distorted, or omitted.",
        level: "SL",
      },
      {
        front: "How do Identity and Culture differ as IB Literature concepts?",
        back: "**Identity** focuses on individual or collective *selfhood, subjectivity, and self-construction*; **Culture** examines the wider *shared social codes, customs, language, and historical norms* that shape or constrain individuals.",
        level: "SL",
      },
      {
        front: "List all 5 official IB Fields of Inquiry.",
        back: "1. Culture, identity & community · 2. Beliefs, values & education · 3. Politics, power & justice · 4. Art, creativity & imagination · 5. Science, technology & the environment.",
        level: "SL",
      },
      {
        front: "What are the 3 mandatory IBO properties of a valid Individual Oral Global Issue?",
        back: "1. **Wide-scale significance** · 2. **Transnational** reach · 3. **Impact felt in everyday local contexts**.",
        level: "SL",
      },
      {
        front: "Why is 'Politics, power and justice' NOT a valid Individual Oral Global Issue?",
        back: "It is a broad **Field of Inquiry**, not a narrowed Global Issue. A valid Global Issue must isolate a specific tension/mechanism felt in everyday local contexts so it can be analysed rigorously in 10 minutes.",
        level: "SL",
      },
      {
        front: "What mandatory pairing of literary works is required for the IB Literature Individual Oral?",
        back: "**1 work originally written in English** + **1 work in translation** (both studied on the course syllabus).",
        level: "SL",
      },
      {
        front: "What are the official Individual Oral limits for extract length and outline bullets?",
        back: "Extracts: **maximum 40 lines each** (clean, unmarked copies). Outline: **maximum 10 bullet points** (concise cues, not scripted paragraphs).",
        level: "SL",
      },
      {
        front: "What is the exact timing and mark breakdown of the Individual Oral?",
        back: "**15 minutes total** (10 min uninterrupted presentation + 5 min teacher Q&A) · **40 marks** = Criterion A (10) + Criterion B (10) + Criterion C (10) + Criterion D (10).",
        level: "SL",
      },
      {
        front: "What percentage of the final IB English A: Literature grade is the Individual Oral worth at SL vs HL?",
        back: "**SL: 30%** of the final grade · **HL: 20%** of the final grade (because HL also includes the 20% external HL Essay).",
        level: "HL",
      },
      {
        front: "What is the IB Non-Overlap Work Rule across the IO, HL Essay [HL], and Paper 2?",
        back: "No studied literary work used in your **Individual Oral** (2 works) or your **HL Essay [HL]** (1 work) may be reused in **Paper 2**!",
        level: "HL",
      },
      {
        front: "What does 'double balance' mean inside the 10-minute Individual Oral?",
        back: "1. **Work-to-work balance:** ~50/50 split (~4:15 English / ~4:15 Translated). 2. **Micro/macro balance:** inside EACH work, balance close-reading of the ≤40-line extract (~2:30) with wider whole-work analysis (~1:45).",
        level: "SL",
      },
      {
        front: "For a studied poetry, essay, or short-story collection, what counts as the 'extract' vs the 'whole work' in the IO?",
        back: "The **extract** is one complete short poem/piece (≤40 lines) or a ≤40-line excerpt; the **whole work** is the broader studied collection/body of work by that same author.",
        level: "SL",
      },
      {
        front: "How do the 7 Central Concepts support the HL Essay [HL]?",
        back: "The 1,200–1,500 word HL Essay explores a self-chosen literary **line of inquiry** on ONE separate studied work; anchoring it to one of the 7 Central Concepts ensures sustained conceptual focus rather than plot description.",
        level: "HL",
      },
      {
        front: "Does the Individual Oral require forced paragraph-by-paragraph comparison like Paper 2?",
        back: "No! Unlike Paper 2, the IO rubric assesses balanced examination of how each work presents the shared Global Issue (with crisp conceptual framing in the intro and brief synthesis at the end).",
        level: "SL",
      },
      {
        front: "What is the strategic purpose of the 5-minute teacher Q&A at the end of the IO?",
        back: "Teachers ask open, probing questions to help you deepen or extend Criteria A & B (exploring missed whole-work arcs, formal choices, ambiguity, or translation nuance) — it is a mark-boosting opportunity, not a trap.",
        level: "SL",
      },
    ],
    mustKnow: [
      "The **7 Central Concepts** are **Identity, Culture, Creativity, Communication, Perspective, Transformation, and Representation** — always use them as dynamic *how* questions, never passive labels.",
      "The **5 Fields of Inquiry** are **(1) Culture, identity & community; (2) Beliefs, values & education; (3) Politics, power & justice; (4) Art, creativity & imagination; (5) Science, technology & the environment**.",
      "Every IO Global Issue MUST pass all 3 IBO gates: **wide-scale significance**, **transnational** reach, and **impact felt in everyday local contexts**.",
      "The Individual Oral pairs **1 work originally written in English** + **1 work in translation**, using two clean unmarked extracts of **≤ 40 lines each** and a **≤ 10-bullet-point** outline.",
      "IO timing is strictly **10 minutes uninterrupted talk + 5 minutes teacher Q&A** (15 minutes total), scored out of **40 marks** (**A10, B10, C10, D10**).",
      "IO final grade weighting: **SL 30%** (from min 9 works studied, incl. ≥3 translated) · **HL 20%** (from min 13 works studied, incl. ≥4 translated).",
      "Protect **double balance**: equal ~4:15 / ~4:15 split across both works AND balanced close-reading of the extract (~2:30) + wider whole-work analysis (~1:45) for each work.",
      "Strict **Non-Overlap Rule**: any work used in your **IO** or **HL Essay [HL]** CANNOT be reused in **Paper 2**.",
      "Select extracts for **stylistic density** (imagery, rhythm, subtext, stage cues, focalization shifts), never flat plot exposition.",
      "The IO is examined against the official prompt: *\"Examine the ways in which the global issue of your choice is presented through the content and form of two of the works that you have studied.\"*",
    ],
    misconceptions: [
      {
        wrong: "Naming a broad Field of Inquiry like 'Politics, power and justice' or a one-word theme like 'Identity' counts as my Global Issue.",
        right: "Fields of Inquiry and single-word themes are only starting points. Your Global Issue must narrow to a specific transnational mechanism with tangible impact in everyday local contexts.",
        level: "SL",
      },
      {
        wrong: "A hyper-specific historical event (e.g., '1920s American Prohibition' or 'Victorian London factories') makes a great narrow Global Issue.",
        right: "Locking an issue to one nation or era violates the mandatory **transnational** property. Lift the underlying human tension so it travels across borders and centuries.",
        level: "SL",
      },
      {
        wrong: "If I analyse my ≤40-line extract brilliantly for 4.5 minutes, I don't really need to talk about the rest of the book.",
        right: "The rubric explicitly assesses understanding and authorial choices across **both the extracts and the works as a whole**. Neglecting the whole work caps Criteria A and B in mid-band.",
        level: "SL",
      },
      {
        wrong: "I should alternate back and forth comparing Work 1 and Work 2 in every single minute of my IO like a Paper 2 essay.",
        right: "Constant back-and-forth often fractures depth and muddies timing. Clear, symmetrical Work 1 → Work 2 analysis framed by a sharp conceptual intro and closing synthesis scores Band 5 cleanly on Criterion C.",
        level: "SL",
      },
      {
        wrong: "I can bring annotated extracts with highlighted techniques and a 600-word written script broken into 10 giant paragraphs as my 'outline'.",
        right: "Extracts MUST be completely **clean and unmarked**, and the 10-bullet outline must hold concise cues — reading scripted paragraphs destroys natural spoken delivery (Criterion D) and breaches assessment conduct.",
        level: "SL",
      },
      {
        wrong: "At HL, I can reuse my favourite Individual Oral translated play in my HL Essay or Paper 2 as long as I choose a different question.",
        right: "Strictly prohibited! The IB **non-overlap rule** bars reusing any IO or HL Essay work in Paper 2 (or reusing an IO work in the HL Essay).",
        level: "HL",
      },
      {
        wrong: "Two works paired in the IO must express the exact same moral message about the Global Issue.",
        right: "Works rarely agree completely — contrasting how two authors use different literary forms, tones, or cultural lenses to *complicate* the same Global Issue produces top-band insight.",
        level: "SL",
      },
    ],
    examMistakes: [
      "Spending 6.5–7 minutes on Work 1 and racing through Work 2 in under 3 minutes — severe imbalance immediately drags Criterion C down to Band 3.",
      "Picking a ≤40-line extract merely because a character *mentions* the theme in flat dialogue, leaving almost no imagery, form, or subtext to evaluate for Criterion B.",
      "Listing the 7 Concepts as hollow buzzwords ('this explores Culture and Perspective') instead of weaving one concept into a sharp analytical claim about craft.",
      "Selecting extracts that silently exceed **40 lines** (e.g. 46 lines of prose or drama) or forgetting to number the lines for clear verbal signposting.",
      "Treating the translated work as if it were originally written in English, ignoring cultural context, idioms, register, or translator choices.",
      "Wasting the first 90 seconds on author biographies and plot summaries instead of defining the narrowed Global Issue sharply within 30–45 seconds.",
      "Treating the 5-minute teacher Q&A defensively with one-word answers instead of supplying fresh micro-evidence and whole-work moments to boost Criteria A & B.",
      "Accidentally trapping yourself in DP2 by using your two best Paper 2 novels in your Individual Oral and leaving too few non-overlapping works for Paper 2.",
    ],
    mnemonics: [
      {
        topic: "The 7 Central Concepts",
        device: "I Can Create Clear, Persuasive Textual Readings",
        explanation:
          "**I**dentity · **C**ulture · **C**reativity · **C**ommunication · **P**erspective · **T**ransformation · **R**epresentation.",
        level: "SL",
      },
      {
        topic: "The 5 IB Fields of Inquiry",
        device: "C-B-P-A-S (Culture, Beliefs, Politics, Art, Science)",
        explanation:
          "**C**ulture, identity & community · **B**eliefs, values & education · **P**olitics, power & justice · **A**rt, creativity & imagination · **S**cience, technology & the environment.",
        level: "SL",
      },
      {
        topic: "3 Global Issue Gates & IO Numbers",
        device: "W-T-L + 40-10-10-5-40",
        explanation:
          "**W**ide-scale, **T**ransnational, **L**ocal everyday impact · **40** max lines · **10** max bullets · **10** min talk · **5** min Q&A · **40** total marks (A10/B10/C10/D10).",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Crossing Continents with One Global Issue",
        detail:
          "Pairing an original English work such as Margaret Atwood's *The Handmaid's Tale* `[Example text — not a set text]` with a translated work such as Sophocles' *Antigone* `[Example text — not a set text]` shows why transnational Global Issues matter: 2,400 years apart, both examine how state decrees collide with private bodily and moral autonomy.",
        emoji: "🌍",
      },
      {
        title: "Why Translation Changes Literary Reception",
        detail:
          "Franz Kafka's *The Metamorphosis* `[Example text — not a set text]` opens with *Ungeziefer* — rendered variously as 'monstrous vermin', 'gigantic insect', or 'beetle'. Attending to translator diction immediately elevates Criterion B analysis of **Representation** and alienation.",
        emoji: "🗣️",
      },
      {
        title: "Subtext in Everyday Domestic Spaces",
        detail:
          "In Henrik Ibsen's *A Doll's House* `[Example text — not a set text]`, macaroons hidden in a pocket and playful pet names enact power inequality inside a cosy living room — a classic demonstration of how a wide-scale Global Issue is **felt in everyday local contexts**.",
        emoji: "🏠",
      },
      {
        title: "Poetry Collections as a 'Whole Work'",
        detail:
          "When presenting a poet such as Wisława Szymborska `[Example text — not a set text]` in the IO, close-reading one crisp ≤40-line poem while tracing recurring ironic understatement across 3–4 other studied poems satisfies the whole-work requirement seamlessly.",
        emoji: "📜",
      },
      {
        title: "Learner Portfolio as Your Conceptual Map",
        detail:
          "Top IB students treat their Learner Portfolio like an investigative corkboard: tagging every text with 1–2 Central Concepts and Fields of Inquiry so that by DP2 Term 1, high-impact non-overlapping choices for the IO, HL Essay [HL], and Paper 2 practically choose themselves.",
        emoji: "🗂️",
      },
    ],
    videos: [
      {
        title: "IB English A Literature: The 7 Central Concepts Explained",
        channel: "IB English Guys",
        url: "https://www.youtube.com/results?search_query=IB+English+A+Literature+7+concepts+explained",
      },
      {
        title: "IB Individual Oral: How to Craft a Narrow Global Issue (5 Fields of Inquiry)",
        channel: "IB English Guys",
        url: "https://www.youtube.com/results?search_query=IB+Individual+Oral+global+issue+narrowing+5+fields+of+inquiry",
      },
      {
        title: "IB Literature Individual Oral Structure, Timing & 10-Bullet Outline",
        channel: "IB English A Literature Revision",
        url: "https://www.youtube.com/results?search_query=IB+English+A+Literature+Individual+Oral+structure+10+bullet+outline",
      },
      {
        title: "Balancing Extract & Whole Work in the IB Individual Oral (Criteria A–D)",
        channel: "IB Diploma Literature Craft",
        url: "https://www.youtube.com/results?search_query=IB+Individual+Oral+extract+whole+work+balance+criteria+A+B+C+D",
      },
    ],
    formulas: [
      {
        name: "Individual Oral Mark Split",
        formula: "Crit A (10) + Crit B (10) + Crit C (10) + Crit D (10) = 40 marks",
        note: "All four criteria carry equal 25% weight inside the Individual Oral.",
        level: "SL",
      },
      {
        name: "Individual Oral Timing Formula",
        formula: "10 min prepared oral + 5 min teacher Q&A = 15 min total",
        note: "Aim to conclude the prepared presentation cleanly between 9:30 and 10:00.",
        level: "SL",
      },
      {
        name: "IO Extract & Outline Limits",
        formula: "≤ 40 lines per unmarked extract · ≤ 10 bullet points on outline",
        note: "Applies identically to both SL and HL candidates.",
        level: "SL",
      },
      {
        name: "IO Final Grade Weighting (SL vs HL)",
        formula: "SL = 30% of final grade · HL = 20% of final grade",
        note: "HL additionally completes the 20% external HL Essay (1,200–1,500 words).",
        level: "HL",
      },
      {
        name: "IO 10-Minute Balance Target",
        formula: "0:45 Intro + 4:15 Work 1 (2:30 Ext / 1:45 Whole) + 4:15 Work 2 (2:30 Ext / 1:45 Whole) + 0:45 Synthesis",
        note: "Protects both 50/50 work parity and ~60/40 extract-to-whole-work depth.",
        level: "SL",
      },
      {
        name: "3-Gate Global Issue Check",
        formula: "Valid GI = Wide-Scale Significance ∧ Transnational ∧ Everyday Local Impact",
        note: "Failing even one gate caps Criterion A & C potential.",
        level: "SL",
      },
      {
        name: "Band-5 Global Issue Blueprint",
        formula: "How [specific mechanism/tension] + [active verb] + [human impact] + [in everyday local contexts]",
        note: "Keep to ~15–25 crisp words — specific yet transferable across two works.",
        level: "SL",
      },
      {
        name: "Concept-to-Question Blueprint",
        formula: "Authorial Choice + Active Verb + 1 Central Concept + Complicating Tension",
        note: "Transforms flat concept buzzwords into arguable analytical thesis statements.",
        level: "SL",
      },
      {
        name: "Non-Overlap Work Pool (SL vs HL)",
        formula: "SL: min 9 works (2 IO + ≥2 P2 distinct) · HL: min 13 works (2 IO + 1 HL Essay + ≥2 P2 distinct)",
        note: "No IO or HL Essay work may ever be reused in Paper 2.",
        level: "HL",
      },
      {
        name: "10-Bullet Symmetrical Outline Map",
        formula: "1 Intro + 3 W1 Extract + 1 W1 Whole + 3 W2 Extract + 1 W2 Whole + 1 Synthesis = 10 bullets",
        note: "Locks in balanced pacing without scripting full paragraphs.",
        level: "SL",
      },
    ],
  },
};
