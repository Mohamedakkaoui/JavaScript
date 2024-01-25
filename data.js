function sum (numbers){
  let result = 0
  //is numbers an array
  const  lengthofarray = numbers.length
  for (let i = 0; i < lengthofarray;i++)
  {
    result += numbers[i]
  }
  return result
}


function countEven(numbers){
  const lengtharray = numbers.length
  let count = 0
  for (i = 0; i < lengtharray; i++)
  {
    if (numbers[i] % 2 == 0)
    {
      count += 1
    }
  }
  return count
}
let test = countEven([1, 3, 2, 4, 8])
console.log(test)



function double (numbers){
  const lengtharray = numbers.length
  for (i = 0; i < lengtharray; i++)
  {
    numbers[i] *= 2
  }
  return numbers
}
let test2 = double([1,3 ,4,5])
console.log(test2)