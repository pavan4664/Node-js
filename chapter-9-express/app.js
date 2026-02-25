//Core Module
const http=require('http');

//External Module
const express=require('express');


//Local Module
const RequestHandler=require('./user');

const app=express();
app.use("/",(req,res,next)=>{
  console.log("came in first midleware",req.url,req.method);
  next();
})
app.use("/submit-details" ,(req,res,next)=>{
  console.log("came in second midleware",req.url,req.method);
  res.send('<p>hey pavan nice to see u</p>');
})  


// const server=http.createServer(app);
 
const port=3002;
app.listen(port,()=>{
  console.log(`server runing in address http://localhost:${port}`);
} ); 