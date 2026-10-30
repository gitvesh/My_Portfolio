"use client";

import { useState } from "react";
import { ChevronDown } from "./icons";

const faqs = [
  {
    q: "Why are you specializing in Voice AI Agent systems?",
    a: "Voice is the most natural communication medium for businesses, yet small and mid-sized companies lose significant revenue every day simply by missing phone calls when staff is busy or after hours. Building reliable Voice AI demands mastery over sub-800ms latency budgets, bi-directional audio streaming, Voice Activity Detection, and deterministic tool execution. It's the ultimate test of backend systems and applied AI.",
  },
  {
    q: "How can a business test a Voice Agent with you if you are an independent builder?",
    a: "Through a completely zero-risk pilot: We begin with a 20-minute discovery session where I listen to your common call scenarios and friction points. Within 48 hours, I build a custom test phone prototype using your company's actual FAQs and scheduling rules for you to call and evaluate. We only deploy on overflow or after-hours calls with guaranteed human voicemail fallback. If it doesn't save you time or capture leads, you pay nothing.",
  },
  {
    q: "How do you prevent the Voice Agent from hallucinating or making false commitments?",
    a: "By decoupling dialogue management from unconstrained generation. The voice agent operates through strict Pydantic JSON schemas, deterministic state graphs, and verified API endpoints. It is programmed with rigorous guardrails: if an inquiry falls outside its verified knowledge base or confidence thresholds, it executes an immediate fallback—either capturing a callback ticket or smoothly transferring to a human team member.",
  },
  {
    q: "What kind of AI engineering roles are you looking for with hiring teams?",
    a: "I am actively open to AI Engineering and Backend Systems roles with ambitious teams. I bring hands-on experience in asynchronous Python/FastAPI microservices, LangGraph multi-agent workflows, streaming WebSockets, and enterprise database diagnostics (developed during my enterprise experience at Yardi Software). I am eager to collaborate with and learn from senior engineers while delivering high-throughput code.",
  },
  {
    q: "What is your foundational engineering background?",
    a: "I hold a B.E. in Computer Engineering (7.7 CGPA). I have hands-on production experience at Yardi Software (enterprise database diagnostics, SQL integrity, and property management platform operations) and backend development at Sensei (Java, Spring Boot, REST APIs). My active stack centers on Python, FastAPI, Deepgram, Groq, LangGraph, and PyTorch.",
  },
  {
    q: "What is your long-term goal?",
    a: "My long-term ambition is to launch my own applied AI company / studio delivering intelligent voice and workflow automation for businesses globally. The way to achieve that with integrity is to build from first principles today: listening to real business problems, mastering real-time systems, and writing clean, reproducible software.",
  },
];

export function ClientFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-accordion">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`faq-item ${isOpen ? "faq-open" : ""}`}>
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span>{faq.q}</span>
              <ChevronDown
                size={18}
                className={`faq-icon ${isOpen ? "rotate-icon" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
