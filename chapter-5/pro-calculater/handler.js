const { sumRequestHand } = require("./sum");

const requestHandler=(req, res)=>{
  console.log(req.url,req.method);
  if(req.url==='/'){
    res.setHeader('content-type','text/html');
    res.write(`
      <html>
      <head><title>Complete</title></head>
      <body><h1>Welcome to calculater</h1></body>
      <a href="/calculator">Go to Calculator</a>
      </html>`)
  ;
  return res.end();

} else if(req.url.toLowerCase()==="/calculator"){
  res.setHeader('content-type','text/html');
   res.write(`
    <html>
      <head><title>Complete</title></head>
      <body>
      <h1>here i calculater</h1>
      <form action="/calculate-result" method="POST">
        <input type="text" placeholder="first num" name="first"/>
        <input type="text" placeholder="second num" name="second"/>
        <input type="submit" value="Sum">


      </form>
      </body>
      
      </html>`);
      return res.end();


}else if(req.url.toLowerCase()==="/calculate-result" && req.method==='POST'){
  return sumRequestHand(req,res);
  
}

    res.setHeader('content-type','text/html');
    res.write(`
      <html>
      <head><title>Complete</title></head>
      <body><h1>404 page not found</h1>
      <a href="/">Go to home</a>
      </body>
      </html>`);
      
  return res.end();

}
exports.requestHandler=requestHandler;