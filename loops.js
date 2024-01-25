//for loops we can use while and for
//difference betwee reak and continue
/*
continue is whne we want to skip a condition
unlike break is when we stop excuting the loop or the statement 
*/
let text
let names = ["mohamed", "amine", "noha", "wissal"]
for (let i = 0; i < names.length; i++)
{
  console.log("i am " + names[i] + " and i am an arkadian\n")
}
for (let x = 0; x <= 15; x++)
{
  (x % 2 == 0) ? console.log (x + " is even") : console.log(x + " is odd")
}
let i = 1
while(i <= 100)
{
  if (i % 3 == 0 && i % 5 == 0)
  {
    console.log( i +" FizzBuzz")
  }
  else if (i % 3 == 0)
  {
    console.log(i + " Fizz")
  }
  else if (i % 5 == 0)
  {
    console.log(i + " Buzz")
  }
  else
  {
    console.log(i)
  }
  
  i++
}
for (let i = 0; i < names.length; i++)
{
  console.log('current value of i is ${i}');
}