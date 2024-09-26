const Library = require("../src/Library");

describe("Library Management System", () => {
  let library;

  // Initializes a new Library instance before each test
  beforeEach(() => {
    library = new Library();
  });

  /**
   * Test case for adding a new book to the library.
   * Verifies that the book is successfully added and is available for borrowing.
   */
  test("Add a new book.", () => {
    library.add("55", "Introduction to DevOps", "Ram Sharma", 2024);
    const availableBooks = library.available();
    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0].title).toBe("Introduction to DevOps");
  });

  /**
   * Test case for borrowing an available book.
   * Checks that the book count decreases after a successful borrow operation.
   */
  test("Borrow an available book.", () => {
    library.add("55", "Introduction to DevOps", "Ram Sharma", 2024);
    library.borrow("55");
    const availableBooks = library.available();
    expect(availableBooks.length).toBe(0);
  });

  /**
   * Test case for attempting to borrow a book that is already borrowed.
   * Expects an error to be thrown indicating the book is unavailable.
   */
  test("Throw error when borrowing an unavailable book", () => {
    library.add("55", "Introduction to DevOps", "Ram Sharma", 2024);
    library.borrow("55");
    expect(() => library.borrow("55")).toThrow("Book already borrowed");
  });

  /**
   * Test case for returning a borrowed book.
   * Verifies that the book is marked as available again after being returned.
   */
  test("Returning a borrowed book", () => {
    library.add("55", "Introduction to DevOps", "Ram Sharma", 2024);
    library.borrow("55");
    library.returnB("55");
    const availableBooks = library.available();
    expect(availableBooks.length).toBe(1);
  });

  /**
   * Test case for attempting to return a book that has not been borrowed.
   * Expects an error to be thrown indicating the book is not found.
   */
  test("Throw error when returning a not borrowed book", () => {
    library.add("55", "Introduction to DevOps", "Ram Sharma", 2024);
    expect(() => library.returnB("404")).toThrow("Book not found");
  });
});
