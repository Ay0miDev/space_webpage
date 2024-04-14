// Destination Main Container 

// THE SECTION CONTAINER
const section = document.createElement("section");
section.classList.add('marsDetails');

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
const solarSystem02 = document.createElement('a');
solarSystem01.classList.add('solarsystem');
const solarSystem03 = document.createElement('a');
solarSystem01.classList.add('solarsystem');
const solarSystem04 = document.createElement('a');
solarSystem01.classList.add('solarsystem');








