import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ForumIcon from "@mui/icons-material/Forum";
import { useStateValue } from "./StateProvider";

function Navbar() {
 const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt="fb_logo"
        />{" "}
        <div className="navbar__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="navbar__middle">
        <div className="navbar__option navbar__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="navbar__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="navbar__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="navbar__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="navbar__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
