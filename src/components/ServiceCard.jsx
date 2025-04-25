import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ title, description, image, link }) {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm hover-shadow transition-all">
        <img 
          src={image} 
          alt={title} 
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={link} className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;