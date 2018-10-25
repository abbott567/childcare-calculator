'use-strict';

const {expect} = require('chai');
const {getCostPerDay} = require('../../functions/getCostPerDay');
const {getCostPerHalfDay} = require('../../functions/getCostPerHalfDay');
const {getCostPerWeek} = require('../../functions/getCostPerWeek');

// Under 2
const age = 0;
const costPerDay = getCostPerDay(age);
const costPerHalfDay = getCostPerHalfDay(age);

describe('getCostPerWeek(req)', () => {
  describe('age < 2', () => {
    describe('full time', () => {
      it(`${costPerDay * 5} if full time and nothing free`, () => {
        const age = 0;
        const daysArray = ['full', 'full', 'full', 'full', 'full'];
        const costPerWeek = getCostPerWeek(daysArray, age);
        expect(costPerWeek).equal(costPerDay * 5);
      });
    });

    describe('part time', () => {
      describe('no free childcare', () => {
        it(`should return ${costPerHalfDay} if 0 full days and 1 half day`, () => {
          const age = 0;
          const daysArray = ['half', 'none', 'none', 'none', 'none'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerHalfDay);
        });
        it(`should return ${costPerHalfDay * 2} if 0 full days and 2 half days`, () => {
          const age = 0;
          const daysArray = ['half', 'half', 'none', 'none', 'none'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerHalfDay * 2);
        });
        it(`should return ${costPerHalfDay * 3} if 0 full days and 3 half days`, () => {
          const age = 0;
          const daysArray = ['half', 'half', 'half', 'none', 'none'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerHalfDay * 3);
        });
        it(`should return ${costPerHalfDay * 4} if 0 full days and 4 half days`, () => {
          const age = 0;
          const daysArray = ['half', 'half', 'half', 'half', 'none'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerHalfDay * 4);
        });
        it(`should return ${costPerHalfDay * 5} if 0 full days and 5 half days`, () => {
          const age = 0;
          const daysArray = ['half', 'half', 'half', 'half', 'half'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerHalfDay * 5);
        });
        it(`should return ${costPerDay} if 1 full day and 0 half days`, () => {
          const age = 0;
          const daysArray = ['full', 'none', 'none', 'none', 'none'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerDay);
        });
        it(`should return ${costPerDay + costPerHalfDay} if 1 full day and 1 half day`, () => {
          const age = 0;
          const daysArray = ['full', 'half', 'none', 'none', 'none'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerDay + costPerHalfDay);
        });
        it(`should return ${costPerDay + costPerHalfDay + costPerHalfDay} if 1 full day and 2 half days`, () => {
          const age = 0;
          const daysArray = ['full', 'half', 'half', 'none', 'none'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerDay + costPerHalfDay + costPerHalfDay);
        });
        it(`should return ${costPerDay + costPerHalfDay + costPerHalfDay + costPerHalfDay} if 1 full day and 3 half days`, () => {
          const age = 0;
          const daysArray = ['full', 'half', 'half', 'half', 'none'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerDay + costPerHalfDay + costPerHalfDay + costPerHalfDay);
        });
        it(`should return ${costPerDay + costPerHalfDay + costPerHalfDay + costPerHalfDay + costPerHalfDay} if 1 full day and 4 half days`, () => {
          const age = 0;
          const daysArray = ['full', 'half', 'half', 'half', 'half'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerDay + costPerHalfDay + costPerHalfDay + costPerHalfDay + costPerHalfDay);
        });
        it(`should return ${costPerDay + costPerDay} if 2 full days and 0 half days`, () => {
          const age = 0;
          const daysArray = ['full', 'full', 'none', 'none', 'none'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerDay + costPerDay);
        });
        it(`should return ${costPerDay + costPerDay + costPerHalfDay} if 2 full days and 1 half days`, () => {
          const age = 0;
          const daysArray = ['full', 'full', 'half', 'none', 'none'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerDay + costPerDay + costPerHalfDay);
        });
        it(`should return ${costPerDay + costPerDay + costPerHalfDay + costPerHalfDay} if 2 full days and 2 half days`, () => {
          const age = 0;
          const daysArray = ['full', 'full', 'half', 'half', 'none'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerDay + costPerDay + costPerHalfDay + costPerHalfDay);
        });
        it(`should return ${costPerDay + costPerDay + costPerHalfDay + costPerHalfDay + costPerHalfDay} if 2 full days and 3 half days`, () => {
          const age = 0;
          const daysArray = ['full', 'full', 'half', 'half', 'half'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerDay + costPerDay + costPerHalfDay + costPerHalfDay + costPerHalfDay);
        });
        it(`should return ${costPerDay + costPerDay + costPerDay} if 3 full days and 0 half days`, () => {
          const age = 0;
          const daysArray = ['full', 'full', 'full', 'none', 'none'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerDay + costPerDay + costPerDay);
        });
        it(`should return ${costPerDay + costPerDay + costPerDay + costPerHalfDay} if 3 full days and 1 half day`, () => {
          const age = 0;
          const daysArray = ['full', 'full', 'full', 'half', 'none'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerDay + costPerDay + costPerDay + costPerHalfDay);
        });
        it(`should return ${costPerDay + costPerDay + costPerDay + costPerHalfDay + costPerHalfDay} if 3 full days and 2 half days`, () => {
          const age = 0;
          const daysArray = ['full', 'full', 'full', 'half', 'half'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerDay + costPerDay + costPerDay + costPerHalfDay + costPerHalfDay);
        });
        it(`should return ${costPerDay + costPerDay + costPerDay + costPerDay} if 4 full days and 0 half days`, () => {
          const age = 0;
          const daysArray = ['full', 'full', 'full', 'full', 'none'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerDay + costPerDay + costPerDay + costPerDay);
        });
        it(`should return ${costPerDay + costPerDay + costPerDay + costPerDay + costPerHalfDay} if 4 full days and 1 half day`, () => {
          const age = 0;
          const daysArray = ['full', 'full', 'full', 'full', 'half'];
          expect(getCostPerWeek(daysArray, age)).equal(costPerDay + costPerDay + costPerDay + costPerDay + costPerHalfDay);
        });
      });
    });
  });
});
