const {getCostPerDay} = require('./../getCostPerDay');
const {getCostPerHalfDay} = require('./../getCostPerHalfDay');
const {getCostPerWeek} = require('./../getCostPerWeek');
const {getCostForFreeHours} = require('./../getCostForFreeHours');
const {getPrettyAge, getPrettyDays, getPrettyCost} = require('./prettify');

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

module.exports = {generateContent};
