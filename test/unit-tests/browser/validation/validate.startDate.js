'use-strict';

const {expect} = require('chai');
const {validateStartDate} = require('../../../../functions/browser/validate.startDate');

describe('validateStartDate(startDate, errors)', () => {
  it('should return 0 errors when start date is valid', () => {
    const startDate = {
      day: '1',
      month: '1',
      year: '2018'
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(0);
  });

  it('should return 1 error when day is missing', () => {
    const startDate = {
      day: '',
      month: '1',
      year: '2018'
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(1);
  });
  it('should return 1 error when day is 0', () => {
    const startDate = {
      day: '0',
      month: '1',
      year: '2018'
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(1);
  });
  it('should return 1 error when day is more than 31', () => {
    const startDate = {
      day: '32',
      month: '1',
      year: '2018'
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(1);
  });

  it('should return 1 error when month is missing', () => {
    const startDate = {
      day: '1',
      month: '',
      year: '2018'
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(1);
  });
  it('should return 1 error when month is 0', () => {
    const startDate = {
      day: '1',
      month: '0',
      year: '2018'
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(1);
  });
  it('should return 1 error when month is more than 12', () => {
    const startDate = {
      day: '1',
      month: '13',
      year: '2018'
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(1);
  });

  it('should return 1 error when year is missing', () => {
    const startDate = {
      day: '1',
      month: '1',
      year: ''
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(1);
  });
  it('should return 1 error when year is less than 4 characters', () => {
    const startDate = {
      day: '1',
      month: '1',
      year: '18'
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(1);
  });

  it('should return 1 error when day is more than 31', () => {
    const startDate = {
      day: '32',
      month: '1',
      year: '2018'
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(1);
  });

  it('should return 1 error when 30 is entered for February', () => {
    const startDate = {
      day: '30',
      month: '2',
      year: '2018'
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(1);
  });
  it('should return 1 error when 31 is entered for April', () => {
    const startDate = {
      day: '31',
      month: '4',
      year: '2018'
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(1);
  });
  it('should return 1 error when 31 is entered for June', () => {
    const startDate = {
      day: '31',
      month: '6',
      year: '2018'
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(1);
  });
  it('should return 1 error when 31 is entered for September', () => {
    const startDate = {
      day: '31',
      month: '9',
      year: '2018'
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(1);
  });
  it('should return 1 error when 31 is entered for November', () => {
    const startDate = {
      day: '31',
      month: '11',
      year: '2018'
    };
    let errors = [];
    errors = validateStartDate(startDate, errors);
    expect(errors.length).to.equal(1);
  });
});
