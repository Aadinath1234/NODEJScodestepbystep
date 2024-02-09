// const mongoose = require('mongoose');
// mongoose.connect("mongodb://0.0.0.0:27017/youtube");

const mysql = require("mysql");
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"test"
});

con.connect((err)=>{
    if(err){
        console.log("error in connection")
    }
});
module.exports = con;