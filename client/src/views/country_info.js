const CountryInfo = function () {
  this.ul = document.querySelector('#country-info');
}

CountryInfo.prototype.render = function (country) {
  const ul = document.querySelector('#country-info');
  const capital = document.createElement('li');
  const population = document.createElement('li')
  capital.innerText = `Capital city: ${country.capital}`
  population.innerText = `Population:  ${country.population}`;
  capital.appendChild(population);
  ul.appendChild(capital);
}

CountryInfo.prototype.createListItem = function (label, content) {
  const li = document.createElement('li');
  li.innerText = `${ label }: ${ content }`;
  return li;
}

module.exports = CountryInfo;
