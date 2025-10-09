import React from "react";
import './App.css';

const Buyer = () => (
  <div className="dashboard buyer-dashboard">
    <h2>Buyer Dashboard</h2>
    <div className="dashboard-section">
      <h3>Browse Products</h3>
      <button>View All Handloom Items</button>
      <button>Search Products</button>
    </div>
    <div className="dashboard-section">
      <h3>Orders</h3>
      <button>Track My Orders</button>
      <button>Order History</button>
    </div>
    <div className="dashboard-section">
      <h3>Feedback</h3>
      <button>Leave Feedback</button>
      <button>View My Feedback</button>
    </div>
  </div>
);

export default Buyer;
