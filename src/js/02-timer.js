import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('button[data-start]')
btnStart.setAttribute('disabled', true) 
const daysWindow = document.querySelector('span[data-days]')
const hoursWindow = document.querySelector('span[data-hours]')
const minutesWindow = document.querySelector('span[data-minutes]')
const secondsWindow = document.querySelector('span[data-seconds]')


const input = document.querySelector("#datetime-picker");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    

      if((selectedDates[0]) < Date.now()) {
      window.alert("Please choose a date in the future")
      return
    }
    console.log(selectedDates[0])
     
    btnStart.removeAttribute('disabled') 

    btnStart.addEventListener('click', () => {
        timerId = setInterval(() => {

            btnStart.setAttribute('disabled', true) 
            
            now = new Date().getTime()
            let ms = (selectedDates[0]) - now
                        
            const { days, hours, minutes, seconds } = convertMs(ms)
            console.log(`${days}:${hours}:${minutes}:${seconds}`)
            if(ms < 1000){
            clearInterval(timerId) 
            }     
            
        daysWindow.textContent = `${days}`;
        hoursWindow.textContent = `${hours}`;
        minutesWindow.textContent = `${minutes}`;
        secondsWindow.textContent = `${seconds}`;
            
        }, 1000)
    })

} 
  }


flatpickr(input, options)



function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }


function convertMs(ms) {  
    
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
