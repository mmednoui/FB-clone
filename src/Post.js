import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { React, useState } from "react";
import "./Post.css";
import { useStateValue } from "./StateProvider";
import db from "./firebase"
import firebase from "firebase"

function Post() {
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('Publications').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl
  })

    setInput("");
    setImageUrl("");
  };
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

 const [{ user }, dispatch] = useStateValue();

  return (
    <div className="post">
      <div className="post__top">
        <Avatar  src={user.photoURL}/>
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What are you thinking mate ${user.displayName} :) ?!`}
            className="post__input"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Put the image (URL)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden
          </button>
        </form>
      </div>
      <div className="post__bottom">
        <div className="post__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="post__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="post__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default Post;
