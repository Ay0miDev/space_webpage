// // Destination Main Container 

// // THE SECTION CONTAINER
// const MarsDetail = document.querySelector(".marsDetails");

// const destinationAndImage = document.createElement('div');
// destinationAndImage.classList.add('destinationAndimage');
// const destination = document.createElement('h2');
// destination.classList.add('destination');
// const zeroone = document.createElement('span');
// zeroone.id = 'zero&one'
// const zerooneText = document.createTextNode('01');

// // Appending the first div
// zeroone.appendChild(zerooneText);

// const destinationText = document.createTextNode(`pick your destination`)
// destination.appendChild(zeroone);
// destination.appendChild(destinationText)

// destinationAndImage.appendChild(destination);
// console.log(destinationAndImage.textContent);

// const marsInfo = document.createElement('div');
// marsInfo.classList.add('marsInfo');

// // The Mars Image Container
// const moonImg = document.createElement('img');
// moonImg.classList.add('moonImg');
// moonImg.src = './assets/destination/image-mars.webp'
// moonImg.setAttribute('alt', 'THE MARS');

// // A new div container
// const planet = document.createElement('div');
// planet.classList.add('planet');

// // The unodered list
// const thePlanet = document.createElement('ul');
// thePlanet.classList.add('theplanet');

// const list01 = document.createElement('li');
// const list02 = document.createElement('li');
// const list03 = document.createElement('li');
// const list04 = document.createElement('li');

// const solarSystem01 = document.createElement('a');
// solarSystem01.classList.add('solarsystem');
// solarSystem01.setAttribute('href', '')

// const solarSystem02 = document.createElement('a');
// solarSystem02.classList.add('solarsystem');
// solarSystem02.setAttribute('href', '')

// const solarSystem03 = document.createElement('a');
// solarSystem03.classList.add('solarsystem');
// solarSystem03.setAttribute('href', '')

// const solarSystem04 = document.createElement('a');
// solarSystem04.classList.add('solarsystem');
// solarSystem04.setAttribute('href', '')

// solarSystem01.innerText = `mars`
// solarSystem02.innerText = `moon`
// solarSystem03.innerText = `europa`
// solarSystem04.innerText = `titan`

// list01.appendChild(solarSystem01);
// list02.appendChild(solarSystem02);
// list03.appendChild(solarSystem03);
// list04.appendChild(solarSystem04);
// console.log(list01.textContent);

// // Append all list in the unordered element
// thePlanet.appendChild(list01)
// thePlanet.appendChild(list02)
// thePlanet.appendChild(list03)
// thePlanet.appendChild(list04)
// console.log(thePlanet.innerText);

// const Mars = document.createElement('h1');
// Mars.classList.add('mars');
// Mars.textContent = `mars`
// console.log(Mars.textContent);

// const Information = document.createElement('p');
// Information.classList.add('information');
// const InformationText = document.createTextNode(`Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
// the tallest planetary mountain in our solar system. It’s two and a half times 
// the size of Everest!`)
// Information.appendChild(InformationText);

// const TimeAndDistance = document.createElement('div');
// TimeAndDistance.classList.add('timeAndDistance');

// const DistanceDetail = document.createElement('div');
// DistanceDetail.classList.add('distanceDetails');

// const avgDistance = document.createElement('h4');
// avgDistance.innerText = `avg. distance`
// const milkm = document.createElement('h4');
// milkm.setAttribute('id', 'kilometer');
// milkm.innerText = `225 mil. km`

// DistanceDetail.appendChild(avgDistance);
// DistanceDetail.appendChild(milkm);
// console.log(DistanceDetail.textContent);

// const TimeDetail = document.createElement('div');
// TimeDetail.classList.add('timeDetails');

// const travelTimes = document.createElement('h4');
// travelTimes.innerText = `est. travel ti`
// const months = document.createElement('h4');
// months.setAttribute('id', 'month')
// months.innerText = `9 months`
// TimeDetail.appendChild(travelTimes);
// TimeDetail.appendChild(months);
// console.log(TimeDetail.textContent);

// TimeAndDistance.appendChild(DistanceDetail);
// TimeAndDistance.appendChild(TimeDetail);

// // Appending all divs
// planet.appendChild(thePlanet);
// planet.appendChild(Mars);
// planet.appendChild(Information);
// planet.appendChild(TimeAndDistance);

// marsInfo.appendChild(moonImg);
// marsInfo.appendChild(planet);

// MarsDetail.appendChild(destinationAndImage);
// MarsDetail.appendChild(marsInfo);






















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
moonSolarMars.classList.add('moonSolarMars');
moonSolarMars.innerHTML = 'mars'

const moonList02 = document.createElement('li');
const moonSolarMoon = document.createElement('a');
moonSolarMoon.classList.add('moonSolarMoon');
moonSolarMoon.innerHTML = 'moon'

const moonList03 = document.createElement('li');
const moonSolarEuropa = document.createElement('a');
moonSolarEuropa.classList.add('moonSolarEuropa');
moonSolarEuropa.innerHTML = 'europa'

const moonList04 = document.createElement('li');
const moonSolarTitans = document.createElement('a');
moonSolarTitans.classList.add('moonSolarTitans');
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
const moonMilKm = document.createElement()