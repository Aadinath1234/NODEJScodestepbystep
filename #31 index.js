//index.js
const dbConnect = require('./mongodb');

const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}

main();


// mongodb.js: 
const {MongoClient} = require('mongodb')
const url= 'mongodb://0.0.0.0:27017';
const databaseName='youtube'
const client= new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return db.collection('products');
    

}

module.exports = dbConnect;
