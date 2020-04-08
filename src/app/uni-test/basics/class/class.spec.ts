import { Player } from './class';

describe('Class tests', () => {

  let player = new Player();
  let damage = 30;

  beforeAll( () => {
    console.log('beforeAll');
  });

  beforeEach( () => {
    console.log('beforeEach');
    player = new Player();
  });

  afterAll( () => {
    console.log('afterAll');
  });

  afterEach( () => {
    console.log('afterEach');
  });


  it('Should return 70 high power if damage is 30', () => {
    const res = player.receivesDamage(damage);

    expect( res ).toBe( 70 );
    damage = 50;
  });

  it('Should return 50 high power if damage is 50', () => {
    const res = player.receivesDamage(damage);

    expect( res ).toBe( 50 );
    damage = 100;
  });

  it('Should return 0 high power if damage is 100', () => {
    const res = player.receivesDamage(damage);

    expect( res ).toBe( 0 );
  });
});
