'use-strict';

// Unit tests
describe('--calculations', () => {
  require('./unit-tests/getChildAge');
  require('./unit-tests/getCostForFreeHours');
  require('./unit-tests/getCostPerDay');
  require('./unit-tests/getCostPerHalfDay');
  require('./unit-tests/getCostPerWeek');
});

describe('--formatting functions', () => {
  require('./unit-tests/browser/prettify/getPrettyDays');
  require('./unit-tests/browser/prettify/getPrettyAge');
  require('./unit-tests/browser/prettify/getPrettyCost');
});

describe('--validation', () => {
  require('./unit-tests/browser/validation/validate.dateOfBirth');
});
