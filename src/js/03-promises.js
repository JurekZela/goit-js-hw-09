import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refFormSubmit = document.querySelector('.form');
const refDelay = refFormSubmit.querySelector('[name="delay"]');
const refStep = refFormSubmit.querySelector('[name="step"]');
const refAmount = refFormSubmit.querySelector('[name="amount"]');

function createPromise(position, delay) {
  return  new Promise((resolve, reject) => {

  setTimeout(() => {

    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
    };

  }, delay);

});
};

refFormSubmit.addEventListener('submit', createPromise);

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });