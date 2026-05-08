import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSectionComponent } from './c-section.component';

describe('CSectionComponent', () => {
  let component: CSectionComponent;
  let fixture: ComponentFixture<CSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
