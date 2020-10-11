//math.test.js
const { sum, subtract } = require('./math');

describe('test', () => {
	test('sum', () => {
		expect(sum(3, 7)).toBe(10);
	});

	test('subtract', () => {
		expect(subtract(10, 3)).toBe(7);
	});
});
