import React from "react";

const SearchResults = (props) => {
    return(
        <div class="jumbotron" style={{ marginTop: "-20px", padding:"15px" }}>
            <div className="container" style={{ marginBlock: "10px" }}>
                <img src={props.image} alt={props.title}/>
                <div>
                    <h3>Title: <h2>{props.title}</h2></h3>
                    <button {...props} 
                        style={{ 
                            float: "right", 
                            height: "80%", 
                            marginLeft:15, 
                            fontSize:"2em", 
                            textAlign:"center", 
                            padding:"0 16px" 
                        }} 
                        className="btn btn-success"
                    >
                        Save Book!
                    </button>
                </div>
                <h3>Author: <h2>{props.author}</h2></h3>
                <h3>Description: <p>{props.description}</p></h3>
                <h3>Link: <p>{props.link}</p></h3>
            </div>
        </div>
    );
}

export default SearchResults;