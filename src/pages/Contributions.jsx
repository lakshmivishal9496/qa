import React from "react";
import {
  FaSeedling,
  FaRunning,
  FaBrain,
  FaRobot,
  FaFigma,
  FaUsers,
  FaPalette,
  FaProjectDiagram
} from "react-icons/fa";
import "../styles/Contributions.css";

const Contributions = () => {
 const featuredProjects = [
  {
    title: "Virtual Gardener",
    subtitle: "IoT Mobile UX Design",
    desc: "Designed an intuitive mobile experience that helps users monitor plant health through real-time sensor data, disease detection, and weather insights. Focused on clear data visualization and actionable user feedback.",
    link: "YOUR_VIRTUAL_GARDENER_FIGMA_LINK",
    icon: <FaSeedling />,
    tag: "Mobile UX",
    button: "View Figma"
  },
  {
    title: "Sports Union Platform",
    subtitle: "Web Application Design",
    desc: "Designed and developed a responsive event management platform for university students. Created user-centered interfaces for students and administrators using Figma before implementing the frontend in React.",
    link: "YOUR_SPORTS_UNION_FIGMA_LINK",
    icon: <FaRunning />,
    tag: "Web Design",
    button: "View Figma"
  },
  {
    title: "Soft Health",
    subtitle: "Mental Wellness Desktop App",
    desc: "Created a calming desktop interface that delivers personalized wellness recommendations based on MBTI personality assessments, balancing accessibility with an empathetic user experience.",
    link: "YOUR_SOFT_HEALTH_FIGMA_LINK",
    icon: <FaBrain />,
    tag: "Desktop UX",
    button: "View Figma"
  }
];

const uxResearch = [
  {
    title: "Log Analysis Dashboard",
    subtitle: "Master's Thesis",
    desc: "Designed an AI-assisted dashboard that simplifies complex firmware log analysis using multi-agent LLM workflows. Conducted UX research, designed user flows, wireframes, and interactive prototypes to improve interpretability.",
    link: "YOUR_LOG_ANALYSIS_CASE_STUDY_LINK",
    icon: <FaRobot />,
    tag: "AI + UX",
    button: "View Case Study"
  },
  {
    title: "Axis Camera Station",
    subtitle: "UX Case Study",
    desc: "A comprehensive UX case study exploring how QA engineers interpret access control logs. Included user interviews, personas, journey mapping, accessibility improvements, and AI-assisted visualization concepts.",
    link: "YOUR_AXIS_CAMERA_STATION_CASE_STUDY_LINK",
    icon: <FaUsers />,
    tag: "Case Study",
    button: "View Case Study"
  }
];

  return (
    <div className="contributions-page">
      <div className="header-content">
        <h1>
          UX/UI <span className="highlight">Portfolio</span>
        </h1>
        <p>
          Designing meaningful digital experiences through research,
          interaction design, and user-centered innovation.
        </p>
      </div>

      {/* Featured Projects */}
      <section className="contrib-section">
        <h2 className="section-label">
          <FaPalette /> Featured Design Projects
        </h2>

        <div className="contributions-grid">
          {featuredProjects.map((item, index) => (
            <div className="contribution-card" key={index}>
              <div className="card-tag">{item.tag}</div>
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.desc}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="view-btn"
              >
                View Figma
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* UX Research */}
      <section className="contrib-section">
        <h2 className="section-label">
          <FaProjectDiagram /> UX Research & Case Studies
        </h2>

        <div className="contributions-grid mini-grid">
          {uxResearch.map((item, index) => (
            <div className="contribution-card doc-highlight" key={index}>
              <div className="card-tag">{item.tag}</div>
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.desc}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="view-btn"
              >
                View Case Study
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contributions;