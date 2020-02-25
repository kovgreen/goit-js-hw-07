"use strict";

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее
// значение в span#name - output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameInput = document.querySelector("#name-input");
const currentString = document.querySelector("#name-output");

nameInput.addEventListener("input", e => {
  currentString.textContent = e.currentTarget.value;
  if (currentString === "") {
    currentString === "незнакомец";
  }
});
