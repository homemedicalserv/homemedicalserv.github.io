import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import ServiceItem from "../../model";

function ServiceItemControl(props: ServiceItem) {
	let match = useRouteMatch();

	return (
		<NavLink
			exact
			className="service-item"
			activeClassName="active"
			to={`${match.url}${props.url}`}>
			<span className="icon frost-background">
				<i className={`icofont-${props.icon}`}></i>
			</span>

			<span className="service-title frost-background light-shadow">
				{props.title}
			</span>
		</NavLink>
	);
}

export default ServiceItemControl;
