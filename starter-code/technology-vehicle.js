const eventImg = document.getElementById('launchVehicleImg');
const numOne = document.getElementsByClassName('numOrder')[0];
const numTwo = document.getElementsByClassName('numOrder')[1];
const numThree = document.getElementsByClassName('numOrder')[2];

// Locating the Container of the Description text
const tech_Info = document.getElementById('techInfo');
// Creating a new text in javascript
const space_port = document.createElement('h1');
space_port.setAttribute('id', 'launchVehicle');
space_port.innerHTML = `Spaceport`;

const space_port_Info = document.createElement('p');
space_port_Info.setAttribute('id', 'launchVehicleInfo');
console.log(typeof space_port_Info);
const space_port_Info_Text = document.createTextNode(`A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
by analogy to the seaport for ships or airport for aircraft. Based in the 
famous Cape Canaveral, our spaceport is ideally situated to take advantage 
of the Earth’s rotation for launch.`);

tech_Info.appendChild(space_port);
tech_Info.appendChild(space_port_Info);
console.log(tech_Info);


// if(space_port.id = 'launchVehicle') {
//     tech_Info.style.display = 'none'
// }else if(space_port.id = 'launchVehicle'){
//     tech_Info.style.display = 'block'
// }






// numOne.addEventListener('click', function changeImg() {
if(eventImg.setAttribute('alt', 'LAUNCH VEHICLE')) {
    eventImg.setAttribute('src', './assets/technology/image-launch-vehicle-portrait.jpg')
}else if(eventImg.alt != '') {

}


if (condition) {
    
} else {
    
}