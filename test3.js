// function maskify (text)
// {
//   let masked = ""
//   let str1 = ""
//   let all =""
//   let stringlength = text.length
//   if (stringlength <= 4)
//   {
//     return text
//   }
//   else
//   {
//     for (let i = 0; i < stringlength - 4; i++)
//     {
//       masked += "#"
//     }
//     for (let j = stringlength - 4; j < stringlength; j++)
//     {
//       str1 += text[j]
//     }
//     all = str1 + masked
//     return all
//   }
// }




// function maskify (text)
// {
//   let n = text.length
//   let str = ""
//   for (let i = 0; i < n; i++)
//     {
//       if (i < n - 4 && n > 4)
//       {
//         str += '#'
//       }
//       else
//       {
//         str += text[i]
//       }
//     }
//     return str
// }
// let result = maskify("126142616")
// console.log(result)

function mutiply (a, b){
  return a * b
}
function add (c, d , myCallback)
{
  let sum  = c + d + myCallback(3, 4)
  return sum
}
let n = add(3,5,mutiply)
console.log(n)