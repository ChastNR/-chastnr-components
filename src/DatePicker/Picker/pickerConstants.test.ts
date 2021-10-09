import { getMonthDays, getMonthFirstDay, zeroPad } from './pickerConstants';

describe('pickerConstants', () => {
  it('zeroPad should return expected value', () => {
    const result = zeroPad('test', 5);

    expect(result).toMatch('0test');
  });

  it(`getMonthDays should return expected value when
   month not equal 2 and not in month with 30 days`, () => {
    const month = +new Date('01/01/1990').getMonth() + 1;

    const result = getMonthDays(month);

    expect(result).toBe(31);
  });

  it(`getMonthDays should return expected value when
   month not equal 2 and in month with 30 days`, () => {
    const month = +new Date('04/01/1990').getMonth() + 1;

    const result = getMonthDays(month);

    expect(result).toBe(30);
  });

  it(`getMonthDays should return expected value when
   month equal 2 and year is leap year`, () => {
    const date = new Date('02/01/1992');
    const month = +date.getMonth() + 1;
    const year = +date.getFullYear();

    const result = getMonthDays(month, year);

    expect(result).toBe(29);
  });

  it(`getMonthDays should return expected value when
   month equal 2 and year is not leap year`, () => {
    const date = new Date('02/01/1991');
    const month = +date.getMonth() + 1;
    const year = +date.getFullYear();

    const result = getMonthDays(month, year);

    expect(result).toBe(28);
  });

  it('getMonthFirstDay should return expected value', () => {
    const date = new Date('02/01/1991');
    const month = +date.getMonth() + 1;
    const year = +date.getFullYear();

    const result = getMonthFirstDay(month, year);

    expect(result).toBe(6);
  });
});
