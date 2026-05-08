import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideMenuComponent } from './guide-menu.component';

describe('GuideMenuComponent', () => {
  let component: GuideMenuComponent;
  let fixture: ComponentFixture<GuideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
