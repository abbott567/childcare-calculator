'use-strict';

const {expect} = require('chai');
const {getCostPerDay} = require('../../functions/getCostPerDay');

describe('getChildAge(req)', () => {
  it('should return 45 if the child is under 2 years old', () => {
    const age = 0;
    const costPerDay = getCostPerDay(age);
    expect(costPerDay).equal(45);
  });
  it('should return 42.50 if the child is 2 years old', () => {
    const age = 2;
    const costPerDay = getCostPerDay(age);
    expect(costPerDay).equal(42.50);
  });
  it('should return 42.50 if the child is over 2 years old', () => {
    const age = 3;
    const costPerDay = getCostPerDay(age);
    expect(costPerDay).equal(42.50);
  });
});
