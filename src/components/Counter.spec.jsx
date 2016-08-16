import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('<Counter>', () => {
	it('should contain a <button>', () => {
		const counter = shallow(
			<Counter
				counter={0}
				increment={() => {}}
			/>
		);

		expect(counter.find('button')).to.have.length(1);
	});
	describe('<button>', () => {
		it('should display the counter', () => {
			const counter = shallow(
				<Counter
					counter={42}
					increment={() => {}}
				/>
			);

			expect(counter.find('button').text()).to.match(/42$/);
		});
		it('should call the increment action on click', () => {
			const spy = sinon.spy();
			const counter = shallow(
				<Counter
					counter={0}
					increment={spy}
				/>
			);

			counter.find('button').simulate('click');
			expect(spy.calledOnce).to.equal(true);
		});
	});
});
