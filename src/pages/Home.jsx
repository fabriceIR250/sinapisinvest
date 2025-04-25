import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

function Home() {
  const services = [
    {
      title: "Our Shop",
      description: "Quality products for your home, office, and daily life at fair prices.",
      image: "https://img.freepik.com/free-vector/children-fixing-toy-car-together-white-background_1308-79508.jpg?semt=ais_hybrid&w=740",
      link: "/shop"
    },
    {
      title: "Food & Drinks",
      description: "Fresh and tasty meals, snacks, and beverages prepared daily.",
      image: "https://www.mediacityuk.co.uk/wp-content/uploads/2023/04/JKP_45-1920x960.jpg",
      link: "/food"
    },
    {
      title: "Bank Agent Services",
      description: "Convenient banking services close to your home.",
      image: "https://www.digipay.guru/static/3e17c17ed002071d7abb832fb4c3ba9b/880d6/agency-banking-social.jpg",
      link: "/banking"
    },
    {
      title: "IT Services",
      description: "Technical support, web development, and digital solutions.",
      image: "https://i0.wp.com/www.intelecis.com/wp-content/blogs.dir/743/files/2022/10/intelecis-it-services.jpg?fit=1000%2C480&ssl=1",
      link: "/it"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="position-relative py-5" style={{
        backgroundImage: "url('https://cdn.prod.website-files.com/60db7802e82b0cd4933d7185/6706c9e701a2c998e5c67d61_Ascent_Workshop_3_7.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px"
      }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundColor: "rgba(13, 110, 253, 0.7)"
        }}></div>

        <div className="container position-relative z-index-1">
          <div className="row align-items-center" style={{ minHeight: "450px" }}>
            <motion.div
              className="col-lg-6 mb-4 mb-lg-0 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-4 fw-bold">quality service is our priority!</h1>
              <p className="lead">Your one-stop solution for shopping, food, banking, and IT services.</p>
              <Link to="/contact" className="btn btn-light btn-lg">Contact Us</Link>
            </motion.div>
            <motion.div
              className="col-lg-6 d-none d-lg-block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/4508413/899975_86071.png"
                alt="Sinapis Services"
                className="img-fluid rounded shadow"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
        <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Services</h2>
            <p className="lead">Everything you need in one place</p>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <motion.section
        className="bg-light py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row align-items-center">
            <motion.div
              className="col-lg-6 mb-4 mb-lg-0"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://t3.ftcdn.net/jpg/04/53/06/64/360_F_453066418_kxK9BM2ntfW2kBUEupXX63h4PDoNmHWo.jpg"
                alt="Why Choose Sinapis"
                className="img-fluid rounded shadow"
              />
            </motion.div>
            <motion.div
              className="col-lg-6"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold mb-4">Why Work With Us?</h2>
              {[
                {
                  title: "Friendly and trusted service",
                  text: "We treat our customers with respect and provide reliable service."
                },
                {
                  title: "Fair prices",
                  text: "Get quality products and services at reasonable rates."
                },
                {
                  title: "Everything in one place",
                  text: "Save time by getting all your essential services under one roof."
                },
                {
                  title: "Helping our community grow",
                  text: "We create jobs and contribute to local development."
                }
              ].map((item, i) => (
                <div className="d-flex mb-3" key={i}>
                  <div className="me-3">
                    <i className="bi bi-check-circle-fill text-primary fs-4"></i>
                  </div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Home;
