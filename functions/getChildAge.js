'use strict';

const {differenceInYears} = require('date-fns');

function getChildAge(req) {
  const obj = req.body;
  const dob = new Date(obj.dob.year, obj.dob.month - 1, obj.dob.day);
  const startDate = new Date(obj.startDate.year, obj.startDate.month - 1, obj.startDate.day);
  const age = differenceInYears(startDate, dob);
  return age;
}

module.exports = {getChildAge};
