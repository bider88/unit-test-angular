import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Should display legend', () => {
      const textLoad = 'Progreso de carga';
      component.leyenda = textLoad;

      fixture.detectChanges(); // Init change detect

      // By, it permets to manage elements in the front
      const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

      expect( elem.innerHTML ).toContain(textLoad);

    });

    it('Should display progress value', () => {
      component.cambiarValor(5);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        const input = fixture.debugElement.query(By.css('input'));
        const elem = input.nativeElement;

        expect(elem.value).toBe('55');
      });
    });

    it('Shoul decrement 5, with event click in button', () => {

      const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));

      buttons[0].triggerEventHandler('click', null);
      expect(component.progreso).toBe(45);

      buttons[1].triggerEventHandler('click', null);
      expect(component.progreso).toBe(50);
    });

    it('Should display progress value 45', () => {
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));

        buttons[0].triggerEventHandler('click', null);

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect( elem.innerHTML ).toContain('45');
      });
    });
});
