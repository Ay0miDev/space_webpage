
// CREATING THE TITAN SEGMENT

// Creating a new div element, nesting all elements
const theTitanDetail = document.createElement('div');
theTitanDetail.setAttribute('id', 'theTitanDetail');

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


theTitanDetail.appendChild(titan);
theTitanDetail.appendChild(titanInformation);
theTitanDetail.appendChild(titan_timeAndDistance);

thePlanet.appendChild(theTitanDetail)
theTitanDetail.style.display = 'flex'


// Iterating the main EuropaDetail
theEuropaDetail.style.display = 'none'
