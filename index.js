// // The magic happens here!
// const etch = () => {
//     const pix = document.querySelector('.pixel')
//     pix.addEventListener('mouseenter', ()=>{
//         pix.classList.add('colored-in')
//     })
// }

// const getContainer = document.getElementById('screen')
// let numOfPixels = 29999

const generatePixels = () => {
for(let i=0; i<100; i++) {
    // create a new div element
    let singleDiv = document.createElement('div')
    // add a new class
    singleDiv.classList.add('pixel')
    // appended it to div 
    document.getElementById('screen').appendChild(singleDiv)
    // add color in event lsitener to new pixel div
    singleDiv.addEventListener('mouseenter', ()=> {
        singleDiv.classList.add('colored-in')
    })
    }
}

// we run clearScreen after we enter the event
const clearScreen = () => {
    // remove 'colored-in' class from all pixels
    const pixels = document.querySelectorAll('.pixel')
    // pixels.classList.remove('colored-in')
    for (let i=0; i<pixels.length; i++) {
        pixels[i].classList.remove('colored-in')
    }
}

// game play: activate button
document.addEventListener('DOMContentLoaded', () => {
    generatePixels()
    document.getElementById('clear-screen-button').addEventListener('click', clearScreen)
})