const CountryInfo = function () {
  this.ul = document.querySelector('#country-info');
}

CountryInfo.prototype.render = function (country) {
  const ul = document.querySelector("#country-info");
  const liName = document.createElement('li');
  liName.innerText = country.name;
  const liCapital = document.createElement('li');
  liCapital.innerText = country.capital;
  ul.appendChild(liName);
  ul.appendChild(liCapital);
}

CountryInfo.prototype.createListItem = function (label, content) {
  const li = document.createElement('li');
  li.innerText = `${ label }: ${ content }`;
  return li;
}

module.exports = CountryInfo;
