import type { Metadata } from "next";
import { ProjectList } from "@/components/project-list";
import { Reveal } from "@/components/motion-section";

export const metadata: Metadata = {
  title: "Projects & Explorations",
  description:
    "Autonomous multi-agent workflows, RAG systems, and practical backend software built by Bhavesh Jadhav.",
};

export default function ProjectsPage() {
  return (
    <section className="page-shell wrap">
      <Reveal>
        <div className="page-kicker">
          <span className="eyebrow">HANDS-ON WORK</span>
          <span className="eyebrow">SELECTED PROJECTS · 2024 — 2026</span>
        </div>
        <h1 className="page-title">
          Learning by building<br />
          <span>real systems.</span>
        </h1>
        <p className="page-lead">
          A growing collection of projects exploring autonomous multi-agent workflows, vector retrieval engines, computer vision, and backend architectures. Each project represents hands-on problem solving, accompanied by source code and technical trade-offs.
        </p>
      </Reveal>
      <ProjectList />
    </section>
  );
}
