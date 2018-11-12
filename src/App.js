import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

// import LearnProps from './LearnProps.js';
import Header from './Header.js';
import Content from './Content.js';
import Home from './Home.js';

export default class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/content" component={Content} />
          </div>
        </Router>
      </div>

    )
  }
}
