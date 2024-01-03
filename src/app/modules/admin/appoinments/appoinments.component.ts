import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.scss']
})
export class AppoinmentsComponent implements OnInit {
  myDateValue!: Date ;
  // public routes = routes;
  date = new Date();
  // verticalStepperForm: UntypedFormGroup;
  panelColor = new FormControl('red');
  panelColor1 = new FormControl('red');
  // componentVisibility: boolean = true;
  AlphaNumeric = true;
  indeterminate = false;
  finaldata : any =[];
  checked = true;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  minDate: Date;
  maxDate: Date;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog) { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  toppings = new FormControl('');

  toppingList: string[] = ['Email', 'Hand Phone(SMS)', 'Pager'];
  ngOnInit(): void {
    this.myDateValue = new Date();

}
onDateChange(newDate: Date) {
  console.log(newDate);
}

firstFormGroup = this._formBuilder.group({
  firstCtrl: ['', Validators.required],
});

secondFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
thirdFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
fourthFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
fifthFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
sixFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});

@ViewChild(MatPaginator) _paginator!:MatPaginator;
@ViewChild(MatSort) _sort!:MatSort;

displayedColumns: string[] = ['Desc', 'Start', 'End','%Sts','Lmt','TB'];
dataSource: any = new MatTableDataSource([ELEMENT_DATA]);

displayedColumns1: string[] = ['Starttime', 'SlotBooking','TotNc', 'TotFp'];
dataSource1: any = new MatTableDataSource([]);
objAction: any = {
  isEditing: false,
  isView: false
};

unChangedAction: any = {
  isEditing: false,
  isView: false
};
@ViewChild('select') select: MatSelect;

allSelected=false;
 foods: any[] = [
  {value: 'steak-0', viewValue: 'Email'},
  {value: 'pizza-1', viewValue: 'Hand Phone(SMS)'},
  {value: 'tacos-2', viewValue: 'Pager'}
];
toggleAllSelection() {
  if (this.allSelected) {
    this.select.options.forEach((item: MatOption) => item.select());
  } else {
    this.select.options.forEach((item: MatOption) => item.deselect());
  }
}
value = 'Clear me';
 optionClick() {
  let newStatus = true;
  this.select.options.forEach((item: MatOption) => {
    if (!item.selected) {
      newStatus = false;
    }
  });
  this.allSelected = newStatus;
}
dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
  // Only highligh dates inside the month view.
  if (view === 'month') {
    const date = cellDate.getDate();

    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? 'example-custom-date-class' : '';
  }

  return '';
};

focusFlag: boolean = false;


}


  
  
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}