import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Info from './Info/Info';
import './App.scss'

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Info} />
			</Switch>
		</Router>
	);
};

export default App;