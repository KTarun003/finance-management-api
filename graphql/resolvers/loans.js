const repo = require('../../data/crudRepository');

module.exports = {
	loans: async () => {
		return await repo.getAll("loans");
	},
	pendingLoans: async () => {
		let query = { status: "Not Paid"};
		return await repo.getOne("loans",query);
	}
}