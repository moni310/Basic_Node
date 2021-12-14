const express=require("express");
const app=express();
app.get("/object",(req,res) =>{
    res.json({message:"Hello word"})
});

app.listen(3000,()=>
{
    console.log("Thank you")

});


