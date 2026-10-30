"use client";

import { useState } from "react";

const nodes = [
  { x: 42, y: 46, label: "INPUT", cls: "node-input" },
  { x: 136, y: 25, label: "PLAN", cls: "" },
  { x: 136, y: 68, label: "RETRIEVE", cls: "" },
  { x: 230, y: 25, label: "REASON", cls: "" },
  { x: 230, y: 68, label: "VERIFY", cls: "" },
  { x: 321, y: 46, label: "OUTPUT", cls: "node-output" },
];

export function NeuralVisual() {
  const [active, setActive] = useState(1);
  return (
    <div className="network-card" aria-label="Interactive illustration of an AI system workflow">
      <div className="network-top"><span className="eyebrow">SYSTEMS IN MOTION</span><span className="network-live"><i /> FLOW ACTIVE</span></div>
      <svg className="network-lines" viewBox="0 0 364 92" role="presentation">
        <defs><linearGradient id="flow" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#244156" /><stop offset=".5" stopColor="#56e5da" /><stop offset="1" stopColor="#244156" /></linearGradient></defs>
        <path d="M42 46 136 25M42 46 136 68M136 25 230 25M136 25 230 68M136 68 230 25M136 68 230 68M230 25 321 46M230 68 321 46" stroke="url(#flow)" strokeWidth="1" fill="none" />
        <path d="M42 46 136 25M136 25 230 25M230 25 321 46" stroke="#8af6ed" strokeWidth="1.4" fill="none" className="packet-path" />
      </svg>
      <div className="network-nodes">
        {nodes.map((node, index) => <button key={node.label} type="button" className={`network-node ${node.cls} ${active === index ? "is-active" : ""}`} style={{ left: `${node.x / 364 * 100}%`, top: `${node.y}%` }} onClick={() => setActive(index)} aria-label={`Inspect ${node.label} stage`} aria-pressed={active === index}><span className="node-pip" />{node.label}</button>)}
      </div>
      <div className="network-foot"><span>ONE SYSTEM. CLEAR HANDOFFS.</span><span className="network-detail">{nodes[active].label} STAGE</span></div>
    </div>
  );
}
