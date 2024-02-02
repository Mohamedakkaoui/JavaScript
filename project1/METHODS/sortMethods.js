const sortByPriceAsc =(products) => {
  products.sort((a, b) => a.price - b.price)
  return products
}
const sortByPriceDesc =(products) => {
  products.sort((a,b) => b.price - a.price)
  return products
}
module.exports ={
  sortByPriceAsc , sortByPriceDesc
}
