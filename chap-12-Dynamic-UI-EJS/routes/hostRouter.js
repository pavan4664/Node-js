// //core module
// const path=require('path');


const express=require('express');
const hostRouter=express.Router();


//local module
const rootDir=require('../utils/pathUtill');

hostRouter.get("/add-home",(req,res,next)=>{
  
  res.render('add-home',{pageTitle:'HomeAdd Successfully'});
});
    
  

const registerd=[];
hostRouter.post("/add-home",(req,res,next)=>{
  console.log(req.body,req.body.housename);
  registerd.push({housename:req.body.housename});

    res.render('homeAdd',{pageTitle:'Home Added Successfully'});
})



// module.exports=hostRouter;
 exports.hostRouter=hostRouter;
 exports.registerd=registerd;