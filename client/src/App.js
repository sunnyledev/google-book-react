import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import './App.css';

function App() {
  return (
    <Router>
      <div className="outer-layer">
        <NavBar />
        <Jumbotron>
          <h1 className="center-text">(React) Google Books Search</h1>
          <h3 className="center-text">Search for and Save Books of Interest</h3>
        </Jumbotron>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
