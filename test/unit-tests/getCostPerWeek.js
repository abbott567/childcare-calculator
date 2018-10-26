'use-strict';

describe('getCostPerWeek(req)', () => {
  describe('No free childcare', () => {
    describe('baby', () => {
      require('./getCostsPerWeek/0-hours-free/baby');
    });
    describe('toddler', () => {
      require('./getCostsPerWeek/0-hours-free/toddler');
    });
  });

  describe('15 hours free childcare', () => {
    describe('baby', () => {
      require('./getCostsPerWeek/15-hours-free/baby');
    });
    describe('toddler', () => {
      require('./getCostsPerWeek/15-hours-free/toddler');
    });
  });

  describe('30 hours free childcare', () => {
    describe('baby', () => {
      require('./getCostsPerWeek/30-hours-free/baby');
    });
    describe('toddler', () => {
      require('./getCostsPerWeek/30-hours-free/toddler');
    });
  });
});
