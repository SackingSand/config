const {Sequelize,DataTypes,Model}=require("sequelize");

const sequelize=new Sequelize(process.env.PG_URL);

module.exports={
    datatypes:DataTypes,
    model:Model,
    sequelize
};