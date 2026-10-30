"use client";

import { type MouseEvent, type FormEvent, useState } from "react";
import { ArrowUpRight, Check, Clock, Copy, Mail } from "./icons";

const engagementTypes = [
  "Voice Agent for My Business (Free 20-Min Audit & Demo)",
  "AI Engineer Role / Hiring Opportunity (Recruiter)",
  "Autonomous Agent Workflow (LangGraph)",
  "Enterprise RAG & Document Intelligence",
  "Backend & Systems Engineering Discussion",
  "Technical Networking & Applied AI Knowledge Sharing",
];

const timelineOptions = [
  "Free 20-min problem discovery session",
  "Active hiring pipeline / technical interview",
  "Pilot voice prototype (next 2–4 weeks)",
  "Just connecting & knowledge exchange",
];

export function ContactForm() {
  const [selectedType, setSelectedType] = useState<string>(engagementTypes[0]);
  const [timeline, setTimeline] = useState<string>(timelineOptions[0]);
  const [copied, setCopied] = useState(false);
  const [ready, setReady] = useState(false);

  function getMailContent(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = `[Conversation: ${selectedType}] — ${name || "Connection"}`;
    const body = `Hi Bhavesh,\n\nI'd like to connect regarding:\n\n• Topic: ${selectedType}\n• Timeline / Context: ${timeline}\n\nDetails:\n${message}\n\nBest regards,\n${name}\n${email}`;
    return { subject, body };
  }

  function handleDirectMail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const { subject, body } = getMailContent(form);
    setReady(true);
    window.location.href = `mailto:bhaveshjadhav9923@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  function handleCopyDetails(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const formEl = (event.currentTarget.closest("form") as HTMLFormElement) || null;
    let name = "Partner";
    let email = "";
    let message = "Let's connect regarding an AI engineering initiative.";
    if (formEl) {
      const data = new FormData(formEl);
      name = String(data.get("name") || "Partner").trim() || "Partner";
      email = String(data.get("email") || "").trim();
      message = String(data.get("message") || "").trim() || message;
    }
    const fullDraft = `To: bhaveshjadhav9923@gmail.com\nSubject: [Inquiry: ${selectedType}] — ${name}\n\nHi Bhavesh,\n\n• Track: ${selectedType}\n• Timeline: ${timeline}\n\nOverview:\n${message}\n\nBest regards,\n${name} (${email})`;

    navigator.clipboard.writeText(fullDraft).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  }

  return (
    <form className="contact-form" onSubmit={handleDirectMail}>
      <div className="client-service-chips" aria-label="Select engagement scope">
        <span className="chips-label">SELECT ENGAGEMENT SCOPE / TRACK:</span>
        <div className="chips-grid">
          {engagementTypes.map((type) => (
            <button
              key={type}
              type="button"
              className={`service-chip ${selectedType === type ? "is-selected" : ""}`}
              onClick={() => setSelectedType(type)}
            >
              {selectedType === type ? "✓ " : ""}{type}
            </button>
          ))}
        </div>
      </div>

      <div className="form-grid">
        <label>
          Your Name / Organization
          <input name="name" type="text" placeholder="e.g. Alex Miller / TechCorp" autoComplete="name" required />
        </label>
        <label>
          Work Email Address
          <input name="email" type="email" placeholder="alex@techcorp.com" autoComplete="email" required />
        </label>
      </div>

      <label>
        Desired Timeline / Horizon
        <select
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)}
          className="contact-select"
        >
          {timelineOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>

      <label>
        What’s on your mind? (Problem, role, or ideas)
        <textarea
          name="message"
          rows={4}
          placeholder="Tell me about the problem you’re trying to solve, an engineering role on your team, or what you’d like to brainstorm together…"
          required
        />
      </label>

      <div className="contact-actions">
        <button className="button button-primary" type="submit">
          {ready ? (
            <>
              Email Draft Prepared <Check size={16} />
            </>
          ) : (
            <>
              Send via Email App <ArrowUpRight size={16} />
            </>
          )}
        </button>

        <button
          className="button button-secondary"
          type="button"
          onClick={handleCopyDetails}
          title="Copy formatted email to clipboard to send via Gmail / webmail"
        >
          {copied ? (
            <>
              Copied to Clipboard! <Check size={16} />
            </>
          ) : (
            <>
              Copy Draft Message <Copy size={15} />
            </>
          )}
        </button>
      </div>

      <div className="contact-meta-strip">
        <span className="reply-guarantee">
          <Clock size={13} /> Global turnaround: <strong>&lt; 12 hours</strong>
        </span>
        <span className="confidentiality-note">
          🔒 Mutual NDA & IP confidentiality guaranteed
        </span>
      </div>
    </form>
  );
}
