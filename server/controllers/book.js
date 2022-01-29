const repo = require("../repositories/book");

exports.getAll = (req, res) => {
  console.log("Get all books method called.");
  // call repository to get data.
  repo.getAll((books) => {
    res.send(books);
  });
};

exports.storeBook = (req, res) => {
  console.log("Create a new book.");
  let book = req.body;
  console.log(book);
  res.send("Done");
};
