const bookQuery = require("../database/book-query");
exports.findAllBooks = (connection) => {
  return new Promise((resolve, reject) => {
    connection.query(bookQuery.findAllBooks(), (err, result) => {
      if (err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.findBookByBookNo = (connection, bookNo) => {
  return new Promise((resolve, reject) => {
    connection.query(bookQuery.findBookByBookNo(), [bookNo], (err, result) => {
      if (err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.findBookByBookTitle = (connection, bookTitle) => {
  return new Promise((resolve, reject) => {
    connection.query(
      bookQuery.findBookByBookTitle(),
      [bookTitle],
      (err, result) => {
        if (err) {
          reject(err);
        }

        resolve(result);
      }
    );
  });
};

exports.registNewBook = (connection, newBook) => {
  return new Promise((resolve, reject) => {
    connection.query(
      bookQuery.registNewBook(),
      [
        newBook.author,
        newBook.bookTitle,
        newBook.discountRate,
        newBook.regularPrice,
        newBook.sellPrice,
        newBook.publishedDate,
        newBook.publisher,
      ],
      (err, result) => {
        if (err) {
          reject(err);
        }
        console.log("repo result : ", result);

        resolve(result);
      }
    );
  });
};

exports.updateBook = (connection, bookTitle, newBook) => {
  return new Promise((resolve, reject) => {
    connection.query(
      bookQuery.updateBook(),
      [
        newBook.author,
        newBook.bookTitle,
        newBook.discountRate,
        newBook.regularPrice,
        newBook.sellPrice,
        newBook.publishedDate,
        newBook.publisher,
        bookTitle,
      ],
      (err, result) => {
        if (err) {
          reject(err);
        }
        console.log("repo result : ", result);

        resolve(result);
      }
    );
  });
};

exports.deleteBook = (connection, bookTitle) => {
  return new Promise((resolve, reject) => {
    connection.query(bookQuery.registNewBook(), [bookTitle], (err, result) => {
      if (err) {
        reject(err);
      }
      console.log("repo result : ", result);

      resolve(result);
    });
  });
};
