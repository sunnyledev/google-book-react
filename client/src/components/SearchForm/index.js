import React from "react";
import './style.css';

const SearchForm = (props) => {
    return(
        <div className="search-form-outer">
            <div className="form-group">
                <input className="book-name-input shared-attrs" {...props} placeholder="Better read than dead... so let me find a book for you"/>
                <button {...props} className="search-btn shared-attrs">
                    Search
                </button>
            </div>
            
        </div>
    );
}

export default SearchForm;
