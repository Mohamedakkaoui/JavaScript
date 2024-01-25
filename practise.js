let firstname  = "Mohamed"
let lastname = "Akkaoui"
const PI = 3.14
let radius = 7
var favoriteSuperhero = 'Black Panther'
let favoriteQuote = 'Get busy living or get busy dying'
var fullname = firstname + lastname
var area = PI * (radius ** 2)
console.log(area)
let perimeter = 2 * PI * radius
console.log(perimeter)
console.log("A wise man named " + favoriteSuperhero + " said: " + favoriteQuote)
let a = 3;
let b = 10;
[a,b]=[b,a]
let c;
c = a;
a = b;
b = c;
console.log("After swapping: a = ", a, " and b = ", b);
let number = 8;
var test = number % 2
test == 0 ? console.log("even") : console.log("odd");
var day = 4;
switch(day){
  case 1:
    console.log("Monday")
    break;
  case 2:
    console.log("Tuesday")
    break;
  case 3:
    console.log("Wednsday")
    break;
  case 4:
    console.log("Thursday")
    break;
  case 5:
    console.log("Friday")
    break;
  case 6:
    console.log("Saturday")
    break;
  case 7:
    console.log("Sunday")
    break;
    default:
      console.log("Unvalid Day");
}
