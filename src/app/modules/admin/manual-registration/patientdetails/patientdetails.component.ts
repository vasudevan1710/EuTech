import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { PatientsService } from 'app/modules/Service/patients.service';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.scss']
})
export class PatientdetailsComponent implements OnInit {
 
 
  constructor(private patients:PatientsService) {}
  myForm: FormGroup;

  ngOnInit(): void {
    
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
  
  backTab(tabGroup: MatTabGroup): void {
    const selectedIndex = tabGroup.selectedIndex;

    // Check if there's a previous tab
    if (selectedIndex > 0) {
      // Decrement the selected index to move to the previous tab
      tabGroup.selectedIndex = selectedIndex - 1;
    }
  }
  nextTab(tabGroup: MatTabGroup): void {
    const selectedIndex = tabGroup.selectedIndex;
    const tabCount = tabGroup._tabs.length;

    // Check if there's a next tab
    if (selectedIndex < tabCount - 1) {
      // Increment the selected index to move to the next tab
      tabGroup.selectedIndex = selectedIndex + 1;
    }
  }

}


