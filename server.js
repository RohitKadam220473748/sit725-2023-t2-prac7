const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const uri = "mongodb+srv://rohitkadam:rohitkd@cluster0.qkww0xj.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let collection;

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Congrats now you are Connected to MongoDB!");

        const db = client.db("Cluster0");
        collection = db.collection("Cats");
        console.log(collection); 
    } catch (err) {
        console.error(err);
    }
}

app.get('/', function (req, res) {
    res.render('index.html');
});

app.post('/api/cat', function (req, res) {
    let cat = req.body;
    insertCat(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'success' });
        }
    });
});

app.get('/api/cats', (req, res) => {
    getAllCats((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'success' });
        }
    });
});

function insertCat(cat, callback) {
    collection.insertOne(cat, callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

run().catch(console.dir);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
