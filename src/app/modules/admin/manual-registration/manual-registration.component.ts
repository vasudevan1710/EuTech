import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
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

  nextTab(tabGroup: MatTabGroup): void {
    const selectedIndex = tabGroup.selectedIndex;
    const tabCount = tabGroup._tabs.length;

    // Check if there's a next tab
    if (selectedIndex < tabCount - 1) {
      // Increment the selected index to move to the next tab
      tabGroup.selectedIndex = selectedIndex + 1;
    }
  }

  backTab(tabGroup: MatTabGroup): void {
    const selectedIndex = tabGroup.selectedIndex;

    // Check if there's a previous tab
    if (selectedIndex > 0) {
      // Decrement the selected index to move to the previous tab
      tabGroup.selectedIndex = selectedIndex - 1;
    }
  }





  isLinear = false;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private _formBuilder: FormBuilder,private fb: FormBuilder,private patients:PatientsService) {}
  myForm: FormGroup;
  ngOnInit() {
    this.myForm = this.fb.group({
      Identifier: [''],
 _orgcode:[''],
 Hrn: [''],
 Idno: [''],
 Idtype: [''],
 Name:[''],
 CreatedBy:[''],
 CreatedDate: [''],
 ModifiedBy:[''],
 ModifiedDate: [''],
 Merged:[''],
 Sex: [''],
 Race:[''],
 Dob: [''],
 ResidenceCode:[''],
 Tel: [''],
 Tel2: [''],
 Tel3: [''],
 Tel4: [''],
 Address1: [''],
 Address2: [''],
 Address3: [''],
 Address4: [''],
 PostalCode: [''],
 Country:[''],
 Email: [''],
 AlertEmail:[''],
 AlertSms: [''],
 OrganDonor: [''],
 BloodGroup: [''],
 Nationality: [''],
 PlaceOfBirth:[''],
 VipStatus:[''],
 LanguageCode: [''],
 TitleCode: [''],
 Remarks: [''],
 Education: [''],
 Occupation: [''],
 SpeakEnglish: [''],
 MaritalStatus: [''],
 Religion:['']
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