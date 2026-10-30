import type { Project } from "@/lib/projects";

export function ProjectVisual({ kind, compact = false }: { kind: Project["visual"]; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${kind} ${compact ? "is-compact" : ""}`} aria-hidden="true">
      <div className="visual-grid" />
      {kind === "graph" && <div className="graph-visual"><span className="graph-hub">AI</span><span className="graph-node g1">SEARCH</span><span className="graph-node g2">PLAN</span><span className="graph-node g3">SYNTHESIZE</span><span className="graph-node g4">REVIEW</span><svg viewBox="0 0 420 220"><path d="M210 108 75 50M210 108 345 46M210 108 340 172M210 108 76 168" /></svg></div>}
      {kind === "rag" && <div className="rag-visual"><div className="rag-docs"><span>TRANSCRIPT · 01</span><i /><i /><i /><span className="doc-block" /></div><div className="rag-arrow">→</div><div className="rag-vector"><span>VECTOR INDEX</span>{[0,1,2,3,4].map(i=><i key={i} />)}</div><div className="rag-answer"><span>ANSWER</span><b>Grounded response</b><i /><i /></div></div>}
      {kind === "donation" && <div className="donation-visual"><div className="donation-orbit o1"/><div className="donation-orbit o2"/><div className="donation-center">V</div><span className="chain-pill p1">POLYGON</span><span className="chain-pill p2">WALLET</span><span className="chain-pill p3">DONATION</span></div>}
      {kind === "vision" && <div className="vision-visual"><div className="road-lines"/><span className="detect-box db1"/><span className="detect-box db2"/><span className="detect-label">ROAD DAMAGE · YOLOv8m</span><span className="vision-tag">mAP@50&nbsp; 0.4536</span></div>}
      {kind === "voice" && <div className="voice-visual"><div className="voice-ring r1"/><div className="voice-ring r2"/><div className="voice-core">VOICE</div><div className="wave-bars">{Array.from({length:17},(_,i)=><i key={i} style={{height:`${12+(i*19)%48}px`}}/>)}</div><span className="voice-caption">LISTEN · UNDERSTAND · ROUTE</span></div>}
      {kind === "hostel" && <div className="hostel-visual"><div className="leave-card"><span>LEAVE REQUEST</span><b>Weekend leave</b><small>Pending review</small><div className="leave-lines"><i/><i/><i/></div><span className="leave-chip">IN REVIEW</span></div><div className="leave-check">✓</div></div>}
      {kind === "java" && <div className="java-visual"><div className="contact-card"><span className="contact-avatar">BJ</span><div><b>Contact record</b><small>Manage · Organize · Find</small></div><span className="contact-dots">···</span></div><div className="code-lines"><i/><i/><i/><i/></div></div>}
    </div>
  );
}
