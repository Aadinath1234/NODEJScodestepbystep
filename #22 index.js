//index.js file : 
const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, 'crud');
// app.use(express.static(publicPath));
app.get('',(_, resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
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



// in crud folder : index.html code: 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>this is the home page </title>
    <style>
       h1{
        color: red;
       }



    </style>
</head>
<body>

    <h1>
        this is the home page 
    </h1>
    
</body>
</html>




{/* in crud folder : help.html file  */}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Help Page  </title>
     <style>
         h1{
            color: red;
         }



     </style>

</head>
<body>

    <h1>This is the help page </h1>
    
</body>
</html>


{/* in crud folder : about.html  */}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About page </title>
    <style>

       h1{
        color: red;
       }

    </style>
</head>
<body>

    <h1>This is the About page </h1>
    
</body>
</html>



//in crud folder : pagenotFound.html:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pagenotFound</title>
</head>
<body>

    <h1>This is the 404 pagenot found page </h1>
    
</body>
</html>






