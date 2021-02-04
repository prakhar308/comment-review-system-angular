import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeRatingComponent } from './attribute-rating.component';

describe('AttributeRatingComponent', () => {
  let component: AttributeRatingComponent;
  let fixture: ComponentFixture<AttributeRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
