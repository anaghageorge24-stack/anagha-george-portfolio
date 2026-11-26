import ThemeToggle from './ThemeToggle';
import { profile } from '@/data/content';

const links = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Contact', '#contact'],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="font-serif text-lg">{profile.shortName}</a>
        <nav aria-label="Main" className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-muted md:flex">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-ink">{label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="text-sm text-muted hover:text-ink md:hidden">Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
