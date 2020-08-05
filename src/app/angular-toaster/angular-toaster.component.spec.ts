import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularToasterComponent } from './angular-toaster.component';

describe('AngularToasterComponent', () => {
  let component: AngularToasterComponent;
  let fixture: ComponentFixture<AngularToasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularToasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
