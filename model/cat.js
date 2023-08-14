let client = require('../dbConnection');
let collection;

const db = client.db("Cluster0");
collection = db.collection("Cats");


function insertCat(cat, callback) {
    collection.insertOne(cat, callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

module.exports = { insertCat, getAllCats }