import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./components/HomePage/index";
import AboutPage from "./components/AboutPage/index";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>

        </header>
	    <Switch>
	    	<Route path="/" component={HomePage} exact />
	    	<Route path="/about" component={AboutPage} />
	    </Switch>
      </div>
    );
  }
}

export default App;
