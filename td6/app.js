const express = require('express');

const app = express();

const cors = require('cors'); // Middleware de logging


const DABASE_NAME = 'M2WEB'
const collection  = 'contacts'
const MONGO_URL = 'mongodb://localhost:27017';

const MongoClient = require('mongodb').MongoClient;

async function printAllContacts(collection) {
    const results = await collection.find().toArray();
    for (const result of results) {
        console.log(`Contact : ${result.name} is ${result.age}`);
    }
}

(async function () {
    try {
        const client = await MongoClient.connect(MONGO_URL, {
            useNewUrlParser: true
        });
        const db = client.db(DABASE_NAME);
        const contacts = db.collection(collection);
        printAllContacts(contacts);
        client.close();
    } catch (e) {
        console.error(e)
    }
})()


app.get('/', function(req, res) {
    res.send('Hello !');
});

app.get('/home', function(req, res) {
  res.send('Maison :-)');
});

app.get('/user/:uid', function(req, res) {
  res.send('Bonjour utilisateur ' + req.params.uid);
});

app.use(function(req, res, next){
  res.status(404).send('Page introuvable !');
});

app.listen(8080, function() {
  console.log('Example app listening on port 8080!');
});

app.use(cors('combined'));