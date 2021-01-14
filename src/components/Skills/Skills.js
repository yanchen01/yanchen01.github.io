import React from 'react';
import styles from './Skills.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import SkillCard from './SkillCard/SkillCard';

// import image assets
import progLanguageIcon from '../../assets/images/programming-language-icon.png';
import frontEndIcon from '../../assets/images/front-end-icon.png';
import backEndIcon from '../../assets/images/back-end-icon.png';

const skillList = [
	{
		source: progLanguageIcon,
		category: 'Programming Language',
		techs: [ 'Python', 'TypeScript' 'JavaScript', 'C++', 'C', 'Java' ]
	},
	{
		source: frontEndIcon,
		category: 'Front-End Development',
		techs: [ 'React', 'React Native', 'Android Studio', 'HTML', 'CSS', 'Bootstrap', 'Figma' ]
	},
	{
		source: backEndIcon,
		category: 'Back-End Development',
		techs: [
			'Node & Express',
			'Django',
			'Flask',
			'MongoDB',
			'MySQL',
			'PostreSQL',
			'Firebase',
			'AWS',
			'GCP',
			'Docker',
			'OpenShift'
		]
	}
];

const Skills = () => (
	<section className={styles.Skills} id="experience">
		<Container>
			<div className="SectionHeader">
				<h4 className="SectionTitle">Skills</h4>
				<p className="SectionSubTitle">
					Programming languages, frameworks, databases, and tools that I used recently.
				</p>
			</div>
			<Row className="justify-content-between">
				{skillList.map((skill) => (
					<Col sm={12} lg={4} key={skill.category}>
						<SkillCard source={skill.source} category={skill.category} skills={skill.techs} />
					</Col>
				))}
			</Row>
		</Container>
	</section>
);

export default Skills;
