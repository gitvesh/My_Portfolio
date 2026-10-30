import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Github, Linkedin } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description: "Background, computer engineering education, experience, and architectural focus of Bhavesh Jadhav.",
};

const experiences = [
  {
    dates: "JUL 2026 — PRESENT",
    role: "Software Engineer Trainee",
    org: "Yardi Software India Pvt. Ltd.",
    copy: "Enterprise database diagnostics, SQL-driven product issue resolution, system data integrity, and high-stakes financial reporting workflows for global property-management platforms.",
  },
  {
    dates: "FEB — MAY 2025",
    role: "Backend Developer Intern",
    org: "Sensei",
    copy: "Architected and tested resilient RESTful microservices using Java, Spring Boot, and PostgreSQL, focusing on API performance and clean contract boundaries.",
  },
  {
    dates: "FEB — MAR 2025",
    role: "AWS & Data Engineering Virtual Intern",
    org: "EduSkills",
    copy: "Applied cloud infrastructure patterns, relational data pipelines, and AWS cloud architectural fundamentals.",
  },
];

const skillGroups = [
  {
    name: "Voice AI & Real-Time Telephony",
    skills: ["Transcript Model", "Twilio SIP", "Cartesia Sonic", "Voice Activity Detection", "FastAPI WebSockets", "LLM"],
  },
  {
    name: "Autonomous Agents & LLMs",
    skills: ["LangGraph", "Multi-Agent Graphs", "Pydantic Schemas", "Tool Calling", "Memory Checkpointers", "Human-in-the-Loop"],
  },
  {
    name: "Retrieval & Vector Engines",
    skills: ["Enterprise RAG", "ChromaDB", "pgvector", "Pinecone", "Semantic Chunking", "Citation Attribution"],
  },
  {
    name: "Backend & Systems Software",
    skills: ["Python", "FastAPI", "Java", "Spring Boot", "MySQL", "REST APIs"],
  },
];

export default function AboutPage() {
  return (
    <div className="about-page wrap">
      <Reveal>
        <div className="page-kicker">
          <span className="eyebrow">ENGINEERING BACKGROUND</span>
          <span className="eyebrow">PUNE, INDIA · AVAILABLE GLOBALLY</span>
        </div>
        <div className="about-hero">
          <div>
            <h1 className="page-title">
              Listen deeply.<br />
              <span>Build, learn & grow.</span>
            </h1>
            <p className="page-lead">
              I’m Bhavesh Jadhav — a Computer Engineering graduate and AI systems builder focused on understanding real problems, building hands-on solutions, and continuous learning.
            </p>
            <p className="about-copy">
              My core philosophy is straightforward: listen to what is actually broken, and learn by building solutions from first principles. I am early in my engineering journey with an ambition to launch an applied AI company or studio in the future. Today, I prioritize substance over hype: engineering real-time Voice Agents (&lt;750ms latency), architecting stateful multi-agent workflows with LangGraph, and writing solid backend microservices. I am actively connecting with founders to solve operational bottlenecks and interviewing with forward-thinking engineering teams for high-impact AI roles.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com/in/bhavesh-jadhav-671048250" target="_blank" rel="noreferrer">
                <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} />
              </a>
              <a href="https://github.com/gitvesh" target="_blank" rel="noreferrer">
                <Github size={15} /> GitHub <ArrowUpRight size={13} />
              </a>
              <a href="https://codolio.com/profile/BhaveshJadhav1104" target="_blank" rel="noreferrer">
                <span className="codolio-icon">C</span> Codolio Profile <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <div className="about-photo">
            <Image
              src="/bhavesh-jadhav-v2.jpg"
              alt="Bhavesh Jadhav — AI Systems Engineer"
              width={1050}
              height={1400}
              sizes="(max-width: 800px) 88vw, 460px"
            />
            <span>BHAVESH JADHAV · AI SYSTEMS ENGINEER</span>
          </div>
        </div>
      </Reveal>

      <section className="about-section">
        <Reveal>
          <SectionHeading
            number="01"
            eyebrow="ENGINEERING FOUNDATION"
            title="Experience in production teams."
            description="Proven background in enterprise product diagnostics, Java/Spring Boot microservice development, and cloud data systems."
          />
        </Reveal>
        <div className="experience-list">
          {experiences.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.07}>
              <div className="experience-row">
                <span className="experience-date">{item.dates}</span>
                <div>
                  <h3>{item.role}</h3>
                  <span className="experience-org">{item.org}</span>
                  <p>{item.copy}</p>
                </div>
                <i className={index === 0 ? "timeline-mark current" : "timeline-mark"} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-section education-section">
        <Reveal>
          <SectionHeading
            number="02"
            eyebrow="ACADEMIC RIGOR"
            title="Computer Engineering degree."
          />
        </Reveal>
        <Reveal>
          <div className="education-card">
            <span className="education-date">NOV 2022 — MAY 2026</span>
            <div>
              <h3>B.E. Computer Engineering</h3>
              <p>International Institute of Information Technology (I²IT), Pune</p>
              <span>Savitribai Phule Pune University</span>
            </div>
            <div className="education-score">
              <b>7.7</b>
              <span>CGPA</span>
            </div>
            <span className="education-status">COMPLETED</span>
          </div>
        </Reveal>
      </section>

      <section className="about-section skills-section">
        <Reveal>
          <SectionHeading
            number="03"
            eyebrow="CORE ARCHITECTURAL STACK"
            title="Technologies & systems."
            description="Specialized competencies across autonomous agent orchestration, vector retrieval, and high-throughput production backends."
          />
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.name} delay={index * 0.07}>
              <div className="skill-group">
                <span className="eyebrow">0{index + 1}</span>
                <h3>{group.name}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <Reveal>
          <span className="eyebrow">LET’S COLLABORATE</span>
          <h2>
            Ready to engineer<br />
            <span>impactful systems?</span>
          </h2>
          <Link className="button button-primary" href="/contact">
            Initiate Conversation <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
