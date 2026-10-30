import { Bot, Cpu, Layers, Mic, PhoneCall, ShieldCheck, Sparkles, Workflow, Zap, ArrowRight } from "./icons";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Production Voice Agents & Telephony",
    badge: "Primary Focus",
    description:
      "Real-time, full-duplex conversational voice agents that answer business phone calls in under 750ms, automate booking and lead triage, sync with your CRM, and smoothly escalate to humans.",
    deliverables: [
      "Twilio SIP trunking, WebRTC streaming & Voice Activity Detection (VAD)",
      "Streaming Deepgram Nova-2 STT & Cartesia Sonic sub-second TTS pipelines",
      "Deterministic tool execution (Calendar, HubSpot, WhatsApp) & human escalation gates",
    ],
  },
  {
    number: "02",
    icon: Bot,
    title: "Autonomous Multi-Agent Orchestration",
    badge: "Agentic Systems",
    description:
      "Stateful, cyclic multi-agent systems using LangGraph that coordinate specialized LLM nodes, manage persistent memory, invoke tools deterministically, and self-correct across complex workflows.",
    deliverables: [
      "Supervisor-worker architectures with state graph routing",
      "Persistent state memory & human-in-the-loop checkpoints",
      "Dynamic tool-calling, fallback recovery & structured validation",
    ],
  },
  {
    number: "03",
    icon: Layers,
    title: "Enterprise RAG & Grounded Intelligence",
    badge: "Core Systems",
    description:
      "Private retrieval-augmented generation engines that ground LLMs in company documentation, call recordings, databases, and internal knowledge graphs with zero hallucination.",
    deliverables: [
      "Semantic chunking & vector indexing (ChromaDB / pgvector / Pinecone)",
      "Strict citation synthesis & timestamped source attribution",
      "Multi-modal ingestion pipelines over PDFs, video, audio & SQL data",
    ],
  },
  {
    number: "04",
    icon: Cpu,
    title: "Production AI Microservices & APIs",
    badge: "Backend & Systems",
    description:
      "Resilient backend architectures built with FastAPI, Python, and Java Spring Boot to deliver high-throughput, streaming model inference, role-based security, and cloud scalability.",
    deliverables: [
      "Asynchronous worker queues & token streaming endpoints",
      "Model governance, tokenomics optimization & latency benchmarks",
      "Production-ready Next.js frontends, webhooks & secure auth/billing",
    ],
  },
];

export function ClientServices() {
  return (
    <div className="client-services-grid">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <article key={service.number} className="service-card">
            <div className="service-card-top">
              <span className="service-num">{service.number}</span>
              <span className="service-badge">{service.badge}</span>
            </div>
            <div className="service-icon-box">
              <Icon size={24} />
            </div>
            <h3>{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            <div className="service-deliverables">
              <span className="deliverables-heading">CORE DELIVERABLES & TECHNIQUES:</span>
              <ul>
                {service.deliverables.map((item, idx) => (
                  <li key={idx}>
                    <ShieldCheck size={14} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact" className="service-cta">
              Let’s discuss this track <ArrowRight size={14} />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
