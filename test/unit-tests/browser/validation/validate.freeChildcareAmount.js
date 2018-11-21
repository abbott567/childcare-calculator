'use-strict';

const {expect} = require('chai');
const {validateFreeChildcareAmount} = require('../../../../functions/browser/validate.freeChildcareAmount');

describe('validateFreeChildcareAmount(freeChildcareAmount, errors)', () => {
  it('should return 0 errors when freeChildcareAmount is "15"', () => {
    const freeChildcareAmount = '15';
    let errors = [];
    errors = validateFreeChildcareAmount(freeChildcareAmount, errors);
    expect(errors.length).to.equal(0);
  });
  it('should return 0 errors when freeChildcareAmount is "30"', () => {
    const freeChildcareAmount = '30';
    let errors = [];
    errors = validateFreeChildcareAmount(freeChildcareAmount, errors);
    expect(errors.length).to.equal(0);
  });
  it('should return 1 error when freeChildcareAmount is missing', () => {
    const freeChildcareAmount = undefined;
    let errors = [];
    errors = validateFreeChildcareAmount(freeChildcareAmount, errors);
    expect(errors.length).to.equal(1);
  });
});
