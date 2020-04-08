import { userEntered } from './boolean';

describe('Boolean tests', () => {
  it('Should return true', () => {
    const res = userEntered();
    // Verifica que sea verdadero, para falso es <<expect( res ).toBeFalsy()>>, o también <<expect( res ).not.toBeTruthy()>>
    expect( res ).toBeTruthy();
  });
});
