const http=require('http');

const server=http.createServer((req,res)=>{

  // console.log(req.url,req.method,req.headers);
  if(req.url==='/'){
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>')
    res.write('<body><h1>enter information</h1>')
    res.write('<form action="submit-details method="post">');
    res.write('<input type="text" name="username" placeholder="enter name"><br><br>');


    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');

    res.write('<label for="female">female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/><br>');
    res.write('<input type="submit" value="submit">');
    res.write('</form>');

    
    res.write('</body>')
    res.write('</html>');

    return res.end();
}

    
    
    
    // res.write('</body>');
    // res.write('</html>');

    // return res.end();

  
  
  // process.exit();
}) ;

const port=3001;
server.listen(port,()=>{
  console.log(`server runing in address http://localhost:${port}`);
} ); 