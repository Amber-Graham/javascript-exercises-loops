const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = books => books.map((book) => {
    return(book.title);
})




getTheTitles(books);




// Do not edit below this line
module.exports = getTheTitles;
