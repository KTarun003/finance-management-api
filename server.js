const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const { buildSchema} = require('graphql');

// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
let root = {
	hello: () => {
		return 'Hello world!';
	},
};

const app = express();
const port = 4000;

app.get('/',(req, res) => {
	res.redirect("/graphql");
});

app.use('/graphql',graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}));

app.listen(4000, () => {
	console.log(`Server listening at http://localhost:${port}`);
});