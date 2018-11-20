'use-strict';

describe('getCostPerWeek(req)', () => {
  describe('No free childcare', () => {
    describe('baby (0-2)', () => {
      require('./getCostsPerWeek/0-hours-free/0-2');
    });
    describe('toddler (2-3)', () => {
      require('./getCostsPerWeek/0-hours-free/2-3');
    });
    describe('preschool (3-4)', () => {
      require('./getCostsPerWeek/0-hours-free/2-3');
    });
  });

  describe('15 hours free childcare', () => {
    describe('baby (0-2)', () => {
      require('./getCostsPerWeek/15-hours-free/0-2');
    });
    describe('toddler (2-3)', () => {
      require('./getCostsPerWeek/15-hours-free/2-3');
    });
    describe('preschool (3-4)', () => {
      require('./getCostsPerWeek/15-hours-free/3-4');
    });
  });

  describe('30 hours free childcare', () => {
    describe('baby', () => {
      require('./getCostsPerWeek/30-hours-free/0-2');
    });
    describe('toddler', () => {
      require('./getCostsPerWeek/30-hours-free/2-3');
    });
    describe('preschool (3-4)', () => {
      require('./getCostsPerWeek/30-hours-free/3-4');
    });
  });
});
