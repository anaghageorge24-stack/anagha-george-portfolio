import Section from './Section';
import { skills } from '@/data/content';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-3 py-5 md:grid-cols-[14rem_1fr] md:gap-8">
            <dt className="font-medium">{s.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li key={i} className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm">
                    {i}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
