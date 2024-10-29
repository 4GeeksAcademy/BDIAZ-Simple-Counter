import React from "react";
import Card from "./card.jsx";

//create your first component
const SecondsCounter = (props) => {
	console.log(`props: ${props}`)
	let numString = NumToString(props.seconds);
	console.log(`numString: ${numString}`)
	return (
		<div className="container-fluid bg-dark p-3 px-5 my-1"> 
			<div className="row">
				<div className="col d-flex justify-content-evenly ">
					<Card seconds = "*"/>
					{numString.map((numero, index) => (<Card key={index} number={numero}/>))}
				</div>
			</div>
		</div>
	);
};

export default SecondsCounter;


const NumToString = (num) => {
	return num.toString().split("");
}


