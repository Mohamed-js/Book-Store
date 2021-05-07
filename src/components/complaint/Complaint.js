import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/complaint.css';
import cold from '../../assets/imgs/cold.jpg';

const Complaint = () => {
  return (
    <>
      <h1 className="header default center">What's your complaint?</h1>
      <div className="grid">
        <div className="grid-item">
          <Link to="/symptoms/cold">
            <h3>Cold</h3>
            <img className="grid-img" src={cold} alt="cold"></img>
          </Link>
        </div>

        <div className="grid-item">
          <Link to="/">
            <h3>Empty</h3>
            <img className="grid-img" alt="EMPTY"></img>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Complaint;
