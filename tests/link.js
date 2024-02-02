async function  fetchUserData () {
  let data = await fetch ('https://jsonplaceholder.typicode.com/users')
  let can = await data.json()
  console.log(can)
}
fetchUserData()


//Methode 1
function getProduct () {
  fetch('https://fakestoreapi.com/products')
  .then((Response) => Response.json())
  .then((product)=>console.log(product))
  .catch((error)=>console.log('error :', error.message))
}
getProduct()


// Methode 2
const getProduct = async () => {
  const responce = await fetch('https://fakestoreapi.com/products')
  const data = await responce.json()
  // console.log (data)
  const productFilter = data.filter(product => product.price > 20 && product.price < 75)
  // console.log(productFilter)
  console.log(filteredCateg(data, "men's clothing"))
}
getProduct()
const {filteredCateg} = require ('./categfiltered')