import React from 'react';

function Banking() {
  return (
    <main className="flex-grow">
      <div className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold text-dark">Banking Services</h1>
          <div className="mx-auto my-3" style={{ width: '100px', height: '4px', backgroundColor: '#0d6efd' }}></div>
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://images.unsplash.com/photo-1545854027-ba3d36e136c8"
                alt="Banking Services"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="h4 fw-bold text-dark mb-3">Convenient Banking Close to Home</h2>
              <p className="text-muted">
                We work with trusted banks to help you do simple banking close to your home. You don't have to go far or wait in long lines at the bank.
              </p>
              <p className="text-muted">
                As an authorized banking agent, we provide essential financial services right in your neighborhood. Our goal is to make banking more accessible and convenient for everyone in our community.
              </p>
              <div className="bg-primary bg-opacity-10 border border-primary rounded p-4 mt-4">
                <h5 className="text-primary mb-3">Banking Hours</h5>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1">Monday - Friday: 8:00 AM - 6:00 PM</li>
                  <li className="mb-1">Saturday: 9:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Banking Services</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <i className="bi bi-arrow-left-right display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Money Transfers</h5>
                  <p className="card-text text-muted">
                    Send and receive money quickly and securely through our partner banks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <i className="bi bi-cash-stack display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Cash Transactions</h5>
                  <p className="card-text text-muted">
                    Deposit and withdraw cash from your bank accounts conveniently.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <i className="bi bi-receipt display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Bill Payments</h5>
                  <p className="card-text text-muted">
                    Pay your electricity, water, and other utility bills quickly and easily.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <i className="bi bi-person-plus display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Account Opening</h5>
                  <p className="card-text text-muted">
                    Open new bank accounts with BK, BPR, and EQUITY banks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-6">
              <h2 className="h4 fw-bold mb-4">Our Banking Partners</h2>
              <p className="text-muted">
                We are proud to work with leading financial institutions to bring banking services closer to you. Our partnerships allow us to offer a wide range of financial services to meet your needs.
              </p>
              <div className="mb-3 p-3 border rounded">
                <h5 className="fw-bold">Bank of Kigali (BK)</h5>
                <p className="text-muted">Authorized agent for deposits, withdrawals, and account opening.</p>
              </div>
              <div className="mb-3 p-3 border rounded">
                <h5 className="fw-bold">Banque Populaire du Rwanda (BPR)</h5>
                <p className="text-muted">Services include money transfers, bill payments, and new accounts.</p>
              </div>
              <div className="p-3 border rounded">
                <h5 className="fw-bold">EQUITY Bank</h5>
                <p className="text-muted">Full range of agent banking services available.</p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="Banking Services"
                className="img-fluid rounded shadow mb-4"
              />
              <div className="bg-primary bg-opacity-10 border border-primary p-4 rounded">
                <h5 className="text-primary mb-3">What You Need</h5>
                <ul className="list-unstyled text-muted">
                  <li className="mb-2"><i className="bi bi-check-circle-fill me-2 text-primary"></i>Valid photo identification (National ID)</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill me-2 text-primary"></i>Your bank account details (for existing accounts)</li>
                  <li><i className="bi bi-check-circle-fill me-2 text-primary"></i>Bill details for payment (if applicable)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Banking Made Easy</h2>
          <p className="fs-5 mb-4">Enjoy the convenience of banking services right in your neighborhood. Save time and avoid long queues.</p>
          <a href="contact.html" className="btn btn-warning fw-bold text-primary px-4 py-2">Visit Us Today</a>
        </div>
      </section>
    </main>
  );
}

export default Banking;
