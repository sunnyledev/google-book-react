import React from "react";
import "./style.css";

const SearchResults = (props) => {
    return(
        <div className="search-result-outer">
            <div className="container">
                <img id="image" src={props.image} alt={props.title}/>
                <div className="book-info">
                    <div className="outer-div">
                        <h5>Title:</h5>
                        <h5>{props.title}</h5>
                    </div>
                    <div className="outer-div">
                        <p>Author:</p>
                        <p>{props.author}</p>
                    </div>
                    <div className="outer-div">
                        <p>Description:</p>
                        <p>{props.description}</p>
                    </div>
                    <div className="outer-div">
                        <p>Link:</p>
                        <a href={props.link}>{props.title}</a>
                    </div>
                </div>
                <button className="save-book-button shared-btn-attr" {...props}>
                    Save Book
                </button>
            </div>
        </div>
    );
}

export default SearchResults;
