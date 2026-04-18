import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import apiService from "../../lib/apiService";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const location = useLocation();
  const params = useParams();
  const [contextText, setContextText] = useState("Photo Sharing App");

  useEffect(() => {
    const getContextText = async () => {
      const userId = params.userId || location.pathname.split("/")[2];
      
      if (!userId) {
        setContextText("Photo Sharing App");
        return;
      }

      try {
        const user = await apiService.fetchUserById(userId);
        
        if (!user) {
          setContextText("Photo Sharing App");
          return;
        }

        if (location.pathname.startsWith("/photos/")) {
          setContextText(`Photos of ${user.first_name} ${user.last_name}`);
        } else if (location.pathname.startsWith("/users/")) {
          setContextText(`${user.first_name} ${user.last_name}`);
        } else {
          setContextText("Photo Sharing App");
        }
      } catch (err) {
        console.error("Error fetching user for topbar:", err);
        setContextText("Photo Sharing App");
      }
    };

    getContextText();
  }, [params.userId, location.pathname]);

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          Lê Xuân Nhân - B23DCKH083
        </Typography>
        <Typography variant="h6" color="inherit">{contextText}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
          {getContextText()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
