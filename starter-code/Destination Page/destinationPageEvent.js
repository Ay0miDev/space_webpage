// Function to execute the display of the container one after the other

function showDestinationInfo (optionDestination) {
    theMarsDetail.style.display = optionDestination === 0 ? 'flex' : 'none';
    theMoonDetail.style.display = optionDestination === 1 ? 'flex' : 'none';
    theEuropaDetail.style.display = optionDestination === 2 ? 'flex' : 'none';
    theTitanDetail.style.display = optionDestination === 3 ? 'flex' : 'none';
}

// Undating the click elemnent with a visible style
function underlinedAfterClicked (selectedOption) {
    solarSystemOption.forEach((option, destination) =>{
        if(destination === selectedOption) {
            option.style.backgroundColor = 'rgba(255, 255, 255, 0.43)'
            option.style.padding = '5px 10px'
            option.style.borderRadius = '15px'
        } else {
            option.style.backgroundColor = 'transparent'
        }
    })
}


// Declaring a variable for the "solarsystem" ID attribute
const solarSystemOption = document.querySelectorAll('.solarsystem')

// Updating the click event listener
solarSystemOption.forEach((option, destination) => {
    option.addEventListener('click', function(event){
        event.preventDefault()
        showDestinationInfo (destination)
        underlinedAfterClicked(destination)
    })
})



// Creating a default page section after reloading
document.addEventListener('DOMContentLoaded', function(){
    showDestinationInfo(0)
})

const solarSystemLine01 = document.getElementsByClassName('solarSystemLine')[0]
const solarSystemLine02 = document.getElementsByClassName('solarSystemLine')[1]
const solarSystemLine03 = document.getElementsByClassName('solarSystemLine')[2]
const solarSystemLine04 = document.getElementsByClassName('solarSystemLine')[3]



document.addEventListener('click', function(){


    // Conditional statement for switching the respective images
    if(theMarsDetail.style.display === 'flex') {
        universeImage.setAttribute('src', '../assets/destination/image-mars.webp')
        solarSystemLine01.style.display = 'block'
        solarSystemLine02.style.display = 'none'
        solarSystemLine03.style.display = 'none'
        solarSystemLine04.style.display = 'none'
    } else if(theMoonDetail.style.display === 'flex') {
        universeImage.setAttribute('src', '../assets/destination/image-moon.webp')
    } else if(theEuropaDetail.style.display === 'flex') {
        universeImage.setAttribute('src', '../assets/destination/image-europa.webp')
    } else {
        universeImage.setAttribute('src', '../assets/destination/image-titan.webp')
    }
})