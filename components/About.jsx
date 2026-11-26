import Section from './Section';
import { about } from '@/data/content';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
        <div className="max-w-prose space-y-5 text-lg leading-relaxed">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <dl className="h-fit divide-y divide-line rounded-lg border border-line bg-surface">
          {about.facts.map((f) => (
            <div key={f.label} className="grid grid-cols-[7rem_1fr] gap-4 px-5 py-3 text-sm">
              <dt className="text-muted">{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
