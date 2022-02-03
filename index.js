// The magic happens here!

const numPixels = 5106

const generatePixels = () => {
    for(let i=0; i<numPixels; i++) {
        const newPixel = document.createElement('div')
        newPixel.classList.add('pixel')
        makePixelLive(newPixel)
        document.querySelector('#screen').appendChild(newPixel)
    }
}

const makePixelLive = (pixel) => {
    pixel.addEventListener('mouseenter', ()=>{
        pixel.classList.add('colored-in')
    })
}

const clearScreen = () => {
    const pixels = document.querySelectorAll('.pixel')
    for(let i=0; i<pixels.length; i++) {
        pixels[i].classList.remove('colored-in') 
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    generatePixels()
    document.querySelector('#clear-screen-button').addEventListener('click', clearScreen)
})