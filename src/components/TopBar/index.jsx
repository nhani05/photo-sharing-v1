import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const location = useLocation();
  const params = useParams();

  const getContextText = () => {
    const userId = params.userId || location.pathname.split("/")[2];
    const user = userId ? models.userModel(userId) : null;

    if (!user) {
      return "Photo Sharing App";
    }

    if (location.pathname.startsWith("/photos/")) {
      return `Photos of ${user.first_name} ${user.last_name}`;
    }

    if (location.pathname.startsWith("/users/")) {
      return `${user.first_name} ${user.last_name}`;
    }

    return "Photo Sharing App";
  };

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          Lê Xuân Nhân - B23DCKH083
        </Typography>
        <Typography variant="h6" color="inherit">
          {getContextText()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
