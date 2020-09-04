import React from 'react';
import styles from './SocialNetwork.module.css';

// import image assets
import github from '../../../assets/images/github-about.png';
import instagram from '../../../assets/images/instagram-about.png';
import linkedIn from '../../../assets/images/linkedin-about.png';
import SocialNetworkIcon from '../../SocialNetworkIcon/SocialNetworkIcon';

const socialNetworkIcons = [
	{
		link: 'https://github.com/yanchen01',
		img: github,
		alt: 'github-about'
	},
	{
		link: 'https://www.instagram.com/cyyy_6666/',
		img: instagram,
		alt: 'instagram-about'
	},
	{
		link: 'https://www.linkedin.com/in/ychen2000/',
		img: linkedIn,
		alt: 'linkedIn-about'
	}
];

const SocialNetwork = () => (
	<div className={styles.AppIcons}>
		{socialNetworkIcons.map((icon) => (
			<SocialNetworkIcon key={icon.alt} link={icon.link} img={icon.img} alt={icon.alt} />
		))}
	</div>
);

export default SocialNetwork;
