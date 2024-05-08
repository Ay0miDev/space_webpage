
// CREATING THE MOON SEGMENT

// Creating a new div element, nesting all elements
const planetTitan = document.createElement('div');
planetTitan.classList.add('planetTitan');

const theTitanandPlanets = document.createElement('ul');
theTitanandPlanets.classList.add('theTitanandPlanets');

const titanList01 = document.createElement('li');
const titanSolarMars = document.createElement('a');
titanSolarMars.setAttribute('href', "")
titanSolarMars.classList.add('solarSystem');
titanSolarMars.innerHTML = 'mars'

const titanList02 = document.createElement('li');
const titanSolarMoon = document.createElement('a');
titanSolarMoon.setAttribute('href', "")
titanSolarMoon.classList.add('solarSystem');
titanSolarMoon.innerHTML = 'moon'

const titanList03 = document.createElement('li');
const titanSolartEuropa = document.createElement('a');
titanSolartEuropa.setAttribute('href', "")
titanSolartEuropa.classList.add('solarSystem');
titanSolartEuropa.innerHTML = 'europa'

const titanList04 = document.createElement('li');
const titanSolarTitans = document.createElement('a');
titanSolarTitans.setAttribute('href', "")
titanSolarTitans.classList.add('solarSystem');
titanSolarTitans.innerHTML = 'titans'


titanList01.appendChild(titanSolarMars);
titanList02.appendChild(titanSolarMoon);
titanList03.appendChild(titanSolartEuropa);
titanList04.appendChild(titanSolarTitans);

theTitanandPlanets.appendChild(titanList01);
theTitanandPlanets.appendChild(titanList02);
theTitanandPlanets.appendChild(titanList03);
theTitanandPlanets.appendChild(titanList04);


// Creating a h1 element
const titan = document.createElement('h1');
titan.classList.add('titan');
titan.innerHTML = 'titan'

const titanInformation = document.createElement('p');
titanInformation.classList.add('titanInformation');
titanInformation.innerHTML = `The only moon known to have a dense atmosphere other than Earth, Titan 
is a home away from home (just a few hundred degrees colder!). As a 
bonus, you get striking views of the Rings of Saturn.`

const titan_timeAndDistance = document.createElement('div');
titan_timeAndDistance.classList.add('titan_timeAndDistance');

const titanDistanceDetail = document.createElement('div');
titanDistanceDetail.classList.add('titanDistanceDetail');
const titanAvgDistance = document.createElement('h4');
titanAvgDistance.innerHTML = `avg. distance`
const titankilometer = document.createElement('h4');
titankilometer.setAttribute('id', 'titankilometer');
titankilometer.innerHTML = '1.6 bil. km'

titanDistanceDetail.appendChild(titanAvgDistance);
titanDistanceDetail.appendChild(titankilometer);

const titanTimeDetail = document.createElement('div');
titanTimeDetail.classList.add('titanTimeDetail');
const titanTravelTime = document.createElement('h4');
titanTravelTime.innerHTML = `est. travel`
const titanDuration = document.createElement('h4');
titanDuration.setAttribute('id', 'titanDuration');
titanDuration.innerHTML = '7 years'

titanTimeDetail.appendChild(titanTravelTime);
titanTimeDetail.appendChild(titanDuration);

titan_timeAndDistance.appendChild(titanDistanceDetail);
titan_timeAndDistance.appendChild(titanTimeDetail);

planetTitan.appendChild(theTitanandPlanets);
planetTitan.appendChild(titan);
planetTitan.appendChild(titanInformation);
planetTitan.appendChild(titan_timeAndDistance);

marsInfo.appendChild(planetTitan)
// The Mars Page
// marsPlanet.style.display = 'flex'
// marsPlanet.style.flexDirection = 'column'
// console.log(marsPlanet);

// // The Moon Page
// planetMoon.style.display = 'none'

// // The Europa Page
// planetEuropa.style.display = 'none'

// // The titan Page
// planetTitan.style.display = 'flex'
// planetTitan.style.flexDirection = 'column'
// planetTitan.style.display = 'none'
// console.log(planetTitan);

// marsPlanet.style.display = 'none'
planetMoon.style.display = 'none'
planetEuropa.style.display = 'none'
planetTitan.style.display = 'none'