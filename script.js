'use strict';

setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand'),
      minuteHand = document.querySelector('[data-minute-hand'),
      secondHand = document.querySelector('[data-second-hand');

function setClock() {
    const currentDate = new Date(),
          seconds = currentDate.getSeconds() / 60,
          minutes = (seconds + currentDate.getMinutes()) / 60,
          hours = (minutes + currentDate.getHours()) / 12;
    
    setRotation(hourHand, hours);
    setRotation(minuteHand, minutes);
    setRotation(secondHand, seconds);
    
}

function setRotation(elementSelector, rotationRatio) {
    elementSelector.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();