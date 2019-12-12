import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresViewComponent } from './genres-view.component';

describe('GenresViewComponent', () => {
  let component: GenresViewComponent;
  let fixture: ComponentFixture<GenresViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenresViewComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
