import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
    const { userId } = useParams();
    const user = models.userModel(userId);
    const photos = models.photoOfUserModel(userId);

    if (!user) {
      return <Typography>User not found.</Typography>;
    }

    const resolvePhotoUrl = (fileName) => {
      return require(`../../images/${fileName}`);
    };

    return (
      <div>
        <Typography variant="h5" gutterBottom>
          Photos of {user.first_name} {user.last_name}
        </Typography>
        {photos.map((photo) => (
          <Card key={photo._id} sx={{ mb: 2 }}>
            <CardMedia
              component="img"
              image={resolvePhotoUrl(photo.file_name)}
              alt={`${user.first_name} ${user.last_name}`}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {photo.date_time}
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Typography variant="subtitle1">Comments</Typography>
              <List dense>
                {(photo.comments || []).map((comment) => (
                  <ListItem key={comment._id} alignItems="flex-start" disableGutters>
                    <ListItemText
                      primary={
                        <>
                          <Link to={`/users/${comment.user._id}`}>
                            {comment.user.first_name} {comment.user.last_name}
                          </Link>
                          {" - "}
                          {comment.comment}
                        </>
                      }
                      secondary={comment.date_time}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </div>
    );
}

export default UserPhotos;
