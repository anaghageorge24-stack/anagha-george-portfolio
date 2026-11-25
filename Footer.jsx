import { profile } from '@/data/content';

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-muted">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">&copy; {new Date().getFullYear()} {profile.name}</div>
    </footer>
  );
}
