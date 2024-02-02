const {fetchData} = require ('./API/fetchdata')
const {calculateAveragePrice} = require ('./METHODS/calculationMethods')
const {filterByCategory} = require ('./METHODS/filterMethods')
const {detailProduct} = require ('./METHODS/productDetails')
const {searchByKeyword} = require ('./METHODS/searchMethods')
const {sortByPriceAsc,sortByPriceDesc} = require ('./METHODS/sortMethods')

let url = "https://fakestoreapi.com/products"

async function productService (){
  const products = await fetchData(url)
  console.log(detailProduct(products, 6))
  console.log(filterByCategory(products, "men's clothing"))
  console.log(calculateAveragePrice(products))
  console.log(sortByPriceAsc(products))
  console.log(sortByPriceDesc(products))
  console.log(searchByKeyword(products, "Men"))
}
productService()