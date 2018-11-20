'use-strict';

const {expect} = require('chai');
const {getCostPerWeek} = require('../../../../functions/getCostPerWeek');

const age = 3;

describe('full time', () => {
  it('should return 147.40 if 5 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'full'];
    const costPerWeek = getCostPerWeek(daysArray, age, 15);
    expect(costPerWeek).equal(147.40);
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
  it('should return 4.65 if 0 full days and 3 half days', () => {
    const daysArray = ['half', 'half', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(4.65);
  });
  it('should return 27.90 if 0 full days and 4 half days', () => {
    const daysArray = ['half', 'half', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(27.90);
  });
  it('should return 38.25 if 0 full days and 5 half days', () => {
    const daysArray = ['half', 'half', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(51.15);
  });
  it('should return 0 if 1 full day and 0 half days', () => {
    const daysArray = ['full', 'none', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(0);
  });
  it('should return 0.65 if 1 full day and 1 half day', () => {
    const daysArray = ['full', 'half', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(0.65);
  });
  it('should return 23.90 if 1 full day and 2 half days', () => {
    const daysArray = ['full', 'half', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(23.90);
  });
  it('should return 47.15 if 1 full day and 3 half days', () => {
    const daysArray = ['full', 'half', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(47.15);
  });
  it('should return 70.40 if 1 full day and 4 half days', () => {
    const daysArray = ['full', 'half', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(70.40);
  });
  it('should return 19.90 if 2 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(19.90);
  });
  it('should return 43.15 if 2 full days and 1 half days', () => {
    const daysArray = ['full', 'full', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(43.15);
  });
  it('should return 66.40 if 2 full days and 2 half days', () => {
    const daysArray = ['full', 'full', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(66.40);
  });
  it('should return 89.65 if 2 full days and 3 half days', () => {
    const daysArray = ['full', 'full', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(89.65);
  });
  it('should return 62.40 if 3 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(62.40);
  });
  it('should return 85.65 if 3 full days and 1 half day', () => {
    const daysArray = ['full', 'full', 'full', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(85.65);
  });
  it('should return 108.90 if 3 full days and 2 half days', () => {
    const daysArray = ['full', 'full', 'full', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(108.90);
  });
  it('should return 104.90 if 4 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(104.90);
  });
  it('should return 128.15 if 4 full days and 1 half day', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(128.15);
  });
});
