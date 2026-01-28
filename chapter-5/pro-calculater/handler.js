const requestHandler=(req,res)=>{
  console.log(req.url,req.method);
  if(req.url==='/'){
    res.setHeader('content-type','text/html');
    res.write(`
      <html>
      <head><title>Complete</title></head>
      <body><h1>Welcome to calculater</h1></body>
      <a href="/calculator">Go to Calculator</a>
      </html>`)
  };
  return res.end();

} 
{
    res.setHeader('content-type','text/html');
    res.write(`
      <html>
      <head><title>Complete</title></head>
      <body><h1>404 page not found</h1></body>
      <a href="/">Go to home</a>
      </html>`);
  return res.end();

}
exports.requestHandler=requestHandler;