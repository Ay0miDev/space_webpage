// const numOne = document.getElementsByClassName('numOrder')[0];
// const numTwo = document.getElementsByClassName('numOrder')[1];
// const numThree = document.getElementsByClassName('numOrder')[2];

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
space_port.innerHTML = `Spaceport`;

const space_port_Info = document.createElement('p');
space_port_Info.setAttribute('id', 'spacePortInfo');
space_port_Info.style.textTransform = 'capitalize';
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
techInfo_spacePort.style.display = 'none'




// Creating a new text in javascript for Space Port
const techInfo_Capsule = document.createElement('div');
techInfo_Capsule.setAttribute('id', 'techInfo_Capsule');

const capsuleTerminology = document.createElement('h3');
capsuleTerminology.setAttribute('id', 'capsuleTerminology');
capsuleTerminology.innerHTML = 'The terminology...';

const capsule = document.createElement('h1');
capsule.setAttribute('id', 'capsule');
capsule.innerHTML = `Space capsule`;

const capsule_Info = document.createElement('p');
capsule_Info.setAttribute('id', 'capsuleInfo');
capsule_Info.style.textTransform = 'capitalize';
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
techInfo_Capsule.style.display = 'none'



// numOne.addEventListener('click', function(){
//     tech_Info.style.display = 'block'
//     techInfo_spacePort.style.display = 'none'
//     techInfo_Capsule.style.display = 'none'
// })
// numTwo.addEventListener('click', function(){
//     tech_Info.style.display = 'none'
//     techInfo_spacePort.style.display = 'block'
//     techInfo_Capsule.style.display = 'none'
// })
// numThree.addEventListener('click', function(){
//     tech_Info.style.display = 'none'
//     techInfo_spacePort.style.display = 'none'
//     techInfo_Capsule.style.display = 'block'
// })

const techOptions = document.querySelectorAll('.numOrder');
function showTechInfo(optionIndex) {

    tech_Info.style.display = optionIndex === 0 ? 'block' : 'none';
    techInfo_spacePort.style.display = optionIndex === 1 ? 'block' : 'none';
    techInfo_Capsule.style.display = optionIndex === 2 ? 'block' : 'none';
}

techOptions.forEach((option, index) => {
    option.addEventListener('click', function() {
        showTechInfo(index);
    })
})


const eventImg = document.getElementById('launchVehicleImg');


document.addEventListener('click', function() {
    if(tech_Info.style.display === 'block'){
        eventImg.setAttribute('src', './assets/technology/image-launch-vehicle-portrait.jpg');
        numOne.style.backgroundColor = 'white'
        numOne.style.color = 'black'
        numTwo.style.backgroundColor = 'transparent'
        numTwo.style.color = 'white'
        numThree.style.backgroundColor = 'transparent'
        numThree.style.color = 'white'

    } else if(techInfo_spacePort.style.display === 'block'){
        eventImg.setAttribute('src', './assets/technology/image-space-capsule-portrait.jpg');
        numOne.style.backgroundColor = 'transparent'
        numOne.style.color = 'white'
        numTwo.style.backgroundColor = 'white'
        numTwo.style.color = 'black'
        numThree.style.backgroundColor = 'transparent'
        numThree.style.color = 'white'
    } else {
        eventImg.setAttribute('src', './assets/technology/image-spaceport-portrait.jpg');
        numOne.style.backgroundColor = 'transparent'
        numOne.style.color = 'white'
        numTwo.style.backgroundColor = 'transparent'
        numTwo.style.color = 'white'
        numThree.style.backgroundColor = 'white'
        numThree.style.color = 'black'
    }
});

