//index.js

const express = require('express');
require("./config");
const Product = require('./product');
const app = express();

app.use(express.json());
app.post("/create", async (req, resp)=>{
   let data = new Product(req.body);
   const result = await data.save();
   resp.send(result);
});


app.get("/list", async (req, resp)=>{
   let data = await Product.find();
   resp.send(data);
})

app.delete("/delete/:_id", async(req, resp)=>{
   console.log(req.params)
   let data = await Product.deleteOne(req.params);
   resp.send(data);
})

app.put("/update/:_id", async (req, resp)=>{
   console.log(req.params)
   let data = await Product.updateOne(
      req.params,
      {$set: req.body}
   );
   resp.send(data);
})

app.listen(5000)


// product.js:
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    email:String,
});

module.exports = mongoose.model('products', productSchema);



// config.js:
const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/youtube");