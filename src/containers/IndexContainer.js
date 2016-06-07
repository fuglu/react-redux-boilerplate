import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment } from '../redux/modules/counter';
import Counter from '../components/Counter';
import ReduxLogo from '../static/ReduxLogo.svg';

const style = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headline: {
		marginBottom: '10vh',
	},
	logo: {
		height: '20vh',
	},
};

const IndexContainer = (props) => (
	<div style={style.container}>
		<img
			alt={'Redux logo'}
			src={ReduxLogo}
			style={style.logo}
		/>
		<h1 style={style.headline}>
			Welcome!
		</h1>
		<Counter
			counter={props.counter}
			increment={props.increment}
		/>
	</div>
);

IndexContainer.propTypes = {
	counter: PropTypes.number.isRequired,
	increment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	counter: state.counter,

});
const mapDispatchToProps = {
	increment,

};

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
