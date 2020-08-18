import React from 'react';
import styles from './Hero.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import SocialNetwork from './SocialNetwork/SocialNetwork';

// import image assets
import portrait from '../../assets/images/portrait.png';

const Hero = () => (
	<section className={styles.Hero} id="about">
		<Container>
			<Row>
				<Col sm={12} lg={6}>
					<img src={portrait} alt="portrait" />
				</Col>
				<Col sm={12} lg={6}>
					<div className={styles.AboutContent}>
						<h2 className={styles.AboutHeading}>
							I’m Yan, an engineer and a developer from New York City.
						</h2>
						<div className={styles.AboutDescription}>
							<p className={styles.AboutDescriptionText}>
								Hi <span role="img" aria-label="wave">👋</span>, I’m a full-stack engineer studying at Boston University.
								Building practical, engaging, and overall stunning web applications is one of my main
								career goals. My other interests lies in developing scalable and functional APIs with
								cutting-edge technologies. I wish to learn more about all aspects of technology in my
								future career experiences.
							</p>
						</div>
						<SocialNetwork />
					</div>
				</Col>
			</Row>
		</Container>
	</section>
);

export default Hero;
