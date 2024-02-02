/**
 * calculateAveragePrice - calculate the average price of all products
 * 
 * @param {string} products - An array of products objects
 * 
 * @returns return the average price of all the products 
 */
const calculateAveragePrice =(products) => 
{
  let result
  let n = products.length
  let average = 0
  for (let i = 0; i < n; i++)
  {
    average += products[i].price
  }
  result = average / n
  return Math.floor(result)
}
module.exports = {
  calculateAveragePrice
}