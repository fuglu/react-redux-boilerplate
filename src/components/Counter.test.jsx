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

		expect(counter.find('button').length).toBe(1);
	});
	describe('<button>', () => {
		it('should display the counter', () => {
			const counter = shallow(
				<Counter
					counter={42}
					increment={() => {}}
				/>
			);

			expect(counter.find('button').text()).toBe('42');
		});
		it('should call the increment action on click', () => {
			const spy = jest.fn();
			const counter = shallow(
				<Counter
					counter={0}
					increment={spy}
				/>
			);

			counter.find('button').simulate('click');
			expect(spy).toBeCalled();
		});
	});
});
