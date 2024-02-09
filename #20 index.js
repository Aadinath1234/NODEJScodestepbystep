const express = require('express');
const app = express();

app.get("", (req, res) => {
    res.send(`<h1> this is the home page </h1><a href="/about">Go to About page </a> `)
});


app.get("/about", (req, res) => {
    res.send(`
    <input type="text" placeholder="username" value="${req.query.name}" /> 
    <button> Click here </button> 
    <a href="/" > Go to Home page </a> 
    
    `);
})

app.get("/help", (req, res) => {
    res.send([
        {
            name: 'ravi',
            email: 'ravi@wadegaon'


        },
        {
            name: "kishan",
            email: 'balkiishan.com'
        }






    ]






    );
})
app.listen(5000)