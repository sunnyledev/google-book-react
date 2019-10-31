import React from "react";
import './style.css';

const SearchForm = (props) => {
    return(
        <div className="search-form-outer">
            <p className="search-label">Search for a Book:</p>
            <div className="form-group">
                <input className="form-control" {...props} />
                <button {...props} className="search-btn">
                    Search
                </button>
            </div>
            
        </div>
    );
}

export default SearchForm;
