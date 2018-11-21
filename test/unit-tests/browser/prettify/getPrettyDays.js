'use-strict';

const {expect} = require('chai');
const {getPrettyDays} = require('../../../../functions/browser/prettify');

describe('getPrettyDays(days)', () => {
  it('should return "5 full days" when days = f, f, f, f, f', () => {
    const days = ['full', 'full', 'full', 'full', 'full'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('5 full days');
  });
  it('should return "4 fulls days" when days = f, f, f, f, n', () => {
    const days = ['full', 'full', 'full', 'full', 'none'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('4 full days');
  });
  it('should return "3 full days" when days = f, f, f, n, n', () => {
    const days = ['full', 'full', 'full', 'none', 'none'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('3 full days');
  });
  it('should return "2 full days" when days = f, f, n, n, n', () => {
    const days = ['full', 'full', 'none', 'none', 'none'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('2 full days');
  });
  it('should return "1 full day" when days = f, n, n, n, n', () => {
    const days = ['full', 'none', 'none', 'none', 'none'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('1 full day');
  });

  it('should return "4 full days and 1 half day" when days = f, f, f, f, h', () => {
    const days = ['full', 'full', 'full', 'full', 'half'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('4 full days and 1 half day');
  });
  it('should return "3 full days and 2 half days" when days = f, f, f, h, h', () => {
    const days = ['full', 'full', 'full', 'half', 'half'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('3 full days and 2 half days');
  });
  it('should return "2 full days and 3 half days" when days = f, f, h, h, h', () => {
    const days = ['full', 'full', 'half', 'half', 'half'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('2 full days and 3 half days');
  });
  it('should return "1 full day and 4 full days" when days = f, h, h, h, h', () => {
    const days = ['full', 'half', 'half', 'half', 'half'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('1 full day and 4 half days');
  });

  it('should return "3 full days and 1 half day" when days = f, f, f, h, n', () => {
    const days = ['full', 'full', 'full', 'half', 'none'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('3 full days and 1 half day');
  });
  it('should return "2 full days and 2 half days" when days = f, f, h, h, n', () => {
    const days = ['full', 'full', 'half', 'half', 'none'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('2 full days and 2 half days');
  });
  it('should return "1 full day and 3 half days" when days = f, h, h, h, n', () => {
    const days = ['full', 'half', 'half', 'half', 'none'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('1 full day and 3 half days');
  });

  it('should return "2 full days and 1 half day" when days = f, f, h, n, n', () => {
    const days = ['full', 'full', 'half', 'none', 'none'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('2 full days and 1 half day');
  });
  it('should return "1 full day and 2 half days" when days = f, h, h, n, n', () => {
    const days = ['full', 'half', 'half', 'none', 'none'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('1 full day and 2 half days');
  });

  it('should return "1 full day and 1 half day" when days = f, h, n, n, n', () => {
    const days = ['full', 'half', 'none', 'none', 'none'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('1 full day and 1 half day');
  });

  it('should return "5 half days" when days = h, h, h, h, h', () => {
    const days = ['half', 'half', 'half', 'half', 'half'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('5 half days');
  });
  it('should return "4 half days" when days = h, h, h, h, n', () => {
    const days = ['half', 'half', 'half', 'half', 'none'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('4 half days');
  });
  it('should return "3 half days" when days = h, h, h, n, n', () => {
    const days = ['half', 'half', 'half', 'none', 'none'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('3 half days');
  });
  it('should return "2 half days" when days = h, h, n, n, n', () => {
    const days = ['half', 'half', 'none', 'none', 'none'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('2 half days');
  });
  it('should return "1 half day" when days = h, n, n, n, n', () => {
    const days = ['half', 'none', 'none', 'none', 'none'];
    const prettyDays = getPrettyDays(days);
    expect(prettyDays).equal('1 half day');
  });
});
