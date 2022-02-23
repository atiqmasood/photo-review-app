import * as React from "react";
// MUI
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

export default function ButtonBar({ onApprove, onReject }) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 }, textAlign: "center" }}>
      <Fab color="secondary" onClick={onReject}>
        <CloseIcon />
      </Fab>
      <Fab color="success" onClick={onApprove}>
        <DoneIcon />
      </Fab>
    </Box>
  );
}
