import counterReducer, { increment } from './counter';

describe('counter', () => {
	it('initial state is 0', () => {
		const initialState = counterReducer(undefined, {});

		expect(initialState).toBe(0);
	});
	describe('increment action', () => {
		it('increments the counter', () => {
			const initialState = counterReducer(undefined, {});

			const incrementedState = counterReducer(initialState, increment());

			expect(incrementedState).toBe(initialState + 1);
		});
	});
});
