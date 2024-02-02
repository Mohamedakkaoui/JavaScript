const processuserdata = (products) => {
  const filteredgere = products.filter((product) => product.category === "electronics")
  return filteredgere
}
module.exports = {
  processuserdata
}