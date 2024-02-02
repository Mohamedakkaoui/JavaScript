const filteredCateg = (products, category) => {
  const filetredcat = products.filter((product)=>product.category == category)
  return filetredcat
}
module.exports = {
  filteredCateg
}