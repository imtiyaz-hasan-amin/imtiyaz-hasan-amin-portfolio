import { BadgeInfo, Code2, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolioData";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let us build something useful"
          description="I am interested in junior software developer, ASP.NET, and full-stack opportunities."
        />

        <div className="contact-panel">
          <div>
            <h3>Contact information</h3>
            <p>
              The fastest way to reach me is by email. You can also connect
              through LinkedIn or review my work on GitHub.
            </p>
          </div>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={20} />
              <span>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
              <Phone size={20} />
              <span>{profile.phone}</span>
            </a>
            <div>
              <MapPin size={20} />
              <span>{profile.location}</span>
            </div>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <BadgeInfo size={20} />
              <span>LinkedIn</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Code2 size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
