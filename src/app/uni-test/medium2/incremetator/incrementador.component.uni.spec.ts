import { IncrementadorComponent } from './incrementador.component';

describe('Incrementator Component Unit', () => {

  let component: IncrementadorComponent;

  beforeEach(() => component = new IncrementadorComponent);

  it('Should not pass 100 value the progress', () => {
    component.progreso = 50;

    component.cambiarValor(5);

    expect(component.progreso).toBe(55);
  });

});
