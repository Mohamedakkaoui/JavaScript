let a = -15;
let b = 6;
let c = 2.6;

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
let max = Math.max(a, b, c);
console.log(max)

let score = 83;

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