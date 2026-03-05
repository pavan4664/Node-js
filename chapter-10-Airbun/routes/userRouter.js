//core module
const path=require('path');
//local m
const rootDir=require('../utils/pathUtill');

//external module
const express=require('express');
const userRouter=express.Router();

userRouter.get("/",(req,res,next)=>{
  
  res.sendFile(path.join(rootDir,'views','home.html'));
  
});

module.exports=userRouter;
