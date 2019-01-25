import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { playersContainers } from './modules/players';
import './App.css';

export class App extends Component {
    render() {
		return (
			<BrowserRouter>
                <Route exact path='/' component={ playersContainers.PlayersView } />
			</BrowserRouter>
		);
	}
}

export default App;
