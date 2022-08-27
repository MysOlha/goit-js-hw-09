const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
const body = document.querySelector('body')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

btnStart.addEventListener('click', onBtnStart)
btnStop.addEventListener('click', onBtnStop)

let timerId = 0

function onBtnStart() {
    timerId = setInterval(()=>{
        body.style.backgroundColor = getRandomHexColor()  
    }, 1000);
     btnStart.setAttribute('disabled', true) 
}

function onBtnStop(){
    clearInterval(timerId)
    btnStart.removeAttribute('disabled') 
}