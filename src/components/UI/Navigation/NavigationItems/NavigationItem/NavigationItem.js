import React from 'react';
import Nav from 'react-bootstrap/Nav';
import styles from './NavigationItem.module.css';

const NavigationItem = (props) => (
	<Nav.Item>
		<Nav.Link className={styles.NavLink} href={props.link} target={props.target}>
			{props.children}
		</Nav.Link>
	</Nav.Item>
);

export default NavigationItem;
