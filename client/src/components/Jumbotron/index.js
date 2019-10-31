import React from "react";

const divStyle = {
  clear: "both",
  padding: "20px 0",
  margin: "80px 0 10px",
  backgroundColor: "white"
};

function Jumbotron({ children }) {
  return (
    <div
      style={divStyle}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
