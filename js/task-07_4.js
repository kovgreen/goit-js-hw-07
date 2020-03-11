"use strict";

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const valueByIdSpan = document.querySelector("#value");

document
  .querySelector('#counter button[data-action="increment"]')
  .addEventListener("click", () => {
    valueByIdSpan.textContent = Number(valueByIdSpan.textContent) + 1;
  });

document
  .querySelector('#counter button[data-action="decrement"]')
  .addEventListener("click", () => {
    valueByIdSpan.textContent = Number(valueByIdSpan.textContent) - 1;
  });
