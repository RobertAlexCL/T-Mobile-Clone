import React from "react";

function HighSpeedInternet() {
	return (
		<div className="high-speed-internet">
			<div className="text-center">
				<h2 className="high-para">
					We’re bringing high-speed home internet and 5G to small towns across
					America.
				</h2>
				<div className="text-center high-link-btn">
					<a className="checkoutBtn highspeed-checkoutBtn ">
					Find out more
						<i
							className="fas fa-chevron-right ms-2"
							style={{
								fontSize: "14px",
							}}
						></i>
					</a>
					<a className="checkoutBtn highspeed-checkoutBtn ">
					Watch the livestream
						<i
							className="fas fa-chevron-right ms-2"
							style={{
								fontSize: "14px",
							}}
						></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default HighSpeedInternet;
