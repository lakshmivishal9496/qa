import { FaArrowRight, FaSearch, FaCogs, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Pages.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge">Currently Interning @ Axis Communications</div>
          <h1>Lakshmi Vishal Hayagrivan</h1>
          <h2>
            Quality Assurance Engineer <span className="highlight"></span>
          </h2>
          <p>
            Bridging the gap between <strong>hardware reliability</strong> and <strong>software precision</strong>. 
            Focused on delivering high-quality Axis ecosystem solutions through rigorous testing. 
          </p>
          <div className="hero-btns">
            <Link to="/projects" className="btn-primary">
              View Projects <FaArrowRight />
            </Link>
            <Link to="/about" className="btn-secondary">
              My Experience
            </Link>
<a href="/assets/Resume.pdf" download="Lakshmi_Vishal_Resume.pdf" className="download-btn">
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
            <h3>Manual & Exploratory Tester</h3>
          </div>
          <p>Extensive experience testing Axis Communication Access Control devices, controllers, and readers.</p>
        </div>
        
        <div className="stat-card">
          <div className="stat-header">
            <FaCogs className="stat-icon" />
            <h3>Functional & Automation Tester</h3>
          </div>
          <p>Built automation frameworks using C# and Selenium. proficient in unit testing, integration testing, user acceptance testing (UAT), and black box testing. </p>
        </div>
        
        <div className="stat-card">
          <div className="stat-header">
            <FaUsers className="stat-icon" />
            <h3>Agile Team Player</h3>
          </div>
          <p>Collaborative experience within QA and development teams to improve product quality in Agile environments.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;