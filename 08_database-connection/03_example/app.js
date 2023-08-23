const express = require("express");
const morgan = require("morgan");
// const BookController = require("./src/controllers/book-controller.js");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const bookRouter = require("./src/routes/book-route");
app.use("/books", bookRouter);

app.listen(8888, () => console.log("Listening on port 8888!"));

// BookController.findAllBooks();

// BookController.findBookByBookNo(3);

// BookController.registNewBook({
//   author: "김용승",
//   bookTitle: "용승의 정석",
//   discountRate: 0.2,
//   regularPrice: 50000,
//   sellPrice: 40000,
//   publishedDate: "2023-07-07",
//   publisher: "용승출판",
// });
