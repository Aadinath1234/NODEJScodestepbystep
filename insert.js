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