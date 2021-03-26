import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/star-wars-logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark" style={{ backgroundColor: "#040707" }}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={rigoImage} style={{ width: 100 }} />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-secondary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
