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