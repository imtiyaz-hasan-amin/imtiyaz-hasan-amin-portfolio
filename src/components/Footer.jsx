import { profile } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;
