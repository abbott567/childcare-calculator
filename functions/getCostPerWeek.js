'use strict';

const {getCostPerDay} = require('../functions/getCostPerDay');
const {getCostPerHalfDay} = require('../functions/getCostPerHalfDay');

function getCostPerWeek(daysArray, age) {
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
  return costPerWeek;
}

module.exports = {getCostPerWeek};
