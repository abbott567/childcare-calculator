'use-strict';

// Unit tests
describe('--unit tests', () => {
  require('./unit-tests/getChildAge');
  require('./unit-tests/getCostForFreeHours');
  require('./unit-tests/getCostPerDay');
  require('./unit-tests/getCostPerHalfDay');
  require('./unit-tests/getCostPerWeek');

  require('./unit-tests/browser/getPrettyDays');
  require('./unit-tests/browser/getPrettyAge');
});
