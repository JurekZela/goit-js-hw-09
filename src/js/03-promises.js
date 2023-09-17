import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form");

function onStartCreatePromises(e) {
  e.preventDefault();
  
  const delay = parseInt(form.querySelector("[name='delay']").value);
  const step = parseInt(form.querySelector("[name='step']").value);
  const amount = parseInt(form.querySelector("[name='amount']").value);
  
  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        };
      }, delay);
    });
  };
  
  for (let i = 1; i <= amount; i+= 1) {
    const timeNextDelay = delay + (i - 1) * step;
    
    createPromise(i, timeNextDelay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  };
};

form.addEventListener("submit", onStartCreatePromises);