const eventImg = document.getElementById('launchVehicleImg');
const numOne = document.getElementsByClassName('numOrder')[0];
const numTwo = document.getElementsByClassName('numOrder')[1];
const numThree = document.getElementsByClassName('numOrder')[2];

// Locating the Container of the Description text
const tech_Info = document.getElementById('techInfo');
const techCartegory = document.getElementById('techCart');
// Creating a new text in javascript for Space Port
const techInfo_spacePort = document.createElement('div');
techInfo_spacePort.setAttribute('id', 'techInfo_spacePort');

const spacePostTerminology = document.createElement('h3');
spacePostTerminology.setAttribute('id', 'spacePostTerminology');
spacePostTerminology.innerHTML = 'The terminology...';

const space_port = document.createElement('h1');
space_port.setAttribute('id', 'spacePort');
space_port.style.fontFamily = 'none';
space_port.style.fontWeight = '300';
space_port.style.fontSize = '60px';
space_port.innerHTML = `Spaceport`;

const space_port_Info = document.createElement('p');
space_port_Info.setAttribute('id', 'spacePortInfo');
space_port_Info.style.textTransform = 'capitalize';
space_port_Info.style.lineHeight = '30px';
space_port_Info.style.letterSpacing = '2px';
space_port_Info.style.color = 'rgba(255, 255, 255, 0.43';
const space_port_Info_Text = document.createTextNode(`A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
by analogy to the seaport for ships or airport for aircraft. Based in the 
famous Cape Canaveral, our spaceport is ideally situated to take advantage 
of the Earth’s rotation for launch.`);
space_port_Info.appendChild(space_port_Info_Text);

// Appending all text into a single container
techInfo_spacePort.appendChild(spacePostTerminology);
techInfo_spacePort.appendChild(space_port);
techInfo_spacePort.appendChild(space_port_Info);

// The container created appended to the main div element
techCartegory.appendChild(techInfo_spacePort);
techInfo_spacePort.style,display = 'none'




// Creating a new text in javascript for Space Port
const techInfo_Capsule = document.createElement('div');
techInfo_Capsule.setAttribute('id', 'techInfo_Capsule');

const capsuleTerminology = document.createElement('h3');
capsuleTerminology.setAttribute('id', 'capsuleTerminology');
capsuleTerminology.innerHTML = 'The terminology...';

const capsule = document.createElement('h1');
capsule.setAttribute('id', 'capsule');
capsule.style.fontFamily = 'none';
capsule.style.fontWeight = '300';
capsule.style.fontSize = '60px';
capsule.innerHTML = `Space capsule`;

const capsule_Info = document.createElement('p');
capsule_Info.setAttribute('id', 'capsuleInfo');
capsule_Info.style.textTransform = 'capitalize';
capsule_Info.style.lineHeight = '30px';
capsule_Info.style.letterSpacing = '2px';
capsule_Info.style.color = 'rgba(255, 255, 255, 0.43';
const capsule_Info_Text = document.createTextNode(`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
you'll spend your time during the flight. It includes a space gym, cinema, 
and plenty of other activities to keep you entertained.`);
capsule_Info.appendChild(capsule_Info_Text);

// Appending all text into a single container
techInfo_Capsule.appendChild(capsuleTerminology);
techInfo_Capsule.appendChild(capsule);
techInfo_Capsule.appendChild(capsule_Info);

// The container created appended to the main div element
techCartegory.appendChild(techInfo_Capsule);
techInfo_Capsule.style,display = 'none'

numOne.addEventListener('click', function(){
    tech_Info.style.display = 'block'
    techInfo_spacePort.style,display = 'none'
    techInfo_Capsule.style,display = 'none'
})
numTwo.addEventListener('click', function(){
    tech_Info.style.display = 'none'
    techInfo_spacePort.style,display = 'block'
    techInfo_Capsule.style,display = 'none'
})
numThree.addEventListener('click', function(){
    tech_Info.style.display = 'none'
    techInfo_spacePort.style,display = 'none'
    techInfo_Capsule.style,display = 'block'
})



















const launchVehicle = document.getElementById('launchVehicle');



// if(numOne.addEventListener('click', function(){

// })) {
//     tech_Info.style.display = 'none'
//     tech_Info_Capsule.style.display = 'none'
// } else if(numTwo.addEventListener('click', function(){

// })) {
//     tech_Info.style.display = 'block'
//     tech_Info_Capsule.style.display = 'none'
// } else{
//     tech_Info.style.display = 'none'
//     tech_Info_Capsule.style.display = 'block'
// }






// numOne.addEventListener('click', function changeImg() {
if(eventImg.setAttribute('alt', 'LAUNCH VEHICLE')) {
    eventImg.setAttribute('src', './assets/technology/image-launch-vehicle-portrait.jpg')
}else if(eventImg.alt != '') {

}


if (condition) {
    
} else {
    
}