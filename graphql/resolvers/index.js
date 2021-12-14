const authResolver = require('./auth');
const loansResolver = require('./loans');

const rootResolver = {
	...loansResolver,
	...authResolver
};

module.exports = rootResolver;