import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <section className="section muted-section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Professional training and internship"
          description="My current experience is focused on practical full-stack development and enterprise application workflows."
        />

        <div className="timeline">
          {experience.map((item) => (
            <article
              className="timeline-item"
              key={`${item.title}-${item.organization}`}
            >
              <div className="timeline-marker" />
              <div className="timeline-content">
                <p className="timeline-period">{item.period}</p>
                <h3>{item.title}</h3>
                <h4>{item.organization}</h4>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
