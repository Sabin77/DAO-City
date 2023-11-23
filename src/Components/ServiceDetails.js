// src/Components/ServiceDetails.js
import React from 'react';

const ServiceDetails = ({ title, level, imageUrl, body }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Level: {level}</p>
      <img src={imageUrl} alt={title} />
      <p>{body}</p>
    </div>
  );
};

export default ServiceDetails;
