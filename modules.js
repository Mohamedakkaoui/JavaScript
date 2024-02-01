const fetchUserData = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(processuserdata(data))
  }
  catch (error){
    console.log('error :', error.message)
  }
}
const {processuserdata} = require ('./modues2')
console.log(fetchUserData())

// const isogram = (test) => {
//   let text = test.toLowerCase()
//   let n = text.length
//    stop = true
//   for (let i = 0; i < n && stop; i++)
//    {
//     let j = i + 1
//     while(j < n && stop)
//     {
//       if (text[i] === text[j])
//       {
//         stop = false
//       }
//       j++
//     } 
//    }
//    return stop
// }
// console.log(isogram('Moose'))