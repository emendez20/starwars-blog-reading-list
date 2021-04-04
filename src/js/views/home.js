import React from "react";
import space from "../../img/galaxy-background.png";
import charsrep from "../../img/darth_vader.png";
import planetrep from "../../img/planetrep.png";
import "../../styles/home.scss";
import { Planets } from "./characters.js";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import "../../styles/index.scss";

const Home = () => {
	return (
		<div className="container d-flex justify-content-center">
			<h2>HOME</h2>
			<Link to="/characters">
				<Image src={charsrep} style={{ width: 500 }} alt="Star Wars" className="img-fluid imgf" />
			</Link>
			<Link to="/planets">
				<Image src={planetrep} style={{ width: 500 }} alt="Star Wars" className="img-fluid mt-5 imgf" />
			</Link>
		</div>
	);
};
export default Home;
