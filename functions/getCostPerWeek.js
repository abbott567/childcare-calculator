'use strict';

const {getCostPerDay} = require('../functions/getCostPerDay');
const {getCostPerHalfDay} = require('../functions/getCostPerHalfDay');

function getCostPerWeek(daysArray, age, freeHours) {
  const costPerDay = getCostPerDay(age);
  const costPerHalfDay = getCostPerHalfDay(age);
  let costPerWeek = 0;

  for (let i = 0; i < daysArray.length; i++) {
    if (daysArray[i] === 'full') {
      costPerWeek += costPerDay;
    }
    if (daysArray[i] === 'half') {
      costPerWeek += costPerHalfDay;
    }
  }

  if (freeHours === '15' || freeHours === 15) {
    if (age === 2) {
      costPerWeek -= 78;
    }
    if (age === 3) {
      costPerWeek -= 65.10;
    }
  }

  if (freeHours === '30' || freeHours === 30) {
    costPerWeek -= 130.20;
  }

  if (costPerWeek < 0) {
    costPerWeek = 0;
  }

  return parseFloat(costPerWeek.toFixed(2));
}

module.exports = {getCostPerWeek};
