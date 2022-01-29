// configure server

// step 1: Import express package
const express = require("express");
const bookRoutes = require("./routers/book");
const mongodb = require("./configs/mongodb");
const cors = require("cors");

// step 2: create server
const server = express();

// connect to mongodb
mongodb.connect();

// step 3: configure port
server.listen(3100);
server.use(cors("*"));
//enable post data
server.use(express.json());

// custom routes
server.use("/api/book", bookRoutes);

// step 4: handle request on default path
server.get("/", (req, res) => {
  // sending response to client
  res.send("Hello from ExpressJS with nodemon");
});

console.log("Server is running on localhost:3100");
