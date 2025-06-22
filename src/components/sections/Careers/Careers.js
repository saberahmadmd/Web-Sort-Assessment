import SeparateContactForm from '../SeparateContactForm/SeparateContactForm'

import career1 from '../../../assets/careerimgs/career1.png'
import serviceAppDev from '../../../assets/serviceimgs/serviceAppDev.png';
import serviceDigitalM from '../../../assets/serviceimgs/serviceDigitalM.png';
import serviceWebDev from '../../../assets/serviceimgs/serviceWebDev.png';
import servicesUIUX from '../../../assets/serviceimgs/servicesUIUX.png';

import './Careers.css';

const Careers = () => {
  const categories = [
    { id: 1, name: 'Marketing', imgUrl: serviceDigitalM },
    { id: 2, name: 'App Development', imgUrl: serviceAppDev },
    { id: 3, name: 'Web Development', imgUrl: serviceWebDev },
    { id: 4, name: 'UI UX', imgUrl: servicesUIUX },
  ];

  return (
    <div id='careers' className="careers-container">
      <div className="careers-content">
        <div className="careers-left">
          <div>
            <div className="quote-section">
              <h2 className="quote">
                Talent wins games, but teamwork and intelligence win championships.
              </h2>
              <div className="quote-divider"></div>
            </div>

            <div className="description-section">
              <p>
                At Websort, we bring digital ideas to life through expert web and app development,
                digital marketing, and UI/UX design. Based in Bangalore, we build responsive websites
                and mobile apps, enhance online visibility with SEO, PPC, and social media, and design
                user-friendly interfaces. Choose Websort for innovative, tailored digital solutions.
              </p>
            </div>
          </div>
          <img src={career1} alt='careers' />
        </div>

        <div className="careers-right">
          <div className="career-section">
            <h3 className="career-heading">CAREER</h3>
            <h2 className="opportunity-heading">Internship Opportunities at Websort</h2>

            <div className="categories-grid">
              {categories.map(category => (
                <div key={category.id} className="category-card">
                  <img src={category.imgUrl} alt={category.name} />
                  <span className="category-name">{category.name}</span>
                </div>
              ))}
            </div>

            <button className="explore-btn">Explore Opportunities</button>
          </div>
        </div>
      </div>
      <SeparateContactForm />
    </div>
  );
};

export default Careers;