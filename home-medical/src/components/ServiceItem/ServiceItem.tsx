import React from "react";
import styles from "./ServiceItem.module.scss";
import { NavLink, useRouteMatch } from "react-router-dom";
import ServiceItemModel from "../../model";

const ServiceItem: React.FC<ServiceItemModel> = (props) => {
	let match = useRouteMatch();

	return (
		<NavLink
			exact
			className={styles.ServiceItem}
			activeClassName={styles.active}
			to={`${match.url}${props.url}`}>
			<span className={`${styles.icon} frost-background`}>
				<i className={`icofont-${props.icon}`}></i>
			</span>

			<span className={`${styles.serviceTitle} frost-background light-shadow`}>
				{props.title}
			</span>
		</NavLink>
	);
};

export default ServiceItem;
