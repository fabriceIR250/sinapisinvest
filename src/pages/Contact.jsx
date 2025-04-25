import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
  const contactInfo = {
    location: "Western Province, Rubavu district",
    phone: ["0788997534", "0785967217"],
    email: {
      general: "sinapisinvestment@gmail.com",
      office: "info@sinapisinvest.com"
    },
    social: [
      { platform: "Facebook", icon: "bi-facebook", link: "#" },
      { platform: "Twitter", icon: "bi-twitter", link: "#" },
      { platform: "Instagram", icon: "bi-instagram", link: "#" }
    ]
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ success: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (formData.name && formData.email && formData.subject && formData.message) {
      setStatus({ success: true, error: false });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus({ success: false, error: false }), 5000);
    } else {
      setStatus({ success: false, error: true });
    }
  };

  return (
    <main className="flex-grow-1">
      <div className="bg-light py-5">
        <div className="container px-4">
          <h1 className="display-4 fw-bold text-center text-dark">Contact Us</h1>
          <div className="w-25 mx-auto my-4" style={{ height: '4px', backgroundColor: '#2563eb' }}></div>
        </div>
      </div>

      <section className="py-5">
        <div className="container px-4">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
              <h2 className="h3 fw-bold text-dark mb-4">Get In Touch</h2>
              <p className="text-muted mb-5">
                We'd love to hear from you! Whether you have a question about our services, need a quote, or want to provide feedback, our team is ready to assist you.
              </p>

              <div className="mb-5">
                <div className="d-flex align-items-start mb-4">
                  <div className="flex-shrink-0 d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-circle me-3" style={{ width: '48px', height: '48px' }}>
                    <i className="bi bi-geo-alt fs-4"></i>
                  </div>
                  <div>
                    <h3 className="h5 fw-semibold text-dark">Our Location</h3>
                    <p className="text-muted mb-0">{contactInfo.location}</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div className="flex-shrink-0 d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-circle me-3" style={{ width: '48px', height: '48px' }}>
                    <i className="bi bi-telephone fs-4"></i>
                  </div>
                  <div>
                    <h3 className="h5 fw-semibold text-dark">Phone Numbers</h3>
                    <p className="text-muted mb-0">
                      {contactInfo.phone.map((number, index) => (
                        <span key={index}>
                          <a href={`tel:${number}`} className="text-decoration-none text-muted">{number}</a>
                          {index < contactInfo.phone.length - 1 ? ' / ' : ''}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div className="flex-shrink-0 d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-circle me-3" style={{ width: '48px', height: '48px' }}>
                    <i className="bi bi-envelope fs-4"></i>
                  </div>
                  <div>
                    <h3 className="h5 fw-semibold text-dark">Email Addresses</h3>
                    <p className="text-muted mb-0">
                      <a href={`mailto:${contactInfo.email.general}`} className="text-decoration-none text-muted">{contactInfo.email.general}</a>
                      <br />
                      <a href={`mailto:${contactInfo.email.office}`} className="text-decoration-none text-muted">{contactInfo.email.office}</a>
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0 d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-circle me-3" style={{ width: '48px', height: '48px' }}>
                    <i className="bi bi-clock fs-4"></i>
                  </div>
                  <div>
                    <h3 className="h5 fw-semibold text-dark">Business Hours</h3>
                    <p className="text-muted mb-0">
                      Monday - Friday: 8:00 AM - 7:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: 10:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="h5 fw-semibold text-dark mb-4">Follow Us</h3>
                <div className="d-flex gap-3">
                  {contactInfo.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle hover-bg-primary-dark transition"
                      style={{ width: '40px', height: '40px' }}
                    >
                      <i className={`bi ${social.icon} fs-5`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card shadow-sm">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold text-dark mb-4">Send Us a Message</h2>

                  {status.success && (
                    <div className="alert alert-success" role="alert">
                      Your message has been sent successfully. We'll get back to you soon!
                    </div>
                  )}
                  {status.error && (
                    <div className="alert alert-danger" role="alert">
                      There was an error sending your message. Please fill all required fields.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label fw-medium">Full Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-medium">Email Address *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3 mt-3">
                      <label htmlFor="phone" className="form-label fw-medium">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label fw-medium">Subject *</label>
                      <select
                        className="form-select"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Shop Inquiry">Shop Inquiry</option>
                        <option value="Food & Catering">Food & Catering</option>
                        <option value="Banking Services">Banking Services</option>
                        <option value="IT Services">IT Services</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-medium">Your Message *</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4">
          <h2 className="display-5 fw-bold text-center text-dark mb-5">Our Location</h2>
          <div className="card shadow-sm">
            <div className="card-body p-0">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63799.40794330325!2d29.32724755!3d-1.67680595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc56f0772a9051%3A0xebb214ef23d3b97a!2sRubavu%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Rubavu Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;