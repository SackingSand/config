const express=require("express");
const Router=express.Router();

const {Login,Daftar}=require("../controller/users");

Router.post("/login",Login);
Router.post("/register",Daftar);

module.exports=Router;