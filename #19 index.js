const express = require('express');
const app = express();

app.get('', (req, res)=>{
    res.send('hello , this is home page');
});

app.get('/about',(req, res)=>{
    console.log("data send by the browser =>> ", req.query.name)
    res.send("this is the about page : "+ req.query.name)
})

app.listen(5000);