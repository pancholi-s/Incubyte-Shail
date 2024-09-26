class Book {
    /*
    This is a class for Book. 
    */

    constructor(id, title, author, year) {

        /*
        The constructor for BookClass class.
        
        The BookClass class takes 3 arguments:
        unique_id (string) - the unique identifier of the book
        title (string) - the title of the book
        author (string) - the author of the book
        pub_year (int) - the year the book was published
        is_borrowed (bool) - the status of the book
        */

        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.isBorrowed = false;
    }
}
  
module.exports = Book;