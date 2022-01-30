const { MongoDBNamespace } = require("mongodb");
const db = require("../configs/mongodb");

exports.getAll = (cb) => {
  const collection = db.getCollection("Book");
  collection
    .find()
    .toArray()
    .then((books) => {
      cb(books);
    })
    .catch((err) => console.log(err));
};

exports.storeBook = (book) => {
  const collection = db.getCollection("Book");

  collection
    .insertOne(book)
    .then((res) => {
      console.log("stored");
    })
    .catch((err) => console.log(err));
};

exports.updateBook = (book) => {
  const collection = db.getCollection("Book");

  collection
    .findOneAndUpdate(
      { _id: new mongodb.ObjectId(book.id) },
      {
        $set: {
          name: book.name,
          author: book.author,
          price: book.price,
          imgSrc: book.imgSrc,
        },
      }
    )
    .then((res) => {
      console.log("updated");
      res.send(res);
    })
    .catch((err) => console.log(err));
};
