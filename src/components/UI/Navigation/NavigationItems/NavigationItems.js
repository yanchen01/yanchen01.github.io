import React, { Fragment } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Resume from '../../../../assets/resume/Yan_Resume.pdf';

const NavigationItems = () => (
	<Fragment>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="justify-content-end" style={{ width: '100%' }}>
				<NavigationItem link="#about">About</NavigationItem>
				<NavigationItem link="#experience">Experience</NavigationItem>
				<NavigationItem link={Resume} target="_blank">Resume</NavigationItem>
				<NavigationItem link="#contact">Contact</NavigationItem>
			</Nav>
		</Navbar.Collapse>
	</Fragment>
);

export default NavigationItems;
