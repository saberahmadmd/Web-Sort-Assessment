import { Link } from 'react-router-dom';
import OurProjects from '../OurProjects/OurProjects';
import SeeOurWork from '../SeeOurWork/SeeOurWork';
import Questions from '../Questions/Questions';
import './Aboutus.css';

const AboutUs = () => {
  return (
    <div id="aboutus" className="about-us-container">
      <section className="hero-content">
        <h1 className="heading">Digitizing Ideas with Clean Code & Modern Design</h1>
        <p>
          At Websort, we turn digital visions into reality with expert web and app development,
          UI/UX design, and digital marketing. Based in Bangalore, we craft responsive websites,
          innovative mobile apps, and drive results through SEO, PPC, and social media strategies.
        </p>
        <div className="cta-links">
          <Link to="/contact" className="cta-link">Contact Us</Link>
          <span className="divider">|</span>
          <Link to="/services" className="cta-link">Know More</Link>
        </div>
      </section>

      <section className="about-content">
        <div className="content-header">
          <h2>About Us</h2>
          <h3>Where Innovation <br /> Meets Execution</h3>
        </div>
        <div className="description">
          <p>
            Websort builds websites, apps, and digital marketing solutions to help you grow online.
            Based in Bangalore, we focus on smart design, strong tech, and real results. We specialize
            in web development, mobile app development, UI/UX design, and digital marketing—delivering
            responsive websites, high-performance Android/iOS apps, and visually engaging interfaces.
            Our digital marketing expertise spans SEO, PPC, social media marketing, and content creation,
            helping businesses grow and connect with their ideal audience.
          </p>
          <button>Know More</button>
        </div>
      </section>
      <OurProjects />
      <SeeOurWork />
      <Questions />
    </div>
  );
};

export default AboutUs;