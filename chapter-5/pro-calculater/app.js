const http=require('http');

const server=http.createServer();



const PORT=3000;
server.listen(PORT,()=>{
  console.log(  `server runing http://localhost:${PORT}`);
})