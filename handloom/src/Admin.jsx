import React from "react";
import './App.css';

const Admin = () => (
  <div className="dashboard admin-dashboard">
    <h2>Admin Dashboard</h2>
    <div className="dashboard-section">
      <h3>Platform Operations</h3>
      <p>Monitor system health, view analytics, and manage platform settings.</p>
    </div>
    <div className="dashboard-section">
      <h3>User Management</h3>
      <button>Manage User Roles</button>
      <button>View All Users</button>
    </div>
    <div className="dashboard-section">
      <h3>Content Accuracy</h3>
      <button>Review Listings</button>
      <button>Approve/Reject Products</button>
    </div>
  </div>
);

export default Admin;
