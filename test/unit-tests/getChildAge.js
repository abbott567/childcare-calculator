'use-strict';

const {expect} = require('chai');
const {getChildAge} = require('../../functions/getChildAge');

describe('getChildAge(req)', () => {
  it('should return 0 when less than 1 year between dob and startDate', () => {
    const req = {
      body: {
        dob: {
          day: '1',
          month: '1',
          year: '2018'
        },
        startDate: {
          day: '31',
          month: '12',
          year: '2018'
        }
      }
    };
    const age = getChildAge(req);
    expect(age).equal(0);
  });
  it('should return 1 when 1.9 years between dob and today', () => {
    const req = {
      body: {
        dob: {
          day: '1',
          month: '1',
          year: '2017'
        },
        startDate: {
          day: '31',
          month: '12',
          year: '2018'
        }
      }
    };
    const age = getChildAge(req);
    expect(age).equal(1);
  });
  it('should return 2 when 2.9 years between dob and today', () => {
    const req = {
      body: {
        dob: {
          day: '1',
          month: '1',
          year: '2016'
        },
        startDate: {
          day: '31',
          month: '12',
          year: '2018'
        }
      }
    };
    const age = getChildAge(req);
    expect(age).equal(2);
  });
});
