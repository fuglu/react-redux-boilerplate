import counterReducer, { increment } from './counter';

describe('counter', () => {
	it('has an initial state', () => {
		const initialState = counterReducer(undefined, {});

		expect(initialState).to.be.a('number');
	});
	describe('increment action', () => {
		it('increments the counter', () => {
			const initialState = counterReducer(undefined, {});

			const incrementedState = counterReducer(initialState, increment());

			expect(incrementedState).to.equal(initialState + 1);
		});
	});
});
