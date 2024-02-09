const {MongoClient} = require('mongodb')
const url= 'mongodb://0.0.0.0:27017';
const databaseName='admin'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('aadi');
    let data = await collection.find({}).toArray();
    console.log(data)


}

getData();