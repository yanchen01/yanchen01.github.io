import React from 'react';
import styles from './SkillCard.module.css';

const SkillCard = (props) => (
	<div className={styles.SkillCard}>
		<div className={styles.InnerCard}>
			<img src={props.source} alt={props.category}/>
			<p className={styles.Category}>{props.category}</p>
		</div>
        <ul
        >{props.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
	</div>
);

export default SkillCard;
