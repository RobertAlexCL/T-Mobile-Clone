import React from "react";

function PhoneListTitle() {
	return (
		<div className="phoneList">
			<h1 className="phoneList-title">Shop our best-selling Android phones.</h1>
			<a className="checkoutBtn shopNowBtn me-3">
				See all phones
				<i
					className="fas fa-chevron-right ms-2"
					style={{
						fontSize: "14px",
					}}
				></i>
			</a>
		</div>
	);
}

export default PhoneListTitle;
