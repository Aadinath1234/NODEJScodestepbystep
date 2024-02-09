// index.js:
const express = require("express");
const con = require('./config');
const app = express();


app.get("/", (req, resp)=>{
    con.query("select * from aadi",(err, result)=>{
        if(err){
            resp.send("error in api")
        }
        else{
            resp.send(result)
        }
    })
})

app.listen(5000)

//config.js:


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