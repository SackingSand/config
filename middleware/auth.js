const {verifytoken}=require("../helper/jwttoken");

class Auth {

    static AuthJWT(req,res,next){
        let token=req.headers.token;
        verifytoken(token,(err,payload)=>{
            if(err){
                res.status(401).json({
                    message:"Anda harus login terlebih dahulu",
                    status:401
                });
            }else{
                req.decoded=payload;
                next();
            }
        });
    }

}

module.exports=Auth;