import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card, Button, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "../../styles/home.scss";

// import { Demo } from "./demo";

const Characters = () => {
	const { store, actions } = useContext(Context);

	return store.loadedPeople ? (
		<div className="container">
			<div className="d-flex justify-content-between flex-row-reverse">
				<Link to="/">
					<span className="btn btn-dark btn-lg ml-3" href="#" role="button">
						Back home
					</span>
				</Link>

				<h2 className="textCenter">CHARACTERS</h2>
			</div>

			<div className="dFlex scroll row rowCols3" style={{ maxWidth: "100%" }}>
				{store.people.map((item, index) => (
					<Card
						style={{ minWidth: "150px", maxWidth: "286px", backgroundColor: "#040707" }}
						key={item.result.uid}
						className="text-white m-3">
						<Card.Img
							variant="top"
							src={`https://starwarsimgs20210330.s3.us-east-2.amazonaws.com/${item.result.uid}.jpg`}
						/>
						<Card.Body>
							<Card.Title>{store.loadedPeople ? item.result.properties.name : "Loading"}</Card.Title>
							<Card.Text>
								Gender: {store.loadedPeople ? item.result.properties.gender : "Loading"}
								<br />
								Height: {store.loadedPeople ? item.result.properties.height : "Loading"}
								<br />
								Mass: {store.loadedPeople ? item.result.properties.mass : "Loading"}
							</Card.Text>
							<div className="row justify-content-between">
								<Link to={"/singleCharacter/" + index}>
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
												actions.setFavoritePeople(item.result.uid, index);
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
		<div className="container mt-5" style={{ width: "100px" }}>
			<div className="lds-ripple ml-3">
				<div />
				<div />
			</div>

			<h1 className="text-white mr-3">Loading...</h1>
		</div>
	);
};
export default Characters;
