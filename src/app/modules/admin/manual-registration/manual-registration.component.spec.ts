import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualRegistrationComponent } from './manual-registration.component';

describe('ManualRegistrationComponent', () => {
  let component: ManualRegistrationComponent;
  let fixture: ComponentFixture<ManualRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
