// Numbers
let age = 100;
let age2 = age;
console.log(age, age2)

age = 200;
console.log(age)

// String
let firstName = "Wes"
let name2 = firstName;
console.log(firstName, name2)

firstName = "wesley"
console.log(firstName, name2)


// Let's say we have an array, and we want to make a copy of it.
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
console.log(players, team)

// You might think we can just do something like this:
team[3]         // Значение меняется, так как мы отредактировали исходный массив, и у нас ссылка массив, а не его копия

// Чтобы устранить данное копирование можно исп
const team2 = players.slice()
const team3 = [].concat(players)
const team4 = [...players]
const team5 = Array.from(players)


// with Objects
const person = {
  name: 'Wes Bos',
  age: 80,
};

// and think we make a copy:
const captain = person;
captain.number = 99


// how do we take a copy instead?
const cap2 = Object.assign({}, person, {number: 99, age: 12})
console.log(cap2)


// We will hopefully soon see the object ...spread
const cap3 = {...person}


// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should 
// think twice before using it.
const wes = {
    originName: "Wes",
    age: 100,
    social: {
        twitter: "@wesbos",
        facebook: "wesbos.develops"
    }
}

console.log(wes)
const dev = Object.assign({})
const dev2 = JSON.parse(JSON.stringify(wes))