export function ProjectFilters({ filters, activeFilter, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
      {filters.map((filter) => {
        const active = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(filter)}
            className={`inline-flex min-h-11 items-center rounded-md border px-4 text-[0.9375rem] font-medium transition-colors ${
              active
                ? "border-signal bg-signalTint text-ink"
                : "border-rule text-muted hover:border-ruleStrong hover:text-ink"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
