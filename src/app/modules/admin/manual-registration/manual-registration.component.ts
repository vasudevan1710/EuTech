import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientsService } from 'app/modules/Service/patients.service';

@Component({
  selector: 'manual-registration',
  templateUrl: './manual-registration.component.html',
  styleUrls: ['./manual-registration.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class ManualRegistrationComponent {
  isLinear = false;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private _formBuilder: FormBuilder,private fb: FormBuilder,private patients:PatientsService) {}
  myForm: FormGroup;
  ngOnInit() {
    this.myForm = this.fb.group({
      icNumber: [''],
      gender: [''],
      hrn: [''],
      nursing: [''],
      mr: [''],
      name: [''],
      sex: [''],
      dob: [''],
      age: [''],
      wardBed: [''],
    });
  }

  onSubmit() {
    this.patients.addPatient(this.myForm.value).subscribe({
      next: (data: any) => {
        // Handle successful response
        console.log(data);
      },
      error: (error: any) => {
        // Handle error
        console.error(error);
      }
    });
  }
  
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Steroid therapy', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Asthma', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'G6PD Deficiency', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Blood Transfusion Reaction', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Anti Coagulant Therapy', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Hepatitis', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Epilepsy', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Hemophilia', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Diabetes Therapy', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Thalassaemia', weight: 20.1797, symbol: 'Ne'},
];