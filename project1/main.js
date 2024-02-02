const {fetchData} = require ('./API/fetchdata')
const {calculateAveragePrice} = require ('./METHODS/calculationMethods')
const {filterByCategory} = require ('./METHODS/filterMethods')
const {detailproduct} = require ('./METHODS/productDetails')
const {searchByKeyword} = require ('./METHODS/searchMethods')
const {sortByPriceAsc,sortByPriceDesc} = require ('./METHODS/sortMethods')

async function prouctserive (){
  const products = await fetchData("https://fakestoreapi.com/products")
  // console.log(detailproduct(products, 6))
  // console.log(filterByCategory(products, "men's clothing"))
  // console.log(calculateAveragePrice(products))
  // console.log(sortByPriceAsc(products))
  // console.log(sortByPriceDesc(products))
  console.log(searchByKeyword(products, "Men"))
}
prouctserive()