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


app.put("/", async(req, resp)=>{
       let data = await dbConnect();
       let result = data.updateOne(
        // {name: "mannu babe"},
        // {$set:{price:1200}}
         //{name:"mannu babe"},
         //{$set: req.body}

        {name:req.body.name},
        {$set:req.body}

       )
       resp.send({result:'update'})
})






//to send the data with the parameter form using postman : 
// app.put("/:name", async(req, resp)=>{
//     let data = await dbConnect();
//     let result = data.updateOne(
//         {name: req.params.name},
//         {$set:req.body}
//     )
//     resp.send({result:"update"})
// })

app.listen(5000);