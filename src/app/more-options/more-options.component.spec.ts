import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOptions } from './more-options.component';

describe('MoreOptions', () => {
  let component: MoreOptions;
  let fixture: ComponentFixture<MoreOptions>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreOptions ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
