import React from "react";
import BrandLogo from "../logo.svg";

function MainNavbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-none">
				<div className="container-fluid">
					<img className="brand-logo me-4" src={BrandLogo} alt="brand-logo" />
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Plans
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<a className="dropdown-item">Action</a>
									</li>
									<li>
										<a className="dropdown-item">Another action</a>
									</li>
									<li>
										<a className="dropdown-item">Something else here</a>
									</li>
								</ul>
							</li>

							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Phones & Devices
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<a className="dropdown-item">Action</a>
									</li>
									<li>
										<a className="dropdown-item">Another action</a>
									</li>
									<li>
										<a className="dropdown-item">Something else here</a>
									</li>
								</ul>
							</li>

							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Deals
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<a className="dropdown-item">Action</a>
									</li>
									<li>
										<a className="dropdown-item">Another action</a>
									</li>
									<li>
										<a className="dropdown-item">Something else here</a>
									</li>
								</ul>
							</li>

							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									5G Coverage
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<a className="dropdown-item">Action</a>
									</li>
									<li>
										<a className="dropdown-item">Another action</a>
									</li>
									<li>
										<a className="dropdown-item">Something else here</a>
									</li>
								</ul>
							</li>

							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Plans
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<a className="dropdown-item">Action</a>
									</li>
									<li>
										<a className="dropdown-item">Another action</a>
									</li>
									<li>
										<a className="dropdown-item">Something else here</a>
									</li>
								</ul>
							</li>

							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Why T-mobile
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<a className="dropdown-item">Action</a>
									</li>
									<li>
										<a className="dropdown-item">Another action</a>
									</li>
									<li>
										<a className="dropdown-item">Something else here</a>
									</li>
								</ul>
							</li>

							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Why T-mobile
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<a className="dropdown-item">Action</a>
									</li>
									<li>
										<a className="dropdown-item">Another action</a>
									</li>
									<li>
										<a className="dropdown-item">Something else here</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Why T-mobile
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<a className="dropdown-item">Action</a>
									</li>
									<li>
										<a className="dropdown-item">Another action</a>
									</li>
									<li>
										<a className="dropdown-item">Something else here</a>
									</li>
								</ul>
							</li>
						</ul>
						<button className="myBtn btn py-3 px-5">
							My account
							<i
								className="fas fa-chevron-down ms-2"
								style={{
									fontSize: "14px",
								}}
							></i>
						</button>
					</div>
				</div>
			</nav>
			<div class="alert alertShipping alert-danger text-center" role="alert">
				Free 2-day shipping & waived activation costs with online activation. Applied
				at checkout.
			</div>
		</div>
	);
}

export default MainNavbar;
