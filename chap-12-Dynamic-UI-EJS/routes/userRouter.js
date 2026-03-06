// //core module
// const path=require('path');
// //local m
// // const rootDir=require('../utils/pathUtill');

// const {registerd}=require('./hostRouter');

// //external module
// const express=require('express');
// const userRouter=express.Router();

// userRouter.get("/",(req,res,next)=>{
//   console.log(registerd);
//   // res.sendFile(path.join(rootDir,'views','home.html'));

//   res.render('home',{registerd : registerd, pageTitle:'air-bnb'});
   
// });

// module.exports=userRouter;
const express = require('express');
const userRouter = express.Router();

const { registerd } = require('./hostRouter');

userRouter.get("/", (req, res, next) => {
  console.log(registerd);

  res.render('home', {
    registerd: registerd,
    pageTitle: 'air-bnb'
  ,currentPage:'Home'});
});

module.exports = userRouter;
