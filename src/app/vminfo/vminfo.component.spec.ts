import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VminfoComponent } from './vminfo.component';

describe('VminfoComponent', () => {
  let component: VminfoComponent;
  let fixture: ComponentFixture<VminfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VminfoComponent]
    });
    fixture = TestBed.createComponent(VminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
