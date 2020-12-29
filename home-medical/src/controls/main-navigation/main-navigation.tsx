import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo-full.svg";

function MainNavigation() {
	var mainLinks = [
		{ displayName: "Home", url: "/home" },
		{ displayName: "Servicii", url: "/servicii" },
		{ displayName: "Produse", url: "/produse" },
		{ displayName: "Despre noi", url: "/despre-noi" },
	];

	var navigationLinks = mainLinks.map((item) => (
		<li className="main-navigation-item">
			<NavLink activeClassName="active" to={item.url}>
				{item.displayName}
			</NavLink>
		</li>
	));

	return (
		<div className="main-navigation">
			<span className="logo-container">
				<img className="logo" src={Logo}></img>
			</span>
			<ul className="main-navigation-panel">{navigationLinks}</ul>
		</div>
	);
}

export default MainNavigation;
