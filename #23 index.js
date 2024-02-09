// index.js code :
const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, 'crud');
// app.use(express.static(publicPath));

app.set('view engine','ejs');

app.get('',(_, resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})


app.get('/profile', (_,resp)=>{
    const user = {
        name:'ravi banait',
        email: 'ravi@gmail.com',
        city:'bhopal'
    }
    resp.render('profile',{user});
})

app.get('/aboutme',(_, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/help',(_, resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})

app.get('*',(_, resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})






app.listen(5000);



// profile.ejs file in the views folder : 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Page </title>
</head>
<body>
    <h1>Welcome <%= user.name %></h1>
    <h2>Email: <%=user.email %></h2>
    <h3>City : <%=user.city %></h3>
    
</body>
</html>