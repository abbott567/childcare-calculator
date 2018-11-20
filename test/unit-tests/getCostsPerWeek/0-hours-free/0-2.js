'use-strict';

const {expect} = require('chai');
const {getCostPerWeek} = require('../../../../functions/getCostPerWeek');

const age = 0;

describe('full time', () => {
  it('should return 225 if 5 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'full'];
    const costPerWeek = getCostPerWeek(daysArray, age);
    expect(costPerWeek).equal(225);
  });
});

describe('part time', () => {
  it('should return 24.50 if 0 full days and 1 half day', () => {
    const daysArray = ['half', 'none', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(24.50);
  });
  it('should return 49 if 0 full days and 2 half days', () => {
    const daysArray = ['half', 'half', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(49);
  });
  it('should return 73.50 if 0 full days and 3 half days', () => {
    const daysArray = ['half', 'half', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(73.50);
  });
  it('should return 98 if 0 full days and 4 half days', () => {
    const daysArray = ['half', 'half', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(98);
  });
  it('should return 122.50 if 0 full days and 5 half days', () => {
    const daysArray = ['half', 'half', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age)).equal(122.50);
  });
  it('should return 45 if 1 full day and 0 half days', () => {
    const daysArray = ['full', 'none', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(45);
  });
  it('should return 69.50 if 1 full day and 1 half day', () => {
    const daysArray = ['full', 'half', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(69.50);
  });
  it('should return 94 if 1 full day and 2 half days', () => {
    const daysArray = ['full', 'half', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(94);
  });
  it('should return 118.50 if 1 full day and 3 half days', () => {
    const daysArray = ['full', 'half', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(118.50);
  });
  it('should return 143 if 1 full day and 4 half days', () => {
    const daysArray = ['full', 'half', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age)).equal(143);
  });
  it('should return 90 if 2 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(90);
  });
  it('should return 114.50 if 2 full days and 1 half days', () => {
    const daysArray = ['full', 'full', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(114.50);
  });
  it('should return 139 if 2 full days and 2 half days', () => {
    const daysArray = ['full', 'full', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(139);
  });
  it('should return 163.50 if 2 full days and 3 half days', () => {
    const daysArray = ['full', 'full', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age)).equal(163.50);
  });
  it('should return 135 if 3 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(135);
  });
  it('should return 159.50 if 3 full days and 1 half day', () => {
    const daysArray = ['full', 'full', 'full', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(159.50);
  });
  it('should return 184 if 3 full days and 2 half days', () => {
    const daysArray = ['full', 'full', 'full', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age)).equal(184);
  });
  it('should return 180 if 4 full days and 0 half days', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'none'];
    expect(getCostPerWeek(daysArray, age)).equal(180);
  });
  it('should return 204.50 if 4 full days and 1 half day', () => {
    const daysArray = ['full', 'full', 'full', 'full', 'half'];
    expect(getCostPerWeek(daysArray, age)).equal(204.50);
  });
});
