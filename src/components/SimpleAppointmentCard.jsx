import React from 'react';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">
      <div className="card-icon">{icon}</div>
      <div className="card-info">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
