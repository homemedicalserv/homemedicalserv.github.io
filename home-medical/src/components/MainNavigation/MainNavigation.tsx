import React from 'react';
import styles from './MainNavigation.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo-full.svg';

const MainNavigation: React.FC = () => {
	var mainLinks = [
		{ displayName: 'Despre noi', url: '/despre-noi' },
		{ displayName: 'Servicii', url: '/servicii' },
		{ displayName: 'Tarife', url: '/tarife' },
		{ displayName: 'Contact', url: '/contact' },
	];

	var navigationLinks = mainLinks.map((item) => (
		<li className={styles.mainNavigationItem} key={item.url}>
			<NavLink activeClassName={styles.active} to={item.url}>
				{item.displayName}
			</NavLink>
		</li>
	));

	return (
		<div className={styles.MainNavigation}>
			<NavLink className={`${styles.logoContainer} light-shadow`} to="/home">
				<img className={styles.logo} src={Logo} alt="servicii medicale la domiciliu"></img>
			</NavLink>
			<ul className={`${styles.mainNavigationPanel} light-shadow`}>{navigationLinks}</ul>
		</div>
	);
};

export default MainNavigation;
