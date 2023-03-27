import "./Footer.css";
import React from "react";
import { MdAlternateEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import { GrTwitter, GrLinkedin } from "react-icons/gr";
import { SiFiverr } from "react-icons/si";
import { BsCalendarEvent } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <MdLocationOn
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <div>
              <a href="https://goo.gl/maps/vumMUXoK5a8HkrWv8" target="_blank" rel="noreferrer">
                <p>Salem, Tamilnadu, India </p>
              </a>
            </div>
          </div>
          <div className="phone">
            <h4>
              <MdPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <a href="tel:+916385685916">Call me at +91 6385685916</a>
            </h4>
          </div>
          <div className="email">
            <h4>
              <MdAlternateEmail
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <a href="mailto:srinikethcr7@gmail.com">
                srinikethcr7@gmail.com
              </a>
            </h4>
          </div>
        </div>

        <div className="right">
          {/* <h4>About Me</h4> */}
          <div className="social">
            <a href="https://github.com/srini047" target="_blank" rel="noreferrer">
              <GoMarkGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
            <a href="http://twitter.com/srini047" target="_blank" rel="noreferrer">
              <GrTwitter
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
            <a href="http://linkedin.com/in/sriniketh-jayasendil/" target="_blank" rel="noreferrer">
              <GrLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.fiverr.com/share/Qjppzp" target="_blank" rel="noreferrer">
              <SiFiverr
                size={40}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
            <a href="https://cal.com/srini047/" target="_blank" rel="noreferrer">
              <BsCalendarEvent
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
