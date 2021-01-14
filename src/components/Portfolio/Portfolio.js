import React from 'react';
import styles from './Portfolio.module.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

// import image assets
import lobbyPic from '../../assets/images/lobby.png';
import burgerBuilderPic from '../../assets/images/burger-builder.png';
import sapflowPic from '../../assets/images/sapflow.png';
import yelpCampPic from '../../assets/images/yelp-camp.png';
import terrierExchangePic from '../../assets/images/terrier-exchange.png';
import sentithinkPic from '../../assets/images/sentithink.png';
import cicdPic from '../../assets/images/cicd.png';

const Projects = [
	{
		title: 'CI/CD Pipeline for Python API',
		link: 'https://github.com/BU-CLOUD-F20/Building_CI_CD_for_API',
		techStack: [ 'Flask', 'React', 'Docker', 'OpenShift', 'GitHub Actions' ],
		description:
			'Constructed a CI/CD pipeline using GitHub Actions, Docker, and OpenShift for Python-based Web APIs.',
		image: cicdPic
	},
	{
		title: 'Lobby',
		link: 'https://lobby-hackmit.herokuapp.com/',
		techStack: [ 'React', 'Firebase', 'HTML', 'CSS' ],
		description: `A platform that facilitates finding your team for events ranging from education, entertainment, gaming tournaments, to hackathons, whether virtual or in-person.`,
		image: lobbyPic
	},
	{
		title: 'Burger Builder',
		link: 'https://github.com/yanchen01/burger-builder',
		techStack: [ 'React', 'Firebase', 'HTML', 'CSS' ],
		description: `Burger Builder is a web application that allows users to dynamically build their ideal burgers. 
						The app allows users to checkout and submit burger orders.`,
		image: burgerBuilderPic
	},
	{
		title: 'Sapflow Analytics',
		link: 'https://sapflow.herokuapp.com/',
		techStack: [ 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS' ],
		description: `Sapflow Analytics is a web visualization platform that manage and visualize sensor data in real time. 
						It serves as an internal tool for Hutyra Research Lab at Boston University.`,
		image: sapflowPic
	},
	{
		title: 'Yelp Camp',
		link: 'https://immense-peak-34617.herokuapp.com/',
		techStack: [ 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS' ],
		description: `Yelp Camp is a review forum web application for campgrounds. 
						Similar to Yelp, users can post reviews, like/dislike, and comment on campground posts.`,
		image: yelpCampPic
	},
	{
		title: 'Terrier Exchange',
		link: 'https://github.com/nicolekwon/TerrierExchange',
		techStack: [ 'Android Studio', 'Java', 'Firebase' ],
		description: `Terrier Exchange is an online marketplace Android app for Boston University students to buy, rent, and sell textbooks.`,
		image: terrierExchangePic
	},
	{
		title: 'Sentithink',
		link: 'https://github.com/JWPM77/Sentithink',
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
					<Col sm={12} lg={6} key={project.title}>
						<Card className={styles.Card}>
							<a href={project.link} target="_blank" rel="noopener noreferrer">
								<Card.Img className={styles.Image} variant="top" src={project.image} />
								<Card.Body>
									<Card.Title className={styles.CardTitle}>{project.title}</Card.Title>
									<div className={styles.TechStackTags}>
										{project.techStack.map((tech) => (
											<div className={styles.TechStackTag} key={tech}>
												<span>{tech}</span>
											</div>
										))}
									</div>
									<Card.Text className={styles.Caption}>{project.description}</Card.Text>
								</Card.Body>
							</a>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	</section>
);

export default Portfolio;
