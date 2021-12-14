const authResolver = require('./auth');
const loansResolver = require('./loans');
const dashboardResolver = require('./dashboard');
const recoveriesResolver = require('./recoveries');

const rootResolver = {
	...loansResolver,
	...recoveriesResolver,
	...dashboardResolver,
	...authResolver
};

module.exports = rootResolver;