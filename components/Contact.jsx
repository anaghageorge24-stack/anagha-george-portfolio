import Section from './Section';
import { profile } from '@/data/content';

export default function Contact() {
  const rows = [
    { label: 'Email', href: `mailto:${profile.email}`, text: profile.email },
    { label: 'Phone', href: `tel:${profile.phone.replace(/\s/g, '')}`, text: profile.phone },
    { label: 'LinkedIn', href: profile.linkedin, text: 'linkedin.com/in/anagha-maryvalluvassery-george-12b83840a' },
  ];
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-prose text-lg leading-relaxed">
        I am looking for a QC Analyst, Laboratory Analyst or Quality Assurance role. {profile.availability}
      </p>
      <dl className="mt-8 divide-y divide-line border-y border-line">
        {rows.map((r) => (
          <div key={r.label} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr]">
            <dt className="text-sm text-muted">{r.label}</dt>
            <dd>
              <a href={r.href} className="break-all underline decoration-line underline-offset-4 transition-colors hover:decoration-accent">
                {r.text}
              </a>
            </dd>
          </div>
        ))}
        <div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr]">
          <dt className="text-sm text-muted">Location</dt>
          <dd>{profile.location}</dd>
        </div>
      </dl>
      <a
        href={profile.cv}
        download
        className="mt-8 inline-block rounded-md bg-accent px-5 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
      >
        Download CV
      </a>
    </Section>
  );
}
