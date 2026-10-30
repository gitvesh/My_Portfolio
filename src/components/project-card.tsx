import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ArrowUpRight } from "./icons";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className={`project-card card-index-${index % 3}`}>
      <ProjectVisual kind={project.visual}/>
      <div className="project-card-info"><div className="project-card-meta"><span>{project.category}</span><span className={`status status-${project.status.toLowerCase().replace(" ", "-")}`}><i/>{project.status}</span></div><h3>{project.title}<ArrowUpRight size={17}/></h3><p>{project.summary}</p><div className="tag-row">{project.stack.slice(0, 4).map(tag=><span key={tag}>{tag}</span>)}</div></div>
    </Link>
  );
}
