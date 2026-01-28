const http=require('http');
const fs=require('fs');
const body=[];

const server=http.createServer((req,res)=>{

  // console.log(req.url,req.method,req.headers);
  if(req.url==='/'){
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>')
    res.write('<body><h1>enter information</h1>')
    // res.write('<form action="/submit-details " method="post">');//get
    // res.write('<input type="text" name="username" placeholder="enter name"><br><br>');


    // res.write('<label for="male">Male</label>');
    // res.write('<input type="radio" id="male" name="gender" value="male"/>');

    // res.write('<label for="female">female</label>');
    // res.write('<input type="radio" id="female" name="gender" value="female"/><br>');
    // res.write('<input type="submit" value="submit">');
    // res.write('</form>');
    res.write(`
  <form action="/submit-details" method="POST">
    <input type="text" name="username" placeholder="enter name"><br><br>

    <label>
      <input type="radio" name="gender" value="male"> Male
    </label>

    <label>
      <input type="radio" name="gender" value="female"> Female
    </label><br><br>

    <button type="submit">Submit</button>
  </form>
`);


    
    res.write('</body>')
    res.write('</html>');

    return res.end();
}else if(req.url.toLowerCase()==="/submit-details" &&
   req.method=="POST"){
  req.on('data',chunk=>{
    console.log(chunk);

    body.push(chunk);
  });
  req.on("end",()=>{
    const fullBody=Buffer.concat(body).toString();
    console.log(fullBody);
  })
    fs.writeFileSync('user.txt', 'pavan');
    res.statusCode=302;
    res.setHeader('Location','/')
   }
res.setHeader('content-type','text/html');
res.write(`<html>   
             <head><title>complet</title></head>
             <body><h1>Like/Share<h1></body>
             </html`);
             res.end();
});

const port=3001;
server.listen(port,()=>{
  console.log(`server runing in address http://localhost:${port}`);
} ); 