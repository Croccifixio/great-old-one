import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhNoComponent } from './oh-no.component';

describe('OhNoComponent', () => {
  let component: OhNoComponent;
  let fixture: ComponentFixture<OhNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
