const BookService = require("../services/book-service");
const HttpStatus = require("http-status");
const BookDTO = require("../dto/book-dto");

exports.findAllBooks = async (req, res, next) => {
  const books = await BookService.findAllBooks();

  res.status(HttpStatus.OK).send({
    status: HttpStatus.OK,
    message: "OK",
    results: books,
  });
};

exports.findBookByBookNo = async (req, res, next) => {
  const book = await BookService.findBookByBookNo(req.params.bookNo);

  if (book && book.length > 0) {
    res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      message: "OK",
      results: book,
    });
  }

  if (book && book.length === 0) {
    res.status(HttpStatus.NOT_FOUND).send({
      status: HttpStatus.NOT_FOUND, // 404
      message: "NOT FOUND",
      code: -999999,
      results: [],
      links: [
        {
          // rel: "bookRegist",
          // method: "POST",
          // href: "https://api.ohgiraffers.com/api/v1/books",
        },
      ],
    });
  }
};

exports.findBookByBookTitle = async (req, res, next) => {
  console.log(decodeURIComponent(req.params.bookTitle));
  const book = await BookService.findBookByBookTitle(
    decodeURIComponent(req.params.bookTitle)
  );

  if (book && book.length > 0) {
    res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      message: "OK",
      results: book,
    });
  }

  if (book && book.length === 0) {
    res.status(HttpStatus.NOT_FOUND).send({
      status: HttpStatus.NOT_FOUND, // 404
      message: "NOT FOUND",
      code: -999999,
      results: [],
      links: [
        {
          // rel: "bookRegist",
          // method: "POST",
          // href: "https://api.ohgiraffers.com/api/v1/books",
        },
      ],
    });
  }
};

exports.registNewBook = async (req, res, next) => {
  const result = await BookService.registNewBook(new BookDTO(req.body));

  if (result) {
    res.status(HttpStatus.CREATED).send({
      status: HttpStatus.CREATED, // 201
      message: "CREATED",
      results: {
        bookNo: result.bookNo,
        author: result.author,
        bookTitle: result.bookTitle,
        regularPrice: result.regularPrice,
        cellPrice: result.cellPrice,
        publishedDate: result.publishedDate,
        publisher: result.publisher,
      },
      contentLocation: `/books/${result.bookNo}`,
    });
  } else {
    // 실패 시 응답 내용
    res.status(HttpStatus.BAD_REQUEST).send({
      status: HttpStatus.BAD_REQUEST, // 400
      message: "BAD REQUEST",
      code: -888888,
      results: [],
      links: [
        {
          // rel: "bookRegist",
          // method: "POST",
          // href: "https://api.ohgiraffers.com/api/v1/books",
        },
      ],
    });
  }
};

exports.updateBook = async (req, res, next) => {
  const result = await BookService.updateBook(new BookDTO(req.body));

  if (result) {
    res.status(HttpStatus.OK).send({
      status: HttpStatus.OK, // 200
      message: "OK",
      results: {
        bookNo: result.bookNo,
        author: result.author,
        bookTitle: result.bookTitle,
        regularPrice: result.regularPrice,
        cellPrice: result.cellPrice,
        publishedDate: result.publishedDate,
        publisher: result.publisher,
      },
      contentLocation: `/books/${result.bookNo}`,
    });
  } else {
    // 실패 시 응답 내용
    res.status(HttpStatus.BAD_REQUEST).send({
      status: HttpStatus.BAD_REQUEST, // 400
      message: "BAD REQUEST",
      code: -777777,
      results: [],
      links: [
        {
          // rel: "bookUpdate",
          // method: "POST",
          // href: "https://api.ohgiraffers.com/api/v1/books",
        },
      ],
    });
  }
};

exports.deleteBook = async (req, res, next) => {
  const result = await BookService.deleteBook(req.params.bookTitle);

  if (result) {
    res.status(HttpStatus.OK).send({
      status: HttpStatus.OK, // 200
      message: "OK",
      results: {},
      contentLocation: `/books`,
    });
  } else {
    // 실패 시 응답 내용
    res.status(HttpStatus.BAD_REQUEST).send({
      status: HttpStatus.BAD_REQUEST, // 400
      message: "BAD REQUEST",
      code: -666666,
      results: [],
      links: [
        {
          // rel: "bookUpdate",
          // method: "POST",
          // href: "https://api.ohgiraffers.com/api/v1/books",
        },
      ],
    });
  }
};
