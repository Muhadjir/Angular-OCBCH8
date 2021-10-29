import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowdomEncapsulationComponent } from './shadowdom-encapsulation.component';

describe('ShadowdomEncapsulationComponent', () => {
  let component: ShadowdomEncapsulationComponent;
  let fixture: ComponentFixture<ShadowdomEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowdomEncapsulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowdomEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
