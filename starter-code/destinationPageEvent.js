// // Creating a function to show each Destination Information

// function showDestinationInfo (optionDestination) {
//     marsPlanet.style.display = optionDestination === 0 ? 'block' : 'none';
//     planetMoon.style.display = optionDestination === 1 ? 'block' : 'none';
//     planetEuropa.style.display = optionDestination === 2 ? 'block' : 'none';
//     planetTitan.style.display = optionDestination === 3 ? 'block' : 'none'

// }



// if(marsPlanet.style.display === 'block') {
//     marsPlanet.style.display === 'block'
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
//     marsPlanet.style.display = 'block'
// })

const marsRef = document.getElementById('marsRef')
const moonRef = document.getElementById('moonRef')
const europaRef = document.getElementById('europaRef')
const titanRef = document.getElementById('titanRef')

marsRef.addEventListener('click', function(){
    marsPlanet.style.display = 'block'
    // marsPlanet.style.flexDirection = 'column'
    planetMoon.style.display = 'none'
    planetEuropa.style.display = 'none'
    planetTitan.style.display = 'none'
})

moonRef.addEventListener('click', function(){
    planetMoon.style.display = 'block'
    // planetMoon.style.flexDirection = 'column'
    marsPlanet.style.display = 'none'
    planetEuropa.style.display = 'none'
    planetTitan.style.display = 'none'
})

europaRef.addEventListener('click', function(){
    planetEuropa.style.display = 'block'
    // planetEuropa.style.flexDirection = 'column'
    marsPlanet.style.display = 'none'
    planetMoon.style.display = 'none'
    planetTitan.style.display = 'none'
})

titanRef.addEventListener('click', function(){
    planetTitan.style.display = 'block'
    // planetTitan.style.flexDirection = 'column'
    marsPlanet.style.display = 'none'
    planetMoon.style.display = 'none'
    planetEuropa.style.display = 'none'
})


moonSolarMars.addEventListener('click', function(){
    marsPlanet.style.display = 'block'
    // marsPlanet.style.flexDirection = 'column'
    planetMoon.style.display = 'none'
    planetEuropa.style.display = 'none'
    planetTitan.style.display = 'none'
})

moonSolarMoon.addEventListener('click', function(){
    planetMoon.style.display = 'block'
    // planetMoon.style.flexDirection = 'column'
    marsPlanet.style.display = 'none'
    planetEuropa.style.display = 'none'
    planetTitan.style.display = 'none'
})

moonSolarEuropa.addEventListener('click', function(){
    planetEuropa.style.display = 'block'
    // planetEuropa.style.flexDirection = 'column'
    marsPlanet.style.display = 'none'
    planetMoon.style.display = 'none'
    planetTitan.style.display = 'none'
})

moonSolarTitans.addEventListener('click', function(){
    planetTitan.style.display = 'block'
    // planetTitan.style.flexDirection = 'column'
    marsPlanet.style.display = 'none'
    planetMoon.style.display = 'none'
    planetEuropa.style.display = 'none'
})



europaSolarMars.addEventListener('click', function(){
    marsPlanet.style.display = 'block'
    // marsPlanet.style.flexDirection = 'column'
    planetMoon.style.display = 'none'
    planetEuropa.style.display = 'none'
    planetTitan.style.display = 'none'
})

europaSolarMoon.addEventListener('click', function(){
    planetMoon.style.display = 'block'
    // planetMoon.style.flexDirection = 'column'
    marsPlanet.style.display = 'none'
    planetEuropa.style.display = 'none'
    planetTitan.style.display = 'none'
})

europaSolarEuropa.addEventListener('click', function(){
    planetEuropa.style.display = 'block'
    // planetEuropa.style.flexDirection = 'column'
    marsPlanet.style.display = 'none'
    planetMoon.style.display = 'none'
    planetTitan.style.display = 'none'
})

europaSolarTitans.addEventListener('click', function(){
    planetTitan.style.display = 'block'
    // planetTitan.style.flexDirection = 'column'
    marsPlanet.style.display = 'none'
    planetMoon.style.display = 'none'
    planetEuropa.style.display = 'none'
})



titanSolarMars.addEventListener('click', function(){
    marsPlanet.style.display = 'block'
    // marsPlanet.style.flexDirection = 'column'
    planetMoon.style.display = 'none'
    planetEuropa.style.display = 'none'
    planetTitan.style.display = 'none'
})

titanSolarMoon.addEventListener('click', function(){
    planetMoon.style.display = 'block'
    // planetMoon.style.flexDirection = 'column'
    marsPlanet.style.display = 'none'
    planetEuropa.style.display = 'none'
    planetTitan.style.display = 'none'
})

titanSolartEuropa.addEventListener('click', function(){
    planetEuropa.style.display = 'block'
    // planetEuropa.style.flexDirection = 'column'
    marsPlanet.style.display = 'none'
    planetMoon.style.display = 'none'
    planetTitan.style.display = 'none'
})

titanSolarTitans.addEventListener('click', function(){
    planetTitan.style.display = 'block'
    // planetTitan.style.flexDirection = 'column'
    marsPlanet.style.display = 'none'
    planetMoon.style.display = 'none'
    planetEuropa.style.display = 'none'
})