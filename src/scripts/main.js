'use strict';

// write your code here
const populationElements = [...document.querySelectorAll('.population')];
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const populations = populationElements.map(
  (population) => population.innerText,
);
let normalizedPopulations = populations.map(
  (population) => +population.split(',').join(''),
);

normalizedPopulations = normalizedPopulations.filter((item) =>
  Number.isNaN(item),
);

const totalPopulation = normalizedPopulations.reduce(
  (acc, population) => acc + population,
  0,
);

const averagePopulation = totalPopulation / normalizedPopulations.length;

if (totalElement) {
  totalElement.innerText = totalPopulation.toLocaleString('en-US');
}

if (averageElement) {
  averageElement.innerText = averagePopulation.toLocaleString('en-US');
}
