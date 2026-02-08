import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contect() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
    const serviceID = 'service_e9z5978';
    const templateID = 'template_d8y3yza';
    const publicKey = 'Fw-dkdAjrbgVJetRU';

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset(); // Reset form after successful submission
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
  };

  return (
    <>
      <div>
        {/* ================= CONTACT ================= */}
        <section className="contact-section">
          <div className="contact-container">
            {/* LEFT */}
            <div className="contact-form">
              <h2>Get in Touch</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-row">
                  <input type="text" name="name" placeholder="Your Name" required />
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <input type="text" name="subject" placeholder="Subject" />
                <textarea name="message" placeholder="Message" defaultValue={""} />
                <button type="submit">Send Message</button>
              </form>
            </div>
            {/* RIGHT */}
            <div className="contact-info">
              <h3>Head Office Address</h3>
              <p><strong>Address:</strong> B-145, B-Block, Phase-II, Gautam Budha Nagar, Noida, UP-201301</p>
              <p><strong>Mobile:</strong> +91-80944 44560, 82879 64015</p>
              <p><strong>Email:</strong> info@semiconic.com</p>
              <h3>Mumbai Office</h3>
              <p><strong>Contact Person:</strong> Tejas Gojaria</p>
              <p><strong>Address:</strong> A-6, Devkivilla, Goraswadi, S.V Road, Malad (W), Mumbai-400064</p>
              <p><strong>Contact:</strong> +91-78279 56539</p>
              <p><strong>Email:</strong> tejas@semiconic.com</p>
              <h3>Warehouse Address</h3>
              <p><strong>Regd. Office:</strong> Plot 70/50-A, Najafgarh Road, Industrial Area, Rama Road, New Delhi-110015</p>
              <p><strong>Tel:</strong> 011-46061422</p>
              <div className="social">
                <span>Get Social</span>
                <a href="#">f</a>
                <a href="#">t</a>
                <a href="#">g+</a>
              </div>
            </div>
          </div>
        </section>
        {/* ================= MAP ================= */}
        <section className="location-section">
          <div className="location-container">
            {/* LEFT CONTENT */}
            <div className="location-content">
              <h2>Visit Our Head Office</h2>
              <p>
                Semiconic Devices Pvt. Ltd. is strategically located in the industrial
                hub of Noida, ensuring easy accessibility for our partners, vendors,
                and clients across India.
              </p>
              <ul>
                <li>✔ Easily accessible from Delhi &amp; NCR</li>
                <li>✔ Located in Industrial Phase-II, Noida</li>
                <li>✔ Close to major highways &amp; metro routes</li>
                <li>✔ Client &amp; vendor friendly location</li>
              </ul>
              <a href="https://maps.google.com/?q=Semiconic+Devices+Pvt+Ltd+Noida" target="_blank" className="direction-btn">
                Get Directions →
              </a>
            </div>
            {/* RIGHT MAP */}
            <div className="location-map">
              <iframe src="https://www.google.com/maps?q=Semiconic%20Devices%20Pvt%20Ltd%20Noida&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </section>


      </div>














    </>
  )
}

export default Contect