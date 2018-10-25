'use-strict';

const {expect} = require('chai');
const {getCostPerHalfDay} = require('../../functions/getCostPerHalfDay');

describe('getCostPerHalfDay(req)', () => {
  it('should return 24.5 if the child is under 2 years old', () => {
    const age = 0;
    const costPerDay = getCostPerHalfDay(age);
    expect(costPerDay).equal(24.5);
  });
  it('should return 23.25 if the child is 2 years old', () => {
    const age = 2;
    const costPerDay = getCostPerHalfDay(age);
    expect(costPerDay).equal(23.25);
  });
  it('should return 23.25 if the child is over 2 years old', () => {
    const age = 3;
    const costPerDay = getCostPerHalfDay(age);
    expect(costPerDay).equal(23.25);
  });
});
