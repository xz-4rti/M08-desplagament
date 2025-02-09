const books = require('../api/books');

const getBooks = (req, res) => {
    res.json(books);
};

const createBook = (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    };
    books.push(newBook);
    res.status(201).json(newBook);
};

const updateBook = (req, res) => {
    const bookId = parseInt(req.params.id, 10); // Get book ID from request params
    const bookIndex = books.findIndex((book) => book.id === bookId);

    if (bookIndex !== -1) {
        books[bookIndex] = {
            id: bookId,
            title: req.body.title,
            author: req.body.author,
            year: req.body.year,
        };
        res.status(200).json(books[bookIndex]);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
};

const deleteBook = (req, res) => {
    const bookId = parseInt(req.params.id, 10); // Get book ID from request params
    const bookIndex = books.findIndex((book) => book.id === bookId);

    if (bookIndex !== -1) {
        const deletedBook = books.splice(bookIndex, 1);
        res.status(200).json(deletedBook[0]);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
};

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
};
