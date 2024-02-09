// this have three files: index.js:




const dbConnect= require('./mongodb');

dbConnect().then((resp)=>{
resp.find({name:'nord'}).toArray().then((data)=>{
console.log(data)
})
})

const main=async ()=>{
   let data = await dbConnect();
   data = await data.find({name:'nord'}).toArray();
   console.log(data)
}

main()


// insert.js : 
// this is the code to insert only one object: 
// const dbConnect = require('./mongodb');
// const insert =async()=>{
//   const db = await dbConnect();
//   const result = await db.insertOne(
//     {name:'note 5',brand:'vivo', price:320,email:'wow@gmail.com'}
//   );
  
//  console.log(result)
//   }
//   insert();







const dbConnect = require('./mongodb');
const insert = async()=>{
  const db = await dbConnect();
  const result = await db.insertMany(
    [
      {name:'ravi', brand:'micromax', price:3400, email:'digitalindia@gmail.com'},
      {name:'vikas', brand:'vivobook', price:3000, email:'brandedmanus@gmail.com'},
      {name:'raju', brand:'gavthi', price: 4000, email: 'bairathi@gmail.com'}
    ]
  );
  if(result.acknowledged)
  {
    console.log("data inserted")
  }
}

insert();



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
