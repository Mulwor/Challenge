// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filterArray = inventors.filter(function (inventors) {
  const firstValue = inventors.year >= 1500 
  const secondValue = inventors.year < 1500 

  if (firstValue && secondValue) return true
})
const filterAnotherArray = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)



// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const mapArray = inventors.map(function (inventor){
  `${inventor.first}` `${inventor.last}`
})


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortArray =  inventors.sort((a, b) => (a.year > b.year) ? 1 : 0)



// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const reduceArray = inventors.reduce((total, inventor) => {
  let total = 0
  return total + (inventor.passed - inventor.year)
})



// 5. Sort the inventors by years lived
const sortArrayToo =  inventors.sort(function(a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year
  return lastGuy > nextGuy ? -1 : 1
})



// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const category = document.querySelector('.mw-category')
const links = Array.from(category.querySelectorAll('a'));
const de = links.map (link => link.textContent)
                .filter(streetName => streetName.includes('de'))



// 7. sort Exercise
// Sort the people alphabetically by last name
const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Biondo, Frank',
  'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig', 
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert',
  'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving', 'Benn, Tony', 'Benson, Leana', 
  'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 
  'Black, Elk', 'Berio, Luciano', 'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin',
  'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose', 
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 
];

const sortArrayName = people.sort((firstName, lastName) => {
  const [firstnaming, lastnaming] = firstName.split(', ')
  const [firstnamingAnother, lastnamingAnother] = lastName.split(', ')
  return firstnaming > firstnamingAnother ? 1 : -1
})



// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car', 'car', 'truck', 'truck', 'truck',
  'bike', 'walk', 'car', 'van', 'bike',
  'walk', 'car', 'van', 'car',
];

const transportation = data.reduce(function (object, item) {
  if (!object[item]) {
    obj[item] = 0
  }
  obj[item]++
  return obj;
}, {})


// 9. В Html находится ul id="bands"></ul>, необходимо отсортировать массив со значениями
const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');
