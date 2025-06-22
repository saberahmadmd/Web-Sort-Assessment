import './Footer.css';
import footerlogo from '../../../assets/footerimgs/footerlogo.png';

import { FaInstagram } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { PiFacebookLogoDuotone } from "react-icons/pi";
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="brand-section">
              <img src={footerlogo} alt="WebSort Logo" className="brand-logo" />
            </div>
            <div className="services-section">
              <div>
                <div className="services-list">
                  <span>Web Development</span> |
                  <span> App Development</span> |
                  <span> UI/UX Design</span> |
                  <span> Digital Marketing</span>
                </div>
                <div className="contact-info">
                  <span><MdLocationOn /> Based in Bangalore</span>
                  <span><MdEmail /> contact@websort.com</span>
                  <span><MdPhone /> +91-XXXXXXXXXX</span>
                </div>
              </div>
              <div className="social-icons">
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                  <FcGoogle size={40} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <PiFacebookLogoDuotone size={40} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={40} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p className="copyright">
          © 2025 Websort. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;