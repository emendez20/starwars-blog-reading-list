import React, { useContext, ReactAutocomplete } from "react";
import { Link, Route } from "react-router-dom";
import swlogo from "../../img/star-wars-logo.png";
import { Navbar, Nav, Image, SplitButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);

	return (
		<Navbar
			className="container-fluid d-flex justify-content-around"
			variant="dark"
			style={{ backgroundColor: "#040707" }}>
			<Nav className="d-flex">
				<Navbar.Brand>
					<Link to="/">
						<Image src={swlogo} style={{ width: 100 }} alt="Star Wars" />
					</Link>
				</Navbar.Brand>
			</Nav>
			<Nav className="d-flex">
				<Nav.Item>
					<Link className="nav-link" to="/">
						Home
					</Link>
				</Nav.Item>
				<Nav.Item>
					<Link className="nav-link" to="/characters">
						Characters
					</Link>
				</Nav.Item>
				<Nav.Item>
					<Link className="nav-link" to="/planets">
						Planets
					</Link>
				</Nav.Item>
				<SplitButton
					variant="dark"
					id="dropdown-basic-button"
					title={`Favorites ${store.favoritePeople.length + store.favoritePlanets.length}`}>
					CHARACTERS:
					{store.favoritePeople.length > 0
						? store.favoritePeople.map((item, index) => {
								return (
									<Dropdown.Item key={index}>
										<Link to={"/singleCharacter/" + item.position} className="text-decoration-none">
											{item.name + " "}
										</Link>
										<i
											onClick={() => {
												actions.deleteFavoritePeople(index);
											}}
											className="fas fa-trash"
										/>
									</Dropdown.Item>
								);
						  })
						: "  (Empty)"}
					<Dropdown.Divider />
					PLANETS:
					{store.favoritePlanets.length > 0
						? store.favoritePlanets.map((item, index) => {
								return (
									<Dropdown.Item key={index}>
										<Link to={"/singlePlanet/" + item.position} className="text-decoration-none">
											{item.name + " "}
										</Link>
										<i
											onClick={() => {
												actions.deleteFavoritePlanet(index);
											}}
											className="fas fa-trash"
										/>
									</Dropdown.Item>
								);
						  })
						: "  (Empty)"}
				</SplitButton>
			</Nav>
		</Navbar>
	);
};
