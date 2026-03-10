import React, { useState, useEffect, useRef } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const sliderRef = useRef(null);
  const rotateRef = useRef(0);
  const animationRef = useRef(null);

  const jobs = [
    { 
      title: "Full Stack Intern", 
      company: "Koenigsegg", 
      location: "Ängelholm",
      duration: "Oct 2023 - Mar 2024",
      description: "Developed automotive software solutions and internal tools"
    },
    { 
      title: "Mobile App Intern", 
      company: "Assimilatus AB", 
      location: "Lund",
      duration: "Oct 2024 - Nov 2024", 
      description: "Built cross-platform mobile applications using React Native"
    },
    { 
      title: "Thesis Researcher", 
      company: "Axis Communications", 
      location: "Lund",
      duration: "Jan 2025 - Jun 2025",
      description: "Researched AI-powered video analytics and surveillance systems"
    },
    { 
      title: "Automation Tester", 
      company: "Legrand", 
      location: "Löddeköpinge",
      duration: "Aug 2025 - Oct 2025",
      description: "Automated testing frameworks for IoT smart home products"
    },
    { 
      title: "QA Intern", 
      company: "Axis Communications", 
      location: "Lund",
      duration: "Nov 2025 - Jan 2026",
      description: "Quality assurance for network camera firmware and software"
    }
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    
    const autoRotate = () => {
      if (!isPaused && selectedIndex === null) {
        rotateRef.current += 0.2; // Slower rotation
        if (slider) {
          slider.style.transform = `perspective(1200px) rotateY(${rotateRef.current}deg)`;
        }
      }
      animationRef.current = requestAnimationFrame(autoRotate);
    };
    
    autoRotate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, selectedIndex]);

  const handleCardClick = (index) => {
    const targetRotation = -index * 72; // Snap to clicked card
    rotateRef.current = targetRotation;
    setSelectedIndex(index);
    
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transform = `perspective(1200px) rotateY(${targetRotation}deg)`;
      slider.style.transition = 'transform 0.6s ease-in-out';
    }
  };

  const handleClose = () => {
    setSelectedIndex(null);
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transition = 'none';
    }
  };

  return (
    
  <>
    <div className="experience-container">
      
      <div className="header-section">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Hover to pause rotation and read more about each experience
        </p>
      </div>

      {/* Timeline View */}
      <div className="timeline-view">
        {jobs.map((job, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker"></div>

            <div className="timeline-content">
              <span className="timeline-date">{job.duration}</span>
              <h3>{job.title}</h3>
              <h4>{job.company} • {job.location}</h4>
              <p>{job.description}</p>
            </div>

          </div>
        ))}
      </div>

      {/* Carousel */}
      <div
        className="slider-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="slider-3d" ref={sliderRef}>

          {jobs.map((job, index) => (
            <div
              key={index}
              className={`card-3d ${selectedIndex === index ? "selected" : ""}`}
              style={{ "--i": index + 1 }}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-content">

                <span className="job-duration">{job.duration}</span>
                <h3>{job.title}</h3>
                <h4>{job.company}</h4>
                <span className="job-location">📍 {job.location}</span>

                {selectedIndex === index && (
                  <div className="expanded-content">

                    <p>{job.description}</p>

                    <button
                      className="close-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClose();
                      }}
                    >
                      ✕
                    </button>

                  </div>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Navigation dots */}
      <div className="nav-dots">
        {jobs.map((_, index) => (
          <button
            key={index}
            className={`dot ${selectedIndex === index ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
            aria-label={`View ${jobs[index].title}`}
          />
        ))}
      </div>

    </div>
  </>
);
};

export default Experience;
