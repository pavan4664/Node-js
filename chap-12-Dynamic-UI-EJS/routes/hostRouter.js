//core module
const path=require('path');


const express=require('express');
const hostRouter=express.Router();


//local module
const rootDir=require('../utils/pathUtill');

hostRouter.get("/add-home",(req,res,next)=>{
  
  res.render('add-home',{pageTitle:'Home Added Successfully',currentPage:'add-home'});
});
    
  

const registerd=[];
hostRouter.post("/add-home",(req,res,next)=>{
  console.log(req.body);
  registerd.push(req.body);
    res.render('homeAdd',{pageTitle:'Home Added Successfully',currentPage:'homeAdd'});
})



// module.exports=hostRouter;
 exports.hostRouter=hostRouter;
 exports.registerd=registerd;