class BookDTO {
  author;
  bookTitle;
  discountRate;
  regularPrice;
  sellPrice;
  publishedDate;
  publisher;
  detail = {};

  constructor(data) {
    this.author = data.author;
    this.bookTitle = data.bookTitle;
    this.discountRate = data.discountRate;
    this.regularPrice = data.regularPrice;
    this.sellPrice = data.sellPrice;
    this.publishedDate = data.publishedDate;
    this.publisher = data.publisher;
  }
}

module.exports = BookDTO;
