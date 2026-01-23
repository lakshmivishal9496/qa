
const ProjectCard = ({ project, index }) => {
  const reverse = index % 2 !== 0;

  return (
    <div className={`portfolio-row ${reverse ? "row-reverse" : ""}`}>
      
      {/* IMAGE */}
      <div className="portfolio-image">
        <img
          src={project.image}
          alt={project.title}
          className="main-img"
        />
      </div>

      {/* TEXT */}
      <div className="portfolio-text">
        <span className="org-label">@ {project.company}</span>
        <h2 className="portfolio-title">{project.title}</h2>
        <p className="project-desc-clean">
          {project.description}
        </p>

        <div className="tag-group">
          {project.tags.map(tag => (
            <span key={tag} className="yellow-outline-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
