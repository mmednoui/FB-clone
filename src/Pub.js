import React from "react";
import "./Pub.css";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function Pub({ username, profilePic, image, timestamp, message }) {
  return (
    <div className="pub">
      <div className="pub__top">
        <Avatar src={profilePic} className="pub__avatar" />
        <div className="pub__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="pub__bottom">
        <p>{message}</p>
      </div>
      <div className="pub__image">
        <img src={image} alt="" />
      </div>
      <div className="pub__options">
        <div className="pub__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="pub__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="pub__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="pub__option">
          <AccountCircleOutlinedIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Pub;
