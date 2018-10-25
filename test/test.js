'use-strict';

// Unit tests
describe('--unit tests', () => {
  require('./unit-tests/getChildAge');
  require('./unit-tests/getCostPerDay');
});

// Integration tests
describe('--integration tests', () => {
});

// 0-2
describe('--0-2 year olds', () => {
  require('./0-2/full-time');
  require('./0-2/part-time-15');
  require('./0-2/part-time-30');
});

// 2+
describe('--0-2 year olds', () => {
  require('./2+/full-time');
  require('./2+/part-time-15');
  require('./2+/part-time-30');
});
