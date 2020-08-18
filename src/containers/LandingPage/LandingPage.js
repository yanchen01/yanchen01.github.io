import React from 'react';
import NavBar from '../../components/UI/Navigation/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import Portfolio from '../../components/Portfolio/Portfolio';
import Footer from '../../components/Footer/Footer';

const LandingPage = () => {
	return (
		<div>
			<a name="top"></a>
			<NavBar />
			<Hero />
			<Skills />
			<Portfolio />
			<Footer />
		</div>
	);
};

export default LandingPage;
