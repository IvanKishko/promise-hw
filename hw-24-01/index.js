//* TASK 1
function delayFunction(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const promiseArray = [
  delayFunction("Проміс 1", 1000),
  delayFunction("Проміс 2", 2000),
  delayFunction("Проміс 3", 1500),
  delayFunction("Проміс 4", 2500),
  delayFunction("Проміс 5", 3000),
];

Promise.all(promiseArray)
  .then((results) => {
    console.log("Результати всіх промісів:", results);
  })
  .catch((error) => {
    console.error("Сталася помилка:", error);
  });

//* TASK 2

// Функція для створення проміса із випадковою затримкою
function delayFunction(value) {
  const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const promiseRace = [
  delayFunction("Проміс з другого завдання номер: 1"),
  delayFunction("Проміс з другого завдання номер: 2"),
  delayFunction("Проміс з другого завдання номер: 3"),
  delayFunction("Проміс з другого завдання номер: 4"),
  delayFunction("Проміс з другого завдання номер: 5"),
];

Promise.race(promiseRace)
  .then((fastestResult) => {
    console.log("Результат найшвидшого проміса:", fastestResult);
  })
  .catch((error) => {
    console.error("Сталася помилка:", error);
  });
