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

  const prettyData = {
    numberOfFreeHours: data.freeChildcareAmount,
    age: getPrettyAge(data.age),
    days: getPrettyDays(data.days),
    costPerWeek: getPrettyCost(costPerWeek),
    costPerDay: getPrettyCost(costPerDay),
    costPerHalfDay: getPrettyCost(costPerHalfDay),
    discount: getPrettyCost(costOfFreeHours)
  };
  prettyData.sum = generateSum(data, prettyData);
  return prettyData;
}

function generateSum(data, prettyData) {
  const sum = {
    total: prettyData.costPerWeek,
    days: [],
    discount: prettyData.discount
  };
  for (let i = 0; i < data.days.length; i++) {
    if (data.days[i] === 'full') {
      sum.days.push(prettyData.costPerDay);
    }
    if (data.days[i] === 'half') {
      sum.days.push(prettyData.costPerHalfDay);
    }
  }
  return sum;
}

module.exports = {generateContent};
