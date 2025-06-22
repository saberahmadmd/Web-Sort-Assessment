import projectsUIUX from '../../../assets/projectimgs/projectsUIUX.jpg';
import projectWebDev from '../../../assets/projectimgs/projectWebDev.jpg';
import projectDigital from '../../../assets/projectimgs/projectDigital.jpg';
import projectAppDev from '../../../assets/projectimgs/projectAppDev.jpg';

import './Services.css';

const Services = () => {
  return (
    <div id='services' className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <div className="header-divider"></div>
      </div>

      <div className='card c-1'>
        <img src={projectsUIUX} alt='UI/UX Design' />
        <div className='tit-des'>
          <h2>UI/UX Design</h2>
          <p>
            We design clean, intuitive, and engaging user interfaces
            that enhance the overall user experience. From wireframes
            to final designs, our focus is on usability, consistency,
            and creating visually appealing digital products that users love.
          </p>
        </div>
      </div>

      <div className='card c-2'>
        <img src={projectWebDev} alt='Web Development' />
        <div className='tit-des'>
          <h2>Web Development</h2>
          <p>
            Planned and executed a digital marketing strategy including SEO,
            social media marketing, and content creation. Improved website
            traffic and engagement through targeted campaigns and regular
            performance tracking.
          </p>
        </div>
      </div>

      <div className='card c-3'>
        <img src={projectAppDev} alt='App Development' />
        <div className='tit-des'>
          <h2>App Development</h2>
          <p>
            Developed a cross-platform mobile app using Flutter
            for Android and iOS. The app allows users to browse
            services, make bookings, and receive real-time updates.
            Designed with a clean UI and smooth navigation to ensure
            a seamless user experience.
          </p>
        </div>
      </div>

      <div className='card c-4'>
        <img src={projectDigital} alt='Digital Marketing' />
        <div className='tit-des'>
          <h2>Digital Marketing</h2>
          <p>
            Designed and developed a responsive, SEO-optimized website
            using React. The site includes a modern UI, fast loading
            speed, and full mobile compatibility. Key features include
            service pages, contact form, and an easy-to-manage content
            structure to support client updates and user engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;