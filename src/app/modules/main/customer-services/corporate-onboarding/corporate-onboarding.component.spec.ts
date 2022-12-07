import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateOnboardingComponent } from './corporate-onboarding.component';

describe('CorporateOnboardingComponent', () => {
  let component: CorporateOnboardingComponent;
  let fixture: ComponentFixture<CorporateOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateOnboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
