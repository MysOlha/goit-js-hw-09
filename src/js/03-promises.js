import Notiflix from 'notiflix';
const inputDelay = document.querySelector('[name="delay"]')
const inputStep = document.querySelector('[name="step"]')
const inputAmount = document.querySelector('[name="amount"]')
const form = document.querySelector('.form')


form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
   evt.preventDefault();

  let delay = Number(inputDelay.value);
  let step = Number(inputStep.value);
  let amount = Number(inputAmount.value);
  // console.log(delay)

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
