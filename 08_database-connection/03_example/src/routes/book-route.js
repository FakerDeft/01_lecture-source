const express = require("express");
const router = express.Router();
const BookController = require("../controllers/book-controller");

router.get("/", BookController.findAllBooks);
router.get("/:bookNo", BookController.findBookByBookNo);
router.post("/", BookController.registNewBook);
router.put("/", BookController.updateBook);
router.delete("/:bookNo", BookController.deleteBook);

module.exports = router;
