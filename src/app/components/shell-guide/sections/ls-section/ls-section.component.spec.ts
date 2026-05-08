import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsSectionComponent } from './ls-section.component';

describe('LsSectionComponent', () => {
  let component: LsSectionComponent;
  let fixture: ComponentFixture<LsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
