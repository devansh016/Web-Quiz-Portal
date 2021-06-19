const mongodb = require('mongodb');
require('dotenv').config();
const MongoClient = mongodb.MongoClient;
const mongodbURL = process.env.MONGODB_URL;


const mongoConnect =(callback) => {
    MongoClient.connect(mongodbURL)
    .then( client => {
        console.log('MongoDB Connected');
        callback(client);
    })
    .catch(err => {
        console.log(err);
    });
};

module.exports = mongoConnect;