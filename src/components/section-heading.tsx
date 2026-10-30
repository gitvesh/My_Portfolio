export function SectionHeading({ eyebrow, title, description, number }: { eyebrow: string; title: string; description?: string; number?: string }) {
  return <div className="section-heading"><div><span className="eyebrow">{number && <span className="section-number">{number} / </span>}{eyebrow}</span><h2>{title}</h2></div>{description && <p>{description}</p>}</div>;
}
