import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChmodSectionComponent } from './chmod-section.component';

describe('ChmodSectionComponent', () => {
  let component: ChmodSectionComponent;
  let fixture: ComponentFixture<ChmodSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChmodSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChmodSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
