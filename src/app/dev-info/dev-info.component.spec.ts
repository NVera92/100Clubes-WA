import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevInfoComponent } from './dev-info.component';

describe('DevInfoComponent', () => {
  let component: DevInfoComponent;
  let fixture: ComponentFixture<DevInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevInfoComponent]
    });
    fixture = TestBed.createComponent(DevInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
