//index.js:



const express = require('express')
require("./config")
const Product = require('./product');

const app = express();
app.use(express.json());
app.post("/create", async(req, resp)=>{
   let data = new Product(req.body);
   let result = await data.save();
   console.log(result);
   resp.send(result);
});
app.listen(5000);



// config.js: 
const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/youtube");



// product.js:
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    email:String,
});

module.exports = mongoose.model('products', productSchema);

