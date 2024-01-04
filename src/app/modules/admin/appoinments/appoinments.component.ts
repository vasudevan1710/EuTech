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
  // verticalStepperForm: UntypedFormGroup;
  panelColor = new FormControl('red');
  panelColor1 = new FormControl('red');
  // componentVisibility: boolean = true;
  AlphaNumeric = true;
  indeterminate = false;
  finaldata : any =[];
  checked = true;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog) { }
  toppings = new FormControl('');
  @ViewChild(MatPaginator) paginator: MatPaginator;
  toppingList: string[] = ['Email', 'Hand Phone(SMS)', 'Pager'];
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
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

// @ViewChild(MatPaginator) _paginator!:MatPaginator;
@ViewChild(MatSort) _sort!:MatSort;

displayedColumns: string[] = ['ICNo', 'PatientName', 'Age','QNo','Remark','RegTime','TriageComplaints'];
dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

public matTableConfig(tableRecords: any[]): void {
  this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  this.dataSource.paginator=this.paginator;
  this.dataSource.sort=this._sort;
}
displayedColumns1: string[] = ['SuspectDrug', 'ParentDrug','DrugAllergy', 'Startdate','EndDate'];
dataSource1: any = new MatTableDataSource([]);
objAction: any = {
  isEditing: false,
  isView: false
};

// displayedColumns: string[] = ['Altername', 'Status', 'Startdate','EndDate'];
// dataSource: any = new MatTableDataSource([]);

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

export interface PeriodicElement {
  ICNo: string;
  PatientName: string;
  Age: number;
  QNo: string;
  Remark: string;
  RegTime: string;
  TriageComplaints: string;
}
export interface PeriodicElement1 {
  ICNo: string;
  PatientName: string;
  CaseNo: string;
  Status: string;
  TimeStarted: string;
  TriageComplaints: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {ICNo: 'SA 4815962', PatientName: 'TAN KOK MENG PAUL', Age: 24, QNo: 'Amb',Remark:'',RegTime:'14.40.00',TriageComplaints:''},
  {ICNo: 'SA 4815963', PatientName: 'SEAH AYAM THNG', Age: 43, QNo: 'Amb',Remark:'',RegTime:'12:45:00',TriageComplaints:''},
  {ICNo: 'SA 4815964', PatientName: 'KHASMEIR', Age: 43, QNo: 'Amb',Remark:'',RegTime:'12:45:00',TriageComplaints:''},
  {ICNo: 'SA 4815965', PatientName: 'KHASMEIR', Age: 43, QNo: 'Amb',Remark:'',RegTime:'12:45:00',TriageComplaints:''},
  {ICNo: 'SA 481594', PatientName: 'KHASMEIR', Age: 43, QNo: 'Amb',Remark:'',RegTime:'12:45:00',TriageComplaints:''},

];
