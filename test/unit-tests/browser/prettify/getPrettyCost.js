'use-strict';

const {expect} = require('chai');
const {getPrettyCost} = require('../../../../functions/browser/prettify');

describe('getPrettyCost(number)', () => {
  it('should return contain a pound sign (£)', () => {
    const number = 1;
    const output = getPrettyCost(number);
    expect(output).contain('£');
  });
  it('should return "£1.00" when input is 1', () => {
    const number = 1;
    const output = getPrettyCost(number);
    expect(output).eql('£1.00');
  });
  it('should return "£10.00" when input is 10', () => {
    const number = 10;
    const output = getPrettyCost(number);
    expect(output).eql('£10.00');
  });
  it('should return "£100.00" when input is 100', () => {
    const number = 100;
    const output = getPrettyCost(number);
    expect(output).eql('£100.00');
  });
  it('should return "£0.50" when input is 0.5', () => {
    const number = 0.5;
    const output = getPrettyCost(number);
    expect(output).eql('£0.50');
  });
  it('should return "£1.50" when input is 1.5', () => {
    const number = 1.5;
    const output = getPrettyCost(number);
    expect(output).eql('£1.50');
  });
});
