import React from "react";

const SearchForm = (props) => {
    return(
        <div className="jumbotron" style={{ height: 100, clear: "both", paddingTop:0, textAlign: "center", paddingLeft:"24%"}}>
            <h3 style={{ textAlign: "left", paddingTop: 5, marginTop: "-30px" }}>Search for a Book:</h3>
            <div className="form-group" style={{ paddingTop: 0, width: "80%", display: "flex", height: 50 }}>
                <input className="form-control" {...props} />
                <button {...props} style={{ float: "right", height: "100%", marginLeft:15, fontSize:"2em", textAlign:"center", padding:"0 16px" }} className="btn btn-success">
                    Search
                </button>
            </div>
            
        </div>
    );
}

export default SearchForm;