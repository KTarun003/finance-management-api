const { MongoClient } = require("mongodb");
const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString);
let database;
let data;

async function getConnection(){
	await client.connect();
	database = client.db('finance');
}

module.exports = {
	getAll: async (collectionName) => {
		try {
			await getConnection();
			const collection = database.collection(collectionName);
			data = await collection.find().toArray();
			return data;
		}
		catch (err){
			console.log(err);
			throw err;
		}
		finally {
			// Ensures that the client will close when you finish/error
			await client.close();
		}
	},
	getOne: async (collectionName, query) => {
		try {
			await getConnection();
			const collection = database.collection(collectionName);
			data = await collection.find(query).toArray();
			return data;
		}
		catch (err){
			console.log(err);
			throw err;
		}
		finally {
			// Ensures that the client will close when you finish/error
			await client.close();
		}
	}
}