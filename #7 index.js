const http = require('http');

http.createServer((req,res)=>{
    res.write("<h1>this is server creation    </h1>");
    res.end()
}).listen(4500);
















const http = require('http');
function dataControl(req,res){
    res.write("this is the server creation process");
    res.end();
}
http.createServer(dataControl).listen(4500);




const http = require('http');

const dataControl = (req,res)=>{
    res.write("this is another way of server creation ");
    res.end()
}
http.createServer(dataControl).listen(4500);










const http = require('http');

http.createServer((req, res)=>{
    res.write("this is the way you are bahaving ");
    res.end();
}).listen(4500);
