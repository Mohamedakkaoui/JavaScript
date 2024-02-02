// try
// {
//   console.log("BEGIN");
//   const res = divide(1, 0);
//   console.log("Result = " + res); // won't execute
// }
// catch(error)
// {
//   console.log("An error has occured: " + error.message);
// }
// finally
// {
//   console.log("END");
// }
// function checknumber (number)
// {
//   let k = 0
//   if (number < 10)
//   {
//     return (number)
//   }
//   let i = 0
//   while(number >10)
//   {
//     k = somofalldigits(number)
//   }
//   return k
// }
function somofalldigits (n)
{
  let x = 0
  let num  = 0
  for (let i = 0; n >= 0.99 ; i++)
  {
      x = n % 10
      num +=  x
      n = n / 10
      n = n - x / 10
  }
  if (num >= 10)
  {
    return somofalldigits(num)
  }
    
  else
  {
    return num
  }
}
let get = somofalldigits (195)
console.log(get)

let k = 24
let string = "" + k
console.log(typeof string)
function sum (n)
{
  let p = `${n}`
  let length = p.length
  let O = 0
  for (let i = 0; i < length; i++)
  {
    O += Number(p[i])
  }
  if (sum >= 10)
  {
    return sum(O)
  }
  return sum
}
let l = sum (195)
console.log(l)

let square = n => n * n
let x = square(4)
console.log(x)