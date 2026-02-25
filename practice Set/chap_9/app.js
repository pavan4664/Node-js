const express=require('express');

const app=express();

app.use((req,res,next)=>{
  console.log("first middleware",req.url,req.method);
  next();
});

app.use((req,res,next)=>{
  console.log("secojnd middleware",req.url,req.method);
  next();
});
// app.use((req,res,next)=>{
//   console.log("third middle ware",req.url,req.method);
//   res.send("<h1>Welcome to pavan ")
// })
app.get("/",(req,res,next)=>{
  console.log("hsndling/ for GET",req.url,req.method);
  res.send("<h1>welcome to pavan G</h1>");
  
});
app.get("/contact-us",(req,res,next)=>{
  console.log("hsndling/ for GET",req.url,req.method);
  res.send(`<h1>please gie me yur detail</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="enter your name"/>
      <input type="email" name="email" placeholder="enter your email"/>
      <input type="Submit"/>
    </form>`);

  
});
app.post("/contact-us",(req,res,next)=>{
  console.log("handling /contact-us for post",req.url,req.method);
  res.send(`<h1>we will reach u soon as possible</h1>`);
});

const PORT=3002;
app.listen(PORT,()=>{
  console.log(`server running on address http://localhost:${PORT}`)
});