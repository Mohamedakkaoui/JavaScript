let num1 = 6
let result = 1
while(num1 >= 1)
{
  result = num1 * result
  num1--
}
console.log(result)
var num2 = 123542
let i
for (i = 1 ; num2; i++)
{
  num2 = num2 / 10
  if (num2 < 1)
  {
    console.log(i)
    break;
  }
}
let char = " "
//nested loops
//loop for columns and rows
//adding th e branch
//4 rows and 7 rows
//centered
let x
let y
for (let x = 0;x < 4; x++)
{
  let char = ''
  let char1 = '' 
  for (let y = 0;y < 4 - x - 1;y++)
  {
    char += ' '
  }
  for (let k = 0;k < 2 * x + 1;k++)
  {
    char += '*'
  }
  char1 = char + '\n'
  console.log(char1)

}