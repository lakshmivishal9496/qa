import ProjectCard from "../components/projectCard";
import { projectData } from '../data/projectData';
import '../styles/Pages.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <header className="page-header">
    
        <h1>Technical <span className="highlight">Projects</span></h1>
        <p>A high-precision log of automation frameworks, AI tools, and Web/Mobile App Projects.</p>
      </header>

      {/* Change grid to trace-list for the unique row look */}
      <div className="trace-list">
        {projectData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;