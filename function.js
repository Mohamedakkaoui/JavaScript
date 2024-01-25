function factorial(n)
{
  let result = 1
  while(n >= 1)
  {
  result = n * result
  n--
  }
  return result
}
console.log(factorial(5))
function nDigits(number)
{
  let i
  for (i = 1 ; number; i++)
  {
    number = number / 10
    if (number < 1)
    {
      return i
      break;
    }
  }
}
console.log(nDigits(183))
function max(a, b, c)
{
  if (a > b && a > c)
  {
    console.log(a)
  }
  else if (b > a && b > c)
  {
    console.log(b)
  }
  else
  {
    console.log(c)
  }
}
max(2,5,4)
function myGrade(score)
{
if (score > 85)
{
  console.log("A")
}
else if (score <= 85 && score > 70)
{
  console.log("B")
}
else if (score <= 70 && score > 55)
{
  console.log("C")
}
else if (score <= 85 && score > 40)
{
  console.log("D")
}
else if (score <= 40 && score > 15)
{
  console.log("E")
}
else
{
  console.log("F")
}
}
myGrade(30)