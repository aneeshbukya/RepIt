import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutResultsComponent } from './workout-results.component';

describe('WorkoutResultsComponent', () => {
  let component: WorkoutResultsComponent;
  let fixture: ComponentFixture<WorkoutResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkoutResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
