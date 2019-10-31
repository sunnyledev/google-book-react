import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        search: "",
        books: [],
        results: [],
        error: ""
    };

    componentDidMount() {
        this.loadBooks();
      }
    
      loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data, title: "", author: "", description: "" })
          )
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
          API.saveBook({
            title: this.state.title,
            author: this.state.author,
            description: this.state.description
          })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
      };

    render() {
        return(
          <div>
            <SearchForm 
            
            />
            <SearchResults 
            
            />
          </div>
        );
    }
}

export default Search;
