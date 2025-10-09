import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";


const LogoutDialog = ({ open, onClose, onConfirm }) => (
  <Dialog open={open} onClose={onClose}
    PaperProps={{ sx: { borderRadius: 10 } }}
  >
    <DialogTitle>Are you sure you want to log out?</DialogTitle>
    <DialogContent>
      <DialogContentText>
        You will be returned to the login page.
      </DialogContentText>
    </DialogContent>
    <DialogActions sx={{ justifyContent: 'center', gap: 2 }}>
      <Button onClick={onClose} color="primary" variant="outlined" sx={{ borderRadius: 2.5 }}>No</Button>
      <Button onClick={onConfirm} color="error" variant="contained" sx={{ borderRadius: 2.5 }}>Yes</Button>
    </DialogActions>
  </Dialog>
);

export default LogoutDialog;
