const sortByPriceAsc =(products) => {
  let arraylength = products.length
  for (let i = 0; i < arraylength - 1; i++)
  {
      for (let j = 0; j < arraylength - 1; j++)
      {
         if (products.price[i] > products.price[j+ 1])
         {
          [products.price[j], products.price[j + 1]] = [products.price[j + 1], products.price[j]]
         }
      }
  }
  return products
}
const sortByPriceDesc =(products) => {
  let arraylength = products.length
  for (let i = 0; i < arraylength - 1; i++)
  {
      for (let j = 0; j < arraylength - 1; j++)
      {
         if (products.price[i] < products.price[j+ 1])
         {
          [products.price[j], products.price[j + 1]] = [products.price[j + 1], products.price[j]]
         }
      }
  }
  return products
}
module.exports ={
  sortByPriceAsc , sortByPriceDesc
}
