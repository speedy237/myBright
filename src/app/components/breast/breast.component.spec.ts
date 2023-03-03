import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreastComponent } from './breast.component';

describe('BreastComponent', () => {
  let component: BreastComponent;
  let fixture: ComponentFixture<BreastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
