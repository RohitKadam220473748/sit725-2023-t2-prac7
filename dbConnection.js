const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rohitkadam:rohitkd@cluster0.qkww0xj.mongodb.net/test?retryWrites=true&w=majority";



const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();


module.exports = client;