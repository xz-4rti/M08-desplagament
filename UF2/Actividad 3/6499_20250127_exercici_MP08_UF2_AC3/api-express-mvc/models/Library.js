const { MongoClient, ObjectId } = require("mongodb");
const dbConfig = require("../config/mongodb.config.js");

class Library {
  constructor() {
    this.client = new MongoClient(dbConfig.URL, { useNewUrlParser: true, useUnifiedTopology: true });
    this.database = "books";
    this.collection = "books";
  }

  connect = async () => {
    try {
      await this.client.connect();
      this.database = this.client.db(dbConfig.DB);
      this.collection = this.database.collection("books");
      console.log("Successfully connected to MongoDB.");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      throw error;
    }
  };

  close = async () => {
    await this.client.close();
  };

  listAll = async () => {
    await this.connect();
    const books = await this.collection.find({}).toArray();
    console.log("Fetched books:", books);  // 🔍 Verifica qué datos devuelve
    await this.close();
    return books;
  };

  // Create a new book
  create = async (newBook) => {
    await this.connect();
    const result = await this.collection.insertOne(newBook);
    await this.close();
    return newBook.id; // Return the custom `id` (number) of the inserted book
  }

  // Update a book
  update = async (bookId, updatedBook) => {
    await this.connect();
    const result = await this.collection.updateOne(
      { id: bookId }, // Use the custom `id` field (number)
      { $set: updatedBook }
    );
    await this.close();
    return result.modifiedCount; // Return the number of documents updated
  }

  // Delete a book
  delete = async (bookId) => {
    await this.connect();
    const result = await this.collection.deleteOne({ id: bookId }); // Use the custom `id` field (number)
    await this.close();
    return result.deletedCount; // Return the number of documents deleted
  }
}

module.exports = Library;