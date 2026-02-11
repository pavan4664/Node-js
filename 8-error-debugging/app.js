const http=require('http');
const testingSyntax=require('./testing');
const runtime=require('./runtime');



const server=http.createServer((req,res)=>{
  console.log(req.url,req.method);
  testingSyntax();
  runtime();  
});
const port=3001;
server.listen(port,()=>{
  console.log(`server runing in address http://localhost:${port}`);
} ); 