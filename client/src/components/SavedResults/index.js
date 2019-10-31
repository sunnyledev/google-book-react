import React from "react";
import remove from "./delete.png";
import "./style.css";

const SavedResults = (props) => {
    return(
        <div className="saved-result-outer">
            <div className="container">
                <img id="image" src={props.image} alt={props.title}/>
                <div className="book-info">
                    <div className="outer-div">
                        <h5>Title:</h5>
                        <p>{props.title}</p>
                    </div>
                    <div className="outer-div">
                        <p>Author:</p>
                        <p>{props.author}</p>
                    </div>
                    <div className="outer-div">
                        <p>Description: </p>
                        <p>{props.description}</p>
                    </div>
                    <div className="outer-div">
                        <p>Link:</p>
                        <a href={props.link}>{props.title}</a>
                    </div>
                </div>
                <button {...props} className="remove-book-btn shared-btn-attr">
                    Remove Book
                </button>
            </div>
        </div>
    );
}

export default SavedResults;
