import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DoctorComponent } from './doctor.component';
import { DoctorService } from './doctor.service';

describe('Doctor component', () => {

  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        DoctorComponent
      ],
      providers: [
        DoctorService
      ],
      imports: [
        HttpClientModule
      ]
    });

    fixture = TestBed.createComponent( DoctorComponent );
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect( component ).toBeTruthy();
  });

  it('Should return name doctor', () => {
    const name = 'Lalito';
    const res = component.greetingDoctor( name );

    expect( res ).toContain( name );
  });


});
