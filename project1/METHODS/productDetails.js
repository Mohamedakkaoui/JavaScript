const detailproduct = (products, idpar) => 
{
  let n = products.length
  for (let i = 0; i < n; i++)
  {
    if (products[i].id === idpar)
    {
      return products[i]
    }
  }
}
// let myArray = [
//   {
//     id: 1,
//     title: "Object 1",
//     name: "John Doe",
//     description: "This is the description for Object 1."
//   },
//   {
//     id: 2,
//     title: "Object 2",
//     name: "Jane Smith",
//     description: "This is the description for Object 2."
//   },
//   {
//     id: 3,
//     title: "Object 3",
//     name: "Bob Johnson",
//     description: "This is the description for Object 3."
//   }
// ];

// console.log(detailproduct(myArray, 1))
module.exports ={
  detailproduct
}