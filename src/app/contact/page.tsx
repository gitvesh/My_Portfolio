import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion-section";
import { ArrowUpRight, Clock, Github, Linkedin, Mail, ShieldCheck, Zap } from "@/components/icons";
import { HeroContactBadge } from "@/components/hero-contact-badge";

export const metadata: Metadata = {
  title: "Connect & Discuss",
  description:
    "Connect with Bhavesh Jadhav to discuss real-world problems, AI Engineering roles, and prototype collaborations.",
};

export default function ContactPage() {
  return (
    <section className="contact-page wrap">
      <Reveal>
        <div className="page-kicker">
          <span className="eyebrow">CONNECT · DISCUSS PROBLEMS · COLLABORATE</span>
          <span className="eyebrow">PUNE, INDIA · AVAILABLE REMOTELY WORLDWIDE</span>
        </div>
        <h1 className="page-title">
          Let’s discuss problems<br />
          <span>and build solutions.</span>
        </h1>
        <p className="page-lead">
          Whether you want to explore an AI engineering role on your team, discuss a bottleneck you’re facing, brainstorm an AI prototype, or just share ideas and network—I’d love to connect.
        </p>
      </Reveal>

      <div className="contact-layout">
        <Reveal>
          <div className="contact-details">
            <span className="eyebrow">DIRECT COMMUNICATION</span>
            <div className="contact-badge-container">
              <HeroContactBadge />
            </div>

            <div className="client-guarantees">
              <div className="guarantee-row">
                <Clock size={16} className="guarantee-icon" />
                <div>
                  <strong>Free 20-Min Problem Audit</strong>
                  <span>For business owners: I listen to your call bottlenecks and verify feasibility without sales pressure.</span>
                </div>
              </div>
              <div className="guarantee-row">
                <Zap size={16} className="guarantee-icon" />
                <div>
                  <strong>Fast Working Prototype (48h)</strong>
                  <span>Eager to build a testable demo (Voice Agent test number, LangGraph graph, or API) to validate real value.</span>
                </div>
              </div>
              <div className="guarantee-row">
                <ShieldCheck size={16} className="guarantee-icon" />
                <div>
                  <strong>Open to AI Roles & Direct Chat</strong>
                  <span>Actively interviewing for AI Engineering positions while collaborating with founders. I reply within 12 hours.</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a href="https://linkedin.com/in/bhavesh-jadhav-671048250" target="_blank" rel="noreferrer">
                <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href="https://github.com/gitvesh" target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub <ArrowUpRight size={14} />
              </a>
              <a href="https://codolio.com/profile/BhaveshJadhav1104" target="_blank" rel="noreferrer">
                <span className="codolio-icon">C</span> Codolio Profile <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="contact-note">
              <i />
              <p>
                My priority is to connect with people, understand their real challenges, build practical solutions, and learn continuously through hands-on engineering.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="form-shell">
            <div className="form-heading">
              <div>
                <span className="eyebrow">START A CONVERSATION</span>
                <p>Select what you’d like to discuss or collaborate on.</p>
              </div>
              <span className="form-pill">Open to Connect</span>
            </div>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
