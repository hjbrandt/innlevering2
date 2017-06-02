$(function() {
  'use strict';
  console.log('gui.js is loaded');

  // CLOCK
  var secondHand = document.querySelector('.second-hand');
  var minuteHand = document.querySelector('.minutes-hand');
  var hourHand = document.querySelector('.hour-hand');

  function setDate() {
    var now = new Date();

    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;

    var minutes = now.getMinutes();
    var minutesDegrees = ((minutes / 60) * 360) + 90;

    var hours = now.getHours();
    var hoursDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }
  setInterval(setDate, 1000);
  // END CLOCK

});