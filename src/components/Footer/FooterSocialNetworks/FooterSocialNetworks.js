import React from 'react';
import styles from './FooterSocialNetworks.module.css';

// import image assets
import github from '../../../assets/images/github-footer.png';
import instagram from '../../../assets/images/instagram-footer.png';
import linkedIn from '../../../assets/images/linkedin-footer.png';

const FooterSocialNetworks = () => (
	<div className="footerSocialNetworks">
		<div className={styles.AppIcons}>
			<a href="https://github.com/yanchen01" target="_blank" rel="noopener noreferrer">
				<img src={github} alt="github-footer" />
			</a>
			<a href="https://www.instagram.com/cyyy_6666/" target="_blank" rel="noopener noreferrer">
				<img src={instagram} alt="instagram-footer" />
			</a>
			<a href="https://www.linkedin.com/in/ychen2000/" target="_blank" rel="noopener noreferrer">
				<img src={linkedIn} alt="linkedIn-footer" />
			</a>
		</div>
	</div>
);

export default FooterSocialNetworks;
