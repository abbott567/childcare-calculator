const {validateDateOfBirth} = require('./validate.dateOfBirth');
const {validateStartDate} = require('./validate.startDate');
const {validateFreeChildcare} = require('./validate.freeChildcare');
const {validateFreeChildcareAmount} = require('./validate.freeChildcareAmount');
const {validateFulltime} = require('./validate.fulltime');

function getErrors(data) {
  const errors = [];
  validateFreeChildcare(data.freeChildcare, errors);
  if (data.freeChildcare === 'Yes') {
    validateFreeChildcareAmount(data.freeChildcareAmount, errors);
  }
  validateDateOfBirth(data.dateOfBirth, errors);
  validateStartDate(data.startDate, errors);
  validateFulltime(data.fulltime, errors);
  return errors;
}

module.exports = {getErrors};
