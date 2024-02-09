//api.js: 
const express = require('express');
const dbConnect = require('./mongodb')
const app = express();


app.use(express.json());
app.get('/', async (req, resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)
});


// app.post("/", async (req,resp)=>{
//     console.log(req.body);
//     // resp.send({name:"ravi"})
//     resp.send(req.body);
// })


app.post("/", async(req, resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result)
})

app.listen(5000);


// insert.js: 
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