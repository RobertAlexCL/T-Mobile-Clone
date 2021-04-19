import React from "react";
import Iphone12 from "../images/iphone12.png";

function Iphone12Page() {
	return (
		<div className="row">
			<div className="col-md-6">
				<div className="iphone12A text-center">
					<h2>Get an iPhone 12 on us with every plan.</h2>
					<p className="iphone12APara">
						Get up to $830 off iPhone 12, iPhone 12 Pro, or iPhone 12 Pro Max via 24
						monthly bill credits when you activate a line and trade in an eligible
						device.
					</p>
					<div>
						<a className="checkoutBtn shopNowBtn me-3">
							Shop now
							<i
								className="fas fa-chevron-right ms-2"
								style={{
									fontSize: "14px",
								}}
							></i>
						</a>
						<a className="checkoutBtn shopNowBtn ms-3">
							<i
								class="fas fa-mobile-alt m-2"
								style={{
									fontSize: "15px",
								}}
							></i>
							Call 1-800-T-MOBILE
						</a>
					</div>
					<img className="iphoneImg" src={Iphone12} alt="iphone mobile" />
					<p style={{ fontSize: "11px" }}>
						<strong>
							If you cancel wireless service, credits may stop & remaining balance on
							required finance agreement may be due. For well-qualified customers;
							plus tax. See full terms
						</strong>
					</p>
				</div>
			</div>
			<div className="col-md-6">
				<div className="iphone12B text-center">
					<h4>NOW AVAILABLE</h4>
					<h2>Get $10/month off YouTube TV.</h2>
					<p className="iphone12B-para">
						Enjoy monthly savings for as long as you’re with T-Mobile. Plus,
						experience great benefits, like 85+ top channels of entertainment, news,
						and live sports on your favorite devices.
					</p>
					<a className="checkoutBtn me-3">
						Check it out
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

export default Iphone12Page;
