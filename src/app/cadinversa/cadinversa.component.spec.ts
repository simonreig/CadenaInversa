import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadinversaComponent } from './cadinversa.component';

describe('CadinversaComponent', () => {
  let component: CadinversaComponent;
  let fixture: ComponentFixture<CadinversaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadinversaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadinversaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
