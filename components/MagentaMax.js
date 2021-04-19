import React from "react";

function MagentaMax() {
	return (
		<div className="magenta-max">
			<div className="text-center">
				<h1>MagentaMAX</h1>
				<h2>Introducing Magenta® MAX: Our best plan ever.</h2>
				<p className="magenta-para1">
					Magenta MAX is the first and only 5G smartphone plan for consumers that
					can’t slow you down based on how much data you use. Plus, get up to 4K UHD
					video streaming, 40GB of high-speed mobile hotspot data, and more. All on
					T-Mobile, the 5G leader with the nation’s largest and fastest 5G network.
				</p>
				<a className="checkoutBtn">
					Check it out{" "}
					<i
						className="fas fa-chevron-right ms-2"
						style={{
							fontSize: "14px",
						}}
					></i>{" "}
				</a>
				<div className="magenta-para2">
					<p>
						Activate up to 4K UHD streaming on capable device, or video typically
						streams at 480p. 40GB full-speed tethering. 5G coverage not available in
						some areas; capable device required. Awarded fastest by Opensignal
						Awards, USA: 5G User Experience January 2021. See full terms
					</p>
				</div>
			</div>
		</div>
	);
}

export default MagentaMax;
