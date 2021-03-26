import React from "react";
import space from "../../img/galaxy-background.png";
import "../../styles/home.scss";
import { Card } from "../component/card.js";

export const Home = () => {
	return (
		<div className="space">
			<div className="m-3">
				<h2>Characters</h2>
			</div>
			<div className="text-center scroll d-flex flex-row m-3">
				<Card />
			</div>
		</div>
	);
};
