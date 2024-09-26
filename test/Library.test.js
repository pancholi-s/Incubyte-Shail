// import pytest

// from src.Book import BookClass

// def test_book_class():
//     book = BookClass("AAAA","Harry Potter", "J.K. Rowling", 1997)
//     assert book.unique_id == "AAAA"
//     assert book.title == "Harry Potter"
//     assert book.author == "J.K. Rowling"
//     assert book.pub_year == 1997

const Library = require("../src/Library");

describe("Library Management System", () => {
  let library;

  beforeEach(() => {
    library = new Library();
  });

  test("should add a new book to the library", () => {
    library.addBook("123", "JavaScript for Beginners", "Ram Sharma", 2021);
    const availableBooks = library.viewAvailableBooks();
    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0].title).toBe("JavaScript for Beginners");
  });

  test("should allow borrowing an available book", () => {
    library.addBook("123", "JavaScript for Beginners", "Ram Sharma", 2021);
    library.borrowBook("123");
    const availableBooks = library.viewAvailableBooks();
    expect(availableBooks.length).toBe(0);
  });

  test("should throw error when borrowing an unavailable book", () => {
    library.addBook("123", "JavaScript for Beginners", "Ram Sharma", 2021);
    library.borrowBook("123");
    expect(() => library.borrowBook("123")).toThrow("Book already borrowed");
  });

  test("should return a borrowed book", () => {
    library.addBook("123", "JavaScript for Beginners", "Ram Sharma", 2021);
    library.borrowBook("123");
    library.returnBook("123");
    const availableBooks = library.viewAvailableBooks();
    expect(availableBooks.length).toBe(1);
  });

  test("should throw error when returning a non-borrowed book", () => {
    library.addBook("123", "JavaScript for Beginners", "Ram Sharma", 2021);
    expect(() => library.returnBook("456")).toThrow("Book not found");
  });
});