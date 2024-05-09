
// CREATING THE MOON SEGMENT

// The Planet Image
const universeImage = document.getElementById('moonImg');

// The div with class "Planet"
const thePlanet = document.querySelector('.planet')

// Creating a div element to replace theMarsDetails
const theMoonDetail = document.createElement('div');
theMoonDetail.setAttribute('id', 'theMoonDetail');


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


theMoonDetail.appendChild(moon);
theMoonDetail.appendChild(moonInformation);
theMoonDetail.appendChild(moon_timeAndDistance);

thePlanet.appendChild(theMoonDetail)
theMoonDetail.style.display = 'flex'


// Iterating the main MarsDetail
const theMarsDetails = document.getElementById('theMarsDetail')
theMarsDetails.style.display = 'none'


