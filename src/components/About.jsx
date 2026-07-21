import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education, profile } from "../data/portfolioData";

function About() {
  return (
    <section className="section muted-section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Building practical software with a strong learning mindset"
          description="My background combines formal university education with intensive software-development training and hands-on internship experience."
        />

        <div className="about-grid">
          <div className="about-card feature-card">
            <BriefcaseBusiness size={24} />
            <h3>Development Focus</h3>
            <p>
              Database-driven CRUD applications, layered ASP.NET architecture,
              REST API integration, responsive frontends, validation, debugging,
              and reusable components.
            </p>
          </div>

          <div className="about-card feature-card">
            <MapPin size={24} />
            <h3>Location</h3>
            <p>{profile.location}</p>
            <p>Available for junior full-stack and ASP.NET developer roles.</p>
          </div>

          <div className="about-card feature-card education-card">
            <GraduationCap size={24} />
            <h3>Education</h3>
            {education.map((item) => (
              <div className="education-item" key={item.degree}>
                <strong>{item.degree}</strong>
                <span>{item.institution}</span>
                <small>{item.result}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
