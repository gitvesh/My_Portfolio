"use client";

import { useState } from "react";
import { Activity, ArrowRight, Bot, Check, Clock, Mic, PhoneCall, PhoneForwarded, ShieldCheck, Sparkles, Terminal, Volume2, Zap } from "./icons";
import Link from "next/link";

interface Scenario {
  id: string;
  badge: string;
  name: string;
  industry: string;
  problem: string;
  dialogue: {
    caller: string;
    agentThought: string;
    extractedData: Record<string, string>;
    agentResponse: string;
    systemAction: string;
  };
}

const scenarios: Scenario[] = [
  {
    id: "breakdown",
    badge: "24/7 Field Operations",
    name: "Automotive Breakdown & Roadside Dispatch",
    industry: "Automotive & Logistics",
    problem: "Workshops miss 40% of emergency breakdown calls when mechanics are busy under vehicles or after 7 PM.",
    dialogue: {
      caller: "“Hi, I’m stuck near the highway toll on NH-48 with a broken radiator. Smoke is coming out from my Tata Harrier.”",
      agentThought: "Detect emergency breakdown intent. Extract location (NH-48 Toll), vehicle (Tata Harrier), and symptom (radiator smoke). Classify urgency as HIGH.",
      extractedData: {
        vehicle: "Tata Harrier (Diesel)",
        issue: "Radiator leak / Steam emission",
        location: "NH-48 Toll Plaza (Pune-Mumbai lane)",
        urgency: "P1 — Emergency Tow Required",
      },
      agentResponse: "“I’ve logged your location at the NH-48 toll plaza. Keep your hazard lights on and step behind the guardrail. I’m dispatching our nearest recovery vehicle right now—you’ll receive an SMS tracking link in 30 seconds.”",
      systemAction: "Triggered Webhook: SMS alert sent to On-Call Mechanic + GPS dispatched + CRM Ticket #8291 created.",
    },
  },
  {
    id: "clinic",
    badge: "High-Volume Front Desk",
    name: "Clinic & Dental Appointment Scheduler",
    industry: "Healthcare & Wellness",
    problem: "Front desk staff spends 4+ hours daily answering routine scheduling calls while patients wait in line.",
    dialogue: {
      caller: "“Hello, I need to book a root canal consultation with Dr. Mehta for this Friday afternoon if possible.”",
      agentThought: "Intent: Appointment Booking. Query Dr. Mehta's schedule for Friday afternoon. Identify 3:30 PM & 5:00 PM availability.",
      extractedData: {
        practitioner: "Dr. Mehta (Endodontics)",
        service: "Root Canal Consultation",
        requestedDate: "Friday, Nov 3",
        selectedSlot: "03:30 PM IST",
      },
      agentResponse: "“Dr. Mehta has two openings this Friday: 3:30 PM and 5:00 PM. Would 3:30 PM work for you? I can confirm that immediately and send your calendar confirmation.”",
      systemAction: "Triggered Webhook: Google Calendar event reserved + WhatsApp reminder queued + Patient file updated.",
    },
  },
  {
    id: "support",
    badge: "Inbound Lead Qualification",
    name: "B2B After-Hours Lead Capture & Triage",
    industry: "Professional Services & Real Estate",
    problem: "High-value business inquiries call after work hours, go straight to voicemail, and hire a competitor within 1 hour.",
    dialogue: {
      caller: "“We run a 50-person warehouse in Chakan and need automated inventory tracking. Can someone call me tomorrow morning?”",
      agentThought: "Intent: High-value enterprise lead. Extract company size (50-person), facility (Chakan warehouse), and scope (inventory tracking).",
      extractedData: {
        leadType: "Enterprise Operations",
        facilitySize: "50-person facility / Chakan",
        scope: "Automated Inventory Tracking",
        callbackWindow: "Tomorrow 10:00 AM — 11:30 AM",
      },
      agentResponse: "“Absolutely. I’ve captured your details for our industrial team. Would 10:30 AM tomorrow work for a 15-minute briefing with our lead solutions engineer?”",
      systemAction: "Triggered Webhook: Hubspot CRM lead qualified + Slack notification to founder + Calendar invite sent.",
    },
  },
];

const pipelineSteps = [
  {
    step: "01",
    title: "Audio Ingest & Telephony",
    tech: "Twilio SIP / WebRTC",
    latency: "<80ms",
    desc: "Bi-directional audio streaming via WebSockets with Voice Activity Detection (VAD) and immediate barge-in interruption handling.",
  },
  {
    step: "02",
    title: "Streaming Transcription",
    tech: "Deepgram Nova-2",
    latency: "<140ms",
    desc: "Real-time acoustic speech-to-text with domain-specific keyword boosting, punctuation prediction, and background noise suppression.",
  },
  {
    step: "03",
    title: "Orchestration & Tools",
    tech: "Groq / LLaMA-3.3 / Haiku",
    latency: "<220ms",
    desc: "Deterministic dialogue state machine using strict JSON schema validation for function calling, booking APIs, and CRM routing.",
  },
  {
    step: "04",
    title: "Sub-Second Synthesis",
    tech: "Cartesia Sonic / ElevenLabs",
    latency: "<140ms",
    desc: "Ultra-low-latency text-to-speech with natural breathing pauses, contextual intonation, and instant audio byte streaming.",
  },
  {
    step: "05",
    title: "Deterministic Fallback",
    tech: "Human Escalation Gate",
    latency: "Instant",
    desc: "Zero hallucination guarantee: if confidence drops below 90% or the caller requests a person, call smoothly bridges to staff.",
  },
];

export function VoiceSystemShowcase() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("breakdown");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  function runSimulation() {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 2800);
  }

  return (
    <section className="voice-showcase-section" id="voice-systems">
      <div className="wrap">
        {/* SECTION HEADER */}
        <div className="voice-header">
          <div className="voice-badge-pill">
            <span className="voice-pulse-dot" />
            <span>FLAGSHIP FOCUS · REAL-TIME VOICE AI</span>
          </div>
          <h2>
            Production Voice Agents engineered for <span>real business phone calls.</span>
          </h2>
          <p className="voice-lead">
            I don’t build toy prompt wrappers. I engineer event-driven, full-duplex Voice AI pipelines that answer phone calls in under 750ms, follow strict business rules, integrate with existing CRMs, and gracefully escalate to humans when needed.
          </p>
        </div>

        {/* ARCHITECTURE PIPELINE BREAKDOWN */}
        <div className="voice-pipeline-shell">
          <div className="pipeline-header">
            <div>
              <span className="pipeline-tag">VERIFIABLE SYSTEM ARCHITECTURE</span>
              <h3>End-to-End Latency Budget: &lt; 750ms Total Turnaround</h3>
            </div>
            <div className="pipeline-metric">
              <Activity size={16} className="metric-icon" />
              <span>Natural Human Conversation Cadence</span>
            </div>
          </div>

          <div className="pipeline-grid">
            {pipelineSteps.map((step) => (
              <div key={step.step} className="pipeline-step-card">
                <div className="step-top">
                  <span className="step-num">{step.step}</span>
                  <span className="step-latency">{step.latency}</span>
                </div>
                <h4>{step.title}</h4>
                <div className="step-tech">{step.tech}</div>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* INTERACTIVE WORKFLOW SIMULATOR */}
        <div className="voice-sim-box">
          <div className="sim-top-bar">
            <div className="sim-title-group">
              <PhoneCall size={18} className="sim-phone-icon" />
              <div>
                <h4>Interactive Voice Agent Simulation</h4>
                <p>Select a real-world business use case to inspect live transcription, reasoning, and automated tool execution.</p>
              </div>
            </div>

            {/* SCENARIO SWITCHER */}
            <div className="sim-tabs" role="tablist">
              {scenarios.map((sc) => (
                <button
                  key={sc.id}
                  type="button"
                  role="tab"
                  aria-selected={activeScenarioId === sc.id}
                  className={`sim-tab-btn ${activeScenarioId === sc.id ? "is-active" : ""}`}
                  onClick={() => setActiveScenarioId(sc.id)}
                >
                  <span>{sc.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="sim-body">
            {/* LEFT: SCENARIO CONTEXT */}
            <div className="sim-context-panel">
              <div className="sim-pill-row">
                <span className="sim-industry-badge">{activeScenario.industry}</span>
                <span className="sim-badge-secondary">{activeScenario.badge}</span>
              </div>
              <h3 className="sim-scenario-title">{activeScenario.name}</h3>
              <div className="sim-problem-box">
                <span className="sim-label">THE BUSINESS BOTTLENECK:</span>
                <p>{activeScenario.problem}</p>
              </div>

              {/* LIVE AUDIO WAVE SIMULATOR */}
              <div className="sim-wave-box">
                <div className="wave-status">
                  <span className="audio-live-dot" />
                  <span>{isSimulating ? "SIMULATING CALL IN PROGRESS..." : "CALL STREAM READY"}</span>
                  <span className="wave-latency">710ms RTT</span>
                </div>
                <div className={`audio-bars-container ${isSimulating ? "is-active" : ""}`}>
                  {Array.from({ length: 32 }, (_, i) => (
                    <span
                      key={i}
                      className="audio-bar"
                      style={{
                        animationDelay: `${(i * 0.05).toFixed(2)}s`,
                        height: isSimulating ? `${12 + ((i * 17) % 36)}px` : "6px",
                      }}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="button button-primary sim-run-btn"
                  onClick={runSimulation}
                  disabled={isSimulating}
                >
                  {isSimulating ? (
                    <>
                      <Activity size={14} className="spin-icon" /> Processing Voice Stream...
                    </>
                  ) : (
                    <>
                      <Volume2 size={14} /> Re-Simulate Voice Call
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* RIGHT: REAL-TIME CONVERSATION & STATE MACHINE */}
            <div className="sim-transcript-panel">
              {/* CALLER SPEECH */}
              <div className="transcript-row caller-row">
                <div className="transcript-avatar">
                  <Mic size={14} />
                </div>
                <div className="transcript-bubble">
                  <span className="speaker-label">CALLER (AUDIO INGEST · 8kHz TELEPHONY)</span>
                  <p>{activeScenario.dialogue.caller}</p>
                </div>
              </div>

              {/* AGENT REASONING & EXTRACTION */}
              <div className="transcript-row system-row">
                <div className="transcript-avatar system-avatar">
                  <Terminal size={14} />
                </div>
                <div className="transcript-bubble system-bubble">
                  <div className="system-bubble-header">
                    <span className="speaker-label">INTERNAL REASONING & ENTITY EXTRACTION (LLM)</span>
                    <span className="schema-badge">Pydantic Validated JSON</span>
                  </div>
                  <p className="reasoning-text">{activeScenario.dialogue.agentThought}</p>
                  
                  {/* EXTRACTED SLOTS TABLE */}
                  <div className="slots-grid">
                    {Object.entries(activeScenario.dialogue.extractedData).map(([key, val]) => (
                      <div key={key} className="slot-item">
                        <span className="slot-key">{key}:</span>
                        <span className="slot-val">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AGENT VOICE OUTPUT */}
              <div className="transcript-row agent-row">
                <div className="transcript-avatar agent-avatar">
                  <Bot size={14} />
                </div>
                <div className="transcript-bubble agent-bubble">
                  <span className="speaker-label">VOICE AGENT (SYNTHESIZED TTS · CARTEISA SONIC)</span>
                  <p>{activeScenario.dialogue.agentResponse}</p>
                </div>
              </div>

              {/* TRIGGERED DISPATCH / SYSTEM ACTION */}
              <div className="action-pill">
                <Check size={14} className="check-success" />
                <span>{activeScenario.dialogue.systemAction}</span>
              </div>
            </div>
          </div>
        </div>

        {/* THE ZERO-RISK PILOT BANNER FOR BUSINESSES */}
        <div className="zero-risk-banner">
          <div className="risk-content">
            <span className="eyebrow">HONEST, ZERO-RISK COLLABORATION</span>
            <h3>How I work with business owners as an independent builder</h3>
            <p>
              I don’t ask for long-term retainers or inflated fees. My goal is to understand your specific workflow bottleneck, build a testable voice prototype within 48 hours tailored to your actual business script, and deploy it on low-risk after-hours calls. If it doesn’t save you time or capture leads, you pay nothing.
            </p>
            <div className="risk-guarantees">
              <div className="risk-item">
                <ShieldCheck size={16} className="risk-icon" />
                <span>Zero Upfront Risk — Test working demo first</span>
              </div>
              <div className="risk-item">
                <Clock size={16} className="risk-icon" />
                <span>48-Hour Custom Prototype Turnaround</span>
              </div>
              <div className="risk-item">
                <PhoneForwarded size={16} className="risk-icon" />
                <span>100% Deterministic Fallback to Human Staff</span>
              </div>
            </div>
          </div>
          <div className="risk-cta">
            <Link href="/contact" className="button button-primary">
              Book a Free 20-Min Problem Audit <ArrowRight size={15} />
            </Link>
            <span className="risk-subtext">Direct discussion with Bhavesh · No sales pitches</span>
          </div>
        </div>
      </div>
    </section>
  );
}
