const repo = require('../../data/crudRepository');

module.exports = {
	recoveries: async () => {
		return await repo.getAll("recoveries");
	}
}