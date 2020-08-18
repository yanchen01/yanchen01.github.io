import React from 'react';
import styles from './Navbar.module.css';

import Logo from '../../../Logo/Logo';
import { Container } from 'react-bootstrap';
import NavBar from 'react-bootstrap/Navbar';
import NavigationItems from '../NavigationItems/NavigationItems';

const Navbar = () => (
	<NavBar fixed="top" expand="lg" className={styles.Navbar}>
		<Container>
			<NavBar.Brand href="/" className={styles.Brand}>
				<div className={styles.Logo}>
					<Logo />
				</div>
				<span className={styles.BrandText}>Yan Chen</span>
			</NavBar.Brand>
			<NavigationItems />
		</Container>
	</NavBar>
);

export default Navbar;
