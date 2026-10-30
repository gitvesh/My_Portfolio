import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Code2,
  Mic,
  Network,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "@/components/icons";
import { NeuralVisual } from "@/components/neural-visual";
import { HeroPortraitVisual } from "@/components/hero-portrait-visual";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { ClientServices } from "@/components/client-services";
import { ClientFAQ } from "@/components/client-faq";
import { TrustBar } from "@/components/trust-bar";
import { HeroContactBadge } from "@/components/hero-contact-badge";
import { VoiceSystemShowcase } from "@/components/voice-system-showcase";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featured = [projects[0], projects[1], projects[2]];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" /> OPEN TO AI ROLES · ACCEPTING VOICE AGENT PILOTS
          </div>
          <p className="hero-greeting">Hello, I’m</p>
          <h1>
            Bhavesh<br />
            <span>Jadhav.</span>
          </h1>
          <p className="hero-headline">
            AI Systems Engineer specializing in Real-Time Voice Agents & Autonomous Workflows.
          </p>
          <p className="hero-intro">
            I believe in listening first: understanding the real business bottlenecks people face, learning the domain deeply, and engineering hands-on solutions. Driven by continuous learning through code—spanning sub-second Voice AI pipelines, LangGraph stateful multi-agents, and resilient backend systems.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Discuss a Voice Agent Pilot <ArrowUpRight size={16} />
            </Link>
            <Link className="button button-secondary" href="/projects">
              Explore Code & Architecture <ArrowRight size={16} />
            </Link>
          </div>
          <div className="hero-client-row">
            <HeroContactBadge />
          </div>
          <div className="hero-meta">
            <span><i /> PUNE, INDIA (COLLABORATING GLOBALLY)</span>
            <span>VOICE AI (SUB-750ms) · LANGGRAPH · FASTAPI · REAL-TIME WEBSOCKETS</span>
          </div>
        </div>

        <HeroPortraitVisual />

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight size={15} />
        </div>
      </section>

      {/* TRUST & CAPABILITY STRIP */}
      <TrustBar />

      {/* DUAL TRACK: FOR HIRING TEAMS VS FOR BUSINESS OWNERS */}
      <section className="dual-track-section wrap">
        <Reveal>
          <SectionHeading
            number="01"
            eyebrow="DUAL ENGAGEMENT MODEL"
            title="How I collaborate with teams and founders."
            description="Clear, transparent value whether you are looking to hire a dedicated AI systems engineer or deploy voice automation for your business."
          />
        </Reveal>
        <div className="dual-track-grid">
          <Reveal>
            <article className="track-card">
              <span className="track-badge">FOR HIRING MANAGERS & RECRUITERS</span>
              <h3>AI Engineering Roles</h3>
              <p>
                Seeking an engineer with deep curiosity, strong CS fundamentals, and hands-on systems experience? I am Curious to learn and Build AI systems
              </p>
              <ul className="track-points">

                <li>
                  <ShieldCheck size={14} className="check-icon" />
                  <span>Stateful Multi-Agent Orchestration with LangGraph & Pydantic schemas</span>
                </li>


              </ul>
              <Link href="/about" className="track-cta">
                Review Engineering Background & Resume <ArrowRight size={14} />
              </Link>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="track-card">
              <span className="track-badge">FOR BUSINESS OWNERS & CLIENTS</span>
              <h3>Custom Voice AI & Workflow Automation</h3>
              <p>
                Missing customer phone calls when staff is busy? Need 24/7 appointment scheduling, emergency dispatch, or lead triage without hiring a call center? I build custom voice systems tailored to your workflow.
              </p>
              <ul className="track-points">
                <li>
                  <ShieldCheck size={14} className="check-icon" />
                  <span>Zero Upfront Risk: Free 20-min problem audit + 48-hour working prototype</span>
                </li>
                <li>
                  <ShieldCheck size={14} className="check-icon" />
                  <span>Under 750ms speech response time for natural phone conversations</span>
                </li>
                <li>
                  <ShieldCheck size={14} className="check-icon" />
                  <span>Guaranteed human fallback: smooth transfer to staff whenever needed</span>
                </li>
                <li>
                  <ShieldCheck size={14} className="check-icon" />
                  <span>Direct CRM, Google Calendar, and WhatsApp/SMS alert integrations</span>
                </li>
              </ul>
              <Link href="/contact" className="track-cta">
                Book a Free  Problem Discovery <ArrowRight size={14} />
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      {/* FLAGSHIP VOICE AGENT SYSTEM SHOWCASE */}
      <Reveal>
        <VoiceSystemShowcase />
      </Reveal>

      {/* FEATURED CASE STUDIES */}
      <section className="section wrap featured-section">
        <Reveal>
          <SectionHeading
            number="02"
            eyebrow="VERIFIABLE SYSTEMS"
            title="Learning through building real architectures."
            description="Every project is an exploration of a real-world challenge—from voice-driven emergency dispatch to stateful agent graphs and grounded vector search."
          />
        </Reveal>
        <div className="project-grid featured-grid">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
        <div className="section-link">
          <Link href="/projects">
            Explore all 8 projects with source code & benchmarks <ArrowRight size={16} />
          </Link>
          <span>VOICE AI · LANGGRAPH · ENTERPRISE RAG · BACKENDS · VISION</span>
        </div>
      </section>

      {/* CLIENT SERVICES SECTION */}
      <section className="services-section">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              number="03"
              eyebrow="APPLIED AI CAPABILITIES"
              title="How I apply AI to solve real operational problems."
              description="Practical engineering tracks where I build prototypes, test model capabilities, and turn messy requirements into working software."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ClientServices />
          </Reveal>
        </div>
      </section>

      {/* HOW WE COLLABORATE */}
      <section className="approach-section">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              number="04"
              eyebrow="HOW I APPROACH PROBLEMS"
              title="Listen, prototype, evaluate, and learn."
              description="A humble, collaborative methodology centered on understanding the user's friction point first before writing code."
            />
          </Reveal>
          <div className="approach-grid">
            <Reveal>
              <article className="approach-card">
                <span className="approach-num">01</span>
                <div className="approach-icon">
                  <BrainCircuit size={20} />
                </div>
                <h3>Listen & Understand the Real Problem</h3>
                <p>
                  Listen carefully to what is actually broken or tedious. Examine existing data and workflows to verify if AI is genuinely the right tool.
                </p>
                <span className="approach-line" />
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="approach-card">
                <span className="approach-num">02</span>
                <div className="approach-icon">
                  <Workflow size={20} />
                </div>
                <h3>Build a Testable Prototype in 48h</h3>
                <p>
                  Quickly build a working, interactive prototype (Voice Agent phone number, LangGraph agent, or API) to test with real users and gather immediate feedback.
                </p>
                <span className="approach-line" />
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="approach-card">
                <span className="approach-num">03</span>
                <div className="approach-icon">
                  <ShieldCheck size={20} />
                </div>
                <h3>Evaluate, Harden & Learn</h3>
                <p>
                  Benchmark latency, eliminate hallucinations, test edge cases, and learn from real usage to ensure the solution genuinely solves the problem.
                </p>
                <span className="approach-line" />
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SYSTEMS ARCHITECTURE IN MOTION */}
      <section className="systems-section wrap">
        <div className="systems-copy">
          <Reveal>
            <span className="eyebrow">
              <span className="section-number">05 / </span>CORE PHILOSOPHY
            </span>
            <h2>
              Real engineering over hype.<br />
              <span>Solutions that genuinely help.</span>
            </h2>
            <p>
              I believe in substance over buzzwords. Real AI software requires deterministic state machines, reliable fallback logic, clean schema validation, and private vector storage. I love tackling difficult bottlenecks, learning from every edge case, and building systems people can count on.
            </p>
            <Link className="text-link" href="/contact">
              Let’s discuss a problem you’re facing <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
        <Reveal className="systems-visual">
          <NeuralVisual />
        </Reveal>
      </section>

      {/* STRATEGIC FAQ */}
      <section className="faq-section">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              number="06"
              eyebrow="PERSPECTIVE & FAQ"
              title="How I think, learn, and collaborate."
              description="Direct answers on my background, learning trajectory, Voice AI architecture, and how I approach discussions."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ClientFAQ />
          </Reveal>
        </div>
      </section>

      {/* FINAL COLLAB CTA */}
      <section className="collab-section wrap">
        <Reveal>
          <span className="eyebrow">
            <span className="section-number">07 / </span>LET’S CONNECT
          </span>
          <div className="collab-content">
            <h2>
              Have a problem worth exploring?<br />
              <span>Let’s connect and talk.</span>
            </h2>
            <div>
              <p>
                Whether you want to discuss an AI engineering role on your team, explore a Voice Agent pilot for your business, or just connect to share ideas—I’d love to talk.
              </p>
              <div className="collab-actions">
                <Link className="button button-primary" href="/contact">
                  Start a Conversation <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
