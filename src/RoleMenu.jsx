import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import InventoryIcon from "@mui/icons-material/Inventory";
import ChatIcon from "@mui/icons-material/Chat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FeedbackIcon from "@mui/icons-material/Feedback";
import CampaignIcon from "@mui/icons-material/Campaign";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useNavigate } from "react-router-dom";

const roleOperations = {
  Admin: [
    { label: "Manage User Roles", icon: <PeopleIcon />, path: "/admin/manage-user-roles" },
    { label: "View All Users", icon: <PeopleIcon />, path: "/admin/view-all-users" },
    { label: "Approve/Reject Products", icon: <AssignmentIcon />, path: "/admin/approve-reject-products" },
    { label: "View Analytics", icon: <AnalyticsIcon />, path: "/admin/view-analytics" },
    { label: "Download Reports", icon: <AnalyticsIcon />, path: "/admin/export-reports" },
    { label: "Log Out", icon: <AssignmentIcon color="error" /> },
  ],
  Artisan: [
    { label: "Add New Product", icon: <InventoryIcon />, path: "/artisan/add-new-product" },
    { label: "View My Products", icon: <InventoryIcon />, path: "/artisan/view-my-products" },
    { label: "Inventory Status", icon: <InventoryIcon />, path: "/artisan/inventory-status" },
    { label: "Order Requests", icon: <ShoppingCartIcon />, path: "/artisan/order-requests" },
    { label: "Log Out", icon: <AssignmentIcon color="error" /> },
  ],
  Buyer: [
    { label: "View All Handloom Items", icon: <ShoppingCartIcon />, path: "/buyer/view-all-items" },
    { label: "Track My Orders", icon: <ShoppingCartIcon />, path: "/buyer/track-orders" },
    { label: "Order History", icon: <ShoppingCartIcon />, path: "/buyer/order-history" },
    { label: "Leave Feedback", icon: <FeedbackIcon />, path: "/buyer/leave-feedback" },
    { label: "Log Out", icon: <AssignmentIcon color="error" /> },
  ],
  "Marketing Specialist": [
    { label: "Create Campaign", icon: <CampaignIcon />, path: "/marketing/create-campaign" },
    { label: "Promotion Analytics", icon: <AnalyticsIcon />, path: "/marketing/promotion-analytics" },
    { label: "Export Reports", icon: <TrendingUpIcon />, path: "/marketing/export-reports" },
    { label: "Log Out", icon: <AssignmentIcon color="error" /> },
  ],
};

const RoleMenu = ({ anchorEl, open, onClose, user, onLogout }) => {
  const navigate = useNavigate();
  const operations = roleOperations[user?.role] || [];

  const handleMenuClick = (op) => {
    onClose();

    if (op.label === "Log Out" && onLogout) {
      onLogout();
      return;
    }

    if (op.path) {
      navigate(op.path);
    }
  };

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      {operations.map((op, idx) => (
        <MenuItem key={idx} onClick={() => handleMenuClick(op)}>
          <ListItemIcon>{op.icon}</ListItemIcon>
          <ListItemText>{op.label}</ListItemText>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default RoleMenu;
