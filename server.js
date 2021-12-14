const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const resolvers = require('./graphql/resolvers');
const rootSchema = require('./graphql/schemas');

const app = express();
const port = 4000;

app.get('/',(req, res) => {
	res.redirect("/graphql");
});

app.use('/graphql',graphqlHTTP({
	schema: rootSchema,
	rootValue: resolvers,
	graphiql: true,
}));

app.listen(4000, () => {
	console.log(`Server listening at http://localhost:${port}`);
});