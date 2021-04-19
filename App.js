import React from "react";
import Navbar from "./components/Navbar";
import HighSpeedInternet from "./components/HighSpeedInternet";
import MagentaMax from "./components/MagentaMax";
import PhoneBox from "./components/PhoneBox";
import Winner from "./components/Winner";
import Iphone12Page from "./components/Iphone12Page";
import PhoneListTitle from "./components/PhoneListTitle";
import Footer from "./components/Footer";
import PhoneListBox from "./components/PhoneListBox";
import SmallFooter from "./components/SmallFooter";

import Phone1 from "./images/Phone1.png";
import Phone2 from "./images/phone2.png";
import Phone3 from "./images/phone3.png";

const App = () => {
	return (
		<div>
			<Navbar />
			<HighSpeedInternet />
			<MagentaMax />
			<div className="row myRow container-fluid">
				<div className="col-md-6">
					<PhoneBox
						title="Keep the phone you love with zero cost to switch."
						para="Break from your carrier and we’ll cover the SIM card and support costs on your eligible device. You’ll also get up to $650 via virtual prepaid card to help pay it off."
						smallPara="Qualifying credit required; card typically takes 15 days. See full terms"
					/>
				</div>
				<div className="col-md-6">
					<PhoneBox
						title="Save up to 30% every month. That’s the best value in wireless."
						para="With 3 lines on Essentials you'll save more on your plan than with AT&T or Verizon. Plus, with loads of great benefits included, savings are just the beginning."
						smallPara="Savings vs. comparable AT&T and Verizon plans with 3rd line on us. Plan features and taxes & fees may vary. See full terms"
					/>
				</div>
			</div>
			<Winner />
			<Iphone12Page />
			<PhoneListTitle />
			<div className="d-flex row_images">
				<PhoneListBox image={Phone2} brand="SAMSUNG" modal="Galaxy PARA 8" />
				<PhoneListBox image={Phone1} brand="SAMSUNG" modal="Galaxy A32 4G" />
				<PhoneListBox image={Phone3} brand="SAMSUNG" modal="Galaxy prime" />
				<PhoneListBox image={Phone2} brand="XIOMI" modal="REDMI 10 PLUS " />
				<PhoneListBox image={Phone3} brand="ONE PLUS" modal="NORD 9 PLUS" />
			</div>
			<Footer />
			<SmallFooter />
		</div>
	);
};

export default App;
