import React, { Component } from "react";
import API from "../utils/API";
import SavedResults from "../components/SavedResults";


class Saved extends Component {
    state = {
        results: [],
        error: ""
    };

    render() {
        return(
            <div className="wrapper">
                <SavedResults
                    
                />
            </div>
        );
    }
}

export default Saved;
