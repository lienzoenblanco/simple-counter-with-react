import propTypes from "prop-types";
import React from "react";

const Counter = (props) => {
	return (
		<div className="simpleCounter">
			<div className="clock">
				<i className="fas fa-clock"></i>
				<div className="six">{props.digitSix % 10}</div>
				<div className="five">{props.digitFive % 10}</div>
				<div className="four">{props.digitFour % 10}</div>
				<div className="three">{props.digitThree % 10}</div>
				<div className="two">{props.digitTwo % 10}</div>
				<div className="one">{props.digitOne % 10}</div>
			</div>
		</div>
	);
};

Counter.propTypes = {
	digitSix: propTypes.number,
	digitFive: propTypes.number,
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number,
};

export default Counter;
