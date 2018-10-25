'use-strict';

const {expect} = require('chai');
const {getCostPerWeek} = require('../../functions/getCostPerWeek');

describe('getCostPerWeek(req)', () => {
  it('should return 225 if under 2, fulltime and nothing free', () => {
    expect(true).equal(225);
  });
});
