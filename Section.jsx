export default function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`border-t border-line py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
