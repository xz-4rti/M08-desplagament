// Importamos el modelo de datos
const Library = require('../models/Library')

// Declaración de controladores 
const getBooks = (async (req, res) => {
    try{
        // Instanciamos un modelo Library
        let library = new Library({});
        // Lo usamos para listar libros
        let books = await library.listAll();
        res.json(books);
        library.close();
    }
    catch{
        res.json("Error getting books...");
    }
})

const createBook = (async (req, res) => {
    try{
        // Instanciamos un modelo Library
        let library = new Library({});

        // Creamos un libro nuevo
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            year: req.body.year
        };

        // Usamos el modelo Library para crear libro
        let created = await library.create(newBook);
    
        if(created){
            console.log("Product created successfully")
            res.json("Product created successfully")
        }
        else{
            console.log("Error creating new book...")
            res.json("Error creating new book...");
        }
        library.close()
    }
    catch{
        console.log("Error creating new book...")
        res.json("Error creating new book...");
    }
    
})

const updateBook = ((req, res) => {

})

const deleteBook = ((req, res) => {

})

module.exports = {
    getBooks: getBooks,
    createBook: createBook,
    updateBook: updateBook,
    deleteBook: deleteBook
}