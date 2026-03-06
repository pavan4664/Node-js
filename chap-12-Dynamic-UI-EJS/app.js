//core module
const path=require('path');


const express=require('express');

const app=express();

const userRouter=require("./routes/userRouter")

const {hostRouter}=require("./routes/hostRouter");
const rootDir=require('./utils/pathUtill');


app.use(express.static(path.join(rootDir,'public')))
app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});

app.set('view engine','ejs');
//file name 
// app.set('viwes','viwes');

app.use(express.urlencoded({ extended: false }));
 
app.use(userRouter);
app.use("/host",hostRouter);
// app.use(express.urlencoded());


app.use((req,res,next)=>{
  res.status(404).render( '404',{pageTitle:'paGE NOT FOUND',currentPage:'404'})

})


const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server is running on adress http://localhost:${PORT}`);
});