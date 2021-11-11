import React, { useState, useEffect} from "react";
import "./Feed.css";
import StoryList from "./StoryList";
import Post from "./Post";
import Pub from "./Pub";
import db from "./firebase"
function Feed() {
 const [publications, setPublications] = useState([])
 useEffect(() => {
  db.collection('Publications')
  .orderBy('timestamp', 'desc')
  .onSnapshot((snapshot) =>
      
    setPublications(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
  )
}, [])
  return (
    <div className="feed">
      <StoryList />
      <Post />
     {publications.map(publication => (
        <Pub 
          key={publication.id}
          profilePic={publication.data.profilePic}
          message={publication.data.message}
          timestamp={publication.data.timestamp}
          username={publication.data.username}
          image={publication.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
