// Imporing fontawesome icons
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Imporing necessary files
import React from "react";
import "./Footer.css";

// Main Footer Component
const Footer = () => {
  const youtubeIcon = <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>;
  const twitterIcon = <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>;
  const instagramIcon = <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>;

  return (
    <div className="footer">
      <div className="quick-links">
        <section>
          <p>
            <span className="hl-text">Mindful</span> Consultancy
          </p>
          <div className="social-links">
            <p>Get in touch</p>
            <ul>
              <li>
                <a href="/">{youtubeIcon}</a>
              </li>
              <li>
                <a href="/">{twitterIcon}</a>
              </li>
              <li>
                <a href="/">{instagramIcon}</a>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <ul>
            <h4 className="hl-text">Advantages</h4>
            <li>Professional Online Counseling</li>
            <li>Anonymous and Secure</li>
            <li>Experienced Psychologist</li>
            <li>
              Zero Waiting Time <span className="hl-text">Start Now!</span>
            </li>
          </ul>
          <ul>
            <h4 className="hl-text">Informations</h4>
            <li>Our Missions</li>
            <li>Apply as a psychologist</li>
            <li>Service to business</li>
          </ul>
          <ul>
            <h4 className="hl-text">Psychology Companion</h4>
            <li>Get help</li>
            <li>Psychological Self Test</li>
            <li>Online Psychology Magazine</li>
          </ul>
        </section>
      </div>
      <div className="terms-area">
        <section>
          <small>copyright &copy; 2021 Mindful Consultancy LLC</small>
        </section>
        <section className="terms-condition">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Support</span>
        </section>
      </div>
    </div>
  );
};

export default Footer;
