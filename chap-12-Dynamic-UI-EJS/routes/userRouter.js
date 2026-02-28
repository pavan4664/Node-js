//core module
const path=require('path');
//local m
const rootDir=require('../utils/pathUtill');

const {registerd}=require('./hostRouter');

//external module
const express=require('express');
const userRouter=express.Router();

userRouter.get("/",(req,res,next)=>{
  console.log(registerd);
  res.sendFile(path.join(rootDir,'views','home.html'));
   
});

module.exports=userRouter;
