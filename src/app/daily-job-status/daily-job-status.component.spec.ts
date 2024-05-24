import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyJobStatusComponent } from './daily-job-status.component';

describe('DailyJobStatusComponent', () => {
  let component: DailyJobStatusComponent;
  let fixture: ComponentFixture<DailyJobStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyJobStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyJobStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
