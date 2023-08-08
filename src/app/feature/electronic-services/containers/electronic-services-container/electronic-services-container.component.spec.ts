import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicServicesContainerComponent } from './electronic-services-container.component';

describe('ElectronicServicesComponent', () => {
  let component: ElectronicServicesContainerComponent;
  let fixture: ComponentFixture<ElectronicServicesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicServicesContainerComponent],
    });
    fixture = TestBed.createComponent(ElectronicServicesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
