import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsListByTypeComponent } from './pokemons-list-by-type.component';

describe('PokemonsListByTypeComponent', () => {
  let component: PokemonsListByTypeComponent;
  let fixture: ComponentFixture<PokemonsListByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsListByTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsListByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
