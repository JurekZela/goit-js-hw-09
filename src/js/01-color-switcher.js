function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const refBtnStart = document.querySelector('[data-start]');
const refBtnStop = document.querySelector('[data-stop]');
const body = document.body;

refBtnStart.addEventListener('click', onClickStartChangeColor);
refBtnStop.addEventListener('click', onClickStopChangeColor);

let intervalChangeColor = null;

function onClickStartChangeColor() {
    refBtnStart.disabled = true;
    refBtnStop.disabled = false;

     intervalChangeColor = setInterval(() => {
        const randomColor = getRandomHexColor();
        body.style.backgroundColor = randomColor;
    }, 1000);
};

function onClickStopChangeColor() {
    refBtnStart.disabled = false;
    refBtnStop.disabled = true;
    clearInterval(intervalChangeColor);
};