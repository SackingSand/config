const {sequelizeModel}=require("./Sequelize");

(async()=>{
    try {
        await sequelizeModel.authenticate();
        console.log('Terhubung ke Database');
        
    } catch (error) {
        console.log(error);
    }
})();