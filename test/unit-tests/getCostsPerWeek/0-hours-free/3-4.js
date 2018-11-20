'use-strict';

const {expect} = require('chai');
const {getCostPerWeek} = require('../../../../functions/getCostPerWeek');

const age = 3;

describe('full time', () => {
  it('should return 212.50 if 5 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'full'];
    const costPerWeek = getCostPerWeek(daysArray, age);
    expect(costPerWeek).equal(212.50);
  });
});

describe('part time', () => {
  it('should return 23.25 if 0 full days and 1 half day', () => {
    const daysArray = ['half', 'none', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(23.25);
  });
  it('should return 46.50 if 0 full days and 2 half days', () => {
    const daysArray = ['half', 'half', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(46.50);
  });
  it('should return 69.75 if 0 full days and 3 half days', () => {
    const daysArray = ['half', 'half', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(69.75);
  });
  it('should return 93 if 0 full days and 4 half days', () => {
    const daysArray = ['half', 'half', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(93);
  });
  it('should return 116.25 if 0 full days and 5 half days', () => {
    const daysArray = ['half', 'half', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age)).equal(116.25);
  });
  it('should return 42.50 if 1 full day and 0 half days', () => {
    const daysArray = ['full', 'none', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(42.50);
  });
  it('should return 65.75 if 1 full day and 1 half day', () => {
    const daysArray = ['full', 'half', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(65.75);
  });
  it('should return 89 if 1 full day and 2 half days', () => {
    const daysArray = ['full', 'half', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(89);
  });
  it('should return 112.25 if 1 full day and 3 half days', () => {
    const daysArray = ['full', 'half', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(112.25);
  });
  it('should return 135.50 if 1 full day and 4 half days', () => {
    const daysArray = ['full', 'half', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age)).equal(135.50);
  });
  it('should return 85 if 2 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(85);
  });
  it('should return 108.25 if 2 full days and 1 half days', () => {
    const daysArray = ['full', 'full', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(108.25);
  });
  it('should return 131.50 if 2 full days and 2 half days', () => {
    const daysArray = ['full', 'full', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(131.50);
  });
  it('should return 154.75 if 2 full days and 3 half days', () => {
    const daysArray = ['full', 'full', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age)).equal(154.75);
  });
  it('should return 127.50 if 3 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(127.50);
  });
  it('should return 150.75 if 3 full days and 1 half day', () => {
    const daysArray = ['full', 'full', 'full', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(150.75);
  });
  it('should return 174 if 3 full days and 2 half days', () => {
    const daysArray = ['full', 'full', 'full', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age)).equal(174);
  });
  it('should return 170 if 4 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(170);
  });
  it('should return 193.25 if 4 full days and 1 half day', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'half'];
    expect(getCostPerWeek(daysArray, age)).equal(193.25);
  });
});
