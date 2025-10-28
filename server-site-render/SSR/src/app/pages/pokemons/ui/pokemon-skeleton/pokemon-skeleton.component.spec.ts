import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSkeletonComponent } from './pokemon-skeleton.component';

describe('PokemonSkeletonComponent', () => {
  let component: PokemonSkeletonComponent;
  let fixture: ComponentFixture<PokemonSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
