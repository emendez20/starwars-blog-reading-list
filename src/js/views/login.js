import React, { useState, useEffect, useContext } from "react";
import "../../styles/login.scss";

const Login = () => {
	return (
		<div className="container">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					{/* card header */}
					<div className="card-header">
						<h3>Sign In</h3>
						<div className="d-flex justify-content-end social_icon">
							<span>
								<i className="fab fa-galactic-republic" />
							</span>
							<span>
								<i className="fab fa-jedi-order" />
							</span>
							<span>
								<i className="fab fa-old-republic" />
							</span>
						</div>
					</div>
					{/* card body */}
					<div className="card-body">
						<form>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-user" />
									</span>
								</div>
								<input type="text" className="form-control" placeholder="username" />
							</div>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-key" />
									</span>
								</div>
								<input type="password" className="form-control" placeholder="password" />
							</div>
							<div className="row align-items-center remember">
								<input type="checkbox" />
								Remember Me
							</div>
							<div className="form-group">
								<input type="submit" value="Login" className="btn float-right login_btn" />
							</div>
						</form>
					</div>
					{/* card footer */}
					<div className="card-footer">
						<div className="d-flex justify-content-center links">
							Don&apos;t have an account?
							<a href="#">Sign Up</a>
						</div>
						<div className="d-flex justify-content-center">
							<a href="#">Forgot your password?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
/* <Link to="/home">
				<Image src={charsrep} style={{ width: 500 }} alt="Star Wars" classNameName="img-fluid imgf" />
			</Link> */
