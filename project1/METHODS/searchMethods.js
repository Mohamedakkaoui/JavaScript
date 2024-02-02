const searchByKeyword = ((products, keyword) => {
  return (products.filter((product) => {
  return  product.title.match(keyword)!== null || product.description.match(keyword)!== null}))
  })
module.exports = {
  searchByKeyword
}