import React from 'react';

function AboutUs() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="bg-light py-5">
        <div className="container px-4">
          <h1 className="text-3xl md:text-4xl fw-bold text-center text-dark">About Sinapis Investment Company</h1>
          <div className="w-25 h-1 bg-primary mx-auto my-4"></div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="py-5">
        <div className="container px-4">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img 
                src="https://images.unsplash.com/photo-1478144180611-e7f27bf060f9" 
                alt="Our Company" 
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-2xl fw-bold text-dark mb-3">Who We Are</h2>
              <p className="text-muted mb-3">
                Sinapis Investment Company Ltd is a local business based in Rubavu district, Western Province, that works across multiple sectors to serve our community better.
              </p>
              <p className="text-muted mb-3">
                Founded with a vision to make life easier for our customers and create job opportunities in our community, we have expanded our services to include retail shopping, food and catering, banking agency services, and IT solutions.
              </p>
              <p className="text-muted">
                Our commitment to quality, fair pricing, and customer satisfaction has helped us build strong relationships with our clients and establish ourselves as a trusted business in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-5 bg-light">
        <div className="container px-4">
          <h2 className="text-3xl fw-bold text-center text-dark mb-5">Our Mission & Values</h2>
          
          <div className="row">
            {/* Mission Card */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="w-16 h-16 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-4 mx-auto">
                    <i className="fas fa-bolt fs-4"></i>
                  </div>
                  <h3 className="card-title fs-5 fw-bold text-dark mb-3">Our Mission</h3>
                  <p className="card-text text-muted">
                    To provide diverse, high-quality services that enhance the daily lives of our customers while contributing to community development and economic growth.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="w-16 h-16 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-4 mx-auto">
                    <i className="fas fa-eye fs-4"></i>
                  </div>
                  <h3 className="card-title fs-5 fw-bold text-dark mb-3">Our Vision</h3>
                  <p className="card-text text-muted">
                    To become the leading multi-service provider in our region, recognized for excellence, innovation, and positive community impact.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Values Card */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="w-16 h-16 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-4 mx-auto">
                    <i className="fas fa-heart fs-4"></i>
                  </div>
                  <h3 className="card-title fs-5 fw-bold text-dark mb-3 text-center">Our Values</h3>
                  <ul className="text-muted ps-0">
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-check text-primary mt-1 me-2"></i>
                      <span><strong>Integrity</strong> - Honesty in all our dealings</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-check text-primary mt-1 me-2"></i>
                      <span><strong>Quality</strong> - Excellence in our products and services</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <i className="fas fa-check text-primary mt-1 me-2"></i>
                      <span><strong>Innovation</strong> - Constantly improving</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="fas fa-check text-primary mt-1 me-2"></i>
                      <span><strong>Community</strong> - Supporting local development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <div className="container px-4 text-center">
          <h2 className="text-3xl fw-bold text-dark mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-muted mb-4 mx-auto" style={{maxWidth: '800px'}}>
            Whether you need our shop products, catering services, banking assistance, or IT solutions, we're here to serve you with quality and dedication.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg px-5 py-2">
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;