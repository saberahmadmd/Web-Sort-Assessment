import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OurProjects.css';
import serviceAppDev from '../../../assets/serviceimgs/serviceAppDev.png';
import serviceDigitalM from '../../../assets/serviceimgs/serviceDigitalM.png';
import serviceWebDev from '../../../assets/serviceimgs/serviceWebDev.png';
import servicesUIUX from '../../../assets/serviceimgs/servicesUIUX.png';

const OurProjects = () => {
  const projects = [
    { id: 1, name: 'UI/UX', imgUrl: servicesUIUX },
    { id: 2, name: 'App Development', imgUrl: serviceAppDev },
    { id: 3, name: 'Web Development', imgUrl: serviceWebDev },
    { id: 4, name: 'Digital Marketing', imgUrl: serviceDigitalM }
  ];

  const aiIotProducts = [
    { id: 1, title: 'Smart Home Hub', description: 'Centralized control for all smart home devices with AI optimization' },
    { id: 2, title: 'Industrial IoT Sensors', description: 'Real-time monitoring for manufacturing environments with predictive analytics' },
    { id: 3, title: 'Healthcare AI Assistant', description: 'Patient monitoring system with AI-driven diagnostics' },
    { id: 4, title: 'Agricultural IoT System', description: 'Precision farming solution with soil sensors and crop analysis' }
  ];

  const projectCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  const aiCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

  return (
    <div className="our-projects">
      <div className="section-header">
        <h1>Our Project</h1>
        <div className="header-divider"></div>
      </div>

      <div className="projects-carousel">
        <Slider {...projectCarouselSettings}>
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.imgUrl} alt={project.name} />
            </div>
          ))}
        </Slider>
      </div>

      <button className="know-more">Know more</button>

      <div className="ai-iot-section">
        <div className="ai-content">
          <h2>Fueling the Future with Innovation</h2>
        </div>

        <div className="ai-carousel">
          <Slider {...aiCarouselSettings}>
            {aiIotProducts.map(product => (
              <div key={product.id} className="ai-product-card">
                <div className="device-mockup">
                  <div className="device-screen">
                    <div className="screen-content">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                    </div>
                  </div>
                  <div className="device-frame"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;