import React from "react";
import { Button, Typography } from "@mui/material";

import "./styles.css";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const { userId } = useParams();
    const user = models.userModel(userId);

    if (!user) {
      return <Typography>User not found.</Typography>;
    }

    return (
        <>
          <Typography variant="h5" gutterBottom>
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant="body1">Location: {user.location}</Typography>
          <Typography variant="body1">Occupation: {user.occupation}</Typography>
          <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
            {user.description}
          </Typography>
          <Button component={Link} to={`/photos/${user._id}`} variant="contained">
            View Photos
          </Button>
        </>
    );
}

export default UserDetail;
