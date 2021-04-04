import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "./component/scrollToTop";
import space from "../img/galaxy-background.png";

import injectContext from "./store/appContext";

import { NavbarMenu } from "./component/navbarMenu";
import Home from "./views/home";
import Planets from "./views/planets";
import Characters from "./views/characters";
//import { Demo } from "./views/demo";
import { SingleCharacter } from "./views/singleCharacter";
import { SinglePlanet } from "./views/singlePlanet";
import { FooterComponent } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<Container fluid style={{ backgroundColor: "#040707" }}>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Row>
							<Col>
								<NavbarMenu className="container" />
							</Col>
						</Row>
						<Row className="space">
							<Col className="mt-5">
								<Switch>
									<Route exact path="/">
										<Home />
									</Route>
									<Route exact path="/characters">
										<Characters className="d-flex flex-row" />
									</Route>
									<Route exact path="/planets">
										<Planets />
									</Route>

									<Route exact path="/singleCharacter/:theid">
										<SingleCharacter />
									</Route>
									<Route exact path="/singlePlanet/:theid">
										<SinglePlanet />
									</Route>
									<Route>
										<h1>Not found!</h1>
									</Route>
								</Switch>
							</Col>
						</Row>
						<Row>
							<Col>
								<FooterComponent />
							</Col>
						</Row>
					</ScrollToTop>
				</BrowserRouter>
			</Container>
		</div>
	);
};

export default injectContext(Layout);
