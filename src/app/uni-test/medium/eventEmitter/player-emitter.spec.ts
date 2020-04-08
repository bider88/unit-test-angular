import { PlayerEmitter } from './player-emitter';

describe('PlayerEmitter', () => {

  let player: PlayerEmitter;

  beforeEach( () => player = new PlayerEmitter() );

  it('Should emit an event when player receives damages', () => {

    let newHP = 0;

    player.hpChange.subscribe( (hp: number) => newHP = hp );

    player.receivesDamage( 1000 );

    expect( newHP ).toBe( 0 );
  });

  it('Should emit an event when player receives damages and survivor if damage is smaller that 100', () => {

    let newHP = 0;

    player.hpChange.subscribe( (hp: number) => newHP = hp );

    player.receivesDamage( 50 );

    expect( newHP ).toBe( 50 );
  });

});

