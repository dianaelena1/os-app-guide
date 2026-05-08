import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsSectionComponent } from './basics-section.component';

describe('BasicsSectionComponent', () => {
  let component: BasicsSectionComponent;
  let fixture: ComponentFixture<BasicsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
