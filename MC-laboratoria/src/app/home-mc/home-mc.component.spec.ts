import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMCComponent } from './home-mc.component';

describe('HomeMCComponent', () => {
  let component: HomeMCComponent;
  let fixture: ComponentFixture<HomeMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
