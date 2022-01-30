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
  repo.storeBook(book);
  res.send(book);
};

exports.updateBook = (req, res) => {
  console.log("Update a book.");
  let book = req.body;
  repo.updateBook(book);
  res.send(book);
};
