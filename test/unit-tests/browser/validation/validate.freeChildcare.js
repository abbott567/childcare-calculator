'use-strict';

const {expect} = require('chai');
const {validateFreeChildcare} = require('../../../../functions/browser/validate.freeChildcare');

describe('validateFreeChildcare(freeChildcare, errors)', () => {
  it('should return 0 errors when freeChildcare is "Yes"', () => {
    const freeChildcare = 'Yes';
    let errors = [];
    errors = validateFreeChildcare(freeChildcare, errors);
    expect(errors.length).to.equal(0);
  });
  it('should return 0 errors when freeChildcare is "No"', () => {
    const freeChildcare = 'Yes';
    let errors = [];
    errors = validateFreeChildcare(freeChildcare, errors);
    expect(errors.length).to.equal(0);
  });
  it('should return 1 error when freeChildcare is missing', () => {
    const freeChildcare = undefined;
    let errors = [];
    errors = validateFreeChildcare(freeChildcare, errors);
    expect(errors.length).to.equal(1);
  });
});
