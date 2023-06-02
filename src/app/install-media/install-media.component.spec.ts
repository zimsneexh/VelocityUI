import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallMediaComponent } from './install-media.component';

describe('InstallMediaComponent', () => {
  let component: InstallMediaComponent;
  let fixture: ComponentFixture<InstallMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallMediaComponent]
    });
    fixture = TestBed.createComponent(InstallMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
