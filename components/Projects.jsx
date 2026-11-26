import Section from './Section';
import { featured, coursework } from '@/data/content';

function Tags({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded border border-line px-2 py-0.5 text-xs text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Row({ label, children }) {
  return (
    <div className="grid gap-2 border-t border-line py-5 md:grid-cols-[10rem_1fr] md:gap-8">
      <dt className="text-sm font-medium text-muted">{label}</dt>
      <dd className="leading-relaxed">{children}</dd>
    </div>
  );
}

function List({ items }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-accent">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <article className="rounded-xl border border-line bg-surface p-6 sm:p-10">
        <p className="text-sm text-muted">{featured.type}</p>
        <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{featured.name}</h3>
        <dl className="mt-8">
          <Row label="Problem">{featured.problem}</Row>
          <Row label="Approach">{featured.approach}</Row>
          <Row label="My contribution"><List items={featured.contribution} /></Row>
          <Row label="Outcome"><List items={featured.outcome} /></Row>
          <Row label="Methods and tools"><Tags items={featured.tools} /></Row>
        </dl>
      </article>

      <h3 className="mt-16 font-serif text-2xl">Coursework projects</h3>
      <div className="mt-6 divide-y divide-line border-y border-line">
        {coursework.map((p) => (
          <details key={p.name} className="group py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 [&::-webkit-details-marker]:hidden">
              <span>
                <span className="block font-medium">{p.name}</span>
                <span className="mt-1 block text-sm text-muted">{p.summary}</span>
              </span>
              <span aria-hidden="true" className="text-2xl leading-none text-accent transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <div className="space-y-4 pb-5 pr-10">
              <List items={p.details} />
              <Tags items={p.tools} />
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
