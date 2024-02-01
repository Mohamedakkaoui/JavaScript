var items = [
    { nom: 'Mohamed', age: 23 },
    { nom: 'noha', age: 21 },
    { nom: 'amine', age: 14 },
    { nom: 'yassine', age: 19 },
    { nom: 'yousra', age: 20 }
];
//we use this metode to filter out things in a array
var fileteredItems = items.filter(function (item) {
    return item.age <= 20;
});
console.log(fileteredItems);
