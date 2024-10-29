import React from "react";
import Card from "./card.jsx";

//create your first component
const SecondsCounter = (props) => {
	return (
		<div class="container-fluid bg-dark p-3 px-5 my-1"> 
			<div className="row">
				<div className="col d-flex justify-content-evenly ">
                    <Card seconds = "0"/>
                    <Card seconds = "0"/>
					<Card seconds = "0"/>
                    <Card seconds = "0"/>
                    <Card seconds = "0"/>
					<Card seconds = "0"/>
                    <Card seconds = "0"/>
				</div>
			</div>
		</div>
	);
};

export default SecondsCounter;
