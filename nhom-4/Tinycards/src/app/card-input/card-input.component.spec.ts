import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInputComponent } from './card-input.component';

describe('CardInputComponent', () => {
  let component: CardInputComponent;
  let fixture: ComponentFixture<CardInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
