import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import './fonts/icofont.min.css';
import { MainNavigation } from './components/index';
import { HomePage, ServicesPage, PricesPage, AboutPage, ContactPage } from './pages/index';

function App() {
	console.log(React.version);
	return (
		<BrowserRouter>
			<MainNavigation />
			<div className="main-container page-body">
				<Switch>
					<Route path="/home">
						<HomePage />
					</Route>
					<Route path="/servicii">
						<ServicesPage />
					</Route>
					<Route path="/tarife">
						<PricesPage />
					</Route>
					<Route path="/despre-noi">
						<AboutPage />
					</Route>
					<Route path="/contact">
						<ContactPage />
					</Route>
					<Route path="/">
						<Redirect to="/home" />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
