const express = require("express");
const con = require('./config');
const app = express();

app.use(express.json());


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

// app.put("/",(req, resp)=>{
//     const data = ["22", 'ketan diwan',"23","ketan@420gmail.com","15"];
//     con.query("UPDATE users SET id=?, name=?, age=?, email=?  where id=?", data,(error, result, fields) => {
//         if(error) throw error;
//         resp.send(result)

//     });
// })




app.put("/:id",(req, resp)=>{
    const data = [req.body.id, req.body.name, req.body.age, req.body.email,req.params.id];
    con.query("UPDATE users SET id=?, name = ?, age=?, email=? where id = ?",
    data, (error, results, fields)=>{
        if(error) throw error;
        resp.send(results)
    }
    
    )
})



app.listen(5000)