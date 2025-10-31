import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPageDetailComponent } from './pokemon-page-detail.component';

describe('PokemonPageDetailComponent', () => {
  let component: PokemonPageDetailComponent;
  let fixture: ComponentFixture<PokemonPageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonPageDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
