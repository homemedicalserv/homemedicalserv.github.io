import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo-full.svg";

function MainNavigation() {
	var mainLinks = [
		{ displayName: "Servicii", url: "/servicii" },
		{ displayName: "Produse", url: "/produse" },
		{ displayName: "Despre noi", url: "/despre-noi" },
		{ displayName: "Contact", url: "/contact" },
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
			<NavLink className="logo-container" to="/home">
				<img className="logo" src={Logo}></img>
			</NavLink>
			<ul className="main-navigation-panel light-shadow">{navigationLinks}</ul>
		</div>
	);
}

export default MainNavigation;
