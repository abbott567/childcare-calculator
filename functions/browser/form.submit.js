const {buildDataObject} = require('./buildDataObject');
const {getCostPerDay} = require('./../getCostPerDay');
const {getCostPerHalfDay} = require('./../getCostPerHalfDay');
const {getCostPerWeek} = require('./../getCostPerWeek');
const {getCostForFreeHours} = require('./../getCostForFreeHours');
const {getPrettyAge, getPrettyDays, getPrettyCost} = require('./prettify');
const {getErrors} = require('./validation');

$(document).on('submit', 'form', e => {
  e.preventDefault();
  const data = buildDataObject();
  const errors = getErrors(data);

  if (errors.length > 0) {
    console.log(errors);
    return console.log('render errors');
  }

  const content = generateContent(data);
  console.log(content);
});

function generateContent(data) {
  const costPerWeek = getCostPerWeek(data.days, data.age, data.freeChildcareAmount);
  const costPerDay = getCostPerDay(data.age);
  const costPerHalfDay = getCostPerHalfDay(data.age);
  const costOfFreeHours = getCostForFreeHours(data.freeChildcareAmount, data.age);

  const prettyAge = getPrettyAge(data.age);
  const prettyDays = getPrettyDays(data.days);
  const prettyCostPerWeek = getPrettyCost(costPerWeek);
  const prettyCostPerDay = getPrettyCost(costPerDay);
  const prettyCostPerHalfDay = getPrettyCost(costPerHalfDay);
  const prettyCostChidcare = getPrettyCost(costOfFreeHours);

  return {
    p1: `Your childcare will cost ${prettyCostPerWeek} per week`,
    p2: `Childcare for a ${prettyAge} is ${prettyCostPerDay} for a full day and ${prettyCostPerHalfDay} for a half day.`,
    p3: `You told us you need ${prettyDays}.`,
    sum: `${prettyCostPerWeek} - ${prettyCostChidcare}`
  };
}
