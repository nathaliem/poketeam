import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoketeamComponent } from './poketeam.component';

describe('PoketeamComponent', () => {
  let component: PoketeamComponent;
  let fixture: ComponentFixture<PoketeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoketeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoketeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
