import React from 'react';
import { FaFileAlt, FaMicrochip, FaFigma, FaSearch, FaDatabase, FaNetworkWired, FaBookOpen, FaLightbulb } from 'react-icons/fa';
import '../styles/Contributions.css';

const Contributions = () => {
  const thesisWork = [
    {
      title: "Advanced Log Analysis Thesis",
      subtitle: "Automated Firmware Error Detection",
      desc: "Detailed documentation of my 2025 Thesis work on Confluence, covering every step of the log analysis automation for ACS Secure Entry Component.",
      link: "https://confluence.se.axis.com/spaces/PT/pages/548997017/Thesis+2025+-+Advanced+Log+Analysis",
      icon: <FaMicrochip />,
      tag: "Process"
    },
    {
      title: "Figma UI/UX Prototype",
      subtitle: "Visualizing Automated Analysis",
      desc: "Designed the interactive prototype for the log analysis tool, ensuring the complex data remains user-friendly for engineers.",
      link: "https://www.figma.com/proto/N4lC2XzR0YTCr7pNfylcKF/Axis_Log_Analysis",
      icon: <FaFigma />,
      tag: "Design"
    },
    {
      title: "User Research (Miro)",
      subtitle: "Stakeholder Discovery",
      desc: "Initiative to conduct user research and mapping to ensure the tool solves real-world firmware debugging pain points.",
      link: "https://miro.com/app/board/uXjVIGR5dps=/",
      icon: <FaSearch />,
      tag: "Research"
    },
    {
      title: "Thesis Final Record",
      subtitle: "SharePoint Repository",
      desc: "The official dispersion form and final submission record for the thesis project at Axis.",
      link: "https://axis365.sharepoint.com/sites/Theses/Lists/Project%20list/DispForm.aspx?ID=435",
      icon: <FaNetworkWired />,
      tag: "Official"
    }
  ];

  const docsInitiative = [
    {
      title: "ACS Secure Entry Documentation",
      subtitle: "MSM Documentation",
      desc: "Understood every nook and corner of ACS Secure Entry to create comprehensive test cases and product logic guides.",
      link: "https://confluence.se.axis.com/pages/viewpage.action?pageId=712211015&spaceKey=PT&title=ACS%2BPro%2BSoftware%2BIntroduction",
      icon: <FaFileAlt />,
      tag: "Quality"
    },
    {
      title: "JMeter Performance Guide",
      subtitle: "Standardizing Functional Tests",
      desc: "Initiative to document and guide JMeter test cases, ensuring consistent performance benchmarking across teams.",
      link: "https://confluence.se.axis.com/pages/resumedraft.action?draftId=736855876",
      icon: <FaDatabase />,
      tag: "Automation"
    }
  ];

  return (
    <div className="contributions-page">
      <div className="header-content">
        <h1>Core <span className="highlight">Contributions</span></h1>
        <p>Merging Technical Research with Systematic Documentation</p>
      </div>

      {/* SECTION 1: THESIS & DESIGN */}
      <section className="contrib-section">
        <h2 className="section-label"><FaBookOpen /> Thesis & UX Research</h2>
        <div className="contributions-grid">
          {thesisWork.map((item, index) => (
            <div className="contribution-card" key={index}>
              <div className="card-tag">{item.tag}</div>
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.desc}</p>
              <a href={item.link} target="_blank" rel="noreferrer" className="view-btn">View Platform</a>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: DOCUMENTATION INITIATIVE */}
      <section className="contrib-section">
        <h2 className="section-label"><FaLightbulb /> Documentation Initiatives</h2>
        <div className="contributions-grid mini-grid">
          {docsInitiative.map((item, index) => (
            <div className="contribution-card doc-highlight" key={index}>
              <div className="card-tag">{item.tag}</div>
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.desc}</p>
              <a href={item.link} target="_blank" rel="noreferrer" className="view-btn">View Platform</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contributions;