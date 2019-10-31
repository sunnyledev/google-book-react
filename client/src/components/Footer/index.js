import React from "react";

const styling = {
    width: "100%",
    backgroundColor: "white",
    height: "40px",
    bottom: 0,
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const Footer = () => {
    return (
        <div style={styling}>
            <div className="link">
                <a href="https://github.com/austinalber/google-books-search">GitHub</a> - <a href="https://austinalber.github.io/portfolio/">Austin Alber</a>
            </div>
        </div>
    );
};

export default Footer;
