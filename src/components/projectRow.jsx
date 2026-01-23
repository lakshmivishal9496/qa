import { FaTerminal, FaCodeBranch, FaSearchPlus } from "react-icons/fa";

const ProjectRow = ({ project }) => {
  return (
    <div className="project-trace-row">
      <div className="trace-id">{project.id}</div>
      
      <div className="trace-main">
        <div className="trace-header">
          <span className="trace-category">[{project.category}]</span>
          <h3>{project.title}</h3>
          <span className="trace-org">@ {project.organization}</span>
        </div>
        
        <p className="trace-desc">{project.description}</p>
        
        <div className="trace-footer">
          <div className="trace-tags">
            {project.techStack.map(tag => (
              <span key={tag} className="trace-tag">#{tag}</span>
            ))}
          </div>
          <div className="trace-metrics">
            <FaCodeBranch /> {project.metrics}
          </div>
        </div>
      </div>

      <div className="trace-action">
        <div className="scan-line"></div>
        {/* Space for your project screenshot */}
        <div className="project-preview-box">
           <img src={`/assets/${project.id.toLowerCase()}.jpg`} alt="Visual Coming Soon" />
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;