import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMListComponent } from './vmlist.component';

describe('VMListComponent', () => {
  let component: VMListComponent;
  let fixture: ComponentFixture<VMListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VMListComponent]
    });
    fixture = TestBed.createComponent(VMListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
