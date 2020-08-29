import React, { useState, useEffect } from 'react';
import NavBar from '../../components/UI/Navigation/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import Portfolio from '../../components/Portfolio/Portfolio';
import Footer from '../../components/Footer/Footer';

const LandingPage = () => {
	const [ loading, setLoading ] = useState(true);

	const sleep = (milliseconds) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	const animateLoading = async (milliseconds = 2000) => {
		await sleep(milliseconds);
		setLoading(false);
	};

	useEffect(() => {
		animateLoading(2000);
	});

	return (
		<div>
			{loading ? (
				<div className="loader loader-curtain is-active" />
			) : (
				<React.Fragment>
					<NavBar />
					<Hero />
					<Skills />
					<Portfolio />
					<Footer />
				</React.Fragment>
			)}
		</div>
	);
};

export default LandingPage;
