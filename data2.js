function sockMerchant (numbers){
  numbers.sort()
  let arraylength = numbers.length
  let pair = 0
  let i = 0
  while (i < arraylength)
  {
    if (numbers[i] == numbers [i + 1])
    {
      pair += 1
      i += 2 
    }
    else
    {
      i++
    }
  }
  return pair
}
let num = sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])
console.log(num) 
numbers = [1, 9, 10, -3, 2 ,-6, 100, -5]


function akin (numbers){
  let arraylength = numbers.length
  for (let i = 0; i < arraylength - 1; i++)
  {
      for (let j = 0; j < arraylength - 1; j++)
      {
         if (numbers[j] > numbers[j+ 1])
         {
          [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]
         }
      }
  }
  return numbers
}

function selection (numbers){
  let  arraylength = numbers.length
  let x
  let y 
  let k 
  for (let i = 0; i < arraylength - 1; i++)
  {
    x = i
    y = i + 1
    while(y < arraylength)
    { 
        if (numbers[x] > numbers[y])
        {
          x = y
        }
        y++ 
    }
    if (x != i) {
      [numbers[i], numbers[x]] = [numbers[x], numbers[i]];
  }
  }
  return numbers
}
numbers1 = [1, 9, 10, -3, 2 ,-6, 100, -5]
let num3 = selection(numbers1)
console.log(num3)
function linear (numbers, n){
  let arraylength = numbers.length
   for (let i = 0; i < arraylength; i++)
   {
      if (numbers[i] === n)
      {
        return ([i , numbers[i]])
      }
   }
}
// let num4 = linear(numbers1, 2)
// console.log(num4)

function insertion(numbers)
{
  let arraylength = numbers.length
  let i , key , j
  for (i = 1; i < arraylength; i++)
  {
    key = numbers[i];
    j = i - 1
    while (j >= 0 && numbers[j] > key)
    {
      numbers[j + 1] = numbers[j]
      j = j - 1
    }
    numbers[j + 1] = key 
  }
  return numbers
}
let num5 = insertion(numbers1)
console.log(num5)


function binary (numbers, n)
{
   let low = 0
   let high = numbers.length - 1
  while (low <= high)
  {
    let mid = ((high + low) / 2)
    if (mid % 2 != 0)
    {
      mid = mid - 1/2
    }
    if (numbers[mid] === n)
    {
      return numbers[mid];
    }
    else if (numbers[mid] > n)
    {
      high = mid - 1;
    }
    else
    {
      low = mid + 1;
    }
  }
  return 'NOT found'
}
const num6 = [1 ,3, 4, 6, 9, 10]
const test5 = binary(num6, 4)
console.log(test5)

let person = {
  firstName : "mohamed",
  secondName : "Akkaoui",
  // fullname : function (){
  //   return (`${this.firstName} ${this.secondName}`)
  // }
  get fullname () 
  {
    return (`${this.firstName} ${this.secondName}`)
  },
  set fullname (newfullname) {
    const [first, last] = newfullname.split(" ")
    this.firstName = first
    this.secondName = last
  }
}
person.fullname = "komi maki"
console.log(person.fullname)