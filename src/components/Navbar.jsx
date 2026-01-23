import { NavLink } from 'react-router-dom';
import { FaBug, FaFlask, FaUserAstronaut, FaEnvelope } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <FaBug className="logo-icon" />
        <span>LVH<span>.QA</span></span>
      </div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaFlask /> Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaBug /> Projects
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaUserAstronaut /> Experience
        </NavLink>
          <NavLink to="/contributions" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaUserAstronaut /> Contributions
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaEnvelope /> Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar; // <--- THIS LINE IS THE FIX