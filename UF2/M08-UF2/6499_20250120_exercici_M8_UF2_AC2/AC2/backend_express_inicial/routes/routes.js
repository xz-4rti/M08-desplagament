const express = require('express');
const books = require('../controllers/books');

const router = express.Router();

// Define routes
router.get('/api/books', books.getBooks); // GET all books
router.post('/api/books', books.createBook); // POST a new book
router.put('/api/books/:id', books.updateBook); // PUT to update a book by ID
router.delete('/api/books/:id', books.deleteBook); // DELETE a book by ID

module.exports = router;
