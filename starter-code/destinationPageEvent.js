// Creating a function to show each Destination Information

function showDestinationInfo (optionDestination) {
    marsPlanet.style.display = optionDestination === 0 ? 'flex' : 'none'
    planetMoon.style.display = optionDestination === 1 ? 'flex' : 'none'
    planetEuropa.style.display = optionDestination === 2 ? 'flex' : 'none'
    planetTitan.style.display = optionDestination === 3 ? 'flex' : 'none'

}
