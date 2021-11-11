import { Avatar } from "@mui/material";
import React from "react";
import "./Story.css";
function Story({ title, avatarPic, image }) {
  return (
    <div style={{ backgroundImage: `URL(${image})` }} className="story">
      <Avatar src={avatarPic} className="story__avatar" />
      <h4> {title} </h4>
    </div>
  );
}

export default Story;
