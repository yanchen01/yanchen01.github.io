import React from 'react';
import styles from './FooterSocialNetworks.module.css';

// import image assets
import github from '../../../assets/images/github-footer.png';
import instagram from '../../../assets/images/instagram-footer.png';
import linkedIn from '../../../assets/images/linkedin-footer.png';
import SocialNetworkIcon from '../../SocialNetworkIcon/SocialNetworkIcon';

const socialNetworkIcons = [
	{
		link: 'https://github.com/yanchen01',
		img: github,
		alt: 'github-footer'
	},
	{
		link: 'https://www.instagram.com/cyyy_6666/',
		img: instagram,
		alt: 'instagram-footer'
	},
	{
		link: 'https://www.linkedin.com/in/ychen2000/',
		img: linkedIn,
		alt: 'linkedIn-footer'
	}
];

const FooterSocialNetworks = () => (
	<div className="footerSocialNetworks">
	<div className={styles.AppIcons}>
		{socialNetworkIcons.map((icon) => (
			<SocialNetworkIcon key={icon.alt} link={icon.link} img={icon.img} alt={icon.alt} />
		))}
	</div>
	</div>
);

export default FooterSocialNetworks;
