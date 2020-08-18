import React from 'react';
import styles from './Portfolio.module.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

// import image assets
import burgerBuilderPic from '../../assets/images/burger-builder.png';
import sapflowPic from '../../assets/images/sapflow.png';
import yelpCampPic from '../../assets/images/yelp-camp.png';
import terrierExchangePic from '../../assets/images/terrier-exchange.png';
import sentithinkPic from '../../assets/images/sentithink.png';

const Projects = [
	{
		title: 'Burger Builder',
		techStack: [ 'React', 'Firebase', 'HTML', 'CSS' ],
		description: `Burger Builder is a web application that allows users to dynamically build their ideal burgers. 
						The app allows users to checkout and submit burger orders.`,
		image: burgerBuilderPic
	},
	{
		title: 'Sapflow Analytics',
		techStack: [ 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS' ],
		description: `Sapflow Analytics is a web visualization platform that manage and visualize sensor data in real time. 
						It serves as an internal tool for Hutyra Research Lab at Boston University`,
		image: sapflowPic
	},
	{
		title: 'Yelp Camp',
		techStack: [ 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS' ],
		description: `Yelp Camp is a review forum web application for campgrounds. 
						Similar to Yelp, users can post reviews, like/dislike, and comment on campground posts`,
		image: yelpCampPic
	},
	{
		title: 'Terrier Exchange',
		techStack: [ 'Android Studio', 'Java', 'Firebase' ],
		description: `Terrier Exchange is an online marketplace Android app for Boston University students to buy, sell, and sell textbooks.`,
		image: terrierExchangePic
	},
	{
		title: 'Sentithink',
		techStack: [ 'C#', 'Python', 'MySQL', 'JavaScript', 'HTML', 'CSS' ],
		description: `Sentithink is a sentiment analysis web application that 
						utilizes Natural Language Processing techniques to generate a sentiment heat map of a large group of people.`,
		image: sentithinkPic
	}
];

const Portfolio = () => (
	<section style={{ marginBottom: '40px' }}>
		<Container>
			<div className="SectionHeader">
				<h4 className="SectionTitle">Portfolio</h4>
				<p className="SectionSubTitle">Here are a few selected pieces of work from my projects.</p>
			</div>
			<Row>
				{Projects.map((project) => (
					<Col sm={12} lg={6}>
						<Card className={styles.Card}>
							<Card.Img className={styles.Image} variant="top" src={project.image} />
							<Card.Body>
								<Card.Title>{project.title}</Card.Title>
								<div className={styles.TechStackTags}>
									{project.techStack.map((tech) => (
										<div className={styles.TechStackTag}>
											<span>{tech}</span>
										</div>
									))}
								</div>
								<Card.Text className={styles.Caption}>{project.description}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	</section>
);

export default Portfolio;
