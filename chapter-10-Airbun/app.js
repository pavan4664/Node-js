const express=require('express');

const app=express();
app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});


app.use(express.urlencoded());


app.get("/",(req,res,next)=>{
  
  res.send(`<h1>welcomr to airbun</h1>
    <a href="/add-home">Add home</a>`);
  
});


app.get("/add-home",(req,res,next)=>{
  
  res.send(`<h1>Rgister your self</h1>
              <form action="/add-home" method="POST">
              <input type="text" name="housename" placeholder="enter the number of house"/>
              <input type="submit"/>
               </form>`);
  
})

app.post("/add-home",(req,res,next)=>{
  console.log(req.body);
  
  res.send(`<h1>Home register successfully</h1>
              <a href="/">Go Home Again</a>`);
  
})


const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server is running on adress http://localhost:${PORT}`);
});