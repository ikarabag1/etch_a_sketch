/* DOM References */
const screen = document.querySelector('#screen')
const clearBtn = document.querySelector('#clear-screen-button')

/* Functions and Game Logic */
const initialize = () => {
    fill();
}

const fill = () => {
    for(let i = 0; i < 9000; i++) {
        let div = document.createElement('div');
        div.classList.add('pixel')
        div.addEventListener('mouseenter', shadePixel);
        screen.appendChild(div);
    }
}

const shadePixel = event => {
    event.target.classList.add('colored-in')
}

const clear = event => {
    for(pixel of screen.children) {
        pixel.classList.remove('colored-in')
    }
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize)
clearBtn.addEventListener('click', clear)
