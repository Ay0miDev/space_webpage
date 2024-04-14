// Destination Main Container 

// THE SECTION CONTAINER
const section = document.createElement("section");
section.classList.add('marsDetails');

const destinationAndImage = document.createElement('div');
destinationAndImage.classList.add('destinationAndimage');
const destination = document.createElement('h2');
destination.classList.add('destination')
const zeroone = document.createElement('span');
zeroone.id = 'zero&one'

// Appending the first div
destination.appendChild(zeroone);
destinationAndImage.appendChild(destination);

const marsInfo = document.createElement('div');
marsInfo.classList.add('marsInfo');
const moonImg = document.createElement('img');

// The Mars Image Container
moonImg.classList.add('moonImg');
moonImg.src = './assets/destination/image-mars.webp'
moonImg.setAttribute('alt', 'THE MARS');




