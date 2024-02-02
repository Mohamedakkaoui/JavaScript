/**
 * searchByKeyword - filters products by category
 * 
 * @param {string} products - An array of products objects 
 * @param {string} keyword - the keyword by which to filter the products
 * 
 * @returns - An array of products that has the specified keyword
 */
const searchByKeyword = ((products, keyword) => {
  return (products.filter((product) => {
  return  product.title.match(keyword)!== null || product.description.match(keyword)!== null}))
  })
module.exports = {
  searchByKeyword
}