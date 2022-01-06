const express=require("express");
const Router=express.Router();

const {Login,Daftar}=require("../controller/users");

Router.get("/",Login);
Router.post("/register",Daftar);

module.exports=Router;
