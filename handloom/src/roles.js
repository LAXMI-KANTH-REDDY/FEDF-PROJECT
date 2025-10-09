export const roles = [
  {
    name: "Admin",
    description: "Oversee platform operations, manage user roles, and ensure content accuracy.",
    permissions: ["manageUsers", "editContent", "viewReports"]
  },
  {
    name: "Artisan",
    description: "List handloom products, manage inventory, and interact with buyers.",
    permissions: ["listProducts", "manageInventory", "chatWithBuyers"]
  },
  {
    name: "Buyer",
    description: "Browse and purchase handloom items, track orders, and provide feedback.",
    permissions: ["browseProducts", "purchase", "trackOrders", "feedback"]
  }
];
