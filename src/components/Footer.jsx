import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

function Footer({ name, email, github }) {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-inner">
        <div>
          <h3 className="footer-title">{name}</h3>
          <p className="footer-tagline">
            Building responsive, component-driven web applications with React and Vite.
          </p>
        </div>

        <div className="footer-links">
          <a href={`mailto:${email}`}>{email}</a>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub Profile
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {CURRENT_YEAR} {name}. Personal Profile Portfolio.</span>
      </div>
    </footer>
  );
}

export default Footer;
