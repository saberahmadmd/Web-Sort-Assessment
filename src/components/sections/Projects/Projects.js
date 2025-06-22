import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import projectsUIUX from '../../../assets/projectimgs/projectsUIUX.jpg';
import projectWebDev from '../../../assets/projectimgs/projectWebDev.jpg';
import projectDigital from '../../../assets/projectimgs/projectDigital.jpg';
import projectAppDev from '../../../assets/projectimgs/projectAppDev.jpg';

import './Projects.css';

const Project = () => {
  const projects = [
    { id: 1, name: 'UI/UX', imgUrl: projectsUIUX },
    { id: 2, name: 'App Development', imgUrl: projectAppDev },
    { id: 3, name: 'Web Development', imgUrl: projectWebDev },
    { id: 4, name: 'Digital Marketing', imgUrl: projectDigital },
    { id: 5, name: 'UI/UX', imgUrl: projectsUIUX },
    { id: 6, name: 'Web Development', imgUrl: projectWebDev },
  ];

  const projectCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div id="projects" className="project-container">
      <main className="project-main">
        <div className="section-header">
          <h2>Our Project</h2>
          <div className="section-divider"></div>
        </div>

        <div className="projects-carousel">
          <Slider {...projectCarouselSettings}>
            {projects.map((project) => (
              <div key={project.id} className="project-slide">
                <div className="project-card">
                  <img src={project.imgUrl} alt={project.name} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
};

export default Project;