import React, { FC, useRef, useState } from 'react';
import styles from './AboutItem.module.scss';

interface AboutItemProps {
	isOpen: boolean;
	title: string;
	icon: string;
	selected(id: string): void;
}

const AboutItem: FC<AboutItemProps> = (props) => {
	let itemRef = useRef<null | HTMLDivElement>(null);

	const onClick = () => {
		props.selected(props.title);
		itemRef.current?.scrollIntoView();
	};

	return (
		<div ref={itemRef} className={`${styles.AboutItem} ${props.isOpen ? styles.open : 'closed'}`}>
			<h1 onClick={onClick}>
				<span className={`${props.icon} ${styles.bigIcon}`}></span> {props.title}
			</h1>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

export default AboutItem;
