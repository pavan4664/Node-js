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

app.use(express.urlencoded({ extended: false }));
 
app.use(userRouter);
app.use("/host",hostRouter);
// app.use(express.urlencoded());


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));

})


const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server is running on adress http://localhost:${PORT}`);
});