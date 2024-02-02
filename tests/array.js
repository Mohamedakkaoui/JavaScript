const items = [
  { nom : 'Mohamed',  age : 23},
  { nom : 'noha',  age : 21},
  { nom : 'amine',  age : 14},
  { nom : 'yassine',  age : 19},
  { nom : 'yousra',  age : 20}
]
//we use this metode to filter out things in a array
const fileteredItems = items.filter((item) => { 
  return item.age <= 20})
console.log(fileteredItems)
// we can make arrays using 2 methods
const rows = 10
const columns = 8

const myArray = []

for(let i = 0; i < rows; i++)
{
  myArray[i] = []
  for (let j = 0; j < columns; j++)
  {
    myArray[i][j] = 0
  }
}
console.log(myArray)