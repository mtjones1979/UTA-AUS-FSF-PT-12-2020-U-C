const router = require('express').Router();
const Book = require('../../models/Book');

// Updates book based on its book_id
router.put('/:book_id', async (req, res) => {
  //Calls the update method on the Book model
  const bookData = await Book.update(req.body);
  
  return res.json(bookData);
});

// Delete route for a book with a matching book_id
router.delete('/:book_id', async (req, res) => {
  // Looks for the books based book_id given in the request parameters
  const deletedBook = await Book.destroy({
    where: {
      book_id: req.params.book_id
    }
  });
  return res.json(deletedBook);
});

module.exports = router;
