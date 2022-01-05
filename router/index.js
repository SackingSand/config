const express=require("express");
const Router=express.Router();

const Users=require("./users");

Router.use("/users",Users);

module.exports=Router;