/**
 * detailProduct - looks for the the speified product by its ID
 * 
 * @param {string} products - An array of products objects
 * @param {number} idpar -  the ID by which to look for specified ID
 * 
 * @returns - the product with the specified ID 
 */
const detailProduct = (products, idpar) => 
{
  let n = products.length
  for (let i = 0; i < n; i++)
  {
    if (products[i].id === idpar)
    {
      return products[i]
    }
  }
}
module.exports ={
  detailProduct
}