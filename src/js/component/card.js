import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import placeholderPhoto from "../../img/placeholder-photo.png";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Card = () => {
	const { store, actions } = useContext(Context);

	return store.people.map(
		(obj, index) =>
			store.loadedPeople ? (
				//console.log(obj.name + " " + index)
				<div className="text-center m-3" key={index}>
					<div className="card text-white bg-dark mb-3" style={{ width: "18rem" }}>
						<img className="card-img-top" src={placeholderPhoto} alt="Card image cap" />
						<div className="card-body" key={index} style={{ opacity: "0.75" }}>
							<h5 className="card-title">{obj.name}</h5>

							<p className="card-text" />
							<a href="#" className="btn btn-secondary">
								Learn More
							</a>
						</div>
					</div>
				</div>
			) : (
				"Loading"
			)
	);

	// return store.loadPeople ? (
	// 	//console.log(obj.name + " " + index)
	// 	<div className="text-center m-3">
	// 		<div className="card text-white bg-dark mb-3" style={{ width: "18rem" }}>
	// 			<img className="card-img-top" src={placeholderPhoto} alt="Card image cap" />
	// 			<div className="card-body" style={{ opacity: "0.75" }}>
	// 				<h5 className="card-title">{obj.name}</h5>

	// 				<p className="card-text" />
	// 				<a href="#" className="btn btn-secondary">
	// 					Learn More
	// 				</a>
	// 			</div>
	// 		</div>
	// 	</div>
	// ) : (
	// 	"Loading"
	// );
};
