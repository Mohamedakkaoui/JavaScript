/**
 * filterByCategory - filters product by category
 * 
 * @param {Array} products - An array of products objects
 * @param {string} category1 - the category by which to filter the products
 * 
 * @returns - An array of products belonging to the specified category
 */
const filterByCategory = (products, category1) =>
{
  let filteredproducts = products.filter ((product)=> product.category === category1)
  return filteredproducts
}
module.exports ={
  filterByCategory
}