export function Section({ id, title, intro, children, className = "" }) {
  const headingId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={headingId} className={`px-4 py-16 sm:px-6 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-page">
        <h2 id={headingId} className="type-section max-w-[24ch]">
          {title}
        </h2>
        {intro ? <p className="mt-4 max-w-[62ch] text-[1.125rem] text-muted">{intro}</p> : null}
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
