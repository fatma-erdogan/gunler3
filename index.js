const express = require("express");
const bodyParser = require("body-parser");
const app= express();
app.set('view engine' , 'ejs');
app.get ("/", function (req,res){

var today = new Date().getDay();
var gun="";
if(today ===6 || today ===0){
    gun="weekend";
    }else {gun="weekday"}
res.render("list",{day:gun})
});

app.get("/isim",function(res,res){
    var benimisimim="fatma";
    var yasim= 56+43;
    res.render("isim",{adim:benimisimim, yas: yasim});
})
    
app.get("/renk", function(req,res){
    var benimrenk1="sari";
    var benimrenk2="laci";
    var benimrenk3="kirmizi";
    res.render("renk", {renk1:benimrenk1 , renk2:benimrenk2 , renk3:benimrenk3});
})
app.listen(4444, function(){
    console.log("4444 de calisiyo");
});