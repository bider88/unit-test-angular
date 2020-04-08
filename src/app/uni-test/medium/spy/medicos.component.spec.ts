import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs/index';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const service = new MedicosService(null);

    beforeEach( () => {
      componente = new MedicosComponent(service);
    });


    it('#Init: Should load doctors', () => {
      const medicos = [ 'medico1', 'medico2', 'medico3' ];

      spyOn( service, 'getMedicos' ).and.callFake( () => {
        return from( [ medicos ]);
      });

      componente.ngOnInit();
      expect( componente.medicos.length ).toBeGreaterThan( 0 );
    });

    it('Should call the server to add doctor', () => {
      const spy = spyOn( service, 'agregarMedico' ).and.callFake( () => {
        return empty();
      });

      componente.agregarMedico();

      expect( spy ).toHaveBeenCalled();
    });

    it('Should add a new doctos to array of doctors', () => {
      const medico = { id: 1, nombre: 'Lomelí'};

      spyOn( service, 'agregarMedico' ).and.returnValue( from( [ medico ] ) );

      componente.agregarMedico();

      expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual( 0 );
    });

    it('Should be equal to error service to the propertie error, if la addition to the service fail', () => {
      const myError = 'Fail to add doctor';

      spyOn( service, 'agregarMedico' ).and.returnValue( throwError( myError ) );

      componente.agregarMedico();

      expect( componente.mensajeError ).toBe( myError );
    });

    it('Should call the server to delete a doctor', () => {

      spyOn( window, 'confirm' ).and.returnValue( true );

      const spy = spyOn( service, 'borrarMedico' ).and.returnValue( empty() );

      componente.borrarMedico('1');

      expect( spy ).toHaveBeenCalledWith('1');
    });

    it('Should NOT call the server to delete a doctor', () => {

      spyOn( window, 'confirm' ).and.returnValue( false );

      const spy = spyOn( service, 'borrarMedico' ).and.returnValue( empty() );

      componente.borrarMedico('1');

      expect( spy ).not.toHaveBeenCalledWith('1');
    });

});
