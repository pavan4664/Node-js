const http=require('http');
const server=http.createServer((req, res)=>{
  console.log((req.url, req.method));
  if(req.url==='/home'){
    res.write('<h1>welcome to home<h1>');
    return res.end();
  }else if(req.url==='/men'){
    res.write('<h1>welcome to mens section <h1>');
    return res.end();
  }else if(req.url==='/kids'){
    res.write('<h1>welcome to kids secion<h1>');
    return res.end();
  }else if(req.url==='/cart'){
    res.write('<h1>welcome to cart<h1>');
    return res.end();
  }
  res.write(`
    
<html>
<head>

  <title>Document</title>
</head>
<body>
  ><nav>
    <ul>
      <li> <a href="/home">Home</a></li>
      <li> =<a href="/men">Man</a></li>
       <li> <a href="/kids">Kids</a></li>
      <li> =<a href="/cart">>🛒</a></li>
    </ul>
  </nav>
  
</body>
</html>`);
  res.end();

});

server.listen(3001,()=>{
  console.log('server running on addres http://localhost:3001');
});