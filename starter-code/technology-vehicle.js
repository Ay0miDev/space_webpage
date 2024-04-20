const eventImg = document.getElementById('launchVehicleImg');
const numOne = document.getElementsByClassName('numOrder')[0];
const numTwo = document.getElementsByClassName('numOrder')[1];
const numThree = document.getElementsByClassName('numOrder')[2];

// Locating the Container of the Description text
const tech_Info = document.getElementById('techInfo');
// Creating a new text in javascript for Space Port
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

tech_Info.appendChild(space_port);
tech_Info.appendChild(space_port_Info);
tech_Info.style.display = 'none'

// Locating the Container of the Description text
const tech_Info_Capsule = document.getElementById('techInfo');
// Creating a new text in javascript for Space Port
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

tech_Info_Capsule.appendChild(capsule);
tech_Info_Capsule.appendChild(capsule_Info)
tech_Info_Capsule.style.display = 'none'



















const launchVehicle = document.getElementById('launchVehicle');



if(numOne.addEventListener('click', function(){

})) {
    tech_Info.style.display = 'none'
    tech_Info_Capsule.style.display = 'none'
} else if(numTwo.addEventListener('click', function(){

})) {
    tech_Info.style.display = 'block'
    tech_Info_Capsule.style.display = 'none'
} else{
    tech_Info.style.display = 'none'
    tech_Info_Capsule.style.display = 'block'
}






// numOne.addEventListener('click', function changeImg() {
if(eventImg.setAttribute('alt', 'LAUNCH VEHICLE')) {
    eventImg.setAttribute('src', './assets/technology/image-launch-vehicle-portrait.jpg')
}else if(eventImg.alt != '') {

}


if (condition) {
    
} else {
    
}