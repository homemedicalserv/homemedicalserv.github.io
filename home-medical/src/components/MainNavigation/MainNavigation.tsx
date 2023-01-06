import React, { useState } from 'react';
import styles from './MainNavigation.module.scss';
import { NavLink } from 'react-router-dom';
import { BaseSyntheticEvent } from 'react';

const MainNavigation: React.FC = () => {
	var mainLinks = [
		{ displayName: 'Despre noi', url: '/despre-noi' },
		{ displayName: 'Servicii', url: '/servicii' },
		{ displayName: 'Tarife', url: '/tarife' },
		{ displayName: 'Contact', url: '/contact' },
	];
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	var menuButtonClick = function (isNavigation: boolean) {
		var isOpen = isNavigation ? false : !isMenuOpen;
		setIsMenuOpen(isOpen);
	};

	var navigationLinks = mainLinks.map((item) => (
		<NavLink
			className={styles.mainNavigationItem}
			key={item.url}
			activeClassName={styles.active}
			to={item.url}
			onClick={() => {
				menuButtonClick(true);
			}}>
			{item.displayName}
		</NavLink>
	));

	return (
		<div className={`${styles.MainNavigation} ${isMenuOpen ? styles.open : 'closed'}`}>
			<div className="main-container">
				<NavLink className={`${styles.logoContainer}`} to="/home">
					<img className={styles.logo} alt="servicii medicale la domiciliu"></img>
				</NavLink>
				<div className={styles.mainNavigationPanel}>{navigationLinks}</div>
				<a className={styles.menuButton} onClick={() => menuButtonClick(false)}>
					<i className="icofont-navigation-menu"></i>
				</a>
			</div>
		</div>
	);
};

export default MainNavigation;
