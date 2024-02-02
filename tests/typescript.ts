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