'use-strict';

const {expect} = require('chai');
const {getPrettyAge} = require('../../../../functions/browser/prettify');

describe('getPrettyAge(age)', () => {
  it('should return "baby under 2" when age = 0', () => {
    const age = 0;
    const prettyDays = getPrettyAge(age);
    expect(prettyDays).equal('baby under 2');
  });
  it('should return "baby under 2" when age = 1', () => {
    const age = 1;
    const prettyDays = getPrettyAge(age);
    expect(prettyDays).equal('baby under 2');
  });
  it('should return "2 year old" when age = 2', () => {
    const age = 2;
    const prettyDays = getPrettyAge(age);
    expect(prettyDays).equal('2 year old');
  });
  it('should return "3 year old" when age = 3', () => {
    const age = 3;
    const prettyDays = getPrettyAge(age);
    expect(prettyDays).equal('3 year old');
  });
  it('should return "4 year old" when age = 4', () => {
    const age = 4;
    const prettyDays = getPrettyAge(age);
    expect(prettyDays).equal('4 year old');
  });
  it('should return "5 year old" when age = 5', () => {
    const age = 5;
    const prettyDays = getPrettyAge(age);
    expect(prettyDays).equal('5 year old');
  });
});
