
// CREATING THE MOON SEGMENT

// Creating a new div element to replace theMoonDetails
const theEuropaDetail = document.createElement('div');
theEuropaDetail.setAttribute('id', 'theEuropaDetail');


// Creating a h1 element
const europa = document.createElement('h1');
europa.classList.add('europa');
europa.innerHTML = 'europa'

const europaInformation = document.createElement('p');
europaInformation.classList.add('europaInformation');
europaInformation.innerHTML = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
winter lover’s dream. With an icy surface, it’s perfect for a bit of 
ice skating, curling, hockey, or simple relaxation in your snug 
wintery cabin.`

const europa_timeAndDistance = document.createElement('div');
europa_timeAndDistance.classList.add('europa_timeAndDistance');

const europaDistanceDetail = document.createElement('div');
europaDistanceDetail.classList.add('europaDistanceDetail');
const europaAvgDistance = document.createElement('h4');
europaAvgDistance.innerHTML = `avg. distance`
const europakilometer = document.createElement('h4');
europakilometer.setAttribute('id', 'europakilometer');
europakilometer.innerHTML = '628 mil. km'

europaDistanceDetail.appendChild(europaAvgDistance);
europaDistanceDetail.appendChild(europakilometer);

const europaTimeDetail = document.createElement('div');
europaTimeDetail.classList.add('europaTimeDetail');
const europaTravelTime = document.createElement('h4');
europaTravelTime.innerHTML = `est. travel`
const europaDuration = document.createElement('h4');
europaDuration.setAttribute('id', 'europaDuration');
europaDuration.innerHTML = '3 years'

europaTimeDetail.appendChild(europaTravelTime);
europaTimeDetail.appendChild(europaDuration);

europa_timeAndDistance.appendChild(europaDistanceDetail);
europa_timeAndDistance.appendChild(europaTimeDetail);


theEuropaDetail.appendChild(europa);
theEuropaDetail.appendChild(europaInformation);
theEuropaDetail.appendChild(europa_timeAndDistance);

thePlanet.appendChild(theEuropaDetail)
theEuropaDetail.style.display = 'none'

// iterating the main MoonDetails
theMoonDetail.style.display = 'flex'



// const theEuropaandPlanets = document.createElement('ul');
// theEuropaandPlanets.classList.add('theEuropaandPlanets');

// const europaList01 = document.createElement('li');
// const europaSolarMars = document.createElement('a');
// europaSolarMars.setAttribute('href', "")
// europaSolarMars.classList.add('solarSystem');
// europaSolarMars.innerHTML = 'mars'

// const europaList02 = document.createElement('li');
// const europaSolarMoon = document.createElement('a');
// europaSolarMoon.setAttribute('href', "")
// europaSolarMoon.classList.add('solarSystem');
// europaSolarMoon.innerHTML = 'europa'

// const europaList03 = document.createElement('li');
// const europaSolarEuropa = document.createElement('a');
// europaSolarEuropa.setAttribute('href', "")
// europaSolarEuropa.classList.add('solarSystem');
// europaSolarEuropa.innerHTML = 'europa'

// const europaList04 = document.createElement('li');
// const europaSolarTitans = document.createElement('a');
// europaSolarTitans.setAttribute('href', "")
// europaSolarTitans.classList.add('solarSystem');
// europaSolarTitans.innerHTML = 'titans'


// europaList01.appendChild(europaSolarMars);
// europaList02.appendChild(europaSolarMoon);
// europaList03.appendChild(europaSolarEuropa);
// europaList04.appendChild(europaSolarTitans);

// theEuropaandPlanets.appendChild(europaList01);
// theEuropaandPlanets.appendChild(europaList02);
// theEuropaandPlanets.appendChild(europaList03);
// theEuropaandPlanets.appendChild(europaList04);

