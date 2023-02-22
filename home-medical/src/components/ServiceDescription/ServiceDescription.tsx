import React, { FC, useRef } from 'react';
import styles from './ServiceDescription.module.scss';

interface ServiceDescriptionProps {}

const ServiceDescription: FC<ServiceDescriptionProps> = (props) => {
	let refNode = useRef(null);
	return (
		// <SwitchTransition mode="out-in">
		// 	<CSSTransition key={}>
		<div key={window.location.href} ref={refNode} className={`${styles.ServiceDescription} description-panel`}>
			{props.children}
		</div>
		// 	</CSSTransition>
		// </SwitchTransition>
	);
};

export default ServiceDescription;
