import { education, experience } from "../data/portfolio";
import { ExperienceCard } from "./ExperienceCard";

const years = (period) => (period.match(/\d{4}/g) ?? []).map(Number);

// Car 2: roles and education on one dated line, newest first. Only dated items appear; projects carry no dates.
const entries = [
  ...experience.map((role) => ({ ...role, kind: "Role" })),
  ...education.map((school) => ({
    kind: "Education",
    title: school.school,
    org: school.detail,
    detail: school.location,
    period: school.period,
  })),
].sort((a, b) => {
  const [ya, yb] = [years(a.period), years(b.period)];
  return Math.max(...yb) - Math.max(...ya) || Math.min(...yb) - Math.min(...ya);
});

export function Timeline() {
  return (
    <ol className="timeline">
      {entries.map((item) => (
        <ExperienceCard key={`${item.kind}-${item.title}`} item={item} />
      ))}
    </ol>
  );
}
