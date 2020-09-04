import React from 'react';

import styles from './SocialNetworkIcon.module.css';

const SocialNetworkIcon = (props) => (
	<div className={styles.Icon}>
		<a href={props.link} target="_blank" rel="noopener noreferrer">
			<img src={props.img} alt={props.alt} />
		</a>
	</div>
);

export default SocialNetworkIcon;
