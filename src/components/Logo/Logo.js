import React from 'react';
import memojiLogo from '../../assets/images/memoji.png';
import styles from './Logo.module.css';

const Logo = () => (
	<div className={styles.Logo}>
		<img src={memojiLogo} alt="Memoji" />
	</div>
);

export default Logo;
