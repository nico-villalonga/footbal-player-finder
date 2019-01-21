import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { playersContainers } from './modules/players';
import './App.css';

class App extends Component {
    render() {
        const { PlayersView } = playersContainers;

		return (
			<BrowserRouter>
                <Route exact path='/' component={ PlayersView } />
			</BrowserRouter>
		);
	}
}

export default App;
