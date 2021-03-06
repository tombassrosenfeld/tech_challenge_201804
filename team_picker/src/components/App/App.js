import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";

import Header from '../Header';
import PlayerEntry from '../PlayerEntry/';
import TeamDisplay from '../TeamDisplay/';
import WelcomeScreen from '../WelcomeScreen';
import FourOhFour from '../FourOhFour';
import LeagueScreen from '../LeagueScreen';
import Footer from '../Footer';

import '../../styles/style.css';

class App extends Component {
  render() {

	return (
		<BrowserRouter basename={ process.env.PUBLIC_URL }>
			<div className="app">
				<Header />
				<Switch>
					<Route exact path="/" component={ WelcomeScreen } />
					<Route exact path="/enter-players" component={ PlayerEntry } />
					<Route exact path="/display-teams" component={ TeamDisplay } />
					<Route exact path="/league-dashboard" component={ LeagueScreen } />
					<Route component={ FourOhFour } />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
  }
}

export default App;
