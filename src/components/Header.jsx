import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = ["Projects", "Skills", "Experience", "About", "Contact"];

function Header({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={closeMenu}>
          <div className="logo">
            <span className="logo-box">IHA</span>
          </div>
        </a>

        <nav
          className={`nav-links ${isOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
