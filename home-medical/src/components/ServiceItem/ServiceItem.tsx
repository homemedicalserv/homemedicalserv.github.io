import React from 'react';
import styles from './ServiceItem.module.scss';
import { NavLink, useRouteMatch } from 'react-router-dom';
import ServiceItemModel from '../../model';

const ServiceItem: React.FC<ServiceItemModel> = (props) => {
	let match = useRouteMatch();
	let isActive = window.location.pathname === `${match.url}${props.url}`;

	return (
		<div className={`${styles.ServiceItem} ${isActive ? styles.active : ''}`}>
			<NavLink className={styles.ServiceItemLink} exact activeClassName={styles.active} to={`${match.url}${props.url}`}>
				<span className={`${styles.icon} `}>
					<i className={`icofont-${props.icon}`}></i>
				</span>

				<span className={styles.serviceTitle}>{props.title}</span>
			</NavLink>
		</div>
	);
};

export default ServiceItem;
