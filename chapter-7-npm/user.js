
const { error } = require('console');
const fs=require('fs');
const body=[];

const userRequestHandler=(req,res)=>{

  // console.log(req.url,req.method,req.headers);
  if(req.url==='/'){
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>')
    res.write('<body><h1>enter information</h1>')
   
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
    const parameter=new URLSearchParams(fullBody);//decod  data
    // const bodyObj={};
    // for (const [key,val]of parameter.entries()){
    //   bodyObj[key]=val;
    // }

    const bodyObj=Object.fromEntries(parameter);
    console.log(bodyObj);
    fs.writeFile('user.txt', JSON.stringify(bodyObj),error =>{console.log('data written succesfully');
      
    res.statusCode=302;
    res.setHeader('Location','/');
    return res.end();

    });//its bloack everything untill specific work had not done


  });
   
   }
   else{
    res.setHeader('content-type','text/html');
    res.write(`<html>   
             <head><title>complet</title></head>
             <body><h1>Like/Share<h1></body>
             </html`);
             res.end();


   }

};

module.exports=userRequestHandler;