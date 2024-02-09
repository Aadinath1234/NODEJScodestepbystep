
const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/admin');
const productSchema = new mongoose.Schema({
   name: String,
   price: Number,
   brand: String,
   category: String 
});

const saveInDB = async () => {
   const Product = mongoose.model('aadi', productSchema);
   let data = new Product({
       name: "micromax",
       price:3000,
       brand:"wive",
       category:"mobile"
   });
   const result = await data.save();
   console.log(result);
}

// saveInDB();


const updateInDB = async () =>{
   const Product = mongoose.model('aadi', productSchema);
   let data = await Product.updateOne(
      {name:"micromax"},
      {

         $set: {price:50, name:'i phone'}
      }
   )
   console.log(data)
}

// updateInDB();

const deleteInDB = async () =>{
   const Product = mongoose.model('aadi', productSchema);
   let data = await Product.deleteOne({name:'i phone'})
   console.log(data); 
}

// deleteInDB();

const findInDB = async ()=>{
   const Product = mongoose.model('aadi', productSchema);
   let data = await Product.find({price:"2500"})
   console.log(data);
}

findInDB();









