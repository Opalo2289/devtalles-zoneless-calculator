import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricinPageComponent } from './pricin-page.component';

describe('PricinPageComponent', () => {
  let component: PricinPageComponent;
  let fixture: ComponentFixture<PricinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricinPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
