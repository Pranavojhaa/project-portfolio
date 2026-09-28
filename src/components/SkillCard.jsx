// One toolkit group, listed as plain text so keywords are easy to scan and copy.
export function SkillGroup({ skill }) {
  return (
    <div className="border-t border-rule pt-4">
      <dt className="type-heading text-[1.0625rem]">{skill.title}</dt>
      <dd className="mt-1.5 text-muted">{skill.items.join(", ")}</dd>
    </div>
  );
}
