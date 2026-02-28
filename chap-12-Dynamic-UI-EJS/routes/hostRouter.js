//core module
const path=require('path');


const express=require('express');
const hostRouter=express.Router();


//local module
const rootDir=require('../utils/pathUtill');

hostRouter.get("/add-home",(req,res,next)=>{
  
  res.sendFile(path.join(rootDir ,'views','add-home.html'));
    
  
})
const registerd=[];
hostRouter.post("/add-home",(req,res,next)=>{
  console.log(req.body,req.body.housename);
  registerd.push({housename:req.body.housename});

  
  
  res.sendFile(path.join(rootDir,'views','homeAdd.html'));
  
})



// module.exports=hostRouter;
 exports.hostRouter=hostRouter;
 exports.registerd=registerd;