import { increment } from './number';

describe('Number tests', () => {
  it('Should return 100 if number is greater than 100', () => {
    const res = increment( 300 );
    expect( res ).toBe( 100 );
  });

  it('Should return number entered plus one, if is not smaller that 100', () => {
    const number = 50;
    const res = increment( number );
    expect( res ).toBe( number + 1 );
  });
});
