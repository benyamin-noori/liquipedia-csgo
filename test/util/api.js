/* global describe it */
const assert = require('assert');
const proxyquire = require('proxyquire');

describe('counterstrike tests', () => {
	const api = proxyquire('../../src/util/api', {
		'request-promise-native': {
			'get': () => {
				return new Promise((resolve, reject) => {
					reject(new Error('Error occured while making GET request'));
				});
			}
		}
	});
	it('should throw an error if request.get fails', async() => {
		let error = false;
		await api.makeApiCall('device')
			.catch(() => {
				error = true;
			});
		assert.equal(error, true);
	});
});
