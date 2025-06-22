import './SeeOurWork.css';
import websortHomewebdev from '../../../assets/aboutimgs/websortHomewebdev.png';
import homewestandout from '../../../assets/aboutimgs/homewestandout.png';
import serviceAppDev from '../../../assets/serviceimgs/serviceAppDev.png';
import serviceDigitalM from '../../../assets/serviceimgs/serviceDigitalM.png';
import serviceWebDev from '../../../assets/serviceimgs/serviceWebDev.png';

const SeeOurWork = () => {
  return (
    <div className="see-our-work">
      <div className="hero-section">
        <div className="hero-content">
          <h1>See Our Work in Web Design & Development</h1>
          <p>
            We specialize in building responsive, user-friendly websites tailored to client needs.
            Take a look at our recent projects to see how design and functionality come together.
          </p>
          <button>Explore more</button>
        </div>
        <div className="img-container">
          <img src={websortHomewebdev} alt="laptop" />
        </div>
      </div>

      <div className="standout-section">
        <div className="standout-content">
          <div>
            <h2>Why We Stand Out</h2>
            <p>
              At Websort, we don’t just build digital products — we build careers.
              By joining our team, you become part of a creative and collaborative
              environment that values innovation, continuous learning, and personal growth.
            </p>
          </div>
          <div className="img-container">
            <img src={homewestandout} alt="bulb" />
          </div>
        </div>
      </div>

      <div className="featured-project">
        <div className="project-content">
          <div className="project-info">
            <h3>One of our proudest achievements.</h3>
            <p>
              A standout from our portfolio, this project exemplifies the quality, creativity,
              and performance we bring to every solution. It's a true reflection of our commitment to excellence.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <img src={serviceWebDev} alt="web-development" />
              <h3>Web Development</h3>
              <button>Explore more</button>
            </div>
            <div className="service-card">
              <img src={serviceAppDev} alt="app-development" />
              <h3>App Development</h3>
              <button>Explore more</button>
            </div>
            <div className="service-card">
              <img src={serviceDigitalM} alt="digital-marketing" />
              <h3>Digital Marketing</h3>
              <button>Explore more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeOurWork;