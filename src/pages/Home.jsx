import { FaArrowRight, FaSearch, FaCogs, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Pages.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge"> Creative and Innovative Problem Solver</div>
          <h1>Lakshmi Vishal Hayagrivan</h1>
          <h2>
            UX Researcher & UI Designer  <span className="highlight"></span>
          </h2>
          <p>
            Bridging the gap between <strong>user needs</strong> and <strong>software solutions</strong>. 
            Focused on delivering high-quality user experiences and seamless interactions. 
          </p>
          <div className="hero-btns">
            <Link to="/projects" className="btn-primary">
              View Projects <FaArrowRight />
            </Link>
            <Link to="/about" className="btn-secondary">
              My Experience
            </Link>
<a href="/assets/Resume.pdf" download="Resume.pdf" className="download-btn">
  <span>Download CV</span>
  <div className="liquid"></div>
</a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="oval-background"></div>
          <img src="/assets/profile.jpg" alt="Lakshmi Vishal" className="profile-img" />
        </div>
      </section>

  <section className="stats-grid">
  <div className="stat-card">
    <div className="stat-header">
      <FaSearch className="stat-icon" />
      <h3>UX/UI & Product Design</h3>
    </div>
    <p>
      Designing intuitive and user-friendly digital experiences through
      user research, wireframing, prototyping, and interface design with
      a strong focus on usability and accessibility.
    </p>
  </div>

  <div className="stat-card">
    <div className="stat-header">
      <FaCogs className="stat-icon" />
      <h3>Software Development</h3>
    </div>
    <p>
      Experience with C#, web development, React, full-stack development,
      Git version control, agile methodologies, and quality-focused
      software engineering practices.
    </p>
  </div>

  <div className="stat-card">
    <div className="stat-header">
      <FaUsers className="stat-icon" />
      <h3>Collaboration & Innovation</h3>
    </div>
    <p>
      Passionate about working in international, cross-functional teams,
      taking initiative, embracing feedback, and contributing to
      innovative, high-quality digital products.
    </p>
  </div>
</section>
    </div>
  );
};

export default Home;