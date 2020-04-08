import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html'
})
export class DoctorComponent implements OnInit {

  doctors: any;

  constructor(
    private doctorService: DoctorService
  ) { }

  ngOnInit() {
  }

  greetingDoctor(name: string) {
    return `Hello ${name}`;
  }

  getDoctors() {
    this.doctorService.getDoctors().subscribe(
      doctors => this.doctors = doctors
    );
  }

}
