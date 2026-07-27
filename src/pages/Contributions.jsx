import React from "react";
import {
  FaSeedling,
  FaRunning,
  FaBrain,
  FaRobot,
  FaUsers,
  FaPalette,
  FaProjectDiagram,
  FaGithub
} from "react-icons/fa";
import "../styles/Contributions.css";

const Contributions = () => {
 const featuredProjects = [
  {
    title: "Virtual Gardener",
    subtitle: "IoT Mobile UX Design (Year 3 Project at HKR)",
    desc: "Designed an intuitive mobile experience that helps users monitor plant health through real-time sensor data, disease detection, and weather insights. Focused on clear data visualization and actionable user feedback.",
    link: "https://www.figma.com/design/3I1Clqzpi4LdUOSiRA6IU3/Virtual-Gardener--Copy-?node-id=0-1&t=PUGfh29f2mDLjoQb-0",
    icon: <FaSeedling />,
    tag: "Mobile UX",
    button: "View Figma"
  },
  {
    title: "Sports Union Platform for Högskolan Kristianstad Students",
    subtitle: "Web Application Design & Development (Year 2 Project at HKR)",
    desc: "Designed and developed a responsive event management platform for university students. Created user-centered interfaces for students and administrators using Figma before implementing the frontend in React.",
    link: "https://www.figma.com/design/iAEBH2D7RQWcpzFFZfVuvT/HkIF?node-id=0-1&p=f&t=SAIaHfT1feCMK2ig-0",
    icon: <FaRunning />,
    tag: "Web Design",
    button: "View Figma"
  },
  {
    title: "Soft Health",
    subtitle: "Mental Wellness Desktop App (Year 1 Project at HKR)",
    desc: "Created a calming desktop interface that delivers personalized wellness recommendations based on MBTI personality assessments, balancing accessibility with an empathetic user experience.",
    link: "YOUR_SOFT_HEALTH_FIGMA_LINK",
    icon: <FaBrain />,
    tag: "Desktop UX",
    button: "View Figma"
  },
  {
    title: "Log Analysis Dashboard",
    subtitle: "Bachelor's Thesis Year 3 Project at HKR",
    desc: "Designed an AI-assisted dashboard that simplifies complex firmware log analysis using multi-agent LLM workflows. Conducted UX research, designed user flows, wireframes, and interactive prototypes to improve interpretability.",
    link: "https://www.figma.com/design/N4lC2XzR0YTCr7pNfylcKF/Axis_Log_Analysis?t=WbrfH2kO5qgspAY9-0",
    icon: <FaRobot />,
    tag: "AI + UI Figma Prototype",
    button: "View Design"
  }
];

const uxResearch = [
  
  {
    title: "Axis Camera Station",
    subtitle: "UX Case Study",
    desc: "A comprehensive UX case study exploring how QA engineers interpret access control logs. Included user interviews, personas, journey mapping, accessibility improvements, and AI-assisted visualization concepts.",
    link: "https://miro.com/app/board/uXjVIGR5dps=/",
    icon: <FaUsers />,
    tag: "Case Study",
    button: "View Case Study"
  },
   {
    title: "Travel Companion App",
    subtitle: "UX Case Study",
    desc: "A comprehensive UX case study exploring the design of a travel planning application.",
    link: "https://miro.com/app/board/uXjVI1qhpvI=/",
    icon: <FaUsers />,
    tag: "Case Study",
    button: "View Case Study"
  }
];  
const softwareProjects = [
  {
    title: "Fall Detection Android App",
    subtitle: "Masters in Computer Science - Year 3 Project (India)",
    desc: "Developed an Android application for detecting falls using mobile sensor data. The project focused on improving safety through real-time monitoring and automated fall detection techniques.",
    link: "https://github.com/Lakshmi-vishal/Fall-Detection---Android-App",
    icon: <FaGithub />,
    tag: "Android Development",
    button: "View GitHub"
  },
  {
    title: "Data Integrity Using Cryptography",
    subtitle: "Bachelor Thesis Project - Computer Science (India)",
    desc: "Developed a C# application implementing cryptographic techniques to ensure data integrity and secure information handling.",
    link: "https://github.com/Lakshmi-vishal/Data-Integrity-using-Cryptography",
    icon: <FaGithub />,
    tag: "C# + Cryptography",
    button: "View GitHub"
  },
  {
    title: "Lakshmi's LinkedIn Clone",
    subtitle: "React JS Hobby Project",
    desc: "Created a LinkedIn-inspired web application using React JS to practice frontend development, component-based architecture, and responsive UI design.",
    link: "https://github.com/Lakshmi-vishal/My-Linkedin-clone",
    icon: <FaGithub />,
    tag: "React JS",
    button: "View GitHub"
  },
  {
    title: "Nougat Nile Cycles",
    subtitle: "C# Hobby Project",
    desc: "Developed a C# based application as a hobby project to explore software development concepts and application design.",
    link: "https://github.com/Lakshmi-vishal/NougatNileCycles",
    icon: <FaGithub />,
    tag: "C# Application",
    button: "View GitHub"
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
      {/* Software Development Projects */}
<section className="contrib-section">
  <h2 className="section-label">
    <FaGithub /> Software Development Projects
  </h2>

  <div className="contributions-grid">
    {softwareProjects.map((item, index) => (
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
          {item.button}
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