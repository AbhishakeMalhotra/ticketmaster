/*
File Name - db.js
Student Name - Ronak Barochia
Student ID - 301239977
*/


let DB_CONNECTION = "mongodb+srv://admin:admin@database.mxzco.mongodb.net/PortfolioDb"

//database setup
let mongoose = require('mongoose');



module.exports = function(){
    
    //connect to DB
    mongoose.connect(DB_CONNECTION);

    let mongoDB = mongoose.connection;
    mongoDB.on('error', console.error.bind(console,'connection error :  '));
    mongoDB.once('open',()=>{
        console.log('conected to MongoDB...');
    }) 

    return mongoDB;
}

