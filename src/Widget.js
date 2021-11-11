import React from "react";
import "./Widget.css";
function Widget() {
  return (
    <div className="widget" >
      <iframe
        src="https://www.mui.com//"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="yes"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widget;
