const express=require('express');

const app=express();
const userRouter=require("./routes/userRouter")
const hostRouter=require("./routes/hostRouter")
app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});

app.use(express.urlencoded({ extended: false }));

app.use(userRouter);
app.use("/host",hostRouter);
// app.use(express.urlencoded());


app.use((req,res,next)=>{
  res.status(404).send("<h1>404</h1>");

})


const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server is running on adress http://localhost:${PORT}`);
});