import { useState } from 'react';
import './Header.css';

function Header({ name, links }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#profile" className="brand">
          <span className="brand-badge">{name.charAt(0)}</span>
          <span className="brand-name">{name}</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav className={`header-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
