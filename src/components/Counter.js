import React, { PropTypes } from 'react';

const style = {
	backgroundColor: '#764abc',
	color: '#fff',
	fontSize: '2em',
	minHeight: '100px',
	minWidth: '250px',
	border: 'medium none',
};

const Counter = (props) => (
	<button
		onClick={props.increment}
		style={style}
	>
		{props.counter ? props.counter : 'Click here'}
	</button>
);
Counter.propTypes = {
	counter: PropTypes.number.isRequired,
	increment: PropTypes.func.isRequired,
};

export default Counter;
