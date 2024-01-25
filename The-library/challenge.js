const books = require("./books.json");

function priceOfBook(bookName)
{
  let arraylength = books.length 
  let i = 0;
  while (i < arraylength - 1)
  {
    if (books[i].title === bookName)
    {
      return (books[i].price)
    }
    i++
  }
}

function affordableBooks(budget)
{
  let suggestedbooks = []
  let arraylength = books.length
  for (i = 0; i < arraylength; i++)
  {
    if (books[i].price <= budget)
    {
      suggestedbooks[suggestedbooks.length] = books[i]
    }
  }
  return suggestedbooks
}

function findBookByGenre(genre) {
  let suggestedbooks = []
  for (i = 0; i < books.length; i++)
  {
    for (j = 0; j < books[i].genres.length; j++)
    {
      if (genre === books[i].genres[j])
      {
        suggestedbooks [suggestedbooks.length] = books[i]
      }
    }
  }
  return suggestedbooks
}

function groupByGenre()
{
  // write your code here
    const groupedBooks = {};
  
    for (let i = 0; i < books.length; i++)
    {
      const book = books[i];
      const genres = book.genre;

      for (let j = 0; j < genres.length; j++)
      {
        const genre = genres[j];
  
        if (!groupedBooks[genre])
        {
          groupedBooks[genre] = [];
        }
        groupedBooks[genre][groupedBooks[genre].length] = book;
      }
    }  
  return groupedBooks;
}

function sortBooksByPrice()
{
  // write your code here
  const arraylength = books.length;

  for (let i = 0; i < arraylength - 1; i++)
  {
    for (let j = 0; j < arraylength - 1 - i; j++)
    {
      if (books[j].price > books[j + 1].price)
      {
        // Swap books[j] and books[j + 1]
        const temp = books[j];
        books[j] = books[j + 1];
        books[j + 1] = temp;
      }
    }
  }
  return books
}

(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();