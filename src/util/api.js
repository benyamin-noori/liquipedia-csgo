const request = require('request-promise-native');
const BASE_URL = require('./urls').BASE_URL;

const makeApiCall = (page, action, format, userAgent) => {
	action = action || 'parse';
	format = format || 'json';
	userAgent = userAgent || 'liquipedia-csgo';
	const apiPath = `${BASE_URL}?page=${page}&action=${action}&format=${format}`;
	const headers = {
		'Accept-Encoding': 'gzip',
		'User-Agent' : userAgent
	};

	return request.get({
		url: apiPath,
		headers,
		gzip: true
	}).then(response => {
		return JSON.parse(response).parse;
	}).catch(err => {
		throw new Error(`An error occured while processing the request: ${err}`);
	});
};

module.exports = {
	makeApiCall
};
