class person {
  constructor (name, age){
    this.name = name;
    this.age = age;
  }
  compareAge (otherperson){
    if (otherperson.age > this.age)
    {
      return (`${otherperson.name} is oler than me`);
    }
    else if (otherperson.age < this.age)
    {
      return (`${otherperson.name} is younger than me`);
    }
    else
    {
      return (`${otherperson.name} is the same age as me`);
    }
  }
}
let p1 = new person ("Samuel", 24)
let p2 = new person("Joel", 36)
let p3 = new person("Lily", 24)

console.log(p1.compareAge(p3))