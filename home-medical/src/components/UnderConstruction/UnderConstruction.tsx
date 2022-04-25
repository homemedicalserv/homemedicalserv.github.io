import React from 'react';
import styles from './UnderConstruction.module.scss';

const UnderConstruction: React.FC = () => (
	<div className={styles.UnderConstruction}>
		<img src="../under-construction.svg" className={styles.underConstructionImage} alt="under construction" />

		<h1>Pagină în construcție!</h1>
		<p></p>
		<h2>Ne cerem scuze, momentan lucrăm la această pagină!</h2>
		<span className={styles.computerIcon}>
			<i className="icofont-architecture-alt"></i>
		</span>
		<h2>Vă rugăm reveniți mai târziu!</h2>
	</div>
);

export default UnderConstruction;
