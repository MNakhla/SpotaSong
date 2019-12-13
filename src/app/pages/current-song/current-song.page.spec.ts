import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSongPage } from './current-song.page';

describe('CurrentSongPage', () => {
  let component: CurrentSongPage;
  let fixture: ComponentFixture<CurrentSongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentSongPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
