import React from "react";
import winnerImage from "../images/5GLeader.png";

function Winner() {
	return (
		<div className="row container-fluid winnerPage">
			<div className="col-md-6">
				<div className="ms-5 winnerPageA">
					<h2>T-Mobile is the leader in 5G.</h2>
					<p>We're now America's largest and fastest 5G network.</p>
					<a className="checkoutBtn ">
						Find out more
						<i
							className="fas fa-chevron-right ms-2"
							style={{
								fontSize: "14px",
							}}
						></i>
					</a>
					<div>
						<p className="smallPara leader-smallPara">
							Opensignal Awards—USA: 5G User Experience Report January 2021, based on
							independent analysis of average speeds from mobile measurements
							recorded during the period September 16–December 14, 2020 © 2021
							Opensignal Limited. Capable device required; coverage not available in
							some areas. See full terms
						</p>
					</div>
				</div>
			</div>
			<div className="col-md-6">
				<img className="winnerImg" src={winnerImage} alt="winner leader" />
			</div>
		</div>
	);
}

export default Winner;
