// // Select all elements with the ID 'singleInfo'
// const navInfoElements = document.querySelectorAll('#singleInfo');

// // Loop through each element and add a click event listener
// navInfoElements.forEach(navInfo => {
//     navInfo.addEventListener('click', bgfixed);
// });

// // Define the function to change the background color
// function bgfixed(event) {
//     event.target.style.backgroundColor = 'red';
// }


// const navInfoElements = document.querySelectorAll('#singleInfo')

const navInfoElements01 = document.getElementsByClassName('singleInfo01')[0];
const navInfoElements02 = document.getElementsByClassName('singleInfo02')[0];
const navInfoElements03 = document.getElementsByClassName('singleInfo03')[0];
const navInfoElements04 = document.getElementsByClassName('singleInfo04')[0];

// The click function on the hamburger
    function navFunction(){
        const myInfoContent = document.getElementById('infoContentResponsive')
        if(myInfoContent.className === 'navContainer') {
            myInfoContent.className += ' responsive'
        } else {
            myInfoContent.className = 'navContainer'
        }
    }
