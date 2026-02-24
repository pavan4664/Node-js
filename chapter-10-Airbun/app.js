const express=require('express');

const app=express();
const userRouter=require("./routes/userRouter")
const hostRouter=require("./routes/hostRouter")
app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});

app.use(userRouter);
app.use(hostRouter);
// app.use(express.urlencoded());





const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server is running on adress http://localhost:${PORT}`);
});