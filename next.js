// import express from "express"
const express=require("express")
const app = express()
// API for the testing of next() 
app.get(
  '/next', function (req,res,next) { 
    console.log('hi there ');
    next();
    console.log('you are still here');
  }
)
  
// API for the testing of return next() 
app.get(
  '/return-next', function (req,res,next) { 
    console.log('hi there');
    return next(); 
    console.log('you are still here');
  }
)
  
app.listen(5000,()=> {
  console.log("App is running on port 5000")
})