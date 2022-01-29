// Step 1: Import MongoDB
const mongodb = require("mongodb");
require("dotenv").config();

// Step 2: Get URL
const url = process.env.DB_URL;

// Step 3: Create MongoDB client
const mongoClient = mongodb.MongoClient;

var dbClient;

// Step 4: connec to mongodb
exports.connect = () => {
  mongoClient
    .connect(url)
    .then((client) => {
      dbClient = client;
      console.log("MongoDB is connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCollection = (name) => {
  return dbClient.db("bookstore").collection(name);
};
