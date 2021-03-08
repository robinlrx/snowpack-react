import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import '@styles/index.scss';
import Home from '@pages/Home';
import About from '@pages/About';

function App() {
	return (
		<>
			<Router>
				<nav>
					<NavLink exact to="/" className='nav-link' activeClassName="selected">Home</NavLink>
					<NavLink exact to="/about" className='nav-link' activeClassName="selected">About</NavLink>
				</nav>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
