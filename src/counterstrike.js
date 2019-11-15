const api = require('./util/api');
class CounterStrike {
	constructor() {
	}

	getPlayer(playerName) {
		return api.makeApiCall(playerName)
			.then(playerData => {
				return playerData;
			});
	}
}

module.exports = CounterStrike;
