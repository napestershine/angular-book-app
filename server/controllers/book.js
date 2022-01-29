const repo = require("../repositories/book");

exports.getAll = (req, res) => {
  console.log("Get all books method called.");
  // call repository to get data.
  repo.getAll((books) => {
    res.send(books);
  });
};

exports.create = (req, res) => {
  console.log("Create a new book.");
  console.log(req.body.name);
  return;
  // call repository to get data.
  // repo.create((res) => {
  //   res.send(res);
  // });
};
