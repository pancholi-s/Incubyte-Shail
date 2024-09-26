const Book = require("./Book");

/*
 * This class represents a Library system that manages a collection of books.
 * It allows users to add new books, borrow books, return books, and view the 
 * list of available books, tracking the borrow status 
 * of each book to prevent double borrowing.
 */
class Library {

  /*
   * Initializes the library system with an empty array of books.
   */
  constructor() {
    this.books = [];
  }

  /*
   * Adds a new book to the library system.
   * Creates a new instance of the Book class and stores it in the `books` array.
   */
  add(id, title, author, year) {
    const book = new Book(id, title, author, year);
    this.books.push(book);
  }

  /*
   * Allows a user to borrow a book.
   * Checks if the book exists and is available.
   * Updates book status to borrowed if valid.
   */
  borrow(id) {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new Error("Book not found");
    }
    if (book.isBorrowed) {
      throw new Error("Book already borrowed");
    }
    book.isBorrowed = true;
  }

  /*
   * Allows a user to return a borrowed book.
   * Checks if the book exists and was borrowed.
   * Updates book status to available if valid.
   */
  returnB(id) {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new Error("Book not found");
    }
    if (!book.isBorrowed) {
      throw new Error("Book was not borrowed");
    }
    book.isBorrowed = false;
  }

  /*
   * Returns a list of all available books in the library.
   * Filters the "books" array to return books that are not borrowed right now.
   */
  available() {
    return this.books.filter((book) => !book.isBorrowed);
  }
}

module.exports = Library;