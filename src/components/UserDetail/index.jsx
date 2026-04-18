import React, { useState, useEffect } from "react";
import { Button, Typography, CircularProgress } from "@mui/material";

import "./styles.css";
import { Link, useParams } from "react-router-dom";
import apiService from "../../lib/apiService";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const loadUser = async () => {
        try {
          setLoading(true);
          const data = await apiService.fetchUserById(userId);
          if (!data) {
            setError("User not found");
          } else {
            setUser(data);
            setError(null);
          }
        } catch (err) {
          setError("Failed to load user");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      loadUser();
    }, [userId]);

    if (loading) {
      return <CircularProgress />;
    }

    if (error || !user) {
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
