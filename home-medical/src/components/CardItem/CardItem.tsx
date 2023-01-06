import React, { FC } from 'react';
import styles from './CardItem.module.scss';

interface CardItemProps {
	icon: string;
	title: string;
	className?: string;
}

const CardItem: FC<CardItemProps> = (props) => (
	<div className={`${styles.CardItem} ${props.className}`}>
		<h2>
			<i className={props.icon}></i> {props.title}
		</h2>
		<div>{props.children}</div>
	</div>
);

export default CardItem;
