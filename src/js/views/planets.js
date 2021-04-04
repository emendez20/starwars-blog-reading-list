import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import planetrep from "../../img/planetrep.png";

const Planets = () => {
	const { store, actions } = useContext(Context);
	return store.loadedPlanets ? (
		<div className="container">
			<div className="d-flex justify-content-between flex-row-reverse">
				<Link to="/">
					<span className="btn btn-dark btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
				<h2 className="textCenter">PLANETS</h2>
			</div>
			<div className="dFlex scroll row rowCols3" style={{ maxWidth: "100%" }}>
				{store.planets.map((item, index) => (
					<Card
						style={{ minWidth: "150px", maxWidth: "286px", backgroundColor: "#040707" }}
						key={item.result.uid}
						className="text-white m-3">
						<Card.Img variant="top" src={planetrep} />
						<Card.Body>
							<Card.Title>{store.loadedPlanets ? item.result.properties.name : "Loading"}</Card.Title>
							<Card.Text>
								Diameter: {store.loadedPlanets ? item.result.properties.diameter : "Loading"}
								<br />
								Population: {store.loadedPlanets ? item.result.properties.population : "Loading"}
								<br />
								Gravity: {store.loadedPlanets ? item.result.properties.gravity : "Loading"}
							</Card.Text>
							<div className="row justify-content-between">
								<Link to={"/singlePlanet/" + index}>
									<Button className="ml-2" variant="dark">
										Details...
									</Button>
								</Link>
								<div className="mr-2">
									<Button variant="dark" type="button">
										<i
											className="fa fa-heart text-white"
											style={{ fontSize: "20px" }}
											onClick={() => {
												actions.setFavoritePlanet(item.result.uid);
											}}
										/>
									</Button>
								</div>
							</div>
						</Card.Body>
					</Card>
				))}
			</div>
		</div>
	) : (
		<div className="container mt-5" style={{ width: "100px", height: "500px" }}>
			<div className="lds-ripple ml-3 ">
				<div />
				<div />
			</div>

			<h1 className="text-white mr-3 ">Loading...</h1>
		</div>
	);
};
export default Planets;
