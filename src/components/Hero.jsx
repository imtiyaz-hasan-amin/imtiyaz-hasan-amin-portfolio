import { ArrowDown, BadgeInfo, Code2, Download, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Hello, I am</p>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p className="hero-copy">{profile.summary}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects <ArrowDown size={18} />
            </a>
            <a className="button button-secondary" href={profile.cv} download>
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="social-links" aria-label="Social links">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Code2 size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <BadgeInfo size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Profile photograph">
          <div className="portrait-ring">
            <img src="/profile.png" alt="Imtiyaz Hasan Amin" />
          </div>
          <div className="availability-card">
            <span className="status-dot" />
            Available for Junior ASP.NET Full-Stack Developer Opportunities
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
