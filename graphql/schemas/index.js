const { loadSchemaSync} = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { join } = require('path');

const rootSchema = loadSchemaSync(join(__dirname, './Schema.graphql'), {
	loaders: [ new GraphQLFileLoader() ]
});

module.exports = rootSchema;
