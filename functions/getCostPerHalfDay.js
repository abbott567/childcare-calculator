'use strict';

function getCostPerHalfDay(age) {
  return age < 2 ? 24.5 : 23.25;
}

module.exports = {getCostPerHalfDay};
