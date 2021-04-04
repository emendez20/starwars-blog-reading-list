import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import planetrep from "../../img/planetrep.png";
import { Row, Col } from "react-bootstrap";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron bg-dark text-white" style={{ opacity: 0.9 }}>
			<h1 className="display-4">{store.planets[params.theid].result.properties.name}</h1>
			<img src={planetrep} />
			<Row>
				<Col>
					<p>
						Diameter:
						<br /> {store.planets[params.theid].result.properties.diameter}
					</p>
				</Col>

				<Col>
					<p>
						Rotation Period:
						<br /> {store.planets[params.theid].result.properties.rotation_period}
					</p>
				</Col>
				<Col>
					<p>
						Orbital Period:
						<br /> {store.planets[params.theid].result.properties.orbital_period}
					</p>
				</Col>
				<Col>
					<p>
						Gravity:
						<br /> {store.planets[params.theid].result.properties.gravity}
					</p>
				</Col>
				<Col>
					<p>
						Population:
						<br /> {store.planets[params.theid].result.properties.population}
					</p>
				</Col>
				<Col>
					<p>
						Climate:
						<br /> {store.planets[params.theid].result.properties.climate}
					</p>
				</Col>
				<Col>
					<p>
						Terrain:
						<br /> {store.planets[params.theid].result.properties.terrain}
					</p>
				</Col>
				<Col>
					<p>
						Surface Water:
						<br /> {store.planets[params.theid].result.properties.surface_water}
					</p>
				</Col>
			</Row>
			<hr className="my-4" />

			<Link to="/planets">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back to Planets
				</span>
			</Link>
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};
