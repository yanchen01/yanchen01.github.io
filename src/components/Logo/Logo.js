import React from 'react';
import memojiLogo from '../../assets/images/logo.jpg';
import styles from './Logo.module.css';

const Logo = () => <img className={styles.Logo} src={memojiLogo} alt="Memoji" />;

export default Logo;
