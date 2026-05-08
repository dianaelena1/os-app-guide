import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrepSectionComponent } from './grep-section.component';

describe('GrepSectionComponent', () => {
  let component: GrepSectionComponent;
  let fixture: ComponentFixture<GrepSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrepSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrepSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
