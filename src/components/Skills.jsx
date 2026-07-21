import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/portfolioData";

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I use"
          description="A practical stack for building modern, database-driven web applications."
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
