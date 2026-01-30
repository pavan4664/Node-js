const http=require('http');
const RequestHandler=require('./user');


const server=http.createServer(RequestHandler);


const port=3001;
server.listen(port,()=>{
  console.log(`server runing in address http://localhost:${port}`);
} ); 