import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refForm = document.querySelector('.form');

const delay = refForm.querySelector('[name="delay"]');
const step = refForm.querySelector('[name="step"]');
const amount = refForm.querySelector('[name="amount"]');

refForm.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {

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
  

  createPromise()
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });