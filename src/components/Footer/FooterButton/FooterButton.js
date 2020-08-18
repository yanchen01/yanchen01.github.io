import React from 'react';
import styles from './FooterButton.module.css';

const FooterButton = (props) => (
	<div className={styles.Contact}>
		<a href={props.link} target={props.target}>{props.text}</a>
	</div>
);

export default FooterButton;
