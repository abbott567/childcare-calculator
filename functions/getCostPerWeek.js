'use strict';

const {getCostPerDay} = require('./getCostPerDay');
const {getCostPerHalfDay} = require('./getCostPerHalfDay');
const {getCostForFreeHours} = require('./getCostForFreeHours');

function getCostPerWeek(daysArray, age, freeHours) {
  const costPerDay = getCostPerDay(age);
  const costPerHalfDay = getCostPerHalfDay(age);
  const costOfFreeHours = getCostForFreeHours(freeHours, age);
  let costPerWeek = 0;

  for (let i = 0; i < daysArray.length; i++) {
    if (daysArray[i] === 'full') {
      costPerWeek += costPerDay;
    }
    if (daysArray[i] === 'half') {
      costPerWeek += costPerHalfDay;
    }
  }

  costPerWeek -= costOfFreeHours;

  if (costPerWeek < 0) {
    costPerWeek = 0;
  }

  return parseFloat(costPerWeek.toFixed(2));
}

module.exports = {getCostPerWeek};
