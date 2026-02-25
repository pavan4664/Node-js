const http=require('http');
const testingSyntax=require('./testing');
const logical=require('./logical');


const RequestHandler=require('./user');


const server=http.createServer(RequestHandler);
  
// const server=http.createServer((req,res)=>{
//   console.log(req.url,req.method);
//   // testingSyntax();
//   logical();  
//   res.end();
// });
const port=3001;
server.listen(port,()=>{
  console.log(`server runing in address http://localhost:${port}`);
} ); 