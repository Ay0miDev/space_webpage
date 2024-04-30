
// CREATING THE MOON SEGMENT

// Creating a new div element, nesting all elements
const planetTitan = document.createElement('div');
planetTitan.classList.add('planetTitan');

const theTitanandPlanets = document.createElement('ul');
theTitanandPlanets.classList.add('theTitanandPlanets');

const titanList01 = document.createElement('li');
const titanSolarMars = document.createElement('a');
titanSolarMars.setAttribute('href', "")
titanSolarMars.classList.add('titanSolarSystem');
titanSolarMars.innerHTML = 'mars'

const titanList02 = document.createElement('li');
const titanSolarMoon = document.createElement('a');
titanSolarMoon.setAttribute('href', "")
titanSolarMoon.classList.add('titanSolarSystem');
titanSolarMoon.innerHTML = 'moon'

const titanList03 = document.createElement('li');
const titanSolartitan = document.createElement('a');
titanSolartitan.setAttribute('href', "")
titanSolartitan.classList.add('titanSolarSystem');
titanSolartitan.innerHTML = 'titan'

const titanList04 = document.createElement('li');
const titanSolarTitans = document.createElement('a');
titanSolarTitans.setAttribute('href', "")
titanSolarTitans.classList.add('titanSolarSystem');
titanSolarTitans.innerHTML = 'titans'


titanList01.appendChild(titanSolarMars);
titanList02.appendChild(titanSolarMoon);
titanList03.appendChild(titanSolartitan);
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
titanInformation.innerHTML = `The smallest of the four Galilean moons orbiting Jupiter, titan is a 
winter lover’s dream. With an icy surface, it’s perfect for a bit of 
ice skating, curling, hockey, or simple relaxation in your snug 
wintery cabin.`

const titan_timeAndDistance = document.createElement('div');
titan_timeAndDistance.classList.add('titan_timeAndDistance');

const titanDistanceDetail = document.createElement('div');
titanDistanceDetail.classList.add('titanDistanceDetail');
const titanAvgDistance = document.createElement('h4');
titanAvgDistance.innerHTML = `avg. distance`
const titankilometer = document.createElement('h4');
titankilometer.setAttribute('id', 'titankilometer');
titankilometer.innerHTML = '628 mil. km'

titanDistanceDetail.appendChild(titanAvgDistance);
titanDistanceDetail.appendChild(titankilometer);

const titanTimeDetail = document.createElement('div');
titanTimeDetail.classList.add('titanTimeDetail');
const titanTravelTime = document.createElement('h4');
titanTravelTime.innerHTML = `est. travel`
const titanDuration = document.createElement('h4');
titanDuration.setAttribute('id', 'titanDuration');
titanDuration.innerHTML = '3 years'

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
marsPlanet.style.display = 'flex'
marsPlanet.style.flexDirection = 'column'
marsPlanet.style.display = 'none'
console.log(marsPlanet);

// The Moon Page
planetMoon.style.display = 'none'

// The Europa Page
planetEuropa.style.display = 'none'

// The titan Page
planetTitan.style.display = 'flex'
planetTitan.style.flexDirection = 'column'
console.log(planetTitan);