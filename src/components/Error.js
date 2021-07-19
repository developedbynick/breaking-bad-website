import React from "react";

function Error(props) {
  return (
    <div className="error">
      <h4>
        {props.message ||
          "There was an error in fetching the requested data. Please Try again"}
      </h4>
      <button className="btn" onClick={() => window.location.reload()}>
        Try again
      </button>
    </div>
  );
}

export default Error;
