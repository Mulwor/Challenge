const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then((changeToJson) => changeToJson.json())
  .then((sentToEmptyArray) => cities.push(...sentToEmptyArray));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // Ищет совпадение и вызывается регулярным выражением
    const regex = new RegExp(wordToMatch, 'gi');

    // Ищет совпадение по городу и по государству
    const cityMatch = place.city.match(regex);
    const stateMatch = place.state.match(regex);

    return cityMatch || stateMatch;
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatchesInInput() {
  const matchArray = findMatches(this.value, cities);
  // console.log(matchArray)

  const changeHTML = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi');

      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
      
      return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
    }).join('');
  suggestions.innerHTML = changeHTML;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatchesInInput);
searchInput.addEventListener('keyup', displayMatchesInInput);
