const filterByCategory = (products, category1) =>
{
  let filteredproducts = products.filter ((product)=> product.category === category1)
  return filteredproducts
}
module.exports ={
  filterByCategory
}