import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Info from './Info/Info';
import Poloha from './Poloha/Poloha';
import Video from './Video/Video';
import './App.scss';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Route path='/' exact component={Info} />
			<Route path='/' exact component={Poloha} />
			<Route path='/' exact component={Video} />
		</Router>
	);
};

export default App;