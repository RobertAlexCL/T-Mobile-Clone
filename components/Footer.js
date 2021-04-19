import React from "react";
import FooterLine from "./FooterLine";

function Footer() {
	return (
		<div className="footer_main">
			<div className="footer">
				<div className="footer-title d-flex ms-3 pt-4">
					<h3>Connect with T-Mobile</h3>
					<div className="d-flex social-media">
						<i className="fab ms-4 fa-youtube"></i>
						<i className="fab ms-4 fa-instagram"></i>
						<i className="fab ms-4 fa-facebook-f"></i>
						<i className="fab ms-4 fa-twitter"></i>
					</div>
				</div>
				<div className="d-flex justify-content-around">
					<FooterLine header="Phones & Devices" />
					<FooterLine header="Phones & Devices" />
					<FooterLine header="Phones & Devices" />
					<FooterLine header="Phones & Devices" />
					<FooterLine header="Phones & Devices" />
					<FooterLine header="Phones & Devices" />
				</div>

				<hr style={{ margin: ".1rem 0" }} />
			</div>
		</div>
	);
}

export default Footer;
