// The Crew Detail
const crewDetail = document.querySelector('.crewDetails');

// Creating a div element
const hurleyImgAndInfo = document.createElement('div');
hurleyImgAndInfo.classList.add('hurleyImgAndInfo');
const hurleyInfo = document.createElement('div');
hurleyInfo.classList.add('hurleyInfo');

const hurleyOccupation = document.createElement('h2');
hurleyOccupation.setAttribute('id', 'hurleyOccupation');
hurleyOccupation.innerHTML = `Flight Engineer`

const hurleyName = document.createElement('h1');
hurleyName.setAttribute('id', 'hurleyName');
hurleyName.innerHTML = `Anousheh Ansari`

const hurleyBioInfo = document.createElement('p');
hurleyBioInfo.setAttribute('id', 'hurleyBioInfo');
hurleyBioInfo.innerHTML = `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
Ansari was the fourth self-funded space tourist, the first self-funded woman to 
fly to the ISS, and the first Iranian in space.`

const hurleyCrewToggleContainer = document.createElement('div');
hurleyCrewToggleContainer.classList.add('hurleyCrewToggleContainer');
