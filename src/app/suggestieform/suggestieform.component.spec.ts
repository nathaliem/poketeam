import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestieformComponent } from './suggestieform.component';

describe('SuggestieformComponent', () => {
  let component: SuggestieformComponent;
  let fixture: ComponentFixture<SuggestieformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestieformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestieformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
