import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 100, clear: "both", paddingTop:5, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
