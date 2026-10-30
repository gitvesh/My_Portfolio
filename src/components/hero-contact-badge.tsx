"use client";

import { useState } from "react";
import { Check, Copy, Mail, ArrowUpRight } from "./icons";

export function HeroContactBadge() {
  const [copied, setCopied] = useState(false);
  const email = "bhaveshjadhav9923@gmail.com";

  function copyEmail() {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <div className="hero-client-badge">
      <a href={`mailto:${email}`} className="client-badge-email" title="Click to send email">
        <Mail size={14} className="email-icon" />
        <span>{email}</span>
      </a>
      <button
        type="button"
        className="badge-copy-btn"
        onClick={copyEmail}
        aria-label="Copy email address"
        title="Copy email to clipboard"
      >
        {copied ? (
          <>
            <Check size={12} /> Copied!
          </>
        ) : (
          <>
            <Copy size={12} /> Copy
          </>
        )}
      </button>
    </div>
  );
}
