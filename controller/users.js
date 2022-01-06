const UserModel=require("../models/user");
class User {

    static Login(req,res,next){
       UserModel.findOne({where:{nama:""}}).then((data)=>{
        res.status(200).json({
            message:"Successfull",
            payload:data
        })
       }).catch(next);
    }

    static Daftar(req,res,next){
        
    }

}

module.exports=User;