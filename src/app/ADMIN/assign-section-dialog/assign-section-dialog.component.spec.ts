import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSectionDialogComponent } from './assign-section-dialog.component';

describe('AssignSectionDialogComponent', () => {
  let component: AssignSectionDialogComponent;
  let fixture: ComponentFixture<AssignSectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignSectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
