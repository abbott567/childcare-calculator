'use-strict';

const {expect} = require('chai');
const {validateFulltime} = require('../../../../functions/browser/validate.fulltime');

describe('validateFulltime(fulltime, errors)', () => {
  it('should return 0 errors when fulltime is "Yes"', () => {
    const fulltime = 'Yes';
    let errors = [];
    errors = validateFulltime(fulltime, errors);
    expect(errors.length).to.equal(0);
  });
  it('should return 0 errors when fulltime is "No"', () => {
    const fulltime = 'No';
    let errors = [];
    errors = validateFulltime(fulltime, errors);
    expect(errors.length).to.equal(0);
  });
  it('should return 1 error when fulltime is missing', () => {
    const fulltime = undefined;
    let errors = [];
    errors = validateFulltime(fulltime, errors);
    expect(errors.length).to.equal(1);
  });
});
