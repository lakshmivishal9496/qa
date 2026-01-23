import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2026 Lakshmi Vishal Hayagrivan | Quality Assurance Engineer</p>
      <div className="social-icons">
        <a href="https://linkedin.com/in/lakshmi-vh" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/lakshmivishal9496/" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="mailto:lakshmivishal9496@gmail.com"><FaEnvelope /></a>
      </div>
    </footer>
  );
};

export default Footer;