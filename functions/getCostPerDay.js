'use strict';

function getCostPerDay(age) {
  return age < 2 ? 45 : 42.50;
}

module.exports = {getCostPerDay};
