import React, { useEffect } from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPalette, FaBriefcase } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  useEffect(() => {
    // Online Tutorials style typing effect logic (Standard JS)
    const textElement = document.querySelector('.typing-text');
    const phrases = [
      "I am QA Engineer.",
      "QA supporting high‑quality releases",
       "QA improving service release quality.",
      "Originally from India, now in Åstorp, Sweden.",
      "Available starting March 2026."
    ];
    
    let i = 0, j = 0;
    let currentPhrase = [];
    let isDeleting = false;

    function loop() {
      if (textElement) {
        textElement.innerHTML = currentPhrase.join('');
        if (i < phrases.length) {
          if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
          }
          if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop();
            j--;
          }
          if (j === phrases[i].length) isDeleting = true;
          if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) i = 0;
          }
        }
      }
      setTimeout(loop, isDeleting ? 40 : 120);
    }
    loop();
  }, []);

  return (
    <div className="contact-page">
      <section className="about-section">
        <div className="journey-track">
          {/* We use the CSS class 'moving-man' to handle the movement */}
          <div className="man moving-man"></div>
          <div className="country-label india">GRADUATE</div>
          <div className="country-label sweden">QA TESTARE</div>
        </div>

        <div className="about-content">
          <h1>Lakshmi <span className="highlight">Vishal</span></h1>
          <div className="typing-container">
            <span className="typing-text"></span>
            <span className="cursor">|</span>
          </div>
          <div className="bio-card">
            <FaPalette className="bio-icon" />
            <p>
              My passion is <strong>Art</strong>. My passion for art sharpened my eye for detail, balance, and usability, which naturally led me into QA.
I apply this creative mindset to ensure systems deliver both functional reliability and a seamless user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Let’s <span className="highlight">Connect</span></h2>
        <div className="contact-grid">
          <div className="info-panel">
            <h3>Curious to Connect and Learn More</h3>
            <div className="info-item"><FaMapMarkerAlt className="info-icon" /><span>Åstorp, Skåne</span></div>
            <div className="info-item"><FaBriefcase className="info-icon" /><span>Full-time · Hybrid · On-site</span></div>
            <div className="info-item"><FaEnvelope className="info-icon" /><a href="mailto:lakshmivishal9496@gmail.com">lakshmivishal9496@gmail.com</a></div>
            <div className="info-item"><FaLinkedin className="info-icon" /><a href="https://linkedin.com/in/lakshmi-vh" target="_blank" rel="noreferrer">linkedin.com/in/lakshmi-vh</a></div>
            <div className="info-item"><FaPhone className="info-icon" /><span>+46 76 314 52 56</span></div>
          </div>
          <div className="vision-panel">
            <h3>Vision</h3>
            <p>I don’t just test software—I protect the user’s experience.To grow into a QA professional who drives quality across the entire release lifecycle. </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;