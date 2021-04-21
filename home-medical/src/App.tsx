import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import "./fonts/icofont.min.css";
import { MainNavigation } from "./components/index";
import {
	HomePage,
	ServicesPage,
	ProductsPage,
	AboutPage,
	ContactPage,
} from "./pages/index";

function App() {
	console.log(React.version);
	return (
		<div className="main-container">
			<BrowserRouter>
				<MainNavigation />
				<Switch>
					<Route path="/home">
						<HomePage />
					</Route>
					<Route path="/servicii">
						<ServicesPage />
					</Route>
					<Route path="/produse">
						<ProductsPage />
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
			</BrowserRouter>
		</div>
	);
}

export default App;
