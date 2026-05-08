import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideSidebarComponent } from './guide-sidebar.component';

describe('GuideSidebarComponent', () => {
  let component: GuideSidebarComponent;
  let fixture: ComponentFixture<GuideSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
