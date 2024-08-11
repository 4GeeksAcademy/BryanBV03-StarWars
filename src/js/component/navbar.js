import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://graffica.info/wp-content/uploads/2016/08/logo-actual-star-wars.jpg" alt="logo-starwars" className="logo-SW"></img></span>
			</Link>
		</nav>
	);
};
