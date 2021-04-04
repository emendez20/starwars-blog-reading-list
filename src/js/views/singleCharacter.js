import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Row, Col } from "react-bootstrap";

export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron bg-dark text-white" style={{ opacity: 0.9 }}>
			<h1 className="display-4">{store.people[params.theid].result.properties.name}</h1>
			<img
				src={`https://starwarsimgs20210330.s3.us-east-2.amazonaws.com/${
					store.people[params.theid].result.uid
				}.jpg`}
			/>
			<p>
				Description
				{store.people[params.theid].result.description}
			</p>
			<hr className="my-4" />
			<Row>
				<Col>
					<p>
						Height:
						<br /> {store.people[params.theid].result.properties.height}
					</p>
				</Col>

				<Col>
					<p>
						Mass:
						<br /> {store.people[params.theid].result.properties.mass}
					</p>
				</Col>
				<Col>
					<p>
						Hair Color:
						<br /> {store.people[params.theid].result.properties.hair_color}
					</p>
				</Col>
				<Col>
					<p>
						Skin Color:
						<br /> {store.people[params.theid].result.properties.skin_color}
					</p>
				</Col>
				<Col>
					<p>
						Eye Color:
						<br /> {store.people[params.theid].result.properties.eye_color}
					</p>
				</Col>
				<Col>
					<p>
						Birth Year:
						<br /> {store.people[params.theid].result.properties.birth_year}
					</p>
				</Col>
				<Col>
					<p>
						Gender:
						<br /> {store.people[params.theid].result.properties.gender}
					</p>
				</Col>
			</Row>
			<hr className="my-4" />
			<Link to="/characters">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back to Characters
				</span>
			</Link>
		</div>
	);
};

SingleCharacter.propTypes = {
	match: PropTypes.object
};
