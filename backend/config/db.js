const mongoose = require('mongoose');

const connectDb = async()=>{
    try{
        const conn = await mongoose.connect('mongodb://127.0.0.1:3000/steetSupply', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to Database");

    }catch(error){
        console.log("Error in connecting to databse");
        console.error(`${error.message}`);
    }
}

module.exports = connectDb;