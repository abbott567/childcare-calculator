'use-strict';

const {expect} = require('chai');
const {getCostPerWeek} = require('../../../../functions/getCostPerWeek');

const age = 2;

describe('full time', () => {
  it('should return 134.50 if 5 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'full'];
    const costPerWeek = getCostPerWeek(daysArray, age, 15);
    expect(costPerWeek).equal(134.50);
  });
});

describe('part time', () => {
  it('should return 0 if 0 full days and 1 half day', () => {
    const daysArray = ['half', 'none', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(0);
  });
  it('should return 0 if 0 full days and 2 half days', () => {
    const daysArray = ['half', 'half', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(0);
  });
  it('should return 0 if 0 full days and 3 half days', () => {
    const daysArray = ['half', 'half', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(0);
  });
  it('should return 15 if 0 full days and 4 half days', () => {
    const daysArray = ['half', 'half', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(15);
  });
  it('should return 38.25 if 0 full days and 5 half days', () => {
    const daysArray = ['half', 'half', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(38.25);
  });
  it('should return 0 if 1 full day and 0 half days', () => {
    const daysArray = ['full', 'none', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(0);
  });
  it('should return 0 if 1 full day and 1 half day', () => {
    const daysArray = ['full', 'half', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(0);
  });
  it('should return 11 if 1 full day and 2 half days', () => {
    const daysArray = ['full', 'half', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(11);
  });
  it('should return 34.25 if 1 full day and 3 half days', () => {
    const daysArray = ['full', 'half', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(34.25);
  });
  it('should return 57.50 if 1 full day and 4 half days', () => {
    const daysArray = ['full', 'half', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(57.50);
  });
  it('should return 7 if 2 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(7);
  });
  it('should return 30.25 if 2 full days and 1 half days', () => {
    const daysArray = ['full', 'full', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(30.25);
  });
  it('should return 53.50 if 2 full days and 2 half days', () => {
    const daysArray = ['full', 'full', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(53.50);
  });
  it('should return 76.75 if 2 full days and 3 half days', () => {
    const daysArray = ['full', 'full', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(76.75);
  });
  it('should return 49.50 if 3 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(49.50);
  });
  it('should return 72.75 if 3 full days and 1 half day', () => {
    const daysArray = ['full', 'full', 'full', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(72.75);
  });
  it('should return 96 if 3 full days and 2 half days', () => {
    const daysArray = ['full', 'full', 'full', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(96);
  });
  it('should return 92 if 4 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(92);
  });
  it('should return 115.25 if 4 full days and 1 half day', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(115.25);
  });
});
