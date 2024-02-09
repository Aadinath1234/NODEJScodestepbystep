const express = require("express");
const con = require('./config');
const app = express();


app.get("/", (req, resp)=>{
    con.query("select * from users",(err, result)=>{
        if(err){
            resp.send("error in api")
        }
        else{
            resp.send(result)
        }
    })
})



app.post("/", (req, resp)=>{
    const data = {name:"bhasker", age:'3030',email:"bhasker@gmail.com"};
    con.query('INSERT INTO users SET?', data, (error, result,fields)=>{
        if(error) error;
        resp.send(result)
    })
});


app.listen(5000)