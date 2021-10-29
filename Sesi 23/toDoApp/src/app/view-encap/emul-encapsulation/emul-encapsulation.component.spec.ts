import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulEncapsulationComponent } from './emul-encapsulation.component';

describe('EmulEncapsulationComponent', () => {
  let component: EmulEncapsulationComponent;
  let fixture: ComponentFixture<EmulEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmulEncapsulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
