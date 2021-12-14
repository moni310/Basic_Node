const express=require("express");
const app =express();
app.get("/page",(req,res) =>{
    res.send("HELLOW WORLD");
});

app.listen(3000,()=>
{
    console.log("Thank you")

});