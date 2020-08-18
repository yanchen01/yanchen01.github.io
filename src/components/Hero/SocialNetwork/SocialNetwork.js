import React from 'react';
import styles from './SocialNetwork.module.css';

// import image assets
import github from '../../../assets/images/github-about.png';
import instagram from '../../../assets/images/instagram-about.png';
import linkedIn from '../../../assets/images/linkedin-about.png';

const SocialNetwork = () => (
	<div className={styles.AppIcons}>
		<a href="https://github.com/yanchen01" target="_blank" rel="noopener noreferrer">
			<img src={github} alt="github-about" />
		</a>
		<a href="https://www.instagram.com/cyyy_6666/" target="_blank" rel="noopener noreferrer">
			<img src={instagram} alt="instagram-about" />
		</a>
		<a href="https://www.linkedin.com/in/ychen2000/" target="_blank" rel="noopener noreferrer">
			<img src={linkedIn} alt="linkedIn-about" />
		</a>
	</div>
);

export default SocialNetwork;
