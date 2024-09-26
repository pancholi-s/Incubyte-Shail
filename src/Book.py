class BookClass:
    """
    This is a class for Book. 
    """
    
    def __init__(self, unique_id, title, author, pub_year):
        """
        The constructor for BookClass class.
        
        The BookClass class takes 3 arguments:
        unique_id (string) - the unique identifier of the book
        title (string) - the title of the book
        author (string) - the author of the book
        pub_year (int) - the year the book was published
        is_borrowed (bool) - the status of the book
        """
        
        self.unique_id = unique_id
        self.title = title
        self.author = author
        self.pub_year = pub_year
        self.is_borrowed = False
        