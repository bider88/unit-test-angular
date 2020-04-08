import { message } from './string';

describe( 'String Tests', () => {

  it( 'Should return string', () => {
    const res = message('Didier');
    expect( typeof res ).toBe('string');
  });

  it( 'Should return a message based on the paramater', () => {
    const name = 'Fulano';
    const res = message( name );
    expect( res ).toContain( name );
  });

});
