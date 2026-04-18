import React, { useState, useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import "./styles.css";
import apiService from "../../lib/apiService";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList () {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const loadUsers = async () => {
        try {
          setLoading(true);
          const data = await apiService.fetchUsers();
          setUsers(data);
          setError(null);
        } catch (err) {
          setError("Failed to load users");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      loadUsers();
    }, []);

    if (loading) {
      return <CircularProgress />;
    }

    if (error) {
      return <Typography color="error">{error}</Typography>;
    }

    return (
      <div>
        <List component="nav">
          {users.map((item) => (
            <React.Fragment key={item._id}>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={`/users/${item._id}`}>
                  <ListItemText primary={`${item.first_name} ${item.last_name}`} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </div>
    );
}

export default UserList;
