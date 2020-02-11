import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DniFormComponent } from './dni-form.component';

describe('DniFormComponent', () => {
  let component: DniFormComponent;
  let fixture: ComponentFixture<DniFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DniFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DniFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
