import React from "react";

//create your first component
const Card = (props) => {
	return (
		<div className="card bg-dark border border-light">
            <div className="card-body d-flex justify-content-center align-items-center">
                <h1 className="card-text text-white">{props.seconds}</h1>
            </div>
        </div>
	);
};

export default Card;
