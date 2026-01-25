const http=require('http');

const server=http.createServer((req,res)=>{

  // console.log(req.url,req.method,req.headers);
  if(req.url==='/'){
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>')
    res.write('<body>/<h1>Welcome Home</h1></body>')
    res.write('</html>');

    res.end();


  }else if(req.url==='/product'){
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>')
    res.write('<body>/<h1>heeyy/subcribe us</h1></body>')
    res.write('</html>');

    res.end();

  }else{
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>')
    res.write('<body>/<h1>you done something Wrong</h1><body>')
    res.write('</html>');

    res.end();

  }
  
  // process.exit();
}) ;

const port=3001;
server.listen(port,()=>{
  console.log(`server runing in address http://localhost:${port}`);
} ); 