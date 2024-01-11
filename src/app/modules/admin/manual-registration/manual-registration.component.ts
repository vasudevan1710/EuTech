import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { Route } from '@angular/router';
import { PatientsService } from 'app/modules/Service/patients.service';
import { result } from 'lodash';

@Component({
  selector: 'manual-registration',
  templateUrl: './manual-registration.component.html',
  styleUrls: ['./manual-registration.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },DatePipe,DecimalPipe
  ],
})
export class ManualRegistrationComponent {
  isLinear = false;
  displayedColumns: string[] = ['Sno', 'HRN_No', 'Name', 'DBO','Sex','Speaking_English','Action'];
patientlist : any =[];

 objload : any ={
  HRN:'',
 }


  dataSource = ELEMENT_DATA;
  constructor(
    private fb: FormBuilder,
    private patientservice:PatientsService,
    // public _router : Route,
    public _datepipe : DatePipe) {

    }
  myForm: FormGroup;
  ngOnInit() {
    this.patientservice.getPatients().subscribe({
      next: (data: any) => {
      // Handle successful response
        console.log(data);
       },
    error: (error: any) => {
        // Handle error
        console.error(error);
      }
   });
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

  public ContractManPowerList(): void {
    this.patientlist = [];
    let obj = {
      HRN: +this.objload.HRN,
    };
    this.patientservice.getsearchpatient(obj).subscribe((result) => {
      if (result) {
        this.patientlist = result;
        console.log(this.patientlist, 'ContractServiceList')
      }
    })
  }

  onSubmit() {
    // // this.patients.addPatient(this.myForm.value).subscribe({
    // //   next: (data: any) => {
    // //     // Handle successful response
    // //     console.log(data);
    // //   },
    // //   error: (error: any) => {
    // //     // Handle error
    // //     console.error(error);
    //   }
    // });
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
