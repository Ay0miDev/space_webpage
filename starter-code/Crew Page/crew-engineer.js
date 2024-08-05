// The Image and Info Div
const ImgAndInfo = document.querySelector('.ansari_Img_Info');

// The Info Div Omly
const infoContainer = document.querySelector('.ansariImgInfo');



// DOUGLAS HURLEY PAGE
// Creating a Div element
const hurleyText = document.createElement('div');
hurleyText.setAttribute('id', 'hurleyText');

const hurleyOccupation = document.createElement('h2');
hurleyOccupation.setAttribute('id', 'hurleyOccupation');
hurleyOccupation.innerHTML = `Commander`

const hurleyName = document.createElement('h1');
hurleyName.setAttribute('id', 'hurleyName');
hurleyName.innerHTML = `Douglas Hurley`

const hurleyBioInfo = document.createElement('p');
hurleyBioInfo.setAttribute('id', 'hurleyBioInfo');
hurleyBioInfo.innerHTML = `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
and former NASA astronaut. He launched into space for the third time as 
commander of Crew Dragon Demo-2.`

hurleyText.appendChild(hurleyOccupation);
hurleyText.appendChild(hurleyName);
hurleyText.appendChild(hurleyBioInfo);

infoContainer.appendChild(hurleyText);
hurleyText.style.display = 'none'




// MARK SHUTTLEWORTH PAGE

// Creating a Div element
const shuttleworthText = document.createElement('div');
shuttleworthText.setAttribute('id', 'shuttleworthText');

const shuttleworthOccupation = document.createElement('h2');
shuttleworthOccupation.setAttribute('id', 'shuttleworthOccupation');
shuttleworthOccupation.innerHTML = `  Mission Specialist`

const shuttleworthName = document.createElement('h1');
shuttleworthName.setAttribute('id', 'shuttleworthName');
shuttleworthName.innerHTML = `Mark Shuttleworth`

const shuttleworthBioInfo = document.createElement('p');
shuttleworthBioInfo.setAttribute('id', 'shuttleworthBioInfo');
shuttleworthBioInfo.innerHTML = `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
the Linux-based Ubuntu operating system. Shuttleworth became the first South 
African to travel to space as a space tourist.`

shuttleworthText.appendChild(shuttleworthOccupation);
shuttleworthText.appendChild(shuttleworthName);
shuttleworthText.appendChild(shuttleworthBioInfo);

infoContainer.appendChild(shuttleworthText);
shuttleworthText.style.display = 'none'




// VICTOR GLOVER PAGE

// Creating a Div element
const gloverText = document.createElement('div');
gloverText.setAttribute('id', 'gloverText');

const gloverOccupation = document.createElement('h2');
gloverOccupation.setAttribute('id', 'gloverOccupation');
gloverOccupation.innerHTML = `Pilot`

const gloverName = document.createElement('h1');
gloverName.setAttribute('id', 'gloverName');
gloverName.innerHTML = `Victor Glover`

const gloverBioInfo = document.createElement('p');
gloverBioInfo.setAttribute('id', 'gloverBioInfo');
gloverBioInfo.innerHTML = `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
International Space Station. Glover is a commander in the U.S. Navy where 
he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
station systems flight engineer.`

gloverText.appendChild(gloverOccupation);
gloverText.appendChild(gloverName);
gloverText.appendChild(gloverBioInfo);

infoContainer.appendChild(gloverText);
gloverText.style.display = 'none'




// The clicking to navigate through the page
const toggleBio = document.querySelectorAll('.crewToggle')


// The first toggle container
const ansariText = document.querySelector('#ansariText')

// Function to execute a click event through diff pages
function bioCrewInfo (optionCrew) {
    ansariText.style.display = optionCrew === 0 ? 'block' : 'none';
    hurleyText.style.display = optionCrew === 1 ? 'block' : 'none';
    shuttleworthText.style.display = optionCrew === 2 ? 'block' : 'none'
    gloverText.style.display = optionCrew === 3 ? 'block' : 'none'
}

// Function to change the background color of respective clicked toggled
function crewTogggleBackground (changeBgOption) {
    toggleBio.forEach((option, crew) => {
        if(crew === changeBgOption){
            option.style.backgroundColor = 'white'
        }
        else {
            option.style.backgroundColor = 'grey'
        }
    })
}

// Iterating the function for the click event to be effective
toggleBio.forEach((option, crew) => {
    option.addEventListener('click', function(event){
        bioCrewInfo(crew)
        crewTogggleBackground(crew)
        event.preventDefault()
    })
})




// The Crew role Images
const crewImageRoles = document.getElementById('ansariImg')
document.addEventListener('click', function(){

    if (ansariText.style.display === "block") {
        crewImageRoles.setAttribute('src', '../assets/crew/image-anousheh-ansari.png')
    } else if (hurleyText.style.display === 'block') {
        crewImageRoles.setAttribute('src', '../assets/crew/image-douglas-hurley.png')
    } else if (shuttleworthText.style.display === 'block') {
        crewImageRoles.setAttribute('src', '../assets/crew/image-mark-shuttleworth.png')
    } else {
        crewImageRoles.setAttribute('src', '../assets/crew/image-victor-glover.png')
    }
})


// A Statement to reverse the div except the first container  
if (ansariText.display === "block") {
    infoContainer.style.display = 'flex'
    infoContainer.style.flexDirection = "column"
}else {
    infoContainer.style.display = 'flex'
    infoContainer.style.flexDirection = "column-reverse"
}

// Retconning