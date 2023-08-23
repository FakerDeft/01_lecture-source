exports.findAllBooks = () => {
  return `
          SELECT * 
          FROM TBL_BOOK
      `;
};

exports.findBookByBookNo = () => {
  return `
          SELECT * 
          FROM TBL_BOOK
          WHERE BOOK_NO = ?
      `;
};

exports.findBookByBookTitle = () => {
  return `
          SELECT * 
          FROM TBL_BOOK
          WHERE Book_Title = ?
      `;
};

exports.registNewBook = () => {
  return `
          INSERT INTO TBL_BOOK(
            AUTHOR,
            BOOK_TITLE,
            DISCOUNT_RATE,
            REGULAR_PRICE,
            SELL_PRICE,
            PUBLISHED_DATE,
            PUBLISHER)
          VALUES(?,?,?,?,?,?,?);
      `;
};

exports.updateBook = () => {
  return `
          UPDATE TBL_BOOK SET(
            AUTHOR = ?,
            BOOK_TITLE = ?,
            DISCOUNT_RATE=?,
            REGULAR_PRICE =?,
            SELL_PRICE =?,
            PUBLISHED_DATE =?,
            PUBLISHER =?)
          WHERE BOOK_TITLE =?
  `;
};

exports.deleteBook = () => {
  return `
      DELETE FROM TBL_BOOK
      WHERE book_no =?
  `;
};
