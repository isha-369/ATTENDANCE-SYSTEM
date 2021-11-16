const express=require('express');
const app=express();
const path=require('path');
// const router=require('express').Router();
const multer=require('fs');
// const path=require('path');
const PORT=4000;
app.use(express.urlencoded({
  extended:false
}));
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,"assests")));


app.use(express.json());


app.get('/',(req,res)=>{
  console.log(res);
  res.sendFile(path.join(__dirname,'views','index.htm'));
}); 


app.get('/register.htm',(req,res)=>{
  console.log(res);
  res.sendFile(path.join(__dirname,'views','register.htm'));
}); 
app.get('/login.htm',(req,res)=>{
  console.log(res);
  res.sendFile(path.join(__dirname,'views','login.htm'));
}); 

app.get('/profile.htm',(req,res)=>{
  console.log(res);
  res.sendFile(path.join(__dirname,'views','profile.htm'));
}); 
app.listen(PORT,()=>console.log('server is starting on PORT',PORT));