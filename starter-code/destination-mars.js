
// CREATING THE MOON SEGMENT

// The Planet Image
const universeImage = document.getElementById('moonImg');
const marsInfo = document.querySelector('.marsInfo');

// Creating a new div element, nesting all elements
const planetMoon = document.createElement('div');
planetMoon.classList.add('planetMoon');

const theMoonandPlanets = document.createElement('ul');
theMoonandPlanets.classList.add('theMoonandPlanets');

const moonList01 = document.createElement('li');
const moonSolarMars = document.createElement('a');
moonSolarMars.setAttribute('href', "")
moonSolarMars.classList.add('moonSolarSystem');
moonSolarMars.innerHTML = 'mars'

const moonList02 = document.createElement('li');
const moonSolarMoon = document.createElement('a');
moonSolarMoon.setAttribute('href', "")
moonSolarMoon.classList.add('moonSolarSystem');
moonSolarMoon.innerHTML = 'moon'

const moonList03 = document.createElement('li');
const moonSolarEuropa = document.createElement('a');
moonSolarEuropa.setAttribute('href', "")
moonSolarEuropa.classList.add('moonSolarSystem');
moonSolarEuropa.innerHTML = 'europa'

const moonList04 = document.createElement('li');
const moonSolarTitans = document.createElement('a');
moonSolarTitans.setAttribute('href', "")
moonSolarTitans.classList.add('moonSolarSystem');
moonSolarTitans.innerHTML = 'titans'


moonList01.appendChild(moonSolarMars);
moonList02.appendChild(moonSolarMoon);
moonList03.appendChild(moonSolarEuropa);
moonList04.appendChild(moonSolarTitans);

theMoonandPlanets.appendChild(moonList01);
theMoonandPlanets.appendChild(moonList02);
theMoonandPlanets.appendChild(moonList03);
theMoonandPlanets.appendChild(moonList04);


// Creating a h1 element
const moon = document.createElement('h1');
moon.classList.add('moon');
moon.innerHTML = 'moon'

const moonInformation = document.createElement('p');
moonInformation.classList.add('moonInformation');
moonInformation.innerHTML = `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
regain perspective and come back refreshed. While you’re there, take in some history 
by visiting the Luna 2 and Apollo 11 landing sites.`

const moon_timeAndDistance = document.createElement('div');
moon_timeAndDistance.classList.add('moon_timeAndDistance');

const moonDistanceDetail = document.createElement('div');
moonDistanceDetail.classList.add('moonDistanceDetail');
const moonAvgDistance = document.createElement('h4');
moonAvgDistance.innerHTML = `avg. distance`
const moonkilometer = document.createElement('h4');
moonkilometer.setAttribute('id', 'moonkilometer');
moonkilometer.innerHTML = '384,400 km'

moonDistanceDetail.appendChild(moonAvgDistance);
moonDistanceDetail.appendChild(moonkilometer);

const moonTimeDetail = document.createElement('div');
moonTimeDetail.classList.add('moonTimeDetail');
const moonTravelTime = document.createElement('h4');
moonTravelTime.innerHTML = `est. travel time`
const moonDuration = document.createElement('h4');
moonDuration.setAttribute('id', 'moonDuration');
moonDuration.innerHTML = '9 days'

moonTimeDetail.appendChild(moonTravelTime);
moonTimeDetail.appendChild(moonDuration);

moon_timeAndDistance.appendChild(moonDistanceDetail);
moon_timeAndDistance.appendChild(moonTimeDetail);

planetMoon.appendChild(theMoonandPlanets);
planetMoon.appendChild(moon);
planetMoon.appendChild(moonInformation);
planetMoon.appendChild(moon_timeAndDistance);

marsInfo.appendChild(planetMoon)

// const marsPlanet = document.querySelector('.planet')
// marsPlanet.style.display = 'none'
// console.log(marsPlanet);

planetMoon.style.display = 'none'