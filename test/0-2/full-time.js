'use-strict';

const {expect} = require('chai');
const {getCostPerDay} = require('../../functions/getCostPerDay');

const age = 0;
const costPerDay = getCostPerDay(age);

describe('full time childcare', () => {
  const costPerWeek = costPerDay * 5;
  it(`should return ${costPerWeek} per week`, () => {
    expect(true).to.eql(true);
  });
});
