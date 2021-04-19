import React from "react";
import MainNavbar from "./MainNavbar";

function Navbar() {
	return (
		<div>
			<ul className="d-flex list-unstyled justify-content-left smallNav mb-0 pb-0">
				<li className="p-2">Wireless</li>
				<li className="p-2">Busiiness</li>
				<li className="p-2">prepaid</li>
				<li className="p-2">tv</li>
				<li className="p-2">Banking</li>
				<li className="p-2">internet</li>
			</ul>
			<MainNavbar />
		</div>
	);
}
export default Navbar;
