import React from 'react';
import styles from './Footer.module.css';
import { Container } from 'react-bootstrap';
import FooterButton from './FooterButton/FooterButton';
import FooterSocialNetworks from './FooterSocialNetworks/FooterSocialNetworks';
import Resume from '../../assets/resume/Yan_Resume.pdf';

const Footer = () => (
	<footer className={styles.Footer} id="contact">
		<Container>
			<div className={styles.FooterHeader}>
				<h4 className={styles.Heading}>Hire Me</h4>
				<p className={styles.subHeading}>Currently available for Software Engineer Internship</p>
			</div>

			<FooterButton link="mailto:ychen01@bu.edu" text="Contact Email" />
			<FooterButton link={Resume} text="Download Resume" target="_blank" />
			<FooterSocialNetworks />
			<p className={styles.CopyrightText}>Designed by Yan Chen</p>
		</Container>
	</footer>
);

export default Footer;
