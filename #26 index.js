const express = require('express');
const reqFilter = require('./app');
const app = express();
const route = express.Router();

// app.use(reqFilter);
route.use(reqFilter)
app.get('/', (res, resp)=>{
    resp.send('Welcome to home page ')
});

//this is the manual way of doing this .
// app.get('/users',reqFilter,(res,resp)=>{
//     resp.send('welcome to users page');
// })


// app.get('/about',reqFilter, (res, resp)=>{
//     resp.send('welcome to about page ')
// });

route.use(reqFilter);
route.get('/about',(req,resp)=>{
    resp.send('welcome to about page ')
});


route.get('/contact',(res,resp)=>{
    resp.send('welcome to the contact page ');
})


app.use('/', route);

app.listen(5000)