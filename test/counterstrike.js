/* global describe it */
const CounterStrike = require('../src');
const assert = require('assert');

describe('counterstrike tests', () => {
	const cs = new CounterStrike();
	it('should fetch the correct player information', async() => {
		const device = await cs.getPlayer('device');
		assert.equal(device.title, 'Device');
		assert.equal(device.pageid, 55424);
	});
});
