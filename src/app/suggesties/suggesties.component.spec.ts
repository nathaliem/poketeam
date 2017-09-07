import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestiesComponent } from './suggesties.component';

describe('SuggestiesComponent', () => {
  let component: SuggestiesComponent;
  let fixture: ComponentFixture<SuggestiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
