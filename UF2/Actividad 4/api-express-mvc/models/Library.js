const mysql = require("mysql2");

class Library {
    constructor() {
        // y la guardamos en la propiedad connection de la clase

        // 1.Declaramos la conexión
        let connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
        })
        // 2.Abrimos la conexión
        connection.connect(error => {
            if (error) throw error;
            console.log("Successfully connected to the database.");

            connection.query("CREATE DATABASE IF NOT EXISTS books");
            connection.query("USE books");
            connection.query(`CREATE TABLE books (
                id INT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                author VARCHAR(255) NOT NULL,
                year INT NOT NULL);
            )`);
            connection.query(`INSERT INTO books (id, title, author, year) VALUES
                (1, 'Don Quijote de la Mancha', 'Miguel de Cervantes', 1605),
                (2, 'Moby Dick', 'Herman Melville', 1851),
                (3, 'Orgullo y Prejuicio', 'Jane Austen', 1813),
                (4, 'Crimen y Castigo', 'Fyodor Dostoevsky', 1866),
                (5, 'La Odisea', 'Homero', -800);`
            );
        })

        // 3.Dejamos la conexión en la propiedad connection, promisificada
        // (para poder utilizarlas más cómodamente en el resto de métodos de la clase)
        this.connection = connection.promise();
    }

    close = () => {
        this.connection.end();
    }

    listAll = async () => {
        const [rows] = await pool.query('SELECT * FROM books');
        return rows;
    }

    create = async (newBook) => {
        try {
            let query = "INSERT INTO books SET ?";
            let result = await this.connection.query(query, newBook);
            return result.affectedRows;
        } catch (error) {
            return error;
        }
    }

    update = async (id, book) => {
        try {
            let query = "UPDATE books SET ? WHERE id = ?";
            let result = await this.connection.query(query, [book, id]);
            return result.affectedRows;
        } catch {
            return error;
        }
    }

    delete = async (id) => {
        try {
            let query = "DELETE * FROM books WHERE id = ?";
            let result = await this.connection.query(query, id);
            return result.affectedRows
        } catch {
            return error;
        }
    }
}

module.exports = Library;