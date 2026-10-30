import { Activity, Bot, Mic, PhoneCall, ShieldCheck, Zap } from "./icons";

const highlights = [
  { icon: Mic, label: "Sub-800ms Real-Time Voice Agents" },
  { icon: Bot, label: "Stateful LangGraph Workflows" },
  { icon: ShieldCheck, label: "Zero-Hallucination Human Fallback" },
  { icon: PhoneCall, label: "Free 20-Min Problem Audit for Businesses" },
  { icon: Zap, label: "Verifiable Repos & Live Demos" },
];

export function TrustBar() {
  return (
    <div className="trust-bar-shell" aria-label="Core client value metrics">
      <div className="wrap trust-bar-inner">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="trust-item">
              <Icon size={15} className="trust-icon" />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
