import React from "react";
import "./style.css";
import image from "./placeholder.jpg";

const SearchResults = (props) => {
    return(
        <div class="search-result-outer">
            <div className="container">
                {/* placeholder is just an example of displaying the image so it would be ---> src={props.image}*/}
                <img id="image" src={image} alt={props.title}/>
                <div className="book-info">
                    <h5>Title:
                        <h5>{props.title}</h5>
                    </h5>
                    <p>Author:
                        <p>{props.author}</p>
                    </p>
                    <p>Description:
                        <p>{props.description}</p>
                    </p>
                    <p>Link:
                        <a href={props.link}>{props.title}</a>
                    </p>
                </div>
                <button className="save-book-button" {...props}>
                    Save Book
                </button>
            </div>
        </div>
    );
}

export default SearchResults;
