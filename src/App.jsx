import React, { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import theme from "./theme";
import "./App.css";

// Core pages
import Cart from "./Cart";
import { roles } from "./roles";
import Admin from "./Admin";
import Artisan from "./Artisan";
import Buyer from "./Buyer";
import Login from "./Login";
import MarketingSpecialist from "./MarketingSpecialist";
import RoleLanding from "./RoleLanding";
import ProductsPage from "./ProductsPage";

// Admin pages
import ManageUserRoles from "./ADMIN_LISTS/ManageUserRoles";
import ViewAllUsers from "./ADMIN_LISTS/ViewAllUsers";
import ApproveRejectProducts from "./ADMIN_LISTS/ApproveRejectProducts";
import ViewAnalytics from "./ADMIN_LISTS/ViewAnalytics";
import ExportReports from "./ADMIN_LISTS/ExportReports";

// Artisan pages
import AddNewProduct from "./ARTISAN_LISTS/AddNewProduct";
import ViewMyProducts from "./ARTISAN_LISTS/ViewMyProducts";
import InventoryStatus from "./ARTISAN_LISTS/InventoryStatus";
import OrderRequests from "./ARTISAN_LISTS/OrderRequests";

// Buyer pages
import ViewAllHandloomItems from "./BUYERS_LISTS/ViewAllHandloomItems";
import TrackMyOrders from "./BUYERS_LISTS/TrackMyOrders";
import OrderHistory from "./BUYERS_LISTS/OrderHistory";
import LeaveFeedback from "./BUYERS_LISTS/LeaveFeedback";

// Marketing Specialist pages
import CreateCampaign from "./MARKETER_LISTS/CreateCampaign";
import PromotionAnalytics from "./MARKETER_LISTS/PromotionAnalytics";
import ExportReportsMarketer from "./MARKETER_LISTS/ExportReports";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState(null);
  const [showLanding, setShowLanding] = useState(true);
  const [showProducts, setShowProducts] = useState(false);

  const navigate = useNavigate();

  // Prevent horizontal overflow
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.body.style.width = "100vw";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    return () => {
      document.body.style.overflowX = "";
      document.body.style.width = "";
      document.body.style.margin = "";
      document.body.style.padding = "";
    };
  }, []);

  // ===== Navigation & State Handlers =====
  const handleCart = () => {
    setShowCart(true);
    setShowLanding(false);
    setShowProducts(false);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLanding(true);
    setShowProducts(false);
    navigate("/"); // Go back to home/landing after login
  };

  const handleHome = () => {
    setShowLanding(true);
    setShowProducts(false);
    setShowCart(false);
    navigate("/");
  };

  const handleDashboard = () => {
    setShowLanding(false);
    setShowProducts(false);
    setShowCart(false);
  };

  const handleProducts = () => {
    setShowProducts(true);
    setShowLanding(false);
    setShowCart(false);
  };

  const handleLogout = () => {
    setUser(null);
    setShowLanding(true);
    setShowProducts(false);
    setShowCart(false);
    navigate("/");
  };

  const renderRoleComponent = () => {
    if (!user) return null;
    switch (user.role) {
      case "Admin":
        return (
          <Admin
            user={user}
            onHome={handleHome}
            onDashboard={handleDashboard}
            onLogout={handleLogout}
            onProducts={handleProducts}
          />
        );
      case "Artisan":
        return (
          <Artisan
            user={user}
            onHome={handleHome}
            onDashboard={handleDashboard}
            onLogout={handleLogout}
            onProducts={handleProducts}
          />
        );
      case "Buyer":
        return (
          <Buyer
            user={user}
            onHome={handleHome}
            onDashboard={handleDashboard}
            onLogout={handleLogout}
            onProducts={handleProducts}
          />
        );
      case "Marketing Specialist":
        return (
          <MarketingSpecialist
            user={user}
            onHome={handleHome}
            onDashboard={handleDashboard}
            onLogout={handleLogout}
            onProducts={handleProducts}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        {/* Default: login or landing */}
        <Route
          path="/"
          element={
            !user ? (
              <Login onLogin={handleLogin} />
            ) : showCart ? (
              <Cart
                user={user}
                onHome={handleHome}
                onDashboard={handleDashboard}
                onLogout={handleLogout}
                onProducts={handleProducts}
                handleCart={handleCart}
              />
            ) : showProducts ? (
              <ProductsPage
                user={user}
                onHome={handleHome}
                onDashboard={handleDashboard}
                onLogout={handleLogout}
                onProducts={handleProducts}
                handleCart={handleCart}
              />
            ) : showLanding ? (
              <RoleLanding
                user={user}
                onHome={handleHome}
                onDashboard={handleDashboard}
                onLogout={handleLogout}
                onProducts={handleProducts}
                handleCart={handleCart}
              />
            ) : (
              renderRoleComponent()
            )
          }
        />

        {/* ===== Admin Routes ===== */}
        <Route path="/admin/manage-user-roles" element={<ManageUserRoles />} />
        <Route path="/admin/view-all-users" element={<ViewAllUsers />} />
        <Route path="/admin/approve-reject-products" element={<ApproveRejectProducts />} />
        <Route path="/admin/view-analytics" element={<ViewAnalytics />} />
        <Route path="/admin/export-reports" element={<ExportReports />} />

        {/* ===== Artisan Routes ===== */}
        <Route path="/artisan/add-new-product" element={<AddNewProduct />} />
        <Route path="/artisan/view-my-products" element={<ViewMyProducts />} />
        <Route path="/artisan/inventory-status" element={<InventoryStatus />} />
        <Route path="/artisan/order-requests" element={<OrderRequests />} />

        {/* ===== Buyer Routes ===== */}
        <Route path="/buyer/view-all-items" element={<ViewAllHandloomItems />} />
        <Route path="/buyer/track-orders" element={<TrackMyOrders />} />
        <Route path="/buyer/order-history" element={<OrderHistory />} />
        <Route path="/buyer/leave-feedback" element={<LeaveFeedback />} />

        {/* ===== Marketing Specialist Routes ===== */}
        <Route path="/marketing/create-campaign" element={<CreateCampaign />} />
        <Route path="/marketing/promotion-analytics" element={<PromotionAnalytics />} />
        <Route path="/marketing/export-reports" element={<ExportReportsMarketer />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
