import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoBComponent } from './grupo-b.component';

describe('GrupoBComponent', () => {
  let component: GrupoBComponent;
  let fixture: ComponentFixture<GrupoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
