import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWeatherDataComponent } from './modal-weather-data.component';

describe('ModalWeatherDataComponent', () => {
  let component: ModalWeatherDataComponent;
  let fixture: ComponentFixture<ModalWeatherDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalWeatherDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWeatherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
