'use strict';

const {differenceInYears} = require('date-fns');

function getChildAge(dateOfBirthObj, startDateObj) {
  const dateOfBirth = new Date(dateOfBirthObj.year, dateOfBirthObj.month - 1, dateOfBirthObj.day);
  const startDate = new Date(startDateObj.year, startDateObj.month - 1, startDateObj.day);
  const age = differenceInYears(startDate, dateOfBirth);
  return age;
}

module.exports = {getChildAge};
