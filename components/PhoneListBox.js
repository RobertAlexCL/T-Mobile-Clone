import React from "react";

function PhoneListBox({ image, brand, modal }) {
	return (
		<div className="PhoneListBoxA">
			<div className="card shadow">
				<img className="card-img-top" src={image} alt="card image" />
				<div className="card-body">
					<h5>{brand}</h5>
					<h2> {modal}</h2>
				</div>
			</div>
		</div>
	);
}

export default PhoneListBox;
