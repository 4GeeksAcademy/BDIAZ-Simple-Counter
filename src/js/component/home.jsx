import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

//create your first component
const Home = () => {
	let counter = 0; 

	return (
		<SecondsCounter seconds = {counter}/>
	);
};

export default Home;
