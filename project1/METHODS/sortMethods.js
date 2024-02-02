/**
 * sortByPriceAsc - sorts the product by price in ascending order
 *  
 * @param {Array} products - An array of products
 *  
 * @returns - an array of sorted products 
 */
const sortByPriceAsc =(products) => {
  products.sort((a, b) => a.price - b.price)
  return products
}
/**
 * sortByPriceDesc - sorts the product by price in a descending order
 *  
 * @param {Array} products - An array of products
 *  
 * @returns - an array of sorted products 
 */
const sortByPriceDesc =(products) => {
  products.sort((a,b) => b.price - a.price)
  return products
}
module.exports ={
  sortByPriceAsc , sortByPriceDesc
}
