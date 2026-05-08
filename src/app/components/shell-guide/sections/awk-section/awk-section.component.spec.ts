import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwkSectionComponent } from './awk-section.component';

describe('AwkSectionComponent', () => {
  let component: AwkSectionComponent;
  let fixture: ComponentFixture<AwkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwkSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
