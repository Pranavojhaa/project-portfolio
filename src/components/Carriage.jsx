// A story-lane carriage: a real page section styled as one car of the train, coupled to the next.
export function Carriage({ id, number, title, intro, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="carriage-wrap px-4 sm:px-6">
      <div className="carriage mx-auto max-w-page">
        <p className="carriage__plate">Car {number}</p>
        <h2 id={`${id}-title`} className="type-section max-w-[24ch]">
          {title}
        </h2>
        {intro ? <p className="mt-4 max-w-[62ch] text-[1.125rem] text-muted">{intro}</p> : null}
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}
