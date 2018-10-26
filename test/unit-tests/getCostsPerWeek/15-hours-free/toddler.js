'use-strict';

const {expect} = require('chai');
const {getCostPerDay} = require('../../../../functions/getCostPerDay');
const {getCostPerHalfDay} = require('../../../../functions/getCostPerHalfDay');
const {getCostPerWeek} = require('../../../../functions/getCostPerWeek');

const age = 2;
const costPerDay = getCostPerDay(age);
const costPerHalfDay = getCostPerHalfDay(age);
const freeChildCare = costPerDay + costPerHalfDay;

describe('full time', () => {
  it(`should return ${(costPerDay * 5) - freeChildCare} if 5 full days and 0 half days`, () => {
    const daysArray = ['full', 'full', 'full', 'full', 'full'];
    const costPerWeek = getCostPerWeek(daysArray, age, 15);
    expect(costPerWeek).equal((costPerDay * 5) - freeChildCare);
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
  it(`should return ${(costPerHalfDay * 3) - freeChildCare} if 0 full days and 3 half days`, () => {
    const daysArray = ['half', 'half', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal((costPerHalfDay * 3) - freeChildCare);
  });
  it(`should return ${(costPerHalfDay * 4) - freeChildCare} if 0 full days and 4 half days`, () => {
    const daysArray = ['half', 'half', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal((costPerHalfDay * 4) - freeChildCare);
  });
  it(`should return ${(costPerHalfDay * 5) - freeChildCare} if 0 full days and 5 half days`, () => {
    const daysArray = ['half', 'half', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal((costPerHalfDay * 5) - freeChildCare);
  });
  it('should return 0 if 1 full day and 0 half days', () => {
    const daysArray = ['full', 'none', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(0);
  });
  it(`should return ${(costPerDay + costPerHalfDay) - freeChildCare} if 1 full day and 1 half day`, () => {
    const daysArray = ['full', 'half', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal((costPerDay + costPerHalfDay) - freeChildCare);
  });
  it(`should return ${costPerDay + (costPerHalfDay * 2) - freeChildCare} if 1 full day and 2 half days`, () => {
    const daysArray = ['full', 'half', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(costPerDay + (costPerHalfDay * 2) - freeChildCare);
  });
  it(`should return ${costPerDay + (costPerHalfDay * 3) - freeChildCare} if 1 full day and 3 half days`, () => {
    const daysArray = ['full', 'half', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(costPerDay + (costPerHalfDay * 3) - freeChildCare);
  });
  it(`should return ${costPerDay + (costPerHalfDay * 4) - freeChildCare} if 1 full day and 4 half days`, () => {
    const daysArray = ['full', 'half', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal(costPerDay + (costPerHalfDay * 4) - freeChildCare);
  });
  it(`should return ${(costPerDay * 2) - freeChildCare} if 2 full days and 0 half days`, () => {
    const daysArray = ['full', 'full', 'none', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal((costPerDay * 2) - freeChildCare);
  });
  it(`should return ${(costPerDay * 2) + costPerHalfDay - freeChildCare} if 2 full days and 1 half days`, () => {
    const daysArray = ['full', 'full', 'half', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal((costPerDay * 2) + costPerHalfDay - freeChildCare);
  });
  it(`should return ${(costPerDay * 2) + (costPerHalfDay * 2) - freeChildCare} if 2 full days and 2 half days`, () => {
    const daysArray = ['full', 'full', 'half', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal((costPerDay * 2) + (costPerHalfDay * 2) - freeChildCare);
  });
  it(`should return ${(costPerDay * 2) + (costPerHalfDay * 3) - freeChildCare} if 2 full days and 3 half days`, () => {
    const daysArray = ['full', 'full', 'half', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal((costPerDay * 2) + (costPerHalfDay * 3) - freeChildCare);
  });
  it(`should return ${(costPerDay * 3) - freeChildCare} if 3 full days and 0 half days`, () => {
    const daysArray = ['full', 'full', 'full', 'none', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal((costPerDay * 3) - freeChildCare);
  });
  it(`should return ${(costPerDay * 3) + costPerHalfDay - freeChildCare} if 3 full days and 1 half day`, () => {
    const daysArray = ['full', 'full', 'full', 'half', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal((costPerDay * 3) + costPerHalfDay - freeChildCare);
  });
  it(`should return ${(costPerDay * 3) + (costPerHalfDay * 2) - freeChildCare} if 3 full days and 2 half days`, () => {
    const daysArray = ['full', 'full', 'full', 'half', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal((costPerDay * 3) + (costPerHalfDay * 2) - freeChildCare);
  });
  it(`should return ${(costPerDay * 4) - freeChildCare} if 4 full days and 0 half days`, () => {
    const daysArray = ['full', 'full', 'full', 'full', 'none'];
    expect(getCostPerWeek(daysArray, age, 15)).equal((costPerDay * 4) - freeChildCare);
  });
  it(`should return ${(costPerDay * 4) + costPerHalfDay - freeChildCare} if 4 full days and 1 half day`, () => {
    const daysArray = ['full', 'full', 'full', 'full', 'half'];
    expect(getCostPerWeek(daysArray, age, 15)).equal((costPerDay * 4) + costPerHalfDay - freeChildCare);
  });
});
