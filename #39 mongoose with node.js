
const mongoose = require('mongoose');

const main = async()=>{
   await mongoose.connect("mongodb://0.0.0.0:27017/admin");
   const ProductSchema = new mongoose.Schema({
      name:String,
      price:Number
   });
   const ProductModel = mongoose.model('aadi', ProductSchema);
   let data = new ProductModel({name:"vishkanya",price:2500});
   let result = await data.save();
   console.log(result);
}

main();












