const getConnection = require("../database/connection");
const BookRepository = require("../repositories/book-repo");

exports.findAllBooks = () => {
  return new Promise((resolve, reject) => {
    console.log("findAllBooks service function called");
    const connection = getConnection();

    const results = BookRepository.findAllBooks(connection);

    connection.end();

    resolve(results);
  });
};

exports.findBookByBookNo = (bookNo) => {
  return new Promise((resolve, reject) => {
    const connection = getConnection();

    const results = BookRepository.findBookByBookNo(connection, bookNo);

    connection.end();

    resolve(results);
  });
};

exports.findBookByBookTitle = (bookTitle) => {
  return new Promise((resolve, reject) => {
    const connection = getConnection();

    const results = BookRepository.findBookByBookTitle(connection, bookTitle);

    connection.end();

    resolve(results);
  });
};

exports.registNewBook = (book) => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();

    connection.beginTransaction();

    try {
      const result = await BookRepository.registNewBook(connection, book); // promise
      console.log("result : ", result.insertId);

      const insertedBook = await BookRepository.findBookByBookNo(
        connection,
        result.insertId
      );
      console.log("insertedBook : ", insertedBook);

      connection.commit();
      console.log("commit successfully");

      resolve(insertedBook);
    } catch (err) {
      connection.rollback();
      console.error("rollback successfully");

      reject(err);
    } finally {
      connection.end;
      console.log("connection is closed successfully");
    }
  });
};

exports.updateBook = (book) => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();

    connection.beginTransaction();

    try {
      const result = await BookRepository.updateBook(
        connection,
        bookTitle,
        book
      ); // promise
      connection.commit();
      resolve(result);
    } catch (err) {
      connection.rollback();
      console.error("rollback successfully");

      reject(err);
    } finally {
      connection.end;
      console.log("connection is closed successfully");
    }
  });
};

exports.deleteBook = (bookNo) => {
  return new Promise(async (resolve, reject) => {
    const connection = getConnection();

    connection.beginTransaction();

    try {
      const result = await BookRepository.deleteBook(connection, bookNo);
      connection.commit();
      resolve(result);
    } catch (err) {
      connection.rollback();
      console.error("rollback successfully");

      reject(err);
    } finally {
      connection.end;
      console.log("connection is closed successfully");
    }
  });
};
