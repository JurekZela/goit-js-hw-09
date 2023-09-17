// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        const currentTime =  Date.now();

        if (selectedDate > currentTime) {
            refBtnStart.disabled = false;
        }else{
            refBtnStart.disabled = true;
            alert("Please choose a date in the future");
        };
    },
};
  flatpickr("#datetime-picker", options);


  const refBtnStart = document.querySelector('[data-start]');
  const refInputDate = document.getElementById('datetime-picker');

  const timerElements = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
  };

  refBtnStart.addEventListener("click", onStartCountdownClick);

  function onStartCountdownClick() {
    refBtnStart.disabled = true;
    refInputDate.disabled = true;

    setInterval(function startCountdown ()  {
        const currentDate = new Date();

       const leftTime = new Date(refInputDate.value) - currentDate;
       const { days, hours, minutes, seconds } = convertMs(leftTime);
       
       timerElements.days.textContent = days;
       timerElements.hours.textContent = hours;
       timerElements.minutes.textContent = minutes;
       timerElements.seconds.textContent = seconds;
    }, 1000);
};


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

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
  };