import Section from './Section';
import { experience } from '@/data/content';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12">
        {experience.map((e) => (
          <li key={e.role} className="grid gap-4 md:grid-cols-[13rem_1fr] md:gap-10">
            <div>
              <p className="text-sm font-medium">{e.period}</p>
              <p className="mt-1 text-sm text-muted">{e.group}</p>
            </div>
            <div>
              <h3 className="font-serif text-xl">{e.role}</h3>
              <p className="mt-1 text-muted">{e.org}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-accent">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
