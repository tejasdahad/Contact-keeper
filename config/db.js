const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try{
        await mongoose.connect(db,{
            useFindAndModify:false,
            useCreateIndex:true,
            useNewUrlParser:true
        });

        console.log('Mongoose Connected');
    } catch(err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;