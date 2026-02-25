const express=require('express');
const hostRouter=express.Router();


hostRouter.get("/add-home",(req,res,next)=>{
  
  res.send(`<h1>Rgister your self</h1>
              <form action="/host/add-home" method="POST">
              <input type="text" name="housename" placeholder="enter the number of house"/>
              <input type="submit"/>
               </form>`);
  
})

hostRouter.post("/add-home",(req,res,next)=>{
  console.log(req.body);
  
  res.send(`<h1>Home register successfully</h1>
              <a href="/">Go Home Again</a>`);
  
})



module.exports=hostRouter;