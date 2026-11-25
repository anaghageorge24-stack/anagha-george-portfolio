import Section from './Section';
import { education } from '@/data/content';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="grid gap-6 md:grid-cols-2">
        {education.map((e) => (
          <li key={e.award} className="rounded-lg border border-line bg-surface p-6">
            <h3 className="font-serif text-xl">{e.award}</h3>
            <p className="mt-2">{e.school}</p>
            <p className="mt-1 text-sm text-muted">{e.period}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
