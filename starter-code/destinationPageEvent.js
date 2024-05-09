// // Creating a function to show each Destination Information

// function showDestinationInfo (optionDestination) {
//     marsPlanet.style.display = optionDestination === 0 ? 'flex' : 'none';
//     planetMoon.style.display = optionDestination === 1 ? 'flex' : 'none';
//     planetEuropa.style.display = optionDestination === 2 ? 'flex' : 'none';
//     planetTitan.style.display = optionDestination === 3 ? 'flex' : 'none'

// }



// if(marsPlanet.style.display === 'flex') {
//     marsPlanet.style.display === 'flex'
//     planetMoon.style.display === 'none'
//     pla
// }


// moonSolarMars.forEach((option, destination) => {
//     option.addEventListener('click', function(){
//         showDestinationInfo(destination);
//     })
// })

// europaSolarMars.forEach((option, destination) =>{
//     option.addEventListener('click', function(){
//         showDestinationInfo(destination)
//     })
// })

// titanSolarMars.forEach((option, destination) =>{
//     option.addEventListener('click', function(){
//         showDestinationInfo(destination)
//     })
// })

// document.addEventListener('DOMContentLoaded', function(){
//     showDestinationInfo(3)
// })


// document.addEventListener('DOMContentLoaded', function(){
//     marsPlanet.style.display = 'flex'
// })



// Function to execute the display of the container one after the other

function showDestinationInfo (optionDestination) {
    theMarsDetail.style.display = optionDestination === 0 ? 'flex' : 'none';
    theMoonDetail.style.display = optionDestination === 1 ? 'flex' : 'none';
    theEuropaDetail.style.display = optionDestination === 2 ? 'flex' : 'none';
    theTitanDetail.style.display = optionDestination === 3 ? 'flex' : 'none';
}

function underlinedAfterClicked (selectedOption) {
    solarSystemOption.forEach((option, destination) =>{
        if(destination === selectedOption) {
            option.style.backgroundColor = 'red'
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



// Creating a default page section after reloadig
document.addEventListener('DOMContentLoaded', function(){
    showDestinationInfo(0)
})




// Conditional statement for switching the respective images
document.addEventListener('click', function(){
    if(theMarsDetail.style.display === 'flex') {
        universeImage.setAttribute('src', './assets/destination/image-mars.webp')
    } else if(theMoonDetail.style.display === 'flex') {
        universeImage.setAttribute('src', './assets/destination/image-moon.webp')
    } else if(theEuropaDetail.style.display === 'flex') {
        universeImage.setAttribute('src', './assets/destination/image-europa.webp')
    } else {
        universeImage.setAttribute('src', './assets/destination/image-titan.webp')
    }
})