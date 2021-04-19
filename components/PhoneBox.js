import React from "react";

function PhoneBox({ title, para, smallPara }) {
	return (
		<div className="phoneBox">
			<h2 className="phoneBox-title">{title}</h2>
			<p className="phoneBox-para">{para}</p>
			<a className="checkoutBtn ">
				Check it out <i className="fas fa-chevron-right ms-2" style={{
                    fontSize:"14px"
                }}></i>
			</a>
			<p className="smallPara">{smallPara}</p>
		</div>
	);
}

export default PhoneBox;
