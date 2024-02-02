const reducer = (array) =>
{
  if (array.length == 1)
  {
    return array[0]
  }
  else
  {
    let newarray  = []
    for (let i = 0; i < array.length; i++)
    {
      let number = 1
      while (array[i] == array[i + 1])
      {
        number++
        i++ 
      }
      newarray.push(number)
    }
    return (reducer (newarray))
  }
}
console.log(reducer([2, 4, 4, 6, 2, 1, 1, 5, 6, 7, 8, 8, 8, 8, 9, 0, 1, 1, 5, 4, 4]))