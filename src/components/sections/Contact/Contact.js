import SeparateContactForm from '../SeparateContactForm/SeparateContactForm';
import map from '../../../assets/contactimgs/map.jpg';

import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have a question, idea, or project in mind?
          <br />
          We're here to help. Get in touch.
        </p>
      </header>

      <div className="contact-content">
        <div className="contact-info">
          <p>Need support or want to collaborate?</p>
          <p className="support-text">
            Fill out the form and our team will get back to you shortly.
          </p>
        </div>
        <div className="contact-form">
          <SeparateContactForm />
        </div>
      </div>

      <div className="contact-details">
        <h3>Address</h3>
        <div className="image-address">
          <img src={map} alt="Map" />
          <div className="address-text">
            <p>Based in Bangalore</p>
            <p>contact@vostort.com</p>
            <p>+91 XXXXXXXXXX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;