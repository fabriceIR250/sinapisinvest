import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function IT() {
  const services = [
    {
      title: 'Computer & Phone Repair',
      points: [
        'Hardware troubleshooting and repair',
        'Software installation and updates',
        'Virus and malware removal',
        'Screen replacement and repairs',
        'Data recovery services',
      ],
      icon: 'bi-laptop',
    },
    {
      title: 'Web & Mobile Development',
      points: [
        'Custom website design and development',
        'E-commerce solutions',
        'Mobile app development',
        'Website maintenance and updates',
        'Search engine optimization (SEO)',
      ],
      icon: 'bi-globe',
    },
    {
      title: 'Graphics & Branding',
      points: [
        'Logo design and brand identity',
        'Marketing materials (flyers, brochures)',
        'Social media graphics',
        'Posters and banners',
        'Business cards and stationery',
      ],
      icon: 'bi-image',
    },
    {
      title: 'Networking & Internet',
      points: [
        'Wi-Fi setup and troubleshooting',
        'Network installation for businesses',
        'Internet connectivity solutions',
        'Network security setup',
        'Remote access solutions',
      ],
      icon: 'bi-diagram-3',
    },
    {
      title: 'IT Training',
      points: [
        'Basic computer skills',
        'Microsoft Office applications',
        'Email and internet usage',
        'Graphic design software',
        'Digital marketing skills',
      ],
      icon: 'bi-book',
    },
  ];

  return (
    <main className="flex-grow-1">
      <div className="bg-light py-5">
        <div className="container px-4">
          <h1 className="display-4 fw-bold text-center text-dark">IT Services</h1>
          <div className="w-25 mx-auto my-4" style={{ height: '4px', backgroundColor: '#2563eb' }}></div>
        </div>
      </div>

      <section className="py-5">
        <div className="container px-4">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780"
                alt="IT Services"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="h3 fw-bold text-dark mb-4">Technology Solutions for Everyone</h2>
              <p className="text-muted mb-4">
                We help people and businesses with computers and technology. If you need help with your phone, laptop, or
                want a website for your business—we are here.
              </p>
              <p className="text-muted mb-4">
                Our team of skilled IT professionals is dedicated to providing reliable and affordable technology solutions.
                Whether you're facing technical issues or looking to enhance your digital presence, we have the expertise to
                help.
              </p>
              <div className="p-4 rounded border border-primary bg-primary-subtle">
                <h3 className="h5 fw-semibold text-primary mb-3">IT Service Hours</h3>
                <ul className="list-unstyled text-dark">
                  <li className="mb-2">Monday - Friday: 8:00 AM - 6:00 PM</li>
                  <li className="mb-2">Saturday: 9:00 AM - 3:00 PM</li>
                  <li>Emergency Support: Available on request</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4">
          <h2 className="display-5 fw-bold text-center text-dark mb-5">Our IT Services</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {services.map((service, index) => (
              <div className="col" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div
                      className="d-flex justify-content-center align-items-center rounded-circle bg-primary text-white mb-4 mx-auto"
                      style={{ width: '64px', height: '64px' }}
                    >
                      <i className={`bi ${service.icon} fs-3`}></i>
                    </div>
                    <h3 className="card-title h5 fw-bold mb-3">{service.title}</h3>
                    <ul className="list-unstyled text-muted">
                      {service.points.map((point, i) => (
                        <li className="mb-2 d-flex align-items-start" key={i}>
                          <i className="bi bi-check-circle-fill text-primary me-2"></i>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="display-5 fw-bold mb-4">Need IT Support or Services?</h2>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: '48rem' }}>
            Whether you need tech assistance, a new website, or IT training, our team is ready to help. Contact us today to
            discuss your needs and get expert solutions.
          </p>
          <a
            href="/contact"
            className="btn btn-warning btn-lg text-primary fw-bold px-4 py-2 rounded-pill"
          >
            Get IT Support
          </a>
        </div>
      </section>
    </main>
  );
}

export default IT;