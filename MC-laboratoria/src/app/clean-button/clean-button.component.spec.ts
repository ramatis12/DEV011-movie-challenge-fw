import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanButtonComponent } from './clean-button.component';

describe('CleanButtonComponent', () => {
  let component: CleanButtonComponent;
  let fixture: ComponentFixture<CleanButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
