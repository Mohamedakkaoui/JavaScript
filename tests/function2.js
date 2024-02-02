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
function combinator (n, p)
{
  let result = 0
  result = (factorial(n)) / ((factorial(p)) * factorial(n - p))
  console.log(result)
}
combinator(5, 2)
function calculator (a, b , c)
{
  if (b === '+')
  {
    console.log(a + c)
  }
  else if (b === '-')
  {
    console.log(a - c)
  }
  else if (b === '*')
  {
    console.log(a * c)
  }
  else if (b === '/')
  {
    console.log(a / c)
  }
  else if (b === '%')
  {
    console.log(a % c)
  }
  else if (b === 'c')
  {
    combinator(a,c)
  }
}
calculator(5, "+", 1)
calculator(3, "*", -4)
calculator(5, 'c', 2)