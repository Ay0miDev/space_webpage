// Creating a function to show each Destination Information

function showDestinationInfo (optionDestination) {
    marsPlanet.style.display = optionDestination === 0 ? 'block' : 'none'
    planetMoon.style.display = optionDestination === 1 ? 'block' : 'none'
    planetEuropa.style.display = optionDestination === 2 ? 'block' : 'none'
    planetTitan.style.display = optionDestination === 3 ? 'block' : 'none'

}


moonSolarMars.forEach((option, destination) => {
    option.addEventListener('click', function(){
        showDestinationInfo(destination);
    })
})

europaSolarMars.forEach((option, destination) =>{
    option.addEventListener('click', function(){
        showDestinationInfo(destination)
    })
})

titanSolarMars.forEach((option, destination) =>{
    option.addEventListener('click', function(){
        showDestinationInfo(destination)
    })
})