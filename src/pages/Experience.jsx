import React, { useEffect, useRef } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // 3D Slider Logic from Online Tutorials [00:02:28]
    const slider = sliderRef.current;
    let rotateVal = 0;

    const autoRotate = () => {
      rotateVal += 0.5;
      if (slider) {
        slider.style.transform = `perspective(1000px) rotateY(${rotateVal}deg)`;
      }
      requestAnimationFrame(autoRotate);
    };
    autoRotate();
  }, []);

  const jobs = [
    { title: "Full Stack Intern", company: "Koenigsegg", location: "Ängelholm" },
    { title: "Mobile App Intern", company: "Assimilatus AB", location: "Lund" },
    { title: "Thesis Researcher", company: "Axis Communications", location: "Lund" },
    { title: "Automation Tester", company: "Legrand", location: "Löddeköpinge" },
    { title: "QA Intern", company: "Axis Communications", location: "Lund" }
  ];

  return (
    <div className="experience-container">
      <h2 className="pixel-header">Career <span className="highlight">Milestones</span></h2>
      
      <div className="slider-wrapper">
        <div className="slider-3d" ref={sliderRef}>
          {jobs.map((job, index) => (
            <div 
              className="card-3d" 
              key={index} 
              style={{ '--i': index + 1 }}
            >
              <div className="card-content">
                <span className="job-tag">{job.location}</span>
                <h3>{job.title}</h3>
                <h4>{job.company}</h4>
                {/* Pixelated Hover Effect target [00:00:10] */}
                <div className="pixel-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;