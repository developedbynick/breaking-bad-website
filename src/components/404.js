import React from "react";
import { Link } from "react-router-dom";
function Error404() {
  return (
    <div className="error">
      <h2 style={{ fontSize: "4rem", margin: "1rem" }}>404 Page Not Found</h2>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </div>
  );
}

export default Error404;
