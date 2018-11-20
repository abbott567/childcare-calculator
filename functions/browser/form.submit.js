const {buildDataObject} = require('./buildDataObject');
const {getCostPerWeek} = require('./../getCostPerWeek');
const {getErrors} = require('./validation');

$(document).on('submit', 'form', e => {
  e.preventDefault();
  const data = buildDataObject();
  const errors = getErrors(data);
  const costPerWeek = getCostPerWeek(data.days, data.age, data.freeChildcareAmount);
  const prettyCostPerWeek = '£' + costPerWeek.toFixed(2);
  console.log(errors);
});

