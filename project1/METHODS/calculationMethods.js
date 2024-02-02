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