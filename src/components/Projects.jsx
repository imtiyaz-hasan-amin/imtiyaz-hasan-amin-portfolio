import { useMemo, useState } from "react";
import { Code2, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolioData";

function Projects() {
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected development work"
          description="Use the filters to explore projects by technology. Replace the sample links with your exact GitHub repository and live-demo URLs."
        />

        <div className="filter-bar" aria-label="Project filters">
          {categories.map((category) => (
            <button
              className={
                activeCategory === category
                  ? "filter-button active"
                  : "filter-button"
              }
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-topline">
                <span>{project.category}</span>
                <span className="project-number">
                  0{projects.indexOf(project) + 1}
                </span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list project-stack">
                {project.stack.map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Code2 size={17} /> GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink size={17} /> Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
