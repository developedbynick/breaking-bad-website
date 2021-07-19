import React from "react";

function Loading(props) {
  return (
    <div className="error">
      <h4>{props.message || "Loading your data... Please wait"}</h4>
    </div>
  );
}

export default Loading;
