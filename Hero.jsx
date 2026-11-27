import Chromatogram from './Chromatogram';
import HeroIntro from './HeroIntro';
import { profile, glance } from '@/data/content';

export default function Hero() {
  return (
    <section id="top" className="pb-16 pt-12 sm:pt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <HeroIntro />
        </div>

        <h1 className="mt-12 max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-6xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.positioning}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.cv}
            download
            className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            Download CV
          </a>
          <a
            href="#projects"
            className="rounded-md border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-accent"
          >
            See my thesis project
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-accent"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-14">
          <Chromatogram />
        </div>

        <dl className="mt-6 grid gap-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4" aria-label={glance.label}>
          {glance.items.map((item) => (
            <div key={item.label}>
              <dt className="font-serif text-2xl text-ink">{item.value}</dt>
              <dd className="mt-1 text-sm text-muted">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
