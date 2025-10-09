import React from "react";
import './App.css';

const Artisan = () => (
  <div className="dashboard artisan-dashboard">
    <h2>Artisan Dashboard</h2>
    <div className="dashboard-section">
      <h3>Product Listings</h3>
      <button>Add New Product</button>
      <button>View My Products</button>
    </div>
    <div className="dashboard-section">
      <h3>Inventory Management</h3>
      <button>Update Stock</button>
      <button>View Inventory Status</button>
    </div>
    <div className="dashboard-section">
      <h3>Buyer Interaction</h3>
      <button>Messages</button>
      <button>Order Requests</button>
    </div>
  </div>
);

export default Artisan;
