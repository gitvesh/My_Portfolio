"use client";

import { useState } from "react";
import { categories, projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";

export function ProjectList() {
  const [selected, setSelected] = useState<string>("All");
  const filtered = selected === "All" ? projects : projects.filter(project => project.category === selected);
  return <><div className="filter-row" aria-label="Filter projects by category">{categories.map(category=><button key={category} className={selected === category ? "filter-active" : ""} type="button" onClick={() => setSelected(category)} aria-pressed={selected === category}>{category}<span>{category === "All" ? projects.length : projects.filter(project=>project.category === category).length}</span></button>)}</div><div className="project-grid">{filtered.map((project, index)=><ProjectCard key={project.slug} project={project} index={index}/>)}</div><p className="project-count" aria-live="polite">Showing {filtered.length} {filtered.length === 1 ? "project" : "projects"}</p></>;
}
