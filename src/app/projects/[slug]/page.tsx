import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/motion-section";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "@/components/icons";
import { projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const project = projects.find(item => item.slug === slug); return { title: project?.title ?? "Project", description: project?.summary }; }

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  return <article className="detail-page wrap"><Link href="/projects" className="back-link"><ArrowLeft size={15}/> All projects</Link><Reveal><div className="detail-heading"><div className="project-card-meta"><span>{project.category}</span><span className={`status status-${project.status.toLowerCase().replace(" ", "-")}`}><i/>{project.status}</span></div><h1>{project.title}</h1><p>{project.summary}</p><div className="detail-links">{project.repo && <a href={project.repo} target="_blank" rel="noreferrer"><Github size={16}/> Repository <ArrowUpRight size={14}/></a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={15}/> Live demo <ArrowUpRight size={14}/></a>}</div></div></Reveal><Reveal><div className="detail-art"><ProjectVisual kind={project.visual}/></div></Reveal><div className="detail-content"><div className="detail-main"><Reveal><div className="detail-block"><span className="eyebrow">THE PROBLEM</span><p>{project.problem}</p></div></Reveal><Reveal><div className="detail-block"><span className="eyebrow">THE APPROACH</span><p>{project.solution}</p></div></Reveal><Reveal><div className="detail-block"><span className="eyebrow">MY CONTRIBUTION</span><p>{project.contribution}</p></div></Reveal><Reveal><div className="detail-block"><span className="eyebrow">SYSTEM NOTES</span><p>{project.architecture}</p></div></Reveal>{project.results && <Reveal><div className="detail-block results-block"><span className="eyebrow">RESULT</span><p>{project.results}</p></div></Reveal>}<Reveal><div className="detail-block"><span className="eyebrow">LIMITATIONS & SCOPE</span><p>{project.limitations}</p></div></Reveal></div><aside className="detail-sidebar"><span className="eyebrow">TECHNOLOGY</span><div className="detail-tags">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div><div className="detail-sidebar-line"/><span className="eyebrow">STATUS</span><span className={`status status-${project.status.toLowerCase().replace(" ", "-")}`}><i/>{project.status}</span></aside></div><div className="detail-next"><Link href="/projects">← Back to the work</Link><Link href="/contact">Have a question? Let’s talk <ArrowUpRight size={15}/></Link></div></article>;
}
