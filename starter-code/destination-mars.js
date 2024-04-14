// Destination Main Container 

// THE SECTION CONTAINER
const MarsDetail = document.querySelector(".marsDetails");

const destinationAndImage = document.createElement('div');
destinationAndImage.classList.add('destinationAndimage');
const destination = document.createElement('h2');
destination.classList.add('destination');
const zeroone = document.createElement('span');
zeroone.id = 'zero&one'
const zerooneText = document.createTextNode('01');

// Appending the first div
zeroone.appendChild(zerooneText);

const destinationText = document.createTextNode(` pick your destination`)
destination.appendChild(zeroone);
destination.appendChild(destinationText)

destinationAndImage.appendChild(destination);
console.log(destinationAndImage.textContent);

const marsInfo = document.createElement('div');
marsInfo.classList.add('marsInfo');

// The Mars Image Container
const moonImg = document.createElement('img');
moonImg.classList.add('moonImg');
moonImg.src = './assets/destination/image-mars.webp'
moonImg.setAttribute('alt', 'THE MARS');

// A new div container
const planet = document.createElement('div');
planet.classList.add('planet');

// The unodered list
const thePlanet = document.createElement('ul');
thePlanet.classList.add('theplanet');

const list01 = document.createElement('li');
const list02 = document.createElement('li');
const list03 = document.createElement('li');
const list04 = document.createElement('li');

const solarSystem01 = document.createElement('a');
solarSystem01.classList.add('solarsystem');
solarSystem01.setAttribute('href', '')

const solarSystem02 = document.createElement('a');
solarSystem02.classList.add('solarsystem');
solarSystem02.setAttribute('href', '')

const solarSystem03 = document.createElement('a');
solarSystem03.classList.add('solarsystem');
solarSystem03.setAttribute('href', '')

const solarSystem04 = document.createElement('a');
solarSystem04.classList.add('solarsystem');
solarSystem04.setAttribute('href', '')

solarSystem01.innerText = `moon`
solarSystem02.innerText = `mars`
solarSystem03.innerText = `europa`
solarSystem04.innerText = `titan`

list01.appendChild(solarSystem01);
list02.appendChild(solarSystem02);
list03.appendChild(solarSystem03);
list04.appendChild(solarSystem04);
console.log(list01.textContent);

// Append all list in the unordered element
thePlanet.appendChild(list01)
thePlanet.appendChild(list02)
thePlanet.appendChild(list03)
thePlanet.appendChild(list04)
console.log(thePlanet.innerText);

const Mars = document.createElement('h1');
Mars.classList.add('mars');
Mars.textContent = `mars`
console.log(Mars.textContent);

const Information = document.createElement('p');
Information.classList.add('information');
const InformationText = document.createTextNode(`Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
the tallest planetary mountain in our solar system. It’s two and a half times 
the size of Everest!`)
Information.appendChild(InformationText);

const TimeAndDistance = document.createElement('div');
TimeAndDistance.classList.add('timeAndDistance');

const DistanceDetail = document.createElement('div');
DistanceDetail.classList.add('distanceDetails');

const avgDistance = document.createElement('h4');
avgDistance.innerText = `avg. distance`
const milkm = document.createElement('h4');
milkm.setAttribute('id', 'kilometer');
milkm.innerText = `225 mil. km`

DistanceDetail.appendChild(avgDistance);
DistanceDetail.appendChild(milkm);
console.log(DistanceDetail.textContent);

const TimeDetail = document.createElement('div');
TimeDetail.classList.add('timeDetails');

const travelTimes = document.createElement('h4');
travelTimes.innerText = `est. travel ti`
const months = document.createElement('h4');
months.setAttribute('id', 'month')
months.innerText = `9 months`
TimeDetail.appendChild(travelTimes);
TimeDetail.appendChild(months);
console.log(TimeDetail.textContent);

TimeAndDistance.appendChild(DistanceDetail);
TimeAndDistance.appendChild(TimeDetail);

// Appending all divs
planet.appendChild(thePlanet);
planet.appendChild(Mars);
planet.appendChild(Information);
planet.appendChild(TimeAndDistance);

marsInfo.appendChild(moonImg);
marsInfo.appendChild(planet);

MarsDetail.appendChild(destinationAndImage);
MarsDetail.appendChild(marsInfo);