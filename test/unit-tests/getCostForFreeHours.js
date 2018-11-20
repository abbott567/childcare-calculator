'use-strict';

const {expect} = require('chai');
const {getCostForFreeHours} = require('../../functions/getCostForFreeHours');

describe('getCostForFreeHours(numberOfFreeHours, age)', () => {
  it('should return 0 when 0 free and age is 0', () => {
    const freeHours = getCostForFreeHours(0, 0);
    expect(freeHours).equal(0);
  });
  it('should return 0 when 0 free and age is 2', () => {
    const freeHours = getCostForFreeHours(0, 2);
    expect(freeHours).equal(0);
  });
  it('should return 0 when 0 free and age is 3', () => {
    const freeHours = getCostForFreeHours(0, 3);
    expect(freeHours).equal(0);
  });

  it('should return 0 when 15 free and age is 0', () => {
    const freeHours = getCostForFreeHours(15, 0);
    expect(freeHours).equal(0);
  });
  it('should return 78 when 15 free and age is 2', () => {
    const freeHours = getCostForFreeHours(15, 2);
    expect(freeHours).equal(78);
  });
  it('should return 65.10 when 15 free and age is 3', () => {
    const freeHours = getCostForFreeHours(15, 3);
    expect(freeHours).equal(65.10);
  });

  it('should return 0 when 30 free and age is 0', () => {
    const freeHours = getCostForFreeHours(30, 0);
    expect(freeHours).equal(0);
  });
  it('should return 130.20 when 30 free and age is 2', () => {
    const freeHours = getCostForFreeHours(30, 2);
    expect(freeHours).equal(130.20);
  });
  it('should return 130.20 when 30 free and age is 3', () => {
    const freeHours = getCostForFreeHours(30, 3);
    expect(freeHours).equal(130.20);
  });
});
