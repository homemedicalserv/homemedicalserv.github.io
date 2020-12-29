import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

function ServiceItem(props) {
	let match = useRouteMatch();

	return (
		<NavLink
			className="service-item"
			activeClassName="active"
			to={`${match.url}/${props.url}`}>
			<span className="icon">
				<i className={`icofont-${props.icon}`}></i>
			</span>

			<span className="service-title"> {props.title} </span>
		</NavLink>
	);
}

export default ServiceItem;
