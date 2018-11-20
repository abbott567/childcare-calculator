'use-strict';

const {expect} = require('chai');
const {getCostPerWeek} = require('../../../../functions/getCostPerWeek');

const age = 3;

describe('full time', () => {
  it('should return 82.30 if 5 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'full'];
    const costPerWeek = getCostPerWeek(daysArray, age, 30);
    expect(costPerWeek).equal(82.30);
  });
});

describe('part time', () => {
  it('should return 0 if 0 full days and 1 half day', () => {
    const daysArray = ['half', 'none', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(0);
  });
  it('should return 0 if 0 full days and 2 half days', () => {
    const daysArray = ['half', 'half', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(0);
  });
  it('should return 0 if 0 full days and 3 half days', () => {
    const daysArray = ['half', 'half', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(0);
  });
  it('should return 0 if 0 full days and 4 half days', () => {
    const daysArray = ['half', 'half', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(0);
  });
  it('should return 0 if 0 full days and 5 half days', () => {
    const daysArray = ['half', 'half', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(0);
  });
  it('should return 0 if 1 full day and 0 half days', () => {
    const daysArray = ['full', 'none', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(0);
  });
  it('should return 0 if 1 full day and 1 half day', () => {
    const daysArray = ['full', 'half', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(0);
  });
  it('should return 0 if 1 full day and 2 half days', () => {
    const daysArray = ['full', 'half', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(0);
  });
  it('should return 0 if 1 full day and 3 half days', () => {
    const daysArray = ['full', 'half', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(0);
  });
  it('should return 5.30 if 1 full day and 4 half days', () => {
    const daysArray = ['full', 'half', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(5.30);
  });
  it('should return 0 if 2 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(0);
  });
  it('should return 0 if 2 full days and 1 half days', () => {
    const daysArray = ['full', 'full', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(0);
  });
  it('should return 1.30 if 2 full days and 2 half days', () => {
    const daysArray = ['full', 'full', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(1.30);
  });
  it('should return 24.55 if 2 full days and 3 half days', () => {
    const daysArray = ['full', 'full', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(24.55);
  });
  it('should return 0 if 3 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(0);
  });
  it('should return 20.55 if 3 full days and 1 half day', () => {
    const daysArray = ['full', 'full', 'full', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(20.55);
  });
  it('should return 43.80 if 3 full days and 2 half days', () => {
    const daysArray = ['full', 'full', 'full', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(43.80);
  });
  it('should return 39.80 if 4 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'none'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(39.80);
  });
  it('should return 63.05 if 4 full days and 1 half day', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'half'];
    expect(getCostPerWeek(daysArray, age, 30)).equal(63.05);
  });
});
