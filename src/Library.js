const Book = require("./Book");

class Library {
  /*
        LibrarySystemClass is a class that represents a library system. 
        It represents a library system that has a list of books and a list of users. 
        It has following methods:
         - add_book
         - borrow_book
         - return_book
         - view_books
    */

  constructor() {
    /*
        This method initializes the LibrarySystemClass object.
        This method has following attributes:
        
        - books(array): A array that stores the books in the library system.
    */
    this.books = [];
  }

  addBook(id, title, author, year) {
    const book = new Book(id, title, author, year);
    this.books.push(book);
  }

  borrowBook(id) {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new Error("Book not found");
    }
    if (book.isBorrowed) {
      throw new Error("Book already borrowed");
    }
    book.isBorrowed = true;
  }

  returnBook(id) {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new Error("Book not found");
    }
    if (!book.isBorrowed) {
      throw new Error("Book was not borrowed");
    }
    book.isBorrowed = false;
  }

  viewAvailableBooks() {
    return this.books.filter((book) => !book.isBorrowed);
  }
}

module.exports = Library;
