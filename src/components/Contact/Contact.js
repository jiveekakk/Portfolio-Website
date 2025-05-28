import React from 'react';
import './Contact.css';

const Contact = ({ theme }) => {
  return (
    <section id="contact" className={`contact-section ${theme}-theme`}>
      <div className="contact-container">
        <h2 className="star-wars-font">Transmit Your Message</h2>
        <p className="section-subtitle">
          Use the Force (or this form) to get in touch
        </p>
        
        <div className="contact-content">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="e.g., Luke Skywalker" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="e.g., luke@rebelalliance.com" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="May the Force be with you..." 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`submit-btn ${theme}-btn`}
            >
              Send Transmission
            </button>
          </form>
          
          <div className="contact-info">
            <h3>Direct Hololink Channels</h3>
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/jiveeka-kuwar-kanaye-4560b2267/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`social-link ${theme}-social`}
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a 
                href="https://github.com/jiveekakk" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`social-link ${theme}-social`}
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a 
                href="mailto:jiveekakk@gmail.com" 
                className={`social-link ${theme}-social`}
              >
                <i className="fas fa-envelope"></i> Email
              </a>
            </div>
            
            <div className="resume-download">
              <h3>Download My Jedi Archives</h3>
              <a 
                href="/CV/Jiveekakk-CV.pdf" 
                download="Jiveekakk-CV.pdf"
                target="_blank"
                className={`resume-btn ${theme}-btn`}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;